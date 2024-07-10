(function (g) {
    var window = this; 'use strict'; var a8 = function (a) { g.Bp(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36)); return a }, b8 = function (a, b, c) {
        Array.isArray(c) || (c = [String(c)]);
        g.Dga(a.B, b, c)
    }, QAb = function (a) {
        if (a instanceof g.wt) return a;
        if ("function" == typeof a.Ek) return a.Ek(!1); if (g.ab(a)) {
            var b = 0, c = new g.wt; c.next = function () { for (; ;) { if (b >= a.length) return g.s2; if (b in a) return g.xt(a[b++]); b++ } };
            return c
        } throw Error("Not implemented");
    }, RAb = function (a, b, c) {
        if (g.ab(a)) g.$b(a, b, c);
        else for (a = QAb(a); ;) { var d = a.next(); if (d.done) break; b.call(c, d.value, void 0, a) }
    }, SAb = function (a, b) {
        var c = [];
        RAb(b, function (d) { try { var e = g.Nv.prototype.B.call(this, d, !0) } catch (f) { if ("Storage: Invalid value was encountered" == f) return; throw f; } void 0 === e ? c.push(d) : g.tla(e) && c.push(d) }, a);
        return c
    }, TAb = function (a, b) { SAb(a, b).forEach(function (c) { g.Nv.prototype.remove.call(this, c) }, a) }, UAb = function (a) {
        if (a.qa) {
            if (a.qa.locationOverrideToken) return { locationOverrideToken: a.qa.locationOverrideToken };
            if (null != a.qa.latitudeE7 && null != a.qa.longitudeE7) return { latitudeE7: a.qa.latitudeE7, longitudeE7: a.qa.longitudeE7 }
        } return null
    }, VAb = function (a, b) { g.Fb(a, b) || a.push(b) }, WAb = function (a) {
        var b = 0, c;
        for (c in a) b++; return b
    }, XAb = function (a, b) { return g.ld(a, b) }, YAb = function (a) {
        try { return g.Ta.JSON.parse(a) } catch (b) { } a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try { return eval("(" + a + ")") } catch (b) { } throw Error("Invalid JSON string: " + a);
    }, c8 = function (a) { if (g.Ta.JSON) try { return g.Ta.JSON.parse(a) } catch (b) { } return YAb(a) }, ZAb = function (a) {
        if (a.im && "function" == typeof a.im) return a.im();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values()); if ("string" === typeof a) return a.split(""); if (g.ab(a)) { for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]); return b } return g.hd(a)
    }, $Ab = function (a) {
        if (a.zn && "function" == typeof a.zn) return a.zn();
        if (!a.im || "function" != typeof a.im) { if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys()); if (!("undefined" !== typeof Set && a instanceof Set)) { if (g.ab(a) || "string" === typeof a) { var b = []; a = a.length; for (var c = 0; c < a; c++)b.push(c); return b } return g.id(a) } }
    }, aBb = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (g.ab(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0); else for (var c = $Ab(a), d = ZAb(a), e = d.length, f = 0; f < e; f++)b.call(void 0, d[f], c && c[f], a)
    }, bBb = function (a, b, c, d) {
        var e = new g.Ho(null);
        a && g.Io(e, a); b && g.Jo(e, b); c && g.Ko(e, c); d && (e.C = d); return e
    }, cBb = function () {
        this.j = d8();
        this.j.Mh("/client_streamz/youtube/living_room/mdx/channel/opened", { Lc: 3, Kc: "channel_type" })
    }, dBb = function (a, b) { a.j.Ii("/client_streamz/youtube/living_room/mdx/channel/opened", b) }, eBb = function () {
        this.j = d8();
        this.j.Mh("/client_streamz/youtube/living_room/mdx/channel/closed", { Lc: 3, Kc: "channel_type" })
    }, fBb = function (a, b) { a.j.Ii("/client_streamz/youtube/living_room/mdx/channel/closed", b) }, gBb = function () {
        this.j = d8();
        this.j.Mh("/client_streamz/youtube/living_room/mdx/channel/message_received", { Lc: 3, Kc: "channel_type" })
    }, hBb = function (a, b) { a.j.Ii("/client_streamz/youtube/living_room/mdx/channel/message_received", b) }, iBb = function () {
        this.j = d8();
        this.j.Mh("/client_streamz/youtube/living_room/mdx/channel/error", { Lc: 3, Kc: "channel_type" })
    }, jBb = function (a, b) { a.j.Ii("/client_streamz/youtube/living_room/mdx/channel/error", b) }, kBb = function () {
        this.j = d8();
        this.j.Mh("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    }, lBb = function () {
        this.j = d8();
        this.j.Mh("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    }, pBb = function (a) {
        this.name = this.id = "";
        this.clientName = "UNKNOWN_INTERFACE"; this.app = ""; this.type = "REMOTE_CONTROL"; this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = ""; this.capabilities = new Set; this.compatibleSenderThemes = new Set; this.experiments = new Set; this.theme = "u"; new g.Sv; this.model = this.brand = ""; this.year = 0; this.chipset = this.osVersion = this.os = ""; this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN"; a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
            this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", mBb(this, a.capabilities || ""), nBb(this, a.compatibleSenderThemes || ""), oBb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
            "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
    }, mBb = function (a, b) {
        a.capabilities.clear();
        g.Ct(b.split(","), g.jb(XAb, qBb)).forEach(function (c) { a.capabilities.add(c) })
    }, nBb = function (a, b) {
        a.compatibleSenderThemes.clear();
        g.Ct(b.split(","), g.jb(XAb, rBb)).forEach(function (c) { a.compatibleSenderThemes.add(c) })
    }, oBb = function (a, b) {
        a.experiments.clear();
        b.split(",").forEach(function (c) { a.experiments.add(c) })
    }, e8 = function (a) {
        a = a || {};
        this.name = a.name || ""; this.id = a.id || a.screenId || ""; this.token = a.token || a.loungeToken || ""; this.uuid = a.uuid || a.dialId || ""; this.idType = a.screenIdType || "normal"
    }, f8 = function (a, b) { return !!b && (a.id == b || a.uuid == b) }, sBb = function (a) {
        return {
            name: a.name,
            screenId: a.id, loungeToken: a.token, dialId: a.uuid, screenIdType: a.idType
        }
    }, tBb = function (a) { return new e8(a) }, uBb = function (a) { return Array.isArray(a) ? g.Nr(a, tBb) : [] }, g8 = function (a) { return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null" }, vBb = function (a) { return Array.isArray(a) ? "[" + g.Nr(a, g8).join(",") + "]" : "null" }, wBb = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
            function (a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
    }, xBb = function (a) {
        return g.Nr(a, function (b) {
            return {
                key: b.id,
                name: b.name
            }
        })
    }, yBb = function (a, b) { return g.Db(a, function (c) { return c || b ? !c != !b ? !1 : c.id == b.id : !0 }) }, h8 = function (a, b) { return g.Db(a, function (c) { return f8(c, b) }) }, zBb = function () {
        var a = (0, g.qC)();
        a && TAb(a, a.j.Ek(!0))
    }, i8 = function () {
        var a = g.sC("yt-remote-connected-devices") || [];
        g.Wb(a); return a
    }, ABb = function (a) {
        if (0 == a.length) return [];
        var b = a[0].indexOf("#"), c = -1 == b ? a[0] : a[0].substring(0, b); return g.Nr(a, function (d, e) { return 0 == e ? d : d.substring(c.length) })
    }, BBb = function (a) { g.rC("yt-remote-connected-devices", a, 86400) }, j8 = function () {
        if (CBb) return CBb;
        var a = g.sC("yt-remote-device-id"); a || (a = wBb(), g.rC("yt-remote-device-id", a, 31536E3)); for (var b = i8(), c = 1, d = a; g.Fb(b, d);)c++, d = a + "#" + c; return CBb = d
    }, DBb = function () {
        var a = i8(), b = j8();
        g.uC() && g.Zb(a, b); a = ABb(a); if (0 == a.length) try { g.Ppa("remote_sid") } catch (c) { } else try { g.JB("remote_sid", a.join(","), -1) } catch (c) { }
    }, EBb = function () { return g.sC("yt-remote-session-browser-channel") }, FBb = function () { return g.sC("yt-remote-local-screens") || [] }, GBb = function () { g.rC("yt-remote-lounge-token-expiration", !0, 86400) }, HBb = function (a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = g.Nr(FBb(), function (d) { return d.loungeToken }), c = g.Nr(a, function (d) { return d.loungeToken });
        g.Or(c, function (d) { return !g.Fb(b, d) }) && GBb();
        g.rC("yt-remote-local-screens", a, 31536E3)
    }, k8 = function (a) {
        a || (g.tC("yt-remote-session-screen-id"), g.tC("yt-remote-session-video-id"));
        DBb(); a = i8(); g.Hb(a, j8()); BBb(a)
    }, IBb = function () {
        if (!l8) {
            var a = g.$v();
            a && (l8 = new g.Kv(a))
        }
    }, JBb = function () {
        IBb();
        return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
    }, m8 = function (a, b) {
        g.eE[a] = !0;
        var c = g.cE(); c && c.publish.apply(c, arguments); g.eE[a] = !1
    }, KBb = function () { }, d8 = function () {
        if (!n8) {
            n8 = new g.Hg(new KBb);
            var a = g.zB("client_streamz_web_flush_count", -1); -1 !== a && (n8.C = a)
        } return n8
    }, LBb = function () {
        var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
        return a ? parseInt(a[1], 10) : 0
    }, MBb = function (a) { return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a)) }, NBb = function () { return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null }, o8 = function (a) { a.length ? OBb(a.shift(), function () { o8(a) }) : PBb() }, QBb = function (a) { return "chrome-extension://" + a + "/cast_sender.js" }, OBb = function (a, b, c) {
        var d = document.createElement("script");
        d.onerror = b; c && (d.onload = c); g.Ve(d, g.Pw(a)); (document.head || document.documentElement).appendChild(d)
    }, RBb = function () {
        var a = LBb(), b = [];
        if (1 < a) { var c = a - 1; b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js"); b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js") } return b
    }, PBb = function () {
        var a = NBb();
        a && a(!1, "No cast extension found")
    }, TBb = function () {
        if (SBb) {
            var a = 2, b = NBb(), c = function () {
                a--;
                0 == a && b && b(!0)
            };
            window.__onGCastApiAvailable = c; OBb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", PBb, c)
        }
    }, UBb = function () {
        TBb();
        var a = RBb(); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); o8(a)
    }, WBb = function () {
        TBb();
        var a = RBb(); a.push.apply(a, g.qa(VBb.map(QBb))); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); o8(a)
    }, p8 = function (a, b, c) {
        g.I.call(this);
        this.K = null != c ? (0, g.gb)(a, c) : a; this.Ri = b; this.G = (0, g.gb)(this.H3, this); this.j = !1; this.B = 0; this.C = this.hd = null; this.D = []
    }, q8 = function (a, b, c) {
        g.I.call(this);
        this.D = null != c ? a.bind(c) : a; this.Ri = b; this.C = null; this.j = !1; this.B = 0; this.hd = null
    }, XBb = function (a) {
        a.hd = g.Fg(function () {
            a.hd = null;
            a.j && !a.B && (a.j = !1, XBb(a))
        }, a.Ri);
        var b = a.C; a.C = null; a.D.apply(null, b)
    }, r8 = function () { }, YBb = function () { g.zb.call(this, "p") }, ZBb = function () { g.zb.call(this, "o") }, aCb = function () { return $Bb = $Bb || new g.Jd }, bCb = function (a) { g.zb.call(this, "serverreachability", a) }, s8 = function (a) {
        var b = aCb();
        b.dispatchEvent(new bCb(b, a))
    }, cCb = function (a) { g.zb.call(this, "statevent", a) }, t8 = function (a) {
        var b = aCb();
        b.dispatchEvent(new cCb(b, a))
    }, dCb = function (a, b, c, d) {
        g.zb.call(this, "timingevent", a);
        this.size = b; this.retries = d
    }, u8 = function (a, b) {
        if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
        return g.Ta.setTimeout(function () { a() }, b)
    }, v8 = function () { }, w8 = function (a, b, c, d) {
        this.G = a;
        this.D = b; this.pc = c; this.Yb = d || 1; this.bb = new g.Gp(this); this.zb = 45E3; a = g.aS ? 125 : void 0; this.fb = new g.Eg(a); this.Na = null; this.C = !1; this.Y = this.Za = this.Z = this.Ra = this.Ba = this.Hb = this.qa = null; this.ra = []; this.j = null; this.K = 0; this.N = this.Ga = null; this.Ib = -1; this.La = !1; this.sb = 0; this.Wa = null; this.Qb = this.Va = this.Kb = this.Da = !1; this.B = new eCb
    }, eCb = function () {
        this.C = null;
        this.j = ""; this.B = !1
    }, gCb = function (a, b, c) {
        a.Ra = 1;
        a.Z = a8(b.clone()); a.Y = c; a.Da = !0; fCb(a, null)
    }, fCb = function (a, b) {
        a.Ba = Date.now();
        x8(a); a.Za = a.Z.clone(); b8(a.Za, "t", a.Yb); a.K = 0; var c = a.G.Ra; a.B = new eCb; a.j = hCb(a.G, c ? b : null, !a.Y); 0 < a.sb && (a.Wa = new q8((0, g.gb)(a.BT, a, a.j), a.sb)); a.bb.listen(a.j, "readystatechange", a.K3); b = a.Na ? g.qd(a.Na) : {}; a.Y ? (a.Ga || (a.Ga = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Za, a.Ga, a.Y, b)) : (a.Ga = "GET", a.j.send(a.Za, a.Ga, null, b)); s8(1)
    }, iCb = function (a) { return a.j ? "GET" == a.Ga && 2 != a.Ra && a.G.Qe : !1 }, nCb = function (a, b, c) {
        for (var d = !0, e; !a.La && a.K < c.length;)if (e = jCb(a, c), e == kCb) {
            4 ==
                b && (a.N = 4, t8(14), d = !1);
            break
        } else if (e == lCb) { a.N = 4; t8(15); d = !1; break } else mCb(a, e); iCb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0); 4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1); a.C = a.C && d; d ? 0 < c.length && !a.Qb && (a.Qb = !0, a.G.xQ(a)) : (y8(a), z8(a))
    }, jCb = function (a, b) {
        var c = a.K, d = b.indexOf("\n", c);
        if (-1 == d) return kCb; c = Number(b.substring(c, d)); if (isNaN(c)) return lCb; d += 1; if (d + c > b.length) return kCb; b = b.slice(d, d + c); a.K = d + c; return b
    }, x8 = function (a) {
        a.Hb = Date.now() + a.zb;
        oCb(a, a.zb)
    }, oCb = function (a, b) {
        if (null != a.qa) throw Error("WatchDog timer not null");
        a.qa = u8((0, g.gb)(a.I3, a), b)
    }, A8 = function (a) { a.qa && (g.Ta.clearTimeout(a.qa), a.qa = null) }, z8 = function (a) { a.G.Jg() || a.La || pCb(a.G, a) }, y8 = function (a) {
        A8(a);
        g.vb(a.Wa); a.Wa = null; a.fb.stop(); a.bb.removeAll(); if (a.j) { var b = a.j; a.j = null; b.abort(); b.dispose() }
    }, mCb = function (a, b) {
        try {
            var c = a.G;
            if (0 != c.Jh && (c.j == a || qCb(c.B, a))) if (!a.Va && qCb(c.B, a) && 3 == c.Jh) { try { var d = c.Af.j.parse(b) } catch (w) { d = null } if (Array.isArray(d) && 3 == d.length) { var e = d; if (0 == e[0]) a: { if (!c.Z) { if (c.j) if (c.j.Ba + 3E3 < a.Ba) B8(c), C8(c); else break a; rCb(c); t8(18) } } else c.Ud = e[1], 0 < c.Ud - c.Wa && 37500 > e[2] && c.Va && 0 == c.ra && !c.qa && (c.qa = u8((0, g.gb)(c.L3, c), 6E3)); if (1 >= sCb(c.B) && c.Tc) { try { c.Tc() } catch (w) { } c.Tc = void 0 } } else D8(c, 11) } else if ((a.Va || c.j == a) && B8(c), !g.fc(b)) for (e = c.Af.j.parse(b), b = 0; b < e.length; b++) {
                var f = e[b]; c.Wa = f[0];
                f = f[1]; if (2 == c.Jh) if ("c" == f[0]) {
                    c.D = f[1]; c.Qb = f[2]; var h = f[3]; null != h && (c.CT = h); var l = f[5]; null != l && "number" === typeof l && 0 < l && (c.bb = 1.5 * l); d = c; var m = a.NO(); if (m) { var n = g.Tn(m, "X-Client-Wire-Protocol"); if (n) { var p = d.B; !p.j && (g.ic(n, "spdy") || g.ic(n, "quic") || g.ic(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (tCb(p, p.B), p.B = null)) } if (d.Da) { var q = g.Tn(m, "X-HTTP-Session-Id"); q && (d.He = q, g.Bp(d.Na, d.Da, q)) } } c.Jh = 3; c.G && c.G.IT(); c.Ec && (c.Jd = Date.now() - a.Ba); d = c; var r = a; d.xd = uCb(d, d.Ra ? d.Qb : null, d.Yb); if (r.Va) {
                        vCb(d.B,
                            r); var t = r, v = d.bb; v && t.setTimeout(v); t.qa && (A8(t), x8(t)); d.j = r
                    } else wCb(d); 0 < c.C.length && E8(c)
                } else "stop" != f[0] && "close" != f[0] || D8(c, 7); else 3 == c.Jh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.HT(f), c.ra = 0)
            } s8(4)
        } catch (w) { }
    }, xCb = function (a, b) {
        this.j = a;
        this.map = b; this.context = null
    }, yCb = function (a) {
        this.G = a || 10;
        g.Ta.PerformanceNavigationTiming ? (a = g.Ta.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Ta.chrome && g.Ta.chrome.loadTimes && g.Ta.chrome.loadTimes() && g.Ta.chrome.loadTimes().wasFetchedViaSpdy); this.D = a ? this.G : 1; this.j = null; 1 < this.D && (this.j = new Set); this.B = null; this.C = []
    }, zCb = function (a) { return a.B ? !0 : a.j ? a.j.size >= a.D : !1 }, sCb = function (a) { return a.B ? 1 : a.j ? a.j.size : 0 }, qCb = function (a, b) { return a.B ? a.B == b : a.j ? a.j.has(b) : !1 }, tCb =
            function (a, b) { a.j ? a.j.add(b) : a.B = b }, vCb = function (a, b) { a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b) }, ACb = function (a) {
                if (null != a.B) return a.C.concat(a.B.ra);
                if (null != a.j && 0 !== a.j.size) { var b = a.C; a = g.u(a.j.values()); for (var c = a.next(); !c.done; c = a.next())b = b.concat(c.value.ra); return b } return g.Lb(a.C)
            }, BCb = function (a, b) {
                var c = new v8;
                if (g.Ta.Image) {
                    var d = new Image; d.onload = g.jb(F8, c, "TestLoadImage: loaded", !0, b, d); d.onerror = g.jb(F8, c, "TestLoadImage: error", !1, b, d); d.onabort = g.jb(F8, c, "TestLoadImage: abort", !1, b, d); d.ontimeout = g.jb(F8, c, "TestLoadImage: timeout", !1, b, d); g.Ta.setTimeout(function () { if (d.ontimeout) d.ontimeout() }, 1E4);
                    d.src = a
                } else b(!1)
            }, CCb = function (a, b) {
                var c = new v8, d = new AbortController, e = setTimeout(function () {
                    d.abort();
                    F8(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
                fetch(a, { signal: d.signal }).then(function (f) { clearTimeout(e); f.ok ? F8(c, "TestPingServer: ok", !0, b) : F8(c, "TestPingServer: server error", !1, b) }).catch(function () {
                    clearTimeout(e);
                    F8(c, "TestPingServer: error", !1, b)
                })
            }, F8 = function (a, b, c, d, e) { try { e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c) } catch (f) { } }, DCb = function () { this.j = new r8 }, ECb = function (a, b, c) {
                var d = c || "";
                try { aBb(a, function (e, f) { var h = e; g.bb(e) && (h = g.Vm(e)); b.push(d + f + "=" + encodeURIComponent(h)) }) } catch (e) {
                    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
                }
            }, G8 = function (a, b, c) { return c && c.N8 ? c.N8[a] || b : b }, FCb = function (a) {
                this.C = [];
                this.Qb = this.xd = this.Na = this.Yb = this.j = this.He = this.Da = this.La = this.N = this.Hb = this.Y = null; this.Qf = this.Za = 0; this.Of = G8("failFast", !1, a); this.Va = this.qa = this.Z = this.K = this.G = null; this.pc = !0; this.Ud = this.Wa = -1; this.Kb = this.ra = this.Ba = 0; this.nh = G8("baseRetryDelayMs", 5E3, a); this.Rf = G8("retryDelaySeedMs", 1E4, a); this.Pf = G8("forwardChannelMaxRetries", 2, a); this.je = G8("forwardChannelRequestTimeoutMs", 2E4, a); this.ze = a && a.oqb || void 0; this.dg = a && a.epb || void 0; this.Qe = a && a.lqb || !1; this.bb = void 0; this.Ra = a && a.lda ||
                    !1; this.D = ""; this.B = new yCb(a && a.lnb); this.Af = new DCb; this.zb = a && a.Cnb || !1; this.sb = a && a.rnb || !1; this.zb && this.sb && (this.sb = !1); this.Sf = a && a.cnb || !1; a && a.Enb && (this.pc = !1); this.Ec = !this.zb && this.pc && a && a.pnb || !1; this.jd = void 0; a && a.XY && 0 < a.XY && (this.jd = a.XY); this.Tc = void 0; this.Jd = 0; this.fb = !1; this.Ib = this.Ga = null
            }, C8 = function (a) { a.j && (GCb(a), a.j.cancel(), a.j = null) }, HCb = function (a) {
                C8(a);
                a.Z && (g.Ta.clearTimeout(a.Z), a.Z = null); B8(a); a.B.cancel(); a.K && ("number" === typeof a.K && g.Ta.clearTimeout(a.K), a.K = null)
            }, E8 = function (a) { zCb(a.B) || a.K || (a.K = !0, g.jg(a.ET, a), a.Ba = 0) }, JCb = function (a, b) {
                if (sCb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
                if (a.K) return a.C = b.ra.concat(a.C), !0; if (1 == a.Jh || 2 == a.Jh || a.Ba >= (a.Of ? 0 : a.Pf)) return !1; a.K = u8((0, g.gb)(a.ET, a, b), ICb(a, a.Ba)); a.Ba++; return !0
            }, LCb = function (a, b) {
                var c;
                b ? c = b.pc : c = a.Za++; var d = a.Na.clone(); g.Bp(d, "SID", a.D); g.Bp(d, "RID", c); g.Bp(d, "AID", a.Wa); H8(a, d); a.N && a.Y && g.Fp(d, a.N, a.Y); c = new w8(a, a.D, c, a.Ba + 1); null === a.N && (c.Na = a.Y); b && (a.C = b.ra.concat(a.C)); b = KCb(a, c, 1E3); c.setTimeout(Math.round(.5 * a.je) + Math.round(.5 * a.je * Math.random())); tCb(a.B, c); gCb(c, d, b)
            }, H8 = function (a, b) {
                a.La && g.bd(a.La, function (c, d) { g.Bp(b, d, c) });
                a.G && aBb({}, function (c, d) { g.Bp(b, d, c) })
            }, KCb = function (a, b, c) {
                c = Math.min(a.C.length, c);
                var d = a.G ? (0, g.gb)(a.G.M3, a.G, a) : null; a: for (var e = a.C, f = -1; ;) { var h = ["count=" + c]; -1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f); for (var l = !0, m = 0; m < c; m++) { var n = e[m].j, p = e[m].map; n -= f; if (0 > n) f = Math.max(0, e[m].j - 100), l = !1; else try { ECb(p, h, "req" + n + "_") } catch (q) { d && d(p) } } if (l) { d = h.join("&"); break a } } a = a.C.splice(0, c); b.ra = a; return d
            }, wCb = function (a) { a.j || a.Z || (a.Kb = 1, g.jg(a.DT, a), a.ra = 0) }, rCb = function (a) {
                if (a.j || a.Z || 3 <= a.ra) return !1;
                a.Kb++; a.Z = u8((0, g.gb)(a.DT, a), ICb(a, a.ra)); a.ra++; return !0
            }, GCb = function (a) { null != a.Ga && (g.Ta.clearTimeout(a.Ga), a.Ga = null) }, MCb = function (a) {
                a.j = new w8(a, a.D, "rpc", a.Kb);
                null === a.N && (a.j.Na = a.Y); a.j.sb = 0; var b = a.xd.clone(); g.Bp(b, "RID", "rpc"); g.Bp(b, "SID", a.D); g.Bp(b, "AID", a.Wa); g.Bp(b, "CI", a.Va ? "0" : "1"); !a.Va && a.jd && g.Bp(b, "TO", a.jd); g.Bp(b, "TYPE", "xmlhttp"); H8(a, b); a.N && a.Y && g.Fp(b, a.N, a.Y); a.bb && a.j.setTimeout(a.bb); var c = a.j; a = a.Qb; c.Ra = 1; c.Z = a8(b.clone()); c.Y = null; c.Da = !0; fCb(c, a)
            }, B8 = function (a) { null != a.qa && (g.Ta.clearTimeout(a.qa), a.qa = null) }, pCb = function (a, b) {
                var c = null;
                if (a.j == b) { B8(a); GCb(a); a.j = null; var d = 2 } else if (qCb(a.B, b)) c = b.ra, vCb(a.B, b), d = 1; else return; if (0 != a.Jh) if (b.C) if (1 == d) { c = b.Y ? b.Y.length : 0; b = Date.now() - b.Ba; var e = a.Ba; d = aCb(); d.dispatchEvent(new dCb(d, c, b, e)); E8(a) } else wCb(a); else { var f = b.Ib; e = b.getLastError(); if (3 == e || 0 == e && 0 < f || !(1 == d && JCb(a, b) || 2 == d && rCb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) { case 1: D8(a, 5); break; case 4: D8(a, 10); break; case 3: D8(a, 6); break; default: D8(a, 2) } }
            }, ICb = function (a, b) {
                var c = a.nh + Math.floor(Math.random() *
                    a.Rf);
                a.isActive() || (c *= 2); return c * b
            }, D8 = function (a, b) {
                if (2 == b) {
                    var c = (0, g.gb)(a.rda, a), d = a.dg, e = !d;
                    d = new g.Ho(d || "//www.google.com/images/cleardot.gif"); g.Ta.location && "http" == g.Ta.location.protocol || g.Io(d, "https"); a8(d); e ? BCb(d.toString(), c) : CCb(d.toString(), c)
                } else t8(2); a.Jh = 0; a.G && a.G.GT(b); NCb(a); HCb(a)
            }, NCb = function (a) {
                a.Jh = 0;
                a.Ib = []; if (a.G) { var b = ACb(a.B); if (0 != b.length || 0 != a.C.length) g.Mb(a.Ib, b), g.Mb(a.Ib, a.C), a.B.C.length = 0, g.Lb(a.C), a.C.length = 0; a.G.FT() }
            }, OCb = function (a) {
                if (0 == a.Jh) return a.Ib;
                var b = []; g.Mb(b, ACb(a.B)); g.Mb(b, a.C); return b
            }, uCb = function (a, b, c) {
                var d = g.Cp(c);
                "" != d.j ? (b && g.Jo(d, b + "." + d.j), g.Ko(d, d.D)) : (d = g.Ta.location, d = bBb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c)); b = a.Da; c = a.He; b && c && g.Bp(d, b, c); g.Bp(d, "VER", a.CT); H8(a, d); return d
            }, hCb = function (a, b, c) {
                if (b && !a.Ra) throw Error("Can't create secondary domain capable XhrIo object.");
                b = a.Qe && !a.ze ? new g.Ln(new g.Do({ G0: c })) : new g.Ln(a.ze); b.K = a.Ra; return b
            }, PCb = function () { }, QCb = function () {
                if (g.Mn && !g.Uc(10)) throw Error("Environmental error: no available transport.");
            }, J8 = function (a, b) {
                g.Jd.call(this);
                this.j = new FCb(b); this.G = a; this.B = b && b.B9 || null; a = b && b.A9 || null; b && b.jnb && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" }); this.j.Y = a; a = b && b.Iob || null; b && b.fZ && (a ? a["X-WebChannel-Content-Type"] = b.fZ : a = { "X-WebChannel-Content-Type": b.fZ }); b && b.dW && (a ? a["X-WebChannel-Client-Profile"] = b.dW : a = { "X-WebChannel-Client-Profile": b.dW }); this.j.Hb = a; (a = b && b.Hob) && !g.fc(a) && (this.j.N = a); this.K = b && b.lda || !1; this.D = b && b.Ipb || !1; (b = b && b.H8) && !g.fc(b) && (this.j.Da = b, g.jd(this.B, b) && (a = this.B,
                    b in a && delete a[b])); this.C = new I8(this)
            }, RCb = function (a) {
                YBb.call(this);
                a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__); var b = a.__sm__; b ? this.data = (this.j = g.gd(b)) ? g.od(b, this.j) : b : this.data = a
            }, SCb = function (a) {
                ZBb.call(this);
                this.status = 1; this.errorCode = a
            }, I8 = function (a) { this.j = a }, TCb = function (a, b) {
                this.B = a;
                this.j = b
            }, UCb = function (a) {
                return OCb(a.j).map(function (b) {
                    var c = a.B;
                    b = b.map; "__data__" in b ? (b = b.__data__, c = c.D ? YAb(b) : b) : c = b; return c
                })
            }, K8 = function (a, b) {
                if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
                return g.Ta.setTimeout(function () { a() }, b)
            }, M8 = function (a) { L8.dispatchEvent(new VCb(L8, a)) }, VCb = function (a) { g.zb.call(this, "statevent", a) }, N8 = function (a, b, c, d) {
                this.j = a;
                this.D = b; this.N = c; this.K = d || 1; this.B = 45E3; this.C = new g.Gp(this); this.G = new g.Eg; this.G.setInterval(250)
            }, XCb = function (a, b, c) {
                a.Vx = 1;
                a.Yr = a8(b.clone()); a.Wu = c; a.Da = !0; WCb(a, null)
            }, YCb = function (a, b, c, d, e) {
                a.Vx = 1;
                a.Yr = a8(b.clone()); a.Wu = null; a.Da = c; e && (a.e0 = !1); WCb(a, d)
            }, WCb = function (a, b) {
                a.Ux = Date.now();
                O8(a); a.gs = a.Yr.clone(); b8(a.gs, "t", a.K); a.XG = 0; a.dj = a.j.cM(a.j.lC() ? b : null); 0 < a.aM && (a.VG = new q8((0, g.gb)(a.JT, a, a.dj), a.aM)); a.C.listen(a.dj, "readystatechange", a.O3); b = a.Vu ? g.qd(a.Vu) : {}; a.Wu ? (a.WG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.dj.send(a.gs, a.WG, a.Wu, b)) : (a.WG = "GET", a.e0 && !g.Vc && (b.Connection = "close"), a.dj.send(a.gs, a.WG, null, b)); a.j.Un(1)
            }, aDb = function (a, b) {
                var c = a.XG, d = b.indexOf("\n", c);
                if (-1 == d) return ZCb; c = Number(b.substring(c, d)); if (isNaN(c)) return $Cb; d += 1; if (d + c > b.length) return ZCb; b = b.slice(d, d + c); a.XG = d + c; return b
            }, cDb = function (a, b) {
                a.Ux = Date.now();
                O8(a); var c = b ? window.location.hostname : ""; a.gs = a.Yr.clone(); g.Bp(a.gs, "DOMAIN", c); g.Bp(a.gs, "t", a.K); try { a.Co = new ActiveXObject("htmlfile") } catch (m) { P8(a); a.Zr = 7; M8(22); Q8(a); return } var d = "<html><body>"; if (b) {
                    var e = ""; for (b = 0; b < c.length; b++) {
                        var f = c.charAt(b); if ("<" == f) f = e + "\\x3c"; else if (">" == f) f = e + "\\x3e"; else {
                            if (f in R8) f = R8[f]; else if (f in bDb) f = R8[f] = bDb[f]; else {
                                var h = f.charCodeAt(0); if (31 < h && 127 > h) var l = f; else { if (256 > h) { if (l = "\\x", 16 > h || 256 < h) l += "0" } else l = "\\u", 4096 > h && (l += "0"); l += h.toString(16).toUpperCase() } f =
                                    R8[f] = l
                            } f = e + f
                        } e = f
                    } d += '<script>document.domain="' + e + '"\x3c/script>'
                } c = g.we(d + "</body></html>"); a.Co.open(); a.Co.write(g.ve(c)); a.Co.close(); a.Co.parentWindow.m = (0, g.gb)(a.wba, a); a.Co.parentWindow.d = (0, g.gb)(a.a_, a, !0); a.Co.parentWindow.rpcClose = (0, g.gb)(a.a_, a, !1); c = a.Co.createElement("DIV"); a.Co.parentWindow.document.body.appendChild(c); d = g.me(a.gs.toString()); d = g.af(g.ie(d)); d = g.we('<iframe src="' + d + '"></iframe>'); g.Mba(c, d); a.j.Un(1)
            }, O8 = function (a) {
                a.bM = Date.now() + a.B;
                dDb(a, a.B)
            }, dDb = function (a, b) {
                if (null != a.Wx) throw Error("WatchDog timer not null");
                a.Wx = K8((0, g.gb)(a.N3, a), b)
            }, eDb = function (a) { a.Wx && (g.Ta.clearTimeout(a.Wx), a.Wx = null) }, Q8 = function (a) { a.j.Jg() || a.Uu || a.j.YG(a) }, P8 = function (a) {
                eDb(a);
                g.vb(a.VG); a.VG = null; a.G.stop(); a.C.removeAll(); if (a.dj) { var b = a.dj; a.dj = null; b.abort(); b.dispose() } a.Co && (a.Co = null)
            }, fDb = function (a, b) { try { a.j.KT(a, b), a.j.Un(4) } catch (c) { } }, hDb = function (a, b, c, d, e) {
                if (0 == d) c(!1);
                else { var f = e || 0; d--; gDb(a, b, function (h) { h ? c(!0) : g.Ta.setTimeout(function () { hDb(a, b, c, d, f) }, f) }) }
            }, gDb = function (a, b, c) {
                var d = new Image;
                d.onload = function () { try { S8(d), c(!0) } catch (e) { } };
                d.onerror = function () { try { S8(d), c(!1) } catch (e) { } };
                d.onabort = function () { try { S8(d), c(!1) } catch (e) { } };
                d.ontimeout = function () { try { S8(d), c(!1) } catch (e) { } };
                g.Ta.setTimeout(function () { if (d.ontimeout) d.ontimeout() }, b);
                d.src = a
            }, S8 = function (a) {
                a.onload = null;
                a.onerror = null; a.onabort = null; a.ontimeout = null
            }, iDb = function (a) {
                this.j = a;
                this.B = new r8
            }, jDb = function (a) {
                var b = T8(a.j, a.XC, "/mail/images/cleardot.gif");
                a8(b); hDb(b.toString(), 5E3, (0, g.gb)(a.i6, a), 3, 2E3); a.Un(1)
            }, kDb = function (a) {
                var b = a.j.K;
                if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0)); else if (a.Gj = new N8(a), a.Gj.Vu = a.dM, b = a.j, b = T8(b, b.lC() ? a.kC : null, a.eM), M8(5), !g.Mn || g.Uc(10)) b8(b, "TYPE", "xmlhttp"), YCb(a.Gj, b, !1, a.kC, !1); else { b8(b, "TYPE", "html"); var c = a.Gj; a = !!a.kC; c.Vx = 3; c.Yr = a8(b.clone()); cDb(c, a) }
            }, lDb = function (a, b, c) {
                this.j = 1;
                this.B = []; this.C = []; this.G = new r8; this.Y = a || null; this.K = null != b ? b : null; this.Z = c || !1
            }, mDb = function (a, b) {
                this.j = a;
                this.map = b; this.context = null
            }, nDb = function (a, b, c, d) {
                g.zb.call(this, "timingevent", a);
                this.size = b; this.retries = d
            }, oDb = function (a) { g.zb.call(this, "serverreachability", a) }, qDb = function (a) {
                a.P3(1, 0);
                a.ZG = T8(a, null, a.fM); pDb(a)
            }, rDb = function (a) {
                a.Gs && (a.Gs.abort(), a.Gs = null);
                a.Fg && (a.Fg.cancel(), a.Fg = null); a.uq && (g.Ta.clearTimeout(a.uq), a.uq = null); V8(a); a.Uj && (a.Uj.cancel(), a.Uj = null); a.hs && (g.Ta.clearTimeout(a.hs), a.hs = null)
            }, sDb = function (a, b) {
                if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
                a.B.push(new mDb(a.Q3++, b)); 2 != a.j && 3 != a.j || pDb(a)
            }, tDb = function (a) {
                var b = 0;
                a.Fg && b++; a.Uj && b++; return b
            }, pDb = function (a) { a.Uj || a.hs || (a.hs = K8((0, g.gb)(a.PT, a), 0), a.Yx = 0) }, wDb = function (a, b) {
                if (1 == a.j) {
                    if (!b) {
                        a.nC = Math.floor(1E5 * Math.random());
                        b = a.nC++; var c = new N8(a, "", b); c.Vu = a.Ko; var d = uDb(a), e = a.ZG.clone(); g.Bp(e, "RID", b); g.Bp(e, "CVER", "1"); W8(a, e); XCb(c, e, d); a.Uj = c; a.j = 2
                    }
                } else 3 == a.j && (b ? vDb(a, b) : 0 == a.B.length || a.Uj || vDb(a))
            }, vDb = function (a, b) {
                if (b) if (6 < a.Xu) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0; var c = a.nC - 1; b = uDb(a)
                } else c = b.N, b = b.Wu; else c = a.nC++, b = uDb(a); var d = a.ZG.clone(); g.Bp(d, "SID", a.D); g.Bp(d, "RID", c); g.Bp(d, "AID", a.Zx); W8(a, d); c = new N8(a, a.D, c, a.Yx + 1); c.Vu = a.Ko; c.setTimeout(1E4 + Math.round(1E4 * Math.random())); a.Uj = c; XCb(c, d, b)
            }, W8 = function (a, b) { a.Hi && (a = a.Hi.TT()) && g.bd(a, function (c, d) { g.Bp(b, d, c) }) }, uDb = function (a) {
                var b = Math.min(a.B.length, 1E3), c = ["count=" + b];
                if (6 < a.Xu && 0 < b) { var d = a.B[0].j; c.push("ofs=" + d) } else d = 0; for (var e = {}, f = 0; f < b; e = { OE: void 0 }, f++) { e.OE = a.B[f].j; var h = a.B[f].map; e.OE = 6 >= a.Xu ? f : e.OE - d; try { g.bd(h, function (l) { return function (m, n) { c.push("req" + l.OE + "_" + n + "=" + encodeURIComponent(m)) } }(e)) } catch (l) { c.push("req" + e.OE + "_type=" + encodeURIComponent("_badmap")) } } a.C = a.C.concat(a.B.splice(0, b));
                return c.join("&")
            }, xDb = function (a) { a.Fg || a.uq || (a.N = 1, a.uq = K8((0, g.gb)(a.OT, a), 0), a.Xx = 0) }, zDb = function (a) {
                if (a.Fg || a.uq || 3 <= a.Xx) return !1;
                a.N++; a.uq = K8((0, g.gb)(a.OT, a), yDb(a, a.Xx)); a.Xx++; return !0
            }, U8 = function (a, b, c) {
                a.BL = null == a.K ? c : !a.K;
                a.Lo = b.tq; a.Z || qDb(a)
            }, V8 = function (a) { null != a.Yu && (g.Ta.clearTimeout(a.Yu), a.Yu = null) }, yDb = function (a, b) {
                var c = 5E3 + Math.floor(1E4 * Math.random());
                a.isActive() || (c *= 2); return c * b
            }, X8 = function (a, b) {
                if (2 == b || 9 == b) {
                    var c = null;
                    a.Hi && (c = null); var d = (0, g.gb)(a.qda, a); c || (c = new g.Ho("//www.google.com/images/cleardot.gif"), a8(c)); gDb(c.toString(), 1E4, d)
                } else M8(2); ADb(a, b)
            }, ADb = function (a, b) {
                a.j = 0;
                a.Hi && a.Hi.QT(b); BDb(a); rDb(a)
            }, BDb = function (a) {
                a.j = 0;
                a.Lo = -1; if (a.Hi) if (0 == a.C.length && 0 == a.B.length) a.Hi.gM(); else { var b = g.Lb(a.C), c = g.Lb(a.B); a.C.length = 0; a.B.length = 0; a.Hi.gM(b, c) }
            }, T8 = function (a, b, c) {
                var d = g.Cp(c);
                if ("" != d.j) b && g.Jo(d, b + "." + d.j), g.Ko(d, d.D); else { var e = window.location; d = bBb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c) } a.mC && g.bd(a.mC, function (f, h) { g.Bp(d, h, f) });
                g.Bp(d, "VER", a.Xu); W8(a, d); return d
            }, CDb = function () { }, DDb = function () {
                this.j = [];
                this.B = []
            }, EDb = function (a) {
                g.zb.call(this, "channelMessage");
                this.message = a
            }, FDb = function (a) {
                g.zb.call(this, "channelError");
                this.error = a
            }, GDb = function (a, b) {
                this.action = a;
                this.params = b || {}
            }, Y8 = function (a, b) {
                g.I.call(this);
                this.j = new g.bv(this.nba, 0, this); g.O(this, this.j); this.Ri = 5E3; this.B = 0; if ("function" === typeof a) b && (a = (0, g.gb)(a, b)); else if (a && "function" === typeof a.handleEvent) a = (0, g.gb)(a.handleEvent, a); else throw Error("Invalid listener argument"); this.C = a
            }, HDb = function (a, b, c, d, e) {
                c = void 0 === c ? !1 : c;
                d = void 0 === d ? function () { return "" } : d;
                e = void 0 === e ? !1 : e; this.Ba = a; this.N = b; this.C = new g.Jv; this.B = new Y8(this.Eca, this); this.j = null; this.qa = !1; this.K = null; this.Y = ""; this.Z = this.G = 0; this.D = []; this.Ra = c; this.ra = d; this.Va = e; this.Na = new cBb; this.Ga = new eBb; this.La = new gBb; this.Da = new iBb; this.Wa = new kBb; this.Za = new lBb
            }, IDb = function (a) {
                if (a.j) {
                    var b = a.ra(), c = a.j.Ko || {};
                    b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"]; a.j.Ko = c
                }
            }, Z8 = function (a) {
                this.scheme = "https";
                this.port = this.domain = ""; this.j = "/api/lounge"; this.B = !0; a = a || document.location.href; var b = Number(g.bn(4, a)) || ""; b && (this.port = ":" + b); this.domain = g.cn(a) || ""; a = g.pc(); 0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.mc(a, "10.0") && (this.B = !1))
            }, $8 = function (a, b) {
                var c = a.j;
                a.B && (c = a.scheme + "://" + a.domain + a.port + a.j); return g.jn(c + b, {})
            }, JDb = function (a, b) {
                g.Jd.call(this);
                var c = this; this.Fd = a(); this.Fd.subscribe("handlerOpened", this.S3, this); this.Fd.subscribe("handlerClosed", this.onClosed, this); this.Fd.subscribe("handlerError", function (d, e) { c.onError(e) });
                this.Fd.subscribe("handlerMessage", this.onMessage, this); this.j = b
            }, KDb = function (a, b, c) {
                var d = this;
                c = void 0 === c ? function () { return "" } : c;
                var e = void 0 === e ? new QCb : e; var f = void 0 === f ? new g.Jv : f; this.pathPrefix = a; this.j = b; this.Ba = c; this.G = f; this.Z = null; this.Y = this.N = 0; this.channel = null; this.K = 0; this.C = new Y8(function () { d.C.isActive(); var h; 0 === (null == (h = d.channel) ? void 0 : sCb((new TCb(h, h.j)).j.B)) && d.connect(d.Z, d.N) });
                this.D = {}; this.B = {}; this.qa = !1; this.logger = null; this.ra = []; this.yg = void 0; this.Na = new cBb; this.Ga = new eBb; this.La = new gBb; this.Da = new iBb
            }, LDb = function (a) {
                g.Ad(a.channel, "m", function () {
                    a.K = 3;
                    a.C.reset(); a.Z = null; a.N = 0; for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next())c = c.value, a.channel && a.channel.send(c); a.ra = []; a.publish("webChannelOpened"); dBb(a.Na, "WEB_CHANNEL")
                });
                g.Ad(a.channel, "n", function () { a.K = 0; a.C.isActive() || a.publish("webChannelClosed"); var b, c = null == (b = a.channel) ? void 0 : UCb(new TCb(b, b.j)); c && (a.ra = [].concat(g.qa(c))); fBb(a.Ga, "WEB_CHANNEL") });
                g.Ad(a.channel, "p", function (b) { var c = b.data; "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new GDb(c[0], c[1])); a.yg = b.statusCode; hBb(a.La, "WEB_CHANNEL") });
                g.Ad(a.channel, "o", function () { 401 === a.yg || a.C.start(); a.publish("webChannelError"); jBb(a.Da, "WEB_CHANNEL") })
            }, MDb = function (a) {
                var b = a.Ba();
                b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
            }, NDb = function (a) {
                g.Jd.call(this);
                this.j = a(); this.j.subscribe("webChannelOpened", this.T3, this); this.j.subscribe("webChannelClosed", this.onClosed, this); this.j.subscribe("webChannelError", this.onError, this); this.j.subscribe("webChannelMessage", this.onMessage, this)
            }, ODb = function (a, b, c, d, e) {
                function f() { return new HDb($8(a, "/bc"), b, !1, c, d) }
                c = void 0 === c ? function () { return "" } : c;
                return g.yB("enable_mdx_web_channel_desktop") ? new NDb(function () { return new KDb($8(a, "/wc"), b, c) }) : new JDb(f, e)
            }, SDb = function () {
                var a = PDb;
                QDb(); a9.push(a); RDb()
            }, b9 = function (a, b) {
                QDb();
                var c = TDb(a, String(b)); 0 == a9.length ? UDb(c) : (RDb(), g.$b(a9, function (d) { d(c) }))
            }, c9 = function (a) { b9("CP", a) }, QDb = function () { a9 || (a9 = g.Wa("yt.mdx.remote.debug.handlers_") || [], g.Va("yt.mdx.remote.debug.handlers_", a9)) }, UDb = function (a) {
                var b = (d9 + 1) % 50;
                d9 = b; e9[b] = a; f9 || (f9 = 49 == b)
            }, RDb = function () {
                var a = a9;
                if (e9[0]) {
                    var b = f9 ? d9 : -1; do { b = (b + 1) % 50; var c = e9[b]; g.$b(a, function (d) { d(c) }) } while (b != d9);
                    e9 = Array(50); d9 = -1; f9 = !1
                }
            }, TDb = function (a, b) {
                var c = (Date.now() - VDb) / 1E3;
                c.toFixed && (c = c.toFixed(3)); var d = []; d.push("[", c + "s", "] "); d.push("[", "yt.mdx.remote", "] "); d.push(a + ": " + b, "\n"); return d.join("")
            }, g9 = function (a) {
                g.vF.call(this);
                this.K = a; this.screens = []
            }, WDb = function (a, b) {
                var c = a.get(b.uuid) || a.get(b.id);
                if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a; a.screens.push(b); return !0
            }, XDb = function (a, b) {
                var c = a.screens.length != b.length;
                a.screens = g.Ct(a.screens, function (f) { return !!yBb(b, f) });
                for (var d = 0, e = b.length; d < e; d++)c = WDb(a, b[d]) || c; return c
            }, YDb = function (a, b) {
                var c = a.screens.length;
                a.screens = g.Ct(a.screens, function (d) { return !(d || b ? !d != !b ? 0 : d.id == b.id : 1) });
                return a.screens.length < c
            }, ZDb = function (a, b, c, d, e) {
                g.vF.call(this);
                this.C = a; this.N = b; this.D = c; this.K = d; this.G = e; this.B = 0; this.j = null; this.hd = NaN
            }, i9 = function (a) {
                g9.call(this, "LocalScreenService");
                this.B = a; this.j = NaN; h9(this); this.info("Initializing with " + vBb(this.screens))
            }, $Db = function (a) {
                if (a.screens.length) {
                    var b = g.Nr(a.screens, function (d) { return d.id }), c = $8(a.B, "/pairing/get_lounge_token_batch");
                    a.B.sendRequest("POST", c, { screen_ids: b.join(",") }, (0, g.gb)(a.f8, a), (0, g.gb)(a.e8, a))
                }
            }, h9 = function (a) {
                if (g.yB("deprecate_pair_servlet_enabled")) return XDb(a, []);
                var b = uBb(FBb()); b = g.Ct(b, function (c) { return !c.uuid });
                return XDb(a, b)
            }, j9 = function (a, b) {
                HBb(g.Nr(a.screens, sBb));
                b && GBb()
            }, bEb = function (a, b) {
                g.vF.call(this);
                this.K = b; b = (b = g.sC("yt-remote-online-screen-ids") || "") ? b.split(",") : []; for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) { var h = d[f].id; c[h] = g.Fb(b, h) } this.j = c; this.G = a; this.C = this.D = NaN; this.B = null; aEb("Initialized with " + g.Vm(this.j))
            }, cEb = function (a, b, c) {
                var d = $8(a.G, "/pairing/get_screen_availability");
                a.G.sendRequest("POST", d, { lounge_token: b.token }, (0, g.gb)(function (e) { e = e.screens || []; for (var f = e.length, h = 0; h < f; ++h)if (e[h].loungeToken == b.token) { c("online" == e[h].status); return } c(!1) }, a), (0, g.gb)(function () { c(!1) }, a))
            }, eEb = function (a, b) {
                a: if (WAb(b) != WAb(a.j)) var c = !1;
                else { c = g.id(b); for (var d = c.length, e = 0; e < d; ++e)if (!a.j[c[e]]) { c = !1; break a } c = !0 } c || (aEb("Updated online screens: " + g.Vm(a.j)), a.j = b, a.publish("screenChange")); dEb(a)
            }, k9 = function (a) {
                isNaN(a.C) || g.wB(a.C);
                a.C = g.sB((0, g.gb)(a.ER, a), 0 < a.D && a.D < g.kb() ? 2E4 : 1E4)
            }, aEb = function (a) { b9("OnlineScreenService", a) }, fEb = function (a) {
                var b = {};
                g.$b(a.K(), function (c) { c.token ? b[c.token] = c.id : this.cg("Requesting availability of screen w/o lounge token.") });
                return b
            }, dEb = function (a) {
                a = g.id(g.cd(a.j, function (b) { return b }));
                g.Wb(a); a.length ? g.rC("yt-remote-online-screen-ids", a.join(","), 60) : g.tC("yt-remote-online-screen-ids")
            }, l9 = function (a, b) {
                b = void 0 === b ? !1 : b;
                g9.call(this, "ScreenService"); this.D = a; this.N = b; this.j = this.B = null; this.C = []; this.G = {}; gEb(this)
            }, iEb = function (a, b, c, d, e, f) {
                a.info("getAutomaticScreenByIds " + c + " / " + b);
                c || (c = a.G[b]); var h = a.Lk(), l = c ? h8(h, c) : null; c && (a.N || l) || (l = h8(h, b)); if (l) { l.uuid = b; var m = m9(a, l); cEb(a.j, m, function (n) { e(n ? m : null) }) } else c ? hEb(a, c, (0, g.gb)(function (n) {
                    var p = m9(this, new e8({
                        name: d,
                        screenId: c, loungeToken: n, dialId: b || ""
                    })); cEb(this.j, p, function (q) { e(q ? p : null) })
                }, a), f) : e(null)
            }, jEb = function (a, b) {
                for (var c = a.screens.length, d = 0; d < c; ++d)if (a.screens[d].name == b) return a.screens[d];
                return null
            }, kEb = function (a, b, c) { cEb(a.j, b, c) }, hEb = function (a, b, c, d) {
                a.info("requestLoungeToken_ for " + b);
                var e = {
                    postParams: { screen_ids: b }, method: "POST", context: a, onSuccess: function (f, h) { f = h && h.screens || []; f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response")) },
                    onError: function () { d(Error("Request screen lounge token failed")) }
                };
                g.AB($8(a.D, "/pairing/get_lounge_token_batch"), e)
            }, lEb = function (a) {
                a.screens = a.B.Lk();
                var b = a.G, c = {}, d; for (d in b) c[b[d]] = d; b = a.screens.length; for (d = 0; d < b; ++d) { var e = a.screens[d]; e.uuid = c[e.id] || "" } a.info("Updated manual screens: " + vBb(a.screens))
            }, gEb = function (a) {
                mEb(a);
                a.B = new i9(a.D); a.B.subscribe("screenChange", (0, g.gb)(a.p8, a)); lEb(a); a.N || (a.C = uBb(g.sC("yt-remote-automatic-screen-cache") || [])); mEb(a); a.info("Initializing automatic screens: " + vBb(a.C)); a.j = new bEb(a.D, (0, g.gb)(a.Lk, a, !0)); a.j.subscribe("screenChange", (0, g.gb)(function () { this.publish("onlineScreenChange") }, a))
            }, m9 = function (a, b) {
                var c = a.get(b.id);
                c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || nEb(a)); mEb(a); a.G[b.uuid] = b.id; g.rC("yt-remote-device-id-map", a.G, 31536E3); return b
            }, nEb = function (a) {
                a = g.Ct(a.C, function (b) { return "shortLived" != b.idType });
                g.rC("yt-remote-automatic-screen-cache", g.Nr(a, sBb))
            }, mEb = function (a) { a.G = g.sC("yt-remote-device-id-map") || {} }, n9 = function (a, b, c) {
                g.vF.call(this);
                this.Da = c; this.D = a; this.B = b; this.j = null
            }, o9 = function (a, b) {
                a.j = b;
                a.publish("sessionScreen", a.j)
            }, oEb = function (a, b) {
                a.j && (a.j.token = b, m9(a.D, a.j));
                a.publish("sessionScreen", a.j)
            }, p9 = function (a, b) { b9(a.Da, b) }, q9 = function (a, b, c) {
                n9.call(this, a, b, "CastSession");
                var d = this; this.config_ = c; this.C = null; this.ra = (0, g.gb)(this.Y3, this); this.Ga = (0, g.gb)(this.Eba, this); this.qa = g.sB(function () { pEb(d, null) }, 12E4);
                this.N = this.G = this.K = this.Z = 0; this.Ba = !1; this.Y = "unknown"
            }, rEb = function (a, b) {
                g.wB(a.N);
                a.N = 0; 0 == b ? qEb(a) : a.N = g.sB(function () { qEb(a) }, b)
            }, qEb = function (a) {
                sEb(a, "getLoungeToken");
                g.wB(a.G); a.G = g.sB(function () { tEb(a, null) }, 3E4)
            }, sEb = function (a, b) {
                a.info("sendYoutubeMessage_: " + b + " " + g.Vm());
                var c = {}; c.type = b; a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function () { }, (0, g.gb)(function () { p9(this, "Failed to send message: " + b + ".") }, a)) : p9(a, "Sending yt message without session: " + g.Vm(c))
            }, uEb = function (a, b) { b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.rX(b, function (c) { o9(a, c) }, function () { return a.vj() }, 5)) : a.vj(Error("Waiting for session status timed out.")) }, wEb = function (a, b, c) {
                a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
                var d = new e8(b); vEb(a, d, function (e) { e ? (a.Ba = !0, m9(a.D, d), o9(a, d), a.Y = "unknown", rEb(a, c)) : (g.dB(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.vj()) }, 5)
            }, pEb = function (a, b) {
                g.wB(a.qa);
                a.qa = 0; b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? wEb(a, { name: a.B.friendlyName, screenId: b.screenId, loungeToken: b.loungeToken, dialId: b.deviceId, screenIdType: "shortLived" }, b.loungeTokenRefreshIntervalMs) : (g.dB(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), uEb(a, b.screenId))) : (g.dB(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), uEb(a, b.screenId)) :
                    uEb(a, b.screenId) : a.vj(Error("Waiting for session status timed out."))
            }, tEb = function (a, b) {
                g.wB(a.G);
                a.G = 0; var c = null; if (b) if (b.loungeToken) { var d; (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; else c = "noLoungeTokenResponse"; c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, rEb(a, 3E4)) : (oEb(a, b.loungeToken), a.Ba = !1, a.Y = "unknown", rEb(a, b.loungeTokenRefreshIntervalMs))
            }, vEb = function (a, b, c, d) {
                g.wB(a.K);
                a.K = 0; kEb(a.D, b, function (e) { e || 0 > d ? c(e) : a.K = g.sB(function () { vEb(a, b, c, d - 1) }, 300) })
            }, xEb = function (a) {
                g.wB(a.Z);
                a.Z = 0; g.wB(a.K); a.K = 0; g.wB(a.qa); a.qa = 0; g.wB(a.G); a.G = 0; g.wB(a.N); a.N = 0
            }, r9 = function (a, b, c, d) {
                n9.call(this, a, b, "DialSession");
                this.config_ = d; this.C = this.Z = null; this.Ga = ""; this.Ra = c; this.Na = null; this.qa = function () { };
                this.Y = NaN; this.La = (0, g.gb)(this.Z3, this); this.G = function () { };
                this.N = this.K = 0; this.ra = !1; this.Ba = "unknown"
            }, s9 = function (a) {
                var b;
                return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
            }, yEb = function (a) {
                a.G = a.D.VT(a.Ga, a.B.label, a.B.friendlyName, s9(a), function (b, c) {
                    a.G = function () { };
                    a.ra = !0; o9(a, b); "shortLived" == b.idType && 0 < c && t9(a, c)
                }, function (b) {
                    a.G = function () { };
                    a.vj(b)
                })
            }, zEb = function (a) {
                var b = {};
                b.pairingCode = a.Ga; b.theme = a.Ra; JBb() && (b.env_useStageMdx = 1); return g.hn(b)
            }, AEb = function (a) {
                return new Promise(function (b) {
                    a.Ga = wBb();
                    if (a.Na) { var c = new chrome.cast.DialLaunchResponse(!0, zEb(a)); b(c); yEb(a) } else a.qa = function () {
                        g.wB(a.Y); a.qa = function () { };
                        a.Y = NaN; var d = new chrome.cast.DialLaunchResponse(!0, zEb(a)); b(d); yEb(a)
                    }, a.Y = g.sB(function () { a.qa() }, 100)
                })
            }, CEb = function (a, b, c) {
                a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
                var d = new e8(b); return (new Promise(function (e) { BEb(a, d, function (f) { f ? (a.ra = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.dB(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")); e(f) }, 5) })).then(function (e) { return e ? new chrome.cast.DialLaunchResponse(!1) : AEb(a) })
            }, DEb = function (a, b) {
                var c = a.Z.receiver.label, d = a.B.friendlyName;
                return (new Promise(function (e) {
                    iEb(a.D, c, b, d, function (f) { f && f.token && o9(a, f); e(f) }, function (f) {
                        p9(a, "Failed to get DIAL screen: " + f);
                        e(null)
                    })
                })).then(function (e) { return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : AEb(a) })
            }, BEb = function (a, b, c, d) {
                g.wB(a.K);
                a.K = 0; kEb(a.D, b, function (e) { e || 0 > d ? c(e) : a.K = g.sB(function () { BEb(a, b, c, d - 1) }, 300) })
            }, t9 = function (a, b) {
                a.info("getDialAppInfoWithTimeout_ " + b);
                s9(a) && (g.wB(a.N), a.N = 0, 0 == b ? EEb(a) : a.N = g.sB(function () { EEb(a) }, b))
            }, EEb = function (a) {
                s9(a) && a.C.getDialAppInfo(function (b) {
                    a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                    b = b.extraData || {}; var c = null; if (b.loungeToken) { var d; (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; c ? (a.Ba = c, t9(a, 3E4)) : (a.ra = !1, a.Ba = "unknown", oEb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
                }, function (b) {
                    a.info("getDialAppInfo error: " + b);
                    a.Ba = "noLoungeTokenResponse"; t9(a, 3E4)
                })
            }, FEb = function (a) {
                g.wB(a.K);
                a.K = 0; g.wB(a.N); a.N = 0; a.G(); a.G = function () { };
                g.wB(a.Y)
            }, u9 = function (a, b) {
                n9.call(this, a, b, "ManualSession");
                this.C = g.sB((0, g.gb)(this.mA, this, null), 150)
            }, v9 = function (a, b) {
                g.vF.call(this);
                this.config_ = b; this.B = a; this.Z = b.appId || "233637DE"; this.D = b.theme || "cl"; this.Y = b.disableCastApi || !1; this.K = b.forceMirroring || !1; this.j = null; this.N = !1; this.C = []; this.G = (0, g.gb)(this.waa, this)
            }, GEb = function (a, b) { return b ? g.Db(a.C, function (c) { return f8(b, c.label) }, a) : null }, w9 = function (a) { b9("Controller", a) }, PDb = function (a) { window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a) }, x9 = function (a) { return a.N || !!a.C.length || !!a.j }, y9 = function (a, b, c) {
                b != a.j && (g.vb(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                    b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.gb)(a.YZ, a, b)), b.subscribe("sessionFailed", function () { return HEb(a, b) }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.mA(null)) : a.publish("yt-remote-cast2-session-change", null))
            }, HEb = function (a, b) { a.j == b && a.publish("yt-remote-cast2-session-failed") }, IEb = function (a) {
                var b = a.B.UT(), c = a.j && a.j.B;
                a = g.Nr(b, function (d) { c && f8(d, c.label) && (c = null); var e = d.uuid ? d.uuid : d.id, f = GEb(this, d); f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM); return f }, a);
                c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c)); return a
            }, PEb = function (a, b, c, d) {
                d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : JEb() ? KEb(b, d) && (LEb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? MEb(a, c) : (window.__onGCastApiAvailable = function (e, f) {
                    e ? MEb(a, c) : (A9("Failed to load cast API: " + f), NEb(!1), LEb(!1), g.tC("yt-remote-cast-available"), g.tC("yt-remote-cast-receiver"),
                        OEb(), c(!1))
                }, d.loadCastApiSetupScript ? g.Qta("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= LBb() && UBb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? PBb() : 89 <= LBb() ? WBb() : (TBb(), o8(VBb.map(QBb))))) : z9("Cannot initialize because not running Chrome")
            }, OEb = function () {
                z9("dispose");
                var a = B9(); a && a.dispose(); g.Va("yt.mdx.remote.cloudview.instance_", null); QEb(!1); g.hE(REb); REb.length = 0
            }, C9 = function () { return !!g.sC("yt-remote-cast-installed") }, SEb = function () {
                var a = g.sC("yt-remote-cast-receiver");
                return a ? a.friendlyName : null
            }, TEb = function () {
                z9("clearCurrentReceiver");
                g.tC("yt-remote-cast-receiver")
            }, UEb = function () { return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null) }, VEb = function () { C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), REb.push(g.gE("yt-remote-cast2-api-ready", VEb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!") },
        E9 = function (a, b) { D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.") }, JEb = function () {
            var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.sK || a
        }, WEb = function (a, b) { B9().init(a, b) }, KEb = function (a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function (d) { g.rC("yt-remote-cast-available", d); m8("yt-remote-cast2-availability-change", d) }), a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.rC("yt-remote-cast-receiver", d); m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.rC("yt-remote-cast-receiver", d); m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function (d) {
                z9("onSessionChange: " + g8(d));
                d || g.tC("yt-remote-cast-receiver"); m8("yt-remote-cast2-session-change", d)
            }), g.Va("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c); return c
        }, B9 = function () { return g.Wa("yt.mdx.remote.cloudview.instance_") }, MEb = function (a, b) {
            NEb(!0);
            LEb(!1); WEb(a, function (c) { c ? (QEb(!0), g.iE("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), NEb(!1), g.tC("yt-remote-cast-available"), g.tC("yt-remote-cast-receiver"), OEb()); b(c) })
        }, z9 = function (a) { b9("cloudview", a) }, A9 = function (a) { b9("cloudview", a) }, NEb = function (a) {
            z9("setCastInstalled_ " + a);
            g.rC("yt-remote-cast-installed", a)
        }, D9 = function () { return !!g.Wa("yt.mdx.remote.cloudview.apiReady_") }, QEb = function (a) {
            z9("setApiReady_ " + a);
            g.Va("yt.mdx.remote.cloudview.apiReady_", a)
        }, LEb = function (a) { g.Va("yt.mdx.remote.cloudview.initializing_", a) }, F9 = function (a) {
            this.index = -1;
            this.videoId = this.listId = ""; this.volume = this.playerState = -1; this.muted = !1; this.audioTrackId = null; this.K = this.N = 0; this.trackData = null; this.Ok = this.xp = !1; this.Z = this.G = this.j = this.D = 0; this.C = NaN; this.B = !1; this.reset(a)
        }, XEb = function (a) {
            a.audioTrackId = null;
            a.trackData = null; a.playerState = -1; a.xp = !1; a.Ok = !1; a.N = 0; a.K = g.kb(); a.D = 0; a.j = 0; a.G = 0; a.Z = 0; a.C = NaN; a.B = !1
        }, G9 = function (a) { return a.isPlaying() ? (g.kb() - a.K) / 1E3 : 0 }, H9 = function (a, b) {
            a.N = b;
            a.K = g.kb()
        }, I9 = function (a) {
            switch (a.playerState) {
                case 1: case 1081: return (g.kb() - a.K) / 1E3 + a.N;
                case -1E3: return 0
            }return a.N
        }, J9 = function (a, b, c) {
            var d = a.videoId;
            a.videoId = b; a.index = c; b != d && XEb(a)
        }, YEb = function (a) {
            var b = {};
            b.index = a.index; b.listId = a.listId; b.videoId = a.videoId; b.playerState = a.playerState; b.volume = a.volume; b.muted = a.muted; b.audioTrackId = a.audioTrackId; b.trackData = g.rd(a.trackData); b.hasPrevious = a.xp; b.hasNext = a.Ok; b.playerTime = a.N; b.playerTimeAt = a.K; b.seekableStart = a.D; b.seekableEnd = a.j; b.duration = a.G; b.loadedTime = a.Z; b.liveIngestionTime = a.C; return b
        }, L9 = function (a, b) {
            g.vF.call(this);
            var c = this; this.C = 0; this.D = a; this.K = []; this.G = new DDb; this.B = this.j = null; this.Y = (0, g.gb)(this.i$, this); this.N = (0, g.gb)(this.bF, this); this.Z = (0, g.gb)(this.h$, this); this.qa = (0, g.gb)(this.k$, this); var d = 0; a ? (d = a.getProxyState(), 3 != d && (a.subscribe("proxyStateChange", this.dS, this), ZEb(this))) : d = 3; 0 != d && (b ? this.dS(d) : g.sB(function () { c.dS(d) }, 0));
            (a = UEb()) && K9(this, a); this.subscribe("yt-remote-cast2-session-change", this.qa)
        }, M9 = function (a) { return new F9(a.D.getPlayerContextData()) }, ZEb = function (a) { g.$b("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function (b) { this.K.push(this.D.subscribe(b, g.jb(this.uaa, b), this)) }, a) }, $Eb = function (a) {
            g.$b(a.K, function (b) { this.D.unsubscribeByKey(b) }, a);
            a.K.length = 0
        }, N9 = function (a) { return 1 == a.getState() }, O9 = function (a, b) {
            var c = a.G;
            50 > c.j.length + c.B.length && a.G.enqueue(b)
        }, aFb = function (a, b, c) {
            var d = M9(a);
            H9(d, c); -1E3 != d.playerState && (d.playerState = b); P9(a, d)
        }, Q9 = function (a, b, c) { a.D.sendMessage(b, c) }, P9 = function (a, b) {
            $Eb(a);
            a.D.setPlayerContextData(YEb(b)); ZEb(a)
        }, K9 = function (a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.bF(null));
            a.B = b; a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.bF(a.B.media[0]))
        }, bFb = function (a) {
            var b = a.j.media, c = a.j.customData;
            if (b && c) { var d = M9(a); b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId); d.videoId = b.contentId; d.playerState = c.playerState; H9(d, a.j.getEstimatedTime()); P9(a, d) } else c9("No cast media video. Ignoring state update.")
        }, R9 = function (a, b, c) {
            return (0, g.gb)(function (d) {
                this.cg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.cg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        }, U9 = function (a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.vF.call(this); var e = this; this.K = NaN; this.Ga = !1; this.Y = this.Z = this.ra = this.Ba = NaN; this.qa = []; this.G = this.N = this.D = this.j = this.B = null; this.Na = a; this.La = d; this.qa.push(g.iC(window, "beforeunload", function () { e.rz(2) }));
            this.C = []; this.j = new F9; this.Ra = b.id; this.Da = b.idType; this.B = ODb(this.Na, c, this.bU, "shortLived" == this.Da, this.Ra); this.B.listen("channelOpened", function () { cFb(e) });
            this.B.listen("channelClosed", function () { S9("Channel closed"); isNaN(e.K) ? k8(!0) : k8(); e.dispose() });
            this.B.listen("channelError", function (f) { k8(); isNaN(e.VD()) ? (1 == f && "shortLived" == e.Da && e.publish("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ga = !0, S9("Channel error: " + f + " with reconnection in " + e.VD() + " ms"), T9(e, 2)) });
            this.B.listen("channelMessage", function (f) { dFb(e, f) });
            this.B.Ir(b.token); this.subscribe("remoteQueueChange", function () { var f = e.j.videoId; g.uC() && g.rC("yt-remote-session-video-id", f) })
        }, eFb = function (a) { return g.Db(a.C, function (b) { return "LOUNGE_SCREEN" == b.type }) }, S9 = function (a) { b9("conn", a) }, T9 = function (a, b) { a.publish("proxyStateChange", b) }, fFb = function (a) {
            a.K = g.sB(function () {
                S9("Connecting timeout");
                a.rz(1)
            }, 2E4)
        }, gFb = function (a) {
            g.wB(a.K);
            a.K = NaN
        }, hFb = function (a) {
            g.wB(a.Ba);
            a.Ba = NaN
        }, jFb = function (a) {
            iFb(a);
            a.ra = g.sB(function () { V9(a, "getNowPlaying") }, 2E4)
        }, iFb = function (a) {
            g.wB(a.ra);
            a.ra = NaN
        }, cFb = function (a) {
            S9("Channel opened");
            a.Ga && (a.Ga = !1, hFb(a), a.Ba = g.sB(function () { S9("Timing out waiting for a screen."); a.rz(1) }, 15E3))
        }, lFb = function (a, b) {
            var c = null;
            if (b) { var d = eFb(a); d && (c = { clientName: d.clientName, deviceMake: d.brand, deviceModel: d.model, osVersion: d.osVersion }) } g.Va("yt.mdx.remote.remoteClient_", c); b && (gFb(a), hFb(a)); c = a.B.Yz() && isNaN(a.K); b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.mX() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), kFb(a)) : a.rz(1)
        }, mFb = function (a, b) {
            var c = b.params.videoId;
            delete b.params.videoId; c == a.j.videoId && (g.nd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        }, nFb = function (a, b, c) {
            var d = b.params.videoId || b.params.video_id, e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId; J9(a.j, d, e); a.publish("remoteQueueChange", c)
        }, pFb = function (a, b) {
            b.params = b.params || {};
            nFb(a, b, "NOW_PLAYING_MAY_CHANGE"); oFb(a, b); a.publish("autoplayDismissed")
        }, oFb = function (a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c); c = parseInt(b.params.state, 10); c = isNaN(c) ? -1 : c; -1 == c && -1E3 == a.j.playerState && (c = -1E3); a.j.playerState = c; c = Number(b.params.loadedTime); a.j.Z = isNaN(c) ? 0 : c; a.j.il(Number(b.params.duration)); c = a.j; var d = Number(b.params.liveIngestionTime); c.C = d; c.B = isNaN(d) ? !1 : !0; c = a.j; d = Number(b.params.seekableStartTime); b = Number(b.params.seekableEndTime); c.D = isNaN(d) ? 0 : d; c.j = isNaN(b) ? 0 : b; 1 == a.j.playerState ? jFb(a) : iFb(a); a.publish("remotePlayerChange")
        }, qFb = function (a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) { case 1: c = 1081; break; case 2: c = 1084; break; case 0: c = 1083 }a.j.playerState = c; b = parseInt(b.params.currentTime, 10); H9(a.j, isNaN(b) ? 0 : b); a.publish("remotePlayerChange")
            }
        }, rFb = function (a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10); a.j.muted = c; a.publish("remotePlayerChange")
        }, sFb = function (a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        }, tFb = function (a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        }, uFb = function (a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G); "DISABLED" == a.G && a.publish("autoplayDismissed")
        }, vFb = function (a, b) {
            var c = "true" == b.params.hasNext;
            a.j.xp = "true" == b.params.hasPrevious; a.j.Ok = c; a.publish("previousNextChange")
        }, dFb = function (a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.Vm(b.params)) : S9("Received: action=" + b.action + " {}"); switch (b.action) {
                case "loungeStatus": b = c8(b.params.devices); a.C = g.Nr(b, function (d) { return new pBb(d) });
                    b = !!g.Db(a.C, function (d) { return "LOUNGE_SCREEN" == d.type });
                    lFb(a, b); b = a.rY("mlm"); a.publish("multiStateLoopEnabled", b); break; case "loungeScreenDisconnected": g.Jb(a.C, function (d) { return "LOUNGE_SCREEN" == d.type });
                    lFb(a, !1); break; case "remoteConnected": var c = new pBb(c8(b.params.device)); g.Db(a.C, function (d) { return c ? d.id == c.id : !1 }) || VAb(a.C, c);
                    break; case "remoteDisconnected": c = new pBb(c8(b.params.device)); g.Jb(a.C, function (d) { return c ? d.id == c.id : !1 });
                    break; case "gracefulDisconnect": break; case "playlistModified": nFb(a, b, "QUEUE_MODIFIED"); break; case "nowPlaying": pFb(a, b); break; case "onStateChange": oFb(a, b); break; case "onAdStateChange": qFb(a, b); break; case "onVolumeChanged": rFb(a, b); break; case "onSubtitlesTrackChanged": mFb(a, b); break; case "nowAutoplaying": sFb(a, b); break; case "autoplayDismissed": a.publish("autoplayDismissed"); break; case "autoplayUpNext": tFb(a, b); break; case "onAutoplayModeChanged": uFb(a, b); break; case "onHasPreviousNextChanged": vFb(a,
                        b); break; case "requestAssistedSignIn": a.publish("assistedSignInRequested", b.params.authCode); break; case "onLoopModeChanged": a.publish("loopModeChange", b.params.loopMode); break; default: S9("Unrecognized action: " + b.action)
            }
        }, kFb = function (a) {
            g.wB(a.Y);
            a.Y = g.sB(function () { a.rz(1) }, 864E5)
        }, V9 = function (a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.Vm(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        }, wFb = function (a) {
            g9.call(this, "ScreenServiceProxy");
            this.Zg = a; this.j = []; this.j.push(this.Zg.$_s("screenChange", (0, g.gb)(this.e4, this))); this.j.push(this.Zg.$_s("onlineScreenChange", (0, g.gb)(this.Z$, this)))
        }, BFb = function (a, b) {
            IBb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.aB("MDX_CONFIG") || b; zBb(); DBb(); W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), JBb() && (W9.j = "/api/loungedev")); X9 || (X9 = g.Wa("yt.mdx.remote.deferredProxies_") || [], g.Va("yt.mdx.remote.deferredProxies_", X9)); xFb(); var c = Y9(); if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1); g.Va("yt.mdx.remote.screenService_", d); c = Y9(); var e = {}; b && (e = {
                        appId: b.appId, disableDial: b.disableDial, theme: b.theme, loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi, enableDialLoungeToken: b.enableDialLoungeToken, enableCastLoungeToken: b.enableCastLoungeToken, forceMirroring: b.forceMirroring
                    }); g.Va("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1); PEb(a, d, function (f) { f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function () { m8("yt-remote-receiver-availability-change") }) }, e)
                } b && !g.Wa("yt.mdx.remote.initialized_") && (g.Va("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Vm(b)),
                    a$.push(g.gE("yt-remote-cast2-api-ready", function () { m8("yt-remote-api-ready") })), a$.push(g.gE("yt-remote-cast2-availability-change", function () { m8("yt-remote-receiver-availability-change") })), a$.push(g.gE("yt-remote-cast2-receiver-selected", function () {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.gE("yt-remote-cast2-receiver-resumed", function () { m8("yt-remote-receiver-resumed", "cast-selector-receiver") })), a$.push(g.gE("yt-remote-cast2-session-change", yFb)), a$.push(g.gE("yt-remote-connection-change", function (f) { f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), TEb()) })), a$.push(g.gE("yt-remote-cast2-session-failed", function () { m8("yt-remote-connection-failed") })), a = zFb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.yB("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Vm(a)), a ? (g.rC("yt-remote-session-app", a.app), g.rC("yt-remote-session-name", a.name)) : (g.tC("yt-remote-session-app"), g.tC("yt-remote-session-name")), g.Va("yt.mdx.remote.channelParams_", a), c.start(), Z9() || AFb())
            }
        }, CFb = function () {
            var a = Y9().Zg.$_gos();
            var b = d$(); b && e$() && (yBb(a, b) || a.push(b)); return xBb(a)
        }, EFb = function () {
            var a = DFb();
            !a && C9() && SEb() && (a = { key: "cast-selector-receiver", name: SEb() }); return a
        }, DFb = function () {
            var a = CFb(), b = d$();
            b || (b = c$()); return g.Db(a, function (c) { return b && f8(b, c.key) ? !0 : !1 })
        }, d$ = function () {
            var a = Z9();
            if (!a) return null; var b = Y9().Lk(); return h8(b, a)
        }, yFb = function (a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) { var b = d$(); if (b && b.id == a.id) { if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.Ir(a) } else b && g$(), h$(a, 1) } else e$() && g$()
        }, g$ = function () {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$(); a && (a.disconnect(1), FFb(null))
        }, GFb = function () {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        }, $9 = function (a) { b9("remote", a) }, Y9 = function () {
            if (!HFb) {
                var a = g.Wa("yt.mdx.remote.screenService_");
                HFb = a ? new wFb(a) : null
            } return HFb
        }, Z9 = function () { return g.Wa("yt.mdx.remote.currentScreenId_") }, IFb = function (a) { g.Va("yt.mdx.remote.currentScreenId_", a) }, JFb = function () { return g.Wa("yt.mdx.remote.connectData_") }, b$ = function (a) { g.Va("yt.mdx.remote.connectData_", a) }, e$ = function () { return g.Wa("yt.mdx.remote.connection_") }, FFb = function (a) {
            var b = e$();
            b$(null); a || IFb(""); g.Va("yt.mdx.remote.connection_", a); X9 && (g.$b(X9, function (c) { c(a) }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        }, c$ = function () {
            var a = g.uC();
            if (!a) return null; var b = Y9(); if (!b) return null; b = b.Lk(); return h8(b, a)
        }, h$ = function (a, b) {
            Z9();
            d$() && d$(); if (i$) f$ = a; else {
                IFb(a.id); var c = g.Wa("yt.mdx.remote.enableConnectWithInitialState_") || !1; a = new U9(W9, a, zFb(), c); a.connect(b, JFb()); a.subscribe("beforeDisconnect", function (d) { m8("yt-remote-before-disconnect", d) });
                a.subscribe("beforeDispose", function () { e$() && (e$(), FFb(null)) });
                a.subscribe("browserChannelAuthError", function () { var d = d$(); d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready.")) });
                FFb(a)
            }
        }, AFb = function () {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), TEb(), $9("Skipping connecting because no session screen found."))
        }, xFb = function () {
            var a = zFb();
            if (g.nd(a)) { a = j8(); var b = g.sC("yt-remote-session-name") || "", c = g.sC("yt-remote-session-app") || ""; a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 }; a.authuser = String(g.aB("SESSION_INDEX", "0")); (b = g.aB("DELEGATED_SESSION_ID")) && (a.pageId = String(b)); g.Va("yt.mdx.remote.channelParams_", a) }
        }, zFb = function () { return g.Wa("yt.mdx.remote.channelParams_") || {} }, MFb = function (a, b, c) {
            g.I.call(this);
            var d = this; this.module = a; this.J = b; this.Gc = c; this.events = new g.uK(this); this.Y = this.events.T(this.J, "onVolumeChange", function (e) { KFb(d, e) });
            this.D = !1; this.G = new g.hL(64); this.j = new g.bv(this.B0, 500, this); this.B = new g.bv(this.C0, 1E3, this); this.N = new p8(this.Oda, 0, this); this.C = {}; this.Z = new g.bv(this.C1, 1E3, this); this.K = new q8(this.seekTo, 1E3, this); g.O(this, this.events); this.events.T(b, "onCaptionsTrackListChanged", this.K$); this.events.T(b, "captionschanged", this.f$); this.events.T(b, "captionssettingschanged", this.L0); this.events.T(b, "videoplayerreset", this.kK); this.events.T(b, "mdxautoplaycancel", function () { d.Gc.vW() });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function () { LFb(d.module) || j$(d) || k$(d, 0) });
            a = this.Gc; a.Ma(); a.subscribe("proxyStateChange", this.VZ, this); a.subscribe("remotePlayerChange", this.gF, this); a.subscribe("remoteQueueChange", this.kK, this); a.subscribe("previousNextChange", this.SZ, this); a.subscribe("nowAutoplaying", this.OZ, this); a.subscribe("autoplayDismissed", this.xZ, this); g.O(this, this.j); g.O(this, this.B); g.O(this, this.N); g.O(this, this.Z); g.O(this, this.K); this.L0(); this.kK(); this.gF()
        }, KFb = function (a, b) {
            if (j$(a)) {
                a.Gc.unsubscribe("remotePlayerChange", a.gF, a);
                var c = Math.round(b.volume); b = !!b.muted; var d = M9(a.Gc); if (c !== d.volume || b !== d.muted) a.Gc.setVolume(c, b), a.Z.start(); a.Gc.subscribe("remotePlayerChange", a.gF, a)
            }
        }, NFb = function (a) {
            a.Oc(0);
            a.j.stop(); a.Bc(new g.hL(64))
        }, OFb = function (a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = { style: a.J.getSubtitlesUserSettings() }, g.sd(c, b)); a.Gc.aU(a.J.getVideoData(1).videoId, c); a.C = M9(a.Gc).trackData
            }
        }, k$ = function (a, b) {
            var c = a.J.getPlaylist();
            if (null == c ? 0 : c.listId) { var d = c.index; var e = c.listId.toString() } c = a.J.getVideoData(1); a.Gc.playVideo(c.videoId, b, d, e, c.playerParams, c.ra, UAb(c)); a.Bc(new g.hL(1))
        }, PFb = function (a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", { eY: 1 });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        }, j$ = function (a) { return M9(a.Gc).videoId === a.J.getVideoData(1).videoId }, l$ = function () {
            g.W.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog", X: { role: "dialog" }, V: [{
                    I: "div", S: "ytp-mdx-popup-dialog-inner-content", V: [{ I: "div", S: "ytp-mdx-popup-title", xa: "You're signed out" }, { I: "div", S: "ytp-mdx-popup-description", xa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer." }, {
                        I: "div", S: "ytp-mdx-privacy-popup-buttons", V: [{ I: "button", Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"], xa: "Cancel" }, {
                            I: "button", Ka: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"], xa: "Confirm"
                        }]
                    }]
                }]
            }); this.j = new g.fG(this, 250); this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel"); this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm"); g.O(this, this.j); this.T(this.cancelButton, "click", this.B); this.T(this.confirmButton, "click", this.C)
        }, m$ = function (a) {
            g.W.call(this, {
                I: "div",
                S: "ytp-remote", V: [{ I: "div", S: "ytp-remote-display-status", V: [{ I: "div", S: "ytp-remote-display-status-icon", V: [g.Pwa()] }, { I: "div", S: "ytp-remote-display-status-text", xa: "{{statustext}}" }] }]
            }); this.api = a; this.j = new g.fG(this, 250); g.O(this, this.j); this.T(a, "presentingplayerstatechange", this.onStateChange); this.Cc(a.Rb())
        }, n$ = function (a, b) {
            g.kX.call(this, "Play on", 1, a, b);
            this.J = a; this.fu = {}; this.T(a, "onMdxReceiversChange", this.D); this.T(a, "presentingplayerstatechange", this.D); this.D()
        }, QFb = function (a) {
            g.qV.call(this, a);
            this.Kp = { key: wBb(), name: "This computer" }; this.Sl = null; this.subscriptions = []; this.kR = this.Gc = null; this.fu = [this.Kp]; this.Js = this.Kp; this.De = new g.hL(64); this.CY = 0; this.Xh = -1; this.zF = !1; this.xF = this.fB = null; if (!g.NR(this.player.U()) && !g.IG(this.player.U())) { a = this.player; var b = g.PT(a); b && (b = b.tp()) && (b = new n$(a, b), g.O(this, b)); b = new m$(a); g.O(this, b); g.bU(a, b.element, 4); this.fB = new l$; g.O(this, this.fB); g.bU(a, this.fB.element, 4); this.zF = !!c$() }
        }, o$ = function (a) {
            a.xF && (a.player.removeEventListener("presentingplayerstatechange",
                a.xF), a.xF = null)
        }, RFb = function (a, b, c) {
            a.De = c;
            a.player.publish("presentingplayerstatechange", new g.kG(c, b))
        }, p$ = function (a, b) {
            if (b.key !== a.Js.key) if (b.key === a.Kp.key) g$();
            else if (LFb(a) && SFb(a), a.Js = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.IG(a.player.U())) {
                var c = a.player.getPlaylistId(); var d = a.player.getVideoData(1); var e = d.videoId; if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null; else {
                    var f = a.player.getPlaylist(); if (f) { var h = []; for (var l = 0; l < f.getLength(); l++)h[l] = g.nV(f, l).videoId } else h = [e]; f = a.player.getCurrentTime(1); a = {
                        videoIds: h,
                        listId: c, videoId: e, playerParams: d.playerParams, clickTrackingParams: d.ra, index: Math.max(a.player.getPlaylistIndex(), 0), currentTime: 0 === f ? void 0 : f
                    }; (d = UAb(d)) && (a.locationInfo = d); d = a
                } $9("Connecting to: " + g.Vm(b)); "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && GFb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Lk(), (b = h8(d, b.key)) && h$(b, 1))
            }
        }, LFb = function (a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.zF || !a.fB ? !1 : g.YR(b) || g.$R(b)
        }, SFb = function (a) {
            a.player.Rb().isPlaying() ? a.player.pauseVideo() : (a.xF = function (b) { !a.zF && g.nG(b, 8) && (a.player.pauseVideo(), o$(a)) }, a.player.addEventListener("presentingplayerstatechange", a.xF));
            a.fB && a.fB.pd(); e$() || (i$ = !0)
        }, bDb = {
            "\x00": "\\0",
            "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C"
        }, R8 = { "'": "\\'" }, qBb = { Apa: "atp", u7a: "ska", D3a: "que", NVa: "mus", s7a: "sus", HGa: "dsp", t5a: "seq", lUa: "mic", mxa: "dpa", Yqa: "cds", CVa: "mlm", axa: "dsdtr", nWa: "ntb", gjb: "vsp", aya: "scn", R3a: "rpe", Xwa: "dcn", Ywa: "dcp", f0a: "pas", Zwa: "drq", NZa: "opf", Zxa: "els", L5a: "svq" }, rBb = { z5: "u", v2: "cl", c5: "k", P2: "i", A2: "cr", k5: "m", M2: "g", bV: "up" }, CBb = "", l8 = null;
    KBb.prototype.flush = function (a, b) { a = void 0 === a ? [] : a; b = void 0 === b ? !1 : b; if (g.yB("enable_client_streamz_web")) { a = g.u(a); for (var c = a.next(); !c.done; c = a.next())c = g.ffa(c.value), c = { serializedIncrementBatch: g.Kg(c.j()) }, g.LC("streamzIncremented", c, { sendIsolatedPayload: b }) } };
    var n8, SBb = MBb("loadCastFramework") || MBb("loadCastApplicationFramework"), VBb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"]; g.lb(p8, g.I); g.k = p8.prototype; g.k.G3 = function (a) { this.D = arguments; this.j = !1; this.hd ? this.C = g.kb() + this.Ri : this.hd = g.Fg(this.G, this.Ri) };
    g.k.stop = function () { this.hd && (g.Ta.clearTimeout(this.hd), this.hd = null); this.C = null; this.j = !1; this.D = [] };
    g.k.pause = function () { ++this.B };
    g.k.resume = function () { this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D))) };
    g.k.va = function () { this.stop(); p8.Nf.va.call(this) };
    g.k.H3 = function () { this.hd && (g.Ta.clearTimeout(this.hd), this.hd = null); this.C ? (this.hd = g.Fg(this.G, this.C - g.kb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D)) }; g.y(q8, g.I); g.k = q8.prototype; g.k.ZL = function (a) { this.C = arguments; this.hd || this.B ? this.j = !0 : XBb(this) };
    g.k.stop = function () { this.hd && (g.Ta.clearTimeout(this.hd), this.hd = null, this.j = !1, this.C = null) };
    g.k.pause = function () { this.B++ };
    g.k.resume = function () { this.B--; this.B || !this.j || this.hd || (this.j = !1, XBb(this)) };
    g.k.va = function () { g.I.prototype.va.call(this); this.stop() }; r8.prototype.stringify = function (a) { return g.Ta.JSON.stringify(a, void 0) };
    r8.prototype.parse = function (a) { return g.Ta.JSON.parse(a, void 0) }; g.lb(YBb, g.zb); g.lb(ZBb, g.zb); var $Bb = null; g.lb(bCb, g.zb); g.lb(cCb, g.zb); g.lb(dCb, g.zb); v8.prototype.debug = function () { };
    v8.prototype.info = function () { };
    v8.prototype.warning = function () { }; var lCb = {}, kCb = {}; g.k = w8.prototype; g.k.setTimeout = function (a) { this.zb = a };
    g.k.K3 = function (a) { a = a.target; var b = this.Wa; b && 3 == g.Pn(a) ? b.ZL() : this.BT(a) };
    g.k.BT = function (a) {
        try {
            if (a == this.j) a: {
                var b = g.Pn(this.j), c = this.j.B, d = this.j.getStatus(); if (!(3 > b) && (3 != b || g.aS || this.j && (this.B.B || g.Rn(this.j) || g.Sn(this.j)))) {
                    this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2)); A8(this); var e = this.j.getStatus(); this.Ib = e; b: if (iCb(this)) {
                        var f = g.Sn(this.j); a = ""; var h = f.length, l = 4 == g.Pn(this.j); if (!this.B.C) { if ("undefined" === typeof TextDecoder) { y8(this); z8(this); var m = ""; break b } this.B.C = new g.Ta.TextDecoder } for (c = 0; c < h; c++)this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        }); f.length = 0; this.B.j += a; this.K = 0; m = this.B.j
                    } else m = g.Rn(this.j); if (this.C = 200 == e) { if (this.Kb && !this.Va) { b: { if (this.j) { var n = g.Tn(this.j, "X-HTTP-Initial-Response"); if (n && !g.fc(n)) { var p = n; break b } } p = null } if (e = p) this.Va = !0, mCb(this, e); else { this.C = !1; this.N = 3; t8(12); y8(this); z8(this); break a } } this.Da ? (nCb(this, b, m), g.aS && this.C && 3 == b && (this.bb.listen(this.fb, "tick", this.J3), this.fb.start())) : mCb(this, m); 4 == b && y8(this); this.C && !this.La && (4 == b ? pCb(this.G, this) : (this.C = !1, x8(this))) } else g.Vfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) { } finally { }
    };
    g.k.J3 = function () { if (this.j) { var a = g.Pn(this.j), b = g.Rn(this.j); this.K < b.length && (A8(this), nCb(this, a, b), this.C && 4 != a && x8(this)) } };
    g.k.cancel = function () { this.La = !0; y8(this) };
    g.k.I3 = function () { this.qa = null; var a = Date.now(); 0 <= a - this.Hb ? (2 != this.Ra && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : oCb(this, this.Hb - a) };
    g.k.getLastError = function () { return this.N };
    g.k.NO = function () { return this.j }; yCb.prototype.cancel = function () { this.C = ACb(this); if (this.B) this.B.cancel(), this.B = null; else if (this.j && 0 !== this.j.size) { for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())b.value.cancel(); this.j.clear() } }; g.k = FCb.prototype; g.k.CT = 8; g.k.Jh = 1; g.k.connect = function (a, b, c, d) { t8(0); this.Yb = a; this.La = b || {}; c && void 0 !== d && (this.La.OSID = c, this.La.OAID = d); this.Va = this.pc; this.Na = uCb(this, null, this.Yb); E8(this) };
    g.k.disconnect = function () { HCb(this); if (3 == this.Jh) { var a = this.Za++, b = this.Na.clone(); g.Bp(b, "SID", this.D); g.Bp(b, "RID", a); g.Bp(b, "TYPE", "terminate"); H8(this, b); a = new w8(this, this.D, a); a.Ra = 2; a.Z = a8(b.clone()); b = !1; if (g.Ta.navigator && g.Ta.navigator.sendBeacon) try { b = g.Ta.navigator.sendBeacon(a.Z.toString(), "") } catch (c) { } !b && g.Ta.Image && ((new Image).src = a.Z, b = !0); b || (a.j = hCb(a.G, null), a.j.send(a.Z)); a.Ba = Date.now(); x8(a) } NCb(this) };
    g.k.Jg = function () { return 0 == this.Jh };
    g.k.getState = function () { return this.Jh };
    g.k.ET = function (a) {
        if (this.K) if (this.K = null, 1 == this.Jh) {
            if (!a) {
                this.Za = Math.floor(1E5 * Math.random()); a = this.Za++; var b = new w8(this, "", a), c = this.Y; this.Hb && (c ? (c = g.qd(c), g.sd(c, this.Hb)) : c = this.Hb); null !== this.N || this.sb || (b.Na = c, c = null); var d; if (this.zb) a: {
                    for (var e = d = 0; e < this.C.length; e++) { b: { var f = this.C[e]; if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) { f = f.length; break b } f = void 0 } if (void 0 === f) break; d += f; if (4096 < d) { d = e; break a } if (4096 === d || e === this.C.length - 1) { d = e + 1; break a } } d =
                        1E3
                } else d = 1E3; d = KCb(this, b, d); e = this.Na.clone(); g.Bp(e, "RID", a); g.Bp(e, "CVER", 22); this.Da && g.Bp(e, "X-HTTP-Session-Id", this.Da); H8(this, e); c && (this.sb ? d = "headers=" + g.We(g.Ega(c)) + "&" + d : this.N && g.Fp(e, this.N, c)); tCb(this.B, b); this.Sf && g.Bp(e, "TYPE", "init"); this.zb ? (g.Bp(e, "$req", d), g.Bp(e, "SID", "null"), b.Kb = !0, gCb(b, e, null)) : gCb(b, e, d); this.Jh = 2
            }
        } else 3 == this.Jh && (a ? LCb(this, a) : 0 == this.C.length || zCb(this.B) || LCb(this))
    };
    g.k.DT = function () { this.Z = null; MCb(this); if (this.Ec && !(this.fb || null == this.j || 0 >= this.Jd)) { var a = 2 * this.Jd; this.Ga = u8((0, g.gb)(this.e$, this), a) } };
    g.k.e$ = function () { this.Ga && (this.Ga = null, this.Va = !1, this.fb = !0, t8(10), C8(this), MCb(this)) };
    g.k.xQ = function (a) { this.j == a && this.Ec && !this.fb && (GCb(this), this.fb = !0, t8(11)) };
    g.k.L3 = function () { null != this.qa && (this.qa = null, C8(this), rCb(this), t8(19)) };
    g.k.rda = function (a) { a ? t8(2) : t8(1) };
    g.k.isActive = function () { return !!this.G && this.G.isActive(this) };
    g.k = PCb.prototype; g.k.IT = function () { };
    g.k.HT = function () { };
    g.k.GT = function () { };
    g.k.FT = function () { };
    g.k.isActive = function () { return !0 };
    g.k.M3 = function () { }; g.lb(J8, g.Jd); J8.prototype.open = function () { this.j.G = this.C; this.K && (this.j.Ra = !0); this.j.connect(this.G, this.B || void 0) };
    J8.prototype.close = function () { this.j.disconnect() };
    J8.prototype.send = function (a) { var b = this.j; if ("string" === typeof a) { var c = {}; c.__data__ = a; a = c } else this.D && (c = {}, c.__data__ = g.Vm(a), a = c); b.C.push(new xCb(b.Qf++, a)); 3 == b.Jh && E8(b) };
    J8.prototype.va = function () { this.j.G = null; delete this.C; this.j.disconnect(); delete this.j; J8.Nf.va.call(this) };
    g.lb(RCb, YBb); g.lb(SCb, ZBb); g.lb(I8, PCb); I8.prototype.IT = function () { this.j.dispatchEvent("m") };
    I8.prototype.HT = function (a) { this.j.dispatchEvent(new RCb(a)) };
    I8.prototype.GT = function (a) { this.j.dispatchEvent(new SCb(a)) };
    I8.prototype.FT = function () { this.j.dispatchEvent("n") }; var L8 = new g.Jd; g.y(VCb, g.zb); g.k = N8.prototype; g.k.Vu = null; g.k.rq = !1; g.k.Wx = null; g.k.bM = null; g.k.Ux = null; g.k.Vx = null; g.k.Yr = null; g.k.gs = null; g.k.Wu = null; g.k.dj = null; g.k.XG = 0; g.k.Co = null; g.k.WG = null; g.k.Zr = null; g.k.jC = -1; g.k.e0 = !0; g.k.Uu = !1; g.k.aM = 0; g.k.VG = null; var $Cb = {}, ZCb = {}; g.k = N8.prototype; g.k.setTimeout = function (a) { this.B = a };
    g.k.O3 = function (a) { a = a.target; var b = this.VG; b && 3 == g.Pn(a) ? b.ZL() : this.JT(a) };
    g.k.JT = function (a) {
        try {
            if (a == this.dj) a: {
                var b = g.Pn(this.dj), c = this.dj.B, d = this.dj.getStatus(); if (g.Mn && !g.Uc(10) || g.Vc && !g.Tc("420+")) { if (4 > b) break a } else if (3 > b || 3 == b && !g.Rn(this.dj)) break a; this.Uu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Un(3) : this.j.Un(2)); eDb(this); var e = this.dj.getStatus(); this.jC = e; var f = g.Rn(this.dj); if (this.rq = 200 == e) {
                    4 == b && P8(this); if (this.Da) {
                        for (a = !0; !this.Uu && this.XG < f.length;) {
                            var h = aDb(this, f); if (h == ZCb) { 4 == b && (this.Zr = 4, M8(15), a = !1); break } else if (h == $Cb) {
                                this.Zr = 4; M8(16); a =
                                    !1; break
                            } else fDb(this, h)
                        } 4 == b && 0 == f.length && (this.Zr = 1, M8(17), a = !1); this.rq = this.rq && a; a || (P8(this), Q8(this))
                    } else fDb(this, f); this.rq && !this.Uu && (4 == b ? this.j.YG(this) : (this.rq = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Zr = 3, M8(13)) : (this.Zr = 0, M8(14)), P8(this), Q8(this)
            }
        } catch (l) { } finally { }
    };
    g.k.wba = function (a) { K8((0, g.gb)(this.vba, this, a), 0) };
    g.k.vba = function (a) { this.Uu || (eDb(this), fDb(this, a), O8(this)) };
    g.k.a_ = function (a) { K8((0, g.gb)(this.uba, this, a), 0) };
    g.k.uba = function (a) { this.Uu || (P8(this), this.rq = a, this.j.YG(this), this.j.Un(4)) };
    g.k.cancel = function () { this.Uu = !0; P8(this) };
    g.k.N3 = function () { this.Wx = null; var a = Date.now(); 0 <= a - this.bM ? (2 != this.Vx && this.j.Un(3), P8(this), this.Zr = 2, M8(18), Q8(this)) : dDb(this, this.bM - a) };
    g.k.getLastError = function () { return this.Zr }; g.k = iDb.prototype; g.k.dM = null; g.k.Gj = null; g.k.IK = !1; g.k.D0 = null; g.k.lI = null; g.k.JP = null; g.k.eM = null; g.k.Nl = null; g.k.tq = -1; g.k.kC = null; g.k.XC = null; g.k.connect = function (a) { this.eM = a; a = T8(this.j, null, this.eM); M8(3); this.D0 = Date.now(); var b = this.j.Y; null != b ? (this.kC = b[0], (this.XC = b[1]) ? (this.Nl = 1, jDb(this)) : (this.Nl = 2, kDb(this))) : (b8(a, "MODE", "init"), this.Gj = new N8(this), this.Gj.Vu = this.dM, YCb(this.Gj, a, !1, null, !0), this.Nl = 0) };
    g.k.i6 = function (a) { if (a) this.Nl = 2, kDb(this); else { M8(4); var b = this.j; b.Lo = b.Gs.tq; X8(b, 9) } a && this.Un(2) };
    g.k.cM = function (a) { return this.j.cM(a) };
    g.k.abort = function () { this.Gj && (this.Gj.cancel(), this.Gj = null); this.tq = -1 };
    g.k.Jg = function () { return !1 };
    g.k.KT = function (a, b) { this.tq = a.jC; if (0 == this.Nl) if (b) { try { var c = this.B.parse(b) } catch (d) { a = this.j; a.Lo = this.tq; X8(a, 2); return } this.kC = c[0]; this.XC = c[1] } else a = this.j, a.Lo = this.tq, X8(a, 2); else if (2 == this.Nl) if (this.IK) M8(7), this.JP = Date.now(); else if ("11111" == b) { if (M8(6), this.IK = !0, this.lI = Date.now(), a = this.lI - this.D0, !g.Mn || g.Uc(10) || 500 > a) this.tq = 200, this.Gj.cancel(), M8(12), U8(this.j, this, !0) } else M8(8), this.lI = this.JP = Date.now(), this.IK = !1 };
    g.k.YG = function () { this.tq = this.Gj.jC; if (this.Gj.rq) 0 == this.Nl ? this.XC ? (this.Nl = 1, jDb(this)) : (this.Nl = 2, kDb(this)) : 2 == this.Nl && ((!g.Mn || g.Uc(10) ? !this.IK : 200 > this.JP - this.lI) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0))); else { 0 == this.Nl ? M8(9) : 2 == this.Nl && M8(10); var a = this.j; this.Gj.getLastError(); a.Lo = this.tq; X8(a, 2) } };
    g.k.lC = function () { return this.j.lC() };
    g.k.isActive = function () { return this.j.isActive() };
    g.k.Un = function (a) { this.j.Un(a) }; g.k = lDb.prototype; g.k.Ko = null; g.k.mC = null; g.k.Uj = null; g.k.Fg = null; g.k.fM = null; g.k.ZG = null; g.k.LT = null; g.k.aH = null; g.k.nC = 0; g.k.Q3 = 0; g.k.Hi = null; g.k.hs = null; g.k.uq = null; g.k.Yu = null; g.k.Gs = null; g.k.BL = null; g.k.Zx = -1; g.k.NT = -1; g.k.Lo = -1; g.k.Yx = 0; g.k.Xx = 0; g.k.Xu = 8; g.lb(nDb, g.zb); g.lb(oDb, g.zb); g.k = lDb.prototype; g.k.connect = function (a, b, c, d, e) { M8(0); this.fM = b; this.mC = c || {}; d && void 0 !== e && (this.mC.OSID = d, this.mC.OAID = e); this.Z ? (K8((0, g.gb)(this.fW, this, a), 100), qDb(this)) : this.fW(a) };
    g.k.disconnect = function () { rDb(this); if (3 == this.j) { var a = this.nC++, b = this.ZG.clone(); g.Bp(b, "SID", this.D); g.Bp(b, "RID", a); g.Bp(b, "TYPE", "terminate"); W8(this, b); a = new N8(this, this.D, a); a.Vx = 2; a.Yr = a8(b.clone()); (new Image).src = a.Yr.toString(); a.Ux = Date.now(); O8(a) } BDb(this) };
    g.k.fW = function (a) { this.Gs = new iDb(this); this.Gs.dM = this.Ko; this.Gs.B = this.G; this.Gs.connect(a) };
    g.k.Jg = function () { return 0 == this.j };
    g.k.getState = function () { return this.j };
    g.k.PT = function (a) { this.hs = null; wDb(this, a) };
    g.k.OT = function () { this.uq = null; this.Fg = new N8(this, this.D, "rpc", this.N); this.Fg.Vu = this.Ko; this.Fg.aM = 0; var a = this.LT.clone(); g.Bp(a, "RID", "rpc"); g.Bp(a, "SID", this.D); g.Bp(a, "CI", this.BL ? "0" : "1"); g.Bp(a, "AID", this.Zx); W8(this, a); if (!g.Mn || g.Uc(10)) g.Bp(a, "TYPE", "xmlhttp"), YCb(this.Fg, a, !0, this.aH, !1); else { g.Bp(a, "TYPE", "html"); var b = this.Fg, c = !!this.aH; b.Vx = 3; b.Yr = a8(a.clone()); cDb(b, c) } };
    g.k.KT = function (a, b) {
        if (0 != this.j && (this.Fg == a || this.Uj == a)) if (this.Lo = a.jC, this.Uj == a && 3 == this.j) if (7 < this.Xu) { try { var c = this.G.parse(b) } catch (d) { c = null } if (Array.isArray(c) && 3 == c.length) if (a = c, 0 == a[0]) a: { if (!this.uq) { if (this.Fg) if (this.Fg.Ux + 3E3 < this.Uj.Ux) V8(this), this.Fg.cancel(), this.Fg = null; else break a; zDb(this); M8(19) } } else this.NT = a[1], 0 < this.NT - this.Zx && 37500 > a[2] && this.BL && 0 == this.Xx && !this.Yu && (this.Yu = K8((0, g.gb)(this.R3, this), 6E3)); else X8(this, 11) } else null != b && X8(this, 11); else if (this.Fg ==
            a && V8(this), !g.fc(b)) for (a = this.G.parse(b), b = 0; b < a.length; b++)c = a[b], this.Zx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.aH = c[2], c = c[3], null != c ? this.Xu = c : this.Xu = 6, this.j = 3, this.Hi && this.Hi.ST(), this.LT = T8(this, this.lC() ? this.aH : null, this.fM), xDb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Hi && this.Hi.RT(c), this.Xx = 0)
    };
    g.k.R3 = function () { null != this.Yu && (this.Yu = null, this.Fg.cancel(), this.Fg = null, zDb(this), M8(20)) };
    g.k.YG = function (a) {
        if (this.Fg == a) { V8(this); this.Fg = null; var b = 2 } else if (this.Uj == a) this.Uj = null, b = 1; else return; this.Lo = a.jC; if (0 != this.j) if (a.rq) if (1 == b) { b = a.Wu ? a.Wu.length : 0; a = Date.now() - a.Ux; var c = L8; c.dispatchEvent(new nDb(c, b, a, this.Yx)); pDb(this); this.C.length = 0 } else xDb(this); else {
            c = a.getLastError(); var d; if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Lo)) { if (d = 1 == b) this.Uj || this.hs || 1 == this.j || 2 <= this.Yx ? d = !1 : (this.hs = K8((0, g.gb)(this.PT, this, a), yDb(this, this.Yx)), this.Yx++, d = !0); d = !(d || 2 == b && zDb(this)) } if (d) switch (c) {
                case 1: X8(this,
                    5); break; case 4: X8(this, 10); break; case 3: X8(this, 6); break; case 7: X8(this, 12); break; default: X8(this, 2)
            }
        }
    };
    g.k.P3 = function (a) { if (!g.Fb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j); };
    g.k.qda = function (a) { a ? M8(2) : (M8(1), ADb(this, 8)) };
    g.k.cM = function (a) { if (a) throw Error("Can't create secondary domain capable XhrIo object."); a = new g.Ln; a.K = !1; return a };
    g.k.isActive = function () { return !!this.Hi && this.Hi.isActive(this) };
    g.k.Un = function (a) { var b = L8; b.dispatchEvent(new oDb(b, a)) };
    g.k.lC = function () { return !(!g.Mn || g.Uc(10)) };
    g.k = CDb.prototype; g.k.ST = function () { };
    g.k.RT = function () { };
    g.k.QT = function () { };
    g.k.gM = function () { };
    g.k.TT = function () { return {} };
    g.k.isActive = function () { return !0 }; g.k = DDb.prototype; g.k.enqueue = function (a) { this.B.push(a) };
    g.k.isEmpty = function () { return 0 === this.j.length && 0 === this.B.length };
    g.k.clear = function () { this.j = []; this.B = [] };
    g.k.contains = function (a) { return g.Fb(this.j, a) || g.Fb(this.B, a) };
    g.k.remove = function (a) { var b = this.j; var c = (0, g.cib)(b, a); 0 <= c ? (g.Gb(b, c), b = !0) : b = !1; return b || g.Hb(this.B, a) };
    g.k.im = function () { for (var a = [], b = this.j.length - 1; 0 <= b; --b)a.push(this.j[b]); var c = this.B.length; for (b = 0; b < c; ++b)a.push(this.B[b]); return a }; g.y(EDb, g.zb); g.y(FDb, g.zb); g.lb(Y8, g.I); g.k = Y8.prototype; g.k.nba = function () { this.Ri = Math.min(3E5, 2 * this.Ri); this.C(); this.B && this.start() };
    g.k.start = function () { var a = this.Ri + 15E3 * Math.random(); g.cv(this.j, a); this.B = Date.now() + a };
    g.k.stop = function () { this.j.stop(); this.B = 0 };
    g.k.isActive = function () { return this.j.isActive() };
    g.k.reset = function () { this.j.stop(); this.Ri = 5E3 }; g.lb(HDb, CDb); g.k = HDb.prototype; g.k.subscribe = function (a, b, c) { return this.C.subscribe(a, b, c) };
    g.k.unsubscribe = function (a, b, c) { return this.C.unsubscribe(a, b, c) };
    g.k.Ih = function (a) { return this.C.Ih(a) };
    g.k.publish = function (a, b) { return this.C.publish.apply(this.C, arguments) };
    g.k.dispose = function () { this.qa || (this.qa = !0, g.vb(this.C), this.disconnect(), g.vb(this.B), this.B = null, this.ra = function () { return "" }) };
    g.k.Ma = function () { return this.qa };
    g.k.connect = function (a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.Y = ""; this.B.stop(); this.K = a || null; this.G = b || 0; a = this.Ba + "/test"; b = this.Ba + "/bind"; var d = new lDb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ra), e = this.j; e && (e.Hi = null); d.Hi = this; this.j = d; IDb(this); if (this.j) { d = g.aB("ID_TOKEN"); var f = this.j.Ko || {}; d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"]; this.j.Ko = f } e ? (3 != e.getState() && 0 == tDb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.Zx)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function (a) { this.Z = a || 0; this.B.stop(); IDb(this); this.j && (3 == this.j.getState() && wDb(this.j), this.j.disconnect()); this.Z = 0 };
    g.k.sendMessage = function (a, b) { a = { _sc: a }; b && g.sd(a, b); this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Yz() && (IDb(this), sDb(this.j, a)) };
    g.k.ST = function () { this.B.reset(); this.K = null; this.G = 0; if (this.D.length) { var a = this.D; this.D = []; for (var b = 0, c = a.length; b < c; ++b)sDb(this.j, a[b]) } this.publish("handlerOpened"); dBb(this.Na, "BROWSER_CHANNEL") };
    g.k.QT = function (a) { var b = 2 == a && 401 == this.j.Lo; 4 == a || b || this.B.start(); this.publish("handlerError", a, b); jBb(this.Da, "BROWSER_CHANNEL") };
    g.k.gM = function (a, b) { if (!this.B.isActive()) this.publish("handlerClosed"); else if (b) for (var c = 0, d = b.length; c < d; ++c) { var e = b[c].map; e && this.D.push(e) } fBb(this.Ga, "BROWSER_CHANNEL"); a && this.Wa.j.iM("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length); b && this.Za.j.iM("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length) };
    g.k.TT = function () { var a = { v: 2 }; this.Y && (a.gsessionid = this.Y); 0 != this.G && (a.ui = "" + this.G); 0 != this.Z && (a.ui = "" + this.Z); this.K && g.sd(a, this.K); return a };
    g.k.RT = function (a) { "S" == a[0] ? this.Y = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new GDb(a[0], a[1])); hBb(this.La, "BROWSER_CHANNEL") };
    g.k.Yz = function () { return !!this.j && 3 == this.j.getState() };
    g.k.Ir = function (a) { (this.N.loungeIdToken = a) || this.B.stop(); if (this.Va && this.j) { var b = this.j.Ko || {}; a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"]; this.j.Ko = b } };
    g.k.getDeviceId = function () { return this.N.id };
    g.k.gt = function () { return this.B.isActive() ? this.B.B - Date.now() : NaN };
    g.k.nx = function () { var a = this.B; g.dv(a.j); a.start() };
    g.k.Eca = function () { this.B.isActive(); 0 == tDb(this.j) && this.connect(this.K, this.G) }; Z8.prototype.sendRequest = function (a, b, c, d, e, f, h) { a = { format: f ? "RAW" : "JSON", method: a, context: this, timeout: 5E3, withCredentials: !!h, onSuccess: g.jb(this.D, d, !f), onError: g.jb(this.C, e), onTimeout: g.jb(this.G, e) }; c && (a.postParams = c, a.headers = { "Content-Type": "application/x-www-form-urlencoded" }); return g.AB(b, a) };
    Z8.prototype.D = function (a, b, c, d) { b ? a(d) : a({ text: c.responseText }) };
    Z8.prototype.C = function (a, b) { a(Error("Request error: " + b.status)) };
    Z8.prototype.G = function (a) { a(Error("request timed out")) }; g.y(JDb, g.Jd); g.k = JDb.prototype; g.k.connect = function (a, b, c) { this.Fd.connect(a, b, c) };
    g.k.disconnect = function (a) { this.Fd.disconnect(a) };
    g.k.nx = function () { this.Fd.nx() };
    g.k.getDeviceId = function () { return this.Fd.getDeviceId() };
    g.k.gt = function () { return this.Fd.gt() };
    g.k.Yz = function () { return this.Fd.Yz() };
    g.k.S3 = function () { this.dispatchEvent("channelOpened"); var a = this.Fd, b = this.j; g.rC("yt-remote-session-browser-channel", { firstTestResults: [""], secondTestResults: !a.j.BL, sessionId: a.j.D, arrayId: a.j.Zx }); g.rC("yt-remote-session-screen-id", b); a = i8(); b = j8(); g.Fb(a, b) || a.push(b); BBb(a); DBb() };
    g.k.onClosed = function () { this.dispatchEvent("channelClosed") };
    g.k.onMessage = function (a) { this.dispatchEvent(new EDb(a)) };
    g.k.onError = function (a) { this.dispatchEvent(new FDb(a ? 1 : 0)) };
    g.k.sendMessage = function (a, b) { this.Fd.sendMessage(a, b) };
    g.k.Ir = function (a) { this.Fd.Ir(a) };
    g.k.dispose = function () { this.Fd.dispose() }; g.k = KDb.prototype;
    g.k.connect = function (a, b) {
        a = void 0 === a ? {} : a; b = void 0 === b ? 0 : b; 2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, MDb(this), (a = g.aB("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.w9 && (this.B.mdxVersion = "" + this.j.w9), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.z6 && (this.B.cst = this.j.z6),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, { H8: "gsessionid", A9: this.D, B9: this.B }), this.channel.open(), this.K = 2, LDb(this))
    };
    g.k.disconnect = function (a) { this.Y = void 0 === a ? 0 : a; this.C.stop(); MDb(this); this.channel && (0 !== this.Y ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close()); this.Y = 0 };
    g.k.gt = function () { return this.C.isActive() ? this.C.B - Date.now() : NaN };
    g.k.nx = function () { var a = this.C; g.dv(a.j); a.start() };
    g.k.sendMessage = function (a, b) { this.channel && (MDb(this), a = Object.assign({}, { _sc: a }, b), this.channel.send(a)) };
    g.k.Ir = function (a) { a || this.C.stop(); a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"] };
    g.k.getDeviceId = function () { return this.j ? this.j.id : "" };
    g.k.publish = function (a) { return this.G.publish.apply(this.G, [a].concat(g.qa(g.Ia.apply(1, arguments)))) };
    g.k.subscribe = function (a, b, c) { return this.G.subscribe(a, b, c) };
    g.k.unsubscribe = function (a, b, c) { return this.G.unsubscribe(a, b, c) };
    g.k.Ih = function (a) { return this.G.Ih(a) };
    g.k.dispose = function () { this.qa || (this.qa = !0, g.vb(this.G), this.disconnect(), g.vb(this.C), this.Ba = function () { return "" }) };
    g.k.Ma = function () { return this.qa }; g.y(NDb, g.Jd); g.k = NDb.prototype; g.k.connect = function (a, b) { this.j.connect(a, b) };
    g.k.disconnect = function (a) { this.j.disconnect(a) };
    g.k.nx = function () { this.j.nx() };
    g.k.getDeviceId = function () { return this.j.getDeviceId() };
    g.k.gt = function () { return this.j.gt() };
    g.k.Yz = function () { return 3 === this.j.K };
    g.k.T3 = function () { this.dispatchEvent("channelOpened") };
    g.k.onClosed = function () { this.dispatchEvent("channelClosed") };
    g.k.onMessage = function (a) { this.dispatchEvent(new EDb(a)) };
    g.k.onError = function () { this.dispatchEvent(new FDb(401 === this.j.yg ? 1 : 0)) };
    g.k.sendMessage = function (a, b) { this.j.sendMessage(a, b) };
    g.k.Ir = function (a) { this.j.Ir(a) };
    g.k.dispose = function () { this.j.dispose() }; var VDb = Date.now(), a9 = null, e9 = Array(50), d9 = -1, f9 = !1; g.lb(g9, g.vF); g9.prototype.Lk = function () { return this.screens };
    g9.prototype.contains = function (a) { return !!yBb(this.screens, a) };
    g9.prototype.get = function (a) { return a ? h8(this.screens, a) : null };
    g9.prototype.info = function (a) { b9(this.K, a) }; g.y(ZDb, g.vF); g.k = ZDb.prototype; g.k.start = function () { !this.j && isNaN(this.hd) && this.u_() };
    g.k.stop = function () { this.j && (this.j.abort(), this.j = null); isNaN(this.hd) || (g.wB(this.hd), this.hd = NaN) };
    g.k.va = function () { this.stop(); g.vF.prototype.va.call(this) };
    g.k.u_ = function () { this.hd = NaN; this.j = g.AB($8(this.C, "/pairing/get_screen"), { method: "POST", postParams: { pairing_code: this.N }, timeout: 5E3, onSuccess: (0, g.gb)(this.V3, this), onError: (0, g.gb)(this.U3, this), onTimeout: (0, g.gb)(this.W3, this) }) };
    g.k.V3 = function (a, b) { this.j = null; a = b.screen || {}; a.dialId = this.D; a.name = this.K; b = -1; this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs); this.publish("pairingComplete", new e8(a), b) };
    g.k.U3 = function (a) { this.j = null; a.status && 404 == a.status ? this.B >= TFb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = TFb[this.B], this.hd = g.sB((0, g.gb)(this.u_, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status)) };
    g.k.W3 = function () { this.j = null; this.publish("pairingFailed", Error("Server not responding")) };
    var TFb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4]; g.lb(i9, g9); g.k = i9.prototype; g.k.start = function () { h9(this) && this.publish("screenChange"); !g.sC("yt-remote-lounge-token-expiration") && $Db(this); g.wB(this.j); this.j = g.sB((0, g.gb)(this.start, this), 1E4) };
    g.k.add = function (a, b) { h9(this); WDb(this, a); j9(this, !1); this.publish("screenChange"); b(a); a.token || $Db(this) };
    g.k.remove = function (a, b) { var c = h9(this); YDb(this, a) && (j9(this, !1), c = !0); b(a); c && this.publish("screenChange") };
    g.k.AL = function (a, b, c, d) { var e = h9(this), f = this.get(a.id); f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen.")); e && this.publish("screenChange") };
    g.k.va = function () { g.wB(this.j); i9.Nf.va.call(this) };
    g.k.f8 = function (a) { h9(this); var b = this.screens.length; a = a && a.screens || []; for (var c = 0, d = a.length; c < d; ++c) { var e = a[c], f = this.get(e.screenId); f && (f.token = e.loungeToken, --b) } j9(this, !b); b && b9(this.K, "Missed " + b + " lounge tokens.") };
    g.k.e8 = function (a) { b9(this.K, "Requesting lounge tokens failed: " + a) }; g.y(bEb, g.vF); g.k = bEb.prototype; g.k.start = function () { var a = parseInt(g.sC("yt-remote-fast-check-period") || "0", 10); (this.D = g.kb() - 144E5 < a ? 0 : a) ? k9(this) : (this.D = g.kb() + 3E5, g.rC("yt-remote-fast-check-period", this.D), this.ER()) };
    g.k.isEmpty = function () { return g.nd(this.j) };
    g.k.update = function () {
        aEb("Updating availability on schedule."); var a = this.K(), b = g.cd(this.j, function (c, d) { return c && !!h8(a, d) }, this);
        eEb(this, b)
    };
    g.k.va = function () { g.wB(this.C); this.C = NaN; this.B && (this.B.abort(), this.B = null); g.vF.prototype.va.call(this) };
    g.k.ER = function () { g.wB(this.C); this.C = NaN; this.B && this.B.abort(); var a = fEb(this); if (WAb(a)) { var b = $8(this.G, "/pairing/get_screen_availability"); this.B = this.G.sendRequest("POST", b, { lounge_token: g.id(a).join(",") }, (0, g.gb)(this.Raa, this, a), (0, g.gb)(this.Qaa, this)) } else eEb(this, {}), k9(this) };
    g.k.Raa = function (a, b) { this.B = null; var c = g.id(fEb(this)); if (g.Xb(c, g.id(a))) { b = b.screens || []; c = {}; for (var d = b.length, e = 0; e < d; ++e)c[a[b[e].loungeToken]] = "online" == b[e].status; eEb(this, c); k9(this) } else this.cg("Changing Screen set during request."), this.ER() };
    g.k.Qaa = function (a) { this.cg("Screen availability failed: " + a); this.B = null; k9(this) };
    g.k.cg = function (a) { b9("OnlineScreenService", a) }; g.lb(l9, g9); g.k = l9.prototype; g.k.start = function () { this.B.start(); this.j.start(); this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange")) };
    g.k.add = function (a, b, c) { this.B.add(a, b, c) };
    g.k.remove = function (a, b, c) { this.B.remove(a, b, c); this.j.update() };
    g.k.AL = function (a, b, c, d) { this.B.contains(a) ? this.B.AL(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a))) };
    g.k.Lk = function (a) { return a ? this.screens : g.Kb(this.screens, g.Ct(this.C, function (b) { return !this.contains(b) }, this)) };
    g.k.UT = function () { return g.Ct(this.Lk(!0), function (a) { return !!this.j.j[a.id] }, this) };
    g.k.VT = function (a, b, c, d, e, f) {
        var h = this; this.info("getDialScreenByPairingCode " + a + " / " + b); var l = new ZDb(this.D, a, b, c, d); l.subscribe("pairingComplete", function (m, n) { g.vb(l); e(m9(h, m), n) });
        l.subscribe("pairingFailed", function (m) { g.vb(l); f(m) });
        l.start(); return (0, g.gb)(l.stop, l)
    };
    g.k.X3 = function (a, b, c, d) {
        g.AB($8(this.D, "/pairing/get_screen"), {
            method: "POST", postParams: { pairing_code: a }, timeout: 5E3, onSuccess: (0, g.gb)(function (e, f) { e = new e8(f.screen || {}); if (!e.name || jEb(this, e.name)) { a: { f = e.name; for (var h = 2, l = b(f, h); jEb(this, l);) { h++; if (20 < h) break a; l = b(f, h) } f = l } e.name = f } c(m9(this, e)) }, this),
            onError: (0, g.gb)(function (e) { d(Error("pairing request failed: " + e.status)) }, this),
            onTimeout: (0, g.gb)(function () { d(Error("pairing request timed out.")) }, this)
        })
    };
    g.k.va = function () { g.vb(this.B); g.vb(this.j); l9.Nf.va.call(this) };
    g.k.p8 = function () { lEb(this); this.publish("screenChange"); this.j.update() };
    l9.prototype.dispose = l9.prototype.dispose; g.lb(n9, g.vF); g.k = n9.prototype; g.k.vj = function (a) { this.Ma() || (a && (p9(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null)) };
    g.k.info = function (a) { b9(this.Da, a) };
    g.k.XT = function () { return null };
    g.k.ZR = function (a) { var b = this.B; a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null; chrome.cast.setReceiverDisplayStatus(b, (0, g.gb)(function () { this.info("Updated receiver status for " + b.friendlyName + ": " + a) }, this), (0, g.gb)(function () { p9(this, "Failed to update receiver status for: " + b.friendlyName) }, this)) };
    g.k.va = function () { this.ZR(""); n9.Nf.va.call(this) }; g.y(q9, n9); g.k = q9.prototype; g.k.XR = function (a) { if (this.C) { if (this.C == a) return; p9(this, "Overriding cast session with new session object"); xEb(this); this.Ba = !1; this.Y = "unknown"; this.C.removeUpdateListener(this.ra); this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga) } this.C = a; this.C.addUpdateListener(this.ra); this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga); sEb(this, "getMdxSessionStatus") };
    g.k.mA = function (a) { this.info("launchWithParams no-op for Cast: " + g.Vm(a)) };
    g.k.stop = function () { this.C ? this.C.stop((0, g.gb)(function () { this.vj() }, this), (0, g.gb)(function () { this.vj(Error("Failed to stop receiver app.")) }, this)) : this.vj(Error("Stopping cast device without session.")) };
    g.k.ZR = function () { };
    g.k.va = function () { this.info("disposeInternal"); xEb(this); this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga)); this.C = null; n9.prototype.va.call(this) };
    g.k.Eba = function (a, b) { if (!this.Ma()) if (b) if (b = c8(b), g.bb(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Vm(b)), a) { case "mdxSessionStatus": pEb(this, b); break; case "loungeToken": tEb(this, b); break; default: p9(this, "Unknown youtube message: " + a) } else p9(this, "Unable to parse message."); else p9(this, "No data in message.") };
    g.k.rX = function (a, b, c, d) { g.wB(this.Z); this.Z = 0; iEb(this.D, this.B.label, a, this.B.friendlyName, (0, g.gb)(function (e) { e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.sB((0, g.gb)(this.rX, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen.")) }, this), c) };
    g.k.XT = function () { return this.C };
    g.k.Y3 = function (a) { this.Ma() || a || (p9(this, "Cast session died."), this.vj()) }; g.y(r9, n9); g.k = r9.prototype; g.k.XR = function (a) { this.C = a; this.C.addUpdateListener(this.La) };
    g.k.mA = function (a) { this.Na = a; this.qa() };
    g.k.stop = function () { FEb(this); this.C ? this.C.stop((0, g.gb)(this.vj, this, null), (0, g.gb)(this.vj, this, "Failed to stop DIAL device.")) : this.vj() };
    g.k.va = function () { FEb(this); this.C && this.C.removeUpdateListener(this.La); this.C = null; n9.prototype.va.call(this) };
    g.k.Z3 = function (a) { this.Ma() || a || (p9(this, "DIAL session died."), this.G(), this.G = function () { }, this.vj()) }; g.y(u9, n9); u9.prototype.stop = function () { this.vj() };
    u9.prototype.XR = function () { };
    u9.prototype.mA = function () { g.wB(this.C); this.C = NaN; var a = h8(this.D.Lk(), this.B.label); a ? o9(this, a) : this.vj(Error("No such screen")) };
    u9.prototype.va = function () { g.wB(this.C); this.C = NaN; n9.prototype.va.call(this) }; g.y(v9, g.vF); g.k = v9.prototype;
    g.k.init = function (a, b) {
        chrome.cast.timeout.requestSession = 3E4; var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]); this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube")); var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED; a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION; var e = (0, g.gb)(this.zaa, this); c = new chrome.cast.ApiConfig(c, (0, g.gb)(this.WZ, this), e, d, a); c.customDialLaunchCallback = (0, g.gb)(this.r$, this);
        chrome.cast.initialize(c, (0, g.gb)(function () { this.Ma() || (chrome.cast.addReceiverActionListener(this.G), SDb(), this.B.subscribe("onlineScreenChange", (0, g.gb)(this.ZT, this)), this.C = IEb(this), chrome.cast.setCustomReceivers(this.C, function () { }, (0, g.gb)(function (f) { this.cg("Failed to set initial custom receivers: " + g.Vm(f)) }, this)), this.publish("yt-remote-cast2-availability-change", x9(this)), b(!0)) }, this), (0, g.gb)(function (f) {
            this.cg("Failed to initialize API: " + g.Vm(f));
            b(!1)
        }, this))
    };
    g.k.Nca = function (a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b); if (this.j) { var c = this.j.j; if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null) } if (a && b) {
            if (!this.j) {
                a = h8(this.B.Lk(), a); if (!a) { w9("setConnectedScreenStatus: Unknown screen."); return } if ("shortLived" == a.idType) { w9("setConnectedScreenStatus: Screen with id type to be short lived."); return } c = GEb(this, a); c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function () { }, (0, g.gb)(function (d) { this.cg("Failed to set initial custom receivers: " + g.Vm(d)) }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName); y9(this, new u9(this.B, c), !0)
            } this.j.ZR(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.Qca = function (a) { this.Ma() ? this.cg("Setting connection data on disposed cast v2") : this.j ? this.j.mA(a) : this.cg("Setting connection data without a session") };
    g.k.b4 = function () { this.Ma() ? this.cg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session") };
    g.k.requestSession = function () { chrome.cast.requestSession((0, g.gb)(this.WZ, this), (0, g.gb)(this.Uaa, this)) };
    g.k.va = function () { this.B.unsubscribe("onlineScreenChange", (0, g.gb)(this.ZT, this)); window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G); var a = PDb, b = g.Wa("yt.mdx.remote.debug.handlers_"); g.Hb(b || [], a); g.vb(this.j); g.vF.prototype.va.call(this) };
    g.k.cg = function (a) { b9("Controller", a) };
    g.k.YZ = function (a, b) { this.j == a && (b || y9(this, null), this.publish("yt-remote-cast2-session-change", b)) };
    g.k.waa = function (a, b) {
        if (!this.Ma()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
            case chrome.cast.ReceiverAction.CAST: if (this.j) if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop(); else { w9("onReceiverAction_: Casting to active receiver."); this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j); break } switch (a.receiverType) {
                case chrome.cast.ReceiverType.CUSTOM: y9(this,
                    new u9(this.B, a)); break; case chrome.cast.ReceiverType.DIAL: y9(this, new r9(this.B, a, this.D, this.config_)); break; case chrome.cast.ReceiverType.CAST: y9(this, new q9(this.B, a, this.config_)); break; default: this.cg("Unknown receiver type: " + a.receiverType)
            }break; case chrome.cast.ReceiverAction.STOP: this.j && this.j.B.label == a.label ? this.j.stop() : this.cg("Stopping receiver w/o session: " + a.friendlyName)
        } else this.cg("onReceiverAction_ called without receiver.")
    };
    g.k.r$ = function (a) {
        if (this.Ma()) return Promise.reject(Error("disposed")); var b = a.receiver; b.receiverType != chrome.cast.ReceiverType.DIAL && (this.cg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL); var c = this.j ? this.j.B : null; if (!c || c.label != b.label) return this.cg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch")); if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1)); this.cg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName); y9(this, new r9(this.B, b, this.D, this.config_))
        } b = this.j; b.Z = a; b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = CEb(b, {
            name: b.B.friendlyName, screenId: a.screenId, loungeToken: a.loungeToken, dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.dB(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = DEb(b, c)) : a = DEb(b, c)) : a = AEb(b); return a
    };
    g.k.WZ = function (a) {
        var b = this; if (!this.Ma() && !this.K) {
            w9("New cast session ID: " + a.sessionId); var c = a.receiver; if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j) if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0); else { this.cg("Got non-cast session without previous mdx receiver event, or mdx resume."); return } var d = this.j.B, e = h8(this.B.Lk(),
                    d.label); e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.vb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.gb)(this.YZ, this, this.j)), this.j.subscribe("sessionFailed", function () { return HEb(b, b.j) }), this.j.mA(null));
                this.j.XR(a)
            }
        }
    };
    g.k.a4 = function () { return this.j ? this.j.XT() : null };
    g.k.Uaa = function (a) { this.Ma() || (this.cg("Failed to estabilish a session: " + g.Vm(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.publish("yt-remote-cast2-session-failed")) };
    g.k.zaa = function (a) { w9("Receiver availability updated: " + a); if (!this.Ma()) { var b = x9(this); this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE; x9(this) != b && this.publish("yt-remote-cast2-availability-change", x9(this)) } };
    g.k.ZT = function () { this.Ma() || (this.C = IEb(this), w9("Updating custom receivers: " + g.Vm(this.C)), chrome.cast.setCustomReceivers(this.C, function () { }, (0, g.gb)(function () { this.cg("Failed to set custom receivers.") }, this)), this.publish("yt-remote-cast2-availability-change", x9(this))) };
    v9.prototype.setLaunchParams = v9.prototype.Qca; v9.prototype.setConnectedScreenStatus = v9.prototype.Nca; v9.prototype.stopSession = v9.prototype.b4; v9.prototype.getCastSession = v9.prototype.a4; v9.prototype.requestSession = v9.prototype.requestSession; v9.prototype.init = v9.prototype.init; v9.prototype.dispose = v9.prototype.dispose; var REb = []; g.k = F9.prototype;
    g.k.reset = function (a) {
        this.listId = ""; this.index = -1; this.videoId = ""; XEb(this); this.volume = -1; this.muted = !1; a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.xp = a.hasPrevious, this.Ok = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B =
            !isNaN(this.C))
    };
    g.k.isPlaying = function () { return 1 == this.playerState };
    g.k.il = function (a) { this.G = isNaN(a) ? 0 : a };
    g.k.getDuration = function () { return this.B ? this.G + G9(this) : this.G };
    g.k.clone = function () { return new F9(YEb(this)) }; g.y(L9, g.vF); g.k = L9.prototype; g.k.getState = function () { return this.C };
    g.k.gt = function () { return this.D.getReconnectTimeout() };
    g.k.nx = function () { this.D.reconnect() };
    g.k.play = function () { N9(this) ? (this.j ? this.j.play(null, g.Qd, R9(this, "play")) : Q9(this, "play"), aFb(this, 1, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.play) };
    g.k.pause = function () { N9(this) ? (this.j ? this.j.pause(null, g.Qd, R9(this, "pause")) : Q9(this, "pause"), aFb(this, 2, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.pause) };
    g.k.seekTo = function (a) { if (N9(this)) { if (this.j) { var b = M9(this), c = new chrome.cast.media.SeekRequest; c.currentTime = a; b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE; this.j.seek(c, g.Qd, R9(this, "seekTo", { newTime: a })) } else Q9(this, "seekTo", { newTime: a }); aFb(this, 3, a); this.publish("remotePlayerChange") } else O9(this, g.jb(this.seekTo, a)) };
    g.k.stop = function () { if (N9(this)) { this.j ? this.j.stop(null, g.Qd, R9(this, "stopVideo")) : Q9(this, "stopVideo"); var a = M9(this); a.index = -1; a.videoId = ""; XEb(a); P9(this, a); this.publish("remotePlayerChange") } else O9(this, this.stop) };
    g.k.setVolume = function (a, b) {
        if (N9(this)) {
            var c = M9(this); if (this.B) { if (c.volume != a) { var d = Math.round(a) / 100; this.B.setReceiverVolumeLevel(d, (0, g.gb)(function () { c9("set receiver volume: " + d) }, this), (0, g.gb)(function () { this.cg("failed to set receiver volume.") }, this)) } c.muted != b && this.B.setReceiverMuted(b, (0, g.gb)(function () { c9("set receiver muted: " + b) }, this), (0, g.gb)(function () { this.cg("failed to set receiver muted.") }, this)) } else {
                var e = {
                    volume: a,
                    muted: b
                }; -1 != c.volume && (e.delta = a - c.volume); Q9(this, "setVolume", e)
            } c.muted = b; c.volume = a; P9(this, c)
        } else O9(this, g.jb(this.setVolume, a, b))
    };
    g.k.aU = function (a, b) { if (N9(this)) { var c = M9(this); a = { videoId: a }; b && (c.trackData = { trackName: b.name, languageCode: b.languageCode, sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "", languageName: b.languageName, kind: b.kind }, a.style = g.Vm(b.style), g.sd(a, c.trackData)); Q9(this, "setSubtitlesTrack", a); P9(this, c) } else O9(this, g.jb(this.aU, a, b)) };
    g.k.setAudioTrack = function (a, b) { N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", { videoId: a, audioTrackId: b }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.jb(this.setAudioTrack, a, b)) };
    g.k.playVideo = function (a, b, c, d, e, f, h) { d = void 0 === d ? null : d; e = void 0 === e ? null : e; f = void 0 === f ? null : f; h = void 0 === h ? null : h; var l = M9(this), m = { videoId: a }; void 0 !== c && (m.currentIndex = c); J9(l, a, c || 0); void 0 !== b && (H9(l, b), m.currentTime = b); d && (m.listId = d); e && (m.playerParams = e); f && (m.clickTrackingParams = f); h && (m.locationInfo = g.Vm(h)); Q9(this, "setPlaylist", m); d || P9(this, l) };
    g.k.CK = function (a, b) { if (N9(this)) { if (a && b) { var c = M9(this); J9(c, a, b); P9(this, c) } Q9(this, "previous") } else O9(this, g.jb(this.CK, a, b)) };
    g.k.nextVideo = function (a, b) { if (N9(this)) { if (a && b) { var c = M9(this); J9(c, a, b); P9(this, c) } Q9(this, "next") } else O9(this, g.jb(this.nextVideo, a, b)) };
    g.k.GH = function () { if (N9(this)) { Q9(this, "clearPlaylist"); var a = M9(this); a.reset(); P9(this, a); this.publish("remotePlayerChange") } else O9(this, this.GH) };
    g.k.vW = function () { N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.vW) };
    g.k.dispose = function () { if (3 != this.C) { var a = this.C; this.C = 3; this.publish("proxyStateChange", a, this.C) } g.vF.prototype.dispose.call(this) };
    g.k.va = function () { $Eb(this); this.D = null; this.G.clear(); K9(this, null); g.vF.prototype.va.call(this) };
    g.k.dS = function (a) { if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) { var b = this.C; this.C = a; this.publish("proxyStateChange", b, a); if (1 == a) for (; !this.G.isEmpty();)b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this); else 3 == a && this.dispose() } };
    g.k.uaa = function (a, b) { this.publish(a, b) };
    g.k.i$ = function (a) { if (!a) this.bF(null), K9(this, null); else if (this.B.receiver.volume) { a = this.B.receiver.volume; var b = M9(this), c = Math.round(100 * a.level || 0); if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b) } };
    g.k.bF = function (a) { c9("Cast media: " + !!a); this.j && this.j.removeUpdateListener(this.Z); if (this.j = a) this.j.addUpdateListener(this.Z), bFb(this), this.publish("remotePlayerChange") };
    g.k.h$ = function (a) { a ? (bFb(this), this.publish("remotePlayerChange")) : this.bF(null) };
    g.k.ES = function () { Q9(this, "sendDebugCommand", { debugCommand: "stats4nerds " }) };
    g.k.k$ = function () { var a = UEb(); a && K9(this, a) };
    g.k.cg = function (a) { b9("CP", a) }; g.y(U9, g.vF); g.k = U9.prototype;
    g.k.connect = function (a, b) {
        if (b) {
            var c = b.listId, d = b.videoId, e = b.videoIds, f = b.playerParams, h = b.clickTrackingParams, l = b.index, m = { videoId: d }, n = b.currentTime, p = b.locationInfo; b = b.loopMode; void 0 !== n && (m.currentTime = 5 >= n ? 0 : n); f && (m.playerParams = f); p && (m.locationInfo = p); h && (m.clickTrackingParams = h); c && (m.listId = c); e && 0 < e.length && (m.videoIds = e.join(",")); void 0 !== l && (m.currentIndex = l); this.La && (m.loopMode = b || "LOOP_MODE_OFF"); c && (this.j.listId = c); this.j.videoId = d; this.j.index = l || 0; this.j.state = 3; H9(this.j,
                n); this.G = "UNSUPPORTED"; c = this.La ? "setInitialState" : "setPlaylist"; S9("Connecting with " + c + " and params: " + g.Vm(m)); this.B.connect({ method: c, params: g.Vm(m) }, a, EBb())
        } else S9("Connecting without params"), this.B.connect({}, a, EBb()); fFb(this)
    };
    g.k.Ir = function (a) { this.B.Ir(a) };
    g.k.dispose = function () { this.Ma() || (g.Va("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), T9(this, 3)); g.vF.prototype.dispose.call(this) };
    g.k.va = function () { gFb(this); iFb(this); hFb(this); g.wB(this.Z); this.Z = NaN; g.wB(this.Y); this.Y = NaN; this.D = null; g.jC(this.qa); this.qa.length = 0; this.B.dispose(); g.vF.prototype.va.call(this); this.G = this.N = this.C = this.j = this.B = null };
    g.k.rY = function (a) { if (!this.C || 0 === this.C.length) return !1; for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())if (!c.value.capabilities.has(a)) return !1; return !0 };
    g.k.L7 = function () { var a = 3; this.Ma() || (a = 0, isNaN(this.VD()) ? this.B.Yz() && isNaN(this.K) && (a = 1) : a = 2); return a };
    g.k.rz = function (a) { S9("Disconnecting with " + a); g.Va("yt.mdx.remote.remoteClient_", null); gFb(this); this.publish("beforeDisconnect", a); 1 == a && k8(); this.B.disconnect(a); this.dispose() };
    g.k.G7 = function () { var a = this.j; this.D && (a = this.j.clone(), J9(a, this.D, a.index)); return YEb(a) };
    g.k.Sca = function (a) {
        var b = this, c = new F9(a); c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.wB(this.Z), this.Z = g.sB(function () { if (b.D) { var e = b.D; b.D = null; b.j.videoId != e && V9(b, "getNowPlaying") } }, 5E3));
        var d = []; this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange"); this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Vm(this.j.trackData) == g.Vm(c.trackData) || d.push("remotePlayerChange"); this.j.reset(a); g.$b(d, function (e) { this.publish(e) }, this)
    };
    g.k.mX = function () {
        var a = this.B.getDeviceId(), b = g.Db(this.C, function (c) { return "REMOTE_CONTROL" == c.type && c.id != a });
        return b ? b.id : ""
    };
    g.k.VD = function () { return this.B.gt() };
    g.k.q7 = function () { return this.G || "UNSUPPORTED" };
    g.k.r7 = function () { return this.N || "" };
    g.k.d4 = function () { !isNaN(this.VD()) && this.B.nx() };
    g.k.Lca = function (a, b) { V9(this, a, b); kFb(this) };
    g.k.bU = function () { var a = g.KB("SAPISID", "") || g.KB("__Secure-1PAPISID") || "", b = g.KB("__Secure-3PAPISID", "") || ""; if (!a && !b) return ""; a = g.Kg(g.Jg(a), 2); b = g.Kg(g.Jg(b), 2); return g.Kg(g.Jg("," + a + "," + b), 2) };
    U9.prototype.subscribe = U9.prototype.subscribe; U9.prototype.unsubscribeByKey = U9.prototype.Ih; U9.prototype.getProxyState = U9.prototype.L7; U9.prototype.disconnect = U9.prototype.rz; U9.prototype.getPlayerContextData = U9.prototype.G7; U9.prototype.setPlayerContextData = U9.prototype.Sca; U9.prototype.getOtherConnectedRemoteId = U9.prototype.mX; U9.prototype.getReconnectTimeout = U9.prototype.VD; U9.prototype.getAutoplayMode = U9.prototype.q7; U9.prototype.getAutoplayVideoId = U9.prototype.r7; U9.prototype.reconnect = U9.prototype.d4;
    U9.prototype.sendMessage = U9.prototype.Lca; U9.prototype.getXsrfToken = U9.prototype.bU; U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.rY; g.y(wFb, g9); g.k = wFb.prototype; g.k.Lk = function (a) { return this.Zg.$_gs(a) };
    g.k.contains = function (a) { return !!this.Zg.$_c(a) };
    g.k.get = function (a) { return this.Zg.$_g(a) };
    g.k.start = function () { this.Zg.$_st() };
    g.k.add = function (a, b, c) { this.Zg.$_a(a, b, c) };
    g.k.remove = function (a, b, c) { this.Zg.$_r(a, b, c) };
    g.k.AL = function (a, b, c, d) { this.Zg.$_un(a, b, c, d) };
    g.k.va = function () { for (var a = 0, b = this.j.length; a < b; ++a)this.Zg.$_ubk(this.j[a]); this.j.length = 0; this.Zg = null; g9.prototype.va.call(this) };
    g.k.e4 = function () { this.publish("screenChange") };
    g.k.Z$ = function () { this.publish("onlineScreenChange") };
    l9.prototype.$_st = l9.prototype.start; l9.prototype.$_gspc = l9.prototype.X3; l9.prototype.$_gsppc = l9.prototype.VT; l9.prototype.$_c = l9.prototype.contains; l9.prototype.$_g = l9.prototype.get; l9.prototype.$_a = l9.prototype.add; l9.prototype.$_un = l9.prototype.AL; l9.prototype.$_r = l9.prototype.remove; l9.prototype.$_gs = l9.prototype.Lk; l9.prototype.$_gos = l9.prototype.UT; l9.prototype.$_s = l9.prototype.subscribe; l9.prototype.$_ubk = l9.prototype.Ih; var f$ = null, i$ = !1, W9 = null, X9 = null, HFb = null, a$ = []; g.y(MFb, g.I); g.k = MFb.prototype; g.k.va = function () { g.I.prototype.va.call(this); this.j.stop(); this.B.stop(); this.N.stop(); var a = this.Gc; a.unsubscribe("proxyStateChange", this.VZ, this); a.unsubscribe("remotePlayerChange", this.gF, this); a.unsubscribe("remoteQueueChange", this.kK, this); a.unsubscribe("previousNextChange", this.SZ, this); a.unsubscribe("nowAutoplaying", this.OZ, this); a.unsubscribe("autoplayDismissed", this.xZ, this); this.Gc = this.module = null };
    g.k.Nk = function (a) {
        var b = g.Ia.apply(1, arguments); if (2 != this.Gc.C) if (j$(this)) { if (1081 != M9(this.Gc).playerState || "control_seek" !== a) switch (a) { case "control_toggle_play_pause": M9(this.Gc).isPlaying() ? this.Gc.pause() : this.Gc.play(); break; case "control_play": this.Gc.play(); break; case "control_pause": this.Gc.pause(); break; case "control_seek": this.K.ZL(b[0], b[1]); break; case "control_subtitles_set_track": OFb(this, b[0]); break; case "control_set_audio_track": this.setAudioTrack(b[0]) } } else switch (a) {
            case "control_toggle_play_pause": case "control_play": case "control_pause": b =
                this.J.getCurrentTime(); k$(this, 0 === b ? void 0 : b); break; case "control_seek": k$(this, b[0]); break; case "control_subtitles_set_track": OFb(this, b[0]); break; case "control_set_audio_track": this.setAudioTrack(b[0])
        }
    };
    g.k.f$ = function (a) { this.N.G3(a) };
    g.k.Oda = function (a) { this.Nk("control_subtitles_set_track", g.nd(a) ? null : a) };
    g.k.L0 = function () { var a = this.J.getOption("captions", "track"); g.nd(a) || OFb(this, a) };
    g.k.Oc = function (a) { this.module.Oc(a, this.J.getVideoData().lengthSeconds) };
    g.k.K$ = function () { g.nd(this.C) || PFb(this, this.C); this.D = !1 };
    g.k.VZ = function (a, b) { this.B.stop(); 2 === b && this.C0() };
    g.k.gF = function () {
        if (j$(this)) {
            this.j.stop(); var a = M9(this.Gc); switch (a.playerState) { case 1080: case 1081: case 1084: case 1085: this.module.Xh = 1; break; case 1082: case 1083: this.module.Xh = 0; break; default: this.module.Xh = -1 }switch (a.playerState) {
                case 1081: case 1: this.Bc(new g.hL(8)); this.B0(); break; case 1085: case 3: this.Bc(new g.hL(9)); break; case 1083: case 0: this.Bc(new g.hL(2)); this.K.stop(); this.Oc(this.J.getVideoData().lengthSeconds); break; case 1084: this.Bc(new g.hL(4)); break; case 2: this.Bc(new g.hL(4));
                    this.Oc(I9(a)); break; case -1: this.Bc(new g.hL(64)); break; case -1E3: this.Bc(new g.hL(128, { errorCode: "mdx.remoteerror", errorMessage: "This video is not available for remote playback.", gI: 2 }))
            }a = M9(this.Gc).trackData; var b = this.C; (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, PFb(this, a)); a = M9(this.Gc); -1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.C1()
        } else NFb(this)
    };
    g.k.SZ = function () { this.J.publish("mdxpreviousnextchange") };
    g.k.kK = function () { j$(this) || NFb(this) };
    g.k.OZ = function (a) { isNaN(a) || this.J.publish("mdxnowautoplaying", a) };
    g.k.xZ = function () { this.J.publish("mdxautoplaycanceled") };
    g.k.setAudioTrack = function (a) { j$(this) && this.Gc.setAudioTrack(this.J.getVideoData(1).videoId, a) };
    g.k.seekTo = function (a, b) { -1 === M9(this.Gc).playerState ? k$(this, a) : b && this.Gc.seekTo(a) };
    g.k.C1 = function () { var a = this; if (j$(this)) { var b = M9(this.Gc); this.events.Qc(this.Y); b.muted ? this.J.mute() : this.J.unMute(); this.J.setVolume(b.volume); this.Y = this.events.T(this.J, "onVolumeChange", function (c) { KFb(a, c) }) } };
    g.k.B0 = function () { this.j.stop(); if (!this.Gc.Ma()) { var a = M9(this.Gc); a.isPlaying() && this.Bc(new g.hL(8)); this.Oc(I9(a)); this.j.start() } };
    g.k.C0 = function () { this.B.stop(); this.j.stop(); var a = this.Gc.gt(); 2 == this.Gc.C && !isNaN(a) && this.B.start() };
    g.k.Bc = function (a) { this.B.stop(); var b = this.G; if (!g.IDa(b, a)) { var c = g.lG(a, 2); c !== g.lG(this.G, 2) && this.J.AB(c); this.G = a; RFb(this.module, b, a) } }; g.y(l$, g.W); l$.prototype.pd = function () { this.j.show() };
    l$.prototype.Mb = function () { this.j.hide() };
    l$.prototype.B = function () { m8("mdx-privacy-popup-cancel"); this.Mb() };
    l$.prototype.C = function () { m8("mdx-privacy-popup-confirm"); this.Mb() }; g.y(m$, g.W); m$.prototype.onStateChange = function (a) { this.Cc(a.state) };
    m$.prototype.Cc = function (a) { if (3 === this.api.getPresentingPlayerType()) { var b = { RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name }; a = g.lG(a, 128) ? g.JJ("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.JJ("Playing on $RECEIVER_NAME", b) : g.JJ("Connected to $RECEIVER_NAME", b); this.updateValue("statustext", a); this.j.show() } else this.j.hide() }; g.y(n$, g.kX); n$.prototype.D = function () { var a = this.J.getOption("remote", "receivers"); a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.fu = g.bc(a, this.j, this), g.lX(this, g.Nr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Ij(a), this.enable(!0)) : this.enable(!1) };
    n$.prototype.j = function (a) { return a.key };
    n$.prototype.Dk = function (a) { return "cast-selector-receiver" === a ? "Cast..." : this.fu[a].name };
    n$.prototype.lh = function (a) { g.kX.prototype.lh.call(this, a); this.J.setOption("remote", "currentReceiver", this.fu[a]); this.Gb.Mb() }; g.y(QFb, g.qV); g.k = QFb.prototype;
    g.k.create = function () {
        var a = this.player.U(), b = g.MR(a); a = { device: "Desktop", app: "youtube-desktop", loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"), enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"), enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token") }; BFb(b, a); this.subscriptions.push(g.gE("yt-remote-before-disconnect", this.d$, this)); this.subscriptions.push(g.gE("yt-remote-connection-change", this.Aaa, this)); this.subscriptions.push(g.gE("yt-remote-receiver-availability-change", this.UZ,
            this)); this.subscriptions.push(g.gE("yt-remote-auto-connect", this.yaa, this)); this.subscriptions.push(g.gE("yt-remote-receiver-resumed", this.xaa, this)); this.subscriptions.push(g.gE("mdx-privacy-popup-confirm", this.aca, this)); this.subscriptions.push(g.gE("mdx-privacy-popup-cancel", this.Zba, this)); this.UZ()
    };
    g.k.load = function () { this.player.cancelPlayback(); g.qV.prototype.load.call(this); this.Sl = new MFb(this, this.player, this.Gc); var a = (a = JFb()) ? a.currentTime : 0; var b = GFb() ? new L9(e$(), void 0) : null; 0 == a && b && (a = I9(M9(b))); 0 !== a && this.Oc(a); RFb(this, this.De, this.De); this.player.aq(6) };
    g.k.unload = function () { this.player.publish("mdxautoplaycanceled"); this.Js = this.Kp; g.wb(this.Sl, this.Gc); this.Gc = this.Sl = null; g.qV.prototype.unload.call(this); this.player.aq(5); o$(this) };
    g.k.va = function () { g.hE(this.subscriptions); g.qV.prototype.va.call(this) };
    g.k.dF = function (a) { var b = g.Ia.apply(1, arguments); this.loaded && this.Sl.Nk.apply(this.Sl, [a].concat(g.qa(b))) };
    g.k.getAdState = function () { return this.Xh };
    g.k.xp = function () { return this.Gc ? M9(this.Gc).xp : !1 };
    g.k.Ok = function () { return this.Gc ? M9(this.Gc).Ok : !1 };
    g.k.Oc = function (a, b) { this.CY = a || 0; this.player.publish("progresssync", a, b); this.player.wc("onVideoProgress", a || 0) };
    g.k.getCurrentTime = function () { return this.CY };
    g.k.getProgressState = function () { var a = M9(this.Gc), b = this.player.getVideoData(); return { airingStart: 0, airingEnd: 0, allowSeeking: 1081 != a.playerState && this.player.Wh(), clipEnd: b.clipEnd, clipStart: b.clipStart, current: this.getCurrentTime(), displayedStart: -1, duration: a.getDuration(), ingestionTime: a.B ? a.C + G9(a) : a.C, isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(), loaded: a.Z, seekableEnd: a.B ? a.j + G9(a) : a.j, seekableStart: 0 < a.D ? a.D + G9(a) : a.D, offset: 0, viewerLivestreamJoinMediaTime: 0 } };
    g.k.nextVideo = function () { this.Gc && this.Gc.nextVideo() };
    g.k.CK = function () { this.Gc && this.Gc.CK() };
    g.k.d$ = function (a) { 1 === a && (this.kR = this.Gc ? M9(this.Gc) : null) };
    g.k.Aaa = function () { var a = GFb() ? new L9(e$(), void 0) : null; if (a) { var b = this.Js; this.loaded && this.unload(); this.Gc = a; this.kR = null; b.key !== this.Kp.key && (this.Js = b, this.load()) } else g.vb(this.Gc), this.Gc = null, this.loaded && (this.unload(), (a = this.kR) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a))); this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3) };
    g.k.UZ = function () { var a = [this.Kp], b = a.concat, c = CFb(); C9() && g.sC("yt-remote-cast-available") && c.push({ key: "cast-selector-receiver", name: "Cast..." }); this.fu = b.call(a, c); a = EFb() || this.Kp; p$(this, a); this.player.wc("onMdxReceiversChange") };
    g.k.yaa = function () { var a = EFb(); p$(this, a) };
    g.k.xaa = function () { this.Js = EFb() };
    g.k.aca = function () { this.zF = !0; o$(this); i$ = !1; f$ && h$(f$, 1); f$ = null };
    g.k.Zba = function () { this.zF = !1; o$(this); p$(this, this.Kp); this.Js = this.Kp; i$ = !1; f$ = null; this.player.playVideo() };
    g.k.Nh = function (a, b) { switch (a) { case "casting": return this.loaded; case "receivers": return this.fu; case "currentReceiver": return b && ("cast-selector-receiver" === b.key ? VEb() : p$(this, b)), this.loaded ? this.Js : this.Kp; case "quickCast": return 2 === this.fu.length && "cast-selector-receiver" === this.fu[1].key ? (b && VEb(), !0) : !1 } };
    g.k.ES = function () { this.Gc.ES() };
    g.k.jl = function () { return !1 };
    g.k.getOptions = function () { return ["casting", "receivers", "currentReceiver", "quickCast"] };
    g.k.isLoggedIn = function () { var a, b; return void 0 !== (null == (a = g.aB("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.aB("SESSION_INDEX") && !g.aB("LOGGED_IN")) }; g.pV("remote", QFb);
})(_yt_player);
