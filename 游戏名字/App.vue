<script>
	import Login from "./common/login.js"
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

<style lang="less">
	.plac {
		font-size: 28upx;
		color: #ccc;
	}
	.center {
		text-align: center;
	}
	.page {
		width: 710upx;
		margin: 20upx auto;
		border: 4upx solid #333;
		padding: 10upx 10upx;
		box-sizing: border-box;
		background: #fff;
		.line {
			width: 100%;
			border-bottom: 1px dotted #ccc;
			height: 10upx;
			margin-bottom: 10upx;
		}

		.title {
			padding-left: 30upx;
			border-left: 8upx solid #e3434f;
			line-height: 34upx;
			margin: 30upx 0;
			font-weight: 600;
			font-size: 34upx;
		}
	}

	.bg {
		height: 100%;
		border: 1upx solid #ccc;
		position: relative;
		padding: 20upx 20upx;
	}

	.bg_angle {
		position: absolute;
		display: inline-block;
		width: 10upx;
		height: 10upx;
		border: 1px solid #ccc;
	}

	.bg_l {
		left: 0;
		top: 0;
		border-left: 0 !important;
		border-top: 0 !important;
	}

	.bg_r {
		right: 0;
		top: 0;
		border-right: 0 !important;
		border-top: 0 !important;
	}

	.bg_bl {
		left: 0;
		bottom: 0;
		border-left: 0 !important;
		border-bottom: 0 !important;
	}

	.bg_br {
		right: 0;
		bottom: 0;
		border-right: 0 !important;
		border-bottom: 0 !important;
	}
	.line {
		width: 100%;
		border-bottom: 1px dotted #ccc;
		height: 10upx;
		margin-bottom: 10upx;
	}
</style>
