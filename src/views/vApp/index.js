export default {
  name: "vApp",
  props: {},
  components: {},
  data: function() {
    return {};
  },
  methods: {
    onLoginHandler: function() {
      console.log("onLoginHandler -- ", this);
      this.$router.push("/login-page");
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
