webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LiveList.module.scss":
/*!*****************************************!*\
  !*** ./components/LiveList.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./LiveList.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/LiveList.module.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./LiveList.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/LiveList.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./LiveList.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/LiveList.module.scss");

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

/***/ "./components/LiveList.tsx":
/*!*********************************!*\
  !*** ./components/LiveList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _LiveList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveList.module.scss */ "./components/LiveList.module.scss");
/* harmony import */ var _LiveList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LiveList_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Panel */ "./components/Panel.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "/home/winterwolf0412/workspace/idiots/components/LiveList.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function LiveList(_ref) {
  _s();

  var _this = this;

  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Live List' : _ref$title,
      lives = _ref.lives;
  var trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useTrail"])(lives.edges.length, {
    mass: 5,
    tension: 2000,
    friction: 200,
    opacity: 1,
    x: 0,
    height: 80,
    from: {
      opacity: 0,
      x: 20,
      height: 0
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: title,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _LiveList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.LiveList,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: trail.map(function (_ref2, index) {
          var x = _ref2.x,
              height = _ref2.height,
              rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["x", "height"]);

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spring__WEBPACK_IMPORTED_MODULE_6__["animated"].li, {
            className: _LiveList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.LiveList__live,
            style: _objectSpread(_objectSpread({}, rest), {}, {
              transform: x.interpolate(function (x) {
                return "translate3d(0,".concat(x, "px,0)");
              })
            }),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spring__WEBPACK_IMPORTED_MODULE_6__["animated"].div, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/live/".concat(lives.edges[index].node.slug, "/"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _LiveList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['LiveList__canceledLive'], lives.edges[index].node.isCanceled)),
                  children: [lives.edges[index].node.isCanceled ? '[취소됨]' : '', "[", lives.edges[index].node.date, "]", ' ', lives.edges[index].node.title]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(LiveList, "K6MPM4NNUf2NQipcqSVMWb0gIKk=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_6__["useTrail"]];
});

_c = LiveList;

var _c;

$RefreshReg$(_c, "LiveList");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/LiveList.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/LiveList.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".LiveList_LiveList__3Sz7r ul {\n  padding: 0;\n}\n.LiveList_LiveList__3Sz7r .LiveList_LiveList__live__1LvQS {\n  padding: 0;\n  list-style: none;\n  margin-bottom: 1em;\n  line-height: 1;\n  word-break: break-all;\n}\n.LiveList_LiveList__3Sz7r .LiveList_LiveList__canceledLive__mCDQD {\n  color: #999;\n  text-decoration: line-through;\n}", "",{"version":3,"sources":["webpack://LiveList.module.scss"],"names":[],"mappings":"AACE;EACE,UAAA;AAAJ;AAGE;EACE,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;AADJ;AAIE;EACE,WAAA;EACA,6BAAA;AAFJ","sourcesContent":[".LiveList {\n  ul {\n    padding: 0;\n  }\n\n  .LiveList__live {\n    padding: 0;\n    list-style: none;\n    margin-bottom: 1em;\n    line-height: 1;\n    word-break: break-all;\n  }\n\n  .LiveList__canceledLive {\n    color: #999;\n    text-decoration: line-through;\n\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LiveList": "LiveList_LiveList__3Sz7r",
	"LiveList__live": "LiveList_LiveList__live__1LvQS",
	"LiveList__canceledLive": "LiveList_LiveList__canceledLive__mCDQD"
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
/* harmony import */ var _components_LiveList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LiveList */ "./components/LiveList.tsx");


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
      lineNumber: 58,
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
            lineNumber: 73,
            columnNumber: 13
          }, _this)
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
                lineNumber: 88,
                columnNumber: 17
              }, this), "\uC548\uB1FD! \uB514\uC9C0\uD138 \uC2F1\uAE00 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "\uC5B8\uC81C\uB098"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 28
              }, this), "\uC758 \uBC1C\uB9E4\uC5D0 \uC55E\uC11C \uCEE8\uC149 \uC77C\uB7EC\uC2A4\uD2B8\uC640 \uC0C8 \uAD7F\uC988\uB4E4\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4!", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this), " \uD504\uB85C\uD544 \uB9C1\uD06C \uB610\uB294 \uB9C8\uD50C\uC0F5\uC5D0\uC11C \uBC34\uB4DC \uC774\uB514\uC5B4\uCE20\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694 \uD83D\uDC7B\uD83D\uDC9C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\uD83C\uDF08\u1109\u1162\u11A8\u1109\u1161\u11BC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\uBE14\uB799, \uB85C\uC584\uBE14\uB8E8, \uC624\uB80C\uC9C0, \uD654\uC774\uD2B8, \uC138\uC774\uD504\uD2F0 \uADF8\uB9B0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\u2728\u110C\u116E\u1106\u116E\u11AB\u1107\u1161\u11BC\u1107\u1165\u11B8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://marpple.shop/kr/band_idiots",
                  target: "_blank",
                  rel: "noopener norefferer",
                  children: "https://marpple.shop/kr/band_idiots"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this), ' ', "\uD639\uC740 \u1106\u1161\u1111\u1173\u11AF\u1109\u1163\u11B8 \u1100\u1165\u11B7\u1109\u1162\u11A8\u110E\u1161\u11BC\u110B\u1166 \"\u1107\u1162\u11AB\u1103\u1173 \u110B\u1175\u1103\u1175\u110B\u1165\u110E\u1173\" \u1100\u1165\u11B7\u1109\u1162\u11A8!"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u1106\u1175\u1105\u1175 \u1106\u1161\u11AB\u1103\u1173\u11AF\u110B\u1165\u1103\u116E\u1102\u1173\u11AB\u1100\u1165\u11BA\u110B\u1175 \u110B\u1161\u1102\u1175\u11AB \u110C\u116E\u1106\u116E\u11AB \u110E\u1171\u1112\u1161\u11B8 \u1112\u116E \u110C\u1166\u110C\u1161\u11A8\u1112\u1161\u1102\u1173\u11AB \u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1173\u1105\u1169 \u1103\u1161\u1109\u1169 \u1109\u1175\u1100\u1161\u11AB\u110B\u1175 \u1100\u1165\u11AF\u1105\u1175\u11B8\u1102\u1175\u1103\u1161\uD83D\uDE16 \u110C\u116E\u1106\u116E\u11AB\u1109\u1175 \u110B\u1168\u1109\u1161\u11BC \u110E\u116E\u11AF\u1100\u1169\u110B\u1175\u11AF\u110B\u1173\u11AF \u1112\u116A\u11A8\u110B\u1175\u11AB\u1112\u1162\u110C\u116E\u1109\u1166\u110B\u116D!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u1106\u1161\u11AD\u110B\u1173\u11AB \u1100\u116A\u11AB\u1109\u1175\u11B7 \u1107\u116E\u1110\u1161\u11A8\u1103\u1173\u1105\u1175\u11B8\u1102\u1175\u1103\u1161 \uD83C\uDFB5\uD83D\uDC7B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/images/eonjena.png",
                alt: "\uC5B8\uC81C\uB098 \uCEE4\uBC84 \uC774\uBBF8\uC9C0",
                width: 500,
                height: 500
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Panel__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "\uC774\uB514\uC5B4\uCE20 11\uC6D4 \uC2A4\uCF00\uC974",
              style: {
                marginTop: 16
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  position: 'relative',
                  height: 600
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "https://idiots.roto.codes/".concat(homeContent.schedulePosters[0].url),
                  alt: "\uC774\uB514\uC5B4\uCE20 11\uC6D4 \uC2A4\uCF00\uC974",
                  layout: "fill",
                  objectFit: "contain"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LiveList__WEBPACK_IMPORTED_MODULE_9__["default"], {
            lives: lives
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
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
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXZlTGlzdC5tb2R1bGUuc2Nzcz84ODE4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpdmVMaXN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpdmVMaXN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGl2ZUxpc3QiLCJ0aXRsZSIsImxpdmVzIiwidHJhaWwiLCJ1c2VUcmFpbCIsImVkZ2VzIiwibGVuZ3RoIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsIm9wYWNpdHkiLCJ4IiwiaGVpZ2h0IiwiZnJvbSIsInN0eWxlcyIsIm1hcCIsImluZGV4IiwicmVzdCIsIkxpdmVMaXN0X19saXZlIiwidHJhbnNmb3JtIiwiaW50ZXJwb2xhdGUiLCJub2RlIiwic2x1ZyIsImNsYXNzTmFtZXMiLCJpc0NhbmNlbGVkIiwiZGF0ZSIsIkluZGV4UGFnZSIsImhvbWVDb250ZW50IiwidXNlU3RhdGUiLCJjb3ZlckltYWdlSW5kZXgiLCJzZXRDb3ZlckltYWdlSW5kZXgiLCJpbmRleFJlZiIsInVzZVJlZiIsImNvdmVySW1hZ2VzIiwiY2Fyb3VzZWxJbWFnZXMiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJpdGVtIiwiaWQiLCJlbnRlciIsImxlYXZlIiwiY29uZmlnIiwibW9sYXNzZXMiLCJ1c2VFZmZlY3QiLCJNQVhfSU5ERVgiLCJ0aW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInByb3BzIiwia2V5IiwidXJsIiwiSW5kZXhQYWdlX19jb250ZW50cyIsIkluZGV4UGFnZV9fcGFuZWxzIiwiSW5kZXhQYWdlX19u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QUFBLHNCQTFCRixlQTJCRSxxRUFBQyxpREFBRDtBQUNFLG1CQUFHLEVBQUMscUJBRE47QUFFRSxtQkFBRyxFQUFDLG9EQUZOO0FBR0UscUJBQUssRUFBRSxHQUhUO0FBSUUsc0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQW1DRSxxRUFBQyx5REFBRDtBQUFPLG1CQUFLLEVBQUMsc0RBQWI7QUFBNEIsbUJBQUssRUFBRTtBQUFFQyx5QkFBUyxFQUFFO0FBQWIsZUFBbkM7QUFBQSxxQ0FDRTtBQUFLLHFCQUFLLEVBQUU7QUFBRUMsMEJBQVEsRUFBRSxVQUFaO0FBQXdCNUMsd0JBQU0sRUFBRTtBQUFoQyxpQkFBWjtBQUFBLHVDQUNFLHFFQUFDLGlEQUFEO0FBQ0UscUJBQUcsc0NBQStCZSxXQUFXLENBQUM4QixlQUFaLENBQTRCLENBQTVCLEVBQStCTixHQUE5RCxDQURMO0FBRUUscUJBQUcsRUFBQyxzREFGTjtBQUdFLHdCQUFNLEVBQUMsTUFIVDtBQUlFLDJCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQStDRSxxRUFBQyw0REFBRDtBQUFVLGlCQUFLLEVBQUVqRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtGRDs7R0FySHVCd0IsUztVQU1GVSwwRDs7O0tBTkVWLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQ3MGI5NWRjZWZmNzY3YWZlMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9MaXZlTGlzdC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9MaXZlTGlzdC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9MaXZlTGlzdC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTGl2ZUxpc3QubW9kdWxlLnNjc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVRyYWlsLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcblxuaW1wb3J0IFBhbmVsIGZyb20gJy4vUGFuZWwnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZT86IHN0cmluZ1xuICBsaXZlczogYW55XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXZlTGlzdCh7IHRpdGxlID0gJ0xpdmUgTGlzdCcsIGxpdmVzIH06IFByb3BzKSB7XG4gIGNvbnN0IHRyYWlsID0gdXNlVHJhaWwobGl2ZXMuZWRnZXMubGVuZ3RoLCB7XG4gICAgbWFzczogNSxcbiAgICB0ZW5zaW9uOiAyMDAwLFxuICAgIGZyaWN0aW9uOiAyMDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB4OiAwLFxuICAgIGhlaWdodDogODAsXG4gICAgZnJvbToge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHg6IDIwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZWwgdGl0bGU9e3RpdGxlfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkxpdmVMaXN0fT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0cmFpbC5tYXAoKHsgeCwgaGVpZ2h0LCAuLi5yZXN0IH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8YW5pbWF0ZWQubGlcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTGl2ZUxpc3RfX2xpdmV9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHguaW50ZXJwb2xhdGUoeCA9PiBgdHJhbnNsYXRlM2QoMCwke3h9cHgsMClgKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFuaW1hdGVkLmRpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2xpdmUvJHtsaXZlcy5lZGdlc1tpbmRleF0ubm9kZS5zbHVnfS9gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzWydMaXZlTGlzdF9fY2FuY2VsZWRMaXZlJ11dOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGl2ZXMuZWRnZXNbaW5kZXhdLm5vZGUuaXNDYW5jZWxlZCxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsaXZlcy5lZGdlc1tpbmRleF0ubm9kZS5pc0NhbmNlbGVkID8gJ1vst6jshozrkKhdJyA6ICcnfVtcbiAgICAgICAgICAgICAgICAgICAge2xpdmVzLmVkZ2VzW2luZGV4XS5ub2RlLmRhdGV9XXsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtsaXZlcy5lZGdlc1tpbmRleF0ubm9kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgICA8L2FuaW1hdGVkLmxpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvUGFuZWw+XG4gIClcbn1cbiIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkxpdmVMaXN0X0xpdmVMaXN0X18zU3o3ciB1bCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uTGl2ZUxpc3RfTGl2ZUxpc3RfXzNTejdyIC5MaXZlTGlzdF9MaXZlTGlzdF9fbGl2ZV9fMUx2UVMge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuLkxpdmVMaXN0X0xpdmVMaXN0X18zU3o3ciAuTGl2ZUxpc3RfTGl2ZUxpc3RfX2NhbmNlbGVkTGl2ZV9fbUNEUUQge1xcbiAgY29sb3I6ICM5OTk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0xpdmVMaXN0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNFO0VBQ0UsVUFBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTGl2ZUxpc3Qge1xcbiAgdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLkxpdmVMaXN0X19saXZlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgfVxcblxcbiAgLkxpdmVMaXN0X19jYW5jZWxlZExpdmUge1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkxpdmVMaXN0XCI6IFwiTGl2ZUxpc3RfTGl2ZUxpc3RfXzNTejdyXCIsXG5cdFwiTGl2ZUxpc3RfX2xpdmVcIjogXCJMaXZlTGlzdF9MaXZlTGlzdF9fbGl2ZV9fMUx2UVNcIixcblx0XCJMaXZlTGlzdF9fY2FuY2VsZWRMaXZlXCI6IFwiTGl2ZUxpc3RfTGl2ZUxpc3RfX2NhbmNlbGVkTGl2ZV9fbUNEUURcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWludGVyJ1xuaW1wb3J0IHsgYW5pbWF0ZWQsIGNvbmZpZywgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL1BhbmVsJ1xuaW1wb3J0IExpdmVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGl2ZUxpc3QnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhvbWVDb250ZW50OiB7XG4gICAgY2Fyb3VzZWxJbWFnZXM6IGFueVxuICAgIHNjaGVkdWxlUG9zdGVyczogYW55XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHsgaG9tZUNvbnRlbnQgfTogUHJvcHMpIHtcbiAgY29uc3QgW2NvdmVySW1hZ2VJbmRleCwgc2V0Q292ZXJJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IGluZGV4UmVmID0gdXNlUmVmKGNvdmVySW1hZ2VJbmRleClcblxuICBjb25zdCBjb3ZlckltYWdlcyA9IGhvbWVDb250ZW50Py5jYXJvdXNlbEltYWdlc1xuXG4gIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihcbiAgICBjb3ZlckltYWdlcz8uW2NvdmVySW1hZ2VJbmRleF0sXG4gICAgaXRlbSA9PiBpdGVtPy5pZCB8fCAnJyxcbiAgICB7XG4gICAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgIGVudGVyOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgIGNvbmZpZzogY29uZmlnLm1vbGFzc2VzLFxuICAgIH1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgTUFYX0lOREVYID0gKGNvdmVySW1hZ2VzPy5sZW5ndGggPz8gMSkgLSAxXG4gICAgY29uc3QgdGltZW91dCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChpbmRleFJlZj8uY3VycmVudCA9PT0gTUFYX0lOREVYKSB7XG4gICAgICAgIGluZGV4UmVmLmN1cnJlbnQgPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleFJlZi5jdXJyZW50ID0gaW5kZXhSZWYuY3VycmVudCArIDFcbiAgICAgIH1cbiAgICAgIHNldENvdmVySW1hZ2VJbmRleChpbmRleFJlZi5jdXJyZW50KVxuICAgIH0sIDUwMDApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZX0+XG4gICAgICA8TWV0YVxuICAgICAgICBkZXNjcmlwdGlvbj1cIuuUlOyngO2EuCDsi7HquIAg7Ja47KCc64KY7J2YIOuwnOunpOyXkCDslZ7shJwg7Luo7IWJXG4gICAgICAgIOydvOufrOyKpO2KuOyZgCDsg4gg6rW/7KaI65Ok7J2EIOyGjOqwnO2VqeuLiOuLpCFcbiAgICAgICAg7ZSE66Gc7ZWEIOunge2BrCDrmJDripQg66eI7ZSM7IO17JeQ7IScIOuwtOuTnCDsnbTrlJTslrTsuKDrpbwg6rKA7IOJ7ZW07KO87IS47JqUXCJcbiAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL2lkaW90cy5iYW5kL2ltYWdlcy9lb25qZW5hLnBuZ1wiXG4gICAgICAgIGltYWdlV2lkdGg9ezkwMH1cbiAgICAgICAgaW1hZ2VIZWlnaHQ9ezkwMH1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1snY292ZXItaW1hZ2UtY2Fyb3VzZWwnXX0+XG4gICAgICAgIHt0cmFuc2l0aW9ucy5tYXAoKHsgaXRlbSwgcHJvcHMsIGtleSB9KSA9PiAoXG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snY292ZXItaW1hZ2UnXX1cbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pZGlvdHMucm90by5jb2Rlcy8ke2l0ZW0/LnVybH1gfVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsdD1cImlkaW90cyBjb3ZlciBpbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZV9fY29udGVudHN9PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkluZGV4UGFnZV9fcGFuZWxzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5kZXhQYWdlX19uZXdzUGFuZWxzfT5cbiAgICAgICAgICAgICAgPFBhbmVsIHRpdGxlPVwiTmV3c1wiPlxuICAgICAgICAgICAgICAgIDxoMj7wn5Kc8J+Ru+yWuOygnOuCmCDhhJDhhbXhhInhhafhhI7hhbMg4YSR4YWh4Yar4YSG4YWi4YSA4YWi4YSJ4YW1ISHwn5G78J+SnDwvaDI+XG4gICAgICAgICAgICAgICAg7JWI64e9ISDrlJTsp4DthLgg7Iux6riAIDxjb2RlPuyWuOygnOuCmDwvY29kZT7snZgg67Cc66ek7JeQIOyVnuyEnCDsu6jshYlcbiAgICAgICAgICAgICAgICDsnbzrn6zsiqTtirjsmYAg7IOIIOq1v+ymiOuTpOydhCDshozqsJztlanri4jri6QhXG4gICAgICAgICAgICAgICAgPGJyIC8+IO2UhOuhnO2VhCDrp4Htgawg65iQ64qUIOuniO2UjOyDteyXkOyEnCDrsLTrk5wg7J2065SU7Ja07Lig66W8IOqygOyDie2VtOyjvOyEuOyalFxuICAgICAgICAgICAgICAgIPCfkbvwn5KcXG4gICAgICAgICAgICAgICAgPGgzPvCfjIjhhInhhaLhhqjhhInhhaHhhrw8L2gzPlxuICAgICAgICAgICAgICAgIDxwPuu4lOuemSwg66Gc7JaE67iU66OoLCDsmKTroIzsp4AsIO2ZlOydtO2KuCwg7IS47J207ZSE7YuwIOq3uOumsDwvcD5cbiAgICAgICAgICAgICAgICA8aDM+4pyo4YSM4YWu4YSG4YWu4Yar4YSH4YWh4Ya84YSH4YWl4Ya4PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21hcnBwbGUuc2hvcC9rci9iYW5kX2lkaW90c1wiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZmVyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBodHRwczovL21hcnBwbGUuc2hvcC9rci9iYW5kX2lkaW90c1xuICAgICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgICDtmLnsnYAg4YSG4YWh4YSR4YWz4Yav4YSJ4YWj4Ya4IOGEgOGFpeGGt+GEieGFouGGqOGEjuGFoeGGvOGEi+GFpiBcIuGEh+GFouGGq+GEg+GFsyDhhIvhhbXhhIPhhbXhhIvhhaXhhI7hhbNcIlxuICAgICAgICAgICAgICAgICAg4YSA4YWl4Ya34YSJ4YWi4YaoIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIOGEhuGFteGEheGFtSDhhIbhhaHhhqvhhIPhhbPhhq/hhIvhhaXhhIPhha7hhILhhbPhhqvhhIDhhaXhhrrhhIvhhbUg4YSL4YWh4YSC4YW14YarIOGEjOGFruGEhuGFruGGqyDhhI7hhbHhhJLhhaHhhrgg4YSS4YWuXG4gICAgICAgICAgICAgICAgICDhhIzhhabhhIzhhaHhhqjhhJLhhaHhhILhhbPhhqsg4YSJ4YW14YSJ4YWz4YSQ4YWm4Ya34YSL4YWz4YSF4YWpIOGEg+GFoeGEieGFqSDhhInhhbXhhIDhhaHhhqvhhIvhhbVcbiAgICAgICAgICAgICAgICAgIOGEgOGFpeGGr+GEheGFteGGuOGEguGFteGEg+GFofCfmJYg4YSM4YWu4YSG4YWu4Yar4YSJ4YW1IOGEi+GFqOGEieGFoeGGvCDhhI7hha7hhq/hhIDhhanhhIvhhbXhhq/hhIvhhbPhhq9cbiAgICAgICAgICAgICAgICAgIOGEkuGFquGGqOGEi+GFteGGq+GEkuGFouGEjOGFruGEieGFpuGEi+GFrSFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+4YSG4YWh4Yat4YSL4YWz4YarIOGEgOGFquGGq+GEieGFteGGtyDhhIfhha7hhJDhhaHhhqjhhIPhhbPhhIXhhbXhhrjhhILhhbXhhIPhhaEg8J+OtfCfkbs8L3A+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2VvbmplbmEucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIuyWuOygnOuCmCDsu6TrsoQg7J2066+47KeAXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICA8UGFuZWwgdGl0bGU9XCLsnbTrlJTslrTsuKAgMTHsm5Qg7Iqk7LyA7KW0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2lkaW90cy5yb3RvLmNvZGVzLyR7aG9tZUNvbnRlbnQuc2NoZWR1bGVQb3N0ZXJzWzBdLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCLsnbTrlJTslrTsuKAgMTHsm5Qg7Iqk7LyA7KW0XCJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpdmVMaXN0IGxpdmVzPXtsaXZlc30gLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGhvbWVDb250ZXRzUmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICdodHRwczovL2lkaW90cy5yb3RvLmNvZGVzL2hvbWUtY29udGVudHMnXG4gIClcbiAgY29uc3QgbGl2ZXNSZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgJ2h0dHBzOi8vaWRpb3RzLnJvdG8uY29kZXMvbGl2ZXM/ZGF0ZV9ndGU9MjAyMC0wMS0wMSZfc29ydD1kYXRlOkRFU0MnXG4gIClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaG9tZUNvbnRlbnQ6IGhvbWVDb250ZXRzUmVzLmRhdGFbMF0sXG4gICAgICBsaXZlczogbGl2ZXNSZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDMwMDAsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=