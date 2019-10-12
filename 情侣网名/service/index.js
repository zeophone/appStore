import store from '../store.js'
//公共请求头
const header = {
	'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
}

//公共拦截器
let response = function(res){
	return res;
}

function addToken(obj){
	//token
	if(uni.getStorageSync('token')){
		obj.token=uni.getStorageSync('token');
	}
	//分销跟踪
	obj.ad_code_id=localStorage.getItem('ad_code_id')?localStorage.getItem('ad_code_id'):'';
	obj.order_forms= 2;//	true	int	来源 1= pc, 2= 手机
	obj.ad_source= localStorage.getItem('ewm') ? 3 : 2;//true	int	广告来源：1.在线起名2.广告链接3.二维码
	//客户端标识
	let u = navigator.appVersion;
	if (u.indexOf("MicroMessenger") > -1) {
		obj.source='wechat';
		obj.openid=uni.getStorageSync('token');
	}else{
		obj.source='wap';
	}
	return obj;
}

export default{
	post(url,data){
		return uni.request({
			url: store.state.baseUrl + url,
			data: addToken(data),
			method:'POST',
			header: header
		}).then(data =>{
			const [error,res] = data;
			return response(res.data);
		})
	},
	get(url,data){
		return uni.request({
			url: store.state.baseUrl + url,
			data: addToken(data),
			method:'GET',
			header: header
		}).then(data =>{
			const [error,res] = data;
			return response(res.data);
		})
	}
}