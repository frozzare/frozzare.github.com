webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fredrik/u/github/frozzare/newwww/src/components/navbar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var menus = [{
  title: 'Home',
  path: '#home'
}, {
  title: 'Projects',
  path: '#projects'
}, {
  title: 'Contact',
  path: '#contact'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var SmoothScroll = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");

    new SmoothScroll('a[href*="#"]');
  }, []);
  return __jsx("nav", {
    className: "fixed select-none bg-grey lg:flex lg:items-stretch w-full text-gray-500 bg-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-no-shrink items-stretch h-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "flex-no-grow flex-no-shrink relative p-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: "/logo-white.png",
    alt: "Frozzare",
    className: "w-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("button", {
    className: "block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4 mt-2 mr-1",
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, open ? __jsx("svg", {
    className: "fill-current text-white",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    onClick: function onClick() {
      return setOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("path", {
    d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })) : __jsx("svg", {
    className: "fill-current text-white",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    onClick: function onClick() {
      return setOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))), __jsx("div", {
    className: 'lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ' + (open ? 'block' : 'hidden lg:block'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "lg:flex lg:justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("div", {
    className: "lg:flex lg:items-stretch lg:justify-end ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, menus.map(function (m, mi) {
    return __jsx("a", {
      href: m.path,
      key: mi,
      className: "text-sm flex-no-grow flex-no-shrink relative py-5 px-5 leading-normal text-white no-underline flex items-center hover:bg-grey-dark hover:underline",
      onClick: function onClick() {
        return setOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, m.title);
  }))));
});

/***/ }),

/***/ "./src/images/logo-white.png":
false

})
//# sourceMappingURL=_app.js.72bafce38c71b205b271.hot-update.js.map