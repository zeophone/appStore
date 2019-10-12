<template>
	<view class="qinglv-index">
		<view class="form">
			<view class="item b">
				<input type="text" value="" placeholder="我的姓名"/>
			</view>
			<view class="item m_b20 t" @click="myBirthdayFn">
				<input disabled type="text" value="" placeholder="我的出生时间"/>
				<text class="iconfont iconTriangle"></text>
			</view>
			<view class="item b">
				<input type="text" value="" placeholder="Ta的姓名"/>
			</view>
			<view class="item m_b20 t">
				<input disabled type="text" value="" placeholder="Ta的出生时间"/>
				<text class="iconfont iconTriangle"></text>
			</view>
			<view class="item m_b20">
				<input disabled type="text" value="" placeholder="网名风格"/>
				<text class="iconfont iconTriangle"></text>
			</view>			
			<view class="item submit" @click="submit">开始测试</view>
		</view>
		<Picker :mode="picker.mode" startYear="1960" endYear="2029" :defaultVal="picker.value" @confirm="pickerCall" ref="picker"
		 themeColor="#c55ecb"></Picker>
	</view>
</template>

<script>
	import Picker from '@/components/w-picker/main.vue';
	let myDate = new Date();
	export default {
		components:{Picker},
		data() {
			return {
				picker:{
						mode: "dateTime",
						value: [myDate.getFullYear()-1960, myDate.getMonth(), myDate.getDate()-1, myDate.getHours(), 3]
				}
			}
		},
		onLoad() {

		},
		methods: {
			myBirthdayFn(){
				this.$refs.picker.show();
			},
			pickerCall(obj){
				console.log(obj);
			},
			submit(){
				uni.navigateTo({
					url:'../middle/qinglv'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.qinglv-index {
		width: 100%;
		height: 100%;
		background: #fff;
		background: url(../../static/image/ql_bg.jpg) no-repeat;
		background-size: 750upx 550upx;
		padding-top: 450upx;
		font-size:32upx;
	}
	.form{
		width: 690upx;
		margin: 0 auto;
		.item{
			background: #f7f7f7;
			width: 100%;
			height: 100upx;
			display: flex;
			align-items: center;
			padding: 0 20upx;
			border-radius: 6px;
			overflow: hidden;
			border:1px solid #dbdbdb;
			justify-content: space-between;
			.iconTriangle{color: #dbdbdb;font-size: 28upx;}
			input{width: 600upx;}
		}
		.item.b{
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		}
		.item.t{
			border-top: 0;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
		.item.submit{
			justify-content: center;
			background: #c55ecb;
			color: #fff;
			font-weight: 700;
			font-size: 36upx;
			border: 0;
		}
	}
</style>
