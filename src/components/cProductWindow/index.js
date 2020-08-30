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
    },
    props_id: {
      type: String,
      required: true
    },
    props_starScore: {
      type: Number,
      required: true
    },
    props_size: {
      type: Array,
      required: true
    }
  },
  components: {},
  data: function() {
    return {};
  },
  methods: {
    onFavoriteHandler: function() {
      console.log("onFavoriteHandler");
    },
    onClickHandler: function() {
      // this.$store.commit("detailProduct/SET_PRODUCT_ID", this.props_id);

      // Type.1
      // this.$router.push("/detail-products");

      // Type.2
      this.$router.push({
        name: "vDetailProduct",
        params: { id: this.props_id }
      });
    }
  },
  computed: {
    stylePicture: function() {
      return {
        backgroundImage: `url(${this.props_url})`
      };
    },
    styleStar: function() {
      return function(index) {
        return {
          color: index < this.props_starScore ? "#ffc950" : "#adabab"
        };
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
