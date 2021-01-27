webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Panel.module.scss":
/*!**************************************!*\
  !*** ./components/Panel.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Panel.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Panel.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Panel.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Panel.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Panel.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Panel.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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
      _ref$noBorder = _ref.noBorder,
      noBorder = _ref$noBorder === void 0 ? false : _ref$noBorder,
      children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Panel, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['Panel__noBorder'], noBorder)),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.PanelTitle, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['PanelTitle--notitle'], !title)),
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Panel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.PanelContents,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Panel.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Panel.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Panel_Panel__3FOwl {\n  padding: 1rem;\n  -webkit-flex: 1 1;\n     -moz-box-flex: 1;\n          flex: 1 1;\n  border: 1px solid #ccc;\n  margin-right: 1rem;\n  margin-left: 1rem;\n}\n.Panel_Panel__3FOwl.Panel_Panel__noBorder__h3Vsx {\n  border: none;\n}\n.Panel_Panel__3FOwl .Panel_PanelTitle__2zspy {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-size: 3rem;\n  border-bottom: 1px solid #ccc;\n  font-weight: 500;\n}\n.Panel_Panel__3FOwl .Panel_PanelTitle--notitle__m507G {\n  border-bottom: none;\n}\n.Panel_Panel__3FOwl .Panel_PanelContents__6m7Qu {\n  font-size: 2rem;\n}", "",{"version":3,"sources":["webpack://Panel.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,iBAAA;KAAA,gBAAA;UAAA,SAAA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;AACF;AACE;EACE,YAAA;AACJ;AAEE;EACE,iBAAA;EACA,oBAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;AAAJ;AAEI;EACE,mBAAA;AAAN;AAIE;EACE,eAAA;AAFJ","sourcesContent":[".Panel {\n  padding: 1rem;\n  flex: 1;\n  border: 1px solid #ccc;\n  margin-right: 1rem;\n  margin-left: 1rem;\n\n  &.Panel__noBorder {\n    border: none;\n  }\n\n  .PanelTitle {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    font-size: 3rem;\n    border-bottom: 1px solid #ccc;\n    font-weight: 500;\n\n    &--notitle {\n      border-bottom: none;\n    }\n  }\n\n  .PanelContents {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Panel": "Panel_Panel__3FOwl",
	"Panel__noBorder": "Panel_Panel__noBorder__h3Vsx",
	"PanelTitle": "Panel_PanelTitle__2zspy",
	"PanelTitle--notitle": "Panel_PanelTitle--notitle__m507G",
	"PanelContents": "Panel_PanelContents__6m7Qu"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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
      lineNumber: 56,
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
            lineNumber: 71,
            columnNumber: 13
          }, _this)
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
                lineNumber: 86,
                columnNumber: 17
              }, this), "\uC548\uB1FD! \uB514\uC9C0\uD138 \uC2F1\uAE00 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "\uC5B8\uC81C\uB098"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 28
              }, this), "\uC758 \uBC1C\uB9E4\uC5D0 \uC55E\uC11C \uCEE8\uC149 \uC77C\uB7EC\uC2A4\uD2B8\uC640 \uC0C8 \uAD7F\uC988\uB4E4\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4!", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this), " \uD504\uB85C\uD544 \uB9C1\uD06C \uB610\uB294 \uB9C8\uD50C\uC0F5\uC5D0\uC11C \uBC34\uB4DC \uC774\uB514\uC5B4\uCE20\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694 \uD83D\uDC7B\uD83D\uDC9C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\uD83C\uDF08\u1109\u1162\u11A8\u1109\u1161\u11BC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\uBE14\uB799, \uB85C\uC584\uBE14\uB8E8, \uC624\uB80C\uC9C0, \uD654\uC774\uD2B8, \uC138\uC774\uD504\uD2F0 \uADF8\uB9B0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\u2728\u110C\u116E\u1106\u116E\u11AB\u1107\u1161\u11BC\u1107\u1165\u11B8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://marpple.shop/kr/band_idiots",
                  target: "_blank",
                  rel: "noopener norefferer",
                  children: "https://marpple.shop/kr/band_idiots"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, this), ' ', "\uD639\uC740 \u1106\u1161\u1111\u1173\u11AF\u1109\u1163\u11B8 \u1100\u1165\u11B7\u1109\u1162\u11A8\u110E\u1161\u11BC\u110B\u1166 \"\u1107\u1162\u11AB\u1103\u1173 \u110B\u1175\u1103\u1175\u110B\u1165\u110E\u1173\" \u1100\u1165\u11B7\u1109\u1162\u11A8!"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u1106\u1175\u1105\u1175 \u1106\u1161\u11AB\u1103\u1173\u11AF\u110B\u1165\u1103\u116E\u1102\u1173\u11AB\u1100\u1165\u11BA\u110B\u1175 \u110B\u1161\u1102\u1175\u11AB \u110C\u116E\u1106\u116E\u11AB \u110E\u1171\u1112\u1161\u11B8 \u1112\u116E \u110C\u1166\u110C\u1161\u11A8\u1112\u1161\u1102\u1173\u11AB \u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1173\u1105\u1169 \u1103\u1161\u1109\u1169 \u1109\u1175\u1100\u1161\u11AB\u110B\u1175 \u1100\u1165\u11AF\u1105\u1175\u11B8\u1102\u1175\u1103\u1161\uD83D\uDE16 \u110C\u116E\u1106\u116E\u11AB\u1109\u1175 \u110B\u1168\u1109\u1161\u11BC \u110E\u116E\u11AF\u1100\u1169\u110B\u1175\u11AF\u110B\u1173\u11AF \u1112\u116A\u11A8\u110B\u1175\u11AB\u1112\u1162\u110C\u116E\u1109\u1166\u110B\u116D!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u1106\u1161\u11AD\u110B\u1173\u11AB \u1100\u116A\u11AB\u1109\u1175\u11B7 \u1107\u116E\u1110\u1161\u11A8\u1103\u1173\u1105\u1175\u11B8\u1102\u1175\u1103\u1161 \uD83C\uDFB5\uD83D\uDC7B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/eonjena.png",
                alt: "\uC5B8\uC81C\uB098 \uCEE4\uBC84 \uC774\uBBF8\uC9C0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
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
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYW5lbC5tb2R1bGUuc2Nzcz85OGNmIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhbmVsLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYW5lbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBhbmVsIiwidGl0bGUiLCJub0JvcmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlBhbmVsVGl0bGUiLCJQYW5lbENvbnRlbnRzIiwiSW5kZXhQYWdlIiwiaG9tZUNvbnRlbnQiLCJ1c2VTdGF0ZSIsImNvdmVySW1hZ2VJbmRleCIsInNldENvdmVySW1hZ2VJbmRleCIsImluZGV4UmVmIiwidXNlUmVmIiwiY292ZXJJbWFnZXMiLCJjYXJvdXNlbEltYWdlcyIsInRyYW5zaXRpb25zIiwidXNlVHJhbnNpdGlvbiIsIml0ZW0iLCJpZCIsImZyb20iLCJvcGFjaXR5IiwiZW50ZXIiLCJsZWF2ZSIsImNvbmZpZyIsIm1vbGFzc2VzIiwidXNlRWZmZWN0IiwiTUFYX0lOREVYIiwibGVuZ3RoIiwidGltZW91dCIsInNldEludGVydmFsIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJtYXAiLCJwcm9wcyIsImtleSIsInVybCIsIkluZGV4UGFnZV9fY29udGVudHMiLCJJbmRleFBhZ2VfX3BhbmVscyIsIkluZGV4UGFnZV9fbmV3c1BhbmVscyIsInNjaGVkdWxlUG9zdGVycyIsImxvY2FsRmlsZSIsImNoaWxkSW1hZ2VTaGFycCIsImZsdWlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLG1lQUFtUjs7QUFFclQ7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxz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LG9GQUNILHNCQUErQixDQUEvQixDQURHLHFGQUNILHVCQUFtQ0MsU0FEaEMscUZBQ0gsdUJBQ0lDLGVBRkQsMkRBQ0gsdUJBQ3FCQyxLQUp6QjtBQU1FLG1CQUFHLEVBQUMsc0RBTk47QUFPRSx1QkFBTyxFQUFDO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZFRDs7R0FoSHVCcEMsUztVQU1GVSwwRDs7O0tBTkVWLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTljOGMwYjc1Mzg3NGRlNDFkMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9QYW5lbC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9QYW5lbC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9QYW5lbC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFuZWwubW9kdWxlLnNjc3MnXG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nXG4gIG5vQm9yZGVyPzogYm9vbGVhblxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsKHsgdGl0bGUsIG5vQm9yZGVyID0gZmFsc2UsIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5QYW5lbCwge1xuICAgICAgICBbc3R5bGVzWydQYW5lbF9fbm9Cb3JkZXInXV06IG5vQm9yZGVyLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLlBhbmVsVGl0bGUsIHtcbiAgICAgICAgICBbc3R5bGVzWydQYW5lbFRpdGxlLS1ub3RpdGxlJ11dOiAhdGl0bGUsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUGFuZWxDb250ZW50c30+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUGFuZWxfUGFuZWxfXzNGT3dsIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICAtd2Via2l0LWZsZXg6IDEgMTtcXG4gICAgIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLlBhbmVsX1BhbmVsX18zRk93bC5QYW5lbF9QYW5lbF9fbm9Cb3JkZXJfX2gzVnN4IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLlBhbmVsX1BhbmVsX18zRk93bCAuUGFuZWxfUGFuZWxUaXRsZV9fMnpzcHkge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLlBhbmVsX1BhbmVsX18zRk93bCAuUGFuZWxfUGFuZWxUaXRsZS0tbm90aXRsZV9fbTUwN0cge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLlBhbmVsX1BhbmVsX18zRk93bCAuUGFuZWxfUGFuZWxDb250ZW50c19fNm03UXUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vUGFuZWwubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7S0FBQSxnQkFBQTtVQUFBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUlFO0VBQ0UsZUFBQTtBQUZKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5QYW5lbCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG5cXG4gICYuUGFuZWxfX25vQm9yZGVyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcbiAgLlBhbmVsVGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuICAgICYtLW5vdGl0bGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5QYW5lbENvbnRlbnRzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJQYW5lbFwiOiBcIlBhbmVsX1BhbmVsX18zRk93bFwiLFxuXHRcIlBhbmVsX19ub0JvcmRlclwiOiBcIlBhbmVsX1BhbmVsX19ub0JvcmRlcl9faDNWc3hcIixcblx0XCJQYW5lbFRpdGxlXCI6IFwiUGFuZWxfUGFuZWxUaXRsZV9fMnpzcHlcIixcblx0XCJQYW5lbFRpdGxlLS1ub3RpdGxlXCI6IFwiUGFuZWxfUGFuZWxUaXRsZS0tbm90aXRsZV9fbTUwN0dcIixcblx0XCJQYW5lbENvbnRlbnRzXCI6IFwiUGFuZWxfUGFuZWxDb250ZW50c19fNm03UXVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWludGVyJ1xuaW1wb3J0IHsgYW5pbWF0ZWQsIGNvbmZpZywgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL1BhbmVsJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBob21lQ29udGVudDoge1xuICAgIGNhcm91c2VsSW1hZ2VzOiBhbnlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoeyBob21lQ29udGVudCB9OiBQcm9wcykge1xuICBjb25zdCBbY292ZXJJbWFnZUluZGV4LCBzZXRDb3ZlckltYWdlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgaW5kZXhSZWYgPSB1c2VSZWYoY292ZXJJbWFnZUluZGV4KVxuXG4gIGNvbnN0IGNvdmVySW1hZ2VzID0gaG9tZUNvbnRlbnQ/LmNhcm91c2VsSW1hZ2VzXG5cbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKFxuICAgIGNvdmVySW1hZ2VzPy5bY292ZXJJbWFnZUluZGV4XSxcbiAgICBpdGVtID0+IGl0ZW0/LmlkIHx8ICcnLFxuICAgIHtcbiAgICAgIGZyb206IHsgb3BhY2l0eTogMCB9LFxuICAgICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgbGVhdmU6IHsgb3BhY2l0eTogMCB9LFxuICAgICAgY29uZmlnOiBjb25maWcubW9sYXNzZXMsXG4gICAgfVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBNQVhfSU5ERVggPSAoY292ZXJJbWFnZXM/Lmxlbmd0aCA/PyAxKSAtIDFcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGluZGV4UmVmPy5jdXJyZW50ID09PSBNQVhfSU5ERVgpIHtcbiAgICAgICAgaW5kZXhSZWYuY3VycmVudCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4UmVmLmN1cnJlbnQgPSBpbmRleFJlZi5jdXJyZW50ICsgMVxuICAgICAgfVxuICAgICAgc2V0Q292ZXJJbWFnZUluZGV4KGluZGV4UmVmLmN1cnJlbnQpXG4gICAgfSwgNTAwMClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIGRlc2NyaXB0aW9uPVwi65SU7KeA7YS4IOyLseq4gCDslrjsoJzrgpjsnZgg67Cc66ek7JeQIOyVnuyEnCDsu6jshYlcbiAgICAgICAg7J2865+s7Iqk7Yq47JmAIOyDiCDqtb/spojrk6TsnYQg7IaM6rCc7ZWp64uI64ukIVxuICAgICAgICDtlITroZztlYQg66eB7YGsIOuYkOuKlCDrp4jtlIzsg7Xsl5DshJwg67C065OcIOydtOuUlOyWtOy4oOulvCDqsoDsg4ntlbTso7zshLjsmpRcIlxuICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vaWRpb3RzLmJhbmQvaW1hZ2VzL2VvbmplbmEucG5nXCJcbiAgICAgICAgaW1hZ2VXaWR0aD17OTAwfVxuICAgICAgICBpbWFnZUhlaWdodD17OTAwfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWydjb3Zlci1pbWFnZS1jYXJvdXNlbCddfT5cbiAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wcywga2V5IH0pID0+IChcbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydjb3Zlci1pbWFnZSddfVxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2lkaW90cy5yb3RvLmNvZGVzLyR7aXRlbT8udXJsfWB9XG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYWx0PVwiaWRpb3RzIGNvdmVyIGltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19jb250ZW50c30+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19wYW5lbHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmRleFBhZ2VfX25ld3NQYW5lbHN9PlxuICAgICAgICAgICAgICA8UGFuZWwgdGl0bGU9XCJOZXdzXCI+XG4gICAgICAgICAgICAgICAgPGgyPvCfkpzwn5G77Ja47KCc64KYIOGEkOGFteGEieGFp+GEjuGFsyDhhJHhhaHhhqvhhIbhhaLhhIDhhaLhhInhhbUhIfCfkbvwn5KcPC9oMj5cbiAgICAgICAgICAgICAgICDslYjrh70hIOuUlOyngO2EuCDsi7HquIAgPGNvZGU+7Ja47KCc64KYPC9jb2RlPuydmCDrsJzrp6Tsl5Ag7JWe7IScIOy7qOyFiVxuICAgICAgICAgICAgICAgIOydvOufrOyKpO2KuOyZgCDsg4gg6rW/7KaI65Ok7J2EIOyGjOqwnO2VqeuLiOuLpCFcbiAgICAgICAgICAgICAgICA8YnIgLz4g7ZSE66Gc7ZWEIOunge2BrCDrmJDripQg66eI7ZSM7IO17JeQ7IScIOuwtOuTnCDsnbTrlJTslrTsuKDrpbwg6rKA7IOJ7ZW07KO87IS47JqUXG4gICAgICAgICAgICAgICAg8J+Ru/CfkpxcbiAgICAgICAgICAgICAgICA8aDM+8J+MiOGEieGFouGGqOGEieGFoeGGvDwvaDM+XG4gICAgICAgICAgICAgICAgPHA+67iU656ZLCDroZzsloTruJTro6gsIOyYpOugjOyngCwg7ZmU7J207Yq4LCDshLjsnbTtlITti7Ag6re466awPC9wPlxuICAgICAgICAgICAgICAgIDxoMz7inKjhhIzhha7hhIbhha7hhqvhhIfhhaHhhrzhhIfhhaXhhrg8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFycHBsZS5zaG9wL2tyL2JhbmRfaWRpb3RzXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZmZXJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIGh0dHBzOi8vbWFycHBsZS5zaG9wL2tyL2JhbmRfaWRpb3RzXG4gICAgICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgICAgIO2YueydgCDhhIbhhaHhhJHhhbPhhq/hhInhhaPhhrgg4YSA4YWl4Ya34YSJ4YWi4Yao4YSO4YWh4Ya84YSL4YWmIFwi4YSH4YWi4Yar4YSD4YWzIOGEi+GFteGEg+GFteGEi+GFpeGEjuGFs1wiXG4gICAgICAgICAgICAgICAgICDhhIDhhaXhhrfhhInhhaLhhqghXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAg4YSG4YW14YSF4YW1IOGEhuGFoeGGq+GEg+GFs+GGr+GEi+GFpeGEg+GFruGEguGFs+GGq+GEgOGFpeGGuuGEi+GFtSDhhIvhhaHhhILhhbXhhqsg4YSM4YWu4YSG4YWu4YarIOGEjuGFseGEkuGFoeGGuCDhhJLhha5cbiAgICAgICAgICAgICAgICAgIOGEjOGFpuGEjOGFoeGGqOGEkuGFoeGEguGFs+GGqyDhhInhhbXhhInhhbPhhJDhhabhhrfhhIvhhbPhhIXhhakg4YSD4YWh4YSJ4YWpIOGEieGFteGEgOGFoeGGq+GEi+GFtVxuICAgICAgICAgICAgICAgICAg4YSA4YWl4Yav4YSF4YW14Ya44YSC4YW14YSD4YWh8J+YliDhhIzhha7hhIbhha7hhqvhhInhhbUg4YSL4YWo4YSJ4YWh4Ya8IOGEjuGFruGGr+GEgOGFqeGEi+GFteGGr+GEi+GFs+GGr1xuICAgICAgICAgICAgICAgICAg4YSS4YWq4Yao4YSL4YW14Yar4YSS4YWi4YSM4YWu4YSJ4YWm4YSL4YWtIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD7hhIbhhaHhhq3hhIvhhbPhhqsg4YSA4YWq4Yar4YSJ4YW14Ya3IOGEh+GFruGEkOGFoeGGqOGEg+GFs+GEheGFteGGuOGEguGFteGEg+GFoSDwn4618J+RuzwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZW9uamVuYS5wbmdcIiBhbHQ9XCLslrjsoJzrgpgg7Luk67KEIOydtOuvuOyngFwiIC8+XG4gICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgIDxQYW5lbCB0aXRsZT1cIuydtOuUlOyWtOy4oCAxMeyblCDsiqTsvIDspbRcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvJHtob21lQ29udGVudC5zY2hlZHVsZVBvc3RlcnNbMF0udXJsfWB9XG4gICAgICAgICAgICAgICAgICBmbHVpZD17XG4gICAgICAgICAgICAgICAgICAgIGhvbWVDb250ZW50Py5zY2hlZHVsZVBvc3RlcnM/LlswXT8ubG9jYWxGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgPy5jaGlsZEltYWdlU2hhcnA/LmZsdWlkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCLsnbTrlJTslrTsuKAgMTHsm5Qg7Iqk7LyA7KW0XCJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBob21lQ29udGV0c1JlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAnaHR0cHM6Ly9pZGlvdHMucm90by5jb2Rlcy9ob21lLWNvbnRlbnRzJ1xuICApXG4gIGNvbnN0IGxpdmVzUmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICdodHRwczovL2lkaW90cy5yb3RvLmNvZGVzL2xpdmVzP2RhdGVfZ3RlPTIwMjAtMDEtMDEmX3NvcnQ9ZGF0ZTpERVNDJ1xuICApXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGhvbWVDb250ZW50OiBob21lQ29udGV0c1Jlcy5kYXRhWzBdLFxuICAgICAgbGl2ZXM6IGxpdmVzUmVzLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzMDAwLFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9