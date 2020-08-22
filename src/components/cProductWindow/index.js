export default {
  name: "vProductWindow",
  props: {
    props_title: {
      type: String,
      required: true
    },
    props_price: {
      type: Number,
      required: true
    },
    props_url: {
      type: String
    }
  },
  components: {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    stylePicture: function() {
      return {
        backgroundImage: `url(${this.props_url})`
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
