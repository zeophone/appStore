export default {
	data() {
		return {
			data: null
		};
	},
	onLoad(options){
		if(options.order_sn){
			uni.showLoading({
				title: '信息查询中',
				icon:'loading'
			})
			this.$http.post('/v5/ceming/detail',options).then(res => {
				if (res.code == 1) {
					this.data=res.data;
					uni.hideLoading();
					this.$http.post('/v5/account/get_by_token',{}).then(respon=>{
						if(respon.code==1){
							if(respon.data.mobile==''){
								this.$refs.phone.show();
								this.isMobile=true;
								this.order_sn=options.order_sn;
							};
						}
					})
				}else{
					uni.hideLoading();
					uni.showLoading({
						title: res.msg,
						icon:'none'
					})
					setTimeout(()=>{
						location.href = '/ceming'
					},80)
					
				}
			})
			return;
		}
		uni.showLoading({
			title: '名字测算中',
			icon:'loading'
		})
		this.$http.post('/v5/ceming/submit',options).then(res => {
			if (res.code == 1) {
				this.data=res.data;
				uni.hideLoading();
			}else{
				uni.hideLoading();
				uni.showLoading({
					title: res.msg,
					icon:'none'
				})
				setTimeout(()=>{
					uni.navigateBack({
						delta: 1
					});	
				},1000)
				
			}
		})
	},
	computed: {
		nameInfo() {
			let arr = [];
			let firstSurname = {
				word: this.data.surname.first.word,
				five: this.fiveToText(this.data.surname.first.info.five_line),
				pinyin: this.data.surname.first.info.phonetic_spell
			}
			arr.push(firstSurname);
			if (this.data.surname.word.length > 1) {
				let secondSurname = {
					word: this.data.surname.second.word,
					five: this.fiveToText(this.data.surname.second.info.five_line),
					pinyin: this.data.surname.second.info.phonetic_spell
				}
				arr.push(secondSurname);
			}
			let firstName = {
				word: this.data.name.first.word,
				five: this.fiveToText(this.data.name.first.info.five_line),
				pinyin: this.data.name.first.info.phonetic_spell
			}
			arr.push(firstName);
			if (this.data.name.word.length > 1) {
				let secondName = {
					word: this.data.name.second.word,
					five: this.fiveToText(this.data.name.second.info.five_line),
					pinyin: this.data.name.second.info.phonetic_spell
				}
				arr.push(secondName);
			}
			return arr;
		},
		nameArr() {
			let arr = [];
			let firstName = {
				word: this.data.name.first.word,
				name_mean: this.data.name.first.info.name_mean,
				phonetic_spell: this.data.name.first.info.phonetic_spell
			}
			arr.push(firstName);
			if (this.data.name.word.length > 1) {
				let secondName = {
					word: this.data.name.second.word,
					name_mean: this.data.name.second.info.name_mean,
					phonetic_spell: this.data.name.second.info.phonetic_spell
				}
				arr.push(secondName);
			}
			return arr;
		},
		characterToText(letter) {
			return function(letter) {
				for (let key in this.data.name_character) {
					if (letter == key) {
						return this.data.name_character[key];
					}
				}
			}
		},
		objLength(obj) {
			return function(obj) {
				let count = 0;
				for (let i in obj) {
					count++;
				}
				return count;
			}
		},
		sounds() {
			let arr = [{
					title: '名字音律',
					desc: this.data.sounds.mingziyinlv_desc,
					level: this.data.sounds.mingziyinlv_level,
					star: this.starToNum(this.data.sounds.mingziyinlv_level)
				}, {
					title: '好写好记',
					desc: this.data.sounds.haoxiehaoji_desc,
					level: this.data.sounds.haoxiehaoji_level,
					star: this.starToNum(this.data.sounds.haoxiehaoji_level)
				}, {
					title: '字义解释',
					desc: this.data.sounds.ziyijiesi_desc,
					level: this.data.sounds.ziyijiesi_level,
					star: this.starToNum(this.data.sounds.ziyijiesi_level)
				}, {
					title: '寓意得分',
					desc: this.data.sounds.yuyi_desc,
					level: this.data.sounds.yuyi_level,
					star: this.starToNum(this.data.sounds.yuyi_level)
				}, {
					title: '文化印象',
					desc: this.data.sounds.wenhuayinxiang_desc,
					level: this.data.sounds.wenhuayinxiang_level,
					star: this.starToNum(this.data.sounds.mingziyinlv_level)
				},
				{
					title: '名字年代',
					desc: this.data.sounds.mingziniandai_desc,
					level: this.data.sounds.mingziniandai_level,
					star: this.starToNum(this.data.sounds.mingziniandai_level)
				},
				{
					title: '敏感词汇',
					desc: this.data.sounds.mingancihui_desc,
					level: this.data.sounds.mingancihui_level,
					star: this.starToNum(this.data.sounds.mingancihui_level)
				},
				{
					title: '性别符合',
					desc: this.data.sounds.xiebiefuhe_desc,
					level: this.data.sounds.xiebiefuhe_level,
					star: this.starToNum(this.data.sounds.xiebiefuhe_level)
				},
				{
					title: '名字谐音',
					desc: this.data.sounds.mingzixieyin_desc,
					level: this.data.sounds.mingzixieyin_level,
					star: this.starToNum(this.data.sounds.mingzixieyin_level)
				}
			];
			return arr;

		},
		fiveLine() {
			let arr = [{
				name: '金',
				score: this.data.luck_god.percent_jin,
				color: '#b8860b'
			}, {
				name: '木',
				score: this.data.luck_god.percent_mu,
				color: '#008000'
			}, {
				name: '水',
				score: this.data.luck_god.percent_shui,
				color: '#0073cf'
			}, {
				name: '火',
				score: this.data.luck_god.percent_huo,
				color: '#e25822'
			}, {
				name: '土',
				score: this.data.luck_god.percent_tu,
				color: '#a67b5b'
			}];
			return arr;
		},
		fiveGe() {
			let arr = [{
				name: '天格\n解析',
				score: this.data.three_five.info.sky,
				jixiong: this.data.three_five.analysis_tian,
				color: this.jixiongColor(this.data.three_five.analysis_tian),
				lang: this.data.three_five.tian,
				tig: '天格数是先祖留传下来的，其数理对人影响不大。'
			}, {
				name: '地格\n解析',
				score: this.data.three_five.info.earth,
				jixiong: this.data.three_five.analysis_di,
				color: this.jixiongColor(this.data.three_five.analysis_di),
				lang: this.data.three_five.di,
				tig: '地格数又称前运，影响人中年（36岁）以前的活动力。'
			}, {
				name: '人格\n解析',
				score: this.data.three_five.info.human,
				jixiong: this.data.three_five.analysis_ren,
				color: this.jixiongColor(this.data.three_five.analysis_ren),
				lang: this.data.three_five.ren,
				tig: '人格数又称主运，是整个姓名的中心点，影响人的一生命运。'
			}, {
				name: '外格\n解析',
				score: this.data.three_five.info.out,
				jixiong: this.data.three_five.analysis_wai,
				color: this.jixiongColor(this.data.three_five.analysis_wai),
				lang: this.data.three_five.wai,
				tig: '外格又称变格，影响人的社交、智慧等，其数理不用重点去看。'
			}, {
				name: '总格\n解析',
				score: this.data.three_five.info.total,
				jixiong: this.data.three_five.analysis_zong,
				color: this.jixiongColor(this.data.three_five.analysis_zong),
				lang: this.data.three_five.zong,
				tig: '总格又称后运，影响人中年（36岁）以后的命运。'
			}, {
				name: '三才\n解析',
				lang: this.data.three_five.three_powers.meaning
			}, {
				name: '基础运\n解析',
				lang: this.data.three_five.three_powers.lucky_base
			}, {
				name: '成功运\n解析',
				lang: this.data.three_five.three_powers.success_lucky
			}, {
				name: '人际\n关系\n解析',
				lang: this.data.three_five.three_powers.communication_lucky
			}, {
				name: '性格\n影响\n解析',
				lang: this.data.three_five.three_powers.character_feature
			}];
			return arr;
		},
		baguaJiexi() {
			let arr = [{
				name: '大象',
				lang: this.data.gossip.big_el
			}, {
				name: '总论',
				lang: this.data.gossip.total_explain
			}, {
				name: '建议',
				lang: this.data.gossip.suggest
			}, {
				name: '事业',
				lang: this.data.gossip.success_mean
			}, {
				name: '经商',
				lang: this.data.gossip.business_mean
			}, {
				name: '求名',
				lang: this.data.gossip.for_name
			}, {
				name: '婚恋',
				lang: this.data.gossip.marry_mean
			}];
			return arr;
		}
	},
	methods: {
		payView() {
			this.pay_Pop=true;
		},
		jixiongColor(str) {
			switch (str) {
				case '大吉':
					return '#2da9df';
					break;
				case '半吉':
					return '#e67829';
					break;
				case '吉':
					return '#6fc898';
					break;
				case '凶':
					return '#c9aa8d';
					break;
				case '半凶':
					return '#fbc30b';
					break;
				case '大凶':
					return '#db3b3e';
					break;
			}
		},
		starToNum(str) {
			switch (str) {
				case '高':
					return 0;
					break;
				case '中':
					return 1;
					break;
				case '低':
					return 2;
					break;
				case '差':
					return 3;
					break;
			}
		},
		fiveToText(num) {
			switch (num) {
				case '1':
					return '金';
					break;
				case '2':
					return '木';
					break;
				case '3':
					return '水';
					break;
				case '4':
					return '火';
					break;
				case '5':
					return '土';
					break;
			}
		}
	}
}
