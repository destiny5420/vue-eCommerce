import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products: []
  },
  getters: {
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
  modules: {}
});
