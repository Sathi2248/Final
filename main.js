
  function openNav() {
    document.getElementById("sideNav").style.width = "80%";
    document.querySelector(".translucent-background").style.display = "block";
    document.querySelector(".translucent-background").addEventListener("click", closeNav); // Add event listener to close the nav bar when translucent background is clicked
  }

  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.querySelector(".translucent-background").style.display = "none";
    document.querySelector(".translucent-background").removeEventListener("click", closeNav); // Remove the event listener after closing the nav bar
  }



/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }, q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(),
            x.ready())
    }, _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1),
            e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q),
                e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function (e, n, r) {
            var i, o;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e),
                    !i || !i[1] && n)
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n,
                        x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                        k.test(i[1]) && x.isPlainObject(n))
                        for (i in n)
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]),
                    o && o.parentNode) {
                    if (o.id !== i[2])
                        return r.find(e);
                    this.length = 1,
                        this[0] = o
                }
                return this.context = a,
                    this.selector = e,
                    this
            }
            return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
                    this.context = e.context),
                    x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return g.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function (e, t) {
            return x.each(this, e, t)
        },
        ready: function (e) {
            return x.ready.promise().done(e),
                this
        },
        slice: function () {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },

        eq: function (e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
        x.fn.init.prototype = x.fn,
        x.extend = x.fn.extend = function () {
            var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s,
                s = arguments[1] || {},
                l = 2),
                "object" == typeof s || x.isFunction(s) || (s = {}),
                u === l && (s = this,
                    --l); u > l; l++)
                if (null != (o = arguments[l]))
                    for (i in o)
                        e = s[i],
                            r = o[i],
                            s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1,
                                a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {},
                                s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
            return s
        }
        ,
        x.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            noConflict: function (t) {
                return e.$ === x && (e.$ = u),
                    t && e.jQuery === x && (e.jQuery = l),
                    x
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? x.readyWait++ : x.ready(!0)
            },
            ready: function (e) {
                if (e === !0 ? !--x.readyWait : !x.isReady) {
                    if (!a.body)
                        return setTimeout(x.ready);
                    x.isReady = !0,
                        e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]),
                            x.fn.trigger && x(a).trigger("ready").off("ready"))
                }
            },
            isFunction: function (e) {
                return "function" === x.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === x.type(e)
            }
            ,
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
            },
            isPlainObject: function (e) {
                var n;
                if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (r) {
                    return !1
                }
                if (x.support.ownLast)
                    for (n in e)
                        return v.call(e, n);
                for (n in e)
                    ;
                return n === t || v.call(e, n)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },

            parseHTML: function (html, context, keepScripts) {
                if (!html || typeof html !== "string") {
                    return null;
                }

                if (typeof context === "boolean") {
                    keepScripts = context;
                    context = null;
                }

                context = context || document;
                var parsed = /^<(\w+)\s*\/?>$/.exec(html);

                if (parsed) {
                    return [context.createElement(parsed[1])];
                } else {
                    var fragment = x.buildFragment([html], context);
                    var result = x.merge([], fragment.childNodes);

                    if (!keepScripts) {
                        x(result).find("script").remove();
                    }

                    return result;
                }
            }
            ,
            // 

            noop: () => { },
            globalEval: (code) => {
                if (code && x.trim(code)) {
                    (e.execScript || (t => {
                        e.eval.call(e, t);
                    }))(code);
                }
            },
            camelCase: str => str.replace(D, 'ms-').replace(L, H),
            nodeName: (elem, name) => elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase(),
            each: (elems, callback, args) => {
                const length = elems.length;
                const isArray = M(elems);

                if (args) {
                    if (isArray) {
                        for (let i = 0; i < length; i++) {
                            if (callback.apply(elems[i], args) === false) {
                                break;
                            }
                        }
                    } else {
                        for (const key in elems) {
                            if (callback.apply(elems[key], args) === false) {
                                break;
                            }
                        }
                    }
                } else {
                    if (isArray) {
                        for (let i = 0; i < length; i++) {
                            if (callback.call(elems[i], i, elems[i]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (const key in elems) {
                            if (callback.call(elems[key], key, elems[key]) === false) {
                                break;
                            }
                        }
                    }
                }

                return elems;
            },
            trim: b && !b.call("\ufeff\u00a0")
                ? str => (str == null ? '' : b.call(str))
                : str => (str == null ? '' : (str + '').replace(C, '')),
            // 
            trim: b && !b.call("\ufeff\u00a0")
                ? e => (e == null ? "" : b.call(e))
                : e => (e == null ? "" : (e + "").replace(C, "")),

            makeArray: (e, t) => {
                const n = t || [];
                if (e != null) {
                    M(Object(e))
                        ? x.merge(n, typeof e === "string" ? [e] : e)
                        : h.call(n, e);
                }
                return n;
            },

            inArray: (e, t, n) => {
                if (t && m) {
                    return m.call(t, e, n);
                }
                return t ? t.indexOf(e, n) : -1;
            },
            // 
            merge: function (e, n) {
                var r = n.length
                    , i = e.length
                    , o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++)
                        e[i++] = n[o];
                else
                    while (n[o] !== t)
                        e[i++] = n[o++];
                return e.length = i,
                    e
            },
            grep: function (e, t, n) {
                var r, i = [], o = 0, a = e.length;
                for (n = !!n; a > o; o++)
                    r = !!t(e[o], o),
                        n !== r && i.push(e[o]);
                return i
            },
            map: function (e, t, n) {
                var r, i = 0, o = e.length, a = M(e), s = [];
                if (a)
                    for (; o > i; i++)
                        r = t(e[i], i, n),
                            null != r && (s[s.length] = r);
                else
                    for (i in e)
                        r = t(e[i], i, n),
                            null != r && (s[s.length] = r);
                return d.apply([], s)
            },
            guid: 1,
            proxy: function (e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n],
                    n = e,
                    e = o),
                    x.isFunction(e) ? (r = g.call(arguments, 2),
                        i = function () {
                            return e.apply(n || this, r.concat(g.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || x.guid++,
                        i) : t
            },
            access: function (e, n, r, i, o, a, s) {
                var l = 0
                    , u = e.length
                    , c = null == r;
                if ("object" === x.type(r)) {
                    o = !0;
                    for (l in r)
                        x.access(e, n, l, r[l], !0, a, s)
                } else if (i !== t && (o = !0,
                    x.isFunction(i) || (s = !0),
                    c && (s ? (n.call(e, i),
                        n = null) : (c = n,
                            n = function (e, t, n) {
                                return c.call(x(e), n)
                            }
                    )),
                    n))
                    for (; u > l; l++)
                        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
                return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
            },
            now: function () {
                return (new Date).getTime()
            },

        }),
        x.ready.promise = (t) => {
            if (!n) {
                n = x.Deferred();
                if (a.readyState === "complete") {
                    setTimeout(x.ready);
                } else if (a.addEventListener) {
                    a.addEventListener("DOMContentLoaded", q, false);
                    e.addEventListener("load", q, false);
                }
            }
            return n.promise(t);
        };

    ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"].forEach((t) => {
        c[`[object ${t}]`] = t.toLowerCase();
    });
    //   
    function M(e) {
        var t = e.length;
        var n = x.type(e);
        return x.isWindow(e) ? false : (1 === e.nodeType && t) || ("array" === n || ("function" !== n && (0 === t || (typeof t === "number" && t > 0 && t - 1 in e))));
    }

    r = x(a),
        function (e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v;
            var b = "sizzle" + -new Date;
            var w = e.document;
            var T = 0;
            var C = 0;
            var N = st();
            var k = st();
            var E = st();
            var S = false;

            var A = function (e, t) {
                return e === t ? (S = true, 0) : 0;
            },
                j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {

                }
                , B = "checked", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },

                K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                }




            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t),
                    t = t || f,
                    n = n || [],
                    !e || "string" != typeof e)
                    return n;
                if (1 !== (l = t.nodeType) && 9 !== l)
                    return [];
                if (h && !i) {
                    if (o = Z.exec(e))

                        if (r.qsa && (!g || !g.test(e))) {
                            if (m = d = b,
                                y = t,
                                x = 9 === l && e,
                                1 === l && "object" !== t.nodeName.toLowerCase()) {
                                c = mt(e),
                                    (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                                    m = "[id='" + m + "'] ",
                                    u = c.length;
                                while (u--)
                                    c[u] = m + yt(c[u]);
                                y = V.test(e) && t.parentNode || t,
                                    x = c.join(",")
                            }
                            if (x)
                                try {
                                    return M.apply(n, y.querySelectorAll(x)),
                                        n
                                } catch (T) { } finally {
                                    d || t.removeAttribute("id")
                                }
                        }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }
            function st() {
                var e = [];
                function t(n, r) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                        t[n] = r
                }
                return t
            }

            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                        t = null
                }
            }
            function ct(e, t) {
                var n = e.split("|")
                    , r = e.length;
                while (r--)
                    o.attrHandle[n[r]] = t
            }


            function dt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            s = at.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }
                ,
                r = at.support = {},
                p = at.setDocument = function (e) {
                    var n = e ? e.ownerDocument || e : w
                        , i = n.defaultView;
                    return n !== f && 9 === n.nodeType && n.documentElement ? (f = n,
                        d = n.documentElement,
                        h = !s(n),


                        r.getElementsByTagName = ut(function (e) {
                            return e.appendChild(n.createComment("")),
                                !e.getElementsByTagName("*").length
                        }),


                        r.getById ? (o.find.ID = function (e, t) {
                            if (typeof t.getElementById !== j && h) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }
                            ,
                            o.filter.ID = function (e) {
                                var t = e.replace(rt, it);
                                return function (e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                        ) : (delete o.find.ID,
                            o.filter.ID = function (e) {
                                var t = e.replace(rt, it);
                                return function (e) {
                                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }
                        ),
                        o.find.TAG = r.getElementsByTagName ? function (e, n) {
                            return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                        }
                            : function (e, t) {
                            }

                        ,
                        m = [],
                        g = [],
                        (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {

                        }),
                            ut(function (e) {

                            })),

                        g = g.length && RegExp(g.join("|")),
                        m = m.length && RegExp(m.join("|")),
                        v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                                , r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        }
                            : function (e, t) {
                                if (t)
                                    while (t = t.parentNode)
                                        if (t === e)
                                            return !0;
                                return !1
                            }


                        ,
                        n) : f
                }
                ,
                at.matches = function (e, t) {
                    return at(e, null, null, t)
                }
                ,
                at.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== f && p(e),
                        t = t.replace(Y, "='$1']"),
                        !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))
                        try {
                            var n = y.call(e, t);
                            if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return n
                        } catch (i) { }
                    return at(t, f, null, [e]).length > 0
                }
                ,
                at.contains = function (e, t) {
                    return (e.ownerDocument || e) !== f && p(e),
                        v(e, t)
                }
                ,
                at.attr = function (e, n) {
                    (e.ownerDocument || e) !== f && p(e);
                    var i = o.attrHandle[n.toLowerCase()]
                        , a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                    return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
                }
                ,
                at.error = function (e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                at.uniqueSort = function (e) {
                    var t, n = [], i = 0, o = 0;
                    if (S = !r.detectDuplicates,
                        c = !r.sortStable && e.slice(0),
                        e.sort(A),
                        S) {
                        while (t = e[o++])
                            t === e[o] && (i = n.push(o));
                        while (i--)
                            e.splice(n[i], 1)
                    }
                    return e
                }

                ,
                o = at.selectors = {
                    cacheLength: 50,
                    createPseudo: lt,
                    match: Q,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {



                    },
                    filter: {
                        TAG: function (e) {

                        },
                        CLASS: function (e) {

                        },
                        ATTR: function (e, t, n) {

                        },

                        PSEUDO: function (e, t) {

                        }
                    },
                    pseudos: {





                    }
                }


            o.pseudos[n] = dt(n);
            function gt() { }
            gt.prototype = o.filters = o.pseudos,
                o.setFilters = new gt;
            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                s = e,
                    l = [],
                    u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                        l.push(i = [])),
                        n = !1,
                        (r = U.exec(s)) && (n = r.shift(),
                            i.push({
                                value: n,
                                type: r[0].replace(z, " ")
                            }),
                            s = s.slice(n.length));
                    for (a in o.filter)
                        !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                            i.push({
                                value: n,
                                type: a,
                                matches: r
                            }),
                            s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }
            function yt(e) {
                var t = 0
                    , n = e.length
                    , r = "";
                for (; n > t; t++)
                    r += e[t].value;
                return r
            }
            function vt(e, t, n) {
                var r = t.dir
                    , o = n && "parentNode" === r
                    , a = C++;
                return t.first ? function (t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            return e(t, n, i)
                }
                    : function (t, n, s) {
                        var l, u, c, p = T + " " + a;
                        if (s) {
                            while (t = t[r])
                                if ((1 === t.nodeType || o) && e(t, n, s))
                                    return !0
                        } else
                            while (t = t[r])
                                if (1 === t.nodeType || o)
                                    if (c = t[b] || (t[b] = {}),
                                        (u = c[r]) && u[0] === p) {
                                        if ((l = u[1]) === !0 || l === i)
                                            return l === !0
                                    } else if (u = c[r] = [p],
                                        u[1] = e(t, n, s) || i,
                                        u[1] === !0)
                                        return !0
                    }
            }
            function bt(e) {
                return e.length > 1 ? function (t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                    : e[0]
            }


            function Tt(e) {
                var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
                    return e === t
                }, s, !0), p = vt(function (e) {
                    return F.call(t, e) > -1
                }, s, !0), f = [function (e, n, r) {
                    return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                }
                ];

                return bt(f)
            }
            function Ct(e, t) {
                var n = 0
                    , r = t.length > 0
                    , a = e.length > 0
                    , s = function (s, l, c, p, d) {
                        var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                        for (w && (u = l !== f && l,
                            i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break
                                    }
                                w && (T = k,
                                    i = ++n)
                            }
                            r && ((h = !m && h) && v--,
                                s && x.push(h))
                        }
                        if (v += b,
                            r && b !== v) {
                            g = 0;
                            while (m = t[g++])
                                m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--)
                                        x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y)
                            }
                            M.apply(p, y),
                                w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k,
                            u = C),
                            x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function (e, t) {
                var n, r = [], i = [], o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)),
                        n = t.length;
                    while (n--)
                        o = Tt(t[n]),
                            o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0),
                        s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0],
                            !t)
                            return n;
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (u = s[a],
                            o.relative[c = u.type])
                            break;
                        if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(a, 1),
                                e = i.length && yt(s),
                                !e)
                                return M.apply(n, i),
                                    n;
                            break
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)),
                    n
            }
            r.sortStable = b.split("").sort(A).join("") === b,
                r.detectDuplicates = S,
                p(),
                r.sortDetached = ut(function (e) {
                    return 1 & e.compareDocumentPosition(f.createElement("div"))
                }),
                ut(function (e) {
                    return e.innerHTML = "<a href='#'></a>",
                        "#" === e.firstChild.getAttribute("href")
                }) || ct("type|href|height|width", function (e, n, r) {
                    return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }),
                r.attributes && ut(function (e) {
                    return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                }) || ct("value", function (e, n, r) {
                    return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
                }),
                ut(function (e) {
                    return null == e.getAttribute("disabled")
                }) || ct(B, function (e, n, r) {
                    var i;
                    return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
                }),
                x.find = at,
                x.expr = at.selectors,
                x.expr[":"] = x.expr.pseudos,
                x.unique = at.uniqueSort,
                x.text = at.getText,
                x.isXMLDoc = at.isXML,
                x.contains = at.contains
        }(e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }),
            t
    }
    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t,
                i = !0,
                a = s || 0,
                s = 0,
                o = l.length,
                n = !0; l && o > a; a++)
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1,
                l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function (t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }
                    )(arguments),
                        n ? o = l.length : r && (s = t,
                            c(r))
                }
                return this
            },









        };
        return p
    }
        ,
        x.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
                    , n = "pending"
                    , r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments),
                                this
                        },
                        then: function () {
                            var e = arguments;
                            return x.Deferred(function (n) {
                                x.each(t, function (t, o) {
                                    var a = o[0]
                                        , s = x.isFunction(e[t]) && e[t];
                                    i[o[1]](function () {
                                        var e = s && s.apply(this, arguments);
                                        e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }),
                                    e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? x.extend(e, r) : r
                        }
                    }
                    , i = {};
                return r.pipe = r.then,
                    x.each(t, function (e, o) {
                        var a = o[2]
                            , s = o[3];
                        r[o[1]] = a.add,
                            s && a.add(function () {
                                n = s
                            }, t[1 ^ e][2].disable, t[2][2].lock),
                            i[o[0]] = function () {
                                return i[o[0] + "With"](this === i ? r : this, arguments),
                                    this
                            }
                            ,
                            i[o[0] + "With"] = a.fireWith
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
            },

        }),
        x.support = function (t) {
            var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
            if (d.setAttribute("className", "t"),
                d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                n = d.getElementsByTagName("*") || [],
                r = d.getElementsByTagName("a")[0],
                !r || !r.style || !n.length)
                return t;
            s = a.createElement("select"),
                u = s.appendChild(a.createElement("option")),
                o = d.getElementsByTagName("input")[0],
                r.style.cssText = "top:1px;float:left;opacity:.5",
                t.getSetAttribute = "t" !== d.className,
                t.leadingWhitespace = 3 === d.firstChild.nodeType,
                t.tbody = !d.getElementsByTagName("tbody").length,
                t.htmlSerialize = !!d.getElementsByTagName("link").length,
                t.style = /top/.test(r.getAttribute("style")),
                t.hrefNormalized = "/a" === r.getAttribute("href"),
                t.opacity = /^0.5/.test(r.style.opacity),
                t.cssFloat = !!r.style.cssFloat,
                t.checkOn = !!o.value,
                t.optSelected = u.selected,
                t.enctype = !!a.createElement("form").enctype,
                t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
                t.inlineBlockNeedsLayout = !1,
                t.shrinkWrapBlocks = !1,
                t.pixelPosition = !1,
                t.deleteExpando = !0,
                t.noCloneEvent = !0,
                t.reliableMarginRight = !0,
                t.boxSizingReliable = !0,
                o.checked = !0,
                t.noCloneChecked = o.cloneNode(!0).checked,
                s.disabled = !0,
                t.optDisabled = !u.disabled;
            try {
                delete d.test
            } catch (h) {
                t.deleteExpando = !1
            }
            o = a.createElement("input"),
                o.setAttribute("value", ""),
                t.input = "" === o.getAttribute("value"),
                o.value = "t",
                o.setAttribute("type", "radio"),
                t.radioValue = "t" === o.value,
                o.setAttribute("checked", "t"),
                o.setAttribute("name", "t"),
                l = a.createDocumentFragment(),
                l.appendChild(o),
                t.appendChecked = o.checked,
                t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
                d.attachEvent && (d.attachEvent("onclick", function () {
                    t.noCloneEvent = !1
                }),
                    d.cloneNode(!0).click());
            for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                d.setAttribute(c = "on" + f, "t"),
                    t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
            d.style.backgroundClip = "content-box",
                d.cloneNode(!0).style.backgroundClip = "",
                t.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (f in x(t))
                break;
            return t.ownLast = "0" !== f,

                n = s = l = u = r = o = null,
                t
        }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
        , P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s),
                    u[c] || (u[c] = l ? {} : {
                        toJSON: x.noop
                    }),
                    ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                    a = u[c],
                    i || (a.data || (a.data = {}),
                        a = a.data),
                    r !== t && (a[x.camelCase(n)] = r),
                    "string" == typeof n ? (o = a[n],
                        null == o && (o = a[x.camelCase(n)])) : o = a,
                    o
        }
    }
    function W(e, t, n) {

    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
                !!e && !I(e)
        },
        data: function (e, t, n) {
            return R(e, t, n)
        },
        removeData: function (e, t) {
            return W(e, t)
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return W(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
        x.fn.extend({
            data: function (e, n) {
                var r, i, o = null, a = 0, s = this[0];
                if (e === t) {
                    if (this.length && (o = x.data(s),
                        1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                        for (r = s.attributes; r.length > a; a++)
                            i = r[a].name,
                                0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                                    $(s, i, o[i]));
                        x._data(s, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    x.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    x.data(this, e, n)
                }) : s ? $(s, e, x.data(s, e)) : null
            },

        });

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }

    x.fn.extend({





    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        },


        addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function (t) {
                    x(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++])
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function (t) {
                    x(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },

        hasClass: function (e) {
            var t = " " + e + " "
                , n = 0
                , r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },

    }),
        x.extend({
            valHooks: {


            },
            attr: function (e, n, r) {
                var o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(),
                        o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)),
                        r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n),
                            null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""),
                                r) : (x.removeAttr(e, n),
                                    t))
            },
            removeAttr: function (e, t) {
                var n, r, i = 0, o = t && t.match(T);
                if (o && 1 === e.nodeType)
                    while (n = o[i++])
                        r = x.propFix[n] || n,
                            x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                            e.removeAttribute(Q ? n : r)
            },
            attrHooks: {

            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },


        }),


        x.support.enctype || (x.propFix.enctype = "encoding"),
        x.each(["radio", "checkbox"], function () {
            x.valHooks[this] = {
                set: function (e, n) {
                    return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
                }
            },
                x.support.checkOn || (x.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
        });
    var Z = /^(?:input|select|textarea)$/i
        , et = /^key/
        , tt = /^(?:mouse|contextmenu)|click/
        , nt = /^(?:focusinfocus|focusoutblur)$/
        , rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        } catch (e) { }
    }
    x.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r,
                    r = c.handler,
                    a = c.selector),
                    r.guid || (r.guid = x.guid++),
                    (l = v.events) || (l = v.events = {}),
                    (f = v.handle) || (f = v.handle = function (e) {
                        return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                    }
                        ,
                        f.elem = e),
                    n = (n || "").match(T) || [""],
                    u = n.length;
                while (u--)
                    s = rt.exec(n[u]) || [],
                        g = y = s[1],
                        m = (s[2] || "").split(".").sort(),
                        g && (p = x.event.special[g] || {},
                            g = (a ? p.delegateType : p.bindType) || g,
                            p = x.event.special[g] || {},
                            d = x.extend({
                                type: g,
                                origType: y,
                                data: o,
                                handler: r,
                                guid: r.guid,
                                selector: a,
                                needsContext: a && x.expr.match.needsContext.test(a),
                                namespace: m.join(".")
                            }, c),
                            (h = l[g]) || (h = l[g] = [],
                                h.delegateCount = 0,
                                p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                            p.add && (p.add.call(e, d),
                                d.handler.guid || (d.handler.guid = r.guid)),
                            a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                            x.event.global[g] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""],
                    u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [],
                        d = g = s[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                        p = x.event.special[d] || {},
                            d = (r ? p.delegateType : p.bindType) || d,
                            f = c[d] || [],
                            s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            l = o = f.length;
                        while (o--)
                            a = f[o],
                                !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                                    a.selector && f.delegateCount--,
                                    p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle),
                            delete c[d])
                    } else
                        for (d in c)
                            x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle,
                    x._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a,
                3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
                    g = m.shift(),
                    m.sort()),
                    l = 0 > g.indexOf(":") && "on" + g,
                    n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n),
                    n.isTrigger = o ? 2 : 3,
                    n.namespace = m.join("."),
                    n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    n.result = t,
                    n.target || (n.target = i),
                    r = null == r ? [n] : x.makeArray(r, [n]),
                    p = x.event.special[g] || {},
                    o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g,
                        nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
                        h.push(u),
                            f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())
                    n.type = d > 1 ? c : p.bindType || g,
                        s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                        s && s.apply(u, r),
                        s = l && u[l],
                        s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g,
                    !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l],
                        f && (i[l] = null),
                        x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) { }
                    x.event.triggered = t,
                        f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e,
                e.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                    n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                        a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                            e.data = i.data,
                            r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l),
                            r !== t && (e.result = r) === !1 && (e.preventDefault(),
                                e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                            a = 0; l > a; a++)
                            i = n[a],
                                r = i.selector + " ",
                                o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                                o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
                s
        },
        fix: function (e) {
            if (e[x.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
                r = s.props ? this.props.concat(s.props) : this.props,
                e = new x.Event(o),
                t = r.length;
            while (t--)
                n = r[t],
                    e[n] = o[n];
            return e.target || (e.target = o.srcElement || a),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {

        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a,
                    o = i.documentElement,
                    r = i.body,
                    e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                    e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                    !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
                    e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                    e
            }
        },
        special: {

            click: {
                trigger: function () {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : t
                },
                _default: function (e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
        }
    },
        x.removeEvent = a.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
            : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === i && (e[r] = null),
                    e.detachEvent(r, n))
            }
        ,
        x.Event = function (e, n) {
            return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
                n && x.extend(this, n),
                this.timeStamp = e && e.timeStamp || x.now(),
                this[x.expando] = !0,
                t) : new x.Event(e, n)
        }
        ,
        x.Event.prototype = {
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = it,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = it,
                    e && (e.stopPropagation && e.stopPropagation(),
                        e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = it,
                    this.stopPropagation()
            }
        },


        x.support.focusinBubbles || x.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = 0
                , r = function (e) {
                    x.event.simulate(t, e.target, x.event.fix(e), !0)
                };
            x.event.special[t] = {
                setup: function () {
                    0 === n++ && a.addEventListener(e, r, !0)
                },
                teardown: function () {
                    0 === --n && a.removeEventListener(e, r, !0)
                }
            }
        }),
        x.fn.extend({
            on: function (e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n,
                        n = t);
                    for (a in e)
                        this.on(a, n, r, e[a], o);
                    return this
                }
                if (null == r && null == i ? (i = n,
                    r = n = t) : null == i && ("string" == typeof n ? (i = r,
                        r = t) : (i = r,
                            r = n,
                            n = t)),
                    i === !1)
                    i = ot;
                else if (!i)
                    return this;
                return 1 === o && (s = i,
                    i = function (e) {
                        return x().off(e),
                            s.apply(this, arguments)
                    }
                    ,
                    i.guid = s.guid || (s.guid = x.guid++)),
                    this.each(function () {
                        x.event.add(this, e, i, r, n)
                    })
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function (e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                        x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n,
                    n = t),
                    r === !1 && (r = ot),
                    this.each(function () {
                        x.event.remove(this, e, r, n)
                    })
            },
            trigger: function (e, t) {
                return this.each(function () {
                    x.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, n) {
                var r = this[0];
                return r ? x.event.trigger(e, n, r, !0) : t
            }
        });
    var st = /^.[^:#\[\.,]*$/
        , lt = /^(?:parents|prev(?:Until|All))/
        , ut = x.expr.match.needsContext
        , ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter(function () {
                    for (t = 0; i > t; t++)
                        if (x.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
                n.selector = this.selector ? this.selector + " " + e : e,
                n
        },
        has: function (e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t]))
                        return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function (e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
                , r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },

        children: function (e) {
            return x.sibling(e.firstChild)
        },

    }, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = x.filter(r, i)),
                this.length > 1 && (ct[e] || (i = x.unique(i)),
                    lt.test(e) && (i = i.reverse())),
                this.pushStack(i)
        }
    }),
        x.extend({
            filter: function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
            },
            dir: function (e, n, r) {
                var i = []
                    , o = e[n];
                while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))
                    1 === o.nodeType && i.push(o),
                        o = o[n];
                return i
            },
            sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
    function ft(e, t, n) {
        if (x.isFunction(t))
            return x.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return x.grep(e, function (e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (st.test(t))
                return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|")
            , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    var ht = "abbr"



        , vt = /<(?!area|br|col|hr|link|meta)(([\w:]+)[^>]*)\/>/gi
        , bt = /<([\w:]+)/
        , xt = /<tbody/i
        , wt = /<|&#?\w+;/
        , Tt = /<(?:script|style|link)/i

        , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
        , kt = /^$|\/(?:java|ecma)script/i
        , Et = /^true\//

        , At = {
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
        , jt = dt(a)

    At.optgroup = At.option,
        At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
        At.th = At.td,
        x.fn.extend({
            text: function (e) {

            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Lt(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Lt(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function (e, t) {
                var n, r = e ? x.filter(e, this) : this, i = 0;
                for (; null != (n = r[i]); i++)
                    t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                        n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                            n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                var e, t = 0;
                for (; null != (e = this[t]); t++) {
                    1 === e.nodeType && x.cleanData(Ft(e, !1));
                    while (e.firstChild)
                        e.removeChild(e.firstChild);
                    e.options && x.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return x.clone(this, e, t)
                    })
            },


            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, t, n) {
                e = d.apply([], e);
                var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
                if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))
                    return this.each(function (r) {
                        var i = p.eq(r);
                        g && (e[0] = h.call(this, r, i.html())),
                            i.domManip(e, t, n)
                    });
                if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
                    r = l.firstChild,
                    1 === l.childNodes.length && (l = r),
                    r)) {
                    for (a = x.map(Ft(l, "script"), Ht),
                        o = a.length; c > u; u++)
                        i = l,
                            u !== f && (i = x.clone(i, !0, !0),
                                o && x.merge(a, Ft(i, "script"))),
                            t.call(this[u], i, u);
                    if (o)
                        for (s = a[a.length - 1].ownerDocument,
                            x.map(a, qt),
                            u = 0; o > u; u++)
                            i = a[u],
                                kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                    l = r = null
                }
                return this
            }
        });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
            e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                    a.events = {};
                for (n in s)
                    for (r = 0,
                        i = s[n].length; i > r; r++)
                        x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)
                n = r === a ? this : this.clone(!0),
                    x(o[r])[t](n),
                    h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [],
                r = e.childNodes || e; null != (o = r[a]); a++)
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
                Dt.removeChild(o = Dt.firstChild)),
                !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o),
                    s = Ft(e),
                    a = 0; null != (i = s[a]); ++a)
                    r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e),
                        r = r || Ft(o),
                        a = 0; null != (i = s[a]); a++)
                        Mt(i, r[a]);
                else
                    Mt(e, o);
            return r = Ft(o, "script"),
                r.length > 0 && _t(r, !l && Ft(e, "script")),
                r = s = i = null,
                o
        },
        buildFragment: function (e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++)
                if (o = e[h],
                    o || 0 === o)
                    if ("object" === x.type(o))
                        x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")),
                            l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                            c = At[l] || At._default,
                            s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                            i = c[0];
                        while (i--)
                            s = s.lastChild;
                        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                            !x.support.tbody) {
                            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                                i = o && o.childNodes.length;
                            while (i--)
                                x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                        }
                        x.merge(d, s.childNodes),
                            s.textContent = "";
                        while (s.firstChild)
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        d.push(t.createTextNode(o));
            s && f.removeChild(s),
                x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
                h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o),
                    s = Ft(f.appendChild(o), "script"),
                    a && _t(s),
                    n)) {
                    i = 0;
                    while (o = s[i++])
                        kt.test(o.type || "") && n.push(o)
                }
            return s = null,
                f
        },
        cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l],
                    a = o && u[o])) {
                    if (a.events)
                        for (r in a.events)
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o],
                        c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null,
                        p.push(o))
                }
        },
        _evalUrl: function (e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
        x.fn.extend({
            wrapAll: function (e) {
                if (x.isFunction(e))
                    return this.each(function (t) {
                        x(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function () {
                            var e = this;
                            while (e.firstChild && 1 === e.firstChild.nodeType)
                                e = e.firstChild;
                            return e
                        }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return x.isFunction(e) ? this.each(function (t) {
                    x(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = x(this)
                        , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = x.isFunction(e);
                return this.each(function (n) {
                    x(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
                }).end()
            }
        });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
            , r = t
            , i = en.length;
        while (i--)
            if (t = en[i] + n,
                t in e)
                return t;
        return r
    }
    function nn(e, t) {
        return e = t || e,
            "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)
            r = e[a],
                r.style && (o[a] = x._data(r, "olddisplay"),
                    n = r.style.display,
                    t ? (o[a] || "none" !== n || (r.style.display = ""),
                        "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r),
                            (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function (e, n) {
            return x.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e),
                        i = n.length; i > s; s++)
                        a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
        x.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Wt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, l = x.camelCase(n), u = e.style;
                    if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)),
                        s = x.cssHooks[n] || x.cssHooks[l],
                        r === t)
                        return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                    if (a = typeof r,
                        "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)),
                            a = "number"),
                        !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"),
                            x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                            s && "set" in s && (r = s.set(e, r, i)) === t)))
                        try {
                            u[n] = r
                        } catch (c) { }
                }
            },
            css: function (e, n, r, i) {
                var o, a, s, l = x.camelCase(n);
                return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
                    s = x.cssHooks[n] || x.cssHooks[l],
                    s && "get" in s && (a = s.get(e, !0, r)),
                    a === t && (a = Wt(e, n, i)),
                    "normal" === a && n in Kt && (a = Kt[n]),
                    "" === r || r ? (o = parseFloat(a),
                        r === !0 || x.isNumeric(o) ? o || 0 : a) : a
            }
        }),
        e.getComputedStyle ? (Rt = function (t) {
            return e.getComputedStyle(t, null)
        }
            ,
            Wt = function (e, n, r) {
                var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
                return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
                    Yt.test(l) && Ut.test(n) && (i = u.width,
                        o = u.minWidth,
                        a = u.maxWidth,
                        u.minWidth = u.maxWidth = u.width = l,
                        l = s.width,
                        u.width = i,
                        u.minWidth = o,
                        u.maxWidth = a)),
                    l
            }
        ) : a.documentElement.currentStyle && (Rt = function (e) {
            return e.currentStyle
        }
            ,
            Wt = function (e, n, r) {
                var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
                return null == l && u && u[n] && (l = u[n]),
                    Yt.test(l) && !zt.test(n) && (i = u.left,
                        o = e.runtimeStyle,
                        a = o && o.left,
                        a && (o.left = e.currentStyle.left),
                        u.left = "fontSize" === n ? "1em" : l,
                        l = u.pixelLeft + "px",
                        u.left = i,
                        a && (o.left = a)),
                    "" === l ? "auto" : l
            }
        );

    // 



    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),









        function or(e) {
            return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
    x.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                    , s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                        Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }),
        x.fn.size = function () {
            return this.length
        }
        ,
        x.fn.andSelf = x.fn.addBack,
        "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,
            "function" == typeof define && define.amd && define("jquery", [], function () {
                return x
            }))
}
)(window);


