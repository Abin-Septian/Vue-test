import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";
import store from "./store";

/* UI-Kit */
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

// import "./assets/app.scss";

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
