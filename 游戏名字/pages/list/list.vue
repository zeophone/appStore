<template>
	<view v-if="result">
		<view class="page">
			<view class="bg head">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<text class="head_title"><text class="head_top">基本信息</text></text>
				<view class="uname">
					<text><text>姓名</text>：{{result.params.real_name}}</text><text><text>星座</text>：<text v-for="item in result.constellation"
						 :key="item">{{item}}</text></text>
				</view>
				<view class="line"></view>
				<view class="uname">
					<text><text>公历</text>：{{result.zhennongli}}</text>
				</view>
				<view class="line"></view>
				<view class="uname" v-if="tid_str">
					<text><text>风格</text>：{{tid_str}}</text>
				</view>
				<view class="line" v-if="tid_str"></view>
				<view class="">
					根据您的生辰、星座、数理及所选风格，智能为你筛选时尚又潮流，并契合您星座及特质的网名。
				</view>
			</view>
		</view>
		<view class="page" v-for="(item,i) in result.net_list" :key="i">
			<view class="bg head">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<view class="list_head">
					<text class="text1">{{item.net_name}}</text>
					<text class="text2" @click="copyName(item.net_name)">点击复制</text>
					<text class="text3" @click="toDetail(item.base_id,item.tk)">查看详情</text>
				</view>
				<view class="name_score">
					<view class="item">
						<text>八字开运</text>
						<text class="item_bg"><text :style="{width:item.eight_score+'%',background: '#5bb85d'}"></text></text>
						<text>{{item.eight_score}}</text>
						<view class="tig">
							(八字大运分析，好名字助好运)
						</view>
					</view>
					<view class="item">
						<text>财运适配</text>
						<text class="item_bg"><text :style="{width:item.fortune_score+'%',background: '#59c0df'}"></text></text>
						<text>{{item.fortune_score}}分</text>
						<view class="tig">
							(梅花易数评定财运事业运势)
						</view>
					</view>
					<view class="item">
						<text>数理适配</text>
						<text class="item_bg"><text :style="{width:item.num_score+'%',background: '#efad4d'}"></text></text>
						<text>{{item.num_score}}分</text>
						<view class="tig">
							(数理吉凶测评得分)
						</view>
					</view>
					<view class="item">
						<text>星座适配</text>
						<text class="item_bg"><text :style="{width:item.constellation_score+'%',background: '#6bd6d6'}"></text></text>
						<text>{{item.constellation_score}}分</text>
						<view class="tig">
							(根据你的星座与名字适配度评分)
						</view>
					</view>
					<view class="item">
						<text>名字印象</text>
						<text class="item_bg"><text :style="{width:item.like_score+'%',background: '#ffabde'}"></text></text>
						<text>{{item.like_score}}%</text>
						<view class="tig">
							({{item.like_score}}%用户喜欢这个名字)
						</view>
					</view>
				</view>
				<view class="transform">
					<view class="transform_tit">
						个性转换 
						<text @click="getTransifrom(item.net_name,i,1)">日语</text>
						<text @click="getTransifrom(item.net_name,i,2)">韩语</text>
						<text @click="getTransifrom(item.net_name,i,3)">泰语</text>
						<text @click="getTransifrom(item.net_name,i,4)">俄语</text>
					</view>
					<view class="transform_list" v-if="personality[i].length>0">
						<view v-for="(o,n) in personality[i]" :key="n" class="item"><text class="text1">{{n+1}}.{{o}}</text><text class="text2" @click="copyName(o)">点击复制</text></view>
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
				<view class="center bold lh50 fs32">
					十年精心研发，好名受用一生
				</view>
				<view class="center lh50 fs32">
					大约有300个更高分吉祥好听名字
				</view>
				<view class="uni-btn-v submit">
					<text class="button" @click="submit_pay">查看更多高分好名</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import qs from 'qs'
	export default {
		data() {
			return {
				result: null,
				tid_str: null,
				personality:{
					0:[],
					1:[],
					2:[],
					3:[],
					4:[]
				}
			};
		},
		onLoad() {
			uni.getStorage({
				key: 'wm_list',
				success: (res) => {
					this.result = res.data
					for (let i = 0; i < this.result.net_list.length; i++) {
						this.getTransifrom(this.result.net_list[i].net_name,i)
					}

				}
			})
			this.tid_str = uni.getStorageSync('tid_text')
			uni.request({
				url: this.$store.state.baseUrl+'/api/netname/view',
				data: {
					ntoken: uni.getStorageSync('token'),
					app: 1
				},
				header: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
				method:'POST',
				success:(res)=>{
					if(res.data.code==1){
						uni.setStorageSync('pay_view',res.data.data.order_config)
					}
				}
			})
			
		},
		methods: {
			submit_pay(){
				uni.navigateTo({
					url: '../pay/pay'
				})
			},
			toDetail(id,tk){
				let obj={
					base_id:id,
					tk:tk
				}
				uni.navigateTo({
					url:'../webview/webview?'+qs.stringify(obj)
				})
			},
			copyName(name) {
				uni.setClipboardData({
					data: name,
					success: function() {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						})
					}
				});
			},
			getTransifrom(name,i,o) {
				let obj = {
					net_name: name,
					app: 1,
					not_change_words: name.slice(1,2),
					dc: 0,
				}
				if(o){
					obj['lc[]']=o
				}
				uni.request({
					url: 'https://qiming.yw11.com/wangming/index/change_net',
					method: 'GET',
					data: obj,
					header: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					success: (res) => {
						if(res.data.code==1){
							this.personality[i]=res.data.data
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.head {
		font-size: 32upx;

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

	.list_head {
		display: flex;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1px solid #ccc;

		.text1 {
			flex: 6;
			font-size: 36upx;
			font-weight: bold;
			overflow: hidden;
		}

		.text3 {
			text-align: right;
			flex: 2;
			font-size: 28upx;
			color: #666;
		}

		.text2 {
			flex: 2;
			font-size: 28upx;
			color: #0000FF;
			text-decoration: underline;
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

	.transform{
		padding: 20upx 0;
		.transform_tit{
			font-size: 28upx;
			line-height: 80upx;
			color: #666;
			text{
				margin-left: 40upx;
				border: 1px solid #e1e1e1;
				padding: 0 10upx;
			}
		}
		.item{
			display: flex;
			line-height: 60upx;
			font-size: 28upx;
			.text1{
				width: 500upx;
				margin-right: 20upx;
			}
			.text2 {
				font-size: 28upx;
				color: #0000FF;
				text-decoration: underline;
			}
		}
	}
	.submit {
		width: 100%;
		display: flex;
		padding: 20upx 0;
	
		.button {
			width: 640upx;
			background: url('https://static.quwangming.com/common/images/qiming_anniu.png') no-repeat;
			background-size: 640upx 100upx;
			color: #fff;
			font-size: 40upx;
			font-weight: 600;
			text-align: center;
			height: 100upx;
			line-height: 100upx;
		}
	}

</style>
