import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import module_detailProduct from "./detailProductStore";
import module_checkoutPage from "./checkoutPageStore";
import alertMsgList from "@/common/alertMsgList.js";

Vue.use(Vuex);

const ProductFilter = {
  AllProduct: function(data) {
    return data;
  },
  Woman: function(data) {
    let result = data.filter(data => {
      return data.sex === "woman";
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

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

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
      ],
      price: 0
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

      if (state.route.name !== "vProducts") {
        return;
      }

      switch (state.route.params.id) {
        case "woman":
          functionName = "Woman";
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

      let filter_router_data = ProductFilter[functionName](state.products);
      let result_data = filter_router_data;
      console.log("1.[Router Filter] - resultData: ", filter_router_data);
      console.log("---------------");

      // Size Filter
      let filter_size_index_list = [];
      let sizeSelected = false;
      for (let i = 0; i < state.filter.size.length; i++) {
        if (state.filter.size[i].key === true) {
          sizeSelected = true;
          for (let j = 0; j < filter_router_data.length; j++) {
            if (filter_router_data[j].size[i].state === true) {
              filter_size_index_list.push(j);
            }
          }
        }
      }

      if (sizeSelected === true) {
        let sizeDataBeforeShort = filter_size_index_list;
        filter_size_index_list = quickSort(filter_size_index_list);

        console.log(
          "2. size filter / SizeIndexList / Before: ",
          sizeDataBeforeShort,
          " / After: ",
          filter_size_index_list
        );
      }

      if (filter_size_index_list.length <= 0 && sizeSelected === false) {
        console.log("2. no size filter");
      } else {
        // Remove Duplicate number
        let length = filter_size_index_list.length;
        let index = 0;
        for (index = 1; index < length; index++) {
          if (
            filter_size_index_list[index] === filter_size_index_list[index - 1]
          ) {
            filter_size_index_list.splice(index, 1);
            length -= 1;
            index -= 1;
          }
        }
        result_data = catchCorrectData(filter_size_index_list, result_data);
      }

      console.log("2.[Size Filter] - resultData: ", result_data);
      console.log("---------------");

      // Product Type Filter
      let filter_type_index_list = [];
      let typeSelected = false;
      for (let i = 0; i < state.filter.productType.length; i++) {
        if (state.filter.productType[i].key === true) {
          typeSelected = true;
          for (let j = 0; j < result_data.length; j++) {
            if (result_data[j].category === state.filter.productType[i].value) {
              filter_type_index_list.push(j);
            }
          }
        }
      }

      if (typeSelected === true) {
        let DataBeforeShort = filter_type_index_list;
        filter_type_index_list = quickSort(filter_type_index_list);
        console.log(
          "3. product type filter / ProductTypeIndexList / Before: ",
          DataBeforeShort,
          " / After: ",
          filter_type_index_list
        );
      }

      if (filter_type_index_list.length <= 0 && typeSelected === false) {
        console.log("3. no product type filter");
      } else {
        result_data = catchCorrectData(filter_type_index_list, result_data);
      }

      console.log("3.[Type Filter] - resultData: ", result_data);
      console.log("---------------");

      // Price Filter
      result_data = result_data.filter(
        item => item.price >= state.filter.price
      );
      console.log("4.[Price Filter] - resultData: ", result_data);

      console.warn("-------------------------------");
      return result_data;
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
    TOGGLE_PRICE: function(state, data) {
      state.filter.price = data;
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
      const vm = this;
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

          vm._vm.$bus.$emit(
            "alertMsg",
            alertMsgList.GET_PRODUCT_LIST_FAIL.msg,
            alertMsgList.GET_PRODUCT_LIST_FAIL.type
          );
        });
    },
    GetCartList: function(context) {
      const vm = this;
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

          vm._vm.$bus.$emit(
            "alertMsg",
            alertMsgList.GET_CART_LIST_FAIL.msg,
            alertMsgList.GET_CART_LIST_FAIL.type
          );
        });
    },
    DeleteCartItem: async function(context, id) {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit("TOGGLE_LOADING_DELETE_CART_ITEM", true);

      await axios
        .delete(api)
        .then(() => {
          context.commit("TOGGLE_LOADING_DELETE_CART_ITEM", false);

          vm._vm.$bus.$emit(
            "alertMsg",
            alertMsgList.DELETE_ITEM.msg,
            alertMsgList.DELETE_ITEM.type
          );
        })
        .catch(err => {
          context.commit("TOGGLE_LOADING_DELETE_CART_ITEM", false);
          console.error(err);

          vm._vm.$bus.$emit(
            "alertMsg",
            alertMsgList.DELETE_ITEM_FAIL.msg,
            alertMsgList.DELETE_ITEM_FAIL.type
          );
        });

      this.dispatch("GetCartList");
    }
  },
  modules: {
    detailProduct: module_detailProduct,
    checkoutPage: module_checkoutPage
  }
});
