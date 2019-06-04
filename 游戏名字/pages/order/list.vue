<template>
	<view>
		<view class="order_detail">
			<view v-if="current==1">

				<view class="page">
					<view class="bg">
						<text class="bg_l bg_angle"></text>
						<text class="bg_r bg_angle"></text>
						<text class="bg_bl bg_angle"></text>
						<text class="bg_br bg_angle"></text>
						<view class="order_status">
							<text class="order_yes"></text><text>订单状态：支付成功</text>
						</view>
						<view class="order_tig">
							下滑查看{{total}}个吉祥好名字
						</view>
						<view class="order_tig">
							你可以<text @click="call">联系客服</text>
						</view>
						<view class="order_btn btn1" @click="slideDown">
							点击查看名字
						</view>
						<view class="order_btn btn2">
							升级手工专家起名
						</view>
					</view>
				</view>
				<view class="page" v-if="nameInfo">
					<view class="bg head">
						<text class="bg_l bg_angle"></text>
						<text class="bg_r bg_angle"></text>
						<text class="bg_bl bg_angle"></text>
						<text class="bg_br bg_angle"></text>
						<view class="content">
							<text class="head_title"><text class="head_top">基本信息</text></text>
							<view class="item">
								<view class=""><text>姓&emsp;&emsp;氏：</text>{{nameInfo.surname}}</view>
								<view class=""><text>性&emsp;&emsp;别：</text>{{nameInfo.sex==1?'男':'女'}}</view>
							</view>
							<view class="item">
								<text>出生时间：</text>{{nameInfo.birth_time}}
							</view>
							<view class="item">
								<text>出生地点：</text>{{nameInfo.birth_address}}
							</view>
							<view class="item" v-show="nameInfo.name_character.length>0">
								<text>性格标签：</text>{{nameInfo.name_character.join(',')}}
							</view>
						</view>
						<view class="child">
							<view class="titel">
								国学起名用字分析
							</view>
							<view class="article">
								{{nameInfo.eight_five_word[0]}}
							</view>
						</view>

						<view v-if="headConl">
							<view class="child">
								<view class="titel">
									周易用字分析
								</view>
								<view class="article">
									{{nameInfo.fit_gossip_str}}
								</view>
							</view>
							<view class="child">
								<view class="titel">
									五金强弱分析
								</view>
								<view class="five">
									<view class="list">金<view class="list_bg"><text :style="{width: nameInfo.jin_ratio+'%',background: '#b8860b'}"></text></view>{{nameInfo.jin_ratio}}%</view>
									<view class="list">木<view class="list_bg"><text :style="{width: nameInfo.mu_ratio+'%',background: '#008000'}"></text></view>{{nameInfo.mu_ratio}}%</view>
									<view class="list">水<view class="list_bg"><text :style="{width: nameInfo.shui_ratio+'%',background: '#0073cf'}"></text></view>{{nameInfo.shui_ratio}}%</view>
									<view class="list">土<view class="list_bg"><text :style="{width: nameInfo.tu_ratio+'%',background: '#e25822'}"></text></view>{{nameInfo.tu_ratio}}%</view>
									<view class="list">火<view class="list_bg"><text :style="{width: nameInfo.huo_ratio+'%',background: '#a67b5b'}"></text></view>{{nameInfo.huo_ratio}}%</view>
								</view>
							</view>
							<view class="child">
								<view class="titel">
									五格用字分析
								</view>
								<view class="article">
									{{nameInfo.five_str}}
								</view>
							</view>
							<view class="child">
								<view class="titel">
									生肖用字分析
								</view>
								<view class="article">
									{{nameInfo.zodiac}}
								</view>
							</view>
							<view class="child">
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
									<text class="name_detail fs28" @click="headConl=!headConl">展开更多内容 <text class="fs24 pl10">剩70%</text></text>
								</view>
							</view>
						</view>

					</view>
				</view>

			</view>
			<view v-if="list">
				<view class="page" v-for="(item,i) in list" :key="i">
					<view class="bg">
						<text class="bg_l bg_angle"></text>
						<text class="bg_r bg_angle"></text>
						<text class="bg_bl bg_angle"></text>
						<text class="bg_br bg_angle"></text>
						<view class="head">
							<view class="head_name"><text v-for="(o,n) in item.name" :key="n">{{o}}</text></view>
							<view class="head_score">
								<view class="sounds_score">{{item.sounds_score}}<text>分</text></view>
								<view class="text">综合评分</view>
							</view>
						</view>
						<view class="score">
							<view class="col">
								<view class="item">
									<text>好听内涵&emsp;{{item.total_score}}分</text>
									<text class="item_bg"><text :style="{width:item.total_score+'%',background: '#ccd2ac'}"></text></text>
								</view>
								<view class="item">
									<text>国学得分&emsp;{{item.luck_god_score}}分</text>
									<text class="item_bg"><text :style="{width:item.luck_god_score+'%',background: '#acd2b0'}"></text></text>
								</view>
								<view class="item">
									<text>生肖属相&emsp;{{item.zodiac_score}}分</text>
									<text class="item_bg"><text :style="{width:item.zodiac_score+'%',background: '#b0d9e1'}"></text></text>
								</view>
							</view>
							<view class="col">
								<view class="item">
									<text>星座特征&emsp;{{item.constellation_score}}分</text>
									<text class="item_bg"><text :style="{width:item.constellation_score+'%',background: '#b2bbd8'}"></text></text>
								</view>
								<view class="item">
									<text>五格数理&emsp;{{item.three_five_score}}分</text>
									<text class="item_bg"><text :style="{width:item.three_five_score+'%',background: '#d3bcd4'}"></text></text>
								</view>
								<view class="item">
									<text>周易卦象&emsp;{{item.eight_score}}分</text>
									<text class="item_bg"><text :style="{width:item.eight_score+'%',background: '#edc3ce'}"></text></text>
								</view>
							</view>
						</view>
						<view class="child meaning">
							<view class="titel">
								名字来源
							</view>
							<view class="meaning_list" v-for="(o,n) in item.name_meaning" :key="n">
								<view v-if="n<2">{{o}}</view>
							</view>
							<view class="read_more">
								<view class="read_more_mask">
								</view>
								<view class="read_more_btn">
									<text class="name_detail" @click="detail(i)">名字详情</text>
									<text class="name_bx" :class="{on: item.is_checked!=0}" @click="beiXuan(order_info.order_id,i)">{{item.is_checked==0?'加入备选':'取消备选'}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<w-pagination @next="nextPage" @prev="prevPage" :count="count" :current="current"></w-pagination>
		<button class="ordercx" @click="goToOptional()">备选名单<text>({{option_count}})</text></button>
	</view>
</template>

<script>
	import wPagination from "@/components/w-pagination/w-pagination.vue";
	import qs from 'qs'
	export default {
		data() {
			return {
				nameInfo: null,
				order_info: {},
				headConl: false,
				list: null,
				order_sn: null,
				current: 1,
				total: 0,
				count: 0,
				//备选名字个数
				option_count: 0,

			}
		},
		components: {
			wPagination
		},
		onLoad(options) {
			this.total = options.name_total
			this.order_sn = options.order_sn
			this.count = Math.ceil(this.total / 10)
			this.request(1)
		},
		methods: {
			detail(i) {
				let data = {
					name: '',
					surname: this.nameInfo.surname,
					order_sn: this.order_sn,
					type: 'optional',
					order_id: this.order_info.order_id,
					name_score: this.list[i].total_score,
					name_id: this.list[i].name_id,
					is_checked: 1,
					order_froms: 6,
					app: 1,
					app_mchid: 'token_15561567646774625'
				}
				for (let n = 0; n < this.list[i].name.length; n++) {
					if (n > this.nameInfo.surname.length - 1) {
						data.name += this.list[i].name[n]
					}
				}
				uni.setStorageSync('detail_params',data)
				uni.navigateTo({
					url: '../detail/detail?' + qs.stringify(data)
				});
			},
			beiXuan(order_id, index) {
				//console.log(name, is_checked, order_id, name_id, total_score, is_detele, index)
				var data = {
					surname: this.list[index].name.join(''),
					app: 1,
					app_mchid: 'token_15554686597658647',
					index: index,
					is_checked: this.list[index].is_checked,
					name_id: this.list[index].name_id,
					name_score: this.list[index].total_score,
					order_id: order_id
				}
				uni.request({
					url: this.$store.state.baseUrl + '/api/nameorder/order_option',
					method: 'POST',
					header: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					data: data,
					success: (res) => {
						if (this.list[index].is_checked == 1) {
							this.list[index]['is_checked'] = 0;
						} else {
							this.list[index]['is_checked'] = 1;
						}
						this.getOptionCount(),
							uni.showToast({
								title: res.data.msg,
								image: '/static/success.png'
							})
					}
				});

			},
			getOptionCount: function() {
				uni.request({
					url: this.$store.state.baseUrl+'/api/nameorder/option_count',
					method: 'POST',
					header: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					data: {
						order_id: this.order_info.order_id,
						app: 1
					},
					success: (res) => {
						this.option_count = res.data.data.option_count
					}
				})
			},
			goToOptional() {
				if (this.option_count == 0) {
					uni.showToast({
						title: "暂无备选名字",
						image: '/static/remind.png'
					})
					return
				}
				uni.setStorage({
					key: 'params',
					data: this.nameInfo
				})
				uni.navigateTo({
					url: '../option/option?order_id=' + this.order_info.order_id
				})
			},
			call() {
				console.log('call 18163728777')
				uni.makePhoneCall({
					phoneNumber: '18163728777'
				});
			},
			slideDown(){
				uni.pageScrollTo({
					scrollTop: 500,
					duration: 500
				})
			},
			nextPage(p) {
				this.current = p
				this.request(p)
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			prevPage(p) {
				this.current = p
				this.request(p)
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			request(p) {

				uni.request({
					url: this.$store.state.baseUrl+'/v3/api/nameorder/detail',
					method: 'GET',
					data: {
						order_sn: this.order_sn,
						app: 1,
						p: p,
						ps: 10
					},
					success: (res) => {
						if (res.data.code != 1) {
							uni.showModal({
								title: '提示',
								content: res.data.msg,
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack()
									} else if (res.cancel) {
										uni.navigateBack()
									}
								}
							});
							return
						}
						this.nameInfo = res.data.data.params
						console.log(this.nameInfo)
						this.list = res.data.data.list
						this.order_info = res.data.data.order_info
						this.getOptionCount()
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.order_detail {
		padding: 20upx 20upx 10upx;
		background: #f1f1f1;

		.page {
			background: #fff;
		}

		.order_btn {
			width: 500upx;
			height: 80upx;
			border-radius: 8upx;
			margin: 20upx auto;
			text-align: center;
			font-size: 28upx;
			line-height: 80upx;
			color: #fff;

		}

		.btn1 {
			background: #000040;
		}

		.btn2 {
			background: #f05654;
		}

		.order_status {
			text-align: center;
			font-size: 36upx;
			font-weight: 700;
			line-height: 100upx;
		}

		.order_tig {
			text-align: center;
			font-size: 28upx;
			line-height: 50upx;

			text {
				display: inline-block;
				padding: 0 20upx;
				background: #f5f5f5;
				border-radius: 8upx;
			}
		}

		.order_yes {
			display: inline-block;
			width: 60upx;
			height: 60upx;
			background: url('http://test.yw11.com/assets/newqiming/images/m/chuantong/icon_g.png') no-repeat;
			background-size: 60upx 60upx;
			margin-right: 20upx;
			position: relative;
			top: 16upx;
		}

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

		.page {
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


				.head {
					display: flex;
					height: 160upx;
					border-bottom: 1px solid #ccc;

					.head_name {
						font-size: 58upx;
						flex-shrink: 0;
						width: 500upx;
					}

					.head_score {
						display: flex;
						flex-direction: column;

						.sounds_score {
							color: #e25822;
							font-size: 68upx;

							text {
								font-size: 24upx;
							}
						}

						.text {
							font-size: 24upx;
							position: relative;
							color: #666;
						}

						.text:after {
							content: '';
							position: absolute;
							width: 20upx;
							height: 20upx;
							border: 1upx solid #ccc;
							border-bottom: 0;
							border-right: 0;
							bottom: -40upx;
							left: 36upx;
							transform: rotate(45deg)
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
								width: 460upx;
								height: 70upx;
								text-align: center;
								background: #000040;
								color: #fff;
								line-height: 70upx;
								border-radius: 10upx;
							}

							.name_bx {
								width: 150upx;
								text-align: center;
								height: 70upx;
								border: 1upx solid #ccc;
								line-height: 70upx;
								background: #f5f5f5;
								border-radius: 10upx;
								margin-left: 20upx;
								position: relative;
								color: #999;
								font-size: 26upx;

							}

							.name_bx.on {
								width: 150upx;
								text-align: center;
								height: 70upx;
								border: 1upx solid #000040;
								line-height: 70upx;
								background: #000040 !important;
								border-radius: 10upx;
								margin-left: 20upx;
								position: relative;
								color: #fff;
								font-size: 26upx;
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
			}
		}


	}

	.ordercx {
		padding: 10upx;
		line-height: 1.1;
		position: fixed;
		bottom: 20%;
		right: 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 60upx;
		z-index: 10;
	}
</style>
