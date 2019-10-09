<template>
	<view>
		<Popups title="是否已完成支付" ref="pop">
			<view class="p_t40">
				<view class="text_c line_80 f_s38 co_red" @click="userOrder">已完成支付</view>
				<view class="line"></view>
				<view class="text_c line_80 co_666" @click="repay">遇到问题？尝试再次支付</view>
				<view class="line"></view>
			</view>
		</Popups>
	</view>
</template>

<script>
	import Popups from '@/components/Popups.vue';
	export default {
		components: {
			Popups
		},
		data() {
			return {
				order_sn: '',
				timer: null
			}
		},
		mounted() {
			this.$refs.pop.show();
		},
		onLoad(options){
			this.order_sn=options.order_sn;
			this.http();
			this.query();
		},
		methods: {
			repay(){
				this.$http.post('/v5/pay/repay',{
					order_sn:this.order_sn,
					pay_method: 'wechat'
				}).then(res=>{
					if(res.code==1){
						localStorage.setItem('pay_result',JSON.stringify(res.data.result));
						location.href = res.data.url;
						return false;
					};
				})
			},
			query(){
				if(this.timer){
					clearInterval(this.timer);
				}
				this.timer=setInterval(this.http,3000)
			},
			http(){
				this.$http.post('/v5/order/status',{
					order_sn: this.order_sn
				}).then(res=>{
					if(res.code==1){
						if(res.data.status==="1"){
							if(this.timer){
								clearInterval(this.timer);
							}
							uni.redirectTo({
								url: '/pages/result/ceming?order_sn='+this.order_sn,
							});
						}
					}
				})
			},
			userOrder(){
				if(this.timer){
					clearInterval(this.timer);
				}
				uni.redirectTo({
					url: '/pages/query/index'
				})
			}
		}
	}
</script>
