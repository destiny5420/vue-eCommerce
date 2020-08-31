export default {
  name: "vCart",
  props: {},
  components: {},
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
                ? "orange"
                : "white"
              : "gray",
          background:
            index <= this.stepData.userStep
              ? index <= this.stepData.userStep - 1
                ? "transparent"
                : "orange"
              : "transparent"
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
