"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sections",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Layout(param) {\n    var children = param.children;\n    var _this = this;\n    var links = [\n        {\n            title: \"Home\",\n            path: \"/\"\n        },\n        {\n            title: \"Top Stories\",\n            path: \"/news/top-stories\"\n        },\n        {\n            title: \"Popular\",\n            path: \"/news/popular\"\n        },\n        {\n            title: \"sections\",\n            path: \"\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            links.map(function(link) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: link.path,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: [\n                            link.title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\frog\\\\OneDrive - Temasek Polytechnic\\\\Desktop\\\\Sats\\\\SAT_polls\\\\Nextjs-learning\\\\Chapter3\\\\course_files\\\\03\\\\03-10-404-page\\\\components\\\\Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 43\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\frog\\\\OneDrive - Temasek Polytechnic\\\\Desktop\\\\Sats\\\\SAT_polls\\\\Nextjs-learning\\\\Chapter3\\\\course_files\\\\03\\\\03-10-404-page\\\\components\\\\Layout.js\",\n                    lineNumber: 26,\n                    columnNumber: 20\n                }, _this);\n            }),\n            children\n        ]\n    }, void 0, true);\n};\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQTRCO0FBRWIsU0FBU0MsTUFBTSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQ3JDLElBQU1DLEtBQUssR0FBRztRQUNWO1lBQ0lDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLElBQUksRUFBRSxHQUFHO1NBQ1o7UUFDRDtZQUNFRCxLQUFLLEVBQUUsYUFBYTtZQUNwQkMsSUFBSSxFQUFFLG1CQUFtQjtTQUMxQjtRQUNEO1lBQ0VELEtBQUssRUFBRSxTQUFTO1lBQ2hCQyxJQUFJLEVBQUUsZUFBZTtTQUN0QjtRQUNEO1lBQ0VELEtBQUssRUFBQyxVQUFVO1lBQ2hCQyxJQUFJLEVBQUMsRUFBRTtTQUNSO0tBQ0Y7SUFDSCxxQkFDSTs7WUFDRUYsS0FBSyxDQUFDRyxHQUFHLENBQUNDLFNBQUFBLElBQUksRUFBSTtnQkFDaEIscUJBQU8sOERBQUNQLGtEQUFJO29CQUFDUSxJQUFJLEVBQUVELElBQUksQ0FBQ0YsSUFBSTs4QkFBRSw0RUFBQ0ksR0FBQzs7NEJBQUVGLElBQUksQ0FBQ0gsS0FBSzs0QkFBRSxHQUFHOzs7Ozs7NkJBQUs7Ozs7O3lCQUFPLENBQUM7YUFDaEUsQ0FBQztZQUNBRixRQUFROztvQkFDUixDQUNOO0NBQ0o7QUEzQnVCRCxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgbGlua3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsIFxyXG4gICAgICAgICAgICBwYXRoOiBcIi9cIlxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcIlRvcCBTdG9yaWVzXCIsIFxyXG4gICAgICAgICAgcGF0aDogXCIvbmV3cy90b3Atc3Rvcmllc1wiXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiUG9wdWxhclwiLCBcclxuICAgICAgICAgIHBhdGg6IFwiL25ld3MvcG9wdWxhclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTpcInNlY3Rpb25zXCIsXHJcbiAgICAgICAgICBwYXRoOlwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIF07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0+PGE+e2xpbmsudGl0bGV9e1wiIFwifTwvYT48L0xpbms+O1xyXG4gICAgICAgICB9KX1cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsaW5rcyIsInRpdGxlIiwicGF0aCIsIm1hcCIsImxpbmsiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});