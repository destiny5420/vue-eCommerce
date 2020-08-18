export default {
  name: "cQuicklyPics",
  props: {
    propFlex: {
      type: Number,
      requested: true
    },
    propContent: {
      type: String,
      requested: true
    },
    propCutDown: {
      type: Number
    },
    propSourceUrl: {
      type: String
    },
    propBtnTitle: {
      type: String,
      default: "Default"
    }
  },
  components: {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    styleProduct: function() {
      return {
        flex: this.propFlex,
        backgroundImage: `url(${this.propSourceUrl})`
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
