<template>
	<view class="list">
		<view class="page">
			<view class="bg head">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<view class="content" v-if="nameInfo">
					<text class="head_title"><text class="head_top">基本信息</text></text>
					<view class="item">
						<view class=""><text>姓&emsp;&emsp;名：</text>{{nameInfo.params.name}}</view>
						<view class=""><text>性&emsp;&emsp;别：</text>{{nameInfo.params.sex==1?'男':'女'}}</view>
					</view>
					<view class="item">
						<text>出生时间：</text>{{nameInfo.params.birth_date}}{{nameInfo.params.date_type==1?' 公历 ':' 农历 '}}{{nameInfo.params.is_leap==1?'闰月':''}}
					</view>
					<view class="item">
						<text>出生地点：</text>{{nameInfo.params.birth_address}}
					</view>
					<view class="item" v-if="nameInfo.params.name_character.length>0">
						<text>性格标签：</text>{{nameInfo.params.name_character}}
					</view>
				</view>
				<view class="child" v-if="nameInfo">
					<view class="titel">
						国学用字分析
					</view>
					<view class="article">
						{{nameInfo.eight_five_word}}
					</view>
				</view>
				<view v-if="headConl">
					<view class="child" v-if="nameInfo">
						<view class="titel">
							喜神用字分析
						</view>
						<view class="article">
							{{nameInfo.eight_content}}
						</view>
					</view>
					<view class="child" v-if="nameInfo">
						<view class="titel">
							五金强弱分析
						</view>
						<view class="five">
							<view class="list_wu">金<view class="list_bg"><text :style="{width: nameInfo.jin_ratio+'%',background: '#b8860b'}"></text></view>{{nameInfo.jin_ratio}}%</view>
							<view class="list_wu">木<view class="list_bg"><text :style="{width: nameInfo.mu_ratio+'%',background: '#008000'}"></text></view>{{nameInfo.mu_ratio}}%</view>
							<view class="list_wu">水<view class="list_bg"><text :style="{width: nameInfo.shui_ratio+'%',background: '#0073cf'}"></text></view>{{nameInfo.shui_ratio}}%</view>
							<view class="list_wu">土<view class="list_bg"><text :style="{width: nameInfo.tu_ratio+'%',background: '#e25822'}"></text></view>{{nameInfo.tu_ratio}}%</view>
							<view class="list_wu">火<view class="list_bg"><text :style="{width: nameInfo.huo_ratio+'%',background: '#a67b5b'}"></text></view>{{nameInfo.huo_ratio}}%</view>
						</view>
					</view>
					<view class="child" v-if="nameInfo">
						<view class="titel">
							生肖用字分析
						</view>
						<view class="article">
							{{nameInfo.zodiac}}
						</view>
					</view>
					<view class="child" v-if="nameInfo">
						<view class="titel">
							星座用字分析
						</view>
						<view class="article">
							{{nameInfo.constellation}}
						</view>
					</view>
				</view>
				<view v-else>
					<view class="read_more">
						<view class="read_more_mask">
						</view>
						<view class="read_more_btn">
							<text class="name_detail fs28" @click="headControl">展开更多内容 <text class="fs24 pl10">剩70%</text></text>
						</view>
					</view>
				</view>

			</view>
		</view>

		<view v-if="nameInfo">
			<view class="page" v-for="(item,i) in nameInfo.list" :key="i">
				<view class="bg">
					<text class="bg_l bg_angle"></text>
					<text class="bg_r bg_angle"></text>
					<text class="bg_bl bg_angle"></text>
					<text class="bg_br bg_angle"></text>
					<view class="head">
						<view class="head_name"><text>{{item.child_name}}</text></view>
						<view class="head_score">
							<view class="sounds_score">{{item.total_score}}<text>分</text></view>
							<view class="text">综合评分</view>
						</view>
						<view class="detail_bth" @click="goDetail(item)">
							查看详情
						</view>
					</view>
					<view class="eight_detail">
						<text class="text1">八字分析</text>
						<rich-text class="text2" :nodes="item.eight_five_msg"></rich-text>
					</view>
					<view class="line"></view>
					<view class="eight_detail" v-if="characterAll[i].length>1">
						<text class="text1">名字标签</text>
						<text class="text2">
							<text class="circle" v-for="(o,n) in characterAll[i]" :key="n">{{o}}</text>
						</text>
					</view>
					<view class="eight_detail" v-else>
						<text class="text1">名字出处</text>
						<text class="text2">
							{{item.culture_msg_list[i]}}
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
		<w-loading ref="loading"></w-loading>
	</view>
