(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7a5d9e78"], {
    "056c": function (t, s, e) {
    }, "39e7": function (t, s, e) {
        "use strict";
        e.r(s);
        var a = function () {
            var t = this, s = t.$createElement, a = t._self._c || s;
            return a("div", {attrs: {id: "main"}}, [t._m(0), a("div", {staticClass: "project"}, [a("div", {staticClass: "title"}, [t._v("我的項目")]), a("div", {staticClass: "details"}, [a("el-radio-group", {
                model: {
                    value: t.classify,
                    callback: function (s) {
                        t.classify = s
                    },
                    expression: "classify"
                }
            }, t._l(t.classifyList, (function (s) {
                return a("el-radio", {
                    key: s.id, attrs: {label: s.ename}, on: {
                        click: function (e) {
                            t.classify = s.ename
                        }
                    }
                }, [t._v("\n          " + t._s(s.name) + "\n          "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: s.num,
                        expression: "item.num"
                    }]
                }, [t._v("(" + t._s(s.num) + ")")])])
            })), 1), a("div", t._l(t.orderList, (function (s, i) {
                return a("div", {
                    key: s.pkid,
                    staticClass: "orderList"
                }, [a("div", {staticClass: "list_left"}, [a("div", {staticClass: "left_info1"}, [a("div", [a("span", {staticClass: "price"}, [t._v(t._s(s.money_type) + t._s(s.total_price))]), a("router-link", {attrs: {to: "/particulars?pkid=" + s.pkid}}, [a("span", {staticClass: "orderNumber"}, [t._v("【" + t._s(s.pd_type) + "】需求單號：" + t._s(s.bill_no))])])], 1), s.publish_date ? a("div", {staticClass: "startTime"}, [t._v("發佈時間：" + t._s(s.publish_date))]) : t._e()]), a("div", {staticClass: "left_info2"}, [a("div", {staticClass: "unitNumber"}, [t._v(t._s(s.unitNumber || 0) + "個單位已參與")])])]), a("div", {staticClass: "list_right"}, [a("div", [s.winUnit ? a("div", {staticClass: "winUnit"}, [t._v("中標單位：" + t._s(s.winUnit || ""))]) : a("div", {staticClass: "restTime"}, [t._v("竞标结束时间：" + t._s(s.restTime))])]), a("div", {staticClass: "right_info"}, [a("div", {
                    staticClass: "status",
                    class: s.statusClass
                }, [t._v(t._s(s.status))]), a("div", {
                    staticClass: "operation", on: {
                        click: function (e) {
                            s.dropDownFlag = !s.dropDownFlag, t.getDropItem(s.statusClass, i)
                        }
                    }
                }, [t._v("\n                操作\n                "), a("img", {
                    attrs: {
                        src: e("c2b2"),
                        alt: ""
                    }
                }), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: s.dropDownFlag && s.operationList.length,
                        expression: "item.dropDownFlag && item.operationList.length"
                    }], staticClass: "dropDown"
                }, t._l(s.operationList, (function (e) {
                    return a("span", {
                        key: e.id, on: {
                            click: function (a) {
                                return t.handleOperation(e.to, s.pkid)
                            }
                        }
                    }, [t._v(t._s(e.text))])
                })), 0)])])])])
            })), 0), a("div", {staticClass: "paging"}, [a("Paging", {
                attrs: {
                    total: t.total,
                    "current-page": t.currentPage,
                    "page-size": t.pageSize
                }, on: {getCurrentPage: t.getListDate}
            })], 1)], 1)])])
        }, i = [function () {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "assignment",
                staticStyle: {display: "none"}
            }, [e("div", {staticClass: "title"}, [t._v("我的任務")]), e("div", {staticClass: "details"}, [e("div", {staticClass: "single"}, [e("span", {staticClass: "singleTit"}, [t._v("待签核")]), e("span", {staticClass: "singleCon"}, [t._v("【0】")])]), e("div", {staticClass: "single"}, [e("span", {staticClass: "singleTit"}, [t._v("待选标")]), e("span", {
                staticClass: "singleCon",
                staticStyle: {color: "#E51313"}
            }, [t._v("【1】")])]), e("div", {staticClass: "single"}, [e("span", {staticClass: "singleTit"}, [t._v("待收货")]), e("span", {
                staticClass: "singleCon",
                staticStyle: {color: "#E51313"}
            }, [t._v("【2】")])]), e("div", {staticClass: "single"}, [e("span", {staticClass: "singleTit"}, [t._v("新动态")]), e("span", {
                staticClass: "singleCon",
                staticStyle: {color: "#E51313"}
            }, [t._v("【17】")])])])])
        }], n = (e("28a5"), e("c5f6"), e("def5")), l = e("f8b7"), c = {
            data: function () {
                return {
                    classify: "all",
                    classifyList: [{id: "0", ename: "all", name: "全部", num: ""}, {
                        id: "1",
                        ename: "0",
                        name: "待發佈",
                        num: ""
                    }, {id: "2", ename: "1", name: "待報價", num: ""}, {
                        id: "3",
                        ename: "2",
                        name: "待發貨",
                        num: ""
                    }, {id: "4", ename: "3", name: "待收貨", num: ""}, {
                        id: "5",
                        ename: "4",
                        name: "待付款",
                        num: ""
                    }, {id: "6", ename: "5", name: "待收款", num: ""}, {id: "7", ename: "6", name: "已完成", num: ""}],
                    dropDownFlag: !1,
                    orderList: [],
                    operationList: [{
                        id: "1",
                        status: "publish",
                        text: "操作",
                        child: [{id: "1", text: "修改", to: "change"}, {id: "2", text: "取消", to: "cancel"}]
                    }, {
                        id: "2",
                        status: "quote",
                        text: "操作",
                        child: [{id: "1", text: "查看", to: "show"}, {id: "2", text: "取消", to: "cancel"}]
                    }, {
                        id: "3",
                        status: "deliver",
                        text: "操作",
                        child: [{id: "1", text: "查看", to: "show"}, {id: "2", text: "取消", to: "cancel"}]
                    }, {
                        id: "4",
                        status: "takeDeliver",
                        text: "操作",
                        child: [{id: "1", text: "確認收貨", to: "take"}, {id: "2", text: "查看", to: "show"}, {
                            id: "3",
                            text: "取消",
                            to: "cancel"
                        }]
                    }, {
                        id: "5",
                        status: "payment",
                        text: "操作",
                        child: [{id: "1", text: "付款", to: "pay"}, {id: "2", text: "查看", to: "show"}, {
                            id: "3",
                            text: "取消",
                            to: "cancel"
                        }]
                    }, {
                        id: "6",
                        status: "gather",
                        text: "待收款",
                        child: [{id: "1", text: "查看", to: "show"}, {id: "2", text: "取消", to: "cancel"}]
                    }, {
                        id: "7",
                        status: "finished",
                        text: "已完成",
                        child: [{id: "1", text: "查看", to: "show"}, {id: "2", text: "取消", to: "cancel"}]
                    }, {
                        id: "8",
                        status: "remainEvaluate",
                        text: "已完成",
                        child: [{id: "1", text: "評價", to: "postEva"}, {id: "2", text: "查看", to: "show"}, {
                            id: "3",
                            text: "取消",
                            to: "cancel"
                        }]
                    }],
                    currentPage: 1,
                    pageSize: 10,
                    total: 1,
                    initPage: 1
                }
            }, methods: {
                handleOperation: function (t, s) {
                    console.log(t, s);
                    var e = {pkid: s, bill_status: ""};
                    switch (t) {
                        case"change":
                            this.$router.push("/demand/publish?pkid=" + s);
                            break;
                        case"postEva":
                            this.$router.push("/demand/postEva?pkid=" + s);
                            break;
                        case"take":
                            e.bill_status = 4, this.updataStatus(e);
                            break;
                        case"pay":
                            e.bill_status = 5, this.updataStatus(e);
                            break;
                        case"show":
                            this.$router.push("/demand/chooseDetails?pkid=" + s);
                            break;
                        case"cancel":
                            break
                    }
                }, updataStatus: function (t) {
                    var s = this;
                    Object(l["v"])(t).then((function (t) {
                        console.log(t), "1" === t.code ? s.getListDate(s.currentPage) : s.$message.error("出錯啦，稍後再試試吧")
                    }))
                }, getDropItem: function (t, s) {
                    for (var e in this.operationList) this.operationList[e].status == t && (this.orderList[s].operationList = this.operationList[e].child)
                }, getListDate: function () {
                    var t = this, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.currentPage = Number(s), sessionStorage.setItem("demandMainCurrentPage", this.currentPage), console.log(), Object(l["e"])(this.classify, this.currentPage, this.pageSize).then((function (s) {
                        if ("1" === s.code) {
                            t.orderList = [], t.total = s.t.row_total;
                            var e = s.t.bill_list;
                            t.changeListData(e)
                        }
                    }))
                }, changeListData: function (t) {
                    for (var s in t) {
                        var e = "", a = "";
                        switch (t[s].bill_status) {
                            case"0":
                                e = "待發佈", a = "publish";
                                break;
                            case"1":
                                e = "待報價", a = "quote";
                                break;
                            case"2":
                                e = "待發貨", a = "deliver";
                                break;
                            case"3":
                                e = "待收貨", a = "takeDeliver";
                                break;
                            case"4":
                                e = "待付款", a = "payment";
                                break;
                            case"5":
                                e = "待收款", a = "gather";
                                break;
                            case"6":
                                if ("N" === t[s].f_send_eval) {
                                    e = "待評價", a = "remainEvaluate";
                                    break
                                }
                                e = "已完成", a = "finished";
                                break;
                            default:
                                break
                        }
                        var i = {
                            pkid: t[s].pkid,
                            total_price: t[s].total_price,
                            pd_type: t[s].pd_type,
                            bill_no: t[s].bill_no,
                            publish_date: t[s].publish_date ? t[s].publish_date.split("T")[0] : "",
                            unitNumber: t[s].recv_user_num,
                            browseNumber: "295",
                            collectNumber: "67",
                            winUnit: t[s].recv_user ? t[s].recv_user.dept_name : "",
                            restTime: t[s].bid_end_date ? t[s].bid_end_date.split("T")[0] : "",
                            status: e,
                            statusClass: a,
                            money_type: "RMB" == t[s].money_type ? "￥" : "$",
                            dropDownFlag: !1
                        };
                        this.orderList.push(i)
                    }
                }, getListClassifyNum: function () {
                    var t = this;
                    Object(l["n"])().then((function (s) {
                        if ("1" === s.code) {
                            var e = s.t;
                            for (var a in t.classifyList) switch (t.classifyList[a].ename) {
                                case"all":
                                    t.classifyList[a].num = e.num_status_all;
                                    break;
                                case"0":
                                    t.classifyList[a].num = e.num_status_0;
                                    break;
                                case"1":
                                    t.classifyList[a].num = e.num_status_1;
                                    break;
                                case"2":
                                    t.classifyList[a].num = e.num_status_2;
                                    break;
                                case"3":
                                    t.classifyList[a].num = e.num_status_3;
                                    break;
                                case"4":
                                    t.classifyList[a].num = e.num_status_4;
                                    break;
                                case"5":
                                    t.classifyList[a].num = e.num_status_5;
                                    break;
                                case"6":
                                    t.classifyList[a].num = e.num_status_6;
                                    break;
                                case"no_send_eval":
                                    t.classifyList[a].num = e.num_no_send_eval;
                                    break;
                                default:
                                    break
                            }
                        }
                    }))
                }
            }, created: function () {
                this.getListClassifyNum();
                var t = Number(sessionStorage.getItem("demandMainCurrentPage")),
                    s = sessionStorage.getItem("demandMainCurrentClassify");
                this.currentPage = t || 1, s && "all" !== s ? (this.initPage = this.currentPage, this.classify = s) : this.getListDate(this.currentPage)
            }, components: {Paging: n["a"]}, computed: {}, watch: {
                classify: function () {
                    sessionStorage.setItem("demandMainCurrentClassify", this.classify), 1 == this.initPage ? this.getListDate() : (this.getListDate(this.initPage), this.initPage = 1)
                }
            }
        }, r = c, o = (e("8021"), e("2877")), d = Object(o["a"])(r, a, i, !1, null, "d2d59dee", null);
        s["default"] = d.exports
    }, 8021: function (t, s, e) {
        "use strict";
        var a = e("056c"), i = e.n(a);
        i.a
    }, c2b2: function (t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAlElEQVQYV2O8fO/5VAZGhiwGfOA/wzTG////M195+HwHw39GF6xqGRn3vLl/3ZMRJHn+/nsBFoYfJxgYGNSRFf/////WX0ZOc0NFwQ9ghSBw4e4TNWYmZpBiQajQ+7//WCwMlEVvgfhwhSDOxYcvnJn+/t8BYv///89TT1l6D8wgFIUgwcv3n2cyMjIw6ihITkN2BgDvxDF1vcI+PgAAAABJRU5ErkJggg=="
    }
}]);
//# sourceMappingURL=chunk-7a5d9e78.a1abb5e2.js.map