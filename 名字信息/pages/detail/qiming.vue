<template>
	<view class="list-detail">
		<div  style="font-size: 16px;">
			<div>{{info1.three_five.split('。')[0]}}。</div>
			<div style="font-size: 14px; color: #666;">五行中的“金、木、水、火、土”在宇宙空间时时刻刻发生着规律的相生相克关系，无疑也都体现在一个人的姓名里面，一个五行相生的名字在一个人的社会关系里也将呈现出和谐相生的融洽状态。</div>
			<br/>
			<div style="text-align: center;">
					<img alt="" :src="img1">
			</div>
			<br/>
			<div v-if="info1">
				<h3>{{info1.surname}}姓{{info1.gender}}宝宝名字大全 五行喜{{wxname}}名字 </h3>

				<div>
					<span style="width: 30%;display: inline-block;" v-for="(item,i) in list1">{{item.name.join('')}}<span style="font-size: 12px;color: #999;">({{item.five_line.join('')}})</span></span>
				</div>
			</div>
			<br/>
			<div v-html="wxdesc"></div>
			<br/>
			<div style="text-align: center;">
					<img alt="" :src="img2">
			</div>
			<br/>
			<div v-if="info2">
				<h3>{{info2.surname}}姓{{info2.gender}}宝宝名字大全 五行喜{{wxname}}名字</h3>
				<div>
					<span style="width: 30%;display: inline-block;" v-for="(item,i) in list2">{{item.name.join('')}}<span style="font-size: 12px;color: #999;">({{item.five_line.join('')}})</span></span>
				</div>
			</div>
			<br/>
			<div>好名字的四个基本特征：1、尽力做到名字个性化，避免太多重名现象，2、名字不使用生僻字、同音字，3、名字要避免和长辈的名字有重名或重音，4、名字要避免有谐音、绕口。<br/>
宝宝起名须以“生辰八字”为本，通过对生辰生辰八字的分析，找出命局之不足，在名字中加上“带五行气”之字去平衡生辰八字之五行(外五行);同时还要遵循姓名之内五行(即姓名中各字的五行)金木水火土相生不克之原则。<br/>
名帖网www.mt26.cn分享的名字仅供起名参考，不适合所有人，每个人要根据宝宝具体情况分析，取适合自己宝宝的名字。</div>
		</div>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				info1: null,
				info2: null,
				wxname: '',
				img1:'',
				img2:'',
				list1: [],
				list2: [],
				wxdesc: ''
			}
		},
		onLoad(options) {
			this.wuxing();
			this.imgsrc();
			this.getList(options.id1, 1).then(res => {
				this.info1 = res;
				this.list1=res.list;
				this.getList(options.id1, 2).then(res => {
					this.list1=this.list1.concat(res.list);
					this.getList(options.id1, 3).then(res => {
						this.list1=this.list1.concat(res.list);
						console.log(this.list1)
					})
				})
			})
			if (options.id2) {
				this.getList(options.id2, 1).then(res => {
					this.info2 = res;
					this.list2=res.list;
					this.getList(options.id2, 2).then(res => {
						this.list2=this.list2.concat(res.list);
						this.getList(options.id2, 3).then(res => {
							this.list2=this.list2.concat(res.list);
						})
					})
				})
			}
		},
		methods: {
			imgsrc(){
				this.img1='/uploads/babyimg/baby ('+Math.floor(Math.random()*50)+').jpg';
				this.img2='/uploads/babyimg/baby ('+Math.floor(Math.random()*50)+').jpg';
			},
			getList(id, page) {
				return this.$http.post('/v5/qiming-single/list', {
					info_id: id,
					page: page,
					plan_id: 'qs18'
				}).then(res => {
					return res.data;
				})
			},
			wuxing(){
				let w = uni.getStorageSync('wuxing');
				switch (w){
					case 0:
					this.wxname='金';
						this.wxdesc=`五行喜金之人，女子可用饰品作名，彰显华贵之气，作父母掌上明珠。<br/>
									历史上比较典型的人物有杨玉环，薛宝钗。<br/>
									正有诗歌所云：<br/>
									黄金作钗分两股，<br/>
									青髻如云凤双舞。<br/><br/>
									而男子，可用器作名，凸显阳刚之气，千锤百炼终成材。<br/>
									如影视男星宝剑锋，<br/>
									宝剑锋从磨砺出，梅花香自苦寒来。<br/>`
						break;
					case 1:
					this.wxname='木';
						this.wxdesc=`五行喜木之人，可用植物取名。不仅令人有亲近之感，又不缺内涵，彰显文气。<br/>
						比如含笑，木兰，其花开而不放，似淑女笑而不语，含而不露。<br/>
						用作人名，犹如其花语一般：含蓄矜持，透露典雅庄重的气质。闻其名，似见其人，感其端淑。<br/>`
						break;
						case 2:
						this.wxname='水';
							this.wxdesc=`五行喜水之人，女名柔美，男名浩瀚。往往女子之名含水之柔，显心之善，性之和，则人至美。<br/>				
											如凌烟，若涵，沐凡，闻名如诗，谋面成画。<br/><br/>
											而男名往往如江河浩瀚，其名应彰显男儿大气！常可用以下字取名：<br/>
											润 泽 涛 波 瀚 <br/>
											体现水之深，水之力，水之浩瀚！<br/>`
							break;
							case 3:
							this.wxname='火';
								this.wxdesc=`五行喜火之人，以气为名。名字内涵光明朝气，给自己和身边的人带来希望。<br/>
											如唐国公主封号昭阳，楚国谋士楚国令尹昭阳，都是典型的火性名字。<br/><br/>
											昭：以形解释，为光明之意。以神解释，为贤明之意。<br/>
											阳：顾名思义，为阳光之意，新生和希望的正气象征。<br/>`
								break;
								case 4:
								this.wxname='土';
									this.wxdesc=`五行喜土之人，土生万物，往往博大，可用以天地之精为名。<br/>
												比较典型的明人名字为狄仁杰，传言，狄仁杰的名字出自深仁厚泽，地灵人杰两个成语。土之仁，彰显其仁义大爱，地灵之杰，凸显其聪慧杰出！<br/><br/>
												女名示例：柳梦璃<br/>
												梦字代表无拘束，自由。璃出自琉璃，为石之精气所成。琉璃乃是天上物，梦璃自然不是俗！<br/>`
									break;
				}
			}
		}
	}
</script>

