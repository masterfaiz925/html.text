import {
    _ as V,
    K as mt,
    P as rt,
    J as Q,
    X as dn,
    r as v,
    a2 as H,
    a3 as Ht,
    o as n,
    j as a,
    l as t,
    a4 as S,
    a5 as A,
    aa as yt,
    ak as Zt,
    a6 as N,
    a1 as w,
    a0 as e,
    H as u,
    $ as me,
    a9 as M,
    aj as yi,
    A as Tt,
    a8 as E,
    ae as tt,
    a7 as D,
    af as Ct,
    ag as Nt,
    ar as zo,
    as as sa,
    D as pn,
    ac as be,
    G as Pt,
    B as Jt,
    Y as Bo,
    N as Ve,
    C as he,
    at as Io,
    au as So,
    av as xo,
    am as cn,
    I as Kt,
    aw as Ro,
    T as Go,
    ax as la,
    Q as gn,
    ay as Ao,
    q as pe,
    az as Mo,
    aA as Po,
    ab as ca,
    F as se,
    n as Dt,
    O as bn,
    aq as _e,
    k as Ri,
    aB as ve,
    aC as je,
    aD as Xe,
    ap as Do,
    aE as Oo,
    aF as Eo,
    aG as ra,
    aH as qo,
    aI as jo,
    aJ as Ho,
    aK as Wo,
    aL as Fo,
    an as ki,
    ao as fi
} from "./modules-7f822252.js";
import {
    G as Te,
    _ as U,
    S as He,
    h as ge,
    i as $i,
    j as di,
    g as Xt,
    A as at,
    k as ua,
    l as wi,
    m as Vo,
    n as Bt,
    o as Uo,
    p as pi,
    r as da,
    q as Ko,
    s as Xo,
    t as pa,
    v as Qo,
    a as Gi,
    w as rn,
    L as ga,
    x as Yo,
    y as Zo,
    z as Jo,
    B as un,
    C as ts,
    E as es,
    F as is,
    H as Ce,
    I as Ne,
    J as Ai,
    K as ba,
    M as ma,
    O as mn,
    P as ns,
    Q as as,
    R as os,
    T as ss,
    U as ls,
    V as cs,
    W as rs,
    X as us,
    Y as ds,
    D as xe,
    Z as Fe,
    $ as re,
    a0 as Pe,
    a1 as te,
    a2 as ps,
    a3 as _a,
    a4 as va,
    a5 as gs,
    a6 as bs,
    a7 as ha,
    a8 as ms,
    a9 as _s,
    aa as vs,
    ab as ka,
    ac as fa,
    ad as _n,
    ae as vn,
    af as hs,
    ag as ks,
    ah as fs,
    ai as ya,
    aj as $a,
    ak as ys,
    al as hn,
    am as $s,
    an as ws,
    ao as Ts,
    ap as wa,
    aq as Cs,
    ar as Ta,
    as as Ns,
    at as Ls,
    au as Ca,
    av as Na,
    aw as zs,
    ax as Bs,
    ay as Is,
    az as Ss,
    aA as xs,
    aB as Ii,
    aC as $e,
    aD as we,
    aE as Qn,
    aF as Yn,
    aG as Rs,
    aH as La,
    aI as za,
    aJ as Gs,
    aK as As,
    aL as Ms,
    aM as Ba,
    aN as Ps,
    aO as Ds,
    aP as Os,
    aQ as Ia,
    aR as Es,
    aS as qs,
    aT as js,
    aU as Hs,
    u as Ws,
    aV as Fs,
    aW as Vs,
    aX as Us,
    aY as Ks,
    aZ as Xs,
    a_ as Qs
} from "./page-activity-730ec554.js";
const Ys = {
        moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
        redNum: /^([1-9]\d{0,2}|1000)$/,
        requiredNum: /^.{0,20}$/,
        passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
        passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
        outmoneypwd: /^\d{6}$/,
        name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
        tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
        yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
        httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
        password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
        account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
        email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
        email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        length1: /^.{6,30}$/,
        phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
        moneys21: /^\d{1,4}(\.\d{1,2})?$/,
        ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
        int: /^[1-9]\d*$/,
        verifyname: /[^a-zA-Z\s+$]/g,
        inputrule: /^[0-9,|]+$/
    },
    Zs = {
        moneyup: "validateDesc1",
        redNum: "validateDesc2",
        requiredNum: "validateDesc3",
        passReg2: "pswRequirements",
        outmoneypwd: "validateDesc5",
        name: "validateDesc6",
        tuiName: "validateDesc7",
        endSpace: "validateDesc8",
        yaoma: "validateDesc9",
        httpCheck: "validateDesc10",
        password: "validateDesc11",
        account: "validateDesc13",
        email: "validateDesc14",
        length1: "validateDesc15",
        phone: "validateDesc16",
        moneys2: "validateDesc17",
        moneys21: "validateDesc18",
        ip: "validateDesc19",
        int: "validateDesc20",
        verifyname: "validateDesc21",
        inputtip: "validateDesc22"
    },
    Js = {
        class: "settingPanel__container"
    },
    tl = {
        class: "settingPanel__container-items"
    },
    el = ["onClick"],
    il = {
        class: "settingPanel__container-items__title"
    },
    nl = {
        class: "settingPanel__container-items-right"
    },
    al = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), l = Te(), g = Q(() => l.userInfo);
            let m = dn("permission", null);
            m && (m = JSON.parse(m.value));
            const r = Q(() => g.value.isOpenChampion),
                c = v([{
                    name: "notification",
                    title: i("notifications"),
                    link: "Messages",
                    isopen: "1"
                }, {
                    name: "gifts",
                    title: i("giftExchange"),
                    link: "RedeemGift",
                    isopen: "1"
                }, {
                    name: "tournament",
                    title: i("cpsTip6"),
                    link: "MyCps",
                    isopen: r
                }, {
                    name: "productCode",
                    title: i("productOrder"),
                    link: "PointMall-MyOrders",
                    isopen: g.value.isOpenPointMall
                }, {
                    name: "myDraw",
                    title: i("MyLottery"),
                    link: "PointMall-MyLottery",
                    isopen: g.value.isOpenPointMall
                }, {
                    name: "statsIcon",
                    title: i("gameStatistics"),
                    link: "GameStats",
                    isopen: "1",
                    haspermission: 17
                }, {
                    name: "language",
                    title: i("switchLanguages"),
                    link: "Language",
                    isopen: "1"
                }]);

            function p(d) {
                o.push({
                    name: d.link
                })
            }
            return (d, _) => {
                const b = H("svg-icon"),
                    k = H("van-icon"),
                    T = Ht("haspermission");
                return n(), a("div", Js, [t("div", tl, [(n(!0), a(S, null, A(c.value, C => {
                    var h, y;
                    return yt((n(), a("div", {
                        key: C.title,
                        onClick: z => p(C),
                        class: "settingPanel__container-items__item ar-1px-b"
                    }, [t("div", il, [N(b, {
                        name: `${C.name}`
                    }, null, 8, ["name"]), w(" <img :src=\"getIcons('main', `${item.icon}`)\" /> "), t("span", null, e(C.title), 1)]), t("div", nl, [yt(t("h5", null, e((h = g.value) == null ? void 0 : h.unRead), 513), [
                        [Zt, C.name === "notification" && ((y = g.value) == null ? void 0 : y.unRead) > 0]
                    ]), yt(t("span", null, e(u(l).getLanguageName), 513), [
                        [Zt, C.name === "language"]
                    ]), N(k, {
                        name: "arrow",
                        color: "#666"
                    })])], 8, el)), [
                        [Zt, C.isopen == "1"],
                        [T, C.haspermission]
                    ])
                }), 128))])])
            }
        }
    });
const ol = U(al, [
        ["__scopeId", "data-v-a30d19b1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Main/SettingPanel/index.vue"]
    ]),
    sl = {
        class: "hot_container"
    },
    ll = {
        key: 0,
        class: "platform"
    },
    cl = {
        key: 0,
        class: "title"
    },
    rl = {
        class: "list"
    },
    ul = ["onClick"],
    dl = {
        class: "item"
    },
    pl = ["src", "data-img"],
    gl = {
        key: 0,
        class: "win-odds"
    },
    bl = {
        key: 0,
        class: "title"
    },
    ml = {
        class: "list"
    },
    _l = ["onClick"],
    vl = {
        class: "item"
    },
    hl = ["src", "data-img"],
    kl = {
        key: 0,
        class: "win-odds"
    },
    fl = V({
        __name: "HotGameItem",
        props: {
            platformList: {
                type: Array,
                required: !0
            },
            clicksTopList: {
                type: Array,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["onItemClick"],
        setup(s, {
            emit: i
        }) {
            const o = yi(() => $i(() =>
                    import ("./gameHot-a8693703.js"), ["assets/js/gameHot-a8693703.js", "assets/js/modules-7f822252.js", "assets/css/modules-5dd73da0.css", "assets/js/page-activity-730ec554.js", "assets/js/native/index-20830f47.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-dcf93ecc.css"])),
                l = yi(() => $i(() =>
                    import ("./gameRec-5f2ffa26.js"), ["assets/js/gameRec-5f2ffa26.js", "assets/js/modules-7f822252.js", "assets/css/modules-5dd73da0.css", "assets/js/page-activity-730ec554.js", "assets/js/native/index-20830f47.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-dcf93ecc.css"])),
                g = yi(() => $i(() =>
                    import ("./noticeBarHot-e7ebeecf.js"), ["assets/js/noticeBarHot-e7ebeecf.js", "assets/js/modules-7f822252.js", "assets/css/modules-5dd73da0.css", "assets/js/page-activity-730ec554.js", "assets/js/native/index-20830f47.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-dcf93ecc.css"])),
                m = He(),
                r = c => {
                    i("onItemClick", c)
                };
            return (c, p) => {
                var d, _;
                return n(), a("div", sl, [((d = c.platformList) == null ? void 0 : d.length) > 0 && !c.isAll ? (n(), a("div", ll, [c.isAll ? w("v-if", !0) : (n(), a("div", cl, [N(u(l), {
                    class: "gameRec"
                }), t("span", null, e(c.$t("platRecom")), 1)])), t("div", rl, [(n(!0), a(S, null, A(c.platformList, b => (n(), a("div", {
                    key: b.vendorId,
                    onClick: k => r(b)
                }, [t("div", dl, [N(u(o), {
                    class: "hot_bage"
                }), t("img", {
                    src: b.imgUrl,
                    alt: "",
                    "data-img": u(ge)("images", "avatar")
                }, null, 8, pl)]), u(m).isShowHotGameWinOdds ? (n(), a("div", gl, [t("span", null, e(c.$t("winOdds")), 1), t("span", null, e(b.winOdds) + "%", 1), t("div", {
                    class: "win-p",
                    style: me({
                        width: `${Math.min(b.winOdds,100)}%`
                    })
                }, null, 4)])) : w("v-if", !0)], 8, ul))), 128))])])) : w("v-if", !0), ((_ = c.platformList) == null ? void 0 : _.length) > 0 ? (n(), a("div", {
                    key: 1,
                    class: M(["popular", {
                        pupularAll: c.isAll
                    }])
                }, [c.isAll ? w("v-if", !0) : (n(), a("div", bl, [N(u(g), {
                    class: "hotGames"
                }), t("span", null, e(c.$t("hot")), 1)])), t("div", ml, [(n(!0), a(S, null, A(c.clicksTopList, b => (n(), a("div", {
                    key: b.vendorId,
                    onClick: k => r(b)
                }, [t("div", vl, [t("img", {
                    src: b.imgUrl,
                    alt: "",
                    "data-img": u(ge)("images", "avatar")
                }, null, 8, hl)]), u(m).isShowHotGameWinOdds ? (n(), a("div", kl, [t("span", null, e(c.$t("winOdds")), 1), t("span", null, e(b.winOdds) + "%", 1), t("div", {
                    class: "win-p",
                    style: me({
                        width: `${Math.min(b.winOdds,100)}%`
                    })
                }, null, 4)])) : w("v-if", !0)], 8, _l))), 128))])], 2)) : w("v-if", !0)])
            }
        }
    });
const yl = U(fl, [
        ["__scopeId", "data-v-d06787cb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/GameList/HotGameItem.vue"]
    ]),
    $l = ["onClick"],
    wl = V({
        __name: "OnlineGamesItem",
        props: {
            gameData: {
                type: Array,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            },
            gameType: {
                type: String,
                required: !0
            }
        },
        emits: ["onItemClick"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = Q(() => o.isAll ? o.gameData : o.gameData.length > 8 ? o.gameData.slice(0, 8) : o.gameData),
                g = m => {
                    i("onItemClick", m)
                };
            return Tt(() => {}), (m, r) => {
                const c = Ht("lazy");
                return n(), a("div", {
                    class: M(["minGame_container", {
                        all_game: m.isAll
                    }])
                }, [(n(!0), a(S, null, A(l.value, p => (n(), a("div", {
                    class: "onlineGamesItem",
                    key: p.gameID,
                    onClick: d => g(p)
                }, [yt((n(), a("img", {
                    class: M(m.gameType === "fish" ? "fish_img" : "min_game_img"),
                    key: p.gameID
                }, null, 2)), [
                    [c, p.img]
                ])], 8, $l))), 128))], 2)
            }
        }
    });
const Tl = U(wl, [
        ["__scopeId", "data-v-860d7030"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/GameList/OnlineGamesItem.vue"]
    ]),
    Cl = {
        class: "lottery_container"
    },
    Nl = ["onClick"],
    Ll = V({
        __name: "LotterySlotItem",
        props: {
            gameData: {
                type: Array,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), l = c => {
                if (c) {
                    let p = c;
                    switch (p) {
                        case "Trx Win Go":
                            p = "Trx Win";
                            break;
                        case "FXOSO":
                            p = i("FXOSO");
                        default:
                            p = p
                    }
                    return p
                }
                return ""
            }, g = c => {
                if (c) {
                    let p = [];
                    switch (c) {
                        case "Win Go":
                        case "Trx Win Go":
                            p = [i("lotteryHintStr1"), i("lotteryHintStr2")];
                            break;
                        case "5D":
                        case "K3":
                            p = [i("lotteryHintStr3"), i("lotteryHintStr4")];
                            break;
                        case "XOSO":
                        case "FXOSO":
                            p = [i("lotteryHintStr5"), i("lotteryHintStr6")];
                            break;
                        case "Bingo18":
                            p = [i("lotteryHintStr5"), i("lotteryHintStr6")];
                            break;
                        case "4D":
                            p = [i("lotteryHintStr7"), i("lotteryHintStr6")];
                            break;
                        default:
                            p = []
                    }
                    return p
                }
                return ""
            }, m = [{
                value: 1,
                path: "WinGo"
            }, {
                value: 3,
                path: "5D"
            }, {
                value: 2,
                path: "K3"
            }, {
                value: 4,
                path: "WinTrx"
            }, {
                value: 5,
                path: "XoSo"
            }, {
                value: 6,
                path: "XoSo"
            }, {
                value: 7,
                path: "Binguo"
            }, {
                value: 8,
                path: "4D"
            }], r = c => {
                o.push({
                    name: "AllLotteryGames-" + m[m.findIndex(p => p.value === c.id)].path,
                    query: {
                        id: c.id
                    }
                })
            };
            return (c, p) => {
                const d = Ht("lazy");
                return n(), a("div", Cl, [(n(!0), a(S, null, A(c.gameData, _ => (n(), a("div", {
                    class: "lotterySlotItem",
                    key: _.id,
                    onClick: b => r(_)
                }, [yt(t("img", null, null, 512), [
                    [d, _.categoryImg]
                ]), t("span", null, e(l(_.categoryCode)), 1), t("h4", null, [t("div", null, e(g(_.categoryCode)[0]), 1), t("div", null, e(g(_.categoryCode)[1]), 1)])], 8, Nl))), 128))])
            }
        }
    });
const zl = U(Ll, [
        ["__scopeId", "data-v-acaadf81"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/GameList/LotterySlotItem.vue"]
    ]),
    Bl = {
        class: "lotterySlotItem__container"
    },
    Il = {
        class: "title"
    },
    Sl = {
        class: "tit"
    },
    xl = {
        class: "game_img"
    },
    Rl = V({
        __name: "OtherGameItem",
        props: {
            info: {
                type: null,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            },
            gameType: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = mt(), o = {
                sport: i("sport"),
                video: i("live"),
                chess: i("chess")
            };
            return (l, g) => {
                const m = Ht("lazy");
                return n(), a("div", Bl, [t("div", Il, [t("div", Sl, e(o[l.gameType]), 1), w(' <div class="desc">{{ getArrayKey(rootConfig.gameAllName, info.slotsTypeID) }}</div> ')]), yt(t("img", xl, null, 512), [
                    [m, l.info.vendorImg]
                ])])
            }
        }
    });
const Gl = U(Rl, [
        ["__scopeId", "data-v-1153e4fd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/GameList/OtherGameItem.vue"]
    ]),
    Al = ["onClick"],
    Ml = {
        class: "gameImg"
    },
    Pl = V({
        __name: "ElectronicItem",
        props: {
            gameData: {
                type: Array,
                default: []
            },
            isAll: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["handleOpenGame"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = Q(() => o.isAll ? o.gameData : o.gameData.slice(0, 6)),
                g = m => {
                    i("handleOpenGame", m, "slot")
                };
            return Tt(() => {}), (m, r) => {
                const c = Ht("lazy");
                return n(), a("div", {
                    class: M(["onlineGamesItem__container", {
                        allGame: s.isAll
                    }])
                }, [(n(!0), a(S, null, A(l.value, p => (n(), a("div", {
                    key: p.slotsTypeID,
                    class: "item",
                    onClick: d => g(p)
                }, [yt(t("img", Ml, null, 512), [
                    [c, p.vendorImg]
                ]), w(' <van-image :src="getIcons(`home/dianzi/onlineSlot`, item.slotsName)" class="slot_img">\n				<template v-slot:error>加载失败</template>\n			</van-image> ')], 8, Al))), 128))], 2)
            }
        }
    });
const Dl = U(Pl, [
        ["__scopeId", "data-v-54337c48"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/GameList/ElectronicItem.vue"]
    ]),
    Ol = {
        alt: ""
    },
    El = V({
        __name: "ElectronicWinRate",
        setup(s) {
            const i = He(),
                o = Q(() => i.winRate.electronicWinRateImgUrl || ""),
                l = Q(() => !!(i.winRate.isShowElectronicWinRateExternalLink && o.value)),
                g = () => {
                    i.winRate.electronicWinRateExternalLink && window.open(i.winRate.electronicWinRateExternalLink)
                };
            return (m, r) => {
                const c = Ht("lazy");
                return l.value ? (n(), a("div", {
                    key: 0,
                    class: "WinRate",
                    onClick: g
                }, [yt(t("img", Ol, null, 512), [
                    [c, o.value]
                ])])) : w("v-if", !0)
            }
        }
    });
const Sa = U(El, [
        ["__scopeId", "data-v-0d36c546"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/GameList/ElectronicWinRate.vue"]
    ]),
    ql = {
        class: "slot_list"
    },
    jl = {
        class: "slot_title"
    },
    Hl = {
        class: "slot_img_box"
    },
    Wl = ["onClick"],
    Fl = ["onClick"],
    Vl = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                {
                    getSlotList: o,
                    homeState: l,
                    onItemClick: g
                } = di(),
                m = c => c.indexOf("_") === -1 ? c : c.split("_")[0],
                r = c => {
                    const p = l.allGameList.slot.find(d => d.slotsName === c.vendorCode);
                    sessionStorage.setItem("slotGamesList", JSON.stringify(l.allGameList.slot)), sessionStorage.setItem("gameType", JSON.stringify("slot")), sessionStorage.setItem("clickedItem", JSON.stringify(p)), i.push({
                        name: "AllOnlineGames"
                    })
                };
            return o(), (c, p) => {
                const d = H("svg-icon"),
                    _ = Ht("lazy");
                return n(), a("div", ql, [N(Sa), (n(!0), a(S, null, A(u(l).slotsGame, b => (n(), a("div", {
                    class: "slot_item",
                    key: b.vendorCode
                }, [t("div", jl, [w(`				<img :src="getIcons('home/slots', item.vendorCode)" alt="" />`), N(d, {
                    name: b.vendorCode
                }, null, 8, ["name"]), E(" " + e(m(b.vendorCode)) + e(c.$t("electric")), 1)]), t("div", Hl, [(n(!0), a(S, null, A(b.childList.slice(0, 6), k => yt((n(), a("img", {
                    key: k.gameID + b.vendorCode,
                    onClick: T => u(g)(k)
                }, null, 8, Wl)), [
                    [_, k.img]
                ])), 128))]), t("div", {
                    class: "all_slot",
                    onClick: () => r(b)
                }, e(c.$t("allGame")), 9, Fl)]))), 128))])
            }
        }
    });
const Ul = U(Vl, [
        ["__scopeId", "data-v-1b7d97f8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/Electronic/Slot/index.vue"]
    ]),
    Ti = s => (Ct("data-v-df3cc798"), s = s(), Nt(), s),
    Kl = Ti(() => t("div", {
        class: "skeleton_hot"
    }, [t("div", {
        class: "hot_tit"
    }), t("div", {
        class: "hot_list"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div")]), t("div", {
        class: "hot_tit"
    }), t("div", {
        class: "hot_list"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")])], -1)),
    Xl = Ti(() => t("div", {
        class: "skeleton_other"
    }, [t("div"), t("div"), t("div"), t("div")], -1)),
    Ql = {
        class: "otherGame"
    },
    Yl = Ti(() => t("div", {
        class: "skeleton_slot"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1)),
    Zl = Ti(() => t("div", {
        class: "skeleton_other"
    }, [t("div"), t("div"), t("div"), t("div")], -1)),
    Jl = Ti(() => t("div", {
        class: "skeleton_flash"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1)),
    tc = ["src"],
    ec = V({
        __name: "GameListGrid",
        props: {
            currentGame: {
                type: String,
                default: ""
            },
            isAll: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            const i = s,
                o = rt(),
                l = v(!0),
                g = Q(() => o.currentRoute.value.name !== "AllGames"),
                {
                    onItemClick: m,
                    getAllGame: r,
                    homeState: c
                } = di(),
                p = Q(() => JSON.parse(JSON.stringify(c.allGameList))),
                d = Q(() => i.currentGame === "popular" ? 1 : ["sport", "chess", "video"].includes(i.currentGame) ? 2 : i.currentGame === "lottery" ? 3 : i.currentGame === "slot" ? 4 : i.currentGame === "flash" || i.currentGame === "fish" ? 5 : -1),
                _ = async () => {
                    var y, z;
                    await r();
                    let h = p.value;
                    h.popular = [(y = p.value) == null ? void 0 : y.popular.platformList, (z = p.value) == null ? void 0 : z.popular.clicksTopList], sessionStorage.setItem("gameData", JSON.stringify(h)), l.value = !1
                },
                b = () => {
                    o.push({
                        name: "AllGames",
                        query: {
                            type: i.currentGame
                        }
                    })
                },
                k = Q(() => p.value[i.currentGame].length < 1 ? [] : p.value[i.currentGame][0]),
                T = Q(() => p.value[i.currentGame].length < 1 ? [] : i.isAll ? p.value[i.currentGame][1] || [] : p.value[i.currentGame][1].slice(0, 9)),
                C = async (h, y) => {
                    ["chess", "slot"].includes(y) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(p.value[i.currentGame])), sessionStorage.setItem("gameType", JSON.stringify(i.currentGame)), sessionStorage.setItem("clickedItem", JSON.stringify(h)), o.push({
                        name: "AllOnlineGames"
                    })) : m(h)
                };
            return _(), (h, y) => {
                const z = H("van-skeleton");
                return n(), a("div", {
                    class: M(["gameListGrid__container", {
                        all_container: s.isAll
                    }])
                }, [s.currentGame === "popular" ? (n(), tt(z, {
                    key: 0,
                    loading: l.value
                }, {
                    template: D(() => [Kl]),
                    default: D(() => [N(yl, {
                        platformList: k.value,
                        clicksTopList: T.value,
                        onOnItemClick: u(m),
                        isAll: s.isAll
                    }, null, 8, ["platformList", "clicksTopList", "onOnItemClick", "isAll"])]),
                    _: 1
                }, 8, ["loading"])) : w("v-if", !0), d.value === 2 ? (n(), tt(z, {
                    key: 1,
                    loading: l.value
                }, {
                    template: D(() => [Xl]),
                    default: D(() => [t("div", Ql, [(n(!0), a(S, null, A(p.value[s.currentGame], (f, $) => (n(), tt(Gl, {
                        key: $,
                        info: f,
                        gameType: s.currentGame,
                        isAll: s.isAll,
                        onClick: L => C(f, s.currentGame)
                    }, null, 8, ["info", "gameType", "isAll", "onClick"]))), 128))])]),
                    _: 1
                }, 8, ["loading"])) : w("v-if", !0), d.value === 4 ? (n(), tt(z, {
                    key: 2,
                    loading: l.value
                }, {
                    template: D(() => [Yl]),
                    default: D(() => [s.isAll ? w("v-if", !0) : (n(), tt(Sa, {
                        key: 0
                    })), g.value ? (n(), tt(Dl, {
                        key: 1,
                        gameData: p.value[s.currentGame],
                        isAll: s.isAll,
                        onHandleOpenGame: C
                    }, null, 8, ["gameData", "isAll"])) : (n(), tt(Ul, {
                        key: 2
                    }))]),
                    _: 1
                }, 8, ["loading"])) : w("v-if", !0), d.value === 3 ? (n(), tt(z, {
                    key: 3,
                    loading: l.value
                }, {
                    template: D(() => [Zl]),
                    default: D(() => [N(zl, {
                        gameData: p.value[s.currentGame],
                        isAll: s.isAll
                    }, null, 8, ["gameData", "isAll"])]),
                    _: 1
                }, 8, ["loading"])) : w("v-if", !0), w(" 小游戏、捕鱼 "), d.value === 5 ? (n(), tt(z, {
                    key: 4,
                    loading: l.value
                }, {
                    template: D(() => [Jl]),
                    default: D(() => [N(Tl, {
                        gameData: p.value[s.currentGame],
                        gameType: s.currentGame,
                        isAll: s.isAll,
                        onOnItemClick: u(m)
                    }, null, 8, ["gameData", "gameType", "isAll", "onOnItemClick"])]),
                    _: 1
                }, 8, ["loading"])) : w("v-if", !0), s.isAll ? w("v-if", !0) : (n(), a("button", {
                    key: 5,
                    onClick: b,
                    class: "look_all"
                }, [t("img", {
                    src: u(Xt)("home", "all"),
                    alt: ""
                }, null, 8, tc), E(" " + e(h.$t("viewAll")), 1)]))], 2)
            }
        }
    });
const ic = U(ec, [
        ["__scopeId", "data-v-df3cc798"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/GameList/GameListGrid.vue"]
    ]),
    nc = {
        class: "gamesList__container"
    },
    ac = {
        class: "gamesList__container-title"
    },
    oc = V({
        __name: "GameList",
        props: {
            gameData: {
                type: Object,
                required: !0
            },
            title: {
                type: String,
                required: !0
            },
            gameType: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            return (i, o) => (n(), a("div", nc, [t("div", ac, e(i.title), 1), N(ic, {
                currentGame: i.gameType,
                isAll: !0
            }, null, 8, ["currentGame"])]))
        }
    });
const sc = U(oc, [
        ["__scopeId", "data-v-e4c17073"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/RedHome/AllGames/GameList.vue"]
    ]),
    xa = Symbol();
var Ra = (s, i) => {
    const o = s.__vccOpts || s;
    for (const [l, g] of i) o[l] = g;
    return o
};
const lc = V({
        name: "FunTabItem",
        props: {
            title: String,
            name: [String, Number],
            badge: [String, Number]
        },
        setup(s) {
            const i = zo(xa),
                o = v(),
                l = Q(() => (i == null ? void 0 : i.activeValue.value) === s.name ? {
                    color: i == null ? void 0 : i.activeColor.value
                } : {}),
                g = () => {
                    i == null || i.setActiveValue(s.name)
                },
                m = {
                    name: sa(s, "name"),
                    el: o
                };
            return Tt(() => {
                var r;
                (r = i.addItem) == null || r.call(i, m)
            }), pn(() => {
                var r;
                (r = i.removeItem) == null || r.call(i, m)
            }), {
                el: o,
                style: l,
                handleClick: g
            }
        }
    }),
    cc = {
        class: "fun-tab-item__wrap"
    },
    rc = {
        class: "fun-tab-item__label"
    },
    uc = {
        key: 0,
        class: "fun-tab-item__badge"
    };

function dc(s, i, o, l, g, m) {
    return n(), a("div", {
        ref: "el",
        style: me(s.style),
        class: "fun-tab-item",
        onClick: i[0] || (i[0] = (...r) => s.handleClick && s.handleClick(...r))
    }, [t("div", cc, [be(s.$slots, "icon"), t("div", rc, [be(s.$slots, "default", {}, () => [E(e(s.title), 1)])]), s.badge ? (n(), a("div", uc, e(s.badge), 1)) : w("v-if", !0)])], 4)
}
var Ga = Ra(lc, [
    ["render", dc],
    ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"]
]);
const tn = window;

function pc() {
    let s = 0;
    const i = ["webkit", "moz"];
    for (let o = 0; o < i.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = tn[i[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = tn[i[o] + "CancelAnimationFrame"] || tn[i[o] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(o) {
        const l = Date.now(),
            g = l - s,
            m = Math.max(0, 16.7 - g),
            r = window.setTimeout(function() {
                o(g)
            }, m);
        return s = l + m, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(o) {
        clearTimeout(o)
    })
}
const gc = V({
        name: "FunTabs",
        props: {
            modelValue: {
                type: [String, Number],
                default: ""
            },
            lineWidth: {
                type: [Number, String],
                default: 30
            },
            lineHeight: {
                type: Number,
                default: 3
            },
            activeColor: {
                type: String,
                default: "#1677ff"
            },
            additionalX: {
                type: Number,
                default: 50
            },
            reBoundExponent: {
                type: Number,
                default: 10,
                validator(s) {
                    return s > 0
                }
            },
            inertialDuration: {
                type: Number,
                default: 1e3,
                validator(s) {
                    return s > 0
                }
            },
            reBoundingDuration: {
                type: Number,
                default: 360
            }
        },
        emits: ["update:modelValue", "change"],
        setup(s, {
            emit: i,
            expose: o
        }) {
            let l = null;
            const g = [],
                m = v(),
                r = v(),
                c = v(s.modelValue),
                p = v(0),
                d = v(0),
                _ = v(0),
                b = v(0),
                k = v(0),
                T = v(!1),
                C = v(!1),
                h = v(0),
                y = v(0),
                z = v(0),
                f = v(0),
                $ = v(0),
                L = v(0),
                I = v(16.7),
                B = v(0),
                x = v(0),
                G = v(0),
                P = v(.001),
                R = v(.001),
                O = Q(() => {
                    const W = C.value && !T.value ? s.reBoundingDuration : 0;
                    return {
                        transitionTimingFunction: C.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        transitionDuration: `${W}ms`,
                        transform: `translate3d(${h.value}px, 0px, 0px)`
                    }
                }),
                K = Q(() => ({
                    transition: "all 300ms",
                    width: `${d.value}px`,
                    height: `${s.lineHeight}px`,
                    transform: `translate3d(${p.value}px, 0, 0)`,
                    backgroundColor: s.activeColor
                })),
                nt = Q(() => f.value <= y.value);
            Pt(() => s.modelValue, W => {
                c.value = W, ct()
            });
            const ct = () => {
                    l || (l = new Promise(W => {
                        Jt(() => {
                            xt(), W(), l = null
                        })
                    }))
                },
                ot = W => {
                    c.value = W, i("update:modelValue", W), i("change", W)
                },
                lt = W => {
                    g.push(W), ct()
                },
                J = W => {
                    const wt = g.findIndex(Ot => Ot.name === W.name);
                    wt !== -1 && (g.splice(wt, 1), ct())
                },
                kt = {
                    activeValue: c,
                    activeColor: sa(s, "activeColor"),
                    addItem: lt,
                    removeItem: J,
                    setActiveValue: ot
                };
            Bo(xa, kt);
            const xt = () => {
                    var W, wt;
                    _.value = ((W = m.value) == null ? void 0 : W.offsetWidth) || 0, b.value = ((wt = r.value) == null ? void 0 : wt.offsetWidth) - _.value, Gt(), Rt()
                },
                At = () => (C.value = !1, h.value > 0 ? (C.value = !0, h.value = 0) : h.value < -b.value && (C.value = !0, h.value = -b.value), C.value),
                gt = () => {
                    nt.value ? h.value <= 0 && h.value + b.value > 0 || h.value > 0 ? h.value += f.value - z.value : h.value + b.value <= 0 && (h.value += s.additionalX * (f.value - z.value) / (_.value + Math.abs(h.value + b.value))) : h.value >= 0 ? h.value += s.additionalX * (f.value - z.value) / (_.value + h.value) : (h.value <= 0 && h.value + b.value >= 0 || h.value + b.value <= 0) && (h.value += f.value - z.value), z.value = f.value
                },
                ft = () => {
                    if (x.value = Date.now(), I.value = x.value - B.value, nt.value ? h.value <= -b.value ? (R.value *= (s.reBoundExponent + Math.abs(h.value + b.value)) / s.reBoundExponent, k.value = Math.min(k.value - R.value, 0)) : k.value = Math.min(k.value - R.value * I.value, 0) : h.value >= 0 ? (R.value *= (s.reBoundExponent + h.value) / s.reBoundExponent, k.value = Math.max(k.value - R.value, 0)) : k.value = Math.max(k.value - R.value * I.value, 0), h.value += k.value * I.value / 2, Math.abs(k.value) <= P.value) {
                        At();
                        return
                    }
                    B.value = x.value, G.value = requestAnimationFrame(ft)
                },
                $t = () => {
                    if (!g.length) return;
                    const W = g.find(wt => wt.name.value === c.value);
                    return W && W.el.value
                },
                Rt = () => {
                    const W = $t();
                    if (!W) return;
                    const wt = W.offsetWidth,
                        Ot = W.offsetLeft,
                        {
                            lineWidth: ee
                        } = s;
                    ee === "auto" ? d.value = wt : ee < 1 ? d.value = wt * ee : d.value = ee, p.value = Ot + (wt - d.value) / 2
                },
                Gt = () => {
                    const W = $t();
                    if (!W) return;
                    const wt = W.offsetLeft,
                        Ot = (_.value - W.offsetWidth) / 2;
                    let ee = 0;
                    const Le = Math.abs(h.value);
                    wt <= Le + Ot ? ee = Ot - (wt + h.value) : ee = -(wt - Le - Ot);
                    let le = ee + h.value;
                    le > 0 && (le = 0), le < -b.value && (le = -b.value), C.value = !0, h.value = le
                },
                _t = W => {
                    W.stopPropagation(), cancelAnimationFrame(G.value), z.value = W.touches[0].clientX
                },
                it = W => {
                    b.value <= 0 || (W.preventDefault(), W.stopPropagation(), T.value = !0, $.value = L.value, y.value = z.value, f.value = W.touches[0].clientX, gt(), L.value = W.timeStamp)
                },
                st = W => {
                    if (T.value = !1, At()) cancelAnimationFrame(G.value);
                    else {
                        let wt = W.timeStamp - L.value,
                            Ot = L.value - $.value;
                        if (Ot = Ot > 0 ? Ot : 8, wt > 100) return;
                        k.value = (z.value - y.value) / Ot, R.value = k.value / s.inertialDuration, B.value = Date.now(), G.value = requestAnimationFrame(ft)
                    }
                },
                Y = () => {
                    const W = m.value;
                    W.addEventListener("touchstart", _t, !1), W.addEventListener("touchmove", it, !1), W.addEventListener("touchend", st, !1)
                },
                Z = () => {
                    const W = m.value;
                    W.removeEventListener("touchstart", _t), W.removeEventListener("touchmove", it), W.removeEventListener("touchend", st)
                };
            return Tt(() => {
                pc(), Y(), ct()
            }), Ve(() => {
                Z()
            }), o({
                resize: xt
            }), {
                viewAreaRef: m,
                listRef: r,
                activeValue: c,
                lineOffset: p,
                activeLineWidth: d,
                viewAreaWidth: _,
                offsetX: b,
                speed: k,
                touching: T,
                reBounding: C,
                translateX: h,
                startX: y,
                lastX: z,
                currentX: f,
                startMoveTime: $,
                endMoveTime: L,
                frameTime: I,
                frameStartTime: B,
                frameEndTime: x,
                inertiaFrame: G,
                zeroSpeed: P,
                acceleration: R,
                listStyle: O,
                activeBarStyle: K,
                isMoveLeft: nt
            }
        }
    }),
    bc = {
        ref: "viewAreaRef",
        class: "fun-tabs"
    };

function mc(s, i, o, l, g, m) {
    return n(), a("div", bc, [t("div", {
        ref: "listRef",
        style: me(s.listStyle),
        class: "fun-tabs__tab-list"
    }, [be(s.$slots, "default"), t("div", {
        style: me(s.activeBarStyle),
        class: "fun-tabs__active-line"
    }, null, 4)], 4)], 512)
}
var Aa = Ra(gc, [
    ["render", mc],
    ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"]
]);
const _c = V({
        __name: "NavBar",
        props: {
            list: {
                type: Array,
                required: !0
            },
            tabClassName: {
                type: String,
                required: !0
            },
            active: {
                type: Number,
                required: !0,
                default: 0
            },
            tabItemClassName: {
                type: String,
                required: !1
            }
        },
        emits: ["update:active", "onClickTab"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = v(),
                m = v(0),
                r = (c, p) => {
                    o("update:active", m.value), o("onClickTab", {
                        item: c,
                        index: p
                    })
                };
            return Pt(() => l.active, c => {
                m.value = c
            }), i({
                funtabRef: g
            }), (c, p) => (n(), tt(u(Aa), {
                modelValue: m.value,
                "onUpdate:modelValue": p[0] || (p[0] = d => m.value = d),
                class: M(c.tabClassName),
                lineWidth: "0",
                ref_key: "funtabRef",
                ref: g
            }, {
                default: D(() => [(n(!0), a(S, null, A(c.list, (d, _) => yt((n(), tt(u(Ga), {
                    name: _,
                    key: _,
                    class: M([c.tabItemClassName, {
                        activeClassName: c.active === _
                    }]),
                    onClick: b => r(d, _)
                }, {
                    default: D(() => [be(c.$slots, "default", {
                        item: d,
                        index: _
                    })]),
                    _: 2
                }, 1032, ["name", "class", "onClick"])), [
                    [Zt, d.isShow !== void 0 ? d.isShow : !0]
                ])), 128))]),
                _: 3
            }, 8, ["modelValue", "class"]))
        }
    }),
    ui = U(_c, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/FunTab/NavBar.vue"]
    ]),
    vc = {
        class: "allGames__container"
    },
    hc = V({
        __name: "index",
        setup(s) {
            const {
                homeState: i,
                getGameType: o,
                getAllGame: l
            } = di(), g = v(0), m = v(null), r = v(), c = rt(), {
                t: p
            } = mt(), d = v([]), _ = v({});

            function b() {
                c.go(-1)
            }
            const k = Q(() => d.value[g.value]);
            Tt(() => {
                T()
            }), he(() => {
                T()
            });
            const T = async () => {
                !i.gameTypeList.length && await o(), !i.allGameList && await l(), d.value = [], i.gameTypeList.forEach(y => {
                    y.categoryCode === "BigAward" || y.state !== 1 || d.value.push({
                        isShow: y.state === 1,
                        title: p("code" + y.typeNameCode),
                        img: y.categoryImg,
                        key: y.categoryCode.toLocaleLowerCase()
                    })
                }), _.value = i.allGameList;
                const h = c.currentRoute.value.query.type || "";
                g.value = d.value.findIndex(y => y.key + "" === h) || 0
            };

            function C() {}
            return (h, y) => {
                const z = H("NavBar"),
                    f = H("van-sticky"),
                    $ = Ht("lazy");
                return n(), a("div", vc, [N(z, {
                    title: h.$t("all"),
                    "left-arrow": "",
                    onClickLeft: b
                }, null, 8, ["title"]), N(f, {
                    class: "alGames__container-sticky"
                }, {
                    default: D(() => [N(ui, {
                        list: d.value,
                        active: g.value,
                        "onUpdate:active": y[0] || (y[0] = L => g.value = L),
                        tabClassName: "tabs",
                        onOnClickTab: C,
                        activeClassName: "tab_active",
                        ref_key: "tabRefs",
                        ref: r
                    }, {
                        default: D(({
                            item: L,
                            index: I
                        }) => [L.isShow ? (n(), a("div", {
                            key: 0,
                            class: M(["tab_item", {
                                tab_active: I === g.value
                            }])
                        }, [yt(t("img", null, null, 512), [
                            [$, L.img]
                        ]), t("span", null, e(L.title), 1)], 2)) : w("v-if", !0)]),
                        _: 1
                    }, 8, ["list", "active"])]),
                    _: 1
                }), t("div", {
                    class: "allGames__container-list",
                    ref_key: "allGamesContainer",
                    ref: m
                }, [d.value.length > 0 ? (n(), tt(sc, {
                    key: 0,
                    gameType: k.value.key,
                    title: k.value.title,
                    gameData: _.value[k.value.key]
                }, null, 8, ["gameType", "title", "gameData"])) : w("v-if", !0)], 512)])
            }
        }
    });
const kc = U(hc, [
        ["__scopeId", "data-v-0a9bf0c5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllGames/index.vue"]
    ]),
    bA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: kc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fc = {
        class: "lotteryGamesList__container"
    },
    yc = {
        alt: ""
    },
    $c = {
        class: "lotteryGamesList__container-item__time"
    },
    wc = V({
        __name: "index",
        props: {
            gamesList: {
                type: Object,
                default: () => {}
            }
        },
        setup(s) {
            const i = rt();

            function o() {
                i.push({
                    name: "AllLotteryGames-VietnamLottery"
                })
            }
            return (l, g) => {
                const m = Ht("lazy");
                return n(), a("div", fc, [t("div", {
                    class: "lotteryGamesList__container-item",
                    onClick: o
                }, [yt(t("img", yc, null, 512), [
                    [m, u(Xt)("home/AllLotteryGames", "cover")]
                ]), t("span", $c, e(s.gamesList.title), 1)])])
            }
        }
    });
const Tc = U(wc, [
        ["__scopeId", "data-v-22e2ba37"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/index.vue"]
    ]),
    Cc = {
        class: "lotteryGames__container"
    },
    en = 46 + 90 + 35 + 16,
    Zn = 16 + 28,
    Nc = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), l = v(0), g = v(0), m = v(null), r = [{
                title: i("all"),
                value: "all"
            }, {
                title: "Win Go",
                value: "winGo"
            }, {
                title: i("Lotre4d"),
                value: "4DLottery"
            }, {
                title: "Lottery",
                value: "lottery"
            }, {
                title: "Xổ số",
                value: "lotteryVi"
            }, {
                title: "Xổ số",
                value: "lotteryVi"
            }], c = [{
                title: i("all"),
                value: "all"
            }, {
                title: i("minites1"),
                value: "60"
            }, {
                title: i("minites3"),
                value: "180"
            }, {
                title: i("minites5"),
                value: "300"
            }, {
                title: i("minites10"),
                value: "600"
            }, {
                title: i("minitesLong"),
                value: "long"
            }];

            function p() {
                o.go(-1)
            }

            function d(C) {
                return C === l.value ? l.value : -1
            }
            const {
                direction: _
            } = Io(m, {
                onSwipeStart: () => {
                    b()
                },
                onSwipe: b,
                onSwipeEnd: () => {
                    b()
                }
            });

            function b() {
                const C = document.getElementById(`gamesList-${l.value}`);
                if (C) {
                    const {
                        top: h,
                        bottom: y
                    } = C.getBoundingClientRect();
                    y - en - Zn < 0 ? _.value === "UP" && (l.value = l.value + 1) : h - en - Zn > 0 && _.value === "DOWN" && (l.value = l.value - 1)
                }
            }

            function k() {
                T()
            }

            function T() {
                const C = document.getElementById(`gamesList-${l.value}`);
                C && m.value.scrollTo({
                    top: C.offsetTop - en,
                    behavior: "smooth"
                })
            }
            return (C, h) => {
                const y = H("NavBar"),
                    z = H("van-tab"),
                    f = H("van-tabs");
                return n(), a("div", Cc, [N(y, {
                    "left-arrow": "",
                    title: C.$t("lottery"),
                    onClickLeft: p
                }, null, 8, ["title"]), N(f, {
                    class: "lotteryGames__container-tabBar mgt10",
                    active: l.value,
                    "onUpdate:active": h[0] || (h[0] = $ => l.value = $),
                    onClickTab: k,
                    type: "card",
                    color: "transparent",
                    background: "transparent"
                }, {
                    default: D(() => [(n(), a(S, null, A(r, ($, L) => N(z, {
                        name: L,
                        key: L,
                        title: $.title
                    }, null, 8, ["name", "title"])), 64))]),
                    _: 1
                }, 8, ["active"]), N(f, {
                    class: "lotteryGames__container-timeTab",
                    active: g.value,
                    "onUpdate:active": h[1] || (h[1] = $ => g.value = $),
                    color: "#ff7172",
                    background: "#fff"
                }, {
                    default: D(() => [(n(), a(S, null, A(c, ($, L) => N(z, {
                        name: L,
                        key: L,
                        title: $.title
                    }, null, 8, ["name", "title"])), 64))]),
                    _: 1
                }, 8, ["active"]), t("div", {
                    class: "lotteryGames__container-list",
                    ref_key: "allGamesContainer",
                    ref: m
                }, [(n(), a(S, null, A(c, ($, L) => N(Tc, {
                    "games-list": $,
                    active: d(L),
                    key: L,
                    id: `gamesList-${L}`
                }, null, 8, ["games-list", "active", "id"])), 64))], 512)])
            }
        }
    });
const Lc = U(Nc, [
        ["__scopeId", "data-v-147ae92c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/index.vue"]
    ]),
    mA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Lc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zc = {
        class: "onlineGames__container"
    },
    Bc = ["placeholder"],
    Ic = {
        class: "onlineGames__container-list"
    },
    Sc = ["onClick"],
    xc = {
        key: 1
    },
    Rc = {
        class: "onlineGames__container-list miniGames"
    },
    Gc = ["onClick"],
    Ac = V({
        __name: "index",
        setup(s) {
            const {
                onItemClick: i
            } = di(), o = v(), l = v(0), g = v([]), m = v(0);
            Pt(l, f => {
                const $ = _.value[f];
                b.value = [], m.value = 0, z($.slotsTypeID)
            });
            const r = v(!1);
            Pt(r, f => {
                f ? setTimeout(() => {
                    p.value.focus()
                }, 0) : c.value = ""
            });
            const c = v("");
            So(c, f => {
                if (d.value)
                    if (d.value.key === "fish" || d.value.key === "flash") _.value = _.value.filter($ => $.gameNameEn.toLowerCase().includes(f)), f.length === 0 && (_.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null);
                    else {
                        const $ = _.value[l.value];
                        z($.slotsTypeID, f)
                    }
            }, {
                debounce: 300
            });
            const p = v(null),
                d = v(),
                _ = v([]),
                b = v([]),
                k = rt(),
                T = xo(b, f => r.value ? f.gameNameEn.toLowerCase().includes(c.value.toLowerCase()) : f.customGameType === m.value);

            function C(f) {
                return f ? f.split(/(?=[A-Z])/).join(" ") : ""
            }

            function h() {
                k.go(-1)
            }

            function y(f) {
                r.value = f
            }
            async function z(f, $ = "") {
                const L = await at(ua({
                    type: f,
                    gameNameEn: $
                }));
                if (L) {
                    if (b.value = L.data.gameLists || [], g.value = L.data.gameCustomTypeLists || [], !g.value.length) return;
                    m.value = g.value[0].customGameType
                }
            }
            return Tt(() => {
                d.value = sessionStorage.getItem("gameType") ? JSON.parse(sessionStorage.getItem("gameType")) : null, _.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null;
                const f = JSON.parse(sessionStorage.getItem("clickedItem"));
                f && (l.value = _.value.findIndex(L => L.slotsTypeID === f.slotsTypeID)), o.value && o.value.scrollTo(l.value);
                const $ = _.value[l.value];
                z($.slotsTypeID)
            }), (f, $) => {
                var P, R;
                const L = H("svg-icon"),
                    I = H("NavBar"),
                    B = H("van-tab"),
                    x = H("van-tabs"),
                    G = Ht("lazy");
                return n(), a("div", zc, [N(I, {
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: h
                }, {
                    center: D(() => {
                        var O;
                        return [t("span", {
                            class: M({
                                active: r.value
                            })
                        }, e((O = d.value) == null ? void 0 : O.title) + e(f.$t("game")), 3), yt(t("input", {
                            type: "text",
                            placeholder: f.$t("searchGame"),
                            class: M({
                                active: r.value
                            }),
                            "onUpdate:modelValue": $[0] || ($[0] = K => c.value = K),
                            ref_key: "searchBarRef",
                            ref: p
                        }, null, 10, Bc), [
                            [cn, c.value]
                        ])]
                    }),
                    right: D(() => [N(L, {
                        name: "SearchTrx",
                        onClick: $[1] || ($[1] = O => y(!0)),
                        class: M({
                            active: r.value
                        })
                    }, null, 8, ["class"]), t("span", {
                        class: M({
                            active: r.value
                        }),
                        onClick: $[2] || ($[2] = O => y(!1))
                    }, e(f.$t("cancel")), 3)]),
                    _: 1
                }), ((P = d.value) == null ? void 0 : P.key) !== "fish" && ((R = d.value) == null ? void 0 : R.key) !== "flash" ? (n(), tt(x, {
                    key: 0,
                    class: "onlineGames__container-tabBar",
                    active: l.value,
                    "onUpdate:active": $[4] || ($[4] = O => l.value = O),
                    type: "card",
                    sticky: !0,
                    "offset-top": 48,
                    ref_key: "tabsRef",
                    ref: o
                }, {
                    default: D(() => [(n(!0), a(S, null, A(_.value, (O, K) => (n(), tt(B, {
                        key: K
                    }, {
                        title: D(() => [N(L, {
                            name: O.slotsName,
                            class: "gameIcon"
                        }, null, 8, ["name"]), t("span", null, e(O.slotsName), 1)]),
                        _: 2
                    }, 1024))), 128)), !r.value || g.value.length === 0 ? (n(), tt(u(Aa), {
                        key: 0,
                        modelValue: m.value,
                        "onUpdate:modelValue": $[3] || ($[3] = O => m.value = O),
                        lineWidth: 0
                    }, {
                        default: D(() => [(n(!0), a(S, null, A(g.value, (O, K) => (n(), tt(u(Ga), {
                            name: K,
                            key: K,
                            class: M([{
                                activeClassName: m.value === O.customGameType
                            }]),
                            onClick: nt => m.value = O.customGameType
                        }, {
                            default: D(() => [t("span", null, e(O.customGameTypeName), 1)]),
                            _: 2
                        }, 1032, ["name", "class", "onClick"]))), 128))]),
                        _: 1
                    }, 8, ["modelValue"])) : w("v-if", !0), t("div", Ic, [(n(!0), a(S, null, A(u(T), (O, K) => (n(), a("div", {
                        class: "onlineGames__container-list__item",
                        key: K,
                        onClick: nt => u(i)(O)
                    }, [yt(t("img", null, null, 512), [
                        [G, O.img]
                    ]), t("span", null, e(C(O.gameNameEn)), 1)], 8, Sc))), 128))])]),
                    _: 1
                }, 8, ["active"])) : (n(), a("div", xc, [t("div", Rc, [(n(!0), a(S, null, A(_.value, (O, K) => (n(), a("div", {
                    class: "onlineGames__container-list__item",
                    key: K,
                    onClick: nt => u(i)(O)
                }, [E(e(O) + " ", 1), yt(t("img", null, null, 512), [
                    [G, O.img]
                ]), t("span", null, e(O.gameNameEn), 1)], 8, Gc))), 128))])]))])
            }
        }
    });
const Mc = U(Ac, [
        ["__scopeId", "data-v-0ffc3892"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllOnlineGames/index.vue"]
    ]),
    _A = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Mc
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function Qe() {
    const s = Kt({
            Original: [],
            HotGames: [],
            Lottery: [],
            Slot: [],
            Casino: [],
            Chess: [],
            Fish: [],
            Sport: []
        }),
        i = async () => {
            try {
                const {
                    data: o
                } = await at(wi());
                o && (s.Original = o.flash, s.HotGames = o.popular.platformList, s.Lottery = o.lottery, s.Casino = o.video, s.Slot = o.slot, s.Chess = o.chess, s.Fish = o.fish, s.Sport = o.sport)
            } catch {}
        };
    return Tt(() => i()), {
        gameData: s
    }
}
const Pc = {
        class: "luckyWinners__container"
    },
    Dc = {
        class: "luckyWinners__container-wrapper"
    },
    Oc = {
        class: "luckyWinners__container-wrapper__item-img"
    },
    Ec = {
        class: "luckyWinners__container-wrapper__item-info"
    },
    qc = {
        class: "luckyWinners__container-wrapper__item-winType"
    },
    jc = {
        class: "luckyWinners__container-wrapper__item-winAmount"
    },
    Hc = V({
        __name: "index",
        setup(s) {
            const {
                homeState: i,
                getWinInfoDetail: o,
                getWinInfo: l
            } = di(), g = v(null), m = v(null);
            return Tt(async () => {
                await o(), Ro(m.value), i.winInfoList.length > 0 && (g.value = setInterval(async () => {
                    i.winInfoList.unshift(i.winInfoList.pop())
                }, 3e3))
            }), pn(() => {
                clearInterval(g.value)
            }), (r, c) => {
                const p = Ht("lazy");
                return n(), a("div", Pc, [t("h1", null, e(r.$t("winningDetal")), 1), t("div", Dc, [t("div", {
                    ref_key: "wrapperRef",
                    ref: m
                }, [(n(!0), a(S, null, A(u(l).slice(0, 6), d => (n(), a("div", {
                    class: "luckyWinners__container-wrapper__item",
                    key: d
                }, [t("div", Oc, [yt(t("img", null, null, 512), [
                    [p, u(ge)("main/Avatar", d.userPhoto) || u(ge)("home", "avatar")]
                ])]), t("div", Ec, [t("h1", null, e(u(Vo)(d.nickName)), 1)]), t("div", qc, [yt(t("img", null, null, 512), [
                    [p, d.imgUrl]
                ])]), t("div", jc, [t("h1", null, e(r.$t("titleGot")) + " " + e(u(Bt)(d.amount || 0)), 1), t("span", null, e(r.$t("winningAmount")), 1)])]))), 128))], 512)])])
            }
        }
    });
const Ye = U(Hc, [
        ["__scopeId", "data-v-ffb14677"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/LuckyWinners/index.vue"]
    ]),
    Wc = "/assets/png/First-e49c6346.png",
    Fc = "/assets/png/Second-3436aa5f.png",
    Vc = "/assets/png/Third-8be3ae53.png",
    kn = s => (Ct("data-v-74b37c48"), s = s(), Nt(), s),
    Uc = {
        class: "mainContainer"
    },
    Kc = {
        key: 0,
        class: "mainContainer_profitContainer_medal"
    },
    Xc = kn(() => t("span", null, [t("img", {
        src: Wc
    })], -1)),
    Qc = [Xc],
    Yc = kn(() => t("div", {
        class: "mainContainer_profitContainer_medal"
    }, [t("span", null, [t("img", {
        src: Fc
    })])], -1)),
    Zc = kn(() => t("div", {
        class: "mainContainer_profitContainer_medal"
    }, [t("span", null, [t("img", {
        src: Vc
    })])], -1)),
    Jc = {
        class: "mainContainer_profitContainer_medal"
    },
    tr = {
        class: "numberMedal"
    },
    er = {
        class: "mainContainer_profitContainer_img"
    },
    ir = {
        class: "mainContainer_profitContainer_title"
    },
    nr = {
        class: "mainContainer_profitContainer_amount"
    },
    ar = V({
        __name: "ProfitRanking",
        setup(s) {
            const {
                topList: i,
                desensitizeString: o
            } = Uo();
            return (l, g) => {
                const m = Ht("lazy");
                return n(), a("div", Uc, [(n(!0), a(S, null, A(u(i).slice(0, 9), (r, c) => (n(), a("div", {
                    class: "mainContainer_profitContainer",
                    key: r
                }, [w(" Rank 1 "), c == 0 ? (n(), a("div", Kc, Qc)) : c == 1 ? (n(), a(S, {
                    key: 1
                }, [w(" Rank 2 "), Yc], 2112)) : c == 2 ? (n(), a(S, {
                    key: 2
                }, [w(" Rank 3 "), Zc], 2112)) : (n(), a(S, {
                    key: 3
                }, [w(" Rank All "), t("div", Jc, [t("span", tr, e(c + 1), 1)])], 2112)), t("div", er, [yt(t("img", null, null, 512), [
                    [m, u(ge)("main/Avatar", r.userPhoto)]
                ])]), t("div", ir, e(u(o)(r.nickName)), 1), t("div", nr, e(u(Bt)(r.amount || 0)), 1)]))), 128))])
            }
        }
    });
const Ze = U(ar, [
        ["__scopeId", "data-v-74b37c48"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/goGame/ProfitRanking.vue"]
    ]),
    or = {
        class: "originalmainContainer"
    },
    sr = {
        class: "originalmainContainer_title"
    },
    lr = {
        class: "GameContainer"
    },
    cr = {
        class: "GameContainer_games"
    },
    rr = ["src", "onClick"],
    ur = {
        class: "WinningContainer"
    },
    dr = {
        class: "Winningdata"
    },
    pr = {
        class: "profitRanking"
    },
    gr = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = pi(), {
                gameData: o
            } = Qe(), l = Q(() => o.Casino), g = rt(), m = () => {
                g.push("/")
            };
            return (r, c) => (n(), a(S, null, [t("div", or, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", sr, e(r.$t("live")), 1)]), w(" Games images containers starts from here "), t("div", lr, [t("div", cr, [(n(!0), a(S, null, A(l.value, (p, d) => (n(), a("img", {
                key: d,
                src: p.vendorImg,
                onClick: _ => u(i)(p)
            }, null, 8, rr))), 128))]), N(Ye)]), w(" Today's Profit Ranking "), t("div", ur, e(r.$t("homename1")), 1), t("div", dr, [t("div", pr, [N(Ze)])])], 64))
        }
    });
const br = U(gr, [
        ["__scopeId", "data-v-e152b4a0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Casino/index.vue"]
    ]),
    vA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: br
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    mr = {
        class: "originalmainContainer"
    },
    _r = {
        class: "originalmainContainer_title"
    },
    vr = {
        class: "GameContainer"
    },
    hr = {
        class: "GameContainer_games"
    },
    kr = ["src", "onClick"],
    fr = {
        class: "WinningContainer"
    },
    yr = {
        class: "Winningdata"
    },
    $r = {
        class: "profitRanking"
    },
    wr = V({
        __name: "index",
        setup(s) {
            const {
                gameData: i
            } = Qe(), o = Q(() => i.Chess), l = rt(), g = () => {
                l.push("/")
            }, m = r => {
                sessionStorage.setItem("slotGamesList", JSON.stringify(o.value)), sessionStorage.setItem("gameType", JSON.stringify("chess")), sessionStorage.setItem("clickedItem", JSON.stringify(r)), l.push({
                    name: "AllOnlineGames",
                    query: {
                        game: "chess",
                        currentId: r.slotsName
                    }
                })
            };
            return (r, c) => (n(), a(S, null, [t("div", mr, [t("div", {
                class: "backSvg",
                onClick: g
            }), t("div", _r, e(r.$t("ChessandCards")), 1)]), w(" Games images containers starts from here "), t("div", vr, [t("div", hr, [(n(!0), a(S, null, A(o.value, (p, d) => (n(), a("img", {
                key: d,
                src: p.vendorImg,
                onClick: _ => m(p)
            }, null, 8, kr))), 128))]), N(Ye)]), w(" Today's Profit Ranking "), t("div", fr, e(r.$t("homename1")), 1), t("div", yr, [t("div", $r, [N(Ze)])])], 64))
        }
    });
const Tr = U(wr, [
        ["__scopeId", "data-v-9d069a04"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Chess/index.vue"]
    ]),
    hA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Tr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Cr = {
        class: "fish_game"
    },
    Nr = {
        class: "fish_list"
    },
    Lr = ["onClick"],
    zr = V({
        __name: "index",
        setup(s) {
            const i = Kt([]),
                {
                    t: o
                } = mt(),
                l = () => {
                    da.back()
                },
                g = async () => {
                    const r = await at(ua({
                        type: 11
                    }));
                    r && i.push(...r.data.gameLists)
                },
                m = r => {
                    Go({
                        title: o("tips"),
                        message: o("tipsPlayGame"),
                        cancelButtonText: o("cancel"),
                        showCancelButton: !0
                    }).then(async () => {
                        let c = {
                            gameCode: r.gameCode || r.gameID,
                            vendorCode: Number(r.vendorId) || Number(r.slotsTypeID)
                        };
                        const p = await at(Ko({ ...c,
                            phonetype: Xo()
                        }));
                        p && pa(p == null ? void 0 : p.data, 1)
                    })
                };
            return g(), (r, c) => {
                const p = H("NavBar"),
                    d = Ht("lazy");
                return n(), a("div", Cr, [N(p, {
                    title: r.$t("fishing"),
                    backgroundColor: "linear-gradient(90deg, #CF0305 0%, #F23F3A 100%)",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: l
                }, null, 8, ["title"]), t("div", Nr, [(n(!0), a(S, null, A(i, _ => yt((n(), a("img", {
                    class: "gameImg",
                    key: _.vendorId,
                    onClick: b => m(_)
                }, null, 8, Lr)), [
                    [d, _.img]
                ])), 128))])])
            }
        }
    });
const Br = U(zr, [
        ["__scopeId", "data-v-50e7ebdb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/FishGames/index.vue"]
    ]),
    kA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Br
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ir = {
        class: "originalmainContainer"
    },
    Sr = {
        class: "originalmainContainer_title"
    },
    xr = {
        class: "GameContainer"
    },
    Rr = {
        class: "GameContainer_games"
    },
    Gr = ["src", "onClick"],
    Ar = {
        class: "WinningContainer"
    },
    Mr = {
        class: "Winningdata"
    },
    Pr = {
        class: "profitRanking"
    },
    Dr = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = pi(), {
                gameData: o
            } = Qe(), l = Q(() => o.Fish), g = rt(), m = () => {
                g.push("/")
            };
            return (r, c) => (n(), a(S, null, [t("div", Ir, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", Sr, e(r.$t("code9303Fish")), 1)]), w(" Games images containers starts from here "), t("div", xr, [t("div", Rr, [(n(!0), a(S, null, A(l.value, (p, d) => (n(), a("img", {
                key: d,
                src: p.img,
                onClick: _ => u(i)(p)
            }, null, 8, Gr))), 128))]), N(Ye)]), w(" Today's Profit Ranking "), t("div", Ar, e(r.$t("homename1")), 1), t("div", Mr, [t("div", Pr, [N(Ze)])])], 64))
        }
    });
const Or = U(Dr, [
        ["__scopeId", "data-v-3490866d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Fishing/index.vue"]
    ]),
    fA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Or
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Er = s => (Ct("data-v-127acf74"), s = s(), Nt(), s),
    qr = Er(() => t("div", {
        class: "originalmainContainer_title"
    }, "HotGames", -1)),
    jr = {
        class: "GameContainer"
    },
    Hr = {
        class: "GameContainer_games"
    },
    Wr = ["src", "onClick"],
    Fr = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = pi();
            mt();
            const o = rt();
            Qo();
            const l = v([]),
                g = async () => {
                    const r = await at(wi());
                    if (r) {
                        const {
                            clicksVideoTopList: c,
                            clicksTopList: p,
                            platformList: d
                        } = r.data.popular;
                        l.value = [...d, ...p, ...c]
                    }
                },
                m = () => {
                    o.push("/")
                };
            return Tt(() => {
                g()
            }), (r, c) => (n(), a(S, null, [t("div", {
                class: "originalmainContainer"
            }, [t("div", {
                class: "backSvg",
                onClick: m
            }), qr]), w(" Games images containers starts from here "), t("div", jr, [t("div", Hr, [(n(!0), a(S, null, A(l.value, (p, d) => (n(), a("img", {
                key: d,
                src: p.imgUrl,
                onClick: _ => u(i)(p)
            }, null, 8, Wr))), 128))])])], 64))
        }
    });
const Vr = U(Fr, [
        ["__scopeId", "data-v-127acf74"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/HotGames/index.vue"]
    ]),
    yA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ci = s => (Ct("data-v-b8ad632c"), s = s(), Nt(), s),
    Ur = {
        class: "topContainer"
    },
    Kr = {
        class: "title"
    },
    Xr = {
        class: "lotteryBanner"
    },
    Qr = {
        class: "banner"
    },
    Yr = {
        class: "insideBanner"
    },
    Zr = {
        class: "Firstbanner"
    },
    Jr = Ci(() => t("span", {
        class: "line"
    }, null, -1)),
    tu = {
        class: "insideFirstbanner"
    },
    eu = Ci(() => t("br", null, null, -1)),
    iu = {
        class: "Lastbanner"
    },
    nu = ["onClick"],
    au = {
        class: "insideMainContainer"
    },
    ou = ["src"],
    su = {
        class: "Typo"
    },
    lu = Ci(() => t("br", null, null, -1)),
    cu = Ci(() => t("br", null, null, -1)),
    ru = Ci(() => t("div", {
        class: "GoBtn"
    }, null, -1)),
    uu = {
        class: "Winningdata"
    },
    du = {
        class: "WinningContainer"
    },
    pu = {
        class: "Winningdata"
    },
    gu = {
        class: "profitRanking"
    },
    bu = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), {
                gameData: l
            } = Qe(), g = Q(() => l.Lottery), m = {
                1: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-WinGo"
                },
                2: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-K3"
                },
                3: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr4"),
                    RouterName: "AllLotteryGames-5D"
                },
                4: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-WinTrx"
                },
                5: {
                    title: i("vietnamOfficialLottery"),
                    describe: i("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-XoSo"
                },
                6: {
                    title: i("vietnamOfficialLottery"),
                    describe: i("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-XoSo"
                },
                7: {
                    title: i("vietnamOfficialLottery"),
                    describe: i("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-Binguo"
                },
                8: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-4D"
                }
            }, r = d => {
                let _;
                (d == 6 || d == 5) && (_ = {
                    id: d
                }), o.push({
                    name: m[d].RouterName,
                    query: _
                })
            }, c = d => {
                o.push({
                    name: d
                })
            }, p = () => {
                o.push("/")
            };
            return (d, _) => (n(), a(S, null, [t("div", Ur, [t("div", {
                class: "backSvg",
                onClick: p
            }), t("div", Kr, e(d.$t("code9301")), 1)]), w(" Top Container finish here  "), t("div", Xr, [t("div", Qr, [t("div", Yr, [t("div", Zr, [Jr, t("div", tu, [E(e(d.$t("wingoLng")), 1), eu, t("span", null, e(d.$t("lotteryResultFive")), 1)])]), t("div", iu, [t("div", {
                class: "btnLottery",
                onClick: _[0] || (_[0] = b => c("AllLotteryGames-ChangLong"))
            }, e(d.$t("dragonEntry")) + " >>", 1)])])])]), w(" Third container starts from here  "), (n(!0), a(S, null, A(g.value.slice(0, 4), (b, k) => {
                var T, C;
                return n(), a("div", {
                    class: "MainContainer",
                    key: k,
                    onClick: h => r(b.id)
                }, [t("div", au, [t("img", {
                    src: b.categoryImg,
                    alt: ""
                }, null, 8, ou), t("div", su, [t("span", null, e(b.categoryCode), 1), lu, t("pre", null, e((T = m[b.id]) == null ? void 0 : T.title), 1), t("span", null, [cu, E(e((C = m[b.id]) == null ? void 0 : C.describe), 1)])]), ru])], 8, nu)
            }), 128)), t("div", uu, [N(Ye)]), w(" Today's Profit Ranking "), t("div", du, e(d.$t("homename1")), 1), t("div", pu, [t("div", gu, [N(Ze)])])], 64))
        }
    });
const mu = U(bu, [
        ["__scopeId", "data-v-b8ad632c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Lottery/index.vue"]
    ]),
    $A = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _u = {
        class: "sysMessage__container"
    },
    vu = {
        class: "sysMessage__container-msgWrapper__item-title"
    },
    hu = {
        class: "sysMessage__container-msgWrapper__item-time"
    },
    ku = {
        class: "sysMessage__container-msgWrapper__item-content"
    },
    fu = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), {
                setLoading: o
            } = Gi(), l = v(), g = Te(), m = rt(), r = v(!1), c = v([]), p = rn(), d = v({
                pageSize: 25
            });

            function _() {
                m.back()
            }
            async function b() {
                const C = rn();
                await Yo({
                    state: 1
                }).then(h => {
                    h && C.setReadState(!0)
                }).catch(h => {})
            }

            function k(C) {
                la({
                    title: i("warning"),
                    message: i("warningTxt1")
                }).then(async () => {
                    if (await at(un({
                            messageID: C.messageID,
                            state: 2
                        }))) {
                        let y = c.value;
                        c.value = y.filter(z => z.messageID !== C.messageID)
                    }
                })
            }
            const T = g.getUserInfo;
            return Tt(async () => {
                o(!0), await b(), o(!1), l.value.resetRefresh(), T.unRead = 0, g.setUserInfo({ ...T
                }), p.setReadState(!0)
            }), (C, h) => {
                const y = H("NavBar"),
                    z = H("svg-icon");
                return n(), a("div", _u, [N(y, {
                    title: u(i)("notifications"),
                    backgroundColor: "#f7f8ff",
                    "left-arrow": "",
                    onClickLeft: _
                }, null, 8, ["title"]), N(ga, {
                    ref_key: "msgWrapperRef",
                    ref: l,
                    list: c.value,
                    "onUpdate:list": h[0] || (h[0] = f => c.value = f),
                    "page-query": d.value,
                    "onUpdate:pageQuery": h[1] || (h[1] = f => d.value = f),
                    api: u(Jo),
                    distance: 100,
                    isAutoLoad: r.value
                }, {
                    content: D(() => [(n(!0), a(S, null, A(c.value, f => (n(), a("div", {
                        class: "sysMessage__container-msgWrapper__item",
                        key: f.messageID
                    }, [t("div", vu, [w(' <component :is="item.state === 0 ? icons.messageIconRed : icons.messageIconIsRead" /> '), t("div", null, [N(z, {
                        class: "svg",
                        name: f.state === 0 ? "messageIconRed" : "notification"
                    }, null, 8, ["name"]), t("span", null, e(u(Zo)(f.title, 20)), 1)]), N(z, {
                        class: "svg",
                        name: "messageGarbage",
                        onClick: $ => k(f)
                    }, null, 8, ["onClick"]), w(` <component
							:is="icons.messageGarbage"
							@click="($event: Event) => { $event.stopPropagation(); onDeleteClick(item) }"
						/> `)]), t("div", hu, e(f.addTime), 1), t("div", ku, e(f.messages), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "page-query", "api", "isAutoLoad"])])
            }
        }
    });
const yu = U(fu, [
        ["__scopeId", "data-v-8084bf25"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Messages/index.vue"]
    ]),
    wA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $u = {
        class: "originalmainContainer"
    },
    wu = {
        class: "originalmainContainer_title"
    },
    Tu = {
        class: "GameContainer"
    },
    Cu = {
        class: "GameContainer_games"
    },
    Nu = ["src", "onClick"],
    Lu = {
        class: "WinningContainer"
    },
    zu = {
        class: "Winningdata"
    },
    Bu = {
        class: "profitRanking"
    },
    Iu = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = pi(), o = rt(), l = v([]), g = async () => {
                const r = await at(wi());
                r && (l.value = r.data.flash)
            }, m = () => {
                o.push("/")
            };
            return Tt(() => {
                g()
            }), (r, c) => (n(), a(S, null, [t("div", $u, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", wu, e(r.$t("code9308Flash")), 1)]), w(" Games images containers starts from here "), t("div", Tu, [t("div", Cu, [(n(!0), a(S, null, A(l.value, (p, d) => (n(), a("img", {
                key: d,
                src: p.img,
                onClick: _ => u(i)(p)
            }, null, 8, Nu))), 128))]), N(Ye)]), w(" Today's Profit Ranking "), t("div", Lu, e(r.$t("homename1")), 1), t("div", zu, [t("div", Bu, [N(Ze)])])], 64))
        }
    });
const Su = U(Iu, [
        ["__scopeId", "data-v-c9357f63"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Original/index.vue"]
    ]),
    TA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Su
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ma = s => (Ct("data-v-dbfeadbc"), s = s(), Nt(), s),
    xu = {
        class: "topContainer"
    },
    Ru = {
        class: "title"
    },
    Gu = {
        class: "slot_list"
    },
    Au = {
        class: "awardbox"
    },
    Mu = {
        class: "title"
    },
    Pu = ["src"],
    Du = {
        class: "award_tip"
    },
    Ou = Ma(() => t("br", null, null, -1)),
    Eu = {
        class: "amount"
    },
    qu = {
        class: "list"
    },
    ju = {
        class: "big_prize"
    },
    Hu = {
        class: "info"
    },
    Wu = {
        class: "text"
    },
    Fu = {
        class: "tit"
    },
    Vu = {
        class: "multiple"
    },
    Uu = {
        class: "award"
    },
    Ku = Ma(() => t("div", {
        class: "Slot_game"
    }, "Slot Game", -1)),
    Xu = {
        class: "GameContainer"
    },
    Qu = {
        class: "GameContainer_games"
    },
    Yu = ["src", "onClick"],
    Zu = {
        class: "WinningContainer"
    },
    Ju = {
        class: "Winningdata"
    },
    td = {
        class: "profitRanking"
    },
    ed = V({
        __name: "index",
        setup(s) {
            const {
                gameData: i
            } = Qe(), o = Q(() => i.Slot), l = He(), g = Q(() => l.getJackportMaxReswadAmount), m = v([]), r = v([]), c = rt(), p = async () => {
                const k = await at(ts());
                k && (r.value = k.data)
            }, d = k => {
                sessionStorage.setItem("slotGamesList", JSON.stringify(o.value)), sessionStorage.setItem("gameType", JSON.stringify("slot")), sessionStorage.setItem("clickedItem", JSON.stringify(k)), c.push({
                    name: "AllOnlineGames",
                    query: {
                        game: "slot",
                        currentId: k.slotsName
                    }
                })
            }, _ = async () => {
                const k = await at(wi());
                m.value = k.data.awardRecordList || {}
            }, b = () => {
                c.push({
                    path: "/main/SuperJackpot"
                })
            };
            return p(), _(), (k, T) => (n(), a(S, null, [t("div", xu, [t("div", {
                class: "backSvg",
                onClick: T[0] || (T[0] = C => u(c).back())
            }), t("div", Ru, e(k.$t("code9304Slot")), 1)]), t("div", Gu, [w(" big jiang "), t("div", Au, [t("div", Mu, [t("img", {
                src: u(ge)("home", "award"),
                alt: ""
            }, null, 8, Pu), E(" " + e(k.$t("code9309")), 1)]), t("div", Du, [E(e(k.$t("awarDesc1")), 1), Ou, E(" " + e(k.$t("awarDesc2")) + " ", 1), t("span", Eu, e(u(Bt)(g.value)), 1)]), t("div", qu, [(n(!0), a(S, null, A(m.value.slice(0, 3), C => (n(), a("div", ju, [t("div", {
                class: "bg",
                style: me({
                    backgroundImage: `url(${C.imgUrl})`
                })
            }, null, 4), t("div", Hu, [t("div", Wu, [t("div", Fu, e(C == null ? void 0 : C.gameName), 1), t("div", Vu, e(C == null ? void 0 : C.multiple) + "X", 1)]), t("div", Uu, e(u(Bt)(C == null ? void 0 : C.bonusAmount)), 1)])]))), 256)), E("1 ")]), t("div", {
                class: "look_more",
                onClick: b
            }, e(k.$t("lookBigAward")) + " >>", 1)]), Ku, w(" Games images containers starts from here "), t("div", Xu, [t("div", Qu, [(n(!0), a(S, null, A(o.value, (C, h) => (n(), a("img", {
                key: h,
                src: C.vendorImg,
                onClick: y => d(C)
            }, null, 8, Yu))), 128))]), N(Ye)]), w(" Today's Profit Ranking "), t("div", Zu, e(k.$t("homename1")), 1), t("div", Ju, [t("div", td, [N(Ze)])])])], 64))
        }
    });
const id = U(ed, [
        ["__scopeId", "data-v-dbfeadbc"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Slots/index.vue"]
    ]),
    CA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: id
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nd = {
        class: "originalmainContainer"
    },
    ad = {
        class: "originalmainContainer_title"
    },
    od = {
        class: "GameContainer"
    },
    sd = {
        class: "GameContainer_games"
    },
    ld = ["src", "onClick"],
    cd = {
        class: "WinningContainer"
    },
    rd = {
        class: "Winningdata"
    },
    ud = {
        class: "profitRanking"
    },
    dd = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = pi(), {
                gameData: o
            } = Qe(), l = Q(() => o.Sport), g = rt(), m = () => {
                g.push("/")
            };
            return (r, c) => (n(), a(S, null, [t("div", nd, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", ad, e(r.$t("PhysicalEducation")), 1)]), w(" Games images containers starts from here "), t("div", od, [t("div", sd, [(n(!0), a(S, null, A(l.value, (p, d) => (n(), a("img", {
                key: d,
                src: p.vendorImg,
                onClick: _ => u(i)(p)
            }, null, 8, ld))), 128))]), N(Ye)]), w(" Today's Profit Ranking "), t("div", cd, e(r.$t("homename1")), 1), t("div", rd, [t("div", ud, [N(Ze)])])], 64))
        }
    });
const pd = U(dd, [
        ["__scopeId", "data-v-f8ca9d4e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/eSports/index.vue"]
    ]),
    NA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gd = s => (Ct("data-v-bc67dde2"), s = s(), Nt(), s),
    bd = {
        class: "game-iframe"
    },
    md = ["src"],
    _d = gd(() => t("img", {
        src: es,
        alt: ""
    }, null, -1)),
    vd = [_d],
    hd = V({
        __name: "index",
        setup(s) {
            const i = gn(),
                o = v(null),
                l = v(!1),
                {
                    x: g,
                    y: m,
                    style: r
                } = Ao(o, {
                    initialValue: {
                        x: 30,
                        y: 30
                    },
                    preventDefault: !0,
                    onMove: () => {
                        l.value = !0
                    },
                    onEnd: () => {
                        setTimeout(() => l.value = !1)
                    }
                }),
                c = Q(() => {
                    const _ = i.query.url;
                    if (!_) return "";
                    const b = is(_ || "");
                    return b.startsWith("https:") ? b : `data:text/html;charset=utf-8,${encodeURIComponent(b)}`
                }),
                p = rt(),
                d = () => {
                    l.value || p.push({
                        name: "home"
                    })
                };
            return (_, b) => (n(), a("div", bd, [c.value ? (n(), a("iframe", {
                key: 0,
                src: c.value
            }, null, 8, md)) : w("v-if", !0), t("div", {
                class: "close",
                ref_key: "el",
                ref: o,
                style: me(u(r)),
                onClick: d
            }, vd, 4)]))
        }
    });
const kd = U(hd, [
        ["__scopeId", "data-v-bc67dde2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/game/index.vue"]
    ]),
    LA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: kd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fd = [{
        typeID: 13,
        typeName: "Trx Win Go<br />1Min",
        tabName: "Trx 1Min",
        intervalM: 1,
        scope: "1000|10000|100000|1000000",
        sort: 1,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }, {
        typeID: 14,
        typeName: "Trx Win Go<br />3Min",
        tabName: "Trx 3Min",
        intervalM: 3,
        scope: "1000|10000|100000|1000000",
        sort: 2,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }, {
        typeID: 15,
        typeName: "Trx Win Go<br />5Min",
        tabName: "Trx 5Min",
        intervalM: 5,
        scope: "1000|10000|100000|1000000",
        sort: 3,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }, {
        typeID: 16,
        typeName: "Trx Win Go<br />10Min",
        tabName: "Trx 10Min",
        intervalM: 10,
        scope: "1000|10000|100000|1000000",
        sort: 4,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }],
    yd = [{
        typeID: 5,
        typeName: "5D Lotre<br />1Min",
        tabName: "5D 1Min",
        intervalM: 1,
        scope: "1000|10000|100000|1000000",
        sort: 4,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }, {
        typeID: 6,
        typeName: "5D Lotre<br />3Min",
        tabName: "5D 3Min",
        intervalM: 3,
        scope: "1000|10000|100000|1000000",
        sort: 3,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }, {
        typeID: 7,
        typeName: "5D Lotre<br />5Min",
        tabName: "5D 5Min",
        intervalM: 5,
        scope: "1000|10000|100000|1000000",
        sort: 2,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }, {
        typeID: 8,
        typeName: "5D Lotre<br />10Min",
        tabName: "5D 10Min",
        intervalM: 10,
        scope: "1000|10000|100000|1000000",
        sort: 1,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }],
    $d = [{
        typeID: 9,
        typeName: "K3 Lotre<br />1Min",
        tabName: "K3 1Min",
        intervalM: 1,
        scope: "1000|10000|100000|1000000",
        sort: 1,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }, {
        typeID: 10,
        typeName: "K3 Lotre<br />3Min",
        tabName: "K3 3Min",
        intervalM: 3,
        scope: "1000|10000|100000|1000000",
        sort: 2,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font><span style="font-family: 宋体;">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="margin-bottom: 0px; -webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }, {
        typeID: 11,
        typeName: "K3 Lotre<br />5Min",
        tabName: "K3 5Min",
        intervalM: 5,
        scope: "1000|10000|100000|1000000",
        sort: 3,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }, {
        typeID: 12,
        typeName: "K3 Lotre<br />10Min",
        tabName: "K3 10Min",
        intervalM: 10,
        scope: "1000|10000|100000|1000000",
        sort: 4,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }],
    wd = s => Ce(Ne.GetMyBingo18HistoryBetting, s),
    Td = () => Ce(Ne.GetBinguoGameConfig),
    Cd = () => Ce(Ne.GetBingo18OddsList),
    Nd = () => Ce(Ne.GetGameBingo18Issue),
    Ld = () => Ce(Ne.GetBingo18LastGameResult),
    zd = s => Ce(Ne.GetBingo18BetAmount, s),
    Bd = s => Ce(Ne.Bingo18Betting, s),
    Pa = () => Ce(Ne.GetBingo18Last50Result),
    Id = () => Ce(Ne.GetTrendstatistics),
    Sd = () => Ce(Ne.GetLotteryRankList),
    xd = () => Ce(Ne.GetLotteryResult7Day),
    Rd = s => Ce(Ne.GetUserRankList, {
        uid: s
    }),
    oe = Kt({
        currentTabIndex: 0,
        resultSumTrend: [],
        smallAndBigTrend: void 0,
        threeSameTrend: [],
        twoSameTrend: [],
        isTrend: !1,
        trendList: [],
        last50List: [],
        userRank: 0,
        last7Day: []
    }),
    {
        t: ri
    } = Ai.global,
    Si = v([{
        title: ri("time"),
        key: "issueEndTime",
        isLockColumn: !0,
        isSlot: !0,
        width: "50px",
        cusTdClass: "column_time"
    }]),
    Je = () => {
        const s = {
                1: {
                    player: ri("xosoTxt60"),
                    Big: {
                        class: "big"
                    },
                    Small: {
                        class: "small"
                    },
                    Drawn: {
                        class: "sum"
                    }
                },
                2: {
                    player: ri("same"),
                    class: "small"
                },
                3: {
                    player: ri("sameNum")
                },
                4: {
                    player: ri("numbersMatch")
                }
            },
            i = Q(() => {
                let k = [],
                    T = [];
                for (let C = 0; C < oe.last50List.length; C++) T.length < 5 || (k.push(T), T = []), T.push(oe.last50List[C].resultSum), C === oe.last50List.length - 1 && k.push(T);
                return k
            }),
            o = Q(() => {
                let k = oe.last50List.map(C => C.resultSum),
                    T = _(k).slice(0, 10).reverse();
                return T.forEach(C => {
                    if (C.length < 5) {
                        let h = 5 - C.length;
                        for (let y = 0; y < h; y++) C.push("")
                    }
                }), T
            }),
            l = Q(() => oe.last50List.map(k => {
                const T = k.result.split(""),
                    C = {};
                for (let h = 1; h <= 6; h++) C["num" + h] = T.filter(y => y === h.toString()).length;
                return {
                    issueNo: k.issueNo,
                    sum: k.resultSum,
                    ...C
                }
            })),
            g = async () => {
                const k = await at(xd());
                if (k != null && k.data) {
                    Si.value = [{
                        title: ri("time"),
                        key: "issueEndTime",
                        isLockColumn: !0,
                        isSlot: !0,
                        width: "50px",
                        cusTdClass: "column_time"
                    }];
                    let T = k.data.reverse();
                    [...new Set(k.data.map(z => z.startDate))].slice(0, 7).reverse().forEach((z, f) => {
                        Si.value.push({
                            key: "time_index_" + f,
                            title: z,
                            isSlot: !0
                        })
                    });
                    let h = m(T, "issueEndTime"),
                        y = [];
                    Object.entries(h).forEach(([z, f]) => {
                        let $ = {};
                        f.forEach((L, I) => {
                            var x;
                            let B = (x = Si.value.find(G => G.title === L.startDate)) == null ? void 0 : x.key;
                            $[`${B}`] = L
                        }), y.push({
                            issueEndTime: z,
                            ...$
                        })
                    }), oe.last7Day = y.sort((z, f) => {
                        const $ = z.issueEndTime.split(":"),
                            L = f.issueEndTime.split(":"),
                            I = parseInt($[0]),
                            B = parseInt($[1]),
                            x = parseInt(L[0]),
                            G = parseInt(L[1]);
                        return I === x ? B - G : I - x
                    })
                }
            };

        function m(k, T) {
            const C = {};
            return k.forEach(h => {
                const y = h[T];
                C[y] || (C[y] = []), C[y].push(h)
            }), C
        }
        const r = async () => {
                const k = await at(Sd());
                k != null && k.data && (oe.trendList = k.data);
                const C = Te().getUserInfo,
                    h = await at(Rd(C.userId));
                h != null && h.data && (h.data < 100 && (oe.isTrend = !0), oe.userRank = h.data)
            },
            c = async () => {
                const k = await at(Pa());
                k != null && k.data && (oe.last50List = k.data)
            },
            p = async () => {
                const k = await at(Id());
                k && (oe.resultSumTrend = k.data.resultSumTrend, oe.smallAndBigTrend = k.data.smallAndBigTrend, oe.threeSameTrend = k.data.threeSameTrend, oe.twoSameTrend = k.data.twoSameTrend)
            },
            d = (k, T) => {
                let C = "",
                    h = "";
                return k === 1 ? (Number(T) ? C = b(Number(T)) : C = s[1][T].class, h = s[1].player) : k === 2 ? (C = s[2].class, h = s[2].player) : k === 3 ? (Number(T) < 5 ? C = "small" : Number(T) === 5 ? C = "sum" : C = "big", h = s[3].player) : k === 4 && (T.includes("*") ? C = "big" : /[123]/.test(T) ? C = "small" : C = "big", h = s[4].player), {
                    className: C,
                    playerName: h
                }
            };

        function _(k) {
            const T = [],
                C = [];
            let h = "";
            const y = f => f < 10 ? "small" : f > 11 ? "big" : "sum",
                z = (f, $) => {
                    let L = 0;
                    if (f !== $[$.length - 1]) return 0;
                    for (let I = $.length - 1; I >= 0; I--)
                        if (f === $[I]) L += 1;
                        else return L;
                    return L
                };
            for (let f = 0; f < k.length; f++) {
                const $ = k[f],
                    L = y($);
                if (T.length === 0 || L !== h) {
                    T.push([$]), h = L, C.push(h);
                    continue
                }
                if (T[T.length - 1].length < 5) T[T.length - 1].push($);
                else {
                    let I = z(L, C),
                        B = T[T.length - I].length;
                    B === 5 ? (T.splice(T.length - I, 0, [$]), C.push(L)) : (B > 5, T[T.length - I].unshift($))
                }
                h = L
            }
            return T
        }
        const b = k => Number(k) < 10 ? "small" : Number(k) > 11 ? "big" : "sum";
        return {
            store: oe,
            last50Result: i,
            last50Record: o,
            last50RecordResult: l,
            columnOptions: Si,
            filterStyle: b,
            filterGameType: d,
            getTrendstatistics: p,
            getLotteryRankList: r,
            getLotteryResult7Day: g,
            getBingo18Last50Result: c
        }
    },
    Gd = {
        class: "ar-searchbar__selector"
    },
    Ad = {
        key: 0,
        class: "noSelect"
    },
    Md = {
        key: 1,
        class: "ar-searchbar__selector-default"
    },
    Pd = V({
        __name: "Calendar",
        emits: ["confirm"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const {
                minDate: l,
                maxDate: g
            } = ba(), m = v(""), r = v(""), c = v(!1), p = b => `${b.getFullYear()}-${b.getMonth()+1}-${b.getDate()}`, d = async b => {
                c.value = !1;
                const [k, T] = b;
                m.value = p(k), r.value = p(T), o("confirm")
            };

            function _() {
                c.value = !0
            }
            return i({
                startDateValue: m,
                endDateValue: r
            }), (b, k) => {
                const T = H("van-icon"),
                    C = H("van-calendar");
                return n(), a(S, null, [t("div", Gd, [t("div", {
                    onClick: _
                }, [m.value === "" || r.value === "" ? (n(), a("span", Ad, e(b.$t("datePick")), 1)) : (n(), a("span", Md, e(m.value) + "/" + e(r.value), 1)), N(T, {
                    name: "arrow-down"
                })])]), w(`<ArSelect @click-select="onClickSelectT" :selectName="$t('datePick')|| (startDateValue / endDateValue )"></ArSelect>`), w(' <van-popup v-model:show="showDataPick" round position="bottom"> '), N(C, {
                    show: c.value,
                    "onUpdate:show": k[0] || (k[0] = h => c.value = h),
                    type: "range",
                    onConfirm: d,
                    "min-date": u(l),
                    "max-date": u(g),
                    teleport: "body"
                }, null, 8, ["show", "min-date", "max-date"]), w(" </van-popup> ")], 64)
            }
        }
    }),
    Dd = U(Pd, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/common/Calendar.vue"]
    ]),
    Od = s => (Ct("data-v-1115ff02"), s = s(), Nt(), s),
    Ed = {
        class: "x-4d-head"
    },
    qd = {
        class: "menu"
    },
    jd = ["onClick"],
    Hd = {
        class: "main"
    },
    Wd = {
        class: "item"
    },
    Fd = Od(() => t("div", {
        class: "box"
    }, [t("div")], -1)),
    Vd = [Fd],
    Ud = {
        class: "mask"
    },
    Kd = ["onClick"],
    Xd = {
        class: "img"
    },
    Qd = V({
        __name: "lotterylist",
        props: {
            modelValue: {
                type: Boolean,
                required: !0,
                default: !1
            },
            timeIndex: {
                type: Number,
                required: !0,
                default: 0
            },
            timeVal: {
                type: String,
                required: !0,
                default: pe().format("YYYY-MM-DD")
            },
            lotteryList: {
                type: Array,
                required: !0
            },
            lotteryTab: {
                type: Array,
                required: !0
            },
            timeWeek: {
                type: Function,
                required: !0,
                default: () => ""
            }
        },
        emits: ["onLotteryTab", "onTime", "update:modelValue"],
        setup(s, {
            emit: i
        }) {
            const l = Mo(s, "modelValue", i),
                g = (_, b) => {
                    i("onLotteryTab", _, b)
                },
                m = (_, b) => {
                    i("onTime", _, b)
                },
                r = () => {
                    l.value = !0
                },
                c = () => {
                    l.value = !1
                },
                p = () => {
                    l.value ? c() : r()
                },
                d = v(null);
            return Po(d, _ => {
                l.value = !1
            }), (_, b) => {
                var C;
                const k = H("van-skeleton"),
                    T = Ht("lazy");
                return n(), a("div", Ed, [t("div", {
                    class: "time",
                    ref_key: "target",
                    ref: d
                }, [t("div", {
                    class: "box",
                    onClick: p
                }, e(_.timeVal.replace(/-/g, "/")) + " " + e(_.timeWeek(_.timeVal)), 1), yt(t("div", qd, [t("h3", {
                    onClick: c
                }, e(_.$t("Drawdate")), 1), t("ul", null, [(n(!0), a(S, null, A(_.lotteryTab, (h, y) => (n(), a("li", {
                    class: M([_.timeVal == h.date ? "active" : ""]),
                    key: y,
                    onClick: z => m(h, y)
                }, e(h.date.replace(/-/g, "/")) + " " + e(_.timeWeek(h.date)), 11, jd))), 128))])], 512), [
                    [Zt, u(l)]
                ])], 512), t("div", Hd, [N(k, {
                    loading: !((C = _.lotteryTab[_.timeIndex]) != null && C.games),
                    class: "flex"
                }, {
                    template: D(() => [(n(), a(S, null, A(10, () => t("div", Wd, Vd)), 64))]),
                    default: D(() => {
                        var h;
                        return [yt(t("div", Ud, null, 512), [
                            [Zt, u(l)]
                        ]), (n(!0), a(S, null, A((h = _.lotteryTab[_.timeIndex]) == null ? void 0 : h.games, (y, z) => (n(), a("div", {
                            class: "item",
                            key: z,
                            onClick: f => g(y, z)
                        }, [t("div", {
                            class: M(["box", [_.lotteryList.includes(y.type) ? "active" : ""]])
                        }, [yt(t("img", Xd, null, 512), [
                            [T, y.typeImg]
                        ])], 2)], 8, Kd))), 128))]
                    }),
                    _: 1
                }, 8, ["loading"])])])
            }
        }
    });
const Yd = U(Qd, [
        ["__scopeId", "data-v-1115ff02"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/lotterylist.vue"]
    ]),
    Zd = {
        class: "betType"
    },
    Jd = {
        class: "title"
    },
    tp = {
        class: "betType-list"
    },
    ep = {
        class: "item action"
    },
    ip = ["onClick"],
    np = V({
        __name: "bettype",
        props: {
            betType: {
                type: Array,
                required: !0
            },
            betTypeList: {
                type: Array,
                required: !0
            }
        },
        emits: ["onBetType"],
        setup(s, {
            emit: i
        }) {
            const o = l => {
                i("onBetType", l)
            };
            return (l, g) => {
                const m = H("van-skeleton");
                return n(), a(S, null, [w(" 投注类型 "), t("div", Zd, [t("h4", Jd, e(l.$t("xosoTxt78")), 1), t("ul", tp, [N(m, {
                    loading: !l.betTypeList,
                    class: "flex"
                }, {
                    template: D(() => [(n(), a(S, null, A(7, () => t("li", ep)), 64))]),
                    default: D(() => [(n(!0), a(S, null, A(l.betTypeList, (r, c) => (n(), a("li", {
                        class: M([l.betType.includes(r) ? "item action" : "item"]),
                        onClick: p => o(r),
                        key: c
                    }, e(l.$t("d4gameType" + r)), 11, ip))), 128))]),
                    _: 1
                }, 8, ["loading"])])])], 2112)
            }
        }
    });
const ap = U(np, [
        ["__scopeId", "data-v-40039812"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/bettype.vue"]
    ]),
    op = {
        class: "howPay"
    },
    sp = {
        class: "title"
    },
    lp = {
        class: "howPay-list"
    },
    cp = {
        class: "item"
    },
    rp = {
        key: 0,
        class: "icon"
    },
    up = V({
        __name: "betpay",
        props: {
            rollNum: {
                type: Number,
                required: !0,
                default: 1
            },
            banBetPay: {
                type: Number,
                required: !0,
                default: 0
            },
            betPayId: {
                type: Number,
                required: !0,
                default: 1
            },
            duplex: {
                type: Boolean,
                required: !0,
                default: !1
            },
            betPayList: {
                type: Array,
                required: !0
            }
        },
        emits: ["onBetpay"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = r => r.includes(5) ? r.slice(0, -1) : r,
                g = r => {
                    let c = !1,
                        p = (r === 2 || r === 3) && o.banBetPay === 1 || o.rollNum > 0,
                        d = o.duplex ? (r === 2 || r === 3 || r === 4) && o.banBetPay === 1 : r === 2 && (r === 2 || r === 3) && o.banBetPay === 1;
                    return (p || d) && (c = !0), c
                },
                m = r => {
                    i("onBetpay", r)
                };
            return (r, c) => {
                const p = H("van-icon"),
                    d = H("van-button"),
                    _ = H("van-skeleton");
                return n(), a(S, null, [w(" 玩法 "), t("div", op, [t("h4", sp, e(r.$t("gamePlay")), 1), t("ul", lp, [N(_, {
                    loading: !l(r.betPayList),
                    class: "flex"
                }, {
                    template: D(() => [(n(), a(S, null, A(4, () => t("li", cp)), 64))]),
                    default: D(() => [(n(!0), a(S, null, A(l(r.betPayList), (b, k) => (n(), tt(d, {
                        plain: "",
                        disabled: g(b),
                        class: M([b == r.betPayId ? "item action" : "item"]),
                        onClick: T => m(b),
                        key: k
                    }, {
                        default: D(() => [E(e(r.$t("d4gamePay" + b)) + " ", 1), b == r.betPayId ? (n(), a("i", rp, [N(p, {
                            name: "success"
                        })])) : w("v-if", !0)]),
                        _: 2
                    }, 1032, ["disabled", "class", "onClick"]))), 128))]),
                    _: 1
                }, 8, ["loading"])])])], 2112)
            }
        }
    });
const dp = U(up, [
        ["__scopeId", "data-v-42192c16"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/betpay.vue"]
    ]),
    pp = {
        class: "betAmount"
    },
    gp = {
        class: "title"
    },
    bp = {
        class: "betAmount-list"
    },
    mp = ["onClick"],
    _p = V({
        __name: "betamount",
        props: {
            count: {
                type: Number,
                required: !0,
                default: 10
            },
            list: {
                type: Array,
                required: !0
            }
        },
        emits: ["onAmount"],
        setup(s, {
            emit: i
        }) {
            const o = l => {
                i("onAmount", l)
            };
            return (l, g) => (n(), a("div", pp, [t("h4", gp, e(l.$t("betAmounts")), 1), t("ul", bp, [(n(!0), a(S, null, A(l.list, (m, r) => (n(), a("li", {
                class: M([m == l.count ? "item active" : "item"]),
                onClick: c => o(m),
                key: r
            }, e(m), 11, mp))), 128))])]))
        }
    });
const vp = U(_p, [
        ["__scopeId", "data-v-1c2e9816"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/betamount.vue"]
    ]),
    hp = s => (Ct("data-v-f88540df"), s = s(), Nt(), s),
    kp = {
        class: "select"
    },
    fp = {
        class: "tab"
    },
    yp = ["onClick"],
    $p = hp(() => t("span", null, "ALL", -1)),
    wp = {
        class: "numList"
    },
    Tp = ["onClick"],
    Cp = V({
        __name: "duplexbet",
        props: {
            tabList: {
                type: Array,
                required: !0
            },
            allActive: {
                type: Array,
                required: !0
            },
            numList: {
                type: Array,
                required: !0
            }
        },
        emits: ["allAddnum", "addNumber"],
        setup(s, {
            emit: i
        }) {
            const o = g => {
                    i("allAddnum", g)
                },
                l = (g, m) => {
                    i("addNumber", g, m)
                };
            return (g, m) => (n(), a("div", kp, [t("ul", fp, [(n(!0), a(S, null, A(g.tabList, (r, c) => (n(), a("li", {
                onClick: p => o(r.type),
                class: M(g.allActive.includes(r.type) ? "active" : ""),
                key: c
            }, [E(e(r.name) + " ", 1), $p], 10, yp))), 128))]), t("div", wp, [(n(!0), a(S, null, A(g.numList, (r, c) => (n(), a("ul", {
                key: c
            }, [(n(), a(S, null, A(10, (p, d) => t("li", {
                class: M([r != null && r.list.includes(d) ? "action" : ""]),
                key: p,
                onClick: _ => l(c, d)
            }, e(d), 11, Tp)), 64))]))), 128))])]))
        }
    });
const Np = U(Cp, [
        ["__scopeId", "data-v-f88540df"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/duplexbet.vue"]
    ]),
    Lp = {
        class: "foot"
    },
    zp = {
        class: "item"
    },
    Bp = {
        class: "marks"
    },
    Ip = {
        class: "item"
    },
    Sp = {
        class: "marks"
    },
    xp = V({
        __name: "navfoot",
        props: {
            betQuantity: {
                type: Number,
                default: 0
            },
            totalAmount: {
                type: Number,
                default: 0
            }
        },
        emits: ["onBet"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = () => {
                    o.totalAmount > 0 && i("onBet")
                };
            return (g, m) => (n(), a("div", Lp, [t("div", zp, [t("p", null, e(g.$t("quantity")), 1), t("span", Bp, e(s.betQuantity), 1)]), w('				<div class="bar" />'), t("div", Ip, [t("p", null, e(g.$t("betAmounts")), 1), t("span", Sp, e(u(ma)(s.totalAmount)), 1)]), t("div", {
                class: M(["item bet", [s.totalAmount > 0 ? "active" : ""]]),
                onClick: l
            }, e(g.$t("betting")), 3)]))
        }
    });
const Rp = U(xp, [
        ["__scopeId", "data-v-fd9536f0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/navfoot.vue"]
    ]),
    Gp = {
        class: "x-bet"
    },
    Ap = {
        class: "x-bet-sub"
    },
    Mp = {
        class: "x-bet-lottery"
    },
    Pp = {
        class: "x-bet-title"
    },
    Dp = {
        class: "box"
    },
    Op = {
        class: "img"
    },
    Ep = {
        class: "x-bet-type"
    },
    qp = {
        class: "x-bet-title"
    },
    jp = {
        class: "box"
    },
    Hp = {
        class: "x-bet-multiple"
    },
    Wp = {
        class: "tit"
    },
    Fp = {
        class: "box"
    },
    Vp = {
        class: "multiple-list"
    },
    Up = {
        class: "box"
    },
    Kp = ["onClick"],
    Xp = {
        class: "x-bet-list"
    },
    Qp = {
        class: "item"
    },
    Yp = {
        class: "lab"
    },
    Zp = {
        class: "number"
    },
    Jp = {
        class: "item"
    },
    tg = {
        class: "lab"
    },
    eg = {
        class: "balance"
    },
    ig = {
        class: "item"
    },
    ng = {
        class: "lab"
    },
    ag = {
        class: "amount"
    },
    og = {
        key: 0,
        class: "x-bet-wallet"
    },
    sg = {
        class: "tip"
    },
    lg = {
        class: "x-bet-agree"
    },
    cg = {
        class: "agree"
    },
    rg = {
        class: "x-bet-foot"
    },
    ug = V({
        __name: "betpopup",
        props: {
            betShow: {
                type: Boolean,
                required: !0,
                default: !1
            },
            betQuantity: {
                type: Number,
                required: !0,
                default: 0
            },
            timeIndex: {
                type: Number,
                required: !0,
                default: 0
            },
            totalAmount: {
                type: Number,
                required: !0,
                default: 0
            },
            balance: {
                type: Number,
                required: !0,
                default: 0
            },
            lotteryList: {
                type: Array,
                required: !0
            },
            betType: {
                type: Array,
                required: !0
            },
            countVal: {
                type: [String, Number],
                required: !0
            },
            multipleList: {
                type: Array,
                required: !0
            },
            checked: {
                type: Boolean,
                required: !0,
                default: !1
            },
            preSaleRule: {
                type: Boolean,
                required: !0,
                default: !1
            },
            lotteryTab: {
                type: Array,
                required: !0
            }
        },
        emits: ["getClear", "onStepper", "changeStep", "onMltiple", "checkboxChange", "onCancel", "update:checked", "update:betShow", "update:countVal", "update:preSaleRule", "onBet"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = rt(),
                g = y => {
                    i("getClear", y)
                },
                m = y => {
                    i("onStepper", y)
                },
                r = y => {
                    i("changeStep", y)
                },
                c = y => {
                    i("onMltiple", y)
                },
                p = y => {
                    i("checkboxChange", y)
                },
                d = () => {
                    i("onCancel")
                },
                _ = () => {
                    i("onBet")
                },
                b = y => {
                    const {
                        lotteryTab: z,
                        timeIndex: f
                    } = o;
                    let $ = z[f].games.find(L => L.type == y);
                    return $ == null ? void 0 : $.typeImg
                },
                {
                    checked: k,
                    betShow: T,
                    countVal: C,
                    preSaleRule: h
                } = ca(o, i);
            return (y, z) => {
                const f = H("van-icon"),
                    $ = H("van-field"),
                    L = H("van-checkbox"),
                    I = H("van-popup"),
                    B = Ht("lazy");
                return n(), tt(I, {
                    show: u(T),
                    "onUpdate:show": z[7] || (z[7] = x => se(T) ? T.value = x : null),
                    position: "bottom",
                    "close-on-click-overlay": !1,
                    style: {
                        borderRadius: "15px 15px 0 0"
                    }
                }, {
                    default: D(() => [t("div", Gp, [t("div", Ap, [E(e(y.$t("betting")) + " ", 1), t("div", {
                        class: "clear",
                        onClick: z[0] || (z[0] = x => g(1))
                    }, [N(f, {
                        class: "icon",
                        name: "delete-o"
                    }), E(e(y.$t("Clear")), 1)])]), w("  "), w(` <div class="x-bet-maxbet" v-if="tipShow"><span class="tip"> {{ $t('d4BetTip',[7000]) }}</span></div> `), t("div", Mp, [t("h5", Pp, e(y.$t("ColorSpecies")), 1), t("ul", Dp, [(n(!0), a(S, null, A(y.lotteryList, (x, G) => (n(), a("li", {
                        class: "item",
                        key: G
                    }, [yt(t("img", Op, null, 512), [
                        [B, b(x)]
                    ])]))), 128))])]), t("div", Ep, [t("h5", qp, e(y.$t("xosoTxt78")), 1), t("ul", jp, [(n(!0), a(S, null, A(y.betType, (x, G) => (n(), a("li", {
                        class: "item",
                        key: G
                    }, e(y.$t("d4gameType" + x)), 1))), 128))])]), w(" 投注 "), be(y.$slots, "default", {}, void 0, !0), t("div", Hp, [t("div", Wp, e(y.$t("multiple")), 1), t("div", Fp, [t("div", {
                        class: "li minus",
                        onClick: z[1] || (z[1] = x => m(1))
                    }, [N(f, {
                        name: "minus"
                    })]), N($, {
                        class: "digit",
                        modelValue: u(C),
                        "onUpdate:modelValue": z[2] || (z[2] = x => se(C) ? C.value = x : null),
                        type: "digit",
                        maxlength: 5,
                        onInput: r
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "li plus",
                        onClick: z[3] || (z[3] = x => m(2))
                    }, [N(f, {
                        name: "plus"
                    })])])]), t("div", Vp, [t("div", Up, [(n(!0), a(S, null, A(y.multipleList, (x, G) => (n(), a("div", {
                        key: G,
                        class: M(u(C) == x ? "active item" : "item"),
                        onClick: P => c(x)
                    }, " X" + e(x), 11, Kp))), 128))])]), t("div", Xp, [t("div", Qp, [t("div", Yp, e(y.$t("quantity")), 1), t("div", Zp, e(y.betQuantity) + e(y.$t("note")), 1)]), t("div", Jp, [t("div", tg, e(y.$t("walletBalance")), 1), t("div", eg, e(u(Bt)(y.balance)), 1)]), t("div", ig, [t("div", ng, e(y.$t("betAmounts")), 1), t("div", ag, e(u(ma)(y.totalAmount)), 1), w("K")])]), y.totalAmount > y.balance ? (n(), a("div", og, [t("div", sg, [N(f, {
                        name: "warning-o",
                        color: "var(--norm_red-color)",
                        size: "17"
                    }), E(" " + e(y.$t("insufficientWallet")), 1)]), t("div", {
                        class: "txt",
                        onClick: z[4] || (z[4] = x => u(l).push({
                            name: "Recharge"
                        }))
                    }, e(y.$t("torecharge")) + " >>", 1)])) : w("v-if", !0), t("div", lg, [N(L, {
                        modelValue: u(k),
                        "onUpdate:modelValue": z[5] || (z[5] = x => se(k) ? k.value = x : null),
                        "checked-color": "var(--main-color)",
                        onChange: p
                    }, {
                        default: D(() => [t("div", cg, e(y.$t("agree")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("span", {
                        class: "txt",
                        onClick: z[6] || (z[6] = x => h.value = !0)
                    }, e(y.$t("presaleRules")), 1)])]), t("div", rg, [t("div", {
                        class: "cancel",
                        onClick: d
                    }, e(y.$t("cancel")), 1), t("div", {
                        class: "bet",
                        onClick: _
                    }, e(y.$t("betting")), 1)])]),
                    _: 3
                }, 8, ["show"])
            }
        }
    });
const dg = U(ug, [
        ["__scopeId", "data-v-3557dd80"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/betpopup.vue"]
    ]),
    pg = {
        class: "x-bet"
    },
    gg = {
        key: 0,
        class: "x-bet-box"
    },
    bg = {
        class: "item"
    },
    mg = {
        class: "pay"
    },
    _g = {
        class: "txt"
    },
    vg = {
        class: "item"
    },
    hg = {
        class: "num"
    },
    kg = {
        class: "txt"
    },
    fg = {
        key: 1,
        class: "x-bet-pay"
    },
    yg = {
        class: "x-bet-title"
    },
    $g = {
        class: "name"
    },
    wg = {
        key: 2,
        class: "x-bet-dupleList"
    },
    Tg = {
        class: "digits"
    },
    Cg = {
        class: "sub"
    },
    Ng = {
        class: "list"
    },
    Lg = {
        class: "item"
    },
    zg = V({
        __name: "betcontent",
        props: {
            tabId: {
                type: Number,
                required: !0,
                default: 0
            },
            betPay: {
                type: Number,
                required: !0,
                default: 0
            },
            num: {
                type: String,
                required: !0
            },
            dupleList: {
                type: Array,
                required: !0
            },
            tabList: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            return (i, o) => (n(), a("div", pg, [w(" 输入投注 "), i.tabId === 1 ? (n(), a("div", gg, [t("div", bg, [t("span", mg, e(i.$t("d4gamePay" + i.betPay)), 1), t("p", _g, e(i.$t("gamePlay")), 1)]), t("div", vg, [t("span", hg, e(i.num), 1), t("p", kg, e(i.$t("bettingnumber")), 1)])])) : w("v-if", !0), w(" 选择投注 "), i.tabId === 2 ? (n(), a("div", fg, [t("h5", yg, e(i.$t("gamePlay")), 1), t("div", $g, e(i.$t("d4gamePay" + i.betPay)), 1)])) : w("v-if", !0), i.tabId === 2 ? (n(), a("div", wg, [(n(!0), a(S, null, A(i.dupleList, (l, g) => (n(), a("div", {
                class: "box",
                key: g
            }, [t("div", Tg, [t("div", Cg, e(i.tabList[g].name), 1), t("div", Ng, [(n(!0), a(S, null, A(l.list, (m, r) => (n(), a("div", {
                class: "num",
                key: r
            }, [t("div", Lg, e(m), 1)]))), 128))])])]))), 128))])) : w("v-if", !0)]))
        }
    });
const Bg = U(zg, [
        ["__scopeId", "data-v-d0caa9aa"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/betcontent.vue"]
    ]),
    Jn = v(!1),
    nn = v(!1),
    ta = v(0),
    xi = v(),
    ea = v();

function gi() {
    const s = Kt({
            timeVal: pe().format("YYYY-MM-DD"),
            timeIndex: 0,
            lotteryList: [],
            lotteryTab: [],
            tabId: 1,
            rollNum: 0,
            betQuantity: 0,
            betAmount: 0,
            totalAmount: 0,
            betType: [],
            betTypeList: [],
            betPay: 1,
            betPayList: [],
            dupleList: [{
                list: []
            }, {
                list: []
            }, {
                list: []
            }, {
                list: []
            }],
            allActive: [],
            banbetpay: 0,
            multipleList: [1, 5, 10, 20, 50, 100],
            betAmountList: [10, 50, 100, 500, 1e3, 5e3],
            duplex: !1,
            balance: 0,
            stopTime: null
        }),
        {
            t: i
        } = mt(),
        {
            setLoading: o
        } = Gi(),
        l = v(""),
        g = v(1),
        m = v(!0),
        r = v(!1),
        c = v(!1),
        p = v([{}]),
        d = v(),
        _ = v(),
        b = [{
            name: i("xosoTxt90"),
            type: 0
        }, {
            name: i("xosoTxt89"),
            type: 1
        }, {
            name: i("xosoTxt88"),
            type: 2
        }, {
            name: i("xosoTxt87"),
            type: 3
        }],
        k = Q(() => s.timeVal),
        T = Q(() => s.timeIndex),
        C = Q(() => s.lotteryList),
        h = Q(() => s.lotteryTab),
        y = Q(() => s.tabId),
        z = Q(() => s.rollNum),
        f = Q(() => s.betType),
        $ = Q(() => s.betTypeList),
        L = Q(() => s.betPay),
        I = Q(() => s.betPayList),
        B = Q(() => s.betAmount),
        x = Q(() => s.totalAmount),
        G = Q(() => s.betQuantity),
        P = Q(() => s.banbetpay),
        R = Q(() => s.dupleList),
        O = Q(() => s.allActive),
        K = Q(() => s.multipleList),
        nt = Q(() => s.betAmountList),
        ct = Q(() => s.duplex),
        ot = Q(() => s.balance),
        lt = F => {
            const et = [i("Sunday"), i("Monday"), i("Tuesday"), i("Wednesday"), i("Thursday"), i("Friday"), i("Saturday")],
                pt = new Date(F);
            return et[pt.getDay()]
        },
        J = (F, et) => {
            s.timeIndex = et, s.timeVal = F.date, At(1), Jn.value = !1
        },
        kt = (F, et) => {
            if (s.lotteryList.includes(F.type)) {
                let pt = s.lotteryList.indexOf(F.type);
                s.lotteryList.splice(pt, 1)
            } else s.lotteryList.push(F.type);
            Z(s.betType.length, s.betAmount, s.betPay)
        },
        xt = F => {
            s.tabId = F, At(0)
        },
        At = F => {
            l.value = "", s.betPay = 1, s.rollNum = 0, s.betType.length = 0, s.betAmount = s.betAmountList[0], s.dupleList.forEach(et => et.list = []), s.allActive.length = 0, g.value = 1, gt(), c.value = !1, F == 1 && (s.lotteryList.length = 0)
        },
        gt = () => {
            s.totalAmount = 0, s.betQuantity = 0, s.banbetpay = 0
        },
        ft = () => {
            if (s.rollNum >= 2 || l.value.length >= 4) return Dt(i("EnterTip"));
            s.betPay = 5, l.value += "R", s.rollNum = _t(l.value.split("")), Z(s.betType.length, s.betAmount, s.betPay)
        },
        $t = F => {
            l.value = F.target.value, l.value == "" && (s.betPay = 1), l.value.length !== 4 ? gt() : Gt(F.target.value) ? (Z(s.betType.length, s.betAmount, s.betPay), s.banbetpay = Ot(l.value), s.banbetpay === 1 && (s.betPay = 1)) : (l.value = "", s.betPay = 1, Dt(i("FormatTip1"))), s.rollNum = _t(l.value.split(""))
        },
        Rt = F => {
            if (F.target.value == "" || F.target.value.length !== 4) return;
            Gt(F.target.value) || (l.value = "", s.betPay = 1, Dt(i("FormatTip1")))
        },
        Gt = F => /^[0-9]{4}|\R[0-9]{3}|[0-9]{1}\R[0-9]{2}|[0-9]{2}\R[0-9]{1}|\R[0-9]{2}\R|[0-9]{2}\R{2}|\R{2}[0-9]{2}|[0-9]{3}\R|[0-9]\R{2}[0-9]|[0-9]\R[0-9]\R|\R[0-9]\R[0-9]$/.test(F),
        _t = F => {
            let et = F.indexOf("R"),
                pt = 0;
            for (; et !== -1;) pt++, et = F.indexOf("R", et + 1);
            return pt
        },
        it = F => {
            const {
                betType: et,
                betAmount: pt,
                betPay: Lt
            } = s;
            if (et.includes(F)) {
                let qt = et.indexOf(F);
                et.splice(qt, 1)
            } else et.push(F);
            Z(et.length, pt, Lt)
        },
        st = F => {
            s.betPay = F, Z(s.betType.length, s.betAmount, F)
        },
        Y = F => {
            s.betAmount = F, Z(s.betType.length, F, s.betPay)
        },
        Z = (F, et, pt) => {
            let {
                tabId: Lt,
                dupleList: qt,
                lotteryList: Mt
            } = s;
            if (Lt === 1) {
                if (l.value.length !== 4) return !1;
                W(F, et, l.value, pt)
            } else if (ze(qt)) s.betQuantity = vt(qt) * Mt.length * s.betType.length, s.totalAmount = s.betQuantity * et * Mt.length * g.value;
            else {
                const Wt = qt.map(Et => Et.list[0]).join("");
                if (Wt.length !== 4) return;
                s.banbetpay = Ot(Wt), W(F, et, Wt, pt)
            }
        },
        W = (F, et, pt, Lt) => {
            let {
                rollNum: qt,
                lotteryList: Mt
            } = s, Wt = F * et * Mt.length * g.value, Et = F * Mt.length, Yt = 0, ae = 0;
            if (Lt === 1 || Lt === 2) Yt = Wt, ae = Et;
            else if (Lt === 3) {
                const Ee = Ot(pt);
                Yt = Wt * Ee, ae = Et * Ee
            } else if (Lt === 4) {
                const Ee = wt(pt);
                Yt = Wt * (Ee ? 1 : 2), ae = Et * (Ee ? 1 : 2)
            } else Lt === 5 && (Yt = Wt * (qt > 0 ? qt == 1 ? 10 : 10 * 10 : 0), ae = Et * (qt > 0 ? qt == 1 ? 10 : 10 * 10 : 0));
            s.totalAmount = Yt, s.betQuantity = ae
        },
        wt = F => F === F.split("").reverse().join("");

    function Ot(F) {
        function et(Et) {
            return Et <= 1 ? 1 : Et * et(Et - 1)
        }
        let pt = F.split("").map(Number),
            Lt = [...new Set(pt)],
            qt = et(pt.length),
            Mt = 1;
        for (const Et of Lt) {
            const Yt = pt.filter(ae => ae === Et).length;
            Mt *= et(Yt)
        }
        return qt / Mt
    }
    const ee = F => {
            const {
                dupleList: et,
                allActive: pt,
                betType: Lt,
                betAmount: qt
            } = s;
            if (et[F].list = [], pt.includes(F)) {
                let Mt = pt.indexOf(F);
                pt.splice(Mt, 1)
            } else {
                pt.push(F);
                for (let Mt = 0; Mt < 10; Mt++) et[F].list.push(Mt)
            }
            le(), Z(Lt.length, qt)
        },
        Le = (F, et) => {
            const {
                dupleList: pt,
                allActive: Lt,
                betType: qt,
                betAmount: Mt,
                betPay: Wt
            } = s, Et = pt[F].list;
            if (Et.includes(et)) {
                let Yt = Et.indexOf(et);
                Et.splice(Yt, 1)
            } else Et.push(et);
            if (Et.length === 10) Lt.push(F);
            else if (Lt.includes(F)) {
                let Yt = Lt.indexOf(F);
                Lt.splice(Yt, 1)
            }
            if (le(), vt(pt) > 0) {
                if (Z(qt.length, Mt, Wt), vt(pt) === 1) {
                    const Yt = pt.map(ae => ae.list[0]).join("");
                    s.banbetpay = Ot(Yt)
                }
                s.banbetpay === 1 && (s.betPay = 1)
            } else ze(pt) ? s.banbetpay = ze(pt) ? 1 : 0 : gt()
        },
        le = () => {
            const {
                dupleList: F
            } = s;
            s.duplex = ze(F), s.banbetpay = ze(F) ? 1 : 0, ze(F) && (s.betPay = 1)
        };

    function ze(F) {
        for (let et = 0; et < F.length; et++) {
            const pt = F[et].list;
            if (Array.isArray(pt) && pt.length > 1) return !0
        }
        return !1
    }

    function vt(F) {
        let et = 1;
        return F.forEach((pt, Lt) => {
            et *= pt.list.length
        }), et
    }
    const Be = () => {
            c.value = !0
        },
        Re = F => {
            const {
                betType: et,
                betAmount: pt,
                betPay: Lt
            } = s;
            switch (F) {
                case 1:
                    g.value > 1 && g.value--;
                    break;
                case 2:
                    g.value++;
                    break
            }
            Z(et.length, pt, Lt)
        },
        Ie = F => {
            const {
                betType: et,
                betAmount: pt,
                betPay: Lt
            } = s;
            g.value = F.target.value, Z(et.length, pt, Lt)
        },
        We = F => {
            const {
                betType: et,
                betAmount: pt,
                betPay: Lt
            } = s;
            g.value = F, Z(et.length, pt, Lt)
        },
        zt = F => {
            m.value = F
        },
        fe = () => {
            const {
                lotteryList: F,
                lotteryTab: et,
                timeIndex: pt,
                tabId: Lt,
                betPay: qt,
                betType: Mt,
                betQuantity: Wt,
                betAmount: Et,
                dupleList: Yt,
                totalAmount: ae,
                balance: Ee
            } = s;
            if (ae > Ee) return Dt(i("wfDesc3"));
            if (Wt / F.length > 7e3) return Dt(i("d4BetTip", [7e3]));
            if (!m.value) return Dt(i("agreePresaleRules"));
            let ce = {};
            ce.type = F, ce.gameType = qt;
            let hi = "";
            Lt === 1 ? hi = l.value : hi = Yt.map(ni => ni.list.sort((Ae, qe) => Ae - qe).join(",")).join("|"), ce.betContent = hi, ce.betType = Mt, ce.betMethod = Lt, ce.betNumber = Wt, ce.multiple = Number(g.value), ce.amount = Et, ce.issueNumber = F.map(ni => {
                const Ae = et[pt].games.find(qe => qe.type === ni);
                return Ae == null ? void 0 : Ae.issueNumber
            }), c.value = !1, zi(ce), ti()
        },
        ti = () => {
            setTimeout(() => {
                nn.value = !1
            }, 1500)
        },
        ye = async () => {
            const F = await at(mn());
            F != null && F.data && (s.balance = (F == null ? void 0 : F.data.amount) || 0)
        },
        Ui = async () => {
            const F = await at(ns());
            F != null && F.data && (s.multipleList = (F == null ? void 0 : F.data.betMultiplier) || [], s.betAmountList = (F == null ? void 0 : F.data.betAmount) || [], s.betTypeList = (F == null ? void 0 : F.data.betType) || [], s.betPayList = (F == null ? void 0 : F.data.gameType) || [], s.betAmount = (F == null ? void 0 : F.data.betAmount[0]) || 0)
        },
        Qt = async () => {
            o(!0);
            const F = await at(as());
            F != null && F.data && (s.timeVal = F.data[s.timeIndex].date, s.lotteryTab = (F == null ? void 0 : F.data) || []), o(!1)
        },
        zi = async F => {
            const et = await at(os(F));
            (et == null ? void 0 : et.code) === 0 ? (nn.value = !0, ye(), ta.value === 1 && Ge({
                pageSize: 10,
                pageNo: 1,
                type: 0,
                date: pe(new Date).format("YYYY-MM-DD") + " 00:00:00"
            }), ti()) : Qt(), At(1)
        },
        Vt = async () => {
            o(!0), p.value.length = 0;
            const F = await at(ss());
            F != null && F.data && (F == null || F.data.forEach(et => {
                let pt = [],
                    Lt = [],
                    qt = [];
                et.items.forEach(Mt => {
                    Mt.playId.split("_").length == 1 ? qt.push({ ...Mt,
                        code: Mt.playId
                    }) : (Mt.playId.split("_")[0] == "1" && pt.push({ ...Mt,
                        code: Mt.playId.split("_")[1]
                    }), Mt.playId.split("_")[0] == "2" && Lt.push({ ...Mt,
                        code: Mt.playId.split("_")[1]
                    }))
                }), p.value.push({
                    playTypeId: et.playTypeId,
                    playTypeTitle: et.playTypeTitle,
                    lists: [{
                        type: 1,
                        list: pt
                    }, {
                        type: 2,
                        list: Lt
                    }, {
                        type: 3,
                        list: qt
                    }]
                })
            })), o(!1)
        },
        vi = async () => {
            if (xi.value) return;
            o(!0);
            const F = await at(ls());
            F != null && F.data && (xi.value = F.data.map(et => (et.typeName = i(`d4LType${et.typeId}`), et)), xi.value.unshift({
                typeId: 0,
                typeName: i("all")
            })), o(!1)
        },
        Ge = async F => {
            o(!0);
            const et = await at(cs(F));
            et != null && et.data && (ea.value = (et == null ? void 0 : et.data) || {}), o(!1)
        },
        ei = async () => {
            o(!0);
            const F = await at(rs());
            F != null && F.data && (d.value = (F == null ? void 0 : F.data) || []), o(!1)
        },
        Oe = async F => {
            o(!0);
            const et = await at(us(F));
            et && (_.value = (et == null ? void 0 : et.data) || {}), o(!1)
        },
        ii = async F => {
            const et = await at(ds(F));
            return new Promise(async (pt, Lt) => {
                et ? pt(et) : Lt(et)
            })
        };
    return Ve(() => {
        clearInterval(s.stopTime)
    }), {
        tabList: b,
        getTimeWeek: lt,
        onTime: J,
        lotterTab: kt,
        onTab: xt,
        getClear: At,
        onRoll: ft,
        getInput: $t,
        getBlur: Rt,
        onBetType: it,
        onBetpay: st,
        onAmount: Y,
        onClickBet: Be,
        addNumber: Le,
        allAddnum: ee,
        onStepper: Re,
        changeStep: Ie,
        onMltiple: We,
        checkboxChange: zt,
        onBet: fe,
        getWinsUserAmount: ye,
        getGameConfig: Ui,
        getGameIssue: Qt,
        getOddsList: Vt,
        getTypeList: vi,
        getMy4DHistory: Ge,
        get4DResult: ei,
        gameResultByType: Oe,
        gameCancelOrder: ii,
        gameListIndex: ta,
        timeVal: k,
        lotteryTab: h,
        timeIndex: T,
        lotteryList: C,
        timeShow: Jn,
        betShow: c,
        tabId: y,
        rollNum: z,
        banbetpay: P,
        num: l,
        betType: f,
        betTypeList: $,
        betPay: L,
        betPayList: I,
        count: B,
        totalAmount: x,
        betQuantity: G,
        allActive: O,
        dupleList: R,
        countVal: g,
        checked: m,
        preSaleRule: r,
        multipleList: K,
        betAmountList: nt,
        duplex: ct,
        balance: ot,
        promptShow: nn,
        oddsList: p,
        typeList: xi,
        myHistory: ea,
        newGameResult: d,
        gameResultByTypeO: _
    }
}
const Ig = {
        key: 0,
        class: "resultBox"
    },
    Sg = {
        class: "r123"
    },
    xg = {
        class: "r"
    },
    Rg = {
        class: "num"
    },
    Gg = {
        class: "r"
    },
    Ag = {
        class: "num"
    },
    Mg = {
        class: "r"
    },
    Pg = {
        class: "num"
    },
    Dg = {
        class: "title"
    },
    Og = {
        class: "rOther"
    },
    Eg = {
        class: "title"
    },
    qg = {
        class: "rOther"
    },
    jg = V({
        __name: "showResult",
        props: {
            data: {
                type: null,
                required: !1
            }
        },
        setup(s) {
            return (i, o) => {
                var l, g, m, r, c;
                return i.data ? (n(), a("div", Ig, [t("div", Sg, [t("div", xg, [t("div", Rg, [(n(!0), a(S, null, A((l = i.data) == null ? void 0 : l.firstPrize.split(""), (p, d) => (n(), a("span", {
                    key: d
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType3")), 1)]), t("div", Gg, [t("div", Ag, [(n(!0), a(S, null, A((g = i.data) == null ? void 0 : g.secondPrize.split(""), (p, d) => (n(), a("span", {
                    key: d
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType4")), 1)]), t("div", Mg, [t("div", Pg, [(n(!0), a(S, null, A((m = i.data) == null ? void 0 : m.thirdPrize.split(""), (p, d) => (n(), a("span", {
                    key: d
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType5")), 1)])]), t("div", Dg, e(i.$t("d4gameType6")), 1), t("div", Og, [(n(!0), a(S, null, A((r = i.data) == null ? void 0 : r.specialPrize.split(","), (p, d) => (n(), a("span", {
                    key: d
                }, e(p), 1))), 128))]), t("div", Eg, e(i.$t("d4gameType7")), 1), t("div", qg, [(n(!0), a(S, null, A((c = i.data) == null ? void 0 : c.consolationPrize.split(","), (p, d) => (n(), a("span", {
                    key: d
                }, e(p), 1))), 128))])])) : w("v-if", !0)
            }
        }
    });
const fn = U(jg, [
        ["__scopeId", "data-v-fd6be9e5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/4D/showResult.vue"]
    ]),
    De = s => (Ct("data-v-aec2245d"), s = s(), Nt(), s),
    Hg = {
        key: 0,
        class: "gameBox"
    },
    Wg = {
        class: "items"
    },
    Fg = ["onClick"],
    Vg = {
        class: "left"
    },
    Ug = {
        class: "time"
    },
    Kg = {
        class: "right"
    },
    Xg = {
        key: 0,
        class: "info"
    },
    Qg = {
        class: "order"
    },
    Yg = ["onClick"],
    Zg = {
        class: "copy"
    },
    Jg = De(() => t("div", {
        class: "line"
    }, null, -1)),
    tb = ["onClick"],
    eb = {
        class: "copy"
    },
    ib = De(() => t("div", {
        class: "line"
    }, null, -1)),
    nb = {
        class: "li"
    },
    ab = {
        class: "otherTip"
    },
    ob = De(() => t("div", {
        class: "line"
    }, null, -1)),
    sb = {
        class: "li"
    },
    lb = {
        class: "otherTip"
    },
    cb = De(() => t("div", {
        class: "line"
    }, null, -1)),
    rb = {
        class: "li"
    },
    ub = {
        class: "otherTip"
    },
    db = De(() => t("div", {
        class: "line"
    }, null, -1)),
    pb = {
        class: "li"
    },
    gb = {
        class: "otherTip"
    },
    bb = De(() => t("div", {
        class: "line"
    }, null, -1)),
    mb = {
        class: "li"
    },
    _b = {
        class: "otherTip"
    },
    vb = De(() => t("div", {
        class: "line"
    }, null, -1)),
    hb = {
        class: "li"
    },
    kb = {
        class: "type"
    },
    fb = De(() => t("div", {
        class: "line1"
    }, [t("p")], -1)),
    yb = {
        class: "order"
    },
    $b = {
        class: "li"
    },
    wb = {
        class: "numTit"
    },
    Tb = {
        class: "num type"
    },
    Cb = {
        class: "li"
    },
    Nb = {
        class: "numTit"
    },
    Lb = {
        class: "num select"
    },
    zb = {
        class: "n"
    },
    Bb = {
        class: "li"
    },
    Ib = De(() => t("div", {
        class: "line"
    }, null, -1)),
    Sb = {
        class: "li"
    },
    xb = {
        key: 1,
        class: "otherTip"
    },
    Rb = De(() => t("div", {
        class: "line"
    }, null, -1)),
    Gb = {
        class: "li"
    },
    Ab = {
        class: "otherTip"
    },
    Mb = {
        class: "reTitle"
    },
    Pb = ["onClick"],
    Db = {
        class: "foot"
    },
    Ob = {
        class: "page"
    },
    Eb = V({
        __name: "showGame",
        props: {
            pageQuery: {
                type: Object,
                required: !0
            }
        },
        emits: ["update:pageQuery"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    pageQuery: l
                } = ca(o, i),
                {
                    gameCancelOrder: g,
                    myHistory: m,
                    tabList: r,
                    getMy4DHistory: c
                } = gi(),
                {
                    t: p
                } = mt(),
                d = v(!1),
                _ = v(""),
                b = v(-1);

            function k(f) {
                switch (f) {
                    case 1:
                        return p("bettingResultState1");
                    case 2:
                        return p("bettingResultState3");
                    case 3:
                        return p("hasWon");
                    case 4:
                        return p("xosoTxt74");
                    case 5:
                        return p("xosoTxt75");
                    case 6:
                        return p("xosoTxt76");
                    default:
                        return f
                }
            }
            const T = () => {
                    l.value.pageNo--, b.value = -1, c(l.value)
                },
                C = () => {
                    l.value.pageNo++, b.value = -1, c(l.value)
                },
                h = f => {
                    b.value === f ? b.value = -1 : b.value = f
                };

            function y(f) {
                d.value = !0, _.value = f
            }

            function z() {
                d.value = !1, g({
                    orderNumber: _.value
                }).then(f => {
                    f && (bn(p("xosoTxt96")), c(l.value))
                }).catch(f => {})
            }
            return (f, $) => {
                var B, x, G;
                const L = H("svg-icon"),
                    I = H("van-icon");
                return n(), a(S, null, [((B = u(m)) == null ? void 0 : B.list.length) > 0 ? (n(), a("div", Hg, [t("div", Wg, [(n(!0), a(S, null, A(u(m).list, (P, R) => (n(), a("div", {
                    class: M(["itemBox", {
                        active: b.value === R
                    }])
                }, [t("div", {
                    class: "item",
                    onClick: O => h(R)
                }, [t("div", Vg, [t("div", {
                    class: M(["name", {
                        bold: b.value === R
                    }])
                }, e(f.$t(`d4LType${P.type}`)), 3), t("div", Ug, e(P.createTime), 1)]), t("div", Kg, [t("div", {
                    class: M(["state", `state${P.state}`])
                }, e(k(P.state)), 3), [2, 3].includes(P.state) ? (n(), a("div", {
                    key: 0,
                    class: M(["amount", P.state == 3 ? "green" : "red"])
                }, e(P.profitAmount), 3)) : w("v-if", !0)])], 8, Fg), b.value === R ? (n(), a("div", Xg, [t("div", Qg, [t("div", {
                    class: "li",
                    onClick: O => u(Fe)(P.orderNumber)
                }, [t("span", null, [N(L, {
                    name: "Circle1",
                    class: "svg1"
                }), E(" " + e(f.$t("orderNo")), 1)]), t("h6", Zg, [E(e(P.orderNumber) + " ", 1), t("i", null, [N(L, {
                    name: "copy",
                    class: "svg2"
                })])])], 8, Yg), Jg, t("div", {
                    class: "li",
                    onClick: O => u(Fe)(P.issueNumber)
                }, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(" " + e(f.$t("betNumber")), 1)]), t("h6", eb, [E(e(P.issueNumber) + " ", 1), N(L, {
                    name: "copy",
                    class: "svg2"
                })])], 8, tb), ib, t("div", nb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(" " + e(f.$t("ColorSpecies")), 1)]), t("h6", ab, e(f.$t(`d4LType${P.type}`)), 1)]), ob, t("div", sb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(" " + e(f.$t("gamePlay")), 1)]), t("h6", lb, e(f.$t(`d4gamePay${P.gameType}`)), 1)]), cb, t("div", rb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(" " + e(f.$t("betAmounts")), 1)]), t("h6", ub, e(u(Bt)(P.amount)), 1)]), db, t("div", pb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(" " + e(f.$t("xosoTxt79")), 1)]), t("h6", gb, e(P.betNumber) + " " + e(f.$t("note")), 1)]), bb, t("div", mb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(e(f.$t("multiple")), 1)]), t("h6", _b, e(P.multiple), 1)]), vb, t("div", hb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(e(f.$t("xosoTxt78")), 1)])]), t("div", kb, [(n(!0), a(S, null, A(P.betType.split(","), O => (n(), a("span", null, e(f.$t(`d4gameType${O}`)), 1))), 256))]), fb]), t("div", yb, [P.betMethod == 1 ? (n(), a(S, {
                    key: 0
                }, [t("div", $b, [t("span", wb, [N(L, {
                    name: "Circle1",
                    class: "svg1"
                }), E(e(f.$t("bettingnumber")) + " (" + e(f.$t("EnterBet")) + ") ", 1)])]), t("div", Tb, [t("span", null, e(P.betContent), 1)])], 64)) : w("v-if", !0), P.betMethod == 2 ? (n(), a(S, {
                    key: 1
                }, [t("div", Cb, [t("span", Nb, [N(L, {
                    name: "Circle1",
                    class: "svg1"
                }), E(e(f.$t("bettingnumber")) + " (" + e(f.$t("SelectBet")) + ")", 1)])]), t("div", Lb, [(n(!0), a(S, null, A(P.betContent.split("|"), (O, K) => (n(), a("div", {
                    key: K
                }, [t("h6", null, e(u(r)[K].name), 1), t("div", zb, [(n(!0), a(S, null, A(O.split(","), (nt, ct) => (n(), a("span", {
                    key: ct
                }, e(nt), 1))), 128))])]))), 128))])], 64)) : w("v-if", !0), t("div", Bb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(e(f.$t("statusMay")), 1)]), t("h6", {
                    class: M(["stateInfo", `state${P.state}`])
                }, e(k(P.state)), 3)]), Ib, t("div", Sb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(e(f.$t("winOrLose")), 1)]), [2, 3].includes(P.state) ? (n(), a("h6", {
                    key: 0,
                    class: M(["amountInfo", P.state == 3 ? "green" : "red"])
                }, e(P.profitAmount), 3)) : (n(), a("h6", xb, "--"))]), Rb, t("div", Gb, [t("span", null, [N(L, {
                    name: "Circle2",
                    class: "svg"
                }), E(e(f.$t("createTime")), 1)]), t("h6", Ab, e(P.createTime), 1)])]), [2, 3].includes(P.state) ? (n(), a(S, {
                    key: 0
                }, [t("div", Mb, e(f.$t("betResult")), 1), N(fn, {
                    data: P
                }, null, 8, ["data"])], 64)) : w("v-if", !0), P.state == 1 ? (n(), a("div", {
                    key: 1,
                    class: "btn",
                    onClick: O => y(P.orderNumber)
                }, e(f.$t("xosoTxt82")), 9, Pb)) : w("v-if", !0)])) : w("v-if", !0)], 2))), 256))]), t("div", Db, [t("div", {
                    class: M(["previous", {
                        disabled: u(m).pageNo <= 1
                    }]),
                    onClick: T
                }, [N(I, {
                    name: "arrow-left",
                    size: "20"
                })], 2), t("div", Ob, e(u(m).pageNo) + "/" + e((x = u(m)) == null ? void 0 : x.totalPage), 1), t("div", {
                    class: M(["next", {
                        disabled: u(m).pageNo >= ((G = u(m)) == null ? void 0 : G.totalPage)
                    }]),
                    onClick: C
                }, [N(I, {
                    name: "arrow",
                    size: "20"
                })], 2)])])) : (n(), tt(re, {
                    key: 1
                })), N(xe, {
                    show: d.value,
                    "onUpdate:show": $[0] || ($[0] = P => d.value = P),
                    title: f.$t("xosoTxt99"),
                    onConfirm: $[1] || ($[1] = P => z())
                }, null, 8, ["show", "title"])], 64)
            }
        }
    });
const Da = U(Eb, [
        ["__scopeId", "data-v-aec2245d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/4D/showGame.vue"]
    ]),
    qb = {
        class: "gamelist"
    },
    jb = {
        class: "tab"
    },
    Hb = {
        class: "con"
    },
    Wb = {
        class: "head"
    },
    Fb = ["src"],
    Vb = V({
        __name: "gameList",
        setup(s) {
            const i = rt(),
                {
                    gameListIndex: o,
                    newGameResult: l,
                    get4DResult: g,
                    getMy4DHistory: m
                } = gi();

            function r(_) {
                o.value = _, d()
            }

            function c() {
                o.value == 0 ? i.push({
                    name: "AllLotteryGames-4DLotteryResults"
                }) : o.value == 1 && i.push({
                    name: "AllLotteryGames-4DmyGame"
                })
            }
            const p = Kt({
                type: 0,
                date: pe(new Date).format("YYYY-MM-DD 00:00:00"),
                pageSize: 10,
                pageNo: 1
            });

            function d() {
                o.value == 0 ? g() : m(p)
            }
            return Tt(() => {
                d()
            }), (_, b) => {
                var T;
                const k = H("svg-icon");
                return n(), a("div", qb, [t("div", jb, [t("div", {
                    class: M({
                        active: u(o) == 0
                    }),
                    onClick: b[0] || (b[0] = C => r(0))
                }, e(_.$t("d4Tip1")), 3), t("div", {
                    class: M({
                        active: u(o) == 1
                    }),
                    onClick: b[1] || (b[1] = C => r(1))
                }, e(_.$t("myGame")), 3)]), t("div", Hb, [t("div", {
                    class: "more",
                    onClick: c
                }, [E(e(_.$t("more")), 1), N(k, {
                    name: "more"
                })]), u(o) == 0 ? (n(), a(S, {
                    key: 0
                }, [(n(!0), a(S, null, A(u(l), C => (n(), a("div", {
                    class: "items",
                    key: C.issueNumber
                }, [t("div", Wb, [t("img", {
                    src: C.typeImg,
                    alt: ""
                }, null, 8, Fb), t("h1", null, e(_.$t(`d4LType${C.type}`)), 1), t("p", null, e(C.openDate) + " " + e(_.$t(`${u(pe)(C.openDate).format("dddd")}`)), 1)]), N(fn, {
                    data: C
                }, null, 8, ["data"])]))), 128)), ((T = u(l)) == null ? void 0 : T.length) == 0 ? (n(), tt(re, {
                    key: 0
                })) : w("v-if", !0)], 64)) : w("v-if", !0), u(o) == 1 ? (n(), tt(Da, {
                    key: 1,
                    pageQuery: p,
                    "onUpdate:pageQuery": b[2] || (b[2] = C => p = C)
                }, null, 8, ["pageQuery"])) : w("v-if", !0)])])
            }
        }
    });
const Ub = U(Vb, [
        ["__scopeId", "data-v-e3178c7d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/components/gameList.vue"]
    ]),
    Kb = {
        class: "x-4d"
    },
    Xb = {
        class: "x-4d-more"
    },
    Qb = {
        class: "x-4d-body"
    },
    Yb = {
        class: "x-4d-tab"
    },
    Zb = {
        class: "x-4d-content"
    },
    Jb = {
        key: 0,
        class: "enter"
    },
    tm = ["placeholder"],
    em = ["placeholder"],
    im = {
        class: "box"
    },
    nm = {
        class: "PreSale"
    },
    am = {
        class: "head"
    },
    om = {
        class: "body"
    },
    sm = {
        class: "foot"
    },
    lm = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), {
                getTimeWeek: l,
                onTime: g,
                lotterTab: m,
                onTab: r,
                getClear: c,
                onRoll: p,
                getInput: d,
                getBlur: _,
                onBetType: b,
                onBetpay: k,
                onAmount: T,
                onClickBet: C,
                addNumber: h,
                allAddnum: y,
                onStepper: z,
                changeStep: f,
                onMltiple: $,
                checkboxChange: L,
                onBet: I,
                getWinsUserAmount: B,
                getGameConfig: x,
                getGameIssue: G,
                tabList: P,
                timeVal: R,
                lotteryTab: O,
                timeIndex: K,
                lotteryList: nt,
                timeShow: ct,
                betShow: ot,
                tabId: lt,
                num: J,
                rollNum: kt,
                banbetpay: xt,
                betType: At,
                betTypeList: gt,
                betPay: ft,
                betPayList: $t,
                count: Rt,
                totalAmount: Gt,
                betQuantity: _t,
                dupleList: it,
                allActive: st,
                countVal: Y,
                checked: Z,
                preSaleRule: W,
                multipleList: wt,
                betAmountList: Ot,
                duplex: ee,
                balance: Le,
                promptShow: le
            } = gi();
            return Tt(() => {
                B(), x(), G()
            }), (ze, vt) => {
                const Be = H("svg-icon"),
                    Re = H("NavBar"),
                    Ie = H("van-button"),
                    We = H("van-popup");
                return n(), a("div", Kb, [N(Re, {
                    "left-arrow": "",
                    onClickLeft: vt[2] || (vt[2] = zt => u(o).go(-1)),
                    class: "main",
                    title: "4D"
                }, {
                    right: D(() => [t("div", Xb, [N(Be, {
                        name: "howpay",
                        class: "svg",
                        onClick: vt[0] || (vt[0] = () => u(o).push({
                            name: "AllLotteryGames-4DPlay"
                        }))
                    }), N(Be, {
                        name: "odds",
                        class: "svg",
                        onClick: vt[1] || (vt[1] = () => u(o).push({
                            name: "AllLotteryGames-4DOdds"
                        }))
                    })])]),
                    _: 1
                }), w(" 头部彩种 "), N(Yd, {
                    onOnTime: u(g),
                    "lottery-tab": u(O),
                    "time-index": u(K),
                    onOnLotteryTab: u(m),
                    "time-week": u(l),
                    "lottery-list": u(nt),
                    modelValue: u(ct),
                    "onUpdate:modelValue": vt[3] || (vt[3] = zt => se(ct) ? ct.value = zt : null),
                    "time-val": u(R)
                }, null, 8, ["onOnTime", "lottery-tab", "time-index", "onOnLotteryTab", "time-week", "lottery-list", "modelValue", "time-val"]), t("div", Qb, [t("div", Yb, [t("div", {
                    onClick: vt[4] || (vt[4] = zt => u(r)(1)),
                    class: M([u(lt) == 1 ? "active" : ""])
                }, e(u(i)("EnterBet")), 3), t("div", {
                    onClick: vt[5] || (vt[5] = zt => u(r)(2)),
                    class: M([u(lt) == 2 ? "active" : ""])
                }, e(u(i)("SelectBet")), 3)]), t("div", Zb, [u(lt) === 1 ? (n(), a("div", Jb, [u(ft) != 5 ? yt((n(), a("input", {
                    key: 0,
                    class: M(u(J).length > 0 ? "input fz24" : "input"),
                    oninput: "value=value.replace(/\\D/g,'')",
                    "onUpdate:modelValue": vt[6] || (vt[6] = zt => se(J) ? J.value = zt : null),
                    type: "text",
                    placeholder: u(i)("PenterNumber"),
                    maxlength: "4",
                    onInput: vt[7] || (vt[7] = (...zt) => u(d) && u(d)(...zt)),
                    onBlur: vt[8] || (vt[8] = (...zt) => u(_) && u(_)(...zt))
                }, null, 42, tm)), [
                    [cn, u(J)]
                ]) : yt((n(), a("input", {
                    key: 1,
                    class: M(u(J).length > 0 ? "input fz24" : "input"),
                    oninput: "value=value.replace(/[^A-Z0-9]/g,'').toUpperCase()",
                    "onUpdate:modelValue": vt[9] || (vt[9] = zt => se(J) ? J.value = zt : null),
                    type: "text",
                    placeholder: u(i)("PenterNumber"),
                    maxlength: "4",
                    onInput: vt[10] || (vt[10] = (...zt) => u(d) && u(d)(...zt)),
                    onBlur: vt[11] || (vt[11] = (...zt) => u(_) && u(_)(...zt))
                }, null, 42, em)), [
                    [cn, u(J)]
                ]), yt(N(Ie, {
                    class: "btn",
                    onClick: u(p)
                }, {
                    default: D(() => [E("ROll")]),
                    _: 1
                }, 8, ["onClick"]), [
                    [Zt, u($t).includes(5)]
                ])])) : w("v-if", !0), w(" 投注类型 "), N(ap, {
                    class: "mb30",
                    "bet-type": u(At),
                    "bet-type-list": u(gt),
                    onOnBetType: u(b)
                }, null, 8, ["bet-type", "bet-type-list", "onOnBetType"]), w(" 选择投注 下注盘 "), u(lt) === 2 ? (n(), tt(Np, {
                    key: 1,
                    "tab-list": u(P),
                    "all-active": u(st),
                    "num-list": u(it),
                    onAddNumber: u(h),
                    onAllAddnum: u(y)
                }, null, 8, ["tab-list", "all-active", "num-list", "onAddNumber", "onAllAddnum"])) : w("v-if", !0), w(" 玩法 "), N(dp, {
                    class: "mb30",
                    "roll-num": u(kt),
                    "ban-bet-pay": u(xt),
                    "bet-pay-list": u($t),
                    "bet-pay-id": u(ft),
                    duplex: u(ee),
                    onOnBetpay: u(k)
                }, null, 8, ["roll-num", "ban-bet-pay", "bet-pay-list", "bet-pay-id", "duplex", "onOnBetpay"]), w(" 投注金额 "), N(vp, {
                    count: u(Rt),
                    list: u(Ot),
                    onOnAmount: u(T)
                }, null, 8, ["count", "list", "onOnAmount"])])]), w(" 开奖记录 && 我的比赛记录 "), N(Ub), N(Rp, {
                    "total-amount": u(Gt),
                    "bet-quantity": u(_t),
                    onOnBet: u(C)
                }, null, 8, ["total-amount", "bet-quantity", "onOnBet"]), w(" 投注弹窗 "), N(dg, {
                    betShow: u(ot),
                    "onUpdate:betShow": vt[12] || (vt[12] = zt => se(ot) ? ot.value = zt : null),
                    "bet-quantity": u(_t),
                    "lottery-tab": u(O),
                    "time-index": u(K),
                    "total-amount": u(Gt),
                    balance: u(Le),
                    "lottery-list": u(nt),
                    "bet-type": u(At),
                    "multiple-list": u(wt),
                    "count-val": u(Y),
                    "onUpdate:countVal": vt[13] || (vt[13] = zt => se(Y) ? Y.value = zt : null),
                    checked: u(Z),
                    "onUpdate:checked": vt[14] || (vt[14] = zt => se(Z) ? Z.value = zt : null),
                    "pre-sale-rule": u(W),
                    "onUpdate:preSaleRule": vt[15] || (vt[15] = zt => se(W) ? W.value = zt : null),
                    onCheckboxChange: u(L),
                    onOnCancel: vt[16] || (vt[16] = zt => ot.value = !1),
                    onGetClear: u(c),
                    onOnStepper: u(z),
                    onOnMltiple: u($),
                    onChangeStep: u(f),
                    onOnBet: u(I)
                }, {
                    default: D(() => [N(Bg, {
                        num: u(J),
                        "tab-id": u(lt),
                        "bet-pay": u(ft),
                        "duple-list": u(it),
                        "tab-list": u(P)
                    }, null, 8, ["num", "tab-id", "bet-pay", "duple-list", "tab-list"])]),
                    _: 1
                }, 8, ["betShow", "bet-quantity", "lottery-tab", "time-index", "total-amount", "balance", "lottery-list", "bet-type", "multiple-list", "count-val", "checked", "pre-sale-rule", "onCheckboxChange", "onGetClear", "onOnStepper", "onOnMltiple", "onChangeStep", "onOnBet"]), w(" 投注成功提示 "), N(We, {
                    show: u(le),
                    "onUpdate:show": vt[17] || (vt[17] = zt => se(le) ? le.value = zt : null),
                    position: "center",
                    class: "x-4d-prompt",
                    style: {
                        borderRadius: "10px",
                        width: "8rem",
                        height: "80px"
                    }
                }, {
                    default: D(() => [t("div", im, [N(Be, {
                        name: "success",
                        class: "svg"
                    }), E(" " + e(ze.$t("code402")), 1)])]),
                    _: 1
                }, 8, ["show"]), w(" 预售规则 "), N(We, {
                    show: u(W),
                    "onUpdate:show": vt[19] || (vt[19] = zt => se(W) ? W.value = zt : null),
                    class: "PreSaleRule",
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: D(() => [t("div", nm, [t("div", am, e(u(i)("presaleRules")), 1), t("div", om, e(ze.$t("betPopTXT")), 1), t("div", sm, [t("div", {
                        class: "btn",
                        onClick: vt[18] || (vt[18] = zt => W.value = !1)
                    }, e(u(i)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"]), w(` <van-popup v-model:show="preSaleRule" position="center" class="x-4d-prompt" :style="{ borderRadius: '10px',width:'8rem',height:'80px' }">
            <div class="box">
                
                预售规则
            </div>
        </van-popup> `)])
            }
        }
    });
const cm = U(lm, [
        ["__scopeId", "data-v-c4174cb0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4D/index.vue"]
    ]),
    zA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: cm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    rm = {
        class: "LR"
    },
    um = {
        class: "lotterys"
    },
    dm = ["onClick"],
    pm = {
        alt: ""
    },
    gm = {
        class: "date"
    },
    bm = {
        class: "dateBox"
    },
    mm = {
        class: "result"
    },
    _m = V({
        __name: "index",
        setup(s) {
            const {
                typeList: i,
                getTypeList: o,
                gameResultByType: l,
                gameResultByTypeO: g
            } = gi();
            o();
            const {
                t: m
            } = mt(), r = rt(), c = v(0), p = Q(() => i.value ? i.value.slice(1) : []), {
                minDate: d,
                maxDate: _
            } = ba(0), b = pe(_).startOf("day"), k = v(!1), T = Kt({
                type: 0,
                date: b.format("YYYY-MM-DD")
            });
            Pt(() => p, () => {
                p.value.length > 0 && (T.type = p.value[0].typeId, l(T))
            }, {
                deep: !0,
                immediate: !0
            });
            const C = Q(() => pe(T.date).format("YYYY-MM-DD") + " " + m(`${pe(T.date).format("dddd")}`)),
                h = z => {
                    k.value = !1, T.date = pe(z).format("YYYY-MM-DD"), l(T)
                };

            function y(z, f) {
                c.value = f, T.type = z.typeId, l(T)
            }
            return (z, f) => {
                const $ = H("NavBar"),
                    L = H("svg-icon"),
                    I = H("ArSelect"),
                    B = H("van-calendar"),
                    x = Ht("lazy");
                return n(), a("div", rm, [N($, {
                    "left-arrow": "",
                    onClickLeft: f[0] || (f[0] = () => u(r).back()),
                    title: z.$t("d4Tip2")
                }, null, 8, ["title"]), t("div", um, [(n(!0), a(S, null, A(p.value, (G, P) => (n(), a("div", {
                    class: M(["main", {
                        active: c.value === P
                    }]),
                    onClick: R => y(G, P),
                    key: P
                }, [yt(t("img", pm, null, 512), [
                    [x, G.typeImg]
                ])], 10, dm))), 128))]), t("div", gm, [t("div", bm, [N(L, {
                    name: "arrLeft"
                }), N(I, {
                    onClickSelect: f[1] || (f[1] = G => k.value = !0),
                    selectName: C.value
                }, null, 8, ["selectName"]), N(L, {
                    name: "arrLeft"
                })])]), t("div", mm, [t("h1", null, e(z.$t("betResult")), 1), JSON.stringify(u(g)) !== "{}" ? (n(), tt(fn, {
                    key: 0,
                    data: u(g)
                }, null, 8, ["data"])) : (n(), tt(re, {
                    key: 1
                }))]), N(B, {
                    show: k.value,
                    "onUpdate:show": f[2] || (f[2] = G => k.value = G),
                    onCancel: f[3] || (f[3] = () => k.value = !1),
                    onConfirm: h,
                    "min-date": u(d),
                    "max-date": u(_)
                }, null, 8, ["show", "min-date", "max-date"])])
            }
        }
    });
const vm = U(_m, [
        ["__scopeId", "data-v-d1d6b410"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4DLotteryResults/index.vue"]
    ]),
    BA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: vm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    bi = s => (Ct("data-v-789ad0bd"), s = s(), Nt(), s),
    hm = {
        class: "oddsBox"
    },
    km = {
        class: "title"
    },
    fm = {
        class: "words"
    },
    ym = {
        class: "tabHead"
    },
    $m = {
        class: "tabCon1"
    },
    wm = {
        class: "item"
    },
    Tm = bi(() => t("div", null, null, -1)),
    Cm = bi(() => t("div", null, null, -1)),
    Nm = [Tm, Cm],
    Lm = {
        class: "tabHead h2"
    },
    zm = {
        class: "tabCon2"
    },
    Bm = {
        class: "tabHead h2"
    },
    Im = {
        key: 0
    },
    Sm = {
        key: 1
    },
    xm = {
        key: 2
    },
    Rm = bi(() => t("br", null, null, -1)),
    Gm = bi(() => t("br", null, null, -1)),
    Am = bi(() => t("br", null, null, -1)),
    Mm = bi(() => t("br", null, null, -1)),
    Pm = {
        class: "tabCon1 c2"
    },
    Dm = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), {
                getOddsList: l,
                oddsList: g
            } = gi();
            return Tt(() => {
                l()
            }), (m, r) => {
                const c = H("NavBar"),
                    p = H("svg-icon");
                return n(), a("div", hm, [N(c, {
                    "left-arrow": "",
                    title: u(i)("odds"),
                    onClickLeft: r[0] || (r[0] = () => u(o).back())
                }, null, 8, ["title"]), (n(!0), a(S, null, A(u(g), d => {
                    var _, b, k, T, C;
                    return n(), a("div", {
                        class: "items",
                        key: d.playTypeId
                    }, [t("div", km, [t("div", fm, e(u(i)(`d4gamePay${d.playTypeId}`)), 1), N(p, {
                        name: "oddBg",
                        class: "odd"
                    })]), d.playTypeId != 2 ? (n(), a(S, {
                        key: 0
                    }, [t("div", ym, [t("span", null, e(u(i)("d4gameType1")), 1), t("span", null, e(u(i)("d4gameType2")), 1)]), t("div", $m, [(n(!0), a(S, null, A((_ = d.lists) == null ? void 0 : _.filter(h => [1, 2].includes(h.type)), h => (n(), a("div", {
                        key: h.type
                    }, [(n(!0), a(S, null, A(h.list, y => (n(), a("div", {
                        class: "item",
                        key: y.playId
                    }, [t("div", null, e(u(i)(`d4gameType${y.code}`)), 1), t("div", null, e(y.odds > 0 ? y.odds : y.oddsDefault), 1)]))), 128)), h.list.length < 5 ? (n(), a(S, {
                        key: 0
                    }, A(2, y => t("div", wm, Nm)), 64)) : w("v-if", !0)]))), 128))]), t("div", Lm, [(n(!0), a(S, null, A((k = (b = d.lists) == null ? void 0 : b.filter(h => [3].includes(h.type))[0]) == null ? void 0 : k.list, h => (n(), a("span", {
                        key: h.playId
                    }, e(u(i)(`d4gameType${h.playId}`)), 1))), 128))]), t("div", zm, [(n(!0), a(S, null, A((C = (T = d.lists) == null ? void 0 : T.filter(h => [3].includes(h.type))[0]) == null ? void 0 : C.list, h => (n(), a("div", {
                        key: h.playId
                    }, e(h.odds > 0 ? h.odds : h.oddsDefault), 1))), 128))])], 64)) : (n(!0), a(S, {
                        key: 1
                    }, A(d.lists, h => (n(), a(S, null, [t("div", Bm, [h.type == 1 ? (n(), a("span", Im, e(u(i)("d4gameType1")), 1)) : w("v-if", !0), h.type == 2 ? (n(), a("span", Sm, e(u(i)("d4gameType2")), 1)) : w("v-if", !0), h.type == 3 ? (n(), a("span", xm, e(u(i)("d4Tip3")), 1)) : w("v-if", !0), t("span", null, [E(e(u(i)("d4Tip4")), 1), Rm, E("24")]), t("span", null, [E(e(u(i)("d4Tip4")), 1), Gm, E("12")]), t("span", null, [E(e(u(i)("d4Tip4")), 1), Am, E("6")]), t("span", null, [E(e(u(i)("d4Tip4")), 1), Mm, E("4")])]), t("div", Pm, [(n(!0), a(S, null, A(h.list, y => (n(), a("div", {
                        class: "itemR item",
                        key: y.playId
                    }, [t("div", null, e(u(i)(`d4gameType${y.code}`)), 1), t("div", null, e(y.odds24 > 0 ? y.odds24 : y.oddsDefault24), 1), t("div", null, e(y.odds12 > 0 ? y.odds12 : y.oddsDefault12), 1), t("div", null, e(y.odds6 > 0 ? y.odds6 : y.oddsDefault6), 1), t("div", null, e(y.odds4 > 0 ? y.odds4 : y.oddsDefault4), 1)]))), 128))])], 64))), 256))])
                }), 128))])
            }
        }
    });
const Om = U(Dm, [
        ["__scopeId", "data-v-789ad0bd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4DOdds/index.vue"]
    ]),
    IA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Om
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Em = {
        class: "playBox"
    },
    qm = {
        class: "con"
    },
    jm = {
        class: "tip"
    },
    Hm = {
        class: "tip"
    },
    Wm = ["innerHTML"],
    Fm = {
        class: "txt"
    },
    Vm = {
        key: 0,
        class: "num"
    },
    Um = ["innerHTML"],
    Km = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), l = v(0), g = v([{
                title: i("d4gamePay1"),
                tip1: i("Play4DTip2"),
                tip2: i("Play4DTip4"),
                txt: {
                    tip1: "[1234]",
                    tip2: "",
                    tip3: [],
                    tip4: i("Play4DTip1", ["1234"])
                }
            }, {
                title: i("d4gamePay5"),
                tip1: i("Play4DTip5"),
                tip2: i("Play4DTip6"),
                txt: {
                    tip1: "[123R]",
                    tip2: i("Play4DTip10", [10]),
                    tip3: ["1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239"],
                    tip4: i("Play4DTip1", ["1234"])
                }
            }, {
                title: i("d4gamePay2"),
                tip1: i("Play4DTip7"),
                tip2: i("Play4DTip8"),
                txt: {
                    tip1: "[1122]",
                    tip2: i("Play4DTip11"),
                    tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                    tip4: i("Play4DTip1", ["1212"])
                }
            }, {
                title: i("d4gamePay3"),
                tip1: i("Play4DTip9"),
                tip2: i("Play4DTip8"),
                txt: {
                    tip1: "[1122]",
                    tip2: i("Play4DTip10", [6]),
                    tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                    tip4: i("Play4DTip1", ["1212"])
                }
            }, {
                title: i("d4gamePay4"),
                tip1: i("Play4DTip3"),
                tip2: i("Play4DTip4"),
                txt: {
                    tip1: "[1234]",
                    tip2: i("Play4DTip10", [2]),
                    tip3: ["1234", "4321"],
                    tip4: i("Play4DTip1", ["1234"])
                }
            }]);
            return (m, r) => {
                const c = H("NavBar"),
                    p = H("van-icon"),
                    d = H("van-tab"),
                    _ = H("van-tabs");
                return n(), a("div", Em, [N(c, {
                    "left-arrow": "",
                    title: u(i)("lotteryManual"),
                    onClickLeft: r[0] || (r[0] = () => u(o).back())
                }, null, 8, ["title"]), N(_, {
                    active: l.value,
                    "onUpdate:active": r[1] || (r[1] = b => l.value = b),
                    type: "card",
                    "swipe-threshold": 3
                }, {
                    default: D(() => [(n(!0), a(S, null, A(g.value, (b, k) => (n(), tt(d, {
                        title: b.title,
                        key: k
                    }, {
                        default: D(() => [t("div", qm, [t("h1", null, [N(p, {
                            name: "play",
                            class: "icon",
                            size: "20"
                        }), E(e(u(i)("betting")), 1)]), t("div", jm, e(b.tip1), 1), t("h1", null, [N(p, {
                            name: "play",
                            class: "icon",
                            size: "20"
                        }), E(e(u(i)("winningconditions")), 1)]), t("div", Hm, [t("span", {
                            innerHTML: b.tip2
                        }, null, 8, Wm)]), t("div", Fm, [t("div", null, e(u(i)("example")), 1), t("div", null, e(u(i)("betting")) + ":   " + e(b.txt.tip1), 1), t("div", null, e(b.txt.tip2), 1), b.txt.tip3.length > 0 ? (n(), a("div", Vm, [(n(!0), a(S, null, A(b.txt.tip3, (T, C) => (n(), a("span", {
                            key: C
                        }, e(T), 1))), 128))])) : w("v-if", !0), t("div", null, [E(e(u(i)("result")) + ":   ", 1), t("span", {
                            innerHTML: b.txt.tip4
                        }, null, 8, Um)])])])]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const Xm = U(Km, [
        ["__scopeId", "data-v-fa33b84e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4DPlay/index.vue"]
    ]),
    SA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Qm = {
        class: "MG"
    },
    Ym = V({
        __name: "index",
        setup(s) {
            const {
                getTypeList: i,
                typeList: o,
                getMy4DHistory: l
            } = gi();
            i();
            const {
                t: g
            } = mt(), m = rt(), r = v(!1), c = v(g("all")), p = Kt({
                type: 0,
                date: "",
                pageSize: 20,
                pageNo: 1
            });
            l(p);
            const d = async ({
                selectedOptions: _
            }) => {
                r.value = !1, p.type = _[0].typeId, p.pageNo = 1, c.value = _[0].typeName, l(p)
            };
            return (_, b) => {
                const k = H("NavBar"),
                    T = H("ArSelect"),
                    C = H("van-picker"),
                    h = H("van-popup");
                return n(), a("div", Qm, [N(k, {
                    "left-arrow": "",
                    onClickLeft: b[0] || (b[0] = () => u(m).back()),
                    title: _.$t("xosoTxt73")
                }, null, 8, ["title"]), N(T, {
                    onClickSelect: b[1] || (b[1] = y => r.value = !0),
                    selectName: c.value
                }, null, 8, ["selectName"]), N(Da, {
                    pageQuery: p,
                    "onUpdate:pageQuery": b[2] || (b[2] = y => p = y)
                }, null, 8, ["pageQuery"]), N(h, {
                    show: r.value,
                    "onUpdate:show": b[4] || (b[4] = y => r.value = y),
                    round: "",
                    position: "bottom"
                }, {
                    default: D(() => [N(C, {
                        "columns-field-names": {
                            text: "typeName",
                            value: "typeId"
                        },
                        columns: u(o),
                        onCancel: b[3] || (b[3] = y => r.value = !1),
                        onConfirm: d
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Zm = U(Ym, [
        ["__scopeId", "data-v-34a342e1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/4DmyGame/index.vue"]
    ]),
    xA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Zm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Jm = {
        class: "Wallet__C"
    },
    t_ = {
        class: "Wallet__C-balance"
    },
    e_ = {
        class: "Wallet__C-balance-l1"
    },
    i_ = {
        class: "Wallet__C-balance-l2"
    },
    n_ = {
        class: "Wallet__C-balance-l3"
    },
    a_ = V({
        __name: "Wallet",
        setup(s, {
            expose: i
        }) {
            const {
                t: o
            } = mt(), l = v(0), g = async (c = !0) => {
                const p = await at(mn());
                p && (l.value = (p == null ? void 0 : p.data.amount) || 0, c && _e(o("refreshSuccess")))
            }, m = rt(), r = c => {
                m.push({
                    name: c
                })
            };
            return Tt(() => {
                g(!1)
            }), i({
                getWinsUserAmount: g
            }), (c, p) => {
                const d = Ht("throttle-click");
                return n(), a("div", Jm, [t("div", t_, [t("div", e_, [yt((n(), a("div", null, [E(e(u(Bt)(l.value)), 1)])), [
                    [d, {
                        handler: g,
                        wait: 2e3
                    }]
                ])]), t("div", i_, [t("div", null, e(c.$t("walletBalance")), 1)]), t("div", n_, [t("div", {
                    onClick: p[0] || (p[0] = _ => r("Withdraw"))
                }, e(c.$t("withdraw")), 1), t("div", {
                    onClick: p[1] || (p[1] = _ => r("Recharge"))
                }, e(c.$t("recharge")), 1)])])])
            }
        }
    });
const Mi = U(a_, [
        ["__scopeId", "data-v-7dd1adab"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/Wallet.vue"]
    ]),
    o_ = {
        class: "GameList__C"
    },
    s_ = ["onClick"],
    l_ = ["innerHTML"],
    c_ = V({
        __name: "GameList",
        props: {
            gameList: {
                type: null,
                required: !0,
                default: {
                    type: Array,
                    default: () => []
                }
            },
            currentGameIndex: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            }
        },
        setup(s) {
            const i = s;
            return (o, l) => (n(), a("div", o_, [(n(!0), a(S, null, A(i.gameList, (g, m) => (n(), a("div", {
                key: m,
                class: M(["GameList__C-item", {
                    active: o.currentGameIndex == m
                }]),
                onClick: r => o.$emit("changeGame", m)
            }, [t("div", {
                innerHTML: g.typeName
            }, null, 8, l_)], 10, s_))), 128))]))
        }
    });
const Pi = U(c_, [
        ["__scopeId", "data-v-17d56002"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/GameList.vue"]
    ]),
    r_ = {
        class: "TimeLeft__C-PreSale"
    },
    u_ = {
        class: "TimeLeft__C-PreSale-head"
    },
    d_ = {
        class: "TimeLeft__C-PreSale-body"
    },
    p_ = ["innerHTML"],
    g_ = {
        class: "TimeLeft__C-PreSale-foot"
    },
    b_ = V({
        __name: "rule",
        props: {
            howPlayShow: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            }
        },
        emits: ["close"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = Q({
                    get() {
                        return o.howPlayShow || !1
                    },
                    set(g) {
                        g || i("close")
                    }
                });
            return (g, m) => {
                const r = H("van-popup");
                return n(), a(S, null, [w(" 规则弹层 begin"), N(r, {
                    show: l.value,
                    "onUpdate:show": m[1] || (m[1] = c => l.value = c),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: D(() => [t("div", r_, [t("div", u_, e(g.$t("winTrxIndicate")), 1), t("div", d_, [t("div", {
                        innerHTML: s.gamePresentation
                    }, null, 8, p_)]), t("div", g_, [t("div", {
                        class: "TimeLeft__C-PreSale-foot-btn",
                        onClick: m[0] || (m[0] = c => i("close"))
                    }, e(g.$t("winTrxClose")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Di = U(b_, [
        ["__scopeId", "data-v-0bba67ea"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/rule.vue"]
    ]),
    Oa = s => (Ct("data-v-69f351dd"), s = s(), Nt(), s),
    m_ = {
        class: "FDTL__C"
    },
    __ = {
        class: "FDTL__C-l1"
    },
    v_ = {
        class: "left"
    },
    h_ = Oa(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none"
    }, [t("path", {
        d: "M8.5484 25.8291L8.54089 25.8366L8.53366 25.8444C7.97797 26.4409 7.47942 26.802 7.06631 26.9804C6.65908 27.1562 6.37147 27.1416 6.17169 27.0556C5.96753 26.9677 5.74252 26.7566 5.56263 26.3155C5.38195 25.8725 5.26602 25.2383 5.26602 24.4V9.38666C5.26602 6.69084 5.59509 5.24007 6.36083 4.42157C7.11326 3.6173 8.44055 3.26666 10.9593 3.26666H21.0393C23.5584 3.26666 24.8852 3.61741 25.6358 4.42118C26.3997 5.23909 26.726 6.68929 26.7193 9.38518V9.38666V24.3867C26.7193 25.2254 26.6041 25.8598 26.4242 26.3031C26.2451 26.7444 26.0211 26.9549 25.8182 27.0425C25.6198 27.1281 25.3328 27.1431 24.9244 26.967C24.5105 26.7884 24.0102 26.4271 23.4512 25.8305C22.7918 25.1231 21.9328 24.7739 21.0701 24.8209C20.2074 24.8679 19.3916 25.3082 18.8127 26.08L18.8123 26.0806L17.4676 27.8779C17.4673 27.8783 17.467 27.8787 17.4667 27.8791C17.0231 28.4644 16.4844 28.71 15.9927 28.71C15.501 28.71 14.9623 28.4644 14.5187 27.8791C14.5184 27.8787 14.5181 27.8783 14.5177 27.8779L13.1733 26.0808C13.1732 26.0807 13.1732 26.0806 13.1731 26.0806C12.0033 24.5156 9.90283 24.3999 8.55577 25.8217L8.5484 25.8291ZM8.43935 14.6667C8.43935 15.7314 9.30798 16.6 10.3727 16.6C11.4374 16.6 12.306 15.7314 12.306 14.6667C12.306 13.602 11.4374 12.7333 10.3727 12.7333C9.30798 12.7333 8.43935 13.602 8.43935 14.6667ZM8.43935 9.33333C8.43935 10.398 9.30798 11.2667 10.3727 11.2667C11.4374 11.2667 12.306 10.398 12.306 9.33333C12.306 8.26863 11.4374 7.4 10.3727 7.4C9.30798 7.4 8.43935 8.26863 8.43935 9.33333ZM14.306 16.2667H21.6393C22.5174 16.2667 23.2393 15.5447 23.2393 14.6667C23.2393 13.7886 22.5174 13.0667 21.6393 13.0667H14.306C13.428 13.0667 12.706 13.7886 12.706 14.6667C12.706 15.5447 13.428 16.2667 14.306 16.2667ZM14.306 10.9333H21.6393C22.5174 10.9333 23.2393 10.2114 23.2393 9.33333C23.2393 8.45529 22.5174 7.73333 21.6393 7.73333H14.306C13.428 7.73333 12.706 8.45529 12.706 9.33333C12.706 10.2114 13.428 10.9333 14.306 10.9333Z",
        stroke: "currentColor",
        "stroke-width": "1.2"
    })], -1)),
    k_ = {
        class: "FDTL__C-l2"
    },
    f_ = {
        class: "FDTL__C-time"
    },
    y_ = Oa(() => t("div", {
        notime: ""
    }, ":", -1)),
    $_ = {
        class: "FDTL__C-l3"
    },
    w_ = {
        class: "box"
    },
    T_ = ["num"],
    C_ = Ri('<div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div>', 32),
    N_ = ["num"],
    L_ = V({
        __name: "TimeLeft",
        props: {
            premium: {
                type: null,
                required: !0
            },
            currentInfo: {
                type: null,
                required: !0
            },
            currentGame: {
                type: null,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = v(0),
                g = v([{
                    arr: []
                }, {
                    arr: []
                }, {
                    arr: []
                }, {
                    arr: []
                }, {
                    arr: []
                }]);
            Pt(() => o.premium, _ => {
                _ && (g.value = m(_))
            });
            const m = _ => {
                    let b = [];
                    for (let T = 0; T < _.length; T++) {
                        let C = _[T];
                        var k = [];
                        switch (C) {
                            case 9:
                                k.push(C - 8, C - 9, C);
                                break;
                            case 0:
                                k.push(C + 8, C + 9, C);
                                break;
                            default:
                                k.push(C - 2, C - 1, C)
                        }
                        b.push({
                            arr: k
                        })
                    }
                    return b
                },
                r = () => {
                    l.value = 1, setTimeout(() => {
                        l.value = 0
                    }, 3e3)
                },
                c = v(!1),
                p = Pe(),
                d = () => {
                    c.value = !0, p.get5DRule(o.currentGame.typeID)
                };
            return i({
                animationShow: r
            }), (_, b) => (n(), a(S, null, [t("div", m_, [t("div", __, [t("div", v_, [t("div", null, e(_.$t("betIssue")), 1), t("div", {
                class: "FDTL__C-rule",
                onClick: d
            }, [h_, E(e(_.$t("winTrxIndicate")), 1)])]), t("div", null, e(_.$t("k3TimeLeftToBuy")), 1)]), t("div", k_, [t("div", null, e(o.currentInfo.gameNo), 1), t("div", f_, [t("div", null, e(_.currentInfo.time1), 1), t("div", null, e(_.currentInfo.time2), 1), y_, t("div", null, e(_.currentInfo.time3), 1), t("div", null, e(_.currentInfo.time4), 1)])]), t("div", $_, [t("div", w_, [(n(!0), a(S, null, A(g.value, (k, T) => (n(), a("div", {
                key: T,
                class: "slot-column"
            }, [t("div", {
                class: M(["slot-transform", "transform" + T, l.value == 1 && "slot-scroll"])
            }, [(n(!0), a(S, null, A(k.arr, (C, h) => (n(), a("div", {
                class: "slot-num",
                num: k,
                key: "2" + h
            }, e(C), 9, T_))), 128)), C_, (n(!0), a(S, null, A(k.arr, (C, h) => (n(), a("div", {
                class: "slot-num",
                num: k,
                key: "2" + h
            }, e(C), 9, N_))), 128))], 2)]))), 128))])])]), w(" 规则弹层 begin"), N(Di, {
                howPlayShow: c.value,
                gamePresentation: _.currentGame.gamePresentation,
                onClose: b[0] || (b[0] = k => c.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const z_ = U(L_, [
        ["__scopeId", "data-v-69f351dd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/TimeLeft.vue"]
    ]),
    B_ = {
        class: "FDB__C-nav"
    },
    I_ = ["onClick"],
    S_ = {
        class: "FDB__C-H"
    },
    x_ = ["onClick"],
    R_ = {
        class: "FDB__C-Num"
    },
    G_ = ["txt", "onClick"],
    A_ = {
        class: "round"
    },
    M_ = {
        class: "rate"
    },
    P_ = V({
        __name: "BetCom",
        props: {
            betTypeNameMap: {
                type: null,
                required: !0
            },
            betType: {
                type: null,
                required: !0
            },
            BettingH: {
                type: null,
                required: !0
            },
            onTabID: {
                type: null,
                required: !0
            },
            numberChack: {
                type: null,
                required: !0
            },
            OddsList: {
                type: null,
                required: !0
            }
        },
        emits: ["changeType", "onTab", "numberTab"],
        setup(s, {
            emit: i
        }) {
            return (o, l) => (n(), a(S, null, [t("div", B_, [(n(!0), a(S, null, A(o.betTypeNameMap, (g, m) => (n(), a("div", {
                key: m,
                class: M({
                    active: o.betType == m
                }),
                onClick: r => i("changeType", m)
            }, e(g), 11, I_))), 128))]), t("div", S_, [(n(!0), a(S, null, A(o.BettingH, (g, m) => (n(), a("div", {
                key: m,
                class: M({
                    active: o.onTabID == g.id
                }),
                onClick: r => i("onTab", g.id)
            }, [t("span", null, e(g.name), 1), t("span", null, e(g.rate), 1)], 10, x_))), 128))]), t("div", R_, [o.betType != 5 ? (n(), a(S, {
                key: 0
            }, A(10, (g, m) => t("div", {
                key: m,
                txt: m,
                class: M({
                    active: o.numberChack[m]
                }),
                onClick: r => i("numberTab", m)
            }, [t("div", A_, e(m), 1), t("div", M_, e(o.OddsList[0].playRate ? o.OddsList[0].playRate : o.OddsList[0].playRate_Original), 1)], 10, G_)), 64)) : w("v-if", !0)])], 64))
        }
    });
const ia = U(P_, [
        ["__scopeId", "data-v-baf77bdf"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/BetCom.vue"]
    ]),
    D_ = s => (Ct("data-v-7181abf7"), s = s(), Nt(), s),
    O_ = {
        class: "Betting__Popup-body"
    },
    E_ = {
        class: "Betting__Popup-body-line"
    },
    q_ = {
        class: "Betting__Popup-body-line-list"
    },
    j_ = ["onClick"],
    H_ = {
        class: "Betting__Popup-body-line"
    },
    W_ = {
        class: "Betting__Popup-body-line-btnL"
    },
    F_ = {
        class: "Betting__Popup-body-line"
    },
    V_ = D_(() => t("div", null, null, -1)),
    U_ = {
        class: "Betting__Popup-body-line-list"
    },
    K_ = ["onClick"],
    X_ = {
        class: "Betting__Popup-body-line"
    },
    Q_ = {
        class: "Betting__Popup-foot"
    },
    Y_ = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    Z_ = {
        class: "Betting__Popup-PreSale"
    },
    J_ = {
        class: "Betting__Popup-PreSale-head"
    },
    tv = {
        class: "Betting__Popup-PreSale-body"
    },
    ev = {
        class: "Betting__Popup-PreSale-foot"
    },
    iv = V({
        __name: "BettingPopup",
        props: {
            currentInfo: {
                type: null,
                required: !0
            },
            currentGame: {
                type: null,
                required: !0
            },
            bettingPopupShow: {
                type: null,
                required: !0
            },
            betTypeList: {
                type: null,
                required: !0
            },
            selectInfo: {
                type: null,
                required: !0
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "computedCoin", "submitBetting"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = mt(),
                g = v(!1),
                m = v(!0),
                r = Q(() => o.currentGame.betMultiple.split("|"));
            Pt(() => r, () => {
                o.selectInfo.count = r.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            let c = Q({
                get() {
                    return o.bettingPopupShow || !1
                },
                set(C) {
                    i("update:bettingPopupShow", C)
                }
            });
            const p = C => {
                    switch (C) {
                        case 1:
                            o.selectInfo.count > 1 && o.selectInfo.count--;
                            break;
                        case 2:
                            o.selectInfo.count++;
                            break
                    }
                    i("computedCoin")
                },
                d = C => {
                    C > 0 && (o.selectInfo.count = Math.floor(C)), i("computedCoin")
                },
                _ = C => {
                    o.selectInfo.count = C, i("computedCoin")
                },
                b = C => {
                    o.selectInfo.coin = C, i("computedCoin")
                },
                k = () => {
                    g.value = !1, m.value = !0
                },
                T = async () => {
                    if (!m.value) {
                        _e(l("agreePresaleRules"));
                        return
                    }
                    i("submitBetting")
                };
            return (C, h) => {
                const y = H("van-field"),
                    z = H("van-popup"),
                    f = Ht("throttle-click");
                return n(), a(S, null, [w(" 投注内容 begin "), N(z, {
                    show: u(c),
                    "onUpdate:show": h[6] || (h[6] = $ => se(c) ? c.value = $ : c = $),
                    position: "bottom",
                    style: {
                        "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                    },
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: D(() => [t("div", O_, [be(C.$slots, "default", {}, void 0, !0), t("div", E_, [E(e(u(l)("amount")) + " ", 1), t("div", q_, [(n(!0), a(S, null, A(C.betTypeList, ($, L) => (n(), a("div", {
                        key: L,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: o.selectInfo.coin == $
                        }]),
                        onClick: I => b($)
                    }, e($), 11, j_))), 128))])]), t("div", H_, [E(e(u(l)("numbers")) + " ", 1), t("div", W_, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: o.selectInfo.count > 0
                        }]),
                        onClick: h[0] || (h[0] = $ => p(1))
                    }, "-", 2), N(y, {
                        class: "Betting__Popup-input",
                        modelValue: o.selectInfo.count,
                        "onUpdate:modelValue": h[1] || (h[1] = $ => o.selectInfo.count = $),
                        modelModifiers: {
                            number: !0
                        },
                        type: "digit",
                        maxlength: 4,
                        onInput: d
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: h[2] || (h[2] = $ => p(2))
                    }, "+")])]), t("div", F_, [V_, t("div", U_, [(n(!0), a(S, null, A(r.value, ($, L) => (n(), a("div", {
                        key: L,
                        class: M(["Betting__Popup-body-line-item setBorder", {
                            bgcolor: o.selectInfo.count == $
                        }]),
                        onClick: I => _($)
                    }, " X" + e($), 11, K_))), 128))])]), t("div", X_, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: m.value
                        }]),
                        onClick: h[3] || (h[3] = $ => m.value = !m.value)
                    }, e(u(l)("agree")), 3), t("span", {
                        onClick: h[4] || (h[4] = $ => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(u(l)("presaleRules")), 1)])]), t("div", Q_, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: h[5] || (h[5] = $ => i("clearBetting"))
                    }, e(u(l)("cancel")), 1), yt((n(), a("div", Y_, [E(e(u(l)("totalAmount")) + e(u(Bt)(o.selectInfo.allCoin || 0)), 1)])), [
                        [f, {
                            handler: T,
                            wait: 2e3
                        }]
                    ])])]),
                    _: 3
                }, 8, ["show"]), w(" 规则弹层 begin"), N(z, {
                    show: g.value,
                    "onUpdate:show": h[7] || (h[7] = $ => g.value = $),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: D(() => [t("div", Z_, [t("div", J_, e(u(l)("presaleRules")), 1), t("div", tv, e(C.$t("betPopTXT")), 1), t("div", ev, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: k
                    }, e(u(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const nv = U(iv, [
        ["__scopeId", "data-v-7181abf7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/BettingPopup.vue"]
    ]),
    av = {
        class: "FDB__C"
    },
    ov = {
        class: "FDB__C-mark"
    },
    sv = V({
        __name: "Betting",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({})
            },
            ProhibitBuyTime: {
                type: Number,
                default: 5
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["betting", "changeBettingP"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = mt();
            v();
            const m = v(!1);
            Pt(() => m.value, P => {
                P && (T.value.coin = h.value[0])
            });
            const r = v(0),
                c = v(["A", "B", "C", "D", "E", "SUM"]),
                p = v([{
                    playID: 1,
                    playType: 1,
                    playBet: "0-9",
                    playResult: "0-9",
                    playRate: 9,
                    playRate_Original: 9
                }, {
                    playID: 2,
                    playType: 2,
                    playBet: "H",
                    playResult: "H",
                    playRate: 2,
                    playRate_Original: 2
                }, {
                    playID: 3,
                    playType: 2,
                    playBet: "L",
                    playResult: "L",
                    playRate: 2,
                    playRate_Original: 2
                }, {
                    playID: 4,
                    playType: 3,
                    playBet: "O",
                    playResult: "O",
                    playRate: 2,
                    playRate_Original: 2
                }, {
                    playID: 5,
                    playType: 3,
                    playBet: "E",
                    playResult: "E",
                    playRate: 2,
                    playRate_Original: 2
                }]),
                d = v(0),
                _ = v([]),
                b = v([!1, !1, !1, !1, !1, !1, !1, !1]),
                k = Q(() => [{
                    id: 1,
                    name: g("k3Big"),
                    rate: p.value[1].playRate || p.value[1].playRate_Original
                }, {
                    id: 2,
                    name: g("k3Small"),
                    rate: p.value[2].playRate || p.value[2].playRate_Original
                }, {
                    id: 3,
                    name: g("k3Odd"),
                    rate: p.value[3].playRate || p.value[3].playRate_Original
                }, {
                    id: 4,
                    name: g("k3Even"),
                    rate: p.value[4].playRate || p.value[4].playRate_Original
                }]),
                T = v({
                    coin: 0,
                    count: 1,
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: ""
                }),
                C = Q(() => (l.currentInfo.passTime < l.ProhibitBuyTime && B(), l.currentInfo.passTime < l.ProhibitBuyTime)),
                h = Q(() => l.currentGame.scope ? l.currentGame.scope.split("|").map(P => Number(P)) : []),
                y = P => {
                    r.value = P, P == 5 && I()
                },
                z = async () => {
                    const [P, R] = await te(ps());
                    R && (p.value = R)
                },
                f = P => {
                    I(), d.value == P ? (d.value = 0, m.value = !0) : (d.value = P, m.value = !0), L()
                },
                $ = P => {
                    if (d.value = 0, b.value[P]) {
                        b.value[P] = !1;
                        const R = _.value.indexOf(P);
                        R > -1 && _.value.splice(R, 1), m.value = !0
                    } else _.value.push(P), b.value[P] = !0, m.value = !0;
                    L()
                },
                L = () => {
                    Jt(() => {
                        _.value.length > 0 ? T.value.allCoin = T.value.coin * T.value.count * _.value.length : d.value ? T.value.allCoin = T.value.coin * T.value.count : T.value.allCoin = 0
                    })
                },
                I = () => {
                    _.value = [];
                    for (let P = 0; b.value.length > P; P++) b.value[P] = !1;
                    L()
                },
                B = () => {
                    var P;
                    T.value.count = ((P = l.currentGame.betMultiple) == null ? void 0 : P.split("|")[0]) || 1, m.value = !1, x()
                },
                x = () => {
                    _.value = [], b.value = [!1, !1, !1, !1, !1, !1, !1, !1], d.value = 0
                },
                G = async () => {
                    if (T.value.count == 0) return Dt(g("bteNoCount"));
                    let P;
                    if (_.value.length > 0) P = _.value.join("|");
                    else switch (d.value) {
                        case 1:
                            P = "H";
                            break;
                        case 2:
                            P = "L";
                            break;
                        case 3:
                            P = "O";
                            break;
                        case 4:
                            P = "E";
                            break
                    }
                    if (!P) return Dt(g("pleaseBet"));
                    const R = {
                            issuenumber: l.currentInfo.gameNo,
                            typeId: l.currentGame.typeID,
                            amount: T.value.coin,
                            betCount: Number(T.value.count),
                            gameType: r.value + 1,
                            selectType: P
                        },
                        O = await at(_a(R));
                    (O == null ? void 0 : O.code) === 0 && (_e(g("code" + (O == null ? void 0 : O.msgCode))), m.value = !1, x(), o("betting", l.currentInfo.gameNo))
                };
            return Tt(() => {
                z()
            }), i({
                bettingPopupShow: m
            }), (P, R) => (n(), a("div", av, [yt(t("div", ov, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [
                [Zt, C.value]
            ]), N(ia, {
                betTypeNameMap: c.value,
                betType: r.value,
                BettingH: k.value,
                onTabID: d.value,
                OddsList: p.value,
                numberChack: b.value,
                onChangeType: y,
                onNumberTab: $,
                onOnTab: f
            }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"]), N(nv, {
                currentInfo: s.currentInfo,
                currentGame: s.currentGame,
                bettingPopupShow: m.value,
                betTypeList: h.value,
                selectInfo: T.value,
                onComputedCoin: L,
                onClearBetting: B,
                onSubmitBetting: G
            }, {
                default: D(() => [N(ia, {
                    betTypeNameMap: c.value,
                    betType: r.value,
                    BettingH: k.value,
                    onTabID: d.value,
                    OddsList: p.value,
                    numberChack: b.value,
                    onChangeType: y,
                    onNumberTab: $,
                    onOnTab: f
                }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"])]),
                _: 1
            }, 8, ["currentInfo", "currentGame", "bettingPopupShow", "betTypeList", "selectInfo"])]))
        }
    });
const lv = U(sv, [
        ["__scopeId", "data-v-28e57f6a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/Betting.vue"]
    ]),
    cv = {
        class: "RecordNav__C"
    },
    rv = ["onClick"],
    uv = V({
        __name: "RecordNav",
        props: {
            record: {
                type: String,
                default: "GameRecord"
            }
        },
        setup(s) {
            const i = s,
                {
                    t: o
                } = mt(),
                l = v([{
                    name: o("gameRecords"),
                    componentName: "GameRecord"
                }, {
                    name: o("chartTrends"),
                    componentName: "Trend"
                }, {
                    name: o("myGameRecords"),
                    componentName: "MyGameRecord"
                }]);
            return (g, m) => (n(), a("div", cv, [(n(!0), a(S, null, A(l.value, (r, c) => (n(), a("div", {
                key: c,
                onClick: p => g.$emit("changeC", r.componentName),
                class: M({
                    active: i.record == r.componentName
                })
            }, e(r.name), 11, rv))), 128))]))
        }
    });
const Oi = U(uv, [
        ["__scopeId", "data-v-72f81e71"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/RecordNav.vue"]
    ]),
    dv = {
        class: "GameRecord__C"
    },
    pv = {
        class: "GameRecord__C-head"
    },
    gv = {
        class: "GameRecord__C-body"
    },
    bv = {
        class: "numList"
    },
    mv = {
        class: "numItem"
    },
    _v = {
        class: "redNumItem"
    },
    vv = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    hv = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    kv = {
        class: "GameRecord__C-foot-page"
    },
    fv = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = v([]),
                g = v(4),
                m = v(10),
                r = v(1),
                c = () => {
                    r.value--, d()
                },
                p = () => {
                    r.value++, d()
                },
                d = async (_ = !1) => {
                    if (o.typeid == null) return;
                    _ && (r.value = 1);
                    const b = await at(va({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    l.value = (b == null ? void 0 : b.data.list) || [], g.value = (b == null ? void 0 : b.data.totalPage) || 0
                };
            return i({
                getData: d
            }), he(() => {
                d()
            }), (_, b) => {
                const k = H("van-col"),
                    T = H("van-row"),
                    C = H("van-icon");
                return n(), a("div", dv, [t("div", pv, [N(T, null, {
                    default: D(() => [N(k, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(_.$t("FDNumber")), 1)]),
                        _: 1
                    }), N(k, {
                        span: "12"
                    }, {
                        default: D(() => [E(e(_.$t("FDResult")), 1)]),
                        _: 1
                    }), N(k, {
                        span: "4"
                    }, {
                        default: D(() => [E(e(_.$t("FDTotal")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", gv, [l.value.length ? (n(!0), a(S, {
                    key: 0
                }, A(l.value, (h, y) => (n(), tt(T, {
                    key: y
                }, {
                    default: D(() => [N(k, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(h.issueNumber), 1)]),
                        _: 2
                    }, 1024), N(k, {
                        span: "12"
                    }, {
                        default: D(() => [t("div", bv, [(n(!0), a(S, null, A([...h.premium], (z, f) => (n(), a("div", mv, e(z), 1))), 256))])]),
                        _: 2
                    }, 1024), N(k, {
                        span: "4"
                    }, {
                        default: D(() => [t("span", _v, e(h.sumCount), 1)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", vv, [N(re)]))]), l.value.length ? (n(), a("div", hv, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: c
                }, [N(C, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", kv, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: p
                }, [N(C, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const yv = U(fv, [
        ["__scopeId", "data-v-9215aba8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/GameRecord.vue"]
    ]),
    $v = {
        class: "noticeBar__container"
    },
    wv = {
        class: "noticeBar__container-body"
    },
    Tv = {
        key: 0,
        class: "noticeBar__container-body-text"
    },
    Cv = V({
        __name: "index",
        props: {
            color: {
                type: String,
                required: !0,
                default: "red"
            }
        },
        setup(s) {
            const i = rt(),
                o = Te(),
                l = v(null),
                g = v(o.messageList),
                m = async () => {
                    const r = await at(gs({
                        pageNo: 1,
                        pageSize: 5
                    }));
                    if (r) {
                        if (o.setMessage(r.data.list), g.value = r.data.list, !g.value.length) return;
                        l.value && clearInterval(l.value), l.value = setInterval(() => {
                            g.value.push(g.value.shift())
                        }, 7e3)
                    }
                };
            return Tt(() => {
                g.value || setTimeout(() => {
                    m()
                }, 1e3)
            }), (r, c) => {
                var d;
                const p = H("svg-icon");
                return n(), a("div", $v, [N(p, {
                    name: "noticeBarSpeaker"
                }), t("div", wv, [g.value && g.value[0] && g.value[0].siteMessage ? (n(), a("div", Tv, e((d = g.value[0]) == null ? void 0 : d.siteMessage), 1)) : w("v-if", !0)]), t("button", {
                    onClick: c[0] || (c[0] = _ => u(i).push({
                        name: "Notification"
                    })),
                    class: "hotIcon"
                }, e(r.$t("more")), 1)])
            }
        }
    }),
    Ei = U(Cv, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/NoticeBar/index.vue"]
    ]),
    Nv = {
        class: "Trend__C"
    },
    Lv = {
        class: "Trend__C-body1"
    },
    zv = {
        class: "Trend__C-nav"
    },
    Bv = ["onClick"],
    Iv = {
        class: "Trend__C-body1-line"
    },
    Sv = {
        key: 0,
        class: "Trend__C-body1-line"
    },
    xv = {
        class: "Trend__C-body1-line-num"
    },
    Rv = {
        key: 1,
        class: "Trend__C-body1-line"
    },
    Gv = {
        class: "Trend__C-body1-line-num"
    },
    Av = {
        key: 2,
        class: "Trend__C-body1-line"
    },
    Mv = {
        class: "Trend__C-body1-line-num"
    },
    Pv = {
        key: 3,
        class: "Trend__C-body1-line"
    },
    Dv = {
        class: "Trend__C-body1-line-num"
    },
    Ov = {
        class: "Trend__C-head"
    },
    Ev = {
        class: "Trend__C-body2"
    },
    qv = ["IssueNumber", "Number", "Colour", "rowId"],
    jv = {
        class: "Trend__C-body2-IssueNumber"
    },
    Hv = {
        class: "Trend__C-body2-Num"
    },
    Wv = ["id"],
    Fv = {
        key: 1,
        class: "Trend__C-body2-empty"
    },
    Vv = {
        key: 0,
        class: "Trend__C-foot"
    },
    Uv = {
        class: "Trend__C-foot-page"
    },
    Kv = V({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = v([]),
                g = v([]),
                m = v(),
                r = v(),
                c = v(),
                p = v(),
                d = v(),
                _ = v(["A", "B", "C", "D", "E"]),
                b = v(0),
                k = v(1),
                T = v(4);

            function C() {
                Jt(() => {
                    for (let I = 0; I < g.value.length; I++) g.value[I + 1] && y(g.value[I], g.value[I + 1])
                })
            }
            const h = I => {
                b.value = I, $(!0)
            };

            function y(I, B) {
                let x = parseInt(I.number),
                    G = parseInt(B.number);
                var P = document.getElementById("myCanvas" + I.rowId);
                if (P && P.getContext) {
                    var R = P.getContext("2d");
                    R.clearRect(0, 0, P.width, P.height), R.beginPath(), R.moveTo(x == 0 ? 14 : x * 27 + 14, 0), R.lineTo(G == 0 ? 14 : G * 27 + 14, P.height), R.strokeStyle = "red", R.stroke(), R.closePath()
                }
            }
            const z = () => {
                    k.value--, L()
                },
                f = () => {
                    k.value++, L()
                },
                $ = async (I = !1) => {
                    if (o.typeid == null) return;
                    L(), I && (k.value = 1);
                    const B = await at(bs({
                        typeId: o.typeid,
                        typeNumber: b.value + 1
                    }));
                    if (B) {
                        const x = Object.keys(B.data[0]).filter(G => G.startsWith("number_"));
                        l.value = B.data.filter(G => G.type_Number == b.value + 1).map(G => {
                            const P = {
                                list: [],
                                type: 0
                            };
                            return P.type = G.type, P.list = [], x.forEach(R => {
                                P.list.push(G[R])
                            }), P
                        })
                    }
                    m.value = l.value.find(x => x.type == 1), r.value = l.value.find(x => x.type == 2), c.value = l.value.find(x => x.type == 3), p.value = l.value.find(x => x.type == 4), d.value = l.value.find(x => x.type == 5)
                },
                L = async (I = !1) => {
                    if (o.typeid == null) return;
                    I && (k.value = 1);
                    const B = await at(va({
                        pageSize: 10,
                        pageNo: k.value,
                        typeId: o.typeid
                    }));
                    B && (g.value = B.data.list.map((x, G) => (x.rowId = G, x.number = x.premium[b.value], x)) || []), T.value = (B == null ? void 0 : B.data.totalPage) || 0, C()
                };
            return i({
                getData: $
            }), he(() => {
                $()
            }), (I, B) => {
                const x = H("van-col"),
                    G = H("van-row"),
                    P = H("van-icon");
                return n(), a("div", Nv, [t("div", Lv, [t("div", zv, [(n(!0), a(S, null, A(_.value, (R, O) => (n(), a("div", {
                    key: O,
                    class: M({
                        active: b.value == O
                    }),
                    onClick: K => h(O)
                }, e(R), 11, Bv))), 128))]), t("div", Iv, e(I.$t("trendDesc1")), 1), r.value ? (n(), a("div", Sv, [t("div", null, e(I.$t("trendDesc3")), 1), t("div", xv, [(n(!0), a(S, null, A(r.value.list, (R, O) => (n(), a("div", {
                    key: "2" + O
                }, e(R), 1))), 128))])])) : w("v-if", !0), p.value ? (n(), a("div", Rv, [t("div", null, e(I.$t("trendDesc4")), 1), t("div", Gv, [(n(!0), a(S, null, A(p.value.list, (R, O) => (n(), a("div", {
                    key: "4" + O
                }, e(R), 1))), 128))])])) : w("v-if", !0), m.value ? (n(), a("div", Av, [t("div", null, e(I.$t("trendDesc5")), 1), t("div", Mv, [(n(!0), a(S, null, A(m.value.list, (R, O) => (n(), a("div", {
                    key: "5" + O
                }, e(R), 1))), 128))])])) : w("v-if", !0), c.value ? (n(), a("div", Pv, [t("div", null, e(I.$t("trendDesc6")), 1), t("div", Dv, [(n(!0), a(S, null, A(c.value.list, (R, O) => (n(), a("div", {
                    key: "3" + O
                }, e(R), 1))), 128))])])) : w("v-if", !0)]), t("div", Ov, [N(G, null, {
                    default: D(() => [N(x, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(I.$t("betIssue")), 1)]),
                        _: 1
                    }), N(x, {
                        span: "16"
                    }, {
                        default: D(() => [E(e(I.$t("number")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", Ev, [g.value.length ? (n(!0), a(S, {
                    key: 0
                }, A(g.value, (R, O) => (n(), a("div", {
                    key: O,
                    IssueNumber: R.issueNumber,
                    Number: R.number,
                    Colour: R.colour,
                    rowId: R.rowId
                }, [N(G, null, {
                    default: D(() => [N(x, {
                        span: "8"
                    }, {
                        default: D(() => [t("div", jv, e(R.issueNumber), 1)]),
                        _: 2
                    }, 1024), N(x, {
                        span: "16"
                    }, {
                        default: D(() => [t("div", Hv, [t("canvas", {
                            canvas: "",
                            id: "myCanvas" + R.rowId,
                            ref_for: !0,
                            ref: "canvas",
                            class: "line-canvas"
                        }, null, 8, Wv), (n(), a(S, null, A(10, K => t("div", {
                            class: M(["Trend__C-body2-Num-item", {
                                action: Number(R.number) == K - 1
                            }]),
                            key: K
                        }, e(K - 1), 3)), 64)), t("div", {
                            class: M(["Trend__C-body2-Num-BS", {
                                isB: Number(R.number) > 4
                            }])
                        }, e(Number(R.number) > 4 ? "H" : "L"), 3), t("div", {
                            class: M(["Trend__C-body2-Num-OE", {
                                isE: Number(R.number) % 2
                            }])
                        }, e(Number(R.number) % 2 ? "O" : "E"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)], 8, qv))), 128)) : (n(), a("div", Fv, [N(re)]))]), g.value.length ? (n(), a("div", Vv, [t("div", {
                    class: M(["Trend__C-foot-previous", {
                        disabled: k.value <= 1
                    }]),
                    onClick: z
                }, [N(P, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", Uv, e(k.value) + "/" + e(T.value), 1), t("div", {
                    class: M(["Trend__C-foot-next", {
                        disabled: k.value >= T.value
                    }]),
                    onClick: f
                }, [N(P, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const Xv = U(Kv, [
        ["__scopeId", "data-v-9d93d892"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/Trend.vue"]
    ]),
    Qv = {
        class: "MyGameRecordList__C"
    },
    Yv = ["onClick"],
    Zv = {
        class: "MyGameRecordList__C-item-m"
    },
    Jv = {
        class: "MyGameRecordList__C-item-m-top"
    },
    th = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    eh = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    ih = {
        class: "MyGameRecordList__C-detail-text"
    },
    nh = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    ah = ["onClick"],
    oh = {
        class: "MyGameRecordList__C-detail-line"
    },
    sh = {
        class: "MyGameRecordList__C-detail-line"
    },
    lh = {
        class: "MyGameRecordList__C-detail-line"
    },
    ch = {
        class: "MyGameRecordList__C-detail-line"
    },
    rh = {
        class: "red"
    },
    uh = {
        class: "MyGameRecordList__C-detail-line"
    },
    dh = {
        class: "MyGameRecordList__C-detail-line"
    },
    ph = {
        key: 0,
        class: "numList"
    },
    gh = {
        key: 1
    },
    bh = {
        class: "MyGameRecordList__C-detail-line"
    },
    mh = {
        class: "line1"
    },
    _h = {
        class: "MyGameRecordList__C-detail-line"
    },
    vh = {
        key: 1
    },
    hh = {
        class: "MyGameRecordList__C-detail-line"
    },
    kh = {
        key: 1
    },
    fh = {
        class: "MyGameRecordList__C-detail-line"
    },
    yh = V({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = mt(), o = v(-1), l = c => ["", "A", "B", "C", "D", "E"][c], g = c => {
                switch (c) {
                    case "L":
                        return i("k3Small");
                    case "O":
                        return i("k3Odd");
                    case "E":
                        return i("k3Even");
                    case "H":
                        return i("k3Big");
                    default:
                        return c
                }
            }, m = c => {
                o.value == c ? o.value = -1 : o.value = c
            }, r = c => {
                switch (c) {
                    case "E":
                        return "Even";
                    case "O":
                        return "Odd";
                    case "H":
                        return "Big";
                    case "L":
                        return "Small";
                    default:
                        return c
                }
            };
            return (c, p) => {
                const d = H("svg-icon");
                return n(), a("div", Qv, [(n(!0), a(S, null, A(c.mayrecord, (_, b) => (n(), a(S, {
                    key: b
                }, [t("div", {
                    class: "MyGameRecordList__C-item",
                    onClick: ve(k => m(b), ["stop", "prevent"])
                }, [t("div", {
                    class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + _.selectType]])
                }, e(r(_.selectType)), 3), t("div", Zv, [t("div", Jv, e(_.issueNumber), 1), t("div", th, e(_.addTime), 1)]), _.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: M(["MyGameRecordList__C-item-r", {
                        success: _.state
                    }])
                }, [_.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: M({
                        success: _.state
                    })
                }, e(_.state ? c.$t("success") : c.$t("fail")), 3)) : w("v-if", !0), t("span", null, e(`${_.state?"+":"-"}${u(Bt)(_.profitAmount)}`), 1)], 2)) : w("v-if", !0)], 8, Yv), b == o.value ? (n(), a("div", eh, [t("div", ih, e(c.$t("detailMay")), 1), _.orderNumber ? (n(), a("div", nh, [E(e(c.$t("orderNoMay")) + " ", 1), t("div", {
                    onClick: k => u(Fe)(_.orderNumber)
                }, [E(e(_.orderNumber) + " ", 1), N(d, {
                    name: "copy"
                })], 8, ah)])) : w("v-if", !0), t("div", oh, [E(e(c.$t("issueMay")) + " ", 1), t("div", null, e(_.issueNumber), 1)]), t("div", sh, [E(e(c.$t("amountMay")) + " ", 1), t("div", null, e(u(Bt)(_.amount)), 1)]), t("div", lh, [E(e(c.$t("numMay")) + " ", 1), t("div", null, e(_.betCount), 1)]), t("div", ch, [E(e(c.$t("afterTaxAmount")) + " ", 1), t("div", rh, e(u(Bt)(_.realAmount)), 1)]), t("div", uh, [E(e(c.$t("tax")) + " ", 1), t("div", null, e(u(Bt)(_.fee)), 1)]), t("div", dh, [E(e(c.$t("resultMay")) + " ", 1), _.premium ? (n(), a("div", ph, [(n(!0), a(S, null, A(_.premium, (k, T) => (n(), a("div", {
                    key: T
                }, e(k), 1))), 128))])) : (n(), a("div", gh, "--"))]), t("div", bh, [E(e(c.$t("selectMay")) + " ", 1), t("div", mh, [t("div", null, e(l(_.gameType)), 1), (n(!0), a(S, null, A(_.selectType.split("|"), (k, T) => (n(), a("div", {
                    class: "num",
                    key: T
                }, e(g(k)), 1))), 128))])]), t("div", _h, [E(e(c.$t("statusMay")) + " ", 1), _.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: M([_.state ? "green" : "red"])
                }, e(_.state ? c.$t("success") : c.$t("fail")), 3)) : (n(), a("div", vh, e(c.$t("unsettled")), 1))]), t("div", hh, [E(e(c.$t("winOrLose")) + " ", 1), _.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: M([_.state ? "green" : "red"])
                }, e(`${_.state?"+":"-"} ${u(Bt)(_.profitAmount)}`), 3)) : (n(), a("div", kh, "--"))]), t("div", fh, [E(e(c.$t("createTime")) + " ", 1), t("div", null, e(_.addTime), 1)])])) : w("v-if", !0)], 64))), 128))])
            }
        }
    });
const Ea = U(yh, [
        ["__scopeId", "data-v-8bb41fd5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/MayrecordList.vue"]
    ]),
    $h = {
        class: "MyGameRecord__C"
    },
    wh = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    Th = {
        class: "MyGameRecord__C-body"
    },
    Ch = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    Nh = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    Lh = {
        class: "MyGameRecord__C-foot-page"
    },
    zh = V({
        __name: "MyGameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            goPathName: {
                type: String,
                required: !0
            },
            hasHead: {
                type: Boolean,
                required: !0,
                default: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = rt(),
                g = v(4),
                m = v(20),
                r = v(1),
                c = v([]),
                p = k => {
                    l.push({
                        name: k
                    })
                },
                d = () => {
                    r.value--, b()
                },
                _ = () => {
                    r.value++, b()
                },
                b = async (k = !1) => {
                    if (o.typeid == null) return;
                    k && (r.value = 1);
                    const T = await at(ha({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    c.value = (T == null ? void 0 : T.data.list) || [], g.value = (T == null ? void 0 : T.data.totalPage) || 0
                };
            return i({
                getData: b
            }), he(() => {
                b()
            }), (k, T) => {
                const C = H("svg-icon"),
                    h = H("van-icon");
                return n(), a("div", $h, [k.hasHead ? (n(), a("div", wh, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: T[0] || (T[0] = y => p(k.goPathName))
                }, [E(e(k.$t("more")) + " ", 1), N(C, {
                    name: "rightCircle"
                })])])) : w("v-if", !0), t("div", Th, [c.value.length ? (n(), tt(Ea, {
                    key: 0,
                    mayrecord: c.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", Ch, [N(re)]))]), c.value.length ? (n(), a("div", Nh, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: d
                }, [N(h, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", Lh, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: _
                }, [N(h, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const qa = U(zh, [
        ["__scopeId", "data-v-36ddca8e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/MyGameRecord.vue"]
    ]),
    Bh = s => (Ct("data-v-f388b770"), s = s(), Nt(), s),
    Ih = {
        class: "FDP__C"
    },
    Sh = {
        class: "FDP__C-text"
    },
    xh = {
        class: "FDP__C-list"
    },
    Rh = {
        class: "num"
    },
    Gh = {
        class: "letter"
    },
    Ah = Bh(() => t("div", {
        class: "FDP__C-symbol"
    }, "=", -1)),
    Mh = {
        class: "FDP__C-sum"
    },
    Ph = V({
        __name: "premium",
        props: {
            sumCount: {
                type: Number,
                default: 0
            },
            premium: {
                type: String,
                default: "00000"
            }
        },
        setup(s) {
            const i = s,
                o = Q(() => [...i.premium]),
                l = v(["A", "B", "C", "D", "E"]);
            return (g, m) => (n(), a("div", Ih, [t("div", Sh, e(g.$t("betResult")), 1), t("div", xh, [(n(!0), a(S, null, A(o.value, (r, c) => (n(), a("div", {
                key: c
            }, [t("div", Rh, e(r), 1), t("div", Gh, e(l.value[c]), 1)]))), 128))]), Ah, t("div", Mh, e(s.sumCount), 1)]))
        }
    });
const Dh = U(Ph, [
        ["__scopeId", "data-v-f388b770"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/premium.vue"]
    ]),
    Oh = s => (Ct("data-v-e05c7c66"), s = s(), Nt(), s),
    Eh = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    qh = {
        class: "WinningTip__C-body-l2"
    },
    jh = {
        class: "line1"
    },
    Hh = {
        class: "title"
    },
    Wh = {
        class: "num"
    },
    Fh = Oh(() => t("div", {
        class: "title sum"
    }, "SUM", -1)),
    Vh = {
        class: "num"
    },
    Uh = {
        class: "WinningTip__C-body-l3"
    },
    Kh = {
        key: 0,
        class: "isLose"
    },
    Xh = {
        class: "head"
    },
    Qh = {
        class: "bonus"
    },
    Yh = {
        class: "gameDetail"
    },
    Zh = {
        class: "WinningTip__C-body-l4"
    },
    Jh = ["onClick"],
    tk = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const o = Q(() => m.value[0] ? m.value[0].state == 0 : !1),
                l = Q(() => m.value[0] || {}),
                g = v(!1),
                m = v([]),
                r = v(["A", "B", "C", "D", "E", "SUM"]);
            let c = v();
            const p = () => {
                    clearTimeout(c.value), m.value.shift(), g.value && m.value.length && (c.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3))
                },
                d = () => {
                    g.value = !g.value, g.value ? c.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3) : clearTimeout(c.value)
                },
                _ = k => {
                    k.list = k.premium.split(""), k.sum = k.sumCount, m.value.push(k), g.value && (c.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3))
                },
                b = () => {
                    m.value = []
                };
            return i({
                showMark: _
            }), (k, T) => yt((n(), a("div", {
                class: "WinningTip__C",
                onClick: p
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", {
                key: 0,
                class: M(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(k.$t("k3WarningTip1")), 3)) : (n(), a("div", Eh, e(k.$t("k3WarningTip2")), 1)), t("div", qh, [E(e(k.$t("betResult")) + " ", 1), t("div", jh, [(n(!0), a(S, null, A(l.value.list, (C, h) => (n(), a("div", {
                key: h
            }, [t("div", Hh, e(r.value[h]), 1), t("div", Wh, e(C), 1)]))), 128)), t("div", null, [Fh, t("div", Vh, e(l.value.sum), 1)])])]), t("div", Uh, [o.value ? (n(), a("div", Kh, e(k.$t("k3WarningTip3")), 1)) : (n(), a(S, {
                key: 1
            }, [t("div", Xh, e(k.$t("k3WarningTip4")), 1), t("div", Qh, e(u(Bt)(Number(l.value.winAmount))), 1)], 64)), t("div", Yh, e(k.$t("k3WarningTip5")) + e(l.value.typeName) + " " + e(l.value.issueNumber), 1)]), t("div", Zh, [t("div", {
                class: M(["acitveBtn", {
                    active: g.value
                }]),
                onClick: ve(d, ["stop"])
            }, null, 10, Jh), E(" " + e(k.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: b
            })], 2)], 512)), [
                [Zt, m.value.length]
            ])
        }
    });
const ek = U(tk, [
        ["__scopeId", "data-v-e05c7c66"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/FD/WinningTips.vue"]
    ]),
    ik = V({
        __name: "ChangLong",
        setup(s) {
            const i = rt(),
                o = () => {
                    i.push({
                        name: "AllLotteryGames-ChangLong"
                    })
                };
            return (l, g) => (n(), a("div", {
                class: "changlongEnter changlong",
                onClick: o
            }))
        }
    });
const yn = U(ik, [
        ["__scopeId", "data-v-0ac3de13"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/common/ChangLong.vue"]
    ]),
    nk = "/assets/mp3/di1-0f3d86cb.mp3",
    ak = "/assets/mp3/di2-ad9aa8fb.mp3",
    ok = ["muted"],
    sk = t("source", {
        src: nk,
        type: "audio/mpeg"
    }, null, -1),
    lk = [sk],
    ck = ["muted"],
    rk = t("source", {
        src: ak,
        type: "audio/mpeg"
    }, null, -1),
    uk = [rk],
    dk = V({
        __name: "audio",
        setup(s) {
            const i = v(!1);
            Pt(() => Te().visibility, l => {
                l === 0 ? i.value = !0 : setTimeout(() => {
                    i.value = !1
                }, 500)
            });
            const o = () => {
                i.value = !0, Jt(() => {
                    const l = document.getElementById("voice1"),
                        g = document.getElementById("voice2");
                    l.play(), g.play(), l.pause(), g.pause(), i.value = !1, document.removeEventListener("touchstart", o)
                })
            };
            return Tt(() => {
                document.addEventListener("touchstart", o)
            }), (l, g) => (n(), a(S, null, [t("audio", {
                id: "voice1",
                muted: i.value
            }, lk, 8, ok), t("audio", {
                id: "voice2",
                muted: i.value
            }, uk, 8, ck)], 64))
        }
    }),
    qi = U(dk, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/audio.vue"]
    ]),
    pk = {
        class: "FD__C"
    },
    gk = {
        class: "FD__C-head-more"
    },
    bk = V({
        __name: "index",
        setup(s) {
            const i = {
                    GameRecord: yv,
                    Trend: Xv,
                    MyGameRecord: qa
                },
                o = v(),
                l = v(),
                g = v(),
                m = v(),
                r = v(!1),
                c = v("GameRecord"),
                p = rt(),
                d = Pe(),
                _ = d.get5D,
                b = v(0),
                k = v(localStorage.getItem("volumeShow") || "1"),
                T = v(!1),
                C = v(null),
                h = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                y = v(5),
                z = v(""),
                f = v(!1),
                $ = v(null),
                L = v("00000"),
                I = v(0),
                B = Q(() => _[b.value] || {}),
                x = He(),
                G = Q(() => x.getIsShowLotteryDragon);
            Tt(() => {
                K()
            }), Ve(() => {
                clearInterval(C.value), ft.value.forEach(it => {
                    clearInterval(it)
                }), Gt.value && clearTimeout(Gt.value)
            }), Pt(() => Te().visibility, it => {
                it === 0 ? clearInterval(C.value) : (K(), ct(b.value))
            });
            const P = () => {
                    p.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                R = () => {
                    k.value == "1" ? k.value = "2" : k.value = "1", localStorage.setItem("volumeShow", k.value)
                },
                O = it => {
                    p.push({
                        name: it
                    })
                },
                K = () => {
                    $.value == null && ct(0)
                },
                nt = async (it, st = !1) => {
                    const [Y, Z] = await te(_s({
                        typeId: it
                    }));
                    L.value = Z.premium, I.value = Z.sumCount, st && m.value.animationShow()
                },
                ct = it => {
                    d.get5DData(), b.value = it, $.value = _[it].typeID, ot($.value), Jt(() => {
                        o.value.getData($.value)
                    })
                },
                ot = async (it, st = !1) => {
                    nt(it, st);
                    const [Y, Z] = await te(ms({
                        typeId: it
                    }));
                    h.value.gameNo = Z.issueNumber, h.value.currentTime = Z.serviceTime.replace(/-/g, "/"), h.value.beginTime = Z.startTime.replace(/-/g, "/"), lt()
                },
                lt = () => {
                    if (!_.length) return;
                    var it = new Date(h.value.currentTime).getTime(),
                        st = new Date(h.value.beginTime).getTime();
                    let Y = (it - st) / 1e3,
                        Z = _[b.value];
                    if (Y > Z.intervalM * 60 && (Y = Z.intervalM * 60), h.value.passTime = Z.intervalM * 60 - Y, h.value.passTime < 0) {
                        z.value = "An error occurred, please contact customer service。The game time is " + Z.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", T.value = !0;
                        return
                    }
                    J()
                },
                J = () => {
                    clearInterval(C.value), kt(!1), C.value = setInterval(function() {
                        kt()
                    }, 1e3)
                },
                kt = (it = !0) => {
                    if (h.value.passTime <= y.value && (f.value = !1), k.value == "1" && (h.value.passTime <= y.value && h.value.passTime > 1 ? xt(1) : h.value.passTime == 1 && xt(2)), h.value.passTime > 0) {
                        let st = h.value.passTime;
                        h.value.time2 = Math.floor(st / 60), h.value.time3 = Math.floor(st % 60 / 10), h.value.time4 = Math.floor(st % 10), h.value.passTime--
                    } else clearInterval(C.value), it && At()
                },
                xt = (it = 1) => {
                    const st = document.getElementById(`voice${it}`);
                    st && (st.currentTime = 0, st.play())
                },
                At = () => {
                    ot($.value, !0), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                gt = v({}),
                ft = v([]),
                $t = it => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), gt.value[it]) return;
                    gt.value[it] = !0;
                    const {
                        time1: st,
                        time2: Y,
                        time3: Z,
                        time4: W
                    } = h.value, wt = (st * 10 * 60 + Y * 60 + Z * 10 + W) * 1e3;
                    ft.value[B.value.intervalM] = setTimeout(() => {
                        _t(it)
                    }, wt)
                },
                Rt = it => {
                    r.value = it
                },
                Gt = v(null),
                _t = async it => {
                    const [st, Y] = await te(vs({
                        issueNumber: it
                    }));
                    if (Y.data)
                        if (Y.data.state != 2) l.value.showMark(Y.data), delete gt.value[it];
                        else {
                            Gt.value = setTimeout(() => {
                                _t(it)
                            }, 2e3);
                            return
                        }
                };
            return (it, st) => {
                const Y = H("NavBar");
                return n(), a("div", pk, [N(Y, {
                    "left-arrow": "",
                    onClickLeft: P,
                    class: "main",
                    headLogo: !0
                }, {
                    right: D(() => [t("div", gk, [t("div", {
                        onClick: st[0] || (st[0] = Z => O("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: k.value == "2"
                        }),
                        onClick: R
                    }, null, 2)])]),
                    _: 1
                }), w(" 钱包余额 "), N(Mi, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), N(Ei, {
                    key: "5d"
                }), w(" 游戏类型 "), N(Pi, {
                    gameList: u(_),
                    currentGameIndex: b.value,
                    onChangeGame: ct
                }, null, 8, ["gameList", "currentGameIndex"]), N(Dh, {
                    premium: L.value,
                    sumCount: I.value
                }, null, 8, ["premium", "sumCount"]), w(" 游戏开始时间倒计时 "), N(z_, {
                    ref_key: "tiemLeftRef",
                    ref: m,
                    currentInfo: h.value,
                    premium: L.value,
                    currentGame: B.value
                }, null, 8, ["currentInfo", "premium", "currentGame"]), w(" 投注表 "), N(lv, {
                    currentInfo: h.value,
                    currentGame: B.value,
                    VoiceType: k.value,
                    typeid: $.value,
                    onBetting: $t,
                    onChangeBettingP: Rt
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), w(" 记录导航 "), N(Oi, {
                    record: c.value,
                    onChangeC: st[1] || (st[1] = Z => c.value = Z)
                }, null, 8, ["record"]), w(" 动态展示对应的组件 "), (n(), tt(Xe, null, [(n(), tt(je(i[c.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: $.value,
                    EmerdApi: u(ka),
                    goPathName: "AllLotteryGames-BettingRecord5D"
                }, null, 8, ["typeid", "EmerdApi"]))], 1024)), w(" 弹窗组件 "), N(xe, {
                    show: T.value,
                    onConfirm: st[2] || (st[2] = Z => O("/login"))
                }, {
                    content: D(() => [t("div", null, e(z.value), 1)]),
                    _: 1
                }, 8, ["show"]), w(" 中奖提示组件 "), N(ek, {
                    ref_key: "WinningTipsRef",
                    ref: l
                }, null, 512), G.value ? (n(), tt(yn, {
                    key: 0
                })) : w("v-if", !0), N(qi)])
            }
        }
    });
const mk = U(bk, [
        ["__scopeId", "data-v-4f526022"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/5D/index.vue"]
    ]),
    RA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mk
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _k = {
        class: "BettingRecord5D__C"
    },
    vk = {
        class: "BettingRecord5D__C-head"
    },
    hk = {
        class: "BettingRecord5D__C-nav"
    },
    kk = {
        class: "BettingRecord5D__C-list"
    },
    fk = {
        key: 0,
        class: "BettingRecord5D__C-foot"
    },
    yk = {
        class: "BettingRecord5D__C-foot-page"
    },
    $k = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = v(yd),
                l = v([]),
                g = v(0),
                m = v(1),
                r = v(4),
                c = C => {
                    p.value = C.name, m.value = 1, d()
                },
                p = v(0),
                d = async () => {
                    const C = await at(ha({
                        pageSize: 20,
                        pageNo: m.value,
                        typeId: p.value
                    }));
                    l.value = (C == null ? void 0 : C.data.list) || [], r.value = (C == null ? void 0 : C.data.totalPage) || 0
                },
                _ = () => {
                    p.value = o.value[0].typeID, d()
                };

            function b() {
                i.go(-1)
            }
            const k = () => {
                    m.value--, d()
                },
                T = () => {
                    m.value++, d()
                };
            return Tt(() => {
                _()
            }), (C, h) => {
                const y = H("NavBar"),
                    z = H("van-tab"),
                    f = H("van-tabs"),
                    $ = H("van-icon");
                return n(), a("div", _k, [t("div", vk, [N(y, {
                    "left-arrow": "",
                    onClickLeft: b,
                    class: "main",
                    title: "5D Lotre"
                })]), t("div", hk, [N(f, {
                    active: g.value,
                    "onUpdate:active": h[0] || (h[0] = L => g.value = L),
                    onClickTab: c
                }, {
                    default: D(() => [(n(!0), a(S, null, A(o.value, (L, I) => (n(), tt(z, {
                        key: I,
                        title: L.tabName,
                        name: L.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", kk, [N(Ea, {
                    mayrecord: l.value
                }, null, 8, ["mayrecord"])]), l.value.length ? (n(), a("div", fk, [t("div", {
                    class: M(["BettingRecord5D__C-foot-previous", {
                        disabled: m.value <= 1
                    }]),
                    onClick: k
                }, [N($, {
                    name: "arrow-left",
                    class: "BettingRecord5D__C-icon",
                    size: "20"
                })], 2), t("div", yk, e(m.value) + "/" + e(r.value), 1), t("div", {
                    class: M(["BettingRecord5D__C-foot-next", {
                        disabled: m.value >= r.value
                    }]),
                    onClick: T
                }, [N($, {
                    name: "arrow",
                    class: "BettingRecord5D__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const wk = U($k, [
        ["__scopeId", "data-v-8ab0e403"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BettingRecord5D/index.vue"]
    ]),
    GA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: wk
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Tk = {
        class: "MyGameRecordList__C"
    },
    Ck = ["onClick"],
    Nk = {
        class: "MyGameRecordList__C-item-m"
    },
    Lk = {
        class: "MyGameRecordList__C-item-m-top"
    },
    zk = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    Bk = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    Ik = {
        class: "MyGameRecordList__C-detail-text"
    },
    Sk = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    xk = ["onClick"],
    Rk = {
        class: "MyGameRecordList__C-detail-line"
    },
    Gk = {
        class: "MyGameRecordList__C-detail-line"
    },
    Ak = {
        class: "MyGameRecordList__C-detail-line"
    },
    Mk = {
        class: "MyGameRecordList__C-detail-line"
    },
    Pk = {
        class: "red"
    },
    Dk = {
        class: "MyGameRecordList__C-detail-line"
    },
    Ok = {
        class: "MyGameRecordList__C-detail-line"
    },
    Ek = {
        key: 0,
        class: "numList"
    },
    qk = {
        key: 1
    },
    jk = {
        class: "MyGameRecordList__C-detail-line noLine"
    },
    Hk = {
        key: 0,
        class: "line1"
    },
    Wk = {
        key: 1,
        class: "line1"
    },
    Fk = {
        class: ""
    },
    Vk = {
        class: ""
    },
    Uk = {
        key: 2,
        class: "line1"
    },
    Kk = {
        class: ""
    },
    Xk = {
        key: 1,
        class: "btn actionBtn"
    },
    Qk = {
        key: 3,
        class: "line1"
    },
    Yk = {
        class: ""
    },
    Zk = {
        key: 1,
        class: "actionBtn"
    },
    Jk = {
        class: ""
    },
    t1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    e1 = {
        key: 1
    },
    i1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    n1 = {
        key: 1
    },
    a1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    o1 = V({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = mt(), o = v(-1), l = c => {
                switch (c) {
                    case "H":
                        return i("k3Big");
                    case "L":
                        return i("k3Small");
                    case "O":
                        return i("k3Odd");
                    case "E":
                        return i("k3Even");
                    default:
                        return c
                }
            }, g = c => {
                o.value == c ? o.value = -1 : o.value = c
            }, m = c => {
                var p, d, _;
                if (c.gameType == "3") {
                    if (c.selectType == "|AAA|") return "3=";
                    if (c.oneList.length) return c.oneList[0]
                }
                if (c.gameType == "4") return c.selectType == "|ABC|" ? "3≠" : c.threeList.length ? `${c.threeList.join("")}` : `${c.oneList.join("")}`;
                if ((p = c.towList) != null && p.length) return c.towList[0];
                if ((d = c.towListArr) != null && d.length) return c.towListArr[0];
                if ((_ = c.oneList) != null && _.length) switch (c.oneList[0]) {
                    case "H":
                        return "Big";
                    case "L":
                        return "Small";
                    case "O":
                        return "Odd";
                    case "E":
                        return "Even";
                    default:
                        return c.oneList[0]
                }
            }, r = c => {
                var p, d;
                if ((p = c.towList) != null && p.length) return "num";
                if ((d = c.oneList) != null && d.length) return c.oneList[0].length > 2 ? "num" : c.oneList[0]
            };
            return (c, p) => {
                const d = H("svg-icon");
                return n(), a("div", Tk, [(n(!0), a(S, null, A(c.mayrecord, (_, b) => (n(), a(S, {
                    key: b
                }, [t("div", {
                    class: "MyGameRecordList__C-item",
                    onClick: ve(k => g(b), ["stop", "prevent"])
                }, [t("div", {
                    class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + r(_)]])
                }, e(m(_)), 3), t("div", Nk, [t("div", Lk, e(_.issueNumber), 1), t("div", zk, e(_.addTime), 1)]), _.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: M(["MyGameRecordList__C-item-r", {
                        success: _.state
                    }])
                }, [_.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: M({
                        success: _.state
                    })
                }, e(_.state ? c.$t("success") : c.$t("fail")), 3)) : w("v-if", !0), t("span", null, e(`${_.state?"+":"-"}${u(Bt)(_.profitAmount)}`), 1)], 2)) : w("v-if", !0)], 8, Ck), b == o.value ? (n(), a("div", Bk, [t("div", Ik, e(c.$t("detailMay")), 1), _.orderNumber ? (n(), a("div", Sk, [E(e(c.$t("orderNoMay")) + " ", 1), t("div", {
                    onClick: k => u(Fe)(_.orderNumber)
                }, [E(e(_.orderNumber) + " ", 1), N(d, {
                    name: "copy"
                })], 8, xk)])) : w("v-if", !0), t("div", Rk, [E(e(c.$t("issueMay")) + " ", 1), t("div", null, e(_.issueNumber), 1)]), t("div", Gk, [E(e(c.$t("amountMay")) + " ", 1), t("div", null, e(u(Bt)(_.amount)), 1)]), t("div", Ak, [E(e(c.$t("numMay")) + " ", 1), t("div", null, e(_.betCount), 1)]), t("div", Mk, [E(e(c.$t("afterTaxAmount")) + " ", 1), t("div", Pk, e(u(Bt)(_.realAmount)), 1)]), t("div", Dk, [E(e(c.$t("tax")) + " ", 1), t("div", null, e(u(Bt)(_.fee)), 1)]), t("div", Ok, [E(e(c.$t("resultMay")) + " ", 1), _.premium ? (n(), a("div", Ek, [(n(!0), a(S, null, A(_.premium, (k, T) => (n(), a("div", {
                    key: T,
                    class: M(["n" + k])
                }, null, 2))), 128))])) : (n(), a("div", qk, "--"))]), t("div", jk, [E(e(c.$t("selectMay")) + " ", 1), _.gameType == 1 ? (n(), a("div", Hk, [_.oneList.length > 0 ? (n(), a(S, {
                    key: 0
                }, [t("span", null, e(c.$t("k3RecordDesc1")), 1), (n(!0), a(S, null, A(_.oneList, (k, T) => (n(), a("span", {
                    key: T + "1",
                    class: "btn"
                }, e(l(k)), 1))), 128))], 64)) : w("v-if", !0)])) : w("v-if", !0), w(" 2个相同的数字 "), _.gameType == 2 ? (n(), a("div", Wk, [_.oneList.length > 0 ? (n(), a(S, {
                    key: 0
                }, [t("span", Fk, e(c.$t("k3RecordDesc2")), 1), (n(!0), a(S, null, A(_.oneList, (k, T) => (n(), a("span", {
                    class: "btn actionViolet",
                    key: T + "1"
                }, e(k), 1))), 128))], 64)) : w("v-if", !0), _.towList.length > 0 ? (n(), a(S, {
                    key: 1
                }, [t("span", Vk, e(c.$t("k3RecordDesc3")), 1), (n(!0), a(S, null, A(_.towList, (k, T) => (n(), a("span", {
                    class: "btn actionRedGreen",
                    key: T + "1"
                }, e(k), 1))), 128))], 64)) : w("v-if", !0)])) : w("v-if", !0), _.gameType == 3 ? (n(), a("div", Uk, [_.oneList.length > 0 ? (n(), a(S, {
                    key: 0
                }, [t("span", Kk, e(c.$t("k3RecordDesc4")), 1), (n(!0), a(S, null, A(_.oneList, (k, T) => (n(), a("span", {
                    class: "btn actionViolet",
                    key: T + "1"
                }, e(k), 1))), 128))], 64)) : w("v-if", !0), _.towList ? (n(), a("div", Xk, e(c.$t("k3RecordDesc5")), 1)) : w("v-if", !0)])) : w("v-if", !0), w(" 不同的号码 "), _.gameType == 4 ? (n(), a("div", Qk, [_.oneList.length > 0 ? (n(), a(S, {
                    key: 0
                }, [t("span", Yk, e(c.$t("k3RecordDesc6")), 1), (n(!0), a(S, null, A(_.oneList, (k, T) => (n(), a("span", {
                    class: "actionViolet",
                    key: T + "1"
                }, e(k), 1))), 128))], 64)) : w("v-if", !0), _.towList ? (n(), a("div", Zk, e(c.$t("k3RecordDesc7")), 1)) : w("v-if", !0), _.threeList.length > 0 ? (n(), a(S, {
                    key: 2
                }, [t("span", Jk, e(c.$t("k3RecordDesc8")), 1), (n(!0), a(S, null, A(_.threeList, (k, T) => (n(), a("span", {
                    class: "actionViolet",
                    key: T + "1"
                }, e(k), 1))), 128))], 64)) : w("v-if", !0)])) : w("v-if", !0)]), t("div", t1, [E(e(c.$t("statusMay")) + " ", 1), _.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: M([_.state ? "green" : "red"])
                }, e(_.state ? c.$t("success") : c.$t("fail")), 3)) : (n(), a("div", e1, e(c.$t("k3RecordDesc9")), 1))]), t("div", i1, [E(e(c.$t("winOrLose")) + " ", 1), _.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: M([_.state ? "green" : "red"])
                }, e(`${_.state?"+":"-"} ${u(Bt)(_.profitAmount)}`), 3)) : (n(), a("div", n1, "--"))]), t("div", a1, [E(e(c.$t("createTime")) + " ", 1), t("div", null, e(_.addTime), 1)])])) : w("v-if", !0)], 64))), 128))])
            }
        }
    });
const ja = U(o1, [
        ["__scopeId", "data-v-a5ef3154"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/MayrecordList.vue"]
    ]),
    s1 = {
        class: "BettingRecordK3__C"
    },
    l1 = {
        class: "BettingRecordK3__C-head"
    },
    c1 = {
        class: "BettingRecordK3__C-nav"
    },
    r1 = {
        class: "BettingRecordK3__C-list"
    },
    u1 = {
        key: 0,
        class: "BettingRecordK3__C-foot"
    },
    d1 = {
        class: "BettingRecordK3__C-foot-page"
    },
    p1 = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = v($d),
                l = v([]),
                g = v(0),
                m = v(1),
                r = v(4),
                c = h => {
                    p.value = h.name, m.value = 1, d()
                },
                p = v(0),
                d = async () => {
                    const h = await at(fa({
                            pageSize: 20,
                            pageNo: m.value,
                            typeId: p.value
                        })),
                        y = (h == null ? void 0 : h.data.list) || [];
                    for (let z = 0; y.length > z; z++) {
                        let f = y[z].gameType.split(","),
                            $ = y[z].selectType.split(",");
                        for (let L = 0; f.length > L; L++)
                            if (f[L] == "1" || f[L] == "2" || f[L] == "3") y[z].gameType = "1", y[z].oneList = $;
                            else if (f[L] == "5" || f[L] == "6") {
                            let I = [],
                                B = [],
                                x = [];
                            for (let G = 0; $.length > G; G++) {
                                if ($[G] == "|11|" || $[G] == "|22|" || $[G] == "|33|" || $[G] == "|44|" || $[G] == "|55|" || $[G] == "|66|") {
                                    let P = $[G].split("|");
                                    P.pop(), P.shift(), I.push(P.join())
                                }
                                if ($[G] == ":11:" || $[G] == ":22:" || $[G] == ":33:" || $[G] == ":44:" || $[G] == ":55:" || $[G] == ":66:") {
                                    let P = $[G].split(":");
                                    P.pop(), P.shift(), B.push(P.join())
                                }
                                if ($[G] == ":1:" || $[G] == ":2:" || $[G] == ":3:" || $[G] == ":4:" || $[G] == ":5:" || $[G] == ":6:") {
                                    let P = $[G].split(":");
                                    P.pop(), P.shift(), x.push(P.join())
                                }
                            }
                            y[z].gameType = "2", y[z].oneList = I, y[z].towList = !!_(B, x), y[z].towListArr = _(B, x)
                        } else if (f[L] == "7" || f[L] == "8") {
                            let I = [],
                                B = !1;
                            for (let x = 0; $.length > x; x++) {
                                if ($[x] == "|111|" || $[x] == "|222|" || $[x] == "|333|" || $[x] == "|444|" || $[x] == "|555|" || $[x] == "|666|") {
                                    let G = $[x].split("|");
                                    G.pop(), G.shift(), I.push(G.join())
                                }
                                $[x] == "|AAA|" && (B = !0), y[z].oneList = I, y[z].towList = B, y[z].gameType = "3"
                            }
                        } else if (f[L] == "9" || f[L] == "10" || f[L] == "4") {
                            let I = [],
                                B = !1,
                                x = [];
                            for (let G = 0; $.length > G; G++) {
                                if ($[G] == "|1|" || $[G] == "|2|" || $[G] == "|3|" || $[G] == "|4|" || $[G] == "|5|" || $[G] == "|6|") {
                                    let P = $[G].split("|");
                                    P.pop(), P.shift(), I.push(P.join())
                                }
                                if ($[G] == "|ABC|" && (B = !0), $[G] == ".1." || $[G] == ".2." || $[G] == ".3." || $[G] == ".4." || $[G] == ".5." || $[G] == ".6.") {
                                    let P = $[G].split(".");
                                    P.pop(), P.shift(), x.push(P.join())
                                }
                            }
                            y[z].oneList = I, y[z].towList = B, y[z].threeList = x, y[z].gameType = "4"
                        }
                    }
                    l.value = y || [], r.value = (h == null ? void 0 : h.data.totalPage) || 0
                },
                _ = (h, y) => {
                    let z = [];
                    for (var f = 0; h.length > f; f++) {
                        let L = h[f],
                            I = [];
                        for (var $ = 0; y.length > $; $++) I.push(y[$]);
                        if (I.length > 0) {
                            let B = I.sort().join(",");
                            z.push(L + "|" + B)
                        }
                    }
                    return z.sort()
                },
                b = () => {
                    p.value = o.value[0].typeID, d()
                };

            function k() {
                i.go(-1)
            }
            const T = () => {
                    m.value--, d()
                },
                C = () => {
                    m.value++, d()
                };
            return Tt(() => {
                b()
            }), (h, y) => {
                const z = H("NavBar"),
                    f = H("van-tab"),
                    $ = H("van-tabs"),
                    L = H("van-icon");
                return n(), a("div", s1, [t("div", l1, [N(z, {
                    "left-arrow": "",
                    onClickLeft: k,
                    class: "main",
                    title: "K3 Lotre"
                })]), t("div", c1, [N($, {
                    active: g.value,
                    "onUpdate:active": y[0] || (y[0] = I => g.value = I),
                    onClickTab: c
                }, {
                    default: D(() => [(n(!0), a(S, null, A(o.value, (I, B) => (n(), tt(f, {
                        key: B,
                        title: I.tabName,
                        name: I.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", r1, [N(ja, {
                    mayrecord: l.value
                }, null, 8, ["mayrecord"])]), l.value.length ? (n(), a("div", u1, [t("div", {
                    class: M(["BettingRecordK3__C-foot-previous", {
                        disabled: m.value <= 1
                    }]),
                    onClick: T
                }, [N(L, {
                    name: "arrow-left",
                    class: "BettingRecordK3__C-icon",
                    size: "20"
                })], 2), t("div", d1, e(m.value) + "/" + e(r.value), 1), t("div", {
                    class: M(["BettingRecordK3__C-foot-next", {
                        disabled: m.value >= r.value
                    }]),
                    onClick: C
                }, [N(L, {
                    name: "arrow",
                    class: "BettingRecordK3__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const g1 = U(p1, [
        ["__scopeId", "data-v-c228f246"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BettingRecordK3/index.vue"]
    ]),
    AA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: g1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    b1 = {
        class: "MyGameRecordList__C"
    },
    m1 = ["onClick"],
    _1 = {
        class: "MyGameRecordList__C-item-m"
    },
    v1 = {
        class: "MyGameRecordList__C-item-m-top"
    },
    h1 = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    k1 = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    f1 = {
        class: "MyGameRecordList__C-detail-text"
    },
    y1 = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    $1 = ["onClick"],
    w1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    T1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    C1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    N1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    L1 = {
        class: "red"
    },
    z1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    B1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    I1 = {
        key: 0
    },
    S1 = {
        class: "MyGameRecordList__C-inlineB"
    },
    x1 = {
        key: 0,
        class: "MyGameRecordList__C-inlineB purpleColor"
    },
    R1 = {
        key: 1
    },
    G1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    A1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    M1 = {
        key: 1
    },
    P1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    D1 = {
        key: 1
    },
    O1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    E1 = V({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = mt(), o = v(-1), l = p => {
                switch (p) {
                    case "big":
                        return "big";
                    case "green":
                    case "red":
                    case "violet":
                        return "";
                    default:
                        return p
                }
            }, g = p => {
                switch (p % 2) {
                    case 1:
                        return i("greenColor");
                    default:
                        return i("redColor")
                }
            }, m = p => {
                switch (p % 2) {
                    case 1:
                        return "greenColor";
                    default:
                        return "redColor"
                }
            }, r = p => {
                switch (p) {
                    case "small":
                        return i("small");
                    case "big":
                        return i("big");
                    case "green":
                        return i("green");
                    case "violet":
                        return i("purpleColor");
                    case "red":
                        return i("redColor");
                    default:
                        return p
                }
            }, c = p => {
                o.value == p ? o.value = -1 : o.value = p
            };
            return (p, d) => {
                const _ = H("svg-icon");
                return n(), a("div", b1, [(n(!0), a(S, null, A(p.mayrecord, (b, k) => (n(), a(S, {
                    key: k
                }, [t("div", {
                    class: "MyGameRecordList__C-item",
                    onClick: ve(T => c(k), ["stop", "prevent"])
                }, [t("div", {
                    class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + b.selectType]])
                }, e(l(b.selectType)), 3), t("div", _1, [t("div", v1, e(b.issueNumber), 1), t("div", h1, e(b.addTime), 1)]), b.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: M(["MyGameRecordList__C-item-r", {
                        success: b.state
                    }])
                }, [b.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: M({
                        success: b.state
                    })
                }, e(b.state ? p.$t("success") : p.$t("fail")), 3)) : w("v-if", !0), t("span", null, e(`${b.state?"+":"-"}${u(Bt)(b.profitAmount)}`), 1)], 2)) : w("v-if", !0)], 8, m1), k == o.value ? (n(), a("div", k1, [t("div", f1, e(p.$t("detailMay")), 1), b.orderNumber ? (n(), a("div", y1, [t("span", null, e(p.$t("orderNoMay")), 1), t("div", {
                    onClick: T => u(Fe)(b.orderNumber)
                }, [E(e(b.orderNumber) + " ", 1), N(_, {
                    name: "copy"
                })], 8, $1)])) : w("v-if", !0), t("div", w1, [t("span", null, e(p.$t("issueMay")), 1), t("div", null, e(b.issueNumber), 1)]), t("div", T1, [t("span", null, e(p.$t("amountMay")), 1), t("div", null, e(u(Bt)(b.amount)), 1)]), t("div", C1, [t("span", null, e(p.$t("numMay")), 1), t("div", null, e(b.betCount), 1)]), t("div", N1, [t("span", null, e(p.$t("afterTaxAmount")), 1), t("div", L1, e(u(Bt)(b.realAmount)), 1)]), t("div", z1, [t("span", null, e(p.$t("tax")), 1), t("div", null, e(u(Bt)(b.fee)), 1)]), t("div", B1, [t("span", null, e(p.$t("resultMay")), 1), b.number ? (n(), a("div", I1, [t("div", S1, e(b.number), 1), t("div", {
                    class: M(["MyGameRecordList__C-inlineB", [m(Number(b.number))]])
                }, e(g(Number(b.number))), 3), b.number == 0 || b.number == 5 ? (n(), a("div", x1, e(p.$t("purpleColor")), 1)) : w("v-if", !0), t("div", {
                    class: M(["MyGameRecordList__C-inlineB", [Number(b.number) > 4 ? "big" : "small"]])
                }, e(Number(b.number) > 4 ? p.$t("big") : p.$t("small")), 3)])) : (n(), a("div", R1, "--"))]), t("div", G1, [t("span", null, e(p.$t("selectMay")), 1), t("div", null, e(r(b.selectType)), 1)]), t("div", A1, [t("span", null, e(p.$t("statusMay")), 1), b.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: M([b.state ? "green" : "red"])
                }, e(b.state ? p.$t("success") : p.$t("fail")), 3)) : (n(), a("div", M1, e(p.$t("k3RecordDesc9")), 1))]), t("div", P1, [t("span", null, e(p.$t("winOrLose")), 1), b.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: M([b.state ? "green" : "red"])
                }, e(`${b.state?"+":"-"} ${u(Bt)(b.profitAmount)}`), 3)) : (n(), a("div", D1, "--"))]), t("div", O1, [t("span", null, e(p.$t("createTime")), 1), t("div", null, e(b.addTime), 1)])])) : w("v-if", !0)], 64))), 128))])
            }
        }
    });
const $n = U(E1, [
        ["__scopeId", "data-v-2faec5cb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/MayrecordList.vue"]
    ]),
    q1 = {
        class: "BettingRecordWin__C"
    },
    j1 = {
        class: "BettingRecordWin__C-head"
    },
    H1 = {
        class: "BettingRecordWin__C-nav"
    },
    W1 = {
        class: "BettingRecordWin__C-list"
    },
    F1 = {
        key: 0,
        class: "BettingRecordWin__C-foot"
    },
    V1 = {
        class: "BettingRecordWin__C-foot-page"
    },
    U1 = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                l = Pe().getWingo,
                g = v([]),
                m = v(0),
                r = v(1),
                c = v(4),
                p = h => {
                    d.value = h.name, r.value = 1, _()
                },
                d = v(0),
                _ = async () => {
                    const [h, y] = await te(_n({
                        pageSize: 20,
                        pageNo: r.value,
                        typeId: d.value
                    }));
                    g.value = y.list || [], c.value = y.totalPage
                },
                b = () => {
                    d.value = l[0].typeID, _()
                };

            function k() {
                i.go(-1)
            }
            const T = () => {
                    r.value--, _()
                },
                C = () => {
                    r.value++, _()
                };
            return Tt(() => {
                b()
            }), (h, y) => {
                const z = H("NavBar"),
                    f = H("van-tab"),
                    $ = H("van-tabs"),
                    L = H("van-icon");
                return n(), a("div", q1, [t("div", j1, [N(z, {
                    "left-arrow": "",
                    onClickLeft: k,
                    class: "main",
                    title: "Win Go"
                })]), t("div", H1, [N($, {
                    active: m.value,
                    "onUpdate:active": y[0] || (y[0] = I => m.value = I),
                    onClickTab: p
                }, {
                    default: D(() => [(n(!0), a(S, null, A(u(l), (I, B) => (n(), tt(f, {
                        key: B,
                        title: I.tabName,
                        name: I.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", W1, [N($n, {
                    mayrecord: g.value
                }, null, 8, ["mayrecord"])]), g.value.length ? (n(), a("div", F1, [t("div", {
                    class: M(["BettingRecordWin__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: T
                }, [N(L, {
                    name: "arrow-left",
                    class: "BettingRecordWin__C-icon",
                    size: "20"
                })], 2), t("div", V1, e(r.value) + "/" + e(c.value), 1), t("div", {
                    class: M(["BettingRecordWin__C-foot-next", {
                        disabled: r.value >= c.value
                    }]),
                    onClick: C
                }, [N(L, {
                    name: "arrow",
                    class: "BettingRecordWin__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const K1 = U(U1, [
        ["__scopeId", "data-v-6d173501"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BettingRecordWin/index.vue"]
    ]),
    MA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: K1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    X1 = {
        class: "BettingRecordWinTrx__C"
    },
    Q1 = {
        class: "BettingRecordWinTrx__C-head"
    },
    Y1 = {
        class: "BettingRecordWinTrx__C-nav"
    },
    Z1 = {
        class: "BettingRecordWinTrx__C-list"
    },
    J1 = {
        key: 0,
        class: "BettingRecordWinTrx__C-foot"
    },
    tf = {
        class: "BettingRecordWinTrx__C-foot-page"
    },
    ef = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = v(fd),
                l = v([]),
                g = v(0),
                m = v(1),
                r = v(0),
                c = v(4),
                p = C => {
                    r.value = C.name, m.value = 1, d()
                },
                d = async () => {
                    const [C, h] = await te(vn({
                        pageSize: 20,
                        pageNo: m.value,
                        typeId: r.value
                    }));
                    l.value = h.list || [], c.value = h.totalPage
                },
                _ = async () => {
                    r.value = o.value[0].typeID, d()
                };

            function b() {
                i.go(-1)
            }
            const k = () => {
                    m.value--, d()
                },
                T = () => {
                    m.value++, d()
                };
            return Tt(() => {
                _()
            }), (C, h) => {
                const y = H("NavBar"),
                    z = H("van-tab"),
                    f = H("van-tabs"),
                    $ = H("van-icon");
                return n(), a("div", X1, [t("div", Q1, [N(y, {
                    "left-arrow": "",
                    onClickLeft: b,
                    class: "main",
                    title: "Trx Win Go"
                })]), t("div", Y1, [N(f, {
                    active: g.value,
                    "onUpdate:active": h[0] || (h[0] = L => g.value = L),
                    onClickTab: p
                }, {
                    default: D(() => [(n(!0), a(S, null, A(o.value, (L, I) => (n(), tt(z, {
                        key: I,
                        title: L.tabName,
                        name: L.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", Z1, [N($n, {
                    mayrecord: l.value
                }, null, 8, ["mayrecord"])]), l.value.length ? (n(), a("div", J1, [t("div", {
                    class: M(["BettingRecordWinTrx__C-foot-previous", {
                        disabled: m.value <= 1
                    }]),
                    onClick: k
                }, [N($, {
                    name: "arrow-left",
                    class: "BettingRecordWinTrx__C-icon",
                    size: "20"
                })], 2), t("div", tf, e(m.value) + "/" + e(c.value), 1), t("div", {
                    class: M(["BettingRecordWinTrx__C-foot-next", {
                        disabled: m.value >= c.value
                    }]),
                    onClick: T
                }, [N($, {
                    name: "arrow",
                    class: "BettingRecordWinTrx__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const nf = U(ef, [
        ["__scopeId", "data-v-7bbbf1c1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BettingRecordWinTrx/index.vue"]
    ]),
    PA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nf
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ut = v({
        odds: 1.5,
        money_list: [100, 1e3, 200, 5e3, 1e4],
        bet_money: 0,
        binguoType: 1,
        currentNumber: "20230610858776",
        award_result: "246",
        bet_item: "",
        trend_result: ["6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "5"],
        trend_result2: ["123", "245", "532", "666"],
        currentMoneyIndex: 0,
        bet_number: "",
        beishu: 1,
        beishuList: [1, 5, 10, 20, 50, 100],
        currentBeishuIndex: 0,
        currentBetType: void 0,
        currentPlayId: 0,
        currentSelectType: "",
        currentOdds: "",
        drawIssnum: ""
    }),
    oi = v(),
    an = v(!1),
    si = v(!1),
    na = v(!0),
    aa = v(!1),
    af = v(!1),
    on = v("00:00"),
    of = v(!1),
    sn = v(!0),
    {
        t: ln
    } = Ai.global,
    li = v([]),
    Ue = v([{
        value: ln("small"),
        type: 1,
        range: "3-9",
        beishu: "2.0",
        bet_amount: 0,
        key: "Small",
        groupId: 1,
        playId: 0,
        hot: !1
    }, {
        value: ln("binguoHe"),
        type: 2,
        range: "10-11",
        beishu: "3.0",
        bet_amount: 0,
        key: "Drawn",
        groupId: 1,
        playId: 0,
        hot: !1
    }, {
        value: ln("k3Big"),
        type: 3,
        range: "12-18",
        beishu: "5.0",
        bet_amount: 0,
        key: "Big",
        groupId: 1,
        playId: 0,
        hot: !1
    }]),
    ci = v(Array.from({
        length: 16
    }, (s, i) => {
        const o = i + 3;
        return {
            value: o,
            type: o < 10 ? 1 : o > 11 ? 3 : 2,
            beishu: "2.0",
            bet_amount: 0,
            hot: !1,
            groupId: 1,
            playId: 0
        }
    })),
    Se = v({
        third: {
            amount1: 0,
            amount2: 0
        },
        two: 0,
        one: {
            amount1: 0,
            amount2: 0,
            amount3: 0
        }
    }),
    Me = v([{
        value: "1",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "2",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "3",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "4",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "5",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "6",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "*",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }]),
    ji = () => {
        const {
            t: s
        } = mt(), i = v(), o = Q(() => [Xt("home/AllLotteryGames/binguo", "dice_" + ut.value.award_result.toString()[0]), Xt("home/AllLotteryGames/binguo", "dice_" + ut.value.award_result.toString()[1]), Xt("home/AllLotteryGames/binguo", "dice_" + ut.value.award_result.toString()[2])]), l = Q(() => ut.value.currentBetType === 1 ? "small" : ut.value.currentBetType === 2 ? "and" : "big"), g = async () => {
            const B = await at(Td());
            B != null && B.data && (ut.value.money_list = B.data.betAmount, ut.value.beishuList = B.data.betMultiplier, ut.value.bet_money = B.data.betAmount[0])
        }, m = async () => {
            const B = await at(Cd());
            if (B != null && B.data) {
                li.value = B == null ? void 0 : B.data;
                let x = B == null ? void 0 : B.data;
                x.filter(R => R.groupId === 1).forEach(R => {
                    Number(R.betType) ? ci.value.forEach(O => {
                        R.betType === O.value + "" && (O.beishu = R.odds, O.playId = R.playId)
                    }) : Ue.value.forEach(O => {
                        O.key === R.betType && (O.beishu = R.odds, O.playId = R.playId)
                    })
                }), x.filter(R => R.groupId !== 1).forEach(R => {
                    R.groupId === 4 && (R.betType === "1" ? Se.value.third.amount1 = R.odds : Se.value.third.amount2 = R.odds), R.groupId === 3 && (Se.value.two = R.odds), R.groupId === 2 && (R.betType === "1" ? Se.value.one.amount1 = R.odds : R.betType === "2" ? Se.value.one.amount2 = R.odds : Se.value.one.amount3 = R.odds)
                })
            }
        }, r = async () => {
            const B = await at(zd({
                issueNumber: ut.value.currentNumber
            }));
            B != null && B.data && (B.data.forEach(x => {
                switch (Ue.value.forEach(G => {
                    x.playId === G.playId && (G.bet_amount = x.amount)
                }), ci.value.forEach(G => {
                    x.playId === G.playId && (G.bet_amount = x.amount)
                }), x.playId) {
                    case 28:
                        Me.value[Number(x.selectType[0]) - 1].amount1 = x.amount;
                        break;
                    case 29:
                        Me.value[6].amount1 = x.amount;
                        break;
                    case 27:
                        Me.value[Number(x.selectType[0]) - 1].amount2 = x.amount;
                        break;
                    case 24:
                        Me.value[Number(x.selectType[0]) - 1].amount3 = x.amount;
                        break
                }
            }), await c(0), Jt(() => {
                B.data.sort((P, R) => R.amount - P.amount).slice(0, 3).forEach(P => {
                    let R = Ue.value.findIndex(K => P.playId === K.playId);
                    R > -1 && (Ue.value[R].hot = !0);
                    let O = ci.value.findIndex(K => P.playId === K.playId);
                    switch (O > -1 && (ci.value[O].hot = !0), P.playId) {
                        case 28:
                            Me.value[Number(P.selectType[0]) - 1].hot1 = !0;
                            break;
                        case 29:
                            Me.value[6].hot1 = !0;
                            break;
                        case 27:
                            Me.value[Number(P.selectType[0]) - 1].hot2 = !0;
                            break;
                        case 24:
                            Me.value[Number(P.selectType[0]) - 1].hot3 = !0;
                            break
                    }
                })
            }))
        }, c = async B => {
            Me.value.forEach(x => {
                x.hot1 = !1, x.hot2 = !1, x.hot3 = !1, B === 1 && (x.amount1 = 0, x.amount2 = 0, x.amount3 = 0)
            }), Ue.value.forEach(x => {
                B === 1 && (x.bet_amount = 0), x.hot = !1
            }), ci.value.forEach(x => {
                B === 1 && (x.bet_amount = 0), x.hot = !1
            })
        }, p = async () => {
            const B = await at(Nd());
            B && (B.data ? B.data.startTime && B.data.endTime && (ut.value.currentNumber = B == null ? void 0 : B.data.issueNumber, y(B.data.serviceTime, B.data.endTime, async () => {
                on.value = "10:00", await p(), clearInterval(i.value), setTimeout(() => {
                    d()
                }, 60 * 1e3), c(1)
            })) : sn.value = !1, await r())
        }, d = async () => {
            let B = 1;
            i.value = setInterval(async () => {
                B === 10 ? clearInterval(i.value) : (await _(), await b(), B++)
            }, 1e4)
        }, _ = async () => {
            const B = await at(Ld());
            B && (ut.value.award_result = B == null ? void 0 : B.data.result, ut.value.drawIssnum = B == null ? void 0 : B.data.issueNo)
        }, b = async () => {
            const B = await at(Pa());
            B && (ut.value.trend_result = B == null ? void 0 : B.data.map(x => x.resultSum + "").slice(0, 13).reverse(), ut.value.trend_result2 = B == null ? void 0 : B.data.map(x => x.result + "").slice(0, 4).reverse())
        }, k = B => {
            si.value = !0, ut.value.bet_number = B.value + "", ut.value.currentBetType = B.type, ut.value.currentPlayId = B.playId, ut.value.currentOdds = B.beishu + ""
        }, T = (B, x) => {
            var G, P, R, O;
            x === 1 ? (ut.value.bet_number = B, ut.value.currentBetType = x, ut.value.currentPlayId = (G = li.value.find(K => K.betType === "1" && K.groupId === 2)) == null ? void 0 : G.playId, ut.value.currentOdds = Se.value.one.amount1 + "") : x === 2 ? (ut.value.bet_number = B + "," + B, B.includes("6") ? ut.value.currentBetType = 3 : B.includes("5") ? ut.value.currentBetType = 2 : ut.value.currentBetType = 1, ut.value.currentOdds = Se.value.two + "", ut.value.currentPlayId = (P = li.value.find(K => K.betType === "2" && K.groupId === 3)) == null ? void 0 : P.playId) : x === 3 && (ut.value.bet_number = B + "," + B + "," + B, /[123]/.test(B) ? ut.value.currentBetType = 1 : ut.value.currentBetType = 3, B.includes("*") ? (ut.value.currentOdds = Se.value.third.amount2 + "", ut.value.currentPlayId = (R = li.value.find(K => K.betType === "2" && K.groupId === 4)) == null ? void 0 : R.playId) : (ut.value.currentOdds = Se.value.third.amount1 + "", ut.value.currentPlayId = (O = li.value.find(K => K.betType === "1" && K.groupId === 4)) == null ? void 0 : O.playId)), si.value = !0
        }, C = async () => {
            var R;
            if (!sn.value) {
                si.value = !1, aa.value = !0;
                return
            }
            if (!na.value) return;
            let B = li.value.find(O => O.playId === ut.value.currentPlayId),
                x = "";
            (B == null ? void 0 : B.groupId) === 2 || (B == null ? void 0 : B.groupId) === 3 ? x = ut.value.bet_number.split(",")[0] : (B == null ? void 0 : B.groupId) === 4 ? x = ut.value.bet_number.includes("*") ? "***" : ut.value.bet_number.split(",").join("") : x = Number(ut.value.bet_number) ? ut.value.bet_number : (R = Ue.value.find(O => O.value === ut.value.bet_number)) == null ? void 0 : R.key;
            let G = {
                issueNumber: ut.value.currentNumber,
                amount: ut.value.bet_money * ut.value.beishu,
                figure: Number(ut.value.beishu),
                gameType: (B == null ? void 0 : B.groupId) + "",
                selectType: x,
                playId: ut.value.currentPlayId
            };
            (await at(Bd(G))).data && (bn(s("code402")), si.value = !1, r())
        }, h = (B, x) => {
            let G = new Date(B.replace(/-/g, "/"));
            return new Date(x.replace(/-/g, "/")).getTime() - G.getTime()
        }, y = (B, x, G) => {
            clearInterval(oi.value), oi.value = void 0;
            let P = h(B, x);
            if (P <= 1e3) throw new Error("时间不正确");
            oi.value = setInterval(() => {
                if (P -= 1e3, P <= 1e3) {
                    clearInterval(oi.value), G();
                    return
                }
                on.value = hs(P, "mm:ss")
            }, 1e3)
        }, z = () => an.value = !an.value, f = B => {
            B === "add" ? ut.value.beishu = Number(ut.value.beishu) + 1 : ut.value.beishu = Number(ut.value.beishu) - 1
        }, $ = () => {
            si.value = !1, ut.value.currentBeishuIndex = 0, ut.value.currentMoneyIndex = 0
        }, L = () => da.back(), I = B => B >= 1e6 ? (B / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : B >= 1e3 ? (B / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : B + "";
        return Pt(() => ut.value.currentMoneyIndex, B => {
            ut.value.bet_money = Number(ut.value.money_list[B])
        }, {
            immediate: !0
        }), Pt(() => ut.value.bet_number, () => {
            ut.value.currentMoneyIndex = 0, ut.value.currentBeishuIndex = 0
        }, {
            immediate: !0
        }), Pt(() => ut.value.currentBeishuIndex, B => {
            ut.value.beishu = Number(ut.value.beishuList[B])
        }, {
            immediate: !0
        }), Ve(() => {
            clearInterval(oi.value)
        }), {
            store: ut,
            timer: oi,
            isShowBetMoney: an,
            filterNumberSize: l,
            handleToggleShwoMoney: z,
            handleBet: k,
            goBack: L,
            handleStep: f,
            handleCancel: $,
            isSell: sn,
            handleAlike: T,
            getBinguoConfig: g,
            getBinguoOddsList: m,
            getGameBingo18Issue: p,
            countdownTimeFun: y,
            getBingo18LastGameResult: _,
            getBingo18BetAmount: r,
            handleBetSubmit: C,
            getBingo18Last50Result: b,
            formatNum: I,
            checkRule: na,
            resultImgList: o,
            betSizeList: Ue,
            betNumberList: ci,
            betSheetVisible: si,
            overVisble: aa,
            alikeList: Me,
            timeText: on,
            oddObject: Se,
            playerRuleVisble: af,
            betPopTXT: of
        }
    },
    Ha = s => (Ct("data-v-5ba4aae3"), s = s(), Nt(), s),
    sf = {
        class: "binguo_info"
    },
    lf = {
        class: "binguo_award"
    },
    cf = {
        key: 0,
        class: "main"
    },
    rf = {
        class: "current_award"
    },
    uf = {
        class: "tit"
    },
    df = {
        class: "current_number"
    },
    pf = {
        class: "award_time"
    },
    gf = {
        class: "award_result"
    },
    bf = {
        class: "tit"
    },
    mf = {
        class: "award_type"
    },
    _f = {
        key: 1,
        class: "over_tip"
    },
    vf = {
        class: "trend"
    },
    hf = {
        key: 0,
        class: "trend_result1"
    },
    kf = {
        class: "text"
    },
    ff = {
        class: "result_list"
    },
    yf = Ha(() => t("span", {
        class: "tag animation_tag"
    }, "-", -1)),
    $f = {
        key: 1,
        class: "trend_result2"
    },
    wf = {
        class: "result_list2"
    },
    Tf = {
        class: "result_list2"
    },
    Cf = {
        class: "animation_tag"
    },
    Nf = Ha(() => t("div", {
        id: "time"
    }, null, -1)),
    Lf = V({
        __name: "BinguoInfo",
        setup(s) {
            const {
                store: i,
                resultImgList: o,
                isSell: l,
                timeText: g,
                getGameBingo18Issue: m,
                getBingo18LastGameResult: r,
                getBingo18Last50Result: c
            } = ji(), p = rt();

            function d(b) {
                let k = 0;
                return i.value.binguoType === 1 ? k = Number(b) : (k = 0, b.split("").forEach(T => {
                    k += Number(T)
                })), k < 10 ? "small" : k === 11 || k === 10 ? "sum" : "big"
            }
            const _ = () => {
                p.push({
                    path: "/home/AllLotteryGames/BinguoCount"
                })
            };
            return m(), r(), c(), (b, k) => {
                const T = H("van-icon");
                return n(), a(S, null, [t("div", sf, [t("div", lf, [u(l) ? (n(), a("div", cf, [t("div", rf, [t("div", uf, e(b.$t("currentIssNumber")), 1), t("div", df, e(u(i).currentNumber), 1)]), t("div", pf, e(u(g)), 1), t("div", gf, [t("div", bf, e(u(i).drawIssnum), 1), t("div", mf, [t("div", {
                    style: me({
                        backgroundImage: `url(${u(o)[0]}) `
                    })
                }, null, 4), u(i).binguoType !== 2 ? (n(), tt(T, {
                    key: 0,
                    name: u(Xt)("home/AllLotteryGames/binguo", "add")
                }, null, 8, ["name"])) : w("v-if", !0), t("div", {
                    style: me({
                        backgroundImage: `url(${u(o)[1]}) `
                    })
                }, null, 4), u(i).binguoType !== 2 ? (n(), tt(T, {
                    key: 1,
                    name: u(Xt)("home/AllLotteryGames/binguo", "add")
                }, null, 8, ["name"])) : w("v-if", !0), t("div", {
                    style: me({
                        backgroundImage: `url(${u(o)[2]})`
                    })
                }, null, 4)])])])) : (n(), a("div", _f, e(b.$t("playerEnd")), 1))]), t("div", vf, [u(i).binguoType === 1 ? (n(), a("div", hf, [t("div", kf, e(b.$t("result")), 1), t("div", ff, [(n(!0), a(S, null, A(u(i).trend_result, C => (n(), a("span", {
                    class: M(["tag", `${d(C)}_tag`])
                }, e(C), 3))), 256)), yf])])) : (n(), a("div", $f, [(n(!0), a(S, null, A(u(i).trend_result2, C => (n(), a("div", wf, [(n(!0), a(S, null, A(C, h => (n(), a("span", {
                    class: M(`${d(C)}_tag`)
                }, e(h), 3))), 256))]))), 256)), t("div", Tf, [(n(), a(S, null, A(3, () => t("span", Cf)), 64))])])), t("div", {
                    class: "trend_img",
                    onClick: k[0] || (k[0] = C => _())
                })])]), Nf], 64)
            }
        }
    });
const zf = U(Lf, [
        ["__scopeId", "data-v-5ba4aae3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoInfo.vue"]
    ]),
    Bf = s => (Ct("data-v-88d327d7"), s = s(), Nt(), s),
    If = {
        class: "main_desk"
    },
    Sf = {
        key: 0,
        class: "rule_tip"
    },
    xf = {
        class: "bet_size"
    },
    Rf = ["onClick"],
    Gf = {
        class: "head"
    },
    Af = {
        class: "range"
    },
    Mf = {
        key: 0,
        class: "hot"
    },
    Pf = ["onClick"],
    Df = {
        key: 1,
        class: "alike_box"
    },
    Of = {
        class: "rule_tip"
    },
    Ef = {
        class: "alike"
    },
    qf = ["onClick"],
    jf = {
        class: "amount"
    },
    Hf = {
        class: "third_list"
    },
    Wf = {
        class: "ball"
    },
    Ff = {
        class: "ball2"
    },
    Vf = {
        key: 0,
        class: "ball_hot2"
    },
    Uf = {
        class: "rule_tip"
    },
    Kf = {
        class: "alike two_alike"
    },
    Xf = ["onClick"],
    Qf = {
        class: "amount"
    },
    Yf = {
        class: "third_list"
    },
    Zf = {
        class: "ball"
    },
    Jf = {
        class: "ball2"
    },
    ty = {
        key: 0,
        class: "ball_hot2"
    },
    ey = {
        class: "rule_tip"
    },
    iy = {
        class: "alike one_alike"
    },
    ny = ["onClick"],
    ay = {
        class: "amount"
    },
    oy = Bf(() => t("div", {
        class: "ball_hot"
    }, null, -1)),
    sy = {
        class: "third_list"
    },
    ly = {
        class: "ball"
    },
    cy = {
        class: "ball2"
    },
    ry = {
        key: 0,
        class: "ball_hot2"
    },
    uy = {
        class: "rule_tip_header"
    },
    dy = ["src"],
    py = {
        class: "rule_tip_dialog"
    },
    gy = {
        class: "rule_tip_tit"
    },
    by = {
        class: "rule_tip_text"
    },
    my = V({
        __name: "BinguoMainDesk",
        setup(s) {
            const {
                t: i
            } = mt(), {
                betSizeList: o,
                betNumberList: l,
                isShowBetMoney: g,
                handleBet: m,
                store: r,
                alikeList: c,
                handleAlike: p,
                oddObject: d,
                formatNum: _
            } = ji(), b = {
                sum: {
                    dice: "1,3,6",
                    tip1: i("result"),
                    tip2: i("binguoRuleTipText1")
                },
                third: {
                    dice: "6,6,6",
                    tip1: i("numbersMatch"),
                    tip2: i("binguoRuleTipText2")
                },
                two: {
                    dice: "6,6",
                    tip1: i("sameNum"),
                    tip2: i("binguoRuleTipText3")
                },
                one: {
                    dice: "1,2,3,5,4,6",
                    tip1: i("same"),
                    tip2: i("binguoRuleTipText4")
                }
            }, k = v(!1), T = v(), C = () => {
                const h = document.querySelectorAll(".rule_tip");
                for (let y = 0; y < h.length; y++) h[y].addEventListener("click", () => {
                    k.value = !0, y === 0 && (T.value = b.sum), y === 1 && (T.value = b.third), y === 2 && (T.value = b.two), y === 3 && (T.value = b.one)
                })
            };
            return Pt(() => r.value.binguoType, h => {
                h === 2 && Jt(() => {
                    C()
                })
            }, {
                deep: !0,
                immediate: !0
            }), (h, y) => (n(), a("div", If, [u(r).binguoType === 2 ? (n(), a("div", Sf, e(h.$t("xosoTxt60")), 1)) : w("v-if", !0), t("div", xf, [(n(!0), a(S, null, A(u(o), z => (n(), a("div", {
                class: "size_item",
                onClick: ve(f => u(m)(z), ["stop"])
            }, [t("div", Gf, [t("span", null, e(u(g) && z.bet_amount ? u(_)(z.bet_amount) : ""), 1), t("span", null, e(z.beishu + "x" || ""), 1)]), t("div", {
                class: M(`value value_${z.type}`)
            }, e(z.value), 3), t("div", Af, e(z.range), 1), z.hot && u(g) ? (n(), a("div", Mf)) : w("v-if", !0)], 8, Rf))), 256))]), t("div", {
                class: M(["bet_number", {
                    betAll: u(r).binguoType === 2
                }])
            }, [(n(!0), a(S, null, A(u(l), z => (n(), a("div", {
                key: z.value,
                class: "item",
                onClick: f => u(m)(z)
            }, [t("div", null, e(u(g) && z.bet_amount ? u(_)(z.bet_amount) : ""), 1), t("div", null, e(z.value), 1), t("div", null, e(z.beishu) + "X", 1), z.hot && u(g) ? (n(), a("div", {
                key: 0,
                class: M(["hot", {
                    hot2: u(r).binguoType === 2
                }])
            }, null, 2)) : w("v-if", !0)], 8, Pf))), 128))], 2), u(r).binguoType === 2 ? (n(), a("div", Df, [t("div", Of, e(h.$t("trendTXT4")) + " " + e(h.$t("odds")) + e(u(d).third.amount1) + "x " + e(h.$t("k3bet3Desc4")) + " " + e(h.$t("odds")) + e(u(d).third.amount2) + "x ", 1), t("div", Ef, [(n(!0), a(S, null, A(u(c), z => (n(), a("div", {
                class: "alike_item",
                onClick: f => u(p)(z.value, 3)
            }, [t("div", jf, e(u(g) && z.amount1 ? u(_)(z.amount1) : ""), 1), t("div", Hf, [(n(), a(S, null, A(3, () => t("div", Wf, [t("span", Ff, e(z.value), 1), z.hot1 ? (n(), a("span", Vf)) : w("v-if", !0)])), 64))])], 8, qf))), 256))]), t("div", Uf, e(h.$t("trendTXT3") + h.$t("odds")) + " " + e(u(d).two) + "x", 1), t("div", Kf, [(n(!0), a(S, null, A(u(c).slice(0, 6), z => (n(), a("div", {
                class: "alike_item",
                onClick: f => u(p)(z.value, 2)
            }, [t("div", Qf, e(u(g) && z.amount2 ? u(_)(z.amount2) : ""), 1), t("div", Yf, [(n(), a(S, null, A(2, () => t("div", Zf, [t("span", Jf, e(z.value), 1), z.hot2 ? (n(), a("span", ty)) : w("v-if", !0)])), 64))])], 8, Xf))), 256))]), t("div", ey, e(h.$t("binguoRuleTip1")) + e(u(d).one.amount1) + "x " + e(h.$t("binguoRuleTip2")) + e(u(d).one.amount2) + "x " + e(h.$t("binguoRuleTip3")) + " " + e(u(d).one.amount3) + "x ", 1), t("div", iy, [(n(!0), a(S, null, A(u(c).slice(0, 6), z => (n(), a("div", {
                class: "alike_item",
                onClick: f => u(p)(z.value, 1)
            }, [t("div", ay, e(u(g) && z.amount3 ? u(_)(z.amount3) : ""), 1), oy, t("div", sy, [t("span", ly, [t("span", cy, e(z.value), 1), z.hot3 ? (n(), a("span", ry)) : w("v-if", !0)])])], 8, ny))), 256))])])) : w("v-if", !0), N(xe, {
                show: k.value,
                "onUpdate:show": y[0] || (y[0] = z => k.value = z),
                showCloseIcon: !0,
                clickOutSide: !0,
                "show-cancel-btn": !1,
                showFooter: !1,
                isShowHeader: !1
            }, {
                title: D(() => {
                    var z;
                    return [t("div", uy, [(n(!0), a(S, null, A((z = T.value) == null ? void 0 : z.dice.split(","), f => (n(), a("img", {
                        src: u(Xt)("home/AllLotteryGames/binguo", `rule_dice_${f}`),
                        alt: ""
                    }, null, 8, dy))), 256))])]
                }),
                content: D(() => {
                    var z, f;
                    return [t("div", py, [t("div", gy, e((z = T.value) == null ? void 0 : z.tip1), 1), t("div", by, e((f = T.value) == null ? void 0 : f.tip2), 1)])]
                }),
                footer: D(() => []),
                _: 1
            }, 8, ["show"])]))
        }
    });
const _y = U(my, [
        ["__scopeId", "data-v-88d327d7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoMainDesk.vue"]
    ]),
    vy = {
        class: "bet_content"
    },
    hy = {
        class: "bet_tit"
    },
    ky = {
        class: "bet_cnt"
    },
    fy = {
        class: "bet_item"
    },
    yy = {
        class: "bet_item_tit"
    },
    $y = {
        class: "bet_money_list"
    },
    wy = ["onClick"],
    Ty = {
        class: "bet_item"
    },
    Cy = {
        class: "bet_item_tit"
    },
    Ny = {
        class: "bet_step"
    },
    Ly = {
        class: "bet_money_list bet_beishu"
    },
    zy = ["onClick"],
    By = {
        class: "bet_info"
    },
    Iy = {
        class: "tit"
    },
    Sy = {
        class: "pl",
        style: {
            color: "#fff"
        }
    },
    xy = {
        class: "bet_info"
    },
    Ry = {
        class: "tit"
    },
    Gy = {
        class: "pl",
        style: {
            color: "#cee98c"
        }
    },
    Ay = {
        class: "bet_info"
    },
    My = {
        class: "tit"
    },
    Py = {
        class: "pl",
        style: {
            color: "#f9bc36"
        }
    },
    Dy = {
        key: 0,
        class: "recharge_tip"
    },
    Oy = {
        class: "apply"
    },
    Ey = {
        class: "bet_btn_group"
    },
    qy = V({
        __name: "BinguoBetSheet",
        setup(s) {
            const {
                betSheetVisible: i,
                store: o,
                betPopTXT: l,
                filterNumberSize: g,
                handleStep: m,
                checkRule: r,
                handleCancel: c,
                handleBetSubmit: p
            } = ji(), _ = Te().getUserInfo, b = rt(), k = () => {
                b.push("/wallet/recharge")
            };
            return (T, C) => {
                const h = H("van-field"),
                    y = H("van-icon"),
                    z = H("van-checkbox"),
                    f = H("van-action-sheet");
                return n(), tt(f, {
                    show: u(i),
                    "onUpdate:show": C[8] || (C[8] = $ => se(i) ? i.value = $ : null),
                    closeable: !1
                }, {
                    default: D(() => [t("div", vy, [t("div", hy, e(T.$t("betting")), 1), t("div", ky, [(n(!0), a(S, null, A(u(o).bet_number.split(","), $ => (n(), a("span", {
                        class: M(`${u(g)}`)
                    }, e($), 3))), 256))]), t("div", fy, [t("div", yy, e(T.$t("amount")), 1), t("div", $y, [(n(!0), a(S, null, A(u(o).money_list, ($, L) => (n(), a("div", {
                        class: M(["money_item", {
                            monyActive: u(o).currentMoneyIndex === L
                        }]),
                        onClick: I => u(o).currentMoneyIndex = L
                    }, e($), 11, wy))), 256))])]), t("div", Ty, [t("div", Cy, [t("span", null, e(T.$t("multiple")), 1), t("div", Ny, [t("span", {
                        onClick: C[0] || (C[0] = $ => u(m)("sub"))
                    }, "-"), N(h, {
                        modelValue: u(o).beishu,
                        "onUpdate:modelValue": C[1] || (C[1] = $ => u(o).beishu = $),
                        "input-align": "center",
                        onInput: C[2] || (C[2] = $ => {
                            if (9999 < Number($.target.value)) {
                                u(o).beishu = 9999;
                                return
                            }
                            if (Number($.target.value) < 1) {
                                u(o).beishu = 0;
                                return
                            }
                            u(o).beishu = Number($.target.value)
                        }),
                        type: "digit",
                        class: "bet_beishu_input"
                    }, null, 8, ["modelValue"]), t("span", {
                        onClick: C[3] || (C[3] = $ => u(m)("add"))
                    }, "+")])]), t("div", Ly, [(n(!0), a(S, null, A(u(o).beishuList, ($, L) => (n(), a("div", {
                        class: M(["money_item", {
                            monyActive: u(o).currentBeishuIndex === L
                        }]),
                        onClick: I => u(o).currentBeishuIndex = L
                    }, " X" + e($), 11, zy))), 256))])]), t("div", By, [t("div", Iy, e(T.$t("odds")), 1), t("div", Sy, e(u(o).currentOdds), 1)]), t("div", xy, [t("div", Ry, e(T.$t("walletBalance")), 1), t("div", Gy, e(u(_).amount), 1)]), t("div", Ay, [t("div", My, e(T.$t("betAmounts")), 1), t("div", Py, e(u(o).bet_money * u(o).beishu), 1)]), u(_).amount < u(o).bet_money * u(o).beishu ? (n(), a("div", Dy, [t("div", null, [N(y, {
                        name: "warning-o",
                        size: "18"
                    }), E(" " + e(T.$t("walletTip")), 1)]), t("span", {
                        onClick: k
                    }, e(T.$t("goRecharge")) + " >>", 1)])) : w("v-if", !0), N(z, {
                        modelValue: u(r),
                        "onUpdate:modelValue": C[5] || (C[5] = $ => se(r) ? r.value = $ : null),
                        "checked-color": "#CEE98C",
                        "label-disabled": "",
                        "icon-size": "24px"
                    }, {
                        default: D(() => [t("span", Oy, e(T.$t("agree")), 1), t("span", {
                            class: "rule",
                            onClick: C[4] || (C[4] = () => {
                                i.value = !1, l.value = !0
                            })
                        }, e(T.$t("presaleRules")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("div", Ey, [t("div", {
                        class: "cancel_btn",
                        onClick: C[6] || (C[6] = (...$) => u(c) && u(c)(...$))
                    }, e(T.$t("cancel")), 1), t("div", {
                        class: M(["bet_btn", {
                            inconformity: u(_).amount < u(o).bet_money * u(o).beishu || !u(r) || u(o).bet_money * u(o).beishu === 0
                        }]),
                        onClick: C[7] || (C[7] = (...$) => u(p) && u(p)(...$))
                    }, e(T.$t("betting")), 3)])])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const jy = U(qy, [
    ["__scopeId", "data-v-e3548ddc"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoBetSheet.vue"]
]);
const Hy = {},
    wn = s => (Ct("data-v-a175919f"), s = s(), Nt(), s),
    Wy = {
        class: "container"
    },
    Fy = {
        class: "first-paragraph"
    },
    Vy = {
        class: "first-statement"
    },
    Uy = {
        class: "paragraph-two"
    },
    Ky = {
        class: "paragraph-two-statement"
    },
    Xy = {
        class: "paragraph-three"
    },
    Qy = {
        class: "paragraph-three-statement"
    },
    Yy = {
        class: "svg-container"
    },
    Zy = Ri('<div class="first-vector" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.99997C-2.41411e-08 6.72383 0.223857 6.49997 0.499999 6.49997L119.5 6.49996C119.776 6.49996 120 6.72382 120 6.99996C120 7.27611 119.776 7.49996 119.5 7.49996L0.5 7.49997C0.223858 7.49997 2.41411e-08 7.27612 0 6.99997Z" fill="url(#paint0_linear_22_2052)" data-v-a175919f></path><path d="M119.515 8.41418C118.734 7.63313 118.734 6.3668 119.515 5.58575L123.757 1.34311C124.538 0.562062 125.805 0.562062 126.586 1.34311L130.828 5.58575C131.609 6.3668 131.609 7.63313 130.828 8.41418L126.586 12.6568C125.805 13.4379 124.538 13.4379 123.757 12.6568L119.515 8.41418Z" fill="url(#paint1_linear_22_2052)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1),
    Jy = {
        class: "vector-heading"
    },
    t0 = Ri('<div class="vector-two" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M132 6.99997C132 6.72383 131.776 6.49997 131.5 6.49997L12.5 6.49996C12.2239 6.49996 12 6.72382 12 6.99996C12 7.27611 12.2239 7.49996 12.5 7.49996L131.5 7.49997C131.776 7.49997 132 7.27612 132 6.99997Z" fill="url(#paint0_linear_22_2053)" data-v-a175919f></path><path d="M12.4853 8.41418C13.2664 7.63313 13.2664 6.3668 12.4853 5.58575L8.24268 1.34311C7.46163 0.562062 6.1953 0.562062 5.41425 1.34311L1.17162 5.58575C0.390564 6.3668 0.390564 7.63313 1.17162 8.41418L5.41425 12.6568C6.1953 13.4379 7.46163 13.4379 8.24268 12.6568L12.4853 8.41418Z" fill="url(#paint1_linear_22_2053)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1),
    e0 = {
        class: "details-container-one"
    },
    i0 = {
        class: "details-container-items"
    },
    n0 = {
        class: "first-heading"
    },
    a0 = {
        class: "fontBold"
    },
    o0 = {
        class: "paragraph-inside-container"
    },
    s0 = {
        class: "paragraph-title"
    },
    l0 = {
        class: "paragraph-inside-container"
    },
    c0 = {
        class: "paragraph-title"
    },
    r0 = {
        class: "paragraph-inside-container"
    },
    u0 = {
        class: "paragraph-title"
    },
    d0 = {
        class: "paragraph-inside-container"
    },
    p0 = {
        class: "paragraph-title"
    },
    g0 = {
        class: "details-container-one"
    },
    b0 = {
        class: "details-container-items"
    },
    m0 = {
        class: "first-heading"
    },
    _0 = wn(() => t("span", {
        class: "fontBold"
    }, "1,2,3,4,5,6", -1)),
    v0 = {
        class: "paragraph-inside-container"
    },
    h0 = {
        class: "paragraph-title"
    },
    k0 = {
        class: "details-container-one"
    },
    f0 = {
        class: "details-container-items"
    },
    y0 = {
        class: "first-heading"
    },
    $0 = wn(() => t("span", {
        class: "fontBold"
    }, "11,22...66", -1)),
    w0 = {
        class: "paragraph-inside-container"
    },
    T0 = {
        class: "paragraph-title"
    },
    C0 = {
        class: "details-container-one"
    },
    N0 = {
        class: "details-container-items"
    },
    L0 = {
        class: "first-heading"
    },
    z0 = wn(() => t("span", {
        class: "fontBold"
    }, "111,222...666,***", -1)),
    B0 = {
        class: "paragraph-inside-container"
    },
    I0 = {
        class: "paragraph-title"
    },
    S0 = {
        class: "paragraph-inside-container"
    },
    x0 = {
        class: "paragraph-title"
    };

function R0(s, i) {
    return n(), a("div", Wy, [t("div", Fy, [t("p", Vy, e(s.$t("binguoRuleText1")), 1)]), w(" ------------------------- First paragraph ends here--------------------------- "), t("div", Uy, [t("p", Ky, e(s.$t("binguoRuleText2")), 1)]), w(" ------------------------- Paragraph two ends here--------------------------- "), t("div", Xy, [t("p", Qy, e(s.$t("binguoRuleText3")), 1)]), w(" ------------------------- Paragraph three ends here--------------------------- "), t("div", Yy, [Zy, t("div", Jy, e(s.$t("gamePlay")), 1), w(" ------------------------- vector heading ends here--------------------------- "), t0]), w(" ------------------------- vector two ends here--------------------------- "), w(" ///////////////////////////////////////////////////// First container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", e0, [t("div", i0, e(s.$t("xosoTxt60")), 1), w(" ------------------------- svg right ends here--------------------------- "), w(" ------------------------- details container heading ends here--------------------------- "), t("div", n0, [E(e(s.$t("binguoRuleText4")) + " ", 1), t("span", a0, e(s.$t("binguoRuleText5")), 1), E(e(s.$t("binguoRuleText6")), 1)]), w(" ------------------------- first-heading ends here--------------------------- "), t("div", o0, [t("div", s0, [t("span", null, e(s.$t("binguoRuleText7")) + ":", 1), E(e(s.$t("binguoRuleText8")), 1)])]), t("div", l0, [t("div", c0, [t("span", null, e(s.$t("binguoRuleText9")) + ":", 1), E(e(s.$t("binguoRuleText10")), 1)])]), t("div", r0, [t("div", u0, [t("span", null, e(s.$t("binguoRuleText17")) + ":", 1), E(e(s.$t("binguoRuleText18")), 1)])]), t("div", d0, [t("div", p0, [t("span", null, e(s.$t("binguoRuleText11")) + ",", 1), E(e(s.$t("binguoRuleText12")), 1)])])]), w(" First container ends here  "), w(" ///////////////////////////////////////////////////// 2nd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", g0, [t("div", b0, e(s.$t("same")), 1), w(" ------------------------- svg right ends here--------------------------- "), w(" ------------------------- details container heading ends here--------------------------- "), t("div", m0, [E(e(s.$t("binguoRuleText4")) + " ", 1), _0]), w(" ------------------------- first-heading ends here--------------------------- "), t("div", v0, [t("div", h0, e(s.$t("binguoRuleText13")), 1)])]), w(" ///////////////////////////////////////////////////// 3rd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", k0, [t("div", f0, e(s.$t("sameNum")), 1), w(" ------------------------- svg right ends here--------------------------- "), w(" ------------------------- details container heading ends here--------------------------- "), t("div", y0, [E(e(s.$t("binguoRuleText4")), 1), $0]), w(" ------------------------- first-heading ends here--------------------------- "), t("div", w0, [t("div", T0, e(s.$t("binguoRuleText14")), 1)])]), w(" ///////////////////////////////////////////////////// 4th container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", C0, [t("div", N0, e(s.$t("numbersMatch")), 1), w(" ------------------------- svg right ends here--------------------------- "), w(" ------------------------- details container heading ends here--------------------------- "), t("div", L0, [E(e(s.$t("binguoRuleText4")), 1), z0]), w(" ------------------------- first-heading ends here--------------------------- "), t("div", B0, [t("div", I0, e(s.$t("binguoRuleText15")), 1)]), t("div", S0, [t("div", x0, e(s.$t("binguoRuleText16")), 1)])])])
}
const G0 = U(Hy, [
        ["render", R0],
        ["__scopeId", "data-v-a175919f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/Bingo/Rule.vue"]
    ]),
    A0 = s => (Ct("data-v-278561a4"), s = s(), Nt(), s),
    M0 = {
        class: "binguo_container"
    },
    P0 = A0(() => t("span", {
        class: "nav_title"
    }, "BINGO18", -1)),
    D0 = {
        class: "nav_right"
    },
    O0 = {
        class: "binguo_btn_group"
    },
    E0 = ["src"],
    q0 = {
        class: "over_dialog_tip"
    },
    j0 = {
        class: "playerRule"
    },
    H0 = {
        class: "playerRule"
    },
    W0 = {
        style: {
            color: "#fff"
        }
    },
    F0 = V({
        __name: "index",
        setup(s) {
            const {
                goBack: i,
                betPopTXT: o,
                isShowBetMoney: l,
                handleToggleShwoMoney: g,
                store: m,
                overVisble: r,
                getBinguoConfig: c,
                getBinguoOddsList: p,
                playerRuleVisble: d
            } = ji(), _ = rt(), b = () => {
                _.push({
                    path: "/home/AllLotteryGames/BinguoRecord"
                })
            };
            return Tt(() => {
                c(), p()
            }), (k, T) => {
                const C = H("van-icon"),
                    h = H("NavBar");
                return n(), a("div", M0, [N(h, {
                    "left-arrow": "",
                    onClickLeft: u(i),
                    backgroundColor: "#0a4529"
                }, {
                    left: D(() => [N(C, {
                        name: "arrow-left",
                        size: 24
                    }), P0]),
                    right: D(() => [t("div", D0, [t("div", {
                        onClick: T[0] || (T[0] = ve(() => d.value = !0, ["stop"])),
                        class: "binguo_explain"
                    }), t("div", {
                        class: M(["binguo_money", u(l) ? "binguo_money_look" : "binguo_money_hidden"]),
                        onClick: T[1] || (T[1] = ve(() => u(g)(), ["stop"]))
                    }, null, 2), t("div", {
                        onClick: T[2] || (T[2] = ve(() => b(), ["stop"])),
                        class: "binguo_count1"
                    })])]),
                    _: 1
                }, 8, ["onClickLeft"]), t("div", O0, [t("div", {
                    class: M(["btn_1", {
                        active_btn: u(m).binguoType === 1
                    }]),
                    onClick: T[3] || (T[3] = y => u(m).binguoType = 1)
                }, e(k.$t("binguoDesk1")), 3), t("div", {
                    class: M(["btn_2", {
                        active_btn: u(m).binguoType === 2
                    }]),
                    onClick: T[4] || (T[4] = y => u(m).binguoType = 2)
                }, e(k.$t("binguoDesk2")), 3)]), N(zf), N(_y), N(jy), N(xe, {
                    show: u(r),
                    onConfirm: T[5] || (T[5] = y => r.value = !1),
                    "show-cancel-btn": !1,
                    confirmText: k.$t("confirm")
                }, {
                    header: D(() => [t("img", {
                        src: u(Xt)("home/AllLotteryGames/binguo", "binguo_tip"),
                        alt: "",
                        class: "binguo_tip"
                    }, null, 8, E0)]),
                    content: D(() => [t("div", q0, e(k.$t("over_dialog_tip")), 1)]),
                    _: 1
                }, 8, ["show", "confirmText"]), N(xe, {
                    class: "rule_dialog",
                    show: u(d),
                    onConfirm: T[6] || (T[6] = y => d.value = !1),
                    "show-cancel-btn": !1,
                    isShowHeader: !1,
                    confirmText: k.$t("iKonw")
                }, {
                    title: D(() => [t("div", null, e(k.$t("binguo_playerRule")), 1)]),
                    content: D(() => [t("div", j0, [N(G0)])]),
                    _: 1
                }, 8, ["show", "confirmText"]), N(xe, {
                    class: "rule_dialog",
                    show: u(o),
                    onConfirm: T[7] || (T[7] = y => o.value = !1),
                    "show-cancel-btn": !1,
                    isShowHeader: !1,
                    confirmText: k.$t("iKonw")
                }, {
                    title: D(() => [t("div", null, e(k.$t("presaleRules")), 1)]),
                    content: D(() => [t("div", H0, [t("div", W0, e(k.$t("betPopTXT")), 1)])]),
                    _: 1
                }, 8, ["show", "confirmText"])])
            }
        }
    });
const V0 = U(F0, [
        ["__scopeId", "data-v-278561a4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/Binguo/index.vue"]
    ]),
    DA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: V0
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    U0 = {
        class: "binguo_count_tab"
    },
    K0 = ["onClick"],
    X0 = V({
        __name: "BinguoTab",
        setup(s) {
            const {
                store: i
            } = Je(), {
                t: o
            } = mt(), l = [{
                lable: o("betting"),
                value: 1
            }, {
                lable: o("detail"),
                value: 2
            }, {
                lable: o("thisWeek"),
                value: 3
            }, {
                lable: o("binguoLeaderboard"),
                value: 4
            }];
            return (g, m) => (n(), a("div", U0, [(n(), a(S, null, A(l, (r, c) => t("div", {
                class: M(["item", {
                    active: u(i).currentTabIndex === c
                }]),
                key: r.value,
                onClick: p => u(i).currentTabIndex = c
            }, e(r.lable), 11, K0)), 64))]))
        }
    });
const Q0 = U(X0, [
        ["__scopeId", "data-v-44316bfe"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTab.vue"]
    ]),
    Y0 = s => (Ct("data-v-ca8cfc1e"), s = s(), Nt(), s),
    Z0 = {
        class: "t-table_border"
    },
    J0 = {
        class: "t-table_th_round"
    },
    t2 = {
        class: "tab_header"
    },
    e2 = {
        key: 0,
        class: "tab_default_cell"
    },
    i2 = {
        class: "tab_default_cell"
    },
    n2 = {
        key: 0
    },
    a2 = {
        key: 0
    },
    o2 = ["colspan"],
    s2 = Y0(() => t("div", {
        style: {
            color: "#666",
            "font-size": "14px",
            padding: "6px",
            "text-align": "center"
        }
    }, "暂无数据", -1)),
    l2 = V({
        __name: "index",
        props: {
            dataSource: {
                type: Array,
                required: !0
            },
            columnOptions: {
                type: Array,
                required: !0
            },
            headerClass: {
                type: String,
                required: !1
            },
            bodyClass: {
                type: String,
                required: !1
            },
            isLockHeader: {
                type: Boolean,
                required: !1
            },
            border: {
                type: Boolean,
                required: !1,
                default: !0
            },
            scroll: {
                type: Boolean,
                required: !1,
                default: !0
            },
            borderColor: {
                type: String,
                required: !1,
                default: "#0B462A"
            },
            hBgColor: {
                type: String,
                required: !1,
                default: "linear-gradient(180deg, #0A603E 0%, #168055 100%)"
            },
            hColor: {
                type: String,
                required: !1,
                default: "#F9BC36"
            },
            align: {
                type: String,
                required: !1,
                default: "center"
            },
            rowHeight: {
                type: String,
                required: !1,
                default: "auto"
            },
            rowBgColor: {
                type: String,
                required: !1,
                default: "#09613E"
            },
            tabWidth: {
                type: String,
                required: !1,
                default: "100%"
            },
            tabHeight: {
                type: String,
                required: !1,
                default: "600px"
            }
        },
        setup(s) {
            const i = s;
            Do(d => ({
                "ca8cfc1e-tabWidth": d.tabWidth,
                "ca8cfc1e-tabHeight": d.tabHeight,
                "ca8cfc1e-rowHeight": u(r),
                "ca8cfc1e-align": u(g),
                "ca8cfc1e-rowBgColor": u(l),
                "ca8cfc1e-hColor": d.hColor,
                "ca8cfc1e-hBgColor": u(m)
            }));
            const o = v([]),
                {
                    rowBgColor: l,
                    align: g,
                    hBgColor: m,
                    rowHeight: r
                } = i,
                c = () => {
                    o.value = JSON.parse(JSON.stringify(i.dataSource))
                },
                p = () => {
                    i.columnOptions.forEach((d, _) => {
                        if (d.isLockColumn) {
                            let b = document.querySelector(`.th_${d.key}_${_}`),
                                k = document.querySelectorAll(`.td_${d.key}`);
                            b.style.position = "sticky", b.style.top = "-2px", b.style.left = "0", b.style.zIndex = "11", k.forEach(T => {
                                T.style.position = "sticky", T.style.left = "0", T.style.zIndex = "10"
                            })
                        }
                    })
                };
            return Tt(() => {
                p()
            }), Pt(() => i.dataSource, (d, _) => {
                d !== _ && (c(), p())
            }, {
                deep: !0
            }), (d, _) => (n(), a("div", {
                class: "cuTable",
                style: me({ ...d.scroll && {
                        overflowX: "auto"
                    },
                    ...!d.scroll && {
                        overflow: "hidden"
                    }
                })
            }, [t("div", Z0, [t("table", J0, [t("tr", t2, [(n(!0), a(S, null, A(d.columnOptions, (b, k) => (n(), a("th", {
                style: me({
                    width: b.width || 100 / d.columnOptions.length + "%"
                }),
                key: k + "p",
                class: M(`th_${b.key}_${k} default_header_cell ${d.border?"":"noBorder"}`)
            }, [b.isSlotHeader ? be(d.$slots, b.key + "_head", {
                key: 1,
                item: b
            }, void 0, !0) : (n(), a("div", e2, e(b.title), 1))], 6))), 128))]), (n(!0), a(S, null, A(d.dataSource, (b, k) => yt((n(), a("tr", {
                class: "tab_body",
                key: k + "p1"
            }, [(n(!0), a(S, null, A(d.columnOptions, (T, C) => (n(), a("td", {
                key: C + "p2",
                class: M(`td_${T.key} default_cell ${T.cusTdClass||""} ${d.border?"":"noBorder"}`),
                style: me({
                    width: T.width
                })
            }, [t("div", i2, [T.isSlot ? w("v-if", !0) : (n(), a("span", n2, e(b[T.key]), 1)), be(d.$slots, T.key, {
                item: b
            }, void 0, !0)])], 6))), 128))])), [
                [Zt, d.dataSource && d.dataSource.length > 0]
            ])), 128)), d.dataSource.length === 0 ? (n(), a("tr", a2, [t("td", {
                colspan: d.columnOptions.length
            }, [be(d.$slots, "empty", {}, () => [s2], !0)], 8, o2)])) : w("v-if", !0)])])], 4))
        }
    });
const Ke = U(l2, [
        ["__scopeId", "data-v-ca8cfc1e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/table/index.vue"]
    ]),
    c2 = {
        class: "binguo_bet_count"
    },
    r2 = {
        class: "bingtip_count_title"
    },
    u2 = {
        class: "lately"
    },
    d2 = {
        class: "average_column"
    },
    p2 = {
        class: "noaverage_column"
    },
    g2 = {
        class: "average_column"
    },
    b2 = {
        class: "noaverage_column"
    },
    m2 = {
        class: "progress_box"
    },
    _2 = {
        class: "progress"
    },
    v2 = {
        class: "tit"
    },
    h2 = {
        class: "progress"
    },
    k2 = {
        class: "tit"
    },
    f2 = {
        class: "progress"
    },
    y2 = {
        class: "tit"
    },
    $2 = {
        class: "bingtip_count_title"
    },
    w2 = {
        class: "alike_column"
    },
    T2 = {
        class: "big"
    },
    C2 = {
        class: "bingtip_count_title two_title"
    },
    N2 = {
        class: "alike_column"
    },
    L2 = {
        class: "big"
    },
    z2 = V({
        __name: "BinguoBetCount",
        setup(s) {
            const {
                store: i,
                filterStyle: o
            } = Je(), {
                t: l
            } = mt(), g = Q(() => {
                var p, d, _, b;
                return (p = i.smallAndBigTrend) != null && p.bigCount ? ((d = i.smallAndBigTrend) == null ? void 0 : d.bigCount) + ((_ = i.smallAndBigTrend) == null ? void 0 : _.smallCount) + ((b = i.smallAndBigTrend) == null ? void 0 : b.equalCount) : 0
            }), m = v([{
                title: l("xosoTxt60"),
                key: "number",
                isSlot: !0,
                cusTdClass: "sum_column"
            }, {
                title: l("binguoAvgCount"),
                key: "avgCount",
                isSlot: !0
            }, {
                title: l("binguoNotOpenCount"),
                key: "notOpenCount",
                isSlot: !0
            }]), r = v([{
                title: l("numbersMatch"),
                key: "number",
                isSlot: !0,
                cusTdClass: "sum_column"
            }, {
                title: l("binguoOpenCount"),
                key: "openCount",
                isSlot: !1
            }, {
                title: l("binguoAvgCount"),
                key: "avgCount",
                isSlot: !1
            }, {
                title: l("binguoNotOpenCount"),
                key: "notOpenCount",
                isSlot: !1
            }]), c = Q(() => {
                let p = ks(r.value);
                return p[0].title = l("sameNum"), p
            });
            return (p, d) => {
                var b, k, T, C, h, y;
                const _ = H("van-progress");
                return n(), a("div", c2, [t("div", r2, e(p.$t("binguoLastIssue")), 1), t("div", u2, [N(Ke, {
                    "column-options": m.value,
                    "data-source": u(i).resultSumTrend.slice(0, 8),
                    rowHeight: "40px",
                    tabWidth: "49.6%",
                    tabHeight: "100%",
                    border: !1
                }, {
                    number: D(({
                        item: z
                    }) => [t("div", {
                        class: M(`sum_column ${u(o)(z.number)}`)
                    }, e(z.number), 3)]),
                    avgCount: D(({
                        item: z
                    }) => [t("div", d2, e(z.avgCount), 1)]),
                    notOpenCount: D(({
                        item: z
                    }) => [t("div", p2, e(z.notOpenCount), 1)]),
                    _: 1
                }, 8, ["column-options", "data-source"]), N(Ke, {
                    "column-options": m.value,
                    "data-source": u(i).resultSumTrend.slice(8, 16),
                    rowHeight: "40px",
                    tabWidth: "49.6%",
                    tabHeight: "100%",
                    border: !1
                }, {
                    number: D(({
                        item: z
                    }) => [t("div", {
                        class: M(`sum_column ${u(o)(z.number)}`)
                    }, e(z.number), 3)]),
                    avgCount: D(({
                        item: z
                    }) => [t("div", g2, e(z.avgCount), 1)]),
                    notOpenCount: D(({
                        item: z
                    }) => [t("div", b2, e(z.notOpenCount), 1)]),
                    _: 1
                }, 8, ["column-options", "data-source"])]), w(" 进度条 "), t("div", m2, [t("div", _2, [t("div", v2, [t("span", null, e(p.$t("small")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((b = u(i).smallAndBigTrend) == null ? void 0 : b.smallCount), 1)])]), N(_, {
                    percentage: ((k = u(i).smallAndBigTrend) == null ? void 0 : k.smallCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#5DBA47"
                }, null, 8, ["percentage"])]), t("div", h2, [t("div", k2, [t("span", null, e(p.$t("binguoHe")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((T = u(i).smallAndBigTrend) == null ? void 0 : T.equalCount), 1)])]), N(_, {
                    percentage: ((C = u(i).smallAndBigTrend) == null ? void 0 : C.equalCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#F9BC36"
                }, null, 8, ["percentage"])]), t("div", f2, [t("div", y2, [t("span", null, e(p.$t("k3Big")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((h = u(i).smallAndBigTrend) == null ? void 0 : h.bigCount), 1)])]), N(_, {
                    percentage: ((y = u(i).smallAndBigTrend) == null ? void 0 : y.bigCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#5DBA47"
                }, null, 8, ["percentage"])])]), t("div", $2, e(p.$t("binguoThirdAlike")), 1), N(Ke, {
                    "column-options": r.value,
                    "data-source": u(i).threeSameTrend,
                    rowHeight: "40px",
                    tabWidth: "100%",
                    tabHeight: "100%",
                    border: !1,
                    class: "binguoCountTable"
                }, {
                    number: D(({
                        item: z
                    }) => [t("div", w2, [(n(!0), a(S, null, A((z.number + "").split(""), f => (n(), a("div", T2, e(f), 1))), 256))])]),
                    _: 1
                }, 8, ["column-options", "data-source"]), t("div", C2, e(p.$t("binguoTwoAlike")), 1), N(Ke, {
                    "column-options": c.value,
                    "data-source": u(i).twoSameTrend,
                    rowHeight: "40px",
                    tabWidth: "100%",
                    tabHeight: "100%",
                    border: !1,
                    class: "binguoCountTable"
                }, {
                    number: D(({
                        item: z
                    }) => [t("div", N2, [(n(!0), a(S, null, A((z.number + "").split(""), f => (n(), a("div", L2, e(f), 1))), 256))])]),
                    _: 1
                }, 8, ["column-options", "data-source"])])
            }
        }
    });
const B2 = U(z2, [
        ["__scopeId", "data-v-cd38c622"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoBetCount.vue"]
    ]),
    mi = s => (Ct("data-v-f03aed68"), s = s(), Nt(), s),
    I2 = {
        class: "binguo_detail"
    },
    S2 = {
        class: "bingtip_count_title"
    },
    x2 = {
        class: "result1"
    },
    R2 = {
        class: "column_list"
    },
    G2 = {
        class: "bingtip_count_title"
    },
    A2 = {
        class: "record_list"
    },
    M2 = {
        class: "record_item"
    },
    P2 = {
        class: "item"
    },
    D2 = {
        key: 1
    },
    O2 = {
        class: "bingtip_count_title"
    },
    E2 = {
        class: "issueNo_head"
    },
    q2 = {
        class: "issue_text"
    },
    j2 = {
        class: "issue_number"
    },
    H2 = mi(() => t("div", {
        class: "ball"
    }, "1", -1)),
    W2 = mi(() => t("div", {
        class: "ball"
    }, "2", -1)),
    F2 = mi(() => t("div", {
        class: "ball"
    }, "3", -1)),
    V2 = mi(() => t("div", {
        class: "ball"
    }, "4", -1)),
    U2 = mi(() => t("div", {
        class: "ball"
    }, "5", -1)),
    K2 = mi(() => t("div", {
        class: "ball"
    }, "6", -1)),
    X2 = {
        class: "issueNo_column"
    },
    Q2 = V({
        __name: "BinguoDetail",
        setup(s) {
            const {
                t: i
            } = mt(), o = v([{
                title: i("betNumber"),
                key: "issueNo",
                isSlotHeader: !0,
                isSlot: !0,
                width: "28%"
            }, {
                title: "1",
                key: "num1",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "2",
                key: "num2",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "3",
                key: "num3",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "4",
                key: "num4",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "5",
                key: "num5",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "6",
                key: "num6",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: i("gameRecordTotal"),
                key: "sum",
                isSlot: !0,
                width: "10%"
            }]), {
                filterStyle: l,
                last50Result: g,
                last50Record: m,
                last50RecordResult: r
            } = Je();
            return (c, p) => (n(), a("div", I2, [t("div", S2, e(c.$t("binguoLast50")), 1), t("div", x2, [(n(!0), a(S, null, A(u(g), d => (n(), a("div", R2, [(n(!0), a(S, null, A(d, _ => (n(), a("div", {
                class: M(`item ${u(l)(_)}`)
            }, e(_), 3))), 256))]))), 256))]), t("div", G2, e(c.$t("binguoLast50Record")), 1), t("div", A2, [(n(!0), a(S, null, A(u(m), d => (n(), a("div", M2, [(n(!0), a(S, null, A(d, _ => (n(), a("div", P2, [_ ? (n(), a("div", {
                key: 0,
                class: M(`${u(l)(_)}`)
            }, e(_), 3)) : (n(), a("div", D2))]))), 256))]))), 256))]), t("div", O2, e(c.$t("binguoRecordResult")), 1), N(Ke, {
                "column-options": o.value,
                "data-source": u(r),
                rowHeight: "30px",
                tabWidth: "100%",
                hBgColor: "linear-gradient(180deg, #0A603E 0%, #168055 100%)",
                tabHeight: "100%",
                border: !0,
                hColor: "#FFF880"
            }, {
                issueNo_head: D(() => [t("div", E2, [t("span", q2, e(c.$t("betNumber")), 1), t("span", j2, e(c.$t("binguoNumber")), 1)])]),
                num1_head: D(() => [H2]),
                num2_head: D(() => [W2]),
                num3_head: D(() => [F2]),
                num4_head: D(() => [V2]),
                num5_head: D(() => [U2]),
                num6_head: D(() => [K2]),
                issueNo: D(({
                    item: d
                }) => [t("div", X2, e(d.issueNo), 1)]),
                sum: D(({
                    item: d
                }) => [t("div", {
                    class: M(`sum_column ${u(l)(d.sum)}`)
                }, e(d.sum), 3)]),
                num1: D(({
                    item: d
                }) => [t("div", {
                    class: M(`num_column num_column${d.num1}`)
                }, [(n(!0), a(S, null, A(d.num1, () => (n(), a("div"))), 256))], 2)]),
                num2: D(({
                    item: d
                }) => [t("div", {
                    class: M(`num_column num_column${d.num2}`)
                }, [(n(!0), a(S, null, A(d.num2, () => (n(), a("div"))), 256))], 2)]),
                num3: D(({
                    item: d
                }) => [t("div", {
                    class: M(`num_column num_column${d.num3}`)
                }, [(n(!0), a(S, null, A(d.num3, () => (n(), a("div"))), 256))], 2)]),
                num4: D(({
                    item: d
                }) => [t("div", {
                    class: M(`num_column num_column${d.num4}`)
                }, [(n(!0), a(S, null, A(d.num4, () => (n(), a("div"))), 256))], 2)]),
                num5: D(({
                    item: d
                }) => [t("div", {
                    class: M(`num_column num_column${d.num5}`)
                }, [(n(!0), a(S, null, A(d.num5, () => (n(), a("div"))), 256))], 2)]),
                num6: D(({
                    item: d
                }) => [t("div", {
                    class: M(`num_column num_column${d.num6}`)
                }, [(n(!0), a(S, null, A(d.num6, () => (n(), a("div"))), 256))], 2)]),
                _: 1
            }, 8, ["column-options", "data-source"])]))
        }
    });
const Y2 = U(Q2, [
        ["__scopeId", "data-v-f03aed68"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoDetail.vue"]
    ]),
    Tn = s => (Ct("data-v-ec5b8d89"), s = s(), Nt(), s),
    Z2 = {
        class: "trend_container"
    },
    J2 = {
        class: "trend_header"
    },
    t$ = {
        class: "trend_header_title"
    },
    e$ = Tn(() => t("span", null, "7", -1)),
    i$ = Tn(() => t("br", null, null, -1)),
    n$ = Tn(() => t("span", null, "100", -1)),
    a$ = ["src"],
    o$ = ["src"],
    s$ = {
        class: "trend_table"
    },
    l$ = {
        class: "trend_tip"
    },
    c$ = {
        class: "tip_text"
    },
    r$ = {
        key: 0
    },
    u$ = {
        key: 0
    },
    d$ = {
        class: "custom_column"
    },
    p$ = {
        class: "custom_column winmount_column"
    },
    g$ = V({
        __name: "BinguoTrend",
        setup(s) {
            const {
                store: i
            } = Je(), {
                t: o
            } = mt(), l = v([{
                title: "Top",
                key: "rankID",
                isSlot: !0,
                width: "20%",
                cusTdClass: "rankID_column"
            }, {
                title: o("account"),
                key: "userName",
                width: "38%",
                isSlot: !0
            }, {
                title: o("winningAmount"),
                width: "42%",
                key: "winAmount",
                isSlot: !0
            }]), g = rt(), m = () => {
                i.isTrend || g.back()
            };
            return (r, c) => (n(), a("div", Z2, [t("div", J2, [t("div", t$, [E(e(r.$t("binguoLately")), 1), e$, E(e(r.$t("days")), 1), i$, E(" " + e(r.$t("binguoQian")), 1), n$, E(e(r.$t("binguoMin") + r.$t("binguoPaimin")), 1)]), t("img", {
                src: u(Xt)("home/AllLotteryGames/binguo", "trend1"),
                class: "trend1",
                alt: ""
            }, null, 8, a$), t("img", {
                src: u(Xt)("home/AllLotteryGames/binguo", "trend2"),
                class: "trend2",
                alt: ""
            }, null, 8, o$)]), t("div", s$, [t("div", l$, [t("div", c$, [E(e(u(i).isTrend ? r.$t("binguoMyLead") : r.$t("binguoNotBoard")) + " ", 1), u(i).isTrend ? w("v-if", !0) : (n(), a("br", r$)), E(" " + e(u(i).isTrend ? "" : r.$t("binguoGoPlay")), 1)]), t("div", {
                class: "trend_go",
                onClick: m
            }, [E(e(u(i).isTrend ? u(i).userRank : "GO") + " ", 1), u(i).isTrend ? (n(), a("span", u$, e(r.$t("binguoMin")), 1)) : w("v-if", !0)])]), N(Ke, {
                "column-options": l.value,
                "data-source": u(i).trendList,
                rowHeight: "50px",
                tabWidth: "100%",
                hBgColor: "linear-gradient(180deg, #13AB62 0%, #0F6946 100%)",
                tabHeight: "100%",
                border: !1,
                hColor: "#FFF880"
            }, {
                rankID: D(({
                    item: p
                }) => [t("div", {
                    class: M(["rankID_column", `${p.rankID<4?"top_"+p.rankID:"rank_text"}`])
                }, e(p.rankID > 3 ? p.rankID : ""), 3)]),
                userName: D(({
                    item: p
                }) => [t("div", d$, e(p.userName), 1)]),
                winAmount: D(({
                    item: p
                }) => [t("div", p$, e(u(Bt)(p.winAmount)), 1)]),
                _: 1
            }, 8, ["column-options", "data-source"])])]))
        }
    });
const b$ = U(g$, [
        ["__scopeId", "data-v-ec5b8d89"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTrend.vue"]
    ]),
    m$ = {
        class: "last7Day_container"
    },
    _$ = {
        class: "bingtip_count_title"
    },
    v$ = {
        class: "column_time"
    },
    h$ = {
        key: 0,
        class: "result"
    },
    k$ = {
        class: "quan"
    },
    f$ = {
        key: 0,
        class: "result"
    },
    y$ = {
        class: "quan"
    },
    $$ = {
        key: 0,
        class: "result"
    },
    w$ = {
        class: "quan"
    },
    T$ = {
        key: 0,
        class: "result"
    },
    C$ = {
        class: "quan"
    },
    N$ = {
        key: 0,
        class: "result"
    },
    L$ = {
        class: "quan"
    },
    z$ = {
        key: 0,
        class: "result"
    },
    B$ = {
        class: "quan"
    },
    I$ = {
        key: 0,
        class: "result"
    },
    S$ = {
        class: "quan"
    },
    x$ = V({
        __name: "BinguoLast7Day",
        setup(s) {
            const {
                store: i,
                columnOptions: o,
                filterStyle: l
            } = Je();
            return (g, m) => (n(), a("div", m$, [t("div", _$, e(g.$t("binguoLast7Result")), 1), N(Ke, {
                "column-options": u(o),
                "data-source": u(i).last7Day,
                rowHeight: "40px",
                "tab-height": "1200px"
            }, {
                issueEndTime: D(({
                    item: r
                }) => [t("div", v$, e(r.issueEndTime), 1)]),
                time_index_0: D(({
                    item: r
                }) => {
                    var c, p, d;
                    return [r.time_index_0 ? (n(), a("div", h$, [t("div", k$, [(n(!0), a(S, null, A((c = r.time_index_0) == null ? void 0 : c.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", u(l)((p = r.time_index_0) == null ? void 0 : p.resultSum)])
                    }, e((d = r.time_index_0) == null ? void 0 : d.resultSum), 3)])) : w("v-if", !0)]
                }),
                time_index_1: D(({
                    item: r
                }) => {
                    var c, p, d;
                    return [r.time_index_1 ? (n(), a("div", f$, [t("div", y$, [(n(!0), a(S, null, A((c = r.time_index_1) == null ? void 0 : c.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", u(l)((p = r.time_index_1) == null ? void 0 : p.resultSum)])
                    }, e((d = r.time_index_1) == null ? void 0 : d.resultSum), 3)])) : w("v-if", !0)]
                }),
                time_index_2: D(({
                    item: r
                }) => {
                    var c, p, d;
                    return [r.time_index_2 ? (n(), a("div", $$, [t("div", w$, [(n(!0), a(S, null, A((c = r.time_index_2) == null ? void 0 : c.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", u(l)((p = r.time_index_2) == null ? void 0 : p.resultSum)])
                    }, e((d = r.time_index_2) == null ? void 0 : d.resultSum), 3)])) : w("v-if", !0)]
                }),
                time_index_3: D(({
                    item: r
                }) => {
                    var c, p, d;
                    return [r.time_index_3 ? (n(), a("div", T$, [t("div", C$, [(n(!0), a(S, null, A((c = r.time_index_3) == null ? void 0 : c.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", u(l)((p = r.time_index_3) == null ? void 0 : p.resultSum)])
                    }, e((d = r.time_index_3) == null ? void 0 : d.resultSum), 3)])) : w("v-if", !0)]
                }),
                time_index_4: D(({
                    item: r
                }) => {
                    var c, p, d;
                    return [r.time_index_4 ? (n(), a("div", N$, [t("div", L$, [(n(!0), a(S, null, A((c = r.time_index_4) == null ? void 0 : c.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", u(l)((p = r.time_index_4) == null ? void 0 : p.resultSum)])
                    }, e((d = r.time_index_4) == null ? void 0 : d.resultSum), 3)])) : w("v-if", !0)]
                }),
                time_index_5: D(({
                    item: r
                }) => {
                    var c, p, d;
                    return [r.time_index_5 ? (n(), a("div", z$, [t("div", B$, [(n(!0), a(S, null, A((c = r.time_index_5) == null ? void 0 : c.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", u(l)((p = r.time_index_5) == null ? void 0 : p.resultSum)])
                    }, e((d = r.time_index_5) == null ? void 0 : d.resultSum), 3)])) : w("v-if", !0)]
                }),
                time_index_6: D(({
                    item: r
                }) => {
                    var c, p, d;
                    return [r.time_index_6 ? (n(), a("div", I$, [t("div", S$, [(n(!0), a(S, null, A((c = r.time_index_6) == null ? void 0 : c.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", u(l)((p = r.time_index_6) == null ? void 0 : p.resultSum)])
                    }, e((d = r.time_index_6) == null ? void 0 : d.resultSum), 3)])) : w("v-if", !0)]
                }),
                _: 1
            }, 8, ["column-options", "data-source"])]))
        }
    });
const R$ = U(x$, [
        ["__scopeId", "data-v-177bff59"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoLast7Day.vue"]
    ]),
    G$ = {
        class: "binguo_count"
    },
    A$ = V({
        __name: "index",
        setup(s) {
            const {
                store: i,
                getTrendstatistics: o,
                getLotteryRankList: l,
                getLotteryResult7Day: g,
                getBingo18Last50Result: m
            } = Je(), r = rt(), c = () => {
                r.back()
            };
            return Pt(() => i.currentTabIndex, p => {
                switch (p) {
                    case 0:
                        o();
                        break;
                    case 1:
                        m();
                        break;
                    case 2:
                        g();
                        break;
                    case 3:
                        l();
                        break
                }
            }, {
                immediate: !0
            }), (p, d) => {
                const _ = H("NavBar");
                return n(), a("div", G$, [N(_, {
                    "left-arrow": "",
                    onClickLeft: c,
                    backgroundColor: "#0a4529",
                    title: `${p.$t("binguoCount")}`
                }, null, 8, ["title"]), N(Q0), u(i).currentTabIndex === 0 ? (n(), tt(B2, {
                    key: 0
                })) : w("v-if", !0), u(i).currentTabIndex === 1 ? (n(), tt(Y2, {
                    key: 1
                })) : w("v-if", !0), u(i).currentTabIndex === 2 ? (n(), tt(R$, {
                    key: 2
                })) : w("v-if", !0), u(i).currentTabIndex === 3 ? (n(), tt(b$, {
                    key: 3
                })) : w("v-if", !0)])
            }
        }
    });
const M$ = U(A$, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BinguoCount/index.vue"]
    ]),
    OA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: M$
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Hi = s => (Ct("data-v-8073d5d0"), s = s(), Nt(), s),
    P$ = {
        class: "body-container"
    },
    D$ = {
        class: "MyGameRecordList__C"
    },
    O$ = ["onClick"],
    E$ = {
        class: "MyGameRecordList__C_left"
    },
    q$ = {
        class: "MyGameRecordList__C-item-m"
    },
    j$ = {
        class: "MyGameRecordList__C-item-m-top"
    },
    H$ = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    W$ = {
        key: 0
    },
    F$ = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    V$ = {
        class: "detail_title"
    },
    U$ = {
        class: "detail_item"
    },
    K$ = {
        class: "item_title"
    },
    X$ = {
        class: "item_result"
    },
    Q$ = ["onClick"],
    Y$ = Hi(() => t("path", {
        d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    Z$ = Hi(() => t("path", {
        d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
        fill: "#87C7AF",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    J$ = [Y$, Z$],
    t3 = {
        class: "detail_item"
    },
    e3 = {
        class: "item_title"
    },
    i3 = {
        class: "item_result"
    },
    n3 = ["onClick"],
    a3 = Hi(() => t("path", {
        d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    o3 = Hi(() => t("path", {
        d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
        fill: "#87C7AF",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    s3 = [a3, o3],
    l3 = {
        class: "detail_item"
    },
    c3 = {
        class: "item_title"
    },
    r3 = {
        class: "item_result"
    },
    u3 = {
        class: "detail_item"
    },
    d3 = {
        class: "item_title"
    },
    p3 = {
        class: "item_result"
    },
    g3 = {
        class: "detail_item"
    },
    b3 = {
        class: "item_title"
    },
    m3 = {
        class: "item_result"
    },
    _3 = {
        class: "detail_item"
    },
    v3 = {
        class: "item_title"
    },
    h3 = {
        class: "item_result"
    },
    k3 = {
        class: "detail_item"
    },
    f3 = {
        class: "item_title"
    },
    y3 = {
        class: "item_result"
    },
    $3 = {
        class: "detail_item"
    },
    w3 = {
        class: "item_title"
    },
    T3 = {
        class: "item_result"
    },
    C3 = {
        class: "draw_result"
    },
    N3 = {
        class: "detail_item"
    },
    L3 = {
        class: "item_title"
    },
    z3 = {
        key: 1,
        class: "item_result"
    },
    B3 = {
        class: "detail_item"
    },
    I3 = {
        class: "item_title"
    },
    S3 = {
        class: "detail_item"
    },
    x3 = {
        class: "item_title"
    },
    R3 = {
        class: "item_result"
    },
    G3 = {
        class: "detail_item"
    },
    A3 = {
        class: "item_title"
    },
    M3 = {
        class: "item_result"
    },
    P3 = V({
        __name: "RecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = mt(), {
                filterGameType: o
            } = Je(), l = v(-1), g = c => {
                l.value == c ? l.value = -1 : l.value = c
            }, m = (c, p) => {
                if (p == 1) switch (c) {
                    case 0:
                        return i("bettingResultState3");
                    case 1:
                        return i("hasWon");
                    case 2:
                        return i("bettingResultState1");
                    case 3:
                        return i("xosoTxt76");
                    default:
                        return ""
                } else switch (c) {
                    case 0:
                        return "fail";
                    case 1:
                        return "success";
                    case 2:
                        return "wait";
                    case 3:
                        return "ing";
                    default:
                        return "ing"
                }
            }, r = c => {
                switch (c) {
                    case "Big":
                        return i("big");
                    case "Drawn":
                        return i("binguoHe");
                    case "Small":
                        return i("small");
                    default:
                        return c
                }
            };
            return (c, p) => (n(), a("div", P$, [t("div", D$, [(n(!0), a(S, null, A(c.mayrecord, (d, _) => (n(), a(S, {
                key: _
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: b => g(_)
            }, [t("div", {
                class: M(["MyGameRecordList__C-item-l", u(o)(Number(d.gameType), d.selectType).className])
            }, e(r(d.selectType)), 3), t("div", E$, [t("div", q$, [t("div", j$, e(d.issueNumber), 1), t("div", H$, e(d.addTime), 1)]), t("div", {
                class: M(["MyGameRecordList__C-item-r", m(d.state, 2)])
            }, [t("div", {
                class: M(m(d.state, 2))
            }, e(m(d.state, 1)), 3), d.premium ? (n(), a("span", W$, e(u(Bt)(d.profitAmount)), 1)) : w("v-if", !0)], 2)])], 8, O$), _ == l.value ? (n(), a("div", F$, [t("div", V$, e(c.$t("details")), 1), t("div", U$, [t("div", K$, e(c.$t("orderNoMay")), 1), t("div", X$, [E(e(d.orderNumber) + " ", 1), (n(), a("svg", {
                onClick: b => u(Fe)(d.orderNumber),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, J$, 8, Q$))])]), t("div", t3, [t("div", e3, e(c.$t("issueMay")), 1), t("div", i3, [E(e(d.issueNumber) + " ", 1), (n(), a("svg", {
                onClick: b => u(Fe)(d.issueNumber),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, s3, 8, n3))])]), t("div", l3, [t("div", c3, e(c.$t("gamePlay")), 1), t("div", r3, e(u(o)(Number(d.gameType), d.selectType).playerName), 1)]), t("div", u3, [t("div", d3, e(c.$t("amountMay")), 1), t("div", p3, e(d.amount), 1)]), t("div", g3, [t("div", b3, e(c.$t("multiple")), 1), t("div", m3, e(d.figure), 1)]), t("div", _3, [t("div", v3, e(c.$t("afterTaxAmount")), 1), t("div", h3, e(d.realAmount), 1)]), t("div", k3, [t("div", f3, e(c.$t("tax")), 1), t("div", y3, e(d.serviceCharge || "-"), 1)]), t("div", $3, [t("div", w3, e(c.$t("winTips3")), 1), t("div", T3, [t("div", {
                class: M(["draw_num", `${d.sumCount?u(o)(Number(d.gameType),d.selectType).className:""}`])
            }, e(d.sumCount || "-"), 3), d.premium ? (n(!0), a(S, {
                key: 0
            }, A(d.premium.split(""), b => (n(), a("div", C3, e(b), 1))), 256)) : w("v-if", !0)])]), t("div", N3, [t("div", L3, e(c.$t("betting")), 1), d.gameType === "2" || d.gameType === "1" ? (n(), a("div", {
                key: 0,
                class: M(["item_result item_bet", `${u(o)(Number(d.gameType),d.selectType).className}`])
            }, e(d.selectType), 3)) : (n(), a("div", z3, [(n(!0), a(S, null, A(d.selectType.split(""), b => (n(), a("div", {
                class: M(["item_result item_bet item_alike", `${u(o)(Number(d.gameType),d.selectType).className}`])
            }, e(b), 3))), 256))]))]), t("div", B3, [t("div", I3, e(c.$t("statusMay")), 1), t("div", {
                class: M(["item_result", m(d.state, 2)])
            }, e(m(d.state, 1)), 3)]), t("div", S3, [t("div", x3, e(c.$t("winOrLose")), 1), t("div", R3, e(d.profitAmount ? u(Bt)(d.profitAmount) : "-"), 1)]), t("div", G3, [t("div", A3, e(c.$t("createTime")), 1), t("div", M3, e(d.addTime), 1)])])) : w("v-if", !0)], 64))), 128))])]))
        }
    });
const D3 = U(P3, [
        ["__scopeId", "data-v-8073d5d0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/Bingo/RecordList.vue"]
    ]),
    O3 = {
        class: "record-container"
    },
    E3 = {
        class: "WinTrx__C-head-more"
    },
    q3 = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = () => {
                    i.back()
                },
                l = v([]),
                g = v({
                    pageSize: 20
                }),
                m = () => {},
                r = () => {},
                c = v("");
            return (p, d) => {
                const _ = H("NavBar");
                return n(), a("div", O3, [N(_, {
                    "left-arrow": "",
                    onClickLeft: o,
                    "background-color": "#0a4529",
                    title: p.$t("xosoTxt73")
                }, {
                    right: D(() => [t("div", E3, [t("div", {
                        onClick: d[0] || (d[0] = b => m())
                    }), t("div", {
                        class: M({
                            disableVoice: c.value == "2"
                        }),
                        onClick: r
                    }, null, 2)])]),
                    _: 1
                }, 8, ["title"]), N(ga, {
                    list: l.value,
                    "onUpdate:list": d[1] || (d[1] = b => l.value = b),
                    pageQuery: g.value,
                    "onUpdate:pageQuery": d[2] || (d[2] = b => g.value = b),
                    api: u(wd),
                    distance: 100,
                    ref: "listRef",
                    isAutoLoad: !0
                }, {
                    content: D(() => [N(D3, {
                        mayrecord: l.value
                    }, null, 8, ["mayrecord"])]),
                    _: 1
                }, 8, ["list", "pageQuery", "api"])])
            }
        }
    });
const j3 = U(q3, [
        ["__scopeId", "data-v-5e0daa42"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/BinguoRecord/index.vue"]
    ]),
    EA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: j3
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    H3 = s => (Ct("data-v-6c7a1db6"), s = s(), Nt(), s),
    W3 = {
        class: "Betting__Popup"
    },
    F3 = {
        class: "Betting__Popup-head"
    },
    V3 = {
        class: "Betting__Popup-head-title"
    },
    U3 = {
        class: "Betting__Popup-head-selectName"
    },
    K3 = {
        class: "Betting__Popup-body"
    },
    X3 = {
        class: "Betting__Popup-body-line"
    },
    Q3 = {
        class: "Betting__Popup-body-line-list"
    },
    Y3 = ["onClick"],
    Z3 = {
        class: "Betting__Popup-body-line"
    },
    J3 = {
        class: "Betting__Popup-body-line-btnL"
    },
    t5 = {
        class: "Betting__Popup-body-line"
    },
    e5 = H3(() => t("div", null, null, -1)),
    i5 = {
        class: "Betting__Popup-body-line-list"
    },
    n5 = ["onClick"],
    a5 = {
        class: "Betting__Popup-body-line"
    },
    o5 = {
        class: "Betting__Popup-foot"
    },
    s5 = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    l5 = {
        class: "Betting__Popup-PreSale"
    },
    c5 = {
        class: "Betting__Popup-PreSale-head"
    },
    r5 = {
        class: "Betting__Popup-PreSale-body"
    },
    u5 = {
        class: "Betting__Popup-PreSale-foot"
    },
    d5 = V({
        __name: "BettingPopup",
        props: {
            selectInfo: {
                type: Object,
                default: () => ({})
            },
            bettingPopupShow: {
                type: Boolean,
                default: v(!1)
            },
            actionItem: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = mt(),
                g = v(!1),
                m = v(!0),
                r = Q(() => o.actionItem.scopeList || []),
                c = v([1, 5, 10, 20, 50, 100]),
                p = Q({
                    get() {
                        return o.bettingPopupShow || !1
                    },
                    set(y) {
                        i("update:bettingPopupShow", y)
                    }
                }),
                d = y => {
                    switch (y) {
                        case 1:
                            o.selectInfo.count > 1 && (o.selectInfo.count--, h());
                            break;
                        case 2:
                            o.selectInfo.count++, h();
                            break
                    }
                },
                _ = y => {
                    y > 0 && (o.selectInfo.count = parseInt(y), h())
                },
                b = y => {
                    o.selectInfo.count = y, h()
                },
                k = y => {
                    o.selectInfo.coin = y, h()
                },
                T = () => {
                    g.value = !1, m.value = !0
                },
                C = () => {
                    m.value ? i("submitBetting") : _e(l("agreePresaleRules"))
                },
                h = () => {
                    o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
                };
            return (y, z) => {
                const f = H("van-field"),
                    $ = H("van-popup"),
                    L = Ht("throttle-click");
                return n(), a(S, null, [w(" 投注内容 begin "), N($, {
                    show: p.value,
                    "onUpdate:show": z[6] || (z[6] = I => p.value = I),
                    position: "bottom",
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: D(() => [t("div", W3, [t("div", F3, [t("div", V3, e(s.actionItem.lotteryName), 1), t("div", U3, [t("span", null, e(u(l)("choose")), 1), t("span", null, e(s.selectInfo.selectCon), 1)])]), t("div", K3, [t("div", X3, [E(e(u(l)("amount")) + " ", 1), t("div", Q3, [(n(!0), a(S, null, A(r.value, (I, B) => (n(), a("div", {
                        key: B,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.coin == I
                        }]),
                        onClick: x => k(I)
                    }, e(I), 11, Y3))), 128))])]), t("div", Z3, [E(e(u(l)("numbers")) + " ", 1), t("div", J3, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: s.selectInfo.count > 0
                        }]),
                        onClick: z[0] || (z[0] = I => d(1))
                    }, "-", 2), N(f, {
                        class: "Betting__Popup-input",
                        modelValue: s.selectInfo.count,
                        "onUpdate:modelValue": z[1] || (z[1] = I => s.selectInfo.count = I),
                        type: "digit",
                        maxlength: 4,
                        onInput: _
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: z[2] || (z[2] = I => d(2))
                    }, "+")])]), t("div", t5, [e5, t("div", i5, [(n(!0), a(S, null, A(c.value, (I, B) => (n(), a("div", {
                        key: B,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.count == I
                        }]),
                        onClick: x => b(I)
                    }, " X" + e(I), 11, n5))), 128))])]), t("div", a5, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: m.value
                        }]),
                        onClick: z[3] || (z[3] = I => m.value = !m.value)
                    }, e(u(l)("agree")), 3), t("span", {
                        onClick: z[4] || (z[4] = I => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(u(l)("presaleRules")), 1)])]), t("div", o5, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: z[5] || (z[5] = I => i("clearBetting"))
                    }, e(u(l)("cancel")), 1), yt((n(), a("div", s5, [E(e(u(l)("totalAmount")) + " " + e(u(Bt)(s.selectInfo.count * s.selectInfo.coin || 0)), 1)])), [
                        [L, {
                            handler: C,
                            wait: 2e3
                        }]
                    ])])])]),
                    _: 1
                }, 8, ["show"]), w(" 规则弹层 begin"), N($, {
                    show: g.value,
                    "onUpdate:show": z[7] || (z[7] = I => g.value = I),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: D(() => [t("div", l5, [t("div", c5, e(u(l)("presaleRules")), 1), t("div", r5, e(y.$t("betPopTXT")), 1), t("div", u5, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: T
                    }, e(u(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const p5 = U(d5, [
        ["__scopeId", "data-v-6c7a1db6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/ChangLong/BettingPopup.vue"]
    ]),
    g5 = {
        class: "changLong__C"
    },
    b5 = {
        class: "changLong__C-bet"
    },
    m5 = {
        class: "changLong__C-bet-l"
    },
    _5 = {
        class: "num"
    },
    v5 = {
        class: "time"
    },
    h5 = {
        class: "other"
    },
    k5 = {
        class: "remark"
    },
    f5 = {
        class: "issue"
    },
    y5 = ["onClick"],
    $5 = ["onClick"],
    w5 = ["onClick"],
    T5 = ["onClick"],
    C5 = ["onClick"],
    N5 = ["onClick"],
    L5 = ["onClick"],
    z5 = ["onClick"],
    B5 = ["onClick"],
    I5 = ["onClick"],
    S5 = ["onClick"],
    oa = 5,
    x5 = V({
        __name: "Bet",
        setup(s) {
            const i = Ai.global.t,
                o = v(!1),
                l = v({}),
                g = v({
                    coin: 0,
                    count: 1,
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: 1,
                    selectCon: ""
                }),
                m = Oo([]);
            let r = null;
            const c = (f, $, L, I, B) => {
                    if (m.value[$].action = L, l.value = f, g.value.selectCon = I, g.value.coin = f.scopeList[0], g.value.typeid = f.type, g.value.gametype = f.bettingGameType, f.type > 4 && f.type != 30) B == "big" ? g.value.selecttype = "H" : B == "small" ? g.value.selecttype = "L" : g.value.selecttype = B;
                    else {
                        const x = {
                            red: 10,
                            green: 11,
                            violet: 12,
                            big: 13,
                            small: 14
                        };
                        g.value.selecttype = x[B]
                    }
                    g.value.issuenumber = f.issueNumber, o.value = !0
                },
                p = v(!1),
                d = async () => {
                    if (r && clearInterval(r), p.value) return;
                    p.value = !0;
                    const f = await at(fs({
                        gameType: -1
                    }));
                    if (p.value = !1, !f) return;
                    const $ = f.data.serviceTime;
                    m.value = f.data.list.map(L => {
                        let I = new Date($).getTime(),
                            B = new Date(L.startTime).getTime(),
                            x = (I - B) / 1e3;
                        return x > L.intervalM * 60 && (x = L.intervalM * 60), L.scopeList = L.scope.split("|").map(G => Number(G)), L.passTime = Math.floor(L.intervalM * 60 - x), L.time1 = 0, L.time2 = Math.floor(L.passTime / 60), L.time3 = Math.floor(L.passTime % 60 / 10), L.time4 = Math.floor(L.passTime % 10), L
                    }), r = setInterval(function() {
                        _()
                    }, 1e3)
                },
                _ = () => {
                    const f = m.value.length;
                    let $ = !1;
                    for (let L = 0; L < f; L++) {
                        let I = m.value[L];
                        if (I.passTime < oa && I.issueNumber == l.value.issueNumber && b(), I.passTime > 0) I.time2 = Math.floor(I.passTime / 60), I.time3 = Math.floor(I.passTime % 60 / 10), I.time4 = Math.floor(I.passTime % 10), I.passTime--;
                        else {
                            $ = !1, clearInterval(r), d();
                            break
                        }
                        $ = I.time3 + I.time4 == 0
                    }
                    Eo(m), $ && (clearInterval(r), d())
                },
                b = () => {
                    o.value = !1;
                    let f = m.value.findIndex($ => JSON.stringify($) == JSON.stringify(l.value));
                    f != -1 && (m.value[f].action = 0), g.value.coin = l.value.scopeList ? l.value.scopeList[0] : 0, g.value.count = 1, l.value = {}
                },
                k = () => {
                    const {
                        typeid: f = 0
                    } = g.value;
                    f && (f < 5 || f == 30 ? C() : f < 9 ? y() : h())
                },
                T = f => f < 5 || f == 30 ? "winGo" : f < 9 ? "Fd" : "k3",
                C = async () => {
                    const f = await at(ya({
                        typeId: g.value.typeid,
                        issuenumber: g.value.issuenumber,
                        amount: g.value.coin,
                        betCount: Number(g.value.count),
                        gameType: g.value.gametype,
                        selectType: g.value.selecttype
                    }));
                    (f == null ? void 0 : f.code) === 0 && (_e(i("code" + f.msgCode)), b())
                },
                h = async () => {
                    let {
                        coin: f,
                        count: $,
                        issuenumber: L,
                        gametype: I,
                        selecttype: B,
                        typeid: x
                    } = g.value;
                    const G = await at($a({
                        amount: f,
                        betCount: Number($),
                        gameType: I.toString(),
                        selectType: B,
                        typeId: x,
                        issuenumber: L
                    }));
                    (G == null ? void 0 : G.code) === 0 && (_e(i("code" + G.msgCode)), b())
                },
                y = async () => {
                    let {
                        coin: f,
                        count: $,
                        issuenumber: L,
                        gametype: I,
                        selecttype: B,
                        typeid: x
                    } = g.value;
                    const G = {
                            issuenumber: L,
                            typeId: x,
                            amount: f,
                            betCount: Number($),
                            gameType: I,
                            selectType: B
                        },
                        P = await at(_a(G));
                    (P == null ? void 0 : P.code) === 0 && (_e(i("code" + P.msgCode)), b())
                },
                z = f => f == "H" ? "B" : f.trim() == "L" ? "S" : f;
            return Tt(() => {
                d()
            }), Ve(() => {
                clearInterval(r)
            }), Pt(() => Te().visibility, f => {
                d()
            }), (f, $) => (n(), a(S, null, [t("div", g5, [(n(!0), a(S, null, A(m.value, (L, I) => (n(), a("div", b5, [t("div", m5, [t("div", {
                class: M(["titel", [T(L.type)]])
            }, e(L.lotteryName), 3), t("div", _5, [E(e(L.issueNumber) + " ", 1), t("span", v5, e(`${L.time1}${L.time2}:${L.time3}${L.time4}`), 1)]), t("div", h5, [t("div", k5, e(L.remark), 1), t("div", {
                class: M(["gameResult", "bg-" + L.gameResult])
            }, e(z(L.gameResult)), 3), t("div", f5, e(L.issue) + e(f.$t("betIssues")), 1)])]), t("div", {
                class: M(["changLong__C-bet-r", {
                    disable: L.passTime < oa
                }])
            }, [L.gameType == 0 ? (n(), a(S, {
                key: 0
            }, [t("div", {
                class: M({
                    active: L.action == 1
                }),
                onClick: B => c(L, I, 1, f.$t("betBig"), "big")
            }, e(f.$t("betBig")), 11, y5), t("div", {
                class: M({
                    active: L.action == 2
                }),
                onClick: B => c(L, I, 2, f.$t("betSmall"), "small")
            }, e(f.$t("betSmall")), 11, $5)], 64)) : w("v-if", !0), L.gameType == 1 ? (n(), a(S, {
                key: 1
            }, [t("div", {
                class: M({
                    active: L.action == 1
                }),
                onClick: B => c(L, I, 1, f.$t("betRed"), "red")
            }, e(f.$t("betRed")), 11, w5), t("div", {
                class: M({
                    active: L.action == 2
                }),
                onClick: B => c(L, I, 2, f.$t("betGreen"), "green")
            }, e(f.$t("betGreen")), 11, T5), t("div", {
                class: M({
                    active: L.action == 3
                }),
                onClick: B => c(L, I, 3, f.$t("betPurple"), "violet")
            }, e(f.$t("betPurple")), 11, C5)], 64)) : w("v-if", !0), L.gameType == 2 ? (n(), a(S, {
                key: 2
            }, [t("div", {
                class: M({
                    active: L.action == 1
                }),
                onClick: B => c(L, I, 1, f.$t("betOdd"), "O")
            }, e(f.$t("betOdd")), 11, N5), t("div", {
                class: M({
                    active: L.action == 2
                }),
                onClick: B => c(L, I, 2, f.$t("betEven"), "E")
            }, e(f.$t("betEven")), 11, L5)], 64)) : w("v-if", !0), L.gameType == 3 ? (n(), a(S, {
                key: 3
            }, [t("div", {
                class: M({
                    active: L.action == 1
                }),
                onClick: B => c(L, I, 1, f.$t("betWithSingle"), "O")
            }, e(f.$t("betWithSingle")), 11, z5), t("div", {
                class: M({
                    active: L.action == 2
                }),
                onClick: B => c(L, I, 2, f.$t("betWithDouble"), "E")
            }, e(f.$t("betWithDouble")), 11, B5)], 64)) : w("v-if", !0), L.gameType == 4 ? (n(), a(S, {
                key: 4
            }, [t("div", {
                class: M({
                    active: L.action == 1
                }),
                onClick: B => c(L, I, 1, f.$t("betWithBig"), "H")
            }, e(f.$t("betWithBig")), 11, I5), t("div", {
                class: M({
                    active: L.action == 2
                }),
                onClick: B => c(L, I, 2, f.$t("betWithSmall"), "L")
            }, e(f.$t("betWithSmall")), 11, S5)], 64)) : w("v-if", !0)], 2)]))), 256))]), N(p5, {
                bettingPopupShow: o.value,
                selectInfo: g.value,
                actionItem: l.value,
                onClearBetting: b,
                onSubmitBetting: k
            }, null, 8, ["bettingPopupShow", "selectInfo", "actionItem"])], 64))
        }
    });
const R5 = U(x5, [
        ["__scopeId", "data-v-91d808d9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/ChangLong/Bet.vue"]
    ]),
    G5 = {
        class: "MyGameRecord__C"
    },
    A5 = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    M5 = {
        class: "MyGameRecord__C-body"
    },
    P5 = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    D5 = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    O5 = {
        class: "MyGameRecord__C-foot-page"
    },
    E5 = V({
        __name: "MyGameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            ApiFun: {
                type: Function,
                required: !0
            },
            goPathName: {
                type: String,
                required: !0
            },
            hasHead: {
                type: Boolean,
                required: !0,
                default: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = rt(),
                g = v(4),
                m = v(20),
                r = v(1),
                c = v([]),
                p = k => {
                    l.push({
                        name: k
                    })
                },
                d = () => {
                    r.value--, b()
                },
                _ = () => {
                    r.value++, b()
                },
                b = async (k = !1) => {
                    if (o.typeid == null) return;
                    k && (r.value = 1);
                    const [T, C] = await te(o.ApiFun({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    C && (c.value = (C == null ? void 0 : C.list) || [], g.value = (C == null ? void 0 : C.totalPage) || 0)
                };
            return i({
                getData: b
            }), he(() => {
                b()
            }), (k, T) => {
                const C = H("svg-icon"),
                    h = H("van-icon");
                return n(), a("div", G5, [k.hasHead ? (n(), a("div", A5, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: T[0] || (T[0] = y => p(k.goPathName))
                }, [E(e(k.$t("more")) + " ", 1), N(C, {
                    name: "rightCircle"
                })])])) : w("v-if", !0), t("div", M5, [c.value.length ? (n(), tt($n, {
                    key: 0,
                    mayrecord: c.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", P5, [N(re)]))]), c.value.length ? (n(), a("div", D5, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: d
                }, [N(h, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", O5, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: _
                }, [N(h, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const Cn = U(E5, [
        ["__scopeId", "data-v-4b21e13b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/MyGameRecord.vue"]
    ]),
    q5 = {
        class: "MyGameRecord__C"
    },
    j5 = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    H5 = {
        class: "MyGameRecord__C-body"
    },
    W5 = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    F5 = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    V5 = {
        class: "MyGameRecord__C-foot-page"
    },
    U5 = V({
        __name: "MyGameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            goPathName: {
                type: String,
                required: !0
            },
            hasHead: {
                type: Boolean,
                required: !0,
                default: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = rt(),
                g = v(4),
                m = v(20),
                r = v(1),
                c = v([]),
                p = T => {
                    l.push({
                        name: T
                    })
                },
                d = () => {
                    r.value--, b()
                },
                _ = () => {
                    r.value++, b()
                },
                b = async (T = !1) => {
                    if (o.typeid == null) return;
                    T && (r.value = 1);
                    const C = await at(fa({
                            pageSize: m.value,
                            pageNo: r.value,
                            typeId: o.typeid
                        })),
                        h = (C == null ? void 0 : C.data.list) || [];
                    for (let y = 0; h.length > y; y++) {
                        let z = h[y].gameType.split(","),
                            f = h[y].selectType.split(",");
                        for (let $ = 0; z.length > $; $++)
                            if (z[$] == "1" || z[$] == "2" || z[$] == "3") h[y].gameType = "1", h[y].oneList = f;
                            else if (z[$] == "5" || z[$] == "6") {
                            let L = [],
                                I = [],
                                B = [];
                            for (let x = 0; f.length > x; x++) {
                                if (f[x] == "|11|" || f[x] == "|22|" || f[x] == "|33|" || f[x] == "|44|" || f[x] == "|55|" || f[x] == "|66|") {
                                    let G = f[x].split("|");
                                    G.pop(), G.shift(), L.push(G.join())
                                }
                                if (f[x] == ":11:" || f[x] == ":22:" || f[x] == ":33:" || f[x] == ":44:" || f[x] == ":55:" || f[x] == ":66:") {
                                    let G = f[x].split(":");
                                    G.pop(), G.shift(), I.push(G.join())
                                }
                                if (f[x] == ":1:" || f[x] == ":2:" || f[x] == ":3:" || f[x] == ":4:" || f[x] == ":5:" || f[x] == ":6:") {
                                    let G = f[x].split(":");
                                    G.pop(), G.shift(), B.push(G.join())
                                }
                            }
                            h[y].gameType = "2", h[y].oneList = L, h[y].towList = k(I, B)
                        } else if (z[$] == "7" || z[$] == "8") {
                            let L = [],
                                I = !1;
                            for (let B = 0; f.length > B; B++) {
                                if (f[B] == "|111|" || f[B] == "|222|" || f[B] == "|333|" || f[B] == "|444|" || f[B] == "|555|" || f[B] == "|666|") {
                                    let x = f[B].split("|");
                                    x.pop(), x.shift(), L.push(x.join())
                                }
                                f[B] == "|AAA|" && (I = !0), h[y].oneList = L, h[y].towList = I, h[y].gameType = "3"
                            }
                        } else if (z[$] == "9" || z[$] == "10" || z[$] == "4") {
                            let L = [],
                                I = !1,
                                B = [];
                            for (let x = 0; f.length > x; x++) {
                                if (f[x] == "|1|" || f[x] == "|2|" || f[x] == "|3|" || f[x] == "|4|" || f[x] == "|5|" || f[x] == "|6|") {
                                    let G = f[x].split("|");
                                    G.pop(), G.shift(), L.push(G.join())
                                }
                                if (f[x] == "|ABC|" && (I = !0), f[x] == ".1." || f[x] == ".2." || f[x] == ".3." || f[x] == ".4." || f[x] == ".5." || f[x] == ".6.") {
                                    let G = f[x].split(".");
                                    G.pop(), G.shift(), B.push(G.join())
                                }
                            }
                            h[y].oneList = L, h[y].towList = I, h[y].threeList = B, h[y].gameType = "4"
                        }
                    }
                    c.value = h || [], g.value = (C == null ? void 0 : C.data.totalPage) || 0
                },
                k = (T, C) => {
                    let h = [];
                    for (var y = 0; T.length > y; y++) {
                        let f = T[y],
                            $ = [];
                        for (var z = 0; C.length > z; z++) $.push(C[z]);
                        if ($.length > 0) {
                            let L = $.sort().join(",");
                            h.push(f + "|" + L)
                        }
                    }
                    return h.sort()
                };
            return i({
                getData: b
            }), he(() => {
                b()
            }), (T, C) => {
                const h = H("svg-icon"),
                    y = H("van-icon");
                return n(), a("div", q5, [T.hasHead ? (n(), a("div", j5, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: C[0] || (C[0] = z => p(T.goPathName))
                }, [E(e(T.$t("more")) + " ", 1), N(h, {
                    name: "rightCircle"
                })])])) : w("v-if", !0), t("div", H5, [c.value.length ? (n(), tt(ja, {
                    key: 0,
                    mayrecord: c.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", W5, [N(re)]))]), c.value.length ? (n(), a("div", F5, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: d
                }, [N(y, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", V5, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: _
                }, [N(y, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const Wa = U(U5, [
        ["__scopeId", "data-v-cffd8c9f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/MyGameRecord.vue"]
    ]),
    K5 = {
        class: "BetRecord__C"
    },
    X5 = V({
        __name: "BetRecord",
        setup(s) {
            const i = {
                    Win: Cn,
                    FD: qa,
                    K3: Wa
                },
                o = Pe();
            o.getWinGoData();
            const l = v(),
                g = v(0),
                m = v(0),
                r = o.getWingo,
                c = v([{
                    name: "WinGo",
                    com: "Win"
                }, {
                    name: "5D Lotre",
                    com: "FD"
                }, {
                    name: "K3Lotre",
                    com: "K3"
                }]),
                p = v(["1min", "3min", "5min", "10min"]),
                d = v(1),
                _ = () => {
                    g.value === 0 ? d.value = r[m.value].typeID : d.value = g.value * 4 + m.value + 1, Jt(() => {
                        l.value && l.value.getData()
                    })
                };
            return Tt(() => {
                _()
            }), (b, k) => {
                const T = H("van-tab"),
                    C = H("van-tabs");
                return n(), a("div", K5, [N(C, {
                    class: "BetRecord__C-gameTab",
                    active: g.value,
                    "onUpdate:active": k[1] || (k[1] = h => g.value = h),
                    onClick: _
                }, {
                    default: D(() => [(n(!0), a(S, null, A(c.value, (h, y) => (n(), tt(T, {
                        key: y,
                        title: h.name
                    }, {
                        default: D(() => [N(C, {
                            class: "BetRecord__C-timeTab",
                            active: m.value,
                            "onUpdate:active": k[0] || (k[0] = z => m.value = z)
                        }, {
                            default: D(() => [h.com == "Win" ? (n(!0), a(S, {
                                key: 0
                            }, A(u(r), (z, f) => (n(), tt(T, {
                                key: f,
                                title: z.intervalM >= 1 ? z.intervalM + "min" : z.intervalM * 60 + "sencond"
                            }, null, 8, ["title"]))), 128)) : (n(!0), a(S, {
                                key: 1
                            }, A(p.value, (z, f) => (n(), tt(T, {
                                key: f,
                                title: z
                            }, null, 8, ["title"]))), 128))]),
                            _: 2
                        }, 1032, ["active"])]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"]), (n(), tt(je(i[c.value[g.value].com]), {
                    ref_key: "RecRef",
                    ref: l,
                    typeid: d.value,
                    "has-head": !1,
                    ApiFun: u(_n),
                    "go-path-name": "0"
                }, null, 8, ["typeid", "ApiFun"]))])
            }
        }
    });
const Q5 = U(X5, [
        ["__scopeId", "data-v-7c263a55"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/ChangLong/BetRecord.vue"]
    ]),
    Y5 = {
        class: "changLong__C"
    },
    Z5 = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = v(0);

            function l() {
                i.go(-1)
            }
            return Tt(() => {}), (g, m) => {
                const r = H("NavBar"),
                    c = H("van-tab"),
                    p = H("van-tabs");
                return n(), a("div", Y5, [N(r, {
                    "left-arrow": "",
                    title: g.$t("loongAssistant"),
                    class: "main",
                    onClickLeft: l
                }, null, 8, ["title"]), N(p, {
                    class: "changLong__C-tab",
                    active: o.value,
                    "onUpdate:active": m[0] || (m[0] = d => o.value = d)
                }, {
                    default: D(() => [N(c, {
                        title: g.$t("latestLoong")
                    }, null, 8, ["title"]), N(c, {
                        title: g.$t("myBet")
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["active"]), o.value == 0 ? (n(), tt(R5, {
                    key: 0
                })) : (n(), tt(Q5, {
                    key: 1
                }))])
            }
        }
    });
const J5 = U(Z5, [
        ["__scopeId", "data-v-6aad721b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/ChangLong/index.vue"]
    ]),
    qA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: J5
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Fa = s => (Ct("data-v-75b35bf5"), s = s(), Nt(), s),
    tw = {
        class: "K3TL__C"
    },
    ew = {
        class: "K3TL__C-l1"
    },
    iw = {
        class: "left"
    },
    nw = Fa(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none"
    }, [t("path", {
        d: "M9.0484 25.8284L9.04089 25.8359L9.03366 25.8437C8.47797 26.4402 7.97942 26.8014 7.56631 26.9797C7.15908 27.1556 6.87147 27.141 6.67169 27.055C6.46753 26.967 6.24252 26.7559 6.06263 26.3149C5.88195 25.8718 5.76602 25.2377 5.76602 24.3993V9.38602C5.76602 6.69019 6.09509 5.23943 6.86083 4.42092C7.61326 3.61665 8.94055 3.26602 11.4593 3.26602H21.5393C24.0584 3.26602 25.3852 3.61676 26.1358 4.42054C26.8997 5.23844 27.226 6.68864 27.2193 9.38453V9.38602V24.386C27.2193 25.2248 27.1041 25.8592 26.9242 26.3024C26.7451 26.7438 26.5211 26.9543 26.3182 27.0418C26.1198 27.1275 25.8328 27.1424 25.4244 26.9663C25.0105 26.7878 24.5102 26.4264 23.9512 25.8299C23.2918 25.1224 22.4328 24.7733 21.5701 24.8202C20.7074 24.8672 19.8916 25.3075 19.3127 26.0793L19.3123 26.0799L17.9676 27.8772C17.9673 27.8776 17.967 27.878 17.9667 27.8785C17.5231 28.4638 16.9844 28.7094 16.4927 28.7094C16.001 28.7094 15.4623 28.4638 15.0187 27.8785C15.0184 27.878 15.0181 27.8776 15.0177 27.8772L13.6733 26.0802C13.6732 26.0801 13.6732 26.08 13.6731 26.0799C12.5033 24.515 10.4028 24.3993 9.05577 25.8211L9.0484 25.8284ZM8.93935 14.666C8.93935 15.7307 9.80798 16.5993 10.8727 16.5993C11.9374 16.5993 12.806 15.7307 12.806 14.666C12.806 13.6013 11.9374 12.7327 10.8727 12.7327C9.80798 12.7327 8.93935 13.6013 8.93935 14.666ZM8.93935 9.33268C8.93935 10.3974 9.80798 11.266 10.8727 11.266C11.9374 11.266 12.806 10.3974 12.806 9.33268C12.806 8.26798 11.9374 7.39935 10.8727 7.39935C9.80798 7.39935 8.93935 8.26798 8.93935 9.33268ZM14.806 16.266H22.1393C23.0174 16.266 23.7393 15.5441 23.7393 14.666C23.7393 13.788 23.0174 13.066 22.1393 13.066H14.806C13.928 13.066 13.206 13.788 13.206 14.666C13.206 15.5441 13.928 16.266 14.806 16.266ZM14.806 10.9327H22.1393C23.0174 10.9327 23.7393 10.2107 23.7393 9.33268C23.7393 8.45465 23.0174 7.73268 22.1393 7.73268H14.806C13.928 7.73268 13.206 8.45465 13.206 9.33268C13.206 10.2107 13.928 10.9327 14.806 10.9327Z",
        stroke: "currentColor",
        "stroke-width": "1.2"
    })], -1)),
    aw = {
        class: "K3TL__C-l2"
    },
    ow = {
        class: "K3TL__C-time"
    },
    sw = Fa(() => t("div", {
        notime: ""
    }, ":", -1)),
    lw = {
        class: "K3TL__C-l3"
    },
    cw = {
        class: "box"
    },
    rw = V({
        __name: "TimeLeft",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                })
            },
            premium: {
                type: String,
                default: "666"
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        setup(s) {
            const i = s,
                o = Q(() => [...i.premium]),
                l = v(!1),
                g = Pe(),
                m = () => {
                    l.value = !0, g.getK3Rule(i.currentGame.typeID)
                };
            return (r, c) => (n(), a(S, null, [t("div", tw, [t("div", ew, [t("div", iw, [t("div", null, e(r.$t("k3Number")), 1), t("div", {
                class: "K3TL__C-rule",
                onClick: m
            }, [nw, E(" " + e(r.$t("winTrxIndicate")), 1)])]), t("div", null, e(r.$t("k3TimeLeftToBuy")), 1)]), t("div", aw, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", ow, [t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), sw, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), t("div", lw, [t("div", cw, [(n(!0), a(S, null, A(o.value, (p, d) => (n(), a("div", {
                key: d,
                class: M(["num" + p])
            }, null, 2))), 128))])])]), w(" 规则弹层 begin"), N(Di, {
                howPlayShow: l.value,
                gamePresentation: s.currentGame.gamePresentation,
                onClose: c[0] || (c[0] = p => l.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const uw = U(rw, [
        ["__scopeId", "data-v-75b35bf5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/TimeLeft.vue"]
    ]),
    dw = {
        class: "K3B__C-bettingList"
    },
    pw = ["onClick"],
    gw = {
        key: 1,
        class: ""
    },
    bw = {
        key: 2,
        class: "K3B__C-odds-rate"
    },
    mw = {
        key: 3,
        class: "K3B__C-odds-rate"
    },
    _w = {
        key: 4,
        class: "K3B__C-odds-rate"
    },
    vw = V({
        __name: "Betting1",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            betnumList: {
                type: Array,
                required: !0
            }
        },
        emits: ["showP", "upAll"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = mt(),
                m = v([{
                    num: 3,
                    odds: 191.16,
                    chack: !1
                }, {
                    num: 4,
                    odds: 63.72,
                    chack: !1
                }, {
                    num: 5,
                    odds: 31.86,
                    chack: !1
                }, {
                    num: 6,
                    odds: 19.11,
                    chack: !1
                }, {
                    num: 7,
                    odds: 12.74,
                    chack: !1
                }, {
                    num: 8,
                    odds: 9.1,
                    chack: !1
                }, {
                    num: 9,
                    odds: 7.64,
                    chack: !1
                }, {
                    num: 10,
                    odds: 7.08,
                    chack: !1
                }, {
                    num: 11,
                    odds: 7.08,
                    chack: !1
                }, {
                    num: 12,
                    odds: 7.64,
                    chack: !1
                }, {
                    num: 13,
                    odds: 9.1,
                    chack: !1
                }, {
                    num: 14,
                    odds: 12.74,
                    chack: !1
                }, {
                    num: 15,
                    odds: 19.11,
                    chack: !1
                }, {
                    num: 16,
                    odds: 31.86,
                    chack: !1
                }, {
                    num: 17,
                    odds: 63.72,
                    chack: !1
                }, {
                    num: 18,
                    odds: 191.16,
                    chack: !1
                }, {
                    num: "A",
                    odds: 2,
                    chack: !1
                }, {
                    num: "B",
                    odds: 2,
                    chack: !1
                }, {
                    num: "C",
                    odds: 2,
                    chack: !1
                }, {
                    num: "D",
                    odds: 2,
                    chack: !1
                }]),
                r = k => {
                    switch (k) {
                        case "A":
                            return g("k3Big");
                        case "B":
                            return g("k3Small");
                        case "C":
                            return g("k3Odd");
                        case "D":
                            return g("k3Even");
                        default:
                            return k
                    }
                },
                c = (k, T) => {
                    T < 16 ? m.value[T].chack ? _(k, T) : (l.betnumList.push(k.num), m.value[T].chack = !0) : p(k, T), l.betnumList.length > 0 ? o("showP", !0) : o("showP", !1), o("upAll")
                },
                p = (k, T) => {
                    switch (T) {
                        case 16:
                            d(k, T, 17);
                            break;
                        case 17:
                            d(k, T, 16);
                            break;
                        case 18:
                            d(k, T, 19);
                            break;
                        case 19:
                            d(k, T, 18);
                            break
                    }
                },
                d = (k, T, C) => {
                    m.value[C].chack && _(m.value[C], C), m.value[T].chack ? _(k, T) : (l.betnumList.push(k.num), m.value[T].chack = !0)
                },
                _ = (k, T) => {
                    m.value[T].chack = !1;
                    let C = l.betnumList.indexOf(k.num);
                    C > -1 && l.betnumList.splice(C, 1)
                };
            return i({
                clearList: () => {
                    m.value = m.value.map(k => (k.chack = !1, k))
                }
            }), (k, T) => (n(), a("div", dw, [(n(!0), a(S, null, A(m.value, (C, h) => (n(), a("div", {
                class: M("num num" + C.num),
                key: h,
                onClick: y => c(C, h)
            }, [h < 16 ? (n(), a("div", {
                key: 0,
                class: M(h % 2 == 0 ? "ball rball" : "ball gball")
            }, [t("div", {
                class: M("K3B__C-odds-bet num" + C.num)
            }, e(r(C.num)), 3)], 2)) : (n(), a("div", gw, e(r(C.num)), 1)), h < 16 ? (n(), a("div", bw, e(l.OddsList[h] && (l.OddsList[h].playRate || l.OddsList[h].playRate_Original)) + "X ", 1)) : h < 18 ? (n(), a("div", mw, e(l.OddsList[16] && (l.OddsList[16].playRate || l.OddsList[16].playRate_Original)) + "X ", 1)) : (n(), a("div", _w, e(l.OddsList[17] && (l.OddsList[17].playRate || l.OddsList[17].playRate_Original)) + "X ", 1))], 10, pw))), 128))]))
        }
    });
const hw = U(vw, [
        ["__scopeId", "data-v-ed0c8e79"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/Betting1.vue"]
    ]),
    kw = {
        class: "K3B__C-betting2"
    },
    fw = {
        class: "K3B__C-betting2-tip1"
    },
    yw = {
        key: 0
    },
    $w = {
        class: "K3B__C-betting2-line1 mb30"
    },
    ww = ["onClick"],
    Tw = {
        class: "K3B__C-betting2-tip1"
    },
    Cw = {
        key: 0
    },
    Nw = {
        class: "K3B__C-betting2-line2"
    },
    Lw = ["onClick"],
    zw = {
        class: ""
    },
    Bw = {
        class: "K3B__C-betting2-line3"
    },
    Iw = ["onClick"],
    Sw = {
        class: ""
    },
    xw = V({
        __name: "Betting2",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            numList: {
                type: null,
                required: !0
            },
            betnumList: {
                type: Array,
                required: !0
            },
            numTow: {
                type: Array,
                required: !0
            },
            numOne: {
                type: Array,
                required: !0
            },
            numChack: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["showP", "upAll", "selectNum", "onQuestion"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = (r, c, p) => {
                    let d = r.num,
                        _ = r.num + "" + r.num;
                    if (p == 1)
                        if (o.numList[c].chackOne) {
                            o.numList[c].chackOne = !1;
                            let b = o.numTow.indexOf(_);
                            b > -1 && o.numTow.splice(b, 1)
                        } else {
                            o.numList[c].chackOne = !0, o.numList[c].chackTow = !1;
                            let b = o.numOne.indexOf(d);
                            b > -1 && o.numOne.splice(b, 1), o.numTow.push(_)
                        }
                    else if (o.numList[c].chackTow) {
                        o.numList[c].chackTow = !1;
                        let b = o.numOne.indexOf(d);
                        b > -1 && o.numOne.splice(b, 1)
                    } else {
                        o.numList[c].chackTow = !0, o.numList[c].chackOne = !1;
                        let b = o.numTow.indexOf(_);
                        b > -1 && o.numTow.splice(b, 1), o.numOne.push(d)
                    }
                    i("selectNum"), o.numTow.length > 0 && o.numOne.length > 0 || o.betnumList.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                g = (r, c) => {
                    let p = r.num + "" + r.num;
                    if (o.numList[c].chack) {
                        o.numList[c].chack = !1;
                        let d = o.betnumList.indexOf(p);
                        d > -1 && o.betnumList.splice(d, 1)
                    } else o.betnumList.push(p), o.betnumList.sort(), o.numList[c].chack = !0;
                    o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                m = (r, c) => {
                    i("onQuestion", r, c)
                };
            return Tt(() => {}), (r, c) => {
                const p = H("van-icon");
                return n(), a("div", kw, [t("div", fw, [E(e(r.$t("k3bet2Desc1")), 1), r.OddsList[20] ? (n(), a("span", yw, "(" + e(r.OddsList[20].playRate ? r.OddsList[20].playRate : r.OddsList[20].playRate_Original) + ")", 1)) : w("v-if", !0), N(p, {
                    onClick: c[0] || (c[0] = d => m(r.$t("k3bet2Desc2"), [5, 5])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", $w, [(n(!0), a(S, null, A(r.numList, (d, _) => (n(), a("div", {
                    class: M({
                        active: d.chack
                    }),
                    key: _,
                    onClick: b => g(d, _)
                }, [t("div", null, e(d.num) + e(d.num), 1)], 10, ww))), 128))]), t("div", Tw, [E(e(r.$t("k3bet2Desc3")), 1), r.OddsList[19] ? (n(), a("span", Cw, "(" + e(r.OddsList[19].playRate ? r.OddsList[19].playRate : r.OddsList[19].playRate_Original) + ")", 1)) : w("v-if", !0), N(p, {
                    onClick: c[1] || (c[1] = d => m(r.$t("k3bet2Desc4"), [6, 1, 6])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", Nw, [(n(!0), a(S, null, A(r.numList, (d, _) => (n(), a("div", {
                    class: M({
                        active: d.chackOne
                    }),
                    key: _,
                    onClick: b => l(d, _, 1)
                }, [t("div", zw, e(d.num) + e(d.num), 1)], 10, Lw))), 128))]), t("div", Bw, [(n(!0), a(S, null, A(r.numList, (d, _) => (n(), a("div", {
                    class: M({
                        active: d.chackTow
                    }),
                    key: _,
                    onClick: b => l(d, _, 2)
                }, [t("div", Sw, e(d.num), 1)], 10, Iw))), 128))])])
            }
        }
    });
const Rw = U(xw, [
        ["__scopeId", "data-v-5c28a69e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/Betting2.vue"]
    ]),
    Gw = {
        class: "K3B__C-betting3"
    },
    Aw = {
        class: "K3B__C-betting3-tip1"
    },
    Mw = {
        key: 0
    },
    Pw = {
        class: "K3B__C-betting3-line1 mb30"
    },
    Dw = ["onClick"],
    Ow = {
        class: "K3B__C-betting3-tip1"
    },
    Ew = {
        key: 0
    },
    qw = V({
        __name: "Betting3",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            numList: {
                type: null,
                required: !0
            },
            betnumList: {
                type: null,
                required: !0
            },
            numChack: {
                type: null,
                required: !0
            },
            numTow: {
                type: null,
                required: !0
            },
            numOne: {
                type: null,
                required: !0
            }
        },
        emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = (r, c) => {
                    let p = r.num + "" + r.num + r.num;
                    if (o.numList[c].chack) {
                        o.numList[c].chack = !1;
                        let d = o.betnumList.indexOf(p);
                        d > -1 && o.betnumList.splice(d, 1)
                    } else o.betnumList.push(p), o.betnumList.sort(), o.numList[c].chack = !0;
                    o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                g = () => {
                    i("cNumChack"), Jt(() => {
                        o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                    })
                },
                m = (r, c) => {
                    i("onQuestion", r, c)
                };
            return Tt(() => {}), (r, c) => {
                const p = H("van-icon");
                return n(), a("div", Gw, [t("div", Aw, [E(e(r.$t("k3bet3Desc1")) + " ", 1), r.OddsList[21] ? (n(), a("span", Mw, "(" + e(r.OddsList[21].playRate ? r.OddsList[21].playRate : r.OddsList[21].playRate_Original) + ")", 1)) : w("v-if", !0), N(p, {
                    onClick: c[0] || (c[0] = d => m(r.$t("k3bet3Desc2"), [6, 6, 6])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", Pw, [(n(!0), a(S, null, A(r.numList, (d, _) => (n(), a("div", {
                    class: M({
                        active: d.chack
                    }),
                    key: _,
                    onClick: b => l(d, _)
                }, [t("div", null, e(d.num) + e(d.num) + e(d.num), 1)], 10, Dw))), 128))]), t("div", Ow, [E(e(r.$t("k3bet3Desc3")) + " ", 1), r.OddsList[22] ? (n(), a("span", Ew, "(" + e(r.OddsList[22].playRate ? r.OddsList[22].playRate : r.OddsList[22].playRate_Original) + ")", 1)) : w("v-if", !0), N(p, {
                    onClick: c[1] || (c[1] = d => m(r.$t("k3bet3Desc5"), [7, 7, 7])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", {
                    class: M(["K3B__C-betting3-btn", {
                        active: o.numChack
                    }]),
                    onClick: g
                }, e(r.$t("k3bet3Desc4")), 3)])
            }
        }
    });
const jw = U(qw, [
        ["__scopeId", "data-v-3deb049d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/Betting3.vue"]
    ]),
    Hw = {
        class: "K3B__C-betting4"
    },
    Ww = {
        class: "K3B__C-betting4-tip1"
    },
    Fw = {
        key: 0
    },
    Vw = {
        class: "K3B__C-betting4-line1 mb30"
    },
    Uw = ["onClick"],
    Kw = {
        class: "K3B__C-betting4-tip1"
    },
    Xw = {
        key: 0
    },
    Qw = {
        class: "K3B__C-betting4-tip1"
    },
    Yw = {
        key: 0
    },
    Zw = {
        class: "K3B__C-betting4-line1"
    },
    Jw = ["onClick"],
    tT = V({
        __name: "Betting4",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            numList: {
                type: null,
                required: !0
            },
            numTow: {
                type: Array,
                required: !0
            },
            numOne: {
                type: Array,
                required: !0
            },
            numChack: {
                type: null,
                required: !0
            },
            betnumList: {
                type: null,
                required: !0
            }
        },
        emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = (r, c, p) => {
                    if (p == 1)
                        if (o.numList[c].chackOne) {
                            o.numList[c].chackOne = !1;
                            var d = o.numOne.indexOf(r.num);
                            d > -1 && o.numOne.splice(d, 1)
                        } else o.numList[c].chackOne = !0, o.numOne.push(r.num), o.numOne.sort();
                    else if (o.numList[c].chackTow) {
                        o.numList[c].chackTow = !1;
                        var c = o.numTow.indexOf(r.num);
                        c > -1 && o.numTow.splice(c, 1)
                    } else o.numList[c].chackTow = !0, o.numTow.push(r.num), o.numTow.sort();
                    o.numChack || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                },
                g = (r, c) => {
                    i("onQuestion", r, c)
                },
                m = () => {
                    i("cNumChack"), Jt(() => {
                        o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                    })
                };
            return Tt(() => {}), (r, c) => {
                const p = H("van-icon");
                return n(), a("div", Hw, [t("div", Ww, [E(e(r.$t("k3bet4Desc1")) + " ", 1), r.OddsList[23] ? (n(), a("span", Fw, "(" + e(r.OddsList[23].playRate ? r.OddsList[23].playRate : r.OddsList[23].playRate_Original) + ")", 1)) : w("v-if", !0), N(p, {
                    onClick: c[0] || (c[0] = d => g(r.$t("k3bet4Desc2"), [1, 2, 4])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", Vw, [(n(!0), a(S, null, A(r.numList, (d, _) => (n(), a("div", {
                    class: M({
                        active: d.chackOne
                    }),
                    key: _,
                    onClick: b => l(d, _, 1)
                }, [t("div", null, e(d.num), 1)], 10, Uw))), 128))]), t("div", Kw, [E(e(r.$t("k3bet4Desc3")) + " ", 1), r.OddsList[24] ? (n(), a("span", Xw, "(" + e(r.OddsList[24].playRate ? r.OddsList[24].playRate : r.OddsList[24].playRate_Original) + ")", 1)) : w("v-if", !0), N(p, {
                    onClick: c[1] || (c[1] = d => g(r.$t("k3bet4Desc4"), [1, 2, 3])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", {
                    class: M(["K3B__C-betting4-btn", {
                        active: r.numChack
                    }]),
                    onClick: m
                }, e(r.$t("betPopDesc7")), 3), t("div", Qw, [E(e(r.$t("k3bet4Desc5")) + " ", 1), r.OddsList[18] ? (n(), a("span", Yw, "(" + e(r.OddsList[18].playRate ? r.OddsList[18].playRate : r.OddsList[18].playRate_Original) + ")", 1)) : w("v-if", !0), N(p, {
                    onClick: c[2] || (c[2] = d => g(r.$t("k3bet4Desc6"), [1, 2])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", Zw, [(n(!0), a(S, null, A(r.numList, (d, _) => (n(), a("div", {
                    class: M({
                        active: d.chackTow
                    }),
                    key: _,
                    onClick: b => l(d, _, 2)
                }, [t("div", null, e(d.num), 1)], 10, Jw))), 128))])])
            }
        }
    });
const eT = U(tT, [
        ["__scopeId", "data-v-bcf2c3f9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/Betting4.vue"]
    ]),
    iT = s => (Ct("data-v-5f002ad4"), s = s(), Nt(), s),
    nT = {
        class: "Betting__Popup-body"
    },
    aT = {
        key: 0,
        class: "Betting__Popup-type1"
    },
    oT = {
        class: "title"
    },
    sT = {
        class: "list"
    },
    lT = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    cT = {
        class: "title"
    },
    rT = {
        class: "list"
    },
    uT = {
        key: 1,
        class: "Betting__Popup-type2"
    },
    dT = {
        class: "title"
    },
    pT = {
        class: "list"
    },
    gT = ["innerHTML"],
    bT = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    mT = {
        class: "title"
    },
    _T = {
        class: "list"
    },
    vT = {
        key: 1,
        class: "title"
    },
    hT = {
        key: 2,
        class: "Betting__Popup-type2-r"
    },
    kT = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    fT = {
        class: "title"
    },
    yT = {
        class: "list"
    },
    $T = {
        key: 1,
        class: "title"
    },
    wT = {
        key: 2,
        class: "Betting__Popup-type2-r"
    },
    TT = {
        key: 3,
        class: "Betting__Popup-type2"
    },
    CT = {
        class: "title"
    },
    NT = {
        class: "list"
    },
    LT = {
        class: "Betting__Popup-body-line"
    },
    zT = {
        class: "Betting__Popup-body-line-list"
    },
    BT = ["onClick"],
    IT = {
        class: "Betting__Popup-body-line"
    },
    ST = {
        class: "Betting__Popup-body-line-btnL"
    },
    xT = {
        class: "Betting__Popup-body-line"
    },
    RT = iT(() => t("div", null, null, -1)),
    GT = {
        class: "Betting__Popup-body-line-list"
    },
    AT = ["onClick"],
    MT = {
        class: "Betting__Popup-body-line"
    },
    PT = {
        class: "Betting__Popup-foot"
    },
    DT = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    OT = {
        class: "Betting__Popup-PreSale"
    },
    ET = {
        class: "Betting__Popup-PreSale-head"
    },
    qT = {
        class: "Betting__Popup-PreSale-body"
    },
    jT = {
        class: "Betting__Popup-PreSale-foot"
    },
    HT = V({
        __name: "BettingPopup",
        props: {
            currentInfo: {
                type: null,
                required: !0
            },
            currentGame: {
                type: null,
                required: !0
            },
            bettingPopupShow: {
                type: null,
                required: !0
            },
            betTypeList: {
                type: null,
                required: !0
            },
            betnumList: {
                type: Array,
                required: !0
            },
            numTow: {
                type: Array,
                required: !0
            },
            numOne: {
                type: Array,
                required: !0
            },
            actNav: {
                type: Number,
                required: !0
            },
            numTowList: {
                type: Array,
                required: !0
            },
            numChack: {
                type: null,
                required: !0
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = mt(),
                m = v(!1),
                r = v(!0),
                c = Q(() => l.currentGame.betMultiple.split("|"));
            Pt(() => l.bettingPopupShow, () => {
                p.value.coin = Number(l.betTypeList[0]), p.value.count = c.value[0]
            });
            const p = v({
                coin: 0,
                count: c.value[0],
                allCoin: 0,
                gametype: 0,
                typeid: 1,
                issuenumber: "",
                selecttype: "1"
            });
            Pt(() => c, () => {
                p.value.count = c.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            let d = Q({
                get() {
                    return z(), l.bettingPopupShow || !1
                },
                set(B) {
                    o("update:bettingPopupShow", B)
                }
            });
            const _ = B => {
                    switch (B) {
                        case 1:
                            p.value.count > 1 && (p.value.count--, z());
                            break;
                        case 2:
                            p.value.count++, z();
                            break
                    }
                },
                b = B => {
                    B > 0 && (p.value.count = parseInt(B), z())
                },
                k = B => {
                    p.value.count = B, z()
                },
                T = B => {
                    p.value.coin = B, z()
                },
                C = () => {
                    m.value = !1, r.value = !0
                },
                h = async () => {
                    if (!r.value) {
                        _e(g("agreePresaleRules"));
                        return
                    }
                    let {
                        coin: B,
                        count: x,
                        selecttype: G
                    } = p.value;
                    if (x == 0) return Dt(g("bteNoCount"));
                    let P = null,
                        R = l.betnumList;
                    if (l.actNav === 0 && l.betnumList.length) {
                        P = y(l.betnumList), R.sort();
                        for (let K = 0; R.length > K; K++) R[K] == "A" && (R[K] = "H"), R[K] == "B" && (R[K] = "L"), R[K] == "C" && (R[K] = "O"), R[K] == "D" && (R[K] = "E");
                        G = R.join(",")
                    } else if (l.actNav == 1) {
                        let K = [],
                            nt = "",
                            ct = "";
                        if (R.length > 0) {
                            let ot = [];
                            for (let lt = 0; R.length > lt; lt++) {
                                let J = "|" + R[lt] + "|";
                                ot.push(J)
                            }
                            ct = ot.join(","), K.push(6)
                        }
                        if (l.numTowList.length > 0) {
                            let ot = [],
                                lt = [];
                            for (let J = 0; l.numOne.length > J; J++) {
                                let kt = ":" + l.numOne[J] + ":";
                                ot.push(kt), ot = ot.sort()
                            }
                            for (let J = 0; l.numTow.length > J; J++) {
                                let kt = ":" + l.numTow[J] + ":";
                                lt.push(kt), lt = lt.sort()
                            }
                            nt = lt.join(",") + "," + ot.join(","), K.push(5)
                        }
                        K = K.sort((ot, lt) => ot - lt), P = K.join(","), nt && (G = nt), ct && (G = ct), nt && ct && (G = nt + "," + ct)
                    } else if (l.actNav == 2) {
                        let K = [],
                            nt = "",
                            ct = "";
                        if (R.length > 0) {
                            let ot = [];
                            for (let lt = 0; R.length > lt; lt++) {
                                let J = "|" + R[lt] + "|";
                                ot.push(J), ot = ot.sort()
                            }
                            nt = ot.join(","), K.push(7)
                        }
                        l.numChack && (ct = "|AAA|", K.push(8)), K = K.sort((ot, lt) => ot - lt), P = K.join(","), nt && (G = nt), ct && (G = ct), nt && ct && (G = nt + "," + ct)
                    } else if (l.actNav == 3) {
                        let K = [],
                            nt = "",
                            ct = "",
                            ot = "";
                        if (l.numOne.length > 2) {
                            let lt = [];
                            for (let J = 0; l.numOne.length > J; J++) {
                                let kt = "|" + l.numOne[J] + "|";
                                lt.push(kt), lt = lt.sort()
                            }
                            nt = lt.join(","), K.push(9)
                        }
                        if (l.numChack && (ct = "|ABC|", K.push(10)), l.numTow.length > 1) {
                            let lt = [];
                            for (let J = 0; l.numTow.length > J; J++) {
                                let kt = "." + l.numTow[J] + ".";
                                lt.push(kt), lt = lt.sort()
                            }
                            ot = lt.join(","), K.push(4)
                        }
                        K = K.sort((lt, J) => lt - J), P = K.join(","), ot && (G = ot), nt && (G = nt), ct && (G = ct), nt && ct && (G = nt + "," + ct), ot && nt && (G = ot + "," + nt), ot && ct && (G = ot + "," + ct), ot && nt && ct && (G = ot + "," + nt + "," + ct)
                    }
                    const O = await at($a({
                        amount: B,
                        betCount: Number(x),
                        gameType: P,
                        selectType: G,
                        typeId: l.currentGame.typeID,
                        issuenumber: l.currentInfo.gameNo
                    }));
                    (O == null ? void 0 : O.code) === 0 ? (_e(g("code" + (O == null ? void 0 : O.msgCode))), o("submitBetting", l.currentInfo.gameNo)) : o("clearBetting")
                },
                y = B => {
                    let x = [];
                    for (let G = 0; B.length > G; G++) {
                        if (B[G] == "3" || B[G] == "4" || B[G] == "5" || B[G] == "6" || B[G] == "7" || B[G] == "8" || B[G] == "9" || B[G] == "10" || B[G] == "11" || B[G] == "12" || B[G] == "13" || B[G] == "14" || B[G] == "15" || B[G] == "16" || B[G] == "17" || B[G] == "18") {
                            x.push(1);
                            continue
                        }
                        if (B[G] == "A" || B[G] == "B") {
                            x.push(2);
                            continue
                        }
                        if (B[G] == "C" || B[G] == "D") {
                            x.push(3);
                            continue
                        }
                    }
                    return x = x.sort(function(G, P) {
                        return G - P
                    }), [...new Set(x)].join(",")
                },
                z = () => {
                    const B = l.betnumList.length + f() + (l.numChack ? 1 : 0) + $(l.numOne, 3) + $(l.numTow);
                    p.value.allCoin = p.value.coin * p.value.count * B
                },
                f = () => {
                    const B = l.numTowList.length;
                    return B && l.numTowList[0].split("|")[1].split(",").length * B
                },
                $ = (B, x = 2) => {
                    if (l.actNav != 3) return 0;

                    function G(R) {
                        let O = 1;
                        for (let K = 2; K <= R; K++) O *= K;
                        return O
                    }
                    const P = B.length;
                    return P < x ? 0 : G(P) / (G(x) * G(P - x))
                },
                L = B => {
                    switch (B) {
                        case "A":
                            return g("betBig");
                        case "B":
                            return g("betSmall");
                        case "C":
                            return g("betOdd");
                        case "D":
                            return g("betEven");
                        default:
                            return B
                    }
                },
                I = B => {
                    let x = B.split("|"),
                        G = "";
                    return x.forEach(P => {
                        G += `<div>${P}</div>`
                    }), G
                };
            return i({
                setAllCoin: z
            }), (B, x) => {
                const G = H("van-field"),
                    P = H("van-popup"),
                    R = Ht("throttle-click");
                return n(), a(S, null, [w(" 投注内容 begin "), N(P, {
                    show: u(d),
                    "onUpdate:show": x[6] || (x[6] = O => se(d) ? d.value = O : d = O),
                    position: "bottom",
                    style: {
                        "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                    },
                    round: !0,
                    overlay: !1,
                    "close-on-click-overlay": !1,
                    "lock-scroll": !1
                }, {
                    default: D(() => [t("div", nT, [B.actNav === 0 && B.betnumList.length ? (n(), a("div", aT, [t("p", oT, e(B.$t("betPopDesc1")), 1), t("div", sT, [(n(!0), a(S, null, A(B.betnumList, (O, K) => (n(), a("div", {
                        class: M(O % 2 === 0 ? "green" : "red num" + O),
                        key: K
                    }, e(L(O)), 3))), 128))])])) : w("v-if", !0), B.actNav === 1 ? (n(), a(S, {
                        key: 1
                    }, [B.betnumList.length ? (n(), a("div", lT, [t("p", cT, e(B.$t("betPopDesc2")), 1), t("div", rT, [(n(!0), a(S, null, A(B.betnumList, (O, K) => (n(), a("div", {
                        key: K,
                        class: "Betting__Popup-type2-d"
                    }, e(L(O)), 1))), 128))])])) : w("v-if", !0), B.numTowList.length ? (n(), a("div", uT, [t("p", dT, e(B.$t("betPopDesc3")), 1), t("div", pT, [(n(!0), a(S, null, A(B.numTowList, (O, K) => (n(), a("div", {
                        key: K,
                        class: "Betting__Popup-type2-o",
                        innerHTML: I(O)
                    }, null, 8, gT))), 128))])])) : w("v-if", !0)], 64)) : w("v-if", !0), B.actNav === 2 ? (n(), a(S, {
                        key: 2
                    }, [B.betnumList.length ? (n(), a("div", bT, [t("p", mT, e(B.$t("betPopDesc4")), 1), t("div", _T, [(n(!0), a(S, null, A(B.betnumList, (O, K) => (n(), a("div", {
                        key: K,
                        class: "Betting__Popup-type2-d"
                    }, e(L(O)), 1))), 128))])])) : w("v-if", !0), B.numChack ? (n(), a("p", vT, e(B.$t("betPopDesc5")), 1)) : w("v-if", !0), B.numChack ? (n(), a("div", hT, e(B.$t("k3bet3Desc4")), 1)) : w("v-if", !0)], 64)) : w("v-if", !0), B.actNav === 3 ? (n(), a(S, {
                        key: 3
                    }, [B.numOne.length > 2 ? (n(), a("div", kT, [t("p", fT, e(B.$t("betPopDesc6")), 1), t("div", yT, [(n(!0), a(S, null, A(B.numOne, (O, K) => (n(), a("div", {
                        key: K,
                        class: "Betting__Popup-type2-d"
                    }, e(L(O)), 1))), 128))])])) : w("v-if", !0), B.numChack ? (n(), a("p", $T, e(B.$t("betPopDesc7")), 1)) : w("v-if", !0), B.numChack ? (n(), a("div", wT, e(B.$t("betPopDesc7")), 1)) : w("v-if", !0), B.numTow.length > 1 ? (n(), a("div", TT, [t("p", CT, e(B.$t("betPopDesc8")), 1), t("div", NT, [(n(!0), a(S, null, A(B.numTow, (O, K) => (n(), a("div", {
                        key: K,
                        class: "Betting__Popup-type2-d"
                    }, e(L(O)), 1))), 128))])])) : w("v-if", !0)], 64)) : w("v-if", !0), t("div", LT, [E(e(u(g)("amount")) + " ", 1), t("div", zT, [(n(!0), a(S, null, A(B.betTypeList, (O, K) => (n(), a("div", {
                        key: K,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: p.value.coin == O
                        }]),
                        onClick: nt => T(O)
                    }, e(O), 11, BT))), 128))])]), t("div", IT, [E(e(u(g)("numbers")) + " ", 1), t("div", ST, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: p.value.count > 0
                        }]),
                        onClick: x[0] || (x[0] = O => _(1))
                    }, "-", 2), N(G, {
                        class: "Betting__Popup-input",
                        modelValue: p.value.count,
                        "onUpdate:modelValue": x[1] || (x[1] = O => p.value.count = O),
                        type: "digit",
                        maxlength: 4,
                        onInput: b
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: x[2] || (x[2] = O => _(2))
                    }, "+")])]), t("div", xT, [RT, t("div", GT, [(n(!0), a(S, null, A(c.value, (O, K) => (n(), a("div", {
                        key: K,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: p.value.count == O
                        }]),
                        onClick: nt => k(O)
                    }, " X" + e(O), 11, AT))), 128))])]), t("div", MT, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: r.value
                        }]),
                        onClick: x[3] || (x[3] = O => r.value = !r.value)
                    }, e(u(g)("agree")), 3), t("span", {
                        onClick: x[4] || (x[4] = O => m.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(u(g)("presaleRules")), 1)])]), t("div", PT, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: x[5] || (x[5] = O => o("clearBetting"))
                    }, e(u(g)("cancel")), 1), yt((n(), a("div", DT, [E(e(u(g)("totalAmount")) + " " + e(u(Bt)(p.value.allCoin || 0)), 1)])), [
                        [R, {
                            handler: h,
                            wait: 2e3
                        }]
                    ])])]),
                    _: 1
                }, 8, ["show"]), w(" 规则弹层 begin"), N(P, {
                    show: m.value,
                    "onUpdate:show": x[7] || (x[7] = O => m.value = O),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: D(() => [t("div", OT, [t("div", ET, e(u(g)("presaleRules")), 1), t("div", qT, e(B.$t("betPopTXT")), 1), t("div", jT, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: C
                    }, e(u(g)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const WT = U(HT, [
        ["__scopeId", "data-v-5f002ad4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/BettingPopup.vue"]
    ]),
    FT = {
        class: "K3B__C"
    },
    VT = {
        class: "K3B__C-mark"
    },
    UT = {
        class: "K3B__C-nav"
    },
    KT = ["onClick"],
    XT = {
        class: "qpopup-box"
    },
    QT = {
        class: "qpopup-box-list"
    },
    YT = {
        class: "qpopup-box-txt"
    },
    ZT = V({
        __name: "Betting",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({})
            },
            ProhibitBuyTime: {
                type: Number,
                default: 5
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["betting", "changeBettingP"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = mt(),
                m = {
                    bt1: hw,
                    bt2: Rw,
                    bt3: jw,
                    bt4: eT
                },
                r = v(),
                c = v(),
                p = v([]),
                d = v(0),
                _ = v([{
                    name: g("totalBet"),
                    comp: "bt1"
                }, {
                    name: g("sameNum"),
                    comp: "bt2"
                }, {
                    name: g("numbersMatch"),
                    comp: "bt3"
                }, {
                    name: g("numbersUnmatch"),
                    comp: "bt4"
                }]),
                b = v([{
                    num: 1,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 2,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 3,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 4,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 5,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 6,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }]),
                k = v([]),
                T = v([]),
                C = v([]),
                h = v(!1),
                y = v([]),
                z = v(!1),
                f = Q(() => (l.currentInfo.passTime < l.ProhibitBuyTime && L(), l.currentInfo.passTime < l.ProhibitBuyTime)),
                $ = Q(() => l.currentGame.scope ? l.currentGame.scope.split("|").map(ot => Number(ot)) : []),
                L = () => {
                    z.value = !1, I()
                },
                I = () => {
                    c.value.clearList && c.value.clearList(), k.value = [], T.value = [], C.value = [], h.value = !1, y.value = [], b.value = [{
                        num: 1,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 2,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 3,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 4,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 5,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 6,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }]
                },
                B = async () => {
                    const ot = await at(ys());
                    p.value = (ot == null ? void 0 : ot.data) || []
                },
                x = () => {
                    r.value.setAllCoin()
                },
                G = ot => {
                    d.value = ot, z.value = !1, I()
                },
                P = () => {
                    let ot = [];
                    for (let lt = 0; T.value.length > lt; lt++) {
                        let J = T.value[lt],
                            kt = [];
                        for (let xt = 0; C.value.length > xt; xt++) kt.push(C.value[xt]);
                        if (kt.length > 0) {
                            let xt = kt.sort().join(",");
                            ot.push(J + "|" + xt)
                        }
                    }
                    y.value = ot.sort()
                },
                R = async ot => {
                    o("betting", ot), z.value = !1, I()
                },
                O = v(!1),
                K = v([]),
                nt = v(""),
                ct = (ot, lt) => {
                    nt.value = ot, K.value = lt, O.value = !0
                };
            return Tt(() => {
                B()
            }), i({
                bettingPopupShow: z
            }), (ot, lt) => {
                const J = H("van-popup");
                return n(), a("div", FT, [yt(t("div", VT, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [
                    [Zt, f.value]
                ]), t("div", UT, [(n(!0), a(S, null, A(_.value, (kt, xt) => (n(), a("div", {
                    key: xt,
                    class: M({
                        active: d.value == xt
                    }),
                    onClick: At => G(xt)
                }, e(kt.name), 11, KT))), 128))]), (n(), tt(je(m[_.value[d.value].comp]), {
                    ref_key: "BetRef",
                    ref: c,
                    OddsList: p.value,
                    numList: b.value,
                    numTow: T.value,
                    numOne: C.value,
                    numChack: h.value,
                    betnumList: k.value,
                    onSelectNum: P,
                    onShowP: lt[0] || (lt[0] = kt => z.value = kt),
                    onUpAll: x,
                    onCNumChack: lt[1] || (lt[1] = kt => h.value = !h.value),
                    onOnQuestion: ct
                }, null, 40, ["OddsList", "numList", "numTow", "numOne", "numChack", "betnumList"])), N(WT, {
                    ref_key: "betPopupRef",
                    ref: r,
                    currentInfo: l.currentInfo,
                    bettingPopupShow: z.value,
                    numTow: T.value,
                    numOne: C.value,
                    betTypeList: $.value,
                    numTowList: y.value,
                    currentGame: s.currentGame,
                    actNav: d.value,
                    betnumList: k.value,
                    numChack: h.value,
                    onClearBetting: L,
                    onSubmitBetting: R
                }, null, 8, ["currentInfo", "bettingPopupShow", "numTow", "numOne", "betTypeList", "numTowList", "currentGame", "actNav", "betnumList", "numChack"]), w(" 玩法提示 "), N(J, {
                    class: "qpopup",
                    show: O.value,
                    "onUpdate:show": lt[2] || (lt[2] = kt => O.value = kt),
                    "close-on-click-overlay": !1,
                    closeable: "",
                    "close-icon": "close",
                    "close-icon-position": "bottom-left",
                    round: ""
                }, {
                    default: D(() => [t("div", XT, [t("div", QT, [(n(!0), a(S, null, A(K.value, (kt, xt) => (n(), a("div", {
                        class: M("num num" + kt),
                        key: xt
                    }, null, 2))), 128))]), t("div", YT, e(nt.value), 1)])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const JT = U(ZT, [
        ["__scopeId", "data-v-8a4509d7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/Betting.vue"]
    ]),
    tC = {
        class: "GameRecord__C"
    },
    eC = {
        class: "GameRecord__C-head"
    },
    iC = {
        class: "GameRecord__C-body"
    },
    nC = {
        class: "GameRecord__C-body-premium"
    },
    aC = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    oC = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    sC = {
        class: "GameRecord__C-foot-page"
    },
    lC = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = v([]),
                g = v(4),
                m = v(10),
                r = v(1),
                c = () => {
                    r.value--, d()
                },
                p = () => {
                    r.value++, d()
                },
                d = async (_ = !1) => {
                    if (o.typeid == null) return;
                    _ && (r.value = 1);
                    const [b, k] = await te(hn({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    l.value = k.list || [], g.value = k.totalPage
                };
            return i({
                getData: d
            }), he(() => {
                d()
            }), (_, b) => {
                const k = H("van-col"),
                    T = H("van-row"),
                    C = H("van-icon");
                return n(), a("div", tC, [t("div", eC, [N(T, null, {
                    default: D(() => [N(k, {
                        span: "10"
                    }, {
                        default: D(() => [E(e(_.$t("gameRecordNum")), 1)]),
                        _: 1
                    }), N(k, {
                        span: "4"
                    }, {
                        default: D(() => [E(e(_.$t("gameRecordTotal")), 1)]),
                        _: 1
                    }), N(k, {
                        span: "10"
                    }, {
                        default: D(() => [E(e(_.$t("gameRecordResult")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", iC, [l.value.length ? (n(!0), a(S, {
                    key: 0
                }, A(l.value, (h, y) => (n(), tt(T, {
                    key: y
                }, {
                    default: D(() => [N(k, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(h.issueNumber), 1)]),
                        _: 2
                    }, 1024), N(k, {
                        span: "1"
                    }, {
                        default: D(() => [t("span", null, e(h.sumCount), 1)]),
                        _: 2
                    }, 1024), N(k, {
                        span: "4"
                    }, {
                        default: D(() => [t("span", null, e(h.sumCount > 10 ? _.$t("big") : _.$t("small")), 1)]),
                        _: 2
                    }, 1024), N(k, {
                        span: "4"
                    }, {
                        default: D(() => [t("span", null, e(h.sumCount % 2 ? _.$t("k3Odd") : _.$t("k3Even")), 1)]),
                        _: 2
                    }, 1024), N(k, {
                        span: "6"
                    }, {
                        default: D(() => [t("div", nC, [(n(!0), a(S, null, A(h.premium, (z, f) => (n(), a("div", {
                            key: f,
                            class: M("n" + z)
                        }, null, 2))), 128))])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", aC, [N(re)]))]), l.value.length ? (n(), a("div", oC, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: c
                }, [N(C, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", sC, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: p
                }, [N(C, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const cC = U(lC, [
        ["__scopeId", "data-v-4e09079f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/GameRecord.vue"]
    ]),
    rC = {
        class: "Trend__C"
    },
    uC = {
        class: "Trend__C-head"
    },
    dC = {
        class: "Trend__C-body"
    },
    pC = {
        class: "Trend__C-body-premium"
    },
    gC = {
        class: "Trend__C-body-gameText"
    },
    bC = {
        key: 1,
        class: "Trend__C-body-empty"
    },
    mC = {
        key: 0,
        class: "Trend__C-foot"
    },
    _C = {
        class: "Trend__C-foot-page"
    },
    vC = V({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                {
                    t: l
                } = mt(),
                g = v([]),
                m = v(4),
                r = v(10),
                c = v(1),
                p = () => {
                    c.value--, _()
                },
                d = () => {
                    c.value++, _()
                },
                _ = async (T = !1) => {
                    if (o.typeid == null) return;
                    T && (c.value = 1);
                    const [C, h] = await te(hn({
                        pageSize: r.value,
                        pageNo: c.value,
                        typeId: o.typeid
                    }));
                    g.value = h.list.map(y => {
                        let z = [0, 0, 0, 0, 0, 0],
                            f = y.premium.split("").map(Number),
                            $ = y.premium.split("").map(Number);
                        for (let L = 0; z.length > L; L++) z[f[L] - 1] = f[L];
                        return y.Premiums = z, y.AllEqual = k($), y
                    }) || [], m.value = h.totalPage
                },
                b = v([l("trendTXT1"), l("trendTXT2"), l("trendTXT3"), l("trendTXT4")]),
                k = T => {
                    let C = [0, 0, 0, 0, 0, 0],
                        h = T.sort(),
                        y = 2;
                    for (let z = 0; z < h.length - 1; z++) h[z] == h[z + 1] && (C[h[z] - 1] = y++);
                    return C
                };
            return i({
                getData: _
            }), he(() => {
                _()
            }), (T, C) => {
                const h = H("van-col"),
                    y = H("van-row"),
                    z = H("van-icon");
                return n(), a("div", rC, [t("div", uC, [N(y, null, {
                    default: D(() => [N(h, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(T.$t("trendNumber")), 1)]),
                        _: 1
                    }), N(h, {
                        span: "6"
                    }, {
                        default: D(() => [E(e(T.$t("trendResult")), 1)]),
                        _: 1
                    }), N(h, {
                        span: "10"
                    }, {
                        default: D(() => [E(e(T.$t("trendNum")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", dC, [g.value.length ? (n(!0), a(S, {
                    key: 0
                }, A(g.value, (f, $) => (n(), tt(y, {
                    key: $
                }, {
                    default: D(() => [N(h, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(f.issueNumber), 1)]),
                        _: 2
                    }, 1024), N(h, {
                        span: "6"
                    }, {
                        default: D(() => [t("div", pC, [(n(!0), a(S, null, A(f.premium, (L, I) => (n(), a("div", {
                            key: I,
                            class: M("n" + L)
                        }, null, 2))), 128))])]),
                        _: 2
                    }, 1024), N(h, {
                        span: "10"
                    }, {
                        default: D(() => [t("div", gC, [t("span", null, e(b.value[f.gameType]), 1)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", bC, [N(re)]))]), g.value.length ? (n(), a("div", mC, [t("div", {
                    class: M(["Trend__C-foot-previous", {
                        disabled: c.value <= 1
                    }]),
                    onClick: p
                }, [N(z, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", _C, e(c.value) + "/" + e(m.value), 1), t("div", {
                    class: M(["Trend__C-foot-next", {
                        disabled: c.value >= m.value
                    }]),
                    onClick: d
                }, [N(z, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const hC = U(vC, [
        ["__scopeId", "data-v-4159c83a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/Trend.vue"]
    ]),
    kC = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    fC = {
        class: "WinningTip__C-body-l2"
    },
    yC = {
        class: "line1"
    },
    $C = {
        class: "line2"
    },
    wC = {
        class: "yuan"
    },
    TC = {
        class: "WinningTip__C-body-l3"
    },
    CC = {
        key: 0,
        class: "isLose"
    },
    NC = {
        class: "head"
    },
    LC = {
        class: "bonus"
    },
    zC = {
        class: "gameDetail"
    },
    BC = {
        class: "WinningTip__C-body-l4"
    },
    IC = ["onClick"],
    SC = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const o = Q(() => m.value[0] ? m.value[0].state == 0 : !1),
                l = Q(() => m.value[0] || {}),
                g = v(!1),
                m = v([]);
            let r = v();
            const c = () => {
                    clearTimeout(r.value), m.value.shift(), g.value && m.value.length && (r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3))
                },
                p = () => {
                    g.value = !g.value, g.value ? r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3) : clearTimeout(r.value)
                },
                d = b => {
                    b.list = b.premium.split(""), b.sum = Number(b.list[0]) + Number(b.list[1]) + Number(b.list[2]), m.value.push(b), g.value && (r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3))
                },
                _ = () => {
                    m.value = []
                };
            return i({
                showMark: d
            }), (b, k) => yt((n(), a("div", {
                class: "WinningTip__C",
                onClick: c
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", {
                key: 0,
                class: M(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(b.$t("k3WarningTip1")), 3)) : (n(), a("div", kC, e(b.$t("k3WarningTip2")), 1)), t("div", fC, [t("div", yC, [(n(!0), a(S, null, A(l.value.list, (T, C) => (n(), a("div", {
                class: M(["n" + T])
            }, null, 2))), 256))]), t("div", $C, [t("div", null, e(l.value.premium), 1), t("div", wC, e(l.value.sum > 10 ? b.$t("big") : b.$t("small")), 1), t("div", null, e(l.value.sum % 2 ? b.$t("k3Odd") : b.$t("k3Even")), 1)])]), t("div", TC, [o.value ? (n(), a("div", CC, e(b.$t("k3WarningTip3")), 1)) : (n(), a(S, {
                key: 1
            }, [t("div", NC, e(b.$t("k3WarningTip4")), 1), t("div", LC, e(u(Bt)(Number(l.value.winAmount))), 1)], 64)), t("div", zC, e(b.$t("k3WarningTip5")) + e(l.value.typeName) + " " + e(l.value.issueNumber), 1)]), t("div", BC, [t("div", {
                class: M(["acitveBtn", {
                    active: g.value
                }]),
                onClick: ve(p, ["stop"])
            }, null, 10, IC), E(" " + e(b.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: _
            })], 2)], 512)), [
                [Zt, m.value.length]
            ])
        }
    });
const xC = U(SC, [
        ["__scopeId", "data-v-2d418cc5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/K3/WinningTips.vue"]
    ]),
    RC = {
        class: "K3__C"
    },
    GC = {
        class: "K3__C-head-more"
    },
    AC = V({
        __name: "index",
        setup(s) {
            const i = {
                    GameRecord: cC,
                    Trend: hC,
                    MyGameRecord: Wa
                },
                o = v(),
                l = v(),
                g = v(),
                m = v(!1),
                r = v("GameRecord"),
                c = rt(),
                p = Pe(),
                d = p.getK3,
                _ = v(0),
                b = v(localStorage.getItem("volumeShow") || "1"),
                k = v(!1),
                T = v([]),
                C = v(null),
                h = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                y = v("666"),
                z = v(5),
                f = v(""),
                $ = v(!1),
                L = v(null),
                I = Q(() => d[_.value] || {}),
                B = He(),
                x = Q(() => B.getIsShowLotteryDragon);
            Tt(() => {
                O()
            }), Ve(() => {
                clearInterval(C.value), clearInterval(At.value), Rt.value.forEach(Y => {
                    clearInterval(Y)
                }), it.value && clearTimeout(it.value)
            }), Pt(() => Te().visibility, Y => {
                Y === 0 ? clearInterval(C.value) : (O(), nt(_.value))
            });
            const G = () => {
                    c.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                P = () => {
                    b.value == "1" ? b.value = "2" : b.value = "1", localStorage.setItem("volumeShow", b.value)
                },
                R = Y => {
                    c.push({
                        name: Y
                    })
                },
                O = () => {
                    L.value == null && nt(0)
                },
                K = async (Y, Z = !1) => {
                    const W = await at(ws({
                        typeId: Y
                    }));
                    W && (y.value = W.data.premium, Z && ft(y.value))
                },
                nt = Y => {
                    p.getK3Data(), _.value = Y, L.value = d[Y].typeID, ct(L.value), Jt(() => {
                        o.value.getData(L.value)
                    })
                },
                ct = async (Y, Z = !1) => {
                    K(Y, Z);
                    const [W, wt] = await te($s({
                        typeId: Y
                    }));
                    h.value.gameNo = wt.issueNumber, h.value.currentTime = wt.serviceTime.replace(/-/g, "/"), h.value.beginTime = wt.startTime.replace(/-/g, "/"), ot()
                },
                ot = () => {
                    if (!d.length) return;
                    var Y = new Date(h.value.currentTime).getTime(),
                        Z = new Date(h.value.beginTime).getTime();
                    let W = (Y - Z) / 1e3,
                        wt = d[_.value];
                    if (W > wt.intervalM * 60 && (W = wt.intervalM * 60), h.value.passTime = wt.intervalM * 60 - W, h.value.passTime < 0) {
                        f.value = "An error occurred, please contact customer service。The game time is " + wt.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", k.value = !0;
                        return
                    }
                    lt()
                },
                lt = () => {
                    clearInterval(C.value), J(!1), C.value = setInterval(function() {
                        J()
                    }, 1e3)
                },
                J = (Y = !0) => {
                    if (h.value.passTime <= z.value && ($.value = !1), b.value == "1" && (h.value.passTime <= z.value && h.value.passTime > 1 ? kt(1) : h.value.passTime == 1 && kt(2)), h.value.passTime > 0) {
                        let Z = h.value.passTime;
                        h.value.time2 = Math.floor(Z / 60), h.value.time3 = Math.floor(Z % 60 / 10), h.value.time4 = Math.floor(Z % 10), h.value.passTime--
                    } else clearInterval(C.value), Y && xt()
                },
                kt = (Y = 1) => {
                    const Z = document.getElementById(`voice${Y}`);
                    Z && Z.play()
                },
                xt = () => {
                    ct(L.value, !0), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                At = v(null),
                gt = (Y, Z) => {
                    if (Y >= 0 && Z > 0 && Z >= Y) {
                        let W = Z - Y + 1;
                        return Math.floor(Math.random() * W + Y)
                    } else return 0
                },
                ft = Y => {
                    At.value || (At.value = setInterval(function() {
                        for (var Z = [], W = 0; 3 > W; W++) Z.push(gt(1, 6));
                        y.value = Z.join("")
                    }, 50)), setTimeout(function() {
                        clearInterval(At.value), y.value = Y, At.value = null
                    }, 2e3)
                },
                $t = v({}),
                Rt = v([]),
                Gt = Y => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), $t.value[Y]) return;
                    $t.value[Y] = !0;
                    const {
                        time1: Z,
                        time2: W,
                        time3: wt,
                        time4: Ot
                    } = h.value, ee = (Z * 10 * 60 + W * 60 + wt * 10 + Ot) * 1e3;
                    Rt.value[I.value.intervalM] = setTimeout(() => {
                        st(Y)
                    }, ee)
                },
                _t = Y => {
                    m.value = Y
                },
                it = v(null),
                st = async Y => {
                    const Z = await at(Ts({
                        issueNumber: Y
                    }));
                    if (Z) {
                        if (!(Z.data.state != 2)) {
                            it.value = setTimeout(() => {
                                st(Y)
                            }, 2e3);
                            return
                        }
                        l.value.showMark(Z.data), delete $t.value[Y]
                    }
                };
            return (Y, Z) => {
                const W = H("NavBar");
                return n(), a("div", RC, [N(W, {
                    "left-arrow": "",
                    onClickLeft: G,
                    class: "main",
                    headLogo: !0
                }, {
                    right: D(() => [t("div", GC, [t("div", {
                        onClick: Z[0] || (Z[0] = wt => R("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: b.value == "2"
                        }),
                        onClick: P
                    }, null, 2)])]),
                    _: 1
                }), w(" 钱包余额 "), N(Mi, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), N(Ei, {
                    siteMsg: T.value,
                    key: "k3"
                }, null, 8, ["siteMsg"]), w(" 游戏类型 "), N(Pi, {
                    gameList: u(d),
                    currentGameIndex: _.value,
                    onChangeGame: nt
                }, null, 8, ["gameList", "currentGameIndex"]), w(" 游戏开始时间倒计时 "), N(uw, {
                    currentInfo: h.value,
                    premium: y.value,
                    currentGame: I.value
                }, null, 8, ["currentInfo", "premium", "currentGame"]), w(" 投注表 "), N(JT, {
                    currentInfo: h.value,
                    currentGame: I.value,
                    VoiceType: b.value,
                    typeid: L.value,
                    onBetting: Gt,
                    onChangeBettingP: _t
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), w(" 记录导航 "), N(Oi, {
                    record: r.value,
                    onChangeC: Z[1] || (Z[1] = wt => r.value = wt)
                }, null, 8, ["record"]), w(" 动态展示对应的组件 "), (n(), tt(Xe, null, [(n(), tt(je(i[r.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: L.value,
                    ApiFun: u(vn),
                    listApi: u(hn),
                    EmerdApi: u(wa),
                    goPathName: "AllLotteryGames-BettingRecordK3"
                }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), w(" 弹窗组件 "), N(xe, {
                    show: k.value,
                    onConfirm: Z[2] || (Z[2] = wt => R("/login"))
                }, {
                    content: D(() => [t("div", null, e(f.value), 1)]),
                    _: 1
                }, 8, ["show"]), w(" 中奖提示组件 "), N(xC, {
                    ref_key: "WinningTipsRef",
                    ref: l
                }, null, 512), x.value ? (n(), tt(yn, {
                    key: 0
                })) : w("v-if", !0), N(qi)])
            }
        }
    });
const MC = U(AC, [
        ["__scopeId", "data-v-d024c659"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/K3/index.vue"]
    ]),
    jA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: MC
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Wi = s => (Ct("data-v-35613996"), s = s(), Nt(), s),
    PC = {
        class: "TimeLeft__C"
    },
    DC = {
        class: "box"
    },
    OC = {
        class: "tit"
    },
    EC = {
        class: "citycon"
    },
    qC = Wi(() => t("div", {
        class: "citybg"
    }, null, -1)),
    jC = {
        class: "font30"
    },
    HC = {
        class: "playmethod"
    },
    WC = {
        key: 0,
        class: "odds"
    },
    FC = Wi(() => t("div", {
        class: "line"
    }, "|", -1)),
    VC = {
        class: "odd"
    },
    UC = {
        key: 1,
        class: "color8"
    },
    KC = {
        class: "bettingcut"
    },
    XC = {
        class: "font22"
    },
    QC = {
        class: "info"
    },
    YC = Wi(() => t("div", {
        class: "illustratebg"
    }, null, -1)),
    ZC = {
        class: "font24"
    },
    JC = {
        class: "issue"
    },
    t6 = Wi(() => t("div", {
        class: "issuebg"
    }, null, -1)),
    e6 = {
        class: "font26"
    },
    i6 = {
        class: "closure"
    },
    n6 = {
        class: "closuretime"
    },
    a6 = {
        class: "closurtimes"
    },
    o6 = V({
        __name: "TimeLeft",
        props: {
            defaultcityname: {
                type: String,
                default: ""
            },
            defaultplayname: {
                type: String,
                default: ""
            },
            defaultexpiredate: {
                type: String,
                default: ""
            },
            issue: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            odds: {
                type: Number,
                default: 0
            },
            colorId: {
                type: Number,
                default: 0
            },
            areId: {
                type: Number,
                default: 0
            }
        },
        setup(s) {
            const i = s,
                o = rt(),
                l = () => {
                    o.push({
                        name: "AllLotteryGames-Play",
                        query: {
                            id: i.areId,
                            gVSs: 1
                        }
                    })
                };
            return (g, m) => (n(), a("div", PC, [t("div", DC, [t("div", OC, [t("div", EC, [qC, t("div", jC, e(s.defaultcityname), 1)]), t("div", HC, e(g.$t("code" + s.defaultplayname)), 1), s.colorId != 8 ? (n(), a("div", WC, [t("div", null, e(g.$t("odds")), 1), FC, t("div", VC, "1:" + e(s.odds), 1)])) : w("v-if", !0), s.colorId == 8 ? (n(), a("div", UC)) : w("v-if", !0), t("div", KC, [t("div", XC, e(g.$t("xosoTxt91")), 1), t("div", null, e(s.defaultexpiredate), 1)])]), t("div", QC, [t("div", {
                class: "playillustrate",
                onClick: l
            }, [YC, t("div", ZC, e(g.$t("lotteryManual")), 1)]), t("div", JC, [t6, t("div", e6, e(s.issue), 1)]), t("div", i6, [t("div", n6, e(g.$t("xosoTxt92")), 1), t("div", a6, [(n(!0), a(S, null, A(s.time.split(""), (r, c) => (n(), a("div", {
                class: M(r == ":" ? "red" : "redsqure"),
                key: c
            }, e(r), 3))), 128))])])])])]))
        }
    });
const s6 = U(o6, [
        ["__scopeId", "data-v-35613996"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/TimeLeft.vue"]
    ]),
    Nn = s => (Ct("data-v-9adf5430"), s = s(), Nt(), s),
    l6 = {
        class: "TimeLeft__C"
    },
    c6 = {
        class: "box"
    },
    r6 = {
        class: "tit"
    },
    u6 = {
        class: "citycon"
    },
    d6 = Nn(() => t("div", {
        class: "citybg"
    }, null, -1)),
    p6 = {
        class: "font30"
    },
    g6 = {
        key: 0,
        class: "playmethod"
    },
    b6 = {
        class: "odd"
    },
    m6 = {
        class: "odds"
    },
    _6 = {
        class: "result"
    },
    v6 = {
        class: "info"
    },
    h6 = Nn(() => t("div", {
        class: "illustratebg"
    }, null, -1)),
    k6 = {
        class: "font24"
    },
    f6 = {
        class: "issue"
    },
    y6 = Nn(() => t("div", {
        class: "issuebg"
    }, null, -1)),
    $6 = {
        class: "font26"
    },
    w6 = {
        class: "closure isShowPreparing"
    },
    T6 = {
        class: "closure"
    },
    C6 = {
        class: "closuretime"
    },
    N6 = {
        class: "closurtimes"
    },
    L6 = V({
        __name: "TimeLeftF",
        props: {
            defaultcityname: {
                type: String,
                default: ""
            },
            defaultplayname: {
                type: String,
                default: ""
            },
            issue: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            odds: {
                type: Number,
                default: 0
            },
            colorId: {
                type: Number,
                default: 0
            },
            areId: {
                type: Number,
                default: 0
            },
            resultList: {
                type: Object,
                default: {}
            },
            isShowPreparing: {
                type: Boolean,
                defauft: !1
            }
        },
        setup(s) {
            const i = s,
                o = rt(),
                l = Q(() => {
                    var r, c;
                    let m = (r = i.resultList) != null && r.openingResult ? (c = i.resultList) == null ? void 0 : c.openingResult.find(p => p.resultType == 0).result : "";
                    return Array.isArray(m) && (m = m[0]), m
                }),
                g = () => {
                    o.push({
                        name: "AllLotteryGames-Play",
                        query: {
                            id: i.areId,
                            gVSs: 2
                        }
                    })
                };
            return (m, r) => {
                var c;
                return n(), a("div", l6, [t("div", c6, [t("div", r6, [t("div", u6, [d6, t("div", p6, e(s.defaultcityname), 1)]), s.colorId != 8 ? (n(), a("div", g6, [t("div", null, "(" + e(m.$t("code" + s.defaultplayname)) + ")", 1), t("div", b6, "1:" + e(s.odds), 1)])) : w("v-if", !0), t("div", m6, [t("div", null, e(m.$t("betResult")), 1), t("div", null, e((c = s.resultList) == null ? void 0 : c.issueNumber), 1), t("div", _6, [(n(!0), a(S, null, A(l.value.split(""), (p, d) => (n(), a("span", {
                    key: d
                }, e(p), 1))), 128))])])]), t("div", v6, [t("div", {
                    class: "playillustrate",
                    onClick: g
                }, [h6, t("div", k6, e(m.$t("lotteryManual")), 1)]), t("div", f6, [y6, t("div", $6, e(s.issue), 1)]), t("div", w6, e(m.$t("preparing")), 1), t("div", T6, [t("div", C6, e(m.$t("xosoTxt91")), 1), t("div", N6, [(n(!0), a(S, null, A(s.time.split(""), (p, d) => (n(), a("div", {
                    class: M(p == ":" ? "red" : "redsqure"),
                    key: d
                }, e(p), 3))), 128))])])])])])
            }
        }
    });
const z6 = U(L6, [
        ["__scopeId", "data-v-9adf5430"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/TimeLeftF.vue"]
    ]),
    B6 = {
        class: "ColorsContainer"
    },
    I6 = V({
        __name: "ColorsAndPlay",
        props: {
            gameCategoryList: {
                type: Array,
                default: () => []
            },
            colortab: {
                type: Number,
                default: 0
            },
            playtab: {
                type: Number,
                default: 0
            }
        },
        emits: ["colorupdate", "update"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = v(o.colortab),
                g = v(o.playtab),
                m = Q(() => {
                    var p;
                    return ((p = o.gameCategoryList[l.value]) == null ? void 0 : p.gamePlayList) || []
                });

            function r(p) {
                i("colorupdate", p.item.categoryId, p.index)
            }

            function c({
                item: p,
                index: d
            }) {
                i("update", p.playId, d, p.playNameCode, p.betType)
            }
            return Pt(() => o.playtab, () => {
                g.value = o.playtab
            }), Pt(() => o.colortab, () => {
                l.value = o.colortab
            }), (p, d) => (n(), a("div", B6, [N(ui, {
                list: s.gameCategoryList,
                active: l.value,
                "onUpdate:active": d[0] || (d[0] = _ => l.value = _),
                tabClassName: "ColorsMethod",
                onOnClickTab: r
            }, {
                default: D(({
                    item: _,
                    index: b
                }) => [t("div", {
                    class: M(["coloritem", {
                        active: b === l.value
                    }])
                }, e(p.$t("code" + _.categoryNameCode)), 3)]),
                _: 1
            }, 8, ["list", "active"]), N(ui, {
                list: m.value,
                active: g.value,
                "onUpdate:active": d[1] || (d[1] = _ => g.value = _),
                tabClassName: "PlayMethod",
                onOnClickTab: c
            }, {
                default: D(({
                    item: _,
                    index: b
                }) => [t("div", {
                    class: M(["playitem", {
                        active: b === g.value
                    }])
                }, e(p.$t("code" + _.playNameCode)), 3)]),
                _: 1
            }, 8, ["list", "active"])]))
        }
    });
const S6 = U(I6, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/ColorsAndPlay.vue"]
    ]),
    Fi = s => (Ct("data-v-cca50955"), s = s(), Nt(), s),
    x6 = {
        class: "NumberSelectContainer"
    },
    R6 = {
        class: "NumberSelectContainer-mark"
    },
    G6 = {
        class: "NumberTabContent"
    },
    A6 = {
        key: 0,
        class: "selectcontainer"
    },
    M6 = {
        class: "selectbutton"
    },
    P6 = {
        class: "selectcontent"
    },
    D6 = {
        class: "selectheader"
    },
    O6 = {
        class: "selectball"
    },
    E6 = ["onClick"],
    q6 = {
        key: 1,
        class: "selectcontainer"
    },
    j6 = {
        class: "selectbutton"
    },
    H6 = {
        class: "selectcontent"
    },
    W6 = {
        class: "selectheader"
    },
    F6 = {
        class: "selectball"
    },
    V6 = ["onClick"],
    U6 = {
        key: 2,
        class: "selectcontainer"
    },
    K6 = {
        class: "selectbutton"
    },
    X6 = {
        class: "selectcontent"
    },
    Q6 = {
        class: "selectheader"
    },
    Y6 = {
        class: "selectball"
    },
    Z6 = ["onClick"],
    J6 = {
        key: 3,
        class: "selectcontainer"
    },
    t4 = {
        class: "selectbutton"
    },
    e4 = {
        class: "selectcontent"
    },
    i4 = {
        class: "selectheader"
    },
    n4 = {
        class: "selectball"
    },
    a4 = ["onClick"],
    o4 = {
        class: "quickcontainer"
    },
    s4 = {
        key: 0,
        class: "intervalcontainer"
    },
    l4 = ["onClick"],
    c4 = {
        key: 1,
        class: "randomcontainer"
    },
    r4 = {
        class: "randomheader"
    },
    u4 = Fi(() => t("div", {
        class: "redline"
    }, null, -1)),
    d4 = {
        class: "font30"
    },
    p4 = {
        class: "randombutton"
    },
    g4 = ["onClick"],
    b4 = {
        key: 2,
        class: "specialcontainer"
    },
    m4 = {
        class: "specialheader"
    },
    _4 = Fi(() => t("div", {
        class: "redline"
    }, null, -1)),
    v4 = {
        class: "font30"
    },
    h4 = {
        class: "specialbutton"
    },
    k4 = {
        class: "Ntit"
    },
    f4 = Fi(() => t("br", null, null, -1)),
    y4 = Fi(() => t("br", null, null, -1)),
    $4 = {
        class: "list"
    },
    w4 = ["onClick"],
    T4 = V({
        __name: "NumberSelect",
        props: {
            methodList: {
                type: String,
                default: ""
            },
            activeTab: {
                type: Number,
                default: 0
            },
            randomList: {
                type: Array,
                default: () => {}
            },
            randomtype: {
                type: Number,
                default: 0
            },
            specialtype: {
                type: Number,
                default: 0
            },
            isthreenumber: {
                type: Number,
                default: 0
            },
            speciaSelectNo: {
                type: String,
                default: ""
            },
            isShowMark: {
                type: Boolean,
                default: !1
            },
            hundred: {
                type: String,
                default: ""
            },
            betconfig: {
                type: String,
                default: ""
            },
            groupTab: {
                type: Number,
                default: 30
            },
            thousandnumList: {
                type: Array,
                default: []
            },
            hundrednumList: {
                type: Array,
                default: []
            },
            tennumList: {
                type: Array,
                default: []
            },
            indicualnumList: {
                type: Array,
                default: []
            },
            quicknumList: {
                type: Array,
                default: []
            },
            intervalnumber: {
                type: Array,
                default: []
            },
            intervalTab: {
                type: Number,
                default: 0
            }
        },
        emits: ["tabupdate", "selectgroup", "selectspecial", "betNum", "betQuickNum", "getselect", "getquick", "selectinterval"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = mt(),
                m = [{
                    name: g("selectNo"),
                    value: 1
                }, {
                    name: g("xosoTxt81"),
                    value: 3
                }, {
                    name: g("xosoTxt80"),
                    value: 2
                }],
                r = Q(() => m.filter($ => {
                    var L;
                    return (L = l.methodList) == null ? void 0 : L.includes($.value + "")
                })),
                c = v(0),
                p = v(""),
                d = v(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
                _ = ({
                    item: $
                }) => {
                    o("tabupdate", $.value)
                },
                b = ($, L, I) => {
                    o("selectgroup", $, L, I)
                },
                k = ($, L) => {
                    o("betNum", $, L)
                },
                T = ($, L, I) => {
                    o("betQuickNum", $, L, I)
                },
                C = ($, L, I, B) => {
                    o("getselect", $, L, I, B)
                },
                h = ($, L) => {
                    o("getquick", $, L)
                },
                y = ($, L) => {
                    o("selectinterval", $, L)
                },
                z = $ => {
                    $.target.value != "" && o("inputblur", $.target.value)
                },
                f = () => {
                    p.value = ""
                };
            return Pt(() => l.activeTab, async () => {
                await Jt();
                const $ = r.value.findIndex(L => L.value == l.activeTab);
                $ !== -1 && (c.value = $)
            }), i({
                cleardata: f
            }), ($, L) => {
                var B, x, G, P;
                const I = H("van-field");
                return n(), a("div", x6, [yt(t("div", R6, [t("div", null, e(u(g)("nomorebet")), 1)], 512), [
                    [Zt, s.isShowMark]
                ]), r.value.length > 0 ? (n(), tt(ui, {
                    key: 0,
                    list: r.value,
                    active: c.value,
                    "onUpdate:active": L[0] || (L[0] = R => c.value = R),
                    tabClassName: "NumberTab",
                    onOnClickTab: _
                }, {
                    default: D(({
                        item: R,
                        index: O
                    }) => [t("div", {
                        class: M(["tabitem", {
                            active: R.value === s.activeTab
                        }])
                    }, e(R.name), 3)]),
                    _: 1
                }, 8, ["list", "active"])) : w("v-if", !0), t("div", G6, [yt(t("div", null, [w("选择号码"), (B = s.betconfig) != null && B.includes("4") ? (n(), a("div", A6, [t("div", M6, [t("div", {
                    class: "selectall",
                    onClick: L[1] || (L[1] = R => C("Thousand", 0, 9, "all"))
                }, e(u(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: L[2] || (L[2] = R => C("Thousand", 0, 9, "big"))
                }, e(u(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: L[3] || (L[3] = R => C("Thousand", 0, 9, "small"))
                }, e(u(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: L[4] || (L[4] = R => C("Thousand", 0, 9, "odd"))
                }, e(u(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: L[5] || (L[5] = R => C("Thousand", 0, 9, "even"))
                }, e(u(g)("xosoTxt70")), 1)]), t("div", P6, [t("div", D6, e(u(g)("xosoTxt87")), 1), t("div", O6, [(n(!0), a(S, null, A(d.value, (R, O) => (n(), a("div", {
                    key: O,
                    onClick: K => k("Thousand", R)
                }, [t("div", {
                    class: M(s.thousandnumList.includes(R) ? "ball action " : "ball")
                }, e(R), 3)], 8, E6))), 128))])])])) : w("v-if", !0), (x = s.betconfig) != null && x.includes("3") ? (n(), a("div", q6, [t("div", j6, [t("div", {
                    class: "selectall",
                    onClick: L[6] || (L[6] = R => C("hundred", 0, 9, "all"))
                }, e(u(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: L[7] || (L[7] = R => C("hundred", 0, 9, "big"))
                }, e(u(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: L[8] || (L[8] = R => C("hundred", 0, 9, "small"))
                }, e(u(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: L[9] || (L[9] = R => C("hundred", 0, 9, "odd"))
                }, e(u(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: L[10] || (L[10] = R => C("hundred", 0, 9, "even"))
                }, e(u(g)("xosoTxt70")), 1)]), t("div", H6, [t("div", W6, e(u(g)("xosoTxt88")), 1), t("div", F6, [(n(!0), a(S, null, A(d.value, (R, O) => (n(), a("div", {
                    key: O,
                    onClick: K => k("Hundred", R)
                }, [t("div", {
                    class: M(s.hundrednumList.includes(R) ? "action ball" : "ball")
                }, e(R), 3)], 8, V6))), 128))])])])) : w("v-if", !0), (G = s.betconfig) != null && G.includes("2") ? (n(), a("div", U6, [t("div", K6, [t("div", {
                    class: "selectall",
                    onClick: L[11] || (L[11] = R => C("ten", 0, 9, "all"))
                }, e(u(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: L[12] || (L[12] = R => C("ten", 0, 9, "big"))
                }, e(u(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: L[13] || (L[13] = R => C("ten", 0, 9, "small"))
                }, e(u(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: L[14] || (L[14] = R => C("ten", 0, 9, "odd"))
                }, e(u(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: L[15] || (L[15] = R => C("ten", 0, 9, "even"))
                }, e(u(g)("xosoTxt70")), 1)]), t("div", X6, [t("div", Q6, e(u(g)("xosoTxt89")), 1), t("div", Y6, [(n(!0), a(S, null, A(d.value, (R, O) => (n(), a("div", {
                    key: O,
                    onClick: K => k("ten", R)
                }, [t("div", {
                    class: M(s.tennumList.includes(R) ? "action ball" : "ball")
                }, e(R), 3)], 8, Z6))), 128))])])])) : w("v-if", !0), (P = s.betconfig) != null && P.includes("1") ? (n(), a("div", J6, [t("div", t4, [t("div", {
                    class: "selectall",
                    onClick: L[16] || (L[16] = R => C("Indivual", 0, 9, "all"))
                }, e(u(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: L[17] || (L[17] = R => C("Indivual", 0, 9, "big"))
                }, e(u(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: L[18] || (L[18] = R => C("Indivual", 0, 9, "small"))
                }, e(u(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: L[19] || (L[19] = R => C("Indivual", 0, 9, "odd"))
                }, e(u(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: L[20] || (L[20] = R => C("Indivual", 0, 9, "even"))
                }, e(u(g)("xosoTxt70")), 1)]), t("div", e4, [t("div", i4, e(u(g)("xosoTxt90")), 1), t("div", n4, [(n(!0), a(S, null, A(d.value, (R, O) => (n(), a("div", {
                    key: O,
                    onClick: K => k("Indivual", R)
                }, [t("div", {
                    class: M(s.indicualnumList.includes(R) ? "ball action" : "ball")
                }, e(R), 3)], 8, a4))), 128))])])])) : w("v-if", !0)], 512), [
                    [Zt, s.activeTab === 1]
                ]), w("输入号码"), yt(t("div", null, [N(I, {
                    class: "custom-field",
                    modelValue: p.value,
                    "onUpdate:modelValue": L[21] || (L[21] = R => p.value = R),
                    rows: "4",
                    autosize: "",
                    type: "textarea",
                    placeholder: u(g)("xosoTxt86"),
                    onInput: z
                }, null, 8, ["modelValue", "placeholder"])], 512), [
                    [Zt, s.activeTab === 2]
                ]), w("快捷选号"), yt(t("div", null, [t("div", o4, [s.isthreenumber === 1 ? (n(), a("div", s4, [(n(!0), a(S, null, A(s.intervalnumber, (R, O) => (n(), a("div", {
                    class: M(["intervalitem", [s.intervalTab === O ? "active" : ""]]),
                    key: O,
                    onClick: K => y(R, O)
                }, e(R), 11, l4))), 128))])) : w("v-if", !0), s.randomtype === 1 ? (n(), a("div", c4, [t("div", r4, [u4, t("div", d4, e(u(g)("xosoTxt83")), 1)]), t("div", p4, [(n(!0), a(S, null, A(s.randomList, (R, O) => (n(), a("div", {
                    class: M([s.groupTab === O ? "active" : ""]),
                    key: O,
                    onClick: K => b(R, O, s.isthreenumber)
                }, e(R) + e(u(g)("xosoTxt84")), 11, g4))), 128))])])) : w("v-if", !0), s.specialtype === 1 ? (n(), a("div", b4, [t("div", m4, [_4, t("div", v4, e(u(g)("xosoTxt97")), 1)]), t("div", h4, [s.speciaSelectNo.includes("1") ? (n(), a("div", {
                    key: 0,
                    class: "specialsame",
                    onClick: L[22] || (L[22] = R => h(s.isthreenumber, "same"))
                }, e(u(g)("xosoTxt85")), 1)) : w("v-if", !0), s.speciaSelectNo.includes("4") ? (n(), a("div", {
                    key: 1,
                    class: "specialbig",
                    onClick: L[23] || (L[23] = R => h(s.isthreenumber, "big"))
                }, e(u(g)("big")), 1)) : w("v-if", !0), s.speciaSelectNo.includes("5") ? (n(), a("div", {
                    key: 2,
                    class: "specialsmall",
                    onClick: L[24] || (L[24] = R => h(s.isthreenumber, "small"))
                }, e(u(g)("small")), 1)) : w("v-if", !0), s.speciaSelectNo.includes("2") ? (n(), a("div", {
                    key: 3,
                    class: "specialodd",
                    onClick: L[25] || (L[25] = R => h(s.isthreenumber, "odd"))
                }, e(u(g)("xosoTxt71")), 1)) : w("v-if", !0), s.speciaSelectNo.includes("3") ? (n(), a("div", {
                    key: 4,
                    class: "specialeven",
                    onClick: L[26] || (L[26] = R => h(s.isthreenumber, "even"))
                }, e(u(g)("xosoTxt70")), 1)) : w("v-if", !0)])])) : w("v-if", !0), s.activeTab === 3 ? (n(), a(S, {
                    key: 3
                }, A(10, (R, O) => t("div", {
                    class: "numbercontainer",
                    key: R
                }, [t("div", k4, [t("div", null, [E(e(s.hundred) + e(O) + "0", 1), f4, E("/"), y4, E(e(s.hundred) + e(O) + "9", 1)])]), t("div", $4, [(n(), a(S, null, A(10, (K, nt) => t("div", {
                    class: "item",
                    key: K
                }, [t("div", {
                    onClick: ct => T(s.hundred, O, nt)
                }, [t("div", {
                    class: M(s.quicknumList.includes(s.hundred + "" + O + nt) ? "number action" : "number")
                }, e(s.hundred) + e(O) + e(nt), 3)], 8, w4)])), 64))])])), 64)) : w("v-if", !0)])], 512), [
                    [Zt, s.activeTab === 3]
                ])])])
            }
        }
    });
const C4 = U(T4, [
        ["__scopeId", "data-v-cca50955"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/NumberSelect.vue"]
    ]),
    N4 = {
        class: "TasteContainer"
    },
    L4 = {
        class: "TasteHeader"
    },
    z4 = {
        class: "NumberSelect"
    },
    B4 = {
        class: "NumberSelectCon"
    },
    I4 = ["onClick"],
    S4 = V({
        __name: "TasteSelect",
        props: {
            funplaylist: {
                type: Array,
                default: []
            },
            numbercon: {
                type: String,
                default: "1000"
            }
        },
        emits: ["selectvalue"],
        setup(s, {
            emit: i
        }) {
            const o = (l, g) => {
                i("selectvalue", l, g)
            };
            return (l, g) => (n(), a("div", N4, [t("div", L4, e(l.$t("xosoTxt60")), 1), t("div", z4, [t("div", B4, [(n(!0), a(S, null, A(s.funplaylist, (m, r) => (n(), a("div", {
                class: M(["NumberCon", {
                    action: m.oddTypeName === s.numbercon,
                    more: r == 18
                }]),
                key: r,
                onClick: c => o(m, r)
            }, [t("div", {
                class: M(["number", {
                    active: m.oddTypeName === s.numbercon
                }])
            }, e(l.$t("code" + m.oddTypeNameCode)), 3), t("div", {
                class: M(["odds", {
                    active: m.oddTypeName === s.numbercon
                }])
            }, e(m.oddsOrAmount), 3)], 10, I4))), 128))])])]))
        }
    });
const x4 = U(S4, [
        ["__scopeId", "data-v-a08d1fa6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/TasteSelect.vue"]
    ]),
    R4 = {
        class: "Footer__C"
    },
    G4 = {
        class: "nav c-row c-row-between"
    },
    A4 = {
        class: "c-row left c-row c-row-middle-center"
    },
    M4 = {
        class: "item"
    },
    P4 = {
        class: "txt"
    },
    D4 = {
        class: "num"
    },
    O4 = {
        class: "item"
    },
    E4 = {
        class: "txt"
    },
    q4 = {
        class: "num"
    },
    j4 = {
        class: ""
    },
    H4 = V({
        __name: "Footer",
        props: {
            betNumber: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            },
            betSum: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            }
        },
        emits: ["playBet"],
        setup(s, {
            emit: i
        }) {
            const o = () => {
                i("playBet")
            };
            return (l, g) => (n(), a("div", R4, [t("div", G4, [t("div", A4, [t("div", M4, [t("p", P4, e(l.$t("quantity")), 1), t("span", D4, e(l.betNumber || 0), 1)]), t("div", O4, [t("p", E4, e(l.$t("betAmount")), 1), t("span", q4, e(u(Bt)(l.betSum || 0)), 1)])]), t("div", {
                class: M(["c-row c-row-middle-center", [l.betSum > 0 ? "bet-btn" : "disabled-btn"]]),
                onClick: g[0] || (g[0] = m => o())
            }, [t("span", j4, e(l.$t("betting")), 1)], 2)])]))
        }
    });
const W4 = U(H4, [
        ["__scopeId", "data-v-b37345b8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/Footer.vue"]
    ]),
    F4 = {
        class: "RecordNav__C"
    },
    V4 = ["onClick"],
    U4 = V({
        __name: "RecordNav",
        props: {
            record: {
                type: String,
                default: "GameRecord"
            }
        },
        setup(s) {
            const i = s,
                {
                    t: o
                } = mt(),
                l = v([{
                    name: o("gameRecords"),
                    componentName: "GameRecord"
                }, {
                    name: o("myGame"),
                    componentName: "MyGameRecord"
                }]);
            return (g, m) => (n(), a("div", F4, [(n(!0), a(S, null, A(l.value, (r, c) => (n(), a("div", {
                key: c,
                onClick: p => g.$emit("changeC", r.componentName),
                class: M({
                    active: i.record == r.componentName
                })
            }, e(r.name), 11, V4))), 128))]))
        }
    });
const K4 = U(U4, [
        ["__scopeId", "data-v-fdfc55f4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/RecordNav.vue"]
    ]),
    X4 = {
        class: "GameRecord__C"
    },
    Q4 = {
        class: "GameRecord__C-head"
    },
    Y4 = {
        class: "GameRecord__C-body"
    },
    Z4 = {
        class: "c-tc goItem"
    },
    J4 = {
        class: "c-row"
    },
    t8 = {
        class: "c-row c-row-middle-center"
    },
    e8 = {
        class: "c-row c-row-middle-center time"
    },
    i8 = {
        key: 0
    },
    n8 = {
        key: 1
    },
    a8 = {
        key: 0,
        class: "details"
    },
    o8 = {
        key: 0,
        class: "detailLi"
    },
    s8 = {
        class: "prize-tit"
    },
    l8 = {
        key: 0
    },
    c8 = {
        class: "prize-box c-row c-flex-warp"
    },
    r8 = {
        class: "prize-box-item action"
    },
    u8 = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    d8 = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    p8 = {
        class: "GameRecord__C-foot-page"
    },
    g8 = V({
        __name: "GameRecord",
        props: {
            areId: {
                type: Number,
                required: !0
            },
            cityCode: {
                type: String,
                required: !0
            },
            gVSs: {
                type: String,
                required: !1
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                {
                    t: l
                } = mt(),
                g = v([]),
                m = v(4),
                r = v(10),
                c = v(1),
                p = v(-1),
                d = async (y = !1, z) => {
                    var f, $, L;
                    if ((z == null ? void 0 : z.list.length) > 0) g.value = ra(z == null ? void 0 : z.list) || [], m.value = z == null ? void 0 : z.totalPage, c.value = z == null ? void 0 : z.pageNo;
                    else {
                        if (o.cityCode === "") return;
                        let I;
                        o.gVSs == "1" ? I = await at(Cs({
                            pageSize: r.value,
                            pageNo: c.value,
                            areId: o == null ? void 0 : o.areId,
                            cityCode: o == null ? void 0 : o.cityCode
                        })) : o.gVSs == "2" && (I = await at(Ta({
                            pageSize: r.value,
                            pageNo: c.value,
                            areId: o.areId,
                            typeId: Number(o.cityCode)
                        }))), g.value = ((f = I.data) == null ? void 0 : f.list) || [], m.value = ($ = I.data) == null ? void 0 : $.totalPage, c.value = (L = I.data) == null ? void 0 : L.pageNo
                    }
                },
                _ = y => {
                    for (var z = [], f = 0; f < y.length; f++) {
                        var $ = z.findIndex(function(L) {
                            return L.resultType === y[f].resultType
                        });
                        $ !== -1 ? z[$].result.push(y[f].result) : z.push({
                            resultType: y[f].resultType,
                            result: [y[f].result]
                        })
                    }
                    return z
                };

            function b(y) {
                return y.join("-")
            }

            function k(y) {
                switch (y) {
                    case 0:
                        return l("GrandPrize");
                    case 1:
                        return l("firstprize");
                    case 2:
                        return l("secondprize");
                    case 3:
                        return l("thirdprize");
                    case 4:
                        return l("fourprize");
                    case 5:
                        return l("fiveprize");
                    case 6:
                        return l("sixprize");
                    case 7:
                        return l("sevenprize");
                    case 8:
                        return l("eightprize")
                }
            }
            const T = () => {
                    c.value--, d()
                },
                C = y => {
                    p.value == y ? p.value = -1 : p.value = y
                },
                h = () => {
                    c.value++, d()
                };
            return i({
                getData: d
            }), he(() => {
                p.value = -1
            }), (y, z) => {
                var I, B;
                const f = H("van-col"),
                    $ = H("van-row"),
                    L = H("van-icon");
                return n(), a("div", X4, [t("div", Q4, [N($, null, {
                    default: D(() => [N(f, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(y.$t("betSerial")), 1)]),
                        _: 1
                    }), N(f, {
                        span: "10"
                    }, {
                        default: D(() => [E(e(y.$t("result")), 1)]),
                        _: 1
                    }), N(f, {
                        span: "6"
                    }, {
                        default: D(() => [E(e(y.$t("time")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", Y4, [(I = g.value) != null && I.length ? (n(!0), a(S, {
                    key: 0
                }, A(g.value, (x, G) => (n(), tt($, {
                    key: G,
                    onClick: P => C(G)
                }, {
                    default: D(() => [N(f, {
                        span: "8"
                    }, {
                        default: D(() => [t("div", Z4, e(x.issueNumber), 1)]),
                        _: 2
                    }, 1024), N(f, {
                        span: "10",
                        class: "c-row c-row-middle-center"
                    }, {
                        default: D(() => [t("div", J4, [t("div", t8, [x.openingResult ? (n(!0), a(S, {
                            key: 0
                        }, A(x.openingResult[0].result, (P, R) => (n(), a("div", {
                            class: "li circle-black c-row c-row-middle-center c-tc",
                            key: R
                        }, [t("div", null, e(P), 1)]))), 128)) : w("v-if", !0)])])]),
                        _: 2
                    }, 1024), N(f, {
                        span: "6"
                    }, {
                        default: D(() => [t("div", e8, [y.gVSs == "1" ? (n(), a("div", i8, e(x.openingTime.substr(0, 10)), 1)) : (n(), a("div", n8, e(x.openingTime), 1))])]),
                        _: 2
                    }, 1024), G == p.value ? (n(), a("div", a8, [x.openingResult ? (n(), a("div", o8, [(n(!0), a(S, null, A(_(x.openingResult), (P, R) => (n(), a("div", {
                        class: M([`selectItem${P.resultType}`, "prize"]),
                        key: R
                    }, [t("div", s8, e(k(P.resultType)), 1), [0, 1, 2].includes(P.resultType) ? (n(), a("div", l8, "|")) : w("v-if", !0), t("div", c8, [t("span", r8, e(b(P.result)), 1)])], 2))), 128))])) : w("v-if", !0)])) : w("v-if", !0)]),
                    _: 2
                }, 1032, ["onClick"]))), 128)) : (n(), a("div", u8, [N(re)]))]), (B = g.value) != null && B.length ? (n(), a("div", d8, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: c.value <= 1
                    }]),
                    onClick: T
                }, [N(L, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", p8, e(c.value) + "/" + e(m.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: c.value >= m.value
                    }]),
                    onClick: h
                }, [N(L, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const b8 = U(g8, [
        ["__scopeId", "data-v-68c3df62"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/GameRecord.vue"]
    ]),
    m8 = s => (Ct("data-v-56cdb7a2"), s = s(), Nt(), s),
    _8 = {
        class: "MyGameRecordList__C"
    },
    v8 = ["onClick"],
    h8 = {
        class: "box"
    },
    k8 = {
        class: "time"
    },
    f8 = {
        key: 0,
        class: "state state0"
    },
    y8 = {
        key: 1,
        class: "state state3"
    },
    $8 = {
        key: 2,
        class: "state state4"
    },
    w8 = {
        key: 3,
        class: "state state2"
    },
    T8 = {
        key: 4,
        class: "state state5"
    },
    C8 = {
        key: 5,
        class: "state state1"
    },
    N8 = {
        key: 0,
        class: "info"
    },
    L8 = {
        class: "order"
    },
    z8 = {
        key: 0,
        class: "li"
    },
    B8 = {
        class: "lab"
    },
    I8 = ["onClick"],
    S8 = {
        key: 1,
        class: "li"
    },
    x8 = {
        class: "lab"
    },
    R8 = {
        class: "sub"
    },
    G8 = {
        class: "li"
    },
    A8 = {
        class: "lab"
    },
    M8 = {
        key: 0,
        class: "sub"
    },
    P8 = {
        key: 1,
        class: "sub"
    },
    D8 = {
        key: 2,
        class: "li"
    },
    O8 = {
        class: "lab"
    },
    E8 = {
        class: "sub"
    },
    q8 = {
        class: "li"
    },
    j8 = {
        class: "lab"
    },
    H8 = {
        class: "sub"
    },
    W8 = {
        class: "li"
    },
    F8 = {
        class: "lab"
    },
    V8 = {
        class: "sub"
    },
    U8 = {
        class: "li"
    },
    K8 = {
        class: "lab"
    },
    X8 = {
        class: "sub"
    },
    Q8 = {
        class: "li"
    },
    Y8 = {
        class: "lab"
    },
    Z8 = {
        class: "sub"
    },
    J8 = {
        class: "li"
    },
    t7 = {
        class: "lab"
    },
    e7 = {
        class: "sub"
    },
    i7 = m8(() => t("div", {
        class: "line"
    }, [t("p")], -1)),
    n7 = {
        class: "bet"
    },
    a7 = {
        class: "li betNum"
    },
    o7 = {
        class: "lab"
    },
    s7 = {
        key: 0,
        class: "txt"
    },
    l7 = {
        key: 1,
        class: "txt"
    },
    c7 = {
        key: 2,
        class: "txt"
    },
    r7 = {
        key: 3,
        class: "betList select"
    },
    u7 = {
        key: 4,
        class: "betList select"
    },
    d7 = {
        class: "li"
    },
    p7 = {
        class: "lab"
    },
    g7 = {
        key: 0,
        class: "state state0"
    },
    b7 = {
        key: 1,
        class: "state state3"
    },
    m7 = {
        key: 2,
        class: "state state4"
    },
    _7 = {
        key: 3,
        class: "state state2"
    },
    v7 = {
        key: 4,
        class: "state state5"
    },
    h7 = {
        key: 5,
        class: "state state1"
    },
    k7 = {
        class: "li"
    },
    f7 = {
        class: "lab"
    },
    y7 = {
        key: 0,
        class: "sub success"
    },
    $7 = {
        key: 1,
        class: "sub fail"
    },
    w7 = {
        key: 2,
        class: "sub"
    },
    T7 = {
        key: 0,
        class: "li"
    },
    C7 = {
        class: "lab"
    },
    N7 = {
        class: "sub"
    },
    L7 = {
        key: 1,
        class: "li"
    },
    z7 = {
        class: "lab"
    },
    B7 = {
        class: "sub"
    },
    I7 = {
        key: 0
    },
    S7 = ["onClick"],
    x7 = {
        key: 1,
        class: "result"
    },
    R7 = {
        key: 0,
        class: "txt"
    },
    G7 = {
        key: 1,
        class: "txt"
    },
    A7 = {
        key: 2,
        class: "txt"
    },
    M7 = {
        key: 3,
        class: "txt"
    },
    P7 = {
        key: 4,
        class: "txt"
    },
    D7 = {
        key: 5,
        class: "txt"
    },
    O7 = {
        key: 6,
        class: "txt"
    },
    E7 = {
        key: 7,
        class: "txt"
    },
    q7 = {
        key: 8,
        class: "txt"
    },
    j7 = {
        class: "num"
    },
    H7 = V({
        __name: "MyRecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !1
            },
            gVSs: {
                type: String,
                required: !1
            }
        },
        emits: ["click-cance"],
        setup(s, {
            emit: i
        }) {
            const {
                t: o
            } = mt(), l = v(-1), g = y => {
                l.value === y ? l.value = -1 : l.value = y
            }, m = v(!1), r = v(""), c = async () => {
                await at(Ls({
                    orderId: r.value
                })) && (m.value = !1, bn(o("xosoTxt96")), i("click-cance"))
            }, p = y => {
                r.value = y, m.value = !0
            }, d = Ns(c, 1e3), _ = y => {
                for (var z = [], f = 0; f < y.length; f++) {
                    var $ = z.findIndex(function(L) {
                        return L.resultType === y[f].resultType
                    });
                    $ !== -1 ? z[$].result.push("-" + y[f].result) : z.push({
                        resultType: y[f].resultType,
                        result: [y[f].result]
                    })
                }
                return z
            }, b = y => {
                const z = k(y);
                return T(z)
            }, k = y => {
                let z = [];
                if (y.includes(",")) {
                    let f = y.split(","),
                        $ = {};
                    for (let L = 0; f.length > L; L++) $ = f[L].split("|"), z.push($);
                    return z
                }
                return y
            }, T = y => {
                let z = y[0],
                    f = y[1],
                    $ = [];
                for (let I = 0; z.length > I; I++)
                    for (let B = 0; f.length > B; B++) $.push(z[I] + f[B]);
                let L = y.slice(2);
                return L.length > 0 ? T([$, ...L]) : $
            }, C = y => {
                if (y != null) {
                    let z = y.split(",");
                    if (z.length > 0) return z
                }
                return []
            }, h = y => {
                const z = {
                    大: o("big"),
                    小: o("small"),
                    单: o("odd"),
                    双: o("xosoTxt70")
                };
                return z[y] ? z[y].replace(/\|/g, ",") : y.replace(/\|/g, ",")
            };
            return Tt(() => {}), (y, z) => {
                const f = H("svg-icon");
                return n(), a("div", _8, [(n(!0), a(S, null, A(y.mayrecord, ($, L) => (n(), a("div", {
                    class: M(l.value === L ? "item active" : "item"),
                    key: $,
                    onClick: I => g(L)
                }, [t("div", h8, [t("div", null, [t("h4", null, e(u(o)("code" + $.bettingParentTypeNameCode)), 1), t("span", k8, e($.createTime), 1)]), $.status === 1 ? (n(), a("div", f8, [t("p", null, e(u(o)("bettingResultState1")), 1)])) : w("v-if", !0), $.status === 3 ? (n(), a("div", y8, [t("p", null, e(u(o)("hasWon")), 1), t("span", null, "+" + e($.winningAmount), 1)])) : w("v-if", !0), $.status === 2 ? (n(), a("div", $8, [t("p", null, e(u(o)("bettingResultState3")), 1), t("span", null, "-" + e($.realBettingAmount), 1)])) : w("v-if", !0), $.status === 4 ? (n(), a("div", w8, [t("p", null, e(u(o)("xosoTxt74")), 1)])) : w("v-if", !0), $.status === 5 ? (n(), a("div", T8, [t("p", null, e(u(o)("xosoTxt75")), 1)])) : w("v-if", !0), $.status === 6 ? (n(), a("div", C8, [t("p", null, e(u(o)("xosoTxt76")), 1)])) : w("v-if", !0)]), l.value === L ? (n(), a("div", N8, [t("div", L8, [$.orderNo ? (n(), a("div", z8, [t("div", B8, e(u(o)("orderNo")), 1), t("div", {
                    class: "sub",
                    onClick: ve(I => u(Fe)($.orderNo), ["stop"])
                }, [E(e($.orderNo) + " ", 1), N(f, {
                    name: "copy"
                })], 8, I8)])) : w("v-if", !0), $.issueNo ? (n(), a("div", S8, [t("div", x8, e(u(o)("betIssue")), 1), t("div", R8, e($.issueNo), 1)])) : w("v-if", !0), t("div", G8, [t("div", A8, e(u(o)("area")), 1), y.gVSs == "1" ? (n(), a("div", M8, e(u(o)("code" + $.areNameCode)), 1)) : y.gVSs == "2" ? (n(), a("div", P8, e(u(o)("code" + $.typeCode)), 1)) : w("v-if", !0)]), y.gVSs == "1" ? (n(), a("div", D8, [t("div", O8, e(u(o)("xosoTxt77")), 1), t("div", E8, e(u(o)("code" + $.nameCode)), 1)])) : w("v-if", !0), t("div", q8, [t("div", j8, e(u(o)("gamePlay")), 1), t("div", H8, e(u(o)("code" + $.bettingParentTypeNameCode)), 1)]), t("div", W8, [t("div", F8, e(u(o)("xosoTxt78")), 1), t("div", V8, e(u(o)("code" + $.bettingTypeNameCode)), 1)]), t("div", U8, [t("div", K8, e(u(o)("amountMay")), 1), t("div", X8, e($.amount), 1)]), t("div", Q8, [t("div", Y8, e(u(o)("multiple")), 1), t("div", Z8, e($.bettingMultiple), 1)]), t("div", J8, [t("div", t7, e(u(o)("xosoTxt79")), 1), t("div", e7, e($.totalBetting) + " " + e(u(o)("note")), 1)]), w(` <div class="li" v-if="item.realBettingAmount">
						<div class="lab">{{ $t('afterTaxAmount') }}</div>
						<div class="sub">{{ item.realBettingAmount }}</div>
					</div>
					<div class="li" v-if="item.serviceCharge">
						<div class="lab">{{ $t('tax') }}</div>
						<div class="sub">{{ item.serviceCharge }}</div>
					</div> `)]), i7, t("div", n7, [t("div", a7, [t("div", o7, [E(e(u(o)("bettingnumber")), 1), $.bettingFormat === 1 ? (n(), a("span", s7, "(" + e(u(o)("selectNo")) + ")", 1)) : w("v-if", !0), $.bettingFormat === 2 ? (n(), a("span", l7, "(" + e(u(o)("xosoTxt80")) + ")", 1)) : w("v-if", !0), $.bettingFormat === 3 ? (n(), a("span", c7, "(" + e(u(o)("xosoTxt81")) + ")", 1)) : w("v-if", !0), w(" 选择号码 "), $.bettingFormat == 1 ? (n(), a("div", r7, [(n(!0), a(S, null, A(b($.bettingContent), (I, B) => (n(), a("span", {
                    class: M({
                        active: C($.winningNum).includes(I)
                    }),
                    key: B
                }, e(I), 3))), 128))])) : (n(), a("div", u7, [(n(!0), a(S, null, A($.bettingContent.split(","), (I, B) => (n(), a("span", {
                    class: M({
                        active: C($.winningNum).includes(I)
                    }),
                    key: B
                }, e(h(I)), 3))), 128))]))])]), t("div", d7, [t("div", p7, e(u(o)("statusMay")), 1), $.status === 1 ? (n(), a("div", g7, [t("p", null, e(u(o)("bettingResultState1")), 1)])) : w("v-if", !0), $.status === 3 ? (n(), a("div", b7, [t("p", null, e(u(o)("hasWon")), 1)])) : w("v-if", !0), $.status === 2 ? (n(), a("div", m7, [t("p", null, e(u(o)("bettingResultState3")), 1)])) : w("v-if", !0), $.status === 4 ? (n(), a("div", _7, [t("p", null, e(u(o)("xosoTxt74")), 1)])) : w("v-if", !0), $.status === 5 ? (n(), a("div", v7, [t("p", null, e(u(o)("xosoTxt75")), 1)])) : w("v-if", !0), $.status === 6 ? (n(), a("div", h7, [t("p", null, e(u(o)("xosoTxt76")), 1)])) : w("v-if", !0)]), t("div", k7, [t("div", f7, e(u(o)("winOrLose")), 1), $.status === 3 ? (n(), a("div", y7, " +" + e($.winningAmount), 1)) : $.status === 2 ? (n(), a("div", $7, " -" + e($.realBettingAmount), 1)) : (n(), a("div", w7, "---"))]), $.createTime ? (n(), a("div", T7, [t("div", C7, e(u(o)("createTime")), 1), t("div", N7, e($.createTime), 1)])) : w("v-if", !0), $.openingTime ? (n(), a("div", L7, [t("div", z7, e(u(o)("winTrxTime")), 1), t("div", B7, e($.openingTime), 1)])) : w("v-if", !0)]), $.issueNoStatus === 1 && $.status === 1 && y.gVSs == "1" ? (n(), a("div", I7, [t("div", {
                    class: "btn",
                    onClick: ve(I => p($.id), ["stop"])
                }, e(u(o)("xosoTxt82")), 9, S7)])) : w("v-if", !0), w(" 开奖结果 "), $.openingResult ? (n(), a("div", x7, [(n(!0), a(S, null, A(_($.openingResult), (I, B) => (n(), a("div", {
                    class: M(B < 3 ? "result-item jusb" : "result-item"),
                    key: B
                }, [I.resultType == 0 ? (n(), a("div", R7, e(u(o)("GrandPrize")), 1)) : w("v-if", !0), I.resultType == 1 ? (n(), a("div", G7, e(u(o)("firstprize")), 1)) : w("v-if", !0), I.resultType == 2 ? (n(), a("div", A7, e(u(o)("secondprize")), 1)) : w("v-if", !0), I.resultType == 3 ? (n(), a("div", M7, e(u(o)("thirdprize")), 1)) : w("v-if", !0), I.resultType == 4 ? (n(), a("div", P7, e(u(o)("fourprize")), 1)) : w("v-if", !0), I.resultType == 5 ? (n(), a("div", D7, e(u(o)("fiveprize")), 1)) : w("v-if", !0), I.resultType == 6 ? (n(), a("div", O7, e(u(o)("sixprize")), 1)) : w("v-if", !0), I.resultType == 7 ? (n(), a("div", E7, e(u(o)("sevenprize")), 1)) : w("v-if", !0), I.resultType == 8 ? (n(), a("div", q7, e(u(o)("eightprize")), 1)) : w("v-if", !0), t("div", j7, [(n(!0), a(S, null, A(I.result, (x, G) => (n(), a("span", {
                    key: G
                }, e(x), 1))), 128))])], 2))), 128))])) : w("v-if", !0)])) : w("v-if", !0)], 10, v8))), 128)), N(xe, {
                    show: m.value,
                    "onUpdate:show": z[0] || (z[0] = $ => m.value = $),
                    title: u(o)("xosoTxt99"),
                    onConfirm: u(d)
                }, null, 8, ["show", "title", "onConfirm"])])
            }
        }
    });
const W7 = U(H7, [
        ["__scopeId", "data-v-56cdb7a2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/MyRecordList.vue"]
    ]),
    F7 = {
        class: "MyGameRecord__C"
    },
    V7 = {
        class: "MyGameRecord__C-body"
    },
    U7 = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    K7 = {
        key: 2,
        class: "MyGameRecord__C-body-empty"
    },
    X7 = {
        key: 0,
        class: "MyGameRecord__C-foot"
    },
    Q7 = {
        class: "MyGameRecord__C-foot-page"
    },
    Y7 = V({
        __name: "MyGameRecord",
        props: {
            parmas: {
                type: Object,
                required: !1
            },
            ApiFun: {
                type: Function,
                required: !0
            },
            cityCode: {
                type: Array,
                required: !1
            },
            hasHead: {
                type: Boolean,
                required: !1,
                default: !0
            },
            gVSs: {
                type: String,
                required: !1
            },
            areId: {
                type: String,
                required: !1
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = rt(),
                g = v(0),
                m = v(10),
                r = v(1),
                c = v([]),
                p = async () => {
                    var z, f, $;
                    const h = d(o.parmas);
                    (o == null ? void 0 : o.gVSs) == "2" && (o != null && o.areId && (h.areId = o == null ? void 0 : o.areId), o != null && o.cityCode && (h.typeId = Number(o == null ? void 0 : o.cityCode)));
                    const y = await at(o.ApiFun({
                        pageSize: m.value,
                        pageNo: r.value,
                        ...h
                    }));
                    y && (c.value = ((z = y.data) == null ? void 0 : z.list) || [], g.value = ((f = y.data) == null ? void 0 : f.totalPage) || 0, r.value = ($ = y.data) == null ? void 0 : $.pageNo)
                };

            function d(h) {
                const y = {};
                for (const z in h) h[z] !== "" && (y[z] = h[z]);
                return y
            }
            const _ = () => {
                    p()
                },
                b = Q(() => o.gVSs == "1" ? "AllLotteryGames-XoSoRecord" : o.gVSs == "2" ? "AllLotteryGames-XoSoRecordF" : ""),
                k = h => {
                    l.push({
                        name: h,
                        query: {
                            areId: o.areId,
                            typeId: o.cityCode
                        }
                    })
                },
                T = () => {
                    r.value--, p()
                },
                C = () => {
                    r.value++, p()
                };
            return i({
                getData: p
            }), he(() => {
                p()
            }), (h, y) => {
                var f, $;
                const z = H("van-icon");
                return n(), a("div", F7, [t("div", V7, [h.hasHead ? (n(), a("div", U7, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: y[0] || (y[0] = L => k(b.value || ""))
                }, e(h.$t("more")), 1)])) : w("v-if", !0), (f = c.value) != null && f.length ? (n(), tt(W7, {
                    key: 1,
                    mayrecord: c.value,
                    onClickCance: _,
                    gVSs: h.gVSs
                }, null, 8, ["mayrecord", "gVSs"])) : (n(), a("div", K7, [N(re)]))]), ($ = c.value) != null && $.length ? (n(), a("div", X7, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: T
                }, [N(z, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", Q7, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: C
                }, [N(z, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const Ln = U(Y7, [
        ["__scopeId", "data-v-44e97c4d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/MyGameRecord.vue"]
    ]),
    Z7 = {
        key: 0,
        class: "WinningTip__C-body-l1 isL"
    },
    J7 = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    t9 = {
        key: 2,
        class: "notwinning"
    },
    e9 = {
        key: 3,
        class: "WinningTip__C-body-l2"
    },
    i9 = {
        key: 4,
        class: "WinningTip__C-body-l5"
    },
    n9 = {
        class: "WinningTip__C-body-l5-content"
    },
    a9 = {
        class: "balltext"
    },
    o9 = {
        class: "WinningTip__C-body-l3"
    },
    s9 = {
        key: 0,
        class: "isLose"
    },
    l9 = {
        class: "head"
    },
    c9 = {
        class: "bonus"
    },
    r9 = {
        class: "gameDetail"
    },
    u9 = {
        class: "gameDetail"
    },
    d9 = {
        class: "WinningTip__C-body-l4"
    },
    p9 = ["onClick"],
    g9 = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const o = Q(() => m.value[0] ? m.value[0].winningAmount == 0 : !1),
                l = Q(() => m.value[0] || {}),
                g = v(!1),
                m = v([]);
            let r = v();
            const c = () => {
                clearTimeout(r.value), m.value.shift(), g.value && m.value.length && (r.value = setTimeout(() => {
                    c()
                }, 1e3 * 3))
            };
            Pt(() => m.value.length, b => {
                b ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            });
            const p = () => {
                    g.value = !g.value, g.value ? r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3) : clearTimeout(r.value)
                },
                d = b => {
                    m.value.push(b), g.value && (r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3))
                },
                _ = () => {
                    m.value = []
                };
            return i({
                showMark: d
            }), (b, k) => yt((n(), a("div", {
                class: "WinningTip__C",
                onClick: c
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", Z7, e(b.$t("k3WarningTip1")), 1)) : w("v-if", !0), o.value ? w("v-if", !0) : (n(), a("div", J7, e(b.$t("k3WarningTip2")), 1)), o.value ? (n(), a("div", t9)) : w("v-if", !0), o.value ? w("v-if", !0) : (n(), a("div", e9, e(b.$t("code" + l.value.bettingParentTypeNameCode)) + "/" + e(b.$t("code" + l.value.bettingTypeNameCode)), 1)), o.value ? w("v-if", !0) : (n(), a("div", i9, [t("div", n9, [(n(!0), a(S, null, A(l.value.openingResult, (T, C) => (n(), a("div", {
                class: "ball",
                key: C
            }, [t("div", a9, e(T), 1)]))), 128))])])), t("div", o9, [o.value ? (n(), a("div", s9, e(b.$t("winTips4")), 1)) : w("v-if", !0), o.value ? w("v-if", !0) : (n(), a(S, {
                key: 1
            }, [t("div", l9, e(b.$t("winTips5")), 1), t("div", c9, e(u(Bt)(l.value.winningAmount)), 1)], 64)), t("div", r9, e(b.$t(`code${l.value.typeCode}`)), 1), t("div", u9, e(b.$t("winTips6")) + e(l.value.issueNo), 1)]), t("div", d9, [t("div", {
                class: M(["acitveBtn", {
                    active: g.value
                }]),
                onClick: ve(p, ["stop"])
            }, null, 10, p9), E(" " + e(b.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: _
            })], 2)], 512)), [
                [Zt, m.value.length]
            ])
        }
    });
const b9 = U(g9, [
        ["__scopeId", "data-v-eb0f5940"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/WinningTips.vue"]
    ]),
    zn = s => (Ct("data-v-b1e14027"), s = s(), Nt(), s),
    m9 = {
        class: "NewVietnam__C"
    },
    _9 = zn(() => t("div", {
        class: "bottombg"
    }, null, -1)),
    v9 = {
        class: "box p-l-10 p-r-10 p-t-10 p-b-10"
    },
    h9 = ["src"],
    k9 = {
        class: "title c-tc"
    },
    f9 = {
        key: 0,
        class: "titlebets c-tc border60"
    },
    y9 = {
        class: "box"
    },
    $9 = {
        class: "c-row"
    },
    w9 = {
        key: 2,
        class: M("c-row c-flex-warp compound")
    },
    T9 = {
        key: 0,
        class: "item"
    },
    C9 = {
        class: "title"
    },
    N9 = {
        class: "numcontainer"
    },
    L9 = {
        key: 1,
        class: "item"
    },
    z9 = {
        class: "title"
    },
    B9 = {
        class: "numcontainer"
    },
    I9 = {
        key: 2,
        class: "item"
    },
    S9 = {
        class: "title"
    },
    x9 = {
        class: "numcontainer"
    },
    R9 = {
        key: 3,
        class: "item"
    },
    G9 = {
        class: "title"
    },
    A9 = {
        class: "numcontainer"
    },
    M9 = {
        key: 4,
        class: "item"
    },
    P9 = {
        class: "numcontainer"
    },
    D9 = {
        class: "popup-info"
    },
    O9 = {
        class: "popup-info-item c-row c-row-between"
    },
    E9 = {
        class: "tit"
    },
    q9 = {
        class: "c-row c-row-between stepper-box"
    },
    j9 = {
        class: "popup-info-item c-row c-flew-end"
    },
    H9 = {
        class: "c-row multiple-box"
    },
    W9 = ["onClick"],
    F9 = {
        class: "c-row c-row-between c-row-middle quantity"
    },
    V9 = {
        class: "c-row c-row-middle-center"
    },
    U9 = zn(() => t("span", {
        class: "line"
    }, "|", -1)),
    K9 = {
        class: "num"
    },
    X9 = {
        class: "c-row c-row-middle-center"
    },
    Q9 = zn(() => t("span", {
        class: "line"
    }, "|", -1)),
    Y9 = {
        class: "num"
    },
    Z9 = {
        class: "wallet c-row c-row-between c-row-middle"
    },
    J9 = {
        class: "txt c-row"
    },
    tN = {
        class: "num c-row c-row-middle"
    },
    eN = {
        class: "balance c-row c-row-middle"
    },
    iN = {
        class: "txt"
    },
    nN = {
        class: "num yellow"
    },
    aN = {
        key: 0,
        class: "wallet c-row c-row-between c-row-middle"
    },
    oN = {
        class: "txt c-row bg7172"
    },
    sN = ["src"],
    lN = {
        class: "popup-info-item c-row c-row-middle"
    },
    cN = {
        class: "agree p-r-15"
    },
    rN = {
        class: "popup-btn c-row c-row-between"
    },
    uN = {
        class: "left"
    },
    dN = {
        class: "right"
    },
    pN = {
        class: ""
    },
    gN = {
        class: "areList"
    },
    bN = ["src"],
    mN = {
        class: "itemsC"
    },
    _N = ["onClick"],
    vN = {
        class: "PreSale"
    },
    hN = {
        class: "head"
    },
    kN = {
        class: "body"
    },
    fN = {
        class: "foot"
    },
    yN = ["src"],
    $N = ["src"],
    wN = {
        class: "font36"
    },
    TN = {
        class: "tipMsg"
    },
    CN = V({
        __name: "index",
        setup(s) {
            var En, qn;
            const i = rt(),
                o = gn(),
                {
                    t: l
                } = mt(),
                g = v(!1),
                m = Q(() => {
                    var q, j;
                    return b.value ? (q = b.value) == null ? void 0 : q.type : (j = o.query) == null ? void 0 : j.type
                }),
                r = v(i.currentRoute.value.query.nameCode),
                c = v(Number((En = o.query) == null ? void 0 : En.areId) || 1),
                p = Q(() => r.value ? l("code" + r.value) : ""),
                d = v((qn = o.query) == null ? void 0 : qn.code),
                _ = v(),
                b = v(),
                k = Kt({
                    bettingParentType: "",
                    areId: "",
                    startDate: "",
                    endDate: ""
                }),
                T = new Date,
                C = `${pe(T).format("YYYY-MM-DD")} 00:00:00`,
                h = `${pe(T).format("YYYY-MM-DD")} 23:59:59`;
            k.startDate = C, k.endDate = h;
            const y = v(!1),
                z = v([]),
                f = v([]),
                $ = v({}),
                L = v(0),
                I = v(1),
                B = v(0),
                x = v(1),
                G = v(1),
                P = v(""),
                R = v(""),
                O = v("00:00:00"),
                K = v(1.995),
                nt = v(1),
                ct = v([]),
                ot = v(0),
                lt = v(""),
                J = v(1),
                kt = v(""),
                xt = v([]),
                At = v(0),
                gt = v(0),
                ft = v(0),
                $t = v(0),
                Rt = v(""),
                Gt = v(),
                _t = v(1e3),
                it = v([]),
                st = v([]),
                Y = v([]),
                Z = v([]),
                W = v([]),
                wt = v([]),
                Ot = v("1000"),
                ee = v(1),
                Le = v(!1),
                le = Q(() => !(Ge.value > ei.value || Qt.value <= 0)),
                ze = v(["000/099", "100/199", "200/299", "300/399", "400/499", "500/599", "600/699", "700/799", "800/899", "900/999"]),
                vt = v("000/099"),
                Be = v(0),
                Re = v(!1),
                Ie = v(1),
                We = v(1),
                zt = v(0),
                fe = v(0),
                ti = v(0),
                ye = v("GameRecord"),
                Ui = {
                    GameRecord: b8,
                    MyGameRecord: Ln
                },
                Qt = v(1),
                zi = v(),
                Vt = v(!1),
                vi = v(!0),
                Ge = v(0),
                ei = v(0),
                Oe = v(0),
                ii = v(!1),
                F = v(),
                et = v(!1),
                pt = v(""),
                Lt = v(""),
                qt = Q(() => {
                    if (m.value == "1") return La;
                    if (m.value == "2") return za
                }),
                Mt = q => {
                    const j = String(Math.floor(Wt.value % 3600 / 60)).padStart(2, "0"),
                        X = String(Wt.value % 60).padStart(2, "0");
                    return `${j}:${X}`
                },
                Wt = v(),
                Et = v(null),
                Yt = v("00:00"),
                ae = v(!1),
                Ee = () => {
                    Et.value = setInterval(() => {
                        Wt.value <= 0 ? (Yt.value = "00:00", setTimeout(() => {
                            ae.value = !0
                        }, 500), clearInterval(Et.value), Ae(), setTimeout(() => {
                            ai(!0)
                        }, 5e3)) : (ae.value = !1, Yt.value = Mt(Wt.value), Wt.value--)
                    }, 1e3)
                },
                ce = v(null),
                hi = (q, j) => {
                    clearInterval(Oe.value), Le.value = !1, Oe.value = (j - q) / 1e3, ce.value = setInterval(() => {
                        if (Oe.value <= 0) clearInterval(ce.value), O.value = "00:00:00", Le.value = !0;
                        else {
                            const X = String(Math.floor(Oe.value / 3600)).padStart(2, "0"),
                                dt = String(Math.floor(Oe.value % 3600 / 60)).padStart(2, "0"),
                                ht = String(Oe.value % 60).padStart(2, "0");
                            O.value = X + ":" + dt + ":" + ht, Oe.value--
                        }
                    }, 1e3)
                };

            function ni() {
                b.value || (_e({
                    message: l("xosoTip5"),
                    wordBreak: "break-word"
                }), setTimeout(function() {
                    On("AllLotteryGames-XoSo")
                }, 2e3))
            }
            const Ae = async () => {
                let q;
                if (m.value == "1") {
                    const ht = pe(o.query.day).format("YYYY-MM-DD HH:mm:ss");
                    q = await at(Ca({
                        dateTime: ht
                    }))
                } else m.value == "2" && (q = await at(Na({
                    are: c.value,
                    typeId: Number(d.value)
                })));
                q.data.length == 0 && ni();
                let j = q.data.find(ht => ht.day == o.query.day);
                R.value = j.day;
                let X = j.areInfos.find(ht => (ht == null ? void 0 : ht.areId) == c.value);
                const dt = X == null ? void 0 : X.serverTime;
                if (b.value = X.areIssueNos.find(ht => ht.code == d.value), b.value || ni(), m.value == "1") {
                    const ht = X == null ? void 0 : X.closingTime;
                    clearInterval(ce.value), hi(new Date(dt.replace(/-/g, "/")).getTime(), new Date(ht.replace(/-/g, "/")).getTime())
                } else m.value == "2" && (Wt.value = (new Date(b.value.endTime.replace(/-/g, "/")).getTime() - new Date(dt.replace(/-/g, "/")).getTime()) / 1e3, clearInterval(Et.value), Ee())
            };
            let qe = null;
            const Bi = v(""),
                Sn = v(),
                ai = async (q = !1) => {
                    var dt, ht, Ft, Ut, ue, de, bt, It;
                    if (g.value || m.value != "2") return;
                    let j, X = !0;
                    if (ye.value === "GameRecord") {
                        if (j = await at(Ta({
                                pageSize: 10,
                                pageNo: 1,
                                areId: c.value,
                                typeId: Number(d.value)
                            })), j) {
                            if (((ht = (dt = j.data) == null ? void 0 : dt.list) == null ? void 0 : ht.length) > 0 && (Bi.value.trim().length == 0 || Bi.value != ((Ut = (Ft = j.data) == null ? void 0 : Ft.list[0]) == null ? void 0 : Ut.issueNumber)) && (X = !1, Bi.value = (de = (ue = j.data) == null ? void 0 : ue.list[0]) == null ? void 0 : de.issueNumber), X == !0 && q) {
                                clearTimeout(qe), qe = setTimeout(() => {
                                    ai(!0)
                                }, 1e3);
                                return
                            }
                            $.value = (bt = j.data) == null ? void 0 : bt.list[0], Sn.value = j.data, Jt(() => {
                                F.value.getData(!1, Sn.value)
                            })
                        }
                    } else if (ye.value === "MyGameRecord" && (j = await at(zs({
                            areId: c.value,
                            typeId: Number(d.value)
                        })), j && j.data && j.data.openingResult && j.data.openingResult.length > 0 && (X = !1, Bi.value = (It = j.data) == null ? void 0 : It.issueNumber, $.value = j.data), X == !0 && q)) {
                        clearTimeout(qe), qe = setTimeout(() => {
                            ai(!0)
                        }, 1e3);
                        return
                    }
                };

            function Qa() {
                let q = JSON.parse(sessionStorage.getItem("xosoList") || ""),
                    j = [];
                for (let X = 0; X < q.areInfos.length; X++) j.push({
                    text: l("code" + q.areInfos[X].areNameCode),
                    value: q.areInfos[X].areId,
                    disabled: !0,
                    info: q.areInfos[X].areIssueNos
                });
                z.value = j
            }

            function Ya(q, j) {
                var X;
                if (d.value == q.code) {
                    Re.value = !1;
                    return
                }
                Zi(), c.value = j, r.value = q.nameCode, d.value = q.code, L.value = 0, B.value = 0, I.value = f.value.length > 0 ? (X = f == null ? void 0 : f.value[0]) == null ? void 0 : X.categoryId : 1, Re.value = !1, Za(q, j), b.value = q, q.type == "2" && (Le.value = !1, ai()), Ae(), xn(), Jt(() => {
                    ye.value === "MyGameRecord" && F.value.getData(!0)
                })
            }

            function Za(q, j) {
                const X = jo("hash");
                X.code = q == null ? void 0 : q.code, X.nameCode = q == null ? void 0 : q.nameCode, X.type = q == null ? void 0 : q.type, X.areId = j
            }
            const xn = async () => {
                    var j, X, dt, ht, Ft, Ut, ue, de;
                    Rn(), ie();
                    let q;
                    m.value == "1" ? q = await at(Bs({
                        areaId: c.value
                    })) : m.value == "2" && (q = await at(Is({
                        areaId: c.value,
                        typeId: Number(d.value)
                    }))), q && (f.value = (X = (j = q.data) == null ? void 0 : j.areaConfigList[0]) == null ? void 0 : X.gameCategoryList, localStorage.setItem("gameCategoryList", JSON.stringify((dt = q.data.areaConfigList[0]) == null ? void 0 : dt.gameCategoryList)), P.value = (Ft = (ht = f == null ? void 0 : f.value[0]) == null ? void 0 : ht.gamePlayList[0]) == null ? void 0 : Ft.playNameCode, x.value = (ue = (Ut = f == null ? void 0 : f.value[0]) == null ? void 0 : Ut.gamePlayList[0]) == null ? void 0 : ue.playId, I.value = (de = f == null ? void 0 : f.value[0]) == null ? void 0 : de.categoryId, Ki())
                },
                Ja = (q, j) => {
                    ie(), L.value = j, I.value = q, B.value = 0, x.value = f == null ? void 0 : f.value[j].gamePlayList[0].playId, G.value = f.value[j].gamePlayList[0].betType, P.value = f.value[j].gamePlayList[0].playNameCode, Be.value = 0, Ki()
                },
                to = (q, j, X, dt) => {
                    B.value = j, x.value = q, P.value = X, G.value = Number(dt), Be.value = 0, Ki(), ie()
                },
                Ki = async () => {
                    var j, X, dt, ht, Ft, Ut, ue, de, bt, It, ne, St, Ji, jn, Hn, Wn, Fn, Vn, Un, Kn, Xn;
                    Rn();
                    let q;
                    m.value == "1" ? q = await at(Ss({
                        areaId: c.value,
                        categoryId: I.value,
                        playId: x.value
                    })) : m.value == "2" && (q = await at(xs({
                        areaId: c.value,
                        categoryId: I.value,
                        playId: x.value
                    }))), lt.value = (j = q.data) == null ? void 0 : j.betMethod, kt.value = (X = q.data) == null ? void 0 : X.betScopeConfig, At.value = (dt = q.data) == null ? void 0 : dt.isThreeNumber, gt.value = (ht = q.data) == null ? void 0 : ht.betNumber, Rt.value = (Ft = q.data) == null ? void 0 : Ft.fastSpeciaSelectNo, ft.value = (Ut = q.data) == null ? void 0 : Ut.fastRandomType, $t.value = (ue = q.data) == null ? void 0 : ue.fastSpeciaType, ti.value = (de = q.data) == null ? void 0 : de.playOddInfo.defaultOdds, K.value = (bt = q.data) == null ? void 0 : bt.playOddInfo.oddsOrAmount, zt.value = (It = q.data) == null ? void 0 : It.playOddInfo.bettingAmount, xt.value = (St = (ne = q.data) == null ? void 0 : ne.fastRandomSelecNo) == null ? void 0 : St.split(",").map(Number), ct.value = (jn = (Ji = q.data) == null ? void 0 : Ji.playOddInfo.bettingMultiple) == null ? void 0 : jn.split(",").map(Number), Qt.value = (Wn = (Hn = q.data) == null ? void 0 : Hn.playOddInfo.bettingMultiple) == null ? void 0 : Wn.split(",")[0], We.value = (Fn = q.data) == null ? void 0 : Fn.perBetNumber, I.value == 8 && (wt.value = (Vn = q.data) == null ? void 0 : Vn.funPlayOddList), eo((Un = q.data) == null ? void 0 : Un.betMethod), no((Kn = q.data) == null ? void 0 : Kn.betNumber), ao((Xn = q.data) == null ? void 0 : Xn.isThreeNumber)
                },
                eo = q => {
                    q != null && q.includes("1") ? J.value = 1 : I.value === 4 || I.value === 8 ? J.value == 1 : J.value = 3
                },
                io = (q, j) => {
                    Ot.value = q.oddTypeName, ee.value = q.oddsOrAmount, W.value = [Ot.value], jt(3, gt.value)
                },
                no = q => {
                    q == 10 ? Ie.value = 1 : q == 8 ? Ie.value = 2 : q == 4 ? Ie.value = 3 : q == 3 ? Ie.value = 4 : q == 2 ? Ie.value = 5 : Ie.value = 0
                },
                ao = q => {
                    q == 1 && (Gt.value = vt.value.split("/")[0][0].toString())
                },
                Rn = () => {
                    J.value = 1, K.value = 0, zt.value = 0, ct.value = [], lt.value = "", kt.value = "", xt.value = [], At.value = 0, gt.value = 0, Rt.value = "", ft.value = 0, $t.value = 0, _t.value = 1e3, Gt.value = ""
                },
                ie = () => {
                    it.value = [], st.value = [], Y.value = [], Z.value = [], W.value = [], nt.value = 0, Ot.value = "1000", Ge.value = 0, fe.value = 0, Qt.value = 1, Lt.value = "", _t.value = 1e3, Jt(() => {
                        _.value && _.value.cleardata()
                    })
                },
                oo = q => {
                    Lt.value = q;
                    let X = q.split(",").flatMap(dt => dt.split("|"));
                    W.value = X.map(String), jt(J.value, gt.value)
                },
                so = (q, j, X, dt) => {
                    q == "Thousand" ? dt == "all" ? it.value = Ii(j, X) : dt == "big" ? it.value = $e(j, X, "big", 0) : dt == "small" ? it.value = $e(j, X, "small", 0) : dt == "odd" ? it.value = we(j, X, "odd", 0) : it.value = we(j, X, "even", 0) : q == "hundred" ? dt == "all" ? st.value = Ii(j, X) : dt == "big" ? st.value = $e(j, X, "big", 0) : dt == "small" ? st.value = $e(j, X, "small", 0) : dt == "odd" ? st.value = we(j, X, "odd", 0) : st.value = we(j, X, "even", 0) : q == "ten" ? dt == "all" ? Y.value = Ii(j, X) : dt == "big" ? Y.value = $e(j, X, "big", 0) : dt == "small" ? Y.value = $e(j, X, "small", 0) : dt == "odd" ? Y.value = we(j, X, "odd", 0) : Y.value = we(j, X, "even", 0) : dt == "all" ? Z.value = Ii(j, X) : dt == "big" ? Z.value = $e(j, X, "big", 0) : dt == "small" ? Z.value = $e(j, X, "small", 0) : dt == "odd" ? Z.value = we(j, X, "odd", 0) : Z.value = we(j, X, "even", 0), jt(J.value, gt.value)
                },
                lo = (q, j) => {
                    if (q == 0) j == "even" ? (ie(), W.value = we(0, 99, "even", 2), jt(J.value, gt.value)) : j == "big" ? (ie(), W.value = $e(0, 99, "big", 2), jt(J.value, gt.value)) : j == "small" ? (ie(), W.value = $e(0, 99, "small", 2), jt(J.value, gt.value)) : j == "odd" ? (ie(), W.value = we(0, 99, "odd", 2), jt(J.value, gt.value)) : (ie(), W.value = Qn(0, 99, 2), jt(J.value, gt.value));
                    else {
                        let X = Number(vt.value.split("/")[0]),
                            dt = Number(vt.value.split("/")[1]);
                        j == "even" ? (ie(), W.value = we(X, dt, "even", 3), jt(J.value, gt.value)) : j == "big" ? (ie(), W.value = $e(X, dt, "big", 3), jt(J.value, gt.value)) : j == "small" ? (ie(), W.value = $e(X, dt, "small", 3), jt(J.value, gt.value)) : j == "odd" ? (ie(), W.value = we(X, dt, "odd", 3), jt(J.value, gt.value)) : (ie(), W.value = Qn(X, dt, 3), jt(J.value, gt.value))
                    }
                },
                co = (q, j, X) => {
                    if (q == "") {
                        let dt = j + "" + X;
                        W.value.includes(dt) ? W.value = W.value.filter(function(ht) {
                            return ht != dt
                        }) : W.value.push(dt)
                    } else {
                        let dt = q + "" + j + X;
                        W.value.includes(dt) ? W.value = W.value.filter(function(ht) {
                            return ht != dt
                        }) : W.value.push(dt)
                    }
                    jt(J.value, gt.value)
                },
                ro = (q, j) => {
                    q == "Thousand" ? it.value.includes(j) ? it.value = it.value.filter(function(X) {
                        return X != j
                    }) : it.value.push(j) : q == "Hundred" ? st.value.includes(j) ? st.value = st.value.filter(function(X) {
                        return X != j
                    }) : st.value.push(j) : q == "ten" ? Y.value.includes(j) ? Y.value = Y.value.filter(function(X) {
                        return X != j
                    }) : Y.value.push(j) : Z.value.includes(j) ? Z.value = Z.value.filter(function(X) {
                        return X != j
                    }) : Z.value.push(j), jt(J.value, gt.value)
                },
                uo = (q, j) => {
                    Be.value = j, vt.value = q, _t.value = 1e3, Gt.value = vt.value.split("/")[0][0].toString(), ie()
                },
                po = (q, j, X) => {
                    if (_t.value = j, X == 0) W.value = Yn(Number(q) * gt.value, 0, 99, X), jt(J.value, gt.value);
                    else {
                        let dt = Number(vt.value.split("/")[0]),
                            ht = Number(vt.value.split("/")[1]);
                        W.value = Yn(Number(q), dt, ht, X), jt(J.value, gt.value)
                    }
                },
                go = q => {
                    J.value = q, ie()
                },
                bo = () => {
                    Vt.value = !1, ie()
                },
                mo = q => {},
                _o = () => {
                    ii.value = !1, vi.value = !0
                },
                vo = () => {
                    Vt.value = !1, Qt.value = 1, jt(J.value, gt.value)
                },
                Gn = () => {
                    const q = f.value[L.value].gamePlayList[B.value].availableBetNumber,
                        j = f.value[L.value].gamePlayList[B.value].eachIssueBetMaxWinningAmount;
                    return fe.value > q ? Dt(l("xosoTip1", [q])) : Ge.value > j ? Dt(l("xosoTip2", [j])) : !0
                },
                ho = async () => {
                    var j, X, dt, ht;
                    if (Gn() === !0) {
                        if (fe.value > 5e3) return Dt(l("xosoTxt94"));
                        if (J.value == 1)(j = kt.value) != null && j.includes("4") ? Z.value.length > 0 && Y.value.length > 0 && st.value.length > 0 && it.value.length > 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : (X = kt.value) != null && X.includes("3") ? Z.value.length > 0 && Y.value.length > 0 && st.value.length > 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : (dt = kt.value) != null && dt.includes("2") ? Z.value.length > 0 && Y.value.length > 0 && I.value != 4 || Y.value.length > 0 && I.value == 4 ? Vt.value = !0 : Dt(l("xosoTxt95")) : (ht = kt.value) != null && ht.includes("1") ? Z.value.length > 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : W.value.length > 0 && I.value == 8 ? Vt.value = !0 : Dt(l("xosoTxt95"));
                        else if (J.value == 3) An(gt.value, W.value);
                        else if (J.value == 2) {
                            if (!Ys.inputrule.test(Lt.value)) return Dt({
                                message: l(Zs.inputtip),
                                wordBreak: "break-word"
                            });
                            for (let Ft = 0; Ft < W.value.length; Ft++)
                                if (W.value[Ft].toString().length != We.value) return Dt(l("xosoTxt95"));
                            if (Rs(W.value)) return Dt(l("xosoTxt98"));
                            An(gt.value, W.value)
                        } else I.value == 8 && W.value.length === 1 ? Vt.value = !0 : Dt(l("xosoTxt95"));
                        jt(J.value, gt.value)
                    }
                },
                An = (q, j) => {
                    q == 1 ? j.length > 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : q == 2 ? j.length % 2 == 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : q == 3 ? j.length % 3 == 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : q == 4 ? j.length % 4 == 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : q == 8 ? j.length % 8 == 0 ? Vt.value = !0 : Dt(l("xosoTxt95")) : q == 10 && (j.length % 10 == 0 ? Vt.value = !0 : Dt(l("xosoTxt95")))
                },
                Xi = v(null),
                ko = async () => {
                    Xi.value && clearTimeout(Xi.value), Xi.value = setTimeout(async () => {
                        var Ut, ue, de;
                        if (ae.value) return _e({
                            message: l("xosoTip6"),
                            wordBreak: "break-word"
                        });
                        if (!le.value || Gn() !== !0) return;
                        let j = [],
                            X = "";
                        if (J.value == 1 ? kt.value.toString().includes("4") ? X = it.value.join("|") + "," + st.value.join("|") + "," + Y.value.join("|") + "," + Z.value.join("|") : kt.value.toString().includes("3") ? X = st.value.join("|") + "," + Y.value.join("|") + "," + Z.value.join("|") : kt.value.toString().includes("2") ? I.value == 4 ? X = Y.value.join(",") : X = Y.value.join("|") + "," + Z.value.join("|") : I.value == 4 ? (X = Z.value.join(","), J.value = 3) : I.value == 8 && (X = W.value[0]) : [2, 3].includes(J.value) ? gt.value == 1 ? X = W.value.join(",") : gt.value == 2 ? X = W.value.reduce((It, ne, St) => (St % 2 === 0 && It.push(ne + "|" + W.value[St + 1]), It), []).join(",") : gt.value == 3 ? X = W.value.reduce((It, ne, St) => (St % 3 === 0 && It.push(ne + "|" + W.value[St + 1] + "|" + W.value[St + 2]), It), []).join(",") : gt.value == 4 ? X = W.value.reduce((It, ne, St) => (St % 4 === 0 && It.push(ne + "|" + W.value[St + 1] + "|" + W.value[St + 2] + "|" + W.value[St + 3]), It), []).join(",") : gt.value == 8 ? X = W.value.reduce((It, ne, St) => (St % 8 === 0 && It.push(ne + "|" + W.value[St + 1] + "|" + W.value[St + 2] + "|" + W.value[St + 3] + "|" + W.value[St + 4] + "|" + W.value[St + 5] + "|" + W.value[St + 6] + "|" + W.value[St + 7]), It), []).join(",") : X = W.value.reduce((It, ne, St) => (St % 10 === 0 && It.push(ne + "|" + W.value[St + 1] + "|" + W.value[St + 2] + "|" + W.value[St + 3] + "|" + W.value[St + 4] + "|" + W.value[St + 5] + "|" + W.value[St + 6] + "|" + W.value[St + 7] + "|" + W.value[St + 8] + "|" + W.value[St + 9]), It), []).join(",") : I.value === 8 && gt.value == 1 && (X = W.value[0], fe.value = gt.value), [4, 8].includes(I.value) && (J.value = 3), X.replace(",", "").trim().length == 0 || fe.value == 0) return;
                        j.push({
                            bettingParentType: I.value,
                            bettingType: G.value,
                            bettingFormat: J.value,
                            bettingContent: X,
                            totalBetting: fe.value,
                            initialAmount: zt.value,
                            bettingMultiple: Qt.value,
                            defaultOdds: ti.value
                        });
                        let [dt, ht] = [null, null], Ft = ra((Ut = b.value) == null ? void 0 : Ut.issueNo);
                        if (m.value == "1" ? [dt, ht] = await te(Gs({
                                areId: c.value,
                                issueNo: (ue = b.value) == null ? void 0 : ue.issueNo,
                                xosoBettingData: j
                            })) : m.value == "2" && ([dt, ht] = await te(As({
                                areId: c.value,
                                typeId: Number(d.value),
                                issueNo: (de = b.value) == null ? void 0 : de.issueNo,
                                xosoBettingData: j
                            }))), ht) {
                            I.value === 4 && (J.value = 1), Vt.value = !1;
                            const bt = Mn(ht == null ? void 0 : ht.msgCode, ht == null ? void 0 : ht.msg);
                            pt.value = bt, Be.value = 0, ie(), Yi(), ye.value === "MyGameRecord" && F.value.getData(), setTimeout(() => {
                                Pn(Ft)
                            }, Number(Wt.value * 1e3) + 5e3)
                        } else {
                            Vt.value = !1;
                            const bt = Mn(ht == null ? void 0 : ht.msgCode, ht == null ? void 0 : ht.msg);
                            pt.value = bt
                        }
                    }, 500)
                },
                fo = () => {
                    setTimeout(() => {
                        et.value && (et.value = !1)
                    }, 1500)
                },
                Mn = (q, j) => {
                    let X = "";
                    switch (q) {
                        case 345:
                            X = l("xosoTip2", [j]), y.value = !0;
                            break;
                        case 346:
                            X = l("xosoTip3"), y.value = !0;
                            break;
                        case 347:
                            X = l("xosoTip3"), y.value = !0;
                            break;
                        case 348:
                            X = l("xosoTip1", [j]), y.value = !0;
                            break;
                        case 349:
                            X = l("xosoTip4"), y.value = !0;
                            break;
                        default:
                            X = "code" + q, et.value = !0, fo();
                            break
                    }
                    return X
                },
                yo = () => {
                    y.value = !1
                };
            let Qi = null;
            async function Pn(q) {
                if (g.value || m.value != "2") return;
                const j = await at(Ms({
                    issueNo: q
                }));
                if (j) {
                    if (j.data.status == 1) {
                        clearTimeout(Qi), Qi = setTimeout(() => {
                            Pn(q)
                        }, 1e3);
                        return
                    }
                    zi.value.showMark(j.data), ye.value === "MyGameRecord" && F.value.getData()
                }
            }
            const $o = q => {
                    q <= 0 || (q >= 5e4 ? Qt.value = 5e4 : Qt.value = q), jt(J.value, gt.value)
                },
                wo = (q, j) => {
                    ot.value = j, Qt.value = q, jt(J.value, gt.value)
                },
                Dn = q => {
                    switch (q) {
                        case 1:
                            Qt.value > 1 && (Qt.value--, jt(J.value, gt.value));
                            break;
                        case 2:
                            Qt.value++, jt(J.value, gt.value);
                            break
                    }
                },
                jt = (q, j) => {
                    j != 0 && (fe.value = To(q, j), Ge.value = fe.value * zt.value * Qt.value * ti.value, I.value === 8 ? nt.value = ee.value : nt.value = K.value)
                },
                To = (q, j) => {
                    let X = 0;
                    if (q == 1) {
                        let dt = it.value.length,
                            ht = st.value.length,
                            Ft = Y.value.length,
                            Ut = Z.value.length;
                        return kt.value.toString().includes("4") ? X = dt * ht * Ft * Ut : kt.value.toString().includes("3") ? X = ht * Ft * Ut : kt.value.toString().includes("2") ? I.value === 4 ? X = Ft : X = Ft * Ut : kt.value.toString().includes("1") ? X = Ut : I.value === 8 && (X = 1), X
                    } else {
                        if (q == 3) return X = Math.floor(W.value.length / j), X;
                        if (q == 2) return W.value.length == 1 && W.value[0] == "1" ? X = 0 : X = Math.floor(W.value.length / j), X
                    }
                    return X
                },
                Co = () => {
                    i.go(-1)
                },
                On = q => {
                    var j;
                    i.push({
                        name: q,
                        query: {
                            id: (j = o.query) == null ? void 0 : j.id
                        }
                    })
                },
                Yi = async () => {
                    const q = await at(mn());
                    q && (ei.value = (q == null ? void 0 : q.data.amount) || 0)
                };

            function No(q) {
                ye.value = q, ye.value == "GameRecord" && Jt(() => {
                    F.value.getData()
                })
            }
            Qa(), Ae(), m.value == "2" && ai(), xn(), Yi();

            function Zi() {
                clearInterval(ce.value), clearInterval(Et.value), clearTimeout(qe), clearTimeout(Qi)
            }
            pn(() => {
                g.value = !0, Zi()
            });
            const Lo = qo();
            return Pt(Lo, (q, j) => {
                q === "visible" && j === "hidden" ? (Ae(), m.value == "2" && ai(), Yi()) : Zi()
            }), (q, j) => {
                var ue, de;
                const X = H("NavBar"),
                    dt = H("van-field"),
                    ht = H("van-checkbox"),
                    Ft = H("van-button"),
                    Ut = H("van-popup");
                return n(), a(S, null, [t("div", m9, [N(X, {
                    "left-arrow": "",
                    onClickLeft: Co,
                    class: "main"
                }, {
                    center: D(() => [t("div", {
                        class: "centercity",
                        onClick: j[0] || (j[0] = bt => Re.value = !0)
                    }, [E(e(p.value) + " ", 1), _9])]),
                    _: 1
                }), w("彩种及玩法"), N(S6, {
                    gameCategoryList: f.value,
                    colortab: L.value,
                    playtab: B.value,
                    onColorupdate: Ja,
                    onUpdate: to
                }, null, 8, ["gameCategoryList", "colortab", "playtab"]), w("玩法说明"), m.value == "1" ? (n(), tt(s6, {
                    key: 0,
                    defaultcityname: p.value,
                    defaultplayname: P.value,
                    defaultexpiredate: R.value,
                    colorId: I.value,
                    issue: (ue = b.value) == null ? void 0 : ue.issueNo,
                    time: O.value,
                    odds: K.value,
                    areId: c.value
                }, null, 8, ["defaultcityname", "defaultplayname", "defaultexpiredate", "colorId", "issue", "time", "odds", "areId"])) : m.value == "2" ? (n(), tt(z6, {
                    key: 1,
                    defaultcityname: p.value,
                    defaultplayname: P.value,
                    colorId: I.value,
                    issue: (de = b.value) == null ? void 0 : de.issueNo,
                    time: Yt.value,
                    odds: K.value,
                    areId: c.value,
                    resultList: $.value,
                    isShowPreparing: ae.value
                }, null, 8, ["defaultcityname", "defaultplayname", "colorId", "issue", "time", "odds", "areId", "resultList", "isShowPreparing"])) : w("v-if", !0), w("趣味玩法"), I.value === 8 ? (n(), tt(x4, {
                    key: 2,
                    funplaylist: wt.value,
                    numbercon: Ot.value,
                    onSelectvalue: io
                }, null, 8, ["funplaylist", "numbercon"])) : (n(), a(S, {
                    key: 3
                }, [w("选择号码，输入号码，快捷选号"), N(C4, {
                    ref_key: "numberselectRef",
                    ref: _,
                    methodList: lt.value,
                    activeTab: J.value,
                    randomList: xt.value,
                    randomtype: ft.value,
                    specialtype: $t.value,
                    isthreenumber: At.value,
                    speciaSelectNo: Rt.value,
                    isShowMark: Le.value,
                    betconfig: kt.value,
                    hundred: Gt.value,
                    groupTab: _t.value,
                    thousandnumList: it.value,
                    hundrednumList: st.value,
                    tennumList: Y.value,
                    indicualnumList: Z.value,
                    quicknumList: W.value,
                    intervalnumber: ze.value,
                    intervalTab: Be.value,
                    onTabupdate: go,
                    onSelectgroup: po,
                    onSelectinterval: uo,
                    onBetNum: ro,
                    onBetQuickNum: co,
                    onGetselect: so,
                    onGetquick: lo,
                    onInputblur: oo
                }, null, 8, ["methodList", "activeTab", "randomList", "randomtype", "specialtype", "isthreenumber", "speciaSelectNo", "isShowMark", "betconfig", "hundred", "groupTab", "thousandnumList", "hundrednumList", "tennumList", "indicualnumList", "quicknumList", "intervalnumber", "intervalTab"])], 2112)), w("投注记录和比赛结果"), N(K4, {
                    record: ye.value,
                    onChangeC: No
                }, null, 8, ["record"]), w(" 动态展示对应的组件 "), (n(), tt(Xe, null, [(n(), tt(je(Ui[ye.value]), {
                    ref_key: "RecordComponent",
                    ref: F,
                    ApiFun: qt.value,
                    areId: c.value,
                    cityCode: d.value,
                    parmas: k,
                    gVSs: m.value
                }, null, 8, ["ApiFun", "areId", "cityCode", "parmas", "gVSs"]))], 1024)), w("foot"), N(W4, {
                    betNumber: fe.value,
                    betSum: Ge.value,
                    onPlayBet: ho
                }, null, 8, ["betNumber", "betSum"]), w(" 中奖提示组件 "), N(b9, {
                    ref_key: "WinningTipsRef",
                    ref: zi
                }, null, 512)]), w("下注弹窗"), N(Ut, {
                    show: Vt.value,
                    "onUpdate:show": j[8] || (j[8] = bt => Vt.value = bt),
                    "close-on-click-overlay": !1,
                    class: "popup",
                    position: "bottom"
                }, {
                    default: D(() => [t("div", v9, [t("div", {
                        class: "close",
                        onClick: bo
                    }, [t("img", {
                        class: "img",
                        src: u(ge)("main", "close")
                    }, null, 8, h9)]), t("div", k9, e(q.$t("bettingnumber")), 1), I.value === 6 || c.value === 2 && I.value === 1 && x.value === 4 || c.value === 3 && I.value === 1 && x.value === 4 || c.value === 1 && I.value === 1 && x.value === 5 ? (n(), a("div", f9, e(q.$t("xosoTxt93")), 1)) : w("v-if", !0), J.value == 2 || J.value == 3 ? (n(), a("div", {
                        key: 1,
                        class: M("c-row c-flex-warp compound" + J.value)
                    }, [t("div", {
                        class: M("c-row item item" + Ie.value + "-" + We.value)
                    }, [t("div", y9, [t("div", $9, [(n(!0), a(S, null, A(W.value, (bt, It) => (n(), a("div", {
                        class: "num c-row c-row-middle-center",
                        key: It
                    }, e(bt), 1))), 128))])])], 2)], 2)) : w("v-if", !0), J.value == 1 ? (n(), a("div", w9, [it.value.length > 0 ? (n(), a("div", T9, [t("div", C9, e(q.$t("xosoTxt87")), 1), t("div", N9, [(n(!0), a(S, null, A(it.value, (bt, It) => (n(), a("div", {
                        class: "num",
                        key: It
                    }, e(bt), 1))), 128))])])) : w("v-if", !0), st.value.length > 0 ? (n(), a("div", L9, [t("div", z9, e(q.$t("xosoTxt88")), 1), t("div", B9, [(n(!0), a(S, null, A(st.value, (bt, It) => (n(), a("div", {
                        class: "num",
                        key: It
                    }, e(bt), 1))), 128))])])) : w("v-if", !0), Y.value.length > 0 ? (n(), a("div", I9, [t("div", S9, e(q.$t("xosoTxt89")), 1), t("div", x9, [(n(!0), a(S, null, A(Y.value, (bt, It) => (n(), a("div", {
                        class: "num",
                        key: It
                    }, e(bt), 1))), 128))])])) : w("v-if", !0), Z.value.length > 0 ? (n(), a("div", R9, [t("div", G9, e(q.$t("xosoTxt90")), 1), t("div", A9, [(n(!0), a(S, null, A(Z.value, (bt, It) => (n(), a("div", {
                        class: "num",
                        key: It
                    }, e(bt), 1))), 128))])])) : w("v-if", !0), W.value.length > 0 ? (n(), a("div", M9, [t("div", P9, [(n(!0), a(S, null, A(W.value, (bt, It) => (n(), a("div", {
                        class: "num",
                        key: It
                    }, e(bt), 1))), 128))])])) : w("v-if", !0)])) : w("v-if", !0), t("div", D9, [t("div", O9, [t("div", E9, e(q.$t("multiple")), 1), t("div", q9, [t("div", {
                        class: "li minus",
                        onClick: j[1] || (j[1] = bt => Dn(1))
                    }, "-"), N(dt, {
                        class: "digit-box",
                        modelValue: Qt.value,
                        "onUpdate:modelValue": j[2] || (j[2] = bt => Qt.value = bt),
                        type: "digit",
                        maxlength: 5,
                        onInput: j[3] || (j[3] = bt => $o(Qt.value))
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "li plus c-row c-row-middle-center",
                        onClick: j[4] || (j[4] = bt => Dn(2))
                    }, "+")])]), t("div", j9, [t("div", H9, [(n(!0), a(S, null, A(ct.value, (bt, It) => (n(), a("div", {
                        class: M(Qt.value == bt ? "action li" : "li"),
                        onClick: ne => wo(bt, It)
                    }, " X" + e(bt), 11, W9))), 256))])]), t("div", F9, [t("div", V9, [E(e(q.$t("quantity")) + " ", 1), U9, t("span", K9, e(fe.value || 0) + e(q.$t("note")), 1)]), t("div", X9, [E(e(q.$t("odds")), 1), Q9, E(), t("span", Y9, e(nt.value), 1)])]), t("div", Z9, [t("div", J9, [E(e(q.$t("walletBalance")) + " ", 1), t("span", tN, e(u(Bt)(ei.value)), 1)])]), t("div", eN, [t("div", iN, [E(e(q.$t("betAmounts")), 1), t("span", nN, e(u(Bt)(Ge.value)), 1)])]), Ge.value > ei.value ? (n(), a("div", aN, [t("div", oN, [t("img", {
                        src: u(Xt)("home/AllLotteryGames/NewVietnam", "tip")
                    }, null, 8, sN), E(e(q.$t("insufficientWallet")), 1)]), t("div", {
                        class: "txt bg333",
                        onClick: j[5] || (j[5] = bt => On("Recharge"))
                    }, e(q.$t("torecharge")) + " >>", 1)])) : w("v-if", !0), t("div", lN, [N(ht, {
                        modelValue: vi.value,
                        "onUpdate:modelValue": j[6] || (j[6] = bt => vi.value = bt),
                        shape: "square",
                        "checked-color": "#F4453E",
                        onChange: mo
                    }, {
                        default: D(() => [t("div", cN, e(q.$t("agree")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("span", {
                        class: "txt",
                        onClick: j[7] || (j[7] = bt => ii.value = !0)
                    }, e(q.$t("presaleRules")), 1)])])]), t("div", rN, [t("div", uN, [N(Ft, {
                        class: "btn",
                        block: "",
                        onClick: vo
                    }, {
                        default: D(() => [t("span", null, e(q.$t("cancel")), 1)]),
                        _: 1
                    })]), t("div", dN, [N(Ft, {
                        class: M(["btn", {
                            noActive: !le.value
                        }]),
                        block: "",
                        onClick: ko
                    }, {
                        default: D(() => [t("span", pN, e(q.$t("betting")), 1)]),
                        _: 1
                    }, 8, ["class"])])])]),
                    _: 1
                }, 8, ["show"]), w("顶部弹窗"), N(Ut, {
                    class: "areBox",
                    show: Re.value,
                    "onUpdate:show": j[10] || (j[10] = bt => Re.value = bt),
                    round: "",
                    position: "bottom",
                    style: {
                        overflow: "initial"
                    }
                }, {
                    default: D(() => [t("div", gN, [t("img", {
                        class: "close",
                        src: u(ge)("main", "close"),
                        alt: "",
                        onClick: j[9] || (j[9] = () => Re.value = !1)
                    }, null, 8, bN), (n(!0), a(S, null, A(z.value, (bt, It) => (n(), a("div", {
                        class: "items",
                        key: It
                    }, [t("h1", null, e(bt.text), 1), t("div", mN, [(n(!0), a(S, null, A(bt.info, (ne, St) => (n(), a("div", {
                        key: St,
                        class: M({
                            isActive: d.value == ne.code
                        }),
                        onClick: Ji => Ya(ne, bt.value)
                    }, e(q.$t("code" + ne.nameCode)), 11, _N))), 128))])]))), 128))])]),
                    _: 1
                }, 8, ["show"]), w("预售规则"), N(Ut, {
                    show: ii.value,
                    "onUpdate:show": j[11] || (j[11] = bt => ii.value = bt),
                    class: "PreSaleRule",
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: D(() => [t("div", vN, [t("div", hN, e(u(l)("presaleRules")), 1), t("div", kN, e(q.$t("betPopTXT")), 1), t("div", fN, [t("div", {
                        class: "btn",
                        onClick: _o
                    }, e(u(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"]), w("提示"), N(Ut, {
                    show: et.value,
                    "onUpdate:show": j[12] || (j[12] = bt => et.value = bt),
                    class: "Tips",
                    "close-on-click-overlay": !0
                }, {
                    default: D(() => [t("div", null, [pt.value == "code402" ? (n(), a("img", {
                        key: 0,
                        src: u(ge)("home/AllLotteryGames/NewVietnam", "success")
                    }, null, 8, yN)) : (n(), a("img", {
                        key: 1,
                        src: u(ge)("home/AllLotteryGames/NewVietnam", "fail")
                    }, null, 8, $N)), t("div", wN, e(q.$t(pt.value)), 1)])]),
                    _: 1
                }, 8, ["show"]), N(xe, {
                    show: y.value,
                    "onUpdate:show": j[13] || (j[13] = bt => y.value = bt),
                    onConfirm: yo,
                    confirmText: u(l)("confirm"),
                    showCancelBtn: !1
                }, {
                    content: D(() => [t("div", TN, e(pt.value ? q.$t(pt.value) : ""), 1)]),
                    _: 1
                }, 8, ["show", "confirmText"])], 64)
            }
        }
    });
const NN = U(CN, [
        ["__scopeId", "data-v-b1e14027"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/NewVietnam/index.vue"]
    ]),
    HA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: NN
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    LN = {
        class: "Play__C"
    },
    zN = {
        class: "title"
    },
    BN = ["src"],
    IN = {
        class: "info"
    },
    SN = ["src"],
    xN = {
        class: "sub"
    },
    RN = {
        class: "text"
    },
    GN = {
        class: "info_text"
    },
    AN = {
        class: "forexample"
    },
    MN = {
        key: 0,
        class: "betting"
    },
    PN = {
        class: "result"
    },
    DN = {
        key: 0,
        class: "info_item"
    },
    ON = ["src"],
    EN = {
        class: "sub"
    },
    qN = {
        class: "text"
    },
    jN = {
        key: 1,
        class: "info_text"
    },
    HN = {
        class: "forexample"
    },
    WN = {
        class: "result"
    },
    FN = V({
        __name: "NorthPlay",
        setup(s) {
            const {
                t: i
            } = mt(), o = v(0), l = Kt([{
                title: i("xosoTab1"),
                subList: [{
                    sub: i("xosoSub1"),
                    num: "［45］",
                    resultTip: i("xosoTxt3", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["27", "2"])
                    }]
                }, {
                    sub: i("xosoSub2"),
                    num: "［45］",
                    resultTip: i("xosoTxt5"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt4")
                    }]
                }, {
                    sub: i("xosoSub3"),
                    num: "［45］",
                    resultTip: i("xosoTxt6", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["27", "2"])
                    }]
                }, {
                    sub: i("xosoSub4"),
                    num: "［456］",
                    resultTip: i("xosoTxt9", ["23"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt8")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["23", "3"])
                    }]
                }, {
                    sub: i("xosoSub5"),
                    num: "［4567］",
                    resultTip: i("xosoTxt11", ["20"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt10")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["20", "4"])
                    }]
                }]
            }, {
                title: i("xosoTab2"),
                subList: [{
                    sub: i("xosoSub6"),
                    num: "［45/55］",
                    resultTip: i("xosoTxt14", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["2"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["27", "2", "2"])
                    }]
                }, {
                    sub: i("xosoSub7"),
                    num: "［45/55/65］",
                    resultTip: i("xosoTxt15", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["3"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["27", "3", "2"])
                    }]
                }, {
                    sub: i("xosoSub8"),
                    num: "［45/55/65/75］",
                    resultTip: i("xosoTxt16", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["27", "4", "2"])
                    }]
                }]
            }, {
                title: i("xosoTab3"),
                subList: [{
                    sub: i("xosoSub9"),
                    num: "［45］",
                    resultTip: i("xosoTxt19"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt17")
                    }]
                }, {
                    sub: i("xosoSub18"),
                    num: "［45］",
                    resultTip: i("xosoTxt23"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt21")
                    }]
                }, {
                    sub: i("xosoSub11"),
                    num: "［45］",
                    resultTip: i("xosoTxt27"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt25")
                    }]
                }, {
                    sub: i("xosoSub12"),
                    num: "［45］",
                    resultTip: i("xosoTxt35"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt34")
                    }]
                }, {
                    sub: i("xosoSub13"),
                    num: "［45］",
                    resultTip: i("xosoTxt37"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt36")
                    }]
                }]
            }, {
                title: i("xosoTab4"),
                subList: [{
                    sub: i("xosoSub17"),
                    num: "［4］",
                    resultTip: i("xosoTxt31"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt29")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt30")
                    }]
                }, {
                    sub: i("xosoTxt100"),
                    num: "［4］",
                    resultTip: i("xosoTxt33"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt101")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt102")
                    }]
                }]
            }, {
                title: i("xosoTab5"),
                subList: [{
                    sub: i("xosoSub19"),
                    num: "［456］",
                    resultTip: i("xosoTxt41"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt38")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt39")
                    }]
                }, {
                    sub: i("xosoSub20"),
                    num: "［456］",
                    resultTip: i("xosoTxt45"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt44")
                    }]
                }, {
                    sub: i("xosoSub21"),
                    num: "［456］",
                    resultTip: i("xosoTxt49"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt47")
                    }]
                }, {
                    sub: i("xosoSub22"),
                    num: "［456］",
                    resultTip: i("xosoTxt55"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt54")
                    }]
                }]
            }, {
                title: i("xosoTab6"),
                subList: [{
                    sub: i("xosoSub25"),
                    num: "［4567］",
                    resultTip: i("xosoTxt53"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt51")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt52")
                    }]
                }]
            }, {
                title: i("xosoTab7"),
                subList: [{
                    sub: i("xosoSub26"),
                    num: "［45/55/66/77］",
                    resultTip: i("xosoTxt57", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["27"])
                    }]
                }, {
                    sub: i("xosoSub27"),
                    num: "［45/55/66/77/88/99/11/22］",
                    resultTip: i("xosoTxt58", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["8"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["27"])
                    }]
                }, {
                    sub: i("xosoSub28"),
                    num: "［45/55/66/77/88/99/11/22/33/44］",
                    resultTip: i("xosoTxt59", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["10"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["27"])
                    }]
                }]
            }, {
                title: i("xosoTab8"),
                subList: [{
                    sub: i("xosoTxt60"),
                    num: "",
                    resultTip: i("xosoTxt66"),
                    txtList: [{
                        bet: i("xosoTxt60"),
                        betTip: i("xosoTxt61")
                    }, {
                        bet: i("big"),
                        betTip: i("xosoTxt62")
                    }, {
                        bet: i("small"),
                        betTip: i("xosoTxt63")
                    }, {
                        bet: i("xosoTxt69"),
                        betTip: i("xosoTxt64")
                    }, {
                        bet: i("xosoTxt70"),
                        betTip: i("xosoTxt65")
                    }]
                }]
            }]);
            return (g, m) => {
                const r = H("van-tab"),
                    c = H("van-tabs");
                return n(), a("div", LN, [N(c, {
                    active: o.value,
                    "onUpdate:active": m[0] || (m[0] = p => o.value = p),
                    type: "card"
                }, {
                    default: D(() => [(n(!0), a(S, null, A(l, (p, d) => (n(), tt(r, {
                        title: p.title,
                        key: d
                    }, {
                        default: D(() => [(n(!0), a(S, null, A(p.subList, (_, b) => (n(), a("div", {
                            class: "Play__C-Cotent",
                            key: b
                        }, [t("div", zN, [t("img", {
                            src: u(ge)("home/AllLotteryGames/NewVietnam", "Star")
                        }, null, 8, BN), t("span", null, e(_.sub), 1)]), t("div", IN, [(n(!0), a(S, null, A(_.txtList, (k, T) => (n(), a("div", {
                            class: "info_item",
                            key: T
                        }, [t("img", {
                            src: u(Xt)("public", "Triangle")
                        }, null, 8, SN), t("span", xN, e(k.bet), 1), t("div", RN, e(k.betTip), 1)]))), 128)), t("div", GN, [t("div", AN, e(u(i)("forexample")), 1), _.num ? (n(), a("div", MN, e(u(i)("betting")) + "：" + e(_.num), 1)) : w("v-if", !0), t("div", PN, e(u(i)("result")) + "：" + e(_.resultTip), 1)]), o.value === 7 ? (n(), a("div", DN, [t("img", {
                            src: u(Xt)("public", "Triangle")
                        }, null, 8, ON), t("span", EN, e(u(i)("xosoTxt71")), 1), t("div", qN, e(u(i)("xosoTxt67")), 1)])) : w("v-if", !0), o.value === 7 ? (n(), a("div", jN, [t("div", HN, e(u(i)("forexample")), 1), t("div", WN, e(u(i)("result")) + "： " + e(u(i)("xosoTxt68")), 1)])) : w("v-if", !0)])]))), 128))]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const VN = U(FN, [
        ["__scopeId", "data-v-b67ec5ce"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/NorthPlay.vue"]
    ]),
    Ni = s => (Ct("data-v-33026085"), s = s(), Nt(), s),
    UN = {
        class: "NorthRule__C"
    },
    KN = {
        class: "NorthRule__C-title"
    },
    XN = {
        class: "NorthRule__C-tips"
    },
    QN = Ni(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    YN = {
        class: "title"
    },
    ZN = {
        class: "text"
    },
    JN = {
        class: "table"
    },
    tL = {
        class: "table-row header-time"
    },
    eL = {
        class: "table-time-1"
    },
    iL = Ni(() => t("div", {
        class: "table-time-1"
    }, "18:15", -1)),
    nL = {
        class: "table-row header-week"
    },
    aL = {
        class: "table-week-1"
    },
    oL = {
        class: "table-week-1"
    },
    sL = {
        class: "table-cell-1"
    },
    lL = {
        class: "table-cell-1"
    },
    cL = Ni(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    rL = {
        class: "title"
    },
    uL = {
        class: "text"
    },
    dL = {
        key: 0,
        class: "text"
    },
    pL = {
        key: 1,
        class: "text"
    },
    gL = {
        class: "NorthRule__C-Rule"
    },
    bL = {
        class: "NorthRule__C-Struct"
    },
    mL = Ni(() => t("span", {
        class: "left"
    }, null, -1)),
    _L = Ni(() => t("span", {
        class: "right"
    }, null, -1)),
    vL = {
        class: "table-rule"
    },
    hL = {
        class: "table-header"
    },
    kL = {
        class: "table-header-cell"
    },
    fL = {
        class: "table-header-cell"
    },
    yL = {
        class: "table-header-cell"
    },
    $L = {
        class: "table-cell"
    },
    wL = {
        class: "table-cell"
    },
    TL = {
        class: "table-cell"
    },
    CL = {
        class: "table-rule"
    },
    NL = {
        class: "table-header"
    },
    LL = {
        class: "table-header-cell"
    },
    zL = {
        key: 0,
        class: "table-box-title"
    },
    BL = V({
        __name: "NorthRule",
        setup(s) {
            const {
                t: i
            } = mt(), o = Kt([{
                title: "01",
                sub: i("resultsVielottery")
            }, {
                title: "02",
                sub: i("systemresult")
            }, {
                title: "03",
                sub: i("lotterytime")
            }]), l = Kt([{
                title: "04",
                sub: i("oddsmiscalculated")
            }, {
                title: "05",
                sub: i("oddsbettingprincipal")
            }, {
                title: "06",
                sub: i("oddsfluctuate")
            }, {
                title: "07",
                sub: i("oncebetgenerated")
            }, {
                title: "08",
                sub: i("anyreasonCauses")
            }, {
                title: "09",
                sub: i("platformcancel"),
                sub1: i("drawdelayedtoolong"),
                sub2: i("resultsofthelotterybeenleaked")
            }]), g = Kt([{
                week: i("Monday"),
                addressList: i("Hanoi")
            }, {
                week: i("Tuesday"),
                addressList: i("quangNinh")
            }, {
                week: i("Wednesday"),
                addressList: i("bacninh")
            }, {
                week: i("Thursday"),
                addressList: i("Hanoi")
            }, {
                week: i("Friday"),
                addressList: i("haiphong")
            }, {
                week: i("Saturday"),
                addressList: i("nanning")
            }, {
                week: i("Sunday"),
                addressList: i("taiping")
            }]), m = Kt([{
                title: i("GrandPrize"),
                quantity: 1,
                number: i("fivedigits"),
                drawsNumber: ["29818"]
            }, {
                title: i("FirstPrize"),
                quantity: 1,
                number: i("fivedigits"),
                drawsNumber: ["69388"]
            }, {
                title: i("SecondPrize"),
                quantity: 2,
                number: i("fivedigits"),
                drawsNumber: ["66992", "95797"]
            }, {
                title: i("ThirdPrize"),
                quantity: 6,
                number: i("fivedigits"),
                drawsNumber: ["99095", "32620", "51685", "12345", "69548", "69874"]
            }, {
                title: i("FourPrize"),
                quantity: 4,
                number: i("fourdigits"),
                drawsNumber: ["6545", "5257", "7896", "3682"]
            }, {
                title: i("FivePrize"),
                quantity: 6,
                number: i("fourdigits"),
                drawsNumber: ["4567", "8533", "7632", "7632", "6673", "7855"]
            }, {
                title: i("SixPrize"),
                quantity: 3,
                number: i("fourdigits"),
                drawsNumber: ["567", "642", "934"]
            }, {
                title: i("SevenPrize"),
                quantity: 4,
                number: i("seconddigits"),
                drawsNumber: ["48", "64", "32", "51"]
            }, {
                title: i("intotal"),
                quantity: i("lotteryawards"),
                number: ""
            }]);
            return (r, c) => (n(), a("div", UN, [t("div", KN, e(u(i)("northVieLotteryGameRules")), 1), t("div", XN, e(u(i)("precautions")), 1), (n(!0), a(S, null, A(o, (p, d) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: d
            }, [QN, t("div", YN, e(p.title), 1), t("div", ZN, e(p.sub), 1)]))), 128)), t("div", JN, [t("div", tL, [t("div", eL, e(u(i)("winTrxTime")), 1), iL]), t("div", nL, [t("div", aL, e(u(i)("weeks")), 1), t("div", oL, e(u(i)("northLotteryCities")), 1)]), (n(!0), a(S, null, A(g, (p, d) => (n(), a("div", {
                class: "table-row",
                key: d
            }, [t("div", sL, e(p.week), 1), t("div", lL, e(p.addressList), 1)]))), 128))]), (n(!0), a(S, null, A(l, (p, d) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: d
            }, [cL, t("div", rL, e(p.title), 1), t("div", uL, e(p.sub), 1), p.sub1 ? (n(), a("div", dL, e(p.sub1), 1)) : w("v-if", !0), p.sub2 ? (n(), a("div", pL, e(p.sub2), 1)) : w("v-if", !0)]))), 128)), t("div", gL, e(u(i)("northernLotteryGameRules")), 1), t("div", bL, [mL, E(e(u(i)("colorstructure")), 1), _L]), t("div", vL, [t("div", hL, [t("div", kL, e(u(i)("Lottery")), 1), t("div", fL, e(u(i)("numberofPrizes")), 1), t("div", yL, e(u(i)("Number")), 1)]), (n(!0), a(S, null, A(m, (p, d) => (n(), a("div", {
                class: "table-row",
                key: d
            }, [t("div", $L, e(p.title), 1), t("div", wL, e(p.quantity), 1), t("div", TL, e(p.number), 1)]))), 128))]), t("div", CL, [t("div", NL, [t("div", LL, e(u(i)("sorthlotteryresult")), 1)]), (n(!0), a(S, null, A(m, (p, d) => (n(), a("div", {
                class: M(d == 8 ? "table-box none" : "table-box"),
                key: d
            }, [d != 8 ? (n(), a("div", zL, e(p.title), 1)) : w("v-if", !0), (n(!0), a(S, null, A(p.drawsNumber, (_, b) => (n(), a("div", {
                class: "table-box-number",
                key: b
            }, e(_), 1))), 128))], 2))), 128))])]))
        }
    });
const IL = U(BL, [
        ["__scopeId", "data-v-33026085"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/NorthRule.vue"]
    ]),
    SL = {
        class: "Play__C"
    },
    xL = {
        class: "title"
    },
    RL = ["src"],
    GL = {
        class: "info"
    },
    AL = ["src"],
    ML = {
        class: "sub"
    },
    PL = {
        class: "text"
    },
    DL = {
        class: "info_text"
    },
    OL = {
        class: "forexample"
    },
    EL = {
        key: 0,
        class: "betting"
    },
    qL = {
        class: "result"
    },
    jL = {
        key: 0,
        class: "info_item"
    },
    HL = ["src"],
    WL = {
        class: "sub"
    },
    FL = {
        class: "text"
    },
    VL = {
        key: 1,
        class: "info_text"
    },
    UL = {
        class: "forexample"
    },
    KL = {
        class: "result"
    },
    XL = V({
        __name: "SorthPlay",
        setup(s) {
            const {
                t: i
            } = mt(), o = v(0), l = Kt([{
                title: i("xosoTab1"),
                subList: [{
                    sub: i("xosoSub1"),
                    num: "［45］",
                    resultTip: i("xosoTxt3", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["18", "2"])
                    }]
                }, {
                    sub: i("xosoSub3"),
                    num: "［45］",
                    resultTip: i("xosoTxt6", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["18", "2"])
                    }]
                }, {
                    sub: i("xosoSub4"),
                    num: "［456］",
                    resultTip: i("xosoTxt9", ["17"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt8")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["17", "3"])
                    }]
                }, {
                    sub: i("xosoSub5"),
                    num: "［4567］",
                    resultTip: i("xosoTxt11", ["16"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt10")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["16", "4"])
                    }]
                }]
            }, {
                title: i("xosoTab2"),
                subList: [{
                    sub: i("xosoSub6"),
                    num: "［45/55］",
                    resultTip: i("xosoTxt14", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["2"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["18", "2", "2"])
                    }]
                }, {
                    sub: i("xosoSub7"),
                    num: "［45/55/65］",
                    resultTip: i("xosoTxt15", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["3"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["18", "3", "2"])
                    }]
                }, {
                    sub: i("xosoSub8"),
                    num: "［45/55/65/75］",
                    resultTip: i("xosoTxt16", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["18", "4", "2"])
                    }]
                }]
            }, {
                title: i("xosoTab3"),
                subList: [{
                    sub: i("xosoSub14"),
                    num: "［45］",
                    resultTip: i("xosoTxt20"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt18")
                    }]
                }, {
                    sub: i("xosoSub15"),
                    num: "［45］",
                    resultTip: i("xosoTxt24"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt22")
                    }]
                }, {
                    sub: i("xosoSub16"),
                    num: "［45］",
                    resultTip: i("xosoTxt28"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt26")
                    }]
                }]
            }, {
                title: i("xosoTab4"),
                subList: [{
                    sub: i("xosoSub17"),
                    num: "［4］",
                    resultTip: i("xosoTxt31"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt29")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt30")
                    }]
                }, {
                    sub: i("xosoTxt100"),
                    num: "［4］",
                    resultTip: i("xosoTxt33"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt101")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt102")
                    }]
                }]
            }, {
                title: i("xosoTab5"),
                subList: [{
                    sub: i("xosoSub23"),
                    num: "［456］",
                    resultTip: i("xosoTxt42"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt38")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt40")
                    }]
                }, {
                    sub: i("xosoSub20"),
                    num: "［456］",
                    resultTip: i("xosoTxt45"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt44")
                    }]
                }, {
                    sub: i("xosoSub24"),
                    num: "［456］",
                    resultTip: i("xosoTxt50"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt48")
                    }]
                }]
            }, {
                title: i("xosoTab6"),
                subList: [{
                    sub: i("xosoSub25"),
                    num: "［4567］",
                    resultTip: i("xosoTxt53"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt51")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt52")
                    }]
                }]
            }, {
                title: i("xosoTab7"),
                subList: [{
                    sub: i("xosoSub26"),
                    num: "［45/55/66/77］",
                    resultTip: i("xosoTxt57", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["18"])
                    }]
                }, {
                    sub: i("xosoSub27"),
                    num: "［45/55/66/77/88/99/11/22］",
                    resultTip: i("xosoTxt58", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["8"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["18"])
                    }]
                }, {
                    sub: i("xosoSub28"),
                    num: "［45/55/66/77/88/99/11/22/33/44］",
                    resultTip: i("xosoTxt59", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["10"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["18"])
                    }]
                }]
            }, {
                title: i("xosoTab8"),
                subList: [{
                    sub: i("xosoTxt60"),
                    num: "",
                    resultTip: i("xosoTxt66"),
                    txtList: [{
                        bet: i("xosoTxt60"),
                        betTip: i("xosoTxt61")
                    }, {
                        bet: i("big"),
                        betTip: i("xosoTxt62")
                    }, {
                        bet: i("small"),
                        betTip: i("xosoTxt63")
                    }, {
                        bet: i("xosoTxt69"),
                        betTip: i("xosoTxt64")
                    }, {
                        bet: i("xosoTxt70"),
                        betTip: i("xosoTxt65")
                    }]
                }]
            }]);
            return (g, m) => {
                const r = H("van-tab"),
                    c = H("van-tabs");
                return n(), a("div", SL, [N(c, {
                    active: o.value,
                    "onUpdate:active": m[0] || (m[0] = p => o.value = p),
                    type: "card"
                }, {
                    default: D(() => [(n(!0), a(S, null, A(l, (p, d) => (n(), tt(r, {
                        title: p.title,
                        key: d
                    }, {
                        default: D(() => [(n(!0), a(S, null, A(p.subList, (_, b) => (n(), a("div", {
                            class: "Play__C-Cotent",
                            key: b
                        }, [t("div", xL, [t("img", {
                            src: u(ge)("home/AllLotteryGames/NewVietnam", "Star")
                        }, null, 8, RL), t("span", null, e(_.sub), 1)]), t("div", GL, [(n(!0), a(S, null, A(_.txtList, (k, T) => (n(), a("div", {
                            class: "info_item",
                            key: T
                        }, [t("img", {
                            src: u(Xt)("public", "Triangle")
                        }, null, 8, AL), t("span", ML, e(k.bet), 1), t("div", PL, e(k.betTip), 1)]))), 128)), t("div", DL, [t("div", OL, e(u(i)("forexample")), 1), _.num ? (n(), a("div", EL, e(u(i)("betting")) + "：" + e(_.num), 1)) : w("v-if", !0), t("div", qL, e(u(i)("result")) + "：" + e(_.resultTip), 1)]), o.value === 7 ? (n(), a("div", jL, [t("img", {
                            src: u(Xt)("public", "Triangle")
                        }, null, 8, HL), t("span", WL, e(u(i)("xosoTxt71")), 1), t("div", FL, e(u(i)("xosoTxt67")), 1)])) : w("v-if", !0), o.value === 7 ? (n(), a("div", VL, [t("div", UL, e(u(i)("forexample")), 1), t("div", KL, e(u(i)("result")) + "： " + e(u(i)("xosoTxt68")), 1)])) : w("v-if", !0)])]))), 128))]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const QL = U(XL, [
        ["__scopeId", "data-v-19e150a9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/SorthPlay.vue"]
    ]),
    _i = s => (Ct("data-v-7bb580e6"), s = s(), Nt(), s),
    YL = {
        class: "NorthRule__C"
    },
    ZL = {
        class: "NorthRule__C-title"
    },
    JL = {
        class: "NorthRule__C-tips"
    },
    tz = _i(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    ez = {
        class: "title"
    },
    iz = {
        class: "text"
    },
    nz = {
        class: "table"
    },
    az = {
        class: "table-row header-time"
    },
    oz = {
        class: "table-time-1"
    },
    sz = _i(() => t("div", {
        class: "table-time-1"
    }, "16:20(GMT+7)", -1)),
    lz = _i(() => t("div", {
        class: "table-time-1"
    }, "17:15(GMT+7)", -1)),
    cz = {
        class: "table-row header-week"
    },
    rz = {
        class: "table-week-1"
    },
    uz = {
        class: "table-week-1"
    },
    dz = {
        class: "table-week-1"
    },
    pz = {
        class: "table-cell-1"
    },
    gz = {
        class: "table-cell-2"
    },
    bz = _i(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    mz = {
        class: "title"
    },
    _z = {
        class: "text"
    },
    vz = {
        key: 0,
        class: "text"
    },
    hz = {
        key: 1,
        class: "text"
    },
    kz = {
        class: "NorthRule__C-Rule"
    },
    fz = {
        class: "NorthRule__C-Struct"
    },
    yz = _i(() => t("span", {
        class: "left"
    }, null, -1)),
    $z = _i(() => t("span", {
        class: "right"
    }, null, -1)),
    wz = {
        class: "table-rule"
    },
    Tz = {
        class: "table-header"
    },
    Cz = {
        class: "table-header-cell"
    },
    Nz = {
        class: "table-header-cell"
    },
    Lz = {
        class: "table-header-cell"
    },
    zz = {
        class: "table-cell"
    },
    Bz = {
        class: "table-cell"
    },
    Iz = {
        class: "table-cell"
    },
    Sz = {
        class: "table-rule"
    },
    xz = {
        class: "table-header"
    },
    Rz = {
        class: "table-header-cell"
    },
    Gz = {
        key: 0,
        class: "table-box-title"
    },
    Az = V({
        __name: "SorthRule",
        setup(s) {
            const {
                t: i
            } = mt(), o = Kt([{
                title: "01",
                sub: i("resultsVielottery")
            }, {
                title: "02",
                sub: i("systemresult")
            }, {
                title: "03",
                sub: i("lotterytime1")
            }]), l = Kt([{
                title: "04",
                sub: i("oddsmiscalculated")
            }, {
                title: "05",
                sub: i("oddsbettingprincipal")
            }, {
                title: "06",
                sub: i("oddsfluctuate")
            }, {
                title: "07",
                sub: i("oncebetgenerated")
            }, {
                title: "08",
                sub: i("anyreasonCauses")
            }, {
                title: "09",
                sub: i("platformcancel"),
                sub1: i("drawdelayedtoolong"),
                sub2: i("resultsofthelotterybeenleaked")
            }]), g = Kt([{
                week: i("Monday"),
                addressList: [i("hochiminhcity"), i("sametower"), i("camua"), i("fuan"), i("hue")]
            }, {
                week: i("Tuesday"),
                addressList: [i("BenTre"), i("VungTau"), i("BacLieu"), i("Guangnan"), i("Dole")]
            }, {
                week: i("Wednesday"),
                addressList: [i("DongNai"), i("CanTho"), i("Shuozhuang"), i("danang"), i("Qinghe")]
            }, {
                week: i("Thursday"),
                addressList: [i("Xining"), i("Anjiang"), i("smooth"), i("putdown"), i("QuangBinh"), i("Koji")]
            }, {
                week: i("Friday"),
                addressList: [i("VinhLong"), i("BinhDuong"), i("ChaRong"), i("Carai"), i("NinhThun")]
            }, {
                week: i("Saturday"),
                addressList: [i("hochiminhcity"), i("LongAn"), i("Pingfu"), i("Houjiang"), i("danang"), i("Generalized"), i("Denon")]
            }, {
                week: i("Sunday"),
                addressList: [i("Qianjiang"), i("jianjiang"), i("DaLat"), i("Qinghe"), i("KonTum")]
            }]), m = Kt([{
                title: i("GrandPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["575333"]
            }, {
                title: i("FirstPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["34521"]
            }, {
                title: i("SecondPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["34675"]
            }, {
                title: i("ThirdPrize"),
                quantity: 2,
                number: i("seconddigits"),
                drawsNumber: ["34575", "45732"]
            }, {
                title: i("FourPrize"),
                quantity: 7,
                number: i("sevendigits"),
                drawsNumber: ["43211", "23545", "78023", "46954", "32463", "23478", "34522"]
            }, {
                title: i("FivePrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["6425"]
            }, {
                title: i("SixPrize"),
                quantity: 3,
                number: i("threedigits"),
                drawsNumber: ["66992", "95797", "4356"]
            }, {
                title: i("SevenPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["69388"]
            }, {
                title: i("EightPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["12"]
            }, {
                title: i("intotal"),
                quantity: i("eightlotteryawards"),
                number: ""
            }]), r = c => c.slice().reverse();
            return (c, p) => (n(), a("div", YL, [t("div", ZL, e(u(i)("sorthVieLotteryGameRules")), 1), t("div", JL, e(u(i)("precautions")), 1), (n(!0), a(S, null, A(o, (d, _) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: _
            }, [tz, t("div", ez, e(d.title), 1), t("div", iz, e(d.sub), 1)]))), 128)), t("div", nz, [t("div", az, [t("div", oz, e(u(i)("winTrxTime")), 1), sz, lz]), t("div", cz, [t("div", rz, e(u(i)("weeks")), 1), t("div", uz, e(u(i)("sorthLotteryCities")), 1), t("div", dz, e(u(i)("middleLotteryCities")), 1)]), (n(!0), a(S, null, A(g, (d, _) => (n(), a("div", {
                class: "table-row",
                key: _
            }, [t("div", pz, e(d.week), 1), t("div", gz, [(n(!0), a(S, null, A(d.addressList, (b, k) => (n(), a("div", {
                class: "table-column-1",
                key: k
            }, e(b), 1))), 128))])]))), 128))]), (n(!0), a(S, null, A(l, (d, _) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: _
            }, [bz, t("div", mz, e(d.title), 1), t("div", _z, e(d.sub), 1), d.sub1 ? (n(), a("div", vz, e(d.sub1), 1)) : w("v-if", !0), d.sub2 ? (n(), a("div", hz, e(d.sub2), 1)) : w("v-if", !0)]))), 128)), t("div", kz, e(u(i)("sorthernLotteryGameRules")), 1), t("div", fz, [yz, E(e(u(i)("colorstructure")), 1), $z]), t("div", wz, [t("div", Tz, [t("div", Cz, e(u(i)("Lottery")), 1), t("div", Nz, e(u(i)("numberofPrizes")), 1), t("div", Lz, e(u(i)("Number")), 1)]), (n(!0), a(S, null, A(m, (d, _) => (n(), a("div", {
                class: "table-row",
                key: _
            }, [t("div", zz, e(d.title), 1), t("div", Bz, e(d.quantity), 1), t("div", Iz, e(d.number), 1)]))), 128))]), t("div", Sz, [t("div", xz, [t("div", Rz, e(u(i)("sorthlotteryresult")), 1)]), (n(!0), a(S, null, A(r(m), (d, _) => (n(), a("div", {
                class: M(_ == 0 ? "table-box none" : "table-box"),
                key: _
            }, [_ != 0 ? (n(), a("div", Gz, e(d.title), 1)) : w("v-if", !0), (n(!0), a(S, null, A(d.drawsNumber, (b, k) => (n(), a("div", {
                class: "table-box-number",
                key: k
            }, e(b), 1))), 128))], 2))), 128))])]))
        }
    });
const Mz = U(Az, [
        ["__scopeId", "data-v-7bb580e6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/NewVietnam/SorthRule.vue"]
    ]),
    Pz = {
        class: "vietnamPlay__C"
    },
    Dz = {
        key: 0,
        class: "play"
    },
    Oz = {
        key: 1,
        class: "play"
    },
    Ez = {
        key: 0,
        class: "northrule"
    },
    qz = {
        key: 1,
        class: "sorthrule"
    },
    jz = V({
        __name: "index",
        setup(s) {
            var r, c;
            const i = rt(),
                o = v(0),
                l = i.currentRoute.value.query.id,
                g = ((c = (r = i.currentRoute.value.query) == null ? void 0 : r.gVSs) == null ? void 0 : c.toString()) || "",
                m = () => {
                    i.go(-1)
                };
            return (p, d) => {
                const _ = H("NavBar"),
                    b = H("van-tab"),
                    k = H("van-tabs");
                return n(), a("div", Pz, [N(_, {
                    "left-arrow": "",
                    title: p.$t("lotteryManual"),
                    onClickLeft: m,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
                }, null, 8, ["title"]), N(k, {
                    active: o.value,
                    "onUpdate:active": d[0] || (d[0] = T => o.value = T),
                    type: "card",
                    class: M({
                        dis: u(g) == "2"
                    })
                }, {
                    default: D(() => [N(b, {
                        title: p.$t("gamePlay")
                    }, {
                        default: D(() => [u(l) == "1" ? (n(), a("div", Dz, [N(VN)])) : (n(), a("div", Oz, [N(QL)]))]),
                        _: 1
                    }, 8, ["title"]), u(g) != "2" ? (n(), tt(b, {
                        key: 0,
                        title: p.$t("rule")
                    }, {
                        default: D(() => [u(l) == "1" ? (n(), a("div", Ez, [N(IL)])) : (n(), a("div", qz, [N(Mz)]))]),
                        _: 1
                    }, 8, ["title"])) : w("v-if", !0)]),
                    _: 1
                }, 8, ["active", "class"])])
            }
        }
    });
const Hz = U(jz, [
        ["__scopeId", "data-v-f14c68e9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/Play/index.vue"]
    ]),
    WA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Hz
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Va = s => (Ct("data-v-3e4c6499"), s = s(), Nt(), s),
    Wz = {
        class: "TimeLeft__C"
    },
    Fz = Va(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M23.67 3H12.33C6.66 3 5.25 4.515 5.25 10.56V27.45C5.25 31.44 7.44 32.385 10.095 29.535L10.11 29.52C11.34 28.215 13.215 28.32 14.28 29.745L15.795 31.77C17.01 33.375 18.975 33.375 20.19 31.77L21.705 29.745C22.785 28.305 24.66 28.2 25.89 29.52C28.56 32.37 30.735 31.425 30.735 27.435V10.56C30.75 4.515 29.34 3 23.67 3ZM11.67 18C10.845 18 10.17 17.325 10.17 16.5C10.17 15.675 10.845 15 11.67 15C12.495 15 13.17 15.675 13.17 16.5C13.17 17.325 12.495 18 11.67 18ZM11.67 12C10.845 12 10.17 11.325 10.17 10.5C10.17 9.675 10.845 9 11.67 9C12.495 9 13.17 9.675 13.17 10.5C13.17 11.325 12.495 12 11.67 12ZM24.345 17.625H16.095C15.48 17.625 14.97 17.115 14.97 16.5C14.97 15.885 15.48 15.375 16.095 15.375H24.345C24.96 15.375 25.47 15.885 25.47 16.5C25.47 17.115 24.96 17.625 24.345 17.625ZM24.345 11.625H16.095C15.48 11.625 14.97 11.115 14.97 10.5C14.97 9.885 15.48 9.375 16.095 9.375H24.345C24.96 9.375 25.47 9.885 25.47 10.5C25.47 11.115 24.96 11.625 24.345 11.625Z",
        fill: "currentColor"
    })], -1)),
    Vz = {
        class: "TimeLeft__C-name"
    },
    Uz = {
        class: "TimeLeft__C-num"
    },
    Kz = {
        class: "TimeLeft__C-id"
    },
    Xz = {
        class: "TimeLeft__C-text"
    },
    Qz = {
        class: "TimeLeft__C-time"
    },
    Yz = Va(() => t("div", null, ":", -1)),
    Zz = V({
        __name: "TimeLeft",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                })
            },
            winNum: {
                type: Array,
                default: [0, 0, 0, 0, 0]
            },
            gameName: {
                type: String,
                default: ""
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        setup(s) {
            const i = s,
                o = v(!1),
                l = Pe(),
                g = () => {
                    o.value = !0, l.getWinGoRule(i.currentGame.typeID)
                };
            return (m, r) => (n(), a(S, null, [t("div", Wz, [t("div", {
                class: "TimeLeft__C-rule",
                onClick: g
            }, [Fz, E(e(m.$t("winTrxIndicate")), 1)]), t("div", Vz, e(i.gameName.replace("<br />", " ")), 1), t("div", Uz, [(n(!0), a(S, null, A(s.winNum, (c, p) => (n(), a("div", {
                key: p,
                class: M(["n" + c])
            }, null, 2))), 128))]), t("div", Kz, e(i.currentInfo.gameNo), 1), t("div", Xz, e(m.$t("timeLeftToBuy")), 1), t("div", Qz, [t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), Yz, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), w(" 规则弹层 begin"), N(Di, {
                howPlayShow: o.value,
                gamePresentation: s.currentGame.gamePresentation,
                onClose: r[0] || (r[0] = c => o.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const Jz = U(Zz, [
        ["__scopeId", "data-v-3e4c6499"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/TimeLeft.vue"]
    ]),
    tB = s => (Ct("data-v-7f36fe93"), s = s(), Nt(), s),
    eB = {
        class: "Betting__Popup-head"
    },
    iB = {
        class: "Betting__Popup-head-title"
    },
    nB = {
        class: "Betting__Popup-head-selectName"
    },
    aB = {
        class: "Betting__Popup-body"
    },
    oB = {
        class: "Betting__Popup-body-line"
    },
    sB = {
        class: "Betting__Popup-body-line-list"
    },
    lB = ["onClick"],
    cB = {
        class: "Betting__Popup-body-line"
    },
    rB = {
        class: "Betting__Popup-body-line-btnL"
    },
    uB = {
        class: "Betting__Popup-body-line"
    },
    dB = tB(() => t("div", null, null, -1)),
    pB = {
        class: "Betting__Popup-body-line-list"
    },
    gB = ["onClick"],
    bB = {
        class: "Betting__Popup-body-line"
    },
    mB = {
        class: "Betting__Popup-foot"
    },
    _B = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    vB = {
        class: "Betting__Popup-PreSale"
    },
    hB = {
        class: "Betting__Popup-PreSale-head"
    },
    kB = {
        class: "Betting__Popup-PreSale-body"
    },
    fB = {
        class: "Betting__Popup-PreSale-foot"
    },
    yB = V({
        __name: "BettingPopup",
        props: {
            currentGame: {
                type: Object,
                default: () => ({})
            },
            selectInfo: {
                type: Object,
                default: () => ({})
            },
            bettingPopupShow: {
                type: Boolean,
                default: v(!1)
            },
            betTypeList: {
                type: Array,
                default: []
            },
            multipleList: {
                type: Array,
                default: () => [1, 5, 10, 20, 50, 100]
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = mt(),
                g = v(!1),
                m = v(!0),
                r = Q({
                    get() {
                        return o.bettingPopupShow || !1
                    },
                    set(y) {
                        i("update:bettingPopupShow", y)
                    }
                }),
                c = Q(() => {
                    switch (o.selectInfo.selecttype) {
                        case 13:
                            return l("big");
                        case 14:
                            return l("small");
                        case 10:
                            return l("redColor");
                        case 11:
                            return l("greenColor");
                        case 12:
                            return l("purpleColor");
                        default:
                            return o.selectInfo.selecttype
                    }
                }),
                p = Q(() => o.currentGame.typeName),
                d = y => {
                    switch (y) {
                        case 1:
                            o.selectInfo.count > 1 && (o.selectInfo.count--, h());
                            break;
                        case 2:
                            o.selectInfo.count++, h();
                            break
                    }
                },
                _ = y => {
                    y > 0 && (o.selectInfo.count = parseInt(y), h())
                },
                b = y => {
                    o.selectInfo.count = y, h()
                },
                k = y => {
                    o.selectInfo.coin = y, h()
                },
                T = () => {
                    g.value = !1, m.value = !0
                },
                C = () => {
                    if (o.selectInfo.count == 0) return Dt(l("bteNoCount"));
                    m.value ? i("submitBetting") : _e(l("agreePresaleRules"))
                },
                h = () => {
                    o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
                };
            return (y, z) => {
                const f = H("van-field"),
                    $ = H("van-popup"),
                    L = Ht("throttle-click");
                return n(), a(S, null, [w(" 投注内容 begin "), N($, {
                    show: r.value,
                    "onUpdate:show": z[6] || (z[6] = I => r.value = I),
                    position: "bottom",
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: D(() => [t("div", {
                        class: M([`Betting__Popup-${s.selectInfo.selecttype}`])
                    }, [t("div", eB, [t("div", iB, e(p.value.replace("<br />", " ")), 1), t("div", nB, [t("span", null, e(u(l)("choose")), 1), t("span", null, e(c.value), 1)])]), t("div", aB, [t("div", oB, [E(e(u(l)("amount")) + " ", 1), t("div", sB, [(n(!0), a(S, null, A(s.betTypeList, (I, B) => (n(), a("div", {
                        key: B,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.coin == I
                        }]),
                        onClick: x => k(I)
                    }, e(I), 11, lB))), 128))])]), t("div", cB, [E(e(u(l)("numbers")) + " ", 1), t("div", rB, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: s.selectInfo.count > 0
                        }]),
                        onClick: z[0] || (z[0] = I => d(1))
                    }, "-", 2), N(f, {
                        class: "Betting__Popup-input",
                        modelValue: s.selectInfo.count,
                        "onUpdate:modelValue": z[1] || (z[1] = I => s.selectInfo.count = I),
                        modelModifiers: {
                            number: !0
                        },
                        type: "digit",
                        maxlength: 4,
                        onInput: _
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: z[2] || (z[2] = I => d(2))
                    }, "+")])]), t("div", uB, [dB, t("div", pB, [(n(!0), a(S, null, A(s.multipleList, (I, B) => (n(), a("div", {
                        key: B,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.count == I
                        }]),
                        onClick: x => b(I)
                    }, " X" + e(I), 11, gB))), 128))])]), t("div", bB, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: m.value
                        }]),
                        onClick: z[3] || (z[3] = I => m.value = !m.value)
                    }, e(u(l)("agree")), 3), t("span", {
                        onClick: z[4] || (z[4] = I => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(u(l)("presaleRules")), 1)])]), t("div", mB, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: z[5] || (z[5] = I => i("clearBetting"))
                    }, e(u(l)("cancel")), 1), yt((n(), a("div", _B, [E(e(u(l)("totalAmount")) + " " + e(u(Bt)(s.selectInfo.count * s.selectInfo.coin || 0)), 1)])), [
                        [L, {
                            handler: C,
                            wait: 2e3
                        }]
                    ])])], 2)]),
                    _: 1
                }, 8, ["show"]), w(" 规则弹层 begin"), N($, {
                    show: g.value,
                    "onUpdate:show": z[7] || (z[7] = I => g.value = I),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: D(() => [t("div", vB, [t("div", hB, e(u(l)("presaleRules")), 1), t("div", kB, e(y.$t("betPopTXT")), 1), t("div", fB, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: T
                    }, e(u(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const $B = U(yB, [
        ["__scopeId", "data-v-7f36fe93"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/common/BettingPopup.vue"]
    ]),
    wB = {
        class: "Betting__C"
    },
    TB = {
        class: "Betting__C-mark"
    },
    CB = {
        class: "Betting__C-head"
    },
    NB = {
        class: "Betting__C-numC"
    },
    LB = ["onClick"],
    zB = {
        class: "Betting__C-multiple"
    },
    BB = ["onClick"],
    IB = {
        class: "Betting__C-foot"
    },
    SB = V({
        __name: "Betting",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({})
            },
            ProhibitBuyTime: {
                type: Number,
                default: 5
            },
            currentGame: {
                type: Object,
                default: () => ({})
            },
            bettingApiFun: {
                type: Function,
                required: !0
            }
        },
        emits: ["betting", "changeBettingP"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = Ai.global.t,
                m = Q(() => l.currentGame.betMultiple.split("|")),
                r = v(!1),
                c = v(""),
                p = v({
                    coin: 0,
                    count: m.value[0],
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: 1
                });
            Pt(() => m, () => {
                p.value.count = m.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            const d = v(null),
                _ = v(0),
                b = v(!1),
                k = Q(() => (l.currentInfo.passTime < l.ProhibitBuyTime && $(), l.currentInfo.passTime < l.ProhibitBuyTime)),
                T = Q(() => l.currentGame.typeID),
                C = Q(() => l.currentGame.scope ? l.currentGame.scope.split("|").map(I => Number(I)) : []),
                h = I => {
                    p.value.count = I, y()
                },
                y = () => {
                    p.value.allCoin = p.value.coin * p.value.count
                },
                z = (I, B, x) => {
                    p.value.gametype = x, p.value.selecttype = I, p.value.issuenumber = l.currentInfo.gameNo, p.value.typeid = T.value, p.value.coin = C.value[0], c.value = I, r.value = !0
                },
                f = () => {
                    b.value || (b.value = !0, d.value || (d.value = setInterval(function() {
                        _.value = Math.floor(Math.random() * 11)
                    }, 50)), setTimeout(function() {
                        _.value > 9 && (_.value = 9), clearInterval(d.value), b.value = !1, d.value = null, z(_.value, "color" + _.value, 1)
                    }, 5e3))
                },
                $ = () => {
                    r.value && (r.value = !1, p.value.coin = C.value[0], p.value.count = m.value[0], y(), o("changeBettingP", r.value))
                },
                L = async () => {
                    const I = await at(l.bettingApiFun({
                        typeId: p.value.typeid,
                        issuenumber: p.value.issuenumber,
                        amount: p.value.coin,
                        betCount: Number(p.value.count),
                        gameType: p.value.gametype,
                        selectType: p.value.selecttype
                    }));
                    (I == null ? void 0 : I.code) === 0 && (_e(g("code" + I.msgCode)), o("betting", p.value.issuenumber), $())
                };
            return i({
                bettingPopupShow: r
            }), (I, B) => (n(), a("div", wB, [yt(t("div", TB, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [
                [Zt, k.value]
            ]), t("div", CB, [t("div", {
                class: "Betting__C-head-g",
                onClick: B[0] || (B[0] = x => z(11, "#5CBA47", 0))
            }, e(I.$t("greenColor")), 1), t("div", {
                class: "Betting__C-head-p",
                onClick: B[1] || (B[1] = x => z(12, "#9831E9", 0))
            }, e(I.$t("purpleColor")), 1), t("div", {
                class: "Betting__C-head-r",
                onClick: B[2] || (B[2] = x => z(10, "#FB4E4E", 0))
            }, e(I.$t("redColor")), 1)]), t("div", NB, [(n(), a(S, null, A(10, (x, G) => t("div", {
                key: G,
                class: M([_.value == x ? "active" : "", "Betting__C-numC-item" + G]),
                onClick: P => z(G, "color" + G, 1)
            }, null, 10, LB)), 64))]), t("div", zB, [t("div", {
                class: "Betting__C-multiple-l",
                onClick: f
            }, e(I.$t("randomBet")), 1), (n(!0), a(S, null, A(m.value, (x, G) => (n(), a("div", {
                key: G,
                class: M(["Betting__C-multiple-r", {
                    active: p.value.count == x
                }]),
                onClick: P => h(x)
            }, " X" + e(x), 11, BB))), 128))]), t("div", IB, [t("div", {
                class: "Betting__C-foot-b",
                onClick: B[3] || (B[3] = x => z(13, "#ffc511", 2))
            }, e(I.$t("big")), 1), t("div", {
                class: "Betting__C-foot-s",
                onClick: B[4] || (B[4] = x => z(14, "#5CBA47", 2))
            }, e(I.$t("small")), 1)]), N($B, {
                currentGame: s.currentGame,
                selectInfo: p.value,
                bettingPopupShow: r.value,
                betTypeList: C.value,
                multipleList: m.value,
                onClearBetting: $,
                onSubmitBetting: L
            }, null, 8, ["currentGame", "selectInfo", "bettingPopupShow", "betTypeList", "multipleList"])]))
        }
    });
const Ua = U(SB, [
        ["__scopeId", "data-v-4aca9bd1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/Betting.vue"]
    ]),
    Vi = s => (Ct("data-v-481307ec"), s = s(), Nt(), s),
    xB = {
        class: "GameRecord__C"
    },
    RB = {
        class: "GameRecord__C-head"
    },
    GB = {
        class: "GameRecord__C-body"
    },
    AB = {
        key: 0
    },
    MB = {
        key: 1
    },
    PB = {
        class: "GameRecord__C-origin"
    },
    DB = Vi(() => t("div", {
        class: "GameRecord__C-origin-I red"
    }, null, -1)),
    OB = Vi(() => t("div", {
        class: "GameRecord__C-origin-I violet"
    }, null, -1)),
    EB = {
        key: 1,
        class: "GameRecord__C-origin-I green"
    },
    qB = {
        key: 2,
        class: "GameRecord__C-origin-I red"
    },
    jB = Vi(() => t("div", {
        class: "GameRecord__C-origin-I green"
    }, null, -1)),
    HB = Vi(() => t("div", {
        class: "GameRecord__C-origin-I violet"
    }, null, -1)),
    WB = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    FB = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    VB = {
        class: "GameRecord__C-foot-page"
    },
    UB = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        emits: ["changefive"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = v([]),
                m = v(4),
                r = v(10),
                c = v(1),
                p = () => {
                    c.value--, _()
                },
                d = () => {
                    c.value++, _()
                },
                _ = async (T = !1) => {
                    if (l.typeid == null) return;
                    T && (c.value = 1);
                    const [C, h] = await te(Ba({
                        pageSize: r.value,
                        pageNo: c.value,
                        typeId: l.typeid
                    }));
                    g.value = h.list || [], m.value = h.totalPage, T && o("changefive", h.list.slice(0, 5).map(y => y.number))
                },
                b = T => parseInt(T, 10) % 2 !== 0,
                k = T => {
                    let C = "";
                    switch (b(T) ? C = "greenColor" : C = "defaultColor", T) {
                        case "0":
                            C = "mixedColor0";
                            break;
                        case "5":
                            C = "mixedColor5";
                            break
                    }
                    return C
                };
            return i({
                getData: _
            }), he(() => {
                _()
            }), (T, C) => {
                const h = H("van-col"),
                    y = H("van-row"),
                    z = H("van-icon");
                return n(), a("div", xB, [t("div", RB, [N(y, null, {
                    default: D(() => [N(h, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(T.$t("betSerial")), 1)]),
                        _: 1
                    }), N(h, {
                        span: "5"
                    }, {
                        default: D(() => [E(e(T.$t("num")), 1)]),
                        _: 1
                    }), N(h, {
                        span: "5"
                    }, {
                        default: D(() => [E(e(T.$t("bigOrSmall")), 1)]),
                        _: 1
                    }), N(h, {
                        span: "6"
                    }, {
                        default: D(() => [E(e(T.$t("color")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", GB, [g.value.length ? (n(!0), a(S, {
                    key: 0
                }, A(g.value, (f, $) => (n(), tt(y, {
                    key: $
                }, {
                    default: D(() => [N(h, {
                        span: "8"
                    }, {
                        default: D(() => [E(e(f.issueNumber), 1)]),
                        _: 2
                    }, 1024), N(h, {
                        span: "5",
                        class: "numcenter"
                    }, {
                        default: D(() => [t("div", {
                            class: M(["GameRecord__C-body-num", k(f.number)])
                        }, e(f.number), 3)]),
                        _: 2
                    }, 1024), N(h, {
                        span: "5"
                    }, {
                        default: D(() => [Number(f.number) > 4 ? (n(), a("span", AB, e(T.$t("big")), 1)) : (n(), a("span", MB, e(T.$t("small")), 1))]),
                        _: 2
                    }, 1024), N(h, {
                        span: "6"
                    }, {
                        default: D(() => [t("div", PB, [f.number == "0" ? (n(), a(S, {
                            key: 0
                        }, [DB, OB], 64)) : w("v-if", !0), f.number == "1" || f.number == "3" || f.number == "7" || f.number == "9" ? (n(), a("div", EB)) : w("v-if", !0), f.number == "2" || f.number == "4" || f.number == "6" || f.number == "8" ? (n(), a("div", qB)) : w("v-if", !0), f.number == "5" ? (n(), a(S, {
                            key: 3
                        }, [jB, HB], 64)) : w("v-if", !0)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", WB, [N(re)]))]), g.value.length ? (n(), a("div", FB, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: c.value <= 1
                    }]),
                    onClick: p
                }, [N(z, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", VB, e(c.value) + "/" + e(m.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: c.value >= m.value
                    }]),
                    onClick: d
                }, [N(z, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const KB = U(UB, [
        ["__scopeId", "data-v-481307ec"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/GameRecord.vue"]
    ]),
    XB = {
        class: "Trend__C"
    },
    QB = {
        class: "Trend__C-head"
    },
    YB = {
        class: "Trend__C-body1"
    },
    ZB = {
        class: "Trend__C-body1-line"
    },
    JB = {
        class: "Trend__C-body1-line lottery"
    },
    tI = {
        key: 0,
        class: "Trend__C-body1-line-num"
    },
    eI = {
        key: 0,
        class: "Trend__C-body1-line"
    },
    iI = {
        class: "Trend__C-body1-line-num"
    },
    nI = {
        key: 1,
        class: "Trend__C-body1-line"
    },
    aI = {
        class: "Trend__C-body1-line-num"
    },
    oI = {
        key: 2,
        class: "Trend__C-body1-line"
    },
    sI = {
        class: "Trend__C-body1-line-num"
    },
    lI = {
        key: 3,
        class: "Trend__C-body1-line"
    },
    cI = {
        class: "Trend__C-body1-line-num"
    },
    rI = {
        class: "Trend__C-body2"
    },
    uI = ["IssueNumber", "Number", "Colour", "rowId"],
    dI = {
        class: "Trend__C-body2-IssueNumber"
    },
    pI = {
        class: "Trend__C-body2-Num"
    },
    gI = ["id"],
    bI = {
        key: 1,
        class: "Trend__C-body2-empty"
    },
    mI = {
        key: 0,
        class: "Trend__C-foot"
    },
    _I = {
        class: "Trend__C-foot-page"
    },
    vI = V({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            listApi: {
                type: Function,
                required: !0
            },
            EmerdApi: {
                type: Function,
                required: !0
            }
        },
        emits: ["changefive"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = v([]),
                m = v([]),
                r = v(),
                c = v(),
                p = v(),
                d = v(),
                _ = v(),
                b = v(1),
                k = v(4);

            function T() {
                Jt(() => {
                    for (let $ = 0; $ < m.value.length; $++) m.value[$ + 1] && C(m.value[$], m.value[$ + 1])
                })
            }

            function C($, L) {
                let I = parseInt($.number),
                    B = parseInt(L.number);
                var x = document.getElementById("myCanvas" + $.rowId);
                if (x && x.getContext) {
                    var G = x.getContext("2d");
                    G.clearRect(0, 0, x.width, x.height), G.beginPath(), G.moveTo(I == 0 ? 15 : I * 29 + 15, 0), G.lineTo(B == 0 ? 15 : B * 29 + 15, x.height), G.strokeStyle = "red", G.stroke(), G.closePath()
                }
            }
            const h = () => {
                    b.value--, f()
                },
                y = () => {
                    b.value++, f()
                },
                z = async ($ = !1) => {
                    if (l.typeid == null) return;
                    $ && (b.value = 1, f($));
                    const [L, I] = await te(l.EmerdApi({
                        typeId: l.typeid
                    }));
                    if (I.length) {
                        const B = Object.keys(I[0]).filter(x => x.startsWith("number_"));
                        g.value = I.map(x => {
                            const G = {
                                list: []
                            };
                            return G.type = x.type, G.list = [], B.forEach(P => {
                                G.list.push(x[P])
                            }), G
                        })
                    }
                    r.value = g.value[0], c.value = g.value[1], p.value = g.value[2], d.value = g.value[3], _.value = g.value[4]
                },
                f = async ($ = !1) => {
                    var B;
                    if (l.typeid == null) return;
                    $ && (b.value = 1);
                    const [L, I] = await te(l.listApi({
                        pageSize: 10,
                        pageNo: b.value,
                        typeId: l.typeid
                    }));
                    if (I.list ? m.value = I.list.map((x, G) => (x.rowId = G, x)) || [] : I.data.gameslist && (m.value = I.data.gameslist.map((x, G) => (x.rowId = G, x)) || []), k.value = I.totalPage, $) {
                        const x = ((B = I.data) == null ? void 0 : B.gameslist) || I.list || [];
                        o("changefive", x.slice(0, 5).map(G => G.number))
                    }
                    T()
                };
            return i({
                getData: z
            }), he(() => {
                z(), f()
            }), ($, L) => {
                const I = H("van-col"),
                    B = H("van-row"),
                    x = H("van-icon");
                return n(), a("div", XB, [t("div", QB, [N(B, null, {
                    default: D(() => [N(I, {
                        span: "8"
                    }, {
                        default: D(() => [E(e($.$t("betIssue")), 1)]),
                        _: 1
                    }), N(I, {
                        span: "16"
                    }, {
                        default: D(() => [E(e($.$t("number")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", YB, [t("div", ZB, e($.$t("trendDesc1")), 1), t("div", JB, [t("div", null, e($.$t("trendDesc2")), 1), r.value ? (n(), a("div", tI, [(n(), a(S, null, A(10, G => t("div", {
                    key: G
                }, e(G - 1), 1)), 64))])) : w("v-if", !0)]), d.value && d.value.type == 2 ? (n(), a("div", eI, [t("div", null, e($.$t("trendDesc3")), 1), t("div", iI, [(n(!0), a(S, null, A(d.value.list, (G, P) => (n(), a("div", {
                    key: "4" + P
                }, e(G), 1))), 128))])])) : w("v-if", !0), c.value && c.value.type == 4 ? (n(), a("div", nI, [t("div", null, e($.$t("trendDesc4")), 1), t("div", aI, [(n(!0), a(S, null, A(c.value.list, (G, P) => (n(), a("div", {
                    key: "2" + P
                }, e(G), 1))), 128))])])) : w("v-if", !0), _.value && _.value.type == 1 ? (n(), a("div", oI, [t("div", null, e($.$t("trendDesc5")), 1), t("div", sI, [(n(!0), a(S, null, A(_.value.list, (G, P) => (n(), a("div", {
                    key: "5" + P
                }, e(G), 1))), 128))])])) : w("v-if", !0), p.value && p.value.type == 3 ? (n(), a("div", lI, [t("div", null, e($.$t("trendDesc6")), 1), t("div", cI, [(n(!0), a(S, null, A(p.value.list, (G, P) => (n(), a("div", {
                    key: "3" + P
                }, e(G), 1))), 128))])])) : w("v-if", !0)]), t("div", rI, [m.value.length ? (n(!0), a(S, {
                    key: 0
                }, A(m.value, (G, P) => (n(), a("div", {
                    key: P,
                    IssueNumber: G.issueNumber,
                    Number: G.number,
                    Colour: G.colour,
                    rowId: G.rowId
                }, [N(B, null, {
                    default: D(() => [N(I, {
                        span: "8"
                    }, {
                        default: D(() => [t("div", dI, e(G.issueNumber), 1)]),
                        _: 2
                    }, 1024), N(I, {
                        span: "16"
                    }, {
                        default: D(() => [t("div", pI, [t("canvas", {
                            canvas: "",
                            id: "myCanvas" + G.rowId,
                            ref_for: !0,
                            ref: "canvas",
                            class: "line-canvas"
                        }, null, 8, gI), (n(), a(S, null, A(10, R => t("div", {
                            class: M(["Trend__C-body2-Num-item", Number(G.number) == R - 1 ? "action" + (R - 1) : ""]),
                            key: R
                        }, e(R - 1), 3)), 64)), t("div", {
                            class: M(["Trend__C-body2-Num-BS", {
                                isB: Number(G.number) > 4
                            }])
                        }, e(Number(G.number) > 4 ? "B" : "S"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)], 8, uI))), 128)) : (n(), a("div", bI, [N(re)]))]), m.value.length ? (n(), a("div", mI, [t("div", {
                    class: M(["Trend__C-foot-previous", {
                        disabled: b.value <= 1
                    }]),
                    onClick: h
                }, [N(x, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", _I, e(b.value) + "/" + e(k.value), 1), t("div", {
                    class: M(["Trend__C-foot-next", {
                        disabled: b.value >= k.value
                    }]),
                    onClick: y
                }, [N(x, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const Ka = U(vI, [
        ["__scopeId", "data-v-d485a39d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinGo/Trend.vue"]
    ]),
    hI = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    kI = {
        class: "WinningNum"
    },
    fI = {
        class: "WinningTip__C-body-l3"
    },
    yI = {
        key: 0,
        class: "isLose"
    },
    $I = {
        class: "head"
    },
    wI = {
        class: "bonus"
    },
    TI = {
        class: "gameDetail"
    },
    CI = {
        class: "WinningTip__C-body-l4"
    },
    NI = ["onClick"],
    LI = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const {
                t: o
            } = mt(), l = Q(() => r.value[0] ? r.value[0].state == 0 : !1), g = Q(() => r.value[0] || {}), m = v(!1), r = v([]), c = v({
                red: o("winColor1"),
                green: o("winColor2"),
                "red,violet": o("winColor3"),
                "green,violet": o("winColor4"),
                violet: o("winColor5")
            });
            let p = v();
            const d = () => {
                clearTimeout(p.value), r.value.shift(), m.value && r.value.length && (p.value = setTimeout(() => {
                    d()
                }, 1e3 * 3))
            };
            Pt(() => r.value.length, T => {
                T ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            });
            const _ = () => {
                    m.value = !m.value, m.value ? p.value = setTimeout(() => {
                        d()
                    }, 1e3 * 3) : clearTimeout(p.value)
                },
                b = T => {
                    r.value.push(...T), m.value && (p.value = setTimeout(() => {
                        d()
                    }, 1e3 * 3))
                },
                k = () => {
                    r.value = []
                };
            return i({
                showMark: b
            }), (T, C) => yt((n(), a("div", {
                class: "WinningTip__C",
                onClick: d
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: l.value
                }])
            }, [l.value ? (n(), a("div", {
                key: 0,
                class: M(["WinningTip__C-body-l1", {
                    isL: l.value
                }])
            }, e(T.$t("k3WarningTip1")), 3)) : (n(), a("div", hI, e(T.$t("k3WarningTip2")), 1)), t("div", {
                class: M(["WinningTip__C-body-l2", [`type${g.value.number}`]])
            }, [E(e(T.$t("winTips3")) + " ", 1), t("div", null, e(c.value[g.value.colour]), 1), t("div", kI, e(g.value.number), 1), t("div", null, e(g.value.number > 4 ? T.$t("big") : T.$t("small")), 1)], 2), t("div", fI, [l.value ? (n(), a("div", yI, e(T.$t("winTips4")), 1)) : (n(), a(S, {
                key: 1
            }, [t("div", $I, e(T.$t("winTips5")), 1), t("div", wI, e(u(Bt)(Number(g.value.winAmount))), 1)], 64)), t("div", TI, e(T.$t("winTips6")) + e(g.value.typeName) + " " + e(g.value.issueNumber), 1)]), t("div", CI, [t("div", {
                class: M(["acitveBtn", {
                    active: m.value
                }]),
                onClick: ve(_, ["stop"])
            }, null, 10, NI), E(" " + e(T.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: k
            })], 2)], 512)), [
                [Zt, r.value.length]
            ])
        }
    });
const Xa = U(LI, [
        ["__scopeId", "data-v-e44179e3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/common/WinningTips.vue"]
    ]),
    zI = {
        class: "WinGo__C"
    },
    BI = {
        class: "WinGo__C-head-more"
    },
    II = V({
        __name: "index",
        setup(s) {
            const i = () => {
                    p.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                o = {
                    GameRecord: KB,
                    Trend: Ka,
                    MyGameRecord: Cn
                },
                l = v(),
                g = v(),
                m = v(),
                r = v(!1),
                c = v("GameRecord"),
                p = rt(),
                d = Pe();
            d.getWinGoData();
            const _ = d.getWingo,
                b = v(0),
                k = v(localStorage.getItem("volumeShow") || "1"),
                T = v(!1),
                C = v(null),
                h = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                y = v(5),
                z = v(""),
                f = v(!1),
                $ = v(null),
                L = Q(() => _[b.value] || {}),
                I = v([0, 0, 0, 0, 0]),
                B = He(),
                x = Q(() => B.getIsShowLotteryDragon);
            Tt(() => {
                R()
            }), Ve(() => {
                clearInterval(C.value), At.value.forEach(_t => {
                    clearInterval(_t)
                }), Rt.value && clearTimeout(Rt.value)
            }), Pt(() => Te().visibility, _t => {
                _t === 0 ? clearInterval(C.value) : (R(), O(b.value))
            });
            const G = () => {
                    k.value == "1" ? k.value = "2" : k.value = "1", localStorage.setItem("volumeShow", k.value)
                },
                P = _t => {
                    p.push({
                        name: _t
                    })
                },
                R = () => {
                    $.value == null && O(0)
                },
                O = _t => {
                    d.getWinGoData(), b.value = _t, $.value = _[_t].typeID, K($.value), Jt(() => {
                        l.value.getData($.value)
                    })
                },
                K = async _t => {
                    c.value == "MyGameRecord" && nt(_t);
                    const [it, st] = await te(Ps({
                        typeId: _t
                    }));
                    h.value.gameNo = st.issueNumber, h.value.currentTime = st.serviceTime.replace(/-/g, "/"), h.value.beginTime = st.startTime.replace(/-/g, "/"), ct()
                },
                nt = async _t => {
                    const it = await at(Ds({
                        typeId: _t
                    }));
                    it && (I.value = it.data.number.split(","))
                },
                ct = () => {
                    const _t = new Date(h.value.currentTime).getTime(),
                        it = new Date(h.value.beginTime).getTime();
                    let st = (_t - it) / 1e3,
                        Y = _[b.value];
                    if (st > Y.intervalM * 60 && (st = Y.intervalM * 60), h.value.passTime = Y.intervalM * 60 - st, h.value.passTime < 0) {
                        z.value = "An error occurred, please contact customer service。The game time is " + Y.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", T.value = !0;
                        return
                    }
                    ot()
                },
                ot = () => {
                    clearInterval(C.value), lt(!1), C.value = setInterval(function() {
                        lt()
                    }, 1e3)
                },
                lt = (_t = !0) => {
                    if (h.value.passTime <= y.value && (f.value = !1), k.value == "1" && (h.value.passTime <= y.value && h.value.passTime > 1 ? J(1) : h.value.passTime == 1 && J(2)), h.value.passTime > 0) {
                        let it = h.value.passTime;
                        h.value.time2 = Math.floor(it / 60), h.value.time3 = Math.floor(it % 60 / 10), h.value.time4 = Math.floor(it % 10), h.value.passTime--
                    } else clearInterval(C.value), _t && kt()
                },
                J = (_t = 1) => {
                    const it = document.getElementById(`voice${_t}`);
                    it && it.play()
                },
                kt = () => {
                    K($.value || 0), m.value.getWinsUserAmount(!1), l.value.getData(!0)
                },
                xt = v({}),
                At = v([]),
                gt = _t => {
                    if (m.value.getWinsUserAmount(!1), l.value.getData(), xt.value[_t]) return;
                    xt.value[_t] = !0;
                    const {
                        time1: it,
                        time2: st,
                        time3: Y,
                        time4: Z
                    } = h.value, W = (it * 10 * 60 + st * 60 + Y * 10 + Z) * 1e3 + Math.floor(Math.random() * 2e3) + 1e3;
                    At.value[L.value.intervalM] = setTimeout(() => {
                        Gt(_t)
                    }, W)
                },
                ft = _t => {
                    r.value = _t
                },
                $t = _t => {
                    I.value = _t
                },
                Rt = v(null),
                Gt = async _t => {
                    const [it, st] = await te(Os({
                        issueNumber: [_t]
                    }));
                    if (st) {
                        const Y = st.filter(Z => Z.state != 2);
                        if (!Y.length) return;
                        g.value.showMark(Y), delete xt.value[_t]
                    }
                };
            return (_t, it) => {
                const st = H("NavBar");
                return n(), a("div", zI, [N(st, {
                    "left-arrow": "",
                    onClickLeft: i,
                    class: "main",
                    headLogo: !0
                }, {
                    right: D(() => [t("div", BI, [t("div", {
                        onClick: it[0] || (it[0] = Y => P("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: k.value == "2"
                        }),
                        onClick: G
                    }, null, 2)])]),
                    _: 1
                }), w(" 钱包余额 "), N(Mi, {
                    ref_key: "WallteRef",
                    ref: m
                }, null, 512), N(Ei, {
                    key: "wingo",
                    class: "lottery-notice"
                }), w(" 游戏类型 "), N(Pi, {
                    gameList: u(_),
                    currentGameIndex: b.value,
                    onChangeGame: O
                }, null, 8, ["gameList", "currentGameIndex"]), w(" 游戏开始时间倒计时 "), N(Jz, {
                    currentInfo: h.value,
                    winNum: I.value,
                    gameName: L.value.typeName,
                    currentGame: L.value
                }, null, 8, ["currentInfo", "winNum", "gameName", "currentGame"]), w(" 投注表 "), N(Ua, {
                    currentInfo: h.value,
                    currentGame: L.value,
                    VoiceType: k.value,
                    typeid: $.value,
                    onBetting: gt,
                    onChangeBettingP: ft,
                    "betting-api-fun": u(ya)
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), w(" 记录导航 "), N(Oi, {
                    record: c.value,
                    onChangeC: it[1] || (it[1] = Y => c.value = Y)
                }, null, 8, ["record"]), w(" 动态展示对应的组件 "), (n(), tt(Xe, null, [(n(), tt(je(o[c.value]), {
                    class: "game-record",
                    ref_key: "RecordComponent",
                    ref: l,
                    typeid: $.value,
                    ApiFun: u(_n),
                    listApi: u(Ba),
                    EmerdApi: u(ka),
                    goPathName: "AllLotteryGames-BettingRecordWin",
                    onChangefive: $t
                }, null, 40, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), w(" 弹窗组件 "), N(xe, {
                    show: T.value,
                    onConfirm: it[2] || (it[2] = Y => P("/login"))
                }, {
                    content: D(() => [t("div", null, e(z.value), 1)]),
                    _: 1
                }, 8, ["show"]), w(" 中奖提示组件 "), N(Xa, {
                    ref_key: "WinningTipsRef",
                    ref: g
                }, null, 512), x.value ? (n(), tt(yn, {
                    key: 0
                })) : w("v-if", !0), N(qi)])
            }
        }
    });
const SI = U(II, [
        ["__scopeId", "data-v-5d71c3fd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/WinGo/index.vue"]
    ]),
    FA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: SI
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bn = s => (Ct("data-v-3c1bee29"), s = s(), Nt(), s),
    xI = {
        class: "TimeLeft__C"
    },
    RI = {
        class: "TimeLeft__C-l1"
    },
    GI = {
        class: "TimeLeft__C-l1-l"
    },
    AI = {
        class: "TimeLeft__C-l1-no"
    },
    MI = Bn(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M9.67074 29.1107L9.66322 29.1182L9.65598 29.126C9.02654 29.8017 8.45747 30.2157 7.98006 30.4218C7.50853 30.6254 7.16285 30.6135 6.91422 30.5064C6.6612 30.3975 6.39655 30.1416 6.18925 29.6333C5.98114 29.123 5.85 28.3992 5.85 27.45V10.56C5.85 7.52835 6.21824 5.86758 7.1019 4.92303C7.97224 3.99272 9.4962 3.6 12.33 3.6H23.67C26.5041 3.6 28.0275 3.99282 28.8959 4.92264C29.7774 5.86659 30.1425 7.52679 30.135 10.5585V10.56V27.435C30.135 28.3846 30.0047 29.1087 29.7975 29.6192C29.5911 30.1278 29.3276 30.383 29.076 30.4916C28.8287 30.5983 28.4837 30.6106 28.011 30.4067C27.5326 30.2004 26.9615 29.7861 26.3282 29.1102C25.6005 28.3296 24.6554 27.9468 23.7086 27.9984C22.7618 28.0499 21.8639 28.5332 21.225 29.385L21.2246 29.3856L19.7116 31.4079C19.7113 31.4083 19.711 31.4087 19.7107 31.4091C19.1996 32.0836 18.5725 32.3738 17.9925 32.3738C17.4125 32.3738 16.7854 32.0836 16.2743 31.4091C16.274 31.4087 16.2737 31.4083 16.2734 31.4079L14.7606 29.3858C14.7605 29.3857 14.7605 29.3856 14.7604 29.3856C13.4723 27.6623 11.1634 27.5349 9.67973 29.1017L9.67074 29.1107ZM9.57 16.5C9.57 17.6564 10.5136 18.6 11.67 18.6C12.8264 18.6 13.77 17.6564 13.77 16.5C13.77 15.3436 12.8264 14.4 11.67 14.4C10.5136 14.4 9.57 15.3436 9.57 16.5ZM9.57 10.5C9.57 11.6564 10.5136 12.6 11.67 12.6C12.8264 12.6 13.77 11.6564 13.77 10.5C13.77 9.34363 12.8264 8.4 11.67 8.4C10.5136 8.4 9.57 9.34363 9.57 10.5ZM16.095 18.225H24.345C25.2914 18.225 26.07 17.4464 26.07 16.5C26.07 15.5536 25.2914 14.775 24.345 14.775H16.095C15.1486 14.775 14.37 15.5536 14.37 16.5C14.37 17.4464 15.1486 18.225 16.095 18.225ZM16.095 12.225H24.345C25.2914 12.225 26.07 11.4464 26.07 10.5C26.07 9.55363 25.2914 8.775 24.345 8.775H16.095C15.1486 8.775 14.37 9.55363 14.37 10.5C14.37 11.4464 15.1486 12.225 16.095 12.225Z",
        stroke: "currentColor",
        "stroke-width": "1.2"
    })], -1)),
    PI = Bn(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M22.3206 29.4914C20.713 30.1573 18.99 30.5 17.25 30.5C13.7359 30.5 10.3657 29.104 7.88084 26.6192C5.39598 24.1343 4 20.7641 4 17.25C4 13.7359 5.39598 10.3657 7.88083 7.88083C10.3657 5.39598 13.7359 4 17.25 4C18.99 4 20.713 4.34272 22.3206 5.0086C23.9281 5.67447 25.3888 6.65046 26.6192 7.88083C27.8495 9.11121 28.8255 10.5719 29.4914 12.1794C30.1573 13.787 30.5 15.51 30.5 17.25C30.5 18.99 30.1573 20.713 29.4914 22.3206C28.8255 23.9281 27.8495 25.3888 26.6192 26.6192C25.3888 27.8495 23.9281 28.8255 22.3206 29.4914ZM31.95 31.9985C31.9436 31.9985 31.9355 31.9971 31.9282 31.9941C31.9242 31.9925 31.922 31.9911 31.9214 31.9906L29.1369 29.2062C29.1268 29.1953 29.1211 29.1809 29.1211 29.166C29.1211 29.152 29.1261 29.1385 29.1351 29.1279C29.1381 29.1254 29.1407 29.124 29.1432 29.123C29.1472 29.1213 29.1535 29.1197 29.1619 29.1197C29.1774 29.1197 29.1952 29.1249 29.2127 29.1404L31.9929 31.9206C31.9948 31.9226 31.9963 31.9243 31.9975 31.926C31.9989 31.928 31.9998 31.9299 32.0005 31.9317C32.0022 31.9357 32.0037 31.942 32.0037 31.9504C32.0037 31.9608 32.0014 31.9723 31.9952 31.984C31.9756 31.9955 31.9587 31.9985 31.95 31.9985Z",
        stroke: "currentColor",
        "stroke-width": "2"
    })], -1)),
    DI = {
        class: "TimeLeft__C-l2"
    },
    OI = {
        class: "TimeLeft__C-time"
    },
    EI = Bn(() => t("div", {
        notime: ""
    }, ":", -1)),
    qI = {
        class: "TimeLeft__C-l3"
    },
    jI = V({
        __name: "TimeLeft",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                })
            },
            settled: {
                type: Object,
                default: () => ({})
            },
            gameName: {
                type: String,
                default: ""
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        setup(s) {
            const i = s,
                o = v(!1),
                l = rt(),
                g = Q(() => {
                    const {
                        blockID: d
                    } = i.settled;
                    if (!d) return [0, 0, 0, 0, 0];
                    let _ = d.substring(d.length - 5).toUpperCase();
                    return /\d/.test(_) ? [..._] : [...d.substring(d.length - 5, d.length - 10).toUpperCase()]
                }),
                m = Q(() => {
                    var d;
                    return (d = i.settled) == null ? void 0 : d.number
                }),
                r = () => {
                    let d = "https://tronscan.org";
                    l.push({
                        name: "AllLotteryGames-WinTrxIframe",
                        query: {
                            url: d
                        }
                    })
                },
                c = Pe(),
                p = () => {
                    o.value = !0, c.getTrxRule(i.currentGame.typeID)
                };
            return (d, _) => (n(), a("div", xI, [t("div", RI, [t("div", GI, [t("div", AI, e(d.$t("winTrxNum")), 1), t("div", {
                class: "TimeLeft__C-l1-tip",
                onClick: p
            }, [MI, E(e(d.$t("winTrxIndicate")), 1)])]), t("div", {
                class: "TimeLeft__C-l1-r",
                onClick: r
            }, [PI, E(e(d.$t("winTrxPub")), 1)])]), t("div", DI, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", OI, [t("span", null, e(d.$t("winTrxTime")), 1), t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), EI, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), t("div", qI, [(n(!0), a(S, null, A(g.value, (b, k) => (n(), a(S, {
                key: k
            }, [m.value == b ? (n(), a("p", {
                key: 0,
                class: M(["num" + b, m.value == b && "prize" + b])
            }, null, 2)) : (n(), a("div", {
                key: 1,
                class: M(["num" + b, m.value == b && "prize" + b])
            }, null, 2))], 64))), 128))]), w(" 规则弹层 begin"), N(Di, {
                howPlayShow: o.value,
                gamePresentation: s.currentGame.gamePresentation,
                onClose: _[0] || (_[0] = b => o.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])]))
        }
    });
const HI = U(jI, [
        ["__scopeId", "data-v-3c1bee29"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinTrx/TimeLeft.vue"]
    ]),
    WI = {
        class: "GameRecord__C"
    },
    FI = {
        class: "GameRecord__C-head"
    },
    VI = {
        class: "GameRecord__C-body"
    },
    UI = {
        class: "numberC"
    },
    KI = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    XI = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    QI = {
        class: "GameRecord__C-foot-page"
    },
    YI = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = v([]),
                g = v(4),
                m = v(10),
                r = v(1),
                c = rt(),
                p = () => {
                    r.value--, _()
                },
                d = () => {
                    r.value++, _()
                },
                _ = async (k = !1) => {
                    if (o.typeid == null) return;
                    k && (r.value = 1);
                    const [T, C] = await te(Ia({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    if (!C) return;
                    let h = C == null ? void 0 : C.data.date.serviceTime;
                    l.value = C.data.gameslist.map(y => {
                        if (y.blockID) {
                            var z = y.blockID.length,
                                f = y.blockID.substring(z - 4, z);
                            y.blockName = "**" + f
                        }
                        if (y.issueNumber) {
                            var $ = y.issueNumber.substring(0, 3),
                                L = y.issueNumber.length,
                                I = y.issueNumber.substring(L - 4, L);
                            y.issue = $ + "**" + I
                        }
                        if (y.blockTime) {
                            let B = h.split(" "),
                                x = y.blockTime.split(" ");
                            y.day = B[0].substring(8, 10) == x[0].substring(8, 10), y.time = x[1]
                        }
                        return y
                    }), g.value = C.totalPage
                },
                b = k => {
                    let T = `https://tronscan.org/#/block/${k}`;
                    c.push({
                        name: "AllLotteryGames-WinTrxIframe",
                        query: {
                            url: T
                        }
                    })
                };
            return i({
                getData: _
            }), he(() => {
                _()
            }), (k, T) => {
                const C = H("van-col"),
                    h = H("van-row"),
                    y = H("svg-icon"),
                    z = H("van-icon");
                return n(), a("div", WI, [t("div", FI, [N(h, null, {
                    default: D(() => [N(C, {
                        span: "4"
                    }, {
                        default: D(() => [E(e(k.$t("betSerial")), 1)]),
                        _: 1
                    }), N(C, {
                        span: "6"
                    }, {
                        default: D(() => [E(e(k.$t("winTrxDesc1")), 1)]),
                        _: 1
                    }), N(C, {
                        span: "5"
                    }, {
                        default: D(() => [E(e(k.$t("winTrxDesc2")), 1)]),
                        _: 1
                    }), N(C, {
                        span: "5"
                    }, {
                        default: D(() => [E(e(k.$t("winTrxDesc3")), 1)]),
                        _: 1
                    }), N(C, {
                        span: "4"
                    }, {
                        default: D(() => [E(e(k.$t("winTrxDesc4")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", VI, [l.value.length ? (n(!0), a(S, {
                    key: 0
                }, A(l.value, (f, $) => (n(), tt(h, {
                    key: $
                }, {
                    default: D(() => [N(C, {
                        span: "6"
                    }, {
                        default: D(() => [E(e(f.issue), 1)]),
                        _: 2
                    }, 1024), N(C, {
                        span: "4",
                        onClick: L => b(f.blockNumber)
                    }, {
                        default: D(() => [E(e(f.blockNumber) + " ", 1), f.day ? (n(), tt(y, {
                            key: 0,
                            name: "trxquestion",
                            class: "Binquire"
                        })) : w("v-if", !0)]),
                        _: 2
                    }, 1032, ["onClick"]), N(C, {
                        span: "5"
                    }, {
                        default: D(() => [E(e(f.time), 1)]),
                        _: 2
                    }, 1024), N(C, {
                        span: "4"
                    }, {
                        default: D(() => [E(e(f.blockName), 1)]),
                        _: 2
                    }, 1024), N(C, {
                        span: "5"
                    }, {
                        default: D(() => [t("div", UI, [t("div", {
                            class: M(["number", ["num" + f.number]])
                        }, e(f.number), 3), t("div", {
                            class: M([Number(f.number) > 4 ? "big" : "small"])
                        }, e(Number(f.number) > 4 ? "B" : "S"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", KI, [N(re)]))]), l.value.length ? (n(), a("div", XI, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: p
                }, [N(z, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", QI, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: d
                }, [N(z, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : w("v-if", !0)])
            }
        }
    });
const ZI = U(YI, [
        ["__scopeId", "data-v-7a795a91"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/AllLotteryGames/WinTrx/GameRecord.vue"]
    ]),
    JI = {
        class: "WinTrx__C"
    },
    tS = {
        class: "WinTrx__C-head-more"
    },
    eS = V({
        __name: "index",
        setup(s) {
            const i = () => {
                    p.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                o = {
                    GameRecord: ZI,
                    Trend: Ka,
                    MyGameRecord: Cn
                },
                l = v(),
                g = v(),
                m = v(),
                r = v(!1),
                c = v("GameRecord"),
                p = rt(),
                d = Pe(),
                _ = d.getTrx,
                b = v(0),
                k = v(localStorage.getItem("volumeShow") || "1"),
                T = v(!1),
                C = v(null),
                h = v(),
                y = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                z = v(10),
                f = v(""),
                $ = v(!1),
                L = v(null),
                I = Q(() => _[b.value] || {});
            Tt(() => {
                G()
            }), Ve(() => {
                clearInterval(C.value), J.value.forEach(ft => {
                    clearInterval(ft)
                }), At.value && clearTimeout(At.value)
            }), Pt(() => Te().visibility, ft => {
                ft === 0 ? clearInterval(C.value) : (G(), P(b.value))
            });
            const B = () => {
                    k.value == "1" ? k.value = "2" : k.value = "1", localStorage.setItem("volumeShow", k.value)
                },
                x = ft => {
                    p.push({
                        name: ft
                    })
                },
                G = () => {
                    L.value == null && P(0)
                },
                P = ft => {
                    d.getTrxData(), b.value = ft, L.value = _[ft].typeID, R(L.value), Jt(() => {
                        l.value.getData(L.value)
                    })
                },
                R = async ft => {
                    const [$t, Rt] = await te(Es({
                        typeId: ft
                    }));
                    y.value.gameNo = Rt.predraw.issueNumber, y.value.currentTime = Rt.predraw.serviceTime.replace(/-/g, "/"), y.value.beginTime = Rt.predraw.startTime.replace(/-/g, "/"), h.value = Rt.settled, O()
                },
                O = () => {
                    if (!_.length) return;
                    var ft = new Date(y.value.currentTime).getTime(),
                        $t = new Date(y.value.beginTime).getTime();
                    let Rt = (ft - $t) / 1e3,
                        Gt = _[b.value];
                    if (Rt > Gt.intervalM * 60 && (Rt = Gt.intervalM * 60), y.value.passTime = Gt.intervalM * 60 - Rt, y.value.passTime < 0) {
                        f.value = "An error occurred, please contact customer service。The game time is " + Gt.intervalM + " minutes,start time is " + y.value.beginTime + ",current time is" + y.value.currentTime + "!", T.value = !0;
                        return
                    }
                    K()
                },
                K = () => {
                    clearInterval(C.value), nt(!1), C.value = setInterval(function() {
                        nt()
                    }, 1e3)
                },
                nt = (ft = !0) => {
                    if (y.value.passTime <= z.value && ($.value = !1), k.value == "1" && (y.value.passTime <= z.value && y.value.passTime > 1 ? ct(1) : y.value.passTime == 1 && ct(2)), y.value.passTime > 0) {
                        let $t = y.value.passTime;
                        y.value.time2 = Math.floor($t / 60), y.value.time3 = Math.floor($t % 60 / 10), y.value.time4 = Math.floor($t % 10), y.value.passTime--
                    } else clearInterval(C.value), ft && ot()
                },
                ct = (ft = 1) => {
                    const $t = document.getElementById(`voice${ft}`);
                    $t && $t.play()
                },
                ot = () => {
                    R(L.value), m.value.getWinsUserAmount(!1), l.value.getData(!0)
                },
                lt = v({}),
                J = v([]),
                kt = ft => {
                    if (m.value.getWinsUserAmount(!1), l.value.getData(), lt.value[ft]) return;
                    lt.value[ft] = !0;
                    const {
                        time1: $t,
                        time2: Rt,
                        time3: Gt,
                        time4: _t
                    } = y.value, it = ($t * 10 * 60 + Rt * 60 + Gt * 10 + _t) * 1e3;
                    J.value[I.value.intervalM] = setTimeout(() => {
                        gt(ft)
                    }, it)
                },
                xt = ft => {
                    r.value = ft
                },
                At = v(null),
                gt = async ft => {
                    const $t = await at(qs({
                        issueNumber: [ft]
                    }));
                    if ($t) {
                        const Rt = $t.data.filter(Gt => Gt.state != 2);
                        if (!Rt.length) {
                            At.value = setTimeout(() => {
                                gt(ft)
                            }, 2e3);
                            return
                        }
                        g.value.showMark(Rt), delete lt.value[ft]
                    }
                };
            return (ft, $t) => {
                const Rt = H("NavBar");
                return n(), a("div", JI, [N(Rt, {
                    "left-arrow": "",
                    onClickLeft: i,
                    class: "main",
                    headLogo: !0
                }, {
                    right: D(() => [t("div", tS, [t("div", {
                        onClick: $t[0] || ($t[0] = Gt => x("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: k.value == "2"
                        }),
                        onClick: B
                    }, null, 2)])]),
                    _: 1
                }), w(" 钱包余额 "), N(Mi, {
                    ref_key: "WallteRef",
                    ref: m
                }, null, 512), N(Ei, {
                    key: "winx"
                }), w(" 游戏类型 "), N(Pi, {
                    gameList: u(_),
                    currentGameIndex: b.value,
                    onChangeGame: P
                }, null, 8, ["gameList", "currentGameIndex"]), w(" 游戏开始时间倒计时 "), N(HI, {
                    currentInfo: y.value,
                    gameName: I.value.typeName,
                    currentGame: I.value,
                    settled: h.value
                }, null, 8, ["currentInfo", "gameName", "currentGame", "settled"]), w(" 投注表 "), N(Ua, {
                    currentInfo: y.value,
                    ProhibitBuyTime: z.value,
                    currentGame: I.value,
                    VoiceType: k.value,
                    typeid: L.value,
                    onBetting: kt,
                    onChangeBettingP: xt,
                    "betting-api-fun": u(js)
                }, null, 8, ["currentInfo", "ProhibitBuyTime", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), w(" 记录导航 "), N(Oi, {
                    record: c.value,
                    onChangeC: $t[1] || ($t[1] = Gt => c.value = Gt)
                }, null, 8, ["record"]), w(" 动态展示对应的组件 "), (n(), tt(Xe, null, [(n(), tt(je(o[c.value]), {
                    ref_key: "RecordComponent",
                    ref: l,
                    typeid: L.value,
                    ApiFun: u(vn),
                    listApi: u(Ia),
                    EmerdApi: u(wa),
                    goPathName: "AllLotteryGames-BettingRecordWinTrx"
                }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), w(" 弹窗组件 "), N(xe, {
                    show: T.value,
                    onConfirm: $t[2] || ($t[2] = Gt => x("/login"))
                }, {
                    content: D(() => [t("div", null, e(f.value), 1)]),
                    _: 1
                }, 8, ["show"]), w(" 中奖提示组件 "), N(Xa, {
                    ref_key: "WinningTipsRef",
                    ref: g
                }, null, 512), N(qi)])
            }
        }
    });
const iS = U(eS, [
        ["__scopeId", "data-v-ac90c264"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/WinTrx/index.vue"]
    ]),
    VA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: iS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nS = {
        class: "WinTrxIfram__C"
    },
    aS = ["src"],
    oS = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = Q(() => String(i.currentRoute.value.query.url)),
                l = () => {
                    i.go(-1)
                };
            return (g, m) => {
                const r = H("NavBar");
                return n(), a("div", nS, [N(r, {
                    "left-arrow": "",
                    onClickLeft: l,
                    backgroundColor: "linear-gradient(90deg,#cd0103,#f64841)",
                    title: "TRX"
                }), t("iframe", {
                    class: "iframe",
                    sandbox: "allow-same-origin allow-popups allow-scripts",
                    frameborder: "0",
                    marginwidth: "0",
                    marginheight: "0",
                    vspace: "0",
                    hspace: "0",
                    allowtransparency: "true",
                    allowfullscreen: !0,
                    ref: "iframe",
                    src: o.value
                }, null, 8, aS)])
            }
        }
    });
const sS = U(oS, [
        ["__scopeId", "data-v-5930c2be"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/WinTrxIframe/index.vue"]
    ]),
    UA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: sS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    lS = {
        class: "Xoso"
    },
    cS = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    rS = {
        key: 1,
        class: "Xoso-page"
    },
    uS = {
        class: "title"
    },
    dS = {
        class: "list"
    },
    pS = ["onClick"],
    gS = {
        key: 0
    },
    bS = ["src"],
    mS = {
        key: 1,
        class: "info"
    },
    _S = {
        class: "issue"
    },
    vS = ["src"],
    hS = {
        class: "time"
    },
    kS = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt();
            let l = o.currentRoute.value.query.id;
            const g = Q(() => l == "5" ? "XOSO" : l == "6" ? i("fXosoTitle") : "XOSO"),
                {
                    setLoading: m
                } = Gi(),
                r = () => {
                    o.go(-1)
                },
                c = (T, C, h, y) => {
                    C.day = h, C.id = l, C.areId = y, o.push({
                        name: T,
                        query: C
                    })
                },
                p = v(null),
                d = v(0),
                _ = T => {
                    sessionStorage.setItem("xosoList", JSON.stringify(b.value[T.index]))
                },
                b = v([]);
            return (async () => {
                m(!0);
                let T;
                l == "5" ? T = await at(Ca()) : l == "6" && (T = await at(Na())), T && (b.value = T.data, sessionStorage.setItem("xosoList", JSON.stringify(T.data[0]))), m(!1)
            })(), (T, C) => {
                const h = H("NavBar"),
                    y = H("van-sticky");
                return n(), a("div", lS, [N(h, {
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: r,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: g.value
                }, {
                    default: D(() => [w(` <template #right>
				<div class="WinGo__C-head-more">
					<div @click="goPath('AllLotteryGames-XoSoRecord')">投注记录</div>
				</div>
			</template> `)]),
                    _: 1
                }, 8, ["title"]), u(l) == "5" ? (n(), tt(y, {
                    key: 0,
                    "offset-top": 46,
                    container: p.value,
                    class: "bet-container-sticky"
                }, {
                    default: D(() => [t("div", cS, [N(ui, {
                        list: b.value,
                        active: d.value,
                        "onUpdate:active": C[0] || (C[0] = z => d.value = z),
                        tabClassName: "tabs",
                        onOnClickTab: _,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: D(({
                            item: z,
                            index: f
                        }) => [t("div", {
                            class: M(["tab_item", {
                                tab_active: f === d.value
                            }])
                        }, [t("span", null, e(T.$t(z.week)), 1), t("p", null, e(z.day), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }, 8, ["container"])) : w("v-if", !0), b.value[d.value] ? (n(), a("div", rS, [(n(!0), a(S, null, A(b.value[d.value].areInfos, (z, f) => (n(), a("div", {
                    class: "Xoso-page-box",
                    key: f
                }, [t("div", uS, e(T.$t("code" + z.areNameCode)), 1), t("div", dS, [(n(!0), a(S, null, A(z.areIssueNos, ($, L) => (n(), a("div", {
                    class: "item",
                    key: L,
                    onClick: I => c("AllLotteryGames-NewVietnam", $, b.value[d.value].day, z.areId)
                }, [$.status == 1 || $.status == 2 || $.status == 3 ? (n(), a("h4", gS, [E(e(T.$t("code" + $.nameCode)) + " ", 1), t("img", {
                    class: "img",
                    src: u(Xt)("public", "xosoCity"),
                    alt: ""
                }, null, 8, bS)])) : w("v-if", !0), $.status == 1 || $.status == 2 || $.status == 3 ? (n(), a("div", mS, [t("div", _S, [t("img", {
                    class: "img",
                    src: u(Xt)("public", "ticketstar"),
                    alt: ""
                }, null, 8, vS), E(e($.issueNo), 1)]), t("p", null, e(T.$t("xosoTxt72")), 1), t("div", hS, [(n(!0), a(S, null, A(b.value[d.value].day.split("-"), (I, B) => (n(), a("div", {
                    key: B
                }, e(I), 1))), 128))])])) : w("v-if", !0)], 8, pS))), 128))])]))), 128))])) : w("v-if", !0)])
            }
        }
    });
const fS = U(kS, [
        ["__scopeId", "data-v-d965c53a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/XoSo/index.vue"]
    ]),
    KA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: fS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    yS = {
        class: "TeamReport__C"
    },
    $S = {
        class: "TeamReport__C-head"
    },
    wS = {
        class: "TeamReport__C-head-fixed"
    },
    TS = {
        class: "TeamReport__C-head-line1"
    },
    CS = {
        key: 0,
        class: "default"
    },
    NS = {
        key: 1,
        class: "default"
    },
    LS = {
        class: "TeamReport__C-head-line2"
    },
    zS = {
        key: 0,
        class: "default"
    },
    BS = {
        key: 1,
        class: "default"
    },
    IS = {
        class: "TeamReport__C-list"
    },
    SS = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), l = gn(), g = () => {
                o.go(-1)
            }, m = v([]), r = v([]), c = {
                text: "nameCode",
                value: "value"
            }, p = v(), d = v(!1), _ = v(!1), b = Kt({
                bettingParentType: "",
                areId: "",
                startDate: "",
                endDate: ""
            }), k = v(), T = v(), C = ({
                selectedOptions: L
            }) => {
                b.bettingParentType = Number(L[0].value), T.value = L[0].nameCode, k.value.getData(), d.value = !1
            }, h = v(), y = ({
                selectedOptions: L
            }) => {
                b.areId = Number(L[0].value), h.value = L[0].nameCode, k.value.getData(), _.value = !1
            };
            async function z() {
                let L = p.value.endDateValue !== "" ? `${p.value.endDateValue} 23:59:59` : "";
                b.startDate = `${pe(p.value.startDateValue).format("YYYY-MM-DD")} 23:59:59`, b.endDate = `${pe(L).format("YYYY-MM-DD")} 23:59:59`, k.value.getData()
            }
            const f = async () => {
                    const L = Number(l.query.areId) | 0,
                        I = await at(Hs({
                            areId: L
                        }));
                    r.value = $(I.data.categorys), r.value.unshift({
                        value: "",
                        nameCode: i("all")
                    }), m.value = $(I.data.ares), m.value.unshift({
                        value: "",
                        nameCode: i("all")
                    })
                },
                $ = L => L.map(B => {
                    let x = {
                        value: "",
                        nameCode: ""
                    };
                    return x.value = B.value, x.nameCode = i("code" + B.nameCode), x
                });
            return f(), (L, I) => {
                const B = H("NavBar"),
                    x = H("van-icon"),
                    G = H("van-picker"),
                    P = H("van-popup");
                return n(), a("div", yS, [N(B, {
                    "left-arrow": "",
                    onClickLeft: g,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: L.$t("xosoTxt73")
                }, null, 8, ["title"]), t("div", $S, [t("div", wS, [t("div", TS, [t("div", {
                    onClick: I[0] || (I[0] = R => _.value = !0)
                }, [h.value ? (n(), a("span", CS, e(h.value), 1)) : (n(), a("span", NS, e(u(i)("all")), 1)), N(x, {
                    name: "arrow-down"
                })])]), t("div", LS, [t("div", {
                    onClick: I[1] || (I[1] = R => d.value = !0)
                }, [T.value ? (n(), a("span", zS, e(T.value), 1)) : (n(), a("span", BS, e(u(i)("all")), 1)), N(x, {
                    name: "arrow-down"
                })]), w("日期选择组件"), t("div", null, [N(Dd, {
                    ref_key: "calendar",
                    ref: p,
                    onConfirm: z
                }, null, 512)])])])]), w(" list "), t("div", IS, [(n(), tt(Xe, null, [N(Ln, {
                    ref_key: "RecordComponent",
                    ref: k,
                    parmas: b,
                    ApiFun: u(La),
                    hasHead: !1,
                    gVSs: "1"
                }, null, 8, ["parmas", "ApiFun"])], 1024))]), N(P, {
                    show: d.value,
                    "onUpdate:show": I[3] || (I[3] = R => d.value = R),
                    round: "",
                    position: "bottom"
                }, {
                    default: D(() => [N(G, {
                        "columns-field-names": c,
                        columns: r.value,
                        onCancel: I[2] || (I[2] = R => d.value = !1),
                        onConfirm: C
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"]), N(P, {
                    show: _.value,
                    "onUpdate:show": I[5] || (I[5] = R => _.value = R),
                    round: "",
                    position: "bottom"
                }, {
                    default: D(() => [N(G, {
                        "columns-field-names": c,
                        columns: m.value,
                        onCancel: I[4] || (I[4] = R => _.value = !1),
                        onConfirm: y
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const xS = U(SS, [
        ["__scopeId", "data-v-b328b529"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/XoSoRecord/index.vue"]
    ]),
    XA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    RS = {
        class: "TeamReport__C"
    },
    GS = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    AS = {
        class: "TeamReport__C-list"
    },
    MS = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = () => {
                    i.go(-1)
                },
                l = v(0),
                g = v([]),
                m = v();
            let r = i.currentRoute.value.query.areId,
                c = i.currentRoute.value.query.typeId;
            const p = Kt({
                    bettingParentType: "",
                    startDate: "",
                    endDate: "",
                    areId: "",
                    typeId: ""
                }),
                d = b => {
                    p.areId = b.item.areId, p.typeId = b.item.typeId, m.value.getData()
                };
            async function _() {
                let b = JSON.parse(sessionStorage.getItem("xosoList") || ""),
                    k = [];
                for (let T = 0; T < b.areInfos.length; T++)
                    for (let C = 0; C < b.areInfos[T].areIssueNos.length; C++) b.areInfos[T].areIssueNos[C].type == 2 && k.push({
                        areId: b.areInfos[T].areId,
                        typeId: b.areInfos[T].areIssueNos[C].code,
                        nameCode: b.areInfos[T].areIssueNos[C].nameCode
                    });
                g.value = k, g.value.length > 0 && (l.value = g.value.findIndex(T => T.areId == r && T.typeId == c))
            }
            return _(), (b, k) => {
                const T = H("NavBar"),
                    C = H("van-sticky");
                return n(), a("div", RS, [N(T, {
                    "left-arrow": "",
                    onClickLeft: o,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: b.$t("fXosoTitle")
                }, null, 8, ["title"]), N(C, {
                    "offset-top": 46,
                    class: "bet-container-sticky"
                }, {
                    default: D(() => [t("div", GS, [N(ui, {
                        list: g.value,
                        active: l.value,
                        "onUpdate:active": k[0] || (k[0] = h => l.value = h),
                        tabClassName: "tabs",
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item",
                        onOnClickTab: d
                    }, {
                        default: D(({
                            item: h,
                            index: y
                        }) => [t("div", {
                            class: M(["tab_item", {
                                tab_active: y === l.value
                            }])
                        }, [t("p", null, e(b.$t(`code${h.nameCode}`)), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }), w(" list "), t("div", AS, [(n(), tt(Xe, null, [N(Ln, {
                    ref_key: "RecordComponent",
                    ref: m,
                    parmas: p,
                    ApiFun: u(za),
                    hasHead: !1,
                    gVSs: "2"
                }, null, 8, ["parmas", "ApiFun"])], 1024))])])
            }
        }
    });
const PS = U(MS, [
        ["__scopeId", "data-v-24e1bb6f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/AllLotteryGames/XoSoRecordF/index.vue"]
    ]),
    QA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: PS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    DS = {
        class: "header"
    },
    OS = {
        class: "l1"
    },
    ES = {
        class: "header_title"
    },
    qS = {
        key: 0,
        class: "l2"
    },
    jS = {
        class: "inputDom"
    },
    HS = ["v-model"],
    WS = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = v(!1),
                l = v(""),
                g = () => {
                    i.push({
                        name: "Casino"
                    })
                },
                m = () => {
                    l.value = "", o.value = !1
                };
            return (r, c) => (n(), a("div", DS, [t("div", OS, [t("div", {
                class: "backSvg",
                onClick: g
            }), t("div", ES, e(r.$t("live")), 1), t("div", {
                class: "searchIcon",
                onClick: c[0] || (c[0] = p => o.value = !0)
            })]), o.value ? (n(), a("div", qS, [t("div", jS, [t("input", {
                type: "text",
                "v-model": l.value,
                placeholder: "Search games……"
            }, null, 8, HS)]), t("div", {
                class: "close",
                onClick: m
            }, "Close")])) : w("v-if", !0)]))
        }
    });
const FS = U(WS, [
        ["__scopeId", "data-v-1aca5679"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Casino/Detail/index.vue"]
    ]),
    YA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: FS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    VS = {
        class: "header"
    },
    US = {
        class: "l1"
    },
    KS = {
        class: "header_title"
    },
    XS = {
        key: 0,
        class: "l2"
    },
    QS = {
        class: "inputDom"
    },
    YS = ["v-model"],
    ZS = V({
        __name: "index",
        setup(s) {
            const i = rt(),
                o = v(!1),
                l = v(""),
                g = () => {
                    i.push({
                        name: "Chess"
                    })
                },
                m = () => {
                    l.value = "", o.value = !1
                };
            return (r, c) => (n(), a("div", VS, [t("div", US, [t("div", {
                class: "backSvg",
                onClick: g
            }), t("div", KS, e(r.$t("ChessandCards")), 1), t("div", {
                class: "searchIcon",
                onClick: c[0] || (c[0] = p => o.value = !0)
            })]), o.value ? (n(), a("div", XS, [t("div", QS, [t("input", {
                type: "text",
                "v-model": l.value,
                placeholder: "Search games……"
            }, null, 8, YS)]), t("div", {
                class: "close",
                onClick: m
            }, "Close")])) : w("v-if", !0)]))
        }
    });
const JS = U(ZS, [
        ["__scopeId", "data-v-5df4fc2f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Chess/Detail/index.vue"]
    ]),
    ZA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: JS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    tx = {
        class: "messageDetail__container content"
    },
    ex = {
        class: "messageDetail__container-wrapper"
    },
    ix = {
        class: "messageDetail__container-title"
    },
    nx = {
        class: "messageDetail__container-content"
    },
    ax = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = mt(), o = Ws(), l = rt(), g = v({}), m = yi(() => $i(() =>
                import ("./messageIconNoDot-44cb2306.js"), ["assets/js/messageIconNoDot-44cb2306.js", "assets/js/modules-7f822252.js", "assets/css/modules-5dd73da0.css", "assets/js/page-activity-730ec554.js", "assets/js/native/index-20830f47.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-dcf93ecc.css"])), r = yi(() => $i(() =>
                import ("./messageGarbage-d1d64530.js"), ["assets/js/messageGarbage-d1d64530.js", "assets/js/modules-7f822252.js", "assets/css/modules-5dd73da0.css", "assets/js/page-activity-730ec554.js", "assets/js/native/index-20830f47.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-dcf93ecc.css"]));

            function c() {
                l.back()
            }

            function p() {
                la({
                    title: i("warning"),
                    message: i("warningTxt1")
                }).then(() => {
                    un({
                        messageID: g.value.messageID,
                        state: 2
                    }), l.back()
                })
            }
            return Tt(async () => {
                g.value = o.getMessagesDetail, g.value.state !== 1 && (await un({
                    messageID: g.value.messageID,
                    state: 1
                }), o.setMessageDetail({ ...g.value,
                    state: 1
                }))
            }), (d, _) => {
                const b = H("NavBar");
                return n(), a("div", tx, [N(b, {
                    "left-arrow": "",
                    onClickLeft: c,
                    title: u(i)("notificationDetails")
                }, null, 8, ["title"]), t("div", ex, [t("div", ix, [t("div", null, [t("div", null, [(n(), tt(je(u(m)))), t("span", null, e(g.value.title), 1)]), t("span", null, e(g.value.addTime), 1)]), (n(), tt(je(u(r)), {
                    onClick: p
                }))]), t("div", nx, e(g.value.messages), 1)])])
            }
        }
    });
const ox = U(ax, [
        ["__scopeId", "data-v-e5380132"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/Messages/MessageDetail/index.vue"]
    ]),
    JA = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ox
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sx = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    lx = {
        class: "dialog__container-img"
    },
    cx = {
        alt: ""
    },
    rx = {
        class: "dialog__container-title"
    },
    ux = {
        class: "dialog__container-content"
    },
    dx = {
        class: "dialog__container-footer"
    },
    px = V({
        __name: "HomeDialog",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            confirmText: {
                type: String,
                default: "comfirm"
            },
            showCancelBtn: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: "cancel"
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            pathname: {
                type: String,
                default: "public"
            },
            picname: {
                type: String,
                default: "superjackpotHome"
            }
        },
        emits: ["update:show", "confirm"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = mt();
            Pt(() => o.show, r => {
                r ? window.addEventListener("touchmove", m, {
                    passive: !1
                }) : window.removeEventListener("touchmove", m)
            });

            function g(r) {
                o.clickOutSide && i("update:show", !1)
            }
            const m = r => {
                o.show && r.preventDefault()
            };
            return (r, c) => {
                const p = Ht("lazy");
                return n(), a("div", {
                    class: M(["dialog", {
                        active: s.show,
                        inactive: !s.show
                    }])
                }, [t("div", sx, [t("div", lx, [be(r.$slots, "header", {}, () => [yt(t("img", cx, null, 512), [
                    [p, u(Xt)(s.pathname, s.picname)]
                ])], !0)]), t("div", rx, [be(r.$slots, "title", {}, () => [t("h1", null, e(u(l)(s.title)), 1)], !0)]), t("div", ux, [be(r.$slots, "content", {}, void 0, !0)]), t("div", dx, [be(r.$slots, "footer", {}, () => [s.showCancelBtn ? (n(), a("button", {
                    key: 0,
                    onClick: c[0] || (c[0] = () => {
                        i("update:show", !1)
                    })
                }, e(r.$t(s.cancelText)), 1)) : w("v-if", !0), t("button", {
                    onClick: c[1] || (c[1] = () => {
                        i("confirm")
                    })
                }, e(r.$t(s.confirmText)), 1)], !0)])]), t("div", {
                    class: "dialog__outside",
                    onClick: g
                })], 2)
            }
        }
    });
const gx = U(px, [
        ["__scopeId", "data-v-c0caae78"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/common/HomeDialog.vue"]
    ]),
    bx = ["onClick"],
    mx = V({
        __name: "Swiper",
        setup(s) {
            const {
                getBannerApi: i,
                getBanner: o
            } = di(), l = [Fo];
            return Tt(async () => await i()), (g, m) => {
                const r = Ht("lazy");
                return n(), tt(u(Wo), {
                    class: "my-swipe",
                    "slides-per-view": 1,
                    "space-between": 20,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    modules: l,
                    loop: !0
                }, {
                    default: D(() => [(n(!0), a(S, null, A(u(o), (c, p) => (n(), tt(u(Ho), {
                        key: p
                    }, {
                        default: D(() => [yt(t("img", {
                            onClick: d => g.onJump(c.url)
                        }, null, 8, bx), [
                            [r, c.bannerUrl]
                        ])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                })
            }
        }
    });
const _x = U(mx, [
        ["__scopeId", "data-v-a1417a9f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/goGame/Swiper.vue"]
    ]),
    vx = {
        class: "container"
    },
    hx = {
        class: "btn"
    },
    kx = {
        class: "text"
    },
    fx = 1.1,
    yx = V({
        __name: "DownloadPWA",
        setup(s) {
            const i = dn("show-pwa-download", !0);
            let o = null;
            const {
                t: l
            } = mt(), g = Kt({
                canIUse: !1,
                download: null
            });
            window.addEventListener("beforeinstallprompt", p => {
                p.preventDefault(), o = p, g.canIUse = !0
            }, {
                once: !0
            }), g.download = function() {
                o.prompt().then(p => {
                    p.outcome === "accepted" && (g.canIUse = !1)
                })
            };
            let m = Fs();
            m = m == null ? void 0 : m.toLowerCase(), Q(() => Xt("common", "downloadPWA" + m)), /[\u4e00-\u9fa5]+/.test(m) && (m = "vxth");
            const r = document.querySelector("link[rel='manifest']");
            r == null || r.setAttribute("href", "/manifest/manifest." + m + ".json?version=" + fx);
            async function c() {
                if (i.value)
                    if (g.canIUse) g.download && g.download();
                    else {
                        const p = await at(Vs());
                        if (!p) return;
                        pa(Us ? p.data.androidUrl : p.data.iosUrl)
                    }
            }
            return (p, d) => {
                const _ = H("van-icon");
                return n(), a("div", vx, [t("div", hx, [t("div", kx, [N(_, {
                    name: "cross",
                    onClick: d[0] || (d[0] = b => i.value = !1),
                    color: "white"
                }), E(" " + e(u(l)("downloadMobileApp")), 1)]), t("div", {
                    class: "download",
                    onClick: c
                }, "Download")])])
            }
        }
    });
const $x = U(yx, [
    ["__scopeId", "data-v-fc9497e6"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/goGame/DownloadPWA.vue"]
]);
const wx = {},
    Tx = {
        class: "point point-flicker"
    };

function Cx(s, i) {
    return n(), a("div", Tx)
}
const Nx = U(wx, [
        ["render", Cx],
        ["__scopeId", "data-v-c10b67fb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/common/Point.vue"]
    ]),
    Lx = {
        class: "notice-domain"
    },
    zx = {
        class: "notice-domain-body"
    },
    Bx = {
        key: 0,
        class: "notice-domain-body-text"
    },
    Ix = Ri('<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" data-v-24036850><path d="M24.1173 14.1177C24.1173 15.1962 23.2347 16.0799 22.1552 16.0799H3.26975C2.19025 16.0799 1.30762 15.1962 1.30762 14.1177V2.95041C1.30762 1.87042 2.19025 0.988281 3.26975 0.988281H22.1552C23.2347 0.988281 24.1173 1.87042 24.1173 2.95041V14.1177Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-v-24036850></path><path d="M11.4962 8.69812L2.40161 15.7215" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-v-24036850></path><path d="M23.023 15.7214L13.9249 8.69604" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-v-24036850></path><path d="M23.0231 1.38513L12.7121 9.3477L2.40161 1.38513" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-v-24036850></path></svg>', 1),
    Sx = V({
        __name: "index",
        setup(s) {
            const {
                getNotice: i,
                noticeList: o,
                goNotice: l
            } = Ks();
            return Tt(() => i()), (g, m) => {
                var r;
                return n(), a("div", Lx, [t("div", zx, [u(o) && u(o)[0] && u(o)[0].siteMessage ? (n(), a("div", Bx, e((r = u(o)[0]) == null ? void 0 : r.siteMessage), 1)) : w("v-if", !0)]), t("button", {
                    onClick: m[0] || (m[0] = (...c) => u(l) && u(l)(...c))
                }, [Ix, N(Nx)])])
            }
        }
    });
const xx = U(Sx, [
        ["__scopeId", "data-v-24036850"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/goGame/NoticeBar/index.vue"]
    ]),
    Rx = "/assets/png/Home-4282c6ff.png",
    Gx = "/assets/png/Lottery-3a7ab6d6.png",
    Ax = "/assets/png/Originals-44a74398.png",
    Mx = "/assets/png/Slots-dd0ee3df.png",
    Px = "/assets/png/MoreHome-3e1f235b.png",
    Dx = "/assets/png/PhysicalEducation-7f3f54da.png",
    Ox = "/assets/png/LiveVideo-3c113bdd.png",
    Ex = "/assets/png/Chess_Cards-dca78d66.png",
    qx = "/assets/png/Fishing-b003dca1.png",
    ke = s => (Ct("data-v-de9bbd17"), s = s(), Nt(), s),
    jx = {
        class: "gameScenes-daman"
    },
    Hx = {
        class: "game-menu"
    },
    Wx = ke(() => t("img", {
        src: Rx
    }, null, -1)),
    Fx = {
        class: "menu"
    },
    Vx = ke(() => t("img", {
        src: Gx
    }, null, -1)),
    Ux = {
        class: "menu"
    },
    Kx = ke(() => t("img", {
        src: Ax
    }, null, -1)),
    Xx = {
        class: "menu"
    },
    Qx = ke(() => t("img", {
        src: Mx
    }, null, -1)),
    Yx = {
        class: "menu"
    },
    Zx = ke(() => t("img", {
        src: Px
    }, null, -1)),
    Jx = {
        class: "menu"
    },
    tR = {
        class: "halfWindow"
    },
    eR = {
        class: "half-window-menu"
    },
    iR = {
        class: "menuTitle"
    },
    nR = {
        class: "title"
    },
    aR = {
        class: "containerWinGO"
    },
    oR = {
        class: "bottomContainer"
    },
    sR = {
        class: "title"
    },
    lR = ke(() => t("br", null, null, -1)),
    cR = {
        class: "containerTour"
    },
    rR = {
        class: "bottomContainerTour"
    },
    uR = {
        class: "titleTour"
    },
    dR = ke(() => t("br", null, null, -1)),
    pR = {
        class: "title"
    },
    gR = {
        class: "mainContainer"
    },
    bR = ke(() => t("div", {
        class: "imgCont"
    }, [t("img", {
        src: Dx,
        alt: "",
        height: "40px"
    })], -1)),
    mR = {
        class: "titleCont"
    },
    _R = {
        class: "number"
    },
    vR = {
        class: "mainContainer"
    },
    hR = ke(() => t("div", {
        class: "imgCont"
    }, [t("img", {
        src: Ox,
        alt: "",
        height: "40px"
    })], -1)),
    kR = {
        class: "titleCont"
    },
    fR = {
        class: "number"
    },
    yR = {
        class: "mainContainer"
    },
    $R = ke(() => t("div", {
        class: "imgCont"
    }, [t("img", {
        src: Ex,
        alt: "",
        height: "40px"
    })], -1)),
    wR = {
        class: "titleCont"
    },
    TR = {
        class: "number"
    },
    CR = {
        class: "mainContainer"
    },
    NR = ke(() => t("div", {
        class: "imgCont"
    }, [t("img", {
        src: qx,
        alt: "image",
        height: "40px"
    })], -1)),
    LR = {
        class: "titleCont"
    },
    zR = {
        class: "number"
    },
    BR = {
        class: "title"
    },
    IR = {
        class: "mainActivities"
    },
    SR = ke(() => t("div", {
        class: "activityImage"
    }, null, -1)),
    xR = {
        class: "activityText"
    },
    RR = {
        class: "mainActivities2"
    },
    GR = ke(() => t("div", {
        class: "activityImage2"
    }, null, -1)),
    AR = {
        class: "activityText2"
    },
    MR = V({
        __name: "GameScenesDamanNew",
        setup(s) {
            const i = v([]),
                o = v([]),
                l = v([]),
                g = v([]),
                m = async () => {
                    const b = await at(wi());
                    b && (i.value = b.data.fish, o.value = b.data.sport, l.value = b.data.video, g.value = b.data.chess)
                },
                r = v(!1),
                c = rt(),
                p = () => {
                    r.value = !r.value
                },
                d = () => {
                    p(), m()
                },
                _ = b => {
                    c.push({
                        name: b
                    })
                };
            return (b, k) => (n(), a(S, null, [t("div", jx, [t("div", Hx, [Wx, t("div", Fx, e(b.$t("home")), 1)]), t("div", {
                class: "game-menu",
                onClick: k[0] || (k[0] = T => _("Lottery"))
            }, [Vx, t("div", Ux, e(b.$t("code9301")), 1)]), t("div", {
                class: "game-menu",
                onClick: k[1] || (k[1] = T => _("Original"))
            }, [Kx, t("div", Xx, e(b.$t("originals")), 1)]), t("div", {
                class: "game-menu",
                onClick: k[2] || (k[2] = T => _("Slots"))
            }, [Qx, t("div", Yx, e(b.$t("code9304Slot")), 1)]), t("div", {
                class: "game-menu",
                onClick: d
            }, [Zx, t("div", Jx, e(b.$t("More")), 1)])]), w(" Slide window open from here "), t("div", {
                class: M(["half-window", {
                    isWindowOpen: r.value
                }])
            }, [t("div", {
                class: "crossBtn",
                onClick: p
            }), t("div", tR, [t("div", eR, [t("div", iR, e(b.$t("Menu")), 1), t("div", {
                class: "menuIcon",
                onClick: k[3] || (k[3] = T => _("CustomerService"))
            })]), w(" Menu div ends here  "), t("div", nR, e(b.$t("hot")), 1), t("div", aR, [t("div", oR, [t("div", sR, [E(e(b.$t("wingoLng")) + " ", 1), lR, t("span", null, e(b.$t("lotteryResultFive")), 1)]), t("div", {
                class: "clickBtn",
                onClick: k[4] || (k[4] = T => _("AllLotteryGames-ChangLong"))
            }, e(b.$t("dragonEntry")) + " >>", 1)])]), w(" First container finsish here  "), t("div", cR, [t("div", rR, [t("div", uR, [E(e(b.$t("eTournament")), 1), dR, t("span", null, e(b.$t("Partinturnmentevnts")), 1)]), t("div", {
                class: "clickBtnTour",
                onClick: k[5] || (k[5] = T => _("Championship"))
            }, e(b.$t("dragonEntry")) + " >>", 1)])]), w(" Second container finish here "), t("div", pR, e(b.$t("Games")), 1), t("div", gR, [bR, t("div", mR, [t("span", null, e(b.$t("PhysicalEducation")), 1)]), t("div", {
                class: "endCont",
                onClick: k[6] || (k[6] = T => _("eSports"))
            }, [t("span", null, e(b.$t("all")), 1), t("span", _R, e(o.value.length) + " >>", 1)])]), w(" Second list menu "), t("div", vR, [hR, t("div", kR, [t("span", null, e(b.$t("LiveVideo")), 1)]), t("div", {
                class: "endCont",
                onClick: k[7] || (k[7] = T => _("Casino"))
            }, [t("span", null, e(b.$t("all")), 1), t("span", fR, e(l.value.length) + " >>", 1)])]), w(" 3rd list menu "), t("div", yR, [$R, t("div", wR, [t("span", null, e(b.$t("ChessandCards")), 1)]), w(' <div class="endCont" @click="goDetail(chessData)"> '), t("div", {
                class: "endCont",
                onClick: k[8] || (k[8] = T => _("Chess"))
            }, [t("span", null, e(b.$t("all")), 1), t("span", TR, e(g.value.length) + " >>", 1)])]), w(" Fourth menu list "), t("div", CR, [NR, t("div", LR, [t("span", null, e(b.$t("fishing")), 1)]), t("div", {
                class: "endCont",
                onClick: k[9] || (k[9] = T => _("Fishing"))
            }, [t("span", null, e(b.$t("all")), 1), t("span", zR, e(i.value.length) + " >>", 1)])]), t("div", BR, e(b.$t("activities")), 1), t("div", IR, [SR, t("div", xR, [E(e(b.$t("superjackpot")) + " ", 1), t("div", {
                class: "btnActivity",
                onClick: k[10] || (k[10] = T => _("SuperJackpot"))
            }, e(b.$t("dragonEntry")) + " >>", 1)])]), t("div", RR, [GR, t("div", AR, [E(e(b.$t("Activityaward")) + " ", 1), t("div", {
                class: "btnActivity2",
                onClick: k[11] || (k[11] = T => _("DailyTasks"))
            }, e(b.$t("dragonEntry")) + " >>", 1)])])])], 2), w(" New window menu ")], 64))
        }
    });
const PR = U(MR, [
        ["__scopeId", "data-v-de9bbd17"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/goGame/GameScenesDamanNew.vue"]
    ]),
    DR = "/assets/png/HotGamesHome-36648c22.png",
    OR = "/assets/png/Fire-9ddc1d76.png",
    ER = "/assets/png/Live-b684cf79.png",
    qR = "/assets/png/Joystick-fa065e8e.png",
    Li = s => (Ct("data-v-c3914f91"), s = s(), Nt(), s),
    jR = {
        class: "Maincontainer"
    },
    HR = {
        class: "firstContainer"
    },
    WR = {
        class: "insideFirstContainer"
    },
    FR = {
        class: "titleActivity"
    },
    VR = {
        class: "OriginalContainer"
    },
    UR = {
        class: "insideOriginal"
    },
    KR = Li(() => t("div", {
        class: "lotteryIcon"
    }, null, -1)),
    XR = {
        class: "title"
    },
    QR = {
        class: "arrows"
    },
    YR = {
        class: "OriginalImages"
    },
    ZR = {
        class: "OriginalImages_imgs"
    },
    JR = ["src", "onClick"],
    tG = {
        class: "OriginalContainer"
    },
    eG = {
        class: "insideOriginal"
    },
    iG = Li(() => t("div", {
        class: "icon"
    }, [t("span", null, [t("img", {
        src: DR
    })])], -1)),
    nG = {
        class: "title"
    },
    aG = {
        class: "arrows"
    },
    oG = {
        class: "OriginalImages"
    },
    sG = {
        key: 0,
        class: "OriginalImages_imgs"
    },
    lG = ["src", "onClick"],
    cG = {
        class: "OriginalContainer"
    },
    rG = {
        class: "insideOriginal"
    },
    uG = Li(() => t("div", {
        class: "icon"
    }, [t("span", null, [t("img", {
        src: OR
    })])], -1)),
    dG = {
        class: "title"
    },
    pG = {
        class: "arrows"
    },
    gG = {
        class: "hotImages"
    },
    bG = {
        class: "hotImages_hotGames"
    },
    mG = ["src", "onClick"],
    _G = {
        class: "OriginalContainer"
    },
    vG = {
        class: "insideOriginal"
    },
    hG = Li(() => t("div", {
        class: "icon"
    }, [t("span", null, [t("img", {
        src: ER
    })])], -1)),
    kG = {
        class: "title"
    },
    fG = {
        class: "arrows"
    },
    yG = {
        class: "hotImages"
    },
    $G = {
        class: "hotImages_hotGames"
    },
    wG = ["src", "onClick"],
    TG = {
        class: "OriginalContainer"
    },
    CG = {
        class: "insideOriginal"
    },
    NG = Li(() => t("div", {
        class: "icon"
    }, [t("span", null, [t("img", {
        src: qR
    })])], -1)),
    LG = {
        class: "title"
    },
    zG = {
        class: "arrows"
    },
    BG = {
        class: "SlotImages"
    },
    IG = {
        class: "SlotImages_images"
    },
    SG = {
        class: "flex_container"
    },
    xG = ["src", "onClick"],
    RG = V({
        __name: "GameScenesDamanHome",
        setup(s) {
            const {
                goGame: i
            } = pi(), {
                t: o
            } = mt(), l = rt(), g = v(null), m = v(null), r = v(null), c = v(null), p = v(null), {
                gameData: d
            } = Qe(), _ = Q(() => d.Original), b = Q(() => d.HotGames), k = Q(() => d.Casino), T = Q(() => d.Slot), C = Q(() => d.Lottery), h = {
                1: {
                    title: o("lotteryHintStr1"),
                    describe: o("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-WinGo"
                },
                2: {
                    title: o("lotteryHintStr1"),
                    describe: o("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-K3"
                },
                3: {
                    title: o("lotteryHintStr1"),
                    describe: o("lotteryHintStr4"),
                    RouterName: "AllLotteryGames-5D"
                },
                4: {
                    title: o("lotteryHintStr1"),
                    describe: o("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-WinTrx"
                },
                5: {
                    title: o("vietnamOfficialLottery"),
                    describe: o("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-XoSo"
                },
                6: {
                    title: o("vietnamOfficialLottery"),
                    describe: o("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-XoSo"
                },
                7: {
                    title: o("vietnamOfficialLottery"),
                    describe: o("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-Binguo"
                },
                8: {
                    title: o("lotteryHintStr1"),
                    describe: o("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-4D"
                }
            }, y = P => {
                let R;
                (P == 6 || P == 5) && (R = {
                    id: P
                }), l.push({
                    name: h[P].RouterName,
                    query: R
                })
            }, z = P => {
                var R, O;
                P === "left" ? (R = g.value) == null || R.prev() : (O = g.value) == null || O.next()
            }, f = P => {
                var R, O;
                P === "left" ? (R = m.value) == null || R.prev() : (O = m.value) == null || O.next()
            }, $ = P => {
                var R, O;
                P === "left" ? (R = r.value) == null || R.prev() : (O = r.value) == null || O.next()
            }, L = P => {
                var R, O;
                P === "left" ? (R = p.value) == null || R.prev() : (O = p.value) == null || O.next()
            }, I = P => {
                var R, O;
                P === "left" ? (R = c.value) == null || R.prev() : (O = c.value) == null || O.next()
            }, B = P => {
                l.push({
                    name: P
                })
            }, x = (P, R) => {
                const O = [];
                for (let K = 0; K < Math.ceil(P.length / R); K++) {
                    const nt = K * R,
                        ct = nt + R;
                    O.push(P.slice(nt, ct))
                }
                return O
            }, G = P => {
                l.push({
                    name: "AllOnlineGames",
                    query: {
                        game: "slot",
                        currentId: P.slotsName
                    }
                })
            };
            return (P, R) => (n(), a(S, null, [t("div", jR, [t("div", HR, [t("div", WR, [t("div", {
                class: "firstBox",
                onClick: R[0] || (R[0] = O => B("DailyTasks"))
            }), t("div", {
                class: "secondBox",
                onClick: R[1] || (R[1] = O => B("InvitationBonus"))
            })]), t("div", FR, [t("div", {
                class: "firstTitle",
                onClick: R[2] || (R[2] = O => B("DailyTasks"))
            }, [E(e(P.$t("activity")), 1), t("span", null, e(P.$t("Richrewardactivities")) + ".", 1)]), t("div", {
                class: "secondTitle",
                onClick: R[3] || (R[3] = O => B("InvitationBonus"))
            }, [E(e(P.$t("invite")), 1), t("span", null, e(P.$t("Invfrndstorvvehugerewards")) + ".", 1)])])])]), t("div", VR, [t("div", UR, [KR, t("div", XR, e(P.$t("Lotterygames")), 1)]), t("div", QR, [t("div", {
                class: "left",
                onClick: R[4] || (R[4] = O => L("left"))
            }), t("div", {
                class: "right",
                onClick: R[5] || (R[5] = O => L("right"))
            })])]), t("div", YR, [t("div", ZR, [N(u(fi), {
                class: "my_swipe",
                ref_key: "lotteryRef",
                ref: p,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: D(() => [(n(!0), a(S, null, A(x(C.value, 3), (O, K) => (n(), tt(u(ki), {
                    key: K
                }, {
                    default: D(() => [(n(!0), a(S, null, A(O, (nt, ct) => (n(), a("img", {
                        key: ct,
                        src: nt.categoryImg,
                        class: "img",
                        onClick: ot => y(nt.id)
                    }, null, 8, JR))), 128))]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 512)])]), w(" Original games start from here  "), t("div", tG, [t("div", eG, [iG, t("div", nG, e(P.$t("code9308Flash")), 1), t("div", {
                class: "All",
                onClick: R[6] || (R[6] = O => B("Original"))
            }, [E(e(P.$t("all")), 1), t("span", null, e(_.value.length), 1)])]), t("div", aG, [t("div", {
                class: "left",
                onClick: R[7] || (R[7] = O => z("left"))
            }), t("div", {
                class: "right",
                onClick: R[8] || (R[8] = O => z("right"))
            })])]), t("div", oG, [_.value ? (n(), a("div", sG, [N(u(fi), {
                class: "my_swipe",
                ref_key: "swipeRef",
                ref: g,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: D(() => [(n(!0), a(S, null, A(x(_.value, 3), (O, K) => (n(), tt(u(ki), {
                    key: K
                }, {
                    default: D(() => [(n(!0), a(S, null, A(O, (nt, ct) => (n(), a("img", {
                        key: ct,
                        src: nt.img,
                        class: "img",
                        onClick: ot => u(i)(nt)
                    }, null, 8, lG))), 128))]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 512)])) : w("v-if", !0)]), w(" Hot games start from Here  "), t("div", cG, [t("div", rG, [uG, t("div", dG, e(P.$t("Hotgames")), 1), t("div", {
                class: "All",
                onClick: R[9] || (R[9] = O => B("HotGames"))
            }, [E(e(P.$t("all")), 1), t("span", null, e(b.value.length), 1)])]), t("div", pG, [t("div", {
                class: "left",
                onClick: R[10] || (R[10] = O => f("left"))
            }), t("div", {
                class: "right",
                onClick: R[11] || (R[11] = O => f("right"))
            })])]), t("div", gG, [t("div", bG, [N(u(fi), {
                class: "my-swipeHot",
                ref_key: "swipeHot",
                ref: m,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: D(() => [(n(!0), a(S, null, A(x(b.value, 6), (O, K) => (n(), tt(u(ki), {
                    key: K
                }, {
                    default: D(() => [(n(!0), a(S, null, A(O, (nt, ct) => (n(), a("img", {
                        key: ct,
                        src: nt.imgUrl,
                        alt: "",
                        onClick: ot => u(i)(nt)
                    }, null, 8, mG))), 128))]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 512)])]), w(" casino Starts from here "), t("div", _G, [t("div", vG, [hG, t("div", kG, e(P.$t("live")), 1), t("div", {
                class: "All",
                onClick: R[12] || (R[12] = O => B("Casino"))
            }, [E(e(P.$t("all")), 1), t("span", null, e(k.value.length), 1)])]), t("div", fG, [t("div", {
                class: "left",
                onClick: R[13] || (R[13] = O => $("left"))
            }), t("div", {
                class: "right",
                onClick: R[14] || (R[14] = O => $("right"))
            })])]), t("div", yG, [t("div", $G, [N(u(fi), {
                class: "my-swipeHot",
                ref_key: "swipeCasino",
                ref: r,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: D(() => [(n(!0), a(S, null, A(x(k.value, 6), (O, K) => (n(), tt(u(ki), {
                    key: K
                }, {
                    default: D(() => [(n(!0), a(S, null, A(O, (nt, ct) => (n(), a("img", {
                        src: nt.vendorImg,
                        key: ct,
                        alt: "",
                        onClick: ot => u(i)(nt)
                    }, null, 8, wG))), 128))]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 512)])]), w(" Slots starts from here  "), t("div", TG, [t("div", CG, [NG, t("div", LG, e(P.$t("code9304Slot")), 1), t("div", {
                class: "All",
                onClick: R[15] || (R[15] = O => B("Slots"))
            }, [E(e(P.$t("all")), 1), t("span", null, e(T.value.length), 1)])]), t("div", zG, [t("div", {
                class: "left",
                onClick: R[16] || (R[16] = O => I("left"))
            }), t("div", {
                class: "right",
                onClick: R[17] || (R[17] = O => I("right"))
            })])]), t("div", BG, [t("div", IG, [N(u(fi), {
                class: "my-swipeSlots",
                ref_key: "swipeSlots",
                ref: c,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: D(() => [(n(!0), a(S, null, A(x(T.value, 6), (O, K) => (n(), tt(u(ki), {
                    key: K
                }, {
                    default: D(() => [t("div", SG, [(n(!0), a(S, null, A(O, (nt, ct) => (n(), a("img", {
                        key: ct,
                        src: nt.vendorImg,
                        alt: "",
                        onClick: ot => G(nt)
                    }, null, 8, xG))), 128))])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 512)])])], 64))
        }
    });
const GG = U(RG, [
        ["__scopeId", "data-v-c3914f91"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/goGame/GameScenesDamanHome.vue"]
    ]),
    In = s => (Ct("data-v-2d83646b"), s = s(), Nt(), s),
    AG = {
        class: "mainContainer"
    },
    MG = {
        class: "firstImage"
    },
    PG = ["src"],
    DG = In(() => t("div", {
        class: "insideMain"
    }, [t("span"), t("span"), t("span")], -1)),
    OG = {
        class: "typrgraphy"
    },
    EG = In(() => t("br", null, null, -1)),
    qG = In(() => t("br", null, null, -1)),
    jG = V({
        __name: "TermsDamanNew",
        setup(s) {
            mt();
            const i = He(),
                o = Q(() => i.getProjectLogo),
                l = Q(() => i.getProjectName);
            return (g, m) => (n(), a(S, null, [t("div", AG, [t("div", MG, [t("img", {
                src: o.value,
                alt: ""
            }, null, 8, PG)]), DG]), w(" first container finsh here  "), t("div", OG, [E(e(g.$t("Terms", [l.value])) + ". ", 1), EG, qG, E(e(g.$t("Terms2", [l.value])) + ".", 1)])], 64))
        }
    });
const HG = U(jG, [
        ["__scopeId", "data-v-2d83646b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Home/goGame/TermsDamanNew.vue"]
    ]),
    WG = V({
        __name: "Turntable",
        setup(s) {
            const i = rt(),
                o = v(),
                l = He();

            function g() {
                l.getBigTurntableLink && window.open(l.getBigTurntableLink)
            }
            return (m, r) => (n(), a(S, null, [u(l).getOpenTurntable ? (n(), a("div", {
                key: 0,
                class: M(["turntable-lottery trntableIcon2", {
                    "lottery-bottom": u(l).getBigTurntableLink
                }]),
                onClick: r[0] || (r[0] = c => u(i).push({
                    name: "Turntable"
                }))
            }, null, 2)) : w("v-if", !0), u(l).getBigTurntableLink ? (n(), a("div", {
                key: 1,
                class: "turntable turntableIcon1",
                onClick: g,
                ref_key: "turntableId",
                ref: o
            }, null, 512)) : w("v-if", !0)], 64))
        }
    });
const FG = U(WG, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/common/Turntable.vue"]
    ]),
    VG = {
        class: "content-daman content"
    },
    UG = {
        class: "homeHead"
    },
    KG = {
        key: 0,
        class: "noLogin"
    },
    XG = {
        class: "logo"
    },
    QG = ["src"],
    YG = t("svg", {
        width: "2",
        height: "18",
        viewBox: "0 0 2 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t("path", {
        id: "Line 1",
        d: "M0.543945 1.44983L0.543946 16.5502",
        stroke: "#343A43",
        "stroke-linecap": "round"
    })], -1),
    ZG = {
        key: 1,
        class: "userInfo"
    },
    JG = {
        class: "userInfo-container"
    },
    tA = ["src", "data-img"],
    eA = {
        class: "userInfo-detail"
    },
    iA = {
        class: "name"
    },
    nA = {
        class: "wallet"
    },
    aA = t("svg", {
        width: "2",
        height: "18",
        viewBox: "0 0 2 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t("path", {
        id: "Line 1",
        d: "M0.543945 1.44983L0.543946 16.5502",
        stroke: "#343A43",
        "stroke-linecap": "round"
    })], -1),
    oA = {
        class: "promptHeader"
    },
    sA = ["innerHTML"],
    lA = {
        class: "Laundry-Con"
    },
    cA = {
        class: "Laundry-Con_tip"
    },
    rA = {
        class: "Landty-Con-tips"
    },
    uA = V({
        __name: "goGameHome",
        setup(s) {
            const {
                t: i
            } = mt(), o = rt(), l = Te(), {
                closeLaundry: g,
                closePrompt: m,
                store: r,
                promptContent: c
            } = Xs(), {
                setLoading: p
            } = Gi(), d = He(), _ = Qs(), b = Q(() => _.getAmount), k = dn("show-pwa-download", !0), T = v(ge("main/Avatar", l.getUserInfo.userPhoto));
            p(!1);
            const C = () => {
                    g(), o.push({
                        name: "SuperJackpot"
                    })
                },
                h = v(!0);
            async function y() {
                const $ = rn();
                h.value = !(l.getUserInfo.unRead > 0), $.setReadState(h.value)
            }
            const z = $ => {
                    o.push({
                        name: $
                    })
                },
                f = Q(() => d.getProjectLogo);
            return Tt(() => {
                y(), p(!1)
            }), ($, L) => {
                const I = H("van-dialog");
                return n(), a("div", VG, [t("div", UG, [u(l).getToken ? (n(), a("div", ZG, [t("div", JG, [t("img", {
                    src: T.value,
                    "data-img": u(ge)("images", "avatar1"),
                    class: "userAvatar"
                }, null, 8, tA), t("div", eA, [t("div", iA, e(u(l).getUserInfo.nickName), 1), t("div", nA, e(u(Bt)(b.value)), 1)])]), t("div", {
                    class: "withdraw",
                    onClick: L[2] || (L[2] = B => z("Withdraw"))
                }, "Withdraw"), aA, t("div", {
                    class: "recharge",
                    onClick: L[3] || (L[3] = B => z("Recharge"))
                }, "Recharge")])) : (n(), a("div", KG, [t("div", XG, [t("img", {
                    src: f.value,
                    alt: ""
                }, null, 8, QG)]), t("div", {
                    class: "register",
                    onClick: L[0] || (L[0] = B => z("register"))
                }, "Register"), YG, t("div", {
                    class: "login",
                    onClick: L[1] || (L[1] = B => z("login"))
                }, "Log in")]))]), w("下载PWA应用"), u(k) ? (n(), tt($x, {
                    key: 0
                })) : w("v-if", !0), w(" 头部轮播图 "), N(_x), w(" 滚动通知栏 "), N(xx), N(PR), w(" 热门、彩票、游戏选项卡 "), N(GG), N(HG), N(ol, {
                    type: "daman"
                }), N(FG), N(I, {
                    "class-name": "prompt-dialog",
                    show: u(r).prompt,
                    "onUpdate:show": L[4] || (L[4] = B => u(r).prompt = B),
                    onConfirm: u(m),
                    "confirm-button-text": u(i)("confirm")
                }, {
                    default: D(() => [t("div", oA, e(u(i)("prompt")), 1), t("div", {
                        class: "promptContent",
                        innerHTML: u(c)
                    }, null, 8, sA)]),
                    _: 1
                }, 8, ["show", "onConfirm", "confirm-button-text"]), N(gx, {
                    show: u(r).laundry,
                    "onUpdate:show": L[5] || (L[5] = B => u(r).laundry = B),
                    onConfirm: C,
                    "show-cancel-btn": !1,
                    confirmText: "OK",
                    title: u(i)("congratulations")
                }, {
                    content: D(() => [t("div", lA, [t("div", cA, e(u(i)("getSuper")), 1), t("div", rA, e(u(i)("getRewards")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])])
            }
        }
    });
const dA = U(uA, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/home/other/goGameHome.vue"]
    ]),
    tM = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: dA
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    MA as A, PA as B, Dd as C, gx as D, DA as E, yd as F, OA as G, EA as H, qA as I, jA as J, $d as K, HA as L, WA as M, ui as N, FA as O, VA as P, UA as Q, KA as R, ol as S, XA as T, QA as U, YA as V, ZA as W, JA as X, tM as Y, Zs as a, mA as b, _A as c, vA as d, hA as e, kA as f, fA as g, yA as h, bA as i, $A as j, wA as k, TA as l, CA as m, NA as n, LA as o, zA as p, BA as q, IA as r, SA as s, xA as t, Je as u, Ys as v, fd as w, RA as x, GA as y, AA as z
};