</template>

<script>
	import wLoading from "@/components/w-loading/w-loading.vue";
	import qs from 'qs'
	export default {
		data() {
			return {
				nameInfo: null,
				headConl: false
			};
		},
		components: {
			wLoading
		},
		computed: {
			characterAll() {
				let arr = []
				if (this.nameInfo) {
					let target = this.nameInfo.list
					for (let i = 0; i < target.length; i++) {
						arr.push(target[i].constellation_name_character.split(',').splice(0, 4))
					}
				}
				return arr
			}
		},
		onLoad() {
			this.$nextTick(() => {
				this.$refs.loading.show();
			})
			//提前请求支付信息
			uni.request({
				url: this.$store.state.baseUrl + '/api/child/view',
				method: 'POST',
				data: {
					app_mchid: uni.getStorageSync('token'),
					app: 1
				},
				header: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
				},
				success: (res) => {
					if (res.data.code == 1) {
						uni.setStorageSync('pay_view', res.data.data)
						this.pay_view = res.data.data.order_config
					}
				}
			});
			uni.request({
				url: this.$store.state.baseUrl + '/api/child/list',
				method: 'POST',
				data: uni.getStorageSync('child_params'),
				header: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
				},
				success: (res) => {
					if (res.data.code == 1) {
						this.nameInfo = res.data.data
						this.$refs.loading.close()
					} else {
						this.$refs.loading.close()
						uni.showModal({
							title: '提示',
							content: res.data.msg,
							showCancel: false,
							success: function(res) {
								uni.navigateBack()
							}
						});
					}
				}
			})
		},
		methods: {
			submit_pay() {
				uni.navigateTo({
					url: '../pay/pay'
				});
			},
			headControl() {
				this.headConl = !this.headConl
			},
			goDetail(obj) {
				let params = {
					app_mchid: uni.getStorageSync('token'),
					name_id: obj.name_id,
					tk: obj.tk,
					order_forms: 2,
					app: 1
				}
				uni.navigateTo({
					url: '../child_name/child_name?' + qs.stringify(params)
				});
			}
		}
	}
</script>

