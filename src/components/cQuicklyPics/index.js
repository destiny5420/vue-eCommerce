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
      switch (this.propFlex) {
        case 4:
          return {
            "p-flex-4": true
          };
        case 3:
          return {
            "p-flex-3": true
          };
        case 2:
          return {
            "p-flex-2": true
          };
        default:
          return {
            "p-flex-1": true
          };
      }
    },
    styleArea: function() {
      return {
        backgroundImage: `url(${this.propSourceUrl})`
      };
    },
    styleTmp: function() {
      return {
        tmp: document.documentElement.clientWidth < 959 ? true : false
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
