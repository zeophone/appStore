<template>
	<view>
		<div v-if="nameInfo" style="font-size: 16px;">
			<div>
			{{name}}的读音为"{{nameInfo.first_name.phonetic_spell}}"、"{{nameInfo.second_name?nameInfo.second_name.phonetic_spell:''}}"，
			声调为{{nameInfo.first_name.word_tone}}、{{nameInfo.second_name?nameInfo.second_name.word_tone:''}}，音律优美，悦耳动听，朗朗上口。
			</div>
			<br/>
			<h4>名字来源</h4>
			<br/>
			<div v-html="nameInfo.first_name.name_meaning">
			</div>
			<br/>
			<h4>字义解析</h4>
			<br/>
			<div>
				<p >{{nameInfo.first_name.word_analysis.substring(0,2)}}<span class="co_red">{{nameInfo.first_name.word_analysis.substring(2)}}{{nameInfo.first_name.word_yuyi}}</span></p>
				<p v-if="nameInfo.second_name">{{nameInfo.second_name.word_analysis.substring(0,2)}}<span class="co_red">{{nameInfo.second_name.word_analysis.substring(2)}}{{nameInfo.second_name.word_yuyi}}</span></p>
			</div>
			<br/>
			<h4>五行属性</h4>
			<br/>
			<div>
				<p>{{nameInfo.first_name.diction}}</p>
				<p v-if="nameInfo.second_name">{{nameInfo.second_name.diction}}</p>
			</div>
			<br/>
			<h4>名字性格</h4>
			<br/>
			<div>
				<span v-for="item in bili"  style="margin-right: 10px;">{{item}}</span>
			</div>
			<br/>
			<h4>适合星座<span style="font-size: 12px;">（性格适配）</span></h4>
			<br/>
			<div>
				{{cons}}
			</div>
			<br/>
			<h4>适合生肖<span style="font-size: 12px;">（五行适配）</span></h4>
			<br/>
			<div>
				{{zodiac}}
			</div>
			<br/>
			<h4>名字点评</h4>
			<br/>
			<div>
				{{comment}}
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nameInfo: null,
				name: '',
				bili: [],
				comment: '',
				cons: '',
				five:[],
				zodiac:''
			}
		},
		onLoad(options) {
			this.name = options.name;
			this.$http.post('/api/name/detail',{
				order_froms: 6,
				app: 1,
				app_mchid: 'd35ac68a291a253470360cdd4344644b',
				surname: '邹',
				name: options.name,
				name_id: 156590,
			}).then(res=>{
				if(res.code == 1){
					this.nameInfo=res.data.sound_meaning.name_info.word_meaning_analysis;
					this.bili = res.data.psychology.xlx_character;
					this.comment = res.data.subject.expert_comment;
					this.five = res.data.app_full_name_five;
					this.constellation();
					this.wuxing();
				}else{
					this.$http.post('/v5/ceming/submit',{
						test_name: '邹'+options.name,
						sex: 1
					}).then(res=>{
						
					})
					
				}
			})
		},
		methods: {
			constellation(){
				let arr = this.bili;
				let result = [];
				for(let i=0;i<arr.length;i++){
					switch (arr[i]){
						case '爱学习':
							result.push('金牛座');
							break;
						case '好奇心':
							result.push('白羊座');
							result.push('双子座');
							break;
						case '判断力':
						result.push('水瓶座');
							break;
						case '创造力':
						result.push('狮子座');
							break;
						case '洞察力':
						result.push('处女座');
							break;
						case '勇敢':
						result.push('白羊座');
							break;
						case '毅力':
						result.push('金牛座');
							break;
						case '诚实':
						result.push('双鱼座');
						result.push('射手座');
							break;
						case '爱':
						result.push('巨蟹座');
						result.push('天蝎座');
							break;
						case '善良':
						result.push('巨蟹座');
							break;
						case '情商高':
						result.push('射手座');
							break;
						case '忠诚':
						result.push('处女座');
							break;
						case '正直':
						result.push('狮子座');
							break;
						case '领导力':
						result.push('狮子座');
							break;
						case '宽容':
						result.push('魔羯座');
							break;
						case '谦虚':
						result.push('魔羯座');
							break;
						case '谨慎':
						result.push('处女座');
							break;
						case '自律':
						result.push('天秤座');
						result.push('处女座');
							break;
						case '欣赏力':
						result.push('射手座');
							break;
						case '感恩':
						result.push('天秤座');
							break;
						case '乐观':
						result.push('双子座');
							break;
						case '幽默':
						result.push('双子座');
							break;
						case '信仰':
						result.push('双子座');
							break;
						case '激情':
						result.push('白羊座');
							break;
					}
					
				}
				this.cons=this.unique(result).join('、');
			},
			wuxing(){
				let jin = ['猴','鸡 ']
				let mu = ['虎','兔']
				let shui = ['鼠','猪']
				let huo = ['蛇','马']
				let tu = ['牛','龙','羊','狗']
				for(let i=1;i<this.five.length;i++){
					switch (this.five[i]){
						case '金':
							jin = [];
							break;
						case '木':
							mu = [];
							break;
						case '水':
						shui = [];
							break;
						case '火':
						huo = [];
							break;
						case '土':
						tu = [];
							break;
					}
				}
				this.zodiac=jin.concat(mu,shui,huo,tu).join('、');
			},
			unique(arr){
				for(let i=0;i<arr.length;i++){
					for(let j=i+1;j<arr.length;j++){
						if(arr[i]==arr[j]){
							arr.splice(j,1);
							j--;
						}
					}
				}
				return arr;
			}
				
		}
	}
</script>