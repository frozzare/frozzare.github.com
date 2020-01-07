webpackHotUpdate("static/development/pages/index.js",{

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
    className: "bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto mt-64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center content-center min-h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "m-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h3", {
    className: "text-3xl pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Selected projects"), __jsx("div", {
    className: "flex flex-wrap pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "p-2 pl-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h4", {
    className: "text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/ylletjs/yllet/",
    className: "underline",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Yllet"), __jsx("span", {
    className: "text-xs rounded py-1 px-2 ml-2",
    style: {
      backgroundColor: 'rgb(241, 224, 90)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "JavaScript")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Yllet is a set of packages for the WordPress API for both React and non-React projects."))), __jsx("div", {
    className: "w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "p-2 pl-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h4", {
    className: "text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("a", {
    href: "https://swedishtechevents.com/",
    className: "underline",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Swedish Tech Events"), __jsx("span", {
    className: "text-xs rounded py-1 px-2 ml-2",
    style: {
      backgroundColor: 'rgb(241, 224, 90)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "JavaScript")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Events for developers, technologists, and other geeks in Sweden.")))), __jsx("h3", {
    className: "text-3xl pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Latest repos"), __jsx("div", {
    className: "flex flex-wrap pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, repos.length ? reposHtml : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Loading..")), __jsx("h3", {
    className: "text-3xl pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Latest commit"), events.length ? latestCommit : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Loading..."), __jsx("p", {
    className: "mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "https://github.com/frozzare",
    title: "Visit my GitHub profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))))))));
});

/***/ })

})
//# sourceMappingURL=index.js.92af258811fdf2e19c63.hot-update.js.map