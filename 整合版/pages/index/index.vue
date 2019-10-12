<template>
	<view class="content">
		<!-- <Header></Header> -->
		<Qiming></Qiming>
		<view class="directory">
			<view class="item" @click="toMini(i)" v-for="i in 10" :key="i">
				<view class="logo"></view>
				<view class="tit">专家起名{{i}}</view>
			</view>

		</view>
		<view class="directory">
			<view class="item" v-for="i in 10" :key="i">
				<view class="logo peidui"></view>
				<view class="tit">姓名配对</view>
			</view>
		</view>

		<view class="banner">
			<swiper :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item item1"></view>
				</swiper-item>
			</swiper>
		</view>

		<Ceming></Ceming>
	</view>
</template>

<script>
	import Qiming from '@/components/Qiming.vue';
	import Ceming from '@/components/Ceming.vue';
	import Header from '@/components/Header.vue';
	export default {
		components: {
			Qiming,
			Ceming,
			Header
		},
		data() {
			return {

			}
		},
		onShow() {
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '起名网_起名字大全,宝宝起名,取名,姓名测试打分,免费起名-易名网',
				keywords: '起名,取名,姓名测试,起名字,起名网,宝宝起名,免费起名网',
				description: '起名网是免费起名,取名,姓名测试综合起名字网站.提供起名字大全,周易免费起名,姓名测试打分等在线起名服务,专业的宝宝起名取名网.',
				articleTitle: '起名网_起名字大全,宝宝起名,取名,姓名测试打分,免费起名-易名网',
				releaseDate: '2019-06-13 12:01:30',
				image: '',
				video: '',
				visit: '',
				likes: '',
				comments: '',
				collects: '',
				shares: '',
				followers: '',
				success: function() {
					console.log('页面基础信息设置完成');
				}
			})
			// #endif
		},
		methods: {
			toMini(i) {
				uni.navigateToMiniProgram({
					appId: '16103991',
					path: '/',
					extraData: {},
					success(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	$border: 1px solid #d1d1d1;

	.content {
		background: #f8f8f8;
	}

	.title_head {
		color: #fff;
		font-size: 40upx;
		text-align: center;
		line-height: 68upx;
		padding-top: 10upx;
	}



	.directory {
		height: 400upx;
		width: 100%;
		background: #fff;
		border-top: $border;
		border-bottom: $border;
		margin-bottom: 20upx;

		.item {
			width: 150upx;
			height: 200upx;
			box-sizing: border-box;
			display: inline-block;
			padding-top: 20upx;

			.logo {
				background: url(https://m.yw11.com/v1/images/app/dsqm.png)no-repeat;
				background-size: 116upx;
				border-radius: 20%;
				width: 116upx;
				height: 116upx;
				background-color: #fbf6df;
				margin: 0 auto;
			}

			.peidui {
				background: url(https://qiming.yw11.com/gzh_h5/static/img/xmpd1.b09e51c.png)no-repeat;
				background-size: 116upx;
			}

			.tit {
				width: 100%;
				color: #333;
				font-size: 24upx;
				text-align: center;
				padding-top: 10upx;
			}
		}

	}

	.banner {
		background: #fff;
		border-top: $border;
		border-bottom: $border;
		margin-bottom: 20upx;

		swiper {
			height: 220upx;
		}

		.item1 {
			width: 100%;
			height: 100%;
			background: url(https://m.yw11.com/v1/images/banner02.jpg) no-repeat;
			background-size: 100%;
		}
	}
</style>
