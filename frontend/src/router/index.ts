import { useUserStore } from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/pages/public/login/Login.vue";
import Layout from "@/views/layouts/Layout.vue";
import Home from "@/views/pages/public/Home.vue";
import Test from "@/views/pages/public/Test.vue";
import Projects from "@/views/pages/admin/project/Project.vue";
import Locations from "@/views/pages/admin/location/Location.vue";
import ProjectsOfYear from "@/views/pages/admin/projectsOfYear/ProjectsOfYear.vue";
import MembersTypes from "@/views/pages/admin/memberType/MemberType.vue";

import SupplyOrder from "@/views/pages/user/supplyOrder/SupplyOrder.vue";
import RecivedOrder from "@/views/pages/user/recivedOrder/RecivedOrder.vue";
import Pending from "@/views/pages/user/pending/Pending.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "/projects",
          name: "projects",
          component: Projects,
        },
        {
          path: "/locations",
          name: "locations",
          component: Locations,
        },
        {
          path: "/projectsOfYear",
          name: "projectsOfYear",
          component: ProjectsOfYear,
        },
        {
          path: "/membersTypes",
          name: "membersTypes",
          component: MembersTypes,
        },
        {
          path: "/test",
          name: "test",
          component: Test,
        },
        {
          path: "/supplyOrder",
          name: "supplyOrder",
          component: SupplyOrder,
        },
        {
          path: "/recivedOrder",
          name: "recivedOrder",
          component: RecivedOrder,
        },
        {
          path: "/pending",
          name: "pending",
          component: Pending,
        },
      ],
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});
router.beforeEach((to, from, next) => {
  const user = useUserStore();

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    const roles = to.meta.roles;
    // console.log(roles);
    if (!user.getUser().USER_ID) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});
function hasPermission(role: any, roles: any) {
  if (roles?.includes(role)) {
    return true;
  } else {
    return false;
  }
}

export default router;
