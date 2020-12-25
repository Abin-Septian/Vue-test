import Vue from "vue";
import Vuex from "vuex";
import Products from "./modules/products";

// Vuex Load
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
      Products
  },
  strict: false
});
