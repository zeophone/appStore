<template>
	<view class="result-info" v-if="data">
		<view class="box_c m_b20" v-if="isMobile">
			<view class="box_m">
				<view class="p_20">
					<view class="text_c line_80  m_b20">输入手机号以保存测名报告</view>
					<view class="mobile-input">
						<input type="number" placeholder="请输入手机号" v-model="mobile" />
					</view>
					<view class="sub-red" @click="saveMobile">发送结果到手机</view>				
				</view>
			</view>
		</view>
		<view class="box_c">
			<view class="box_m">
				<view class="name-list">
					<view class="name-item" v-for="(item,i) in nameInfo" :key="i">
						<text class="pinyin">{{item.pinyin.split('、')[0]}}</text>
						<text class="zi">{{item.word}}</text>
						<text class="wuxing">{{item.five}}</text>
					</view>
				</view>
				<view class="dis-flex dis-center">
					<view class="score-text">总得分</view>
					<view class="score-num"><text>{{data.total_score}}</text>分</view>
				</view>
				<view class="dis-flex dis-center child-score">
					<text>{{data.sounds.score}}</text>
					<text v-if="data.luck_god">{{data.luck_god.score}}</text>
					<text v-if="data.luck_god">{{data.constellation.score}}</text>
					<text v-if="data.luck_god">{{data.zodiac.score}}</text>
					<text>{{data.three_five.score}}</text>
					<text style="border-right: 0;">{{data.gossip.score}}</text>
				</view>
				<view class="dis-flex dis-center grid">
					<text v-for="i in 5"></text>
				</view>
				<view class="dis-flex sign">
					<text v-for="item in '音八星肖格卦'">{{item}}</text>
				</view>
				<view class="dis-flex  sign-name">
					<text v-for="(item,i) in ['好听内涵','八字五行','星座起名','生肖吉凶','五格数理','周易卦象']">{{item}}</text>
				</view>
				<view class="export-tag">
					<text class="tag-name">{{data.surname.word+data.name.word}}</text>
					<text>名字打分为智能打分，更详情专业测算可找林老师手工测名</text>
				</view>
				<view style="padding: 0 50upx;padding-bottom: 40upx;">
					<a href="/dashi_ceming" class="sub-red">林老师手工测名打分</a>
				</view>

			</view>
		</view>
		
		<view class="list-title">名字综合评分</view>
		<view class="box_c">
			<view class="box_m">
				<view style="padding: 20upx;">
					<view class="complex-item">
						<view class="complex-title">名字用字分析</view>
						<view class="complex-centent">
							<view class="" v-for="(item,i) in nameArr" :key="i">
								<text class="co_09f">{{item.word}}</text>：<text>{{item.name_mean}}</text>
							</view>
						</view>
					</view>
					<view class="line p_t30"></view>
					<view class="complex-item">
						<view class="complex-title">名字音律字型</view>
						<view class="complex-centent" v-html="data.sounds.name_explain_sounds"></view>
					</view>
					<view class="line p_t30"></view>
					<view class="complex-item" v-if="data.luck_god">
						<view class="complex-title">八字开运</view>
						<view class="complex-centent" v-html="data.luck_god.name_explain_luck_god"></view>
					</view>
					<view class="line p_t30"></view>
					<view class="complex-item">
						<view class="complex-title">周易卦象</view>
						<view class="complex-centent" v-html="data.gossip.name_explain_gossip"></view>
					</view>
					<view class="line p_t30"></view>
					<view class="complex-item">
						<view class="complex-title">三才五格</view>
						<view class="complex-centent" v-html="data.three_five.name_explain_three_five"></view>
					</view>
					<view class="line p_t30"></view>
					<view class="complex-item" v-if="data.luck_god">
						<view class="complex-title">生肖吉祥</view>
						<view class="complex-centent" v-html="data.zodiac.name_explain_zodiac"></view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="list-title">名字潮流分析</view>
		<view class="box_c">
			<view class="box_m">
				<view style="padding: 20upx;">
					<view class="">基于大数据“{{data.name.word}}”名字性格标签分析：</view>
					<view class="c-container">
						<view class="c-warp" :style="{width: 210*objLength(data.name_character_bili)+'upx'}">
							<view class="character" v-for="(item,key) in data.name_character_bili" :key="key">
								<view class="info">
									<text>{{item}}%</text>
									<text>{{characterToText(key)}}</text>
								</view>
								<view class="circle-bor">
									<text class="circle-bg" :style="{height: item+'%'}"><text class="circle-aim"></text></text>
								</view>
							</view>
						</view>
					</view>
					<view>
						<view class="p_b20">如果您身边也有叫“{{data.name.word}}”的朋友，不妨说说他们是什么样性格的一个人哦！</view>
						<view class="sub-red" @click="addCharacter">点评这个名字印象</view>
						<view class="line p_b20"></view>
					</view>

				</view>
				<CanvasLine id="listA" :year="data.charts.year_list" :male="data.charts.male_nums_list" :female="data.charts.female_nums_list">名字“{{data.name.word}}”往年使用趋势分析</CanvasLine>
				<view class="line"></view>
				<view class="p_20">
					<view class="">基于大数据分析，近十年来，"{{data.name.word}}"的
						{{data.man_rate>data.woman_rate?'男性使用率居多，比例占'+data.man_rate+'%':'女性使用率居多，比例占'+data.woman_rate+'%'}}
					</view>
					<view class="dis-flex male-female">
						<view class="dis-flex flex">
							<text class="man-logo">
								<text></text>
							</text>
							<text class="man-par">{{data.man_rate}}%</text>
						</view>
						<view class="dis-flex flex">
							<text class="women-par">{{data.woman_rate}}%</text>
							<text class="women-logo">
								<text></text>
							</text>
						</view>
					</view>
				</view>
				<view class="line p_b40"></view>
				<CanvasLine id="listB" :year="data.charts.year_list" :male="data.charts.first_male_nums" :female="data.charts.first_female_nums">“{{data.name.first.word}}”字在名字中使用趋势分析</CanvasLine>
				<view class="line p_b40"></view>
				<CanvasLine v-if="data.name.word.length==2" id="listC" :year="data.charts.year_list" :male="data.charts.second_female_nums"
				 :female="data.charts.second_male_nums">“{{data.name.second.word}}”字在名字中使用趋势分析</CanvasLine>
				<view v-if="data.name.word.length==2" class="line"></view>
				<view class="p_20">说明：该统计基于近13亿人的姓名数据，对名字在每个年代的使用情况做出排名，排名越高表示使用的人越多。</view>
			</view>
		</view>

		<view class="info2">
			<view class="list-title">
				<text>周易八卦</text>
				<text class="co_cba155">( {{data.gossip.score}}分 )</text>
			</view>
			<view class="box_c">
				<view class="box_m">
					<view class="info2-centent p_20">
						<view class="" v-html="data.gossip.gossip_image"></view>
						<view class="size_38 bold line_80">名字卦象解析</view>
						<view v-for="(item,i) in data.gossip.explain" :key="i">{{item}}</view>
						<view class="line p_t40 p_b20"></view>
						<view class="size_38 bold line_80">名字卦象解析</view>
						<view class="five_ge" v-for="(item,i) in baguaJiexi" :key="item.name">
							<view class="left">
								<text>{{item.name}}</text>
							</view>
							<view class="right">
								<view class="">
									<view v-html="item.lang"></view>
								</view>
								<view class="jiexi m_b20" v-if="i<baguaJiexi.length-1"></view>
							</view>
						</view>
					</view>

				</view>
			</view>
			<view class="list-title">
				<text>音形义详解</text>
				<text class="co_cba155">( {{data.sounds.score}}分 )</text>
			</view>
			<view class="box_c">
				<view class="box_m">
				<view class="info2-centent">
				<view class="name-list" style="justify-content: flex-start;">
					<view class="name-item" v-for="(item,i) in nameArr" :key="i">
						<text class="zi">{{item.word}}</text>
						<text class="pinyin">[{{item.phonetic_spell}}]</text>
					</view>
				</view>
				<view class="s_warp" v-for="(item,i) in sounds" :key="i">
					<view class="sounds_tit">
						<text class="tit">{{item.title}}</text>
						<text class="star" :style="{'background-position': '0 '+(-item.star*40)+'upx'}"></text>
						<text class="evaluate">{{item.level}}</text>
					</view>
					<view class="desc" v-html="item.desc"></view>
					<view class="line p_t20" v-if="i<sounds.length-1"></view>
				</view>	
				</view>
			</view>
			</view>
			<view class="list-title" v-if="data.luck_god">
				<text>国学起名</text>
				<text class="co_cba155">( {{data.luck_god.score}}分 )</text>
			</view>
			<view class="box_c">
				<view class="box_m">
					<view class="info2-centent" v-if="data.luck_god">
						<view v-html="data.luck_god.luck_god_table" class="table f_s28"></view>
						<view class="line p_t20"></view>
						<view class="p_20">
							<view class="size_38 bold line_80">五行强弱分析</view>
							<view class="wuxing-status" v-for="item in fiveLine" :style="{color:item.color}" :key="item.name">
								<text class="name">{{item.name}}</text>
								<text class="bg"><text :style="{width:item.score+'%',background:item.color}" class="st"></text></text>
								<text class="score">{{item.score}}%</text>
							</view>
							<view class="p_t20">
								<view v-for="(item,i) in data.luck_god.five_line_explain" :key="i" v-html="item"></view>
							</view>
						</view>
						<view class="line p_t20"></view>
						<view class="p_20">
							<view class="size_38 bold line_80">八字喜神分析</view>
							<view v-for="(item,i) in data.luck_god.happy_god_explain" :key="i" v-html="item"></view>
						</view>
						
					</view>
				</view>
			</view>
			
			<view class="list-title" v-if="data.luck_god">
				<text>星座起名</text>
				<text class="co_cba155">( {{data.constellation.score}}分 )</text>
			</view>
			<view class="box_c">
				<view class="box_m">
					<view class="info2-centent " v-if="data.luck_god">
						<view class="text_c"><image class="constImg" :src="data.constellation.image" mode=""></image></view>
						<view class=" p_t20 line_80 size_38 co_333 p_l20 text_c">
							星座：{{data.constellation.name}}座<text class="size_28 p_l20 co_999">({{data.constellation.english}})</text>
						</view>
						<view class="size_28 p_b20 p_l20 text_c line_80">{{data.constellation.name}}座优点：</view>
						<view class="advantage dis_flex fl_c f_s28">
							<text v-for="(item,i) in data.constellation.advantage_arr" :key="i">{{item}}</text>
						</view>
						<view class="size_28 co_ea0 p_b20 p_l20 text_c line_80">{{data.constellation.name}}座缺点：</view>
						<view class="shortcoming dis_flex fl_c f_s28">
							<text v-for="(item,i) in data.constellation.shortcoming_arr" :key="i">{{item}}</text>
						</view>
						<view class="text_c line_80 size_38">名字星座评分：</view>
						<view class="text_c">
							<view class="character">
								<view class="info">
									<text>{{data.constellation.score}}<text class="size_28">分</text></text>
								</view>
								<view class="circle-bor">
									<text class="circle-bg" :style="{height: data.constellation.score+'%'}"><text class="circle-aim"></text></text>
								</view>
							</view>
						</view>
						<view class="p_20 p_t40">
							<view class="bg_f1 p_20">{{data.constellation.explain}}</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="list-title" v-if="data.luck_god">
				<text>生肖凶吉</text>
				<text class="co_cba155">( {{data.zodiac.score}}分 )</text>
			</view>
			<view class="box_c">
				<view class="box_m">
					<view class="info2-centent " v-if="data.luck_god">
						<view class=" p_t20 line_80 size_38 co_333 p_l20">
							生肖：属{{data.zodiac.name}}
						</view>
						<view class="size_28 p_b20 p_l20 text_c line_80">属{{data.zodiac.name}}优点：</view>
						<view class="advantage dis_flex fl_c f_s28">
							<text v-for="(item,i) in data.zodiac.advantage_arr" :key="i">{{item}}</text>
						</view>
						<view class="size_28 co_ea0 p_b20 p_l20 text_c line_80">属{{data.zodiac.name}}缺点：</view>
						<view class="shortcoming dis_flex fl_c f_s28">
							<text v-for="(item,i) in data.zodiac.shortcoming_arr" :key="i">{{item.shortcoming}}</text>
						</view>
						<view class="text_c line_80 size_38">名字生肖评分：</view>
						<view class="text_c">
							<view class="character">
								<view class="info">
									<text>{{data.zodiac.score}}<text class="size_28">分</text></text>
								</view>
								<view class="circle-bor">
									<text class="circle-bg" :style="{height: data.zodiac.score+'%'}"><text class="circle-aim"></text></text>
								</view>
							</view>
						</view>
						<view class="p_20">
							<view class="bg_f1 p_20" v-html="data.zodiac.explain"></view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="list-title">
				<text>五格数理</text>
				<text class="co_cba155">( {{data.three_five.score}}分 )</text>
			</view>
			<view class="box_c">
				<view class="box_m">
					<view class="info2-centent p_20">
						<view class="size_38 bold line_80">结构解析</view>
						<view class="dis-flex align_c">
							<view class="flex_1">外格 {{data.three_five.info.out}}</view>
							<view class="flex_1 xian"></view>
							<view class="flex_1 dis-flex flex_col name-three_five">
								<text class="flex_1">1</text>
								<view class="flex_1" v-for="(item,i) in data.three_five.image" :key="i" v-html="item"></view>
							</view>
							<view class="flex_1 xian2">
								<text></text>
								<text></text>
								<text></text>
							</view>
							<view class="flex_1 dis-flex flex_col p_t20" style="height: 230upx;text-align: center;">
								<text class="flex_1">天格 {{data.three_five.info.sky}}</text>
								<text class="flex_1">人格 {{data.three_five.info.human}}</text>
								<text class="flex_1">地格 {{data.three_five.info.earth}}</text>
							</view>
						</view>
						<view class="line"></view>
						<view class="text_c p_b20">总格 {{data.three_five.info.total}}</view>
						<view class="five_ge" v-for="(item,i) in fiveGe" :key="item.name">
							<view class="left">
								<text>{{item.name}}</text><text class="num" v-if="item.score">{{item.score}}</text>
							</view>
							<view class="right">
								<view class="" v-if="item.jixiong">
									<text class="jixiong" :style="{background: item.color}">{{item.jixiong}}</text><text>{{item.lang}}</text>
								</view>
								<view class="" v-if="!item.jixiong">
									<view v-html="item.lang"></view>
								</view>
								<view class="jiexi m_b20" v-if="i<fiveGe.length-1">{{item.tig||''}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<view class="list-title">起名专家点评</view>
			<view class="box_c m_b20">
				<view class="box_m text_c">
					<view style="padding: 20upx;">{{data.expert_opinion}}</view>
				</view>
			</view>
		</view>
		<Popups ref="phone" title="保存测名报告">
			<view class="p_20">
				<view class="text_c line_80  m_b20">输入手机号以保存测名报告</view>
				<view class="mobile-input">
					<input type="number" placeholder="请输入手机号" v-model="mobile" />
				</view>
				<view class="sub-red" @click="saveMobile">发送结果到手机</view>				
			</view>

		</Popups>
		<Character ref="character"></Character>
		<Recom></Recom>
	</view>
</template>

<script>
	import Character from '@/components/Character.vue';
	import CanvasLine from '@/components/CanvasLine.vue';
	import mixin from '@/common/mixin.js';
	import Popups from '@/components/Popups.vue';
	import Recom from '@/components/Recom/main.vue';
	export default {
		components: {
			CanvasLine,
			Character,
			Popups,
			Recom
		},
		data(){
			return {
				isMobile:false,
				mobile:'',
				order_sn:''
			}
		},
		onBackPress(){
			uni.switchTab({
				url: '/pages/index/ceming'
			});
			return true;
		},
		onNavigationBarButtonTap(obj){
			if(obj.type=="home"){
				uni.switchTab({
					url:'/pages/user/index'
				})
			}
		},
		methods:{
			addCharacter(){
				this.$refs.character.show();
			},
			openMobile(){
				this.$refs.phone.show();
			},
			saveMobile(){
				if(this.mobile.length!=11){
					uni.showToast({
						title:'手机号格式不正确',
						icon: 'none'
					})
					return;
				}
				this.$http.post('/v5/order/send',{
					mobile:this.mobile,
					order_sn:this.order_sn
				}).then(res=>{
					if(res.code==1){
						this.isMobile=false;
						this.$refs.phone.hide();
						uni.showToast({
							title:'发送成功',
							icon: 'none'
						})
					}
				})
			}
		},
		mixins: [mixin]
	}
</script>
<style lang="scss" scoped>
	.result-info {
		padding: 20upx;
		background: #f8f8f8;
	}
	.mobile-input{
		border: 1px solid #ccc;
		height: 80upx;
		border-radius: 12upx;
		background: #f1f1f1;
		padding: 20upx;
		display: flex;
		align-items: center;
		margin-bottom: 40upx;
	}
</style>
