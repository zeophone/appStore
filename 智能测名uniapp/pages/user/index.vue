<template>
	<view class="user">
		<navigator url="./help" class="user-info">
			<view class="dis_flex" v-if="user_info">
				<image :src="user_info.avatar" class="user_head" mode=""></image>
				<view class="user_name">{{user_info.nickname}}</view>	
			</view>
			<view class=""><text class="iconfont iconright"></text></view>
		</navigator>
		<navigator url="../query/index" class="menu-item">
			<view class="dis_flex">
				<image src="../../static/image/ceming_logo.jpg" mode=""></image>
				<view class="">我的订单</view>
			</view>
			<view class=""><text class="iconfont iconright"></text></view>
		</navigator>
		<view class="menu-item" @click="openKefu">
			<view class="dis_flex" >
				<image src="../../static/image/kefu.jpg" mode=""></image>
				<view class="">在线客服</view>
			</view>
			<view class=""><text class="iconfont iconright"></text></view>
		</view>
		<Kefu ref="kefu"></Kefu>
	</view>
</template>

<script>
	import Kefu from '@/components/Kefu.vue';
	export default {
		components:{Kefu},
		data() {
			return {
				user_head:'../../static/image/head.jpg',
				user_info: null
			};
		},
		onLoad() {
			this.$http.post('/v5/account/get_by_token',{}).then(res=>{
				if(res.code==1){
					this.user_info=res.data;
				}else{
					this.user_info=res.data;
				}
			})
		},
		methods:{
			openKefu(){
				this.$refs.kefu.show();
			}
		}
	}
</script>

<style lang="scss" scoped>
.user-info{
	height: 200upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20upx 0 60upx;
	border-bottom: 20upx solid #f8f8f8;
	.user_head{
		width: 120upx;
		height: 120upx;
		border-radius:20%;
		margin-right: 40upx;
	}
	.user_name{
		height: 120upx;
		font-size: 36upx;
		font-weight: 700;
	}
	
}
.iconright{
		font-size: 48upx;
		color: #999;
	}
.menu-item{
	display: flex;
	height: 90upx;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #f8f8f8;
	padding: 0 20upx;
	image{
		width: 40upx;
		height: 40upx;
		display: inline-block;
		margin-right: 20upx;
	}
	}
</style>
