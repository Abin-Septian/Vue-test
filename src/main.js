import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";
import store from "./store";

/* UI-Kit */
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

/* Custom Css */
import 'vue-loading-overlay/dist/vue-loading.css';

// import "./assets/app.scss";

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
