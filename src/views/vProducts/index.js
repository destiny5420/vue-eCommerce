import cProductWindow from "@/components/cProductWindow/index.vue";
import cProductNavbar from "@/components/cProductNavbar/index.vue";
import Loading from "vue-loading-overlay";

export default {
  name: "vProducts",
  props: {},
  components: {
    cProductWindow,
    cProductNavbar,
    Loading
  },
  data: function() {
    return {
      navbar_info: [],
      filterData_type: {
        show: true,
        option: [
          {
            title: "T-Shirts",
            check: false
          },
          {
            title: "Longsleeves",
            check: false
          },
          {
            title: "Tank Tops",
            check: false
          },
          {
            title: "Dress shirts",
            check: false
          }
        ]
      },
      filterData_price: {
        show: true,
        min: 0,
        max: 100,
        sliderValue: 0
      },
      filterData_size: {
        show: true
      },
      conditionBar: {
        sort: {
          title: "Sort",
          curValue: "default",
          options: [
            {
              displayName: "DEFAULT",
              value: "default"
            },
            {
              displayName: "POPULAR",
              value: "popular"
            },
            {
              displayName: "PRICE LOW TO HIGH",
              value: "lowPrice"
            },
            {
              displayName: "PRICE HIGH TO LOW",
              value: "highPrice"
            }
          ]
        }
      }
    };
  },
  methods: {
    onTypeShowHandler: function() {
      this.filterData_type.show = !this.filterData_type.show;
    },
    onPriceShowHandler: function() {
      this.filterData_price.show = !this.filterData_price.show;
    },
    onSizeShowHandler: function() {
      this.filterData_size.show = !this.filterData_size.show;
    },
    onClickSizeHandler: function(index) {
      this.$store.commit("TOGGLE_SIZE", index);
    },
    onClickTypeHandler: function(index) {
      this.$store.commit("TOGGLE_TYPE", index);
    },
    onPriceHandler: function() {
      console.log(
        "onPriceHandler / Value: ",
        this.filterData_price.sliderValue
      );
      this.$store.commit("TOGGLE_PRICE", this.filterData_price.sliderValue);
    }
  },
  computed: {
    styleTypeSelect: {
      get: function() {
        return {
          height: !this.filterData_type.show ? "0px" : ""
        };
      }
    },
    stylePriceSelect: {
      get: function() {
        return {
          height: !this.filterData_price.show ? "0px" : ""
        };
      }
    },
    styleSizeSelect: {
      get: function() {
        return {
          height: !this.filterData_size.show ? "0px" : ""
        };
      }
    },
    styleSizeOption: {
      get: function() {
        return function(index) {
          return {
            border: this.sizeToggle(index) ? "1px solid #444444" : ""
          };
        };
      }
    },
    styleArrow: {
      get: function() {
        return function(value) {
          switch (value) {
            case "type":
              return {
                transform: !this.filterData_type.show ? "rotateX(180deg)" : ""
              };
            case "price":
              return {
                transform: !this.filterData_price.show ? "rotateX(180deg)" : ""
              };
            case "size":
              return {
                transform: !this.filterData_size.show ? "rotateX(180deg)" : ""
              };
            default:
              return {};
          }
        };
      }
    },
    matchID: {
      get: function() {
        return function(value) {
          return `check-box-${value}`;
        };
      }
    },
    conditionBarTitle: {
      get: function() {
        let first_name = "Default";
        let trail_name = "'s Tops";
        this.navbar_info = [];
        this.navbar_info[0] = {
          displayName: "All Product",
          params: "all-products"
        };
        switch (this.$route.params.id) {
          case "all-products":
            first_name = `All Product`;

            break;
          case "men":
            first_name = `Men`;
            this.navbar_info[1] = {
              displayName: "Men",
              params: this.$route.params.id
            };
            break;
          case "woman":
            first_name = `Woman`;
            this.navbar_info[1] = {
              displayName: "Woman",
              params: this.$route.params.id
            };
            break;
          case "kids":
            first_name = `Kids`;
            this.navbar_info[1] = {
              displayName: "Kids",
              params: this.$route.params.id
            };
            break;
        }

        return first_name + trail_name;
      }
    },
    navBarInfo: {
      get: function() {
        return [
          {
            displayName: `${this.conditionBarTitle}`
          }
        ];
      }
    },
    products: {
      get: function() {
        return this.$store.getters["products"];
      }
    },
    sizeList: {
      get: function() {
        return this.$store.state.filter.size;
      }
    },
    isLoading: {
      get: function() {
        return this.$store.state.isLoading.getProductList;
      }
    },
    sizeToggle: {
      get: function() {
        return function(index) {
          return this.$store.getters["sizeToggle"](index);
        };
      }
    }
  },
  watch: {
    $route: {
      handler: function() {
        // console.log("-- watch / newName: ", newName, " / oldName: ", oldName);
        // this.conditionBar.title = newName.params.id;
        this.$store.dispatch("GetProductList");
      },
      deep: true
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    this.$store.dispatch("GetProductList");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
