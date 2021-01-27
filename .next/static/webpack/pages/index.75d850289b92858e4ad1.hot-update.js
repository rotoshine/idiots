webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.tsx");
/* harmony import */ var _components_Containter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Containter */ "./components/Containter.tsx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _components_Panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Panel */ "./components/Panel.tsx");


var _jsxFileName = "/home/winterwolf0412/workspace/idiots/pages/index.tsx",
    _s = $RefreshSig$();









var __N_SSG = true;
function IndexPage(_ref) {
  _s();

  var _this = this,
      _homeContent$schedule,
      _homeContent$schedule2,
      _homeContent$schedule3,
      _homeContent$schedule4;

  var homeContent = _ref.homeContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      coverImageIndex = _useState[0],
      setCoverImageIndex = _useState[1];

  var indexRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(coverImageIndex);
  var coverImages = homeContent === null || homeContent === void 0 ? void 0 : homeContent.carouselImages;
  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["useTransition"])(coverImages === null || coverImages === void 0 ? void 0 : coverImages[coverImageIndex], function (item) {
    return (item === null || item === void 0 ? void 0 : item.id) || '';
  }, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: react_spring__WEBPACK_IMPORTED_MODULE_7__["config"].molasses
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _coverImages$length;

    var MAX_INDEX = ((_coverImages$length = coverImages === null || coverImages === void 0 ? void 0 : coverImages.length) !== null && _coverImages$length !== void 0 ? _coverImages$length : 1) - 1;
    var timeout = setInterval(function () {
      if ((indexRef === null || indexRef === void 0 ? void 0 : indexRef.current) === MAX_INDEX) {
        indexRef.current = 0;
      } else {
        indexRef.current = indexRef.current + 1;
      }

      setCoverImageIndex(indexRef.current);
    }, 5000);
    return function () {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
      description: "\uB514\uC9C0\uD138 \uC2F1\uAE00 \uC5B8\uC81C\uB098\uC758 \uBC1C\uB9E4\uC5D0 \uC55E\uC11C \uCEE8\uC149 \uC77C\uB7EC\uC2A4\uD2B8\uC640 \uC0C8 \uAD7F\uC988\uB4E4\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4! \uD504\uB85C\uD544 \uB9C1\uD06C \uB610\uB294 \uB9C8\uD50C\uC0F5\uC5D0\uC11C \uBC34\uB4DC \uC774\uB514\uC5B4\uCE20\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694",
      imageUrl: "https://idiots.band/images/eonjena.png",
      imageWidth: 900,
      imageHeight: 900
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['cover-image-carousel'],
      children: transitions.map(function (_ref2) {
        var item = _ref2.item,
            props = _ref2.props,
            key = _ref2.key;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"].div, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['cover-image'],
          style: props,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "https://idiots.roto.codes/".concat(item === null || item === void 0 ? void 0 : item.url),
            layout: "fill",
            objectFit: "cover",
            objectPosition: "center",
            alt: "idiots cover image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Containter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage__contents,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage__panels,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage__newsPanels,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Panel__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "News",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "\uD83D\uDC9C\uD83D\uDC7B\uC5B8\uC81C\uB098 \u1110\u1175\u1109\u1167\u110E\u1173 \u1111\u1161\u11AB\u1106\u1162\u1100\u1162\u1109\u1175!!\uD83D\uDC7B\uD83D\uDC9C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this), "\uC548\uB1FD! \uB514\uC9C0\uD138 \uC2F1\uAE00 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "\uC5B8\uC81C\uB098"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 28
              }, this), "\uC758 \uBC1C\uB9E4\uC5D0 \uC55E\uC11C \uCEE8\uC149 \uC77C\uB7EC\uC2A4\uD2B8\uC640 \uC0C8 \uAD7F\uC988\uB4E4\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4!", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, this), " \uD504\uB85C\uD544 \uB9C1\uD06C \uB610\uB294 \uB9C8\uD50C\uC0F5\uC5D0\uC11C \uBC34\uB4DC \uC774\uB514\uC5B4\uCE20\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694 \uD83D\uDC7B\uD83D\uDC9C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\uD83C\uDF08\u1109\u1162\u11A8\u1109\u1161\u11BC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\uBE14\uB799, \uB85C\uC584\uBE14\uB8E8, \uC624\uB80C\uC9C0, \uD654\uC774\uD2B8, \uC138\uC774\uD504\uD2F0 \uADF8\uB9B0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\u2728\u110C\u116E\u1106\u116E\u11AB\u1107\u1161\u11BC\u1107\u1165\u11B8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://marpple.shop/kr/band_idiots",
                  target: "_blank",
                  rel: "noopener norefferer",
                  children: "https://marpple.shop/kr/band_idiots"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, this), ' ', "\uD639\uC740 \u1106\u1161\u1111\u1173\u11AF\u1109\u1163\u11B8 \u1100\u1165\u11B7\u1109\u1162\u11A8\u110E\u1161\u11BC\u110B\u1166 \"\u1107\u1162\u11AB\u1103\u1173 \u110B\u1175\u1103\u1175\u110B\u1165\u110E\u1173\" \u1100\u1165\u11B7\u1109\u1162\u11A8!"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u1106\u1175\u1105\u1175 \u1106\u1161\u11AB\u1103\u1173\u11AF\u110B\u1165\u1103\u116E\u1102\u1173\u11AB\u1100\u1165\u11BA\u110B\u1175 \u110B\u1161\u1102\u1175\u11AB \u110C\u116E\u1106\u116E\u11AB \u110E\u1171\u1112\u1161\u11B8 \u1112\u116E \u110C\u1166\u110C\u1161\u11A8\u1112\u1161\u1102\u1173\u11AB \u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1173\u1105\u1169 \u1103\u1161\u1109\u1169 \u1109\u1175\u1100\u1161\u11AB\u110B\u1175 \u1100\u1165\u11AF\u1105\u1175\u11B8\u1102\u1175\u1103\u1161\uD83D\uDE16 \u110C\u116E\u1106\u116E\u11AB\u1109\u1175 \u110B\u1168\u1109\u1161\u11BC \u110E\u116E\u11AF\u1100\u1169\u110B\u1175\u11AF\u110B\u1173\u11AF \u1112\u116A\u11A8\u110B\u1175\u11AB\u1112\u1162\u110C\u116E\u1109\u1166\u110B\u116D!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u1106\u1161\u11AD\u110B\u1173\u11AB \u1100\u116A\u11AB\u1109\u1175\u11B7 \u1107\u116E\u1110\u1161\u11A8\u1103\u1173\u1105\u1175\u11B8\u1102\u1175\u1103\u1161 \uD83C\uDFB5\uD83D\uDC7B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/eonjena.png",
                alt: "\uC5B8\uC81C\uB098 \uCEE4\uBC84 \uC774\uBBF8\uC9C0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Panel__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "\uC774\uB514\uC5B4\uCE20 11\uC6D4 \uC2A4\uCF00\uC974",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "https://idiots.roto.codes/".concat(homeContent.schedulePosters[0].url),
                fluid: homeContent === null || homeContent === void 0 ? void 0 : (_homeContent$schedule = homeContent.schedulePosters) === null || _homeContent$schedule === void 0 ? void 0 : (_homeContent$schedule2 = _homeContent$schedule[0]) === null || _homeContent$schedule2 === void 0 ? void 0 : (_homeContent$schedule3 = _homeContent$schedule2.localFile) === null || _homeContent$schedule3 === void 0 ? void 0 : (_homeContent$schedule4 = _homeContent$schedule3.childImageSharp) === null || _homeContent$schedule4 === void 0 ? void 0 : _homeContent$schedule4.fluid,
                alt: "\uC774\uB514\uC5B4\uCE20 11\uC6D4 \uC2A4\uCF00\uC974",
                loading: "lazy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(IndexPage, "WCmwQgb7eJnWj9EyeHhka+/KgJE=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_7__["useTransition"]];
});

