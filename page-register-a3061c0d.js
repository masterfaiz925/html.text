import {
    _ as se,
    K as ce,
    r as p,
    P as ae,
    J as U,
    G as te,
    A as ve,
    ad as re,
    a2 as V,
    j as D,
    a6 as g,
    l as a,
    H as u,
    a0 as v,
    a1 as F,
    ae as ge,
    aa as x,
    ak as z,
    am as me,
    a7 as oe,
    aR as pe,
    n as m,
    O as _e,
    B as Z,
    af as be,
    ag as fe,
    o as S,
    a8 as we,
    aB as he,
    aS as ye,
    a9 as K
} from "./modules-7f822252.js";
import {
    c as Fe,
    V as $e,
    P as Q,
    S as Se,
    E as Ee,
    b as Ae,
    d as Me
} from "./page-login-788e4a5a.js";
import {
    S as Ne,
    u as ke,
    c8 as ue,
    A as G,
    b5 as xe,
    b6 as Ie,
    s as Te,
    G as ne,
    ba as Re,
    cq as Ce,
    _ as ie,
    bc as Ve,
    aZ as qe,
    cr as Oe
} from "./page-activity-730ec554.js";
import {
    v as J,
    a as de
} from "./page-home-377b607d.js";
import "./native/index-20830f47.js";
import "./en-93cdab10.js";
import "./rus-ecb14220.js";
import "./vi-40bd560a.js";
import "./id-24cc3835.js";
import "./hd-c5b1d7e8.js";
import "./tha-330057b2.js";
import "./md-02b1fc1c.js";
import "./bra-1f3ea623.js";
import "./my-80d37f62.js";
import "./bdt-d8f19d0c.js";
import "./zh-3589f8b3.js";
import "./pak-9f46abf2.js";
import "./ar-64903102.js";
const Ue = f => (be("data-v-e26f70e7"), f = f(), fe(), f),
    Ge = ["onKeydown"],
    Le = {
        class: "tip"
    },
    He = {
        key: 0,
        class: "red"
    },
    je = {
        key: 1,
        class: "red"
    },
    Ke = {
        class: "register__container-tip"
    },
    Je = Ue(() => a("div", {
        class: "tipbg"
    }, null, -1)),
    ze = {
        class: "register__container-tips"
    },
    Ze = {
        class: "register__container-invitation"
    },
    Qe = {
        class: "register__container-invitation__label"
    },
    We = {
        class: "register__container-invitation__input"
    },
    Xe = ["placeholder", "disabled"],
    Ye = {
        class: "register__container-remember"
    },
    et = {
        class: "register__container-button"
    },
    tt = {
        class: "account"
    },
    st = {
        class: "loginin"
    },
    at = se({
        __name: "Register",
        props: {
            registerData: {
                type: Object,
                required: !0
            }
        },
        setup(f, {
            expose: q
        }) {
            const h = f,
                {
                    t: e
                } = ce(),
                w = Ne(),
                i = ke(),
                o = p(!1),
                t = p({
                    number: "",
                    numberType: i.rPwdForm.numberType,
                    smsvcode: "",
                    password: "",
                    rePassword: "",
                    invitecode: "",
                    registerType: "mobile"
                }),
                k = p("register");
            t.value.number = "", sessionStorage.getItem("register_a") && (t.value = JSON.parse(sessionStorage.getItem("register_a") || ""), sessionStorage.setItem("register_a", ""));
            const y = ae(),
                n = p(!1),
                b = p(!1),
                I = U(() => {
                    var s, r, _;
                    return !!((s = y.currentRoute.value.query) != null && s.invitationCode || (_ = (r = y.currentRoute.value.query) == null ? void 0 : r.r_code) != null && _.toString() || sessionStorage.getItem("invitecode"))
                }),
                T = U(() => h.registerData.isInvitecode == "1" ? e("plsEnterInvitationCode") : e("notNecessary")),
                R = "true";
            te(() => t.value.number, s => {
                i.setCountDown(0)
            }, {
                flush: "post"
            }), te(() => i.rPwdForm.numberType, s => {
                !t.value.numberType && (t.value.numberType = s)
            }, {
                flush: "post"
            });

            function A() {
                y.push({
                    name: "login"
                })
            }
            const $ = async () => {
                    if (!ue(t.value.numberType, t.value.number.trim().length)) return i.setCountDown(0), m({
                        message: e("wrongTel"),
                        wordBreak: "break-word"
                    });
                    await G(xe({
                        phone: t.value.numberType.replace("+", "") + t.value.number,
                        codeType: Ie.Registr
                    })) ? _e(e("sendSuccess")) : setTimeout(() => {
                        i.setCountDown(0)
                    }, 500)
                },
                M = U(() => {
                    var B;
                    let s = e("regTip2").match(/\d+/);
                    "" + t.value.numberType;
                    const r = (B = w.getAreaPhoneLenList.find(c => (c == null ? void 0 : c.area) == "+" + t.value.numberType)) == null ? void 0 : B.len;
                    let _ = 9;
                    return (r == null ? void 0 : r.indexOf("-")) != -1 ? _ = r == null ? void 0 : r.toString().split("-")[0] : _ = r, s ? s[0].substr(0, _) : ""
                }),
                W = s => {
                    const r = s.target;
                    r.value = r.value.replace(/[\s\n\t\r]/g, "")
                },
                C = async () => {
                    if (!ue(t.value.numberType, t.value.number.trim().length)) return m({
                        message: e("wrongTel"),
                        wordBreak: "break-word"
                    });
                    if (t.value.number.charAt(0) === "0" && t.value.numberType == "62") return m({
                        message: e("registerNumberTip"),
                        wordBreak: "break-word"
                    });
                    if (h.registerData.registerMobileState !== "1") return m({
                        message: e("registerClose"),
                        wordBreak: "break-word"
                    });
                    if (!t.value.number.trim() || n.value) {
                        n.value = !0;
                        return
                    }
                    if (h.registerData.isOpenRegisterSMS !== "0")
                        if (t.value.smsvcode.trim()) {
                            if (t.value.smsvcode.trim().length != 6) return m({
                                message: e("verifyCode6Digits"),
                                wordBreak: "break-word"
                            })
                        } else return m({
                            message: e("registerTip1"),
                            wordBreak: "break-word"
                        });
                    if (!t.value.password.trim()) return m({
                        message: e("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!J.passReg3.test(t.value.password)) {
                        o.value = !0;
                        return
                    }
                    if (!t.value.rePassword.trim()) return m({
                        message: e("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (t.value.rePassword !== t.value.password) {
                        b.value = !0;
                        return
                    } else b.value = !1;
                    if (!i.userForm.termAndPolicy) return m({
                        message: e("registerDesc1"),
                        wordBreak: "break-word"
                    });
                    h.registerData.hasCaptcha === "1" ? N() : P("")
                },
                L = s => {
                    t.value.numberType = s
                },
                H = s => {
                    t.value.number = s
                },
                j = () => {
                    ye("toPath", "ResetPassword"), y.push({
                        name: "About-AboutDetail"
                    })
                },
                l = p(),
                d = p(""),
                P = async s => {
                    Z(async () => {
                        l.value.startRequestVerify();
                        const {
                            number: r,
                            numberType: _,
                            smsvcode: B,
                            password: c,
                            invitecode: X
                        } = t.value;
                        let O = {
                            username: _.replace("+", "") + r,
                            smsvcode: B,
                            registerType: t.value.registerType,
                            pwd: c,
                            invitecode: X,
                            domainurl: window.location.hostname,
                            phonetype: Te(),
                            captchaId: d.value,
                            track: s
                        };
                        i.register(O).then(async E => {
                            var le;
                            if (E) {
                                const Pe = ne(),
                                    {
                                        token: Y,
                                        tokenHeader: De
                                    } = E == null ? void 0 : E.data;
                                Pe.setToken(Y), localStorage.setItem("tokenHeader", De), localStorage.setItem("numberType", i.getUserForm.numberType), localStorage.setItem("number", i.userForm.number), y.replace("/"), await i.getUserInfo({
                                    signature: Y
                                });
                                const ee = await i.getUserInfo({
                                        signature: Y
                                    }),
                                    {
                                        onTriggerRegister: Be
                                    } = Ce();
                                Be((le = ee == null ? void 0 : ee.data) == null ? void 0 : le.userId)
                            }
                        }).catch(E => {}).finally(() => {
                            l.value.setShowHiden(!1)
                        })
                    })
                },
                N = async () => {
                    Z(async () => {
                        l.value.startRequestGenerate();
                        const s = await G(Re());
                        s ? (d.value = s.data.captchaId, l.value.endRequestGenerate(s.data.backgroundImage, s.data.sliderImage)) : l.value.endRequestGenerate(null, null)
                    })
                };
            return ve(() => {
                var r, _;
                i.setCountDown(0);
                const s = ((r = y.currentRoute.value.query.invitationCode) == null ? void 0 : r.toString()) || ((_ = y.currentRoute.value.query.r_code) == null ? void 0 : _.toString()) || sessionStorage.getItem("invitecode") || "";
                s && (t.value.invitecode = s, sessionStorage.setItem("invitecode", s)), i.getIp()
            }), re((s, r) => {
                s.name == "About-AboutDetail" ? sessionStorage.setItem("register_a", JSON.stringify(t.value)) : sessionStorage.setItem("register_a", "")
            }), q({
                showPhoneValidate: n
            }), (s, r) => {
                const _ = V("svg-icon"),
                    B = V("van-checkbox");
                return S(), D("div", {
                    class: "register__container",
                    onKeydown: pe(C, ["enter"])
                }, [g(Fe, {
                    "show-validate": n.value,
                    "onUpdate:showValidate": r[0] || (r[0] = c => n.value = c),
                    number: t.value.number,
                    "onUpdate:number": r[1] || (r[1] = c => t.value.number = c),
                    "number-type": t.value.numberType,
                    type: k.value,
                    onChangeT: L,
                    onChangeN: H,
                    typeP: "register"
                }, null, 8, ["show-validate", "number", "number-type", "type"]), a("div", Le, [u(R) ? (S(), D("span", He, v(u(e)("regTip1")), 1)) : F("v-if", !0), u(R) ? (S(), D("p", je, v(M.value), 1)) : F("v-if", !0)]), s.registerData.isOpenRegisterSMS !== "0" ? (S(), ge($e, {
                    key: 0,
                    value: t.value.smsvcode,
                    "onUpdate:value": r[2] || (r[2] = c => t.value.smsvcode = c),
                    sendFunc: $,
                    number: t.value.number,
                    numberType: t.value.numberType
                }, null, 8, ["value", "number", "numberType"])) : F("v-if", !0), g(Q, {
                    value: t.value.password,
                    "onUpdate:value": r[3] || (r[3] = c => t.value.password = c),
                    label: u(e)("setPsw")
                }, null, 8, ["value", "label"]), x(a("div", Ke, [Je, a("span", null, v(u(e)("pswRule")), 1)], 512), [
                    [z, o.value]
                ]), g(Q, {
                    value: t.value.rePassword,
                    "onUpdate:value": r[4] || (r[4] = c => t.value.rePassword = c),
                    label: u(e)("comfirmPsw")
                }, null, 8, ["value", "label"]), x(a("div", ze, [a("span", null, v(u(e)("unmatchedInput")), 1)], 512), [
                    [z, b.value]
                ]), a("div", Ze, [a("div", Qe, [g(_, {
                    name: "invitation"
                }), a("span", null, v(u(e)("invitationCode")), 1)]), a("div", We, [x(a("input", {
                    type: "text",
                    "auto-complete": "new-password",
                    autocomplete: "off",
                    name: "userNumber",
                    "onUpdate:modelValue": r[5] || (r[5] = c => t.value.invitecode = c),
                    placeholder: T.value,
                    disabled: I.value,
                    maxlength: "20",
                    onInput: W
                }, null, 40, Xe), [
                    [me, t.value.invitecode, void 0, {
                        trim: !0
                    }]
                ])])]), a("div", Ye, [g(B, {
                    modelValue: u(i).userForm.termAndPolicy,
                    "onUpdate:modelValue": r[7] || (r[7] = c => u(i).userForm.termAndPolicy = c)
                }, {
                    default: oe(() => [we(v(u(e)("readNagree")) + " ", 1), a("span", {
                        onClick: r[6] || (r[6] = he(c => j(), ["stop"]))
                    }, v(u(e)("desPrivacy")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), a("div", et, [a("button", {
                    onClick: C
                }, v(u(e)("register")), 1), a("button", {
                    class: "login",
                    onClick: A
                }, [a("div", tt, v(u(e)("iHaveAcount")), 1), a("div", st, v(u(e)("goLogin")), 1)])]), g(Se, {
                    ref_key: "captchaRef",
                    ref: l,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    onFinish: P,
                    onRefresh: N
                }, null, 512)], 40, Ge)
            }
        }
    });
const rt = ie(at, [
        ["__scopeId", "data-v-e26f70e7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/Register.vue"]
    ]),
    ot = f => (be("data-v-1679e191"), f = f(), fe(), f),
    nt = ["onKeydown"],
    it = {
        class: "register__container-tip"
    },
    lt = ot(() => a("div", {
        class: "tipbg"
    }, null, -1)),
    ut = {
        class: "register__container-tips"
    },
    dt = {
        class: "register__container-invitation"
    },
    ct = {
        class: "register__container-invitation__label"
    },
    vt = {
        class: "register__container-invitation__input"
    },
    gt = ["placeholder", "disabled"],
    mt = {
        class: "register__container-remember"
    },
    pt = {
        class: "register__container-button"
    },
    _t = {
        class: "account"
    },
    bt = {
        class: "loginin"
    },
    ft = se({
        __name: "EmailRegister",
        props: {
            registerData: {
                type: Object,
                required: !0
            }
        },
        setup(f, {
            expose: q
        }) {
            const h = f,
                {
                    t: e
                } = ce(),
                w = p(!1),
                i = ke(),
                o = p({
                    smsvcode: "",
                    password: "",
                    rePassword: "",
                    invitecode: "",
                    email: "",
                    registerType: "email"
                }),
                t = p("register");
            sessionStorage.getItem("register") && (o.value = JSON.parse(sessionStorage.getItem("register") || ""), sessionStorage.setItem("register", ""));
            const k = ae(),
                y = p(!1),
                n = p(!1),
                b = U(() => {
                    var l;
                    return !!((l = k.currentRoute.value.query) != null && l.invitationCode)
                }),
                I = U(() => h.registerData.isInvitecode == "1" ? e("plsEnterInvitationCode") : e("notNecessary"));
            te(() => o.value.email, l => {
                i.setCountDown(0)
            }, {
                flush: "post"
            });

            function T() {
                k.push({
                    name: "login"
                })
            }
            const R = async () => {
                    if (!J.email1.test(o.value.email)) return i.setCountEmailDown(0), m({
                        message: e(de.email),
                        wordBreak: "break-word"
                    });
                    await G(Ve({
                        email: o.value.email,
                        emailType: Ie.Registr
                    })) ? _e(e("sendSuccess")) : i.setCountEmailDown(0)
                },
                A = l => {
                    const d = l.target;
                    d.value = d.value.replace(/[\s\n\t\r]/g, "")
                },
                $ = async () => {
                    if (h.registerData.registerEmailState !== "1") return m({
                        message: e("registerClose"),
                        wordBreak: "break-word"
                    });
                    if (h.registerData.isOpenRegisterEmail !== "0")
                        if (o.value.smsvcode.trim()) {
                            if (o.value.smsvcode.trim().length != 6) return m({
                                message: e("verifyCode6Digits"),
                                wordBreak: "break-word"
                            })
                        } else return m({
                            message: e("registerTip6"),
                            wordBreak: "break-word"
                        });
                    if (!J.email1.test(o.value.email)) return m({
                        message: e(de.email),
                        wordBreak: "break-word"
                    });
                    if (!o.value.password.trim()) return m({
                        message: e("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!J.passReg3.test(o.value.password)) {
                        w.value = !0;
                        return
                    }
                    if (!o.value.rePassword.trim()) return m({
                        message: e("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (o.value.rePassword !== o.value.password) {
                        n.value = !0;
                        return
                    } else n.value = !1;
                    if (!i.userForm.termAndPolicy) return m({
                        message: e("registerDesc1"),
                        wordBreak: "break-word"
                    });
                    h.registerData.hasCaptcha === "1" ? j() : H("")
                },
                M = l => {
                    o.value.email = l
                },
                W = () => {
                    ye("toPath", "ResetPassword"), k.push({
                        name: "About-AboutDetail"
                    })
                },
                C = p(),
                L = p(""),
                H = async l => {
                    Z(async () => {
                        C.value.startRequestVerify();
                        const {
                            smsvcode: d,
                            password: P,
                            invitecode: N
                        } = o.value;
                        let s = {
                            username: o.value.email,
                            smsvcode: d,
                            registerType: o.value.registerType,
                            pwd: P,
                            invitecode: N,
                            domainurl: window.location.hostname,
                            phonetype: Te(),
                            captchaId: L.value,
                            track: l
                        };
                        i.register(s).then(async r => {
                            var _;
                            if (r) {
                                const B = ne(),
                                    {
                                        token: c,
                                        tokenHeader: X
                                    } = r == null ? void 0 : r.data;
                                B.setToken(c), localStorage.setItem("tokenHeader", X), localStorage.setItem("numberType", i.getUserForm.numberType), localStorage.setItem("number", i.userForm.number), k.replace("/");
                                const O = await i.getUserInfo({
                                        signature: c
                                    }),
                                    {
                                        onTriggerRegister: E
                                    } = Ce();
                                E((_ = O == null ? void 0 : O.data) == null ? void 0 : _.userId)
                            }
                        }).catch(r => {}).finally(() => {
                            C.value.setShowHiden(!1)
                        })
                    })
                },
                j = async () => {
                    Z(async () => {
                        C.value.startRequestGenerate();
                        const l = await G(Re());
                        l ? (L.value = l.data.captchaId, C.value.endRequestGenerate(l.data.backgroundImage, l.data.sliderImage)) : C.value.endRequestGenerate(null, null)
                    })
                };
            return ve(() => {
                var d, P;
                i.setCountEmailDown(0);
                const l = ((d = k.currentRoute.value.query.invitationCode) == null ? void 0 : d.toString()) || ((P = k.currentRoute.value.query.r_code) == null ? void 0 : P.toString()) || sessionStorage.getItem("invitecode") || "";
                l && (o.value.invitecode = l)
            }), re((l, d) => {
                l.name == "About-AboutDetail" ? sessionStorage.setItem("register", JSON.stringify(o.value)) : sessionStorage.setItem("register", "")
            }), q({
                showPhoneValidate: y
            }), (l, d) => {
                const P = V("svg-icon"),
                    N = V("van-checkbox");
                return S(), D("div", {
                    class: "register__container",
                    onKeydown: pe($, ["enter"])
                }, [g(Ee, {
                    ref: "email",
                    type: t.value,
                    email: o.value.email,
                    onChangeN: M
                }, null, 8, ["type", "email"]), l.registerData.isOpenRegisterEmail !== "0" ? (S(), ge(Ae, {
                    key: 0,
                    value: o.value.smsvcode,
                    "onUpdate:value": d[0] || (d[0] = s => o.value.smsvcode = s),
                    sendFunc: R,
                    email: o.value.email
                }, null, 8, ["value", "email"])) : F("v-if", !0), g(Q, {
                    value: o.value.password,
                    "onUpdate:value": d[1] || (d[1] = s => o.value.password = s),
                    label: u(e)("setPsw")
                }, null, 8, ["value", "label"]), x(a("div", it, [lt, a("span", null, v(u(e)("pswRule")), 1)], 512), [
                    [z, w.value]
                ]), g(Q, {
                    value: o.value.rePassword,
                    "onUpdate:value": d[2] || (d[2] = s => o.value.rePassword = s),
                    label: u(e)("comfirmPsw")
                }, null, 8, ["value", "label"]), x(a("div", ut, [a("span", null, v(u(e)("unmatchedInput")), 1)], 512), [
                    [z, n.value]
                ]), a("div", dt, [a("div", ct, [g(P, {
                    name: "invitation"
                }), a("span", null, v(u(e)("invitationCode")), 1)]), a("div", vt, [x(a("input", {
                    type: "text",
                    "auto-complete": "new-password",
                    autocomplete: "off",
                    name: "userNumber",
                    "onUpdate:modelValue": d[3] || (d[3] = s => o.value.invitecode = s),
                    placeholder: I.value,
                    disabled: b.value,
                    maxlength: "20",
                    onInput: A
                }, null, 40, gt), [
                    [me, o.value.invitecode, void 0, {
                        trim: !0
                    }]
                ])])]), a("div", mt, [g(N, {
                    modelValue: u(i).userForm.termAndPolicy,
                    "onUpdate:modelValue": d[5] || (d[5] = s => u(i).userForm.termAndPolicy = s)
                }, {
                    default: oe(() => [we(v(u(e)("readNagree")) + " ", 1), a("span", {
                        onClick: d[4] || (d[4] = he(s => W(), ["stop"]))
                    }, v(u(e)("desPrivacy")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), a("div", pt, [a("button", {
                    onClick: $
                }, v(u(e)("register")), 1), a("button", {
                    class: "login",
                    onClick: T
                }, [a("div", _t, v(u(e)("iHaveAcount")), 1), a("div", bt, v(u(e)("goLogin")), 1)])]), g(Se, {
                    ref_key: "captchaRef",
                    ref: C,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    onFinish: H,
                    onRefresh: j
                }, null, 512)], 40, nt)
            }
        }
    });
const wt = ie(ft, [
        ["__scopeId", "data-v-1679e191"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/EmailRegister.vue"]
    ]),
    ht = {
        class: "resgister__C"
    },
    yt = {
        class: "resgister__C-heading"
    },
    St = {
        class: "resgister__C-heading__title"
    },
    kt = {
        class: "resgister__C-heading__subTitle"
    },
    It = {
        class: "login_container-tab"
    },
    Tt = {
        class: "resgister__C-form"
    },
    Rt = se({
        __name: "index",
        setup(f) {
            const {
                openAll: q
            } = qe(), h = ne(), e = p({
                isRegisterState: "1",
                SMSstate: "0",
                registerStateMsg: "",
                hasCaptcha: "0",
                registerEmailState: "0",
                registerMobileState: "0",
                isOpenRegisterSMS: "0",
                isOpenRegisterEmail: "0",
                isInvitecode: "0"
            }), w = p("phone"), i = ae();
            h.token && i.push({
                name: "home"
            });
            const o = n => {
                w.value = n
            };
            re((n, b, I) => {
                I(), n.name === "home" && q()
            });
            const t = p();

            function k() {
                i.push({
                    name: "home"
                })
            }
            async function y() {
                var b, I, T, R, A, $, M;
                const n = await G(Oe());
                n && (e.value.isRegisterState = n.data.registerState, e.value.registerStateMsg = n.data.registerStateMsg, e.value.registerEmailState = n.data.registerEmailState, e.value.registerMobileState = (b = n.data) == null ? void 0 : b.registerMobileState, e.value.isOpenRegisterSMS = (I = n.data) == null ? void 0 : I.isOpenRegisterSMS, e.value.isOpenRegisterEmail = (T = n.data) == null ? void 0 : T.isOpenRegisterEmail, e.value.hasCaptcha = n.data.isOpenCaptcha, e.value.isInvitecode = (R = n.data) == null ? void 0 : R.isInvitecode, Number(n.data.registerEmailState) + Number((A = n.data) == null ? void 0 : A.registerMobileState) == 0 ? ((($ = n.data) == null ? void 0 : $.isOpenRegisterSMS) !== "1" && (w.value = "email"), i.push({
                    name: "login"
                })) : (e.value.registerSMSState = n.data.registerSMSState, e.value.registerEmailState !== "0" && ((M = n.data) == null ? void 0 : M.registerMobileState) == "0" && (w.value = "email")))
            }
            return y(), (n, b) => {
                const I = V("NavBar"),
                    T = V("svg-icon");
                return S(), D("div", ht, [g(I, {
                    onClickLeft: k,
                    leftArrow: !0,
                    headLogo: !0,
                    class: "main"
                }, {
                    right: oe(() => [g(Me)]),
                    _: 1
                }), a("div", yt, [a("h1", St, v(n.$t("register")), 1), a("div", kt, [a("span", null, v(n.$t("registerbyphoneoremail")), 1)])]), a("div", It, [e.value.registerMobileState != "0" ? (S(), D("div", {
                    key: 0,
                    class: K(["tab", [w.value == "phone" ? "active" : ""]]),
                    onClick: b[0] || (b[0] = R => o("phone"))
                }, [g(T, {
                    name: "phone"
                }), a("div", null, v(n.$t("phoneregister")), 1)], 2)) : F("v-if", !0), e.value.registerEmailState != "0" ? (S(), D("div", {
                    key: 1,
                    class: K(["tab", [w.value == "email" ? "active" : ""]]),
                    onClick: b[1] || (b[1] = R => o("email"))
                }, [g(T, {
                    name: "email"
                }), a("div", null, v(n.$t("emailregister")), 1)], 2)) : F("v-if", !0)]), a("div", Tt, [e.value.registerMobileState != "0" ? (S(), D("div", {
                    key: 0,
                    class: K(["tab-content", [w.value == "phone" ? "activecontent" : ""]])
                }, [g(rt, {
                    ref_key: "register",
                    ref: t,
                    registerData: e.value
                }, null, 8, ["registerData"])], 2)) : F("v-if", !0), e.value.registerEmailState != "0" ? (S(), D("div", {
                    key: 1,
                    class: K(["tab-content", [w.value == "email" ? "activecontent" : ""]])
                }, [g(wt, {
                    ref_key: "register",
                    ref: t,
                    registerData: e.value
                }, null, 8, ["registerData"])], 2)) : F("v-if", !0)])])
            }
        }
    });
const jt = ie(Rt, [
    ["__scopeId", "data-v-4752d5f1"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/register/index.vue"]
]);
export {
    jt as
    default
};