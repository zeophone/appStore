import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		baseUrl: process.env.NODE_ENV === 'development'?'/dpc':''
	},
    mutations: {
		
	},
    actions: {
		
	}
})

export default store