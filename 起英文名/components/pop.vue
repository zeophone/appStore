<template>
	<view class="pop" :class="{show:isShow}">
		<view class="bg" @click="hide"></view>
		<view class="container">
			<view class="header">
				<text>{{title}}<text class="subtitle">{{subtitle}}</text></text>
				<text class="ok" @click="submit">确定</text>
			</view>
			<view class="content">
				<text v-for="(item,i) in tid" :key="i" @click="check(i)" :class="{on:item.checked}">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: String //参数'1'为星座，'2'为标签
		},
		data() {
			return {
				isShow: false,
				title: '英文名特征',
				subtitle: '选择三到五种特征',
				personality: [{ checked:false, value:"1", text:"优雅" },
                { checked:false, value:"2", text:"运动" },
                { checked:false, value:"3", text:"敏锐" },
                { checked:false, value:"4", text:"坚持" },
                { checked:false, value:"5", text:"自信" },
                { checked:false, value:"6", text:"诚实" },
                { checked:false, value:"7", text:"聪明" },
                { checked:false, value:"8", text:"乐观" },
                { checked:false, value:"9", text:"可靠" },
                { checked:false, value:"10", text:"创造力" },
                { checked:false, value:"11", text:"同理心" },
                { checked:false, value:"12", text:"正统" },
                { checked:false, value:"13", text:"主见" },
                { checked:false, value:"14", text:"正直" },
                { checked:false, value:"15", text:"友善" },
                { checked:false, value:"16", text:"单纯" },
                { checked:false, value:"17", text:"独特" },
                { checked:false, value:"18", text:"沉稳" },
                { checked:false, value:"19", text:"信仰" },
                { checked:false, value:"20", text:"爱心" },
                { checked:false, value:"21", text:"积极" },
                { checked:false, value:"22", text:"勇敢" },
                { checked:false, value:"23", text:"魅力" },
                { checked:false, value:"24", text:"美丽" },
                { checked:false, value:"25", text:"霸气" },
                { checked:false, value:"26", text:"财富" },
                { checked:false, value:"27", text:"高贵" },
                { checked:false, value:"28", text:"健康" }
				],
				constellation: [{
						checked: false,
						value: '1',
						text: '水瓶座'
					},
					{
						checked: false,
						value: '2',
						text: '双鱼座'
					},
					{
						checked: false,
						value: '3',
						text: '白羊座'
					},
					{
						checked: false,
						value: '4',
						text: '金牛座'
					},
					{
						checked: false,
						value: '5',
						text: '双子座'
					},
					{
						checked: false,
						value: '6',
						text: '巨蟹座'
					},
					{
						checked: false,
						value: '7',
						text: '狮子座'
					},
					{
						checked: false,
						value: '8',
						text: '处女座'
					},
					{
						checked: false,
						value: '9',
						text: '天秤座'
					},
					{
						checked: false,
						value: '10',
						text: '天蝎座'
					},
					{
						checked: false,
						value: '11',
						text: '射手座'
					},
					{
						checked: false,
						value: '12',
						text: '摩羯座'
					}
				],
				tid: this.constellation,
			};
		},
		watch: {
			type: {
				handler: function(val) {
					if (val == '1') {
						this.title = '选择星座'
						this.subtitle = ''
						this.tid = this.constellation
					} else {
						this.title = "选择标签"
						this.subtitle = '请选择3到5种'
						this.tid = this.personality
					}
				},
				immediate: true

			}
		},
		methods: {
			check(i) {
				let num = 0
				if (this.type == '1') {
					for (let o = 0; o < this.tid.length; o++) {
						if (this.tid[o].checked) {
							this.tid[o].checked = false
						}
					}
					this.tid[i].checked = !this.tid[i].checked
				} else {
					for (let o = 0; o < this.tid.length; o++) {
						if (this.tid[o].checked) {
							num++;
						}
					}
					if (num < 5) {
						this.tid[i].checked = !this.tid[i].checked
					} else {
						if (this.tid[i].checked) {
							this.tid[i].checked = !this.tid[i].checked
						} else {
							uni.showToast({
								title: '只可选五种标签',
								icon: 'none'
							})
						}

					}
				}


			},
			submit() {
				let obj = {
					value: '',
					text: ''
				}
				let value = []
				let text = []
				for (let o = 0; o < this.tid.length; o++) {
					if (this.tid[o].checked) {
						value.push(this.tid[o].value)
						text.push(this.tid[o].text)
					}
				}
				if (this.type == '2'&&value.length<3){
					console.log(value.length)
					uni.showToast({
						title:'请选择3到5个特征标签',
						icon:'none'
					})
					return
				}
				this.hide()
				obj.value = value.join(',')
				obj.text = text.join(',')
				this.$emit('popVal', obj)
			},
			show() {
				this.isShow = true
			},
			hide() {
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss">
	.pop {
		display: none;
		z-index: 100;

		&.show {
			display: block;
		}

		.bg {
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background: rgba(0, 0, 0, 0.8);
			z-index: 100;
		}

		.container {
			z-index: 101;
			width: 650upx;
			background: #fff;
			position: fixed;
			left: 50%;
			top: 50%;
			margin-left: -325upx;
			margin-top: -200upx;
			border-radius: 10upx;
			color: #333;

			.header {
				height: 100upx;
				line-height: 100upx;
				border-bottom: 1px solid #ccc;
				padding: 0 20upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.subtitle {
					color: #ccc;
					padding-left: 20upx;
					font-size: 30upx;
				}

				.ok {
					color: #666;
				}
			}

			.content {
				padding: 20upx 0;

				text {
					display: inline-block;
					width: 150upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					background: #f5f5f5;
					margin: 0 0 10upx 10upx;
					border-radius: 6upx;
					font-size: 28upx;
				}

				.on {
					background: #caa456;
					color: #fff;
				}
			}
		}
	}
</style>
