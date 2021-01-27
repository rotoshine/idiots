webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Logo.tsx":
/*!*****************************!*\
  !*** ./components/Logo.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.module.scss */ "./components/Logo.module.scss");
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/home/winterwolf0412/workspace/idiots/components/Logo.tsx",
    _s = $RefreshSig$();







function Logo() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isMouseEnter = _useState[0],
      setMouseEnter = _useState[1];

  var imageSrc = isMouseEnter ? '/images/logo-kr.png' : '/images/logo-en.png';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: _Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Logo,
    onMouseEnter: function onMouseEnter() {
      return setMouseEnter(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setMouseEnter(false);
    },
    onTouchStart: function onTouchStart() {
      return setMouseEnter(true);
    },
    onTouchEnd: function onTouchEnd() {
      return setMouseEnter(false);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: _Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Logo__wrapper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Logo__image, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Logo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['Logo__image--hidden'], isMouseEnter)),
          src: imageSrc,
          alt: "logo",
          width: 434,
          height: 153,
          layout: "fixed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Logo, "0KEJ67FNEy+eUW25xXrj+cxXMcE=");

_c = Logo;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Logo));

var _c, _c2;

$RefreshReg$(_c, "Logo");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dvLnRzeCJdLCJuYW1lcyI6WyJMb2dvIiwidXNlU3RhdGUiLCJpc01vdXNlRW50ZXIiLCJzZXRNb3VzZUVudGVyIiwiaW1hZ2VTcmMiLCJzdHlsZXMiLCJMb2dvX193cmFwcGVyIiwiY2xhc3NOYW1lcyIsIkxvZ29fX2ltYWdlIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDd0JDLHNEQUFRLENBQUMsS0FBRCxDQURoQztBQUFBLE1BQ1BDLFlBRE87QUFBQSxNQUNPQyxhQURQOztBQUdkLE1BQU1DLFFBQVEsR0FBR0YsWUFBWSxHQUFHLHFCQUFILEdBQTJCLHFCQUF4RDtBQUVBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFRyx3REFBTSxDQUFDTCxJQURwQjtBQUVFLGdCQUFZLEVBQUU7QUFBQSxhQUFNRyxhQUFhLENBQUMsSUFBRCxDQUFuQjtBQUFBLEtBRmhCO0FBR0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1BLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsS0FIaEI7QUFJRSxnQkFBWSxFQUFFO0FBQUEsYUFBTUEsYUFBYSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxLQUpoQjtBQUtFLGNBQVUsRUFBRTtBQUFBLGFBQU1BLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsS0FMZDtBQUFBLDJCQU9FLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUVFLHdEQUFNLENBQUNDLGFBQXJCO0FBQUEsK0JBQ0UscUVBQUMsaURBQUQ7QUFDRSxtQkFBUyxFQUFFQyxpREFBVSxDQUFDRix3REFBTSxDQUFDRyxXQUFSLGdHQUNsQkgsd0RBQU0sQ0FBQyxxQkFBRCxDQURZLEVBQ2NILFlBRGQsRUFEdkI7QUFJRSxhQUFHLEVBQUVFLFFBSlA7QUFLRSxhQUFHLEVBQUMsTUFMTjtBQU1FLGVBQUssRUFBRSxHQU5UO0FBT0UsZ0JBQU0sRUFBRSxHQVBWO0FBUUUsZ0JBQU0sRUFBQztBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0E3QlFKLEk7O0tBQUFBLEk7QUErQk0sa0ZBQUFTLDRDQUFLLENBQUNDLElBQU4sQ0FBV1YsSUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNiM2Q4MTY5Mjk3YzdiNGRlZTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nby5tb2R1bGUuc2NzcydcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gIGNvbnN0IFtpc01vdXNlRW50ZXIsIHNldE1vdXNlRW50ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaW1hZ2VTcmMgPSBpc01vdXNlRW50ZXIgPyAnL2ltYWdlcy9sb2dvLWtyLnBuZycgOiAnL2ltYWdlcy9sb2dvLWVuLnBuZydcblxuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkxvZ299XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldE1vdXNlRW50ZXIodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE1vdXNlRW50ZXIoZmFsc2UpfVxuICAgICAgb25Ub3VjaFN0YXJ0PXsoKSA9PiBzZXRNb3VzZUVudGVyKHRydWUpfVxuICAgICAgb25Ub3VjaEVuZD17KCkgPT4gc2V0TW91c2VFbnRlcihmYWxzZSl9XG4gICAgPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuTG9nb19fd3JhcHBlcn0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLkxvZ29fX2ltYWdlLCB7XG4gICAgICAgICAgICAgIFtzdHlsZXNbJ0xvZ29fX2ltYWdlLS1oaWRkZW4nXV06IGlzTW91c2VFbnRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgd2lkdGg9ezQzNH1cbiAgICAgICAgICAgIGhlaWdodD17MTUzfVxuICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExvZ28pXG4iXSwic291cmNlUm9vdCI6IiJ9