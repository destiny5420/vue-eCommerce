export default {
  name: "vProducts",
  props: {},
  components: {},
  data: function() {
    return {
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
        show: true
      },
      filterData_size: {
        show: true
      },
      priceData: {
        min: 0,
        max: 500
      },
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
      ],
      sliderValue: 0,
      conditionBar: {
        sortTitle: "Sort:",
        curSortValue: "default",
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

        // transform: !this.filterData_type.show ? " rotateX(180deg)" : ""
      };
    },
    matchID: function() {
      return function(value) {
        return `check-box-${value}`;
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
