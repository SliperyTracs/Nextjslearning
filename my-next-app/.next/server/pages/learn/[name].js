"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/learn/[name]";
exports.ids = ["pages/learn/[name]"];
exports.modules = {

/***/ "./pages/api/topics.ts":
/*!*****************************!*\
  !*** ./pages/api/topics.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        id: \"angular\",\n        about: \"Angular is a development plateform, built on typescript\"\n    },\n    {\n        id: \"vue\",\n        about: \"Vue is a development plateform, built on typescript\"\n    },\n    {\n        id: \"React\",\n        about: \"React is an open source front Javascript library for bulding websites\"\n    },\n    {\n        id: \"next\",\n        about: \"next.js is a development plateform, built on react\"\n    }\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9waWNzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNYO1FBQ0lBLElBQUc7UUFDSEMsT0FBTTtJQUVWO0lBQ0E7UUFDSUQsSUFBRztRQUNIQyxPQUFNO0lBQ1Y7SUFDQTtRQUNJRCxJQUFHO1FBQ0hDLE9BQU07SUFDVjtJQUNBO1FBQ0lELElBQUc7UUFDSEMsT0FBTTtJQUNWO0NBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLy4vcGFnZXMvYXBpL3RvcGljcy50cz84ZDU2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBpZDonYW5ndWxhcicsXHJcbiAgICAgICAgYWJvdXQ6J0FuZ3VsYXIgaXMgYSBkZXZlbG9wbWVudCBwbGF0ZWZvcm0sIGJ1aWx0IG9uIHR5cGVzY3JpcHQnXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDondnVlJyxcclxuICAgICAgICBhYm91dDonVnVlIGlzIGEgZGV2ZWxvcG1lbnQgcGxhdGVmb3JtLCBidWlsdCBvbiB0eXBlc2NyaXB0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDonUmVhY3QnLFxyXG4gICAgICAgIGFib3V0OidSZWFjdCBpcyBhbiBvcGVuIHNvdXJjZSBmcm9udCBKYXZhc2NyaXB0IGxpYnJhcnkgZm9yIGJ1bGRpbmcgd2Vic2l0ZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiduZXh0JyxcclxuICAgICAgICBhYm91dDonbmV4dC5qcyBpcyBhIGRldmVsb3BtZW50IHBsYXRlZm9ybSwgYnVpbHQgb24gcmVhY3QnXHJcbiAgICB9LFxyXG5dOyJdLCJuYW1lcyI6WyJpZCIsImFib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/topics.ts\n");

/***/ }),

/***/ "./pages/learn/[name].js":
/*!*******************************!*\
  !*** ./pages/learn/[name].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Learn)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_topics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/topics */ \"./pages/api/topics.ts\");\n\n\n\nfunction Learn() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { name  } = router.query;\n    const topic = _api_topics__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((topic)=>topic.id === name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Learn NextJS\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\frog\\\\OneDrive - Temasek Polytechnic\\\\Desktop\\\\Sats\\\\SAT_polls\\\\Nextjs-learning\\\\my-next-app\\\\pages\\\\learn\\\\[name].js\",\n        lineNumber: 8,\n        columnNumber: 13\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWFybi9bbmFtZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBcUM7QUFDSDtBQUVuQixTQUFTRSxRQUFPO0lBQzNCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLEtBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzdCLE1BQU1DLFFBQVFMLHdEQUFXLENBQUNLLENBQUFBLFFBQU9BLE1BQU1FLEVBQUUsS0FBR0o7SUFDNUMscUJBQVEsOERBQUNLO2tCQUFHOzs7Ozs7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLy4vcGFnZXMvbGVhcm4vW25hbWVdLmpzP2QwZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB0b3BpY3MgZnJvbSAnLi4vYXBpL3RvcGljcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYXJuKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IHRvcGljID0gdG9waWNzLmZpbmQodG9waWM9PnRvcGljLmlkPT09bmFtZSlcclxuICAgIHJldHVybiAoPGgxPkxlYXJuIE5leHRKUzwvaDE+KVxyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInRvcGljcyIsIkxlYXJuIiwicm91dGVyIiwibmFtZSIsInF1ZXJ5IiwidG9waWMiLCJmaW5kIiwiaWQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/learn/[name].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/learn/[name].js"));
module.exports = __webpack_exports__;

})();