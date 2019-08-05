import Vue from 'vue';
import App from './App.vue';
import paraLibPackage from 'para-lib-v2';
import axios from './config/axios.config';
import router from './router/router';
import i18n from './locale/locale';
import store from './store';
import './components/com-comp/componentsRegister';
import API from './config/api.config';
import 'para-lib-v2/lib/para-lib-v2.css';
import './styles/paraui/index.less';
import './styles/index.less';
/* 全局过滤器 */
import filters from '@/utils/filter';
/*
* @params paraui UI库
* @params intercept 全局拦截器
* @params ca 动画库
* @ripple ripple 水波纹库
* */
Vue.use(paraLibPackage, {
  paraui: true,
  intercept: true,
  ca: true,
  ripple: true
});
console.log(paraLibPackage);

/* 临时注入$myHost $myPath */
localStorage.setItem('myHost', paraLibPackage.$myHost);
localStorage.setItem('myPath', paraLibPackage.$myPath);

Vue.config.productionTip = false;

/* 绑定全局API */
Vue.prototype.API = API;

/* 全局dom函数库封装 */
Vue.prototype.$http = axios;

/* 存储调试path环境 */
window.para_default_service_project = 'cic-console';

/* 存储项目path到window */
window.$project = 'cic-console';

function init() {
  /* 绑定过滤器 */
  Object.keys(filters).map(keys => Vue.filter(keys, filters[keys]));

  new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app');
}

/* 调试窗口 */
if (process.env.NODE_ENV === 'development') {
  paraLibPackage.debug([API.DEBUG], init);
} else {
  paraLibPackage.$getPath().then(() => init());
}
