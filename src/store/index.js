import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import module_detailProduct from "./detailProductStore";

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
    isLoading: false,
    products: []
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
    },
    GetCartList: function() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;

      axios
        .get(api)
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  modules: { detailProduct: module_detailProduct }
});
