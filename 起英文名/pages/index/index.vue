<template>
	<view class="index">
		<view class="form">
			<view class="input-area">
				<text class="input_lable">姓名:</text>
				<input type="text" v-model="name" placeholder="请输入你的名字" placeholder-class="plac" />
				<view class="input_select">
					<text :class="sex==1?'on':''" @click="sex=1">女</text>
					<text :class="sex==3?'on':''" @click="sex=3">男</text>
				</view>
			</view>
			<view class="input-area" @click="constellationPop">
				<text class="input_lable">星座:</text>
				<input disabled type="text" v-model="constellationStr" placeholder="请选择你的星座" placeholder-class="plac" />
			</view>
			<view class="input-area" @click="characterPop">
				<text class="input_lable">特征:</text>
				<input disabled type="text" v-model="characterStr" placeholder="请选择3到5种特征" placeholder-class="plac" />
			</view>
			<view class="submit-area" @click="submit">
				立即起英文名
			</view>
		</view>
		<!-- <view class="content">
			<view class="type">
				<text class="text1"></text><text class="text2">性别英文名</text><text class="text3"></text>
			</view>
			<view class="type_item" v-for="(item,i) in ['男孩英文名','女孩英文名','中性英文名']" :key="i" @click="linkWeb(item)">{{item}}</view>
		</view>
		<view class="content">
			<view class="type">
				<text class="text1"></text><text class="text2">按使用用途</text><text class="text3"></text>
			</view>
			<view class="type_item" v-for="(item,i) in ['好听的英文名','流行的英文名']" :key="i" @click="linkWeb(item)">{{item}}</view>
		</view>
		<view class="content">
			<view class="type">
				<text class="text1"></text><text class="text2">英文首字母</text><text class="text3"></text>
			</view>
			<view class="type_item" v-for="(item,i) in abc " :key="i" @click="linkWeb(item)">{{item}}</view>
		</view> -->
		<Pop ref="pop" :type="popType" @popVal="popVal"></Pop>
		<view class="footer">
			© 起名网www.yw11.com 2008-2019 版权所有
		</view>
	</view>
</template>

<script>
	import Pop from '@/components/pop.vue'
	export default {
		data() {
			return {
				name: '',
				sex: 3,
				characterStr: '',
				constellationStr: '',
				constellatory: '',
				abc: [],
				popType: '1',
				feature: ''
			}
		},
		onLoad() {
						// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '起英文名_起名网_八字起名_周易取名_取名字_起名字大全',
				keywords: '起英文名,起乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
				description: '起名网官方取英文名小程序，提供宝宝起名、男孩取名、女孩起名、周易起名、八字起名、诗经起名等智能起名字取名字服务。',
				articleTitle: '起英文名,取乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
				releaseDate: '2019-05-15 12:01:30',
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
			for (var i = 0; i < 26; i++) {
				this.abc.push(String.fromCharCode((65 + i)));
			}
		},
		components: {
			Pop
		},
		methods: {
			submit() {
				let data = {
					surname: this.name, //true	string	姓名
					sex: this.sex, //true	int	性别1为女性，3为男性
					feature: this.characterStr, //true	string	选择的特征id
					constellatory: this.constellatory, //true	string	选择的星座
					app: 1
				}
				if(data.surname==''){
					uni.showToast({
						title:'请输入姓名',
						icon: 'none'
					})
					return
				}
				if(data.feature==''){
					uni.showToast({
						title:'请选择标签',
						icon: 'none'
					})
					return
				}
				if(data.constellatory==''){
					uni.showToast({
						title:'请选择星座',
						icon: 'none'
					})
					return
				}
				if(data.surname==''){
					uni.showToast({
						title:'请输入姓名',
						icon: 'none'
					})
					return
				}
				uni.showLoading({
					title: '起名中'
				});
				uni.request({
					url: this.$store.state.baseUrl + '/api/english/query',
					data: data,
					method: 'POST',
					header: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					success: (res) => {
						uni.hideLoading()
						if(res.data.code==1){
								uni.setStorageSync('english_name',res.data.data)
							uni.navigateTo({
								url: '../list/list'
							})
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
						}
						
					}
				})
			},
			characterPop() {
				this.popType = '2'
				this.$refs.pop.show()
			},
			constellationPop() {
				this.popType = '1'
				this.$refs.pop.show()
			},
			popVal(obj) {
				if (this.popType == 1) {
					this.constellationStr = obj.text
					this.constellatory = obj.value
				} else {
					this.characterStr = obj.text
					this.feature = obj.value
				}
			},
			linkWeb(item) {
				uni.navigateTo({
					url: '../webview/webview?type=' + item
				})
			}
		}
	}
</script>

<style lang="scss">
	.index {
		font-size: 32upx;
		padding-top: 300upx;
		background: url(https://static.quwangming.com/english/images/chinese/banner.png) no-repeat 0 0/100% 300upx,
			url(https://static.quwangming.com/english/images/chinese/bj-xs.png) no-repeat 0 0/100% 366upx;
		background-color: #f8f8f8;
		position: relative;
		min-height: 100vh;
		padding-bottom: 100upx;
		box-sizing: border-box;
		.footer {
			width: 100%;
			height: 100upx;
			position: absolute;
			left: 0;
			bottom: 0;
			text-align: center;
			font-size: 28upx;
			color: #999;
			line-height: 100upx;
		}
		.form {
			padding-bottom: 60upx;

			.input-area {
				display: flex;
				width: 650upx;
				line-height: 100upx;
				height: 100upx;
				margin: 20upx auto;
				padding: 0 32upx;
				box-sizing: border-box;
				background: url(https://static.quwangming.com/english/images/chinese/input_text_bj.jpg) no-repeat 0 0/650upx 100upx;

				input {
					height: 100upx;

					* {
						height: 100upx;
						line-height: 100upx;
					}
				}

				.input_lable {
					width: 90upx;
					flex-shrink: 0;
					color: #333;
				}

				.input_select {
					display: flex;
					flex-shrink: 0;
					flex-direction: row-reverse;
					width: 146upx;
					padding-top: 28upx;

					text {
						font-size: 28upx;
						text-align: center;
						line-height: 44upx;
						width: 44upx;
						height: 44upx;
						border-radius: 50%;
						background: #c8c8c8;
						color: #fff;
						margin-left: 10upx;
					}

					.on {
						background: #caa456;
					}
				}

			}

			.submit-area {
				height: 100upx;
				width: 650upx;
				margin: 0 auto;
				color: #fff;
				line-height: 100upx;
				text-align: center;
				font-size: 38upx;
				background: url(https://static.quwangming.com/english/images/chinese/sub_bj.png) no-repeat 0 0/100% 100upx;
			}
		}

		.content {
			padding: 0 30upx 60upx;

			.type {
				display: flex;
				font-size: 30upx;

				.text1 {
					border-bottom: 1px dotted #ccc;
					height: 34upx;
					flex: 1;
				}

				.text2 {
					flex: 6;
					padding: 0 10upx;
					height: 60upx;
					line-height: 60upx;
				}

				.text3 {
					border-bottom: 1px dotted #ccc;
					height: 34upx;
					flex: 18;
				}
			}

			.type_item {
				display: inline-block;
				background: #e1e1e1;
				height: 60upx;
				padding: 0 20upx;
				color: #484848;
				line-height: 60upx;
				margin-right: 20upx;
				border-radius: 10upx;
				margin-bottom: 10upx;
			}
		}
	}
</style>
