<template>
	<view class="pay">
		<view class="">
			<!-- #ifndef MP -->
				<view class="pay_head">
					智能起名套餐选择
					<text @click="hide">×</text>
				</view>
			<!-- #endif -->
			<view class="type" v-if="pay_view">
				<view class="type_head">
					
				</view>
				<view class="type_item" v-for="(item,i) in pay_view" :key="i" :class="{select: i==select}"
				 @click="orderType(i)">
					<view class="bg">
						<text class="bg_l bg_angle"></text>
						<text class="bg_r bg_angle"></text>
						<text class="bg_bl bg_angle"></text>
						<text class="bg_br bg_angle"></text>
						<view class="type_item_name">
							{{item.level_price}}<text>元</text>
						</view>
						<view class="type_item_con">
							{{item.text_new}}
						</view>
					</view>
				</view>
			</view>
			
			<view class="price" v-if="pay_view">
				<view class="price_val" @click="pick">
					已选套餐内容<text>￥{{pay_view[select].level_price}}</text>
				</view>
				<view class="price_con">
					<text>{{pay_view[select].text}}</text>
				</view>
			</view>
			<view class="pay_methods center" v-if="pay_view">
				<!-- #ifdef H5 -->
				<p-h5 :level="num" :type="select" :value="pay_view[select].level_price" :scroll="scrollT"></p-h5>
				<!-- #endif -->
				<!-- #ifdef MP-BAIDU -->
				<p-baidu :level="num" :type="select" :value="pay_view[select].level_price" :scroll="scrollT"></p-baidu>
				<!-- #endif -->
			</view>
			<w-youshi></w-youshi>
		</view>
	</view>
</template>

<script>
	import wYoushi from "@/components/w-youshi/w-youshi.vue"
	import pH5 from "@/components/w-pay/p-h5.vue"
	import pBaidu from "@/components/w-pay/p-baidu.vue"
	export default {
		data() {
			return {
				pay_view: null,
				select: 0,
				percent:['95.6%','96.8%'],
				num: 2,
				scrollT:0
			}
		},
		components: {
			wYoushi,
			pH5,
			pBaidu
		},
		onLoad() {
			if(!uni.getStorageSync('pay_view')){
				uni.request({
					url: this.$store.state.baseUrl+'/api/child/view',
					method: 'POST',
					data: {
						app_mchid: uni.getStorageSync('token'),
						app: 1
					},
					header: {
						"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
					},
					success: (res) => {
						if(res.data.code==1){
							uni.setStorageSync('pay_view',res.data.data)
							this.pay_view=res.data.data.order_config	
						}
					}
				});
			}else{
				this.pay_view=uni.getStorageSync('pay_view').order_config	
			}
				
		},
		onPageScroll(obj){
			this.scrollT=obj.scrollTop
		},
		methods: {
			pick(){
				this.$refs.picker.show()
			},
			hide() {
				uni.navigateBack()
			},
			orderType(i) {
				this.select = i
			},
			orderNum(i) {
				this.num = i
			}
		},
	}
</script>

<style lang="less">
	.pay {
		background: #fff;
		z-index: 100;
		.pay_head {
			height: 80upx;
			line-height: 80upx;
			background: #333333;
			color: #FFFFFF;
			padding-left: 20upx;
			font-size: 32upx;
			position: relative;
			text {
				height: 80upx;
				position: absolute;
				right: 0;
				top: 0;
				font-size: 60upx;
				color: #ccc;
				width: 80upx;
				text-align: center;
			}
		}
		.type_item_name{
			font-size: 60upx;
			text{
				font-size: 26upx;
			}
			}
		.type {
			margin: 20upx;
			border-bottom: 1px solid #ccc;
			.type_head {
				font-size: 30upx;
				margin-bottom: 20upx;
				background: url(https://static.quwangming.com/p_child_name/images/28_ad.png) no-repeat;
				height: 384upx;
				background-size: 750upx 384upx;
			}

			.type_item {
				display: inline-block;
				width: 340upx;
				border: 4upx solid #333;
				margin-bottom: 20upx;
				margin-right: 20upx;
				padding: 10upx;
				box-sizing: border-box;
			}

			.type_num {
				display: inline-block;
				width: 220upx;
				border: 4upx solid #333;
				margin-bottom: 20upx;
				margin-right: 20upx;
				padding: 10upx;
				box-sizing: border-box;
				font-size: 28upx;
			}

			.type_num:nth-of-type(4) {
				margin-right: 0;
			}

			.type_item:nth-of-type(3),
			.type_item:nth-of-type(5) {
				margin-right: 0;
			}

			.type_item_con {
				font-size: 28upx;
				color: #333;
			}

			.select {
				color: #e3434f;
				border: 4upx solid #e3434f;
				font-weight: 700;

				.bg {
					border: 1upx solid #e3434f;
				}

				.bg_angle {
					border: 1px solid #e3434f;
				}

				.bg:after {
					content: '';
					position: absolute;
					height: 40upx;
					width: 40upx;
					background: url('https://static.quwangming.com/v3/newqiming/images/m/chuantong/tc_gou.png') no-repeat;
					background-size: 40upx 80upx;
					background-position: 0 -40upx;
					right: 0;
					bottom: 0;
				}
			}
		}

		.price {
			margin: 20upx;

			.price_val {
				font-size: 30upx;

				text {
					color: #d62a36;
					font-size: 40upx;
					padding-left: 20upx;
				}
			}

			.price_con {
				font-size: 30upx;
				margin-top: 20upx;

				b {
					display: inline-block;
					color: #0073cf;
				}
			}
		}

		.bg {
			border: 1upx solid #ccc;
			position: relative;
			padding: 20upx;
		}
	}
</style>
