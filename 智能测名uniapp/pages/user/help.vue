<template>
	<view>
		<navigator url="./quest" class="menu-item">
			<view class="dis_flex">
				<view class="">帮助与反馈</view>
			</view>
			<view class=""><text class="iconfont iconright"></text></view>
		</navigator>
		<navigator url="./protocol" class="menu-item">
			<view class="dis_flex">
				<view class="">用户协议</view>
			</view>
			<view class=""><text class="iconfont iconright"></text></view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
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
	}
</style>
