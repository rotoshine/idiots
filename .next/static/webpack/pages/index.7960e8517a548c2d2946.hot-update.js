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

  var _this = this;

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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/images/eonjena.png",
                layout: "fill",
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
                alt: "\uC774\uB514\uC5B4\uCE20 11\uC6D4 \uC2A4\uCF00\uC974",
                layout: "fill",
                objectFit: "cover"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "\uACF5\uC5F0~"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImhvbWVDb250ZW50IiwidXNlU3RhdGUiLCJjb3ZlckltYWdlSW5kZXgiLCJzZXRDb3ZlckltYWdlSW5kZXgiLCJpbmRleFJlZiIsInVzZVJlZiIsImNvdmVySW1hZ2VzIiwiY2Fyb3VzZWxJbWFnZXMiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJpdGVtIiwiaWQiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJjb25maWciLCJtb2xhc3NlcyIsInVzZUVmZmVjdCIsIk1BWF9JTkRFWCIsImxlbmd0aCIsInRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwibWFwIiwicHJvcHMiLCJrZXkiLCJ1cmwiLCJJbmRleFBhZ2VfX2NvbnRlbnRzIiwiSW5kZXhQYWdlX19wYW5lbHMiLCJJbmRleFBhZ2VfX25ld3NQYW5lbHMiLCJzY2hlZHVsZVBvc3RlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVNlLFNBQVNBLFNBQVQsT0FBMkM7QUFBQTs7QUFBQTs7QUFBQSxNQUF0QkMsV0FBc0IsUUFBdEJBLFdBQXNCOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLENBQUQsQ0FERTtBQUFBLE1BQ2pEQyxlQURpRDtBQUFBLE1BQ2hDQyxrQkFEZ0M7O0FBRXhELE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQ0gsZUFBRCxDQUF2QjtBQUVBLE1BQU1JLFdBQVcsR0FBR04sV0FBSCxhQUFHQSxXQUFILHVCQUFHQSxXQUFXLENBQUVPLGNBQWpDO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyxrRUFBYSxDQUMvQkgsV0FEK0IsYUFDL0JBLFdBRCtCLHVCQUMvQkEsV0FBVyxDQUFHSixlQUFI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QUE7QUFBQSxrQkE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7O0dBbEh1QjlCLFM7VUFNRlUsMEQ7OztLQU5FVixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5NjBlODUxN2E1NDhjMmQyOTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWludGVyJ1xuaW1wb3J0IHsgYW5pbWF0ZWQsIGNvbmZpZywgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL1BhbmVsJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBob21lQ29udGVudDoge1xuICAgIGNhcm91c2VsSW1hZ2VzOiBhbnlcbiAgICBzY2hlZHVsZVBvc3RlcnM6IGFueVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSh7IGhvbWVDb250ZW50IH06IFByb3BzKSB7XG4gIGNvbnN0IFtjb3ZlckltYWdlSW5kZXgsIHNldENvdmVySW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBpbmRleFJlZiA9IHVzZVJlZihjb3ZlckltYWdlSW5kZXgpXG5cbiAgY29uc3QgY292ZXJJbWFnZXMgPSBob21lQ29udGVudD8uY2Fyb3VzZWxJbWFnZXNcblxuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oXG4gICAgY292ZXJJbWFnZXM/Lltjb3ZlckltYWdlSW5kZXhdLFxuICAgIGl0ZW0gPT4gaXRlbT8uaWQgfHwgJycsXG4gICAge1xuICAgICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgICBlbnRlcjogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBsZWF2ZTogeyBvcGFjaXR5OiAwIH0sXG4gICAgICBjb25maWc6IGNvbmZpZy5tb2xhc3NlcyxcbiAgICB9XG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IE1BWF9JTkRFWCA9IChjb3ZlckltYWdlcz8ubGVuZ3RoID8/IDEpIC0gMVxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoaW5kZXhSZWY/LmN1cnJlbnQgPT09IE1BWF9JTkRFWCkge1xuICAgICAgICBpbmRleFJlZi5jdXJyZW50ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXhSZWYuY3VycmVudCA9IGluZGV4UmVmLmN1cnJlbnQgKyAxXG4gICAgICB9XG4gICAgICBzZXRDb3ZlckltYWdlSW5kZXgoaW5kZXhSZWYuY3VycmVudClcbiAgICB9LCA1MDAwKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2V9PlxuICAgICAgPE1ldGFcbiAgICAgICAgZGVzY3JpcHRpb249XCLrlJTsp4DthLgg7Iux6riAIOyWuOygnOuCmOydmCDrsJzrp6Tsl5Ag7JWe7IScIOy7qOyFiVxuICAgICAgICDsnbzrn6zsiqTtirjsmYAg7IOIIOq1v+ymiOuTpOydhCDshozqsJztlanri4jri6QhXG4gICAgICAgIO2UhOuhnO2VhCDrp4Htgawg65iQ64qUIOuniO2UjOyDteyXkOyEnCDrsLTrk5wg7J2065SU7Ja07Lig66W8IOqygOyDie2VtOyjvOyEuOyalFwiXG4gICAgICAgIGltYWdlVXJsPVwiaHR0cHM6Ly9pZGlvdHMuYmFuZC9pbWFnZXMvZW9uamVuYS5wbmdcIlxuICAgICAgICBpbWFnZVdpZHRoPXs5MDB9XG4gICAgICAgIGltYWdlSGVpZ2h0PXs5MDB9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ2NvdmVyLWltYWdlLWNhcm91c2VsJ119PlxuICAgICAgICB7dHJhbnNpdGlvbnMubWFwKCh7IGl0ZW0sIHByb3BzLCBrZXkgfSkgPT4gKFxuICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvdmVyLWltYWdlJ119XG4gICAgICAgICAgICBzdHlsZT17cHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvJHtpdGVtPy51cmx9YH1cbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbHQ9XCJpZGlvdHMgY292ZXIgaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2VfX2NvbnRlbnRzfT5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2VfX3BhbmVsc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZV9fbmV3c1BhbmVsc30+XG4gICAgICAgICAgICAgIDxQYW5lbCB0aXRsZT1cIk5ld3NcIj5cbiAgICAgICAgICAgICAgICA8aDI+8J+SnPCfkbvslrjsoJzrgpgg4YSQ4YW14YSJ4YWn4YSO4YWzIOGEkeGFoeGGq+GEhuGFouGEgOGFouGEieGFtSEh8J+Ru/Cfkpw8L2gyPlxuICAgICAgICAgICAgICAgIOyViOuHvSEg65SU7KeA7YS4IOyLseq4gCA8Y29kZT7slrjsoJzrgpg8L2NvZGU+7J2YIOuwnOunpOyXkCDslZ7shJwg7Luo7IWJXG4gICAgICAgICAgICAgICAg7J2865+s7Iqk7Yq47JmAIOyDiCDqtb/spojrk6TsnYQg7IaM6rCc7ZWp64uI64ukIVxuICAgICAgICAgICAgICAgIDxiciAvPiDtlITroZztlYQg66eB7YGsIOuYkOuKlCDrp4jtlIzsg7Xsl5DshJwg67C065OcIOydtOuUlOyWtOy4oOulvCDqsoDsg4ntlbTso7zshLjsmpRcbiAgICAgICAgICAgICAgICDwn5G78J+SnFxuICAgICAgICAgICAgICAgIDxoMz7wn4yI4YSJ4YWi4Yao4YSJ4YWh4Ya8PC9oMz5cbiAgICAgICAgICAgICAgICA8cD7ruJTrnpksIOuhnOyWhOu4lOujqCwg7Jik66CM7KeALCDtmZTsnbTtirgsIOyEuOydtO2UhO2LsCDqt7jrprA8L3A+XG4gICAgICAgICAgICAgICAgPGgzPuKcqOGEjOGFruGEhuGFruGGq+GEh+GFoeGGvOGEh+GFpeGGuDwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXJwcGxlLnNob3Ava3IvYmFuZF9pZGlvdHNcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmZlcmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9tYXJwcGxlLnNob3Ava3IvYmFuZF9pZGlvdHNcbiAgICAgICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICAgICAg7Zi57J2AIOGEhuGFoeGEkeGFs+GGr+GEieGFo+GGuCDhhIDhhaXhhrfhhInhhaLhhqjhhI7hhaHhhrzhhIvhhaYgXCLhhIfhhaLhhqvhhIPhhbMg4YSL4YW14YSD4YW14YSL4YWl4YSO4YWzXCJcbiAgICAgICAgICAgICAgICAgIOGEgOGFpeGGt+GEieGFouGGqCFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICDhhIbhhbXhhIXhhbUg4YSG4YWh4Yar4YSD4YWz4Yav4YSL4YWl4YSD4YWu4YSC4YWz4Yar4YSA4YWl4Ya64YSL4YW1IOGEi+GFoeGEguGFteGGqyDhhIzhha7hhIbhha7hhqsg4YSO4YWx4YSS4YWh4Ya4IOGEkuGFrlxuICAgICAgICAgICAgICAgICAg4YSM4YWm4YSM4YWh4Yao4YSS4YWh4YSC4YWz4YarIOGEieGFteGEieGFs+GEkOGFpuGGt+GEi+GFs+GEheGFqSDhhIPhhaHhhInhhakg4YSJ4YW14YSA4YWh4Yar4YSL4YW1XG4gICAgICAgICAgICAgICAgICDhhIDhhaXhhq/hhIXhhbXhhrjhhILhhbXhhIPhhaHwn5iWIOGEjOGFruGEhuGFruGGq+GEieGFtSDhhIvhhajhhInhhaHhhrwg4YSO4YWu4Yav4YSA4YWp4YSL4YW14Yav4YSL4YWz4YavXG4gICAgICAgICAgICAgICAgICDhhJLhharhhqjhhIvhhbXhhqvhhJLhhaLhhIzhha7hhInhhabhhIvhha0hXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPuGEhuGFoeGGreGEi+GFs+GGqyDhhIDhharhhqvhhInhhbXhhrcg4YSH4YWu4YSQ4YWh4Yao4YSD4YWz4YSF4YW14Ya44YSC4YW14YSD4YWhIPCfjrXwn5G7PC9wPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9lb25qZW5hLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIuyWuOygnOuCmCDsu6TrsoQg7J2066+47KeAXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICA8UGFuZWwgdGl0bGU9XCLsnbTrlJTslrTsuKAgMTHsm5Qg7Iqk7LyA7KW0XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2lkaW90cy5yb3RvLmNvZGVzLyR7aG9tZUNvbnRlbnQuc2NoZWR1bGVQb3N0ZXJzWzBdLnVybH1gfVxuICAgICAgICAgICAgICAgICAgYWx0PVwi7J2065SU7Ja07LigIDEx7JuUIOyKpOy8gOyltFwiXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PuqzteyXsH48L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGhvbWVDb250ZXRzUmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICdodHRwczovL2lkaW90cy5yb3RvLmNvZGVzL2hvbWUtY29udGVudHMnXG4gIClcbiAgY29uc3QgbGl2ZXNSZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgJ2h0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvbGl2ZXM/ZGF0ZV9ndGU9MjAyMC0wMS0wMSZfc29ydD1kYXRlOkRFU0MnXG4gIClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaG9tZUNvbnRlbnQ6IGhvbWVDb250ZXRzUmVzLmRhdGFbMF0sXG4gICAgICBsaXZlczogbGl2ZXNSZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDMwMDAsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=