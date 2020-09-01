export default {
  name: "vCheckoutPage",
  props: {},
  components: {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    pageInfo: function() {
      return this.$store.state.checkoutPage.itemData;
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    this.$store.commit(
      "checkoutPage/SET_CHECKOUT_ITEM_ID",
      this.$route.params.id
    );
    this.$store.dispatch("checkoutPage/GetItemData");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
