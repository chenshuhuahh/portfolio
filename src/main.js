// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import VueAreaLinkage from 'vue-area-linkage'; // 引入省市区多级联动
import vueQuillEditor from 'vue-quill-editor'; // 引入富文本工具
import summary from './components/summary/summary.vue';
import signUp from './components/signUp/signUp.vue';
import logIn from './components/logIn/logIn.vue';
import studentSignUp from './components/signUp/studentSignUp.vue';
import companySignUp from './components/signUp/companySignUp.vue';
import workShow from './components/workShow/workShow.vue';
import sectionWorkShow from './components/workShow/sectionWorkShow.vue';
import workDetail from './components/workShow/workDetail.vue';
import student from './components/student/student.vue';
import stuInfoBox from './components/student/stuInfoBox.vue';
import stuWorkUploadBox from './components/student/stuWorkUploadBox.vue';
import stuWorkShowBox from './components/student/stuWorkShowBox.vue';
import company from './components/company/company.vue';
import comInfoBox from './components/company/comInfoBox.vue';
import comInfoModify from './components/company/comInfoModify.vue';
import comFavoriteWork from './components/company/comFavoriteWork.vue';

import 'element-ui/lib/theme-chalk/index.css'; // element-ui的样式
import 'element-ui/lib/theme-chalk/display.css';
import './common/styles/index.scss'; // 自己设计的样式
import './assets/css/iconfont.css'; // 表情emoji的样式
import 'quill/dist/quill.core.css'; // 富文本编辑器的样式
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import {emoji} from './api/emoji.js'; // 表情emoji的js文件

Vue.prototype.emoji = emoji; //
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueAreaLinkage);
Vue.use(vueQuillEditor);

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
  },
  {
    path: '/workShow',
    component: workShow
  },
  {
    path: '/workShow/sectionWorkShow',
    name: 'sectionWorkShow',
    component: sectionWorkShow
  },
  {
    path: '/workShow/workDetail',
    name: 'workDetail',
    component: workDetail
  },
  {
    path: '/student',
    component: student,
    children: [
      {path: '/student/stuInfoBox', component: stuInfoBox},
      {path: '/student/stuWorkUploadBox', component: stuWorkUploadBox},
      {path: '/student/stuWorkShowBox', component: stuWorkShowBox}
    ]
  },
  {
    path: '/company',
    component: company,
    children: [
      {path: '/company/comInfoBox', component: comInfoBox},
      {path: '/company/comInfoModify', component: comInfoModify},
      {path: '/company/comFavoriteWork', component: comFavoriteWork}
    ]
  }
];

// 创建router实例
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      };
    } else {
      // 所有路由新页面滚动到顶部：
      return {x: 0, y: 0};
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

// 编程式导航
router.push({path: '/summary'});
