import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const module_detailProduct = {
  namespaced: true,
  state: function() {
    return {
      productID: null,
      productData: null
    };
  },
  getters: {
    normalCount: function(state) {
      return state.count;
    },
    doubleCount: function(state) {
      return state.count * 3;
    }
  },
  mutations: {
    SET_PRODUCT_ID: function(state, data) {
      console.log("SET_PRODUCT_ID / data: ", data);
      state.productID = data;
    },
    SAVE_PRODUCT_DATA: function(state, data) {
      state.productData = data;
      console.log("--- SAVE_PRODUCT_DATA --- / data: ", data);
    }
  },
  actions: {
    GetProduct: function(context) {
      console.log("GetProduct / productID: ", context.state.productID);
      if (!context.state.productID) return;

      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${context.state.productID}`;

      axios.get(api).then(response => {
        console.log("GetProduct / response: ", response);
        if (response.data.success) {
          context.commit("SAVE_PRODUCT_DATA", response.data.product);
        }
      });
    }
  }
};

export default new Vuex.Store({
  strict: true,
  state: {
    count: 102,
    products: []
  },
  getters: {
    normalCount: function(state) {
      return state.count;
    },
    products: function(state) {
      return state.products;
    }
  },
  mutations: {
    SAVE_PRODUCT_LIST: function(state, data) {
      state.products = data;
      console.warn("-- SAVE PRODUCT LIST -- / Data: ", data);
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
