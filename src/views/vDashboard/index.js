export default {
  name: "vDashboard",
  props: {},
  components: {},
  data: function() {
    return {};
  },
  methods: {
    onGetProductAllList: function() {
      console.log("API-Path / ", process.env.VUE_APP_APIPATH);
      console.log("CUSTOM-Path / ", process.env.VUE_APP_CUSTOMPATH);

      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.$http.get(api).then(response => {
        console.log(response);
      });
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
