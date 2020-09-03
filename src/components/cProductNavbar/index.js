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
  methods: {
    onClickHandler: function(index) {
      if (this.isLast(index) === true) {
        return;
      } else {
        this.$router.push({
          path: `/products/${this.props_links[index].params}`
        });
      }
    }
  },
  computed: {
    isLast: {
      get: function() {
        return function(index) {
          return index === this.props_links.length - 1 ? true : false;
        };
      }
    },
    styleDirection: {
      get: function() {
        return function(index) {
          return {
            color: this.isLast(index) ? "black" : "",
            cursor: this.isLast(index) ? "default" : "pointer"
          };
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
