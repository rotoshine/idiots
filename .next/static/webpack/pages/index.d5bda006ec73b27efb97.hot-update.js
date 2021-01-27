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
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['cover-image'],
          style: props,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "https://idiots.roto.codes/".concat(item === null || item === void 0 ? void 0 : item.url),
            width: '100%',
            alt: "idiots cover image",
            layout: "responsive"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
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
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage__contents,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage__panels,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.IndexPage__newsPanels
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImhvbWVDb250ZW50IiwidXNlU3RhdGUiLCJjb3ZlckltYWdlSW5kZXgiLCJzZXRDb3ZlckltYWdlSW5kZXgiLCJpbmRleFJlZiIsInVzZVJlZiIsImNvdmVySW1hZ2VzIiwiY2Fyb3VzZWxJbWFnZXMiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJpdGVtIiwiaWQiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJjb25maWciLCJtb2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJNQVhfSU5ERVgiLCJsZW5ndGgiLCJ0aW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsIm1hcCIsInByb3BzIiwia2V5IiwidXJsIiwiSW5kZXhQYWdlX19jb250ZW50cyIsIkluZGV4UGFnZV9fcGFuZWxzIiwiSW5kZXhQYWdlX19uZXdzUGFuZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFTZSxTQUFTQSxTQUFULE9BQTJDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLFdBQXNCLFFBQXRCQSxXQUFzQjs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxDQUFELENBREU7QUFBQSxNQUNqREMsZUFEaUQ7QUFBQSxNQUNoQ0Msa0JBRGdDOztBQUV4RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUNILGVBQUQsQ0FBdkI7QUFFQSxNQUFNSSxXQUFXLEdBQUdOLFdBQUgsYUFBR0EsV0FBSCx1QkFBR0EsV0FBVyxDQUFFTyxjQUFqQztBQUVBLE1BQU1DLFdBQVcsR0FBR0Msa0VBQWEsQ0FDL0JILFdBRCtCLGFBQy9CQSxXQUQrQix1QkFDL0JBLFdBQVcsQ0FBR0osZUFBSCxDQURvQixF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QUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7R0ExRXVCbkMsUztVQU1GVSwwRDs7O0tBTkVWLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDViZGEwMDZlYzczYjI3ZWZiOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW50ZXInXG5pbXBvcnQgeyBhbmltYXRlZCwgY29uZmlnLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBob21lQ29udGVudDoge1xuICAgIGNhcm91c2VsSW1hZ2VzOiBhbnlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoeyBob21lQ29udGVudCB9OiBQcm9wcykge1xuICBjb25zdCBbY292ZXJJbWFnZUluZGV4LCBzZXRDb3ZlckltYWdlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgaW5kZXhSZWYgPSB1c2VSZWYoY292ZXJJbWFnZUluZGV4KVxuXG4gIGNvbnN0IGNvdmVySW1hZ2VzID0gaG9tZUNvbnRlbnQ/LmNhcm91c2VsSW1hZ2VzXG5cbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKFxuICAgIGNvdmVySW1hZ2VzPy5bY292ZXJJbWFnZUluZGV4XSxcbiAgICBpdGVtID0+IGl0ZW0/LmlkIHx8ICcnLFxuICAgIHtcbiAgICAgIGZyb206IHsgb3BhY2l0eTogMCB9LFxuICAgICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgbGVhdmU6IHsgb3BhY2l0eTogMCB9LFxuICAgICAgY29uZmlnOiBjb25maWcubW9sYXNzZXMsXG4gICAgfVxuICApXG5cbiAgY29uc29sZS5sb2codHJhbnNpdGlvbnMpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBNQVhfSU5ERVggPSAoY292ZXJJbWFnZXM/Lmxlbmd0aCA/PyAxKSAtIDFcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGluZGV4UmVmPy5jdXJyZW50ID09PSBNQVhfSU5ERVgpIHtcbiAgICAgICAgaW5kZXhSZWYuY3VycmVudCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4UmVmLmN1cnJlbnQgPSBpbmRleFJlZi5jdXJyZW50ICsgMVxuICAgICAgfVxuICAgICAgc2V0Q292ZXJJbWFnZUluZGV4KGluZGV4UmVmLmN1cnJlbnQpXG4gICAgfSwgNTAwMClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZygpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZX0+XG4gICAgICA8TWV0YVxuICAgICAgICBkZXNjcmlwdGlvbj1cIuuUlOyngO2EuCDsi7HquIAg7Ja47KCc64KY7J2YIOuwnOunpOyXkCDslZ7shJwg7Luo7IWJXG4gICAgICAgIOydvOufrOyKpO2KuOyZgCDsg4gg6rW/7KaI65Ok7J2EIOyGjOqwnO2VqeuLiOuLpCFcbiAgICAgICAg7ZSE66Gc7ZWEIOunge2BrCDrmJDripQg66eI7ZSM7IO17JeQ7IScIOuwtOuTnCDsnbTrlJTslrTsuKDrpbwg6rKA7IOJ7ZW07KO87IS47JqUXCJcbiAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL2lkaW90cy5iYW5kL2ltYWdlcy9lb25qZW5hLnBuZ1wiXG4gICAgICAgIGltYWdlV2lkdGg9ezkwMH1cbiAgICAgICAgaW1hZ2VIZWlnaHQ9ezkwMH1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1snY292ZXItaW1hZ2UtY2Fyb3VzZWwnXX0+XG4gICAgICAgIHt0cmFuc2l0aW9ucy5tYXAoKHsgaXRlbSwgcHJvcHMsIGtleSB9KSA9PiAoXG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snY292ZXItaW1hZ2UnXX1cbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pZGlvdHMucm90by5jb2Rlcy8ke2l0ZW0/LnVybH1gfVxuICAgICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICAgICAgICBhbHQ9XCJpZGlvdHMgY292ZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19jb250ZW50c30+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19wYW5lbHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2VfX25ld3NQYW5lbHN9PjwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2lkaW90cy5yb3RvLmNvZGVzL2hvbWUtY29udGVudHMnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGhvbWVDb250ZW50OiByZXMuZGF0YVswXSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDMwMDAsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=