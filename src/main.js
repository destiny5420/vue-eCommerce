import Vue from "vue";
import App from "@/views/vApp/index.vue";
import router from "@/router";
import store from "@/store";
import "@/common/bus.js";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faShoppingCart,
  faSearch,
  faTruck,
  faTools,
  faArrowRight,
  faTrademark,
  faMedal,
  faHandHoldingUsd,
  faHome,
  faAngleDown,
  faBicycle,
  faShuttleVan,
  faMinus,
  faPlus,
  faStar,
  faEnvelope,
  faLock,
  faTimes,
  faCartArrowDown,
  faCreditCard,
  faLongArrowAltLeft,
  faTicketAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faSmile,
  faCheckSquare
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faGithubSquare,
  faMedium,
  faGratipay
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faShoppingCart,
  faSearch,
  faUser,
  faTruck,
  faSmile,
  faTools,
  faArrowRight,
  faTrademark,
  faMedal,
  faHandHoldingUsd,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faGithubSquare,
  faMedium,
  faHome,
  faAngleDown,
  faGratipay,
  faBicycle,
  faShuttleVan,
  faMinus,
  faPlus,
  faStar,
  faEnvelope,
  faLock,
  faTimes,
  faCartArrowDown,
  faCreditCard,
  faLongArrowAltLeft,
  faTicketAlt,
  faCheckSquare
);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

// vue-bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// vue-axios
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

// vuex-router-sync
import { sync } from "vuex-router-sync";
sync(store, router);

// simple-vue-validation
import SimpleVueValidation from "simple-vue-validator";
Vue.use(SimpleVueValidation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  // console.log(
  //   "-- [ router.beforeEach ]\n/ to: ",
  //   to,
  //   "\n/ from: ",
  //   from,
  //   "\n/ next: ",
  //   next
  // );
  next();
  if (to.meta.requiresAuthTesting) {
    store.commit("TOGGLE_LOADING_LOGIN", true);
    let api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    // console.log(`-- [ Check API: Check ] / api: ${api}`);
    axios.post(api).then(response => {
      store.commit("TOGGLE_LOADING_LOGIN", false);
      // console.log("-- [ Response: Check ] / res: ", response);
      if (response.data.success) {
        next();
      } else {
        next("/login");
      }
    });
  } else {
    next();
  }
});

if (process.env.VUE_APP_LOG_PRINT === "false") {
  console.log = function() {};
  console.warn = function() {};
  console.error = function() {};
}
