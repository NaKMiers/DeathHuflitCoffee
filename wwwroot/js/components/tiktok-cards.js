/*!
 *
 * 	elfsight.com
 *
 * 	Copyright (c) 2023 Elfsight, LLC. ALL RIGHTS RESERVED
 *
 */
!(function (e) {
   function t(i) {
      if (n[i]) return n[i].exports
      var o = (n[i] = { exports: {}, id: i, loaded: !1 })
      return e[i].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
   }
   var n = {}
   return (t.m = e), (t.c = n), (t.p = '/dev/'), t(0)
})([
   function (e, t, n) {
      n(1), n(2)(window), n(64)
   },
   function (e, t, n) {
      e.exports = n.p + 'index.html'
   },
   function (e, t, n) {
      function i(e) {
         if (!e.eapps) {
            var t = {},
               n = new r(),
               i = new o(e, e.document.body, n),
               s = new a()
            ;(t.platform = i.facade()), (t.apps = n.facade()), (t.analytics = s.facade()), (e.eapps = t)
         }
      }
      n(3)
      var o = n(52),
         r = n(59),
         a = n(62)
      e.exports = i
   },
   function (e, t, n) {
      n(4), n(42), n(49)
   },
   function (e, t, n) {
      var i = n(5)
      i(i.S + i.F, 'Object', { assign: n(26) })
   },
   function (e, t, n) {
      var i = n(6),
         o = n(7),
         r = n(8),
         a = n(18),
         s = n(24),
         c = 'prototype',
         l = function e(t, n, l) {
            var p,
               u,
               f,
               d,
               g = t & e.F,
               h = t & e.G,
               v = t & e.S,
               b = t & e.P,
               w = t & e.B,
               m = h ? i : v ? i[n] || (i[n] = {}) : (i[n] || {})[c],
               y = h ? o : o[n] || (o[n] = {}),
               x = y[c] || (y[c] = {})
            h && (l = n)
            for (p in l)
               (u = !g && m && void 0 !== m[p]),
                  (f = (u ? m : l)[p]),
                  (d = w && u ? s(f, i) : b && 'function' == typeof f ? s(Function.call, f) : f),
                  m && a(m, p, f, t & e.U),
                  y[p] != f && r(y, p, d),
                  b && x[p] != f && (x[p] = f)
         }
      ;(i.core = o),
         (l.F = 1),
         (l.G = 2),
         (l.S = 4),
         (l.P = 8),
         (l.B = 16),
         (l.W = 32),
         (l.U = 64),
         (l.R = 128),
         (e.exports = l)
   },
   function (e, t) {
      var n = (e.exports =
         'undefined' != typeof window && window.Math == Math
            ? window
            : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')())
      'number' == typeof __g && (__g = n)
   },
   function (e, t) {
      var n = (e.exports = { version: '2.6.5' })
      'number' == typeof __e && (__e = n)
   },
   function (e, t, n) {
      var i = n(9),
         o = n(17)
      e.exports = n(13)
         ? function (e, t, n) {
              return i.f(e, t, o(1, n))
           }
         : function (e, t, n) {
              return (e[t] = n), e
           }
   },
   function (e, t, n) {
      var i = n(10),
         o = n(12),
         r = n(16),
         a = Object.defineProperty
      t.f = n(13)
         ? Object.defineProperty
         : function (e, t, n) {
              if ((i(e), (t = r(t, !0)), i(n), o))
                 try {
                    return a(e, t, n)
                 } catch (e) {}
              if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!')
              return 'value' in n && (e[t] = n.value), e
           }
   },
   function (e, t, n) {
      var i = n(11)
      e.exports = function (e) {
         if (!i(e)) throw TypeError(e + ' is not an object!')
         return e
      }
   },
   function (e, t) {
      function n(e) {
         return (n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
               ? function (e) {
                    return typeof e
                 }
               : function (e) {
                    return e &&
                       'function' == typeof Symbol &&
                       e.constructor === Symbol &&
                       e !== Symbol.prototype
                       ? 'symbol'
                       : typeof e
                 })(e)
      }
      e.exports = function (e) {
         return 'object' === n(e) ? null !== e : 'function' == typeof e
      }
   },
   function (e, t, n) {
      e.exports =
         !n(13) &&
         !n(14)(function () {
            return (
               7 !=
               Object.defineProperty(n(15)('div'), 'a', {
                  get: function () {
                     return 7
                  },
               }).a
            )
         })
   },
   function (e, t, n) {
      e.exports = !n(14)(function () {
         return (
            7 !=
            Object.defineProperty({}, 'a', {
               get: function () {
                  return 7
               },
            }).a
         )
      })
   },
   function (e, t) {
      e.exports = function (e) {
         try {
            return !!e()
         } catch (e) {
            return !0
         }
      }
   },
   function (e, t, n) {
      var i = n(11),
         o = n(6).document,
         r = i(o) && i(o.createElement)
      e.exports = function (e) {
         return r ? o.createElement(e) : {}
      }
   },
   function (e, t, n) {
      var i = n(11)
      e.exports = function (e, t) {
         if (!i(e)) return e
         var n, o
         if (t && 'function' == typeof (n = e.toString) && !i((o = n.call(e)))) return o
         if ('function' == typeof (n = e.valueOf) && !i((o = n.call(e)))) return o
         if (!t && 'function' == typeof (n = e.toString) && !i((o = n.call(e)))) return o
         throw TypeError("Can't convert object to primitive value")
      }
   },
   function (e, t) {
      e.exports = function (e, t) {
         return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
      }
   },
   function (e, t, n) {
      var i = n(6),
         o = n(8),
         r = n(19),
         a = n(20)('src'),
         s = n(21),
         c = 'toString',
         l = ('' + s).split(c)
      ;(n(7).inspectSource = function (e) {
         return s.call(e)
      }),
         (e.exports = function (e, t, n, s) {
            var c = 'function' == typeof n
            c && (r(n, 'name') || o(n, 'name', t)),
               e[t] !== n &&
                  (c && (r(n, a) || o(n, a, e[t] ? '' + e[t] : l.join(String(t)))),
                  e === i
                     ? (e[t] = n)
                     : s
                     ? e[t]
                        ? (e[t] = n)
                        : o(e, t, n)
                     : (delete e[t], o(e, t, n)))
         })(Function.prototype, c, function () {
            return ('function' == typeof this && this[a]) || s.call(this)
         })
   },
   function (e, t) {
      var n = {}.hasOwnProperty
      e.exports = function (e, t) {
         return n.call(e, t)
      }
   },
   function (e, t) {
      var n = 0,
         i = Math.random()
      e.exports = function (e) {
         return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + i).toString(36))
      }
   },
   function (e, t, n) {
      e.exports = n(22)('native-function-to-string', Function.toString)
   },
   function (e, t, n) {
      var i = n(7),
         o = n(6),
         r = '__core-js_shared__',
         a = o[r] || (o[r] = {})
      ;(e.exports = function (e, t) {
         return a[e] || (a[e] = void 0 !== t ? t : {})
      })('versions', []).push({
         version: i.version,
         mode: n(23) ? 'pure' : 'global',
         copyright: 'Â© 2019 Denis Pushkarev (zloirock.ru)',
      })
   },
   function (e, t) {
      e.exports = !1
   },
   function (e, t, n) {
      var i = n(25)
      e.exports = function (e, t, n) {
         if ((i(e), void 0 === t)) return e
         switch (n) {
            case 1:
               return function (n) {
                  return e.call(t, n)
               }
            case 2:
               return function (n, i) {
                  return e.call(t, n, i)
               }
            case 3:
               return function (n, i, o) {
                  return e.call(t, n, i, o)
               }
         }
         return function () {
            return e.apply(t, arguments)
         }
      }
   },
   function (e, t) {
      e.exports = function (e) {
         if ('function' != typeof e) throw TypeError(e + ' is not a function!')
         return e
      }
   },
   function (e, t, n) {
      'use strict'
      var i = n(27),
         o = n(39),
         r = n(40),
         a = n(41),
         s = n(30),
         c = Object.assign
      e.exports =
         !c ||
         n(14)(function () {
            var e = {},
               t = {},
               n = Symbol(),
               i = 'abcdefghijklmnopqrst'
            return (
               (e[n] = 7),
               i.split('').forEach(function (e) {
                  t[e] = e
               }),
               7 != c({}, e)[n] || Object.keys(c({}, t)).join('') != i
            )
         })
            ? function (e, t) {
                 for (var n = a(e), c = arguments.length, l = 1, p = o.f, u = r.f; c > l; )
                    for (
                       var f,
                          d = s(arguments[l++]),
                          g = p ? i(d).concat(p(d)) : i(d),
                          h = g.length,
                          v = 0;
                       h > v;

                    )
                       u.call(d, (f = g[v++])) && (n[f] = d[f])
                 return n
              }
            : c
   },
   function (e, t, n) {
      var i = n(28),
         o = n(38)
      e.exports =
         Object.keys ||
         function (e) {
            return i(e, o)
         }
   },
   function (e, t, n) {
      var i = n(19),
         o = n(29),
         r = n(33)(!1),
         a = n(37)('IE_PROTO')
      e.exports = function (e, t) {
         var n,
            s = o(e),
            c = 0,
            l = []
         for (n in s) n != a && i(s, n) && l.push(n)
         for (; t.length > c; ) i(s, (n = t[c++])) && (~r(l, n) || l.push(n))
         return l
      }
   },
   function (e, t, n) {
      var i = n(30),
         o = n(32)
      e.exports = function (e) {
         return i(o(e))
      }
   },
   function (e, t, n) {
      var i = n(31)
      e.exports = Object('z').propertyIsEnumerable(0)
         ? Object
         : function (e) {
              return 'String' == i(e) ? e.split('') : Object(e)
           }
   },
   function (e, t) {
      var n = {}.toString
      e.exports = function (e) {
         return n.call(e).slice(8, -1)
      }
   },
   function (e, t) {
      e.exports = function (e) {
         if (void 0 == e) throw TypeError("Can't call method on  " + e)
         return e
      }
   },
   function (e, t, n) {
      var i = n(29),
         o = n(34),
         r = n(36)
      e.exports = function (e) {
         return function (t, n, a) {
            var s,
               c = i(t),
               l = o(c.length),
               p = r(a, l)
            if (e && n != n) {
               for (; l > p; ) if (((s = c[p++]), s != s)) return !0
            } else for (; l > p; p++) if ((e || p in c) && c[p] === n) return e || p || 0
            return !e && -1
         }
      }
   },
   function (e, t, n) {
      var i = n(35),
         o = Math.min
      e.exports = function (e) {
         return e > 0 ? o(i(e), 9007199254740991) : 0
      }
   },
   function (e, t) {
      var n = Math.ceil,
         i = Math.floor
      e.exports = function (e) {
         return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e)
      }
   },
   function (e, t, n) {
      var i = n(35),
         o = Math.max,
         r = Math.min
      e.exports = function (e, t) {
         return (e = i(e)), e < 0 ? o(e + t, 0) : r(e, t)
      }
   },
   function (e, t, n) {
      var i = n(22)('keys'),
         o = n(20)
      e.exports = function (e) {
         return i[e] || (i[e] = o(e))
      }
   },
   function (e, t) {
      e.exports =
         'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
         )
   },
   function (e, t) {
      t.f = Object.getOwnPropertySymbols
   },
   function (e, t) {
      t.f = {}.propertyIsEnumerable
   },
   function (e, t, n) {
      var i = n(32)
      e.exports = function (e) {
         return Object(i(e))
      }
   },
   function (e, t, n) {
      'use strict'
      var i = n(5),
         o = n(43)(2)
      i(i.P + i.F * !n(48)([].filter, !0), 'Array', {
         filter: function (e) {
            return o(this, e, arguments[1])
         },
      })
   },
   function (e, t, n) {
      var i = n(24),
         o = n(30),
         r = n(41),
         a = n(34),
         s = n(44)
      e.exports = function (e, t) {
         var n = 1 == e,
            c = 2 == e,
            l = 3 == e,
            p = 4 == e,
            u = 6 == e,
            f = 5 == e || u,
            d = t || s
         return function (t, s, g) {
            for (
               var h,
                  v,
                  b = r(t),
                  w = o(b),
                  m = i(s, g, 3),
                  y = a(w.length),
                  x = 0,
                  C = n ? d(t, y) : c ? d(t, 0) : void 0;
               y > x;
               x++
            )
               if ((f || x in w) && ((h = w[x]), (v = m(h, x, b)), e))
                  if (n) C[x] = v
                  else if (v)
                     switch (e) {
                        case 3:
                           return !0
                        case 5:
                           return h
                        case 6:
                           return x
                        case 2:
                           C.push(h)
                     }
                  else if (p) return !1
            return u ? -1 : l || p ? p : C
         }
      }
   },
   function (e, t, n) {
      var i = n(45)
      e.exports = function (e, t) {
         return new (i(e))(t)
      }
   },
   function (e, t, n) {
      var i = n(11),
         o = n(46),
         r = n(47)('species')
      e.exports = function (e) {
         var t
         return (
            o(e) &&
               ((t = e.constructor),
               'function' != typeof t || (t !== Array && !o(t.prototype)) || (t = void 0),
               i(t) && ((t = t[r]), null === t && (t = void 0))),
            void 0 === t ? Array : t
         )
      }
   },
   function (e, t, n) {
      var i = n(31)
      e.exports =
         Array.isArray ||
         function (e) {
            return 'Array' == i(e)
         }
   },
   function (e, t, n) {
      var i = n(22)('wks'),
         o = n(20),
         r = n(6).Symbol,
         a = 'function' == typeof r,
         s = (e.exports = function (e) {
            return i[e] || (i[e] = (a && r[e]) || (a ? r : o)('Symbol.' + e))
         })
      s.store = i
   },
   function (e, t, n) {
      'use strict'
      var i = n(14)
      e.exports = function (e, t) {
         return (
            !!e &&
            i(function () {
               t ? e.call(null, function () {}, 1) : e.call(null)
            })
         )
      }
   },
   function (e, t, n) {
      var i = n(5)
      i(i.P, 'Function', { bind: n(50) })
   },
   function (e, t, n) {
      'use strict'
      var i = n(25),
         o = n(11),
         r = n(51),
         a = [].slice,
         s = {},
         c = function (e, t, n) {
            if (!(t in s)) {
               for (var i = [], o = 0; o < t; o++) i[o] = 'a[' + o + ']'
               s[t] = Function('F,a', 'return new F(' + i.join(',') + ')')
            }
            return s[t](e, n)
         }
      e.exports =
         Function.bind ||
         function (e) {
            var t = i(this),
               n = a.call(arguments, 1),
               s = function i() {
                  var o = n.concat(a.call(arguments))
                  return this instanceof i ? c(t, o.length, o) : r(t, o, e)
               }
            return o(t.prototype) && (s.prototype = t.prototype), s
         }
   },
   function (e, t) {
      e.exports = function (e, t, n) {
         var i = void 0 === n
         switch (t.length) {
            case 0:
               return i ? e() : e.call(n)
            case 1:
               return i ? e(t[0]) : e.call(n, t[0])
            case 2:
               return i ? e(t[0], t[1]) : e.call(n, t[0], t[1])
            case 3:
               return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2])
            case 4:
               return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
         }
         return e.apply(n, t)
      }
   },
   function (e, t, n) {
      var i = n(53),
         o = n(54),
         r = n(57),
         a = n(58),
         s = 'eapps.Platform',
         c = 'disabled',
         l = 'enabled',
         p = 'first-activity',
         u = 'in-viewport',
         f = [c, l, p, u],
         d =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
         g = 'https://apps.elfsight.com',
         h = 'https://core.service.elfsight.com',
         v = function (e, t, n) {
            var v,
               b,
               w = this,
               m = {},
               y = [],
               x = [],
               C = [],
               k = []
            ;(w.initialize = function () {
               ;(w.logError = r.withModule(s)),
                  i(function () {
                     ;(t = t || e.document.body),
                        w.establishPreconnections(),
                        w.observe(),
                        w.collectWidgets(t),
                        w.boot(),
                        w.watchWidgetReset()
                  })
            }),
               (w.establishPreconnections = function () {
                  w.preconnect(w.getPlatformUrl()),
                     w.preconnect('https://static.elfsight.com'),
                     w.preconnect('https://service-reviews-ultimate.elfsight.com'),
                     w.preconnect('https://storage.elfsight.com')
               }),
               (w.preconnect = function (e) {
                  var t = document.createElement('link')
                  ;(t.href = e),
                     (t.rel = 'preconnect'),
                     (t.crossOrigin = ''),
                     document.head.appendChild(t)
               }),
               (w.facade = function () {
                  return new a(w)
               }),
               (w.requireWidget = function (e) {
                  'string' != typeof e &&
                     w.logError('Widget Public ID required and should be a string', { pid: e }),
                     ~y.indexOf(e) || y.push(e)
               }),
               (w.addPlaceholder = function (e) {
                  ~x.indexOf(e) || x.push(e)
               }),
               (w.getEappsClass = function (e) {
                  var t = e.className.split(' ')
                  return 1 === t.length
                     ? e.className
                     : t.length > 1
                     ? (t.filter(function (e) {
                          return /elfsight-app-[\S]+/.test(e)
                       }),
                       t[0])
                     : void 0
               }),
               (w.getWidgetIdByElement = function (e) {
                  return 'div' === e.tagName.toLowerCase()
                     ? w.getEappsClass(e).replace('elfsight-app-', '')
                     : e.getAttribute('data-id')
               }),
               (w.getLazyMode = function (e) {
                  var t = e.getAttribute('data-elfsight-app-lazy')
                  return '' === t ? l : null !== t && f.includes(t) ? t : c
               }),
               (w.getWidgetsElements = function (e) {
                  if (
                     ((e = e || t),
                     !e ||
                        'function' != typeof e.getElementsByTagName ||
                        'function' != typeof e.querySelectorAll)
                  )
                     return []
                  var n = Array.prototype.slice.call(e.getElementsByTagName('elfsight-app')),
                     i = Array.prototype.slice.call(e.querySelectorAll('*[class^="elfsight-app"]')),
                     o = i.concat(n)
                  return e instanceof HTMLElement && ~e.className.indexOf('elfsight-app') && o.push(e), o
               }),
               (w.collectWidgets = function (e) {
                  w.getWidgetsElements(e).forEach(function (e) {
                     var t = w.getWidgetIdByElement(e)
                     if (t) {
                        var n = w.getLazyMode(e)
                        n === c ? w.requireWidget(t) : w.bootWidgetDeferredly(e, t, n),
                           w.addPlaceholder(e)
                     }
                  })
               }),
               (w.bootWidgetDeferredly = function (e, t, n) {
                  function i() {
                     s.splice(0, s.length).forEach(function (e) {
                        e()
                     })
                  }
                  function o() {
                     i(), w.requireWidget(t), w.revise()
                  }
                  function r() {
                     var e = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'],
                        t = { capture: !0, passive: !0 }
                     return (
                        e.forEach(function (e) {
                           window.addEventListener(e, o, t)
                        }),
                        function () {
                           e.forEach(function (e) {
                              window.removeEventListener(e, o, t)
                           })
                        }
                     )
                  }
                  function a() {
                     if ('undefined' == typeof window.IntersectionObserver) return function () {}
                     var t = new IntersectionObserver(function (e) {
                        for (var t = 0; t < e.length; ++t)
                           if (e[t].isIntersecting) {
                              o()
                              break
                           }
                     })
                     return (
                        t.observe(e),
                        function () {
                           t.disconnect()
                        }
                     )
                  }
                  var s = [],
                     c = [l, u].includes(n)
                  c && s.push(a())
                  var f = [l, p].includes(n)
                  f && s.push(r())
               }),
               (w.watchWidgetReset = function () {
                  window.addEventListener('message', function (e) {
                     var t = e.data
                     t.action && 'EappsPlatform.widgetReset' === t.action && w.resetWidget(t.widgetId)
                  })
               }),
               (w.resetWidget = function (e) {
                  var t = function e(t) {
                     var e = document.createElement('div')
                     return (e.className = 'elfsight-app-' + t), e
                  }
                  w.getWidgetsElements().forEach(function (n) {
                     w.getWidgetIdByElement(n) === e && (delete m[e], n.parentNode.replaceChild(t(e), n))
                  })
               }),
               (w.initWidget = function (e) {
                  var t = w.getWidgetIdByElement(e),
                     i = m[t]
                  if (i) {
                     if (!i.status || !i.data)
                        return void w.logError(
                           'Widget "' + t + '" can`t be initialized because ' + i.reason,
                           e
                        )
                     ;(i.data.id = t), (i.data.platform = !0), (i.data.usingLegacyPlatform = b)
                     var o = i.user || i.data.user
                     o && (i.data.isOwner = o.owner), n.initWidget(e, i.data)
                  }
               }),
               (w.boot = function (e, t) {
                  var n = t || y,
                     i = []
                  if (
                     (n.forEach(function (e) {
                        k.includes(e) || (k.push(e), i.push(e))
                     }),
                     i.length)
                  ) {
                     var r = new XMLHttpRequest(),
                        a = w.getPlatformUrl()
                     a += '/p/boot/'
                     var s = o.stringify({ w: i.join(','), page: w.getPage() })
                     r.open('get', a + '?' + s),
                        (r.withCredentials = !0),
                        (r.onload = function () {
                           b = r.responseURL.includes(g)
                           var t = JSON.parse(r.response)
                           t.status || w.logError('Boot failed because ' + t.reason, t.data),
                              (m = Object.assign({}, m, t.data.widgets)),
                              w.loadAssets(t.data.assets),
                              x.forEach(w.initWidget.bind(w)),
                              (k = k.filter(function (e) {
                                 return !i.includes(e)
                              })),
                              e && e()
                        }),
                        r.send()
                  }
               }),
               (w.getPage = function () {
                  try {
                     var e = document.location.href
                     if (d.test(e)) return new URL(e).toString()
                  } catch (e) {}
               }),
               (w.getPlatformUrl = function () {
                  return e.eappsCustomPlatformUrl ? e.eappsCustomPlatformUrl : w.useServiceCore() ? h : g
               }),
               (w.useServiceCore = function () {
                  return !!document.querySelector('script[data-use-service-core]')
               }),
               (w.revise = function () {
                  var e = y.filter(function (e) {
                     return !(e in m)
                  })
                  e.length > 0 ? w.boot(null, e) : x.forEach(w.initWidget.bind(w))
               }),
               (w.loadAssets = function (t) {
                  t &&
                     t.length &&
                     t
                        .filter(function (e) {
                           return C.indexOf(e) === -1
                        })
                        .forEach(function (t) {
                           var n = e.document.createElement('script')
                           ;(n.src = t),
                              n.setAttribute('defer', 'defer'),
                              n.setAttribute('charset', 'UTF-8'),
                              e.document.head.appendChild(n),
                              C.push(t)
                        })
               }),
               (w.observe = function () {
                  if (e.MutationObserver && !v) {
                     var t = { childList: !0, subtree: !0, characterData: !0 },
                        n = null
                     ;(v = new MutationObserver(function (e) {
                        var t = function (e) {
                           w.requireWidget(w.getWidgetIdByElement(e)), w.addPlaceholder(e)
                        }
                        e.forEach(function (e) {
                           var i = function (e) {
                              var i = w.getWidgetsElements(e)
                              i.forEach(t),
                                 i.length > 0 &&
                                    (n && clearTimeout(n),
                                    (n = setTimeout(function () {
                                       w.revise()
                                    }, 1e3)))
                           }
                           Array.prototype.forEach.call(e.addedNodes, i)
                        })
                     })),
                        v.observe(e.document, t)
                  }
               }),
               w.initialize()
         }
      e.exports = v
   },
   function (e, t, n) {
      /*!
       * domready (c) Dustin Diaz 2014 - License MIT
       */
      !(function (t, n) {
         e.exports = n()
      })('domready', function () {
         var e,
            t = [],
            n = document,
            i = n.documentElement.doScroll,
            o = 'DOMContentLoaded',
            r = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState)
         return (
            r ||
               n.addEventListener(
                  o,
                  (e = function () {
                     for (n.removeEventListener(o, e), r = 1; (e = t.shift()); ) e()
                  })
               ),
            function (e) {
               r ? setTimeout(e, 0) : t.push(e)
            }
         )
      })
   },
   function (e, t, n) {
      'use strict'
      function i(e) {
         return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
               ? function (e) {
                    return typeof e
                 }
               : function (e) {
                    return e &&
                       'function' == typeof Symbol &&
                       e.constructor === Symbol &&
                       e !== Symbol.prototype
                       ? 'symbol'
                       : typeof e
                 })(e)
      }
      function o(e) {
         switch (e.arrayFormat) {
            case 'index':
               return function (t, n, i) {
                  return null === n
                     ? [a(t, e), '[', i, ']'].join('')
                     : [a(t, e), '[', a(i, e), ']=', a(n, e)].join('')
               }
            case 'bracket':
               return function (t, n) {
                  return null === n ? a(t, e) : [a(t, e), '[]=', a(n, e)].join('')
               }
            default:
               return function (t, n) {
                  return null === n ? a(t, e) : [a(t, e), '=', a(n, e)].join('')
               }
         }
      }
      function r(e) {
         var t
         switch (e.arrayFormat) {
            case 'index':
               return function (e, n, i) {
                  return (
                     (t = /\[(\d*)\]$/.exec(e)),
                     (e = e.replace(/\[\d*\]$/, '')),
                     t ? (void 0 === i[e] && (i[e] = {}), void (i[e][t[1]] = n)) : void (i[e] = n)
                  )
               }
            case 'bracket':
               return function (e, n, i) {
                  return (
                     (t = /(\[\])$/.exec(e)),
                     (e = e.replace(/\[\]$/, '')),
                     t
                        ? void 0 === i[e]
                           ? void (i[e] = [n])
                           : void (i[e] = [].concat(i[e], n))
                        : void (i[e] = n)
                  )
               }
            default:
               return function (e, t, n) {
                  return void 0 === n[e] ? void (n[e] = t) : void (n[e] = [].concat(n[e], t))
               }
         }
      }
      function a(e, t) {
         return t.encode ? (t.strict ? c(e) : encodeURIComponent(e)) : e
      }
      function s(e) {
         return Array.isArray(e)
            ? e.sort()
            : 'object' === i(e)
            ? s(Object.keys(e))
                 .sort(function (e, t) {
                    return Number(e) - Number(t)
                 })
                 .map(function (t) {
                    return e[t]
                 })
            : e
      }
      var c = n(55),
         l = n(56)
      ;(t.extract = function (e) {
         return e.split('?')[1] || ''
      }),
         (t.parse = function (e, t) {
            t = l({ arrayFormat: 'none' }, t)
            var n = r(t),
               o = Object.create(null)
            return 'string' != typeof e
               ? o
               : (e = e.trim().replace(/^(\?|#|&)/, ''))
               ? (e.split('&').forEach(function (e) {
                    var t = e.replace(/\+/g, ' ').split('='),
                       i = t.shift(),
                       r = t.length > 0 ? t.join('=') : void 0
                    ;(r = void 0 === r ? null : decodeURIComponent(r)), n(decodeURIComponent(i), r, o)
                 }),
                 Object.keys(o)
                    .sort()
                    .reduce(function (e, t) {
                       var n = o[t]
                       return (
                          Boolean(n) && 'object' === i(n) && !Array.isArray(n)
                             ? (e[t] = s(n))
                             : (e[t] = n),
                          e
                       )
                    }, Object.create(null)))
               : o
         }),
         (t.stringify = function (e, t) {
            var n = { encode: !0, strict: !0, arrayFormat: 'none' }
            t = l(n, t)
            var i = o(t)
            return e
               ? Object.keys(e)
                    .sort()
                    .map(function (n) {
                       var o = e[n]
                       if (void 0 === o) return ''
                       if (null === o) return a(n, t)
                       if (Array.isArray(o)) {
                          var r = []
                          return (
                             o.slice().forEach(function (e) {
                                void 0 !== e && r.push(i(n, e, r.length))
                             }),
                             r.join('&')
                          )
                       }
                       return a(n, t) + '=' + a(o, t)
                    })
                    .filter(function (e) {
                       return e.length > 0
                    })
                    .join('&')
               : ''
         })
   },
   function (e, t) {
      'use strict'
      e.exports = function (e) {
         return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
            return '%' + e.charCodeAt(0).toString(16).toUpperCase()
         })
      }
   },
   function (e, t) {
      /*
     object-assign
     (c) Sindre Sorhus
     @license MIT
     */
      'use strict'
      function n(e) {
         if (null === e || void 0 === e)
            throw new TypeError('Object.assign cannot be called with null or undefined')
         return Object(e)
      }
      function i() {
         try {
            if (!Object.assign) return !1
            var e = new String('abc')
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
            for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
            var i = Object.getOwnPropertyNames(t).map(function (e) {
               return t[e]
            })
            if ('0123456789' !== i.join('')) return !1
            var o = {}
            return (
               'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  o[e] = e
               }),
               'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
            )
         } catch (e) {
            return !1
         }
      }
      var o = Object.getOwnPropertySymbols,
         r = Object.prototype.hasOwnProperty,
         a = Object.prototype.propertyIsEnumerable
      e.exports = i()
         ? Object.assign
         : function (e, t) {
              for (var i, s, c = n(e), l = 1; l < arguments.length; l++) {
                 i = Object(arguments[l])
                 for (var p in i) r.call(i, p) && (c[p] = i[p])
                 if (o) {
                    s = o(i)
                    for (var u = 0; u < s.length; u++) a.call(i, s[u]) && (c[s[u]] = i[s[u]])
                 }
              }
              return c
           }
   },
   function (e, t) {
      function n(e, t, n) {
         var i = [n + ' throws: "' + e + '"']
         t && (i.push('with \n\t ->'), i.push(t)), console.error.apply(console, i)
      }
      ;(n.withModule = function (e) {
         return function (t, i) {
            return n(t, i, e)
         }
      }),
         (e.exports = n)
   },
   function (e, t) {
      var n = function (e) {
         var t = this
         ;(t.initialize = function () {}),
            (t.requireWidget = function (t) {
               return e.requireWidget(t)
            }),
            (t.resetWidget = function (t) {
               return e.resetWidget(t)
            }),
            t.initialize()
      }
      e.exports = n
   },
   function (e, t, n) {
      var i = n(57),
         o = n(60),
         r = n(61),
         a = 'eapps.AppsManager',
         s = function () {
            var e = this,
               t = {},
               n = [],
               s = []
            ;(e.initialize = function () {
               e.logError = i.withModule(a)
            }),
               (e.facade = function () {
                  return new o(e)
               }),
               (e.register = function (n, i) {
                  if (t.name) return void e.logError('Application "' + n + '" is already registered')
                  var o = new i()
                  ;(t[n] = new r(o)), e.initWidgetsFromBuffer(n)
               }),
               (e.app = function (e) {
                  return t[e]
               }),
               (e.initWidget = function (t, i) {
                  var o = e.app(i.app)
                  if (o) {
                     if (s.indexOf(t) !== -1) return
                     s.push(t), o.initWidget(t, i), e.sendExtensionPostMessage(t, i)
                  } else n.push({ element: t, config: i, initialized: !1 })
               }),
               (e.initWidgetsFromBuffer = function (t) {
                  n &&
                     n.length &&
                     n.forEach(function (n) {
                        t !== n.config.app ||
                           n.initialized ||
                           ((n.initialized = !0), e.initWidget(n.element, n.config))
                     })
               }),
               (e.sendExtensionPostMessage = function (e, t) {
                  window.postMessage(
                     {
                        method: 'postMessagePlatformWidget',
                        data: {
                           settings: t.settings,
                           app_slug: t.app,
                           public_id: t.id,
                           platform: t.usingLegacyPlatform ? 'eapps' : 'core',
                        },
                     },
                     '*'
                  )
               }),
               e.initialize()
         }
      e.exports = s
   },
   function (e, t) {
      var n = function (e) {
         var t = this
         ;(t.initialize = function () {}),
            (t.register = function (t, n) {
               return e.register(t, n)
            }),
            t.initialize()
      }
      e.exports = n
   },
   function (e, t) {
      var n = 'https://apps.elfsight.com',
         i = 'https://dash.elfsight.com',
         o = function (e) {
            var t = this,
               o = !1,
               r = []
            ;(t.initialize = function () {
               e.whenReady(t.ready.bind(t))
            }),
               (t.ready = function () {
                  ;(o = !0), t.initWidgetsFromBuffer()
               }),
               (t.initWidget = function (n, i) {
                  if (o) {
                     i.websiteUrl = window.location.host || 'undefined'
                     var a = {
                           widgetId: i.id || null,
                           widgetOrigin: 'apps.elfsight.com',
                           websiteUrl: i.websiteUrl,
                           deactivate: 1 === i.preferences.disable_widget,
                           deactivatedWidgetUrl: i.preferences.deactivated_widget_url,
                           showElfsightLogo: !i.preferences.hide_elfsight_logo,
                           owner: i.isOwner,
                           platform: i.platform,
                           freeLinkUrl: i.preferences.free_link_url,
                           displayFreeLink: !!i.preferences.display_free_link,
                           displayFreeLinkRemove: !!i.preferences.display_free_link_remove,
                           freeLinkURL: i.preferences.free_link_url,
                           freeLinkRemoveURL: i.preferences.free_link_remove_url,
                           freeLinkAnchor: i.preferences.free_link_anchor,
                           displayDeactivation: !!i.preferences.display_deactivation,
                           deactivationURL: i.preferences.deactivation_url,
                        },
                        s = t.getAttributeSettings(n)
                     ;(i.settings = [i.settings, a, s].reduce(function (e, t) {
                        return (
                           Object.keys(t).forEach(function (n) {
                              e[n] = t[n]
                           }),
                           e
                        )
                     }, {})),
                        e.initWidget(n, i.settings, i),
                        i.isOwner &&
                           setTimeout(function () {
                              t.initToolbar(n, i)
                           }, 500)
                  } else r.push({ element: n, config: i, initialized: !1 })
               }),
               (t.initToolbar = function (e, t) {
                  t.usageStatus = function () {
                     var e = 'green'
                     return (
                        t.percentage >= 100 && (e = 'red'),
                        t.percentage >= 90 && t.percentage < 100 && (e = 'orange'),
                        e
                     )
                  }
                  var o = document.implementation.createHTMLDocument(),
                     r = t.usingLegacyPlatform
                        ? ''.concat(n, '/panel/applications/').concat(t.app)
                        : ''.concat(i, '/apps/').concat(t.app),
                     a = t.usingLegacyPlatform
                        ? ''.concat(n, '/panel/applications/').concat(t.app, '?show_pricing=true')
                        : ''.concat(i, '/apps/').concat(t.app, '/pricing'),
                     s = t.usingLegacyPlatform
                        ? ''.concat(n, '/panel/applications/').concat(t.app, '/edit/').concat(t.id)
                        : ''.concat(i, '/widget/').concat(t.id),
                     c = function (e, n) {
                        var i = new URLSearchParams({
                              utm_source: 'clients',
                              utm_medium: 'user-panel',
                              utm_campaign: n,
                              utm_content: t.app,
                              utm_term: t.websiteUrl,
                           }),
                           o = e.includes('?') ? '&' : '?'
                        return ''.concat(e).concat(o).concat(i.toString())
                     }
                  o.body.innerHTML =
                     '<div class="eapps-widget-toolbar">\n                <div class="eapps-widget-toolbar-panel-wrapper">\n                    <div class="eapps-widget-toolbar-panel-only-you">Panel only seen by widget owner</div>\n                    \n                    <div class="eapps-widget-toolbar-panel">\n                        <a href="'
                        .concat(
                           c(r, 'elfsight-icon'),
                           '" target="_blank" title="Panel only seen by widget owner"> \n                            <div class="eapps-widget-toolbar-panel-logo">\n                                <svg width="15px" height="15px" viewBox="0 0 15 15">\n                                    <path d="M9.3907705,9.84479984 C9.39084949,9.84789591 9.39120496,9.85095229 9.39120496,9.85408806 C9.39120496,10.061247 9.22563696,10.22907 9.0213232,10.22907 C8.95852427,10.22907 8.89943798,10.2130737 8.84761899,10.1850899 L8.84754,10.1851296 L7.07973033,9.29155556 L7.08206061,9.28885642 C6.36524438,8.95487756 5.87944133,8.32105601 5.8725295,7.59228825 C5.8724505,7.59197071 5.87205554,7.5920104 5.87205554,7.59161347 C5.87205554,7.04563305 5.78595386,6.41089856 4.91573446,5.65760038 C3.20314046,4.17545506 0.437578214,1.75392969 0.14052742,1.49378024 C0.133220626,1.48790564 0.126229802,1.4816738 0.119396962,1.47528319 C0.116118779,1.47238559 0.113906992,1.47048031 0.113906992,1.47048031 L0.114025481,1.47032154 C0.0438802595,1.40204918 0,1.30619002 0,1.19981216 C0,0.992653173 0.165568,0.824830183 0.369763267,0.824830183 C0.437222748,0.824830183 0.500298153,0.84344631 0.554763389,0.875439056 L0.554881878,0.875240589 L8.16441401,4.79566183 C8.18708482,4.80685532 8.20940017,4.81848544 8.23159702,4.83027433 L8.26027125,4.84504021 C8.26027125,4.84504021 8.25995528,4.84539745 8.25991578,4.84543714 C8.94031653,5.21748181 9.39013856,5.85916262 9.39013856,6.58888301 C9.39013856,6.59412252 9.38970411,6.59924295 9.38966461,6.60448246 L9.39013856,6.60392675 C9.39013856,6.60392675 9.39013856,7.81560238 9.39013856,8.75974562 C9.39013856,9.47057204 9.39065201,9.79137275 9.3907705,9.84479984 Z M7.53431857,14.7455202 C3.55890924,14.6059985 0.437604872,11.2422351 0.576433956,7.24703185 C0.583108811,7.05447997 0.592627391,6.86419061 0.614903238,6.67604469 C0.626238643,6.5803443 0.774902276,5.85483139 1.42366658,5.94136264 C1.91002258,6.00626108 2.06393921,6.43383658 2.02799768,6.75971802 C2.02108585,6.82235395 2.00698571,6.9880335 2.00698571,6.9880335 C1.99805957,7.0901245 1.99174018,7.19296966 1.98810654,7.296569 C1.87645083,10.5094981 4.38663075,13.2146316 7.58357031,13.3268443 C10.7804309,13.4390571 13.4722142,10.9164331 13.58387,7.70354372 C13.6955257,4.49049559 11.1853457,1.78536206 7.98852467,1.67314929 C7.62634467,1.66044746 7.27060255,1.68180242 6.924458,1.73395933 C6.924458,1.73395933 6.08816582,1.8731238 5.90186232,1.30555026 C5.72160174,0.756354691 6.14271005,0.438650054 6.4277935,0.379070511 C6.94780024,0.279003871 7.48672566,0.235103155 8.03781591,0.254473453 C12.0131067,0.393995167 15.1343716,3.75771881 14.9955425,7.75308087 C14.8567529,11.7482842 11.5095699,14.8850419 7.53431857,14.7455202 Z" id="path-1"></path>\n                                </svg>\n                            </div>\n                        </a>\n                        \n                        <a href="'
                        )
                        .concat(
                           c(s, 'edit-widget'),
                           '" target="_blank"> \n                            <div class="eapps-widget-toolbar-panel-edit">\n                                <div class="eapps-widget-toolbar-panel-edit-icon">\n                                    <svg width="15px" height="15px" viewBox="0 0 15 15">\n                                        <path d="M11.8409658,5.0838519 C11.9103036,5.1860702 12.0261968,5.24949902 12.1508333,5.25 L12.25,5.25 C13.2164983,5.25 14,6.03350169 14,7 C14,7.96649831 13.2164983,8.75 12.25,8.75 L12.1998265,8.74999536 C12.0487015,8.7505981 11.9123649,8.84088722 11.8528316,8.97979334 C11.7877518,9.12733583 11.817782,9.29295657 11.9216456,9.39918771 L11.9564161,9.43395833 C12.2850259,9.76220278 12.4696678,10.2076171 12.4696678,10.6720833 C12.4696678,11.1365495 12.2850259,11.5819639 11.956875,11.9097495 C11.6286306,12.2383593 11.1832162,12.4230011 10.71875,12.4230011 C10.2542838,12.4230011 9.80886945,12.2383593 9.48085438,11.909979 L9.45042877,11.8795032 C9.33962324,11.7711153 9.1740025,11.7410852 9.02646001,11.8061649 C8.88755388,11.8656983 8.79726477,12.0020348 8.79666667,12.1508333 L8.79666667,12.25 C8.79666667,13.2164983 8.01316498,14 7.04666667,14 C6.08016835,14 5.29666667,13.2164983 5.29666667,12.25 C5.2931854,12.0554921 5.19476641,11.9178878 5.01447022,11.8503365 C4.87266417,11.7877518 4.70704343,11.817782 4.60081229,11.9216456 L4.56604167,11.9564161 C4.23779722,12.2850259 3.79238285,12.4696678 3.32791667,12.4696678 C2.86345048,12.4696678 2.41803612,12.2850259 2.09025055,11.956875 C1.76164072,11.6286306 1.5769989,11.1832162 1.5769989,10.71875 C1.5769989,10.2542838 1.76164072,9.80886945 2.09002104,9.48085438 L2.12049683,9.45042877 C2.22888469,9.33962324 2.25891482,9.1740025 2.1938351,9.02646001 C2.13430173,8.88755388 1.99796517,8.79726477 1.84916667,8.79666667 L1.75,8.79666667 C0.783501688,8.79666667 1.94289029e-16,8.01316498 0,7.04666667 C-1.2952602e-16,6.08016835 0.783501688,5.29666667 1.75,5.29666667 C1.94450787,5.2931854 2.0821122,5.19476641 2.14966349,5.01447022 C2.21224816,4.87266417 2.18221802,4.70704343 2.07835438,4.60081229 L2.04358388,4.56604167 C1.71497406,4.23779722 1.53033223,3.79238285 1.53033223,3.32791667 C1.53033223,2.86345048 1.71497406,2.41803612 2.043125,2.09025055 C2.37136945,1.76164072 2.81678382,1.5769989 3.28125,1.5769989 C3.74571618,1.5769989 4.19113055,1.76164072 4.51914562,2.09002104 L4.54957123,2.12049683 C4.66037676,2.22888469 4.8259975,2.25891482 4.96780355,2.19633016 C5.00517877,2.17983498 5.04407976,2.16735698 5.0838519,2.15903418 C5.1860702,2.08969644 5.24949902,1.97380324 5.25,1.84916667 L5.25,1.75 C5.25,0.783501688 6.03350169,1.94289029e-16 7,0 C7.96649831,0 8.75,0.783501688 8.75,1.75 L8.74999536,1.80017349 C8.7505981,1.9512985 8.84088722,2.08763507 8.98552978,2.14966349 C9.12733583,2.21224816 9.29295657,2.18221802 9.39918771,2.07835438 L9.43395833,2.04358388 C9.76220278,1.71497406 10.2076171,1.53033223 10.6720833,1.53033223 C11.1365495,1.53033223 11.5819639,1.71497406 11.9097495,2.043125 C12.2383593,2.37136945 12.4230011,2.81678382 12.4230011,3.28125 C12.4230011,3.74571618 12.2383593,4.19113055 11.909979,4.51914562 L11.8795032,4.54957123 C11.7711153,4.66037676 11.7410852,4.8259975 11.8036698,4.96780355 C11.820165,5.00517877 11.832643,5.04407976 11.8409658,5.0838519 Z M5.32570846,3.30839955 C4.77441872,3.50165553 4.15603406,3.36755835 3.72918771,2.94997896 L3.69395833,2.91474945 C3.58454352,2.80521284 3.43607206,2.74366557 3.28125,2.74366557 C3.12642794,2.74366557 2.97795648,2.80521284 2.86808278,2.91520833 C2.75854618,3.02462315 2.6969989,3.17309461 2.6969989,3.32791667 C2.6969989,3.48273873 2.75854618,3.63121018 2.86831229,3.74085438 L2.90783651,3.78042877 C3.3497255,4.23217443 3.47215604,4.90739742 3.23081273,5.45135564 C3.01171177,6.04708399 2.45070951,6.44833064 1.8025,6.46333333 L1.75,6.46333333 C1.4278339,6.46333333 1.16666667,6.72450056 1.16666667,7.04666667 C1.16666667,7.36883277 1.4278339,7.63 1.75,7.63 L1.85149318,7.63000464 C2.46761824,7.63246196 3.02345194,8.00056374 3.26366984,8.56113688 C3.51882271,9.13926925 3.39639217,9.81449224 2.94997896,10.2708123 L2.91474945,10.3060417 C2.80521284,10.4154565 2.74366557,10.5639279 2.74366557,10.71875 C2.74366557,10.8735721 2.80521284,11.0220435 2.91520833,11.1319172 C3.02462315,11.2414538 3.17309461,11.3030011 3.32791667,11.3030011 C3.48273873,11.3030011 3.63121018,11.2414538 3.74085438,11.1316877 L3.78042877,11.0921635 C4.23217443,10.6502745 4.90739742,10.527844 5.45135564,10.7691873 C6.04708399,10.9882882 6.44833064,11.5492905 6.46333333,12.1975 L6.46333333,12.25 C6.46333333,12.5721661 6.72450056,12.8333333 7.04666667,12.8333333 C7.36883277,12.8333333 7.63,12.5721661 7.63,12.25 L7.63000464,12.1485068 C7.63246196,11.5323818 8.00056374,10.9765481 8.56113688,10.7363302 C9.13926925,10.4811773 9.81449224,10.6036078 10.2708123,11.050021 L10.3060417,11.0852505 C10.4154565,11.1947872 10.5639279,11.2563344 10.71875,11.2563344 C10.8735721,11.2563344 11.0220435,11.1947872 11.1319172,11.0847917 C11.2414538,10.9753769 11.3030011,10.8269054 11.3030011,10.6720833 C11.3030011,10.5172613 11.2414538,10.3687898 11.1316877,10.2591456 L11.0921635,10.2195712 C10.6502745,9.76782557 10.527844,9.09260258 10.7829968,8.51447022 C11.0232147,7.95389707 11.5790484,7.58579529 12.1975,7.58333333 L12.25,7.58333333 C12.5721661,7.58333333 12.8333333,7.3221661 12.8333333,7 C12.8333333,6.6778339 12.5721661,6.41666667 12.25,6.41666667 L12.1485068,6.41666203 C11.5323818,6.41420471 10.9765481,6.04610293 10.7338351,5.47979334 C10.7127093,5.43050161 10.6985296,5.37864558 10.6916004,5.32570846 C10.4983445,4.77441872 10.6324417,4.15603406 11.050021,3.72918771 L11.0852505,3.69395833 C11.1947872,3.58454352 11.2563344,3.43607206 11.2563344,3.28125 C11.2563344,3.12642794 11.1947872,2.97795648 11.0847917,2.86808278 C10.9753769,2.75854618 10.8269054,2.6969989 10.6720833,2.6969989 C10.5172613,2.6969989 10.3687898,2.75854618 10.2591456,2.86831229 L10.2195712,2.90783651 C9.76782557,3.3497255 9.09260258,3.47215604 8.52020666,3.21949823 C7.95389707,2.97678527 7.58579529,2.42095158 7.58333333,1.8025 L7.58333333,1.75 C7.58333333,1.4278339 7.3221661,1.16666667 7,1.16666667 C6.6778339,1.16666667 6.41666667,1.4278339 6.41666667,1.75 L6.41666203,1.85149318 C6.41420471,2.46761824 6.04610293,3.02345194 5.47979334,3.2661649 C5.43050161,3.2872907 5.37864558,3.3014704 5.32570846,3.30839955 Z M7,9.33333333 C5.71133558,9.33333333 4.66666667,8.28866442 4.66666667,7 C4.66666667,5.71133558 5.71133558,4.66666667 7,4.66666667 C8.28866442,4.66666667 9.33333333,5.71133558 9.33333333,7 C9.33333333,8.28866442 8.28866442,9.33333333 7,9.33333333 Z M7,8.16666667 C7.64433221,8.16666667 8.16666667,7.64433221 8.16666667,7 C8.16666667,6.35566779 7.64433221,5.83333333 7,5.83333333 C6.35566779,5.83333333 5.83333333,6.35566779 5.83333333,7 C5.83333333,7.64433221 6.35566779,8.16666667 7,8.16666667 Z"></path>\n                                    </svg>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-edit-label">Edit widget</div>\n                            </div>\n                        </a>\n                        \n                        <div class="eapps-widget-toolbar-panel-views eapps-widget-toolbar-panel-views-'
                        )
                        .concat(
                           t.usageStatus(),
                           '">\n                            <div class="eapps-widget-toolbar-panel-views-label">Views</div>\n                            \n                            <div class="eapps-widget-toolbar-panel-views-bar">\n                                <div class="eapps-widget-toolbar-panel-views-bar-inner" style="width:'
                        )
                        .concat(
                           t.percentage,
                           '%"></div>\n                            </div>\n                            \n                            <div class="eapps-widget-toolbar-panel-views-percent">'
                        )
                        .concat(
                           Math.round(t.percentage),
                           '%</div>\n                        </div>\n                        \n                        <a href="'
                        )
                        .concat(c(a, 'extend-limits'), '" target="_blank" style="display:')
                        .concat(
                           t.percentage >= 90 ? 'block' : 'none',
                           '">\n                            <div class="eapps-widget-toolbar-panel-views-get-more">\n                                Extend Limit\n                            </div>\n                        </a>\n                    </div>\n                    \n                    <div class="eapps-widget-toolbar-panel-share" style="display:'
                        )
                        .concat(
                           t.percentage < 90 ? 'inline-flex' : 'none',
                           '">\n                        <div class="eapps-widget-toolbar-panel-share-button">\n                            <svg width="12px" height="12px" viewBox="0 0 24 24">\n                                <path id="XMLID_31_" d="M12.7,15.3c-4.5,0.1-8.4,2.5-10.7,6c-0.2,0.3-0.6,0.5-0.9,0.5c-0.1,0-0.2,0-0.3,0c-0.5-0.1-0.8-0.6-0.8-1c0,0,0-0.1,0-0.1c0-7.1,5.7-12.9,12.7-13V5.5c0-0.5,0.3-0.9,0.7-1.1c0.2-0.1,0.4-0.1,0.6-0.1c0.3,0,0.5,0.1,0.7,0.2l8.8,6c0.3,0.2,0.5,0.6,0.5,0.9c0,0.4-0.2,0.7-0.5,1l-8.8,6.1c-0.2,0.2-0.5,0.2-0.7,0.2c-0.2,0-0.4,0-0.6-0.1c-0.4-0.2-0.7-0.7-0.7-1.1V15.3z"></path>\n                            </svg>\n                            \n                            <span>Share</span>\n                        </div>\n                        \n                        <div class="eapps-widget-toolbar-panel-share-block">\n                            <div class="eapps-widget-toolbar-panel-share-block-text">\n                                <div class="eapps-widget-toolbar-panel-share-block-text-icon">ðŸ”¥</div>\n                                Tell your customers about<br>new website functionality!\n                            </div>\n                            \n                            <div class="eapps-widget-toolbar-panel-share-block-actions">\n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-facebook eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="javascript:void(0)"\n                                       onclick="window.open(\'http://www.facebook.com/sharer.php?u='
                        )
                        .concat(
                           encodeURIComponent(t.websiteUrl),
                           '\', \'facebook\', \'width=555,height=640,toolbar=0,status=0\'); return false;"\n                                       target="_blank" title="Share on Facebook">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M234.747 554.565V346.624h152.512v-81.02C387.259 125.893 492.2.068 621.186.068h168.068v207.918H621.186c-18.412 0-39.85 22.329-39.85 55.801v82.826h207.918v207.929H581.336v469.39H387.247V554.564H234.746z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-twitter eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="https://twitter.com/share?url='
                        )
                        .concat(
                           encodeURIComponent(t.websiteUrl),
                           '&via=elfsight&text=Now my site is cool as ever with a widget by Elfsight from https://elfsight.com/"\n                                       onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\');return false;"\n                                       target="_blank" title="Share on Twitter">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M912.964 321.322c13.032 289.559-202.954 612.433-585.152 612.433-116.254 0-224.521-34.104-315.596-92.559 109.203 12.898 218.206-17.38 304.798-85.227-90.111-1.646-166.12-61.158-192.344-142.973 32.258 6.181 64.008 4.388 92.974-3.532-98.995-19.869-167.378-109.096-165.13-204.452 27.789 15.427 59.512 24.699 93.255 25.742-91.676-61.278-117.633-182.336-63.713-274.868C183.633 280.463 335.317 362.425 506.4 370.988c-29.983-128.778 67.66-252.779 200.585-252.779 59.204 0 112.682 25.006 150.238 65.011 46.882-9.232 90.927-26.384 130.744-49.959-15.386 48.059-48.046 88.438-90.526 113.926 41.61-4.977 81.307-16.069 118.208-32.445-27.562 41.316-62.456 77.574-102.688 106.581z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-google eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="https://plus.google.com/share?url='
                        )
                        .concat(
                           encodeURIComponent(t.websiteUrl),
                           '"\n                                       onclick="javascript:window.open(this.href, \'google+\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480\');return false;"\n                                       target="_blank" title="Share on Google+">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M327.072 448.23v127.536s123.72-.164 174.097-.164c-27.28 82.677-69.698 127.7-174.097 127.7-105.651 0-188.112-85.65-188.112-191.302s82.461-191.302 188.112-191.302c55.861 0 91.937 19.633 125.029 47.001 26.49-26.49 24.274-30.264 91.669-93.908-57.209-52.071-133.245-83.815-216.695-83.815C149.223 189.976 5.051 334.151 5.051 512s144.175 322.024 322.024 322.024c265.837 0 330.813-231.474 309.271-385.793H327.072zm580.285 6.38V343.018h-79.709V454.61H712.866v79.709h114.782v114.782h79.709V534.319h111.592V454.61H907.357z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>'
                        )
                  var l = o.body.children[0]
                  e.classList.add('eapps-widget', 'eapps-widget-show-toolbar'), e.appendChild(l)
               }),
               (t.initWidgetsFromBuffer = function () {
                  r &&
                     r.length &&
                     r.forEach(function (e) {
                        e.initialized || ((e.initialized = !0), t.initWidget(e.element, e.config))
                     })
               }),
               t.initialize(),
               (t.getAttributeSettings = function (e) {
                  var t = {},
                     n = 'elfsightApp'
                  for (var i in e.dataset)
                     if (i.startsWith(n)) {
                        var o = 'attribute'.concat(i.replace(n, ''))
                        t[o] = e.dataset[i]
                     }
                  return t
               })
         }
      e.exports = o
   },
   function (e, t, n) {
      var i = n(63),
         o = function () {
            var e = this
            ;(e.timeout = null),
               (e.buffer = []),
               (e.steps = []),
               (e.facade = function () {
                  return new i(e)
               }),
               (e.send = function () {
                  e.timeout && clearTimeout(e.timeout),
                     (e.timeout = setTimeout(function () {
                        if (e.buffer && e.buffer.length) {
                           e.buffer.forEach(function (t) {
                              if (e.steps && !e.steps.length)
                                 e.steps.push({
                                    app: t.app,
                                    widgetId: t.widgetId,
                                    event: t.event,
                                    count: t.count,
                                 })
                              else {
                                 var n = !1
                                 e.steps.forEach(function (i, o) {
                                    i.app == t.app &&
                                       i.widgetId == t.widgetId &&
                                       i.event == t.event &&
                                       ((e.steps[o].count += t.count), (n = !0))
                                 }),
                                    n ||
                                       e.steps.push({
                                          app: t.app,
                                          widgetId: t.widgetId,
                                          event: t.event,
                                          count: t.count,
                                       })
                              }
                           }),
                              (e.dataToSend = []),
                              e.steps.forEach(function (t) {
                                 e.dataToSend.push({
                                    a: t.app,
                                    w: t.widgetId,
                                    e: t.event,
                                    c: t.count,
                                 })
                              })
                           var t = new XMLHttpRequest()
                           t.open('POST', 'https://eapps-analytics.elfsight.com/store', !0),
                              t.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8'),
                              t.send(btoa(JSON.stringify(e.dataToSend))),
                              (e.dataToSend = []),
                              (e.buffer = []),
                              (e.steps = [])
                        }
                     }, 2500))
               }),
               (e.store = function (e) {})
         }
      e.exports = o
   },
   function (e, t) {
      var n = function (e) {
         var t = this
         t.store = function (e) {}
      }
      e.exports = n
   },
   function (e, t, n) {
      var i = n(65)
      'string' == typeof i && (i = [[e.id, i, '']])
      n(67)(i, {})
      i.locals && (e.exports = i.locals)
   },
   function (e, t, n) {
      ;(t = e.exports = n(66)()),
         t.push([
            e.id,
            'div.eapps-widget{position:relative}div.eapps-widget.eapps-widget-show-toolbar:before{position:absolute;content:"";display:block;bottom:0;top:0;left:0;right:0;pointer-events:none;border:1px solid transparent;transition:border .3s ease;z-index:1}.eapps-widget-toolbar{position:absolute;top:-32px;left:0;right:0;display:block;z-index:99999;padding-bottom:4px;transition:all .3s ease;pointer-events:none;opacity:0}.eapps-widget:hover .eapps-widget-toolbar{opacity:1;pointer-events:auto}.eapps-widget-toolbar a{text-decoration:none;box-shadow:none!important}.eapps-widget-toolbar-panel{border-radius:6px;background-color:#222;color:#fff;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;top:0;position:relative;transition:all .3s ease;opacity:0;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:0 0 0 1px hsla(0,0%,100%,.2);height:28px}.eapps-widget:hover .eapps-widget-toolbar-panel{opacity:1}.eapps-widget-toolbar-panel-wrapper{width:100%;position:relative}.eapps-widget-toolbar-panel-only-you{position:absolute;top:-24px;font-size:11px;line-height:14px;color:#9c9c9c;padding:5px 4px}.eapps-widget-toolbar-panel-logo{width:28px;height:28px;border-right:1px solid hsla(0,0%,100%,.2);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.eapps-widget-toolbar-panel-logo svg{display:block;width:15px;height:15px;fill:#f93262}.eapps-widget-toolbar-panel-edit{font-size:12px;font-weight:400;line-height:14px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding:9px;border-right:1px solid hsla(0,0%,100%,.2);color:#fff;text-decoration:none}.eapps-widget-toolbar-panel-edit-icon{width:14px;height:14px;margin-right:8px}.eapps-widget-toolbar-panel-edit-icon svg{display:block;width:100%;height:100%;fill:#fff}.eapps-widget-toolbar-panel-views{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-views-label{font-size:12px;font-weight:400;line-height:14px;margin-left:8px}.eapps-widget-toolbar-panel-views-bar{display:-ms-inline-flexbox;display:inline-flex;width:70px;height:3px;border-radius:2px;margin-left:8px;background-color:hsla(0,0%,100%,.3)}.eapps-widget-toolbar-panel-views-bar-inner{border-radius:2px;background-color:#4ad504}.eapps-widget-toolbar-panel-views-green .eapps-widget-toolbar-panel-views-bar-inner{background-color:#4ad504}.eapps-widget-toolbar-panel-views-red .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ff4734}.eapps-widget-toolbar-panel-views-orange .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ffb400}.eapps-widget-toolbar-panel-views-percent{display:-ms-inline-flexbox;display:inline-flex;margin-left:8px;margin-right:8px;font-size:12px;font-weight:400;line-height:14px}.eapps-widget-toolbar-panel-views-get-more{padding:9px 16px;background-color:#f93262;color:#fff;font-size:12px;font-weight:400;border-radius:0 6px 6px 0}.eapps-widget-toolbar-panel-share{position:absolute;top:0;display:inline-block;margin-left:8px;width:83px;height:28px;padding-bottom:4px;box-sizing:content-box!important}.eapps-widget-toolbar-panel-share:hover .eapps-widget-toolbar-panel-share-block{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-button{padding:0 18px;height:28px;background-color:#1c91ff;color:#fff;font-size:12px;font-weight:400;border-radius:6px;position:absolute;top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;cursor:default;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-share-button svg{display:inline-block;margin-right:6px;fill:#fff;position:relative;top:-1px}.eapps-widget-toolbar-panel-share-block{position:absolute;background:#fff;border:1px solid hsla(0,0%,7%,.1);border-radius:10px;width:209px;top:32px;transform:translateX(-63px);opacity:0;pointer-events:none;transition:all .3s ease;box-shadow:0 4px 6px rgba(0,0,0,.05)}.eapps-widget-toolbar-panel-share-block:hover{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-block-text{color:#111;font-size:15px;font-weight:400;padding:12px 0;text-align:center}.eapps-widget-toolbar-panel-share-block-text-icon{padding-bottom:4px}.eapps-widget-toolbar-panel-share-block-actions{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid hsla(0,0%,7%,.1)}.eapps-widget-toolbar-panel-share-block-actions-item{width:33.333333%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:39px;transition:all .3s ease;background-color:transparent}.eapps-widget-toolbar-panel-share-block-actions-item:hover{background-color:#fafafa}.eapps-widget-toolbar-panel-share-block-actions-item a{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-share-block-actions-item-icon{width:16px;height:16px;display:block}.eapps-widget-toolbar-panel-share-block-actions-item-facebook .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#3c5a9b}.eapps-widget-toolbar-panel-share-block-actions-item-twitter .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#1ab2e8}.eapps-widget-toolbar-panel-share-block-actions-item-google .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#dd4b39}.eapps-widget-toolbar-panel-share-block-actions-item:not(:last-child){border-right:1px solid hsla(0,0%,7%,.1)}',
            '',
         ])
   },
   function (e, t) {
      e.exports = function () {
         var e = []
         return (
            (e.toString = function () {
               for (var e = [], t = 0; t < this.length; t++) {
                  var n = this[t]
                  n[2] ? e.push('@media ' + n[2] + '{' + n[1] + '}') : e.push(n[1])
               }
               return e.join('')
            }),
            (e.i = function (t, n) {
               'string' == typeof t && (t = [[null, t, '']])
               for (var i = {}, o = 0; o < this.length; o++) {
                  var r = this[o][0]
                  'number' == typeof r && (i[r] = !0)
               }
               for (o = 0; o < t.length; o++) {
                  var a = t[o]
                  ;('number' == typeof a[0] && i[a[0]]) ||
                     (n && !a[2] ? (a[2] = n) : n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
                     e.push(a))
               }
            }),
            e
         )
      }
   },
   function (e, t, n) {
      function i(e, t) {
         for (var n = 0; n < e.length; n++) {
            var i = e[n],
               o = d[i.id]
            if (o) {
               o.refs++
               for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r])
               for (; r < i.parts.length; r++) o.parts.push(l(i.parts[r], t))
            } else {
               for (var a = [], r = 0; r < i.parts.length; r++) a.push(l(i.parts[r], t))
               d[i.id] = { id: i.id, refs: 1, parts: a }
            }
         }
      }
      function o(e) {
         for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var o = e[i],
               r = o[0],
               a = o[1],
               s = o[2],
               c = o[3],
               l = { css: a, media: s, sourceMap: c }
            n[r] ? n[r].parts.push(l) : t.push((n[r] = { id: r, parts: [l] }))
         }
         return t
      }
      function r(e, t) {
         var n = v(),
            i = m[m.length - 1]
         if ('top' === e.insertAt)
            i
               ? i.nextSibling
                  ? n.insertBefore(t, i.nextSibling)
                  : n.appendChild(t)
               : n.insertBefore(t, n.firstChild),
               m.push(t)
         else {
            if ('bottom' !== e.insertAt)
               throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")
            n.appendChild(t)
         }
      }
      function a(e) {
         e.parentNode.removeChild(e)
         var t = m.indexOf(e)
         t >= 0 && m.splice(t, 1)
      }
      function s(e) {
         var t = document.createElement('style')
         return (t.type = 'text/css'), r(e, t), t
      }
      function c(e) {
         var t = document.createElement('link')
         return (t.rel = 'stylesheet'), r(e, t), t
      }
      function l(e, t) {
         var n, i, o
         if (t.singleton) {
            var r = w++
            ;(n = b || (b = s(t))), (i = p.bind(null, n, r, !1)), (o = p.bind(null, n, r, !0))
         } else
            e.sourceMap &&
            'function' == typeof URL &&
            'function' == typeof URL.createObjectURL &&
            'function' == typeof URL.revokeObjectURL &&
            'function' == typeof Blob &&
            'function' == typeof btoa
               ? ((n = c(t)),
                 (i = f.bind(null, n)),
                 (o = function () {
                    a(n), n.href && URL.revokeObjectURL(n.href)
                 }))
               : ((n = s(t)),
                 (i = u.bind(null, n)),
                 (o = function () {
                    a(n)
                 }))
         return (
            i(e),
            function (t) {
               if (t) {
                  if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return
                  i((e = t))
               } else o()
            }
         )
      }
      function p(e, t, n, i) {
         var o = n ? '' : i.css
         if (e.styleSheet) e.styleSheet.cssText = y(t, o)
         else {
            var r = document.createTextNode(o),
               a = e.childNodes
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
         }
      }
      function u(e, t) {
         var n = t.css,
            i = t.media
         if ((i && e.setAttribute('media', i), e.styleSheet)) e.styleSheet.cssText = n
         else {
            for (; e.firstChild; ) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(n))
         }
      }
      function f(e, t) {
         var n = t.css,
            i = t.sourceMap
         i &&
            (n +=
               '\n/*# sourceMappingURL=data:application/json;base64,' +
               btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
               ' */')
         var o = new Blob([n], { type: 'text/css' }),
            r = e.href
         ;(e.href = URL.createObjectURL(o)), r && URL.revokeObjectURL(r)
      }
      var d = {},
         g = function (e) {
            var t
            return function () {
               return 'undefined' == typeof t && (t = e.apply(this, arguments)), t
            }
         },
         h = g(function () {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
         }),
         v = g(function () {
            return document.head || document.getElementsByTagName('head')[0]
         }),
         b = null,
         w = 0,
         m = []
      e.exports = function (e, t) {
         ;(t = t || {}),
            'undefined' == typeof t.singleton && (t.singleton = h()),
            'undefined' == typeof t.insertAt && (t.insertAt = 'bottom')
         var n = o(e)
         return (
            i(n, t),
            function (e) {
               for (var r = [], a = 0; a < n.length; a++) {
                  var s = n[a],
                     c = d[s.id]
                  c.refs--, r.push(c)
               }
               if (e) {
                  var l = o(e)
                  i(l, t)
               }
               for (var a = 0; a < r.length; a++) {
                  var c = r[a]
                  if (0 === c.refs) {
                     for (var p = 0; p < c.parts.length; p++) c.parts[p]()
                     delete d[c.id]
                  }
               }
            }
         )
      }
      var y = (function () {
         var e = []
         return function (t, n) {
            return (e[t] = n), e.filter(Boolean).join('\n')
         }
      })()
   },
])
