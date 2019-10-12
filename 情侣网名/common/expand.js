/* MExpand uniapp Library 0.01
 适配微信和H5授权登陆,只适合uniapp环境
 $url获取链接参数，$client获取客户端信息:微信'wecheat'其他'web'
 Author: zoubin
 Date:2019-08-15 */
 import http from '../service';
(function(global,factory){
     return factory.call(global);
 })(typeof window !== "undefined" ? window : this,function(){
     let _m_= {
         appid:'wxd5d842eb3d9189cc',//起名网微信公众号appid
         client:function(){
             let u = navigator.appVersion;
             if (u.indexOf("MicroMessenger") > -1) {
                 return 'wechat';
             }else{
                 return 'wap';
             }			
         },
         url:function (name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || ["", ""])[1].replace(/\+/g, '%20')) || null
        },
         init:function(){
			 if(this.url('ad_code_id'))localStorage.setItem('ad_code_id', this.url('ad_code_id'));
			 if(this.url('ewm'))localStorage.setItem('ewm', this.url('ewm'));
             //设置token
             function rand(min, max) {
                 return (new Date()).valueOf() + Math.floor(Math.random() * (max - min)) + min;
             }
             if (this.client() == 'wechat') {
                 /*微信公众号获取用户信息*/
                 let code = this.url("code");
				 if(!uni.getStorageSync('openid')){
					 if (code && code != uni.getStorageSync('token')) {
						 http.post("/v5/account/get_by_code", {
							 account_id: '',
							 code: code
						 }).then(res => {
							 if(res.code==1){
								uni.setStorageSync('token', res.data.openid);
								uni.setStorageSync('openid', res.data.openid);
							 }
						 })
					 } else if (!code) {
						 window.location.href =
							 "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+this.appid+"&response_type=code&scope=snsapi_userinfo&redirect_uri=" +
							 encodeURIComponent(window.location.href);
					 }					 
				 }
             } else {
                 if (!uni.getStorageSync('token')) {
                    uni.setStorageSync('token', 'token_' + rand(1000, 9999));
                 }
             }
         }
     }
	 this.MExpand=_m_;
	 
     return _m_;
 })
 //vue插件模式
 const EXPAND = {
     install(Vue){
         if (typeof window !== 'undefined' && window.Vue) {
                     Vue = window.Vue
             }
         MExpand.init();
         Vue.prototype.$client=MExpand.client();
         Vue.prototype.$url = MExpand.url;
     }
 }
 export default EXPAND;