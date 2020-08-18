import cFooter from "@/components/cFooter/index.vue";
import cQuicklyPics from "@/components/cQuicklyPics/index.vue";

export default {
  name: "vHome",
  props: {},
  components: {
    cFooter,
    cQuicklyPics
  },
  data: function() {
    return {
      arrowRight: ["fas", "arrow-right"],
      infoData: [
        {
          symbol: ["fas", "truck"],
          title: "Free Shipping",
          content: "on purchases over $99"
        },
        {
          symbol: ["far", "smile"],
          title: "99% Satisfied Customers",
          content: "our client's opinions speak for themselves"
        },
        {
          symbol: ["fas", "tools"],
          title: "Originality Guaranteed",
          content: "30 days warrant for each product from our store"
        }
      ],
      quitePicPaths: [
        {
          flex: 4,
          src: "https://i.postimg.cc/d0CbGKGt/pic-01.png",
          content: "New arrivals are now in!",
          cutDown: 0,
          buttonTitle: "Show collection"
        },
        {
          flex: 3,
          src: "https://i.postimg.cc/cHNVm5c7/pic-02.png",
          content: "Basic t-shirts $29,99",
          cutDown: 0,
          buttonTitle: "More details"
        },
        {
          flex: 2,
          src: "https://i.postimg.cc/FRgwngPM/pic-03.png",
          content: "Sale this summer",
          cutDown: 50,
          buttonTitle: "View all"
        }
      ]
    };
  },
  methods: {},
  computed: {},
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
