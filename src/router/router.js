import Vue from 'vue';
import Router from 'vue-router';
import dataSource from './router_static';
import $store from '../store';

Vue.use(Router);
const route = dataSource;

/* 全局传入路由 */
const injectData = () => {
  $store.dispatch('generateRoutes', dataSource);
};

injectData();

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: route,
});
