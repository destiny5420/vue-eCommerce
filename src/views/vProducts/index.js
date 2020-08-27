import cProductWindow from "@/components/cProductWindow/index.vue";
import cProductNavbar from "@/components/cProductNavbar/index.vue";

export default {
  name: "vProducts",
  props: {},
  components: {
    cProductWindow,
    cProductNavbar
  },
  data: function() {
    return {
      navbar_info: [
        {
          displayName: `Men's Tops`
        },
        {
          displayName: `T-Shirt`
        },
        {
          displayName: `T-Shirt Summer Vibess`
        }
      ],
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
        max: 500,
        sliderValue: 0
      },
      filterData_size: {
        show: true,
        sizeData: [
          {
            title: "S"
          },
          {
            title: "M"
          },
          {
            title: "L"
          },
          {
            title: "XL"
          }
        ]
      },
      conditionBar: {
        title: "Women's Tops",
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
    }
  },
  computed: {
    styleTypeSelect: function() {
      return {
        height: !this.filterData_type.show ? "0px" : ""
      };
    },
    stylePriceSelect: function() {
      return {
        height: !this.filterData_price.show ? "0px" : ""
      };
    },
    styleSizeSelect: function() {
      return {
        height: !this.filterData_size.show ? "0px" : ""
      };
    },
    styleArrow: function() {
      return function(value) {
        switch (value) {
          case "type":
            return {
              transform: !this.filterData_type.show ? " rotateX(180deg)" : ""
            };
          case "price":
            return {
              transform: !this.filterData_price.show ? " rotateX(180deg)" : ""
            };
          case "size":
            return {
              transform: !this.filterData_size.show ? " rotateX(180deg)" : ""
            };
          default:
            return {};
        }
      };
    },
    matchID: function() {
      return function(value) {
        return `check-box-${value}`;
      };
    },
    products: function() {
      return this.$store.getters["products"];
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
