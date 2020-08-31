export default {
  name: "vShoppingDeliveryInfo",
  props: {},
  components: {},
  data: function() {
    return {
      deliveryOption: [
        {
          price: "15.00",
          content: "7-11"
        },
        {
          price: "15.00",
          content: "7-11"
        },
        {
          price: "15.00",
          content: "7-11"
        },
        {
          price: "15.00",
          content: "7-11"
        },
        {
          price: "15.00",
          content: "7-11"
        },
        {
          price: "15.00",
          content: "7-11"
        }
      ]
    };
  },
  methods: {
    onBackHandler: function() {
      console.log("-- onBackHandler --");
      this.$router.go(-1);
    },
    onContinueShopHandler: function() {
      this.$router.push({
        name: "vProducts",
        params: { id: "all-products" }
      });
    },
    onNextStepHandler: function() {
      console.log("-- onNextStepHandler --");
    }
  },
  computed: {},
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
