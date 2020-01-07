(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Fnewwww%2Fsrc%2Fpages%2Findex.js!./":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Fnewwww%2Fsrc%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.js */ "./src/pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

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
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

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
var _jsxFileName = "/Users/fredrik/u/github/frozzare/newwww/src/components/latestRepos/index.js";

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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "p-2 pl-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("h4", {
      className: "text-xl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("a", {
      href: repo.url,
      className: "underline",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, repo.name), __jsx("span", {
      className: "text-xs rounded py-1 px-2 ml-2",
      style: {
        backgroundColor: repo.primaryLanguage.color
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, repo.primaryLanguage.name)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, repo.description)));
  });
  var latestCommit = events.slice(0, 1).map(function (event) {
    var commit = event.payload.commits.pop() || {};
    var repo = event.repo || {};
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("a", {
      href: (commit.url || '').replace('api.', '').replace('repos/', ''),
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, commit.message), " in ", __jsx("a", {
      href: (repo.url || '').replace('api.', '').replace('repos/', ''),
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, event.repo.name)), __jsx("p", {
      className: "text-xs text-gray-500 pt-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(react_timeago__WEBPACK_IMPORTED_MODULE_1___default.a, {
      date: event.created_at,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })));
  });
  return __jsx("div", {
    id: "projects",
    className: "flex content-center bg-gray-100 p-10 min-h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "m-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h3", {
    className: "text-3xl pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Selected projects"), __jsx("div", {
    className: "flex flex-wrap pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "p-2 pl-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h4", {
    className: "text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/ylletjs/yllet/",
    className: "underline",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Yllet"), __jsx("span", {
    className: "text-xs rounded py-1 px-2 ml-2",
    style: {
      backgroundColor: 'rgb(241, 224, 90)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "JavaScript")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Yllet is a set of packages for the WordPress API for both React and non-React projects."))), __jsx("div", {
    className: "w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "p-2 pl-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h4", {
    className: "text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    href: "https://swedishtechevents.com/",
    className: "underline",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Swedish Tech Events"), __jsx("span", {
    className: "text-xs rounded py-1 px-2 ml-2",
    style: {
      backgroundColor: 'rgb(241, 224, 90)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "JavaScript")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Events for developers, technologists, and other geeks in Sweden.")))), __jsx("h3", {
    className: "text-3xl pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Latest repos"), __jsx("div", {
    className: "flex flex-wrap pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, repos.length ? reposHtml : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Loading..")), __jsx("h3", {
    className: "text-3xl pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Latest commit"), events.length ? latestCommit : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Loading..."), __jsx("p", {
    className: "mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "https://github.com/frozzare",
    title: "Visit my GitHub profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })))));
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
var _jsxFileName = "/Users/fredrik/u/github/frozzare/newwww/src/components/link/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      to = _ref.to;
  return __jsx("a", {
    className: "underline text-blue-500",
    href: to,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, title);
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
var _jsxFileName = "/Users/fredrik/u/github/frozzare/newwww/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "pb-10 lg:pb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap content-center min-h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "https://frozzare.com/static/frozzare.jpg",
    className: "rounded h-48 w-48 lg:pin-l lg:pin-t mt-10 mb-10 lg:mt-0 lg:-mt-32 mb-0 lg:mb-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("div", {
    className: "w-11/12 lg:w-3/4 m-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    className: "text-6xl pb-5 text-center lg:text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Hello! \uD83D\uDC4B"), __jsx("p", {
    className: "text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "I'm Fredrik Forsmo, full-stack developer, tech maker and open source ninja and focusing on JavaScript, PHP and Go. I'm ", __jsx(_components_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "https://twitter.com/frozzare",
    title: "@frozzare",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), " on Twitter.")))), __jsx(_components_latestRepos__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
});

/***/ }),

/***/ 1:
/*!*********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Fnewwww%2Fsrc%2Fpages%2Findex.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Fnewwww%2Fsrc%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ffredrik%2Fu%2Fgithub%2Ffrozzare%2Fnewwww%2Fsrc%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map