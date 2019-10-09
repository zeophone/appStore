<template>
	<view class="recom_warp p_t20">
		<view class="titel m_b40">
			<view class="tx">其他用户还选择用了</view>
			<view class="line"></view>
		</view>

		<view class="dis_flex p_b40">
			<view class="item" v-for="(item,i) in app" v-if="i<4" :key="i">
				<a class="" :href="item.path">
					<image class="head" :src="item.head"></image>
					<text class="line_60">{{item.name}}</text>
				</a>
			</view>
		</view>

		<view class="dis_flex m_b60">
			<view class="item" v-for="(item,i) in app" v-if="i>3" :key="i">
				<a class="" :href="item.path">
					<image class="head" :src="item.head"></image>
					<text>{{item.name}}</text>
				</a>
			</view>
		</view>
		<view class="titel m_b20">
			<view class="tx">热门推荐服务</view>
			<view class="line"></view>
		</view>
		<view v-for="(item,i) in list" :key="i">
			<view class="dis_flex listItem">
				<image class="pic" :src="item.pic"></image>
				<view class="dis_flex fl_column content">
					<text>{{item.name}}</text>
					<view class="star">
						<text :class="{full:n<=item.star,half:n>item.star&&item.star>n-1}" v-for="n in 5" :key="n"></text>
					</view>
					<text class="f_s26 co_999">{{item.desc}}</text>
				</view>
				<a :href="item.link" class="btn">看一看</a>
			</view>
			<view class="line" v-if="i<3"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				app: [{
						head: 'https://m.yw11.com/v1/images/app/dsqm.png',
						name: '大师手工起名',
						path: 'https://qiming.yw11.com/expert_v3'
					},
					{
						head: 'https://m.yw11.com/v1/images/app/znqm.png',
						name: '智能起名',
						path: 'https://qiming.yw11.com/newqiming'
					},
					{
						head: 'https://qiming.yw11.com/gzh_h5/static/img/bzjp.45af8fc.png',
						name: '八字精批',
						path: 'http://360nbc.com/cesuan/bazijp/'
					},
					{
						head: 'https://qiming.yw11.com/gzh_h5/static/img/xmpd1.b09e51c.png',
						name: '姓名配对',
						path: 'http://www.360nbc.com/cesuan/xmpd/'
					},
					{
						head: 'https://qiming.yw11.com/gzh_h5/static/img/cycs.b175c14.png',
						name: '财运测算',
						path: 'http://www.360nbc.com/cesuan/cyxp/'
					},
					{
						head: 'https://qiming.yw11.com/gzh_h5/static/img/lxys.3e20bf6.png',
						name: '流年运势',
						path: 'http://www.360nbc.com/cesuan/sndy/'
					},
					{
						head: 'https://qiming.yw11.com/gzh_h5/static/img/gxcs.b62b801.png',
						name: '卦象测算',
						path: 'http://www.360nbc.com/cesuan/guaxiang/'
					},
					{
						head: 'https://qiming.yw11.com/gzh_h5/static/img/ylyy.8481b6b.png',
						name: '姻缘测算',
						path: 'http://360nbc.com/cesuan/yinyuancs/'
					}
				],
				list:[
					{
						name: '大师手工测名',
						desc:'满意为止！',
						star:4.5,
						link:'https://qiming.yw11.com/dashi_ceming/',
						pic:'https://m.yw11.com/v1/images/app/zncm.png'
					},
					{
						name: '智能起名',
						desc:'好名字幸福一生',
						star:4,
						link:'https://qiming.yw11.com/newqiming/',
						pic:'https://m.yw11.com/v1/images/app/znqm.png'
					},
					{
						name: '起英文名',
						desc:'为您量身定制专属英文名',
						star:4,
						link:'https://qiming.yw11.com/english/',
						pic: 'https://m.yw11.com/v1/images/app/enqm.png'
					},
					{
						name: '起游戏网名',
						desc:'好听的个性名字都在这里',
						star:4,
						link:'https://qiming.yw11.com/wangming/',
						pic: 'https://m.yw11.com/v1/images/app/wmqm.png'
					}
				]
			
			}
		}
	}
</script>

<style lang="scss" scoped>
	.recom_warp {
		.listItem{
			padding: 20upx 0;
			align-items:center;
			.pic{
				height: 120upx;
				width: 120upx;
				margin-right: 20upx;
			}
			.star{
				text{
					display: inline-block;
					width: 30upx;
					height: 30upx;
					margin-right: 10upx;
					background: url(./img/star.png) no-repeat;
					background-size:40upx 90upx;
				}
				.full{
					background-position: 0 -30upx;
				}
				.half{
					background-position: 0 -60upx;
				}
			}
			.content{
				flex-shrink: 0;
				width: 420upx;
			}
			.btn{
				width: 140upx;
				height: 60upx;
				background: #000040;
				color: #fff;
				text-align: center;
				line-height: 60upx;
				border-radius: 12upx;
				font-size: 24upx;
			}
		}
		.titel {
			position: relative;
			height: 66upx;

			.tx {
				position: absolute;
				left: 50%;
				width: 380upx;
				margin-left: -190upx;
				line-height: 66upx;
				text-align: center;
				color: #fff;
				font-size: 32upx;
				background: url(img/other_bj.png) repeat-x;
				background-position: 0 -168upx;
				z-index: 2;

				&:after {
					content: '';
					width: 26upx;
					height: 66upx;
					position: absolute;
					top: 0;
					right: -26upx;
					background: url(img/other_bj.png) no-repeat;
					background-size: 52upx 136upx;
					background-position: -26upx 0;
				}

				&:before {
					content: '';
					width: 26upx;
					height: 66upx;
					position: absolute;
					top: 0;
					left: -26upx;
					background: url(img/other_bj.png) no-repeat;
					background-size: 52upx 136upx;
					background-position: 0 0;
				}
			}

			.line {
				position: absolute;
				left: 0;
				right: 0;
				top: 50%;
				margin-top: 0;
				background: #FF0000;
				height: 2upx;
				z-index: 1;
			}
		}

		.item {
			flex: 1;
			font-size: 26upx;

			a {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}

		.head {
			width: 100upx;
			height: 100upx;
			display: inline-block;
		}
	}
</style>
