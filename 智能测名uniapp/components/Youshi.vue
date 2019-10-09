<template>
	<view>
		<view class="youshi1">
			<view class="head">大数据分析</view>
			<view class="text">基于全网亿万姓名大数据分析，通过全网独家智能测名系统、大数据流行度分析系统，分析名字的使用频率与流行度趋势。多维度名字解析系统，让名字数据可视化，为用户提供更专业、更科学、更权威的分析结果。</view>
			<view class="icon">
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_xmqk.png" mode=""></image>
					<text>姓名使用\n情况</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_nnbl.png" mode=""></image>
					<text>男女使用\n比列</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_dzpm.png" mode=""></image>
					<text>单字使用\n性别排名</text>
				</view>
			</view>
			<view class="circle">
				<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/img01_01.png" mode=""></image>
			</view>
		</view>
		<view class="youshi2">
			<view class="head">音形义详解</view>
			<view class="text">基于字形、字义、音律三大分析系统，解析名字的意蕴内涵，名字的结构搭配，名字的音律组合，全面剖析名字综合属性、名与姓的搭配、名字来源，让名字指引未来的人生方向。</view>
			<view class="icon">
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_zi.png" mode=""></image>
					<text>字形解构</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_yin.png" mode=""></image>
					<text>音律搭配</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_yi.png" mode=""></image>
					<text>字义解析</text>
				</view>
			</view>
		</view>
		<view class="youshi3">
			<view class="head">星座分析</view>
			<view class="text">基于星座特质、星座性格优缺点，分析名字与星座性格的匹配度，通过名字的暗示寓意与星座性格标签解析，分析名字能否补足星座性格缺陷。</view>
			<view class="icon">
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_xztx.png" mode=""></image>
					<text>星座特性</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_xgbq.png" mode=""></image>
					<text>性格标签</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_ppzs.png" mode=""></image>
					<text>匹配指数</text>
				</view>
			</view>
		</view>
		<view class="youshi4">
			<view class="head">生肖分析</view>
			<view class="text">以传统生肖姓名学理论为依据，根据生肖喜忌，生肖特质，生肖性格标签，解析名字与名主生肖属性的匹配度，从属相方面提升个人运势。</view>
			<view class="icon">
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_sxxj.png" mode=""></image>
					<text>生肖喜忌</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_sxtz.png" mode=""></image>
					<text>生肖特质</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_ppzs.png" mode=""></image>
					<text>匹配指数</text>
				</view>
			</view>
		</view>
		<view class="youshi5">
			<view class="head">三才五格分析</view>
			<view class="text">根据《易经》的“象”、“数”理论，将人的姓名按天格、人格、地格、外格、总格来解析名字，分析名字对名主人生多个方面的运程影响，知名方能知命。</view>
			<view class="icon">
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_zysl.png" mode=""></image>
					<text>周易数理</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_wgpz.png" mode=""></image>
					<text>五格配置</text>
				</view>
				<view class="item">
					<image class="img" src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_ct_ppzs.png" mode=""></image>
					<text>运程解密</text>
				</view>
			</view>
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
	.youshi1 {
		background: #1f1f21;
		padding: 100upx 40upx;
		font-size: 28upx;
		color: #9c9c9c;

		.head {
			color: #fff;
		}

		.circle {
			padding-top: 60upx;
		}
	}

	.youshi2 {
		height: 606*2upx;
		background: #eaeaea url(https://static.quwangming.com/newqiming/images/m/ceming_201902/img02_01.jpg) center bottom no-repeat;
		background-size: contain;
		padding: 100upx 40upx;
		font-size: 28upx;
		color: #333;
	}

	.youshi3 {
		height: 606*2upx;
		background: #ffffff url(https://static.quwangming.com/newqiming/images/m/ceming_201902/img03_01.jpg) center bottom no-repeat;
		background-size: contain;
		padding: 100upx 40upx;
		font-size: 28upx;
		color: #333;
	}

	.youshi4 {
		height: 606*2upx;
		background: #f8f8f8 url(https://static.quwangming.com/newqiming/images/m/ceming_201902/img04_01.jpg) center bottom no-repeat;
		background-size: contain;
		padding: 100upx 40upx;
		font-size: 28upx;
		color: #333;
	}
		.youshi5 {
		height: 606*2upx;
		background: #ffffff url(https://static.quwangming.com/newqiming/images/m/ceming_201902/img05_01.jpg) center bottom no-repeat;
		background-size: contain;
		padding: 100upx 40upx;
		font-size: 28upx;
		color: #333;
	}

	.head {
		font-size: 52upx;
		font-weight: 700;
	}

	.text {
		line-height: 1.6;
		padding-top: 30upx;
	}

	.icon {
		padding-top: 30upx;
		display: flex;
		justify-content: space-between;

		.item {
			display: flex;
			flex-direction: column;
			flex-shrink: 0;
			width: 154upx;
			text-align: center;
		}

		.img {
			width: 154upx;
			height: 154upx;
			display: inline-block;
			margin-bottom: 20upx;
		}
	}
</style>
