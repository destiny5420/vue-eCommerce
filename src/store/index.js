import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import module_detailProduct from "./detailProductStore";
import module_checkoutPage from "./checkoutPageStore";

Vue.use(Vuex);

const ProductFilter = {
  AllProduct: function(data) {
    return data;
  },
  Women: function(data) {
    let result = data.filter(data => {
      return data.sex === "women";
    });

    return result;
  },
  Men: function(data) {
    let result = data.filter(data => {
      return data.sex === "men";
    });

    return result;
  },
  Kids: function(data) {
    let result = data.filter(data => {
      return data.sex === "kids";
    });

    return result;
  }
};

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: {
      getProductList: false,
      getCartList: false,
      deleteCartItem: false,
      checkoutPage: false
    },
    products: [],
    cart_data: []
  },
  getters: {
    products: function(state) {
      let functionName = "AllProduct";
      switch (state.route.params.id) {
        case "women":
          functionName = "Women";
          break;
        case "men":
          functionName = "Men";
          break;
        case "kids":
          functionName = "Kids";
          break;
        default:
          functionName = "AllProduct";
          break;
      }

      return ProductFilter[functionName](state.products);
    }
  },
  mutations: {
    TOGGLE_LOADING_GET_PRODUCT_LIST: function(state, data) {
      state.isLoading.getProductList = data;
    },
    TOGGLE_LOADING_GET_CART_LIST: function(state, data) {
      state.isLoading.getCartList = data;
    },
    TOGGLE_LOADING_DELETE_CART_ITEM: function(state, data) {
      state.isLoading.deleteCartItem = data;
    },
    TOGGLE_LOADING_CHECKOUT_PAGE: function(state, data) {
      state.isLoading.checkoutPage = data;
    },
    SAVE_PRODUCT_LIST: function(state, data) {
      state.products = data;
    },
    SAVE_CART_DATA: function(state, data) {
      state.cart_data = data;
    }
  },
  actions: {
    GetProductList: function(context) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit("TOGGLE_LOADING_GET_PRODUCT_LIST", true);
      axios
        .get(api)
        .then(response => {
          if (response.data.success) {
            context.commit("TOGGLE_LOADING_GET_PRODUCT_LIST", false);
            context.commit("SAVE_PRODUCT_LIST", response.data.products);
          }
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_GET_PRODUCT_LIST", false);
          console.error(err);
        });
    },
    GetCartList: function(context) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit("TOGGLE_LOADING_GET_CART_LIST", true);
      axios
        .get(api)
        .then(response => {
          context.commit("TOGGLE_LOADING_GET_CART_LIST", false);
          context.commit("SAVE_CART_DATA", response.data.data);
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_GET_CART_LIST", false);
          console.error(err);
        });
    },
    DeleteCartItem: async function(context, id) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit("TOGGLE_LOADING_DELETE_CART_ITEM", true);

      await axios
        .delete(api)
        .then(response => {
          context.commit("TOGGLE_LOADING_DELETE_CART_ITEM", false);
          console.log(response.data);
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_DELETE_CART_ITEM", false);
          console.error(err);
        });

      this.dispatch("GetCartList");
    }
  },
  modules: {
    detailProduct: module_detailProduct,
    checkoutPage: module_checkoutPage
  }
});
