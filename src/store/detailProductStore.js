import axios from "axios";
import alertMsgList from "@/common/alertMsgList.js";

export default {
  namespaced: true,
  state: function() {
    return {
      productID: null,
      productData: null,
      isLoading: {
        getProductData: false,
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
    },
    TOGGLE_LOADING_GET_PRODUCT_DATA: function(state, data) {
      state.isLoading.getProductData = data;
    }
  },
  actions: {
    GetProduct: function(context) {
      if (!context.state.productID) return;
      const vm = this;
      context.commit("CLEAN_PRODUCT_DATA");
      context.commit("TOGGLE_LOADING_GET_PRODUCT_DATA", true);
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${context.state.productID}`;

      axios
        .get(api)
        .then(response => {
          context.commit("TOGGLE_LOADING_GET_PRODUCT_DATA", false);
          if (response.data.success) {
            context.commit("SAVE_PRODUCT_DATA", response.data.product);
          }
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_GET_PRODUCT_DATA", false);
          console.error(err);

          vm._vm.$bus.$emit(
            "alertMsg",
            alertMsgList.GET_DETAIL_PRODUCT_FAIL.msg,
            alertMsgList.GET_DETAIL_PRODUCT_FAIL.type
          );
        });
    },
    AddCart: function(context, data) {
      const vm = this;
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
          console.log("--> ", vm);
          vm._vm.$bus.$emit(
            "alertMsg",
            alertMsgList.ADD_TO_CART.msg,
            alertMsgList.ADD_TO_CART.type
          );
        })
        .catch(error => {
          context.commit("TOGGLE_LOADING_ADD_CART", false);
          console.log(error);

          vm._vm.$bus.$emit(
            "alertMsg",
            alertMsgList.ADD_TO_CART_FAIL.msg,
            alertMsgList.ADD_TO_CART_FAIL.type
          );
        });
    }
  }
};
