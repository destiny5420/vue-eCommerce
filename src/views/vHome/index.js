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
      dailyProduct: [
        {
          src:
            "https://i.postimg.cc/4dxkJdN0/xu-duo-y-8-CPli-Ud-As-unsplash.jpg",
          title: "Basic Slim Fit T-Shirt",
          price: "79.99",
          cutDown: 0
        },
        {
          src:
            "https://i.postimg.cc/DftCyZxM/amir-taheri-Cu-Xjrjy-Xr-E0-unsplash.jpg",
          title: "Loose Texture T-Shirt",
          price: "119.99",
          cutDown: 0
        },
        {
          src:
            "https://i.postimg.cc/GhGXBCNh/ian-dooley-8-Hq-PXTTo-Mn0-unsplash.jpg",
          title: "T-Shirt Summer Vibes",
          price: "79.99",
          cutDown: 0
        },
        {
          src:
            "https://i.postimg.cc/mg48Cnf3/pedram-normohamadian-a-K-V2-Kv-M29-M-unsplash.jpg",
          title: "Loose Knit 3/4 Sleeve",
          price: "119.99",
          cutDown: 0
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
        {
          symbol: ["fab", "facebook-f"],
          link: "https://www.facebook.com/ShiaoLiWei"
        },
        {
          symbol: ["fab", "linkedin-in"],
          link: "https://www.linkedin.com/in/力維-蕭-b06a09ba/"
        },
        {
          symbol: ["fab", "instagram"],
          link: "https://www.instagram.com/paperhsiao_/"
        },
        {
          symbol: ["fab", "github-square"],
          link: "https://github.com/destiny5420?tab=repositories/"
        },
        {
          symbol: ["fab", "medium"],
          link: "https://medium.com/@paper.hsiao"
        }
      ]
    };
  },
  methods: {
    onSocialMedialHandler: function(url) {
      window.open(url);
    }
  },
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
