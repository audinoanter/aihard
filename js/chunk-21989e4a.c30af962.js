(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21989e4a"],{"049b":function(n,t,e){"use strict";e.r(t);var a,i,r,c,s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"main-limiter"},[e("H1",[n._v("Webinars")]),e("section",[e("H3",[n._v("Upcoming webinars")]),n._l(n.webinars.filter((function(n){return n.upcoming})),(function(n){return e("WebinarListing",{key:n.id,attrs:{webinar:n}})}))],2),e("section",[e("H3",[n._v("Past webinars")]),n._l(n.webinars.filter((function(n){return!n.upcoming})),(function(n){return e("WebinarListing",{key:n.id,attrs:{webinar:n}})}))],2)],1)},o=[],u=e("d4ec"),p=e("262e"),l=e("2caf"),b=e("60a3"),m=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("router-link",{attrs:{to:"/webinar/"+n.webinar.id}},[e("el-row",{staticClass:"margin-bottom-4 webinar-listing",class:{past:!n.webinar.upcoming},attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,span:6}},[e("DoroImage",{attrs:{src:n.image(n.webinar.id,n.webinar.mainImage)}})],1),e("el-col",{attrs:{span:18}},[e("p",{staticClass:"webinar-hint"},[n._v(" "+n._s(n.calculatedDate)+" ")]),e("h3",{staticClass:"webinar-title"},[n._v(n._s(n.webinar.title))]),e("p",{staticClass:"webinar-desc"},[n._v(n._s(n.webinar.summary))])])],1)],1)},f=[],g=(e("99af"),e("bee2")),d=e("4b2e"),w=(a=Object(b["a"])({components:{DoroImage:d["a"]},props:{webinar:Object}}),a(i=function(n){Object(p["a"])(a,n);var t=Object(l["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return Object(g["a"])(a,[{key:"image",value:function(n,t){return e("928d")("./".concat(n,"/").concat(t))}},{key:"calculatedDate",get:function(){return this.webinar.dateTime.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}}]),a}(b["c"]))||i),j=w,v=(e("66e6"),e("2877")),_=Object(v["a"])(j,m,f,!1,null,null,null),h=_.exports,O=(r=Object(b["a"])({components:{WebinarListing:h},props:{webinars:Array},metaInfo:function(){return{title:"Webinars"}}}),r(c=function(n){Object(p["a"])(e,n);var t=Object(l["a"])(e);function e(){return Object(u["a"])(this,e),t.apply(this,arguments)}return e}(b["c"]))||c),x=O,y=Object(v["a"])(x,s,o,!1,null,null,null);t["default"]=y.exports},"66e6":function(n,t,e){"use strict";var a=e("fe68"),i=e.n(a);i.a},"7d4d":function(n,t,e){n.exports=e.p+"img/main.ebb5ba5d.png"},8956:function(n,t,e){n.exports=e.p+"img/main.7f12b775.png"},"928d":function(n,t,e){var a={"./adding-explainability/main.jpg":"9425","./handling-enterprise-data/main.jpg":"eaa9","./practical-application-of-ai-for-marketing-and-customer-relationships/main.png":"8956","./test-2/roboexplain.jpg":"d80c","./xai-apps/main.png":"7d4d"};function i(n){var t=r(n);return e(t)}function r(n){if(!e.o(a,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a[n]}i.keys=function(){return Object.keys(a)},i.resolve=r,n.exports=i,i.id="928d"},9425:function(n,t,e){n.exports=e.p+"img/main.31589ac4.jpg"},d80c:function(n,t,e){n.exports=e.p+"img/roboexplain.15803379.jpg"},eaa9:function(n,t,e){n.exports=e.p+"img/main.9a5b9186.jpg"},fe68:function(n,t,e){}}]);