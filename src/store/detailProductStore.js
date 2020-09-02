import axios from "axios";

export default {
  namespaced: true,
  state: function() {
    return {
      productID: null,
      productData: null,
      isLoading: {
        addCart: false
      }
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
    },
    TOGGLE_LOADING_ADD_CART: function(state, data) {
      state.isLoading.addCart = data;
    }
  },
  actions: {
    GetProduct: function(context) {
      if (!context.state.productID) return;

      context.commit("CLEAN_PRODUCT_DATA");

      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${context.state.productID}`;

      axios.get(api).then(response => {
        if (response.data.success) {
          context.commit("SAVE_PRODUCT_DATA", response.data.product);
        }
      });
    },
    AddCart: function(context, data) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit("TOGGLE_LOADING_ADD_CART", true);

      let infoData = {
        data: {
          product_id: context.state.productID,
          qty: data.count,
          customData: {
            sizeIndex: data.sizeIndex,
            colorIndex: data.colorIndex
          }
        }
      };

      axios
        .post(api, infoData)
        .then(() => {
          context.commit("TOGGLE_LOADING_ADD_CART", false);
          context.dispatch("GetCartList", null, { root: true });
        })
        .catch(error => {
          context.commit("TOGGLE_LOADING_ADD_CART", false);
          console.log(error);
        });
    }
  }
};
