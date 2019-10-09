<template>
	<view class="middle" v-if="data">
		<view class="box_c" v-if="false">
			<view class="box_m">
				<view class="name-list">
					<view class="name-item" v-for="(item,i) in nameInfo" :key="i">
						<text class="pinyin">{{item.pinyin}}</text>
						<text class="zi">{{item.word}}</text>
						<text class="wuxing">{{item.five}}</text>
					</view>
				</view>
				<input class="phone" type="number"  placeholder="请输入你的手机号码" v-model="mobile" placeholder-style="font-size:36upx;font-weight:400;line-height:90upx;color:#999;"/>
				<view class="phone-tigs">用于查询您的订单，请务必填写正确！</view>
				<view class="price">
					<view class="cur-price">吉时特价：￥<text>{{data.plan.price}}</text>元</view>
					<view class="old-price">原价：￥{{data.plan.original_price}}元</view>
				</view>
				<view class="pay">
					<view class="wechat" @click="paySubmit('wechat')"><text></text>微信支付</view>
					<view v-if="$client=='wap'" class="alipay" @click="paySubmit('alipay')"><text></text>支付宝支付</view>
				</view>
				<view class="record">起名网已为<text>118470</text>名用户提供专业测名</view>
			</view>
		</view>
		<view class="info" v-if="data">
			<view class="box_c">
				<view class="box_m">
					<view class="name-list">
						<view class="name-item" v-for="(item,i) in nameInfo" :key="i">
							<text class="pinyin">{{item.pinyin.split('、')[0]}}</text>
							<text class="zi">{{item.word}}</text>
							<text class="wuxing">{{item.five}}</text>
						</view>
					</view>
					<view>
						<view class="price">
							<view class="cur-price">吉时特价：￥<text>{{data.plan.price}}</text>元</view>
							<view class="old-price">原价：￥{{data.plan.original_price}}元</view>
						</view>
						<view class="pay">
							<view class="wechat" @click="paySubmit('wechat')"><text></text>微信支付</view>
							<view v-if="$client=='wap'" class="alipay" @click="paySubmit('alipay')"><text></text>支付宝支付</view>
						</view>	
					</view>
					<view class="dis-flex dis-center" @click="payView">
						<view class="score-text">总得分</view>
						<view class="score-num"><text>{{data.total_score}}</text>分</view>
					</view>
					<view class="dis-flex dis-center child-score" @click="payView">
						<text>{{data.sounds.score}}</text>
						<text v-if="data.luck_god">{{data.luck_god.score}}</text>
						<text v-if="data.luck_god">{{data.constellation.score}}</text>
						<text v-if="data.luck_god">{{data.zodiac.score}}</text>
						<text>{{data.three_five.score}}</text>
						<text>{{data.gossip.score}}</text>
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
					<view class="record size_30 line_80">起名网已为<text>118470</text>名用户提供专业测名</view>
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
							<view class="line p_t30"></view>
						</view>
						<view class="complex-item">
							<view class="complex-title">名字音律字型</view>
							<view class="complex-centent" v-html="data.sounds.name_explain_sounds"></view>
							<view class="line p_t30"></view>
						</view>
						<view class="complex-item" v-if="data.luck_god">
							<view class="complex-title">八字开运</view>
							<view class="complex-centent" v-html="data.luck_god.name_explain_luck_god"></view>
							<view class="line p_t30"></view>
						</view>
						<view class="complex-item">
							<view class="complex-title">周易卦象</view>
							<view class="complex-centent" v-html="data.gossip.name_explain_gossip"></view>
							<view class="line p_t30"></view>
						</view>
						<view class="complex-item">
							<view class="complex-title">三才五格</view>
							<view class="complex-centent" v-html="data.three_five.name_explain_three_five"></view>
							<view class="line p_t30"></view>
						</view>
						<view class="complex-item" v-if="data.zodiac">
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
						<view class="c-container" v-if="false">
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
						<view  @click="payView" class="pay_show p_l20 p_t20">
							<img class="hidden_img" :src="data.charts.mzyx_hidden" mode=""></img>
						</view>
					</view>
					<CanvasLine class="p_t10" v-if="false" id="listA" :year="data.charts.year_list" :male="data.charts.male_nums_list" :female="data.charts.female_nums_list">名字“{{data.name.word}}”往年使用趋势分析</CanvasLine>
					<view  @click="payView" class="pay_show p_l20 p_t20">
						<view class="jiesuo">
							<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
						</view>
						<img class="hidden_img" :src="data.charts.chart_hidden" mode=""></img>
					</view>
					<view class="line"></view>
					<view class="p_20">
						<view class="">基于大数据分析，近十年来，"{{data.name.word}}"的
						{{data.man_rate>data.woman_rate?'男性使用率居多，比例占'+data.man_rate+'%':'女性使用率居多，比例占'+data.woman_rate+'%'}}
						</view>
						<view class="dis-flex male-female" v-if="false">
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
						<view  @click="payView" class="pay_show p_l20 p_t20">
							<img class="hidden_img" :src="data.charts.sex_hidden" mode=""></img>
						</view>
					</view>
					<view class="line"></view>
					<CanvasLine v-if="false" id="listB" :year="data.charts.year_list" :male="data.charts.first_male_nums" :female="data.charts.first_female_nums">“{{data.name.first.word}}”字在名字中使用趋势分析</CanvasLine>
					<view class="">“{{data.name.first.word}}”字在名字中首字使用趋势分析</view>
					<view  @click="payView" class="pay_show p_l20 p_t20">
						<view class="jiesuo">
							<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
						</view>
						<img class="hidden_img" :src="data.charts.chart_hidden" mode=""></img>
					</view>
					<view class="line"></view>
					<CanvasLine v-if="false" id="listC" :year="data.charts.year_list" :male="data.charts.second_female_nums" :female="data.charts.second_male_nums">“{{data.name.second.word}}”字在名字中使用趋势分析</CanvasLine>
					<view v-if="data.name.word.length==2">“{{data.name.second.word}}”字在名字中末字使用趋势分析</view>
					<view  @click="payView" class="pay_show p_l20 p_t20">
						<view class="jiesuo">
							<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
						</view>
						<img class="hidden_img" :src="data.charts.chart_hidden" mode=""></img>
					</view>
					<view v-if="data.name.word.length==2" class="line"></view> 
					<view class="p_20">说明：该统计基于近13亿人的姓名数据，对名字在每个年代的使用情况做出排名，排名越高表示使用的人越多。</view>
				</view>
			</view>
			
				<view class="info2">
					<view class="list-title">
						<text>周易八卦</text>
						<text @click="payView" class="co_cba155">( {{data.gossip.score}}分 )</text>
					</view>
					<view class="box_c">
						<view class="box_m">
							<view class="p_20 bg_ff">
								<view  @click="payView" class="pay_show" v-for="(item,i) in data.gossip.hidden">
									<view class="jiesuo">
										<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
									</view>
									<img class="hidden_img" :src="item" mode=""></img>
								</view>	
							</view>
						</view>
					</view>

				<view class="list-title">
					<text>音形义详解</text>
					<text @click="payView" class="co_cba155">( {{data.sounds.score}}分 )</text>
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
							<view  @click="payView" class="pay_show p_l20" v-for="(item,i) in data.sounds.hidden" :key="i">
								<view class="jiesuo">
									<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
								</view>
								<img :src="item" class="hidden_img" mode=""></img>
							</view>
							<view class="s_warp" v-for="(item,i) in sounds"  :key="i" v-if="false">
								<view class="sounds_tit">
									<text class="tit">{{item.title}}</text>
									<text class="star" :style="{'background-position': '0 '+(-item.star*40)+'upx'}"></text>
									<text class="evaluate">{{item.level}}</text>
								</view>
								<view class="desc" v-html="item.desc"></view>
								<view class="line"></view>
							</view>	
						</view>
					</view>
				</view>
				
				<view class="list-title" v-if="data.luck_god">
					<text>国学起名</text>
					<text @click="payView" class="co_cba155">( {{data.luck_god.score}}分 )</text>
				</view>
				<view class="box_c">
					<view class="box_m">
						<view class="info2-centent" v-if="data.luck_god">
							<view v-html="data.luck_god.luck_god_table" class="table f_s28"></view>
							<view class="line"></view>
							<view class="p_l20 p_r20">
								<view class="size_38 bold line_80">五行强弱分析</view>
								<view  @click="payView" class="pay_show p_l20">
									<view class="jiesuo">
										<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
									</view>
									<image :src="data.luck_god.five_line_hidden" mode=""></image>
								</view>
							</view>
							<view class="line"></view>
							<view class="p_l20 p_r20">
								<view class="size_38 bold line_80">八字喜神分析</view>
								<view  @click="payView" class="pay_show p_l20">
									<view class="jiesuo">
										<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
									</view>
									<image :src="data.luck_god.happy_god_hidden" mode=""></image>
								</view>
							</view>
							<view class="line"></view>
						</view>
					</view>
				</view>
				
				<view class="list-title" v-if="data.constellation">
					<text>星座起名</text>
					<text @click="payView" class="co_cba155">( {{data.constellation.score}}分 )</text>
				</view>
				<view class="box_c">
					<view class="box_m">
						<view class="info2-centent" v-if="data.constellation">
							<view class="text_c"><image class="constImg" :src="data.constellation.image" mode=""></image></view>
							<view class=" p_t20 line_80 size_38 co_333 text_c">
								星座：{{data.constellation.name}}座<text class="size_28 p_l20 co_999">({{data.constellation.english}})</text>
							</view>
							<view class="size_28 text_c line_80">{{data.constellation.name}}座优点：</view>
							<view class="advantage dis_flex fl_c f_s28">
								<text v-for="(item,i) in data.constellation.advantage_arr" :key="i">{{item}}</text>
							</view>
							<view class="size_28 co_ea0 text_c line_80">{{data.constellation.name}}座缺点：</view>
							<view class="shortcoming dis_flex fl_c f_s28">
								<text v-for="(item,i) in data.constellation.shortcoming_arr" :key="i">{{item}}</text>
							</view>
							<view class="text_c line_80 size_38">名字星座评分：</view>
							<view  @click="payView" class="pay_show">
								<view class="jiesuo">
									<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
								</view>
								<img class="hidden_img" :src="data.constellation.hidden" mode=""></img>
							</view>
							<view class="text_c" @click="payView" v-if="false">
								<view class="character">
									<view class="info">
										<text>{{data.constellation.score}}<text class="size_28">分</text></text>
									</view>
									<view class="circle-bor">
										<text class="circle-bg" :style="{height: data.constellation.score+'%'}"><text class="circle-aim"></text></text>
									</view>
								</view>
							</view>
							<view class="p_20" v-if="false">
								<view class="bg_f1 p_20">{{data.constellation.explain}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="list-title" v-if="data.zodiac">
					<text>生肖凶吉</text>
					<text @click="payView" class="co_cba155">( {{data.zodiac.score}}分 )</text>
				</view>
				<view class="box_c">
					<view class="box_m">
						<view class="info2-centent" v-if="data.zodiac">
							<view class=" p_t20 line_80 size_38 co_333 p_l20">
								生肖：属{{data.zodiac.name}}
							</view>
							<view class="size_28 text_c line_80">属{{data.zodiac.name}}优点：</view>
							<view class="advantage dis_flex fl_c f_s28">
								<text v-for="(item,i) in data.zodiac.advantage_arr" :key="i">{{item}}</text>
							</view>
							<view class="size_28 co_ea0 text_c line_80">属{{data.zodiac.name}}缺点：</view>
							<view class="shortcoming dis_flex fl_c f_s28">
								<text v-for="(item,i) in data.zodiac.shortcoming_arr" :key="i">{{item.shortcoming}}</text>
							</view>
							<view class="text_c line_80 size_38">名字星座评分：</view>
							<view  @click="payView" class="pay_show">
								<view class="jiesuo">
									<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
								</view>
								<img class="hidden_img" :src="data.zodiac.hidden" mode=""></img>
							</view>
							<view class="text_c" @click="payView" v-if="false">
								<view class="character">
									<view class="info">
										<text>{{data.zodiac.score}}<text class="size_28">分</text></text>
									</view>
									<view class="circle-bor">
										<text class="circle-bg" :style="{height: data.zodiac.score+'%'}"><text class="circle-aim"></text></text>
									</view>
								</view>
							</view>
							<view class="p_40" v-if="false">
								<view class="bg_f1 p_20" v-html="data.zodiac.explain"></view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="list-title">
					<text>五格数理</text>
					<text @click="payView" class="co_cba155">( {{data.three_five.score}}分 )</text>
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
							<view class="five_ge" v-for="(item,i) in fiveGe" :key="item.name" v-if="i<7">
								<view class="left">
									<text>{{item.name}}</text><text class="num" v-if="item.score">{{item.score}}</text>
								</view>
								<view class="right">
									<view class="" v-if="item.jixiong">
										<text class="jixiong"  :style="{background: item.color}">{{item.jixiong}}</text><text>{{item.lang}}</text>
									</view>
									<view class="" v-if="!item.jixiong">
										<view v-html="item.lang"></view>
									</view>
									<view class="jiexi">{{item.tig||''}}</view>
								</view>
							</view>
							<view  @click="payView" class="pay_show">
								<view class="jiesuo">
									<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
								</view>
								<image :src="data.three_five.hidden" mode=""></image>
							</view>
						</view>
					</view>
				</view>
				
				<view class="list-title">起名专家点评</view>
				<view class="box_c">
					<view class="box_m text_c">
						<view  @click="payView" class="pay_show">
						<view class="jiesuo">
							<image src="https://static.quwangming.com/newqiming/images/m/ceming_201902/icon_suo.png" mode=""></image><text>解锁查看</text>
						</view>
						<image  :src="data.expert_opinion.hidden_image" mode=""></image>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="pay-view" :class="{show:scrollPay}">
			<view class="input">
				<!-- <input type="number"  placeholder="输入手机号码" v-model="mobile" placeholder-style="font-weight:400;color:#999;"/> -->
				<view class="tig">解锁查看所有结果</view>
				<text class="size_28">吉时特价<text class="bold size_38" style="color: #fec730;">￥{{data.plan.price}}</text><text class="old-price size_24">￥{{data.plan.original_price}}元</text></text>
			</view>
			<view class="pay">
				<view class="wechat" @click="paySubmit('wechat')"><text></text>微信支付</view>
				<view v-if="$client=='wap'" class="alipay" @click="paySubmit('alipay')"><text></text>支付宝支付</view>
			</view>
		</view>
		<view class="pay-pop" v-show="pay_Pop">
			<view class="bg" @click.self="close"></view>
			<view class="container">
				<view class="close"><text @click="close">×</text></view>
				<view class="tig">解锁查看所有结果</view>
<!-- 				<input class="phone" type="number" v-model="mobile" placeholder="请输入你的手机号码" placeholder-style="font-size:36upx;font-weight:400;line-height:90upx;color:#999;"/>
				<view class="phone-tigs">用于查询您的订单，请务必填写正确！</view> -->
				<view class="price">
					<view class="cur-price">吉时特价：￥<text >{{data.plan.price}}</text>元</view>
					<view class="old-price">原价：￥{{data.plan.original_price}}元</view>
				</view>
				<view class="pay">
					<view class="wechat" @click="paySubmit('wechat')"><text></text>微信支付</view>
					<view v-if="$client=='wap'" class="alipay" @click="paySubmit('alipay')"><text></text>支付宝支付</view>
				</view>				
			</view>
		</view>
	</view>
</template>
<script>
	import mixin from '@/common/mixin.js';
	import CanvasLine from '@/components/CanvasLine.vue';
	export default {
		data(){
			return{
				scrollPay: false,
				pay_Pop:false,
				mobile: ''
			}
		},
		components:{
			CanvasLine
		},
		mixins:[mixin],
		onPageScroll(obj){
			if(obj.scrollTop>800){
				this.scrollPay=true;
			}else{
				this.scrollPay=false;
			}
		},
		methods:{
			close(){
				this.pay_Pop=false;
			},
			openPay(){
				this.pay_Pop=true;
			},
			paySubmit(type){
				this.$http.post('/v5/pay/handle',{
					info_id: this.data.info_id,
					pay_method: type,
					plan_id: 'cm1',
					order_type: 'ceming'
				}).then(res=>{
					if(res.code==1){
						if(type=='alipay'){
							location.href = res.data.url;
                            return false;
						}else{
							localStorage.setItem('pay_result',JSON.stringify(res.data.result));
							location.href = res.data.url;
							return false;
						}
					}else{
						uni.showToast({
							title:res.msg,
							icon: 'none'
						})
					};
				})
			}
		}
	}
</script>


