<template>
	<view v-if="data">
		<view class="page">
			<view class="bg">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<view class="child_name1">
					<view class="item1">
						<view class="name_pinyin" v-for="(item,i) in data.child_name_info.child_name">
							<text class="pinyin">[{{name_pinyin[i]}}]</text>
							<text class="hanzi">{{item}}</text>
						</view>
					</view>
					<view class="item2">
						<view class="score_num">{{data.total_score}}</view>
						<view class="score_tig">综合评分</view>
					</view>
					<view class="score">
						<view class="col">
							<view class="item">
								<text>好听内涵&emsp;{{data.total_score}}分</text>
								<text class="item_bg"><text :style="{width:data.total_score+'%',background: '#ccd2ac'}"></text></text>
							</view>
							<view class="item">
								<text>国学得分&emsp;{{data.luck_god_score}}分</text>
								<text class="item_bg"><text :style="{width:data.luck_god_score+'%',background: '#acd2b0'}"></text></text>
							</view>
							<view class="item">
								<text>生肖属相&emsp;{{data.zodiac_score}}分</text>
								<text class="item_bg"><text :style="{width:data.zodiac_score+'%',background: '#b0d9e1'}"></text></text>
							</view>
						</view>
						<view class="col">
							<view class="item">
								<text>星座特征&emsp;{{data.constellation_suggest}}分</text>
								<text class="item_bg"><text :style="{width:data.constellation_suggest+'%',background: '#b2bbd8'}"></text></text>
							</view>
							<view class="item">
								<text>五格数理&emsp;{{data.three_five_score}}分</text>
								<text class="item_bg"><text :style="{width:data.three_five_score+'%',background: '#d3bcd4'}"></text></text>
							</view>
							<view class="item">
								<text>音形义&emsp;{{data.sounds_score}}分</text>
								<text class="item_bg"><text :style="{width:data.sounds_score+'%',background: '#edc3ce'}"></text></text>
							</view>
						</view>
					</view>
					<view class="eight_yun">
						<text>八字分析</text>
						<text>{{data.eight_five_word}}</text>
					</view>
					<view class="eight_yun">
						<text>八字开运</text>
						<!-- #ifndef MP-BAIDU -->
						<text v-html="data.eight_five_msg"></text>
						<!-- #endif -->
						
					<!-- #ifdef MP-BAIDU -->
						<rich-text :nodes="data.eight_five_msg"></rich-text>
					<!-- #endif -->
					</view>
					
					<view class="eight_yun" v-if="data.child_name_info.culture_msg_list">
						<text>文化内涵</text>
						<text>{{data.child_name_info.culture_msg_list[0]}}</text>
					</view>
					<view class="eight_yun">
						<text>小名标签</text>
						<text>
							<text v-for="(item,i) in data.zodiac_advantage_arr" :key="i" v-show="i<4" class="biaoqian">{{item}}</text>
						</text>
					</view>
				</view>
			</view>
		</view>
		<view class="page">
			<view class="bg">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<view class="title">
					国学起名详解
				</view>
				<view class="luck_god1">
					<view class="luck_god_det">
						<text>公&emsp;历：</text>
						<text v-for="(item,index) in zhengongli" :key="index">{{item}}</text>
					</view>
					<view class="luck_god_det">
						<text>农&emsp;历：</text>
						<text v-for="(item,index) in zhennongli" :key="index">{{item}}</text>
					</view>
					<view class="luck_god_det">
						<text>八&emsp;字：</text>
						<text v-for="(item,index) in eight_word" :key="index">{{item}}</text>
					</view>
					<view class="luck_god_det">
						<text>五&emsp;行：</text>
						<text v-for="(item,index) in five_word" :key="index">{{item}}</text>
					</view>
					<view class="luck_god_det">
						<text>纳&emsp;音：</text>
						<text v-for="(item,index) in layin" :key="index">{{item}}</text>
					</view>
				</view>
				<view class="title">
					五行强弱分析
				</view>
				<view class="five">
					<view class="list">金<view class="list_bg"><text :style="{width: data.jin_ratio+'%',background: '#b8860b'}"></text></view>{{data.jin_ratio}}%</view>
					<view class="list">木<view class="list_bg"><text :style="{width: data.mu_ratio+'%',background: '#008000'}"></text></view>{{data.mu_ratio}}%</view>
					<view class="list">水<view class="list_bg"><text :style="{width: data.shui_ratio+'%',background: '#0073cf'}"></text></view>{{data.shui_ratio}}%</view>
					<view class="list">土<view class="list_bg"><text :style="{width: data.tu_ratio+'%',background: '#e25822'}"></text></view>{{data.tu_ratio}}%</view>
					<view class="list">火<view class="list_bg"><text :style="{width: data.huo_ratio+'%',background: '#a67b5b'}"></text></view>{{data.huo_ratio}}%</view>
				</view>
				<view class="">
					{{data.wuxing_count}}
					{{data.wuxing}}
				</view>
				<view class="title">
					生肖起名详解
				</view>
				<view class="">
					{{data.zodiac}}
				</view>
				<view class="title">
					星座起名详解
				</view>
				<view class="">
					{{data.constellation}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:null,
				zhengongli: ['', '', '', ''],
				zhennongli: ['', '', '', ''],
				eight_word: ['', '', '', ''],
				five_word: ['', '', '', ''],
				wuxing_count: ['', '', '', ''],
				layin: ['', '', '', ''],
				name_pinyin: []
			};
		},
		onLoad(options) {
			uni.request({
				url: this.$store.state.baseUrl+'/v3/api/child/detail',
				method: 'GET',
				data: options,
				success: (res) => {
						if(res.data.code==1){
							this.data=res.data.data
							this.zhengongli=this.data.zhengongli.split(',')
							this.zhennongli=this.data.zhennongli.split(',')
							this.eight_word=this.data.eight_word.split(',')
							this.five_word=this.data.five_word.split(',')
							this.wuxing_count=this.data.wuxing_count.split(',')
							this.layin=this.data.layin
							this.name_pinyin=this.data.child_name_info.name_pinyin.split(',')
						}
					},
				})
		}
	}
