// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import summary from './components/summary/summary.vue';
import signUp from './components/signUp/signUp.vue';
import logIn from './components/logIn/logIn.vue';
import studentSignUp from './components/signUp/studentSignUp/studentSignUp.vue';
import companySignUp from './components/signUp/companySignUp/companySignUp.vue';

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './common/styles/index.scss';

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 定义路由
const routes = [
  {
    path: '/summary',
    component: summary
  },
  {
    path: '/signUp',
    component: signUp
  },
  {
    path: '/logIn',
    component: logIn
  },
  {
    path: '/signUp/student',
    component: studentSignUp
  },
  {
    path: '/signUp/company',
    component: companySignUp
  }
];

// 创建router实例
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// 编程式导航
router.push({path: '/summary'});
