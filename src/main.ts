import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

declare var M: any;
// Adding materialize
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted(){
    M.AutoInit()
  }
}).$mount("#app");
