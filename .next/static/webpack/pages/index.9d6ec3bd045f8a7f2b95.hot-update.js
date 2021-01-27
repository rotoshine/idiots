webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Panel.tsx":
/*!******************************!*\
  !*** ./components/Panel.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel.module.scss */ "./components/Panel.module.scss");
/* harmony import */ var _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Panel_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/winterwolf0412/workspace/idiots/components/Panel.tsx";



function Panel(_ref) {
  var title = _ref.title,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$noBorder = _ref.noBorder,
      noBorder = _ref$noBorder === void 0 ? false : _ref$noBorder,
      children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Panel, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['Panel__noBorder'], noBorder)),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.PanelTitle, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['PanelTitle--notitle'], !title)),
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.PanelContents,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_c = Panel;

var _c;

$RefreshReg$(_c, "Panel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYW5lbC50c3giXSwibmFtZXMiOlsiUGFuZWwiLCJ0aXRsZSIsInN0eWxlIiwibm9Cb3JkZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJQYW5lbFRpdGxlIiwiUGFuZWxDb250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBU2UsU0FBU0EsS0FBVCxPQUtMO0FBQUEsTUFKUkMsS0FJUSxRQUpSQSxLQUlRO0FBQUEsd0JBSFJDLEtBR1E7QUFBQSxNQUhSQSxLQUdRLDJCQUhBLEVBR0E7QUFBQSwyQkFGUkMsUUFFUTtBQUFBLE1BRlJBLFFBRVEsOEJBRkcsS0FFSDtBQUFBLE1BRFJDLFFBQ1EsUUFEUkEsUUFDUTtBQUNSLHNCQUNFO0FBQ0UsU0FBSyxFQUFFRixLQURUO0FBRUUsYUFBUyxFQUFFRyxpREFBVSxDQUFDQyx5REFBTSxDQUFDTixLQUFSLGdHQUNsQk0seURBQU0sQ0FBQyxpQkFBRCxDQURZLEVBQ1VILFFBRFYsRUFGdkI7QUFBQSw0QkFNRTtBQUNFLGVBQVMsRUFBRUUsaURBQVUsQ0FBQ0MseURBQU0sQ0FBQ0MsVUFBUixnR0FDbEJELHlEQUFNLENBQUMscUJBQUQsQ0FEWSxFQUNjLENBQUNMLEtBRGYsRUFEdkI7QUFBQSxnQkFLR0E7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFhRTtBQUFLLGVBQVMsRUFBRUsseURBQU0sQ0FBQ0UsYUFBdkI7QUFBQSxnQkFBdUNKO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQXZCdUJKLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQ2ZWMzYmQwNDVmOGE3ZjJiOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYW5lbC5tb2R1bGUuc2NzcydcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmdcbiAgc3R5bGU/OiBvYmplY3RcbiAgbm9Cb3JkZXI/OiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFuZWwoe1xuICB0aXRsZSxcbiAgc3R5bGUgPSB7fSxcbiAgbm9Cb3JkZXIgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuUGFuZWwsIHtcbiAgICAgICAgW3N0eWxlc1snUGFuZWxfX25vQm9yZGVyJ11dOiBub0JvcmRlcixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5QYW5lbFRpdGxlLCB7XG4gICAgICAgICAgW3N0eWxlc1snUGFuZWxUaXRsZS0tbm90aXRsZSddXTogIXRpdGxlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhbmVsQ29udGVudHN9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==