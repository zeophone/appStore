<template>
	<view class="character">
		<view class="mask" :class="{'show':expectOpen}" @tap="close" catchtouchmove="true"></view>
		<view class="select_box" :class="expectOpen ? ' show' : ''">
			<view class="s_tit">期望性格<text>(多选 可选1-6个)</text>
				<text class="close" @click="close">确定</text>
			</view>
			<view class="s_box clearfix">
				<checkbox-group @change="character" data-array="checkCharacterItems" data-name="yyCharacterName" data-text="yyCharacterText">
					<label class="checkbox" v-for="(item,index) in checkCharacterItems" :key="index" :class="item.checked?'on':''">
						<checkbox :value="item.value" :checked="item.checked" hidden='true' />{{item.text}}</label>
				</checkbox-group>
			</view>
		</view>	
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				expectOpen: false,//性格弹框控制
				CharacterText: '',
				charcterName: '',
				character_index: 0,
				checkCharacterItems: [{
						value: '0',
						name: 'a',
						text: '爱学习',
						checked: false
					},
					{
						value: '1',
						name: 'b',
						text: '好奇心',
						checked: false
					},
					{
						value: '2',
						name: 'c',
						text: '判断力',
						checked: false
					},
					{
						value: '3',
						name: 'd',
						text: '创造力',
						checked: false
					},
					{
						value: '4',
						name: 'e',
						text: '洞察力',
						checked: false
					},
					{
						value: '5',
						name: 'f',
						text: '勇敢',
						checked: false
					},
					{
						value: '6',
						name: 'g',
						text: '毅力',
						checked: false
					},
					{
						value: '7',
						name: 'h',
						text: '诚实',
						checked: false
					},
					{
						value: '8',
						name: 'i',
						text: '爱',
						checked: false
					},
					{
						value: '9',
						name: 'j',
						text: '善良',
						checked: false
					},
					{
						value: '10',
						name: 'k',
						text: '情商高',
						checked: false
					},
					{
						value: '11',
						name: 'l',
						text: '忠诚',
						checked: false
					},
					{
						value: '12',
						name: 'm',
						text: '正直',
						checked: false
					},
					{
						value: '13',
						name: 'n',
						text: '领导力',
						checked: false
					},
					{
						value: '14',
						name: 'o',
						text: '宽容',
						checked: false
					},
					{
						value: '15',
						name: 'p',
						text: '谦虚',
						checked: false
					},
					{
						value: '16',
						name: 'q',
						text: '谨慎',
						checked: false
					},
					{
						value: '17',
						name: 'r',
						text: '自律',
						checked: false
					},
					{
						value: '18',
						name: 's',
						text: '欣赏力',
						checked: false
					},
					{
						value: '19',
						name: 't',
						text: '感恩',
						checked: false
					},
					{
						value: '20',
						name: 'u',
						text: '乐观',
						checked: false
					},
					{
						value: '21',
						name: 'v',
						text: '幽默',
						checked: false
					},
					{
						value: '22',
						name: 'w',
						text: '信仰',
						checked: false
					},
					{
						value: '23',
						name: 'x',
						text: '激情',
						checked: false
					}
				],
			}
		},
		methods: {
			show(){
				this.expectOpen=true
			},
			close(){
				this.expectOpen=false
				var data={
					CharacterText:this.CharacterText,
					charcterName: this.charcterName
				}
				this.$emit('check',data)
			},
			character(e) {
				var checkArr = e.detail.value;
				var items= this.checkCharacterItems
				var text = []
				var name = []
				if (checkArr.length < 7) {
					for (var i = 0; i < items.length; i++) {
						if (checkArr.indexOf(i + "") != -1) {
							items[i].checked = true;
							text += items[i].text + ',';
							name += items[i].name + ',';
						} else {
							items[i].checked = false;
						}
					}
					if (text == '') {
							this.character_index=0
						text = '期望性格'
					} else {
							this.character_index=1
					}
					if(text.length>1){
						text=text.substring(0,text.length-1)
					}
					if(name.length>1){
						name=name.substring(0,name.length-1)
					}
					this.CharacterText=text
					this.charcterName=name
				} else {
					uni.showToast({
						title: '最多只能选6个',
						image: '/static/img/tips/remind.png'
					})
				}
				
			}
		}
	}
</script>

<style lang="less">
.character{
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
	.mask.show{
		visibility: visible;
		opacity: 1;
	}
	.select_box,.exper_info_ok{ position: fixed; z-index: 999; right: 0; left: 0; bottom: 0; text-align: left; font-size: 1.0714rem; background:#fff; border-top: 0; transform: translateY(100%);}
	.select_box .s_tit,.exper_info_ok .s_tit{ padding: 0 30upx; height: 90upx; line-height: 90upx; font-size: 32upx; border-bottom: 1px solid #484848; margin-bottom: 16upx; position: relative;}
	.select_box .s_tit text,.exper_info_ok .s_tit text{ font-size: 28upx; color: #484848; padding-left:20upx;}
	.select_box .close,.exper_info_ok .close{ position: absolute; top: 0; right: 0; bottom: 0; padding: 0 28upx; font-size: 28upx; color: #333; display: box;}
	.select_box .s_box,.exper_info_ok .s_box{ padding: 0 14upx 32upx 30upx;}
	.select_box .s_box .boy.none,.select_box .s_box .girl.none{ display: none;}
	.select_box checkbox-group{ overflow: hidden;}
	.select_box label { float: left; padding: 0 30upx; background: #eee; line-height: 64upx; color: #333; margin: 16upx 14upx 0 0;border-radius: 64upx; font-size: 32upx;}
	.select_box label.on{ background: #eb4b01; color: #fff!important;}
	.select_box .s_box .ts {font-size: 24upx;color: #f00;line-height: 40upx;padding-top: 22upx;}
	.select_box .s_box input{ display: none}
	.select_box.show,.exper_info_ok.show{ transform: translateY(0%); transition: all .3s;}
}	
	
</style>
