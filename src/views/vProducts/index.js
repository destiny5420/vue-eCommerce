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
      }
    };
  },
  methods: {
    onProductTypeHandler: function() {
      this.filterData_type.show = !this.filterData_type.show;
    },
    onPriceTypeHandler: function() {
      this.filterData_price.show = !this.filterData_price.show;
    },
    onSizeTypeHandler: function() {
      this.filterData_size.show = !this.filterData_size.show;
    }
  },
  computed: {
    styleTypeSelect: function() {
      return {
        height: !this.filterData_type.show ? "0px" : ""
        // unCollapse: !this.filterData.show
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
