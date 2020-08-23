export default {
  name: "cProductNavbar",
  props: {
    props_links: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {},
  data: function() {
    return {
      homePath: "/home"
    };
  },
  methods: {},
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
