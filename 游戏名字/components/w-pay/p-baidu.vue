<template>
	<view class="p_baidu">
		<view class="pay_button" @click="pay">
			立即支付
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			level: Number,
			type: Number,
			value: Number,
			scroll: Number
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
							var params = {
								order_level: this.level,
								order_type: this.type,
								pay_code: 'wechat',
								order_forms: '8',
								app_mchid: uni.getStorageSync('token'),
								ntoken:uni.getStorageSync('ntoken'),
								appflag: this.$store.state.appflag,
								app: 1
							}
							//请求订单信息
							uni.request({
								url: this.$store.state.baseUrl + '/api/baiduxcx/wangming_pay',
								method: 'POST',
								header: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								data: params,
								success: (res) => {
									console.log(res)
									if (res.data.code == 1) {
										var result = res.data.data;
										var order_sn = res.data.data.order_sn;
										var pay_sn = res.data.data.tpOrderId;
										console.log(result)
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
												let timer=setInterval(()=>{
													uni.request({
														url: this.$store.state.baseUrl + '/api/baiduxcx/wangming_query',
														method: 'GET',
														data: {
															app: 1,
															pay_sn: pay_sn
														},
														success: (res) => {
															if(res.data.code==1){
																uni.hideLoading()
																uni.showToast({
																	title: '支付成功',
																	duration: 3000
																});
																clearInterval(timer)
																uni.switchTab({
																	url: '../../pages/order/order'
																})
															}
														}
													})	
												},1000)
												
											},
											fail: (e)=>{
												console.log(e)
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
				});
			}
		}
	}
</script>

<style lang="less">
	.p_baidu {
		width: 100%;
		padding: 10upx 0;

		.pay_button {
			width: 700upx;
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			margin: 0 auto;
			color: #fff;
			background: #00b700;
			border-radius: 10upx;
		}
	}
</style>
