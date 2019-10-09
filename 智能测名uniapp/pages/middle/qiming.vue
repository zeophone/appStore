<template>
	<view class="list" v-if="nameInfo">
		<view class="page">
			<view class="bg head">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<view class="content" v-if="nameInfo">
					<text class="head_title"><text class="head_top">基本信息</text></text>
					<view class="item">
						<view class=""><text>姓&emsp;&emsp;氏：</text>{{nameInfo.surname}}</view>
						<view class=""><text>性&emsp;&emsp;别：</text>{{nameInfo.sex==1?'男':'女'}}</view>
					</view>
					<view class="item">
						<text>出生时间：</text>{{nameInfo.birth_date}}
					</view>
					<view class="item">
						<text>出生地点：</text>{{nameInfo.birth_address}}
					</view>
					<view class="item" v-if="nameInfo.name_character">
						<text>性格标签：</text>{{nameInfo.name_character.join(',')}}
					</view>
					<view class="item" v-if="nameInfo.fix_position">
						<text>定&emsp;&emsp;字：</text>{{dingziStr}}
					</view>
				</view>
				<view class="child" v-if="nameInfo">
					<view class="titel">
						国学起名用字分析
					</view>
					<view class="article">
						{{nameInfo.luck_god}}
					</view>
				</view>
				<view class="child" v-if="nameInfo">
					<view class="titel">
						周易用字分析
					</view>
					<view class="article">
						{{nameInfo.gossip}}
					</view>
				</view>


				<view v-if="headConl">
					<view class="child" v-if="nameInfo">
						<view class="titel">
							五金强弱分析
						</view>
						<view class="five">
							<view class="list_wu co_j">金<view class="list_bg"><text :style="{width: nameInfo.five_line_percent.jin+'%',background: '#b8860b'}"></text></view>{{nameInfo.five_line_percent.jin}}%</view>
							<view class="list_wu co_m">木<view class="list_bg"><text :style="{width: nameInfo.five_line_percent.mu+'%',background: '#008000'}"></text></view>{{nameInfo.five_line_percent.mu}}%</view>
							<view class="list_wu co_s">水<view class="list_bg"><text :style="{width: nameInfo.five_line_percent.shui+'%',background: '#0073cf'}"></text></view>{{nameInfo.five_line_percent.shui}}%</view>
							<view class="list_wu co_h">土<view class="list_bg"><text :style="{width: nameInfo.five_line_percent.huo+'%',background: '#e25822'}"></text></view>{{nameInfo.five_line_percent.huo}}%</view>
							<view class="list_wu co_t">火<view class="list_bg"><text :style="{width: nameInfo.five_line_percent.tu+'%',background: '#a67b5b'}"></text></view>{{nameInfo.five_line_percent.tu}}%</view>
						</view>
					</view>
					<view class="child" v-if="nameInfo">
						<view class="titel">
							五格用字分析
						</view>
						<view class="article">
							{{nameInfo.three_five}}
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
						<view class="head_name">
							<view v-for="(o,n) in item.name" :key="n" class="dis_flex fl_column">
								<text class="f_w700 m_r10 f_s68">{{o}}</text>
								<text class="wuxingBg f_s24" :class="'co_'+wuxingClass(item.five_line[n])">{{item.five_line[n]}}</text>
							</view>
							</view>
						<view class="head_score">
							<view class="sounds_score">{{item.total_score}}<text>分</text></view>
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
					<view class="child meaning p_b60">
						<view class="meaning_list dis_flex" v-for="(o,n) in item.word_meaning" :key="n">
							<view class="zi">{{o.substring(0,1)}}</view>
							<view>
								<view class="text_h_2 m_b20">
									{{o}}
								</view>
								<view class="line"></view>
							</view>
						</view>
						<view class="read_more">
							<view class="read_more_mask">
							</view>
							<view class="read_more_btn">
								<text class="name_detail" @click="detail(i)">名字详情</text>
								<text class="name_dz" :class="{on:dianzhan[i]}" @click="dianzhanFn(i)"><text class="zan_icon"></text>{{dz_count[i]}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="page">
			<view class="bg text_c">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<view class="line_60 f_s32 f_w700">
					十年精心研发，好名受用一生
				</view>
				<view class="f_s32 line_60 m_b20">
					大约有300个更高分吉祥好听名字
				</view>
				<view class="submit">
					<text class="button" @click="submit_pay">查看更多高分好名</text>
				</view>
			</view>
		</view>
		<view class="fiexd_b">
			<view class="uni-btn-v submit">
				<text class="button" @click="submit_pay">查看更多高分好名</text>
			</view>
		</view>
		<Youshi/>
	</view>
</template>

<script>
	import qs from 'qs';
	import Youshi from "@/components/Youshi/main.vue";
	export default {
		components:{Youshi},
		data() {
			return {
				nameInfo: null,
				headConl: false,
				dianzhan: [false, false, false],
				dz_count: []
			}
		},
		onLoad(options) {
			uni.showLoading({
				title:'加载中'
			})
			this.$http.post('/v5/qiming/submit',options).then(res=>{
				uni.hideLoading();
				if (res.code == 1) {
					this.nameInfo = res.data
					for (let i = 0; i < this.nameInfo.list.length; i++) {
						this.dz_count.push(this.nameInfo.list[i].dz_count)
					}
				} else {
					uni.showModal({
						title: '提示',
						content: res.msg,
						showCancel: false,
						success: function(res) {
							uni.navigateBack()
						}
					});
				}
			})
			this.$http.post('/api/nameorder/order_view',{}).then(res=>{
				uni.setStorageSync('pay_view', res.data)
			})
		},
		filters:{

		},
		computed: {
			name() {
				let arr = []
				if (this.nameInfo) {
					for (let i = 0; i < this.nameInfo.list.length; i++) {
						arr.push(this.nameInfo.list[i].name.join(''))
					}
				}
				return arr
			},
			dingziStr() {
				let dingzi = ''
				if (this.nameInfo) {
					for (let i = 0; i < this.nameInfo.fix_position.length; i++) {
						let str = ''
						if (this.nameInfo.fix_position[i] == '1') {
							str = '-首字 '
						} else {
							str = '-末字 '
						}
						dingzi += this.nameInfo.fix_word[i] + str
					}
				}

				return dingzi
			}
		},
		methods: {
			headControl() {
				this.headConl = !this.headConl
			},
						wuxingClass(str){
				switch(str){
					case '金':
					return '1';
					break;
					case '木':
					return '2';
					break;
					case '水':
					return '3';
					break;
					case '火':
					return '4';
					break;
					case '土':
					return '5';
					break;
				}
			},
			dianzhanFn(i) {
				this.$set(this.dianzhan, i, !this.dianzhan[i])
				if (this.dianzhan[i]) {
					this.$set(this.dz_count, i, parseInt(this.dz_count[i]) + 1)
				} else {
					this.$set(this.dz_count, i, parseInt(this.dz_count[i]) - 1)
				}
			},
			submit_pay() {
				uni.navigateTo({
					url: '../pay/qiming'
				});
			},
			detail(i) {
				let data = {
					surname: this.nameInfo.surname,
					app_mchid: uni.getStorageSync('token'),
					name: '',
					name_id: this.nameInfo.list[i].name_id,
					is_fixed: 0
				}
				for (let n = 0; n < this.nameInfo.list[i].name.length; n++) {
					if (n > this.nameInfo.surname.length - 1) {
						data.name += this.nameInfo.list[i].name[n]
					}
				}
				uni.navigateTo({
					url: '../detail/qiming?' + qs.stringify(data)
				});
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/page.scss';
	.list {
		padding-bottom: 130upx;
		.zi{
			flex-shrink: 0;
			background: url(https://static.quwangming.com/newqiming/images/m/chuantong/mi.png) center center no-repeat;
			background-size: cover;
			width: 72upx;
			height: 72upx;
			line-height: 72upx;
			text-align: center;
			font-size: 50upx;
			margin-right: 20upx;
			color: #1f1f1f;
			border: 1px solid #ddc492;
		}
		.wuxingBg{
			&.co_1::before{background-position: 0 0;}
			&.co_2::before{background-position: 0 -40upx;}
			&.co_3::before{background-position: 0 -80upx;}
			&.co_4::before{background-position: 0 -120upx;}
			&.co_5::before{background-position: 0 -160upx;}
		}
		.wuxingBg::before{
			content: '';
			display: inline-block;
			width: 26upx;
			height: 26upx;
			margin-right: 10upx;
			background: url(https://static.quwangming.com/gsqm/images/m/wx_icon.png) no-repeat;
			background-size: 26upx 200upx;
		}
		.fiexd_b {
			width: 100%;
			height: 120upx;
			position: fixed;
			bottom: 0;
			left: 0;
			box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5);
			padding-top: 10upx;
			background: #fff;
			z-index: 999;
		}
			.submit {
				height: 90upx;
				width: 650upx;
				display: flex;
				z-index: 10;
				margin: 0 auto;

				.button {
					width: 650upx;
					background: url('https://static.quwangming.com/common/images/qiming_anniu.png') no-repeat;
					background-size: 650upx 100upx;
					color: #fff;
					font-size: 40upx;
					margin: 0 auto;
					font-weight: 600;
					text-align: center;
					height: 100upx;
					line-height: 100upx;
				}
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
						flex-shrink: 0;
						width: 500upx;
						display: flex;
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


	}

	@keyframes heartBlast {
		0% {
			background-position-x: left;
		}

		100% {
			background-position-x: right;
		}
	}
</style>
