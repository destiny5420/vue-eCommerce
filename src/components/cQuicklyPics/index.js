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
    },
    propLink: {
      type: String
    }
  },
  components: {},
  data: function() {
    return {};
  },
  methods: {
    onClickHandler: function() {
      this.$router.push({
        name: "vProducts",
        params: { id: `${this.propLink}` }
      });
    }
  },
  computed: {
    styleProduct: {
      get: function() {
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
      }
    },
    styleArea: {
      get: function() {
        return {
          backgroundImage: `url(${this.propSourceUrl})`
        };
      }
    },
    styleTmp: {
      get: function() {
        return {
          tmp: document.documentElement.clientWidth < 959 ? true : false
        };
      }
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
