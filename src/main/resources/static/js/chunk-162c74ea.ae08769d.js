(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-162c74ea"],{1169:function(t,e,i){var n=i("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"153f":function(t,e,i){t.exports=i.p+"img/winImg.cba78bee.png"},"1ca6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAk0lEQVQYV2NMyqufysDIkMWAH0xjDA0NZeaV1NrBwMjgglXtf4Y99y4xejKCJBMKGgSY/jOcYGD4r46i+D/DrX9MjOYLJjR8ACsEgbjsejUW5v8nGBgZBcEC//+/Z/7LaDF7auMtEBeuEMRJzqtz/s/IuAOs8N9fz3mTW/bADEJRCBJMLKjLZPrPxDh3YsM0ZGcAAGFyKfDeCywQAAAAAElFTkSuQmCC"},"2c4b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"chooseDetails"}},[n("div",{staticClass:"top"},[n("div",{staticClass:"back-btn"},[n("router-link",{attrs:{to:"/demand"}},[n("span"),t._v("\n        返回\n      ")])],1),n("div",{staticClass:"sort",staticStyle:{position:"relative"}},[n("div",{staticClass:"sort-btn",on:{click:function(e){t.sortFlag=!t.sortFlag}}},[n("span",[t._v("排序：")]),n("span",[t._v(t._s(t._f("sortNameFormat")(t.sortBy)))]),n("img",{attrs:{src:i("1ca6"),alt:""}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.sortFlag,expression:"sortFlag"}],staticClass:"classify-list"},t._l(t.classifyList,(function(e){return n("span",{key:e.id,class:{active:t.sortBy==e.val},on:{click:function(i){return t.selectClassfiy(e.val)}}},[t._v(t._s(e.name))])})),0),t.toEndTimeFlag&&"1"===t.billInfo.bill_status?n("button",{staticClass:"fail-btn",on:{click:t.faliBid}},[t._v("棄標")]):t._e()])]),t.billInfo?n("div",{staticClass:"title"},[n("div",{staticClass:"tit-text"},[t._v("\n      【模具】需求單號"+t._s(t.billInfo.bill_no)+" 需求量:"+t._s(t.billInfo.amount)+"\n      "),n("router-link",{staticClass:"title_btn",attrs:{to:"/particulars?pkid="+t.pkid}},[t._v("詳情")])],1),n("div",{staticClass:"tit-info"},[t._v("\n      我的報價: "+t._s(t.billInfo.total_price)+" "+t._s(t.billInfo.money_type)+"\n    ")]),n("div",{staticClass:"tit-info"},[t._v("發佈時間: "+t._s(t.billInfo.publish_date))]),n("div",{staticClass:"tit-unit"},[t._v("\n      當前項目投標單位數\n      "),n("span",[t._v(t._s(t.billInfo.give_recv_user_list?t.billInfo.give_recv_user_list.length:0))])])]):t._e(),t.give_price_list?n("table",{staticStyle:{width:"100%","text-align":"center","border-collapse":"collapse"}},[t._m(0),t._l(t.give_price_list,(function(e,r){return n("tr",{key:e.pkid},[n("td",[t._v(t._s(r+1+(t.currentPage-1)*t.pageSize))]),n("td",[n("router-link",{staticStyle:{color:"#0096ff"},attrs:{to:"/merchant/information?pkid="+e.recv_user.pkid}},[t._v(t._s(e.recv_user.dept_name))])],1),n("td",[t._v(t._s(e.total_price*t.billInfo.amount))]),n("td",[n("div",{staticClass:"detailList"},[n("span",[t._v(t._s(e.total_price))]),n("div",{staticClass:"showList",on:{click:function(i){return t.getSlavList(e)}}},[n("span"),t._v("\n            標書\n          ")])])]),n("td",[t._v(t._s(e.deliver_date.split(" ")[0]))]),n("td",[t._v(t._s(e.descp))]),"1"===t.billInfo.bill_status&&"Y"===e.f_valid?n("td",{class:t.toEndTimeFlag?"chooseToWin":"chooseToWinDisabled",on:{click:function(i){return t.chooseToWin(e.pkid,e.recv_user.dept_name,e.f_valid)}}},[t._v("\n        选为中标\n      ")]):"1"===t.billInfo.bill_status&&"N"===e.f_valid?n("td",[t._v("\n        報價過高\n      ")]):n("td",["Y"===e.f_win_bid?n("img",{attrs:{src:i("153f"),alt:""}}):t._e()])])})),0==t.give_price_list.length?n("tr",[n("td",{attrs:{colspan:"7"}},[t._v("暫無數據")])]):t._e()],2):t._e(),n("Paging",{attrs:{total:t.total,"current-page":t.currentPage,"page-size":t.pageSize},on:{getCurrentPage:t.getListDate}})],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",{staticStyle:{"min-width":"40px"}},[t._v("排名")]),i("th",{staticStyle:{"min-width":"160px"}},[t._v("單位")]),i("th",{staticStyle:{"min-width":"60px"}},[t._v("總報價")]),i("th",{staticStyle:{"min-width":"180px"}},[t._v("廠商報價")]),i("th",{staticStyle:{"min-width":"100px"}},[t._v("交期")]),i("th",{staticStyle:{"min-width":"140px"}},[t._v("備註")]),i("th",{staticStyle:{"min-width":"140px"}},[t._v("操作")])])}],a=(i("c5f6"),i("ac4d"),i("8a81"),i("ac6a"),i("def5")),s=i("f8b7"),o={data:function(){return{toEndTimeFlag:!1,sortItem:"",total:1,currentPage:1,pageSize:8,pkid:"",give_price_list:[],billInfo:{},slav_list:[],classifyList:[{id:1,name:"綜合排序",val:"complex"},{id:2,name:"價格優先",val:"price"},{id:3,name:"交期優先",val:"date"}],sortBy:"complex",sortFlag:!1,excelList:[],autoWidth:!0,bookType:"xlsx",filename:"",recvPkid:""}},methods:{faliBid:function(){var t=this;this.$confirm("此操作將“廢棄”此訂單，是否繼續？","警告",{confirmButtonText:"確認",cancelButtonText:"取消",type:"error"}).then((function(){var e=t.billInfo.pkid;Object(s["a"])(e).then((function(e){"1"===e.code?(t.$router.push("/demand"),t.$message({type:"success",message:"已棄標"})):t.$message.error(e.msg)}))})).catch((function(){t.$message({type:"info",message:"已取消"})}))},checkList:function(){sessionStorage.setItem("biddinfdDoc",JSON.stringify(this.billInfo)),sessionStorage.setItem("recvPkid",JSON.stringify(this.recvPkid));var t=this.$router.resolve({path:"/biddingDoc",query:{loaded:!0,pkid:this.pkid}});window.open(t.href,"_blank")},selectClassfiy:function(t){this.sortBy=t,this.sortFlag=!1},getSlavList:function(t){var e=t.pkid;this.recvPkid=t.recv_user_pkid,sessionStorage.setItem("deliverDate",JSON.stringify(t.deliver_date));var i=!0,n=!1,r=void 0;try{for(var a,s=this.give_price_list[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var o=a.value;if(o.pkid==e)return sessionStorage.setItem("slavList",JSON.stringify(o.slav_list)),this.checkList(),this.slav_list=o.slav_list,void this.getExcelList(o)}}catch(c){n=!0,r=c}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}},getTimeStatus:function(){var t=new Date(this.billInfo.bid_end_date),e=new Date;this.toEndTimeFlag=e>t},chooseToWin:function(t,e){var i=this;if(!this.toEndTimeFlag)return this.$alert("競標結束時間未到，不能選標！","警告",{confirmButtonText:"确定",callback:function(t){console.log(t)}});this.$confirm('请确认是否将 "'+e+'" 选为中标单位?',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){Object(s["v"])(t).then((function(t){"1"===t.code?(i.getBillInfo(),i.getListDate(Number(sessionStorage.getItem("demandDetailsCurrentPage"))),i.$message({type:"success",message:"成功!"})):i.$message.error(t.msg)}))})).catch((function(){i.$message({type:"info",message:"已取消"})}))},getListDate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=Number(e),sessionStorage.setItem("demandDetailsCurrentPage",this.currentPage);var i={bill_pkid:this.pkid,pageIndex:this.currentPage,pageSize:this.pageSize,sort_way:this.sortBy};Object(s["i"])(i).then((function(e){if("1"===e.code){t.give_price_list=[],t.total=e.t.row_total;var i=e.t.give_price_list;t.changeListData(i)}else t.$message.error(e.msg)}))},changeListData:function(t){var e=!0,i=!1,n=void 0;try{for(var r,a=t[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var s=r.value;this.give_price_list.push(s)}}catch(o){i=!0,n=o}finally{try{e||null==a.return||a.return()}finally{if(i)throw n}}},getBillInfo:function(){var t=this;Object(s["c"])(this.pkid).then((function(e){"1"===e.code?(t.billInfo=e.t,t.getTimeStatus()):t.$message.error(e.msg)}))},getExcelList:function(t){var e=[],i=1,n=!0,r=!1,a=void 0;try{for(var s,o=this.slav_list[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value,l={a:i,b:c.part_doc_file?c.part_doc_file.file_origin_name:"其它",c:c.part_name,d:c.part_amunt||0,e:c.part_unit_price||0,f:c.part_price_sum||0};i++,e.push(l)}}catch(g){r=!0,a=g}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}for(var f=t.recv_user,u=this.billInfo.send_user,d=this.billInfo,p=[{a:"",b:"",c:"",d:"",e:"",f:""},{a:"訂單信息：",b:"",c:"",d:"",e:"",f:""},{a:"交易類型",b:d.pd_type,c:"",d:"",e:"",f:""},{a:"交易法人",b:u.legal_person,c:"",d:"",e:"",f:""},{a:"交易地點",b:d.deliver_address,c:"",d:"",e:"",f:""},{a:"需求時間",b:d.deliver_date,c:"",d:"",e:"",f:""},{a:"交易幣別",b:d.money_type,c:"",d:"",e:"",f:""},{a:"",b:"",c:"",d:"",e:"",f:""},{a:"單位信息：",b:"",c:"",d:"",e:"",f:""},{a:"接單方",b:f.dept_name,c:"",d:"發單方(需求方)",e:u.dept_name,f:""},{a:"聯絡人",b:f.busis_mngr,c:"",d:"聯絡人",e:u.busis_mngr,f:""},{a:"移動電話",b:f.phone,c:"",d:"移動電話",e:u.phone,f:""},{a:"固定電話",b:f.tel,c:"",d:"固定電話",e:u.tel,f:""}],v=0,h=p;v<h.length;v++){var _=h[v];e.push(_)}this.excelList=e},exportExcel:function(){var t=this;i.e("chunk-5077da69").then(i.bind(null,"376b")).then((function(e){var i=["序號","零件名","零件名(接單方定義)","數量","單價("+t.billInfo.money_type+")","金額("+t.billInfo.money_type+")"],n=["a","b","c","d","e","f"],r=t.excelList,a=t.formatJson(n,r);e.export_json_to_excel({header:i,data:a,filename:t.billInfo.bill_no||"filename",autoWidth:t.autoWidth,bookType:t.bookType})}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}},components:{Paging:a["a"]},created:function(){this.pkid=this.$router.history.current.query.pkid;var t=Number(sessionStorage.getItem("demandDetailsCurrentPage"));t=t||1,this.getListDate(t),this.getBillInfo()},filters:{sortNameFormat:function(t){if(!t)return"";switch(t){case"complex":return"綜合排序";case"price":return"價格優先";case"date":return"時間優先"}}},watch:{sortBy:function(){this.getListDate()}},computed:{}},c=o,l=(i("3eab"),i("2877")),f=Object(l["a"])(c,n,r,!1,null,"142a2ec6",null);e["default"]=f.exports},"37c8":function(t,e,i){e.f=i("2b4c")},"3a72":function(t,e,i){var n=i("7726"),r=i("8378"),a=i("2d00"),s=i("37c8"),o=i("86cc").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:s.f(t)})}},"3eab":function(t,e,i){"use strict";var n=i("48d4"),r=i.n(n);r.a},"48d4":function(t,e,i){},"67ab":function(t,e,i){var n=i("ca5a")("meta"),r=i("d3f4"),a=i("69a8"),s=i("86cc").f,o=0,c=Object.isExtensible||function(){return!0},l=!i("79e5")((function(){return c(Object.preventExtensions({}))})),f=function(t){s(t,n,{value:{i:"O"+ ++o,w:{}}})},u=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[n].i},d=function(t,e){if(!a(t,n)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[n].w},p=function(t){return l&&v.NEED&&c(t)&&!a(t,n)&&f(t),t},v=t.exports={KEY:n,NEED:!1,fastKey:u,getWeak:d,onFreeze:p}},"7bbc":function(t,e,i){var n=i("6821"),r=i("9093").f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==a.call(t)?o(t):r(n(t))}},"8a81":function(t,e,i){"use strict";var n=i("7726"),r=i("69a8"),a=i("9e1e"),s=i("5ca1"),o=i("2aba"),c=i("67ab").KEY,l=i("79e5"),f=i("5537"),u=i("7f20"),d=i("ca5a"),p=i("2b4c"),v=i("37c8"),h=i("3a72"),_=i("d4c0"),g=i("1169"),b=i("cb7c"),m=i("d3f4"),y=i("4bf8"),S=i("6821"),w=i("6a99"),k=i("4630"),x=i("2aeb"),I=i("7bbc"),A=i("11e9"),O=i("2621"),E=i("86cc"),C=i("0d58"),D=A.f,P=E.f,j=I.f,L=n.Symbol,N=n.JSON,F=N&&N.stringify,T="prototype",B=p("_hidden"),J=p("toPrimitive"),$={}.propertyIsEnumerable,W=f("symbol-registry"),M=f("symbols"),Y=f("op-symbols"),z=Object[T],G="function"==typeof L&&!!O.f,K=n.QObject,Q=!K||!K[T]||!K[T].findChild,Z=a&&l((function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=D(z,e);n&&delete z[e],P(t,e,i),n&&t!==z&&P(z,e,n)}:P,q=function(t){var e=M[t]=x(L[T]);return e._k=t,e},R=G&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},V=function(t,e,i){return t===z&&V(Y,e,i),b(t),e=w(e,!0),b(i),r(M,e)?(i.enumerable?(r(t,B)&&t[B][e]&&(t[B][e]=!1),i=x(i,{enumerable:k(0,!1)})):(r(t,B)||P(t,B,k(1,{})),t[B][e]=!0),Z(t,e,i)):P(t,e,i)},U=function(t,e){b(t);var i,n=_(e=S(e)),r=0,a=n.length;while(a>r)V(t,i=n[r++],e[i]);return t},X=function(t,e){return void 0===e?x(t):U(x(t),e)},H=function(t){var e=$.call(this,t=w(t,!0));return!(this===z&&r(M,t)&&!r(Y,t))&&(!(e||!r(this,t)||!r(M,t)||r(this,B)&&this[B][t])||e)},tt=function(t,e){if(t=S(t),e=w(e,!0),t!==z||!r(M,e)||r(Y,e)){var i=D(t,e);return!i||!r(M,e)||r(t,B)&&t[B][e]||(i.enumerable=!0),i}},et=function(t){var e,i=j(S(t)),n=[],a=0;while(i.length>a)r(M,e=i[a++])||e==B||e==c||n.push(e);return n},it=function(t){var e,i=t===z,n=j(i?Y:S(t)),a=[],s=0;while(n.length>s)!r(M,e=n[s++])||i&&!r(z,e)||a.push(M[e]);return a};G||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(i){this===z&&e.call(Y,i),r(this,B)&&r(this[B],t)&&(this[B][t]=!1),Z(this,t,k(1,i))};return a&&Q&&Z(z,t,{configurable:!0,set:e}),q(t)},o(L[T],"toString",(function(){return this._k})),A.f=tt,E.f=V,i("9093").f=I.f=et,i("52a7").f=H,O.f=it,a&&!i("2d00")&&o(z,"propertyIsEnumerable",H,!0),v.f=function(t){return q(p(t))}),s(s.G+s.W+s.F*!G,{Symbol:L});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)p(nt[rt++]);for(var at=C(p.store),st=0;at.length>st;)h(at[st++]);s(s.S+s.F*!G,"Symbol",{for:function(t){return r(W,t+="")?W[t]:W[t]=L(t)},keyFor:function(t){if(!R(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),s(s.S+s.F*!G,"Object",{create:X,defineProperty:V,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:it});var ot=l((function(){O.f(1)}));s(s.S+s.F*ot,"Object",{getOwnPropertySymbols:function(t){return O.f(y(t))}}),N&&s(s.S+s.F*(!G||l((function(){var t=L();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))),"JSON",{stringify:function(t){var e,i,n=[t],r=1;while(arguments.length>r)n.push(arguments[r++]);if(i=e=n[1],(m(e)||void 0!==t)&&!R(t))return g(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!R(e))return e}),n[1]=e,F.apply(N,n)}}),L[T][J]||i("32e9")(L[T],J,L[T].valueOf),u(L,"Symbol"),u(Math,"Math",!0),u(n.JSON,"JSON",!0)},ac4d:function(t,e,i){i("3a72")("asyncIterator")},d4c0:function(t,e,i){var n=i("0d58"),r=i("2621"),a=i("52a7");t.exports=function(t){var e=n(t),i=r.f;if(i){var s,o=i(t),c=a.f,l=0;while(o.length>l)c.call(t,s=o[l++])&&e.push(s)}return e}}}]);
//# sourceMappingURL=chunk-162c74ea.ae08769d.js.map