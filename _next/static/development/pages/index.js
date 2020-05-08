(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Ffrozzare.github.com%2Fsrc%2Fpages%2Findex.js&hotRouterUpdates=true!./":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Ffrozzare.github.com%2Fsrc%2Fpages%2Findex.js&hotRouterUpdates=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        var mod = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js");
        if (true) {
          module.hot.accept(/*! ./src/pages/index.js */ "./src/pages/index.js", function () {
            if (!next.router.components["/"]) return;
            var updatedPage = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js");
            next.router.update("/", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (
    /*#__PURE__*/
    function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      var _super = _createSuper(_class);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _super.call(this, props);

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances["delete"](this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

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
			s = u(r(4)),
			a = u(r(12)),
			l = u(r(2));
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
					s = e.visibleByDefault;
				return (
					(r.state = { visible: s }),
					s && (o(), n()),
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
								(d && (0, l.default)())
								? o.default.createElement(s.default, {
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
								: o.default.createElement(a.default, {
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
			s = u(r(5)),
			a = r(1),
			l = u(r(2));
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
						(0, l.default)();
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
						key: 'componentWillUnmount',
						value: function() {
							this.LAZY_LOAD_OBSERVER &&
								this.LAZY_LOAD_OBSERVER.observer &&
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
								r = s.default.findDOMNode(this.placeholder)
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
								s = t.x + window.innerWidth,
								a = t.y;
							return Boolean(
								a - r <= n.bottom &&
									o + r >= n.top &&
									i - r <= n.right &&
									s + r >= n.left
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
								s = t.placeholder,
								a = t.style,
								l = t.width;
							if (s && 'function' != typeof s.type)
								return i.default.cloneElement(s, {
									ref: function(t) {
										return (e.placeholder = t);
									},
								});
							var u = n({ display: 'inline-block' }, a);
							return (
								void 0 !== l && (u.width = l),
								void 0 !== o && (u.height = o),
								i.default.createElement(
									'span',
									{
										className: r,
										ref: function(t) {
											return (e.placeholder = t);
										},
										style: u,
									},
									s
								)
							);
						},
					},
				]),
				t
			);
		})(i.default.Component);
		(c.propTypes = {
			onVisible: a.PropTypes.func.isRequired,
			className: a.PropTypes.string,
			height: a.PropTypes.oneOfType([
				a.PropTypes.number,
				a.PropTypes.string,
			]),
			placeholder: a.PropTypes.element,
			threshold: a.PropTypes.number,
			useIntersectionObserver: a.PropTypes.bool,
			scrollPosition: a.PropTypes.shape({
				x: a.PropTypes.number.isRequired,
				y: a.PropTypes.number.isRequired,
			}),
			width: a.PropTypes.oneOfType([
				a.PropTypes.number,
				a.PropTypes.string,
			]),
		}),
			(c.defaultProps = {
				className: '',
				placeholder: null,
				threshold: 100,
				useIntersectionObserver: !0,
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
			s = p(r(5)),
			a = r(1),
			l = p(r(13)),
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
							? (t.delayedScroll = (0, l.default)(n, e.delayTime))
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
										s.default.findDOMNode(
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
										s.default.findDOMNode(
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
					delayMethod: a.PropTypes.oneOf(['debounce', 'throttle']),
					delayTime: a.PropTypes.number,
					useIntersectionObserver: a.PropTypes.bool,
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
		var n = s(r(9)),
			o = s(r(3)),
			i = s(r(6));
		function s(e) {
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
			i = l(r(0)),
			s = r(1),
			a = l(r(3));
		function l(e) {
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
						value: function() {
							var e = this.props,
								t = e.beforeLoad,
								r = e.className,
								n = e.delayMethod,
								o = e.delayTime,
								s = e.height,
								l = e.placeholder,
								u = e.scrollPosition,
								c = e.style,
								f = e.threshold,
								p = e.useIntersectionObserver,
								d = e.visibleByDefault,
								y = e.width;
							return i.default.createElement(
								a.default,
								{
									beforeLoad: t,
									className: r,
									delayMethod: n,
									delayTime: o,
									height: s,
									placeholder: l,
									scrollPosition: u,
									style: c,
									threshold: f,
									useIntersectionObserver: p,
									visibleByDefault: d,
									width: y,
								},
								this.getImg()
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
								s = t.width,
								a = t.wrapperClassName,
								l = this.state.loaded,
								u = l ? ' lazy-load-image-loaded' : '';
							return i.default.createElement(
								'span',
								{
									className:
										a +
										' lazy-load-image-background ' +
										r +
										u,
									style: {
										backgroundImage:
											l || !o ? '' : 'url(' + o + ')',
										backgroundSize:
											l || !o ? '' : '100% 100%',
										color: 'transparent',
										display: 'inline-block',
										height: n,
										width: s,
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
								o = this.getLazyLoadImage();
							return (!t && !r) || n
								? o
								: this.getWrappedLazyLoadImage(o);
						},
					},
				]),
				t
			);
		})(i.default.Component);
		(u.propTypes = {
			afterLoad: s.PropTypes.func,
			beforeLoad: s.PropTypes.func,
			delayMethod: s.PropTypes.string,
			delayTime: s.PropTypes.number,
			effect: s.PropTypes.string,
			placeholderSrc: s.PropTypes.string,
			threshold: s.PropTypes.number,
			useIntersectionObserver: s.PropTypes.bool,
			visibleByDefault: s.PropTypes.bool,
			wrapperClassName: s.PropTypes.string,
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
				function e(e, t, r, o, i, s) {
					if (s !== n) {
						var a = new Error(
							'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
						);
						throw ((a.name = 'Invariant Violation'), a);
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
			o = a(r(0)),
			i = a(r(4)),
			s = a(r(6));
		function a(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var l = (function(e) {
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
		t.default = (0, s.default)(l);
	},
	function(e, t, r) {
		(function(t) {
			var r = 'Expected a function',
				n = NaN,
				o = '[object Symbol]',
				i = /^\s+|\s+$/g,
				s = /^[-+]0x[0-9a-f]+$/i,
				a = /^0b[01]+$/i,
				l = /^0o[0-7]+$/i,
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
				var r = a.test(e);
				return r || l.test(e)
					? u(e.slice(2), r ? 2 : 8)
					: s.test(e)
					? n
					: +e;
			}
			e.exports = function(e, t, n) {
				var o,
					i,
					s,
					a,
					l,
					u,
					c = 0,
					f = !1,
					p = !1,
					d = !0;
				if ('function' != typeof e) throw new TypeError(r);
				function O(t) {
					var r = o,
						n = i;
					return (o = i = void 0), (c = t), (a = e.apply(n, r));
				}
				function w(e) {
					var r = e - u;
					return void 0 === u || r >= t || r < 0 || (p && e - c >= s);
				}
				function g() {
					var e = b();
					if (w(e)) return _(e);
					l = setTimeout(
						g,
						(function(e) {
							var r = t - (e - u);
							return p ? h(r, s - (e - c)) : r;
						})(e)
					);
				}
				function _(e) {
					return (l = void 0), d && o ? O(e) : ((o = i = void 0), a);
				}
				function P() {
					var e = b(),
						r = w(e);
					if (((o = arguments), (i = this), (u = e), r)) {
						if (void 0 === l)
							return (function(e) {
								return (
									(c = e),
									(l = setTimeout(g, t)),
									f ? O(e) : a
								);
							})(u);
						if (p) return (l = setTimeout(g, t)), O(u);
					}
					return void 0 === l && (l = setTimeout(g, t)), a;
				}
				return (
					(t = m(t) || 0),
					v(n) &&
						((f = !!n.leading),
						(s = (p = 'maxWait' in n)
							? y(m(n.maxWait) || 0, t)
							: s),
						(d = 'trailing' in n ? !!n.trailing : d)),
					(P.cancel = function() {
						void 0 !== l && clearTimeout(l),
							(c = 0),
							(o = u = i = l = void 0);
					}),
					(P.flush = function() {
						return void 0 === l ? a : _(b());
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
				s = /^[-+]0x[0-9a-f]+$/i,
				a = /^0b[01]+$/i,
				l = /^0o[0-7]+$/i,
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
					s,
					a,
					l,
					u,
					c = 0,
					f = !1,
					p = !1,
					d = !0;
				if ('function' != typeof e) throw new TypeError(r);
				function v(t) {
					var r = o,
						n = i;
					return (o = i = void 0), (c = t), (a = e.apply(n, r));
				}
				function w(e) {
					var r = e - u;
					return void 0 === u || r >= t || r < 0 || (p && e - c >= s);
				}
				function g() {
					var e = b();
					if (w(e)) return _(e);
					l = setTimeout(
						g,
						(function(e) {
							var r = t - (e - u);
							return p ? h(r, s - (e - c)) : r;
						})(e)
					);
				}
				function _(e) {
					return (l = void 0), d && o ? v(e) : ((o = i = void 0), a);
				}
				function P() {
					var e = b(),
						r = w(e);
					if (((o = arguments), (i = this), (u = e), r)) {
						if (void 0 === l)
							return (function(e) {
								return (
									(c = e),
									(l = setTimeout(g, t)),
									f ? v(e) : a
								);
							})(u);
						if (p) return (l = setTimeout(g, t)), v(u);
					}
					return void 0 === l && (l = setTimeout(g, t)), a;
				}
				return (
					(t = O(t) || 0),
					m(n) &&
						((f = !!n.leading),
						(s = (p = 'maxWait' in n)
							? y(O(n.maxWait) || 0, t)
							: s),
						(d = 'trailing' in n ? !!n.trailing : d)),
					(P.cancel = function() {
						void 0 !== l && clearTimeout(l),
							(c = 0),
							(o = u = i = l = void 0);
					}),
					(P.flush = function() {
						return void 0 === l ? a : _(b());
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
				var r = a.test(e);
				return r || l.test(e)
					? u(e.slice(2), r ? 2 : 8)
					: s.test(e)
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

/***/ "./node_modules/react-timeago/lib/dateParser.js":
/*!******************************************************!*\
  !*** ./node_modules/react-timeago/lib/dateParser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateParser;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function dateParser(date) {
  var parsed = new Date(date);
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed;
  }

  var parts = String(date).match(/\d+/g);
  if (parts == null || parts.length <= 2) {
    return parsed;
  } else {
    var _parts$map = parts.map(function (x) {
      return parseInt(x);
    }),
        _parts$map2 = _toArray(_parts$map),
        firstP = _parts$map2[0],
        secondP = _parts$map2[1],
        restPs = _parts$map2.slice(2);

    var correctedParts = [firstP, secondP - 1].concat(_toConsumableArray(restPs));
    var isoDate = new Date(Date.UTC.apply(Date, _toConsumableArray(correctedParts)));
    return isoDate;
  }
}

/***/ }),

/***/ "./node_modules/react-timeago/lib/defaultFormatter.js":
/*!************************************************************!*\
  !*** ./node_modules/react-timeago/lib/defaultFormatter.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultFormatter;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function defaultFormatter(value, unit, suffix) {
  if (value !== 1) {
    unit += 's';
  }
  return value + ' ' + unit + ' ' + suffix;
}

/***/ }),

/***/ "./node_modules/react-timeago/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-timeago/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _defaultFormatter = __webpack_require__(/*! ./defaultFormatter */ "./node_modules/react-timeago/lib/defaultFormatter.js");

var _defaultFormatter2 = _interopRequireDefault(_defaultFormatter);

var _dateParser = __webpack_require__(/*! ./dateParser */ "./node_modules/react-timeago/lib/dateParser.js");

var _dateParser2 = _interopRequireDefault(_dateParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = React.Component;


// Just some simple constants for readability
var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365;

var TimeAgo = function (_Component) {
  _inherits(TimeAgo, _Component);

  function TimeAgo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeAgo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeAgo.__proto__ || Object.getPrototypeOf(TimeAgo)).call.apply(_ref, [this].concat(args))), _this), _this.isStillMounted = false, _this.tick = function (refresh) {
      if (!_this.isStillMounted || !_this.props.live) {
        return;
      }

      var then = (0, _dateParser2.default)(_this.props.date).valueOf();
      if (!then) {
        console.warn('[react-timeago] Invalid Date provided');
        return;
      }

      var now = _this.props.now();
      var seconds = Math.round(Math.abs(now - then) / 1000);

      var unboundPeriod = seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 0;
      var period = Math.min(Math.max(unboundPeriod, _this.props.minPeriod * 1000), _this.props.maxPeriod * 1000);

      if (period) {
        if (_this.timeoutId) {
          clearTimeout(_this.timeoutId);
        }
        _this.timeoutId = setTimeout(_this.tick, period);
      }

      if (!refresh) {
        _this.forceUpdate();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeAgo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isStillMounted = true;
      if (this.props.live) {
        this.tick(true);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {
        if (!this.props.live && this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isStillMounted = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          date = _props.date,
          formatter = _props.formatter,
          Komponent = _props.component,
          live = _props.live,
          minPeriod = _props.minPeriod,
          maxPeriod = _props.maxPeriod,
          title = _props.title,
          now = _props.now,
          passDownProps = _objectWithoutProperties(_props, ['date', 'formatter', 'component', 'live', 'minPeriod', 'maxPeriod', 'title', 'now']);
      /* eslint-enable no-unused-vars */


      var then = (0, _dateParser2.default)(date).valueOf();
      if (!then) {
        return null;
      }
      var timeNow = now();
      var seconds = Math.round(Math.abs(timeNow - then) / 1000);
      var suffix = then < timeNow ? 'ago' : 'from now';

      var _ref2 = seconds < MINUTE ? [Math.round(seconds), 'second'] : seconds < HOUR ? [Math.round(seconds / MINUTE), 'minute'] : seconds < DAY ? [Math.round(seconds / HOUR), 'hour'] : seconds < WEEK ? [Math.round(seconds / DAY), 'day'] : seconds < MONTH ? [Math.round(seconds / WEEK), 'week'] : seconds < YEAR ? [Math.round(seconds / MONTH), 'month'] : [Math.round(seconds / YEAR), 'year'],
          _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[0],
          unit = _ref3[1];

      var passDownTitle = typeof title === 'undefined' ? typeof date === 'string' ? date : (0, _dateParser2.default)(date).toISOString().substr(0, 16).replace('T', ' ') : title;

      var spreadProps = Komponent === 'time' ? Object.assign({}, passDownProps, {
        dateTime: (0, _dateParser2.default)(date).toISOString()
      }) : passDownProps;

      var nextFormatter = _defaultFormatter2.default.bind(null, value, unit, suffix);

      return React.createElement(
        Komponent,
        _extends({}, spreadProps, { title: passDownTitle }),
        formatter(value, unit, suffix, then, nextFormatter, now)
      );
    }
  }]);

  return TimeAgo;
}(Component);

TimeAgo.displayName = 'TimeAgo';
TimeAgo.defaultProps = {
  live: true,
  component: 'time',
  minPeriod: 0,
  maxPeriod: Infinity,
  formatter: _defaultFormatter2.default,
  now: function now() {
    return Date.now();
  }
};
exports.default = TimeAgo;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./src/components/latestRepos/index.js":
/*!*********************************************!*\
  !*** ./src/components/latestRepos/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-timeago */ "./node_modules/react-timeago/lib/index.js");
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_timeago__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link */ "./src/components/link/index.js");
var _this = undefined,
    _jsxFileName = "/Users/fredrik/u/github/frozzare/frozzare.github.com/src/components/latestRepos/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      repos = _useState[0],
      setRepos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      events = _useState2[0],
      setEvents = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch('https://gh-latest-repos.frozzare.now.sh/').then(function (r) {
      return r.json();
    }).then(setRepos);
    fetch('https://api.github.com/users/frozzare/events/public').then(function (r) {
      return r.json();
    }).then(function (r) {
      setEvents(r.filter(function (p) {
        return p.type === 'PushEvent';
      }));
    });
  }, []);
  var reposHtml = repos.map(function (repo) {
    return __jsx("div", {
      className: "w-full lg:w-1/2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "p-2 pl-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx("h4", {
      className: "text-xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: repo.url,
      className: "underline",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, repo.name), __jsx("span", {
      className: "text-xs rounded py-1 px-2 ml-2",
      style: {
        backgroundColor: repo.primaryLanguage.color
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, repo.primaryLanguage.name)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, repo.description)));
  });
  var latestCommit = events.slice(0, 1).map(function (event) {
    var commit = event.payload.commits.pop() || {};
    var repo = event.repo || {};
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: (commit.url || '').replace('api.', '').replace('repos/', '').replace('commits', 'commit'),
      className: "underline",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 12
      }
    }, commit.message)), __jsx("p", {
      className: "text-xs text-gray-500 pt-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx(react_timeago__WEBPACK_IMPORTED_MODULE_1___default.a, {
      date: event.created_at,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 51
      }
    }), " in ", __jsx("a", {
      href: (repo.url || '').replace('api.', '').replace('repos/', ''),
      className: "underline",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 90
      }
    }, event.repo.name)));
  });
  return __jsx("div", {
    id: "projects",
    className: "bg-gray-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container mx-auto px-10 lg:px-0 py-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex justify-center content-center min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "m-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full lg:w-3/4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "text-3xl pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Selected projects"), __jsx("div", {
    className: "flex flex-wrap pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "p-2 pl-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "https://personnummer.dev",
    className: "underline",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Personnummer"), __jsx("span", {
    className: "text-xs rounded py-1 px-2 ml-2",
    style: {
      backgroundColor: 'rgb(241, 224, 90)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "JavaScript")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, "packages for validating Swedish personal identity numbers in different programming languages."))), __jsx("div", {
    className: "w-full lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "p-2 pl-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "https://swedishtechevents.com/",
    className: "underline",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "Swedish Tech Events"), __jsx("span", {
    className: "text-xs rounded py-1 px-2 ml-2",
    style: {
      backgroundColor: 'rgb(241, 224, 90)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "JavaScript")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }, "Events for developers, technologists, and other geeks in Sweden.")))), __jsx("h3", {
    className: "text-3xl pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Latest repos"), __jsx("div", {
    className: "flex flex-wrap pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, repos.length ? reposHtml : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 47
    }
  }, "Loading..")), __jsx("h3", {
    className: "text-3xl pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Latest commit"), events.length ? latestCommit : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 49
    }
  }, "Loading..."), __jsx("p", {
    className: "mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "https://github.com/frozzare",
    title: "Visit my GitHub profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }))))))));
});

/***/ }),

/***/ "./src/components/link/index.js":
/*!**************************************!*\
  !*** ./src/components/link/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/fredrik/u/github/frozzare/frozzare.github.com/src/components/link/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      to = _ref.to;
  return __jsx("a", {
    className: "underline text-blue-500",
    href: to,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }, children);
});

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
var _this = undefined,
    _jsxFileName = "/Users/fredrik/u/github/frozzare/frozzare.github.com/src/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Fredrik Forsmo"), __jsx("meta", {
    name: "description",
    content: "Full-stack developer, tech maker and open source ninja.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "Fredrik Forsmo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Full-stack developer, tech maker and open source ninja.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://frozzare.com/frozzare.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: "Fredrik Forsmo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: "Full-stack developer, tech maker and open source ninja.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://frozzare.com/frozzare.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  })), __jsx("div", {
    id: "home",
    className: "container mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "pt-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-wrap content-center min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "h-48 w-48 lg:h-64 lg:w-64 lg:pin-l lg:pin-t mt-10 mb-10 lg:mt-0 lg:-mt-32 mb-0 lg:mb-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    src: "/frozzare.jpg",
    alt: "Fredrik Forsmo",
    className: "rounded h-48 w-48 lg:h-64 lg:w-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "w-11/12 lg:w-2/4 m-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-6xl pb-5 text-center lg:text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Hello! \uD83D\uDC4B"), __jsx("p", {
    className: "text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "I'm Fredrik Forsmo, full-stack developer, tech maker and open source ninja and focusing on JavaScript and Go. I'm ", __jsx(_components_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "https://twitter.com/frozzare",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 151
    }
  }, "@frozzare"), " on Twitter."))))), __jsx(_components_latestRepos__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }));
});

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Ffrozzare.github.com%2Fsrc%2Fpages%2Findex.js&hotRouterUpdates=true ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Ffrozzare.github.com%2Fsrc%2Fpages%2Findex.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Ffrozzare.github.com%2Fsrc%2Fpages%2Findex.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map