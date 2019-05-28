<template>
	<view class="p-h5">
		<view class="">
			<input class="pay_input" type="input" v-model.trim="mobile" placeholder="请输入手机号码" placeholder-class="plac" />
			<view class="pay_methods">
				<text class="methods_wechat" @click="paySubmit('wechat')">
					<text class="icon" type="icon"></text> 微信支付
				</text>
				<text class="methods_alipay" @click="paySubmit('alipay')">
					<text class="icon" type="icon"></text>支付宝支付
				</text>
			</view>
		</view>
		<view class="pay_fixed" :style="{transform: translate}">
			<view class="pay_input_warp">
				<input class="pay_input" type="input" v-model.trim="mobile" placeholder="请输入手机号码" placeholder-class="plac" />
				<text class="pay_value">￥{{value}}</text>
			</view>
			<view class="pay_methods">
				<text class="methods_wechat" @click="paySubmit('wechat')">
					<text class="icon" type="icon"></text> 微信支付
				</text>
				<text class="methods_alipay" @click="paySubmit('alipay')">
					<text class="icon" type="icon"></text>支付宝支付
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import qs from 'qs'
	export default {
		data() {
			return {
				mobile: '',
				translate: 'translateY(100%)'
			}
		},
		props: {
			level: [Number,String],
			type: [Number,String],
			value: Number,
			scroll: Number
		},
		watch: {
			scroll(val) {
				if (val > 400) {
					this.translate = 'translateY(0%)'
				} else {
					this.translate = 'translateY(100%)'
				}
			}
		},
		methods: {
			paySubmit(type) {

				let myreg = /^[1][0-9]{10}$/;
				if (!myreg.test(this.mobile)) {
					console.log(myreg.test(this.mobile))
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					});
					return;
				}
				let params = {
					app_mchid: uni.getStorageSync('token'),
					app: 1,
					order_forms: 2,
					pay_code: type,
					mobile: this.mobile,
					order_level: this.level,
					order_type: this.type,
					is_h5: 1
				}


				uni.request({
					url: this.$store.state.baseUrl+'/api/nameorder/pay',
					method: 'POST',
					data: qs.stringify(params),
					header: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					success: (res) => {
						if (res.data.code == 1) {
							location.href = res.data.data.result
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}

					}
				});



			}
		}
	}
</script>

<style lang="less">
	.p-h5 {
		.pay_fixed {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			background: rgba(0, 0, 0, 0.6);
			z-index: 100;
			padding-top: 10upx;
			transition: all 0.5s;

			.pay_input {
				background: #fff;
				border-radius: 8upx;
			}

			.pay_input_warp {
				position: relative;
			}

			.pay_value {
				position: absolute;
				color: #f00;
				top: 0;
				right: 40upx;
				height: 80upx;
				line-height: 80upx;
			}
		}

		.pay_input {
			border: 1px solid #ccc;
			margin: 0 20upx;
			height: 80upx;
			line-height: 80upx;
			text-align: left;
			padding-left: 20upx;

		}

		.pay_methods {
			padding: 20upx;
			display: flex;
			color: #fff;

			&>text {
				height: 90upx;
				line-height: 90upx;
				border-radius: 8upx;
				font-size: 32upx;
			}

			.methods_wechat {
				flex: 1;
				margin-right: 20upx;
				background: #00b700;

				.icon {
					display: inline-block;
					width: 50upx;
					height: 50upx;
					background: url(https://static.quwangming.com/gsqm/images/m/pay_icon.png) no-repeat;
					background-size: 50upx 100upx;
					background-position: 0 -54upx;
					vertical-align: middle;
					margin-right: 10upx;
				}
			}

			.methods_alipay {
				flex: 1;
				background: #00aaee;

				.icon {
					display: inline-block;
					width: 50upx;
					height: 50upx;
					background: url(https://static.quwangming.com/gsqm/images/m/pay_icon.png) no-repeat;
					background-size: 50upx 100upx;
					vertical-align: middle;
					margin-right: 10upx;
				}
			}
		}
	}
</style>
