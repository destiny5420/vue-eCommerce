import cFooter from "@/components/cFooter/index.vue";
import cQuicklyPics from "@/components/cQuicklyPics/index.vue";
import cAdvantage from "@/components/cAdvantage/index.vue";

export default {
  name: "vHome",
  props: {},
  components: {
    cFooter,
    cQuicklyPics,
    cAdvantage
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
      ],
      advantageData: [
        {
          symbol: ["fas", "truck"],
          title: "Free Shipping",
          content:
            "Discover new videos every day, from anywhere in the world. We'll guarantee an intense moment of laughter, inspiration and learning."
        },
        {
          symbol: ["fas", "trademark"],
          title: "Easy Payments",
          content:
            "Our algorithm will push relevant content to your screen every day."
        },
        {
          symbol: ["fas", "hand-holding-usd"],
          title: "Money-Back Guarantee",
          content:
            "Get personalised news from anyone keen on sharing what's happening next to you or worldwide. Say goodbye to old, serious, and depressing news."
        },
        {
          symbol: ["fas", "medal"],
          title: "Finest Quality",
          content:
            "Never miss a trend anymore. Browse through your friend’s and other people’s posts and spot the finest online content."
        }
      ],
      subscribeData: {
        content:
          "Subscribe to our newsletter and receive exclusive offers every week",
        inputPlaceholder: "Enter your email",
        buttonMessage: "subscribe"
      },
      socialMedia: [
        ["fab", "facebook-f"],
        ["fab", "twitter"],
        ["fab", "linkedin-in"],
        ["fab", "instagram"],
        ["fab", "youtube"]
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
