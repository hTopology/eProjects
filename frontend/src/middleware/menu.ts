const statcItemsInMenu = [{ routerName: 'profile', name: 'profile' }];

const mRequest = { link: 'mRequests', name: 'material_requests' };
const po = { link: 'purchaseOrders', name: 'purchase orders' };
const dynamicItemInMenu = {
  1: [
    { link: 'projects', name: 'projects' },
    { link: 'users', name: 'users' },
    { link: 'items', name: 'items' },
    { link: 'vendors', name: 'vendors' },
    { link: 'units', name: 'units' },
    { link: 'categories', name: 'categories' },
    { link: 'owners', name: 'owners' }
  ],
  2: [{ link: 'request', name: 'new request' }, { ...mRequest }],
  3: [{ ...mRequest }, { ...po }],
  4: [{ ...mRequest }, { ...po }],
  5: [
    { link: 'qRequests', name: 'quotation requests' },
    { ...mRequest },
    { ...po },
    { link: 'priceList', name: 'price list' }
  ],
  6: [{ ...po }]
};

export default dynamicItemInMenu;
