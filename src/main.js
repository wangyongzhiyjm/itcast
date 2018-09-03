// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// 引入路由
import router from './router';

// 引入element-ui 组件
import elementui from 'element-ui';

// 引入element-ui css样式
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/index.css';

// 引入插件 axios
import MyHttp from '@/plugs/MyHttp';

// 注册 MyHttp 插件
Vue.use(MyHttp);

// 使用element-ui
Vue.use(elementui);

// 开发提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 局部组件
  components: { App },
  template: '<App/>'
});
