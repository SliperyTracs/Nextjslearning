"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contacts/[contactID]",{

/***/ "./pages/contacts/[contactID].js":
/*!***************************************!*\
  !*** ./pages/contacts/[contactID].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/contacts */ \"./pages/api/contacts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Contct() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { contactId  } = router.query;\n    const contact = _api_contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find((contact)=>contact.id === contactId);\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Contact\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\frog\\\\OneDrive - Temasek Polytechnic\\\\Desktop\\\\Sats\\\\SAT_polls\\\\Nextjs-learning\\\\my-next-app\\\\pages\\\\contacts\\\\[contactID].js\",\n        lineNumber: 10,\n        columnNumber: 12\n    }, this);\n// const [first , last] =contact.name.split(\" \");\n// return(<h1>Contact: {last.toUpperCase()}, {first}</h1>)\n}\n_s(Contct, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Contct;\nvar _c;\n$RefreshReg$(_c, \"Contct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0cy9bY29udGFjdElEXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0w7QUFDRDtBQUV2QixTQUFTRyxTQUFTOztJQUM3QixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDSSxVQUFTLEVBQUMsR0FBR0QsT0FBT0UsS0FBSztJQUNoQyxNQUFNQyxVQUFVTCwwREFBYSxDQUFDSyxDQUFBQSxVQUFXQSxRQUFRRSxFQUFFLEtBQUtKO0lBQ3hELFFBQVE7SUFDUixxQkFBTyw4REFBQ0s7a0JBQUc7Ozs7OztBQUNYLGlEQUFpRDtBQUNqRCwwREFBMEQ7QUFDOUQsQ0FBQztHQVJ1QlA7O1FBQ0xGLGtEQUFTQTs7O0tBREpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3RzL1tjb250YWN0SURdLmpzPzA5M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgY29udGFjdHMgZnJvbSBcIi4uL2FwaS9jb250YWN0c1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250Y3QoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge2NvbnRhY3RJZH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBjb250YWN0cy5maW5kKGNvbnRhY3QgPT4gY29udGFjdC5pZCA9PT0gY29udGFjdElkKTtcclxuICAgIGRlYnVnZ2VyXHJcbiAgICByZXR1cm4oPGgxPkNvbnRhY3Q8L2gxPilcclxuICAgIC8vIGNvbnN0IFtmaXJzdCAsIGxhc3RdID1jb250YWN0Lm5hbWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgLy8gcmV0dXJuKDxoMT5Db250YWN0OiB7bGFzdC50b1VwcGVyQ2FzZSgpfSwge2ZpcnN0fTwvaDE+KVxyXG59Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVJvdXRlciIsImNvbnRhY3RzIiwiQ29udGN0Iiwicm91dGVyIiwiY29udGFjdElkIiwicXVlcnkiLCJjb250YWN0IiwiZmluZCIsImlkIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contacts/[contactID].js\n"));

/***/ })

});