import Vue from 'vue';
import App from './App';
import './static/font/iconfont.css';
import store from './store';
import http from './service';
import './style/public.css';
import Expand from './common/expand.js';

Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$http=http;
Vue.use(Expand);
App.mpType = 'app';

const app = new Vue({
    store,...App
})
app.$mount()