<style lang="less">
	.list {
		.head {
			position: relative;

			.read_more {
				position: absolute;
				left: 0;
				bottom: 10upx;
				width: 100%;
				border-right: 1px solid #ccc;
				height: 500upx;
				text-align: center;
			}

			.read_more_mask {
				height: 400upx;
				background: -webkit-gradient(linear, 0 top, 0 bottom, from(rgba(255, 255, 255, 0)), to(#fff));

			}

			.read_more_btn {
				height: 100upx;
				text-align: center;
				background: #ffffff;

				.name_detail {
					border: 1px solid #ca0c16;
					color: #ca0c16;
					display: inline-block;
					width: 60%;
					height: 60upx;
					line-height: 60upx;
					border-radius: 8upx;
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

		.bg {
			.content {
				font-size: 32upx;
				border-bottom: 1px solid #ccc;

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

				.item>view {
					display: inline-block;
					width: 50%;
				}

				.item {
					margin-bottom: 20upx;

					text {
						color: #888;
						font-size: 28upx;

					}
				}
			}

			.eight_detail {
				display: flex;
				padding-top: 20upx;

				.text1 {
					flex-shrink: 0;
					width: 80upx;
					color: #999;
					font-size: 28upx;
					margin-right: 20upx;
				}

				.text2 {
					font-size: 32upx;
					color: #484848;

					.circle {
						font-size: 24upx;
						display: inline-block;
						width: 100upx;
						height: 100upx;
						text-align: center;
						line-height: 100upx;
						background: #e2f7ea;
						border-radius: 50%;
						margin-right: 20upx;
						border: 1px solid #9acaaf;
					}
				}
			}

			.head {
				display: flex;
				height: 126upx;
				position: relative;
				border-bottom: 1px solid #ccc;

				&:after {
					content: '';
					position: absolute;
					width: 20upx;
					height: 20upx;
					border: 1upx solid #ccc;
					border-bottom: 0;
					border-right: 0;
					bottom: -12upx;
					left: 190upx;
					background: #fff;
					transform: rotate(45deg);
				}

				.head_name {
					font-size: 58upx;
					flex-shrink: 0;
					margin-right: 40upx;
				}

				.detail_bth {
					float: right;
					background: #f05654;
					color: #fff;
					border-radius: 8upx;
					position: absolute;
					font-size: 32upx;
					width: 200upx;
					height: 70upx;
					text-align: center;
					line-height: 70upx;
					right: 0;
					top: 20upx;
				}

				.head_score {
					display: flex;
					flex-direction: column;

					.sounds_score {
						color: #e25822;
						font-size: 48upx;

						text {
							font-size: 24upx;
						}
					}

					.text {
						font-size: 24upx;
						position: relative;
						color: #666;
					}


				}
			}

			.score {
				margin-top: 20upx;
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

			.meaning {
				position: relative;

				.meaning_list {
					margin-bottom: 10upx;
				}

				.read_more {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;

					.read_more_mask {
						height: 140upx;
						background: -webkit-gradient(linear, 0 top, 0 bottom, from(rgba(255, 255, 255, 0)), to(#fff));
					}

					.read_more_btn {
						background: #fff;
						height: 90upx;
						display: flex;

						.name_detail {
							flex-shrink: 0;
							width: 440upx;
							height: 70upx;
							text-align: center;
							background: #000040;
							color: #fff;
							line-height: 70upx;
							border-radius: 10upx;
						}

						.name_dz {
							width: 170upx;
							text-align: center;
							height: 70upx;
							border: 1upx solid #ccc;
							line-height: 70upx;
							background: #f5f5f5;
							border-radius: 10upx;
							margin-left: 20upx;
							position: relative;
							padding-left: 50upx;
							color: #999;

							.zan_icon {
								width: 100upx;
								height: 100upx;
								background: url(https://static.quwangming.com/newqiming/images/m/chuantong/icon_zan.png) no-repeat;
								background-size: 2900%;
								position: absolute;
								left: 25%;
								top: 50%;
								margin: -50upx 0 0 -50upx;
							}
						}

						.on {
							border: 1px solid #e3434f;
							color: #e3434f;

							.zan_icon {
								display: inline-block;
								-webkit-animation-name: heartBlast;
								animation-name: heartBlast;
								-webkit-animation-duration: .8s;
								animation-duration: .8s;
								-webkit-animation-iteration-count: 1;
								animation-iteration-count: 1;
								-webkit-animation-timing-function: steps(28);
								animation-timing-function: steps(28);
								background-position: right;
							}


						}

					}
				}
			}
		}

		.child {
			color: #333;
			font-size: 30upx;
			padding-top: 20upx;

			.titel {
				padding-left: 30upx;
				border-left: 8upx solid #e3434f;
				line-height: 34upx;
				margin: 30upx 0;
				font-weight: 600;
				font-size: 34upx;
			}

			.article {
				text-indent: 2em;
				line-height: 42upx;
			}

			.five {
				.list_wu {
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
		}
	}
</style>
