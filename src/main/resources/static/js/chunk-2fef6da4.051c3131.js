(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fef6da4"],{1169:function(t,n,e){var r=e("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},1599:function(t,n,e){"use strict";var r=e("99ee"),i=e.n(r);i.a},"37c8":function(t,n,e){n.f=e("2b4c")},"3a72":function(t,n,e){var r=e("7726"),i=e("8378"),a=e("2d00"),o=e("37c8"),s=e("86cc").f;t.exports=function(t){var n=i.Symbol||(i.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||s(n,t,{value:o.f(t)})}},"3ebc":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a}));var r=e("fcc2");function i(t,n,e){var i=encodeURIComponent(t||r["a"].userInfo.user_pic_file.file_save_path),a=encodeURIComponent(n||r["a"].userInfo.user_pic_file.file_save_name),o=encodeURIComponent(e||r["a"].userInfo.user_pic_file.file_origin_name),s="/bidding/api/pic_show/load",c=s+"?file_save_path="+i+"&file_save_name="+a+"&file_origin_name="+o;return c}function a(t,n,e){var r=encodeURIComponent(t),i=encodeURIComponent(n),a=encodeURIComponent(e),o="/bidding/api/pic_show/download",s=o+"?file_save_path="+r+"&file_save_name="+i+"&file_origin_name="+a;return s}},"67ab":function(t,n,e){var r=e("ca5a")("meta"),i=e("d3f4"),a=e("69a8"),o=e("86cc").f,s=0,c=Object.isExtensible||function(){return!0},f=!e("79e5")((function(){return c(Object.preventExtensions({}))})),u=function(t){o(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!c(t))return"F";if(!n)return"E";u(t)}return t[r].i},_=function(t,n){if(!a(t,r)){if(!c(t))return!0;if(!n)return!1;u(t)}return t[r].w},v=function(t){return f&&p.NEED&&c(t)&&!a(t,r)&&u(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:_,onFreeze:v}},"6ec3":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"information"}},[e("Top"),e("Logo"),t.merchantInfo?e("section",{attrs:{id:"content"}},[e("div",{staticClass:"main type-area"},[e("div",{staticClass:"warpper"},[e("div",{staticClass:"principal"},[e("div",{staticClass:"information"},[e("el-image",{staticClass:"info_logo",attrs:{src:t.porImgUrl,fit:"cover"}}),e("div",{staticClass:"info_name"},[e("span",{staticClass:"icon"}),e("span",[t._v(t._s(t.merchantInfo.dept_name))])]),e("div",{staticClass:"info_one"},[e("span",[t._v("廠區："+t._s(t.merchantInfo.fctry_zone)+" 》次集团："+t._s(t.merchantInfo.secn_cmpy)+" 》事業群："+t._s(t.merchantInfo.entrps_group)+" 》處："+t._s(t.merchantInfo.pd_office)+" 》單位："+t._s(t.merchantInfo.dept_name))])]),e("div",{staticClass:"info_two"},["recv"==t.merchantInfo.send_recv_type?e("span",{staticClass:"range"},[t._v("\n                加工範圍：\n                "),t._l(t.merchantInfo.recv_range_list,(function(n){return e("span",{key:n.pkid},[t._v(t._s(n.name))])}))],2):e("span",[t._v(" ")]),e("span",{staticClass:"tel"},[t._v("联系电话："+t._s(t.merchantInfo.tel))])]),e("div",{staticClass:"info_evaluation"},[e("div",{staticClass:"info_eva_title"},[t._v("客戶評價")]),e("div",{staticClass:"info_eva_list"},t._l(t.comments,(function(n,r){return e("div",{key:r,staticClass:"single"},[e("div",[e("div",{staticClass:"eva_text"},[t._v(t._s(n.text))]),e("div",{staticClass:"eva_date"},[t._v(t._s(n.date))])]),e("div",{staticClass:"eva_belong"},[t._v(t._s(n.belong))])])})),0)])],1),e("div",{staticClass:"introduction"},[t._m(0),e("div",{staticClass:"intro_text"},["recv"==t.merchantInfo.send_recv_type?e("div",{staticClass:"intro_text_title"},[t._v("客戶簡介")]):e("div",{staticClass:"intro_text_title"},[t._v("商戶簡介")]),e("pre",[t._v(t._s(t.merchantInfo.summary))])])])]),t._m(1)])])]):t._e(),e("Footer")],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"intro_grade"},[e("table",{staticClass:"intro_gra_tab"},[e("tr",[e("th",[t._v("入駐時間:")]),e("th",[t._v("2年")])]),e("tr",[e("td",[t._v("客戶評分:")]),e("td",[t._v("4.9")])]),e("tr",[e("td",[t._v("出貨時效:")]),e("td",[t._v("3.2")])]),e("tr",[e("td",[t._v("出貨質量:")]),e("td",[t._v("3.2")])]),e("tr",[e("td",[t._v("服務態度:")]),e("td",[t._v("4.5")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"more"},[e("p",[t._v("查看更多")]),e("span",{staticClass:"moreIcon"})])}],a=(e("ac4d"),e("8a81"),e("ac6a"),e("e9c9")),o=e("2241"),s=e("fd2d"),c=e("c24f"),f=e("3ebc"),u={data:function(){return{comments:[],merchantInfo:"",porImgUrl:""}},methods:{getMerchantInfo:function(){var t=this,n=this.$router.history.current.query.pkid;Object(c["c"])(n).then((function(n){if("1"===n.code){t.merchantInfo=n.t;var e=t.merchantInfo.user_pic_file;t.porImgUrl=Object(f["b"])(e.file_save_path,e.file_save_name,e.file_origin_name),t.comments=[];var r=!0,i=!1,a=void 0;try{for(var o,s=t.merchantInfo.get_eval_list[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var c=o.value,u={text:c.summary_text,date:c.create_date,belong:c.user.dept_name};t.comments.push(u)}}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}else t.$message.error("出錯啦，稍後再試試吧")}))}},components:{Top:a["a"],Logo:o["a"],Footer:s["a"]},created:function(){this.getMerchantInfo()}},l=u,_=(e("1599"),e("2877")),v=Object(_["a"])(l,r,i,!1,null,"59472bf1",null);n["default"]=v.exports},"7bbc":function(t,n,e){var r=e("6821"),i=e("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(n){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(r(t))}},"8a81":function(t,n,e){"use strict";var r=e("7726"),i=e("69a8"),a=e("9e1e"),o=e("5ca1"),s=e("2aba"),c=e("67ab").KEY,f=e("79e5"),u=e("5537"),l=e("7f20"),_=e("ca5a"),v=e("2b4c"),p=e("37c8"),d=e("3a72"),m=e("d4c0"),h=e("1169"),b=e("cb7c"),y=e("d3f4"),g=e("4bf8"),I=e("6821"),w=e("6a99"),C=e("4630"),S=e("2aeb"),O=e("7bbc"),x=e("11e9"),E=e("2621"),k=e("86cc"),j=e("0d58"),P=x.f,F=k.f,N=O.f,U=r.Symbol,T=r.JSON,J=T&&T.stringify,R="prototype",W=v("_hidden"),$=v("toPrimitive"),A={}.propertyIsEnumerable,M=u("symbol-registry"),D=u("symbols"),K=u("op-symbols"),q=Object[R],z="function"==typeof U&&!!E.f,L=r.QObject,Y=!L||!L[R]||!L[R].findChild,G=a&&f((function(){return 7!=S(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=P(q,n);r&&delete q[n],F(t,n,e),r&&t!==q&&F(q,n,r)}:F,Q=function(t){var n=D[t]=S(U[R]);return n._k=t,n},B=z&&"symbol"==typeof U.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof U},H=function(t,n,e){return t===q&&H(K,n,e),b(t),n=w(n,!0),b(e),i(D,n)?(e.enumerable?(i(t,W)&&t[W][n]&&(t[W][n]=!1),e=S(e,{enumerable:C(0,!1)})):(i(t,W)||F(t,W,C(1,{})),t[W][n]=!0),G(t,n,e)):F(t,n,e)},V=function(t,n){b(t);var e,r=m(n=I(n)),i=0,a=r.length;while(a>i)H(t,e=r[i++],n[e]);return t},X=function(t,n){return void 0===n?S(t):V(S(t),n)},Z=function(t){var n=A.call(this,t=w(t,!0));return!(this===q&&i(D,t)&&!i(K,t))&&(!(n||!i(this,t)||!i(D,t)||i(this,W)&&this[W][t])||n)},tt=function(t,n){if(t=I(t),n=w(n,!0),t!==q||!i(D,n)||i(K,n)){var e=P(t,n);return!e||!i(D,n)||i(t,W)&&t[W][n]||(e.enumerable=!0),e}},nt=function(t){var n,e=N(I(t)),r=[],a=0;while(e.length>a)i(D,n=e[a++])||n==W||n==c||r.push(n);return r},et=function(t){var n,e=t===q,r=N(e?K:I(t)),a=[],o=0;while(r.length>o)!i(D,n=r[o++])||e&&!i(q,n)||a.push(D[n]);return a};z||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor!");var t=_(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(K,e),i(this,W)&&i(this[W],t)&&(this[W][t]=!1),G(this,t,C(1,e))};return a&&Y&&G(q,t,{configurable:!0,set:n}),Q(t)},s(U[R],"toString",(function(){return this._k})),x.f=tt,k.f=H,e("9093").f=O.f=nt,e("52a7").f=Z,E.f=et,a&&!e("2d00")&&s(q,"propertyIsEnumerable",Z,!0),p.f=function(t){return Q(v(t))}),o(o.G+o.W+o.F*!z,{Symbol:U});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;rt.length>it;)v(rt[it++]);for(var at=j(v.store),ot=0;at.length>ot;)d(at[ot++]);o(o.S+o.F*!z,"Symbol",{for:function(t){return i(M,t+="")?M[t]:M[t]=U(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var n in M)if(M[n]===t)return n},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),o(o.S+o.F*!z,"Object",{create:X,defineProperty:H,defineProperties:V,getOwnPropertyDescriptor:tt,getOwnPropertyNames:nt,getOwnPropertySymbols:et});var st=f((function(){E.f(1)}));o(o.S+o.F*st,"Object",{getOwnPropertySymbols:function(t){return E.f(g(t))}}),T&&o(o.S+o.F*(!z||f((function(){var t=U();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}))),"JSON",{stringify:function(t){var n,e,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(e=n=r[1],(y(n)||void 0!==t)&&!B(t))return h(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!B(n))return n}),r[1]=n,J.apply(T,r)}}),U[R][$]||e("32e9")(U[R],$,U[R].valueOf),l(U,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"99ee":function(t,n,e){},ac4d:function(t,n,e){e("3a72")("asyncIterator")},c24f:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s}));var r=e("365c");function i(t){var n="/api/user/login";return r["a"].post(n,t)}function a(t){t={username:t};var n="/api/user/login_user_info";return r["a"].postWithToken(n,t)}function o(t){t={pkid:t};var n="/api/user/query_user_info_by_pkid";return r["a"].post(n,t)}function s(t){var n="/api/user/update_user_info";return r["a"].postWithToken(n,t)}},d4c0:function(t,n,e){var r=e("0d58"),i=e("2621"),a=e("52a7");t.exports=function(t){var n=r(t),e=i.f;if(e){var o,s=e(t),c=a.f,f=0;while(s.length>f)c.call(t,o=s[f++])&&n.push(o)}return n}}}]);
//# sourceMappingURL=chunk-2fef6da4.051c3131.js.map