<template>
	<view class="dingzi">
		<view class="mask" :class="{'show':expectOpen}" @tap="close" catchtouchmove="true"></view>
		<view class="select_box" :class="expectOpen ? 'show' : ''">
			<view class="s_tit">定字内容<text>(最多可定3字)</text>
				<text class="close" @click="close">确定</text>
			</view>
			<view class="dingzi_input" v-if="fix_position.length<3">
				<input type="text" v-model="ziValue" maxlength="1" class="flex_1" />
				<text class="flex_2" :class="{active:ziType=='1'}" @tap="setType('1')">首字</text>
				<text class="flex_3" :class="{active:ziType=='2'}" @tap="setType('2')">末字</text>
				<text class="flex_4" @tap="saveDingzi">添加</text>
			</view>
			<view class="dingzi_content">
				<view class="content_item" v-for="(item,i) in fix_word" :key="i">
					<text>{{item}}</text><text>{{fix_position[i]=='1'?'首字':'末字'}}</text><text @click="delDingzi(i)">×</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'dingzi',
		data() {
			return {
				expectOpen: false,
				fix_position: [], //定字位置 1首字 2末字
				fix_word: [], //定字内容
				ziValue: '',
				ziType: '1'
			}
		},
		methods: {
			show() {
				this.expectOpen = true
			},
			close() {
				this.expectOpen = false
				let obj={}
				obj.fix_position=this.fix_position
				obj.fix_word=this.fix_word
				this.$emit('dingzi',obj)
			},
			setType(i) {
				this.ziType = i
			},
			saveDingzi() {
				let han = /^[\u4e00-\u9fa5]+$/
				if (this.ziValue == '') {
					uni.showToast({
						title: '内容不能为空'
					});
				}else if(!han.test(this.ziValue)){
					uni.showToast({
						title: '内容格式不正确'
					});
				}else{
					this.fix_word.push(this.ziValue)
					this.fix_position.push(this.ziType)
					this.ziValue=''
				}
			},
			delDingzi(i){
				this.fix_position.splice(i,1)
				this.fix_word.splice(i,1)
			}
			
		}
	}
</script>

<style lang="less">
	.dingzi {
		.mask {
			position: fixed;
			z-index: 998;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.6);
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s ease;
		}
		
		.mask.show {
			visibility: visible;
			opacity: 1;
		}
		.dingzi_content{
			padding-left:50upx;
			.content_item{width:42%;display: flex;float:left;border:1px solid #d1d1d1;
			margin-right: 8%;
			margin-bottom: 40upx;
			text{display: inline-block;text-align: center;height: 80upx;line-height: 80upx;box-sizing: border-box;}
			text:nth-of-type(1){
				width: 50%;
				border-right:1px solid #d1d1d1;
			}
			text:nth-of-type(2){
				width: 25%;
				font-size: 26upx;
			}
			text:nth-of-type(3){
				width: 25%;
				background: #ccc;
				color: #999;
			}
			}
			}
			.select_box{height: 600upx;}
		.select_box,
		
		.exper_info_ok {
			position: fixed;
			z-index: 999;
			right: 0;
			left: 0;
			bottom: 0;
			text-align: left;
			font-size: 30upx;
			background: #fff;
			border-top: 0;
			transform: translateY(100%);
		}

		.select_box .s_tit,
		.exper_info_ok .s_tit {
			padding: 0 30upx;
			height: 90upx;
			line-height: 90upx;
			font-size: 32upx;
			border-bottom: 1px solid #484848;
			margin-bottom: 16upx;
			position: relative;
		}

		.select_box .s_tit text,
		.exper_info_ok .s_tit text {
			font-size: 26upx;
			color: #484848;
			padding-left: 20upx;
		}

		.select_box .close,
		.exper_info_ok .close {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			padding: 0 28upx;
			font-size: 28upx;
			color: #333;
			display: box;
		}

		.select_box .s_box,
		.exper_info_ok .s_box {
			padding: 0 14upx 32upx 30upx;
		}

		.select_box.show,
		.exper_info_ok.show {
			transform: translateY(0%);
			transition: all .3s;
		}

		.dingzi_input {
			display: flex;
			height: 60upx;
			line-height: 60upx;
			font-size: 32upx;
			width: 600upx;
			margin: 20upx auto;
			.flex_1 {
				flex: 3;
				border: 1px solid #ccc;
				padding: 0 20upx;
				margin-right: 20upx;
				height: 60upx;
			}

			.flex_2 {
				flex: 1;
				text-align: center;
				background: #ccc;
				color: #fff;
				font-size: 26upx;
			}

			.flex_3 {
				flex: 1;
				margin-right: 20upx;
				text-align: center;
				background: #ccc;
				font-size: 26upx;
				color: #fff;
			}

			.active {
				background: #cea80f;
			}

			.flex_4 {
				flex: 2;
				background: #2dc8f9;
				color: #fff;
				text-align: center;
				border-radius: 8upx;
			}
		}
	}
</style>
