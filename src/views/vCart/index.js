import Loading from "vue-loading-overlay";

export default {
  name: "vCart",
  props: {},
  components: {
    Loading
  },
  data: function() {
    return {
      title: "Shopping Cart",
      stepData: {
        userStep: 0,
        symbols: [
          ["fas", "cart-arrow-down"],
          ["fas", "truck"],
          ["fas", "credit-card"]
        ]
      },
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
  methods: {},
  computed: {
    doneStep: function() {
      return this.userStep - 1;
    },
    styleSymbol: function() {
      return function(index) {
        return {
          color:
            index <= this.stepData.userStep
              ? index <= this.stepData.userStep - 1
                ? "#ffcb7d"
                : "white"
              : "gray",
          background:
            index <= this.stepData.userStep
              ? index <= this.stepData.userStep - 1
                ? "transparent"
                : "#ffcb7d"
              : "transparent"
        };
      };
    },
    styleImage: function() {
      return function(link) {
        return {
          "background-image": `url(${link})`
        };
      };
    },
    cartList: function() {
      console.log(
        "cartList in cart.js / data: ",
        this.$store.state.cart_data.carts
      );
      return this.$store.state.cart_data.carts;
    },
    finalCost: function() {
      return this.$store.state.cart_data.final_total;
    },
    deleteLoading: function() {
      return false;
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
