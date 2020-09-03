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
      if (this.cartList.length === 0) {
        return;
      }

      this.$router.push({
        name: "vShoppingDeliveryInfo"
      });
    }
  },
  computed: {
    finalCost: {
      get: function() {
        if (this.$store.getters["cartList"] === null) {
          return 0;
        } else {
          return this.$store.getters["cartList"].final_total;
        }
      }
    },
    cartList: {
      get: function() {
        if (this.$store.getters["cartList"] === null) {
          return 0;
        } else {
          return this.$store.getters["cartList"].carts;
        }
      }
    },
    styleImage: {
      get: function() {
        return function(link) {
          return {
            "background-image": `url(${link})`
          };
        };
      }
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
