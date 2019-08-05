import router from './router';
import store from '../store';
import NProgress from 'nprogress/nprogress';
import 'nprogress/nprogress.css';

let getRouter; // 用来获取后台拿到的路由

function routerGo(to, next) {
    router.addRoutes(getRouter); // 动态添加路由
    store.dispatch('generateRoutes', {getRouter}).then(res => {
        if (res) {
            NProgress.done();
            next({...to, replace: true});
        }
    });
}

router.beforeEach((to, from, next) => {
    NProgress.start();
    if (!getRouter) { // 不加这个判断，路由会陷入死循环
        routerGo(to, next);// 执行路由跳转方法
    } else {
        NProgress.done();
        next();
    }
});

router.onError((e) => {
    console.log('路由出错了:', e);
});
