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
            height: '100%',
            alt: "idiots cover image"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsImhvbWVDb250ZW50IiwidXNlU3RhdGUiLCJjb3ZlckltYWdlSW5kZXgiLCJzZXRDb3ZlckltYWdlSW5kZXgiLCJpbmRleFJlZiIsInVzZVJlZiIsImNvdmVySW1hZ2VzIiwiY2Fyb3VzZWxJbWFnZXMiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJpdGVtIiwiaWQiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJjb25maWciLCJtb2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJNQVhfSU5ERVgiLCJsZW5ndGgiLCJ0aW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsIm1hcCIsInByb3BzIiwia2V5IiwidXJsIiwiSW5kZXhQYWdlX19jb250ZW50cyIsIkluZGV4UGFnZV9fcGFuZWxzIiwiSW5kZXhQYWdlX19uZXdzUGFuZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFTZSxTQUFTQSxTQUFULE9BQTJDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLFdBQXNCLFFBQXRCQSxXQUFzQjs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxDQUFELENBREU7QUFBQSxNQUNqREMsZUFEaUQ7QUFBQSxNQUNoQ0Msa0JBRGdDOztBQUV4RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUNILGVBQUQsQ0FBdkI7QUFFQSxNQUFNSSxXQUFXLEdBQUdOLFdBQUgsYUFBR0EsV0FBSCx1QkFBR0EsV0FBVyxDQUFFTyxjQUFqQztBQUVBLE1BQU1DLFdBQVcsR0FBR0Msa0VBQWEsQ0FDL0JILFdBRCtCLGFBQy9CQSxXQUQrQix1QkFDL0JBLFdBQVcsQ0FBR0osZUFBSCxDQURvQixF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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztHQTFFdUJuQyxTO1VBTUZVLDBEOzs7S0FORVYsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZDI0YzFiM2Q1NGNiMjJhODM1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbnRlcidcbmltcG9ydCB7IGFuaW1hdGVkLCBjb25maWcsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhvbWVDb250ZW50OiB7XG4gICAgY2Fyb3VzZWxJbWFnZXM6IGFueVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSh7IGhvbWVDb250ZW50IH06IFByb3BzKSB7XG4gIGNvbnN0IFtjb3ZlckltYWdlSW5kZXgsIHNldENvdmVySW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBpbmRleFJlZiA9IHVzZVJlZihjb3ZlckltYWdlSW5kZXgpXG5cbiAgY29uc3QgY292ZXJJbWFnZXMgPSBob21lQ29udGVudD8uY2Fyb3VzZWxJbWFnZXNcblxuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oXG4gICAgY292ZXJJbWFnZXM/Lltjb3ZlckltYWdlSW5kZXhdLFxuICAgIGl0ZW0gPT4gaXRlbT8uaWQgfHwgJycsXG4gICAge1xuICAgICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgICBlbnRlcjogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBsZWF2ZTogeyBvcGFjaXR5OiAwIH0sXG4gICAgICBjb25maWc6IGNvbmZpZy5tb2xhc3NlcyxcbiAgICB9XG4gIClcblxuICBjb25zb2xlLmxvZyh0cmFuc2l0aW9ucylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IE1BWF9JTkRFWCA9IChjb3ZlckltYWdlcz8ubGVuZ3RoID8/IDEpIC0gMVxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoaW5kZXhSZWY/LmN1cnJlbnQgPT09IE1BWF9JTkRFWCkge1xuICAgICAgICBpbmRleFJlZi5jdXJyZW50ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXhSZWYuY3VycmVudCA9IGluZGV4UmVmLmN1cnJlbnQgKyAxXG4gICAgICB9XG4gICAgICBzZXRDb3ZlckltYWdlSW5kZXgoaW5kZXhSZWYuY3VycmVudClcbiAgICB9LCA1MDAwKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnNvbGUubG9nKClcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIGRlc2NyaXB0aW9uPVwi65SU7KeA7YS4IOyLseq4gCDslrjsoJzrgpjsnZgg67Cc66ek7JeQIOyVnuyEnCDsu6jshYlcbiAgICAgICAg7J2865+s7Iqk7Yq47JmAIOyDiCDqtb/spojrk6TsnYQg7IaM6rCc7ZWp64uI64ukIVxuICAgICAgICDtlITroZztlYQg66eB7YGsIOuYkOuKlCDrp4jtlIzsg7Xsl5DshJwg67C065OcIOydtOuUlOyWtOy4oOulvCDqsoDsg4ntlbTso7zshLjsmpRcIlxuICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vaWRpb3RzLmJhbmQvaW1hZ2VzL2VvbmplbmEucG5nXCJcbiAgICAgICAgaW1hZ2VXaWR0aD17OTAwfVxuICAgICAgICBpbWFnZUhlaWdodD17OTAwfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWydjb3Zlci1pbWFnZS1jYXJvdXNlbCddfT5cbiAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wcywga2V5IH0pID0+IChcbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydjb3Zlci1pbWFnZSddfVxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2lkaW90cy5yb3RvLmNvZGVzLyR7aXRlbT8udXJsfWB9XG4gICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgICAgIGhlaWdodD17JzEwMCUnfVxuICAgICAgICAgICAgICBhbHQ9XCJpZGlvdHMgY292ZXIgaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2VfX2NvbnRlbnRzfT5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2VfX3BhbmVsc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZV9fbmV3c1BhbmVsc30+PC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvaG9tZS1jb250ZW50cycpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaG9tZUNvbnRlbnQ6IHJlcy5kYXRhWzBdLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMzAwMCxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==