</script>

<style lang="less">
	.luck_god1 {
		border-left: 1px dotted #bfdacb;
		border-bottom: 1px dotted #bfdacb;
	}
	.luck_god_det {
		display: flex;
	
		text {
			flex: 1;
			font-size: 28upx;
			text-align: center;
			border: 1px dotted #bfdacb;
			line-height: 50upx;
			border-bottom: 0;
			border-left: 0;
		}
	}
			.five {
		.list {
			display: flex;
		}
	
		.list_bg {
			flex-shrink: 0;
			width: 500upx;
			height: 20upx;
			background: #f5f5f5;
			margin: 10upx 10upx 0;
			position: relative;
	
			text {
				display: inline-block;
				height: 20upx;
				position: absolute;
			}
		}
	
		.list:nth-of-type(1) {
			color: #b8860b;
		}
	
		.list:nth-of-type(2) {
			color: #008000;
		}
	
		.list:nth-of-type(3) {
			color: #0073cf;
		}
	
		.list:nth-of-type(4) {
			color: #e25822;
		}
	
		.list:nth-of-type(5) {
			color: #a67b5b;
		}
	}
		.eight_yun {
		display: flex;
		padding-top: 10upx;
	
		.tian {
			background: #2da9df;
			color: #ffffff !important;
			display: inline-block;
			width: 80upx;
			height: 38upx;
			line-height: 38upx;
			margin-right: 10upx;
			text-align: center;
			font-size: 28upx;
			
		}
	
		.bei {
			display: block;
			font-size: 22upx;
			color: #999999;
		}
		.biaoqian{
			display: inline-block;width: 100upx;height: 110upx;border-radius: 50%;margin-right: 20upx;background: #fffaf1;
			color: #c39e5f;
			text-align: center;
			line-height: 110upx;
			overflow: hidden;
			}
		&>text:nth-of-type(1) {
			flex-shrink: 0;
			width: 80upx;
			color: #999;
			margin-right: 20upx;
		}
	
		&>text:nth-of-type(2),rich-text{
			line-height: 40upx;
			border-bottom: 1px dotted #ccc;
			padding-bottom: 20upx;
			margin-bottom: 10upx;
		}
		
	}
.child_name1{
	padding: 40upx 20upx 0;
	font-size: 30upx;
	.item1{
		margin: 0 auto;
		display: flex;
		width: 320upx;
		.name_pinyin{
			display: flex;
			flex-direction: column;
			text-align: center;
			flex: 1;
			.pinyin{font-size: 28upx;}
			.hanzi{font-size: 98upx;font-weight: 700;}
		}
	}
	.item2{
		text-align: center;
		.score_num{color:#f05654;font-size: 42upx;font-weight: 700upx;}
		.score_tig{
			font-size: 26upx;
			padding-bottom: 20upx;
			border-bottom: 1px solid #ccc;
			position: relative;
			}
			.score_tig:after{
				content: '';
				position:absolute;
				width:20upx;
				height: 20upx;
				border: 1px solid #ccc;
				bottom: -12upx;
				border-right: 0;
				border-bottom: 0;
				left: 48%;
				background: #fff;
				transform: rotate(45deg)
			}
	}
	.score {
		padding-top: 40upx;
		padding-bottom: 20upx;
		border-bottom: 1upx solid #ccc;
	
		.col {
			display: flex;
	
			.item {
				flex: 1;
				font-size: 24upx;
				color: #666;
				line-height: 40upx;
				text-align: center;
				display: flex;
				flex-direction: column;
				margin-bottom: 10upx;
			}
	
			.item_bg {
				margin-left: 25upx;
				width: 160upx;
				height: 15upx;
				background: #f5f5f5;
				border-radius: 10upx;
				position: relative;
	
				text {
					height: 15upx;
					position: absolute;
					left: 0;
					border-radius: 10upx;
				}
			}
		}
	}
	.eight_yun {
		display: flex;
		padding-top: 10upx;
	
		.tian {
			background: #2da9df;
			color: #ffffff !important;
			display: inline-block;
			width: 80upx;
			height: 38upx;
			line-height: 38upx;
			margin-right: 10upx;
			text-align: center;
			font-size: 28upx;
			
		}
	
		.bei {
			display: block;
			font-size: 22upx;
			color: #999999;
		}
		.biaoqian{
			display: inline-block;width: 100upx;height: 110upx;border-radius: 50%;margin-right: 20upx;background: #fffaf1;
			color: #c39e5f;
			text-align: center;
			line-height: 110upx;
			overflow: hidden;
			}
		&>text:nth-of-type(1) {
			flex-shrink: 0;
			width: 80upx;
			color: #999;
			margin-right: 20upx;
		}
	
		&>text:nth-of-type(2),rich-text{
			line-height: 40upx;
			border-bottom: 1px dotted #ccc;
			padding-bottom: 20upx;
			margin-bottom: 10upx;
		}
		
	}
	
}
</style>
