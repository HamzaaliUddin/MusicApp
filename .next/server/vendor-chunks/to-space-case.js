/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/to-space-case";
exports.ids = ["vendor-chunks/to-space-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar clean = __webpack_require__(/*! to-no-case */ \"(ssr)/./node_modules/to-no-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toSpaceCase\n\n/**\n * Convert a `string` to space case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toSpaceCase(string) {\n  return clean(string).replace(/[\\W_]+(.|$)/g, function (matches, match) {\n    return match ? ' ' + match : ''\n  }).trim()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdG8tc3BhY2UtY2FzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLDREQUFZOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXN0ZW4tbmV4dC8uL25vZGVfbW9kdWxlcy90by1zcGFjZS1jYXNlL2luZGV4LmpzPzE2ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY2xlYW4gPSByZXF1aXJlKCd0by1uby1jYXNlJylcblxuLyoqXG4gKiBFeHBvcnQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NwYWNlQ2FzZVxuXG4vKipcbiAqIENvbnZlcnQgYSBgc3RyaW5nYCB0byBzcGFjZSBjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB0b1NwYWNlQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIGNsZWFuKHN0cmluZykucmVwbGFjZSgvW1xcV19dKygufCQpL2csIGZ1bmN0aW9uIChtYXRjaGVzLCBtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaCA/ICcgJyArIG1hdGNoIDogJydcbiAgfSkudHJpbSgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/to-space-case/index.js\n");

/***/ })

};
;