/* MExpand uniapp Library 0.01
 适配微信和H5授权登陆,只适合uniapp环境
 $url获取链接参数，$client获取客户端信息:微信'wecheat'其他'wap'
 Author: zoubin
 Date:2019-08-15 */
import http from '../service';
(function(global, factory) {
	return factory.call(global);
})(typeof window !== "undefined" ? window : this, function() {
	let _m_ = {
		appid: 'wxd5d842eb3d9189cc', //起名网微信公众号appid
		client: function() {
			let u = navigator.appVersion;
			if (u.indexOf("MicroMessenger") > -1 && u.indexOf("wxwork") == -1) {
				return 'wechat';
			} else {
				return 'wap';
			}
		},
		url: function(name) {
			return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || ["", ""])[
				1].replace(/\+/g, '%20')) || null
		},
		setCookie: function(name, value, days) {
			if(uni.getStorageSync('token')){
				value=uni.getStorageSync('token');
			}
			var exp = new Date();
			exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ';domain=.qumingdashi.com;path=/';
		},
		getCookie: function(c_name) {
			if (document.cookie.length > 0) {
				let c_start = document.cookie.indexOf(c_name + "=");
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1;
					let c_end = document.cookie.indexOf(";", c_start);
					if (c_end == -1) c_end = document.cookie.length;
					return unescape(document.cookie.substring(c_start, c_end));
				}
			}
			return "";
		},
		rand:function() {
			let ran = (new Date()).valueOf() + Math.floor(Math.random() * 100000);
			return 'token_'+ran;
		},
		init: function() {
			if (this.url('ad_code_id')) localStorage.setItem('ad_code_id', this.url('ad_code_id'));
			if (this.url('ewm')) localStorage.setItem('ewm', this.url('ewm'));
			if (this.url('openid')) uni.setStorageSync('token', this.url('openid'));
			//设置token
			if (this.client() == 'wechat') {
				/*微信公众号获取用户信息*/
				let code = this.url("code");
				if (!uni.getStorageSync('openid')) {
					if (code && code != uni.getStorageSync('token')) {
						http.post("/v5/account/get_by_code", {
							account_id: '',
							code: code
						}).then(res => {
							if (res.code == 1) {
								uni.setStorageSync('token', res.data.openid);
								uni.setStorageSync('openid', res.data.openid);
							}
						})
					} else if (!code) {
						window.location.href =
							"https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.appid +
							"&response_type=code&scope=snsapi_userinfo&redirect_uri=" +
							encodeURIComponent(window.location.href);
					}
				}
			} else {
				let cookie = this.getCookie('token'),
				token = uni.getStorageSync('token');
				if(token){
					this.setCookie('token',token,365);
				}else if(cookie&&!token){
					uni.setStorageSync('token',cookie);
				}else{
					let str= this.rand();
					this.setCookie('token',str,365);
					uni.setStorageSync('token', str);
				}
			}
		}
	}
	this.MExpand = _m_;

	return _m_;
})
//vue插件模式
const EXPAND = {
	install(Vue) {
		if (typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue
		}
		MExpand.init();
		Vue.prototype.$client = MExpand.client();
		Vue.prototype.$url = MExpand.url;
	}
}
export default EXPAND;
