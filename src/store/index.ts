import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import optionsModule from "./modules/optionsModule";
import rolesModule from "./modules/rolesModule";

export default new Vuex.Store({
  modules: {
    optionsModule,
    rolesModule,
  },
});
