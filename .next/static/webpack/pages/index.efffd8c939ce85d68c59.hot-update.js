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
  console.log(transitions);
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
  console.log();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
      description: "\uB514\uC9C0\uD138 \uC2F1\uAE00 \uC5B8\uC81C\uB098\uC758 \uBC1C\uB9E4\uC5D0 \uC55E\uC11C \uCEE8\uC149 \uC77C\uB7EC\uC2A4\uD2B8\uC640 \uC0C8 \uAD7F\uC988\uB4E4\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4! \uD504\uB85C\uD544 \uB9C1\uD06C \uB610\uB294 \uB9C8\uD50C\uC0F5\uC5D0\uC11C \uBC34\uB4DC \uC774\uB514\uC5B4\uCE20\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694",
      imageUrl: "https://idiots.band/images/eonjena.png",
      imageWidth: 900,
      imageHeight: 900
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['cover-image-carousel'],
      children: transitions.map(function (_ref2) {
        var item = _ref2.item,
            props = _ref2.props,
            key = _ref2.key;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"].div, {
          className: "cover-image",
          style: props,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "https://idiots.roto.codes/".concat(item === null || item === void 0 ? void 0 : item.url),
            width: '100%',
            height: '100%',
            alt: "idiots cover image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this)
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Containter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "IndexPage__contents",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "IndexPage__panels",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "IndexPage__newsPanels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImhvbWVDb250ZW50IiwidXNlU3RhdGUiLCJjb3ZlckltYWdlSW5kZXgiLCJzZXRDb3ZlckltYWdlSW5kZXgiLCJpbmRleFJlZiIsInVzZVJlZiIsImNvdmVySW1hZ2VzIiwiY2Fyb3VzZWxJbWFnZXMiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJpdGVtIiwiaWQiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJjb25maWciLCJtb2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJNQVhfSU5ERVgiLCJsZW5ndGgiLCJ0aW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsIm1hcCIsInByb3BzIiwia2V5IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFTZSxTQUFTQSxTQUFULE9BQTJDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLFdBQXNCLFFBQXRCQSxXQUFzQjs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxDQUFELENBREU7QUFBQSxNQUNqREMsZUFEaUQ7QUFBQSxNQUNoQ0Msa0JBRGdDOztBQUV4RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUNILGVBQUQsQ0FBdkI7QUFFQSxNQUFNSSxXQUFXLEdBQUdOLFdBQUgsYUFBR0EsV0FBSCx1QkFBR0EsV0FBVyxDQUFFTyxjQUFqQztBQUVBLE1BQU1DLFdBQVcsR0FBR0Msa0VBQWEsQ0FDL0JILFdBRCtCLGFBQy9CQSxXQUQrQix1QkFDL0JBLFdBQVcsQ0FBR0osZUFBSCxDQURvQixFQUUvQixVQUFBUSxJQUFJO0FBQUEsV0FBSSxDQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElB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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmZmZkOGM5MzljZTg1ZDY4YzU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWludGVyJ1xuaW1wb3J0IHsgYW5pbWF0ZWQsIGNvbmZpZywgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaG9tZUNvbnRlbnQ6IHtcbiAgICBjYXJvdXNlbEltYWdlczogYW55XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHsgaG9tZUNvbnRlbnQgfTogUHJvcHMpIHtcbiAgY29uc3QgW2NvdmVySW1hZ2VJbmRleCwgc2V0Q292ZXJJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IGluZGV4UmVmID0gdXNlUmVmKGNvdmVySW1hZ2VJbmRleClcblxuICBjb25zdCBjb3ZlckltYWdlcyA9IGhvbWVDb250ZW50Py5jYXJvdXNlbEltYWdlc1xuXG4gIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihcbiAgICBjb3ZlckltYWdlcz8uW2NvdmVySW1hZ2VJbmRleF0sXG4gICAgaXRlbSA9PiBpdGVtPy5pZCB8fCAnJyxcbiAgICB7XG4gICAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgIGVudGVyOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgIGNvbmZpZzogY29uZmlnLm1vbGFzc2VzLFxuICAgIH1cbiAgKVxuXG4gIGNvbnNvbGUubG9nKHRyYW5zaXRpb25zKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgTUFYX0lOREVYID0gKGNvdmVySW1hZ2VzPy5sZW5ndGggPz8gMSkgLSAxXG4gICAgY29uc3QgdGltZW91dCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChpbmRleFJlZj8uY3VycmVudCA9PT0gTUFYX0lOREVYKSB7XG4gICAgICAgIGluZGV4UmVmLmN1cnJlbnQgPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleFJlZi5jdXJyZW50ID0gaW5kZXhSZWYuY3VycmVudCArIDFcbiAgICAgIH1cbiAgICAgIHNldENvdmVySW1hZ2VJbmRleChpbmRleFJlZi5jdXJyZW50KVxuICAgIH0sIDUwMDApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc29sZS5sb2coKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2V9PlxuICAgICAgPE1ldGFcbiAgICAgICAgZGVzY3JpcHRpb249XCLrlJTsp4DthLgg7Iux6riAIOyWuOygnOuCmOydmCDrsJzrp6Tsl5Ag7JWe7IScIOy7qOyFiVxuICAgICAgICDsnbzrn6zsiqTtirjsmYAg7IOIIOq1v+ymiOuTpOydhCDshozqsJztlanri4jri6QhXG4gICAgICAgIO2UhOuhnO2VhCDrp4Htgawg65iQ64qUIOuniO2UjOyDteyXkOyEnCDrsLTrk5wg7J2065SU7Ja07Lig66W8IOqygOyDie2VtOyjvOyEuOyalFwiXG4gICAgICAgIGltYWdlVXJsPVwiaHR0cHM6Ly9pZGlvdHMuYmFuZC9pbWFnZXMvZW9uamVuYS5wbmdcIlxuICAgICAgICBpbWFnZVdpZHRoPXs5MDB9XG4gICAgICAgIGltYWdlSGVpZ2h0PXs5MDB9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ2NvdmVyLWltYWdlLWNhcm91c2VsJ119PlxuICAgICAgICB7dHJhbnNpdGlvbnMubWFwKCh7IGl0ZW0sIHByb3BzLCBrZXkgfSkgPT4gKFxuICAgICAgICAgIDxhbmltYXRlZC5kaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlXCIgc3R5bGU9e3Byb3BzfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2lkaW90cy5yb3RvLmNvZGVzLyR7aXRlbT8udXJsfWB9XG4gICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgICAgIGhlaWdodD17JzEwMCUnfVxuICAgICAgICAgICAgICBhbHQ9XCJpZGlvdHMgY292ZXIgaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbmRleFBhZ2VfX2NvbnRlbnRzXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSW5kZXhQYWdlX19wYW5lbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW5kZXhQYWdlX19uZXdzUGFuZWxzXCI+PC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvaG9tZS1jb250ZW50cycpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaG9tZUNvbnRlbnQ6IHJlcy5kYXRhWzBdLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMzAwMCxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==