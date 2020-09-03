import Loading from "vue-loading-overlay";
import cProductNavbar from "@/components/cProductNavbar/index.vue";

export default {
  name: "vDetailProduct",
  props: {},
  components: { cProductNavbar, Loading },
  data: function() {
    return {
      colorIndex: 0,
      data: {
        title: "T-Shirt Summer Vibes",
        price: 89.99,
        originPrice: 119.9,
        content:
          "The Little Tikes 2-in-1 snug secure swing is for children who absolutely love to swing. This baby swing from Little Tikes is the perfect combination of safety and comfort. Caring parents will love all of the different safety features found on the Little Tikes swing. A T-bar and straps hold the child securely in place and can be removed as the child grows. It's a baby swing and a toddler swing in one! features: - T-bar that rotates down for easy loading and unloading - adjustable stay-put shoulder straps hold baby securely in place - if using with a child who doesn't require the T-bar or straps.",
        url: "https://i.postimg.cc/qMwH8V8V/photo-1548549557-dbe9946621da.jpg",
        starScore: 4,
        count: 1,
        colorIndex: 0,
        sizeIndex: 0
      },
      freightData: [
        {
          symbol: ["fas", "bicycle"],
          title: "Standard shipment",
          content: "Free within 3-6 business days"
        },
        {
          symbol: ["fas", "shuttle-van"],
          title: "Express delivery",
          content: "#35.00 available"
        }
      ],
      navbar_info: [
        {
          displayName: "All Product",
          params: "all-products"
        },
        {
          displayName: "Women",
          params: "women"
        },
        {
          displayName: "T-Shirt Summer Vibess",
          params: ""
        }
      ],
      sizeTable: {
        isShow: false,
        title: "Product Size",
        header: ["Size", "Chest", "Waist", "Length"],
        data: [
          {
            Size: "S",
            Chest: 40.5,
            Waist: 43,
            Length: 54
          },
          {
            Size: "M",
            Chest: 42.5,
            Waist: 45.5,
            Length: 55.5
          },
          {
            Size: "L",
            Chest: 45,
            Waist: 48,
            Length: 57
          }
        ]
      },
      colorData: ["#8f8f8f", "#9e9e9e59", "#2c3e50"]
    };
  },
  methods: {
    onPlusHandler: function() {
      this.data.count =
        this.data.count >= 10 ? this.data.count : this.data.count + 1;
    },
    onMinusHandler: function() {
      this.data.count =
        this.data.count <= 1 ? this.data.count : this.data.count - 1;
    },
    onColorHandler: function(index) {
      this.data.colorIndex = index;
    },
    onSizeHandler: function(index) {
      this.data.sizeIndex = index;
    },
    onSizeTableToggleHandler: function(key) {
      this.sizeTable.isShow = key;
    },
    onAddCartHandler: function() {
      this.$store.dispatch(
        "detailProduct/AddCart",
        {
          count: this.data.count,
          sizeIndex: this.data.sizeIndex,
          colorIndex: this.data.colorIndex
        },
        { root: true }
      );
    }
  },
  computed: {
    styleDetailPicture: {
      get: function() {
        return {
          backgroundImage: this.product ? `url(${this.product.imageUrl})` : ""
        };
      }
    },
    styleStar: {
      get: function() {
        return function(index) {
          return {
            color: index < this.product.starScore ? "#ffc950" : "#adabab"
          };
        };
      }
    },
    styleColorBorder: {
      get: function() {
        return function(index) {
          return {
            border: index === this.data.colorIndex ? `3px solid #8f8f8f` : ""
          };
        };
      }
    },
    styleSizeBorder: {
      get: function() {
        return function(index) {
          return {
            border: index === this.data.sizeIndex ? `3px solid #8f8f8f` : ""
          };
        };
      }
    },
    styleSizeTable: {
      get: function() {
        return {
          opacity: this.sizeTable.isShow ? 1 : 0,
          "pointer-events": this.sizeTable.isShow ? "auto" : "none"
        };
      }
    },
    isLoadingForAddCart: {
      get: function() {
        return this.$store.state.detailProduct.isLoading.addCart;
      }
    },
    product: {
      get: function() {
        return this.$store.state.detailProduct.productData;
      }
    },
    navBarInfo: {
      get: function() {
        if (this.$store.state.detailProduct.productData === null) {
          return null;
        }

        let data = [];
        data.push({ displayName: "All Product", params: "all-products" });

        switch (this.$store.state.detailProduct.productData.sex) {
          case "women":
            data.push({ displayName: "Women", params: "women" });
            break;
          case "men":
            data.push({ displayName: "Men", params: "men" });
            break;
          case "kids":
            data.push({ displayName: "Kids", params: "kids" });
            break;
        }

        data.push({
          displayName: this.$store.state.detailProduct.productData.title,
          params: ""
        });

        return data;
      }
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    this.$store.commit("detailProduct/SET_PRODUCT_ID", this.$route.params.id);
    this.$store.dispatch("detailProduct/GetProduct");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
