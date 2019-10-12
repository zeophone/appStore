<script>
	import Login from "./common/login.js";
	export default {
		onLaunch: function() {
			//H5生成token
			// #ifndef MP
			function rand(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
			}
			if (!uni.getStorageSync('token')) {
				uni.setStorageSync('token', 'token_' + (new Date()).valueOf() + rand(1000, 9999))
			}
			// #endif
			//小程序登陆
			// #ifdef MP
			Login()
			// #endif	
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	em,
	i {
		font-style: normal;
	}
	
	.plac{
		color: #ccc;
		font-size: 28upx;
	}
	
</style>
