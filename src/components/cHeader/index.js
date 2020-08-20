export default {
  name: "cHeader",
  props: {
    prop_scroll_y: {
      type: Number,
      required: true
    }
  },
  components: {},
  data: function() {
    return {
      openSideBar: false
    };
  },
  methods: {
    onToggleHandler: function() {
      console.log("onToggleHandler");
      this.openSideBar = !this.openSideBar;
    }
  },
  computed: {
    classHeader: function() {
      return {
        sticky: this.prop_scroll_y > 30 ? true : false
      };
    },
    classSideBar: function() {
      return {
        sticky: this.prop_scroll_y > 30 ? true : false,
        active: this.openSideBar
      };
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
