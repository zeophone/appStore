<template>
	<view class="popups" v-show="isShow">
		<view class="bg" @click.self="hide"></view>
		<view class="content">
			<view class="title">
			{{title}}<text class="iconfont iconguanbi" @click="hide"></text>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			};
		},
		props:{
			title:{
				type: String,
				required:true
			}
		},
		methods:{
			show(){
				this.isShow=true;
			},
			hide(){
				this.isShow=false
			}
		}
	}
</script>

<style lang="scss" scoped>
		.bg {
			position: fixed;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			background: rgba(0,0,0,0.8);
			z-index:88;
		}
		.content {
			width: 600upx;
			padding-bottom: 20upx;
			position: fixed;
			left: 50%;
			top: 50%;
			background: #fff;
			z-index:89;
			padding: 80upx 20upx;
			transform: translate(-50%,-50%);
			border-radius: 12upx;
			text-align: left;
		}
		.title{
			position: absolute;
			left: 0;
			top: 0;
			text-align: center;
			color: #bda02c;
			font-size: 38upx;
			line-height: 80upx;
			height: 80upx;
			width: 100%;
			background:#f8f8f8;
			background-size:cover;
			border-top-left-radius: 12upx;
			border-top-right-radius: 12upx;
			.iconfont{
				position: absolute;
				right: 30upx;
				color: #777;
			}
		}
		
		.content .bottom{
			height: 80upx;
			width: 100%;
			background: #f8f8f8;
			position: absolute;
			left: 0;
			bottom: 0;
			text-align: center;
			color: #00ADE7;
			line-height: 80upx;
			border-bottom-left-radius: 12upx;
			border-bottom-right-radius: 12upx;
		}
</style>
