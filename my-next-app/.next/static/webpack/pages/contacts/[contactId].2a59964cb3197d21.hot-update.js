"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contacts/[contactId]",{

/***/ "./pages/contacts/[contactId].js":
/*!***************************************!*\
  !*** ./pages/contacts/[contactId].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/contacts */ \"./pages/api/contacts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Contct() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { contactId  } = router.query;\n    const contact = _api_contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find((contact)=>contact.id === contactId);\n    debugger;\n    const [first, last] = contact === null || contact === void 0 ? void 0 : contact.name.split(\" \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: [\n                \"Contact: \",\n                last.toUpperCase(),\n                \", \",\n                first\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\frog\\\\OneDrive - Temasek Polytechnic\\\\Desktop\\\\Sats\\\\SAT_polls\\\\Nextjs-learning\\\\my-next-app\\\\pages\\\\contacts\\\\[contactId].js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Contct, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Contct;\nvar _c;\n$RefreshReg$(_c, \"Contct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0cy9bY29udGFjdElkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0w7QUFDRDtBQUd2QixTQUFTRyxTQUFTOztJQUM3QixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDSSxVQUFTLEVBQUMsR0FBR0QsT0FBT0UsS0FBSztJQUNoQyxNQUFNQyxVQUFVTCwwREFBYSxDQUFDSyxDQUFBQSxVQUFXQSxRQUFRRSxFQUFFLEtBQUtKO0lBQ3hELFFBQVE7SUFDUixNQUFNLENBQUNLLE9BQVFDLEtBQUssR0FBR0osb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTSyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJO0lBQy9DLHFCQUNBO2tCQUNJLDRFQUFDQzs7Z0JBQUc7Z0JBQVVILEtBQUtJLFdBQVc7Z0JBQUc7Z0JBQUdMOzs7Ozs7OztBQUc1QyxDQUFDO0dBWHVCUDs7UUFDTEYsa0RBQVNBOzs7S0FESkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdHMvW2NvbnRhY3RJZF0uanM/ZjE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBjb250YWN0cyBmcm9tIFwiLi4vYXBpL2NvbnRhY3RzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250Y3QoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge2NvbnRhY3RJZH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBjb250YWN0cy5maW5kKGNvbnRhY3QgPT4gY29udGFjdC5pZCA9PT0gY29udGFjdElkKTtcclxuICAgIGRlYnVnZ2VyXHJcbiAgICBjb25zdCBbZmlyc3QgLCBsYXN0XSA9IGNvbnRhY3Q/Lm5hbWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICA8aDI+Q29udGFjdDoge2xhc3QudG9VcHBlckNhc2UoKX0sIHtmaXJzdH08L2gyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJjb250YWN0cyIsIkNvbnRjdCIsInJvdXRlciIsImNvbnRhY3RJZCIsInF1ZXJ5IiwiY29udGFjdCIsImZpbmQiLCJpZCIsImZpcnN0IiwibGFzdCIsIm5hbWUiLCJzcGxpdCIsImgyIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contacts/[contactId].js\n"));

/***/ })

});