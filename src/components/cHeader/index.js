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
      sideBarData: [
        {
          title: "Mem",
          tmp: function() {}
        },
        {
          title: "Women",
          tmp: function() {
            console.log("Women");
          }
        },
        {
          title: "Kids",
          tmp: function() {
            console.log("Kids");
          }
        },
        {
          title: "Login",
          tmp: function(vm) {
            vm.$router.push("/login");
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
      let vm = this;
      this.sideBarData[index].tmp(vm);
    },
    onCartHandler: function() {
      if (this.openSideBar) {
        this.openSideBar = !this.openSideBar;
      }
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
    },
    classBurgerLine1: function() {
      return {
        "show-burger-line-1": this.openSideBar,
        "hamburger-1": !this.openSideBar
      };
    },
    classBurgerLine2: function() {
      return {
        "show-burger-line-2": this.openSideBar
      };
    },
    classBurgerLine3: function() {
      return {
        "show-burger-line-3": this.openSideBar,
        "hamburger-3": !this.openSideBar
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
