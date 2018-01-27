// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false;

// // 定义路由
// const routes = [
//   {path: '/', redirect: '/goods'},
//   {path: '/goods', component: goods}
// ];
//
// // 创建router实例
// const router = new VueRouter({
//   routes,
//   linkActiveClass: 'active'
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
});
