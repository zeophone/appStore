<template>
	<view>
		<view class="type" v-if="payView">
			<view class="type_head">
				
			</view>
			<view class="type_item" v-for="(item,i) in payView" :key="i" :class="{select: i==select}"
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
						<text>{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="price" v-if="payView">
			<view class="price_val" @click="pick">
				已选套餐内容<text>￥{{payView[select].level_price}}</text>
			</view>
			<view class="price_con">
				<text>{{payView[select].text}}</text>
			</view>
		</view>
		<view class="pay_methods center" v-if="payView">
			<!-- #ifdef H5 -->
			<p-h5 :level="select" :type="select" :value="payView[select].level_price" :scroll="scrollT"></p-h5>
			<!-- #endif -->
			<!-- #ifdef MP-BAIDU -->
			<p-baidu :level="select" :type="select" :value="payView[select].level_price" :scroll="scrollT"></p-baidu>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import pH5 from "@/components/w-pay/p-h5.vue"
	import pBaidu from "@/components/w-pay/p-baidu.vue"
	export default {
		components: {
			pH5,
			pBaidu
		},
		data() {
			return {
				payView: null,
				select: 1,
				scrollT: 0
			};
		},
		onLoad() {
			if(uni.getStorageSync('pay_view')){
				let arr=uni.getStorageSync('pay_view')
				for(let key in arr){
					arr[key].text=arr[key].text.replace(/<.*?>/g,'')
				}
				this.payView=arr
			}else{
				
			}
		},
		onPageScroll(obj){
			this.scrollT=obj.scrollTop
		},
		methods:{
			orderType(i){
				this.select=i
			}
		},
		
	}
</script>

<style lang="less">
		.type {
			margin: 20upx;
			border-bottom: 1px solid #ccc;
			.type_head {
				font-size: 30upx;
				margin-bottom: 20upx;
				background: url(https://static.quwangming.com/uploads/wangming18.png) no-repeat;
				height: 434upx;
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
				font-size: 24upx;
				color: #999;
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
</style>
