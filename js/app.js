!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function r(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function P(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var F, B, i, s, a, e, n, f, o, u, h, l, p, c, _, d, m, g, v, y, T, w, x, b, M, O, k, U = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, I = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, L = 1e8, Y = 1 / L, A = 2 * Math.PI, C = A / 4, D = 0, S = Math.sqrt, z = Math.cos, R = Math.sin, N = function(t) {
        return "string" == typeof t
    }, E = function(t) {
        return "function" == typeof t
    }, X = function(t) {
        return "number" == typeof t
    }, q = function(t) {
        return void 0 === t
    }, V = function(t) {
        return "object" == typeof t
    }, j = function(t) {
        return !1 !== t
    }, Q = function() {
        return "undefined" != typeof window
    }, G = function(t) {
        return E(t) || N(t)
    }, W = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , H = Array.isArray, Z = /(?:-?\.?\d|\.)+/gi, $ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, K = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, tt = /[+-]=-?[.\d]+/, et = /[^,'"\[\]\s]+/gi, rt = /[\d.+\-=]+(?:e[-+]\d*)*/i, it = {}, nt = {}, st = function(t) {
        return (nt = Pt(t, it)) && pr
    }, at = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, ot = function(t, e) {
        return !e && console.warn(t)
    }, ut = function(t, e) {
        return t && (it[t] = e) && nt && (nt[t] = e) || it
    }, ht = function() {
        return 0
    }, ft = {}, lt = [], pt = {}, ct = {}, _t = {}, dt = 30, mt = [], gt = "", vt = function(t) {
        var e, r, i = t[0];
        if (V(i) || E(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = mt.length; r-- && !mt[r].targetTest(i); )
                ;
            e = mt[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Ie(t[r],e))) || t.splice(r, 1);
        return t
    }, yt = function(t) {
        return t._gsap || vt(ie(t))[0]._gsap
    }, Tt = function(t, e, r) {
        return (r = t[e]) && E(r) ? t[e]() : q(r) && t.getAttribute && t.getAttribute(e) || r
    }, wt = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, xt = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, bt = function(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }, Mt = function(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }, Ot = function() {
        var t, e, r = lt.length, i = lt.slice(0);
        for (pt = {},
        t = lt.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, kt = function(t, e, r, i) {
        lt.length && Ot(),
        t.render(e, r, i),
        lt.length && Ot()
    }, At = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(et).length < 2 ? e : N(t) ? t.trim() : t
    }, Ct = function(t) {
        return t
    }, Dt = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, Pt = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, St = function t(e, r) {
        for (var i in r)
            "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = V(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
        return e
    }, zt = function(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }, Rt = function(t) {
        var i, e = t.parent || B, r = t.keyframes ? (i = H(t.keyframes),
        function(t, e) {
            for (var r in e)
                r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
        }
        ) : Dt;
        if (j(t.inherit))
            for (; e; )
                r(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }, Et = function(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , s = e._next;
        n ? n._next = s : t[r] === e && (t[r] = s),
        s ? s._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }, Ft = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        t._act = 0
    }, Bt = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }, It = function(t) {
        return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, Lt = function(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, Yt = function(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, Ut = function(t) {
        return t._end = bt(t._start + (t._tDur / Math.abs(t._ts || t._rts || Y) || 0))
    }, Nt = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = bt(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        Ut(t),
        r._dirty || Bt(r, t)),
        t
    }, Xt = function(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Yt(t.rawTime(), e),
        (!e._dur || Kt(0, e.totalDuration(), r) - e._tTime > Y) && e.render(r, !0)),
        Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -Y
        }
    }, qt = function(t, e, r, i) {
        return e.parent && Ft(e),
        e._start = bt((X(r) ? r : r || t !== B ? Zt(t, r, e) : t._time) + e._delay),
        e._end = bt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, r, i, n) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var s, a = t[i];
            if (n)
                for (s = e[n]; a && a[n] > s; )
                    a = a._prev;
            a ? (e._next = a._next,
            a._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = a,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Qt(e) || (t._recent = e),
        i || Xt(t, e),
        t
    }, Vt = function(t, e) {
        return (it.ScrollTrigger || at("scrollTrigger", e)) && it.ScrollTrigger.create(e, t)
    }, jt = function(t, e, r, i) {
        return qe(t, e),
        t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && n !== Me.frame ? (lt.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }, Qt = function(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, Gt = function(t, e, r, i) {
        var n = t._repeat
          , s = bt(e) || 0
          , a = t._tTime / t._tDur;
        return a && !i && (t._time *= s / t._dur),
        t._dur = s,
        t._tDur = n ? n < 0 ? 1e10 : bt(s * (n + 1) + t._rDelay * n) : s,
        0 < a && !i ? Nt(t, t._tTime = t._tDur * a) : t.parent && Ut(t),
        r || Bt(t.parent, t),
        t
    }, Wt = function(t) {
        return t instanceof Ye ? Bt(t) : Gt(t, t._dur)
    }, Ht = {
        _start: 0,
        endTime: ht,
        totalDuration: ht
    }, Zt = function t(e, r, i) {
        var n, s, a, o = e.labels, u = e._recent || Ht, h = e.duration() >= L ? u.endTime(!1) : e._dur;
        return N(r) && (isNaN(r) || r in o) ? (s = r.charAt(0),
        a = "%" === r.substr(-1),
        n = r.indexOf("="),
        "<" === s || ">" === s ? (0 <= n && (r = r.replace(/=/, "")),
        ("<" === s ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h),
        o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)),
        a && i && (s = s / 100 * (H(i) ? i[0] : i).totalDuration()),
        1 < n ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
    }, $t = function(t, e, r) {
        var i, n, s = X(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
        if (s && (o.duration = e[1]),
        o.parent = r,
        t) {
            for (i = o,
            n = r; n && !("immediateRender"in i); )
                i = n.vars.defaults || {},
                n = j(n.vars.inherit) && n.parent;
            o.immediateRender = j(i.immediateRender),
            t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
        }
        return new We(e[0],o,e[a + 1])
    }, Jt = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, Kt = function(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, te = function(t, e) {
        return N(t) && (e = rt.exec(t)) ? t.substr(e.index + e[0].length) : ""
    }, ee = [].slice, re = function(t, e) {
        return t && V(t) && "length"in t && (!e && !t.length || t.length - 1 in t && V(t[0])) && !t.nodeType && t !== i
    }, ie = function(t, e, r) {
        return !N(t) || r || !s && Oe() ? H(t) ? (i = r,
        void 0 === n && (n = []),
        t.forEach(function(t) {
            var e;
            return N(t) && !i || re(t, 1) ? (e = n).push.apply(e, ie(t)) : n.push(t)
        }) || n) : re(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call((e || a).querySelectorAll(t), 0);
        var i, n
    }, ne = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }, se = function(t) {
        if (E(t))
            return t;
        var _ = V(t) ? t : {
            each: t
        }
          , d = ze(_.ease)
          , m = _.from || 0
          , g = parseFloat(_.base) || 0
          , v = {}
          , e = 0 < m && m < 1
          , y = isNaN(m) || e
          , T = _.axis
          , w = m
          , x = m;
        return N(m) ? w = x = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && y && (w = m[0],
        x = m[1]),
        function(t, e, r) {
            var i, n, s, a, o, u, h, f, l, p = (r || _).length, c = v[p];
            if (!c) {
                if (!(l = "auto" === _.grid ? 0 : (_.grid || [1, L])[1])) {
                    for (h = -L; h < (h = r[l++].getBoundingClientRect().left) && l < p; )
                        ;
                    l--
                }
                for (c = v[p] = [],
                i = y ? Math.min(l, p) * w - .5 : m % l,
                n = l === L ? 0 : y ? p * x / l - .5 : m / l | 0,
                f = L,
                u = h = 0; u < p; u++)
                    s = u % l - i,
                    a = n - (u / l | 0),
                    c[u] = o = T ? Math.abs("y" === T ? a : s) : S(s * s + a * a),
                    h < o && (h = o),
                    o < f && (f = o);
                "random" === m && ne(c),
                c.max = h - f,
                c.min = f,
                c.v = p = (parseFloat(_.amount) || parseFloat(_.each) * (p < l ? p - 1 : T ? "y" === T ? p / l : l : Math.max(l, p / l)) || 0) * ("edges" === m ? -1 : 1),
                c.b = p < 0 ? g - p : g,
                c.u = te(_.amount || _.each) || 0,
                d = d && p < 0 ? Pe(d) : d
            }
            return p = (c[t] - c.min) / c.max || 0,
            bt(c.b + (d ? d(p) : p) * c.v) + c.u
        }
    }, ae = function(r) {
        var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (X(t) ? 0 : te(t))
        }
    }, oe = function(u, t) {
        var h, f, e = H(u);
        return !e && V(u) && (h = e = u.radius || L,
        u.values ? (u = ie(u.values),
        (f = !X(u[0])) && (h *= h)) : u = ae(u.increment)),
        Jt(t, e ? E(u) ? function(t) {
            return f = u(t),
            Math.abs(f - t) <= h ? f : t
        }
        : function(t) {
            for (var e, r, i = parseFloat(f ? t.x : t), n = parseFloat(f ? t.y : 0), s = L, a = 0, o = u.length; o--; )
                (e = f ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < s && (s = e,
                a = o);
            return a = !h || s <= h ? u[a] : t,
            f || a === t || X(t) ? a : a + te(t)
        }
        : ae(u))
    }, ue = function(t, e, r, i) {
        return Jt(H(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return H(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }, he = function(e, r, t) {
        return Jt(t, function(t) {
            return e[~~r(t)]
        })
    }, fe = function(t) {
        for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? et : Z),
            a += t.substr(s, e - s) + ue(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
            s = i + 1;
        return a + t.substr(s, t.length - s)
    }, le = function(e, t, r, i, n) {
        var s = t - e
          , a = i - r;
        return Jt(n, function(t) {
            return r + ((t - e) / s * a || 0)
        })
    }, pe = function(t, e, r) {
        var i, n, s, a = t.labels, o = L;
        for (i in a)
            (n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i,
            o = n);
        return s
    }, ce = function(t, e, r) {
        var i, n, s = t.vars, a = s[e];
        if (a)
            return i = s[e + "Params"],
            n = s.callbackScope || t,
            r && lt.length && Ot(),
            i ? a.apply(n, i) : a.call(n)
    }, _e = function(t) {
        return Ft(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && ce(t, "onInterrupt"),
        t
    }, de = 255, me = {
        aqua: [0, de, de],
        lime: [0, de, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, de],
        navy: [0, 0, 128],
        white: [de, de, de],
        olive: [128, 128, 0],
        yellow: [de, de, 0],
        orange: [de, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [de, 0, 0],
        pink: [de, 192, 203],
        cyan: [0, de, de],
        transparent: [de, de, de, 0]
    }, ge = function(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * de + .5 | 0
    }, ve = function(t, e, r) {
        var i, n, s, a, o, u, h, f, l, p, c = t ? X(t) ? [t >> 16, t >> 8 & de, t & de] : 0 : me.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            me[t])
                c = me[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & de, c & de, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & de, t & de]
            } else if ("hsl" === t.substr(0, 3))
                if (c = p = t.match(Z),
                e) {
                    if (~t.indexOf("="))
                        return c = t.match($),
                        r && c.length < 4 && (c[3] = 1),
                        c
                } else
                    a = +c[0] % 360 / 360,
                    o = +c[1] / 100,
                    i = 2 * (u = +c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < c.length && (c[3] *= 1),
                    c[0] = ge(a + 1 / 3, i, n),
                    c[1] = ge(a, i, n),
                    c[2] = ge(a - 1 / 3, i, n);
            else
                c = t.match(Z) || me.transparent;
            c = c.map(Number)
        }
        return e && !p && (i = c[0] / de,
        n = c[1] / de,
        s = c[2] / de,
        u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2,
        h === f ? a = o = 0 : (l = h - f,
        o = .5 < u ? l / (2 - h - f) : l / (h + f),
        a = h === i ? (n - s) / l + (n < s ? 6 : 0) : h === n ? (s - i) / l + 2 : (i - n) / l + 4,
        a *= 60),
        c[0] = ~~(a + .5),
        c[1] = ~~(100 * o + .5),
        c[2] = ~~(100 * u + .5)),
        r && c.length < 4 && (c[3] = 1),
        c
    }, ye = function(t) {
        var r = []
          , i = []
          , n = -1;
        return t.split(we).forEach(function(t) {
            var e = t.match(J) || [];
            r.push.apply(r, e),
            i.push(n += e.length + 1)
        }),
        r.c = i,
        r
    }, Te = function(t, e, r) {
        var i, n, s, a, o = "", u = (t + o).match(we), h = e ? "hsla(" : "rgba(", f = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = ve(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (s = ye(t),
        (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(we, "1").split(J)).length - 1; f < a; f++)
                o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
        if (!n)
            for (a = (n = t.split(we)).length - 1; f < a; f++)
                o += n[f] + u[f];
        return o + n[a]
    }, we = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in me)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), xe = /hsl[a]?\(/, be = function(t) {
        var e, r = t.join(" ");
        if (we.lastIndex = 0,
        we.test(r))
            return e = xe.test(r),
            t[1] = Te(t[1], e),
            t[0] = Te(t[0], e, ye(t[1])),
            !0
    }, Me = (d = Date.now,
    m = 500,
    g = 33,
    v = d(),
    y = v,
    w = T = 1e3 / 240,
    b = function t(e) {
        var r, i, n, s, a = d() - y, o = !0 === e;
        if (m < a && (v += a - g),
        (0 < (r = (n = (y += a) - v) - w) || o) && (s = ++p.frame,
        c = n - 1e3 * p.time,
        p.time = n /= 1e3,
        w += r + (T <= r ? 4 : T - r),
        i = 1),
        o || (u = h(t)),
        i)
            for (_ = 0; _ < x.length; _++)
                x[_](n, c, s, e)
    }
    ,
    p = {
        time: 0,
        frame: 0,
        tick: function() {
            b(!0)
        },
        deltaRatio: function(t) {
            return c / (1e3 / (t || 60))
        },
        wake: function() {
            e && (!s && Q() && (i = s = window,
            a = i.document || {},
            it.gsap = pr,
            (i.gsapVersions || (i.gsapVersions = [])).push(pr.version),
            st(nt || i.GreenSockGlobals || !i.gsap && i || {}),
            l = i.requestAnimationFrame),
            u && p.sleep(),
            h = l || function(t) {
                return setTimeout(t, w - 1e3 * p.time + 1 | 0)
            }
            ,
            o = 1,
            b(2))
        },
        sleep: function() {
            (l ? i.cancelAnimationFrame : clearTimeout)(u),
            o = 0,
            h = ht
        },
        lagSmoothing: function(t, e) {
            m = t || 1e8,
            g = Math.min(e, m, 0)
        },
        fps: function(t) {
            T = 1e3 / (t || 240),
            w = 1e3 * p.time + T
        },
        add: function(t) {
            x.indexOf(t) < 0 && x.push(t),
            Oe()
        },
        remove: function(t, e) {
            ~(e = x.indexOf(t)) && x.splice(e, 1) && e <= _ && _--
        },
        _listeners: x = []
    }), Oe = function() {
        return !o && Me.wake()
    }, ke = {}, Ae = /^[\d.\-M][\d.\-,\s]/, Ce = /["']/g, De = function(t) {
        var e, r, i, n, s = (t + "").split("("), a = ke[s[0]];
        return a && 1 < s.length && a.config ? a.config.apply(null, ~t.indexOf("{") ? [function(t) {
            for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++)
                r = s[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[a] = isNaN(i) ? i.replace(Ce, "").trim() : +i,
                a = r.substr(e + 1).trim();
            return n
        }(s[1])] : (e = t,
        r = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        n = e.indexOf("(", r),
        e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(At)) : ke._CE && Ae.test(t) ? ke._CE("", t) : a
    }, Pe = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Se = function t(e, r) {
        for (var i, n = e._first; n; )
            n instanceof Ye ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease,
            n._ease = n._yEase,
            n._yEase = i,
            n._yoyo = r)),
            n = n._next
    }, ze = function(t, e) {
        return t && (E(t) ? t : ke[t] || De(t)) || e
    }, Re = function(t, e, r, i) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return wt(t, function(t) {
            for (var e in ke[t] = it[t] = s,
            ke[n = t.toLowerCase()] = r,
            s)
                ke[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = s[e]
        }),
        s
    }, Ee = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }, Fe = function r(i, t, e) {
        var n = 1 <= t ? t : 1
          , s = (e || (i ? .3 : .45)) / (t < 1 ? t : 1)
          , a = s / A * (Math.asin(1 / n) || 0)
          , o = function(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * R((t - a) * s) + 1
        }
          , u = "out" === i ? o : "in" === i ? function(t) {
            return 1 - o(1 - t)
        }
        : Ee(o);
        return s = A / s,
        u.config = function(t, e) {
            return r(i, t, e)
        }
        ,
        u
    }, Be = function e(r, i) {
        void 0 === i && (i = 1.70158);
        var n = function(t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
        }
          , t = "out" === r ? n : "in" === r ? function(t) {
            return 1 - n(1 - t)
        }
        : Ee(n);
        return t.config = function(t) {
            return e(r, t)
        }
        ,
        t
    };
    wt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Re(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }),
    ke.Linear.easeNone = ke.none = ke.Linear.easeIn,
    Re("Elastic", Fe("in"), Fe("out"), Fe()),
    M = 7.5625,
    O = 1 / 2.75,
    Re("Bounce", function(t) {
        return 1 - k(1 - t)
    }, k = function(t) {
        return t < O ? M * t * t : t < .7272727272727273 ? M * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? M * (t -= 2.25 / 2.75) * t + .9375 : M * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ),
    Re("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Re("Circ", function(t) {
        return -(S(1 - t * t) - 1)
    }),
    Re("Sine", function(t) {
        return 1 === t ? 1 : 1 - z(t * C)
    }),
    Re("Back", Be("in"), Be("out"), Be()),
    ke.SteppedEase = ke.steps = it.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , i = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((i * Kt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    I.ease = ke["quad.out"],
    wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return gt += t + "," + t + "Params,"
    });
    var Ie = function(t, e) {
        this.id = D++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : Tt,
        this.set = e ? e.getSetter : Ke
    }
      , Le = function() {
        function t(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Gt(this, +t.duration, 1, 1),
            this.data = t.data,
            o || Me.wake()
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            Gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (Oe(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Nt(this, t),
                !r._dp || r.parent || Xt(r, this); r && r.parent; )
                    r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && qt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Y || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            kt(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + It(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + It(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Lt(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(t) {
            if (!arguments.length)
                return this._rts === -Y ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? Yt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || t === -Y ? 0 : this._rts,
            function(t) {
                for (var e = t.parent; e && e.parent; )
                    e._dirty = 1,
                    e.totalDuration(),
                    e = e.parent
            }(this.totalTime(Kt(-this._delay, this._tDur, e), !0)),
            Ut(this),
            this
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (Oe(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Y && (this._tTime -= Y)))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && qt(e, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (j(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Yt(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                r = e._start + r / (e._ts || 1),
                e = e._dp;
            return r
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
            Wt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t,
                Wt(this),
                e ? this.time(e) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(Zt(this, t), j(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, j(e))
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Y : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -Y,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - Y))
        }
        ,
        e.eventCallback = function(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e,
            r && (i[t + "Params"] = r),
            "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
            this) : i[t]
        }
        ,
        e.then = function(i) {
            var n = this;
            return new Promise(function(e) {
                var r = E(i) ? i : Ct
                  , t = function() {
                    var t = n.then;
                    n.then = null,
                    E(r) && (r = r(n)) && (r.then || r === n) && (n.then = t),
                    e(r),
                    n.then = t
                };
                n._initted && 1 === n.totalProgress() && 0 <= n._ts || !n._tTime && n._ts < 0 ? t() : n._prom = t
            }
            )
        }
        ,
        e.kill = function() {
            _e(this)
        }
        ,
        t
    }();
    Dt(Le.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Y,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ye = function(i) {
        function t(t, e) {
            var r;
            return void 0 === t && (t = {}),
            (r = i.call(this, t) || this).labels = {},
            r.smoothChildTiming = !!t.smoothChildTiming,
            r.autoRemoveChildren = !!t.autoRemoveChildren,
            r._sort = j(t.sortChildren),
            B && qt(t.parent || B, P(r), e),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && Vt(P(r), t.scrollTrigger),
            r
        }
        r(t, i);
        var e = t.prototype;
        return e.to = function(t, e, r) {
            return $t(0, arguments, this),
            this
        }
        ,
        e.from = function(t, e, r) {
            return $t(1, arguments, this),
            this
        }
        ,
        e.fromTo = function(t, e, r, i) {
            return $t(2, arguments, this),
            this
        }
        ,
        e.set = function(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            Rt(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new We(t,e,Zt(this, r),1),
            this
        }
        ,
        e.call = function(t, e, r) {
            return qt(this, We.delayedCall(0, t, e), r)
        }
        ,
        e.staggerTo = function(t, e, r, i, n, s, a) {
            return r.duration = e,
            r.stagger = r.stagger || i,
            r.onComplete = s,
            r.onCompleteParams = a,
            r.parent = this,
            new We(t,r,Zt(this, n)),
            this
        }
        ,
        e.staggerFrom = function(t, e, r, i, n, s, a) {
            return r.runBackwards = 1,
            Rt(r).immediateRender = j(r.immediateRender),
            this.staggerTo(t, e, r, i, n, s, a)
        }
        ,
        e.staggerFromTo = function(t, e, r, i, n, s, a, o) {
            return i.startAt = r,
            Rt(i).immediateRender = j(i.immediateRender),
            this.staggerTo(t, e, i, n, s, a, o)
        }
        ,
        e.render = function(t, e, r) {
            var i, n, s, a, o, u, h, f, l, p, c, _, d = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = t <= 0 ? 0 : bt(t), y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== B && m < v && 0 <= t && (v = m),
            v !== this._tTime || r || y) {
                if (d !== this._time && g && (v += this._time - d,
                t += this._time - d),
                i = v,
                l = this._start,
                u = !(f = this._ts),
                y && (g || (d = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat) {
                    if (c = this._yoyo,
                    o = g + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * o + t, e, r);
                    if (i = bt(v % o),
                    v === m ? (a = this._repeat,
                    i = g) : ((a = ~~(v / o)) && a === v / o && (i = g,
                    a--),
                    g < i && (i = g)),
                    p = Lt(this._tTime, o),
                    !d && this._tTime && p !== a && (p = a),
                    c && 1 & a && (i = g - i,
                    _ = 1),
                    a !== p && !this._lock) {
                        var T = c && 1 & p
                          , w = T === (c && 1 & a);
                        if (a < p && (T = !T),
                        d = T ? 0 : g,
                        this._lock = 1,
                        this.render(d || (_ ? 0 : bt(a * o)), e, !g)._lock = 0,
                        this._tTime = v,
                        !e && this.parent && ce(this, "onRepeat"),
                        this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                        d && d !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (g = this._dur,
                        m = this._tDur,
                        w && (this._lock = 2,
                        d = T ? g : -1e-4,
                        this.render(d, !0),
                        this.vars.repeatRefresh && !_ && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !u)
                            return this;
                        Se(this, _)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, r) {
                    var i;
                    if (e < r)
                        for (i = t._first; i && i._start <= r; ) {
                            if ("isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= r; ) {
                            if ("isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, bt(d), bt(i))) && (v -= i - (i = h._start)),
                this._tTime = v,
                this._time = i,
                this._act = !f,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                d = 0),
                !d && i && !e && (ce(this, "onStart"),
                this._tTime !== v))
                    return this;
                if (d <= i && 0 <= t)
                    for (n = this._first; n; ) {
                        if (s = n._next,
                        (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                s && (v += this._zTime = -Y);
                                break
                            }
                        }
                        n = s
                    }
                else {
                    n = this._last;
                    for (var x = t < 0 ? t : i; n; ) {
                        if (s = n._prev,
                        (n._act || x <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (x - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (x - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                s && (v += this._zTime = x ? -Y : Y);
                                break
                            }
                        }
                        n = s
                    }
                }
                if (h && !e && (this.pause(),
                h.render(d <= i ? 0 : -Y)._zTime = d <= i ? 1 : -1,
                this._ts))
                    return this._start = l,
                    Ut(this),
                    this.render(t, e, r);
                this._onUpdate && !e && ce(this, "onUpdate", !0),
                (v === m && m >= this.totalDuration() || !v && d) && (l !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !g) && (v === m && 0 < this._ts || !v && this._ts < 0) && Ft(this, 1),
                e || t < 0 && !d || !v && !d && m || (ce(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(v < m && 0 < this.timeScale()) && this._prom())))
            }
            return this
        }
        ,
        e.add = function(t, e) {
            var r = this;
            if (X(e) || (e = Zt(this, e, t)),
            !(t instanceof Le)) {
                if (H(t))
                    return t.forEach(function(t) {
                        return r.add(t, e)
                    }),
                    this;
                if (N(t))
                    return this.addLabel(t, e);
                if (!E(t))
                    return this;
                t = We.delayedCall(0, t)
            }
            return this !== t ? qt(this, t, e) : this
        }
        ,
        e.getChildren = function(t, e, r, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -L);
            for (var n = [], s = this._first; s; )
                s._start >= i && (s instanceof We ? e && n.push(s) : (r && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, r)))),
                s = s._next;
            return n
        }
        ,
        e.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        e.remove = function(t) {
            return N(t) ? this.removeLabel(t) : E(t) ? this.killTweensOf(t) : (Et(this, t),
            t === this._recent && (this._recent = this._last),
            Bt(this))
        }
        ,
        e.totalTime = function(t, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = bt(Me.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function(t, e) {
            return this.labels[t] = Zt(this, e),
            this
        }
        ,
        e.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function(t, e, r) {
            var i = We.delayedCall(0, e || ht, r);
            return i.data = "isPause",
            this._hasPause = 1,
            qt(this, i, Zt(this, t))
        }
        ,
        e.removePause = function(t) {
            var e = this._first;
            for (t = Zt(this, t); e; )
                e._start === t && "isPause" === e.data && Ft(e),
                e = e._next
        }
        ,
        e.killTweensOf = function(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Ue !== i[n] && i[n].kill(t, e);
            return this
        }
        ,
        e.getTweensOf = function(t, e) {
            for (var r, i = [], n = ie(t), s = this._first, a = X(e); s; )
                s instanceof We ? Mt(s._targets, n) && (a ? (!Ue || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                s = s._next;
            return i
        }
        ,
        e.tweenTo = function(t, e) {
            e = e || {};
            var r, i = this, n = Zt(i, t), s = e, a = s.startAt, o = s.onStart, u = s.onStartParams, h = s.immediateRender, f = We.to(i, Dt({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || Y,
                onStart: function() {
                    if (i.pause(),
                    !r) {
                        var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                        f._dur !== t && Gt(f, t, 0, 1).render(f._time, !0, !0),
                        r = 1
                    }
                    o && o.apply(f, u || [])
                }
            }, e));
            return h ? f.render(0) : f
        }
        ,
        e.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, Dt({
                startAt: {
                    time: Zt(this, t)
                }
            }, r))
        }
        ,
        e.recent = function() {
            return this._recent
        }
        ,
        e.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            pe(this, Zt(this, t))
        }
        ,
        e.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            pe(this, Zt(this, t), 1)
        }
        ,
        e.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Y)
        }
        ,
        e.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n; )
                n._start >= r && (n._start += t,
                n._end += t),
                n = n._next;
            if (e)
                for (i in s)
                    s[i] >= r && (s[i] += t);
            return Bt(this)
        }
        ,
        e.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return i.prototype.invalidate.call(this)
        }
        ,
        e.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Bt(this)
        }
        ,
        e.totalDuration = function(t) {
            var e, r, i, n = 0, s = this, a = s._last, o = L;
            if (arguments.length)
                return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (i = s.parent; a; )
                    e = a._prev,
                    a._dirty && a.totalDuration(),
                    o < (r = a._start) && s._sort && a._ts && !s._lock ? (s._lock = 1,
                    qt(s, a, r - a._delay, 1)._lock = 0) : o = r,
                    r < 0 && a._ts && (n -= r,
                    (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts,
                    s._time -= r,
                    s._tTime -= r),
                    s.shiftChildren(-r, !1, -Infinity),
                    o = 0),
                    a._end > n && a._ts && (n = a._end),
                    a = e;
                Gt(s, s === B && s._time > n ? s._time : n, 1, 1),
                s._dirty = 0
            }
            return s._tDur
        }
        ,
        t.updateRoot = function(t) {
            if (B._ts && (kt(B, Yt(t, B)),
            n = Me.frame),
            Me.frame >= dt) {
                dt += U.autoSleep || 120;
                var e = B._first;
                if ((!e || !e._ts) && U.autoSleep && Me._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Me.sleep()
                }
            }
        }
        ,
        t
    }(Le);
    Dt(Ye.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ue, Ne = function(t, e, r, i, n, s, a, o, u) {
        E(i) && (i = i(n || 0, t, s));
        var h, f = t[e], l = "get" !== r ? r : E(f) ? u ? t[e.indexOf("set") || !E(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f, p = E(f) ? u ? $e : Ze : He;
        if (N(i) && (~i.indexOf("random(") && (i = fe(i)),
        "=" === i.charAt(1) && ((h = parseFloat(l) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (te(l) || 0)) || 0 === h) && (i = h)),
        l !== i)
            return isNaN(l * i) || "" === i ? (!f && !(e in t) && at(e, i),
            function(t, e, r, i, n, s, a) {
                var o, u, h, f, l, p, c, _, d = new ur(this._pt,t,e,0,1,rr,null,n), m = 0, g = 0;
                for (d.b = r,
                d.e = i,
                r += "",
                (c = ~(i += "").indexOf("random(")) && (i = fe(i)),
                s && (s(_ = [r, i], t, e),
                r = _[0],
                i = _[1]),
                u = r.match(K) || []; o = K.exec(i); )
                    f = o[0],
                    l = i.substring(m, o.index),
                    h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1),
                    f !== u[g++] && (p = parseFloat(u[g - 1]) || 0,
                    d._pt = {
                        _next: d._pt,
                        p: l || 1 === g ? l : ",",
                        s: p,
                        c: "=" === f.charAt(1) ? parseFloat(f.substr(2)) * ("-" === f.charAt(0) ? -1 : 1) : parseFloat(f) - p,
                        m: h && h < 4 ? Math.round : 0
                    },
                    m = K.lastIndex);
                return d.c = m < i.length ? i.substring(m, i.length) : "",
                d.fp = a,
                (tt.test(i) || c) && (d.e = 0),
                this._pt = d
            }
            .call(this, t, e, l, i, p, o || U.stringFilter, u)) : (h = new ur(this._pt,t,e,+l || 0,i - (l || 0),"boolean" == typeof f ? er : tr,0,p),
            u && (h.fp = u),
            a && h.modifier(a, this, t),
            this._pt = h)
    }, Xe = function(t, e, r, i, n, s) {
        var a, o, u, h;
        if (ct[t] && !1 !== (a = new ct[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
            if (E(t) && (t = je(t, n, e, r, i)),
            !V(t) || t.style && t.nodeType || H(t) || W(t))
                return N(t) ? je(t, n, e, r, i) : t;
            var s, a = {};
            for (s in t)
                a[s] = je(t[s], n, e, r, i);
            return a
        }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new ur(r._pt,n,t,0,1,a.render,a,0,a.priority),
        r !== f))
            for (u = r._ptLookup[r._targets.indexOf(n)],
            h = a._props.length; h--; )
                u[a._props[h]] = o;
        return a
    }, qe = function t(e, r) {
        var i, n, s, a, o, u, h, f, l, p, c, _, d, m = e.vars, g = m.ease, v = m.startAt, y = m.immediateRender, T = m.lazy, w = m.onUpdate, x = m.onUpdateParams, b = m.callbackScope, M = m.runBackwards, O = m.yoyoEase, k = m.keyframes, A = m.autoRevert, C = e._dur, D = e._startAt, P = e._targets, S = e.parent, z = S && "nested" === S.data ? S.parent._targets : P, R = "auto" === e._overwrite && !F, E = e.timeline;
        if (E && (!k || !g) && (g = "none"),
        e._ease = ze(g, I.ease),
        e._yEase = O ? Pe(ze(!0 === O ? g : O, I.ease)) : 0,
        O && e._yoyo && !e._repeat && (O = e._yEase,
        e._yEase = e._ease,
        e._ease = O),
        e._from = !E && !!m.runBackwards,
        !E || k && !m.stagger) {
            if (_ = (f = P[0] ? yt(P[0]).harness : 0) && m[f.prop],
            i = zt(m, ft),
            D && Ft(D.render(-1, !0)),
            v)
                if (Ft(e._startAt = We.set(P, Dt({
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: j(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: x,
                    callbackScope: b,
                    stagger: 0
                }, v))),
                r < 0 && !y && !A && e._startAt.render(-1, !0),
                y) {
                    if (0 < r && !A && (e._startAt = 0),
                    C && r <= 0)
                        return void (r && (e._zTime = r))
                } else
                    !1 === A && (e._startAt = 0);
            else if (M && C)
                if (D)
                    !A && (e._startAt = 0);
                else if (r && (y = !1),
                s = Dt({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: y && j(T),
                    immediateRender: y,
                    stagger: 0,
                    parent: S
                }, i),
                _ && (s[f.prop] = _),
                Ft(e._startAt = We.set(P, s)),
                r < 0 && e._startAt.render(-1, !0),
                e._zTime = r,
                y) {
                    if (!r)
                        return
                } else
                    t(e._startAt, Y);
            for (e._pt = 0,
            T = C && j(T) || T && !C,
            n = 0; n < P.length; n++) {
                if (h = (o = P[n])._gsap || vt(P)[n]._gsap,
                e._ptLookup[n] = p = {},
                pt[h.id] && lt.length && Ot(),
                c = z === P ? n : z.indexOf(o),
                f && !1 !== (l = new f).init(o, _ || i, e, c, z) && (e._pt = a = new ur(e._pt,o,l.name,0,1,l.render,l,0,l.priority),
                l._props.forEach(function(t) {
                    p[t] = a
                }),
                l.priority && (u = 1)),
                !f || _)
                    for (s in i)
                        ct[s] && (l = Xe(s, i, e, c, o, z)) ? l.priority && (u = 1) : p[s] = a = Ne.call(e, o, s, "get", i[s], c, z, 0, m.stringFilter);
                e._op && e._op[n] && e.kill(o, e._op[n]),
                R && e._pt && (Ue = e,
                B.killTweensOf(o, p, e.globalTime(r)),
                d = !e.parent,
                Ue = 0),
                e._pt && T && (pt[h.id] = 1)
            }
            u && or(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = w,
        e._initted = (!e._op || e._pt) && !d,
        k && r <= 0 && E.render(L, !0, !0)
    }, Ve = function(t, r, e, i) {
        var n, s, a = r.ease || i || "power1.inOut";
        if (H(r))
            s = e[t] || (e[t] = []),
            r.forEach(function(t, e) {
                return s.push({
                    t: e / (r.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
        else
            for (n in r)
                s = e[n] || (e[n] = []),
                "ease" === n || s.push({
                    t: parseFloat(t),
                    v: r[n],
                    e: a
                })
    }, je = function(t, e, r, i, n) {
        return E(t) ? t.call(e, r, i, n) : N(t) && ~t.indexOf("random(") ? fe(t) : t
    }, Qe = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ge = {};
    wt(Qe + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ge[t] = 1
    });
    var We = function(D) {
        function n(t, e, r, i) {
            var n;
            "number" == typeof e && (r.duration = e,
            e = r,
            r = null);
            var s, a, o, u, h, f, l, p, c = (n = D.call(this, i ? e : Rt(e)) || this).vars, _ = c.duration, d = c.delay, m = c.immediateRender, g = c.stagger, v = c.overwrite, y = c.keyframes, T = c.defaults, w = c.scrollTrigger, x = c.yoyoEase, b = e.parent || B, M = (H(t) || W(t) ? X(t[0]) : "length"in e) ? [t] : ie(t);
            if (n._targets = M.length ? vt(M) : ot("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [],
            n._ptLookup = [],
            n._overwrite = v,
            y || g || G(_) || G(d)) {
                if (e = n.vars,
                (s = n.timeline = new Ye({
                    data: "nested",
                    defaults: T || {}
                })).kill(),
                s.parent = s._dp = P(n),
                s._start = 0,
                g || G(_) || G(d)) {
                    if (u = M.length,
                    l = g && se(g),
                    V(g))
                        for (h in g)
                            ~Qe.indexOf(h) && (p || (p = {}),
                            p[h] = g[h]);
                    for (a = 0; a < u; a++)
                        (o = zt(e, Ge)).stagger = 0,
                        x && (o.yoyoEase = x),
                        p && Pt(o, p),
                        f = M[a],
                        o.duration = +je(_, P(n), a, f, M),
                        o.delay = (+je(d, P(n), a, f, M) || 0) - n._delay,
                        !g && 1 === u && o.delay && (n._delay = d = o.delay,
                        n._start += d,
                        o.delay = 0),
                        s.to(f, o, l ? l(a, f, M) : 0),
                        s._ease = ke.none;
                    s.duration() ? _ = d = 0 : n.timeline = 0
                } else if (y) {
                    Rt(Dt(s.vars.defaults, {
                        ease: "none"
                    })),
                    s._ease = ze(y.ease || e.ease || "none");
                    var O, k, A, C = 0;
                    if (H(y))
                        y.forEach(function(t) {
                            return s.to(M, t, ">")
                        });
                    else {
                        for (h in o = {},
                        y)
                            "ease" === h || "easeEach" === h || Ve(h, y[h], o, y.easeEach);
                        for (h in o)
                            for (O = o[h].sort(function(t, e) {
                                return t.t - e.t
                            }),
                            a = C = 0; a < O.length; a++)
                                (A = {
                                    ease: (k = O[a]).e,
                                    duration: (k.t - (a ? O[a - 1].t : 0)) / 100 * _
                                })[h] = k.v,
                                s.to(M, A, C),
                                C += A.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || n.duration(_ = s.duration())
            } else
                n.timeline = 0;
            return !0 !== v || F || (Ue = P(n),
            B.killTweensOf(M),
            Ue = 0),
            qt(b, P(n), r),
            e.reversed && n.reverse(),
            e.paused && n.paused(!0),
            (m || !_ && !y && n._start === bt(b._time) && j(m) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(P(n)) && "nested" !== b.data) && (n._tTime = -Y,
            n.render(Math.max(0, -d))),
            w && Vt(P(n), w),
            n
        }
        r(n, D);
        var t = n.prototype;
        return t.render = function(t, e, r) {
            var i, n, s, a, o, u, h, f, l, p = this._time, c = this._tDur, _ = this._dur, d = c - Y < t && 0 <= t ? c : t < Y ? 0 : t;
            if (_) {
                if (d !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = d,
                    f = this.timeline,
                    this._repeat) {
                        if (a = _ + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * a + t, e, r);
                        if (i = bt(d % a),
                        d === c ? (s = this._repeat,
                        i = _) : ((s = ~~(d / a)) && s === d / a && (i = _,
                        s--),
                        _ < i && (i = _)),
                        (u = this._yoyo && 1 & s) && (l = this._yEase,
                        i = _ - i),
                        o = Lt(this._tTime, a),
                        i === p && !r && this._initted)
                            return this;
                        s !== o && (f && this._yEase && Se(f, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                        this.render(bt(a * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (jt(this, t < 0 ? t : i, r, e))
                            return this._tTime = 0,
                            this;
                        if (_ !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._tTime = d,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = h = (l || this._ease)(i / _),
                    this._from && (this.ratio = h = 1 - h),
                    i && !p && !e && (ce(this, "onStart"),
                    this._tTime !== d))
                        return this;
                    for (n = this._pt; n; )
                        n.r(h, n.d),
                        n = n._next;
                    f && f.render(t < 0 ? t : !i && u ? -Y : f._dur * f._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    ce(this, "onUpdate")),
                    this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && ce(this, "onRepeat"),
                    d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    (t || !_) && (d === this._tDur && 0 < this._ts || !d && this._ts < 0) && Ft(this, 1),
                    e || t < 0 && !p || !d && !p || (ce(this, d === c ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(d < c && 0 < this.timeScale()) && this._prom()))
                }
            } else
                !function(t, e, r, i) {
                    var n, s, a, o = t.ratio, u = e < 0 || !e && (!t._start && function t(e) {
                        var r = e.parent;
                        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
                    }(t) && (t._initted || !Qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Qt(t)) ? 0 : 1, h = t._rDelay, f = 0;
                    if (h && t._repeat && (f = Kt(0, t._tDur, e),
                    s = Lt(f, h),
                    t._yoyo && 1 & s && (u = 1 - u),
                    s !== Lt(t._tTime, h) && (o = 1 - u,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    u !== o || i || t._zTime === Y || !e && t._zTime) {
                        if (!t._initted && jt(t, e, i, r))
                            return;
                        for (a = t._zTime,
                        t._zTime = e || (r ? Y : 0),
                        r || (r = e && !a),
                        t.ratio = u,
                        t._from && (u = 1 - u),
                        t._time = 0,
                        t._tTime = f,
                        n = t._pt; n; )
                            n.r(u, n.d),
                            n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !r && ce(t, "onUpdate"),
                        f && t._repeat && !r && t.parent && ce(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === u && (u && Ft(t, 1),
                        r || (ce(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        t.targets = function() {
            return this._targets
        }
        ,
        t.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            D.prototype.invalidate.call(this)
        }
        ,
        t.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? _e(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ue && !0 !== Ue.vars.overwrite)._first || _e(this),
                this.parent && r !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var i, n, s, a, o, u, h, f = this._targets, l = t ? ie(t) : f, p = this._ptLookup, c = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(f, l))
                return "all" === e && (this._pt = 0),
                _e(this);
            for (i = this._op = this._op || [],
            "all" !== e && (N(e) && (o = {},
            wt(e, function(t) {
                return o[t] = 1
            }),
            e = o),
            e = function(t, e) {
                var r, i, n, s, a = t[0] ? yt(t[0]).harness : 0, o = a && a.aliases;
                if (!o)
                    return e;
                for (i in r = Pt({}, e),
                o)
                    if (i in r)
                        for (n = (s = o[i].split(",")).length; n--; )
                            r[s[n]] = r[i];
                return r
            }(f, e)),
            h = f.length; h--; )
                if (~l.indexOf(f[h]))
                    for (o in n = p[h],
                    "all" === e ? (i[h] = e,
                    a = n,
                    s = {}) : (s = i[h] = i[h] || {},
                    a = e),
                    a)
                        (u = n && n[o]) && ("kill"in u.d && !0 !== u.d.kill(o) || Et(this, u, "_pt"),
                        delete n[o]),
                        "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && c && _e(this),
            this
        }
        ,
        n.to = function(t, e) {
            return new n(t,e,arguments[2])
        }
        ,
        n.from = function(t, e) {
            return $t(1, arguments)
        }
        ,
        n.delayedCall = function(t, e, r, i) {
            return new n(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        n.fromTo = function(t, e, r) {
            return $t(2, arguments)
        }
        ,
        n.set = function(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new n(t,e)
        }
        ,
        n.killTweensOf = function(t, e, r) {
            return B.killTweensOf(t, e, r)
        }
        ,
        n
    }(Le);
    Dt(We.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    wt("staggerTo,staggerFrom,staggerFromTo", function(r) {
        We[r] = function() {
            var t = new Ye
              , e = ee.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
            t[r].apply(t, e)
        }
    });
    var He = function(t, e, r) {
        return t[e] = r
    }
      , Ze = function(t, e, r) {
        return t[e](r)
    }
      , $e = function(t, e, r, i) {
        return t[e](i.fp, r)
    }
      , Je = function(t, e, r) {
        return t.setAttribute(e, r)
    }
      , Ke = function(t, e) {
        return E(t[e]) ? Ze : q(t[e]) && t.setAttribute ? Je : He
    }
      , tr = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , er = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , rr = function(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , ir = function(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , nr = function(t, e, r, i) {
        for (var n, s = this._pt; s; )
            n = s._next,
            s.p === i && s.modifier(t, e, r),
            s = n
    }
      , sr = function(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            i.p === t && !i.op || i.op === t ? Et(this, i, "_pt") : i.dep || (e = 1),
            i = r;
        return !e
    }
      , ar = function(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
      , or = function(t) {
        for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next,
            r = i; r && r.pr > s.pr; )
                r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s : i = s,
            (s._next = r) ? r._prev = s : n = s,
            s = e
        }
        t._pt = i
    }
      , ur = function() {
        function t(t, e, r, i, n, s, a, o, u) {
            this.t = e,
            this.s = i,
            this.c = n,
            this.p = r,
            this.r = s || tr,
            this.d = a || this,
            this.set = o || He,
            this.pr = u || 0,
            (this._next = t) && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set,
            this.set = ar,
            this.m = t,
            this.mt = r,
            this.tween = e
        }
        ,
        t
    }();
    wt(gt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ft[t] = 1
    }),
    it.TweenMax = it.TweenLite = We,
    it.TimelineLite = it.TimelineMax = Ye,
    B = new Ye({
        sortChildren: !1,
        defaults: I,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    U.stringFilter = be;
    var hr = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return function(t) {
                    var e = (t = !t.name && t.default || t).name
                      , r = E(t)
                      , i = e && !r && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , n = {
                        init: ht,
                        render: ir,
                        add: Ne,
                        kill: sr,
                        modifier: nr,
                        rawVars: 0
                    }
                      , s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ke,
                        aliases: {},
                        register: 0
                    };
                    if (Oe(),
                    t !== i) {
                        if (ct[e])
                            return;
                        Dt(i, Dt(zt(t, n), s)),
                        Pt(i.prototype, Pt(n, zt(t, s))),
                        ct[i.prop = e] = i,
                        t.targetTest && (mt.push(i),
                        ft[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    ut(e, i),
                    t.register && t.register(pr, i, ur)
                }(t)
            })
        },
        timeline: function(t) {
            return new Ye(t)
        },
        getTweensOf: function(t, e) {
            return B.getTweensOf(t, e)
        },
        getProperty: function(i, t, e, r) {
            N(i) && (i = ie(i)[0]);
            var n = yt(i || {}).get
              , s = e ? Ct : At;
            return "native" === e && (e = ""),
            i ? t ? s((ct[t] && ct[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return s((ct[t] && ct[t].get || n)(i, t, e, r))
            }
            : i
        },
        quickSetter: function(r, e, i) {
            if (1 < (r = ie(r)).length) {
                var n = r.map(function(t) {
                    return pr.quickSetter(t, e, i)
                })
                  , s = n.length;
                return function(t) {
                    for (var e = s; e--; )
                        n[e](t)
                }
            }
            r = r[0] || {};
            var a = ct[e]
              , o = yt(r)
              , u = o.harness && (o.harness.aliases || {})[e] || e
              , h = a ? function(t) {
                var e = new a;
                f._pt = 0,
                e.init(r, i ? t + i : t, f, 0, [r]),
                e.render(1, e),
                f._pt && ir(1, f)
            }
            : o.set(r, u);
            return a ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function(t) {
            return 0 < B.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = ze(t.ease, I.ease)),
            St(I, t || {})
        },
        config: function(t) {
            return St(U, t || {})
        },
        registerEffect: function(t) {
            var i = t.name
              , n = t.effect
              , e = t.plugins
              , s = t.defaults
              , r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ct[t] && !it[t] && ot(i + " effect requires " + t + " plugin.")
            }),
            _t[i] = function(t, e, r) {
                return n(ie(t), Dt(e || {}, s), r)
            }
            ,
            r && (Ye.prototype[i] = function(t, e, r) {
                return this.add(_t[i](t, V(e) ? e : (r = e) && {}, this), r)
            }
            )
        },
        registerEase: function(t, e) {
            ke[t] = ze(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? ze(t, e) : ke
        },
        getById: function(t) {
            return B.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Ye(t);
            for (n.smoothChildTiming = j(t.smoothChildTiming),
            B.remove(n),
            n._dp = 0,
            n._time = n._tTime = B._time,
            r = B._first; r; )
                i = r._next,
                !e && !r._dur && r instanceof We && r.vars.onComplete === r._targets[0] || qt(n, r, r._start - r._delay),
                r = i;
            return qt(B, n, 0),
            n
        },
        utils: {
            wrap: function t(e, r, i) {
                var n = r - e;
                return H(e) ? he(e, t(0, e.length), r) : Jt(i, function(t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, r, i) {
                var n = r - e
                  , s = 2 * n;
                return H(e) ? he(e, t(0, e.length - 1), r) : Jt(i, function(t) {
                    return e + (n < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: se,
            random: ue,
            snap: oe,
            normalize: function(t, e, r) {
                return le(t, e, 0, 1, r)
            },
            getUnit: te,
            clamp: function(e, r, t) {
                return Jt(t, function(t) {
                    return Kt(e, r, t)
                })
            },
            splitColor: ve,
            toArray: ie,
            selector: function(r) {
                return r = ie(r)[0] || ot("Invalid scope") || {},
                function(t) {
                    var e = r.current || r.nativeElement || r;
                    return ie(t, e.querySelectorAll ? e : e === r ? ot("Invalid scope") || a.createElement("div") : r)
                }
            },
            mapRange: le,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || te(t))
                }
            },
            interpolate: function t(e, r, i, n) {
                var s = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!s) {
                    var a, o, u, h, f, l = N(e), p = {};
                    if (!0 === i && (n = 1) && (i = null),
                    l)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (H(e) && !H(r)) {
                        for (u = [],
                        h = e.length,
                        f = h - 2,
                        o = 1; o < h; o++)
                            u.push(t(e[o - 1], e[o]));
                        h--,
                        s = function(t) {
                            t *= h;
                            var e = Math.min(f, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        i = r
                    } else
                        n || (e = Pt(H(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r)
                            Ne.call(p, e, a, "get", r[a]);
                        s = function(t) {
                            return ir(t, p) || (l ? e.p : e)
                        }
                    }
                }
                return Jt(i, s)
            },
            shuffle: ne
        },
        install: st,
        effects: _t,
        ticker: Me,
        updateRoot: Ye.updateRoot,
        plugins: ct,
        globalTimeline: B,
        core: {
            PropTween: ur,
            globals: ut,
            Tween: We,
            Timeline: Ye,
            Animation: Le,
            getCache: yt,
            _removeLinkedListItem: Et,
            suppressOverwrites: function(t) {
                return F = t
            }
        }
    };
    wt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return hr[t] = We[t]
    }),
    Me.add(Ye.updateRoot),
    f = hr.to({}, {
        duration: 0
    });
    var fr = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
      , lr = function(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (N(i) && (e = {},
                    wt(i, function(t) {
                        return e[t] = 1
                    }),
                    i = e),
                    n) {
                        for (r in e = {},
                        i)
                            e[r] = n(i[r]);
                        i = e
                    }
                    !function(t, e) {
                        var r, i, n, s = t._targets;
                        for (r in e)
                            for (i = s.length; i--; )
                                (n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = fr(n, r)),
                                n && n.modifier && n.modifier(e[r], t, s[i], r))
                    }(t, i)
                }
            }
        }
    }
      , pr = hr.registerPlugin({
        name: "attr",
        init: function(t, e, r, i, n) {
            var s, a;
            for (s in e)
                (a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s),
                this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, lr("roundProps", ae), lr("modifiers"), lr("snap", oe)) || hr;
    We.version = Ye.version = pr.version = "3.9.1",
    e = 1,
    Q() && Oe();
    var cr, _r, dr, mr, gr, vr, yr, Tr = ke.Power0, wr = ke.Power1, xr = ke.Power2, br = ke.Power3, Mr = ke.Power4, Or = ke.Linear, kr = ke.Quad, Ar = ke.Cubic, Cr = ke.Quart, Dr = ke.Quint, Pr = ke.Strong, Sr = ke.Elastic, zr = ke.Back, Rr = ke.SteppedEase, Er = ke.Bounce, Fr = ke.Sine, Br = ke.Expo, Ir = ke.Circ, Lr = {}, Yr = 180 / Math.PI, Ur = Math.PI / 180, Nr = Math.atan2, Xr = /([A-Z])/g, qr = /(?:left|right|width|margin|padding|x)/i, Vr = /[\s,\(]\S/, jr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Qr = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Gr = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Wr = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, Hr = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, Zr = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, $r = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, Jr = function(t, e, r) {
        return t.style[e] = r
    }, Kr = function(t, e, r) {
        return t.style.setProperty(e, r)
    }, ti = function(t, e, r) {
        return t._gsap[e] = r
    }, ei = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, ri = function(t, e, r, i, n) {
        var s = t._gsap;
        s.scaleX = s.scaleY = r,
        s.renderTransform(n, s)
    }, ii = function(t, e, r, i, n) {
        var s = t._gsap;
        s[e] = r,
        s.renderTransform(n, s)
    }, ni = "transform", si = ni + "Origin", ai = function(t, e) {
        var r = _r.createElementNS ? _r.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : _r.createElement(t);
        return r.style ? r : _r.createElement(t)
    }, oi = function t(e, r, i) {
        var n = getComputedStyle(e);
        return n[r] || n.getPropertyValue(r.replace(Xr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, hi(r) || r, 1) || ""
    }, ui = "O,Moz,ms,Ms,Webkit".split(","), hi = function(t, e, r) {
        var i = (e || gr).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(ui[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? ui[n] : "") + t
    }, fi = function() {
        "undefined" != typeof window && window.document && (cr = window,
        _r = cr.document,
        dr = _r.documentElement,
        gr = ai("div") || {
            style: {}
        },
        ai("div"),
        ni = hi(ni),
        si = ni + "Origin",
        gr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        yr = !!hi("perspective"),
        mr = 1)
    }, li = function t(e) {
        var r, i = ai("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, s = this.nextSibling, a = this.style.cssText;
        if (dr.appendChild(i),
        i.appendChild(this),
        this.style.display = "block",
        e)
            try {
                r = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = t
            } catch (t) {}
        else
            this._gsapBBox && (r = this._gsapBBox());
        return n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        dr.removeChild(i),
        this.style.cssText = a,
        r
    }, pi = function(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }, ci = function(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = li.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === li || (r = li.call(e, !0)),
        !r || r.width || r.x || r.y ? r : {
            x: +pi(e, ["x", "cx", "x1"]) || 0,
            y: +pi(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, _i = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ci(t))
    }, di = function(t, e) {
        if (e) {
            var r = t.style;
            e in Lr && e !== si && (e = ni),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(Xr, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }, mi = function(t, e, r, i, n, s) {
        var a = new ur(t._pt,e,r,0,1,s ? $r : Zr);
        return (t._pt = a).b = i,
        a.e = n,
        t._props.push(r),
        a
    }, gi = {
        deg: 1,
        rad: 1,
        turn: 1
    }, vi = function t(e, r, i, n) {
        var s, a, o, u, h = parseFloat(i) || 0, f = (i + "").trim().substr((h + "").length) || "px", l = gr.style, p = qr.test(r), c = "svg" === e.tagName.toLowerCase(), _ = (c ? "client" : "offset") + (p ? "Width" : "Height"), d = "px" === n, m = "%" === n;
        return n === f || !h || gi[n] || gi[f] ? h : ("px" !== f && !d && (h = t(e, r, i, "px")),
        u = e.getCTM && _i(e),
        !m && "%" !== f || !Lr[r] && !~r.indexOf("adius") ? (l[p ? "width" : "height"] = 100 + (d ? f : n),
        a = ~r.indexOf("adius") || "em" === n && e.appendChild && !c ? e : e.parentNode,
        u && (a = (e.ownerSVGElement || {}).parentNode),
        a && a !== _r && a.appendChild || (a = _r.body),
        (o = a._gsap) && m && o.width && p && o.time === Me.time ? xt(h / o.width * 100) : ((m || "%" === f) && (l.position = oi(e, "position")),
        a === e && (l.position = "static"),
        a.appendChild(gr),
        s = gr[_],
        a.removeChild(gr),
        l.position = "absolute",
        p && m && ((o = yt(a)).time = Me.time,
        o.width = a[_]),
        xt(d ? s * h / 100 : s && h ? 100 / s * h : 0))) : (s = u ? e.getBBox()[p ? "width" : "height"] : e[_],
        xt(m ? h / s * 100 : h / 100 * s)))
    }, yi = function(t, e, r, i) {
        var n;
        return mr || fi(),
        e in jr && "transform" !== e && ~(e = jr[e]).indexOf(",") && (e = e.split(",")[0]),
        Lr[e] && "transform" !== e ? (n = Pi(t, i),
        n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Si(oi(t, si)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = bi[e] && bi[e](t, e, r) || oi(t, e) || Tt(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? vi(t, e, n, r) + r : n
    }, Ti = function(t, e, r, i) {
        if (!r || "none" === r) {
            var n = hi(e, t, 1)
              , s = n && oi(t, n, 1);
            s && s !== r ? (e = n,
            r = s) : "borderColor" === e && (r = oi(t, "borderTopColor"))
        }
        var a, o, u, h, f, l, p, c, _, d, m, g, v = new ur(this._pt,t.style,e,0,1,rr), y = 0, T = 0;
        if (v.b = r,
        v.e = i,
        r += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = oi(t, e) || i,
        t.style[e] = r),
        be(a = [r, i]),
        i = a[1],
        u = (r = a[0]).match(J) || [],
        (i.match(J) || []).length) {
            for (; o = J.exec(i); )
                p = o[0],
                _ = i.substring(y, o.index),
                f ? f = (f + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (f = 1),
                p !== (l = u[T++] || "") && (h = parseFloat(l) || 0,
                m = l.substr((h + "").length),
                (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                c = parseFloat(p),
                d = p.substr((c + "").length),
                y = J.lastIndex - d.length,
                d || (d = d || U.units[e] || m,
                y === i.length && (i += d,
                v.e += d)),
                m !== d && (h = vi(t, e, l, d) || 0),
                v._pt = {
                    _next: v._pt,
                    p: _ || 1 === T ? _ : ",",
                    s: h,
                    c: g ? g * c : c - h,
                    m: f && f < 4 || "zIndex" === e ? Math.round : 0
                });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else
            v.r = "display" === e && "none" === i ? $r : Zr;
        return tt.test(i) && (v.e = 0),
        this._pt = v
    }, wi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, xi = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t, a = s.style, o = e.u, u = s._gsap;
            if ("all" === o || !0 === o)
                a.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    Lr[r] && (i = 1,
                    r = "transformOrigin" === r ? si : ni),
                    di(s, r);
            i && (di(s, ni),
            u && (u.svg && s.removeAttribute("transform"),
            Pi(s, 1),
            u.uncache = 1))
        }
    }, bi = {
        clearProps: function(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var s = t._pt = new ur(t._pt,e,r,0,0,xi);
                return s.u = i,
                s.pr = -10,
                s.tween = n,
                t._props.push(r),
                1
            }
        }
    }, Mi = [1, 0, 0, 1, 0, 0], Oi = {}, ki = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, Ai = function(t) {
        var e = oi(t, ni);
        return ki(e) ? Mi : e.substr(7).match($).map(xt)
    }, Ci = function(t, e) {
        var r, i, n, s, a = t._gsap || yt(t), o = t.style, u = Ai(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Mi : u : (u !== Mi || t.offsetParent || t === dr || a.svg || (n = o.display,
        o.display = "block",
        (r = t.parentNode) && t.offsetParent || (s = 1,
        i = t.nextSibling,
        dr.appendChild(t)),
        u = Ai(t),
        n ? o.display = n : di(t, "display"),
        s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : dr.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }, Di = function(t, e, r, i, n, s) {
        var a, o, u, h = t._gsap, f = n || Ci(t, !0), l = h.xOrigin || 0, p = h.yOrigin || 0, c = h.xOffset || 0, _ = h.yOffset || 0, d = f[0], m = f[1], g = f[2], v = f[3], y = f[4], T = f[5], w = e.split(" "), x = parseFloat(w[0]) || 0, b = parseFloat(w[1]) || 0;
        r ? f !== Mi && (o = d * v - m * g) && (u = x * (-m / o) + b * (d / o) - (d * T - m * y) / o,
        x = x * (v / o) + b * (-g / o) + (g * T - v * y) / o,
        b = u) : (x = (a = ci(t)).x + (~w[0].indexOf("%") ? x / 100 * a.width : x),
        b = a.y + (~(w[1] || w[0]).indexOf("%") ? b / 100 * a.height : b)),
        i || !1 !== i && h.smooth ? (y = x - l,
        T = b - p,
        h.xOffset = c + (y * d + T * g) - y,
        h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0,
        h.xOrigin = x,
        h.yOrigin = b,
        h.smooth = !!i,
        h.origin = e,
        h.originIsAbsolute = !!r,
        t.style[si] = "0px 0px",
        s && (mi(s, h, "xOrigin", l, x),
        mi(s, h, "yOrigin", p, b),
        mi(s, h, "xOffset", c, h.xOffset),
        mi(s, h, "yOffset", _, h.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + b)
    }, Pi = function(t, e) {
        var r = t._gsap || new Ie(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, s, a, o, u, h, f, l, p, c, _, d, m, g, v, y, T, w, x, b, M, O, k, A, C, D, P, S, z, R, E, F = t.style, B = r.scaleX < 0, I = "deg", L = oi(t, si) || "0";
        return i = n = s = u = h = f = l = p = c = 0,
        a = o = 1,
        r.svg = !(!t.getCTM || !_i(t)),
        m = Ci(t, r.svg),
        r.svg && (k = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"),
        Di(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
        _ = r.xOrigin || 0,
        d = r.yOrigin || 0,
        m !== Mi && (T = m[0],
        w = m[1],
        x = m[2],
        b = m[3],
        i = M = m[4],
        n = O = m[5],
        6 === m.length ? (a = Math.sqrt(T * T + w * w),
        o = Math.sqrt(b * b + x * x),
        u = T || w ? Nr(w, T) * Yr : 0,
        (l = x || b ? Nr(x, b) * Yr + u : 0) && (o *= Math.abs(Math.cos(l * Ur))),
        r.svg && (i -= _ - (_ * T + d * x),
        n -= d - (_ * w + d * b))) : (E = m[6],
        z = m[7],
        D = m[8],
        P = m[9],
        S = m[10],
        R = m[11],
        i = m[12],
        n = m[13],
        s = m[14],
        h = (g = Nr(E, S)) * Yr,
        g && (k = M * (v = Math.cos(-g)) + D * (y = Math.sin(-g)),
        A = O * v + P * y,
        C = E * v + S * y,
        D = M * -y + D * v,
        P = O * -y + P * v,
        S = E * -y + S * v,
        R = z * -y + R * v,
        M = k,
        O = A,
        E = C),
        f = (g = Nr(-x, S)) * Yr,
        g && (v = Math.cos(-g),
        R = b * (y = Math.sin(-g)) + R * v,
        T = k = T * v - D * y,
        w = A = w * v - P * y,
        x = C = x * v - S * y),
        u = (g = Nr(w, T)) * Yr,
        g && (k = T * (v = Math.cos(g)) + w * (y = Math.sin(g)),
        A = M * v + O * y,
        w = w * v - T * y,
        O = O * v - M * y,
        T = k,
        M = A),
        h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
        f = 180 - f),
        a = xt(Math.sqrt(T * T + w * w + x * x)),
        o = xt(Math.sqrt(O * O + E * E)),
        g = Nr(M, O),
        l = 2e-4 < Math.abs(g) ? g * Yr : 0,
        c = R ? 1 / (R < 0 ? -R : R) : 0),
        r.svg && (k = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !ki(oi(t, ni)),
        k && t.setAttribute("transform", k))),
        90 < Math.abs(l) && Math.abs(l) < 270 && (B ? (a *= -1,
        l += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (o *= -1,
        l += l <= 0 ? 180 : -180)),
        r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = s + "px",
        r.scaleX = xt(a),
        r.scaleY = xt(o),
        r.rotation = xt(u) + I,
        r.rotationX = xt(h) + I,
        r.rotationY = xt(f) + I,
        r.skewX = l + I,
        r.skewY = p + I,
        r.transformPerspective = c + "px",
        (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (F[si] = Si(L)),
        r.xOffset = r.yOffset = 0,
        r.force3D = U.force3D,
        r.renderTransform = r.svg ? Li : yr ? Ii : Ri,
        r.uncache = 0,
        r
    }, Si = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, zi = function(t, e, r) {
        var i = te(e);
        return xt(parseFloat(e) + parseFloat(vi(t, "x", r + "px", i))) + i
    }, Ri = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Ii(t, e)
    }, Ei = "0deg", Fi = "0px", Bi = ") ", Ii = function(t, e) {
        var r = e || this
          , i = r.xPercent
          , n = r.yPercent
          , s = r.x
          , a = r.y
          , o = r.z
          , u = r.rotation
          , h = r.rotationY
          , f = r.rotationX
          , l = r.skewX
          , p = r.skewY
          , c = r.scaleX
          , _ = r.scaleY
          , d = r.transformPerspective
          , m = r.force3D
          , g = r.target
          , v = r.zOrigin
          , y = ""
          , T = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (f !== Ei || h !== Ei)) {
            var w, x = parseFloat(h) * Ur, b = Math.sin(x), M = Math.cos(x);
            x = parseFloat(f) * Ur,
            w = Math.cos(x),
            s = zi(g, s, b * w * -v),
            a = zi(g, a, -Math.sin(x) * -v),
            o = zi(g, o, M * w * -v + v)
        }
        d !== Fi && (y += "perspective(" + d + Bi),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (T || s !== Fi || a !== Fi || o !== Fi) && (y += o !== Fi || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Bi),
        u !== Ei && (y += "rotate(" + u + Bi),
        h !== Ei && (y += "rotateY(" + h + Bi),
        f !== Ei && (y += "rotateX(" + f + Bi),
        l === Ei && p === Ei || (y += "skew(" + l + ", " + p + Bi),
        1 === c && 1 === _ || (y += "scale(" + c + ", " + _ + Bi),
        g.style[ni] = y || "translate(0, 0)"
    }, Li = function(t, e) {
        var r, i, n, s, a, o = e || this, u = o.xPercent, h = o.yPercent, f = o.x, l = o.y, p = o.rotation, c = o.skewX, _ = o.skewY, d = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset, w = o.yOffset, x = o.forceCSS, b = parseFloat(f), M = parseFloat(l);
        p = parseFloat(p),
        c = parseFloat(c),
        (_ = parseFloat(_)) && (c += _ = parseFloat(_),
        p += _),
        p || c ? (p *= Ur,
        c *= Ur,
        r = Math.cos(p) * d,
        i = Math.sin(p) * d,
        n = Math.sin(p - c) * -m,
        s = Math.cos(p - c) * m,
        c && (_ *= Ur,
        a = Math.tan(c - _),
        n *= a = Math.sqrt(1 + a * a),
        s *= a,
        _ && (a = Math.tan(_),
        r *= a = Math.sqrt(1 + a * a),
        i *= a)),
        r = xt(r),
        i = xt(i),
        n = xt(n),
        s = xt(s)) : (r = d,
        s = m,
        i = n = 0),
        (b && !~(f + "").indexOf("px") || M && !~(l + "").indexOf("px")) && (b = vi(g, "x", f, "px"),
        M = vi(g, "y", l, "px")),
        (v || y || T || w) && (b = xt(b + v - (v * r + y * n) + T),
        M = xt(M + y - (v * i + y * s) + w)),
        (u || h) && (a = g.getBBox(),
        b = xt(b + u / 100 * a.width),
        M = xt(M + h / 100 * a.height)),
        a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + M + ")",
        g.setAttribute("transform", a),
        x && (g.style[ni] = a)
    }, Yi = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, Ui = function(t, e, r) {
        var i, n, s, a, o, u, h, f = Yi({}, r._gsap), l = r.style;
        for (n in f.svg ? (s = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        l[ni] = e,
        i = Pi(r, 1),
        di(r, ni),
        r.setAttribute("transform", s)) : (s = getComputedStyle(r)[ni],
        l[ni] = e,
        i = Pi(r, 1),
        l[ni] = s),
        Lr)
            (s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = te(s) !== (h = te(a)) ? vi(r, n, s, h) : parseFloat(s),
            u = parseFloat(a),
            t._pt = new ur(t._pt,i,n,o,u - o,Qr),
            t._pt.u = h || 0,
            t._props.push(n));
        Yi(i, f)
    };
    wt("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
          , i = "Bottom"
          , n = "Left"
          , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        bi[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var s, a;
            if (arguments.length < 4)
                return s = o.map(function(t) {
                    return yi(e, t, r)
                }),
                5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "),
            a = {},
            o.forEach(function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }),
            e.init(t, a, n)
        }
    });
    var Ni, Xi, qi, Vi = {
        name: "css",
        register: fi,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
            var s, a, o, u, h, f, l, p, c, _, d, m, g, v, y, T, w, x, b, M, O, k, A, C, D, P, S, z, R, E, F, B, I = this._props, L = t.style, Y = r.vars.startAt;
            for (l in mr || fi(),
            e)
                if ("autoRound" !== l && (a = e[l],
                !ct[l] || !Xe(l, e, r, i, t, n)))
                    if (h = typeof a,
                    f = bi[l],
                    "function" === h && (h = typeof (a = a.call(r, i, t, n))),
                    "string" === h && ~a.indexOf("random(") && (a = fe(a)),
                    f)
                        f(this, t, l, a, r) && (y = 1);
                    else if ("--" === l.substr(0, 2))
                        s = (getComputedStyle(t).getPropertyValue(l) + "").trim(),
                        a += "",
                        we.lastIndex = 0,
                        we.test(s) || (p = te(s),
                        c = te(a)),
                        c ? p !== c && (s = vi(t, l, s, c) + c) : p && (a += p),
                        this.add(L, "setProperty", s, a, i, n, 0, 0, l),
                        I.push(l);
                    else if ("undefined" !== h) {
                        if (Y && l in Y ? (s = "function" == typeof Y[l] ? Y[l].call(r, i, t, n) : Y[l],
                        N(s) && ~s.indexOf("random(") && (s = fe(s)),
                        te(s + "") || (s += U.units[l] || te(yi(t, l)) || ""),
                        "=" === (s + "").charAt(1) && (s = yi(t, l))) : s = yi(t, l),
                        u = parseFloat(s),
                        (_ = "string" === h && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                        o = parseFloat(a),
                        l in jr && ("autoAlpha" === l && (1 === u && "hidden" === yi(t, "visibility") && o && (u = 0),
                        mi(this, L, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== l && "transform" !== l && ~(l = jr[l]).indexOf(",") && (l = l.split(",")[0])),
                        d = l in Lr)
                            if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Pi(t, e.parseTransform),
                            v = !1 !== e.smoothOrigin && g.smooth,
                            (m = this._pt = new ur(this._pt,L,ni,0,1,g.renderTransform,g,0,-1)).dep = 1),
                            "scale" === l)
                                this._pt = new ur(this._pt,g,"scaleY",g.scaleY,(_ ? _ * o : o - g.scaleY) || 0),
                                I.push("scaleY", l),
                                l += "X";
                            else {
                                if ("transformOrigin" === l) {
                                    B = F = E = void 0,
                                    E = (R = a).split(" "),
                                    F = E[0],
                                    B = E[1] || "50%",
                                    "top" !== F && "bottom" !== F && "left" !== B && "right" !== B || (R = F,
                                    F = B,
                                    B = R),
                                    E[0] = wi[F] || F,
                                    E[1] = wi[B] || B,
                                    a = E.join(" "),
                                    g.svg ? Di(t, a, 0, v, 0, this) : ((c = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && mi(this, g, "zOrigin", g.zOrigin, c),
                                    mi(this, L, l, Si(s), Si(a)));
                                    continue
                                }
                                if ("svgOrigin" === l) {
                                    Di(t, a, 1, v, 0, this);
                                    continue
                                }
                                if (l in Oi) {
                                    T = this,
                                    w = g,
                                    x = l,
                                    b = u,
                                    O = _,
                                    S = A = k = void 0,
                                    C = 360,
                                    D = N(M = a),
                                    P = parseFloat(M) * (D && ~M.indexOf("rad") ? Yr : 1),
                                    z = b + (S = O ? P * O : P - b) + "deg",
                                    D && ("short" === (k = M.split("_")[1]) && (S %= C) != S % 180 && (S += S < 0 ? C : -C),
                                    "cw" === k && S < 0 ? S = (S + 36e9) % C - ~~(S / C) * C : "ccw" === k && 0 < S && (S = (S - 36e9) % C - ~~(S / C) * C)),
                                    T._pt = A = new ur(T._pt,w,x,b,S,Gr),
                                    A.e = z,
                                    A.u = "deg",
                                    T._props.push(x);
                                    continue
                                }
                                if ("smoothOrigin" === l) {
                                    mi(this, g, "smooth", g.smooth, a);
                                    continue
                                }
                                if ("force3D" === l) {
                                    g[l] = a;
                                    continue
                                }
                                if ("transform" === l) {
                                    Ui(this, a, t);
                                    continue
                                }
                            }
                        else
                            l in L || (l = hi(l) || l);
                        if (d || (o || 0 === o) && (u || 0 === u) && !Vr.test(a) && l in L)
                            o || (o = 0),
                            (p = (s + "").substr((u + "").length)) !== (c = te(a) || (l in U.units ? U.units[l] : p)) && (u = vi(t, l, s, c)),
                            this._pt = new ur(this._pt,d ? g : L,l,u,_ ? _ * o : o - u,d || "px" !== c && "zIndex" !== l || !1 === e.autoRound ? Qr : Hr),
                            this._pt.u = c || 0,
                            p !== c && "%" !== c && (this._pt.b = s,
                            this._pt.r = Wr);
                        else if (l in L)
                            Ti.call(this, t, l, s, a);
                        else {
                            if (!(l in t)) {
                                at(l, a);
                                continue
                            }
                            this.add(t, l, s || t[l], a, i, n)
                        }
                        I.push(l)
                    }
            y && or(this)
        },
        get: yi,
        aliases: jr,
        getSetter: function(t, e, r) {
            var i = jr[e];
            return i && i.indexOf(",") < 0 && (e = i),
            e in Lr && e !== si && (t._gsap.x || yi(t, "x")) ? r && vr === r ? "scale" === e ? ei : ti : (vr = r || {}) && ("scale" === e ? ri : ii) : t.style && !q(t.style[e]) ? Jr : ~e.indexOf("-") ? Kr : Ke(t, e)
        },
        core: {
            _removeProperty: di,
            _getMatrix: Ci
        }
    };
    pr.utils.checkPrefix = hi,
    qi = wt((Ni = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Xi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Lr[t] = 1
    }),
    wt(Xi, function(t) {
        U.units[t] = "deg",
        Oi[t] = 1
    }),
    jr[qi[13]] = Ni + "," + Xi,
    wt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        jr[e[1]] = qi[e[0]]
    }),
    wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        U.units[t] = "px"
    }),
    pr.registerPlugin(Vi);
    var ji = pr.registerPlugin(Vi) || pr
      , Qi = ji.core.Tween;
    t.Back = zr,
    t.Bounce = Er,
    t.CSSPlugin = Vi,
    t.Circ = Ir,
    t.Cubic = Ar,
    t.Elastic = Sr,
    t.Expo = Br,
    t.Linear = Or,
    t.Power0 = Tr,
    t.Power1 = wr,
    t.Power2 = xr,
    t.Power3 = br,
    t.Power4 = Mr,
    t.Quad = kr,
    t.Quart = Cr,
    t.Quint = Dr,
    t.Sine = Fr,
    t.SteppedEase = Rr,
    t.Strong = Pr,
    t.TimelineLite = Ye,
    t.TimelineMax = Ye,
    t.TweenLite = We,
    t.TweenMax = Qi,
    t.default = ji,
    t.gsap = ji,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete window.default
});
function inStanceof(t, e) {
    return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? e[Symbol.hasInstance](t) : t instanceof e
}
function nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}
function nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}
function slicedToArray(t, e) {
    return arrayWithHoles(t) || iterableToArrayLimit(t, e) || nonIterableRest()
}
function iterableToArrayLimit(t, e) {
    var n = []
      , r = !0
      , o = !1
      , i = void 0;
    try {
        for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
        !e || n.length !== e); r = !0)
            ;
    } catch (t) {
        o = !0,
        i = t
    } finally {
        try {
            r || null == c.return || c.return()
        } finally {
            if (o)
                throw i
        }
    }
    return n
}
function iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
        return Array.from(t)
}
function arrayWithHoles(t) {
    if (Array.isArray(t))
        return t
}
function arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
        return n
    }
}
function defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r)
    }
}
function createClass(t, e, n) {
    return e && defineProperties(t.prototype, e),
    n && defineProperties(t, n),
    t
}
function classCallCheck(t, e) {
    if (!inStanceof(t, e))
        throw new TypeError("Cannot call a class as a function")
}
function toConsumableArray(t) {
    return arrayWithoutHoles(t) || iterableToArray(t) || nonIterableSpread()
}
var MathUtils = {
    lineEq: function(t, e, n, r, o) {
        var i = (t - e) / (n - r);
        return i * o + (e - i * r)
    },
    map: function(t, e, n, r, o) {
        return (t - e) * (o - r) / (n - e) + r
    },
    lerp: function(t, e, n) {
        return (1 - n) * t + n * e
    },
    getRandomFloat: function(t, e) {
        return (Math.random() * (e - t) + t).toFixed(2)
    },
    distance: function(t, e, n, r) {
        var o = t - n
          , i = e - r;
        return Math.hypot(o, i)
    }
}
  , shuffleArray = function(t) {
    return t.sort(function() {
        return Math.random() - .5
    })
};
function RanDom(t, e) {
    return Math.max(Math.random() * (e - t) + t)
}
var debounce = function(r, o, i) {
    var a;
    return function() {
        var t = this
          , e = arguments
          , n = i && !a;
        clearTimeout(a),
        a = setTimeout(function() {
            a = null,
            i || r.apply(t, e)
        }, o),
        n && r.apply(t, e)
    }
}
  , calcWinsize = function() {
    return winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    }
}
  , winsize = calcWinsize();
window.addEventListener("resize", function() {
    return winsize = calcWinsize()
});
var getMousePos = function(t) {
    var e = 0
      , n = 0
      , r = window.pageYOffset;
    return t || (t = window.event),
    t.pageX || t.pageY ? (e = t.pageX,
    n = t.pageY - r) : (t.clientX || t.clientY) && (e = t.clientX + document.scrollLeft + document.documentElement.scrollLeft,
    n = t.clientY + document.scrollTop + document.documentElement.scrollTop - r),
    {
        x: e,
        y: n
    }
}
  , mousePos = {
    x: 0,
    y: 0
};
!function(t, r) {
    "function" != typeof t.CustomEvent && (t.CustomEvent = function(t, e) {
        e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = r.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
        n
    }
    ,
    t.CustomEvent.prototype = t.Event.prototype),
    r.addEventListener("touchstart", n, !1),
    r.addEventListener("touchmove", o, !1),
    r.addEventListener("touchend", e, !1),
    r.addEventListener("mousedown", n, !1),
    r.addEventListener("mousemove", o, !1),
    r.addEventListener("mouseup", e, !1);
    var i = null
      , a = null
      , c = null
      , u = null
      , l = null
      , s = null;
    function e(t) {
        if (s === t.target) {
            var e = parseInt(s.getAttribute("data-swipe-threshold") || "20", 10)
              , n = parseInt(s.getAttribute("data-swipe-timeout") || "500", 10)
              , r = Date.now() - l
              , o = "";
            Math.abs(c) > Math.abs(u) ? Math.abs(c) > e && r < n && (o = 0 < c ? "swiped-left" : "swiped-right") : Math.abs(u) > e && r < n && (o = 0 < u ? "swiped-up" : "swiped-down"),
            "" !== o && s.dispatchEvent(new CustomEvent(o,{
                bubbles: !0,
                cancelable: !0
            })),
            l = a = i = null
        }
    }
    function n(t) {
        "true" !== t.target.getAttribute("data-swipe-ignore") && (s = t.target,
        l = Date.now(),
        i = t.touches ? t.touches[0].clientX : t.clientX,
        a = t.touches ? t.touches[0].clientY : t.clientY,
        u = c = 0)
    }
    function o(t) {
        if (i && a) {
            var e = t.touches ? t.touches[0].clientX : t.clientX
              , n = t.touches ? t.touches[0].clientY : t.clientY;
            c = i - e,
            u = a - n
        }
    }
}(window, document),
function(t) {
    "undefined" == typeof module ? this.charming = t : module.exports = t
}(function(t, e) {
    "use strict";
    var a = (e = e || {}).tagName || "span"
      , c = null != e.classPrefix ? e.classPrefix : "box char"
      , u = 1;
    return function t(e) {
        for (var n = [].slice.call(e.childNodes), r = n.length, o = -1; ++o < r; )
            t(n[o]);
        e.nodeType === Node.TEXT_NODE && function(t) {
            for (var e = t.parentNode, n = t.nodeValue, r = n.length, o = -1; ++o < r; ) {
                var i = document.createElement(a);
                c && (i.className = c + u,
                u++),
                i.appendChild(document.createTextNode(n[o])),
                e.insertBefore(i, t)
            }
            e.removeChild(t)
        }(e)
    }(t),
    t
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Splitting = e()
}(this, function() {
    "use strict";
    var i = document
      , s = i.createTextNode.bind(i);
    function f(t, e, n) {
        t.style.setProperty(e, n)
    }
    function d(t, e) {
        return t.appendChild(e)
    }
    function p(t, e, n, r) {
        var o = i.createElement("span");
        return e && (o.className = e),
        n && (!r && o.setAttribute("data-" + e, n),
        o.textContent = n),
        t && d(t, o) || o
    }
    function v(t, e) {
        return t.getAttribute("data-" + e)
    }
    function h(t, e) {
        return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (e || i).querySelectorAll(t)) : []
    }
    function a(t) {
        for (var e = []; t--; )
            e[t] = [];
        return e
    }
    function m(t, e) {
        t && t.some(e)
    }
    function c(e) {
        return function(t) {
            return e[t]
        }
    }
    var u = {};
    function t(t, e, n, r) {
        return {
            by: t,
            depends: e,
            key: n,
            split: r
        }
    }
    function n(t) {
        return function e(n, t, r) {
            var o = r.indexOf(n);
            if (-1 == o)
                r.unshift(n),
                m(u[n].depends, function(t) {
                    e(t, n, r)
                });
            else {
                var i = r.indexOf(t);
                r.splice(o, 1),
                r.splice(i, 0, n)
            }
            return r
        }(t, 0, []).map(c(u))
    }
    function e(t) {
        u[t.by] = t
    }
    function g(t, r, o, i, a) {
        t.normalize();
        var c = []
          , u = document.createDocumentFragment();
        i && c.push(t.previousSibling);
        var l = [];
        return h(t.childNodes).some(function(t) {
            if (!t.tagName || t.hasChildNodes()) {
                if (t.childNodes && t.childNodes.length)
                    return l.push(t),
                    void c.push.apply(c, g(t, r, o, i, a));
                var e = t.wholeText || ""
                  , n = e.trim();
                n.length && (" " === e[0] && l.push(s(" ")),
                m(n.split(o), function(t, e) {
                    e && a && l.push(p(u, "whitespace", " ", a));
                    var n = p(u, r, t);
                    c.push(n),
                    l.push(n)
                }),
                " " === e[e.length - 1] && l.push(s(" ")))
            } else
                l.push(t)
        }),
        m(l, function(t) {
            d(u, t)
        }),
        t.innerHTML = "",
        d(t, u),
        c
    }
    var o = "words"
      , r = t(o, 0, "word", function(t) {
        return g(t, "word", /\s+/, 0, 1)
    })
      , b = "chars"
      , l = t(b, [o], "char", function(t, n, e) {
        var r = [];
        return m(e[o], function(t, e) {
            r.push.apply(r, g(t, "char", "", n.whitespace && e))
        }),
        r
    });
    function _(e) {
        var d = (e = e || {}).key;
        return h(e.target || "[data-splitting]").map(function(u) {
            var l = u["ðŸŒ"];
            if (!e.force && l)
                return l;
            l = u["ðŸŒ"] = {
                el: u
            };
            var t = n(e.by || v(u, "splitting") || b)
              , s = function(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }({}, e);
            return m(t, function(t) {
                if (t.split) {
                    var e = t.by
                      , n = (d ? "-" + d : "") + t.key
                      , r = t.split(u, s, l);
                    n && (o = u,
                    c = (a = "--" + n) + "-index",
                    m(i = r, function(t, e) {
                        Array.isArray(t) ? m(t, function(t) {
                            f(t, c, e)
                        }) : f(t, c, e)
                    }),
                    f(o, a + "-total", i.length)),
                    l[e] = r,
                    u.classList.add(e)
                }
                var o, i, a, c
            }),
            u.classList.add("splitting"),
            l
        })
    }
    function y(t, e, n) {
        var r = h(e.matching || t.children, t)
          , o = {};
        return m(r, function(t) {
            var e = Math.round(t[n]);
            (o[e] || (o[e] = [])).push(t)
        }),
        Object.keys(o).map(Number).sort(w).map(c(o))
    }
    function w(t, e) {
        return t - e
    }
    _.html = function(t) {
        var e = (t = t || {}).target = p();
        return e.innerHTML = t.content,
        _(t),
        e.outerHTML
    }
    ,
    _.add = e;
    var E = t("lines", [o], "line", function(t, e, n) {
        return y(t, {
            matching: n[o]
        }, "offsetTop")
    })
      , A = t("items", 0, "item", function(t, e) {
        return h(e.matching || t.children, t)
    })
      , I = t("rows", 0, "row", function(t, e) {
        return y(t, e, "offsetTop")
    })
      , x = t("cols", 0, "col", function(t, e) {
        return y(t, e, "offsetLeft")
    })
      , L = t("grid", ["rows", "cols"])
      , C = "layout"
      , T = t(C, 0, 0, function(t, e) {
        var n = e.rows = +(e.rows || v(t, "rows") || 1)
          , r = e.columns = +(e.columns || v(t, "columns") || 1);
        if (e.image = e.image || v(t, "image") || t.currentSrc || t.src,
        e.image) {
            var o = h("img", t)[0];
            e.image = o && (o.currentSrc || o.src)
        }
        e.image && f(t, "background-image", "url(" + e.image + ")");
        for (var i = n * r, a = [], c = p(0, "cell-grid"); i--; ) {
            var u = p(c, "cell");
            p(u, "cell-inner"),
            a.push(u)
        }
        return d(t, c),
        a
    })
      , N = t("cellRows", [C], "row", function(t, e, n) {
        var r = e.rows
          , o = a(r);
        return m(n[C], function(t, e, n) {
            o[Math.floor(e / (n.length / r))].push(t)
        }),
        o
    })
      , k = t("cellColumns", [C], "col", function(t, e, n) {
        var r = e.columns
          , o = a(r);
        return m(n[C], function(t, e) {
            o[e % r].push(t)
        }),
        o
    })
      , M = t("cells", ["cellRows", "cellColumns"], "cell", function(t, e, n) {
        return n[C]
    });
    return e(r),
    e(l),
    e(E),
    e(A),
    e(I),
    e(x),
    e(L),
    e(T),
    e(N),
    e(k),
    e(M),
    _
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LazyLoad = e()
}(this, function() {
    "use strict";
    function e() {
        return (e = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ).apply(this, arguments)
    }
    var i = "undefined" != typeof window
      , u = i && !("onscroll"in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)
      , l = i && "IntersectionObserver"in window
      , n = i && "classList"in document.createElement("p")
      , s = i && 1 < window.devicePixelRatio
      , r = {
        elements_selector: ".lazy",
        container: u || i ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loadingx",
        class_loaded: "loadedx",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1
    }
      , a = function(t) {
        return e({}, r, t)
    }
      , o = function(t, e) {
        var n, r = "LazyLoad::Initialized", o = new t(e);
        try {
            n = new CustomEvent(r,{
                detail: {
                    instance: o
                }
            })
        } catch (t) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(r, !1, !1, {
                instance: o
            })
        }
        window.dispatchEvent(n)
    }
      , d = "src"
      , c = "srcset"
      , f = "sizes"
      , p = "llOriginalAttrs"
      , v = "loadingx"
      , h = "loadedx"
      , m = "applied"
      , g = "error"
      , b = "ll-status"
      , _ = function(t, e) {
        return t.getAttribute("data-" + e)
    }
      , y = function(t) {
        return _(t, b)
    }
      , w = function(t, e) {
        return n = t,
        o = "data-" + b,
        void (null !== (r = e) ? n.setAttribute(o, r) : n.removeAttribute(o));
        var n, r, o
    }
      , E = function(t) {
        return w(t, null)
    }
      , A = function(t) {
        return null === y(t)
    }
      , I = function(t) {
        return "native" === y(t)
    }
      , x = [v, h, m, g]
      , L = function(t, e, n, r) {
        t && (void 0 === r ? void 0 === n ? t(e) : t(e, n) : t(e, n, r))
    }
      , C = function(t, e) {
        n ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
    }
      , T = function(t, e) {
        n ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    }
      , N = function(t) {
        return t.llTempImage
    }
      , k = function(t, e) {
        if (e) {
            var n = e._observer;
            n && n.unobserve(t)
        }
    }
      , M = function(t, e) {
        t && (t.loadingCount += e)
    }
      , O = function(t, e) {
        t && (t.toLoadCount = e)
    }
      , z = function(t) {
        for (var e, n = [], r = 0; e = t.children[r]; r += 1)
            "SOURCE" === e.tagName && n.push(e);
        return n
    }
      , S = function(t, e) {
        var n = t.parentNode;
        n && "PICTURE" === n.tagName && z(n).forEach(e)
    }
      , R = function(t, e) {
        z(t).forEach(e)
    }
      , P = [d]
      , D = [d, "poster"]
      , j = [d, c, f]
      , H = ["data"]
      , X = function(t) {
        return !!t[p]
    }
      , Y = function(t) {
        return t[p]
    }
      , W = function(t) {
        return delete t[p]
    }
      , F = function(e, t) {
        if (!X(e)) {
            var n = {};
            t.forEach(function(t) {
                n[t] = e.getAttribute(t)
            }),
            e[p] = n
        }
    }
      , G = function(o, t) {
        if (X(o)) {
            var i = Y(o);
            t.forEach(function(t) {
                var e, n, r;
                e = o,
                (r = i[n = t]) ? e.setAttribute(n, r) : e.removeAttribute(n)
            })
        }
    }
      , V = function(t, e, n) {
        C(t, e.class_loading),
        w(t, v),
        n && (M(n, 1),
        L(e.callback_loading, t, n))
    }
      , B = function(t, e, n) {
        n && t.setAttribute(e, n)
    }
      , q = function(t, e) {
        B(t, f, _(t, e.data_sizes)),
        B(t, c, _(t, e.data_srcset)),
        B(t, d, _(t, e.data_src))
    }
      , J = function(t, e, n) {
        var r, o, i, a = _(t, e.data_bg_multi), c = _(t, e.data_bg_multi_hidpi), u = s && c ? c : a;
        u && (t.style.backgroundImage = u,
        i = n,
        C(r = t, (o = e).class_applied),
        w(r, m),
        i && (o.unobserve_completed && k(r, o),
        L(o.callback_applied, r, i)))
    }
      , U = {
        IMG: function(t, e) {
            S(t, function(t) {
                F(t, j),
                q(t, e)
            }),
            F(t, j),
            q(t, e)
        },
        IFRAME: function(t, e) {
            F(t, P),
            B(t, d, _(t, e.data_src))
        },
        VIDEO: function(t, e) {
            R(t, function(t) {
                F(t, P),
                B(t, d, _(t, e.data_src))
            }),
            F(t, D),
            B(t, "poster", _(t, e.data_poster)),
            B(t, d, _(t, e.data_src)),
            t.load()
        },
        OBJECT: function(t, e) {
            F(t, H),
            B(t, "data", _(t, e.data_src))
        }
    }
      , $ = ["IMG", "IFRAME", "VIDEO", "OBJECT"]
      , K = function(t, e) {
        !e || 0 < e.loadingCount || 0 < e.toLoadCount || L(t.callback_finish, e)
    }
      , Q = function(t, e, n) {
        t.addEventListener(e, n),
        t.llEvLisnrs[e] = n
    }
      , Z = function(t) {
        return !!t.llEvLisnrs
    }
      , tt = function(t) {
        if (Z(t)) {
            var e, n, r = t.llEvLisnrs;
            for (var o in r) {
                var i = r[o];
                e = o,
                n = i,
                t.removeEventListener(e, n)
            }
            delete t.llEvLisnrs
        }
    }
      , et = function(t, e, n) {
        var r;
        delete t.llTempImage,
        M(n, -1),
        (r = n) && (r.toLoadCount -= 1),
        T(t, e.class_loading),
        e.unobserve_completed && k(t, n)
    }
      , nt = function(i, a, c) {
        var u = N(i) || i;
        if (!Z(u)) {
            !function(t, e, n) {
                Z(t) || (t.llEvLisnrs = {});
                var r = "VIDEO" === t.tagName ? "loadeddata" : "load";
                Q(t, r, e),
                Q(t, "error", n)
            }(u, function(t) {
                var e, n, r, o;
                n = a,
                r = c,
                o = I(e = i),
                et(e, n, r),
                C(e, n.class_loaded),
                w(e, h),
                L(n.callback_loaded, e, r),
                o || K(n, r),
                tt(u)
            }, function(t) {
                var e, n, r, o;
                n = a,
                r = c,
                o = I(e = i),
                et(e, n, r),
                C(e, n.class_error),
                w(e, g),
                L(n.callback_error, e, r),
                o || K(n, r),
                tt(u)
            })
        }
    }
      , rt = function(t, e, n) {
        var r, o, i, a, c, u, l;
        t.llTempImage = document.createElement("IMG"),
        nt(t, e, n),
        X(r = t) || (r[p] = {
            backgroundImage: r.style.backgroundImage
        }),
        a = n,
        c = _(o = t, (i = e).data_bg),
        u = _(o, i.data_bg_hidpi),
        (l = s && u ? u : c) && (o.style.backgroundImage = 'url("'.concat(l, '")'),
        N(o).setAttribute(d, l),
        V(o, i, a)),
        J(t, e, n)
    }
      , ot = function(t, e, n) {
        var r, o, i, a;
        nt(t, e, n),
        o = e,
        i = n,
        (a = U[(r = t).tagName]) && (a(r, o),
        V(r, o, i))
    }
      , it = function(t, e, n) {
        var r;
        r = t,
        -1 < $.indexOf(r.tagName) ? ot(t, e, n) : rt(t, e, n)
    }
      , at = function(t, e, n) {
        var r, o, i;
        t.setAttribute("loading", "lazy"),
        nt(t, e, n),
        o = e,
        (i = U[(r = t).tagName]) && i(r, o),
        w(t, "native")
    }
      , ct = function(t) {
        t.removeAttribute(d),
        t.removeAttribute(c),
        t.removeAttribute(f)
    }
      , ut = function(t) {
        S(t, function(t) {
            G(t, j)
        }),
        G(t, j)
    }
      , lt = {
        IMG: ut,
        IFRAME: function(t) {
            G(t, P)
        },
        VIDEO: function(t) {
            R(t, function(t) {
                G(t, P)
            }),
            G(t, D),
            t.load()
        },
        OBJECT: function(t) {
            G(t, H)
        }
    }
      , st = function(t) {
        var e = lt[t.tagName];
        e ? e(t) : function(t) {
            if (X(t)) {
                var e = Y(t);
                t.style.backgroundImage = e.backgroundImage
            }
        }(t)
    }
      , dt = function(t, e) {
        var n, r;
        st(t),
        r = e,
        A(n = t) || I(n) || (T(n, r.class_entered),
        T(n, r.class_exited),
        T(n, r.class_applied),
        T(n, r.class_loading),
        T(n, r.class_loaded),
        T(n, r.class_error)),
        E(t),
        W(t)
    }
      , ft = function(t, e, n, r) {
        var o;
        n.cancel_on_exit && (y(t) === v && "IMG" === t.tagName && (tt(t),
        S(o = t, function(t) {
            ct(t)
        }),
        ct(o),
        ut(t),
        T(t, n.class_loading),
        M(r, -1),
        E(t),
        L(n.callback_cancel, t, e, r)))
    }
      , pt = function(t, e, n, r) {
        var o, i, a, c = (o = t,
        0 <= x.indexOf(y(o)));
        w(t, "entered"),
        C(t, n.class_entered),
        T(t, n.class_exited),
        i = t,
        a = r,
        n.unobserve_entered && k(i, a),
        L(n.callback_enter, t, e, r),
        c || it(t, n, r)
    }
      , vt = ["IMG", "IFRAME", "VIDEO"]
      , ht = function(t) {
        return t.use_native && "loading"in HTMLImageElement.prototype
    }
      , mt = function(t, a, c) {
        t.forEach(function(t) {
            return (i = t).isIntersecting || 0 < i.intersectionRatio ? pt(t.target, t, a, c) : (e = t.target,
            n = t,
            r = a,
            o = c,
            void (A(e) || (C(e, r.class_exited),
            ft(e, n, r, o),
            L(r.callback_exit, e, n, o))));
            var e, n, r, o, i
        })
    }
      , gt = function(e, n) {
        var t;
        l && !ht(e) && (n._observer = new IntersectionObserver(function(t) {
            mt(t, e, n)
        }
        ,{
            root: (t = e).container === document ? null : t.container,
            rootMargin: t.thresholds || t.threshold + "px"
        }))
    }
      , bt = function(t) {
        return Array.prototype.slice.call(t)
    }
      , _t = function(t) {
        return t.container.querySelectorAll(t.elements_selector)
    }
      , yt = function(t) {
        return y(t) === g
    }
      , wt = function(t, e) {
        return n = t || _t(e),
        bt(n).filter(A);
        var n
    }
      , Et = function(e, t) {
        var n;
        (n = _t(e),
        bt(n).filter(yt)).forEach(function(t) {
            T(t, e.class_error),
            E(t)
        }),
        t.update()
    }
      , t = function(t, e) {
        var n, r, o = a(t);
        this._settings = o,
        this.loadingCount = 0,
        gt(o, this),
        n = o,
        r = this,
        i && window.addEventListener("online", function() {
            Et(n, r)
        }),
        this.update(e)
    };
    return t.prototype = {
        update: function(t) {
            var e, n, r, o, i, a = this._settings, c = wt(t, a);
            {
                if (O(this, c.length),
                !u && l)
                    return ht(a) ? (e = a,
                    n = this,
                    c.forEach(function(t) {
                        -1 !== vt.indexOf(t.tagName) && at(t, e, n)
                    }),
                    void O(n, 0)) : (r = this._observer,
                    o = c,
                    r.disconnect(),
                    i = r,
                    void o.forEach(function(t) {
                        i.observe(t)
                    }));
                this.loadAll(c)
            }
        },
        destroy: function() {
            this._observer && this._observer.disconnect(),
            _t(this._settings).forEach(function(t) {
                W(t)
            }),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount
        },
        loadAll: function(t) {
            var e = this
              , n = this._settings;
            wt(t, n).forEach(function(t) {
                k(t, e),
                it(t, n, e)
            })
        },
        restoreAll: function() {
            var e = this._settings;
            _t(e).forEach(function(t) {
                dt(t, e)
            })
        }
    },
    t.load = function(t, e) {
        var n = a(e);
        it(t, n)
    }
    ,
    t.resetStatus = function(t) {
        E(t)
    }
    ,
    i && function(t, e) {
        if (e)
            if (e.length)
                for (var n, r = 0; n = e[r]; r += 1)
                    o(t, n);
            else
                o(t, e)
    }(t, window.lazyLoadOptions),
    t
});
var UA = navigator.userAgent || navigator.userAgentData
  , HTML = document.documentElement
  , isFirefox = "undefined" != typeof InstallTrigger
  , isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString()
  , isIE9 = /MSIE 9/i.test(UA)
  , isIE10 = /MSIE 10/i.test(UA)
  , isIE11 = /rv:11.0/i.test(UA)
  , isIE = !!document.documentMode
  , isEdge = !isIE && !!window.StyleMedia && !isIE11
  , isChrome = -1 < UA.indexOf("Chrome") || !!window.chrome && !!window.chrome.webstore
  , Mobile = window.matchMedia("(max-width: 1024px)")
  , Touch = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(UA) || "ontouchstart"in document.documentElement
  , iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
  , MacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
iOS && HTML.classList.add("is-iOS"),
1 == Touch && HTML.classList.add("is-touch"),
isFirefox ? HTML.classList.add("is-Firefox") : isEdge ? HTML.classList.add("is-Edge") : isSafari ? HTML.classList.add("is-Safari") : isChrome && HTML.classList.add("is-Chrome");
var NotSupport = isIE9 || isIE10 || isIE11 || isIE;
if (Mobile.matches)
    var TimeDelay = 500;
else
    TimeDelay = 1e3;
var Xwidth = window.innerWidth
  , Yheight = window.innerHeight
  , Portrait = Xwidth < Yheight
  , Landscape = Yheight <= Xwidth
  , Loadx = 0
  , doWheel = !0
  , doTouch = !0
  , DOC = document
  , Body = document.body
  , loadIcon = DOC.querySelector(".loadicon")
  , Logo = DOC.querySelector(".logo")
  , Container = DOC.querySelector(".main")
  , DetailLoad = DOC.querySelector(".detail-load")
  , Content = DOC.querySelector(".insert-content")
  , contentData = DOC.querySelector(".content-data")
  , ContentDetail = DOC.querySelector(".content-details")
  , Bottom = DOC.querySelector(".bottom")
  , Home = DOC.querySelector(".page-home")
  , titlePage = DOC.querySelector(".company h1");
Home.classList.add("inactive");
var Background = DOC.querySelector(".background")
  , slideBanner = DOC.querySelector(".banner-full-slide")
  , slideImg = DOC.querySelectorAll(".slide-img")
  , slideNav = DOC.querySelector(".outer-nav")
  , navClick = DOC.querySelector(".nav-click")
  , Navigation = DOC.querySelector(".navigation")
  , NaItems = DOC.querySelectorAll(".nav-item")
  , MainMenu = DOC.querySelector(".main-menu")
  , Gopage = DOC.querySelectorAll(".link-page")
  , Gohome = DOC.querySelector(".link-home")
  , Languge = DOC.querySelector(".language")
  , ClickLang = DOC.querySelector(".click-lang")
  , Stop = DOC.querySelector(".stop")
  , Play = DOC.querySelector(".play")
  , goTop = DOC.querySelector(".go-top")
  , goTopDetails = DOC.querySelector(".go-top-details")
  , goDown = DOC.querySelector(".scroll-down")
  , scrollDown = DetailLoad.querySelector(".scroll-down-desktop")
  , EnterSite = DOC.querySelector(".enter-site")
  , enterFill = EnterSite.querySelector(".button-filler")
  , CurrentPgae = DOC.querySelector(".nav-item.current a")
  , NormalPage = DOC.querySelector(".nav-item:first-child a")
  , Activated = DOC.querySelector(".currentpage")
  , homePage = DOC.getElementById("homebg")
  , aboutPage = DOC.getElementById("about-page")
  , servicePage = DOC.getElementById("service-page")
  , clientPage = DOC.getElementById("client-page")
  , contactPage = DOC.getElementById("contact-page")
  , addBtn = DOC.querySelector(".add-button")
  , closeAdd = DOC.querySelector(".close-add")
  , installApp = DOC.querySelector(".install-app")
  , PathBg = DOC.getElementById("scene");
PathD = PathBg.querySelectorAll("path"),
gsap.set(PathBg, {
    opacity: 0
}),
Array.from(MainMenu.querySelectorAll(".link-page"), function(e) {
    return charming(e),
    e
});
var BoxSpan = MainMenu.querySelectorAll(".box");
function turnWheelTouch() {
    doTouch = doWheel = !0
}
var Cursor = function() {
    function r(e) {
        var t = this;
        classCallCheck(this, r),
        this.DOM = {
            el: e
        },
        this.DOM.dot = this.DOM.el.querySelector(".cursor-dot"),
        this.DOM.circle = this.DOM.el.querySelector(".cursor-inner"),
        this.bounds = this.DOM.el.getBoundingClientRect(),
        this.renderedStyles = {
            tx: {
                previous: 0,
                current: 0,
                amt: .2
            },
            ty: {
                previous: 0,
                current: 0,
                amt: .2
            },
            scale: {
                previous: 1,
                current: 1,
                amt: .2
            },
            opacity: {
                previous: 1,
                current: 1,
                amt: .2
            }
        },
        this.onMouse = function() {
            t.renderedStyles.tx.previous = t.renderedStyles.tx.current = mousePos.x - t.bounds.width / 2,
            t.renderedStyles.ty.previous = t.renderedStyles.ty.current = mousePos.y - t.bounds.height / 2
        }
        ,
        this.onMouseMoveEv = function() {
            t.renderedStyles.tx.previous = t.renderedStyles.tx.current = mousePos.x - t.bounds.width / 2,
            t.renderedStyles.ty.previous = t.renderedStyles.ty.current = mousePos.y - t.bounds.height / 2,
            requestAnimationFrame(function() {
                return t.render()
            }),
            window.removeEventListener("mousemove", t.onMouseMoveEv)
        }
        ,
        window.addEventListener("mousemove", this.onMouseMoveEv),
        this.onMouse()
    }
    return createClass(r, [{
        key: "Enter",
        value: function() {
            this.DOM.el.classList.add("focus"),
            this.renderedStyles.scale.current = 7
        }
    }, {
        key: "Leave",
        value: function() {
            return this.DOM.el.classList.remove("focus"),
            this.renderedStyles.scale.current = 1,
            this.onMouse()
        }
    }, {
        key: "render",
        value: function() {
            var e = this;
            for (var t in this.renderedStyles.tx.current = mousePos.x - this.bounds.width / 2,
            this.renderedStyles.ty.current = mousePos.y - this.bounds.height / 2,
            this.renderedStyles)
                this.renderedStyles[t].previous = MathUtils.lerp(this.renderedStyles[t].previous, this.renderedStyles[t].current, this.renderedStyles[t].amt);
            this.DOM.el.style.transform = "translateX(".concat(this.renderedStyles.tx.previous, "px) translateY(").concat(this.renderedStyles.ty.previous, "px) scale(").concat(this.renderedStyles.scale.previous, ")"),
            this.DOM.el.style.opacity = this.renderedStyles.opacity.previous,
            requestAnimationFrame(function() {
                return e.render()
            })
        }
    }]),
    r
}()
  , cursor = new Cursor(document.querySelector(".cursor"));
function GetCursor() {
    document.querySelectorAll(".nav-click, .scroll-down, .scroll-down-desktop, .go-top,.go-top-details,.enter-site, .logo, button, a, .click-next, .click-prev, .zoom-in, .zoom-out, .gm-style img").forEach(function(e) {
        1 != isSafari && (e.addEventListener("mouseenter", function(e) {
            return this.classList.add("cursor-none"),
            cursor.Enter()
        }),
        e.addEventListener("mouseleave", function(e) {
            return this.classList.remove("cursor-none"),
            cursor.Leave()
        }),
        e.addEventListener("click", function(e) {
            return this.classList.remove("cursor-none"),
            document.querySelector(".cursor").style.opacity = 0,
            cursor.Leave()
        }))
    })
}
function GetEnter() {
    var r = document.querySelector(".enter-site")
      , e = document.querySelector(".button-filler")
      , t = document.querySelector(".button-text");
    r.addEventListener("mouseenter", function() {
        hover = !0,
        gsap.killTweensOf(r),
        gsap.killTweensOf(e),
        gsap.killTweensOf(t),
        gsap.timeline().to(e, .3, {
            scale: 1.3,
            ease: "power3.out"
        }, 0).to(t, .3, {
            scale: .9,
            ease: "power3.out"
        }, .3)
    }),
    r.addEventListener("mousemove", function(e) {
        var t;
        t = e,
        hover = !0,
        gsap.timeline().to(r, 1.5, {
            x: (t.pageX - r.offsetLeft) / 5,
            y: (t.pageY - r.offsetTop) / 5,
            ease: "power3.out"
        })
    }),
    r.addEventListener("mouseleave", function() {
        hover = !1,
        gsap.killTweensOf(r),
        gsap.killTweensOf(e),
        gsap.killTweensOf(t),
        gsap.timeline().to(r, .6, {
            x: "0%",
            y: "0%",
            ease: "power3.out"
        }).to(e, .3, {
            scale: 1,
            ease: "power3.out"
        }, 0).to(t, .3, {
            scale: 1,
            ease: "power3.out"
        }, 0)
    })
}
window.addEventListener("mousemove", function(e) {
    return mousePos = getMousePos(e)
});
function smoothDetails(i) {
    var s, n = 0, t = function() {
        function e() {
            var t = this;
            this.DOM = {
                el: i
            },
            classCallCheck(this, e),
            this.ScrollTrans = {
                DetailtranslationY: {
                    previous: 0,
                    current: 0,
                    ease: .1,
                    DetailValue: function() {
                        return s
                    }
                }
            },
            this.ContentDetail = this.DOM.el,
            this.ContentDetail ? (contentData.style.transform = "translate3d(0px,0px,0px)",
            contentData.classList.add("detail-scroll"),
            this.ScrollThis = document.querySelector(".detail-scroll"),
            this.setHeight()) : (contentData.classList.remove("detail-scroll"),
            contentData.style.height = "auto",
            contentData.style.transform = "translate3d(0px,0px,0px)"),
            this.upDateDetail(),
            this.ResizeEvents(),
            this.upDateDetail(),
            this.Requestx = window.requestAnimationFrame(function() {
                t.initDetail()
            })
        }
        return createClass(e, [{
            key: "upDateDetail",
            value: function() {
                for (var t in this.ScrollTrans)
                    this.ScrollTrans[t].current = this.ScrollTrans[t].previous = this.ScrollTrans[t].DetailValue();
                this.ResponeDetail()
            }
        }, {
            key: "ResponeDetail",
            value: function() {
                if (1024 < window.innerWidth)
                    if (this.ScrollThis) {
                        var t = Math.round("".concat(-this.ScrollTrans.DetailtranslationY.previous));
                        this.ScrollThis.style.transform = "translate3d(0," + t + "px,0)"
                    } else
                        contentData.style.transform = "translate3d(0px,0px,0px)";
                else
                    contentData.style.transform = "translate3d(0px,0px,0px)"
            }
        }, {
            key: "setHeight",
            value: function() {
                if (this.Requestx && (window.cancelAnimationFrame(this.Requestx),
                this.Requestx = void 0,
                n = 0),
                this.ContentDetail)
                    if (1024 < window.innerWidth) {
                        var t = this.ContentDetail.offsetHeight + "px";
                        contentData.style.height = t
                    } else
                        contentData.style.height = "auto"
            }
        }, {
            key: "ResizeEvents",
            value: function() {
                var t = this;
                window.addEventListener("resize", function() {
                    return t.setHeight()
                })
            }
        }, {
            key: "initDetail",
            value: function() {
                var t = this;
                for (var e in Math.abs(s - n),
                n = s,
                this.ScrollTrans)
                    this.ScrollTrans[e].current = this.ScrollTrans[e].DetailValue(),
                    this.ScrollTrans[e].previous = MathUtils.lerp(this.ScrollTrans[e].previous, this.ScrollTrans[e].current, this.ScrollTrans[e].ease);
                this.setHeight(),
                this.ResponeDetail(),
                this.Requestx = window.requestAnimationFrame(function() {
                    t.initDetail()
                })
            }
        }]),
        e
    }(), e = function() {
        return s = DetailLoad.pageYOffset || DetailLoad.scrollTop
    };
    e(),
    DetailLoad.addEventListener("scroll", e, {
        passive: !0
    }),
    new t(i)
}
function scrollTranslate() {
    var o, h;
    calcWinsize();
    var e = document.querySelector(".page")
      , t = function() {
        return o = window.pageYOffset || document.documentElement.scrollTop
    }
      , s = function() {
        function e(t) {
            var i = this;
            classCallCheck(this, e),
            this.DOM = {
                el: t
            },
            this.DOM.Box = this.DOM.el.querySelector(".translator"),
            this.DOM.Title = this.DOM.el.querySelector(".tilte-trans"),
            this.DOM.Pic = this.DOM.el.querySelector(".pic-trans"),
            this.DOM.Frame = this.DOM.el.querySelector(".frame-trans"),
            this.DOM.Svg = this.DOM.el.querySelector(".svg-trans"),
            this.DOM.Banner = this.DOM.el.querySelector(".translate"),
            this.aniStyles = {
                itemTranslationY: {
                    previous: 0,
                    current: 0,
                    ease: .1,
                    setValue: function() {
                        var t = parseInt(window.innerHeight / 5)
                          , e = -1 * t;
                        return Math.max(Math.min(MathUtils.map(i.props.top - o, winsize.height, -1 * i.props.height, e, t), t), e)
                    }
                },
                bannerTranslationY: {
                    previous: 0,
                    current: 0,
                    ease: .1,
                    setValue: function() {
                        return o
                    }
                }
            },
            this.getSize(),
            this.Style(),
            this.observer = new IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    return i.isVisible = 0 < t.intersectionRatio
                })
            }
            ),
            this.observer.observe(this.DOM.el),
            this.resizeEvents()
        }
        return createClass(e, [{
            key: "Style",
            value: function() {
                for (var t in this.aniStyles)
                    this.aniStyles[t].current = this.aniStyles[t].previous = this.aniStyles[t].setValue();
                this.Ani()
            }
        }, {
            key: "getSize",
            value: function() {
                var t = this.DOM.el.getBoundingClientRect();
                this.props = {
                    height: t.height,
                    top: o + t.top
                }
            }
        }, {
            key: "resizeEvents",
            value: function() {
                var t = this;
                window.addEventListener("resize", function() {
                    return t.resizeItem()
                })
            }
        }, {
            key: "resizeItem",
            value: function() {
                this.getSize(),
                this.Style()
            }
        }, {
            key: "renderAni",
            value: function() {
                for (var t in this.aniStyles)
                    this.aniStyles[t].current = this.aniStyles[t].setValue(),
                    this.aniStyles[t].previous = MathUtils.lerp(this.aniStyles[t].previous, this.aniStyles[t].current, this.aniStyles[t].ease);
                this.Ani()
            }
        }, {
            key: "Ani",
            value: function() {
                if (this.DOM.Banner)
                    if (1024 < window.innerWidth) {
                        var t = Math.round("".concat(.3 * this.aniStyles.bannerTranslationY.previous));
                        this.DOM.Banner.style.transform = "translate3d(0," + t + "px,0)"
                    } else
                        this.DOM.Banner.style.transform = "none";
                if (this.DOM.Box)
                    if (1024 < window.innerWidth) {
                        t = Math.round("".concat(.8 * this.aniStyles.itemTranslationY.previous));
                        this.DOM.Box.style.transform = "translate3d(0," + t + "px,0)"
                    } else
                        this.DOM.Box.style.transform = "none";
                if (null !== this.DOM.Title)
                    if (1024 < window.innerWidth) {
                        t = Math.round("".concat(-.8 * this.aniStyles.itemTranslationY.previous));
                        this.DOM.Title.style.transform = "translate3d(0," + t + "px,0)"
                    } else
                        this.DOM.Title.style.transform = "none";
                if (null !== this.DOM.Svg)
                    if (1024 < window.innerWidth) {
                        t = Math.round("".concat(-3.5 * this.aniStyles.itemTranslationY.previous));
                        this.DOM.Svg.style.transform = "translate3d(0," + t + "px,0)"
                    } else
                        this.DOM.Svg.style.transform = "none";
                if (null !== this.DOM.Pic)
                    if (1024 < window.innerWidth) {
                        var e = Math.round("".concat(.6 * this.aniStyles.itemTranslationY.previous))
                          , i = Math.round("".concat(-.5 * this.aniStyles.itemTranslationY.previous));
                        this.DOM.Pic.style.transform = "translate3d(0," + e + "px,0)",
                        this.DOM.Frame.style.transform = "translate3d(0," + i + "px,0)"
                    } else
                        this.DOM.Pic.style.transform = "none",
                        this.DOM.Frame.style.transform = "none"
            }
        }]),
        e
    }()
      , i = function() {
        function i() {
            classCallCheck(this, i);
            var e = this;
            this.DOM = {
                Main: document.querySelector(".smooth-scroll")
            },
            this.items = [],
            this.DOM.scrollable = this.DOM.Main.querySelector(".scroll-content");
            var t = document.querySelector(".currentpage");
            null != t && toConsumableArray(this.DOM.scrollable.querySelectorAll(".ani-item")).forEach(function(t) {
                return e.items.push(new s(t))
            }),
            this.ScrollStyles = {
                translationY: {
                    previous: 0,
                    current: 0,
                    ease: .1,
                    setValue: function() {
                        return o
                    }
                }
            },
            this.setSize(),
            this.upDate(),
            this.initEvents(),
            this.myReq = window.requestAnimationFrame(function() {
                return e.initScroll()
            })
        }
        return createClass(i, [{
            key: "upDate",
            value: function() {
                for (var t in this.ScrollStyles)
                    this.ScrollStyles[t].current = this.ScrollStyles[t].previous = this.ScrollStyles[t].setValue();
                this.Respone()
            }
        }, {
            key: "Respone",
            value: function() {
                if (1024 < window.innerWidth) {
                    var t = Math.round("".concat(-1 * this.ScrollStyles.translationY.previous));
                    this.DOM.scrollable.style.transform = "translate3d(0," + t + "px,0)"
                } else
                    this.DOM.scrollable.style.transform = "none"
            }
        }, {
            key: "setSize",
            value: function() {
                if (this.myReq && (window.cancelAnimationFrame(this.myReq),
                this.myReq = void 0,
                h = 0,
                scrollingSpeed = 0),
                1024 < window.innerWidth) {
                    var t = "".concat(this.DOM.scrollable.scrollHeight, "px");
                    e.style.height = t
                } else
                    e.style.height = "auto"
            }
        }, {
            key: "initEvents",
            value: function() {
                var t = this;
                window.addEventListener("resize", function() {
                    return t.setSize()
                })
            }
        }, {
            key: "initScroll",
            value: function() {
                var t = this;
                for (var e in scrollingSpeed = Math.abs(o - h),
                h = o,
                this.ScrollStyles)
                    this.ScrollStyles[e].current = this.ScrollStyles[e].setValue(),
                    this.ScrollStyles[e].previous = MathUtils.lerp(this.ScrollStyles[e].previous, this.ScrollStyles[e].current, this.ScrollStyles[e].ease);
                this.Respone(),
                this.setSize();
                var i = !0
                  , s = !1
                  , n = void 0;
                try {
                    for (var r, l = this.items[Symbol.iterator](); !(i = (r = l.next()).done); i = !0) {
                        var a = r.value;
                        a.isVisible ? a.insideViewport ? a.renderAni() : (a.insideViewport = !0,
                        a.Style()) : a.insideViewport = !1
                    }
                } catch (t) {
                    s = !0,
                    n = t
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                this.myReq = window.requestAnimationFrame(function() {
                    return t.initScroll()
                })
            }
        }]),
        i
    }();
    t(),
    document.addEventListener("scroll", t, {
        passive: !0
    }),
    new i
}
function SlideLogo(t) {
    var e = document.querySelector(".stopauto")
      , n = document.querySelector(".playauto")
      , i = document.querySelector(".logo-pic img").classList.contains("loadedx")
      , r = new Slider("#logoclient",{
        type: "carousel",
        autoplay: 3e3,
        perView: 3,
        breakpoints: {
            1e3: {
                perView: 2
            },
            600: {
                perView: 1
            }
        }
    });
    e.addEventListener("click", function() {
        r.pause()
    }),
    n.addEventListener("click", function() {
        r.play()
    }),
    r.mount(),
    e.click(),
    null !== t && window.addEventListener("scroll", function() {
        if (window.pageYOffset >= t.parentNode.parentNode.offsetTop - window.innerHeight) {
            if (!i)
                new LazyLoad({
                    elements_selector: ".logo-pic img.lazy",
                    use_native: !0
                });
            n.click()
        } else
            e.click()
    }, {
        passive: !0
    })
}
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Slider = e()
}(this, function() {
    "use strict";
    var i = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perTouch: !1,
        touchRatio: .5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        throttle: 10,
        direction: "ltr",
        peek: 0,
        breakpoints: {},
        classes: {
            direction: {
                ltr: "slide-ltr",
                rtl: "slide-rtl"
            },
            slider: "slide-slider",
            carousel: "slide-carousel",
            swipeable: "slide-swipeable",
            dragging: "slide-dragging",
            cloneSlide: "slide-slide-clone",
            activeNav: "slide-bullet-active",
            activeSlide: "slide-slide-active",
            disabledArrow: "slide-arrow-disabled"
        }
    };
    function u(t) {
        console.error("[Slider warn]: " + t)
    }
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , r = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
      , o = function() {
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
            t
        }
    }()
      , a = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    function y(t) {
        return parseInt(t)
    }
    function s(t) {
        return "string" == typeof t
    }
    function c(t) {
        var e = void 0 === t ? "undefined" : n(t);
        return "function" === e || "object" === e && !!t
    }
    function l(t) {
        return "function" == typeof t
    }
    function f(t) {
        return void 0 === t
    }
    function d(t) {
        return t.constructor === Array
    }
    function p(t, e, n) {
        Object.defineProperty(t, e, n)
    }
    function h(t, e) {
        var n = a({}, t, e);
        return e.hasOwnProperty("classes") && (n.classes = a({}, t.classes, e.classes),
        e.classes.hasOwnProperty("direction") && (n.classes.direction = a({}, t.classes.direction, e.classes.direction))),
        e.hasOwnProperty("breakpoints") && (n.breakpoints = a({}, t.breakpoints, e.breakpoints)),
        n
    }
    var v = function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, e),
            this.events = t,
            this.hop = t.hasOwnProperty
        }
        return o(e, [{
            key: "on",
            value: function(t, e) {
                if (d(t))
                    for (var n = 0; n < t.length; n++)
                        this.on(t[n], e);
                this.hop.call(this.events, t) || (this.events[t] = []);
                var i = this.events[t].push(e) - 1;
                return {
                    remove: function() {
                        delete this.events[t][i]
                    }
                }
            }
        }, {
            key: "emit",
            value: function(t, e) {
                if (d(t))
                    for (var n = 0; n < t.length; n++)
                        this.emit(t[n], e);
                this.hop.call(this.events, t) && this.events[t].forEach(function(t) {
                    t(e || {})
                })
            }
        }]),
        e
    }()
      , m = function() {
        function n(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            r(this, n),
            this._c = {},
            this._t = [],
            this._e = new v,
            this.disabled = !1,
            this.selector = t,
            this.settings = h(i, e),
            this.index = this.settings.startAt
        }
        return o(n, [{
            key: "mount",
            value: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return this._e.emit("mount.before"),
                c(t) ? this._c = function(t, e, n) {
                    var i = {};
                    for (var r in e)
                        l(e[r]) ? i[r] = e[r](t, i, n) : u("Extension must be a function");
                    for (var o in i)
                        l(i[o].mount) && i[o].mount();
                    return i
                }(this, t, this._e) : u("You need to provide a object on `mount()`"),
                this._e.emit("mount.after"),
                this
            }
        }, {
            key: "mutate",
            value: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                return d(t) ? this._t = t : u("You need to provide a array on `mutate()`"),
                this
            }
        }, {
            key: "update",
            value: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return this.settings = h(this.settings, t),
                t.hasOwnProperty("startAt") && (this.index = t.startAt),
                this._e.emit("update"),
                this
            }
        }, {
            key: "go",
            value: function(t) {
                return this._c.Run.make(t),
                this
            }
        }, {
            key: "move",
            value: function(t) {
                return this._c.Transition.disable(),
                this._c.Move.make(t),
                this
            }
        }, {
            key: "destroy",
            value: function() {
                return this._e.emit("destroy"),
                this
            }
        }, {
            key: "play",
            value: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                return t && (this.settings.autoplay = t),
                this._e.emit("play"),
                this
            }
        }, {
            key: "pause",
            value: function() {
                return this._e.emit("pause"),
                this
            }
        }, {
            key: "disable",
            value: function() {
                return this.disabled = !0,
                this
            }
        }, {
            key: "enable",
            value: function() {
                return this.disabled = !1,
                this
            }
        }, {
            key: "on",
            value: function(t, e) {
                return this._e.on(t, e),
                this
            }
        }, {
            key: "isType",
            value: function(t) {
                return this.settings.type === t
            }
        }, {
            key: "settings",
            get: function() {
                return this._o
            },
            set: function(t) {
                c(t) ? this._o = t : u("Options must be an `object` instance.")
            }
        }, {
            key: "index",
            get: function() {
                return this._i
            },
            set: function(t) {
                this._i = y(t)
            }
        }, {
            key: "type",
            get: function() {
                return this.settings.type
            }
        }, {
            key: "disabled",
            get: function() {
                return this._d
            },
            set: function(t) {
                this._d = !!t
            }
        }]),
        n
    }();
    function g() {
        return (new Date).getTime()
    }
    function b(n, i, r) {
        var o = void 0
          , s = void 0
          , u = void 0
          , a = void 0
          , c = 0;
        r || (r = {});
        var l = function() {
            c = !1 === r.leading ? 0 : g(),
            o = null,
            a = n.apply(s, u),
            o || (s = u = null)
        }
          , t = function() {
            var t = g();
            c || !1 !== r.leading || (c = t);
            var e = i - (t - c);
            return s = this,
            u = arguments,
            e <= 0 || i < e ? (o && (clearTimeout(o),
            o = null),
            c = t,
            a = n.apply(s, u),
            o || (s = u = null)) : o || !1 === r.trailing || (o = setTimeout(l, e)),
            a
        };
        return t.cancel = function() {
            clearTimeout(o),
            c = 0,
            o = s = u = null
        }
        ,
        t
    }
    var w = {
        ltr: ["marginLeft", "marginRight"],
        rtl: ["marginRight", "marginLeft"]
    };
    function k(t) {
        if (t && t.parentNode) {
            for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        return []
    }
    function _(t) {
        return !!(t && t instanceof window.HTMLElement)
    }
    var S = '[data-slider-el="track"]';
    var H = function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, e),
            this.listeners = t
        }
        return o(e, [{
            key: "on",
            value: function(t, e, n) {
                var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                s(t) && (t = [t]);
                for (var r = 0; r < t.length; r++)
                    this.listeners[t[r]] = n,
                    e.addEventListener(t[r], this.listeners[t[r]], i)
            }
        }, {
            key: "off",
            value: function(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                s(t) && (t = [t]);
                for (var i = 0; i < t.length; i++)
                    e.removeEventListener(t[i], this.listeners[t[i]], n)
            }
        }, {
            key: "destroy",
            value: function() {
                delete this.listeners
            }
        }]),
        e
    }();
    var T = ["ltr", "rtl"]
      , x = {
        ">": "<",
        "<": ">",
        "=": "="
    };
    function t(t, e) {
        return {
            modify: function(t) {
                return e.Direction.is("rtl") ? -t : t
            }
        }
    }
    function O(i, r, o) {
        var s = [function(e, n) {
            return {
                modify: function(t) {
                    return t + n.Gaps.value * e.index
                }
            }
        }
        , function(t, e) {
            return {
                modify: function(t) {
                    return t + e.Clones.grow / 2
                }
            }
        }
        , function(n, i) {
            return {
                modify: function(t) {
                    if (0 <= n.settings.focusAt) {
                        var e = i.Peek.value;
                        return c(e) ? t - e.before : t - e
                    }
                    return t
                }
            }
        }
        , function(o, s) {
            return {
                modify: function(t) {
                    var e = s.Gaps.value
                      , n = s.Sizes.width
                      , i = o.settings.focusAt
                      , r = s.Sizes.slideWidth;
                    return "center" === i ? t - (n / 2 - r / 2) : t - r * i - e * i
                }
            }
        }
        ].concat(i._t, [t]);
        return {
            mutate: function(t) {
                for (var e = 0; e < s.length; e++) {
                    var n = s[e];
                    l(n) && l(n().modify) ? t = n(i, r, o).modify(t) : u("Transformer should be a function that returns an object with `modify()` method")
                }
                return t
            }
        }
    }
    var e = !1;
    try {
        var A = Object.defineProperty({}, "passive", {
            get: function() {
                e = !0
            }
        });
        window.addEventListener("testPassive", null, A),
        window.removeEventListener("testPassive", null, A)
    } catch (t) {}
    var L = e
      , M = ["touchstart", "mousedown"]
      , C = ["touchmove", "mousemove"]
      , P = ["touchend", "touchcancel", "mouseup", "mouseleave"]
      , z = ["mousedown", "mousemove", "mouseup", "mouseleave"];
    function j(t) {
        return c(t) ? (n = t,
        Object.keys(n).sort().reduce(function(t, e) {
            return t[e] = n[e],
            t[e],
            t
        }, {})) : (u("Breakpoints option must be an object"),
        {});
        var n
    }
    var E = {
        Html: function(e, t) {
            var n = {
                mount: function() {
                    this.root = e.selector,
                    this.track = this.root.querySelector(S),
                    this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function(t) {
                        return !t.classList.contains(e.settings.classes.cloneSlide)
                    })
                }
            };
            return p(n, "root", {
                get: function() {
                    return n._r
                },
                set: function(t) {
                    s(t) && (t = document.querySelector(t)),
                    _(t) ? n._r = t : u("Root element must be a existing Html node")
                }
            }),
            p(n, "track", {
                get: function() {
                    return n._t
                },
                set: function(t) {
                    _(t) ? n._t = t : u("Could not find track element. Please use " + S + " attribute.")
                }
            }),
            p(n, "wrapper", {
                get: function() {
                    return n.track.children[0]
                }
            }),
            n
        },
        Translate: function(r, o, s) {
            var u = {
                set: function(t) {
                    var e = O(r, o).mutate(t);
                    o.Html.wrapper.style.transform = "translate3d(" + -1 * e + "px, 0px, 0px)"
                },
                remove: function() {
                    o.Html.wrapper.style.transform = ""
                }
            };
            return s.on("move", function(t) {
                var e = o.Gaps.value
                  , n = o.Sizes.length
                  , i = o.Sizes.slideWidth;
                return r.isType("carousel") && o.Run.isOffset("<") ? (o.Transition.after(function() {
                    s.emit("translate.jump"),
                    u.set(i * (n - 1))
                }),
                u.set(-i - e * n)) : r.isType("carousel") && o.Run.isOffset(">") ? (o.Transition.after(function() {
                    s.emit("translate.jump"),
                    u.set(0)
                }),
                u.set(i * n + e * n)) : u.set(t.movement)
            }),
            s.on("destroy", function() {
                u.remove()
            }),
            u
        },
        Transition: function(n, e, t) {
            var i = !1
              , r = {
                compose: function(t) {
                    var e = n.settings;
                    return i ? t + " 0ms " + e.animationTimingFunc : t + " " + this.duration + "ms " + e.animationTimingFunc
                },
                set: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "transform";
                    e.Html.wrapper.style.transition = this.compose(t)
                },
                remove: function() {
                    e.Html.wrapper.style.transition = ""
                },
                after: function(t) {
                    setTimeout(function() {
                        t()
                    }, this.duration)
                },
                enable: function() {
                    i = !1,
                    this.set()
                },
                disable: function() {
                    i = !0,
                    this.set()
                }
            };
            return p(r, "duration", {
                get: function() {
                    var t = n.settings;
                    return n.isType("slider") && e.Run.offset ? t.rewindDuration : t.animationDuration
                }
            }),
            t.on("move", function() {
                r.set()
            }),
            t.on(["build.before", "resize", "translate.jump"], function() {
                r.disable()
            }),
            t.on("run", function() {
                r.enable()
            }),
            t.on("destroy", function() {
                r.remove()
            }),
            r
        },
        Direction: function(t, e, n) {
            var i = {
                mount: function() {
                    this.value = t.settings.direction
                },
                resolve: function(t) {
                    var e = t.slice(0, 1);
                    return this.is("rtl") ? t.split(e).join(x[e]) : t
                },
                is: function(t) {
                    return this.value === t
                },
                addClass: function() {
                    e.Html.root.classList.add(t.settings.classes.direction[this.value])
                },
                removeClass: function() {
                    e.Html.root.classList.remove(t.settings.classes.direction[this.value])
                }
            };
            return p(i, "value", {
                get: function() {
                    return i._v
                },
                set: function(t) {
                    -1 < T.indexOf(t) ? i._v = t : u("Direction value must be `ltr` or `rtl`")
                }
            }),
            n.on(["destroy", "update"], function() {
                i.removeClass()
            }),
            n.on("update", function() {
                i.mount()
            }),
            n.on(["build.before", "update"], function() {
                i.addClass()
            }),
            i
        },
        Peek: function(n, t, e) {
            var i = {
                mount: function() {
                    this.value = n.settings.peek
                }
            };
            return p(i, "value", {
                get: function() {
                    return i._v
                },
                set: function(t) {
                    c(t) ? (t.before = y(t.before),
                    t.after = y(t.after)) : t = y(t),
                    i._v = t
                }
            }),
            p(i, "reductor", {
                get: function() {
                    var t = i.value
                      , e = n.settings.perView;
                    return c(t) ? t.before / e + t.after / e : 2 * t / e
                }
            }),
            e.on(["resize", "update"], function() {
                i.mount()
            }),
            i
        },
        Sizes: function(t, i, e) {
            var n = {
                setupSlides: function() {
                    for (var t = this.slideWidth + "px", e = i.Html.slides, n = 0; n < e.length; n++)
                        e[n].style.width = t
                },
                setupWrapper: function(t) {
                    i.Html.wrapper.style.width = this.wrapperSize + "px"
                },
                remove: function() {
                    for (var t = i.Html.slides, e = 0; e < t.length; e++)
                        t[e].style.width = "";
                    i.Html.wrapper.style.width = ""
                }
            };
            return p(n, "length", {
                get: function() {
                    return i.Html.slides.length
                }
            }),
            p(n, "width", {
                get: function() {
                    return i.Html.root.offsetWidth
                }
            }),
            p(n, "wrapperSize", {
                get: function() {
                    return n.slideWidth * n.length + i.Gaps.grow + i.Clones.grow
                }
            }),
            p(n, "slideWidth", {
                get: function() {
                    return n.width / t.settings.perView - i.Peek.reductor - i.Gaps.reductor
                }
            }),
            e.on(["build.before", "resize", "update"], function() {
                n.setupSlides(),
                n.setupWrapper()
            }),
            e.on("destroy", function() {
                n.remove()
            }),
            n
        },
        Gaps: function(e, o, t) {
            var n = {
                apply: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e].style
                          , r = o.Direction.value;
                        i[w[r][0]] = 0 !== e ? this.value / 2 + "px" : "",
                        e !== t.length - 1 ? i[w[r][1]] = this.value / 2 + "px" : i[w[r][1]] = ""
                    }
                },
                remove: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e].style;
                        i.marginLeft = "",
                        i.marginRight = ""
                    }
                }
            };
            return p(n, "value", {
                get: function() {
                    return y(e.settings.gap)
                }
            }),
            p(n, "grow", {
                get: function() {
                    return n.value * (o.Sizes.length - 1)
                }
            }),
            p(n, "reductor", {
                get: function() {
                    var t = e.settings.perView;
                    return n.value * (t - 1) / t
                }
            }),
            t.on(["build.after", "update"], b(function() {
                n.apply(o.Html.wrapper.children)
            }, 30)),
            t.on("destroy", function() {
                n.remove(o.Html.wrapper.children)
            }),
            n
        },
        Move: function(t, n, i) {
            var e = {
                mount: function() {
                    this._o = 0
                },
                make: function() {
                    var t = this
                      , e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.offset = e,
                    i.emit("move", {
                        movement: this.value
                    }),
                    n.Transition.after(function() {
                        i.emit("move.after", {
                            movement: t.value
                        })
                    })
                }
            };
            return p(e, "offset", {
                get: function() {
                    return e._o
                },
                set: function(t) {
                    e._o = f(t) ? 0 : y(t)
                }
            }),
            p(e, "translate", {
                get: function() {
                    return n.Sizes.slideWidth * t.index
                }
            }),
            p(e, "value", {
                get: function() {
                    var t = this.offset
                      , e = this.translate;
                    return n.Direction.is("rtl") ? e + t : e - t
                }
            }),
            i.on(["build.before", "run"], function() {
                e.make()
            }),
            e
        },
        Clones: function(h, v, t) {
            var e = {
                mount: function() {
                    this.items = [],
                    h.isType("carousel") && (this.items = this.collect())
                },
                collect: function() {
                    for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], e = v.Html.slides, n = h.settings, i = n.perView, r = n.classes, o = i + +!!h.settings.peek, s = e.slice(0, o), u = e.slice(-o), a = 0; a < Math.max(1, Math.floor(i / e.length)); a++) {
                        for (var c = 0; c < s.length; c++) {
                            var l = s[c].cloneNode(!0);
                            l.classList.add(r.cloneSlide),
                            t.push(l)
                        }
                        for (var f = 0; f < u.length; f++) {
                            var d = u[f].cloneNode(!0);
                            d.classList.add(r.cloneSlide),
                            t.unshift(d)
                        }
                    }
                    return t
                },
                append: function() {
                    for (var t = this.items, e = v.Html, n = e.wrapper, i = e.slides, r = Math.floor(t.length / 2), o = t.slice(0, r).reverse(), s = t.slice(r, t.length), u = v.Sizes.slideWidth + "px", a = 0; a < s.length; a++)
                        n.appendChild(s[a]);
                    for (var c = 0; c < o.length; c++)
                        n.insertBefore(o[c], i[0]);
                    for (var l = 0; l < t.length; l++)
                        t[l].style.width = u
                },
                remove: function() {
                    for (var t = this.items, e = 0; e < t.length; e++)
                        v.Html.wrapper.removeChild(t[e])
                }
            };
            return p(e, "grow", {
                get: function() {
                    return (v.Sizes.slideWidth + v.Gaps.value) * e.items.length
                }
            }),
            t.on("update", function() {
                e.remove(),
                e.mount(),
                e.append()
            }),
            t.on("build.before", function() {
                h.isType("carousel") && e.append()
            }),
            t.on("destroy", function() {
                e.remove()
            }),
            e
        },
        Resize: function(t, e, n) {
            var i = new H
              , r = {
                mount: function() {
                    this.bind()
                },
                bind: function() {
                    i.on("resize", window, b(function() {
                        n.emit("resize")
                    }, t.settings.throttle))
                },
                unbind: function() {
                    i.off("resize", window)
                }
            };
            return n.on("destroy", function() {
                r.unbind(),
                i.destroy()
            }),
            r
        },
        Build: function(n, i, t) {
            var e = {
                mount: function() {
                    t.emit("build.before"),
                    this.typeClass(),
                    this.activeClass(),
                    t.emit("build.after")
                },
                typeClass: function() {
                    i.Html.root.classList.add(n.settings.classes[n.settings.type])
                },
                activeClass: function() {
                    var e = n.settings.classes
                      , t = i.Html.slides[n.index];
                    t && (t.classList.add(e.activeSlide),
                    k(t).forEach(function(t) {
                        t.classList.remove(e.activeSlide)
                    }))
                },
                removeClasses: function() {
                    var e = n.settings.classes;
                    i.Html.root.classList.remove(e[n.settings.type]),
                    i.Html.slides.forEach(function(t) {
                        t.classList.remove(e.activeSlide)
                    })
                }
            };
            return t.on(["destroy", "update"], function() {
                e.removeClasses()
            }),
            t.on(["resize", "update"], function() {
                e.mount()
            }),
            t.on("move.after", function() {
                e.activeClass()
            }),
            e
        },
        Run: function(o, n, i) {
            var t = {
                mount: function() {
                    this._o = !1
                },
                make: function(t) {
                    var e = this;
                    o.disabled || (o.disable(),
                    this.move = t,
                    i.emit("run.before", this.move),
                    this.calculate(),
                    i.emit("run", this.move),
                    n.Transition.after(function() {
                        e.isStart() && i.emit("run.start", e.move),
                        e.isEnd() && i.emit("run.end", e.move),
                        (e.isOffset("<") || e.isOffset(">")) && (e._o = !1,
                        i.emit("run.offset", e.move)),
                        i.emit("run.after", e.move),
                        o.enable()
                    }))
                },
                calculate: function() {
                    var t = this.move
                      , e = this.length
                      , n = t.steps
                      , i = t.direction
                      , r = "number" == typeof y(n) && 0 !== y(n);
                    switch (i) {
                    case ">":
                        ">" === n ? o.index = e : this.isEnd() ? o.isType("slider") && !o.settings.rewind || (this._o = !0,
                        o.index = 0) : r ? o.index += Math.min(e - o.index, -y(n)) : o.index++;
                        break;
                    case "<":
                        "<" === n ? o.index = 0 : this.isStart() ? o.isType("slider") && !o.settings.rewind || (this._o = !0,
                        o.index = e) : r ? o.index -= Math.min(o.index, y(n)) : o.index--;
                        break;
                    case "=":
                        o.index = n;
                        break;
                    default:
                        u("Invalid direction pattern [" + i + n + "] has been used")
                    }
                },
                isStart: function() {
                    return 0 === o.index
                },
                isEnd: function() {
                    return o.index === this.length
                },
                isOffset: function(t) {
                    return this._o && this.move.direction === t
                }
            };
            return p(t, "move", {
                get: function() {
                    return this._m
                },
                set: function(t) {
                    var e = t.substr(1);
                    this._m = {
                        direction: t.substr(0, 1),
                        steps: e ? y(e) ? y(e) : e : 0
                    }
                }
            }),
            p(t, "length", {
                get: function() {
                    var t = o.settings
                      , e = n.Html.slides.length;
                    return o.isType("slider") && "center" !== t.focusAt && t.bound ? e - 1 - (y(t.perView) - 1) + y(t.focusAt) : e - 1
                }
            }),
            p(t, "offset", {
                get: function() {
                    return this._o
                }
            }),
            t
        },
        Swipe: function(d, h, v) {
            var n = new H
              , p = 0
              , m = 0
              , g = 0
              , i = !1
              , r = !!L && {
                passive: !0
            }
              , t = {
                mount: function() {
                    this.bindSwipeStart()
                },
                start: function(t) {
                    if (!i && !d.disabled) {
                        this.disable();
                        var e = this.touches(t);
                        p = null,
                        m = y(e.pageX),
                        g = y(e.pageY),
                        this.bindSwipeMove(),
                        this.bindSwipeEnd(),
                        v.emit("swipe.start")
                    }
                },
                move: function(t) {
                    if (!d.disabled) {
                        var e = d.settings
                          , n = e.touchAngle
                          , i = e.touchRatio
                          , r = e.classes
                          , o = this.touches(t)
                          , s = y(o.pageX) - m
                          , u = y(o.pageY) - g
                          , a = Math.abs(s << 2)
                          , c = Math.abs(u << 2)
                          , l = Math.sqrt(a + c)
                          , f = Math.sqrt(c);
                        if (!(180 * (p = Math.asin(f / l)) / Math.PI < n))
                            return !1;
                        t.stopPropagation(),
                        h.Move.make(s * parseFloat(i)),
                        h.Html.root.classList.add(r.dragging),
                        v.emit("swipe.move")
                    }
                },
                end: function(t) {
                    if (!d.disabled) {
                        var e = d.settings
                          , n = this.touches(t)
                          , i = this.threshold(t)
                          , r = n.pageX - m
                          , o = 180 * p / Math.PI
                          , s = Math.round(r / h.Sizes.slideWidth);
                        this.enable(),
                        i < r && o < e.touchAngle ? (e.perTouch && (s = Math.min(s, y(e.perTouch))),
                        h.Direction.is("rtl") && (s = -s),
                        h.Run.make(h.Direction.resolve("<" + s))) : r < -i && o < e.touchAngle ? (e.perTouch && (s = Math.max(s, -y(e.perTouch))),
                        h.Direction.is("rtl") && (s = -s),
                        h.Run.make(h.Direction.resolve(">" + s))) : h.Move.make(),
                        h.Html.root.classList.remove(e.classes.dragging),
                        this.unbindSwipeMove(),
                        this.unbindSwipeEnd(),
                        v.emit("swipe.end")
                    }
                },
                bindSwipeStart: function() {
                    var e = this
                      , t = d.settings;
                    t.swipeThreshold && n.on(M[0], h.Html.wrapper, function(t) {
                        e.start(t)
                    }, r),
                    t.dragThreshold && n.on(M[1], h.Html.wrapper, function(t) {
                        e.start(t)
                    }, r)
                },
                unbindSwipeStart: function() {
                    n.off(M[0], h.Html.wrapper, r),
                    n.off(M[1], h.Html.wrapper, r)
                },
                bindSwipeMove: function() {
                    var e = this;
                    n.on(C, h.Html.wrapper, b(function(t) {
                        e.move(t)
                    }, d.settings.throttle), r)
                },
                unbindSwipeMove: function() {
                    n.off(C, h.Html.wrapper, r)
                },
                bindSwipeEnd: function() {
                    var e = this;
                    n.on(P, h.Html.wrapper, function(t) {
                        e.end(t)
                    })
                },
                unbindSwipeEnd: function() {
                    n.off(P, h.Html.wrapper)
                },
                touches: function(t) {
                    return -1 < z.indexOf(t.type) ? t : t.touches[0] || t.changedTouches[0]
                },
                threshold: function(t) {
                    var e = d.settings;
                    return -1 < z.indexOf(t.type) ? e.dragThreshold : e.swipeThreshold
                },
                enable: function() {
                    return i = !1,
                    h.Transition.enable(),
                    this
                },
                disable: function() {
                    return i = !0,
                    h.Transition.disable(),
                    this
                }
            };
            return v.on("build.after", function() {
                h.Html.root.classList.add(d.settings.classes.swipeable)
            }),
            v.on("destroy", function() {
                t.unbindSwipeStart(),
                t.unbindSwipeMove(),
                t.unbindSwipeEnd(),
                n.destroy()
            }),
            t
        },
        Images: function(t, e, n) {
            var i = new H
              , r = {
                mount: function() {
                    this.bind()
                },
                bind: function() {
                    i.on("dragstart", e.Html.wrapper, this.dragstart)
                },
                unbind: function() {
                    i.off("dragstart", e.Html.wrapper)
                },
                dragstart: function(t) {
                    t.preventDefault()
                }
            };
            return n.on("destroy", function() {
                r.unbind(),
                i.destroy()
            }),
            r
        },
        Anchors: function(t, e, n) {
            var i = new H
              , r = !1
              , o = !1
              , s = {
                mount: function() {
                    this._a = e.Html.wrapper.querySelectorAll("a"),
                    this.bind()
                },
                bind: function() {
                    i.on("click", e.Html.wrapper, this.click)
                },
                unbind: function() {
                    i.off("click", e.Html.wrapper)
                },
                click: function(t) {
                    o && (t.stopPropagation(),
                    t.preventDefault())
                },
                detach: function() {
                    if (o = !0,
                    !r) {
                        for (var t = 0; t < this.items.length; t++)
                            this.items[t].draggable = !1,
                            this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")),
                            this.items[t].removeAttribute("href");
                        r = !0
                    }
                    return this
                },
                attach: function() {
                    if (o = !1,
                    r) {
                        for (var t = 0; t < this.items.length; t++)
                            this.items[t].draggable = !0,
                            this.items[t].setAttribute("href", this.items[t].getAttribute("data-href"));
                        r = !1
                    }
                    return this
                }
            };
            return p(s, "items", {
                get: function() {
                    return s._a
                }
            }),
            n.on("swipe.move", function() {
                s.detach()
            }),
            n.on("swipe.end", function() {
                e.Transition.after(function() {
                    s.attach()
                })
            }),
            n.on("destroy", function() {
                s.attach(),
                s.unbind(),
                i.destroy()
            }),
            s
        },
        Controls: function(i, e, t) {
            var n = new H
              , r = !!L && {
                passive: !0
            }
              , o = {
                mount: function() {
                    this._n = e.Html.root.querySelectorAll('[data-slider-el="controls[nav]"]'),
                    this._c = e.Html.root.querySelectorAll('[data-slider-el^="controls"]'),
                    this.addBindings()
                },
                setActive: function() {
                    for (var t = 0; t < this._n.length; t++)
                        this.addClass(this._n[t].children)
                },
                removeActive: function() {
                    for (var t = 0; t < this._n.length; t++)
                        this.removeClass(this._n[t].children)
                },
                addClass: function(t) {
                    var e = i.settings
                      , n = t[i.index];
                    n && (n.classList.add(e.classes.activeNav),
                    k(n).forEach(function(t) {
                        t.classList.remove(e.classes.activeNav)
                    }))
                },
                removeClass: function(t) {
                    var e = t[i.index];
                    e && e.classList.remove(i.settings.classes.activeNav)
                },
                addBindings: function() {
                    for (var t = 0; t < this._c.length; t++)
                        this.bind(this._c[t].children)
                },
                removeBindings: function() {
                    for (var t = 0; t < this._c.length; t++)
                        this.unbind(this._c[t].children)
                },
                bind: function(t) {
                    for (var e = 0; e < t.length; e++)
                        n.on("click", t[e], this.click),
                        n.on("touchstart", t[e], this.click, r)
                },
                unbind: function(t) {
                    for (var e = 0; e < t.length; e++)
                        n.off(["click", "touchstart"], t[e])
                },
                click: function(t) {
                    t.preventDefault(),
                    e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-slider-dir")))
                }
            };
            return p(o, "items", {
                get: function() {
                    return o._c
                }
            }),
            t.on(["mount.after", "move.after"], function() {
                o.setActive()
            }),
            t.on("destroy", function() {
                o.removeBindings(),
                o.removeActive(),
                n.destroy()
            }),
            o
        },
        Keyboard: function(t, e, n) {
            var i = new H
              , r = {
                mount: function() {
                    t.settings.keyboard && this.bind()
                },
                bind: function() {
                    i.on("keyup", document, this.press)
                },
                unbind: function() {
                    i.off("keyup", document)
                },
                press: function(t) {
                    39 === t.keyCode && e.Run.make(e.Direction.resolve(">")),
                    37 === t.keyCode && e.Run.make(e.Direction.resolve("<"))
                }
            };
            return n.on(["destroy", "update"], function() {
                r.unbind()
            }),
            n.on("update", function() {
                r.mount()
            }),
            n.on("destroy", function() {
                i.destroy()
            }),
            r
        },
        Autoplay: function(e, n, t) {
            var i = new H
              , r = {
                mount: function() {
                    this.start(),
                    e.settings.hoverpause && this.bind()
                },
                start: function() {
                    var t = this;
                    e.settings.autoplay && f(this._i) && (this._i = setInterval(function() {
                        t.stop(),
                        n.Run.make(">"),
                        t.start()
                    }, this.time))
                },
                stop: function() {
                    this._i = clearInterval(this._i)
                },
                bind: function() {
                    var t = this;
                    i.on("mouseover", n.Html.root, function() {
                        t.stop()
                    }),
                    i.on("mouseout", n.Html.root, function() {
                        t.start()
                    })
                },
                unbind: function() {
                    i.off(["mouseover", "mouseout"], n.Html.root)
                }
            };
            return p(r, "time", {
                get: function() {
                    var t = n.Html.slides[e.index].getAttribute("data-slider-autoplay");
                    return y(t || e.settings.autoplay)
                }
            }),
            t.on(["destroy", "update"], function() {
                r.unbind()
            }),
            t.on(["run.before", "pause", "destroy", "swipe.start", "update"], function() {
                r.stop()
            }),
            t.on(["run.after", "play", "swipe.end"], function() {
                r.start()
            }),
            t.on("update", function() {
                r.mount()
            }),
            t.on("destroy", function() {
                i.destroy()
            }),
            r
        },
        Breakpoints: function(t, e, n) {
            var i = new H
              , r = t.settings
              , o = j(r.breakpoints)
              , s = a({}, r)
              , u = {
                match: function(t) {
                    if (void 0 !== window.matchMedia)
                        for (var e in t)
                            if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches)
                                return t[e];
                    return s
                }
            };
            return a(r, u.match(o)),
            i.on("resize", window, b(function() {
                t.settings = h(r, u.match(o))
            }, t.settings.throttle)),
            n.on("update", function() {
                o = j(o),
                s = a({}, r)
            }),
            n.on("destroy", function() {
                i.off("resize", window)
            }),
            u
        }
    };
    return function(t) {
        function e() {
            return r(this, e),
            function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, m),
        o(e, [{
            key: "mount",
            value: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return function t(e, n, i) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === r) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : t(o, n, i)
                    }
                    if ("value"in r)
                        return r.value;
                    var s = r.get;
                    return void 0 !== s ? s.call(i) : void 0
                }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "mount", this).call(this, a({}, E, t))
            }
        }]),
        e
    }()
});
Splitting();
var Slide = function e(t) {
    classCallCheck(this, e),
    this.DOM = {
        el: t
    },
    this.DOM.chars = this.DOM.el.querySelectorAll(".word > .char, .whitespace"),
    this.DOM.imgs = this.DOM.el.querySelectorAll(".slide-img"),
    gsap.set(this.DOM.imgs, {
        opacity: 0
    }),
    gsap.set(this.DOM.chars, {
        y: "-100%",
        rotation: 5
    })
}
  , Slideshow = function() {
    function e() {
        var t = this;
        classCallCheck(this, e),
        this.DOM = {
            el: slideBanner
        },
        this.timeSlide = this.DOM.el.getAttribute("data-time"),
        this.DOM.navigation = {
            Prev: Background.querySelector(".slides-nav-prev"),
            Next: Background.querySelector(".slides-nav-next"),
            Stop: Background.querySelector(".stop"),
            Play: Background.querySelector(".play")
        },
        this.slides = [],
        this.Show = 0,
        this.goPlay = !1,
        toConsumableArray(this.DOM.el.querySelectorAll(".banner-slide")).forEach(function(e) {
            return t.slides.push(new Slide(e))
        }),
        this.slidesTotal = this.slides.length,
        this.positions = {
            x: {
                next: [0, -50, 0, -50],
                prev: [-50, 0, -50, 0]
            },
            y: {
                next: [50, 0, -50, 0],
                prev: [0, -50, 0, -50]
            }
        },
        this.onClickPrevEv = function() {
            clearInterval(t.Show),
            t.navigate("prev")
        }
        ,
        this.onClickNextEv = function() {
            clearInterval(t.Show),
            t.navigate("next")
        }
        ,
        this.DOM.navigation.Prev.addEventListener("click", function() {
            return t.onClickPrevEv(),
            !1
        }),
        this.DOM.navigation.Next.addEventListener("click", function() {
            return t.onClickNextEv(),
            !1
        }),
        this.DOM.navigation.Stop.addEventListener("click", function() {
            clearInterval(t.Show),
            t.goPlay = !1
        }),
        this.DOM.navigation.Play.addEventListener("click", function() {
            clearInterval(t.Show),
            t.DOM.navigation.Next.click()
        }),
        this.onScroll = function(e) {
            if (0 < Math.sign(e.deltaY)) {
                if (!doWheel)
                    return;
                doWheel = !1,
                clearInterval(this.Show),
                this.DOM.navigation.Next.click(),
                setTimeout(turnWheelTouch, 800)
            } else {
                if (!doWheel)
                    return;
                doWheel = !1,
                clearInterval(this.Show),
                this.DOM.navigation.Prev.click(),
                setTimeout(turnWheelTouch, 800)
            }
        }
        ,
        this.DOM.el.addEventListener("wheel", this.onScroll.bind(this), {
            passive: !0
        }),
        this.DOM.el.addEventListener("swiped-left", this.onClickNextEv.bind(this), {
            passive: !0
        }),
        this.DOM.el.addEventListener("swiped-right", this.onClickPrevEv.bind(this), {
            passive: !0
        })
    }
    return createClass(e, [{
        key: "StartTimer",
        value: function() {
            var e = this;
            if (1 == this.goPlay) {
                e.Show = setInterval(function() {
                    e.DOM.navigation.Next.click(),
                    clearInterval(e.Show)
                }, e.timeSlide)
            }
        }
    }, {
        key: "aniStart",
        value: function() {
            var t = this
              , e = Math.floor(Math.random() * t.slides.length)
              , i = this.slides[e];
            if (t.RemoveCurrent(),
            i.DOM.el.classList.add("slide-current"),
            !document.querySelector(".slide-current .slide-img-1 .slide-img").classList.contains("loadedx"))
                new LazyLoad({
                    elements_selector: ".slide-current .slide-img.lazy"
                });
            gsap.timeline({
                force3D: !0,
                onComplete: function() {
                    enterFill.style.setProperty("--color-bg", "var(--color-bg".concat(e + 1, ")")),
                    t.DOM.el.style.setProperty("--color-bg", "var(--color-bg".concat(e + 1, ")")),
                    t.AddClass(),
                    Home.classList.contains("activated") && !navClick.classList.contains("open-click") && (t.goPlay = !0,
                    1 < t.slides.length && t.StartTimer())
                }
            }).to(i.DOM.imgs, {
                duration: .8,
                startAt: {
                    x: function(e) {
                        return "".concat(t.positions.x[t.reverseDirection(t)][e], "%")
                    },
                    y: function(e) {
                        return "".concat(t.positions.y[t.reverseDirection(t)][e], "%")
                    }
                },
                x: "0%",
                y: "0%",
                opacity: 1,
                ease: "power4.inOut",
                stagger: .1
            })
        }
    }, {
        key: "AddClass",
        value: function() {
            slideBanner.querySelectorAll(".slide-current .pic-img").forEach(function(e) {
                e.classList.add("show")
            })
        }
    }, {
        key: "RemoveClass",
        value: function() {
            slideBanner.querySelectorAll(".pic-img").forEach(function(e) {
                e.classList.remove("show")
            })
        }
    }, {
        key: "RemoveCurrent",
        value: function() {
            slideBanner.querySelectorAll(".banner-slide").forEach(function(e) {
                e.classList.remove("slide-current")
            })
        }
    }, {
        key: "navigate",
        value: function(t) {
            var i = this;
            if (this.isAnimating)
                return !1;
            var e = slideBanner.querySelector(".slide-current");
            this.current = Array.from(slideBanner.querySelectorAll(".banner-slide")).indexOf(e);
            var n = this.slides[this.current];
            this.current2 = "next" === t ? this.current < this.slidesTotal - 1 ? ++this.current : 0 : 0 < this.current ? --this.current : this.slidesTotal - 1;
            var s = this.slides[this.current2];
            clearInterval(i.Show),
            gsap.timeline({
                defaults: {
                    duration: .8,
                    ease: "power4.inOut",
                    force3D: !0
                },
                onStart: function() {
                    return i.goPlay = !1,
                    i.isAnimating = !0
                },
                onComplete: function() {
                    enterFill.style.setProperty("--color-bg", "var(--color-bg".concat(i.current2 + 1, ")")),
                    i.DOM.el.style.setProperty("--color-bg", "var(--color-bg".concat(i.current2 + 1, ")")),
                    i.isAnimating = !1,
                    gsap.to(s.DOM.chars, {
                        opacity: 0
                    }),
                    i.AddClass(),
                    Home.classList.contains("activated") && !navClick.classList.contains("open-click") && (i.goPlay = !0,
                    i.StartTimer())
                }
            }).addLabel("start", 0).to(n.DOM.chars, {
                y: "next" === t ? "100%" : "-100%",
                rotation: "next" === t ? 5 : -5,
                stagger: "next" === t ? -.015 : .015
            }, "start").to(n.DOM.imgs, {
                x: function(e) {
                    return "".concat(i.positions.x[t][e], "%")
                },
                y: function(e) {
                    return "".concat(i.positions.y[t][e], "%")
                },
                opacity: 0
            }, "start").addLabel("upcoming", .5).add(function() {
                gsap.set(s.DOM.imgs, {
                    opacity: 0
                }),
                gsap.set(s.DOM.chars, {
                    y: "next" === t ? "-100%" : "100%",
                    rotation: "next" === t ? 5 : -5,
                    opacity: 1
                }),
                i.RemoveClass(),
                i.RemoveCurrent(),
                s.DOM.el.classList.add("slide-current");
                new LazyLoad({
                    elements_selector: ".slide-current .slide-img.lazy"
                })
            }, "upcoming").to(s.DOM.chars, {
                y: "0%",
                rotation: 0,
                ease: "power4.inOut",
                stagger: "next" === t ? -.03 : .03
            }, "upcoming").to(s.DOM.imgs, {
                startAt: {
                    x: function(e) {
                        return "".concat(i.positions.x[i.reverseDirection(t)][e], "%")
                    },
                    y: function(e) {
                        return "".concat(i.positions.y[i.reverseDirection(t)][e], "%")
                    }
                },
                x: "0%",
                y: "0%",
                opacity: 1,
                delay: 1.3,
                ease: "power4.inOut",
                stagger: .1
            }, "upcoming")
        }
    }, {
        key: "reverseDirection",
        value: function(e) {
            return "next" === e ? "prev" : "next"
        }
    }]),
    e
}()
  , AniBanner = new Slideshow;
var httpserver = document.querySelector(".httpserver").innerHTML
  , httptemplate = document.querySelector(".httptemplate").innerHTML
  , LenghtID = document.getElementById("tmp_project_id");
if (LenghtID)
    var idProject = LenghtID.innerHTML;
function ResizeWindows() {
    Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile")
}
function AddDisplay(e) {
    for (var t = 0; t < e.length; t++)
        e[t].classList.add("display-none")
}
function RemoveDisplay(e) {
    for (var t = 0; t < e.length; t++)
        e[t].classList.remove("display-none")
}
function RemoveClass(e) {
    for (var t = 0; t < e.length; t++)
        e[t].classList.remove("active"),
        e[t].classList.remove("active-next"),
        e[t].classList.remove("active-prev"),
        e[t].classList.remove("current"),
        e[t].classList.remove("current-move")
}
function ClassRemove() {
    gsap.set(Body, {
        scrollTop: 0
    }),
    slideNav.classList.remove("show"),
    EnterSite.classList.remove("show"),
    goTop.classList.remove("show"),
    goDown.classList.remove("aniscroll"),
    goDown.classList.add("fadeoff", "display-none"),
    Logo.classList.remove("hide")
}
function makeGoto() {
    var e = document.querySelectorAll(".bg-nav")
      , t = e[Math.floor(Math.random() * e.length)];
    RemoveClass(e),
    t.classList.add("active");
    var o = ["style-1", "style-2", "style-3", "style-4", "style-5"]
      , n = Math.floor(Math.random() * o.length);
    PathBg.removeAttribute("class"),
    PathBg.classList.add(o[n])
}
function ScrollBody() {
    Mobile.matches ? document.querySelector(".center").classList.contains("scroll-content") && (document.querySelector(".center").classList.remove("scroll-content"),
    document.querySelector(".center").style.transform = "translate3d(0,0,0)") : (document.querySelector(".center").classList.add("scroll-content"),
    scrollTranslate())
}
makeGoto(),
gsap.to(loadIcon, {
    duration: .1,
    opacity: 1,
    ease: "none",
    onComplete: function() {
        loadIcon.classList.remove("display-none")
    }
}),
document.addEventListener("beforeunload", function() {
    window.scrollTo(0, 0)
}),
gsap.config({
    nullTargetWarn: !1
});
var warn = console.warn;
function slideBar() {
    navClick.addEventListener("click", function(e) {
        if (e.preventDefault(),
        navClick.classList.contains("close-details")) {
            DetailLoad.classList.contains("firstshow") && (DetailLoad.classList.remove("firstshow"),
            document.getElementById("tmp_project_id").innerHTML = 0);
            var t = document.documentElement.scrollTop
              , o = document.querySelector(".page > header");
            Container.classList.remove("blur-content"),
            Content.classList.add("outright"),
            scrollDown.classList.remove("aniscroll"),
            HTML.classList.remove("no-scroll"),
            Body.classList.remove("no-scroll"),
            navClick.classList.remove("close-details");
            var n = MainMenu.querySelector(".nav-item.current a")
              , a = n.href
              , s = n.parentElement.querySelector(".link-change-url").dataset.title
              , r = n.parentElement.querySelector(".link-change-url").dataset.keyword
              , l = n.parentElement.querySelector(".link-change-url").dataset.description
              , i = n.dataset.name;
            if (titlePage.innerHTML = s,
            "home-page" == n.dataset.name ? changeUrl(a, s, l, r, i, s, l, document.querySelector(".alternate-hl-home")) : changeUrl(a, s, l, r, i, s, l, document.querySelector(".alternate-hl")),
            smoothDetails(null),
            Mobile.matches || ScrollBody(),
            Mobile.matches)
                var c = .6;
            else
                c = .8;
            gsap.to(Content, {
                duration: .5,
                opacity: 0,
                delay: c,
                ease: "none",
                onComplete: function() {
                    var e = Content.querySelector(".content-details");
                    e && (e.remove(),
                    DetailLoad.scrollTop = 0),
                    goTopDetails.classList.remove("show"),
                    DetailLoad.classList.remove("show"),
                    Content.classList.remove("show", "outright"),
                    scrollDown.classList.remove("fadeoff"),
                    Logo.classList.remove("on-detail"),
                    o.classList.remove("hide"),
                    gsap.delayedCall(.1, function() {
                        Logo.classList.add("on-click"),
                        150 <= t ? Logo.classList.add("hide") : Logo.classList.remove("hide")
                    })
                }
            })
        } else
            navClick.classList.contains("open-click") ? (navClick.classList.remove("open-click"),
            window.requestAnimationFrame(Collapse)) : (Navigation.scrollTop = 0,
            Navigation.classList.add("open-nav"),
            navClick.classList.add("open-click"),
            HTML.classList.add("no-scroll"),
            Body.classList.add("no-scroll"),
            makeGoto(),
            Home.classList.contains("activated") && Stop.click(),
            window.requestAnimationFrame(Expand));
        return !1
    })
}
console.warn = function() {}
;
var Expand = function e() {
    gsap.to(PathBg, {
        duration: .2,
        opacity: 1,
        ease: "none",
        onComplete: function() {
            PathD.forEach(function(e) {
                var t = e.getAttribute("pathshow");
                gsap.to(e, {
                    duration: .6,
                    attr: {
                        d: t
                    },
                    delay: RanDom(-.05, .23),
                    ease: "expo.out",
                    onComplete: function() {
                        gsap.to(Gohome, {
                            duration: .3,
                            opacity: 1,
                            ease: "none"
                        }),
                        gsap.to(ClickLang, {
                            duration: .3,
                            opacity: 1,
                            ease: "none"
                        }),
                        BoxSpan.forEach(function(e) {
                            gsap.set(e, {
                                opacity: 0
                            }),
                            gsap.to(e, {
                                duration: .3,
                                opacity: 1,
                                delay: RanDom(.01, .6),
                                ease: "none",
                                stagger: {
                                    each: .3
                                }
                            })
                        })
                    }
                })
            })
        }
    }),
    window.cancelAnimationFrame(e)
}
  , Collapse = function e() {
    BoxSpan.forEach(function(e) {
        gsap.to(e, {
            duration: .2,
            opacity: 0,
            delay: 0,
            ease: "none",
            stagger: {
                each: .1
            }
        })
    }),
    gsap.to(ClickLang, {
        duration: .3,
        opacity: 0,
        ease: "none"
    }),
    gsap.to(Gohome, {
        duration: .3,
        opacity: 0,
        ease: "none"
    }),
    PathD.forEach(function(e) {
        var t = e.getAttribute("pathhide");
        gsap.to(e, {
            duration: .6,
            attr: {
                d: t
            },
            delay: 0,
            ease: "expo.in",
            onComplete: function() {
                Navigation.classList.remove("open-nav"),
                navClick.classList.remove("open-click"),
                Home.classList.contains("inactive") ? (HTML.classList.remove("no-scroll"),
                Body.classList.remove("no-scroll")) : Home.classList.contains("activated") && (AniBanner = new Slideshow,
                AniBanner.aniStart()),
                gsap.to(PathBg, {
                    duration: .2,
                    opacity: 0,
                    ease: "none"
                })
            }
        })
    }),
    window.cancelAnimationFrame(e)
};
function Done() {
    navClick.style.display = "block",
    slideBar(),
    ContentLoad(),
    gsap.to([Logo, navClick, Bottom], {
        duration: .5,
        opacity: 1,
        ease: "none"
    })
}
if (LenghtID && 0 < idProject) {
    DetailLoad.classList.add("firstshow");
    var tmpUrl = NaItems[3].querySelector(".link-page").href
      , Name = NaItems[3].querySelector(".link-page").dataset.name;
    WinLoad(tmpUrl, Name, idProject),
    Done()
} else
    Done();
function Details(s, c) {
    var l = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    l.open("GET", s, !0),
    l.onreadystatechange = function() {
        if (4 == l.readyState && 200 == l.status) {
            Content.innerHTML = l.responseText;
            var e = document.querySelector('.item-content-box[data-projectid="' + c + '"] .des-pro')
              , t = e.getAttribute("data-title")
              , o = e.getAttribute("data-keyword")
              , n = e.getAttribute("data-description")
              , a = s
              , i = c;
            if (titlePage.innerHTML = t,
            changeUrl(a, t, n, o, i, t, n, document.querySelector(".alternate-hl-project")),
            DetailLoad.scrollTop = 0,
            Option(),
            !document.querySelector(".content-details .first img").classList.contains("loadedx"))
                (new LazyLoad).update();
            gsap.to(Content, {
                duration: .3,
                opacity: 1,
                ease: "none",
                onComplete: function() {
                    if (Content.classList.add("show"),
                    setTimeout(function() {
                        if (scrollDown.classList.remove("fadeoff"),
                        scrollDown.classList.add("aniscroll"),
                        DetailLoad.classList.contains("firstshow")) {
                            var e = document.querySelector(".image-banner").offsetHeight
                              , t = Container.querySelector('.item-content-box[data-projectid="' + c + '"]').offsetTop + e;
                            gsap.to("html", {
                                duration: 0,
                                scrollTop: t,
                                ease: "none",
                                onComplete: function() {
                                    HTML.classList.add("no-scroll"),
                                    Body.classList.add("no-scroll"),
                                    gsap.to(Container, {
                                        duration: .6,
                                        opacity: 1,
                                        ease: "none",
                                        onComplete: function() {
                                            textAni()
                                        }
                                    }),
                                    Logo.classList.contains("hide") && Logo.classList.remove("hide")
                                }
                            })
                        }
                    }, 1e3),
                    gsap.to(loadIcon, {
                        duration: .5,
                        opacity: 0,
                        ease: "none",
                        onComplete: function() {
                            loadIcon.classList.add("display-none"),
                            NextPrev(),
                            Logo.classList.contains("on-click") ? (Logo.classList.add("on-detail"),
                            Logo.classList.remove("on-click", "hide")) : (Logo.classList.add("on-detail"),
                            Logo.classList.remove("hide")),
                            Mobile.matches || GetCursor()
                        }
                    }),
                    1 != isSafari && 1 != isEdge) {
                        var e = Content.querySelector(".content-details");
                        setTimeout(function() {
                            smoothDetails(e)
                        }, 300)
                    }
                }
            })
        }
    }
    ,
    l.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    l.send()
}
function NextPrev() {
    var e = document.querySelector(".click-prev")
      , t = document.querySelector(".click-next")
      , o = e.querySelector("span")
      , n = t.querySelector("span")
      , a = document.querySelector(".image-banner").offsetHeight
      , i = document.querySelectorAll(".item-content-box")
      , s = document.querySelector(".item-content-box:first-child")
      , c = document.querySelector(".item-content-box:last-child")
      , l = document.querySelector(".item-content-box.active")
      , r = Array.from(document.querySelectorAll(".item-content-box")).indexOf(l)
      , d = r + 1
      , u = r - 1;
    if (c.classList.contains("active") || s.classList.contains("active")) {
        if (s.classList.contains("active")) {
            i[d].classList.add("active-next"),
            p = document.querySelector(".active-next .pic img");
            n.style.backgroundImage = "url(" + p.getAttribute("data-src") + ")"
        } else if (c.classList.contains("active")) {
            i[u].classList.add("active-prev"),
            m = document.querySelector(".active-prev .pic img");
            o.style.backgroundImage = "url(" + m.getAttribute("data-src") + ")"
        }
    } else {
        i[d].classList.add("active-next"),
        i[u].classList.add("active-prev");
        var p = document.querySelector(".active-next .pic img")
          , m = document.querySelector(".active-prev .pic img");
        n.style.backgroundImage = "url(" + p.getAttribute("data-src") + ")",
        o.style.backgroundImage = "url(" + m.getAttribute("data-src") + ")"
    }
    if (null == p ? t.classList.add("disable") : null == m ? e.classList.add("disable") : (t.classList.remove("disable"),
    e.classList.remove("disable")),
    Mobile.matches)
        var f = .8;
    else
        f = 1;
    t.addEventListener("click", function(e) {
        e.preventDefault(),
        navClick.click(),
        gsap.to(loadIcon, {
            duration: .1,
            opacity: 1,
            ease: "none",
            onComplete: function() {
                loadIcon.classList.remove("display-none")
            }
        });
        var t = document.querySelector(".active-next .client-view")
          , o = document.querySelector(".active-next").offsetTop + a;
        return gsap.to("html", {
            duration: f,
            scrollTop: o,
            ease: "none",
            delay: .3,
            onComplete: function() {
                setTimeout(function() {
                    t.click()
                }, 300),
                goTop.classList.remove("show"),
                goTopDetails.classList.remove("show")
            }
        }),
        !1
    }),
    e.addEventListener("click", function(e) {
        e.preventDefault(),
        navClick.click(),
        gsap.to(loadIcon, {
            duration: .1,
            opacity: 1,
            ease: "none",
            onComplete: function() {
                loadIcon.classList.remove("display-none")
            }
        });
        var t = document.querySelector(".active-prev .client-view")
          , o = document.querySelector(".active-prev").offsetTop + a;
        return gsap.to("html", {
            duration: f,
            scrollTop: o,
            ease: "none",
            delay: .3,
            onComplete: function() {
                setTimeout(function() {
                    t.click()
                }, 300),
                goTop.classList.remove("show"),
                goTopDetails.classList.remove("show")
            }
        }),
        !1
    })
}
function OpenDetail(e) {
    gsap.to(loadIcon, {
        duration: .1,
        opacity: 1,
        ease: "none",
        onComplete: function() {
            loadIcon.classList.remove("display-none")
        }
    });
    var t = document.querySelector(".page > header")
      , o = document.querySelectorAll(".item-content-box");
    RemoveClass(o),
    e.parentNode.classList.add("active"),
    navClick.classList.add("close-details"),
    t.classList.add("hide"),
    DetailLoad.scrollTop = 0,
    Container.classList.add("blur-content");
    var n = e.getAttribute("href")
      , a = e.getAttribute("data-name");
    return HTML.classList.add("no-scroll"),
    Body.classList.add("no-scroll"),
    DetailLoad.classList.add("show"),
    Details(n, a),
    !1
}
function WinLoad(e, o, n) {
    var a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    a.open("GET", e, !0),
    a.onreadystatechange = function() {
        if (4 == a.readyState && 200 == a.status) {
            Container.innerHTML = a.responseText,
            AddDisplay(slideImg),
            document.documentElement.scrollTop = 0,
            HTML.classList.remove("no-scroll"),
            Body.classList.remove("no-scroll", "scroll-top");
            var e = document.querySelector(".page");
            if (e && e.classList.add("currentpage"),
            Mobile.matches || GetCursor(),
            ScrollBody(),
            Container.querySelectorAll(".link-other button").forEach(function(e) {
                e.addEventListener("click", function(e) {
                    e.preventDefault(),
                    gsap.to(Container, {
                        duration: .5,
                        opacity: 0,
                        ease: "none",
                        onComplete: function() {
                            NaItems[3].querySelector(".link-page").click()
                        }
                    })
                })
            }),
            "client-page" == o) {
                if (!document.querySelector(".item-content-box:nth-child(1) .pic img").classList.contains("loadedx"))
                    new LazyLoad({
                        elements_selector: ".item-small.lazy"
                    });
                if (document.querySelectorAll(".client-view").forEach(function(t, e) {
                    t.addEventListener("click", function(e) {
                        e.preventDefault(),
                        OpenDetail(t)
                    })
                }),
                null !== document.getElementById("logoclient")) {
                    var t = document.querySelector(".client-logo");
                    SlideLogo(t)
                }
            }
            if ("contact-page" == o && canvasAni(),
            document.querySelector(".text-banner") && (document.querySelectorAll(".wrapbox").forEach(function(e) {
                var t = e.querySelector(".thisbox").cloneNode(!0);
                e.querySelector(".boxes").append(t)
            }),
            ResizeX()),
            null == n || 0 == n)
                gsap.to(Container, {
                    duration: .6,
                    opacity: 1,
                    ease: "none",
                    onComplete: function() {
                        textAni();
                        var e = MainMenu.querySelector(".nav-item.current a")
                          , t = e.href
                          , o = e.parentElement.querySelector(".link-change-url").dataset.title
                          , n = e.parentElement.querySelector(".link-change-url").dataset.keyword
                          , a = e.parentElement.querySelector(".link-change-url").dataset.description
                          , i = e.dataset.name;
                        titlePage.innerHTML = o,
                        changeUrl(t, o, a, n, i, o, a, document.querySelector(".alternate-hl")),
                        setTimeout(function() {
                            goDown.classList.remove("fadeoff", "display-none"),
                            goDown.classList.add("aniscroll")
                        }, 2e3),
                        gsap.to(loadIcon, {
                            duration: .3,
                            opacity: 0,
                            ease: "none",
                            onComplete: function() {
                                loadIcon.classList.add("display-none")
                            }
                        })
                    }
                });
            else if (DetailLoad.classList.contains("firstshow"))
                Container,
                Container.querySelector('.item-content-box[data-projectid="' + n + '"] a').click()
        }
    }
    ,
    a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    a.send()
}
function ContentLoad() {
    Gopage.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault(),
            navClick.classList.contains("open-click") && window.requestAnimationFrame(Collapse),
            ClassRemove(),
            RemoveClass(NaItems),
            Stop.click(),
            navClick.classList.remove("open-click"),
            Logo.classList.add("on-click"),
            Home.classList.remove("activated"),
            Home.classList.add("inactive"),
            gsap.set(Background, {
                opacity: 0
            }),
            gsap.killTweensOf(".slide-img"),
            gsap.killTweensOf(".word > .char"),
            slideBanner.querySelectorAll(".banner-slide").forEach(function(e) {
                e.classList.remove("slide-current")
            }),
            gsap.to(loadIcon, {
                duration: .3,
                opacity: 1,
                ease: "none",
                onComplete: function() {
                    loadIcon.classList.remove("display-none")
                }
            }),
            this.parentNode.classList.add("current");
            var t = this.href
              , o = this.dataset.name
              , n = Container.querySelector(".page");
            return gsap.killTweensOf(".boxes"),
            gsap.to(Container, {
                duration: .5,
                opacity: 0,
                ease: "none",
                onComplete: function() {
                    n && n.remove(),
                    WinLoad(t, o, 0)
                }
            }),
            !1
        })
    }),
    Gohome.addEventListener("click", function(e) {
        e.preventDefault(),
        navClick.classList.contains("open-click") && window.requestAnimationFrame(Collapse),
        ClassRemove(),
        RemoveClass(NaItems),
        RemoveDisplay(slideImg),
        this.parentNode.classList.add("current");
        var t = this.dataset.name
          , o = this.href
          , n = this.parentElement.querySelector(".link-change-url").dataset.title
          , a = this.parentElement.querySelector(".link-change-url").dataset.keyword
          , i = this.parentElement.querySelector(".link-change-url").dataset.description;
        titlePage.innerHTML = n,
        Logo.classList.remove("on-click"),
        Home.classList.remove("inactive"),
        Home.classList.add("activated");
        var s = Container.querySelector(".page");
        return s && (gsap.killTweensOf(".boxes"),
        gsap.to(Container, {
            duration: .3,
            opacity: 0,
            ease: "none",
            onComplete: function() {
                document.documentElement.scrollTop = 0,
                s.remove()
            }
        })),
        gsap.to(Background, {
            duration: .5,
            opacity: 1,
            ease: "none",
            onComplete: function() {
                null == document.querySelector(".slide-current") && AniBanner.aniStart(),
                Mobile.matches || (GetCursor(),
                slideNav.classList.add("show")),
                gsap.to(loadIcon, {
                    duration: .3,
                    opacity: 0,
                    ease: "none",
                    onComplete: function() {
                        loadIcon.classList.add("display-none"),
                        EnterSite.classList.add("show"),
                        HTML.classList.add("no-scroll"),
                        Body.classList.add("no-scroll"),
                        Mobile.matches || GetEnter()
                    }
                })
            }
        }),
        !1
    }),
    LenghtID && 0 != idProject || (CurrentPgae ? CurrentPgae.click() : NormalPage.click()),
    Option()
}
function Option() {
    Logo.addEventListener("click", function(e) {
        e.preventDefault(),
        Gohome.click()
    }),
    Languge.addEventListener("click", function() {
        Stop.click(),
        window.requestAnimationFrame(Collapse),
        gsap.to([Container, Home], {
            duration: .5,
            opacity: 0,
            ease: "none"
        })
    }),
    goDown.addEventListener("click", function(e) {
        e.preventDefault(),
        gsap.to("html", {
            duration: 1,
            scrollTop: window.innerHeight,
            ease: "none"
        })
    }),
    goTop.addEventListener("click", function(e) {
        e.preventDefault(),
        gsap.to("html", {
            duration: 1,
            scrollTop: 0,
            ease: "none"
        })
    }),
    EnterSite.addEventListener("click", function(e) {
        e.preventDefault(),
        Stop.click(),
        AniBanner.navigate("prev"),
        gsap.to(Background, {
            duration: .5,
            opacity: 0,
            ease: "none",
            onComplete: function() {
                NaItems[3].querySelector(".link-page").click()
            }
        })
    }),
    scrollDown.addEventListener("click", function(e) {
        e.preventDefault(),
        gsap.to(DetailLoad, {
            duration: .6,
            scrollTop: window.innerHeight,
            ease: "none"
        })
    }),
    goTopDetails.addEventListener("click", function(e) {
        e.preventDefault(),
        gsap.to(DetailLoad, {
            duration: .6,
            scrollTop: 0,
            ease: "none"
        })
    }),
    DetailLoad.addEventListener("scroll", function() {
        var e = DetailLoad.scrollTop;
        20 < e ? Logo.classList.add("hide") : Logo.classList.remove("hide"),
        50 <= e ? 1024 < window.innerWidth && scrollDown.classList.contains("aniscroll") && (scrollDown.classList.remove("aniscroll"),
        scrollDown.classList.add("fadeoff")) : 1024 < window.innerWidth && scrollDown.classList.contains("fadeoff") && (scrollDown.classList.remove("fadeoff"),
        scrollDown.classList.add("aniscroll")),
        e > window.innerHeight + 100 ? 1024 < window.innerWidth && goTopDetails.classList.add("show") : 1024 < window.innerWidth && goTopDetails.classList.remove("show")
    }, {
        passive: !0
    })
}
function ResizeX() {
    var e = document.querySelector("#loop3 .boxes").offsetWidth;
    document.querySelector("#loop3").style.transform = "translate3d(" + -e / 2 + "px,0,0)"
}
window.addEventListener("scroll", function(e) {
    var t = window.pageYOffset;
    50 <= t ? 1024 < window.innerWidth && goDown.classList.contains("aniscroll") && (goDown.classList.remove("aniscroll"),
    goDown.classList.add("fadeoff")) : 1024 < window.innerWidth && goDown.classList.contains("fadeoff") && (goDown.classList.remove("fadeoff"),
    goDown.classList.add("aniscroll")),
    t > window.innerHeight + 100 ? goTop.classList.add("show") : goTop.classList.remove("show"),
    20 < t ? (DetailLoad.classList.contains("firstshow") || Logo.classList.add("hide"),
    navClick.classList.add("black-color")) : (Logo.classList.remove("hide"),
    navClick.classList.remove("black-color")),
    100 <= t ? null !== addBtn && addBtn.classList.contains("show") && null !== deferredPrompt && addBtn.classList.add("hide") : null !== addBtn && addBtn.classList.contains("show") && null !== deferredPrompt && addBtn.classList.remove("hide")
}, {
    passive: !0
}),
window.addEventListener("keydown", function(e) {
    var t = document.querySelector(".content-details")
      , o = e.keyCode || e.which;
    if (navClick.classList.contains("open-click") ? 27 == o && (e.preventDefault(),
    window.requestAnimationFrame(Collapse)) : navClick.classList.contains("close-details") && 27 == o && (e.preventDefault(),
    navClick.click()),
    38 == o && (e.preventDefault(),
    t ? DetailLoad.scrollTop -= 40 : document.documentElement.scrollTop -= 40),
    40 == o && (e.preventDefault(),
    t ? DetailLoad.scrollTop += 40 : document.documentElement.scrollTop += 40),
    39 == o && (e.preventDefault(),
    t)) {
        var n = document.querySelector(".click-next");
        if (n.classList.contains("disable"))
            return;
        n.click()
    }
    if (37 == o && (e.preventDefault(),
    t)) {
        var a = document.querySelector(".click-prev");
        if (a.classList.contains("disable"))
            return;
        a.click()
    }
    13 == o && (e.preventDefault(),
    Home.classList.contains("activated") && document.querySelector(".enter-site").click())
}),
window.addEventListener("resize", debounce(function() {
    if (ResizeWindows(),
    Home.classList.contains("activated") ? Mobile.matches || GetEnter() : ScrollBody(),
    DetailLoad.classList.contains("show")) {
        if (1 == isSafari || 1 == isEdge)
            return;
        smoothDetails()
    }
}, 250)),
window.onpopstate = function(e) {
    e.preventDefault();
    var t = document.querySelector(".httpserver").innerHTML
      , o = document.URL
      , n = document.querySelector(".content-details");
    if (null == history.state)
        Gohome.click();
    else {
        var a = history.state.path
          , i = (history.state.dataName,
        history.state.title,
        a.replace(t, "").split("/"));
        if ("" != i[2] && null != i[2])
            document.querySelector('.client-view[href= "' + o + '"]').click();
        else
            null !== n && navClick.classList.contains("close-details") ? navClick.click() : Gopage.forEach(function(e) {
                e.href != o || navClick.classList.contains("close-details") || e.click()
            })
    }
}
;
var textAni = function() {
    var e = document.querySelector(".image-banner")
      , r = document.querySelector(".object-icon")
      , o = document.querySelector(".pause-text")
      , n = document.querySelector(".play-text");
    function t(e, t, o) {
        return gsap.timeline().to(e, {
            x: o,
            duration: t,
            ease: "none",
            repeat: -1,
            paused: !1
        })
    }
    var a = gsap.timeline().add(t("#loop1 .boxes", 45, "-50%"), 1).add(t("#loop2 .boxes", 25, "-50%"), 1.3).add(t("#loop3 .boxes", 35, "50%"), 1.6);
    o.addEventListener("click", function() {
        a.pause()
    }),
    n.addEventListener("click", function() {
        a.play()
    }),
    window.addEventListener("resize", function() {
        document.querySelector("#loop3 .boxes") && !Home.classList.contains("activated") && (ResizeX(),
        o.click(),
        setTimeout(function() {
            window.pageYOffset < window.innerHeight && n.click()
        }, 250))
    }),
    window.addEventListener("scroll", function(e) {
        var t = window.pageYOffset;
        document.querySelector(".text-banner") && (t > window.innerHeight / 2 ? o.click() : n.click())
    }, {
        passive: !0
    }),
    e.addEventListener("mousemove", function(e) {
        var t = r.offsetWidth
          , o = r.offsetHeight
          , n = e.clientX
          , a = e.clientY
          , i = t - window.innerWidth
          , s = o - window.innerHeight
          , c = n / i * -.08 * i
          , l = a / s * -.12 * s;
        gsap.to(r, 3, {
            x: c,
            y: l,
            force3D: !0
        })
    })
}
  , canvasAni = function() {
    function a(e, t) {
        return (e = e || 0) + ((t = t || 1) - e) * Math.random()
    }
    var t = document.querySelector(".canvas-ani canvas").offsetHeight;
    speed = .18;
    var o = document.getElementById("canvas")
      , n = t / 200
      , e = t / 200
      , i = o.getContext("2d")
      , s = o.width = window.innerWidth
      , c = o.height = t
      , l = {
        x: s / 2,
        y: s / 2
    }
      , r = []
      , d = new Image
      , u = new Image(e,e)
      , p = new Image(e,e)
      , m = new Image(e,e)
      , f = new Image(e,e)
      , v = function(e) {
        this.index = e,
        this.img = [u, p, m, f][e % 4],
        this.x = this.y = this.progress = this.opacity = this.scale = 1,
        this.size = 15 + (e + 1) / 50 * 100,
        48 < e && (this.size *= 1.5),
        this.dur = (2 - (e + 1) / 50 * 1) / speed;
        var n = -a(3, 5);
        e % 4 == 0 && (n = -n),
        this.draw = function() {
            var e = -(l.x - s / 2) * (this.size / 500)
              , t = -(l.y - c / 2) * (this.size / 500)
              , o = this.size * this.scale;
            i.translate(this.x + e, this.y + t),
            i.rotate(n * this.progress),
            i.globalAlpha = this.opacity,
            i.drawImage(this.img, -o / 2, -o / 2, o, o),
            i.rotate(-n * this.progress),
            i.translate(-this.x - e, -this.y - t)
        }
    };
    function g(t, e) {
        var o = gsap.timeline().fromTo(t, {
            x: a(-t.size / 2, s + t.size),
            y: a(-t.size / 2, c + t.size),
            progress: 0,
            scale: function(e) {
                return t.index % 2 == 0 ? .9 : a(.9, n)
            }
        }, {
            duration: t.dur,
            x: "+=" + String(a(-100, 100)),
            y: "+=" + String(a(-50, 50)),
            scale: function(e) {
                return t.index % 2 == 0 ? a(.9, n) : .9
            },
            progress: 1,
            ease: "none",
            onComplete: function() {
                g(t, !0)
            }
        }, 0).fromTo(t, {
            opacity: 0
        }, {
            duration: t.dur / 4,
            opacity: 1,
            yoyo: !0,
            repeat: 3,
            ease: "power4.in"
        }, 0);
        e || o.seek(t.dur * a())
    }
    for (var L = 0; L < 50; L++)
        r.push(new v(L)),
        g(r[L]);
    gsap.ticker.add(function() {
        i.globalAlpha = 1,
        i.globalCompositeOperation = "source-over",
        i.drawImage(d, 0, 0, s, c);
        for (var e = 0; e < 50; e++)
            r[e].draw()
    }),
    d.src = httptemplate + "default/images/bg.png",
    u.src = httptemplate + "default/images/1.png",
    p.src = httptemplate + "default/images/2.png",
    m.src = httptemplate + "default/images/3.png",
    f.src = httptemplate + "default/images/4.png",
    window.addEventListener("resize", function() {
        if (document.querySelector(".canvas-ani") && !Home.classList.contains("activated")) {
            t = document.querySelector(".canvas-ani canvas").offsetHeight,
            particleNumber = 0,
            n = t / 200,
            s = o.width = window.innerWidth,
            c = o.height = t;
            for (var e = 0; e < 50; e++)
                gsap.killTweensOf(r[e]),
                g(r[e])
        }
    }),
    o && window.addEventListener("mousemove", function(e) {
        gsap.to(l, {
            duration: 2,
            x: e.clientX,
            y: e.clientY,
            overwrite: !0
        })
    })
};
var deferredPrompt;
"serviceWorker"in navigator && (window.addEventListener("load", function() {
    navigator.serviceWorker.register(httpserver + "sw.js").then(function(e) {
        console.log("ServiceWorker registration successful with scope: ", e.scope)
    }, function(e) {
        console.log("ServiceWorker registration failed: ", e)
    })
}),
window.addEventListener("beforeinstallprompt", function(e) {
    e.preventDefault(),
    deferredPrompt = e,
    addBtn.classList.add("show"),
    installApp.addEventListener("click", function(e) {
        deferredPrompt.prompt(),
        deferredPrompt.userChoice.then(function(e) {
            "accepted" === e.outcome ? (console.log("User accepted Manifest"),
            addBtn.remove()) : console.log("User dismissed Manifest"),
            deferredPrompt = null
        })
    }),
    closeAdd.addEventListener("click", function(e) {
        e.preventDefault(),
        addBtn.remove()
    })
}));
