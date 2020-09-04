export default {
  name: "cAlertMessage",
  props: {},
  components: {},
  data: function() {
    return {
      msgData: [],
      waitingTimeForDelete: 3
    };
  },
  methods: {
    updateMessage: function(message, type) {
      const timeStamp = Math.floor(new Date() / 1000);
      this.msgData.push({ type, message, timeStamp });
      this.removeWithTiming(timeStamp);
    },
    removeMessage: function(index) {
      this.msgData.splice(index, 1);
    },
    removeWithTiming: function(time) {
      const vm = this;
      setTimeout(() => {
        vm.msgData.forEach((element, index) => {
          if (element.timeStamp === time) {
            vm.msgData.splice(index, 1);
          }
        });
      }, vm.waitingTimeForDelete * 1000);
    }
  },
  computed: {
    styleMessageWindow: {
      get: function() {
        let vm = this;
        let color = "";
        let borderColor = "";
        return function(index) {
          switch (vm.msgData[index].type) {
            case "normal":
              color = "#e4e3e2a6";
              borderColor = "#9c9c9c";
              break;
            case "success":
              color = "#c3ffb2a6";
              borderColor = "#33963b66";
              break;
            case "warning":
              color = "#ffd95ea6";
              borderColor = "#c3a039";
              break;
            case "danger":
              color = "#ff5e5ea6";
              borderColor = "#dc6e6e";
              break;
            default:
              color = "#fff";
              borderColor = "#9c9c9c";
              break;
          }

          return {
            "background-color": color,
            "border-color": borderColor
          };
        };
      }
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {
    this.$bus.$on("alertMsg", (message, type = "normal") => {
      this.updateMessage(message, type);
    });

    // invoke function
    // this.$bus.$emit("alertMsg", "Error Code: 4003", "warning");
  },
  beforeMounted: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
