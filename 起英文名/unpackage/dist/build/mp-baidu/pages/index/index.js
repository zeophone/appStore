(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1a84":function(t,e,a){"use strict";a.r(e);var i=a("c887"),c=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=c.a},"28fb":function(t,e,a){},"3b63":function(t,e,a){"use strict";var i=a("8e5d"),c=a.n(i);c.a},"5c13":function(t,e,a){"use strict";a.r(e);var i=a("bc93"),c=a("fee7");for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);a("b6ee");var n=a("2877"),o=Object(n["a"])(c["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"8aab":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"pop",class:{show:t.isShow},attrs:{_hid:0}},[a("view",{staticClass:"bg",attrs:{_hid:1},on:{click:t.hide}}),a("view",{staticClass:"container",attrs:{_hid:2}},[a("view",{staticClass:"header",attrs:{_hid:3}},[a("text",{attrs:{_hid:4}},[t._v(t._s(t.title),5),a("text",{staticClass:"subtitle",attrs:{_hid:6}},[t._v(t._s(t.subtitle),7)])]),a("text",{staticClass:"ok",attrs:{_hid:8},on:{click:t.submit}},[])]),a("view",{staticClass:"content",attrs:{_hid:10}},t._l(t.tid,function(e,i,c){var s=void 0!==c?c:i;return a("text",{key:i,class:{on:e.checked},attrs:{_hid:11,_fid:s,_fk:"i"},on:{click:function(e){t.check(i)}}},[t._v(t._s(e.text),12,s)])},11,t._self))])])},c=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return c})},"8e5d":function(t,e,a){},"9bfa":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(a("cec5"));function c(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{name:"",sex:3,characterStr:"",constellationStr:"",constellatory:"",abc:[],popType:"1",feature:""}},onLoad:function(){swan.setPageInfo({title:"起英文名_起名网_八字起名_周易取名_取名字_起名字大全",keywords:"起英文名,起乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名",description:"起名网官方取英文名小程序，提供宝宝起名、男孩取名、女孩起名、周易起名、八字起名、诗经起名等智能起名字取名字服务。",articleTitle:"起英文名,取乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名",releaseDate:"2019-05-15 12:01:30",image:"",video:"",visit:"",likes:"",comments:"",collects:"",shares:"",followers:"",success:function(){console.log("页面基础信息设置完成")}});for(var t=0;t<26;t++)this.abc.push(String.fromCharCode(65+t))},components:{Pop:i.default},methods:{submit:function(){var e={surname:this.name,sex:this.sex,feature:this.characterStr,constellatory:this.constellatory,app:1};""!=e.surname?""!=e.feature?""!=e.constellatory?""!=e.surname?(t.showLoading({title:"起名中"}),t.request({url:this.$store.state.baseUrl+"/api/english/query",data:e,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},success:function(e){t.hideLoading(),1==e.data.code?(t.setStorageSync("english_name",e.data.data),t.navigateTo({url:"../list/list"})):t.showToast({title:e.data.msg,icon:"none"})}})):t.showToast({title:"请输入姓名",icon:"none"}):t.showToast({title:"请选择星座",icon:"none"}):t.showToast({title:"请选择标签",icon:"none"}):t.showToast({title:"请输入姓名",icon:"none"})},characterPop:function(){this.popType="2",this.$refs.pop.show()},constellationPop:function(){this.popType="1",this.$refs.pop.show()},popVal:function(t){1==this.popType?(this.constellationStr=t.text,this.constellatory=t.value):(this.characterStr=t.text,this.feature=t.value)},linkWeb:function(e){t.navigateTo({url:"../webview/webview?type="+e})}}};e.default=s}).call(this,a("5486")["default"])},adba:function(t,e,a){"use strict";a("7203");var i=s(a("5c13")),c=s(a("3a53"));function s(t){return t&&t.__esModule?t:{default:t}}i.default.mpType="page";var n=new c.default(i.default);n.$mount()},b6ee:function(t,e,a){"use strict";var i=a("28fb"),c=a.n(i);c.a},bc93:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"index",attrs:{_hid:0}},[a("view",{staticClass:"form",attrs:{_hid:1}},[a("view",{staticClass:"input-area",attrs:{_hid:2}},[a("text",{staticClass:"input_lable",attrs:{_hid:3}},[]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入你的名字","placeholder-class":"plac",_hid:5},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("view",{staticClass:"input_select",attrs:{_hid:6}},[a("text",{class:1==t.sex?"on":"",attrs:{_hid:7},on:{click:function(e){t.sex=1}}},[]),a("text",{class:3==t.sex?"on":"",attrs:{_hid:9},on:{click:function(e){t.sex=3}}},[])])]),a("view",{staticClass:"input-area",attrs:{_hid:11},on:{click:t.constellationPop}},[a("text",{staticClass:"input_lable",attrs:{_hid:12}},[]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.constellationStr,expression:"constellationStr"}],attrs:{disabled:"true",type:"text",placeholder:"请选择你的星座","placeholder-class":"plac",_hid:14},domProps:{value:t.constellationStr},on:{input:function(e){e.target.composing||(t.constellationStr=e.target.value)}}})]),a("view",{staticClass:"input-area",attrs:{_hid:15},on:{click:t.characterPop}},[a("text",{staticClass:"input_lable",attrs:{_hid:16}},[]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.characterStr,expression:"characterStr"}],attrs:{disabled:"true",type:"text",placeholder:"请选择3到5种特征","placeholder-class":"plac",_hid:18},domProps:{value:t.characterStr},on:{input:function(e){e.target.composing||(t.characterStr=e.target.value)}}})]),a("view",{staticClass:"submit-area",attrs:{_hid:19},on:{click:t.submit}},[])]),a("Pop",{ref:"pop",attrs:{type:t.popType,_hid:21,_batrs:"type",_cid:0},on:{popVal:t.popVal}}),a("view",{staticClass:"footer",attrs:{_hid:1023}},[])],1)},c=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return c})},c887:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{type:String},data:function(){return{isShow:!1,title:"英文名特征",subtitle:"选择三到五种特征",personality:[{checked:!1,value:"1",text:"优雅"},{checked:!1,value:"2",text:"运动"},{checked:!1,value:"3",text:"敏锐"},{checked:!1,value:"4",text:"坚持"},{checked:!1,value:"5",text:"自信"},{checked:!1,value:"6",text:"诚实"},{checked:!1,value:"7",text:"聪明"},{checked:!1,value:"8",text:"乐观"},{checked:!1,value:"9",text:"可靠"},{checked:!1,value:"10",text:"创造力"},{checked:!1,value:"11",text:"同理心"},{checked:!1,value:"12",text:"正统"},{checked:!1,value:"13",text:"主见"},{checked:!1,value:"14",text:"正直"},{checked:!1,value:"15",text:"友善"},{checked:!1,value:"16",text:"单纯"},{checked:!1,value:"17",text:"独特"},{checked:!1,value:"18",text:"沉稳"},{checked:!1,value:"19",text:"信仰"},{checked:!1,value:"20",text:"爱心"},{checked:!1,value:"21",text:"积极"},{checked:!1,value:"22",text:"勇敢"},{checked:!1,value:"23",text:"魅力"},{checked:!1,value:"24",text:"美丽"},{checked:!1,value:"25",text:"霸气"},{checked:!1,value:"26",text:"财富"},{checked:!1,value:"27",text:"高贵"},{checked:!1,value:"28",text:"健康"}],constellation:[{checked:!1,value:"1",text:"水瓶座"},{checked:!1,value:"2",text:"双鱼座"},{checked:!1,value:"3",text:"白羊座"},{checked:!1,value:"4",text:"金牛座"},{checked:!1,value:"5",text:"双子座"},{checked:!1,value:"6",text:"巨蟹座"},{checked:!1,value:"7",text:"狮子座"},{checked:!1,value:"8",text:"处女座"},{checked:!1,value:"9",text:"天秤座"},{checked:!1,value:"10",text:"天蝎座"},{checked:!1,value:"11",text:"射手座"},{checked:!1,value:"12",text:"摩羯座"}],tid:this.constellation}},watch:{type:{handler:function(t){"1"==t?(this.title="选择星座",this.subtitle="",this.tid=this.constellation):(this.title="选择标签",this.subtitle="请选择3到5种",this.tid=this.personality)},immediate:!0}},methods:{check:function(e){var a=0;if("1"==this.type){for(var i=0;i<this.tid.length;i++)this.tid[i].checked&&(this.tid[i].checked=!1);this.tid[e].checked=!this.tid[e].checked}else{for(var c=0;c<this.tid.length;c++)this.tid[c].checked&&a++;a<5?this.tid[e].checked=!this.tid[e].checked:this.tid[e].checked?this.tid[e].checked=!this.tid[e].checked:t.showToast({title:"只可选五种标签",icon:"none"})}},submit:function(){for(var e={value:"",text:""},a=[],i=[],c=0;c<this.tid.length;c++)this.tid[c].checked&&(a.push(this.tid[c].value),i.push(this.tid[c].text));if("2"==this.type&&a.length<3)return console.log(a.length),void t.showToast({title:"请选择3到5个特征标签",icon:"none"});this.hide(),e.value=a.join(","),e.text=i.join(","),this.$emit("popVal",e)},show:function(){this.isShow=!0},hide:function(){this.isShow=!1}}};e.default=a}).call(this,a("5486")["default"])},cec5:function(t,e,a){"use strict";a.r(e);var i=a("8aab"),c=a("1a84");for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);a("3b63");var n=a("2877"),o=Object(n["a"])(c["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},fee7:function(t,e,a){"use strict";a.r(e);var i=a("9bfa"),c=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=c.a}},[["adba","common/runtime","common/vendor"]]]);