////serc 2








; (function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function ($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };


    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function (now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function () {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                    _.direction = 0;
                }

                else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler(slideTo);

        }

    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add(_.$nextArrow)

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides =
            _.$slider
                .children(_.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function () {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width': (100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                            targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this, originalSlides;

        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function () {
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function (event) {

                event.stopImmediatePropagation();
                var $sf = $(this);

                setTimeout(function () {

                    if (_.options.pauseOnFocus) {
                        _.focussed = $sf.is(':focus');
                        _.autoPlay();
                    }

                }, 0);

            });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function () {

        return this;

    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function () {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
                return (val >= 0) && (val < _.slideCount);
            });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({ 'tabindex': '0' });
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image
                        .animate({ opacity: 0 }, 100, function () {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet);

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes);
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function () {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function () {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
            if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
                loadImages(cloneRange);
            } else if (_.currentSlide === 0) {
                cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
                loadImages(cloneRange);
            }

    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };





    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet);

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes);
                    }
                }

                image
                    .attr('src', imageSource)
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);

                } else {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [_]);

        }

    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function (a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });

        }

    };


    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) { _.setPosition(); }
            }, 50);
        }
    };


    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };


    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });

            }

        }

    };


    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function () {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable(_.currentSlide + _.getSlideCount()) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable(_.currentSlide - _.getSlideCount()) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);

            }

        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };



    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };



    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            ret;

        for (var i = 0; i < l; i++) {
            if (typeof opt === 'object' || typeof opt === 'undefined') {
                _[i].slick = new Slick(_[i], opt);
            } else {
                ret = _[i].slick[opt].apply(_[i].slick, args);
            }

            if (typeof ret !== 'undefined') {
                return ret;
            }
        }

        return _;
    };


}));



// ////////src 2







$('.tour-left-slide').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
});


$('.india-holiday').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 667,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 225,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.tranding-destination-slide').slick({
    dots: false,
    infinite: false,
    speed: 270,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 667,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 225,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

/* India's & International Destinations tabing 03-03-2020 Start*/
if ($('.explore-best-selling-slide').length > 0) {
    $('.explore-best-selling-slide').slick({
        dots: false,
        infinite: false,
        speed: 270,
        slidesToShow: 5,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 225,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

if ($('.explore-best-selling-slide-another').length > 0) {
    $('.explore-best-selling-slide-another').slick({
        dots: false,
        infinite: false,
        speed: 270,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 225,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("explore-best-selling-row");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";

    $('.explore-best-selling-slide').slick('refresh');
    $('.explore-best-selling-slide-another').slick('refresh');
}

var buttons = document.querySelectorAll('.international-radio-box button');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        buttons.forEach(function (btn) {
            btn.classList.remove('is-active');
            btn.style.color = '';
        });
        this.classList.add('is-active');
        this.style.color = 'rgb(105, 104, 104)';
    });
});






//   










