(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"1baa":function(t,e,n){t.exports=n.p+"img/main.b25388dc.png"},2:function(t,e){},3:function(t,e){},4:function(t,e){},"45db":function(t,e,n){"use strict";n("bc75")},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("6a04"),n("371b"),n("1fa9"),n("2419");var a=n("a593"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"App"},s=i,c=n("c701"),l=Object(c["a"])(s,o,r,!1,null,null,null),d=l.exports,u=n("a81e"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"index"}},[a("v-main",[a("v-card",{attrs:{flat:"",tile:""}},[a("v-toolbar",{attrs:{flat:"",dense:""}},[a("img",{attrs:{src:n("cf05"),height:"100%",alt:"logo"}}),a("v-tabs",{attrs:{color:"black","slider-color":"teal accent-3"}},[a("v-tab",[t._v("首页")]),a("v-tab",[t._v("关于我们")]),a("v-tab",[t._v("验证邮件重发")])],1)],1)],1),a("v-container",[a("v-row",{staticClass:"my-16",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{"align-self":"center"}},[a("div",{staticClass:"text-center"},[a("img",{attrs:{src:n("1baa"),height:"400",alt:"main"}})])]),a("v-col",{attrs:{"align-self":"center"}},[a("div",{staticClass:"text-center"},[a("p",{staticClass:"display-1 text--primary"},[t._v("青芒")]),a("p",{staticClass:"headline text--primary my-6"},[t._v("发现不一样的生活")]),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{rounded:"",color:"teal accent-3 mr-5 py-5",dark:""},on:{click:t.beforeDownload}},"v-btn",o,!1),n),[a("v-icon",{staticClass:"mx-1"},[t._v("mdi-android")]),t._v(" 下载客户端 ")],1)]}}]),model:{value:t.downloadDialog,callback:function(e){t.downloadDialog=e},expression:"downloadDialog"}},[a("v-card",[a("v-card-title",[t._v(" 下载 ")]),a("v-card-text",[this.versionInfo.versionId?a("p",{staticClass:"myinfo"},[a("span",{staticClass:"font-weight-bold"},[t._v("版本号：")]),t._v(" "+t._s(this.versionInfo["versionId"])+" ")]):t._e(),this.versionInfo.updateContent?a("p",{staticClass:"myinfo"},[a("span",{staticClass:"font-weight-bold"},[t._v("版本说明：")]),t._v(" "+t._s(this.versionInfo["updateContent"])+" ")]):t._e(),this.versionInfo.versionName?a("p",{staticClass:"myinfo"},[a("span",{staticClass:"font-weight-bold"},[t._v("版本代号：")]),t._v(" "+t._s(this.versionInfo["versionName"])+" ")]):t._e(),this.versionInfo.updateTime?a("p",{staticClass:"myinfo"},[a("span",{staticClass:"font-weight-bold"},[t._v("更新时间：")]),t._v(" "+t._s(t.formatDate(this.versionInfo["updateTime"]))+" ")]):t._e()]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{rounded:"",color:"teal accent-3 mr-5 my-2",dark:""},on:{click:t.download}},[a("v-icon",{staticClass:"mx-1"},[t._v("mdi-android")]),t._v(" 下载客户端 ")],1)],1)],1)],1),a("v-btn",{attrs:{rounded:"",outlined:"",color:"teal accent-3 py-5"},on:{click:t.gotoLogin}},[t._v(" 进入网页版社区 ")])],1)])])],1),a("v-row",{staticClass:"my-16",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{"align-self":"center"}},[a("div",{staticClass:"text-center"},[a("p",{staticClass:"display-1 teal--text text--accent-3"},[t._v("全新青芒3.0")]),a("p",{staticClass:"headline text--primary my-6"},[t._v("重新定义不一样的生活")])])]),a("v-col",{attrs:{"align-self":"center"}},[a("div",{staticClass:"text-center"},[a("img",{attrs:{src:n("a0e8"),height:"400",alt:"main"}})])])],1)],1),a("div",{staticClass:"text-center"},[a("p",{staticClass:"display-1 teal--text text--accent-3 my-10"},[t._v("Technology helping world!")]),a("p",{staticClass:"caption my-10"},[t._v("2020© CyanMango")])])],1)],1)},f=[],v={name:"index",props:{msg:String},data:function(){return{downloadDialog:!1,versionInfo:{versionId:0,updateContent:"",versionName:"",downloadLink:"",updateTime:0}}},methods:{beforeDownload:function(){var t=this;console.log("beforeDownload"),this.downloadDialog=!1,this.getRequest("/api/v1/updateCheck").then((function(e){console.log(e.data),t.versionInfo=e.data.result}))},download:function(){console.log("download ".concat(this.versionInfo["downloadLink"]));var t=document.createElement("a");t.href=this.versionInfo["downloadLink"],t.click()},gotoLogin:function(){window.open("http://cyanmango.top/web/auth")}}},m=v,g=(n("45db"),Object(c["a"])(m,p,f,!1,null,null,null)),h=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"login"}},[n("v-main",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[t._v("登录")]),n("v-spacer")],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"用户名/手机号/邮箱",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.identifier,callback:function(e){t.identifier=e},expression:"identifier"}}),n("v-text-field",{attrs:{id:"password",label:"密码",name:"password","prepend-icon":"mdi-lock",type:"password",hint:"密码至少6位"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return e.stopPropagation(),t.gotoRegister(e)}}},[t._v("注册")]),n("v-spacer"),n("v-checkbox",{staticClass:"mr-4",attrs:{label:"记住密码"},model:{value:t.rememberMe,callback:function(e){t.rememberMe=e},expression:"rememberMe"}}),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return e.stopPropagation(),t.login(e)}}},[t._v("登录")])],1)],1)],1)],1),n("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.wrongPassword,expression:"wrongPassword"}],staticClass:"mx-auto",attrs:{type:"error",transition:"scroll-y-reverse-transition",width:"50%"}},[t._v(" 密码错误！ ")])],1)],1)],1)},y=[],w={name:"login",data:function(){return{rememberMe:!1,identifier:"",password:""}},methods:{gotoRegister:function(){this.$router.push("/register")}}},_=w,x=Object(c["a"])(_,b,y,!1,null,"2c6a5f08",null),C=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"register"}},[n("v-main",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[t._v("注册")]),n("v-spacer")],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"用户名/手机号/邮箱",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.identifier,callback:function(e){t.identifier=e},expression:"identifier"}}),n("v-text-field",{attrs:{id:"password",label:"密码",name:"password","prepend-icon":"mdi-lock",type:"password",hint:"密码至少6位"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return e.stopPropagation(),t.submit(e)}}},[t._v("注册")])],1)],1)],1)],1)],1)],1)],1)},I=[],j={name:"register",data:function(){return{rememberMe:!1,identifier:"",password:""}},methods:{submit:function(){this.$router.push("/register")}}},O=j,S=Object(c["a"])(O,k,I,!1,null,"05f484c0",null),D=S.exports,P=u["a"].prototype.push;u["a"].prototype.push=function(t){return P.call(this,t).catch((function(t){return t}))},a["default"].use(u["a"]);var M=[{path:"/index",name:"index",component:h},{path:"/login",name:"login",component:C},{path:"/register",name:"register",component:D},{path:"/",redirect:"index"}],R=new u["a"]({mode:"history",routes:M}),T=R,$=n("348d"),N=n.n($);n("fffa"),n("941f");a["default"].use(N.a);var q={icons:{iconfont:"mdi"}},E=new N.a(q),L={save:function(t,e){localStorage.setItem(t,JSON.stringify(e))},get:function(t){return JSON.parse(localStorage.getItem(t))},remove:function(t){localStorage.removeItem(t)},clear:function(){localStorage.clear()}},J=L,A=(n("2d38"),n("845c"),n("72fb"),n("5976")),F=n.n(A),Y="http://api.cyanmango.top",z=(n("0821"),Y);var B=function(t,e){return F()({method:"post",url:"".concat(z).concat(t),data:e})},G=function(t,e){return F()({method:"put",url:"".concat(z).concat(t),data:e})},H=function(t,e){var n="".concat(z).concat(t);return n=Q(n,e),F()({method:"get",url:n,data:e})},K=function(t,e){var n="".concat(z).concat(t);return n=Q(n,e),F()({method:"delete",url:n,data:e})};function Q(t,e){var n=t,a=0;for(var o in e)if(void 0!==e.key){var r=e.key,i=o+"="+r,s="?";a>0&&(s="&"),n=n+s+i,a++}return n}function U(t){if(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,o=e.getDate();return a<10&&(a="0"+a),o<10&&(o="0"+o),n+"-"+a+"-"+o}return""}a["default"].prototype.db=J,a["default"].config.productionTip=!1,a["default"].prototype.postRequest=B,a["default"].prototype.putRequest=G,a["default"].prototype.deleteRequest=K,a["default"].prototype.getRequest=H,a["default"].prototype.formatDate=U,new a["default"]({router:T,vuetify:E,render:function(t){return t(d)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},a0e8:function(t,e,n){t.exports=n.p+"img/demo.548b3754.png"},bc75:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.7bb6ba1c.png"}});
//# sourceMappingURL=app.613ef7ef.js.map