export default {
  name: "vShoppingCart",
  props: {},
  components: {},
  data: function() {
    return {
      categoryData: [
        {
          title: "Product"
        },
        {
          title: "Category"
        },
        {
          title: "Size"
        },
        {
          title: "Price"
        },
        {
          title: "Count"
        },
        {
          title: ""
        }
      ]
    };
  },
  methods: {
    deleteCartItem: function(id) {
      this.$store.dispatch("DeleteCartItem", id);
    },
    onContinueShopHandler: function() {
      this.$router.push({
        name: "vProducts",
        params: { id: "all-products" }
      });
    },
    onNextStep: function() {
      this.$router.push({
        name: "vShoppingDeliveryInfo"
      });
    }
  },
  computed: {
    finalCost: function() {
      return this.$store.state.cart_data.final_total;
    },
    cartList: function() {
      return this.$store.state.cart_data.carts;
    },
    styleImage: function() {
      return function(link) {
        return {
          "background-image": `url(${link})`
        };
      };
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    this.$store.dispatch("GetCartList");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
