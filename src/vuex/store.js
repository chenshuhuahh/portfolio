/**
 * Created by hua on 2018/3/26.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    isRole: false,
    userRole: '',
    userLink: ''
  }
});

export default store;