_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImhvbWVDb250ZW50IiwidXNlU3RhdGUiLCJjb3ZlckltYWdlSW5kZXgiLCJzZXRDb3ZlckltYWdlSW5kZXgiLCJpbmRleFJlZiIsInVzZVJlZiIsImNvdmVySW1hZ2VzIiwiY2Fyb3VzZWxJbWFnZXMiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJpdGVtIiwiaWQiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJjb25maWciLCJtb2xhc3NlcyIsInVzZUVmZmVjdCIsIk1BWF9JTkRFWCIsImxlbmd0aCIsInRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwibWFwIiwicHJvcHMiLCJrZXkiLCJ1cmwiLCJJbmRleFBhZ2VfX2NvbnRlbnRzIiwiSW5kZXhQYWdlX19wYW5lbHMiLCJJbmRleFBhZ2VfX25ld3NQYW5lbHMiLCJzY2hlZHVsZVBvc3RlcnMiLCJsb2NhbEZpbGUiLCJjaGlsZEltYWdlU2hhcnAiLCJmbHVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBU2UsU0FBU0EsU0FBVCxPQUEyQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsTUFBdEJDLFdBQXNCLFFBQXRCQSxXQUFzQjs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxDQUFELENBREU7QUFBQSxNQUNqREMsZUFEaUQ7QUFBQSxNQUNoQ0Msa0JBRGdDOztBQUV4RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUNILGVBQUQsQ0FBdkI7QUFFQSxNQUFNSSxXQUFXLEdBQUdOLFdBQUgsYUFBR0EsV0FBSCx1QkFBR0EsV0FBVyxDQUFFTyxjQUFqQztBQUVBLE1BQU1DLFdBQVcsR0FB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QUcsRUFBQyxzREFOTjtBQU9FLHVCQUFPLEVBQUM7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkVEOztHQWhIdUJyQyxTO1VBTUZVLDBEOzs7S0FORVYsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NWQ4NTAyODliOTI4NThlNGFkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbnRlcidcbmltcG9ydCB7IGFuaW1hdGVkLCBjb25maWcsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9QYW5lbCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaG9tZUNvbnRlbnQ6IHtcbiAgICBjYXJvdXNlbEltYWdlczogYW55XG4gICAgc2NoZWR1bGVQb3N0ZXJzOiBhbnlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoeyBob21lQ29udGVudCB9OiBQcm9wcykge1xuICBjb25zdCBbY292ZXJJbWFnZUluZGV4LCBzZXRDb3ZlckltYWdlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgaW5kZXhSZWYgPSB1c2VSZWYoY292ZXJJbWFnZUluZGV4KVxuXG4gIGNvbnN0IGNvdmVySW1hZ2VzID0gaG9tZUNvbnRlbnQ/LmNhcm91c2VsSW1hZ2VzXG5cbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKFxuICAgIGNvdmVySW1hZ2VzPy5bY292ZXJJbWFnZUluZGV4XSxcbiAgICBpdGVtID0+IGl0ZW0/LmlkIHx8ICcnLFxuICAgIHtcbiAgICAgIGZyb206IHsgb3BhY2l0eTogMCB9LFxuICAgICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgbGVhdmU6IHsgb3BhY2l0eTogMCB9LFxuICAgICAgY29uZmlnOiBjb25maWcubW9sYXNzZXMsXG4gICAgfVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBNQVhfSU5ERVggPSAoY292ZXJJbWFnZXM/Lmxlbmd0aCA/PyAxKSAtIDFcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGluZGV4UmVmPy5jdXJyZW50ID09PSBNQVhfSU5ERVgpIHtcbiAgICAgICAgaW5kZXhSZWYuY3VycmVudCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4UmVmLmN1cnJlbnQgPSBpbmRleFJlZi5jdXJyZW50ICsgMVxuICAgICAgfVxuICAgICAgc2V0Q292ZXJJbWFnZUluZGV4KGluZGV4UmVmLmN1cnJlbnQpXG4gICAgfSwgNTAwMClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIGRlc2NyaXB0aW9uPVwi65SU7KeA7YS4IOyLseq4gCDslrjsoJzrgpjsnZgg67Cc66ek7JeQIOyVnuyEnCDsu6jshYlcbiAgICAgICAg7J2865+s7Iqk7Yq47JmAIOyDiCDqtb/spojrk6TsnYQg7IaM6rCc7ZWp64uI64ukIVxuICAgICAgICDtlITroZztlYQg66eB7YGsIOuYkOuKlCDrp4jtlIzsg7Xsl5DshJwg67C065OcIOydtOuUlOyWtOy4oOulvCDqsoDsg4ntlbTso7zshLjsmpRcIlxuICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vaWRpb3RzLmJhbmQvaW1hZ2VzL2VvbmplbmEucG5nXCJcbiAgICAgICAgaW1hZ2VXaWR0aD17OTAwfVxuICAgICAgICBpbWFnZUhlaWdodD17OTAwfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWydjb3Zlci1pbWFnZS1jYXJvdXNlbCddfT5cbiAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wcywga2V5IH0pID0+IChcbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydjb3Zlci1pbWFnZSddfVxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2lkaW90cy5yb3RvLmNvZGVzLyR7aXRlbT8udXJsfWB9XG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYWx0PVwiaWRpb3RzIGNvdmVyIGltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19jb250ZW50c30+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19wYW5lbHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2VfX25ld3NQYW5lbHN9PlxuICAgICAgICAgICAgICA8UGFuZWwgdGl0bGU9XCJOZXdzXCI+XG4gICAgICAgICAgICAgICAgPGgyPvCfkpzwn5G77Ja47KCc64KYIOGEkOGFteGEieGFp+GEjuGFsyDhhJHhhaHhhqvhhIbhhaLhhIDhhaLhhInhhbUhIfCfkbvwn5KcPC9oMj5cbiAgICAgICAgICAgICAgICDslYjrh70hIOuUlOyngO2EuCDsi7HquIAgPGNvZGU+7Ja47KCc64KYPC9jb2RlPuydmCDrsJzrp6Tsl5Ag7JWe7IScIOy7qOyFiVxuICAgICAgICAgICAgICAgIOydvOufrOyKpO2KuOyZgCDsg4gg6rW/7KaI65Ok7J2EIOyGjOqwnO2VqeuLiOuLpCFcbiAgICAgICAgICAgICAgICA8YnIgLz4g7ZSE66Gc7ZWEIOunge2BrCDrmJDripQg66eI7ZSM7IO17JeQ7IScIOuwtOuTnCDsnbTrlJTslrTsuKDrpbwg6rKA7IOJ7ZW07KO87IS47JqUXG4gICAgICAgICAgICAgICAg8J+Ru/CfkpxcbiAgICAgICAgICAgICAgICA8aDM+8J+MiOGEieGFouGGqOGEieGFoeGGvDwvaDM+XG4gICAgICAgICAgICAgICAgPHA+67iU656ZLCDroZzsloTruJTro6gsIOyYpOugjOyngCwg7ZmU7J207Yq4LCDshLjsnbTtlITti7Ag6re466awPC9wPlxuICAgICAgICAgICAgICAgIDxoMz7inKjhhIzhha7hhIbhha7hhqvhhIfhhaHhhrzhhIfhhaXhhrg8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFycHBsZS5zaG9wL2tyL2JhbmRfaWRpb3RzXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZmZXJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIGh0dHBzOi8vbWFycHBsZS5zaG9wL2tyL2JhbmRfaWRpb3RzXG4gICAgICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgICAgIO2YueydgCDhhIbhhaHhhJHhhbPhhq/hhInhhaPhhrgg4YSA4YWl4Ya34YSJ4YWi4Yao4YSO4YWh4Ya84YSL4YWmIFwi4YSH4YWi4Yar4YSD4YWzIOGEi+GFteGEg+GFteGEi+GFpeGEjuGFs1wiXG4gICAgICAgICAgICAgICAgICDhhIDhhaXhhrfhhInhhaLhhqghXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAg4YSG4YW14YSF4YW1IOGEhuGFoeGGq+GEg+GFs+GGr+GEi+GFpeGEg+GFruGEguGFs+GGq+GEgOGFpeGGuuGEi+GFtSDhhIvhhaHhhILhhbXhhqsg4YSM4YWu4YSG4YWu4YarIOGEjuGFseGEkuGFoeGGuCDhhJLhha5cbiAgICAgICAgICAgICAgICAgIOGEjOGFpuGEjOGFoeGGqOGEkuGFoeGEguGFs+GGqyDhhInhhbXhhInhhbPhhJDhhabhhrfhhIvhhbPhhIXhhakg4YSD4YWh4YSJ4YWpIOGEieGFteGEgOGFoeGGq+GEi+GFtVxuICAgICAgICAgICAgICAgICAg4YSA4YWl4Yav4YSF4YW14Ya44YSC4YW14YSD4YWh8J+YliDhhIzhha7hhIbhha7hhqvhhInhhbUg4YSL4YWo4YSJ4YWh4Ya8IOGEjuGFruGGr+GEgOGFqeGEi+GFteGGr+GEi+GFs+GGr1xuICAgICAgICAgICAgICAgICAg4YSS4YWq4Yao4YSL4YW14Yar4YSS4YWi4YSM4YWu4YSJ4YWm4YSL4YWtIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD7hhIbhhaHhhq3hhIvhhbPhhqsg4YSA4YWq4Yar4YSJ4YW14Ya3IOGEh+GFruGEkOGFoeGGqOGEg+GFs+GEheGFteGGuOGEguGFteGEg+GFoSDwn4618J+RuzwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZW9uamVuYS5wbmdcIiBhbHQ9XCLslrjsoJzrgpgg7Luk67KEIOydtOuvuOyngFwiIC8+XG4gICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgIDxQYW5lbCB0aXRsZT1cIuydtOuUlOyWtOy4oCAxMeyblCDsiqTsvIDspbRcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvJHtob21lQ29udGVudC5zY2hlZHVsZVBvc3RlcnNbMF0udXJsfWB9XG4gICAgICAgICAgICAgICAgICBmbHVpZD17XG4gICAgICAgICAgICAgICAgICAgIGhvbWVDb250ZW50Py5zY2hlZHVsZVBvc3RlcnM/LlswXT8ubG9jYWxGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgPy5jaGlsZEltYWdlU2hhcnA/LmZsdWlkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCLsnbTrlJTslrTsuKAgMTHsm5Qg7Iqk7LyA7KW0XCJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBob21lQ29udGV0c1JlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAnaHR0cHM6Ly9pZGlvdHMucm90by5jb2Rlcy9ob21lLWNvbnRlbnRzJ1xuICApXG4gIGNvbnN0IGxpdmVzUmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICdodHRwczovL2lkaW90cy5yb3RvLmNvZGVzL2xpdmVzP2RhdGVfZ3RlPTIwMjAtMDEtMDEmX3NvcnQ9ZGF0ZTpERVNDJ1xuICApXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGhvbWVDb250ZW50OiBob21lQ29udGV0c1Jlcy5kYXRhWzBdLFxuICAgICAgbGl2ZXM6IGxpdmVzUmVzLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzMDAwLFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9