import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login.vue';
import home from '../views/home.vue';
Vue.use(Router);
// @scr文件夹
// 导入组件
export default new Router({
  routes: [
    {name: '登陆', path: '/login', component: login},
    {name: '登陆', path: '/home', component: home},
  ]
});
