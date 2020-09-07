import Vue from "vue";
import VueRouter from "vue-router";
import Root from "@/views/vRoot/index.vue";
import Home from "@/views/vHome/index.vue";
import Products from "@/views/vProducts/index.vue";
import DetailProduct from "@/views/vDetailProduct/index.vue";
import Cart from "@/views/vCart/index.vue";
import ShoppingList from "@/views/vShoppingList/index.vue";
import ShoppingDeliveryInfo from "@/views/vShoppingDeliveryInfo/index.vue";
import CheckoutPage from "@/views/vCheckoutPage/index.vue";
import Login from "@/views/vLogin/index.vue";
import Dashboard from "@/views/vDashboard/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "vLogin",
    component: Login
  },
  {
    path: "/dashboard",
    name: "vDashboard",
    component: Dashboard,
    meta: { requiresAuthTesting: true }
  },
  {
    path: "/products",
    redirect: "/products/all-products"
  },
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/",
    name: "vRoot",
    component: Root,
    children: [
      {
        path: "home",
        name: "vHome",
        component: Home
      },
      {
        path: "products/:id?",
        name: "vProducts",
        component: Products
      },
      {
        path: "detail-products/:id?",
        name: "vDetailProduct",
        component: DetailProduct
      },
      {
        path: "cart",
        name: "vCart",
        redirect: "/cart/shopping-list",
        component: Cart,
        children: [
          {
            path: "shopping-list",
            name: "vShoppingList",
            component: ShoppingList
          },
          {
            path: "shopping-delivery-info",
            name: "vShoppingDeliveryInfo",
            component: ShoppingDeliveryInfo
          },
          {
            path: "check-out/:id?",
            name: "vCheckoutPage",
            component: CheckoutPage
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
