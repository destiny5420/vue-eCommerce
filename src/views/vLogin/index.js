// import alertMsgList from "@/common/alertMsgList.js";
import Loading from "vue-loading-overlay";

export default {
  name: "vLogin",
  props: {},
  components: {
    Loading
  },
  data: function() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onGoHomeHandler: function() {
      console.log("-- onGoHomeHandler --");
      this.$router.push({
        name: "vHome"
      });
    },
    onLoginHandler: function() {
      let api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      this.$store.commit("TOGGLE_LOADING_LOGIN", true);
      this.axios
        .post(api, this.user)
        .then(response => {
          console.log(response);
          if (response.data.success) {
            this.$store.commit("TOGGLE_LOADING_LOGIN", false);
            this.$router.push({
              name: "vDashboard"
            });
          } else {
            console.error(response.data.message);
            this.$store.commit("TOGGLE_LOADING_LOGIN", false);
          }
        })
        .catch(err => {
          this.$store.commit("TOGGLE_LOADING_LOGIN", false);
          console.error(err);
        });
    }
  },
  computed: {
    isLoading: {
      get: function() {
        return this.$store.state.isLoading.login;
      }
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
