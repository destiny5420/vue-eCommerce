import router from "@/router";
import axios from "axios";

export default {
  namespaced: true,
  state: function() {
    return {
      itemID: null,
      itemData: null,
      isLoading: {
        getItemData: false
      }
    };
  },
  getters: {},
  mutations: {
    TOGGLE_LOADING_GET_ITEM: function(state, data) {
      state.isLoading.getItemData = data;
    },
    SET_CHECKOUT_ITEM_ID: function(state, data) {
      state.itemID = data;
    }
  },
  actions: {
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
              context.commit("SET_CHECKOUT_ITEM_ID", response.data.order);
            }
          } else {
            console.error(response);
          }
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_GET_ITEM", false);
          console.error(err);
        });
    }
  }
};
