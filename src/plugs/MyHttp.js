import Vue from 'vue';
import axios from 'axios';
const MyHttp = {};
MyHttp.install =function () {
    // 设置
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
    Vue.prototype.$axios = axios;
};
export default MyHttp;
