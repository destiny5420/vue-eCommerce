import Loading from "vue-loading-overlay";

export default {
  name: "vCart",
  props: {},
  components: {
    Loading
  },
  data: function() {
    return {
      title: "",
      stepData: {
        userStep: 0,
        symbols: [
          ["fas", "cart-arrow-down"],
          ["fas", "credit-card"],
          ["far", "check-square"]
        ]
      }
    };
  },
  methods: {},
  computed: {
    doneStep: {
      get: function() {
        return this.userStep - 1;
      }
    },
    styleSymbol: {
      get: function() {
        return function(index) {
          return {
            color:
              index <= this.stepData.userStep
                ? index <= this.stepData.userStep - 1
                  ? "#ffcb7d"
                  : "white"
                : "#6666663f",
            background:
              index <= this.stepData.userStep
                ? index <= this.stepData.userStep - 1
                  ? "transparent"
                  : "#ffcb7d"
                : "transparent"
          };
        };
      }
    },
    deleteLoading: {
      get: function() {
        return (
          this.$store.state.isLoading.getCartList ||
          this.$store.state.isLoading.deleteCartItem ||
          this.$store.state.checkoutPage.isLoading.addInfoToCheckoutList ||
          this.$store.state.checkoutPage.isLoading.getItemData ||
          this.$store.state.checkoutPage.isLoading.checkout
        );
      }
    },
    stepInfo: {
      get: function() {
        let title = "";
        switch (this.$route.name) {
          case "vShoppingList":
            this.stepData.userStep = 0;
            title = "Shopping Cart";
            break;
          case "vShoppingDeliveryInfo":
            this.stepData.userStep = 1;
            title = "Shipping and Payment data";
            break;
          case "vCheckoutPage":
            this.stepData.userStep = 2;
            title = "Summary";
            break;
          default:
            this.stepData.userStep = 0;
            title = "Default Title";
            break;
        }

        return title;
      }
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
