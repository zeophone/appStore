(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"618c":function(t,e,s){"use strict";var r=s("8c16"),i=s.n(r);i.a},"8c16":function(t,e,s){},"8f9d":function(t,e,s){"use strict";s("6fab");var r=a(s("d05b")),i=a(s("3a53"));function a(t){return t&&t.__esModule?t:{default:t}}r.default.mpType="page";var o=new i.default(r.default);o.$mount()},ab41:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"order",attrs:{_hid:0}},[s("view",{staticClass:"miniOrder",attrs:{_hid:1}},[t._ri(!!t.userInfo,2)?s("view",{staticClass:"userInfo",attrs:{_hid:2}},[s("image",{attrs:{src:t.userInfo.avatarUrl,mode:"true",_hid:3,_batrs:"src"}}),s("view",{staticClass:"user_status",attrs:{_hid:4}},[s("text",{attrs:{_hid:5}},[t._v(t._s(t.userInfo.nickName),6)]),t._ri(!!t.orderList,7)?s("text",{attrs:{_hid:7}},[t._v("起名订单记录共"+t._s(t.orderList.length||"0")+"条",8)]):t._e()]),s("view",{staticClass:"refresh",attrs:{_hid:9}},[s("image",{style:{transform:"rotate("+t.refresh+"deg)"},attrs:{src:"../../static/refresh.png",mode:"true",_hid:10},on:{click:t.refreshHandler}})])]):s("view",{staticClass:"mt40",attrs:{_hid:11}},[s("button",{attrs:{type:"primary","open-type":"getUserInfo",_hid:12},on:{getuserinfo:t.loginAuth}},[])],1)]),t._ri(!!t.userInfo,14)?s("view",{staticClass:"tig",attrs:{_hid:14}},[s("text",{staticClass:"kefu",attrs:{_hid:16},on:{click:t.call}},[])]):t._e(),t._ri(!!(t.orderList&&t.orderList.length>0),18)?s("view",{staticClass:"order_list",attrs:{_hid:18}},t._l(t.orderList,function(e,r,i){var a=void 0!==i?i:r;return s("view",{key:r,staticClass:"order_item",attrs:{_hid:19,_fid:a,_fk:"i"}},[s("view",{staticClass:"head",attrs:{_hid:20,_fid:a}},[s("text",{staticClass:"order_sn",attrs:{_hid:21,_fid:a}},[t._v("订单号："+t._s(e.order_sn),22,a)]),s("text",{staticClass:"status",attrs:{_hid:23,_fid:a}},[t._v(t._s(1==e.order_status?"已支付":"未支付"),24,a)])]),s("view",{staticClass:"content",attrs:{_hid:25,_fid:a}},[s("view",{attrs:{_hid:26,_fid:a}},[s("rich-text",{staticClass:"content_title",attrs:{nodes:e.title,_hid:27,_fid:a,_batrs:"nodes"}}),s("text",{staticClass:"money",attrs:{_hid:28,_fid:a}},[t._v("￥"+t._s(e.money),29,a)])],1)]),t._ri(!(1!=e.order_status),30,void 0!==i?i:r)?s("view",{staticClass:"foot",attrs:{_hid:30,_fid:a}},[s("text",{attrs:{_hid:31,_fid:a},on:{click:function(e){t.orderNext(r)}}},[])]):t._e(),t._ri(!(1==e.order_status),33,void 0!==i?i:r)?s("view",{attrs:{_hid:33,_fid:a}},[s("op-baidu",{attrs:{orderSn:e.order_sn,_hid:34,_fid:a,_batrs:"orderSn",_cid:0}})],1):t._e()])},19,t._self)):t._e(),t._ri(!!t.isEmpty,1036)?s("view",{staticClass:"center",attrs:{_hid:1036}},[]):t._e()])},i=[];s.d(e,"a",function(){return r}),s.d(e,"b",function(){return i})},b6aa:function(t,e,s){"use strict";s.r(e);var r=s("f882"),i=s.n(r);for(var a in r)"default"!==a&&function(t){s.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},d05b:function(t,e,s){"use strict";s.r(e);var r=s("ab41"),i=s("b6aa");for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);s("618c");var o=s("2877"),n=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=n.exports},f882:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(s("4328")),i=a(s("c749"));function a(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{mobile:"",orderList:[],userInfo:null,isEmpty:!1,refresh:0}},onShow:function(){this.getUserInfo(),swan.setPageInfo({title:"起小名乳名_起名网_八字起名_周易取名_取名字_起名字大全",keywords:"起小名,起乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名",description:"起名网官方取小名小程序，提供宝宝起名、男孩取名、女孩起名、周易起名、八字起名、诗经起名等智能起名字取名字服务。",articleTitle:"起小名,取乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名",releaseDate:"2019-05-15 12:01:30",image:"",video:"",visit:"",likes:"",comments:"",collects:"",shares:"",followers:"",success:function(){console.log("页面基础信息设置完成")}})},methods:{refreshHandler:function(){this.refresh+=360,this.getUserInfo()},call:function(){console.log("call 18163728777"),t.makePhoneCall({phoneNumber:"18163728777"})},getUserInfo:function(){var e=this;t.getStorageSync("userInfo")&&(this.userInfo=t.getStorageSync("userInfo"),t.showLoading({title:"查询中"}),t.request({url:this.$store.state.baseUrl+"/api/child/child_order_query",method:"POST",data:{app_mchid:t.getStorageSync("token"),app:1},header:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},success:function(s){console.log(s),t.hideLoading(),1==s.data.code?(e.orderList=s.data.data.order_list,0==e.orderList.length&&(e.isEmpty=!0)):t.showToast({title:s.data.msg,icon:"none"})}}))},loginAuth:function(){var t=this;(0,i.default)().then(function(){t.getUserInfo()})},search:function(){var e=this;this.orderList=null,""==this.mobile?t.showToast({title:"请输入手机号码",icon:"none"}):11!=this.mobile.length?t.showToast({title:"手机号格式不正确",icon:"none"}):(t.showLoading({title:"查询中"}),t.request({url:this.$store.state.baseUrl+"/api/child/child_order_query",method:"POST",data:{mobile:this.mobile,app:1},header:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},success:function(s){t.hideLoading(),s.data.data.order_list.length>0?e.orderList=s.data.data.order_list:t.showToast({title:"未查询相关到信息",icon:"none"})}}))},orderNext:function(e){var s={name_total:1==this.orderList[e].order_level?30:100,order_sn:this.orderList[e].order_sn};t.navigateTo({url:"./list?"+r.default.stringify(s)})}}};e.default=o}).call(this,s("5486")["default"])}},[["8f9d","common/runtime","common/vendor"]]]);