<template>
	<view class="op_baidu">
		<text @click="pay">立即支付</text>
	</view>
</template>

<script>
	export default {
		props: {
			orderSn: String
		},
		methods: {
			pay() {
				uni.getSystemInfo({
					success: (res) => {
						if (res.platform == 'ios') {
							uni.showModal({
								title: '提示',
								content: '因政策限制，苹果平台不支持支付功能,请选择其他平台打开',
							})
						} else {

							uni.request({
								url: this.$store.state.baseUrl + '/api/baiduxcx/orderpay',
								method: 'GET',
								data: {
									order_sn: this.orderSn,
									app_mchid: uni.getStorageSync('token'),
									appflag: this.$store.state.appflag
								},
								success: (res) => {
									if (res.data.code == 1) {
										var result = res.data.data;
										var order_sn = res.data.data.order_sn;
										var pay_sn = res.data.data.tpOrderId;
										//唤起百度支付
										uni.requestPayment({
											provider: 'baidu',
											orderInfo: {
												"dealId": "2533784924",
												"appKey": "MMMuyi",
												"totalAmount": result.totalAmount,
												"tpOrderId": result.tpOrderId,
												"dealTitle": result.dealTitle,
												"signFieldsRange": "1",
												"rsaSign": result.rsaSign,
												"bizInfo": "",
											},
											success: (e) => {
												uni.showLoading({
													title: '查询中'
												});
												let timer = setInterval(() => {
													uni.request({
														url: this.$store.state.baseUrl + '/api/baiduxcx/query',
														method: 'GET',
														data: {
															app: 1,
															pay_sn: pay_sn
														},
														success: (res) => {
															if (res.data.code == 1) {
																uni.hideLoading()
																uni.showToast({
																	title: '支付成功',
																	duration: 3000
																});
																clearInterval(timer)
																uni.redirectTo({
																	url: '../../pages/order/order'
																});
															}
														}
													})
												}, 1000)

											}
										})

									} else {
										uni.showToast({
											title: res.data.msg,
											duration: 2000
										});
									}
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.op_baidu {
		height: 90upx;
		padding-right: 30upx;
		border-top: 1px solid #ccc;

		text {
			background: #000040;
			width: 160upx;
			font-size: 28upx;
			text-align: center;
			color: #fff;
			line-height: 60upx;
			height: 60upx;
			margin-top: 15upx;
			border-radius: 8upx;
			display: inline-block;
			float: right;
		}
	}
</style>
