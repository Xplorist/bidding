(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff21565c"],{"0519":function(e,t,r){e.exports=r.p+"img/LOGO.eb740090.png"},1169:function(e,t,r){var o=r("2d95");e.exports=Array.isArray||function(e){return"Array"==o(e)}},"1ae4":function(e,t,r){},"37c8":function(e,t,r){t.f=r("2b4c")},"3a72":function(e,t,r){var o=r("7726"),n=r("8378"),a=r("2d00"),i=r("37c8"),s=r("86cc").f;e.exports=function(e){var t=n.Symbol||(n.Symbol=a?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:i.f(e)})}},"3f50":function(e,t,r){"use strict";var o=r("1ae4"),n=r.n(o);n.a},"3f5e":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s}));var o=r("365c");function n(e){var t="/api/ftp_file/upload",r="multipart/form-data";return o["a"].post(t,e,r)}function a(e){var t="/api/ftp_file/delete";return o["a"].post(t,e)}function i(e){var t="/api/bill/delete_part_doc_file_by_pkid";return o["a"].post(t,e)}function s(e){return o["a"].getWithToken(e)}},"67ab":function(e,t,r){var o=r("ca5a")("meta"),n=r("d3f4"),a=r("69a8"),i=r("86cc").f,s=0,l=Object.isExtensible||function(){return!0},c=!r("79e5")((function(){return l(Object.preventExtensions({}))})),f=function(e){i(e,o,{value:{i:"O"+ ++s,w:{}}})},u=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,o)){if(!l(e))return"F";if(!t)return"E";f(e)}return e[o].i},m=function(e,t){if(!a(e,o)){if(!l(e))return!0;if(!t)return!1;f(e)}return e[o].w},p=function(e){return c&&d.NEED&&l(e)&&!a(e,o)&&f(e),e},d=e.exports={KEY:o,NEED:!1,fastKey:u,getWeak:m,onFreeze:p}},"7bbc":function(e,t,r){var o=r("6821"),n=r("9093").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?s(e):n(o(e))}},"8a81":function(e,t,r){"use strict";var o=r("7726"),n=r("69a8"),a=r("9e1e"),i=r("5ca1"),s=r("2aba"),l=r("67ab").KEY,c=r("79e5"),f=r("5537"),u=r("7f20"),m=r("ca5a"),p=r("2b4c"),d=r("37c8"),g=r("3a72"),h=r("d4c0"),b=r("1169"),y=r("cb7c"),v=r("d3f4"),_=r("4bf8"),C=r("6821"),w=r("6a99"),O=r("4630"),S=r("2aeb"),k=r("7bbc"),x=r("11e9"),E=r("2621"),F=r("86cc"),P=r("0d58"),$=x.f,q=F.f,N=k.f,R=o.Symbol,j=o.JSON,I=j&&j.stringify,T="prototype",D=p("_hidden"),L=p("toPrimitive"),U={}.propertyIsEnumerable,G=f("symbol-registry"),J=f("symbols"),M=f("op-symbols"),A=Object[T],B="function"==typeof R&&!!E.f,W=o.QObject,Y=!W||!W[T]||!W[T].findChild,K=a&&c((function(){return 7!=S(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var o=$(A,t);o&&delete A[t],q(e,t,r),o&&e!==A&&q(A,t,o)}:q,z=function(e){var t=J[e]=S(R[T]);return t._k=e,t},Q=B&&"symbol"==typeof R.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof R},H=function(e,t,r){return e===A&&H(M,t,r),y(e),t=w(t,!0),y(r),n(J,t)?(r.enumerable?(n(e,D)&&e[D][t]&&(e[D][t]=!1),r=S(r,{enumerable:O(0,!1)})):(n(e,D)||q(e,D,O(1,{})),e[D][t]=!0),K(e,t,r)):q(e,t,r)},V=function(e,t){y(e);var r,o=h(t=C(t)),n=0,a=o.length;while(a>n)H(e,r=o[n++],t[r]);return e},X=function(e,t){return void 0===t?S(e):V(S(e),t)},Z=function(e){var t=U.call(this,e=w(e,!0));return!(this===A&&n(J,e)&&!n(M,e))&&(!(t||!n(this,e)||!n(J,e)||n(this,D)&&this[D][e])||t)},ee=function(e,t){if(e=C(e),t=w(t,!0),e!==A||!n(J,t)||n(M,t)){var r=$(e,t);return!r||!n(J,t)||n(e,D)&&e[D][t]||(r.enumerable=!0),r}},te=function(e){var t,r=N(C(e)),o=[],a=0;while(r.length>a)n(J,t=r[a++])||t==D||t==l||o.push(t);return o},re=function(e){var t,r=e===A,o=N(r?M:C(e)),a=[],i=0;while(o.length>i)!n(J,t=o[i++])||r&&!n(A,t)||a.push(J[t]);return a};B||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(r){this===A&&t.call(M,r),n(this,D)&&n(this[D],e)&&(this[D][e]=!1),K(this,e,O(1,r))};return a&&Y&&K(A,e,{configurable:!0,set:t}),z(e)},s(R[T],"toString",(function(){return this._k})),x.f=ee,F.f=H,r("9093").f=k.f=te,r("52a7").f=Z,E.f=re,a&&!r("2d00")&&s(A,"propertyIsEnumerable",Z,!0),d.f=function(e){return z(p(e))}),i(i.G+i.W+i.F*!B,{Symbol:R});for(var oe="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;oe.length>ne;)p(oe[ne++]);for(var ae=P(p.store),ie=0;ae.length>ie;)g(ae[ie++]);i(i.S+i.F*!B,"Symbol",{for:function(e){return n(G,e+="")?G[e]:G[e]=R(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in G)if(G[t]===e)return t},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),i(i.S+i.F*!B,"Object",{create:X,defineProperty:H,defineProperties:V,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:re});var se=c((function(){E.f(1)}));i(i.S+i.F*se,"Object",{getOwnPropertySymbols:function(e){return E.f(_(e))}}),j&&i(i.S+i.F*(!B||c((function(){var e=R();return"[null]"!=I([e])||"{}"!=I({a:e})||"{}"!=I(Object(e))}))),"JSON",{stringify:function(e){var t,r,o=[e],n=1;while(arguments.length>n)o.push(arguments[n++]);if(r=t=o[1],(v(t)||void 0!==e)&&!Q(e))return b(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!Q(t))return t}),o[1]=t,I.apply(j,o)}}),R[T][L]||r("32e9")(R[T],L,R[T].valueOf),u(R,"Symbol"),u(Math,"Math",!0),u(o.JSON,"JSON",!0)},ac4d:function(e,t,r){r("3a72")("asyncIterator")},b4a9:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"entrySec"},[r("Top"),r("Logo"),r("section",{attrs:{id:"content"}},[r("div",{staticClass:"main type-area"},[r("div",{staticClass:"formBox"},[r("div",{staticClass:"form_title"},[r("span",[e._v("填寫資料")]),r("div",{staticClass:"tit_describe"},[r("span",[e._v("我是"+e._s("recv"==e.category?"接單方":"需求方"))]),"recv"==e.category?r("span",[e._v("承接模治檢具加工、設計。")]):r("span",[e._v("發佈模治檢具加工、設計需求。")])])]),r("div",{staticClass:"form_info"},[r("div",{staticClass:"formLeft"},[r("el-form",{ref:"formOne",attrs:{"status-icon":"",model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{staticClass:"logo",attrs:{label:"LOGO:"}},[r("el-image",{staticStyle:{width:"40px",height:"40px"},attrs:{src:e.form.logoUrl,fit:"cover"}}),r("span",{on:{click:e.upImg}},[e._v("上傳")]),r("input",{ref:"fileInp",staticClass:"dis_none",attrs:{type:"file"},on:{change:e.getFile}}),r("span",[e._v("200px*200px以上，不超過1M")])],1),r("el-form-item",{staticClass:"name",attrs:{label:"賬號名稱:",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{staticClass:"psd",attrs:{label:"密码:",prop:"psd"}},[r("el-input",{attrs:{"show-password":""},model:{value:e.form.psd,callback:function(t){e.$set(e.form,"psd",t)},expression:"form.psd"}})],1),r("el-form-item",{staticClass:"conpsd",attrs:{label:"确认密码:",prop:"conpsd"}},[r("el-input",{attrs:{"show-password":""},model:{value:e.form.conpsd,callback:function(t){e.$set(e.form,"conpsd",t)},expression:"form.conpsd"}})],1),r("el-form-item",{staticClass:"factory",attrs:{label:"所屬廠區:",prop:"factory"}},[r("el-select",{attrs:{placeholder:""},nativeOn:{click:function(t){return e._query_factory_list()}},model:{value:e.form.factory,callback:function(t){e.$set(e.form,"factory",t)},expression:"form.factory"}},e._l(e.factory_list,(function(e,t){return r("el-option",{key:e.list_order,attrs:{label:e.name||t,value:e.name}})})),1)],1),r("el-form-item",{staticClass:"bussiness",attrs:{label:"事業群:",prop:"bussiness"}},[r("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearchGroup},on:{select:function(t){return e._query_PD_OFFICE_list()}},nativeOn:{change:function(t){return e._query_PD_OFFICE_list()}},model:{value:e.form.bussiness,callback:function(t){e.$set(e.form,"bussiness","string"===typeof t?t.trim():t)},expression:"form.bussiness"}})],1),r("el-form-item",{staticClass:"bureau",attrs:{label:"產品處:",prop:"bureau"}},[r("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearchOffice},model:{value:e.form.bureau,callback:function(t){e.$set(e.form,"bureau","string"===typeof t?t.trim():t)},expression:"form.bureau"}})],1),r("el-form-item",{staticClass:"departCode",attrs:{label:"單位代碼:",prop:"departCode"}},[r("el-input",{model:{value:e.form.departCode,callback:function(t){e.$set(e.form,"departCode","string"===typeof t?t.trim():t)},expression:"form.departCode"}})],1),r("el-form-item",{staticClass:"departName",attrs:{label:"單位名稱:",prop:"departName"}},[r("el-input",{model:{value:e.form.departName,callback:function(t){e.$set(e.form,"departName",t)},expression:"form.departName"}})],1)],1)],1),r("div",{staticClass:"formRight"},[r("el-form",{ref:"formTwo",attrs:{"status-icon":"",model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{staticClass:"corporate",attrs:{label:"交易法人:",prop:"corporate"}},[r("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchLegalList},on:{select:e.handleSelectLegal},model:{value:e.form.corporate,callback:function(t){e.$set(e.form,"corporate","string"===typeof t?t.trim():t)},expression:"form.corporate"}})],1),r("el-form-item",{staticClass:"costCode",attrs:{label:"費用代碼:",prop:"costCode"}},[r("el-input",{model:{value:e.form.costCode,callback:function(t){e.$set(e.form,"costCode","string"===typeof t?t.trim():t)},expression:"form.costCode"}})],1),"send"!=e.category?r("el-form-item",{staticClass:"processRange",attrs:{label:"加工範圍:",prop:"processRange"}},[r("el-select",{attrs:{multiple:"",placeholder:"請選擇加工範圍"},nativeOn:{click:function(t){return e.getRange(t)}},model:{value:e.form.processRange,callback:function(t){e.$set(e.form,"processRange",t)},expression:"form.processRange"}},e._l(e.rangeOptions,(function(e){return r("el-option",{key:e.pkid,attrs:{label:e.name,value:e.name}})})),1)],1):e._e(),r("el-form-item",{staticClass:"manager",attrs:{label:"業務窗口:",prop:"manager"}},[r("el-input",{model:{value:e.form.manager,callback:function(t){e.$set(e.form,"manager","string"===typeof t?t.trim():t)},expression:"form.manager"}})],1),r("el-form-item",{staticClass:"tel",attrs:{label:"固定電話:",prop:"tel"}},[r("el-input",{attrs:{placeholder:"廠區內電話"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel","string"===typeof t?t.trim():t)},expression:"form.tel"}})],1),r("el-form-item",{staticClass:"tel",attrs:{label:"移動電話:",prop:"mobile"}},[r("el-input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile","string"===typeof t?t.trim():t)},expression:"form.mobile"}})],1),r("el-form-item",{staticClass:"email",attrs:{label:"公司郵箱:",prop:"email"}},[r("el-input",{attrs:{placeholder:"請輸入內部Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{staticClass:"intro",attrs:{label:"簡介:",prop:"intro"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.intro,callback:function(t){e.$set(e.form,"intro",t)},expression:"form.intro"}})],1)],1)],1)]),r("div",{staticClass:"form_chooseBtn",on:{click:function(t){return e.submit("formOne","formTwo")}}},[r("router-link",{attrs:{to:""}},[r("svg",{attrs:{width:"265px",height:"65px",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("polygon",{staticStyle:{fill:"none",stroke:"#0096FF","stroke-width":"1"},attrs:{points:"0,5 5,0 260,0 265,5 265,60 260,65 5,65 0,60 0,5"}}),r("rect",{staticStyle:{fill:"#0096FF"},attrs:{x:"2",y:"2",width:"261",height:"61"}}),r("polyline",{staticStyle:{fill:"none",stroke:"#3FB0FF","stroke-width":"2"},attrs:{points:"10,13 10,6 6,6 6,10 13,10 13,6 252,6 252,10 259,10 259,6 255,6 255,13 259,13 259,52 255,52 255,59 259,59 259,55 252,55 252,59 13,59 13,55 6,55 6,59 10,59 10,52 6,52 6,14 11,14"}})]),r("span",[e._v("提交審核")])])],1)])])]),r("Footer")],1)},n=[],a=(r("ac4d"),r("8a81"),r("ac6a"),r("7f7f"),r("e9c9")),i=r("2241"),s=r("fd2d"),l=r("c0e7"),c=r("3f5e"),f={data:function(){var e=this,t=function(t,r,o){""===r?o(new Error("請再次輸入密碼")):r!==e.form.psd?o(new Error("兩次輸入密碼不一致!")):o()},o=function(t,r,o){""===r?o(new Error("请輸入名稱")):r.length<4||r.length>16?o(new Error("長度在 4 到 16 個字符")):e.ck_user(e.form.name,o)};return{form:{logoUrl:r("0519"),name:"",psd:"",conpsd:"",factory:"",group:"富士康次集團",bussiness:"",currentBussiness:"",bureau:"",departName:"",departCode:"",corporate:"",costCode:"",processRange:[],manager:"",tel:"",mobile:"",email:"",intro:""},rules:{name:[{required:!0,validator:o,trigger:"blur"}],psd:[{required:!0,message:"请输入密碼",trigger:"blur"},{min:4,max:16,message:"密碼長度為4-16"}],conpsd:[{required:!0,validator:t,trigger:"blur"}],factory:[{required:!0,message:"请選擇廠區",trigger:"change"}],group:[{required:!0,message:"请輸入次集團",trigger:"change"}],bussiness:[{required:!0,message:"请選擇事業群",trigger:"change"}],bureau:[{required:!0,message:"请選擇事業群",trigger:"change"}],departCode:[{required:!0,message:"單位代碼不能為空",trigger:"blur"}],departName:[{required:!0,message:"单位名称不能為空",trigger:"blur"}],corporate:[{required:!0,message:"交易法人不能為空",trigger:"blur"}],costCode:[{required:!0,message:"費用代碼不能為空",trigger:"blur"}],processRange:[{required:!0,message:"加工範圍不能為空",trigger:"blur"}],manager:[{required:!0,message:"業務窗口不能為空",trigger:"blur"}],tel:[{required:!0,message:"號碼不能为空",trigger:"blur"}],mobile:[{required:!0,message:"號碼不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能為空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],intro:[{max:100,message:"最長100個字符",trigger:"blur"}]},rangeOptions:[],category:"",factory_list:[],SECN_CMPY_list:[],ENTRPS_GROUP_list:[],PD_OFFICE_list:[],user_pic_file:null}},created:function(){var e=sessionStorage.getItem("merchangtCategory");e?this.category=e:this.$router.push("/merchant"),this._query_ENTRPS_GROUP_list()},methods:{querySearchLegalList:function(e,t){if(""==e)return t([]);var r={legal_person:e};Object(l["b"])(r).then((function(e){if("1"===e.code){if(e.t.length<=0)return t([{value:"暫無數據"}]);var r=e.t,o=[],n=!0,a=!1,i=void 0;try{for(var s,l=r[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var c=s.value,f={value:c.legal_person,pkid:c.pkid};o.push(f)}}catch(u){a=!0,i=u}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}t(o)}else t([{value:"無數據"}])}))},handleSelectLegal:function(){},queryDeptName:function(){var e=this;if(!this.form.factory)return this.$message.error("請先選擇廠區！");this.form.departCode=this.form.departCode.toUpperCase(),Object(l["h"])(this.form.departCode,this.form.factory).then((function(t){"1"===t.code?e.form.departName=t.t.dept_name:(e.form.departName="",e.$message.error("查詢失敗，請檢查單位代碼輸入正確！"))}))},getRange:function(){var e=this;Object(l["j"])().then((function(t){"1"===t.code?e.rangeOptions=t.t:e.$message.error(t.msg)}))},upImg:function(){this.$refs.fileInp.dispatchEvent(new MouseEvent("click"))},getFile:function(){var e=this,t=this.$refs.fileInp.files[0],r=window.URL||window.webkitURL;if(t){if("image/jpeg"!==t.type&&"image/png"!==t.type&&"image/gif"!==t.type)return void alert("請上傳圖片文件");var o=r.createObjectURL(t);this.form.logoUrl=o;var n=new FormData;n.append("file",t),n.append("file_type","user_pic"),Object(c["d"])(n).then((function(t){"1"===t.code?e.user_pic_file=t.t:e.$message.error(t.msg)}))}},ck_user:function(e,t){var r={username:e};Object(l["a"])(r).then((function(e){"0"==e.code?t(new Error("賬戶已存在!")):t()}))},_query_factory_list:function(){var e=this;Object(l["i"])().then((function(t){"1"===t.code?e.factory_list=t.t:e.$message.error(t.msg)}))},_query_SECN_CMPY_list:function(){},_query_ENTRPS_GROUP_list:function(){var e=this,t="";t="Foxconn",Object(l["c"])(t).then((function(t){"1"===t.code?(e.ENTRPS_GROUP_list=t.t,e._query_PD_OFFICE_list()):e.$message.error(t.msg)}))},querySearchGroup:function(e,t){var r=[];if(this.ENTRPS_GROUP_list.length>0){var o=!0,n=!1,a=void 0;try{for(var i,s=this.ENTRPS_GROUP_list[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var l=i.value,c={value:l.name,id:l.pkid};r.push(c)}}catch(f){n=!0,a=f}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}}t(r)},_query_PD_OFFICE_list:function(){var e=this,t="",r=!0,o=!1,n=void 0;try{for(var a,i=this.ENTRPS_GROUP_list[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;s.name==this.form.bussiness&&(t=s.pkid)}}catch(c){o=!0,n=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}if(!t)return this.PD_OFFICE_list=[];Object(l["d"])(t).then((function(t){"1"===t.code?e.PD_OFFICE_list=t.t:e.$message.error(t.msg)}))},querySearchOffice:function(e,t){var r=[];if(this.PD_OFFICE_list.length>0){var o=!0,n=!1,a=void 0;try{for(var i,s=this.PD_OFFICE_list[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var l=i.value,c={value:l.name,id:l.pkid};r.push(c)}}catch(f){n=!0,a=f}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}}t(r)},submit:function(e,t){var r=this;if(!this.category)return this.$message.error("請選擇賬號類型！");console.log(this.category),this.$refs[e].validate((function(e){if(!e)return!1;r.$refs[t].validate((function(e){if(!e)return!1;r.upload()}))}))},upload:function(){var e=this,t=[],r=!0,o=!1,n=void 0;try{for(var a,i=this.form.processRange[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;t.push({name:s})}}catch(f){o=!0,n=f}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}var c={username:this.form.name,password:this.$md5(this.form.psd),in_out_type:"in",send_recv_type:this.category,fctry_zone:this.form.factory,secn_cmpy:this.form.group,entrps_group:this.form.bussiness,pd_office:this.form.bureau,dept_name:this.form.departName,dept_code:this.form.departCode,legal_person:this.form.corporate,cost_code:this.form.costCode,bank_name:"",bank_acunt:"",busis_mngr:this.form.manager,tel:this.form.tel,phone:this.form.mobile,email:this.form.email,summary:this.form.intro,user_pic_file:this.user_pic_file,recv_range_list:t};Object(l["k"])(c).then((function(t){"1"===t.code?(e.$message.success("信息提交成功，請等待管理員審核！"),e.$router.push("/login")):e.$message.error(t.msg)}))}},components:{Top:a["a"],Logo:i["a"],Footer:s["a"]}},u=f,m=(r("3f50"),r("2877")),p=Object(m["a"])(u,o,n,!1,null,"94d96b28",null);t["default"]=p.exports},d4c0:function(e,t,r){var o=r("0d58"),n=r("2621"),a=r("52a7");e.exports=function(e){var t=o(e),r=n.f;if(r){var i,s=r(e),l=a.f,c=0;while(s.length>c)l.call(e,i=s[c++])&&t.push(i)}return t}}}]);
//# sourceMappingURL=chunk-ff21565c.11b2b0a2.js.map