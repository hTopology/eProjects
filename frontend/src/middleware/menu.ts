const statcItemsInMenu = [{ routerName: "profile", name: "profile" }];
import HomeIcon from "@/views/components/icons/HomeIcon.vue";

const mRequest = { link: "mRequests", name: "material_requests" };
const po = { link: "purchaseOrders", name: "purchase orders" };
const dynamicItemInMenu = {
  1: {
    defaultLinks: [
      { to: "/", linkName: "home", icon: HomeIcon },
      { to: "/projectsOfYear", linkName: "projects of years", icon: HomeIcon },
      { to: "/", linkName: "locations of years", icon: HomeIcon },
    ],
    subLinks: [
      {
        linkName: "setting",
        links: [
          { to: "/projects", linkName: "projects", icon: HomeIcon },
          { to: "/membersTypes", linkName: "members types", icon: HomeIcon },
        ],
      },
      {
        linkName: "setting",
        links: [
          { to: "/projects", linkName: "projects", icon: HomeIcon },
          { to: "/membersTypes", linkName: "members types", icon: HomeIcon },
        ],
      },
    ],
  },
  2: [{ link: "request", name: "new request" }, { ...mRequest }],
  3: [{ ...mRequest }, { ...po }],
  4: [{ ...mRequest }, { ...po }],
  5: [
    { link: "qRequests", name: "quotation requests" },
    { ...mRequest },
    { ...po },
    { link: "priceList", name: "price list" },
  ],
  6: [{ ...po }],
};

export default dynamicItemInMenu;
