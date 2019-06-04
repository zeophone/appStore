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
				uni.request({
					url: this.$store.state.baseUrl+'/v2/api/nameorder/orderpay',
					methods: 'GET',
					data: {
						order_sn: this.orderSn,
						app: 1,
						is_h5: 1
					},
					success: (res) => {
						location.href=res.data.data.result
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
