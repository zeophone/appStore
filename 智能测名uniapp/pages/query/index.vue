<template>
	<view class="query">
		<view class="form dis_flex">
			<input type="text" v-model="mobile" placeholder="输入手机号，订单号，支付单号查询订单" placeholder-style="font-size:28upx;"/>
			<text class="iconfont iconsousuo" @click="mobileQuery"></text>
		</view>
		<view class="order-list p_t20" v-if="data">
			<view class="order-item dis-flex dir_c size_30" v-for="(item,i) in data">
				<view class="item_title">
					<view class="dis_flex fl_c">
						<image src="../../static/image/bagua.png" mode=""></image>
						<text>智能测名</text>	
					</view>
					<text :class="item.order_status==='0'?'co_red':'co_blue'">{{item.order_status==='0'?'未支付':'已支付'}}</text>
				</view>
				<view class="item-info line_60 ">
					<view class="dis-flex">
						<text class="flex_2">姓名：{{item.order_params.test_name}}</text>
						<text class="flex_1">性别：{{item.order_params.sex==='2'?'女':'男'}}</text>	
					</view>
					<view class="dis-flex  co_999">
						<text class="flex_2">订单号：{{item.order_sn}}</text>
					</view>	
					<view class="dis-flex  co_999">
						<text class="flex_2">下单时间：{{item.created_at}}</text>
					</view>		
				</view>
				<view class="item_bth">
					<view @click="payPop(item)" v-if="item.order_status==='0'">
						立即支付
					</view>
					<navigator v-else  :url="'/pages/result/ceming?order_sn='+item.order_sn">查看详情</navigator>
				</view>
			</view>
		</view>
		<image class="qiming-logo m_t40" src="//static.quwangming.com/newqiming/images/m/chuantong/copy.png" mode=""></image>
		<view class="text_c size_28 co_999 p_b40">© 起名网免费起名,姓名测试打分 www.yw11.com</view>
		<view class="lianxi" @click="kefu"></view>
		<Popups title="订单支付" ref="again">
			<view class="again-pay line_80" v-if="pay_item">
				<view ><text>用户姓名</text>：<text>{{pay_item.order_params.test_name}}</text></view>
				<view ><text>订单号</text>：<text class="size_30 co_999">{{pay_item.order_sn}}</text></view>
				<view ><text>订单金额</text>：<text class="co_red">{{pay_item.order_money}}</text></view>
				<view class="pay">
					<view class="wechat" @click="paySubmit('wechat')"><text></text>微信支付</view>
					<view v-if="$client=='wap'" class="alipay" @click="paySubmit('alipay')"><text></text>支付宝支付</view>
				</view>	
			</view>
		</Popups>	
		<Kefu ref="kefu"></Kefu>
	</view>
</template>

<script>
	import Popups from '@/components/Popups.vue';
	import Kefu from '@/components/Kefu.vue';
	export default {
		components:{
			Popups,
			Kefu
		},
		data() {
			return {
				data: null,
				pay_item: null,
				mobile:''
			}
		},
		onLoad() {
			if(uni.getStorageSync('token')){
				this.submit()
			}
		},
		methods: {
			mobileQuery(){
				this.submit(this.mobile);
			},
			kefu(){
				this.$refs.kefu.show();
			},
			submit(key){
				uni.showLoading({
					title:'查询中'
				})
				this.$http.post('/v5/order/search',{
					keyword:key||''
				}).then(res=>{
					uni.hideLoading();
					if(res.code==1){
						this.data = res.data;
						if(!this.data){
							uni.showToast({
								title: '未查询到相关信息',
								icon: 'none'
							})	
						}
					}else{
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					
				})
			},
			payPop(item){
				this.pay_item=item;
				this.$refs.again.show();
			},
			paySubmit(type){
				this.$http.post('/v5/pay/repay',{
					order_sn:this.pay_item.order_sn,
					pay_method: type
				}).then(res=>{
					if(res.code==1){
						if(type=='alipay'){
							location.href = res.data.url;
                            return false;
						}else{	
							localStorage.setItem('pay_result',JSON.stringify(res.data.result));
							location.href = res.data.url;
							return false;
						}
					};
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@font-face{ font-family: mutouren; src: url('https://static.quwangming.com/newqiming/css/fonts/mutouren.ttf')}
.query{
	padding: 20upx;
}
.form{
	width: 700upx;
	border: 1px solid #ccc;
	height: 90upx;
	align-items: center;
	justify-content: space-between;
	padding: 20upx;
	margin:0 auto;
	input{
		text-align: left;
		width: 580upx;
	}
	.iconfont{
		font-size: 48upx;
	}
}
.order-item{
	width:100%;
	background: #fff;
	padding: 20upx;
	margin-bottom:40upx;
	border-radius: 12upx;
	margin-bottom: 20upx;
	.item-info{
		text-align: left;
		flex-shrink: 0;
		width:500upx;
		margin-right:20upx;
	}
	.item_title{
		display: flex;
		height: 80upx;
		align-items: center;
		font-size: 36upx;
		justify-content: space-between;
		border-bottom: 1px solid #f8f8f8;
			image{
				width:40upx;
				height: 40upx;
				margin-right: 20upx;
			}
		}
		.item_bth{
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding: 0 20upx;
			border-top: 1px solid #f8f8f8;
			height: 80upx;
			&>*{
				flex-shrink: 0;
				padding: 10upx 20upx;
				border-radius: 12upx;
				border: 1px solid #999;
			}
		}
}
.query{
	min-height: 100vh;
	background: #f8f8f8;
    background-size: contain;
	text-align: center;
	.qiming-logo{
		display: inline-block;
		height: 90upx;
		width: 180upx;
	}
}

</style>
