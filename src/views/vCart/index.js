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
          ["fas", "truck"],
          ["fas", "credit-card"]
        ]
      }
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
    deleteLoading: function() {
      return (
        this.$store.state.isLoading.getCartList ||
        this.$store.state.isLoading.deleteCartItem
      );
    },
    stepInfo: function() {
      let title = "";
      switch (this.$route.name) {
        case "vShoppingList":
          this.stepData.userStep = 0;
          title = "Shopping Cart";
          break;
        case "vShoppingDeliveryInfo":
          this.stepData.userStep = 1;
          title = "Address data type fo delivery";
          break;
        case "vShoppingPaymentInfo":
          this.stepData.userStep = 2;
          title = "Shipping and Payment";
          break;
        default:
          this.stepData.userStep = 0;
          title = "Default Title";
          break;
      }

      return title;
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
