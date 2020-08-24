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
      },
      productList: [
        {
          title: "T-Shirt Summer Vibes",
          price: 89.99,
          url: "https://i.postimg.cc/qMwH8V8V/photo-1548549557-dbe9946621da.jpg"
        },
        {
          title: "Loose Knit 3/4 Sleeve",
          price: 119.99,
          url:
            "https://i.postimg.cc/NFJqvRGG/oswaldo-ibanez-EG3-1s-MLm-M-unsplash.jpg"
        },
        {
          title: "Basic Slim Fit T-Shirt",
          price: 79.99,
          url:
            "https://i.postimg.cc/vmWzVMV5/daniela-mota-BXZzxj-C4l-TY-unsplash.jpg"
        },
        {
          title: "T-Shirt Summer Vibes",
          price: 89.99,
          url:
            "https://i.postimg.cc/c4rBcf3x/darko-mitev-c5t-j1zlk1-Y-unsplash.jpg"
        },
        {
          title: "Loose Knit 3/4 Sleeve",
          price: 119.99,
          url:
            "https://i.postimg.cc/FHPfC6Xw/analise-benevides-Dh-Yc-NZmqzns-unsplash.jpg"
        },
        {
          title: "Basic Slim Fit T-Shirt",
          price: 79.99,
          url:
            "https://i.postimg.cc/kGdDt3WR/antonino-visalli-Kwrx8n-GAwe-A-unsplash.jpg"
        },
        {
          title: "T-Shirt Summer Vibes",
          price: 89.99,
          url:
            "https://i.postimg.cc/vBncBHxd/calvin-lupiya-y-Pg8cus-GD8-unsplash.jpg"
        },
        {
          title: "Loose Knit 3/4 Sleeve",
          price: 119.99,
          url:
            "https://i.postimg.cc/tgwspVT5/luobulinka-QCOZz4iq-U-M-unsplash.jpg"
        },
        {
          title: "Basic Slim Fit T-Shirt",
          price: 79.99,
          url:
            "https://i.postimg.cc/HLVrqtpn/sergio-souza-JF6-N57x-Olg-unsplash.jpg"
        },
        {
          title: "T-Shirt Summer Vibes",
          price: 89.99,
          url:
            "https://i.postimg.cc/Y0f06nxn/thanh-duc-phan-Oi-Dw-Yvzo9pw-unsplash.jpg"
        }
      ]
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
    console.warn("mounted / dispatch / Get Product List");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
