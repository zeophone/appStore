<template>
	<view class="right-pop" :style="{transform:transform}">
		<view class="bg" @click="hide"></view>
		<view class="container">
			<view class="header">
				<text>{{title}}</text>
				<text class="close" @click="hide">关闭</text>
			</view>
			<view class="content">
				<view class="search">
					<text class="icon"></text><input type="text" @input="searchFn" v-model="k" :placeholder="plac"
					 placeholder-class="plac" />
				</view>
				<view class="search_k" v-show="list_k.length>0">
					<view class="item_k" v-for="(item,i) in list_k" :key="i" @click="selectFn(item)">
						{{type=='city'?item.shortname:item.class_name}}
					</view>
				</view>
				<view class="tit">
					{{hot_tit}}
				</view>
				<view class="warp" v-if="type=='city'">
					<view class="item" v-for="(item,i) in list" :key="i">
						<text @click="selectFn(item)">{{item.shortname}}</text>
					</view>
				</view>
				<view class="warp" v-else>
					<view class="item_line" v-for="(item,i) in list" :key="i">
						<view class="line_type">{{item.class_name}}</view>
						<view>
							<text class="item" v-for="(o,n) in item.children_list" @click="selectFn(o)">{{o.class_name}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '选择城市',
				hot_tit:'热门城市',
				plac: '请输入城市 如: 长沙',
				transform: 'translateY(100%)',
				k: '',
				timer: null,
				list_k: []
			};
		},
		props: {
			list: {
				type: Array,
				default: []
			},
			type: {
				type: String,
				default: 'city'
			}
		},
		watch:{
			type: {
				handler: function(val){
					if (val == 'city') {
						this.title = '选择城市'
						this.hot_tit = '热门城市'
						this.plac='请输入城市 如: 长沙'
					} else {
						this.title = "选择行业"
						this.hot_tit = ''
						this.plac='请输入行业 如: 科技'
					}
				},
				immediate: true
			}
		},
		methods: {
			show() {
				this.list_k=[]
				this.k=''
				this.transform = 'translateY(0)'
			},
			hide() {
				this.transform = 'translateY(100%)'
			},
			selectFn(obj){
				this.$emit('select',obj)
				this.hide()
			},
			searchFn() {
				let url = ''
				
				if(this.type=="city"){
					url='https://qiming.yw11.com/api/company/get_key_tips'
				}else{
					url='https://qiming.yw11.com/api/company/get_class_tips'
				}
				if (this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					uni.request({
						url: url,
						data: {
							app: 1,
							k: this.k
						},
						method: 'POST',
						header: {
							"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
						},
						success: (res) => {
							this.list_k = res.data.data
						}
					})
				}, 1000)

			}
		}
	}
</script>

<style lang="scss">
	.right-pop {
		.bg {
			z-index: 99;
			background: rgba(0, 0, 0, 0.6);
			width: 100%;
			height: 100%;
		}

		.container {
			background: #f2f2f2;
			z-index: 100;
			position: fixed;
			width: 100%;
			left: 0;
			bottom: 0;
			right: 0;
			top: 20%;

		}

		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		transition: transform 0.3s ease;

		.header {
			height: 90upx;
			line-height: 90upx;
			font-size: 34upx;
			text-align: center;
			color: #00b477;
			background: #373d41;
			position: relative;

			.close {
				position: absolute;
				right: 20upx;
				font-size: 32upx;
			}
		}

		.content::-webkit-scrollbar {
			display: none;
		}

		.content {
			background: #f5f5f5;
			padding-top: 20upx;
			height: 100%;
			overflow-y: scroll;
			position: relative;

			.search_k {
				position: absolute;
				top: 114upx;
				left: 30upx;
				width: 610upx;
				padding: 20upx 40upx;
				background: #fff;
				border: 1px solid #ccc;
				border-radius: 12upx;
				font-size: 30upx;
				line-height: 50upx;
			}

			.search {
				padding: 0 20upx;
				height: 90upx;
				width: 650upx;
				margin: 0 auto;
				border-radius: 8upx;
				display: flex;
				background: #fff;
				align-items: Center;

				.icon {
					background: url('https://static.quwangming.com/gsqm/images/m/fdj.png') no-repeat 0 0/100%;
					width: 38upx;
					height: 38upx;
					margin-right: 20upx;
				}
			}

			.tit {
				padding-left: 30upx;
				padding-top: 20upx;
				font-size: 28upx;
				color: #999;
				line-height: 60upx;
			}

			.warp {
				padding-left: 30upx;
				padding-bottom: 100upx;
			.item {
				display: inline-block;
				width: 210upx;
				height: 60upx;
				line-height: 60upx;
				border: 1px solid #ccc;
				box-sizing: border-box;
				margin-right: 30upx;
				background: #fff;
				margin-bottom: 20upx;
				text-align: center;
				border-radius: 8upx;
				color: #666;
				font-size: 30upx;
			}				
			}


			.item_line{
				.line_type{
					font-size: 28upx;
					color: #999;
					line-height: 60upx;
				}
			}
		}
	}
</style>
