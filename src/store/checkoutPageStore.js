import router from "@/router";
import axios from "axios";

export default {
  namespaced: true,
  state: function() {
    return {
      itemID: null,
      itemData: null,
      isLoading: {
        addInfoToCheckoutList: false,
        getItemData: false,
        checkout: false
      }
    };
  },
  getters: {},
  mutations: {
    TOGGLE_LOADING_ADD_INFO_TO_CHECKOUT: function(state, data) {
      state.isLoading.addInfoToCheckoutList = data;
    },
    TOGGLE_LOADING_GET_ITEM: function(state, data) {
      state.isLoading.getItemData = data;
    },
    TOGGLE_LOADING_CHECKOUT: function(state, data) {
      state.isLoading.checkout = data;
    },
    SET_CHECKOUT_ITEM_ID: function(state, data) {
      state.itemID = data;
    },
    SET_CHECKOUT_ITEM_DATA: function(state, data) {
      state.itemData = data;
    }
  },
  actions: {
    AddCheckoutData: function(context, data) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      context.commit("TOGGLE_LOADING_ADD_INFO_TO_CHECKOUT", true);

      axios
        .post(api, data)
        .then(response => {
          context.commit("TOGGLE_LOADING_ADD_INFO_TO_CHECKOUT", false);
          if (response.data.success) {
            router.push({
              name: "vCheckoutPage",
              query: { id: response.data.orderId }
            });
          } else {
            console.error(response.message);
          }
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_ADD_INFO_TO_CHECKOUT", false);
          console.error(err);
        });
    },
    GetItemData: function(context) {
      if (!context.state.itemID) return;
      context.commit("TOGGLE_LOADING_GET_ITEM", true);

      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${context.state.itemID}`;

      axios
        .get(api)
        .then(response => {
          console.log(response);
          context.commit("TOGGLE_LOADING_GET_ITEM", false);

          if (response.data.success) {
            // Go to home page if itemID is mistake.
            if (response.data.order === null) {
              router.push({
                name: "vHome"
              });
            } else {
              context.commit("SET_CHECKOUT_ITEM_DATA", response.data.order);
            }
          } else {
            console.error(response);
          }
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_GET_ITEM", false);
          console.error(err);
        });
    },
    CheckOut: function(context) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${context.state.itemID}`;
      context.commit("TOGGLE_LOADING_CHECKOUT", true);
      axios
        .post(api)
        .then(response => {
          context.commit("TOGGLE_LOADING_CHECKOUT", false);
          console.log("-- CheckOut -- / response: ", response);
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_CHECKOUT", false);
          console.error(err);
        });
    }
  }
};
