(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/loginAndRegist/regist/regist"],{"41ea":function(e,t,n){},4976:function(e,t,n){"use strict";(function(e){n("b3a5"),n("921b");o(n("66fd"));var t=o(n("a268"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7eec":function(e,t,n){"use strict";n.r(t);var o=n("b4d1"),s=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=s.a},"7f67":function(e,t,n){"use strict";var o=n("41ea"),s=n.n(o);s.a},a268:function(e,t,n){"use strict";n.r(t);var o=n("d8bf"),s=n("7eec");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);n("7f67");var a,u=n("f0c5"),c=Object(u["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=c.exports},b4d1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=getApp().globalData,o={data:function(){return{phone:"",getCode:"获取验证码",pass:"我已阅读航天电液的<用户服务协议>与<隐私政策>",choose:"choose_true",isDisable:!1,code:"",password:"",num:60,passType:"password",regist_btn:!0}},mounted:function(){this.phone=n.phone},methods:{gotCode:function(){var e=this;this.isDisable=!0,e.getCode=e.num+"s重新获取";var t=setInterval(function(){e.num>0?(e.num=e.num-1,e.getCode=e.num+"s重新获取"):0===e.num&&(e.getCode="获取验证码",e.isDisable=!1,e.num=60,clearInterval(t))},1e3)},AgreeChange:function(e){"choose_true"===this.choose?this.choose="choose_false":"choose_false"===this.choose&&(this.choose="choose_true")},goRegist:function(){if("choose_false"===this.choose)return e.showModal({title:"提示",content:"请阅读协议后进行勾选",showCancel:!1}),!1},onCode:function(e){this.code=e.detail.value,""!=this.phone&&""!=this.code&&""!=this.password?this.regist_btn=!1:this.regist_btn=!0},onPassword:function(e){this.password=e.detail.value,""!=this.phone&&""!=this.code&&""!=this.password?this.regist_btn=!1:this.regist_btn=!0}}};t.default=o}).call(this,n("6e42")["default"])},d8bf:function(e,t,n){"use strict";var o,s=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o})}},[["4976","common/runtime","common/vendor"]]]);