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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constant */ \"(app-pages-browser)/./src/core/constants/constant.ts\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/theme */ \"(app-pages-browser)/./src/core/contexts/theme.tsx\");\n/**\r\n * @name Brand\r\n * @file brand.tsx\r\n * @description music brand component\r\n */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Modules\n\n\n\n\n\nconst Brand = ()=>{\n    _s();\n    /**\r\n   *\r\n   * Handle link `onClick` event\r\n   */ const { theme } = (0,_contexts_theme__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    const handleClick = ()=>{\n        document.body.removeAttribute(_constants_constant__WEBPACK_IMPORTED_MODULE_4__.SIDEBAR_TOGGLE);\n    };\n    console.log(theme, \"LOGO\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"brand\",\n        href: _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.href,\n        onClick: handleClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            src: theme === \"light\" ? _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.logo : _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.dark_logo,\n            width: 100,\n            height: 32,\n            className: \"d-flex justify-content-center align-items-center\",\n            alt: _constants_constant__WEBPACK_IMPORTED_MODULE_4__.BRAND.name,\n            priority: true\n        }, void 0, false, {\n            fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/brand.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/brand.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Brand, \"JkSxfi8+JQlqgIgDOc3wQN+nVIw=\", false, function() {\n    return [\n        _contexts_theme__WEBPACK_IMPORTED_MODULE_5__.useTheme\n    ];\n});\n_c = Brand;\nBrand.displayName = \"Brand\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brand);\nvar _c;\n$RefreshReg$(_c, \"Brand\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYnJhbmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Q0FJQzs7QUFHRCxVQUFVO0FBQ2dCO0FBQ0c7QUFDRTtBQUcrQjtBQUNqQjtBQUU3QyxNQUFNTSxRQUFrQjs7SUFDdEI7OztHQUdDLEdBQ0QsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YseURBQVFBO0lBRTFCLE1BQU1HLGNBQWM7UUFDbEJDLFNBQVNDLElBQUksQ0FBQ0MsZUFBZSxDQUFDUCwrREFBY0E7SUFDOUM7SUFDQVEsUUFBUUMsR0FBRyxDQUFDTixPQUFPO0lBQ25CLHFCQUNFLDhEQUFDTixpREFBSUE7UUFBQ2EsV0FBVTtRQUFRQyxNQUFNWixzREFBS0EsQ0FBQ1ksSUFBSTtRQUFFQyxTQUFTUjtrQkFDakQsNEVBQUNOLGtEQUFLQTtZQUNKZSxLQUFLVixVQUFVLFVBQVVKLHNEQUFLQSxDQUFDZSxJQUFJLEdBQUdmLHNEQUFLQSxDQUFDZ0IsU0FBUztZQUNyREMsT0FBTztZQUNQQyxRQUFRO1lBQ1JQLFdBQVU7WUFDVlEsS0FBS25CLHNEQUFLQSxDQUFDb0IsSUFBSTtZQUNmQyxRQUFROzs7Ozs7Ozs7OztBQUloQjtHQXZCTWxCOztRQUtjRCxxREFBUUE7OztLQUx0QkM7QUF5Qk5BLE1BQU1tQixXQUFXLEdBQUc7QUFDcEIsK0RBQWVuQixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYnJhbmQudHN4PzQ2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIEJyYW5kXHJcbiAqIEBmaWxlIGJyYW5kLnRzeFxyXG4gKiBAZGVzY3JpcHRpb24gbXVzaWMgYnJhbmQgY29tcG9uZW50XHJcbiAqL1xyXG5cInVzZSBjbGllbnRcIjtcclxuXHJcbi8vIE1vZHVsZXNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBUSEVNRV9NT0RFIH0gZnJvbSBcIi4vLi4vY29uc3RhbnRzL2NvbnN0YW50XCI7XHJcblxyXG5pbXBvcnQgeyBCUkFORCwgU0lERUJBUl9UT0dHTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi4uL2NvbnRleHRzL3RoZW1lXCI7XHJcblxyXG5jb25zdCBCcmFuZDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBIYW5kbGUgbGluayBgb25DbGlja2AgZXZlbnRcclxuICAgKi9cclxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKFNJREVCQVJfVE9HR0xFKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHRoZW1lLCBcIkxPR09cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGNsYXNzTmFtZT1cImJyYW5kXCIgaHJlZj17QlJBTkQuaHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBCUkFORC5sb2dvIDogQlJBTkQuZGFya19sb2dvfVxyXG4gICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgaGVpZ2h0PXszMn1cclxuICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGFsdD17QlJBTkQubmFtZX1cclxuICAgICAgICBwcmlvcml0eVxyXG4gICAgICAvPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5CcmFuZC5kaXNwbGF5TmFtZSA9IFwiQnJhbmRcIjtcclxuZXhwb3J0IGRlZmF1bHQgQnJhbmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJbWFnZSIsIkJSQU5EIiwiU0lERUJBUl9UT0dHTEUiLCJ1c2VUaGVtZSIsIkJyYW5kIiwidGhlbWUiLCJoYW5kbGVDbGljayIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJocmVmIiwib25DbGljayIsInNyYyIsImxvZ28iLCJkYXJrX2xvZ28iLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm5hbWUiLCJwcmlvcml0eSIsImRpc3BsYXlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/core/components/brand.tsx\n"));

/***/ })

});