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
      openSideBar: false,
      shopPathData: [
        {
          displayName: "Men",
          value: "men"
        },
        {
          displayName: "Women",
          value: "women"
        },
        {
          displayName: "Kids",
          value: "kids"
        }
      ],
      sideBarData: [
        {
          title: "Mem",
          eventFunction: function(vm) {
            vm.$router.push({
              name: "vProducts",
              params: { id: "men" }
            });

            vm.openSideBar = false;
          }
        },
        {
          title: "Women",
          eventFunction: function(vm) {
            vm.$router.push({
              name: "vProducts",
              params: { id: "women" }
            });

            vm.openSideBar = false;
          }
        },
        {
          title: "Kids",
          eventFunction: function(vm) {
            vm.$router.push({
              name: "vProducts",
              params: { id: "kids" }
            });

            vm.openSideBar = false;
          }
        },
        {
          title: "Login",
          eventFunction: function(vm) {
            vm.$router.push({
              name: "vLogin"
            });
          }
        }
      ]
    };
  },
  methods: {
    onToggleHandler: function() {
      this.openSideBar = !this.openSideBar;
    },
    onSideBarHandler: function(index) {
      const vm = this;
      this.sideBarData[index].eventFunction(vm);
    },
    onCartHandler: function() {
      if (this.openSideBar) {
        this.openSideBar = !this.openSideBar;
      }
      this.$router
        .push({
          name: "vCart"
        })
        .catch(() => {});

      // this.$store.dispatch("GetCartList");
    },
    onGoShop: function(value) {
      if (value === this.$route.params.id) {
        return;
      }

      this.$router.push({
        name: "vProducts",
        params: { id: value }
      });
    }
  },
  computed: {
    classHeader: {
      get: function() {
        return {
          sticky: this.prop_scroll_y > 30 ? true : false
        };
      }
    },
    classSideBar: {
      get: function() {
        return {
          sticky: this.prop_scroll_y > 30 ? true : false,
          active: this.openSideBar
        };
      }
    },
    classBurgerLine1: {
      get: function() {
        return {
          "show-burger-line-1": this.openSideBar,
          "hamburger-1": !this.openSideBar
        };
      }
    },
    classBurgerLine2: {
      get: function() {
        return {
          "show-burger-line-2": this.openSideBar
        };
      }
    },
    classBurgerLine3: {
      get: function() {
        return {
          "show-burger-line-3": this.openSideBar,
          "hamburger-3": !this.openSideBar
        };
      }
    },
    isThereItemInCart: {
      get: function() {
        return this.$store.getters["isThereItemInCart"];
      }
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    this.$store.dispatch("GetCartList");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
