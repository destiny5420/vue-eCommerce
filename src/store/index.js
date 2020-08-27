import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import module_detailProduct from "./detailProductStore";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    products: []
  },
  getters: {
    products: function(state) {
      return state.products;
    }
  },
  mutations: {
    TOGGLE_LOADING: function(state, data) {
      state.isLoading = data;
    },
    SAVE_PRODUCT_LIST: function(state, data) {
      state.products = data;
    }
  },
  actions: {
    GetProductList: function(context) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      axios.get(api).then(response => {
        if (response.data.success) {
          context.commit("SAVE_PRODUCT_LIST", response.data.products);
        }
      });
    }
  },
  modules: { detailProduct: module_detailProduct }
});
