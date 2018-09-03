import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);
// @scr文件夹
// 导入组件
import login from '@/views/login.vue'

export default new Router({
  routes: [
    {name:'登陆',path:'/login',component:login}
  ]
});
