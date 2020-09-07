import cHeader from "@/components/cHeader/index.vue";
import cAlertMessage from "@/components/cAlertMessage/index.vue";

export default {
  name: "vRoot",
  props: {},
  components: {
    cHeader,
    cAlertMessage
  },
  data: function() {
    return {
      scrollY: 0
    };
  },
  methods: {
    onScrollHandler: function() {}
  },
  computed: {},
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    let vm = this;
    window.addEventListener("scroll", function() {
      vm.scrollY = window.scrollY;
    });
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
