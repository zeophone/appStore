<template>
	<view class="order_list">
		<view class="item" v-for="(item,i) in list" :key="i">
			<text class="btn">
				<text>{{item.des}}</text>
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: null
			};
		},
		onLoad() {
			uni.request({
				url: this.$store.state.baseUrl + '/calculation/index/get_order',
				method: 'POST',
				data: {
					token: uni.getStorageSync('token')
				},
				header: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
				success: (res) => {
					if (res.data.code == 1) {
						this.list = res.data.data
					} else {
						uni.showToast({
							'title': res.data.msg,
							'icon': 'none'
						})
					}

				}
			})
		}
	}
</script>

<style lang="less">
	.order_list {
		.item {
			text-align: center;
			width: 750upx;
			box-sizing: border-box;
			padding: 20upx 0;

			.btn {
				text {
					display: block;
				}

				display: block;
				width: 700upx;
				height: 172upx;
				padding-top: 20upx;
				box-sizing: border-box;
				line-height: 60upx;
				color: #feffca;
				font-size: 32upx;
				margin: 0 auto;
				background: url('https://qiming.yw11.com/cesuan/hehun/images/text_t.png') no-repeat 0 0,
				url('https://qiming.yw11.com/cesuan/hehun/images/text_b.png') no-repeat left bottom;
				background-size: 100% 86upx;
			}
		}

	}
</style>
