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


		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
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

	.plac {
		color: #ccc;
		font-size: 28upx;
	}

	.center {
		text-align: center;
	}

	.bold {
		font-weight: bold;
	}

	.fs32 {
		font-size: 32upx;
	}

	.fs30 {
		font-size: 32upx;
	}

	.fs28 {
		font-size: 32upx;
	}

	.fs24 {
		font-size: 24upx;
	}

	.fs60 {
		font-size: 60upx;
	}

	.fw700 {
		font-weight: 700;
	}

	.lh50 {
		line-height: 50upx;
	}
	.lh80 {
		line-height: 80upx;
	}

	.co333 {
		color: #333;
	}

	.co666 {
		color: #666;
	}

	.co_red {
		color: red;
	}

	.dis_flex {
		display: flex;
	}

	.dis_center {
		align-items: center;
		justify-content: center;
	}

	.dis_block {
		display: block;
	}

	.flex_col {
		flex-direction: column
	}

	.co999 {
		color: #999;
	}

	.co_de2f44 {
		color: #de2f44
	}

	.co_9392db {
		color: #9392db
	}

	.bg_fffcee {
		background: #fffcee
	}

	.flex {
		flex: 1;
	}

	.block {
		display: block;
	}

	.lih60 {
		line-height: 60upx;
	}

	.lih80 {
		line-height: 80upx;
	}

	.pd20 {
		padding: 20upx;
	}

	.pd_b40 {
		padding-bottom: 40upx;
	}

	.pl10 {
		padding: 10upx;
	}

	.pd_l20 {
		padding-left: 20upx;
	}

	.mt20 {
		margin-top: 20upx;
	}

	.mb20 {
		margin-top: 20upx;
	}

	.mt40 {
		margin-top: 40upx;
	}

	.mb40 {
		margin-top: 40upx;
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

	.fr {
		float: right;
	}

	.co_r1 {
		color: #de2f44
	}
</style>
