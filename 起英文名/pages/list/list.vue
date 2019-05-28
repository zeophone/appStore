<template>
	<view class="list" v-if="params">
		<view class="page">
			<view class="bg head">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<text class="head_title"><text class="head_top">基本信息</text></text>
				<view class="uname">
					<text><text>姓名</text>：{{params.surname+params.uname}}</text><text><text>性别</text>：{{params.sex_zh}}</text>
				</view>
				<view class="line"></view>
				<view class="uname">
					<text><text>星座</text>：{{params.constellatory_zh}}</text>
				</view>
				<view class="line"></view>
				<view class="uname">
					<text><text>标签</text>：{{params.feature_zh}}</text>
				</view>
				<view class="line"></view>
				<view class="">
					根据您的中文名，星座标签特征生成的英文名参考，时尚又潮流，并契合您星座及性格特质的英文名。
				</view>
			</view>
		</view>
		<view class="page" v-for="(item,i) in list" :key="i">
			<view class="bg">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<view class="name_title">
					<view class="name">
						<text class="text1">{{item.ename}}</text>
						<text class="text2">(译名:{{item.cname}})</text>
					</view>
<!-- 					<view class="right" @click="linkWeb(item.ename)">

					</view> -->
				</view>
				<view class="name_score">
					<view class="item">
						<text>流行趋势</text>
						<text class="item_bg"><text :style="{width:item.popularity,background: '#5bb85d'}"></text></text>
						<text>{{item.popularity}}</text>
						<view class="tig" >
							({{item.froms}})
						</view>
					</view>
					<view class="item">
						<text>星座适配</text>
						<text class="item_bg"><text :style="{width:item.constellatory_fit,background: '#59c0df'}"></text></text>
						<text>{{item.constellatory_fit}}</text>
						<view class="tig">
							(根据星座运势与星座使用比例)
						</view>
					</view>
					<view class="item">
						<text>性格适配</text>
						<text class="item_bg"><text :style="{width:item.disposition,background: '#efad4d'}"></text></text>
						<text>{{item.disposition}}</text>
						<view class="tig">
							(根据您选择的标签适配结果)
						</view>
					</view>
					<view class="item">
						<text>{{params.sex_zh}}比例</text>
						<text class="item_bg"><text :style="{width:params.sex=='3'?item.man_percent:item.woman_percent,background: '#dc534b'}"></text></text>
						<text>{{params.sex=='3'?item.man_percent:item.woman_percent}}</text>
						<view class="tig">
							({{params.sex_zh}}使用该名字占比)
						</view>
					</view>
					<view class="item">
						<text>名字印象</text>
						<text class="item_bg"><text :style="{width:item.nums_impression,background: '#5bb85d'}"></text></text>
						<text>{{item.nums_impression}}</text>
						<view class="tig">
							({{item.name_impression}})
						</view>
					</view>
				</view>
				<view class="name_mean">
					<text class="text1">名字含义：</text><text class="text2">{{item.meaning}}</text>
				</view>
				<view class="name_mean">
					<text class="text1">名字寓意：</text><text class="text2">{{item.moral}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params: null,
				list: null
			}
		},
		onLoad() {
			let data = uni.getStorageSync('english_name')
			this.params = data.params
			this.list = data.list
		},
		methods: {
			linkWeb(e){
				uni.navigateTo({
					url: '../webview/webview?ename=' + e
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		font-size: 30upx;

		.head {
			.head_title {
				text-align: center;
				display: inline-block;
				width: 100%;
				padding-bottom: 30upx;

				.head_top {
					background: #e3434f;
					line-height: 40upx;
					border: 1upx solid #000;
					border-top: 0;
					font-size: 28upx;
					color: #fff;
					border-bottom-left-radius: 8upx;
					border-bottom-right-radius: 8upx;
					display: inline-block;
					vertical-align: top;
					margin-top: -20upx;
					padding: 4upx 30upx;
				}
			}

			.uname {
				display: flex;
				line-height: 50upx;
				&>text {
					flex: 1;

					text {
						color: #999;
					}
				}
			}
		}

		.name_title {
			display: flex;
			height: 120upx;
			border-bottom: 1px solid #ccc;

			.name {
				display: flex;
				flex-direction: column;
				width: 90%;
				line-height: 60upx;

				.text1 {
					font-size: 46upx;
				}

				.text2 {
					color: #999;
					font-size: 26upx;
				}
			}

			.right {
				height: 120upx;
				width: 10%;
				background: url(https://static.quwangming.com/english/images/chinese/icon_jt_r.png) no-repeat;
				background-size: 20upx 40upx;
				background-position: 0 30upx;
			}
		}

		.name_score {
			padding-top: 30upx;
			padding-bottom: 20upx;
			border-bottom: 1px solid #ccc;

			.item {
				font-size: 24upx;
				color: #666;
				line-height: 40upx;
				margin-bottom: 10upx;

				.tig {
					font-size: 20upx;
					color: #999;
					text-align: center;
				}
			}

			.item_bg {
				display: inline-block;
				margin-left: 25upx;
				width: 400upx;
				height: 15upx;
				background: #f5f5f5;
				border-radius: 10upx;
				position: relative;
				margin-right: 20upx;

				text {
					height: 15upx;
					position: absolute;
					left: 0;
					border-radius: 10upx;
				}
			}
		}

		.name_mean {
			display: flex;
			padding-top: 30upx;

			.text1 {
				flex-shrink: 0;
				width: 150upx;
				color: #999;
			}
		}
	}
</style>
