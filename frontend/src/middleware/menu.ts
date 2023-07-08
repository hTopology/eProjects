const statcItemsInMenu = [{ routerName: "profile", name: "profile" }];
import HomeIcon from "@/views/components/icons/HomeIcon.vue";
import SettingIcon from "@/views/components/icons/SettingIcon.vue"

const mRequest = { link: "mRequests", name: "material_requests" };
const po = { link: "purchaseOrders", name: "purchase orders" };
const dynamicItemInMenu = {
  1: [
    { to: "/", linkName: "home", icon: HomeIcon },
    { to: "/projectsOfYear", linkName: "projects of years", icon: HomeIcon },
    { to: "/supplyOrder", linkName: "supply orders", icon: HomeIcon },
    { to: "/recivedOrder", linkName: "recived orders", icon: HomeIcon },
    { to: "/pending", linkName: "pending orders", icon: HomeIcon },
    {
      linkName: "setting",
      icon: SettingIcon,
      subLinks: [
        { to: "/projects", linkName: "projects", icon: HomeIcon },
        { to: "/membersTypes", linkName: "members types", icon: HomeIcon },
        { to: "/locations", linkName: "locations", icon: HomeIcon },
      ],
    },
  ],
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
