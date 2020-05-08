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

/***/ })

})
//# sourceMappingURL=index.js.4051466285569080e7d1.hot-update.js.map