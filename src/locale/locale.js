import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './langs';
import Vuex from '../store';
import paraLib from 'para-lib-v2';

Vue.use(VueI18n);
const language = Vuex.state.setting.language;
let lang;
if (language) {
  lang = language;
} else {
  lang = paraLib.$getLang();
}
const i18n = new VueI18n({
  locale: lang,
  messages,
});
paraLib.locale.i18n((key, value) => i18n.t(key, value));

export default i18n;
