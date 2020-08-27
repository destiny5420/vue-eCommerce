import axios from "axios";

export default {
  namespaced: true,
  state: function() {
    return {
      productID: null,
      productData: null
    };
  },
  getters: {},
  mutations: {
    SET_PRODUCT_ID: function(state, data) {
      state.productID = data;
    },
    SAVE_PRODUCT_DATA: function(state, data) {
      state.productData = data;
    },
    CLEAN_PRODUCT_DATA: function(state) {
      state.productData = null;
    }
  },
  actions: {
    GetProduct: function(context) {
      console.log(
        "Vuex / action / GetProduct / productID: ",
        context.state.productID
      );
      if (!context.state.productID) return;

      context.commit("CLEAN_PRODUCT_DATA");

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
