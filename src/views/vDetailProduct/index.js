import cProductNavbar from "@/components/cProductNavbar/index.vue";

export default {
  name: "vDetailProduct",
  props: {},
  components: { cProductNavbar },
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
          displayName: `Men's Tops`
        },
        {
          displayName: `T-Shirt`
        },
        {
          displayName: `T-Shirt Summer Vibess`
        }
      ],
      colorData: ["#8f8f8f", "#9e9e9e59", "#2c3e50"],
      sizeData: ["S", "M", "L", "XL"],
      count: 0
    };
  },
  methods: {
    onPlusHandler: function() {
      this.count = this.count >= 10 ? this.count : this.count + 1;
    },
    onMinusHandler: function() {
      this.count = this.count <= 0 ? this.count : this.count - 1;
    },
    onColorHandler: function(index) {
      this.data.colorIndex = index;
    },
    onSizeHandler: function(index) {
      console.log("onSizeHandler");
      this.data.sizeIndex = index;
    }
  },
  computed: {
    styleDetailPicture: function() {
      return {
        backgroundImage: `url(${this.data.url})`
      };
    },
    styleStar: function() {
      return function(index) {
        return {
          color: index < this.data.starScore ? "#ffc950" : "#adabab"
        };
      };
    },
    styleColorBorder: function() {
      return function(index) {
        return {
          border: index === this.data.colorIndex ? `3px solid #8f8f8f` : ""
        };
      };
    },
    styleSizeBorder: function() {
      return function(index) {
        return {
          border: index === this.data.sizeIndex ? `3px solid #8f8f8f` : ""
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
