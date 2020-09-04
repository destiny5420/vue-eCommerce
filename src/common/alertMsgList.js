// type: 1.normal / 2.success / 3.warning / 4.danger

export default {
  ADD_TO_CART: { msg: "Add to cart", type: "success" },
  DELETE_ITEM: { msg: "Delete item", type: "success" },

  // Error Code
  GET_PRODUCT_LIST_FAIL: { msg: "ERROR 3000", type: "danger" },
  GET_CART_LIST_FAIL: { msg: "ERROR 3001", type: "danger" },
  GET_DETAIL_PRODUCT_FAIL: { msg: "ERROR 3002", type: "danger" },
  ADD_TO_CART_FAIL: { msg: "ERROR 3003", type: "danger" },
  DELETE_ITEM_FAIL: { msg: "ERROR 3004", type: "danger" }
};
