import cFooter from "@/components/cFooter/index.vue";

export default {
  name: "vHome",
  props: {},
  components: {
    cFooter
  },
  data: function() {
    return {
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
