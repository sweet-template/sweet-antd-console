import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate/index';
import {$getSettingKey} from 'para-lib-v2';
import modules from './modules';

Vue.use(Vuex);

const index = {
  modules,
  plugins: [createPersistedState({
    key: $getSettingKey(),
    storage: window.localStorage,
    reducer(val) {
      return {
        setting: val.setting,
      };
    },
  })],
};

export default new Vuex.Store(index);
