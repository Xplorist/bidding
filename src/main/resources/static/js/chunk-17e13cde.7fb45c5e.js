(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e13cde"],{1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var n=r("7726"),i=r("8378"),a=r("2d00"),o=r("37c8"),s=r("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},"3b2b":function(t,e,r){var n=r("7726"),i=r("5dbc"),a=r("86cc").f,o=r("9093").f,s=r("aae3"),c=r("0bfb"),l=n.RegExp,d=l,u=l.prototype,f=/a/g,v=/a/g,_=new l(f)!==f;if(r("9e1e")&&(!_||r("79e5")((function(){return v[r("2b4c")("match")]=!1,l(f)!=f||l(v)==v||"/a/i"!=l(f,"i")})))){l=function(t,e){var r=this instanceof l,n=s(t),a=void 0===e;return!r&&n&&t.constructor===l&&a?t:i(_?new d(n&&!a?t.source:t,e):d((n=t instanceof l)?t.source:t,n&&a?c.call(t):e),r?this:u,l)};for(var p=function(t){t in l||a(l,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})},h=o(d),m=0;h.length>m;)p(h[m++]);u.constructor=l,l.prototype=u,r("2aba")(n,"RegExp",l)}r("7a56")("RegExp")},5019:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"biddingDoc"}},[r("Top"),r("Logo"),t.userInfo?r("section",{staticClass:"bidContent"},[r("div",{staticClass:"type-area"},[r("div",{attrs:{id:"pdfDom"}},[t._m(0),t.orderInfo.send_user?r("div",{staticClass:"bid-main"},[r("div",{staticClass:"pan_info_Top"},[r("div",{staticClass:"baseInfo"},[t._m(1),r("table",{staticClass:"ba_content"},[r("tr",[r("td",[t._v("接單方")]),r("td",[t._v("：")]),r("td",{staticStyle:{width:"160px"}},[t._v(t._s(t.recvInfo.dept_name))]),r("td"),r("td",[t._v("發單方")]),r("td",[t._v("：")]),r("td",{staticStyle:{width:"160px"}},[t._v(t._s(t.orderInfo.send_user.dept_name))])]),r("tr",[r("td",[t._v("聯絡人")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.recvInfo.busis_mngr))]),r("td"),r("td",[t._v("聯絡人")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.send_user.busis_mngr))])]),r("tr",[r("td",[t._v("聯繫電話")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.recvInfo.tel))]),r("td"),r("td",[t._v("聯繫電話")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.send_user.tel))])]),r("tr",[r("td",[t._v("費用代碼")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.recvInfo.cost_code))]),r("td"),r("td",[t._v("費用代碼")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.send_user.cost_code))])]),r("tr",[r("td",[t._v("交易法人")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.recvInfo.legal_person))]),r("td"),r("td",[t._v("交易法人")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.send_user.legal_person))])])])]),r("div",{staticClass:"orderInfo"},[t._m(2),r("table",{staticClass:"or_content"},[r("tr",[r("td",[t._v("订单编号")]),r("td",[t._v("：")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.orderInfo.bill_no))])]),r("tr",[r("td",[t._v("交易類型")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.pd_type))]),r("td"),r("td",[t._v("交易法人")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.send_user.legal_person))])]),r("tr",[r("td",[t._v("需求套數")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.amount))]),r("td"),r("td",[t._v("交易地點")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.deliver_address))])]),r("tr",[r("td",[t._v("交貨時間")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.deliver_date.split(" ")[0]))]),r("td"),r("td",[t._v("交易幣別")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.orderInfo.money_type))])])])])]),r("div",{staticClass:"quoteInfo"},[t._m(3),r("table",{staticClass:"tbFir"},[r("tr",[r("td",[t._v("總報價")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.total_price*t.orderInfo.amount))])]),r("tr",[r("td",[t._v("清單（單套）總價")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.total_price))])]),r("tr",[r("td",[t._v("交貨時間")]),r("td",[t._v("：")]),r("td",[t._v(t._s(t.deliver_date.split(" ")[0]))])])]),r("div",{staticClass:"qu_content"},[r("table",{staticClass:"tbSec",attrs:{id:"tbSec"}},[t._m(4),t._l(t.slav_list,(function(e,n){return r("tr",{key:e.part_doc_file_pkid},[r("td",[t._v(t._s(n+1))]),r("td",[t._v(t._s(e.part_name.split(".")[0]))]),r("td",[t._v(t._s(e.part_amunt))]),r("td",[t._v(t._s(e.part_unit_price))]),r("td",[t._v(t._s(e.part_price_sum))])])}))],2)]),r("span",{staticClass:"sign",attrs:{id:"sign"}},[t._v("權限主管確認核准：")])])]):t._e(),t._m(5)])])]):t._e(),r("div",{staticStyle:{"background-color":"#12222E"}},[r("div",{staticClass:"type-area",staticStyle:{"background-color":"#12222E"}},[r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){return t.$getPdf("pdfDom",t.htmlTitle)}}},[t._v("生成PDF")])],1)]),r("Footer")],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"panel-title"},[r("div",{staticClass:"left-line"},[r("div",{staticClass:"theLine"}),r("div",{staticClass:"theBlock"})]),r("div",{staticClass:"center-text"},[t._v("模治檢具標書")]),r("div",{staticClass:"right-line"},[r("div",{staticClass:"theBlock"}),r("div",{staticClass:"theLine"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ba_title"},[r("span",[t._v("基本信息")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"or_title"},[r("span",[t._v("訂單信息")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"qu_title"},[r("span",[t._v("報價信息")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("序號")]),r("th",[t._v("零件名（成套名）")]),r("th",[t._v("數量")]),r("th",[t._v("單價")]),r("th",[t._v("金額")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bid-mainSec",attrs:{id:"bid-mainSec"}},[r("div",{staticClass:"annotation",attrs:{id:"annotation"}},[r("div",{staticClass:"an_title"},[r("span",[t._v("注      釋")])]),r("div",{staticClass:"an_content"},[r("p",[r("span",[t._v("1.")]),t._v("可單個零件報價，若是成套模治檢具零件數量巨大，可採用成套模治檢具報價。\n              ")]),r("p",[r("span",[t._v("2.")]),t._v("模治檢具加工涉及到輔助材料/組裝費/運費等不能歸屬的，可在零件名中填其它，報出金額即可。\n              ")]),r("p",[r("span",[t._v("3.")]),t._v("報價需接單方權限主管核准后視為加工協議達成，接單方依系統訂單標書按要求加工、按期按質交貨等。\n              ")]),r("p",[r("span",[t._v("4.")]),t._v("報價單報價均為未稅價。\n              ")])])])])}],a=(r("8e6e"),r("456d"),r("bd86")),o=(r("ac4d"),r("8a81"),r("ac6a"),r("a481"),r("3b2b"),r("e9c9")),s=r("2241"),c=r("fd2d"),l=r("2f62"),d=r("f8b7");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={data:function(){return{orderInfo:{},slav_list:[],pkid:"",recvInfo:{},deliver_date:"",loaded:"false",htmlTitle:"模治檢具標書"}},methods:{getInfo:function(t){var e=this;if("false"==t){var r=JSON.parse(sessionStorage.getItem("biddinfdDoc"));this.orderInfo=r.orderInfo,this.slav_list=r.slav_list;var n=r.deliver_date,i=new Date(n);return Date.prototype.Format=function(t){var e={"y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(var r in e)if(new RegExp("("+r+")").test(t))if("y+"==r)t=t.replace(RegExp.$1,(""+e[r]).substr(4-RegExp.$1.length));else if("S+"==r){var n=RegExp.$1.length;n=1==n?3:n,t=t.replace(RegExp.$1,("00"+e[r]).substr((""+e[r]).length-1,n))}else t=t.replace(RegExp.$1,1==RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length));return t},this.deliver_date=i.Format("yyyy-MM-dd"),void this.getRecvInfo()}Object(d["c"])(this.pkid).then((function(t){"1"===t.code?(e.orderInfo=t.t,e.getRecvInfo()):e.$message.error(t.msg)}))},getRecvInfo:function(){if("recv"===this.userInfo.send_recv_type)this.recvInfo=this.userInfo,this.getSlavList();else{var t=JSON.parse(sessionStorage.getItem("recvPkid")),e=!0,r=!1,n=void 0;try{for(var i,a=this.orderInfo.give_recv_user_list[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;t==o.pkid&&(this.recvInfo=o)}}catch(s){r=!0,n=s}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}this.deliver_date=JSON.parse(sessionStorage.getItem("deliverDate")),this.slav_list=JSON.parse(sessionStorage.getItem("slavList"))}},getSlavList:function(){var t=this;"false"!=this.loaded&&Object(d["h"])(this.orderInfo.pkid).then((function(e){if("1"===e.code){t.deliver_date=e.t.deliver_date;var r=!0,n=!1,i=void 0;try{for(var a,o=e.t.slav_list[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value,c={id:s.pkid,part_name:s.part_name,part_amunt:s.part_amunt,part_unit_price:s.part_unit_price,part_price_sum:s.part_price_sum};t.slav_list.push(c)}}catch(l){n=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}else t.$message.error(e.msg)}))},con:function(){alert(123)},addElement:function(t,e,r){var n,i,a;"anno"==r?(n=document.querySelector("#bid-mainSec"),i=t,a=document.createElement("div"),a.className="momentSinEle"):"sign"==r?(n=document.querySelector(".quoteInfo"),i=t,a=document.createElement("div"),a.className="momentSinEle"):(n=document.querySelector("#tbSec"),i=t,a=document.createElement("tr"),a.className="momentEle"),a.style.height=e+"px",n.insertBefore(a,i)},delElement:function(){var t=document.querySelectorAll(".momentEle"),e=document.querySelector("#tbSec"),r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;e.removeChild(s)}}catch(p){n=!0,i=p}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}var c=document.querySelectorAll(".momentSinEle"),l=!0,d=!1,u=void 0;try{for(var f,v=c[Symbol.iterator]();!(l=(f=v.next()).done);l=!0){var _=f.value;_.parentNode.removeChild(_)}}catch(p){d=!0,u=p}finally{try{l||null==v.return||v.return()}finally{if(d)throw u}}}},created:function(){var t=this.$router.history.current.query.loaded;this.loaded=t,this.pkid=this.$router.history.current.query.pkid,this.getInfo(t)},computed:f({},Object(l["c"])({userInfo:function(t){return t.userInfo}}),{total_price:function(){var t=0,e=!0,r=!1,n=void 0;try{for(var i,a=this.slav_list[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;t+=o.part_price_sum}}catch(s){r=!0,n=s}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}return t}}),components:{Top:o["a"],Logo:s["a"],Footer:c["a"]}},_=v,p=(r("71c9"),r("2877")),h=Object(p["a"])(_,n,i,!1,null,"1d689c10",null);e["default"]=h.exports},"67ab":function(t,e,r){var n=r("ca5a")("meta"),i=r("d3f4"),a=r("69a8"),o=r("86cc").f,s=0,c=Object.isExtensible||function(){return!0},l=!r("79e5")((function(){return c(Object.preventExtensions({}))})),d=function(t){o(t,n,{value:{i:"O"+ ++s,w:{}}})},u=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!c(t))return"F";if(!e)return"E";d(t)}return t[n].i},f=function(t,e){if(!a(t,n)){if(!c(t))return!0;if(!e)return!1;d(t)}return t[n].w},v=function(t){return l&&_.NEED&&c(t)&&!a(t,n)&&d(t),t},_=t.exports={KEY:n,NEED:!1,fastKey:u,getWeak:f,onFreeze:v}},"6b70":function(t,e,r){},"71c9":function(t,e,r){"use strict";var n=r("6b70"),i=r.n(n);i.a},"7bbc":function(t,e,r){var n=r("6821"),i=r("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(n(t))}},"8a81":function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("9e1e"),o=r("5ca1"),s=r("2aba"),c=r("67ab").KEY,l=r("79e5"),d=r("5537"),u=r("7f20"),f=r("ca5a"),v=r("2b4c"),_=r("37c8"),p=r("3a72"),h=r("d4c0"),m=r("1169"),b=r("cb7c"),y=r("d3f4"),g=r("4bf8"),S=r("6821"),I=r("6a99"),w=r("4630"),O=r("2aeb"),E=r("7bbc"),C=r("11e9"),x=r("2621"),k=r("86cc"),j=r("0d58"),$=C.f,P=k.f,N=E.f,D=n.Symbol,F=n.JSON,q=F&&F.stringify,M="prototype",R=v("_hidden"),J=v("toPrimitive"),A={}.propertyIsEnumerable,T=d("symbol-registry"),L=d("symbols"),B=d("op-symbols"),K=Object[M],W="function"==typeof D&&!!x.f,Y=n.QObject,z=!Y||!Y[M]||!Y[M].findChild,G=a&&l((function(){return 7!=O(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=$(K,e);n&&delete K[e],P(t,e,r),n&&t!==K&&P(K,e,n)}:P,H=function(t){var e=L[t]=O(D[M]);return e._k=t,e},Q=W&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},U=function(t,e,r){return t===K&&U(B,e,r),b(t),e=I(e,!0),b(r),i(L,e)?(r.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),r=O(r,{enumerable:w(0,!1)})):(i(t,R)||P(t,R,w(1,{})),t[R][e]=!0),G(t,e,r)):P(t,e,r)},V=function(t,e){b(t);var r,n=h(e=S(e)),i=0,a=n.length;while(a>i)U(t,r=n[i++],e[r]);return t},X=function(t,e){return void 0===e?O(t):V(O(t),e)},Z=function(t){var e=A.call(this,t=I(t,!0));return!(this===K&&i(L,t)&&!i(B,t))&&(!(e||!i(this,t)||!i(L,t)||i(this,R)&&this[R][t])||e)},tt=function(t,e){if(t=S(t),e=I(e,!0),t!==K||!i(L,e)||i(B,e)){var r=$(t,e);return!r||!i(L,e)||i(t,R)&&t[R][e]||(r.enumerable=!0),r}},et=function(t){var e,r=N(S(t)),n=[],a=0;while(r.length>a)i(L,e=r[a++])||e==R||e==c||n.push(e);return n},rt=function(t){var e,r=t===K,n=N(r?B:S(t)),a=[],o=0;while(n.length>o)!i(L,e=n[o++])||r&&!i(K,e)||a.push(L[e]);return a};W||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(r){this===K&&e.call(B,r),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),G(this,t,w(1,r))};return a&&z&&G(K,t,{configurable:!0,set:e}),H(t)},s(D[M],"toString",(function(){return this._k})),C.f=tt,k.f=U,r("9093").f=E.f=et,r("52a7").f=Z,x.f=rt,a&&!r("2d00")&&s(K,"propertyIsEnumerable",Z,!0),_.f=function(t){return H(v(t))}),o(o.G+o.W+o.F*!W,{Symbol:D});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;nt.length>it;)v(nt[it++]);for(var at=j(v.store),ot=0;at.length>ot;)p(at[ot++]);o(o.S+o.F*!W,"Symbol",{for:function(t){return i(T,t+="")?T[t]:T[t]=D(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in T)if(T[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),o(o.S+o.F*!W,"Object",{create:X,defineProperty:U,defineProperties:V,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var st=l((function(){x.f(1)}));o(o.S+o.F*st,"Object",{getOwnPropertySymbols:function(t){return x.f(g(t))}}),F&&o(o.S+o.F*(!W||l((function(){var t=D();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))),"JSON",{stringify:function(t){var e,r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e=n[1],(y(e)||void 0!==t)&&!Q(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Q(e))return e}),n[1]=e,q.apply(F,n)}}),D[M][J]||r("32e9")(D[M],J,D[M].valueOf),u(D,"Symbol"),u(Math,"Math",!0),u(n.JSON,"JSON",!0)},a481:function(t,e,r){"use strict";var n=r("cb7c"),i=r("4bf8"),a=r("9def"),o=r("4588"),s=r("0390"),c=r("5f1b"),l=Math.max,d=Math.min,u=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,_=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,(function(t,e,r,p){return[function(n,i){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,i):r.call(String(a),n,i)},function(t,e){var i=p(r,t,this,e);if(i.done)return i.value;var u=n(t),f=String(this),v="function"===typeof e;v||(e=String(e));var m=u.global;if(m){var b=u.unicode;u.lastIndex=0}var y=[];while(1){var g=c(u,f);if(null===g)break;if(y.push(g),!m)break;var S=String(g[0]);""===S&&(u.lastIndex=s(f,a(u.lastIndex),b))}for(var I="",w=0,O=0;O<y.length;O++){g=y[O];for(var E=String(g[0]),C=l(d(o(g.index),f.length),0),x=[],k=1;k<g.length;k++)x.push(_(g[k]));var j=g.groups;if(v){var $=[E].concat(x,C,f);void 0!==j&&$.push(j);var P=String(e.apply(void 0,$))}else P=h(E,f,C,x,j,e);C>=w&&(I+=f.slice(w,C)+P,w=C+E.length)}return I+f.slice(w)}];function h(t,e,n,a,o,s){var c=n+t.length,l=a.length,d=v;return void 0!==o&&(o=i(o),d=f),r.call(s,d,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var d=+i;if(0===d)return r;if(d>l){var f=u(d/10);return 0===f?r:f<=l?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):r}s=a[d-1]}return void 0===s?"":s}))}}))},ac4d:function(t,e,r){r("3a72")("asyncIterator")},d4c0:function(t,e,r){var n=r("0d58"),i=r("2621"),a=r("52a7");t.exports=function(t){var e=n(t),r=i.f;if(r){var o,s=r(t),c=a.f,l=0;while(s.length>l)c.call(t,o=s[l++])&&e.push(o)}return e}}}]);
//# sourceMappingURL=chunk-17e13cde.7fb45c5e.js.map