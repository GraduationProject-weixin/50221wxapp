(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hesuanyuyue/add-or-update"],{1371:function(e,n,r){"use strict";r.r(n);var a=r("f3f1"),t=r("27a4");for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);r("2386");var u,c=r("f0c5"),o=Object(c["a"])(t["default"],a["b"],a["c"],!1,null,"60de6a36",null,!1,a["a"],u);n["default"]=o.exports},2386:function(e,n,r){"use strict";var a=r("5347"),t=r.n(a);t.a},"27a4":function(e,n,r){"use strict";r.r(n);var a=r("4d8c"),t=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(n,e,(function(){return a[e]}))}(i);n["default"]=t.a},"3e51":function(e,n,r){"use strict";(function(e){r("69a3");a(r("66fd"));var n=a(r("1371"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"4d8c":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(r("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,n,r,a,t,i,u){try{var c=e[i](u),o=c.value}catch(s){return void r(s)}c.done?n(o):Promise.resolve(o).then(a,t)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(a,t){var u=e.apply(n,r);function c(e){i(u,a,t,c,o,"next",e)}function o(e){i(u,a,t,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("5735"))}.bind(null,r)).catch(r.oe)},o={data:function(){return{cross:"",ruleForm:{jiancemingcheng:"",jianceleixing:"",jianceyuliang:"",jiancefeiyong:"",yuyueshijian:"",jiancetupian:"",yiyuanbianhao:"",zhanghao:"",xingming:"",crossuserid:"",crossrefid:"",sfsh:"",shhf:"",ispay:"",userid:""},jianceyuliangOptions:[],jianceyuliangIndex:0,user:{},ro:{jiancemingcheng:!1,jianceleixing:!1,jianceyuliang:!1,jiancefeiyong:!1,yuyueshijian:!1,jiancetupian:!1,yiyuanbianhao:!1,zhanghao:!1,xingming:!1,crossuserid:!1,crossrefid:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(a.default.mark((function t(){var i,u,c,o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.ruleForm.yuyueshijian=r.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),t.next=4,r.$api.session(i);case 4:if(u=t.sent,r.user=u.data,r.ruleForm.zhanghao=r.user.zhanghao,r.ro.zhanghao=!0,r.ruleForm.xingming=r.user.xingming,r.ro.xingming=!0,r.jianceyuliangOptions="1".split(","),r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=19;break}return r.ruleForm.id=n.id,t.next=17,r.$api.info("hesuanyuyue",r.ruleForm.id);case 17:u=t.sent,r.ruleForm=u.data;case 19:if(r.cross=n.cross,!n.cross){t.next=77;break}c=e.getStorageSync("crossObj"),t.t0=a.default.keys(c);case 23:if((t.t1=t.t0()).done){t.next=75;break}if(o=t.t1.value,"jiancemingcheng"!=o){t.next=29;break}return r.ruleForm.jiancemingcheng=c[o],r.ro.jiancemingcheng=!0,t.abrupt("continue",23);case 29:if("jianceleixing"!=o){t.next=33;break}return r.ruleForm.jianceleixing=c[o],r.ro.jianceleixing=!0,t.abrupt("continue",23);case 33:if("jianceyuliang"!=o){t.next=37;break}return r.ruleForm.jianceyuliang=c[o],r.ro.jianceyuliang=!0,t.abrupt("continue",23);case 37:if("jiancefeiyong"!=o){t.next=41;break}return r.ruleForm.jiancefeiyong=c[o],r.ro.jiancefeiyong=!0,t.abrupt("continue",23);case 41:if("yuyueshijian"!=o){t.next=45;break}return r.ruleForm.yuyueshijian=c[o],r.ro.yuyueshijian=!0,t.abrupt("continue",23);case 45:if("jiancetupian"!=o){t.next=49;break}return r.ruleForm.jiancetupian=c[o],r.ro.jiancetupian=!0,t.abrupt("continue",23);case 49:if("yiyuanbianhao"!=o){t.next=53;break}return r.ruleForm.yiyuanbianhao=c[o],r.ro.yiyuanbianhao=!0,t.abrupt("continue",23);case 53:if("zhanghao"!=o){t.next=57;break}return r.ruleForm.zhanghao=c[o],r.ro.zhanghao=!0,t.abrupt("continue",23);case 57:if("xingming"!=o){t.next=61;break}return r.ruleForm.xingming=c[o],r.ro.xingming=!0,t.abrupt("continue",23);case 61:if("crossuserid"!=o){t.next=65;break}return r.ruleForm.crossuserid=c[o],r.ro.crossuserid=!0,t.abrupt("continue",23);case 65:if("crossrefid"!=o){t.next=69;break}return r.ruleForm.crossrefid=c[o],r.ro.crossrefid=!0,t.abrupt("continue",23);case 69:if("userid"!=o){t.next=73;break}return r.ruleForm.userid=c[o],r.ro.userid=!0,t.abrupt("continue",23);case 73:t.next=23;break;case 75:r.ruleForm.jianceyuliang=0,r.ro.jianceyuliang=!1;case 77:r.styleChange();case 78:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},yuyueshijianConfirm:function(e){console.log(e),this.ruleForm.yuyueshijian=e.result,this.$forceUpdate()},jianceyuliangChange:function(e){this.jianceyuliangIndex=e.target.value,this.ruleForm.jianceyuliang=this.jianceyuliangOptions[this.jianceyuliangIndex]},jiancetupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.jiancetupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function r(){var t,i,u,c,o,s,l,g,f,d;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t=e.getStorageSync("crossObj"),i=e.getStorageSync("crossTable"),t.jianceyuliang=t.jianceyuliang-n.ruleForm.jianceyuliang,!(t.jianceyuliang<0)){r.next=6;break}return n.$utils.msg("检测余量数量不足"),r.abrupt("return");case 6:if(!n.ruleForm.jianceyuliang||n.$validate.isIntNumer(n.ruleForm.jianceyuliang)){r.next=9;break}return n.$utils.msg("检测余量应输入整数"),r.abrupt("return");case 9:if(!n.ruleForm.jiancefeiyong||n.$validate.isNumber(n.ruleForm.jiancefeiyong)){r.next=12;break}return n.$utils.msg("检测费用应输入数字"),r.abrupt("return");case 12:if(!n.cross){r.next=28;break}if(s=e.getStorageSync("statusColumnName"),l=e.getStorageSync("statusColumnValue"),""==s){r.next=28;break}if(t=e.getStorageSync("crossObj"),s.startsWith("[")){r.next=24;break}for(g in t)g==s&&(t[g]=l);return i=e.getStorageSync("crossTable"),r.next=22,n.$api.update("".concat(i),t);case 22:r.next=28;break;case 24:u=Number(e.getStorageSync("userid")),c=t["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 28:if(!c||!u){r.next=55;break}return n.ruleForm.crossuserid=u,n.ruleForm.crossrefid=c,f={page:1,limit:10,crossuserid:u,crossrefid:c},r.next=34,n.$api.list("hesuanyuyue",f);case 34:if(d=r.sent,!(d.data.total>=o)){r.next=40;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 40:return t=e.getStorageSync("crossObj"),i=e.getStorageSync("crossTable"),t.jianceyuliang=parseFloat(t.jianceyuliang)-parseFloat(n.ruleForm.jianceyuliang),r.next=45,n.$api.update("".concat(i),t);case 45:if(!n.ruleForm.id){r.next=50;break}return r.next=48,n.$api.update("hesuanyuyue",n.ruleForm);case 48:r.next=52;break;case 50:return r.next=52,n.$api.add("hesuanyuyue",n.ruleForm);case 52:n.$utils.msgBack("提交成功");case 53:r.next=68;break;case 55:return t=e.getStorageSync("crossObj"),i=e.getStorageSync("crossTable"),t.jianceyuliang=t.jianceyuliang-n.ruleForm.jianceyuliang,r.next=60,n.$api.update("".concat(i),t);case 60:if(!n.ruleForm.id){r.next=65;break}return r.next=63,n.$api.update("hesuanyuyue",n.ruleForm);case 63:r.next=67;break;case 65:return r.next=67,n.$api.add("hesuanyuyue",n.ruleForm);case 67:n.$utils.msgBack("提交成功");case 68:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),a=n.getMonth()+1,t=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(r,"-").concat(a,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,r("543d")["default"])},5347:function(e,n,r){},f3f1:function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"5735"))}},t=function(){var e=this,n=e.$createElement;e._self._c},i=[]}},[["3e51","common/runtime","common/vendor"]]]);