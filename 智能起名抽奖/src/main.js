import Vue from 'vue'
import App from './App.vue'


import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
})

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
