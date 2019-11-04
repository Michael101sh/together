// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import VeeValidate from "vee-validate";
import "./css/main.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapVue from "bootstrap-vue";
import { store } from "./store.js";
import VueSweetalert2 from "vue-sweetalert2";
import swal from "sweetalert2";

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(Vuex);

Vue.mixin({
  methods: {
    referToRampUp(isInside) {
      if (!isInside) {
        swal(".נא היכנס/י למערכת", "", "error").then(function() {
          store.state.user = null;
          location.href = "#/";
        });
      }
    }
  }
});

new Vue({
  store,
  el: "#app",
  router: router,
  template: "<App/>",
  components: { App }
});
