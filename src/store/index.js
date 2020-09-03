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

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr.length - 1;
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat(pivot, quickSort(right));
// }

function catchCorrectData(indexList, resultData) {
  let data = [];

  for (let i = 0; i < indexList.length; i++) {
    data.push(resultData[indexList[i]]);
  }
  return data;
}

export default new Vuex.Store({
  strict: true,
  state: {
    filter: {
      productType: [
        {
          value: "T-Shirt",
          key: false
        },
        {
          value: "Long-Sleeves",
          key: false
        },
        {
          value: "Tank-Tops",
          key: false
        },
        {
          value: "Dress Shirt",
          key: false
        }
      ],
      size: [
        {
          value: "XS",
          key: false
        },
        {
          value: "S",
          key: false
        },
        {
          value: "M",
          key: false
        },
        {
          value: "L",
          key: false
        },
        {
          value: "XL",
          key: false
        }
      ]
    },
    isLoading: {
      getProductList: false,
      getCartList: false,
      deleteCartItem: false,
      checkoutPage: false
    },
    products: [],
    cart_data: null
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

      let resultData = ProductFilter[functionName](state.products);
      console.log("1 - resultData: ", resultData);

      // Size Filter
      for (let i = 0; i < state.filter.size.length; i++) {
        if (state.filter.size[i].key === true) {
          resultData = resultData.filter(item => item.size[i].state === true);
        }
      }
      console.log("2 - size filter / resultData: ", resultData);

      // Product Type Filter
      let productTypeIndexList = [];
      let selected = false;
      for (let i = 0; i < state.filter.productType.length; i++) {
        if (state.filter.productType[i].key === true) {
          selected = true;
          for (let j = 0; j < resultData.length; j++) {
            if (resultData[j].category === state.filter.productType[i].value) {
              productTypeIndexList.push(j);
            }
          }
        }
      }

      console.log(
        "3 - product type filter / productTypeIndexList: ",
        productTypeIndexList
      );

      let finalData = [];
      if (productTypeIndexList.length <= 0 && selected === false) {
        finalData = resultData;
      } else {
        finalData = catchCorrectData(productTypeIndexList, resultData);
      }

      console.log("4 - product type filter / finalData: ", finalData);

      console.warn("-------------------------------");
      return resultData;
    },
    cartList: function(state) {
      return state.cart_data;
    },
    isThereItemInCart: function(state) {
      if (state.cart_data === null) {
        return false;
      }

      if (state.cart_data.carts.length <= 0) {
        return false;
      }

      return true;
    },
    sizeToggle: function(state) {
      return function(index) {
        return state.filter.size[index].key;
      };
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
    TOGGLE_TYPE: function(state, data) {
      // Here 'data' is index
      state.filter.productType[data].key = !state.filter.productType[data].key;
    },
    TOGGLE_SIZE: function(state, data) {
      // Here 'data' is index
      state.filter.size[data].key = !state.filter.size[data].key;
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
        .then(() => {
          context.commit("TOGGLE_LOADING_DELETE_CART_ITEM", false);
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
