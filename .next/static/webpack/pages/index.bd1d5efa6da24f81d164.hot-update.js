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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "\uACF5\uC5F0~"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImhvbWVDb250ZW50IiwidXNlU3RhdGUiLCJjb3ZlckltYWdlSW5kZXgiLCJzZXRDb3ZlckltYWdlSW5kZXgiLCJpbmRleFJlZiIsInVzZVJlZiIsImNvdmVySW1hZ2VzIiwiY2Fyb3VzZWxJbWFnZXMiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJpdGVtIiwiaWQiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJjb25maWciLCJtb2xhc3NlcyIsInVzZUVmZmVjdCIsIk1BWF9JTkRFWCIsImxlbmd0aCIsInRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwibWFwIiwicHJvcHMiLCJrZXkiLCJ1cmwiLCJJbmRleFBhZ2VfX2NvbnRlbnRzIiwiSW5kZXhQYWdlX19wYW5lbHMiLCJJbmRleFBhZ2VfX25ld3NQYW5lbHMiLCJzY2hlZHVsZVBvc3RlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVNlLFNBQVNBLFNBQVQsT0FBMkM7QUFBQTs7QUFBQTs7QUFBQSxNQUF0QkMsV0FBc0IsUUFBdEJBLFdBQXNCOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLENBQUQsQ0FERTtBQUFBLE1BQ2pEQyxlQURpRDtBQUFBLE1BQ2hDQyxrQkFEZ0M7O0FBRXhELE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQ0gsZUFBRCxDQUF2QjtBQUVBLE1BQU1JLFdBQVcsR0FBR04sV0FBSCxhQUFHQSxXQUFILHVCQUFHQSxXQUFXLENBQUVPLGNBQWpDO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyxrRUFBYSxDQUMvQkgsV0FEK0IsYUFDL0JBLFdBRCtCLHVCQUMvQkEsV0FBVyxDQUFHSixlQUFI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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRDs7R0E5R3VCOUIsUztVQU1GVSwwRDs7O0tBTkVWLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmQxZDVlZmE2ZGEyNGY4MWQxNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW50ZXInXG5pbXBvcnQgeyBhbmltYXRlZCwgY29uZmlnLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvUGFuZWwnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhvbWVDb250ZW50OiB7XG4gICAgY2Fyb3VzZWxJbWFnZXM6IGFueVxuICAgIHNjaGVkdWxlUG9zdGVyczogYW55XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHsgaG9tZUNvbnRlbnQgfTogUHJvcHMpIHtcbiAgY29uc3QgW2NvdmVySW1hZ2VJbmRleCwgc2V0Q292ZXJJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IGluZGV4UmVmID0gdXNlUmVmKGNvdmVySW1hZ2VJbmRleClcblxuICBjb25zdCBjb3ZlckltYWdlcyA9IGhvbWVDb250ZW50Py5jYXJvdXNlbEltYWdlc1xuXG4gIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihcbiAgICBjb3ZlckltYWdlcz8uW2NvdmVySW1hZ2VJbmRleF0sXG4gICAgaXRlbSA9PiBpdGVtPy5pZCB8fCAnJyxcbiAgICB7XG4gICAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgIGVudGVyOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgIGNvbmZpZzogY29uZmlnLm1vbGFzc2VzLFxuICAgIH1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgTUFYX0lOREVYID0gKGNvdmVySW1hZ2VzPy5sZW5ndGggPz8gMSkgLSAxXG4gICAgY29uc3QgdGltZW91dCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChpbmRleFJlZj8uY3VycmVudCA9PT0gTUFYX0lOREVYKSB7XG4gICAgICAgIGluZGV4UmVmLmN1cnJlbnQgPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleFJlZi5jdXJyZW50ID0gaW5kZXhSZWYuY3VycmVudCArIDFcbiAgICAgIH1cbiAgICAgIHNldENvdmVySW1hZ2VJbmRleChpbmRleFJlZi5jdXJyZW50KVxuICAgIH0sIDUwMDApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZX0+XG4gICAgICA8TWV0YVxuICAgICAgICBkZXNjcmlwdGlvbj1cIuuUlOyngO2EuCDsi7HquIAg7Ja47KCc64KY7J2YIOuwnOunpOyXkCDslZ7shJwg7Luo7IWJXG4gICAgICAgIOydvOufrOyKpO2KuOyZgCDsg4gg6rW/7KaI65Ok7J2EIOyGjOqwnO2VqeuLiOuLpCFcbiAgICAgICAg7ZSE66Gc7ZWEIOunge2BrCDrmJDripQg66eI7ZSM7IO17JeQ7IScIOuwtOuTnCDsnbTrlJTslrTsuKDrpbwg6rKA7IOJ7ZW07KO87IS47JqUXCJcbiAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL2lkaW90cy5iYW5kL2ltYWdlcy9lb25qZW5hLnBuZ1wiXG4gICAgICAgIGltYWdlV2lkdGg9ezkwMH1cbiAgICAgICAgaW1hZ2VIZWlnaHQ9ezkwMH1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1snY292ZXItaW1hZ2UtY2Fyb3VzZWwnXX0+XG4gICAgICAgIHt0cmFuc2l0aW9ucy5tYXAoKHsgaXRlbSwgcHJvcHMsIGtleSB9KSA9PiAoXG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snY292ZXItaW1hZ2UnXX1cbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pZGlvdHMucm90by5jb2Rlcy8ke2l0ZW0/LnVybH1gfVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsdD1cImlkaW90cyBjb3ZlciBpbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZV9fY29udGVudHN9PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZV9fcGFuZWxzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19uZXdzUGFuZWxzfT5cbiAgICAgICAgICAgICAgPFBhbmVsIHRpdGxlPVwiTmV3c1wiPlxuICAgICAgICAgICAgICAgIDxoMj7wn5Kc8J+Ru+yWuOygnOuCmCDhhJDhhbXhhInhhafhhI7hhbMg4YSR4YWh4Yar4YSG4YWi4YSA4YWi4YSJ4YW1ISHwn5G78J+SnDwvaDI+XG4gICAgICAgICAgICAgICAg7JWI64e9ISDrlJTsp4DthLgg7Iux6riAIDxjb2RlPuyWuOygnOuCmDwvY29kZT7snZgg67Cc66ek7JeQIOyVnuyEnCDsu6jshYlcbiAgICAgICAgICAgICAgICDsnbzrn6zsiqTtirjsmYAg7IOIIOq1v+ymiOuTpOydhCDshozqsJztlanri4jri6QhXG4gICAgICAgICAgICAgICAgPGJyIC8+IO2UhOuhnO2VhCDrp4Htgawg65iQ64qUIOuniO2UjOyDteyXkOyEnCDrsLTrk5wg7J2065SU7Ja07Lig66W8IOqygOyDie2VtOyjvOyEuOyalFxuICAgICAgICAgICAgICAgIPCfkbvwn5KcXG4gICAgICAgICAgICAgICAgPGgzPvCfjIjhhInhhaLhhqjhhInhhaHhhrw8L2gzPlxuICAgICAgICAgICAgICAgIDxwPuu4lOuemSwg66Gc7JaE67iU66OoLCDsmKTroIzsp4AsIO2ZlOydtO2KuCwg7IS47J207ZSE7YuwIOq3uOumsDwvcD5cbiAgICAgICAgICAgICAgICA8aDM+4pyo4YSM4YWu4YSG4YWu4Yar4YSH4YWh4Ya84YSH4YWl4Ya4PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21hcnBwbGUuc2hvcC9rci9iYW5kX2lkaW90c1wiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZmVyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBodHRwczovL21hcnBwbGUuc2hvcC9rci9iYW5kX2lkaW90c1xuICAgICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgICDtmLnsnYAg4YSG4YWh4YSR4YWz4Yav4YSJ4YWj4Ya4IOGEgOGFpeGGt+GEieGFouGGqOGEjuGFoeGGvOGEi+GFpiBcIuGEh+GFouGGq+GEg+GFsyDhhIvhhbXhhIPhhbXhhIvhhaXhhI7hhbNcIlxuICAgICAgICAgICAgICAgICAg4YSA4YWl4Ya34YSJ4YWi4YaoIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIOGEhuGFteGEheGFtSDhhIbhhaHhhqvhhIPhhbPhhq/hhIvhhaXhhIPhha7hhILhhbPhhqvhhIDhhaXhhrrhhIvhhbUg4YSL4YWh4YSC4YW14YarIOGEjOGFruGEhuGFruGGqyDhhI7hhbHhhJLhhaHhhrgg4YSS4YWuXG4gICAgICAgICAgICAgICAgICDhhIzhhabhhIzhhaHhhqjhhJLhhaHhhILhhbPhhqsg4YSJ4YW14YSJ4YWz4YSQ4YWm4Ya34YSL4YWz4YSF4YWpIOGEg+GFoeGEieGFqSDhhInhhbXhhIDhhaHhhqvhhIvhhbVcbiAgICAgICAgICAgICAgICAgIOGEgOGFpeGGr+GEheGFteGGuOGEguGFteGEg+GFofCfmJYg4YSM4YWu4YSG4YWu4Yar4YSJ4YW1IOGEi+GFqOGEieGFoeGGvCDhhI7hha7hhq/hhIDhhanhhIvhhbXhhq/hhIvhhbPhhq9cbiAgICAgICAgICAgICAgICAgIOGEkuGFquGGqOGEi+GFteGGq+GEkuGFouGEjOGFruGEieGFpuGEi+GFrSFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+4YSG4YWh4Yat4YSL4YWz4YarIOGEgOGFquGGq+GEieGFteGGtyDhhIfhha7hhJDhhaHhhqjhhIPhhbPhhIXhhbXhhrjhhILhhbXhhIPhhaEg8J+OtfCfkbs8L3A+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvZW9uamVuYS5wbmdcIiBhbHQ9XCLslrjsoJzrgpgg7Luk67KEIOydtOuvuOyngFwiIC8+XG4gICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgIDxQYW5lbCB0aXRsZT1cIuydtOuUlOyWtOy4oCAxMeyblCDsiqTsvIDspbRcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvJHtob21lQ29udGVudC5zY2hlZHVsZVBvc3RlcnNbMF0udXJsfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCLsnbTrlJTslrTsuKAgMTHsm5Qg7Iqk7LyA7KW0XCJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+6rO17JewfjwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaG9tZUNvbnRldHNSZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgJ2h0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvaG9tZS1jb250ZW50cydcbiAgKVxuICBjb25zdCBsaXZlc1JlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAnaHR0cHM6Ly9pZGlvdHMucm90by5jb2Rlcy9saXZlcz9kYXRlX2d0ZT0yMDIwLTAxLTAxJl9zb3J0PWRhdGU6REVTQydcbiAgKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBob21lQ29udGVudDogaG9tZUNvbnRldHNSZXMuZGF0YVswXSxcbiAgICAgIGxpdmVzOiBsaXZlc1Jlcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMzAwMCxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==