const statcItemsInMenu = [{ routerName: "profile", name: "profile" }];

const mRequest = { link: "mRequests", name: "material_requests" };
const po = { link: "purchaseOrders", name: "purchase orders" };
const dynamicItemInMenu = {
  1: [{ to: "/", linkName: "home", icon: "fa-solid fa-house" }],
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
