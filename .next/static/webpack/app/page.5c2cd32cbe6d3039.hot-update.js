"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/core/components/brand.tsx":
/*!***************************************!*\
  !*** ./src/core/components/brand.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constant */ \"(app-pages-browser)/./src/core/constants/constant.ts\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/theme */ \"(app-pages-browser)/./src/core/contexts/theme.tsx\");\n/**\r\n * @name Brand\r\n * @file brand.tsx\r\n * @description music brand component\r\n */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Modules\n\n\n\n\n\nconst Brand = ()=>{\n    _s();\n    /**\r\n   *\r\n   * Handle link `onClick` event\r\n   */ const { theme } = (0,_contexts_theme__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    const handleClick = ()=>{\n        document.body.removeAttribute(_constants_constant__WEBPACK_IMPORTED_MODULE_4__.SIDEBAR_TOGGLE);\n    };\n    console.log(theme, \"LOGO\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"brand\",\n        href: _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.href,\n        onClick: handleClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            src: theme === \"light\" ? _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.logo : _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.dark_logo,\n            width: 100,\n            height: 44,\n            alt: _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.name,\n            priority: true\n        }, void 0, false, {\n            fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/brand.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/brand.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Brand, \"JkSxfi8+JQlqgIgDOc3wQN+nVIw=\", false, function() {\n    return [\n        _contexts_theme__WEBPACK_IMPORTED_MODULE_5__.useTheme\n    ];\n});\n_c = Brand;\nBrand.displayName = \"Brand\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brand);\nvar _c;\n$RefreshReg$(_c, \"Brand\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYnJhbmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Q0FJQzs7QUFHRCxVQUFVO0FBQ2dCO0FBQ0c7QUFDRTtBQUcrQjtBQUNqQjtBQUU3QyxNQUFNTSxRQUFrQjs7SUFDdEI7OztHQUdDLEdBQ0QsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YseURBQVFBO0lBRTFCLE1BQU1HLGNBQWM7UUFDbEJDLFNBQVNDLElBQUksQ0FBQ0MsZUFBZSxDQUFDUCwrREFBY0E7SUFDOUM7SUFDQVEsUUFBUUMsR0FBRyxDQUFDTixPQUFPO0lBQ25CLHFCQUNFLDhEQUFDTixpREFBSUE7UUFBQ2EsV0FBVTtRQUFRQyxNQUFNWixzREFBS0EsQ0FBQ1ksSUFBSTtRQUFFQyxTQUFTUjtrQkFDakQsNEVBQUNOLGtEQUFLQTtZQUNKZSxLQUFLVixVQUFVLFVBQVVKLHNEQUFLQSxDQUFDZSxJQUFJLEdBQUdmLHNEQUFLQSxDQUFDZ0IsU0FBUztZQUNyREMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLEtBQUtuQixzREFBS0EsQ0FBQ29CLElBQUk7WUFDZkMsUUFBUTs7Ozs7Ozs7Ozs7QUFJaEI7R0F0Qk1sQjs7UUFLY0QscURBQVFBOzs7S0FMdEJDO0FBd0JOQSxNQUFNbUIsV0FBVyxHQUFHO0FBQ3BCLCtEQUFlbkIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9jb21wb25lbnRzL2JyYW5kLnRzeD80NmFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSBCcmFuZFxyXG4gKiBAZmlsZSBicmFuZC50c3hcclxuICogQGRlc2NyaXB0aW9uIG11c2ljIGJyYW5kIGNvbXBvbmVudFxyXG4gKi9cclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG4vLyBNb2R1bGVzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgVEhFTUVfTU9ERSB9IGZyb20gXCIuLy4uL2NvbnN0YW50cy9jb25zdGFudFwiO1xyXG5cclxuaW1wb3J0IHsgQlJBTkQsIFNJREVCQVJfVE9HR0xFIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudFwiO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi9jb250ZXh0cy90aGVtZVwiO1xyXG5cclxuY29uc3QgQnJhbmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogSGFuZGxlIGxpbmsgYG9uQ2xpY2tgIGV2ZW50XHJcbiAgICovXHJcbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZShTSURFQkFSX1RPR0dMRSk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyh0aGVtZSwgXCJMT0dPXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBjbGFzc05hbWU9XCJicmFuZFwiIGhyZWY9e0JSQU5ELmhyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gQlJBTkQubG9nbyA6IEJSQU5ELmRhcmtfbG9nb31cclxuICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgIGhlaWdodD17NDR9XHJcbiAgICAgICAgYWx0PXtCUkFORC5uYW1lfVxyXG4gICAgICAgIHByaW9yaXR5XHJcbiAgICAgIC8+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkJyYW5kLmRpc3BsYXlOYW1lID0gXCJCcmFuZFwiO1xyXG5leHBvcnQgZGVmYXVsdCBCcmFuZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkltYWdlIiwiQlJBTkQiLCJTSURFQkFSX1RPR0dMRSIsInVzZVRoZW1lIiwiQnJhbmQiLCJ0aGVtZSIsImhhbmRsZUNsaWNrIiwiZG9jdW1lbnQiLCJib2R5IiwicmVtb3ZlQXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImhyZWYiLCJvbkNsaWNrIiwic3JjIiwibG9nbyIsImRhcmtfbG9nbyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibmFtZSIsInByaW9yaXR5IiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/core/components/brand.tsx\n"));

/***/ })

});