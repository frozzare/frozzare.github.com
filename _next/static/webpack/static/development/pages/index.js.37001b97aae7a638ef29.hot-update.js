webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-lazy-load-image-component/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-lazy-load-image-component/build/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function(e) {
	var t = {};
	function r(n) {
		if (t[n]) return t[n].exports;
		var o = (t[n] = { i: n, l: !1, exports: {} });
		return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
	}
	return (
		(r.m = e),
		(r.c = t),
		(r.d = function(e, t, n) {
			r.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(r.r = function(e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(r.t = function(e, t) {
			if ((1 & t && (e = r(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(r.r(n),
				Object.defineProperty(n, 'default', {
					enumerable: !0,
					value: e,
				}),
				2 & t && 'string' != typeof e)
			)
				for (var o in e)
					r.d(
						n,
						o,
						function(t) {
							return e[t];
						}.bind(null, o)
					);
			return n;
		}),
		(r.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e.default;
					  }
					: function() {
							return e;
					  };
			return r.d(t, 'a', t), t;
		}),
		(r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(r.p = ''),
		r((r.s = 8))
	);
})([
	function(e, t) {
		e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
	},
	function(e, t, r) {
		e.exports = r(10)();
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.default = function() {
				return (
					'undefined' != typeof window &&
					'IntersectionObserver' in window &&
					'isIntersecting' in
						window.IntersectionObserverEntry.prototype
				);
			});
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 });
		var n = (function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t;
				};
			})(),
			o = u(r(0)),
			i = r(1),
			a = u(r(4)),
			l = u(r(12)),
			s = u(r(2));
		function u(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var c = (function(e) {
			function t(e) {
				!(function(e, t) {
					if (!(e instanceof t))
						throw new TypeError(
							'Cannot call a class as a function'
						);
				})(this, t);
				var r = (function(e, t) {
						if (!e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return !t ||
							('object' != typeof t && 'function' != typeof t)
							? e
							: t;
					})(
						this,
						(t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
					),
					n = e.afterLoad,
					o = e.beforeLoad,
					i = e.scrollPosition,
					a = e.visibleByDefault;
				return (
					(r.state = { visible: a }),
					a && (o(), n()),
					(r.onVisible = r.onVisible.bind(r)),
					(r.isScrollTracked = Boolean(
						i &&
							Number.isFinite(i.x) &&
							i.x >= 0 &&
							Number.isFinite(i.y) &&
							i.y >= 0
					)),
					r
				);
			}
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function, not ' +
								typeof t
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						t &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: (e.__proto__ = t));
				})(t, e),
				n(t, [
					{
						key: 'componentDidUpdate',
						value: function(e, t) {
							t.visible !== this.state.visible &&
								this.props.afterLoad();
						},
					},
					{
						key: 'onVisible',
						value: function() {
							this.props.beforeLoad(),
								this.setState({ visible: !0 });
						},
					},
					{
						key: 'render',
						value: function() {
							if (this.state.visible) return this.props.children;
							var e = this.props,
								t = e.className,
								r = e.delayMethod,
								n = e.delayTime,
								i = e.height,
								u = e.placeholder,
								c = e.scrollPosition,
								f = e.style,
								p = e.threshold,
								d = e.useIntersectionObserver,
								y = e.width;
							return this.isScrollTracked ||
								(d && (0, s.default)())
								? o.default.createElement(a.default, {
										className: t,
										height: i,
										onVisible: this.onVisible,
										placeholder: u,
										scrollPosition: c,
										style: f,
										threshold: p,
										useIntersectionObserver: d,
										width: y,
								  })
								: o.default.createElement(l.default, {
										className: t,
										delayMethod: r,
										delayTime: n,
										height: i,
										onVisible: this.onVisible,
										placeholder: u,
										style: f,
										threshold: p,
										width: y,
								  });
						},
					},
				]),
				t
			);
		})(o.default.Component);
		(c.propTypes = {
			afterLoad: i.PropTypes.func,
			beforeLoad: i.PropTypes.func,
			useIntersectionObserver: i.PropTypes.bool,
			visibleByDefault: i.PropTypes.bool,
		}),
			(c.defaultProps = {
				afterLoad: function() {
					return {};
				},
				beforeLoad: function() {
					return {};
				},
				useIntersectionObserver: !0,
				visibleByDefault: !1,
			}),
			(t.default = c);
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 });
		var n =
				Object.assign ||
				function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r)
							Object.prototype.hasOwnProperty.call(r, n) &&
								(e[n] = r[n]);
					}
					return e;
				},
			o = (function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t;
				};
			})(),
			i = u(r(0)),
			a = u(r(5)),
			l = r(1),
			s = u(r(2));
		function u(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var c = (function(e) {
			function t(e) {
				!(function(e, t) {
					if (!(e instanceof t))
						throw new TypeError(
							'Cannot call a class as a function'
						);
				})(this, t);
				var r = (function(e, t) {
						if (!e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return !t ||
							('object' != typeof t && 'function' != typeof t)
							? e
							: t;
					})(
						this,
						(t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
					),
					n =
						!e.scrollPosition &&
						e.useIntersectionObserver &&
						(0, s.default)();
				if (((r.LAZY_LOAD_OBSERVER = { supportsObserver: n }), n)) {
					var o = e.threshold;
					r.LAZY_LOAD_OBSERVER.observer = new IntersectionObserver(
						r.checkIntersections,
						{ rootMargin: o + 'px' }
					);
				}
				return r;
			}
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function, not ' +
								typeof t
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						t &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: (e.__proto__ = t));
				})(t, e),
				o(t, [
					{
						key: 'checkIntersections',
						value: function(e) {
							e.forEach(function(e) {
								e.isIntersecting && e.target.onVisible();
							});
						},
					},
					{
						key: 'componentDidMount',
						value: function() {
							this.placeholder &&
								this.LAZY_LOAD_OBSERVER &&
								this.LAZY_LOAD_OBSERVER.observer &&
								((this.placeholder.onVisible = this.props.onVisible),
								this.LAZY_LOAD_OBSERVER.observer.observe(
									this.placeholder
								)),
								this.LAZY_LOAD_OBSERVER &&
									!this.LAZY_LOAD_OBSERVER.supportsObserver &&
									this.updateVisibility();
						},
					},
					{
						key: 'componentWillUnMount',
						value: function() {
							this.LAZY_LOAD_OBSERVER &&
								this.LAZY_LOAD_OBSERVER.observer.unobserve(
									this.placeholder
								);
						},
					},
					{
						key: 'componentDidUpdate',
						value: function() {
							this.LAZY_LOAD_OBSERVER &&
								!this.LAZY_LOAD_OBSERVER.supportsObserver &&
								this.updateVisibility();
						},
					},
					{
						key: 'getPlaceholderBoundingBox',
						value: function() {
							var e =
									arguments.length > 0 &&
									void 0 !== arguments[0]
										? arguments[0]
										: this.props.scrollPosition,
								t = this.placeholder.getBoundingClientRect(),
								r = a.default.findDOMNode(this.placeholder)
									.style,
								n = {
									left:
										parseInt(
											r.getPropertyValue('margin-left'),
											10
										) || 0,
									top:
										parseInt(
											r.getPropertyValue('margin-top'),
											10
										) || 0,
								};
							return {
								bottom: e.y + t.bottom + n.top,
								left: e.x + t.left + n.left,
								right: e.x + t.right + n.left,
								top: e.y + t.top + n.top,
							};
						},
					},
					{
						key: 'isPlaceholderInViewport',
						value: function() {
							if (
								'undefined' == typeof window ||
								!this.placeholder
							)
								return !1;
							var e = this.props,
								t = e.scrollPosition,
								r = e.threshold,
								n = this.getPlaceholderBoundingBox(t),
								o = t.y + window.innerHeight,
								i = t.x,
								a = t.x + window.innerWidth,
								l = t.y;
							return Boolean(
								l - r <= n.bottom &&
									o + r >= n.top &&
									i - r <= n.right &&
									a + r >= n.left
							);
						},
					},
					{
						key: 'updateVisibility',
						value: function() {
							this.isPlaceholderInViewport() &&
								this.props.onVisible();
						},
					},
					{
						key: 'render',
						value: function() {
							var e = this,
								t = this.props,
								r = t.className,
								o = t.height,
								a = t.placeholder,
								l = t.style,
								s = t.width;
							return a && 'function' != typeof a.type
								? i.default.cloneElement(a, {
										ref: function(t) {
											return (e.placeholder = t);
										},
								  })
								: i.default.createElement(
										'span',
										{
											className: r,
											ref: function(t) {
												return (e.placeholder = t);
											},
											style: n(
												{
													display: 'inline-block',
													height: o,
													width: s,
												},
												l
											),
										},
										a
								  );
						},
					},
				]),
				t
			);
		})(i.default.Component);
		(c.propTypes = {
			onVisible: l.PropTypes.func.isRequired,
			className: l.PropTypes.string,
			height: l.PropTypes.number,
			placeholder: l.PropTypes.element,
			threshold: l.PropTypes.number,
			useIntersectionObserver: l.PropTypes.bool,
			scrollPosition: l.PropTypes.shape({
				x: l.PropTypes.number.isRequired,
				y: l.PropTypes.number.isRequired,
			}),
			width: l.PropTypes.number,
		}),
			(c.defaultProps = {
				className: '',
				height: 0,
				placeholder: null,
				threshold: 100,
				useIntersectionObserver: !0,
				width: 0,
			}),
			(t.default = c);
	},
	function(e, t) {
		e.exports = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 });
		var n =
				Object.assign ||
				function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r)
							Object.prototype.hasOwnProperty.call(r, n) &&
								(e[n] = r[n]);
					}
					return e;
				},
			o = (function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t;
				};
			})(),
			i = p(r(0)),
			a = p(r(5)),
			l = r(1),
			s = p(r(13)),
			u = p(r(14)),
			c = p(r(2)),
			f = p(r(15));
		function p(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function d(e, t) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !t || ('object' != typeof t && 'function' != typeof t)
				? e
				: t;
		}
		var y = function() {
				return 'undefined' == typeof window
					? 0
					: window.scrollX || window.pageXOffset;
			},
			h = function() {
				return 'undefined' == typeof window
					? 0
					: window.scrollY || window.pageYOffset;
			};
		t.default = function(e) {
			var t = (function(t) {
				function r(e) {
					!(function(e, t) {
						if (!(e instanceof t))
							throw new TypeError(
								'Cannot call a class as a function'
							);
					})(this, r);
					var t = d(
						this,
						(r.__proto__ || Object.getPrototypeOf(r)).call(this, e)
					);
					if (
						((t.useIntersectionObserver =
							e.useIntersectionObserver && (0, c.default)()),
						t.useIntersectionObserver)
					)
						return d(t);
					var n = t.onChangeScroll.bind(t);
					return (
						'debounce' === e.delayMethod
							? (t.delayedScroll = (0, s.default)(n, e.delayTime))
							: 'throttle' === e.delayMethod &&
							  (t.delayedScroll = (0, u.default)(
									n,
									e.delayTime
							  )),
						(t.state = { scrollPosition: { x: y(), y: h() } }),
						(t.baseComponentRef = i.default.createRef()),
						t
					);
				}
				return (
					(function(e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function, not ' +
									typeof t
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							t &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(e, t)
									: (e.__proto__ = t));
					})(r, t),
					o(r, [
						{
							key: 'componentDidMount',
							value: function() {
								this.addListeners();
							},
						},
						{
							key: 'componentWillUnmount',
							value: function() {
								this.removeListeners();
							},
						},
						{
							key: 'componentDidUpdate',
							value: function() {
								'undefined' == typeof window ||
									this.useIntersectionObserver ||
									((0, f.default)(
										a.default.findDOMNode(
											this.baseComponentRef.current
										)
									) !== this.scrollElement &&
										(this.removeListeners(),
										this.addListeners()));
							},
						},
						{
							key: 'addListeners',
							value: function() {
								'undefined' == typeof window ||
									this.useIntersectionObserver ||
									((this.scrollElement = (0, f.default)(
										a.default.findDOMNode(
											this.baseComponentRef.current
										)
									)),
									this.scrollElement.addEventListener(
										'scroll',
										this.delayedScroll,
										{ passive: !0 }
									),
									window.addEventListener(
										'resize',
										this.delayedScroll,
										{ passive: !0 }
									),
									this.scrollElement !== window &&
										window.addEventListener(
											'scroll',
											this.delayedScroll,
											{ passive: !0 }
										));
							},
						},
						{
							key: 'removeListeners',
							value: function() {
								'undefined' == typeof window ||
									this.useIntersectionObserver ||
									(this.scrollElement.removeEventListener(
										'scroll',
										this.delayedScroll
									),
									window.removeEventListener(
										'resize',
										this.delayedScroll
									),
									this.scrollElement !== window &&
										window.removeEventListener(
											'scroll',
											this.delayedScroll
										));
							},
						},
						{
							key: 'onChangeScroll',
							value: function() {
								this.useIntersectionObserver ||
									this.setState({
										scrollPosition: { x: y(), y: h() },
									});
							},
						},
						{
							key: 'render',
							value: function() {
								var t = this.props,
									r =
										(t.delayMethod,
										t.delayTime,
										(function(e, t) {
											var r = {};
											for (var n in e)
												t.indexOf(n) >= 0 ||
													(Object.prototype.hasOwnProperty.call(
														e,
														n
													) &&
														(r[n] = e[n]));
											return r;
										})(t, ['delayMethod', 'delayTime'])),
									o = this.useIntersectionObserver
										? null
										: this.state.scrollPosition;
								return i.default.createElement(
									e,
									n(
										{
											ref: this.baseComponentRef,
											scrollPosition: o,
										},
										r
									)
								);
							},
						},
					]),
					r
				);
			})(i.default.Component);
			return (
				(t.propTypes = {
					delayMethod: l.PropTypes.oneOf(['debounce', 'throttle']),
					delayTime: l.PropTypes.number,
					useIntersectionObserver: l.PropTypes.bool,
				}),
				(t.defaultProps = {
					delayMethod: 'throttle',
					delayTime: 300,
					useIntersectionObserver: !0,
				}),
				t
			);
		};
	},
	function(e, t) {
		var r;
		r = (function() {
			return this;
		})();
		try {
			r = r || new Function('return this')();
		} catch (e) {
			'object' == typeof window && (r = window);
		}
		e.exports = r;
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.trackWindowScroll = t.LazyLoadComponent = t.LazyLoadImage = void 0);
		var n = a(r(9)),
			o = a(r(3)),
			i = a(r(6));
		function a(e) {
			return e && e.__esModule ? e : { default: e };
		}
		(t.LazyLoadImage = n.default),
			(t.LazyLoadComponent = o.default),
			(t.trackWindowScroll = i.default);
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 });
		var n =
				Object.assign ||
				function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r)
							Object.prototype.hasOwnProperty.call(r, n) &&
								(e[n] = r[n]);
					}
					return e;
				},
			o = (function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t;
				};
			})(),
			i = s(r(0)),
			a = r(1),
			l = s(r(3));
		function s(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var u = (function(e) {
			function t(e) {
				!(function(e, t) {
					if (!(e instanceof t))
						throw new TypeError(
							'Cannot call a class as a function'
						);
				})(this, t);
				var r = (function(e, t) {
					if (!e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return !t ||
						('object' != typeof t && 'function' != typeof t)
						? e
						: t;
				})(
					this,
					(t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
				);
				return (r.state = { loaded: !1 }), r;
			}
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function, not ' +
								typeof t
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						t &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: (e.__proto__ = t));
				})(t, e),
				o(t, [
					{
						key: 'onImageLoad',
						value: function() {
							var e = this;
							return this.state.loaded
								? null
								: function() {
										e.props.afterLoad(),
											e.setState({ loaded: !0 });
								  };
						},
					},
					{
						key: 'getImg',
						value: function() {
							var e = this.props,
								t =
									(e.afterLoad,
									e.beforeLoad,
									e.delayMethod,
									e.delayTime,
									e.effect,
									e.placeholder,
									e.placeholderSrc,
									e.scrollPosition,
									e.threshold,
									e.useIntersectionObserver,
									e.visibleByDefault,
									e.wrapperClassName,
									(function(e, t) {
										var r = {};
										for (var n in e)
											t.indexOf(n) >= 0 ||
												(Object.prototype.hasOwnProperty.call(
													e,
													n
												) &&
													(r[n] = e[n]));
										return r;
									})(e, [
										'afterLoad',
										'beforeLoad',
										'delayMethod',
										'delayTime',
										'effect',
										'placeholder',
										'placeholderSrc',
										'scrollPosition',
										'threshold',
										'useIntersectionObserver',
										'visibleByDefault',
										'wrapperClassName',
									]));
							return i.default.createElement(
								'img',
								n({ onLoad: this.onImageLoad() }, t)
							);
						},
					},
					{
						key: 'getLazyLoadImage',
						value: function(e) {
							var t = this.props,
								r = t.beforeLoad,
								n = t.className,
								o = t.delayMethod,
								a = t.delayTime,
								s = t.height,
								u = t.placeholder,
								c = t.scrollPosition,
								f = t.style,
								p = t.threshold,
								d = t.useIntersectionObserver,
								y = t.visibleByDefault,
								h = t.width;
							return i.default.createElement(
								l.default,
								{
									beforeLoad: r,
									className: n,
									delayMethod: o,
									delayTime: a,
									height: s,
									placeholder: u,
									scrollPosition: c,
									style: f,
									threshold: p,
									useIntersectionObserver: d,
									visibleByDefault: y,
									width: h,
								},
								e
							);
						},
					},
					{
						key: 'getWrappedLazyLoadImage',
						value: function(e) {
							var t = this.props,
								r = t.effect,
								n = t.height,
								o = t.placeholderSrc,
								a = t.width,
								l = t.wrapperClassName,
								s = this.state.loaded,
								u = s ? ' lazy-load-image-loaded' : '';
							return i.default.createElement(
								'span',
								{
									className:
										l +
										' lazy-load-image-background ' +
										r +
										u,
									style: {
										backgroundImage:
											s || !o ? '' : 'url(' + o + ')',
										backgroundSize:
											s || !o ? '' : '100% 100%',
										color: 'transparent',
										display: 'inline-block',
										height: n,
										width: a,
									},
								},
								e
							);
						},
					},
					{
						key: 'render',
						value: function() {
							var e = this.props,
								t = e.effect,
								r = e.placeholderSrc,
								n = e.visibleByDefault,
								o = this.state.loaded,
								i = this.getImg(),
								a = o ? i : this.getLazyLoadImage(i);
							return (!t && !r) || n
								? a
								: this.getWrappedLazyLoadImage(a);
						},
					},
				]),
				t
			);
		})(i.default.Component);
		(u.propTypes = {
			afterLoad: a.PropTypes.func,
			beforeLoad: a.PropTypes.func,
			delayMethod: a.PropTypes.string,
			delayTime: a.PropTypes.number,
			effect: a.PropTypes.string,
			placeholderSrc: a.PropTypes.string,
			threshold: a.PropTypes.number,
			useIntersectionObserver: a.PropTypes.bool,
			visibleByDefault: a.PropTypes.bool,
			wrapperClassName: a.PropTypes.string,
		}),
			(u.defaultProps = {
				afterLoad: function() {
					return {};
				},
				beforeLoad: function() {
					return {};
				},
				delayMethod: 'throttle',
				delayTime: 300,
				effect: '',
				placeholderSrc: null,
				threshold: 100,
				useIntersectionObserver: !0,
				visibleByDefault: !1,
				wrapperClassName: '',
			}),
			(t.default = u);
	},
	function(e, t, r) {
		'use strict';
		var n = r(11);
		function o() {}
		function i() {}
		(i.resetWarningCache = o),
			(e.exports = function() {
				function e(e, t, r, o, i, a) {
					if (a !== n) {
						var l = new Error(
							'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
						);
						throw ((l.name = 'Invariant Violation'), l);
					}
				}
				function t() {
					return e;
				}
				e.isRequired = e;
				var r = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: i,
					resetWarningCache: o,
				};
				return (r.PropTypes = r), r;
			});
	},
	function(e, t, r) {
		'use strict';
		e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 });
		var n = (function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t;
				};
			})(),
			o = l(r(0)),
			i = l(r(4)),
			a = l(r(6));
		function l(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var s = (function(e) {
			function t(e) {
				return (
					(function(e, t) {
						if (!(e instanceof t))
							throw new TypeError(
								'Cannot call a class as a function'
							);
					})(this, t),
					(function(e, t) {
						if (!e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return !t ||
							('object' != typeof t && 'function' != typeof t)
							? e
							: t;
					})(
						this,
						(t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
					)
				);
			}
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function, not ' +
								typeof t
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						t &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: (e.__proto__ = t));
				})(t, e),
				n(t, [
					{
						key: 'render',
						value: function() {
							return o.default.createElement(
								i.default,
								this.props
							);
						},
					},
				]),
				t
			);
		})(o.default.Component);
		t.default = (0, a.default)(s);
	},
	function(e, t, r) {
		(function(t) {
			var r = 'Expected a function',
				n = NaN,
				o = '[object Symbol]',
				i = /^\s+|\s+$/g,
				a = /^[-+]0x[0-9a-f]+$/i,
				l = /^0b[01]+$/i,
				s = /^0o[0-7]+$/i,
				u = parseInt,
				c = 'object' == typeof t && t && t.Object === Object && t,
				f =
					'object' == typeof self &&
					self &&
					self.Object === Object &&
					self,
				p = c || f || Function('return this')(),
				d = Object.prototype.toString,
				y = Math.max,
				h = Math.min,
				b = function() {
					return p.Date.now();
				};
			function v(e) {
				var t = typeof e;
				return !!e && ('object' == t || 'function' == t);
			}
			function m(e) {
				if ('number' == typeof e) return e;
				if (
					(function(e) {
						return (
							'symbol' == typeof e ||
							((function(e) {
								return !!e && 'object' == typeof e;
							})(e) &&
								d.call(e) == o)
						);
					})(e)
				)
					return n;
				if (v(e)) {
					var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
					e = v(t) ? t + '' : t;
				}
				if ('string' != typeof e) return 0 === e ? e : +e;
				e = e.replace(i, '');
				var r = l.test(e);
				return r || s.test(e)
					? u(e.slice(2), r ? 2 : 8)
					: a.test(e)
					? n
					: +e;
			}
			e.exports = function(e, t, n) {
				var o,
					i,
					a,
					l,
					s,
					u,
					c = 0,
					f = !1,
					p = !1,
					d = !0;
				if ('function' != typeof e) throw new TypeError(r);
				function O(t) {
					var r = o,
						n = i;
					return (o = i = void 0), (c = t), (l = e.apply(n, r));
				}
				function w(e) {
					var r = e - u;
					return void 0 === u || r >= t || r < 0 || (p && e - c >= a);
				}
				function g() {
					var e = b();
					if (w(e)) return _(e);
					s = setTimeout(
						g,
						(function(e) {
							var r = t - (e - u);
							return p ? h(r, a - (e - c)) : r;
						})(e)
					);
				}
				function _(e) {
					return (s = void 0), d && o ? O(e) : ((o = i = void 0), l);
				}
				function P() {
					var e = b(),
						r = w(e);
					if (((o = arguments), (i = this), (u = e), r)) {
						if (void 0 === s)
							return (function(e) {
								return (
									(c = e),
									(s = setTimeout(g, t)),
									f ? O(e) : l
								);
							})(u);
						if (p) return (s = setTimeout(g, t)), O(u);
					}
					return void 0 === s && (s = setTimeout(g, t)), l;
				}
				return (
					(t = m(t) || 0),
					v(n) &&
						((f = !!n.leading),
						(a = (p = 'maxWait' in n)
							? y(m(n.maxWait) || 0, t)
							: a),
						(d = 'trailing' in n ? !!n.trailing : d)),
					(P.cancel = function() {
						void 0 !== s && clearTimeout(s),
							(c = 0),
							(o = u = i = s = void 0);
					}),
					(P.flush = function() {
						return void 0 === s ? l : _(b());
					}),
					P
				);
			};
		}.call(this, r(7)));
	},
	function(e, t, r) {
		(function(t) {
			var r = 'Expected a function',
				n = NaN,
				o = '[object Symbol]',
				i = /^\s+|\s+$/g,
				a = /^[-+]0x[0-9a-f]+$/i,
				l = /^0b[01]+$/i,
				s = /^0o[0-7]+$/i,
				u = parseInt,
				c = 'object' == typeof t && t && t.Object === Object && t,
				f =
					'object' == typeof self &&
					self &&
					self.Object === Object &&
					self,
				p = c || f || Function('return this')(),
				d = Object.prototype.toString,
				y = Math.max,
				h = Math.min,
				b = function() {
					return p.Date.now();
				};
			function v(e, t, n) {
				var o,
					i,
					a,
					l,
					s,
					u,
					c = 0,
					f = !1,
					p = !1,
					d = !0;
				if ('function' != typeof e) throw new TypeError(r);
				function v(t) {
					var r = o,
						n = i;
					return (o = i = void 0), (c = t), (l = e.apply(n, r));
				}
				function w(e) {
					var r = e - u;
					return void 0 === u || r >= t || r < 0 || (p && e - c >= a);
				}
				function g() {
					var e = b();
					if (w(e)) return _(e);
					s = setTimeout(
						g,
						(function(e) {
							var r = t - (e - u);
							return p ? h(r, a - (e - c)) : r;
						})(e)
					);
				}
				function _(e) {
					return (s = void 0), d && o ? v(e) : ((o = i = void 0), l);
				}
				function P() {
					var e = b(),
						r = w(e);
					if (((o = arguments), (i = this), (u = e), r)) {
						if (void 0 === s)
							return (function(e) {
								return (
									(c = e),
									(s = setTimeout(g, t)),
									f ? v(e) : l
								);
							})(u);
						if (p) return (s = setTimeout(g, t)), v(u);
					}
					return void 0 === s && (s = setTimeout(g, t)), l;
				}
				return (
					(t = O(t) || 0),
					m(n) &&
						((f = !!n.leading),
						(a = (p = 'maxWait' in n)
							? y(O(n.maxWait) || 0, t)
							: a),
						(d = 'trailing' in n ? !!n.trailing : d)),
					(P.cancel = function() {
						void 0 !== s && clearTimeout(s),
							(c = 0),
							(o = u = i = s = void 0);
					}),
					(P.flush = function() {
						return void 0 === s ? l : _(b());
					}),
					P
				);
			}
			function m(e) {
				var t = typeof e;
				return !!e && ('object' == t || 'function' == t);
			}
			function O(e) {
				if ('number' == typeof e) return e;
				if (
					(function(e) {
						return (
							'symbol' == typeof e ||
							((function(e) {
								return !!e && 'object' == typeof e;
							})(e) &&
								d.call(e) == o)
						);
					})(e)
				)
					return n;
				if (m(e)) {
					var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
					e = m(t) ? t + '' : t;
				}
				if ('string' != typeof e) return 0 === e ? e : +e;
				e = e.replace(i, '');
				var r = l.test(e);
				return r || s.test(e)
					? u(e.slice(2), r ? 2 : 8)
					: a.test(e)
					? n
					: +e;
			}
			e.exports = function(e, t, n) {
				var o = !0,
					i = !0;
				if ('function' != typeof e) throw new TypeError(r);
				return (
					m(n) &&
						((o = 'leading' in n ? !!n.leading : o),
						(i = 'trailing' in n ? !!n.trailing : i)),
					v(e, t, { leading: o, maxWait: t, trailing: i })
				);
			};
		}.call(this, r(7)));
	},
	function(e, t, r) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 });
		var n = function(e, t) {
				return 'undefined' == typeof getComputedStyle
					? e.style[t]
					: getComputedStyle(e, null).getPropertyValue(t);
			},
			o = function(e) {
				return (
					n(e, 'overflow') + n(e, 'overflow-y') + n(e, 'overflow-x')
				);
			};
		t.default = function(e) {
			if (!(e instanceof HTMLElement)) return window;
			for (
				var t = e;
				t &&
				t !== document.body &&
				t !== document.documentElement &&
				t.parentNode;

			) {
				if (/(scroll|auto)/.test(o(t))) return t;
				t = t.parentNode;
			}
			return window;
		};
	},
]);


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_latestRepos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/latestRepos */ "./src/components/latestRepos/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/fredrik/u/github/frozzare/newwww/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Fredrik Forsmo")), __jsx("div", {
    id: "home",
    className: "container mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "pt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap content-center min-h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    src: "https://frozzare.com/static/frozzare.jpg",
    alt: "Fredrik Forsmo",
    className: "rounded h-48 w-48 lg:h-64 lg:w-64 lg:pin-l lg:pin-t mt-10 mb-10 lg:mt-0 lg:-mt-32 mb-0 lg:mb-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "w-11/12 lg:w-2/4 m-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "text-6xl pb-5 text-center lg:text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Hello! \uD83D\uDC4B"), __jsx("p", {
    className: "text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "I'm Fredrik Forsmo, full-stack developer, tech maker and open source ninja and focusing on JavaScript, PHP and Go. I'm ", __jsx(_components_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "https://twitter.com/frozzare",
    title: "@frozzare",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), " on Twitter."))))), __jsx(_components_latestRepos__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.37001b97aae7a638ef29.hot-update.js.map