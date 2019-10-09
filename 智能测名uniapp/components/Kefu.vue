<template>
	<view>
		<Popups title="联系客服" ref="popups">
			<view class="work-time text_c">起名网在线客服联系方式<view>(工作日9:00-18:00)</view></view>
			<view class="p_l20 line_60">
				客服电话：<a href="tel:0731-89888777" style="padding-left: 20upx;color: #0073CF;"">0731-89888777</a>
			</view>
			<view class="line"></view>
			<view class="p_l20 line_60">
				手机号码：<a href="tel:17788989407" style="padding-left: 20upx;color: #0073CF;">17788989407</a>
			</view>
			<view class="line"></view>
			<view class="p_l20 line_60">
				微信公众号：<a href="tel:0731-89888777" style="padding-left: 20upx;">bazimingzi</a>
			</view>
			<view class="line"></view>
		</Popups>
	</view>
</template>

<script>
	import Popups from './Popups.vue';
	export default {
		components:{Popups},
		data() {
			return {
				
			};
		},
		methods:{
			show(){
				this.$refs.popups.show();
			}
		}
	}
</script>

<style lang="scss" scoped>
.work-time{
	padding: 20upx 0;
	font-size: 32upx;
	view{color: #999;}
}
.lianxi{
	position: fixed;
	right: 20upx;
	bottom: 100upx;
	z-index: 1000;
	height: 100upx;
	width: 100upx;
	background: url(https://static.quwangming.com/newqiming/images/m/cartoon/advisory_hd.png) no-repeat;
	background-size:cover;
}
</style>
