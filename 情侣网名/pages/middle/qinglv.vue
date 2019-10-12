<template>
	<view class="qinglv-middle">
		<view class="title"><text class="iconfont iconorder"></text><text>基本信息</text></view>
		<view class="container">
			<view class="row">
				<text>我的名字</text>
			</view>
			<view class="line"></view>
			<view class="row">
				<text>出生时间</text>
			</view>
			<view class="line"></view>
			<view class="row">
				<view class="col">
					<text>Ta的名字</text>
				</view>
				<view class="col">
					<text>Ta的性别</text>
				</view>
			</view>
			<view class="line"></view>
			<view class="row">
				<text>Ta的出生时间</text>
			</view>
			<view class="line"></view>
			<view class="row">
				<text>网名风格</text>
			</view>
		</view>
		<view class="title"><text class="iconfont iconorder"></text><text>八字五行、生肖及星座分析</text></view>
		<view class="container">
			<view class="table">
				<view class="row">
					<text></text>
					<text>八字</text>
					<text>生肖</text>
					<text>星座</text>
				</view>
				<view class="line"></view>
				<view class="row">
					<text>我</text>
					<text>火</text>
					<text>龙</text>
					<text>双子座</text>
				</view>
				<view class="line"></view>
				<view class="row">
					<text>Ta</text>
					<text>火</text>
					<text>龙</text>
					<text>双子座</text>
				</view>
				<view class="line"></view>
			</view>
			<view class="">
				描述
			</view>
		</view>
		<view class="container">
			<view class="list_title">
				<view class="co_man">春娇</view>
				<view class="score">
					<text class="iconfont iconxinaixin f_s24"></text>
					<text class="score_num">99</text>
					<text class="f_s24">甜蜜指数</text>
				</view>
				<view class="co_wom">志明</view>
			</view>
			<view class="line"></view>
			<view class="p_t20 p_b20">
				<view class="par_item m_r40">
					<text>八字开运<text>81%</text></text>
					<text class="slip_bg"><text :style="{background:'#ccd2ac',width:'80%'}"></text></text>
				</view>
				<view class="par_item m_r40">
					<text>财运评分<text>81%</text></text>
					<text class="slip_bg"><text :style="{background:'#add2b1',width:'80%'}"></text></text>
				</view>
				<view class="par_item">
					<text>数理评分<text>81%</text></text>
					<text class="slip_bg"><text :style="{background:'#b1d9e1',width:'80%'}"></text></text>
				</view>
				<view class="par_item m_r40">
					<text>星座开运<text>81%</text></text>
					<text class="slip_bg"><text :style="{background:'#b2bbd8',width:'80%'}"></text></text>
				</view>
				<view class="par_item m_r40">
					<text>用户喜欢<text>81%</text></text>
					<text class="slip_bg"><text :style="{background:'#d4bcd4',width:'80%'}"></text></text>
				</view>		
			</view>
			<view class="line"></view>
		</view>
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
.qinglv-middle{background: #c55ecb;color: #fff;padding: 20upx;font-size: 32upx;}
.co_man{color:#58b9fe;}
.co_wom{color:#e895ed;}
.par_item{
	display: inline-block;
	width:180upx;
	line-height: 60upx;
	font-size:28upx;
	margin-bottom:20upx;
	.slip_bg{
		display: block;
		height: 16upx;
		width: 100%;
		background: #e4e4e4;
		border-radius: 12upx;
		overflow: hidden;
		position:relative;
		text{height: 16upx;position: absolute;left: 0;top: 0;}
	}
}
.list_title{
	display: flex;
	align-items: center;
	justify-content: center;
	height:140upx;
	.score{
		display: flex;
		flex-direction: column;
		text-align: center;
		color:#e895ed;
		padding: 0 20upx;
		height:100%;
		align-items:center;
		justify-content:center;
		position:relative;
		&:after{
			content:'';
			width: 14upx;
			height: 14upx;
			position: absolute;
			bottom: -10upx;
			left: 50%;
			background: #fff;
			border: 1px solid #e1e1e1;
			transform: translate(-50%,0) rotate(45deg);
			border-bottom: 0;
			border-right: 0;
			z-index: 1;
		}
		.score_num{
			font-size: 68upx;
			line-height: 60upx;
		}
	}
}
.table{
	padding: 20upx 0;
.row>text{
	flex: 1;
	height: 88upx;
	text-align: center;
	line-height: 88upx;
	border-right: 1px solid #e1e1e1;
}	
.row>text:nth-of-type(4){
	border-right: 0;
}
} 
.title{
	display:flex;
	align-items:center;
	height:52upx;
	.iconfont{font-size: 38upx;margin-right: 10upx;}
}
.container{
	padding: 0 30upx;
	background: #fff;
	border-radius: 12upx;
	color: #999;
	margin-top: 20upx;
	margin-bottom: 30upx;
	box-shadow:3px 2px 5px rgba(0,0,0,0.2);
	.row{
		height: 88upx;
		display: flex;
		align-items: center;
		.col{
			display: flex;
			flex: 1;
		}
	}
}
</style>
