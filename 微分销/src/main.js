import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'

import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
