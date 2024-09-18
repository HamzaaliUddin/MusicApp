"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/file-selector";
exports.ids = ["vendor-chunks/file-selector"];
exports.modules = {

/***/ "(ssr)/./node_modules/file-selector/dist/es5/file-selector.js":
/*!**************************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file-selector.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromEvent: () => (/* binding */ fromEvent)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file */ \"(ssr)/./node_modules/file-selector/dist/es5/file.js\");\n\n\nvar FILES_TO_IGNORE = [\n    // Thumbnail cache files for macOS and Windows\n    '.DS_Store',\n    'Thumbs.db' // Windows\n];\n/**\n * Convert a DragEvent's DataTrasfer object to a list of File objects\n * NOTE: If some of the items are folders,\n * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.\n *\n * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg\n * and a list of File objects will be returned.\n *\n * @param evt\n */\nfunction fromEvent(evt) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {\n                return [2 /*return*/, getDataTransferFiles(evt.dataTransfer, evt.type)];\n            }\n            else if (isChangeEvt(evt)) {\n                return [2 /*return*/, getInputFiles(evt)];\n            }\n            else if (Array.isArray(evt) && evt.every(function (item) { return 'getFile' in item && typeof item.getFile === 'function'; })) {\n                return [2 /*return*/, getFsHandleFiles(evt)];\n            }\n            return [2 /*return*/, []];\n        });\n    });\n}\nfunction isDataTransfer(value) {\n    return isObject(value);\n}\nfunction isChangeEvt(value) {\n    return isObject(value) && isObject(value.target);\n}\nfunction isObject(v) {\n    return typeof v === 'object' && v !== null;\n}\nfunction getInputFiles(evt) {\n    return fromList(evt.target.files).map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); });\n}\n// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle\nfunction getFsHandleFiles(handles) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        var files;\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Promise.all(handles.map(function (h) { return h.getFile(); }))];\n                case 1:\n                    files = _a.sent();\n                    return [2 /*return*/, files.map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); })];\n            }\n        });\n    });\n}\nfunction getDataTransferFiles(dt, type) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        var items, files;\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    if (!dt.items) return [3 /*break*/, 2];\n                    items = fromList(dt.items)\n                        .filter(function (item) { return item.kind === 'file'; });\n                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,\n                    // only 'dragstart' and 'drop' has access to the data (source node)\n                    if (type !== 'drop') {\n                        return [2 /*return*/, items];\n                    }\n                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];\n                case 1:\n                    files = _a.sent();\n                    return [2 /*return*/, noIgnoredFiles(flatten(files))];\n                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)\n                        .map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); }))];\n            }\n        });\n    });\n}\nfunction noIgnoredFiles(files) {\n    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });\n}\n// IE11 does not support Array.from()\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility\n// https://developer.mozilla.org/en-US/docs/Web/API/FileList\n// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList\nfunction fromList(items) {\n    if (items === null) {\n        return [];\n    }\n    var files = [];\n    // tslint:disable: prefer-for-of\n    for (var i = 0; i < items.length; i++) {\n        var file = items[i];\n        files.push(file);\n    }\n    return files;\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem\nfunction toFilePromises(item) {\n    if (typeof item.webkitGetAsEntry !== 'function') {\n        return fromDataTransferItem(item);\n    }\n    var entry = item.webkitGetAsEntry();\n    // Safari supports dropping an image node from a different window and can be retrieved using\n    // the DataTransferItem.getAsFile() API\n    // NOTE: FileSystemEntry.file() throws if trying to get the file\n    if (entry && entry.isDirectory) {\n        return fromDirEntry(entry);\n    }\n    return fromDataTransferItem(item);\n}\nfunction flatten(items) {\n    return items.reduce(function (acc, files) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(acc), false), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((Array.isArray(files) ? flatten(files) : [files])), false); }, []);\n}\nfunction fromDataTransferItem(item) {\n    var file = item.getAsFile();\n    if (!file) {\n        return Promise.reject(\"\".concat(item, \" is not a File\"));\n    }\n    var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file);\n    return Promise.resolve(fwp);\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry\nfunction fromEntry(entry) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];\n        });\n    });\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry\nfunction fromDirEntry(entry) {\n    var reader = entry.createReader();\n    return new Promise(function (resolve, reject) {\n        var entries = [];\n        function readEntries() {\n            var _this = this;\n            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader\n            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries\n            reader.readEntries(function (batch) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {\n                var files, err_1, items;\n                return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            if (!!batch.length) return [3 /*break*/, 5];\n                            _a.label = 1;\n                        case 1:\n                            _a.trys.push([1, 3, , 4]);\n                            return [4 /*yield*/, Promise.all(entries)];\n                        case 2:\n                            files = _a.sent();\n                            resolve(files);\n                            return [3 /*break*/, 4];\n                        case 3:\n                            err_1 = _a.sent();\n                            reject(err_1);\n                            return [3 /*break*/, 4];\n                        case 4: return [3 /*break*/, 6];\n                        case 5:\n                            items = Promise.all(batch.map(fromEntry));\n                            entries.push(items);\n                            // Continue reading\n                            readEntries();\n                            _a.label = 6;\n                        case 6: return [2 /*return*/];\n                    }\n                });\n            }); }, function (err) {\n                reject(err);\n            });\n        }\n        readEntries();\n    });\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry\nfunction fromFileEntry(entry) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            return [2 /*return*/, new Promise(function (resolve, reject) {\n                    entry.file(function (file) {\n                        var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file, entry.fullPath);\n                        resolve(fwp);\n                    }, function (err) {\n                        reject(err);\n                    });\n                })];\n        });\n    });\n}\n//# sourceMappingURL=file-selector.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLXNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRTtBQUM5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLE1BQU07QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLGdEQUFTO0FBQ3BCLGVBQWUsa0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGlFQUFpRTtBQUN4STtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsT0FBTyxxREFBYyxTQUFTO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0Esb0ZBQW9GLHFCQUFxQjtBQUN6RztBQUNBO0FBQ0Esc0VBQXNFLE9BQU8scURBQWMsU0FBUztBQUNwRztBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDhCQUE4QjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPLHFEQUFjLFNBQVM7QUFDN0U7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBMEMsbURBQW1EO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTyxvREFBYSxDQUFDLG9EQUFhLEtBQUssNkNBQU0sZUFBZSw2Q0FBTSw4REFBOEQ7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxREFBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEIsZUFBZSxrREFBVztBQUMxQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsT0FBTyxnREFBUztBQUNsRTtBQUNBLHVCQUF1QixrREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBUztBQUNwQixlQUFlLGtEQUFXO0FBQzFCO0FBQ0E7QUFDQSxrQ0FBa0MscURBQWM7QUFDaEQ7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpc3Rlbi1uZXh0Ly4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9lczUvZmlsZS1zZWxlY3Rvci5qcz9mNTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgdG9GaWxlV2l0aFBhdGggfSBmcm9tICcuL2ZpbGUnO1xudmFyIEZJTEVTX1RPX0lHTk9SRSA9IFtcbiAgICAvLyBUaHVtYm5haWwgY2FjaGUgZmlsZXMgZm9yIG1hY09TIGFuZCBXaW5kb3dzXG4gICAgJy5EU19TdG9yZScsXG4gICAgJ1RodW1icy5kYicgLy8gV2luZG93c1xuXTtcbi8qKlxuICogQ29udmVydCBhIERyYWdFdmVudCdzIERhdGFUcmFzZmVyIG9iamVjdCB0byBhIGxpc3Qgb2YgRmlsZSBvYmplY3RzXG4gKiBOT1RFOiBJZiBzb21lIG9mIHRoZSBpdGVtcyBhcmUgZm9sZGVycyxcbiAqIGV2ZXJ5dGhpbmcgd2lsbCBiZSBmbGF0dGVuZWQgYW5kIHBsYWNlZCBpbiB0aGUgc2FtZSBsaXN0IGJ1dCB0aGUgcGF0aHMgd2lsbCBiZSBrZXB0IGFzIGEge3BhdGh9IHByb3BlcnR5LlxuICpcbiAqIEVYUEVSSU1FTlRBTDogQSBsaXN0IG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtSGFuZGxlIG9iamVjdHMgY2FuIGFsc28gYmUgcGFzc2VkIGFzIGFuIGFyZ1xuICogYW5kIGEgbGlzdCBvZiBGaWxlIG9iamVjdHMgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0gZXZ0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXZlbnQoZXZ0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QoZXZ0KSAmJiBpc0RhdGFUcmFuc2ZlcihldnQuZGF0YVRyYW5zZmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXREYXRhVHJhbnNmZXJGaWxlcyhldnQuZGF0YVRyYW5zZmVyLCBldnQudHlwZSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNDaGFuZ2VFdnQoZXZ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRJbnB1dEZpbGVzKGV2dCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShldnQpICYmIGV2dC5ldmVyeShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gJ2dldEZpbGUnIGluIGl0ZW0gJiYgdHlwZW9mIGl0ZW0uZ2V0RmlsZSA9PT0gJ2Z1bmN0aW9uJzsgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZ2V0RnNIYW5kbGVGaWxlcyhldnQpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbXV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNEYXRhVHJhbnNmZXIodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDaGFuZ2VFdnQodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIGlzT2JqZWN0KHZhbHVlLnRhcmdldCk7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsO1xufVxuZnVuY3Rpb24gZ2V0SW5wdXRGaWxlcyhldnQpIHtcbiAgICByZXR1cm4gZnJvbUxpc3QoZXZ0LnRhcmdldC5maWxlcykubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiB0b0ZpbGVXaXRoUGF0aChmaWxlKTsgfSk7XG59XG4vLyBFZSBleHBlY3QgZWFjaCBoYW5kbGUgdG8gYmUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1GaWxlSGFuZGxlXG5mdW5jdGlvbiBnZXRGc0hhbmRsZUZpbGVzKGhhbmRsZXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmaWxlcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoaGFuZGxlcy5tYXAoZnVuY3Rpb24gKGgpIHsgcmV0dXJuIGguZ2V0RmlsZSgpOyB9KSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHRvRmlsZVdpdGhQYXRoKGZpbGUpOyB9KV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGF0YVRyYW5zZmVyRmlsZXMoZHQsIHR5cGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcywgZmlsZXM7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICghZHQuaXRlbXMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGZyb21MaXN0KGR0Lml0ZW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5raW5kID09PSAnZmlsZSc7IH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY2NvcmRpbmcgdG8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG5kLmh0bWwjZG5kZXZlbnRzLFxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5ICdkcmFnc3RhcnQnIGFuZCAnZHJvcCcgaGFzIGFjY2VzcyB0byB0aGUgZGF0YSAoc291cmNlIG5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSAnZHJvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBpdGVtc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoaXRlbXMubWFwKHRvRmlsZVByb21pc2VzKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBub0lnbm9yZWRGaWxlcyhmbGF0dGVuKGZpbGVzKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5vSWdub3JlZEZpbGVzKGZyb21MaXN0KGR0LmZpbGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gdG9GaWxlV2l0aFBhdGgoZmlsZSk7IH0pKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbm9JZ25vcmVkRmlsZXMoZmlsZXMpIHtcbiAgICByZXR1cm4gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiBGSUxFU19UT19JR05PUkUuaW5kZXhPZihmaWxlLm5hbWUpID09PSAtMTsgfSk7XG59XG4vLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgQXJyYXkuZnJvbSgpXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mcm9tI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVMaXN0XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRGF0YVRyYW5zZmVySXRlbUxpc3RcbmZ1bmN0aW9uIGZyb21MaXN0KGl0ZW1zKSB7XG4gICAgaWYgKGl0ZW1zID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGZpbGVzID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmaWxlID0gaXRlbXNbaV07XG4gICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmaWxlcztcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXJJdGVtXG5mdW5jdGlvbiB0b0ZpbGVQcm9taXNlcyhpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLndlYmtpdEdldEFzRW50cnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZyb21EYXRhVHJhbnNmZXJJdGVtKGl0ZW0pO1xuICAgIH1cbiAgICB2YXIgZW50cnkgPSBpdGVtLndlYmtpdEdldEFzRW50cnkoKTtcbiAgICAvLyBTYWZhcmkgc3VwcG9ydHMgZHJvcHBpbmcgYW4gaW1hZ2Ugbm9kZSBmcm9tIGEgZGlmZmVyZW50IHdpbmRvdyBhbmQgY2FuIGJlIHJldHJpZXZlZCB1c2luZ1xuICAgIC8vIHRoZSBEYXRhVHJhbnNmZXJJdGVtLmdldEFzRmlsZSgpIEFQSVxuICAgIC8vIE5PVEU6IEZpbGVTeXN0ZW1FbnRyeS5maWxlKCkgdGhyb3dzIGlmIHRyeWluZyB0byBnZXQgdGhlIGZpbGVcbiAgICBpZiAoZW50cnkgJiYgZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21EaXJFbnRyeShlbnRyeSk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tRGF0YVRyYW5zZmVySXRlbShpdGVtKTtcbn1cbmZ1bmN0aW9uIGZsYXR0ZW4oaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZpbGVzKSB7IHJldHVybiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChhY2MpLCBmYWxzZSksIF9fcmVhZCgoQXJyYXkuaXNBcnJheShmaWxlcykgPyBmbGF0dGVuKGZpbGVzKSA6IFtmaWxlc10pKSwgZmFsc2UpOyB9LCBbXSk7XG59XG5mdW5jdGlvbiBmcm9tRGF0YVRyYW5zZmVySXRlbShpdGVtKSB7XG4gICAgdmFyIGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJcIi5jb25jYXQoaXRlbSwgXCIgaXMgbm90IGEgRmlsZVwiKSk7XG4gICAgfVxuICAgIHZhciBmd3AgPSB0b0ZpbGVXaXRoUGF0aChmaWxlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZ3cCk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUVudHJ5XG5mdW5jdGlvbiBmcm9tRW50cnkoZW50cnkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBlbnRyeS5pc0RpcmVjdG9yeSA/IGZyb21EaXJFbnRyeShlbnRyeSkgOiBmcm9tRmlsZUVudHJ5KGVudHJ5KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1EaXJlY3RvcnlFbnRyeVxuZnVuY3Rpb24gZnJvbURpckVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlYWRlciA9IGVudHJ5LmNyZWF0ZVJlYWRlcigpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIHJlYWRFbnRyaWVzKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRGlyZWN0b3J5RW50cnkvY3JlYXRlUmVhZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbURpcmVjdG9yeVJlYWRlci9yZWFkRW50cmllc1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRFbnRyaWVzKGZ1bmN0aW9uIChiYXRjaCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBmaWxlcywgZXJyXzEsIGl0ZW1zO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWJhdGNoLmxlbmd0aCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoZW50cmllcyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gUHJvbWlzZS5hbGwoYmF0Y2gubWFwKGZyb21FbnRyeSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaChpdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgcmVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZWFkRW50cmllcygpO1xuICAgIH0pO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1GaWxlRW50cnlcbmZ1bmN0aW9uIGZyb21GaWxlRW50cnkoZW50cnkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmZpbGUoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmd3AgPSB0b0ZpbGVXaXRoUGF0aChmaWxlLCBlbnRyeS5mdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZ3cCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZS1zZWxlY3Rvci5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/file-selector/dist/es5/file-selector.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/file-selector/dist/es5/file.js":
/*!*****************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COMMON_MIME_TYPES: () => (/* binding */ COMMON_MIME_TYPES),\n/* harmony export */   toFileWithPath: () => (/* binding */ toFileWithPath)\n/* harmony export */ });\nvar COMMON_MIME_TYPES = new Map([\n    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types\n    ['aac', 'audio/aac'],\n    ['abw', 'application/x-abiword'],\n    ['arc', 'application/x-freearc'],\n    ['avif', 'image/avif'],\n    ['avi', 'video/x-msvideo'],\n    ['azw', 'application/vnd.amazon.ebook'],\n    ['bin', 'application/octet-stream'],\n    ['bmp', 'image/bmp'],\n    ['bz', 'application/x-bzip'],\n    ['bz2', 'application/x-bzip2'],\n    ['cda', 'application/x-cdf'],\n    ['csh', 'application/x-csh'],\n    ['css', 'text/css'],\n    ['csv', 'text/csv'],\n    ['doc', 'application/msword'],\n    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],\n    ['eot', 'application/vnd.ms-fontobject'],\n    ['epub', 'application/epub+zip'],\n    ['gz', 'application/gzip'],\n    ['gif', 'image/gif'],\n    ['heic', 'image/heic'],\n    ['heif', 'image/heif'],\n    ['htm', 'text/html'],\n    ['html', 'text/html'],\n    ['ico', 'image/vnd.microsoft.icon'],\n    ['ics', 'text/calendar'],\n    ['jar', 'application/java-archive'],\n    ['jpeg', 'image/jpeg'],\n    ['jpg', 'image/jpeg'],\n    ['js', 'text/javascript'],\n    ['json', 'application/json'],\n    ['jsonld', 'application/ld+json'],\n    ['mid', 'audio/midi'],\n    ['midi', 'audio/midi'],\n    ['mjs', 'text/javascript'],\n    ['mp3', 'audio/mpeg'],\n    ['mp4', 'video/mp4'],\n    ['mpeg', 'video/mpeg'],\n    ['mpkg', 'application/vnd.apple.installer+xml'],\n    ['odp', 'application/vnd.oasis.opendocument.presentation'],\n    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],\n    ['odt', 'application/vnd.oasis.opendocument.text'],\n    ['oga', 'audio/ogg'],\n    ['ogv', 'video/ogg'],\n    ['ogx', 'application/ogg'],\n    ['opus', 'audio/opus'],\n    ['otf', 'font/otf'],\n    ['png', 'image/png'],\n    ['pdf', 'application/pdf'],\n    ['php', 'application/x-httpd-php'],\n    ['ppt', 'application/vnd.ms-powerpoint'],\n    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],\n    ['rar', 'application/vnd.rar'],\n    ['rtf', 'application/rtf'],\n    ['sh', 'application/x-sh'],\n    ['svg', 'image/svg+xml'],\n    ['swf', 'application/x-shockwave-flash'],\n    ['tar', 'application/x-tar'],\n    ['tif', 'image/tiff'],\n    ['tiff', 'image/tiff'],\n    ['ts', 'video/mp2t'],\n    ['ttf', 'font/ttf'],\n    ['txt', 'text/plain'],\n    ['vsd', 'application/vnd.visio'],\n    ['wav', 'audio/wav'],\n    ['weba', 'audio/webm'],\n    ['webm', 'video/webm'],\n    ['webp', 'image/webp'],\n    ['woff', 'font/woff'],\n    ['woff2', 'font/woff2'],\n    ['xhtml', 'application/xhtml+xml'],\n    ['xls', 'application/vnd.ms-excel'],\n    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],\n    ['xml', 'application/xml'],\n    ['xul', 'application/vnd.mozilla.xul+xml'],\n    ['zip', 'application/zip'],\n    ['7z', 'application/x-7z-compressed'],\n    // Others\n    ['mkv', 'video/x-matroska'],\n    ['mov', 'video/quicktime'],\n    ['msg', 'application/vnd.ms-outlook']\n]);\nfunction toFileWithPath(file, path) {\n    var f = withMimeType(file);\n    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path\n        var webkitRelativePath = file.webkitRelativePath;\n        Object.defineProperty(f, 'path', {\n            value: typeof path === 'string'\n                ? path\n                // If <input webkitdirectory> is set,\n                // the File will have a {webkitRelativePath} property\n                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory\n                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0\n                    ? webkitRelativePath\n                    : file.name,\n            writable: false,\n            configurable: false,\n            enumerable: true\n        });\n    }\n    return f;\n}\nfunction withMimeType(file) {\n    var name = file.name;\n    var hasExtension = name && name.lastIndexOf('.') !== -1;\n    if (hasExtension && !file.type) {\n        var ext = name.split('.')\n            .pop().toLowerCase();\n        var type = COMMON_MIME_TYPES.get(ext);\n        if (type) {\n            Object.defineProperty(file, 'type', {\n                value: type,\n                writable: false,\n                configurable: false,\n                enumerable: true\n            });\n        }\n    }\n    return file;\n}\n//# sourceMappingURL=file.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlzdGVuLW5leHQvLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLmpzP2UwM2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBDT01NT05fTUlNRV9UWVBFUyA9IG5ldyBNYXAoW1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvTUlNRV90eXBlcy9Db21tb25fdHlwZXNcbiAgICBbJ2FhYycsICdhdWRpby9hYWMnXSxcbiAgICBbJ2FidycsICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnXSxcbiAgICBbJ2FyYycsICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnXSxcbiAgICBbJ2F2aWYnLCAnaW1hZ2UvYXZpZiddLFxuICAgIFsnYXZpJywgJ3ZpZGVvL3gtbXN2aWRlbyddLFxuICAgIFsnYXp3JywgJ2FwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZWJvb2snXSxcbiAgICBbJ2JpbicsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2JtcCcsICdpbWFnZS9ibXAnXSxcbiAgICBbJ2J6JywgJ2FwcGxpY2F0aW9uL3gtYnppcCddLFxuICAgIFsnYnoyJywgJ2FwcGxpY2F0aW9uL3gtYnppcDInXSxcbiAgICBbJ2NkYScsICdhcHBsaWNhdGlvbi94LWNkZiddLFxuICAgIFsnY3NoJywgJ2FwcGxpY2F0aW9uL3gtY3NoJ10sXG4gICAgWydjc3MnLCAndGV4dC9jc3MnXSxcbiAgICBbJ2NzdicsICd0ZXh0L2NzdiddLFxuICAgIFsnZG9jJywgJ2FwcGxpY2F0aW9uL21zd29yZCddLFxuICAgIFsnZG9jeCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCddLFxuICAgIFsnZW90JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0J10sXG4gICAgWydlcHViJywgJ2FwcGxpY2F0aW9uL2VwdWIremlwJ10sXG4gICAgWydneicsICdhcHBsaWNhdGlvbi9nemlwJ10sXG4gICAgWydnaWYnLCAnaW1hZ2UvZ2lmJ10sXG4gICAgWydoZWljJywgJ2ltYWdlL2hlaWMnXSxcbiAgICBbJ2hlaWYnLCAnaW1hZ2UvaGVpZiddLFxuICAgIFsnaHRtJywgJ3RleHQvaHRtbCddLFxuICAgIFsnaHRtbCcsICd0ZXh0L2h0bWwnXSxcbiAgICBbJ2ljbycsICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nXSxcbiAgICBbJ2ljcycsICd0ZXh0L2NhbGVuZGFyJ10sXG4gICAgWydqYXInLCAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJ10sXG4gICAgWydqcGVnJywgJ2ltYWdlL2pwZWcnXSxcbiAgICBbJ2pwZycsICdpbWFnZS9qcGVnJ10sXG4gICAgWydqcycsICd0ZXh0L2phdmFzY3JpcHQnXSxcbiAgICBbJ2pzb24nLCAnYXBwbGljYXRpb24vanNvbiddLFxuICAgIFsnanNvbmxkJywgJ2FwcGxpY2F0aW9uL2xkK2pzb24nXSxcbiAgICBbJ21pZCcsICdhdWRpby9taWRpJ10sXG4gICAgWydtaWRpJywgJ2F1ZGlvL21pZGknXSxcbiAgICBbJ21qcycsICd0ZXh0L2phdmFzY3JpcHQnXSxcbiAgICBbJ21wMycsICdhdWRpby9tcGVnJ10sXG4gICAgWydtcDQnLCAndmlkZW8vbXA0J10sXG4gICAgWydtcGVnJywgJ3ZpZGVvL21wZWcnXSxcbiAgICBbJ21wa2cnLCAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnXSxcbiAgICBbJ29kcCcsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbiddLFxuICAgIFsnb2RzJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnXSxcbiAgICBbJ29kdCcsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnXSxcbiAgICBbJ29nYScsICdhdWRpby9vZ2cnXSxcbiAgICBbJ29ndicsICd2aWRlby9vZ2cnXSxcbiAgICBbJ29neCcsICdhcHBsaWNhdGlvbi9vZ2cnXSxcbiAgICBbJ29wdXMnLCAnYXVkaW8vb3B1cyddLFxuICAgIFsnb3RmJywgJ2ZvbnQvb3RmJ10sXG4gICAgWydwbmcnLCAnaW1hZ2UvcG5nJ10sXG4gICAgWydwZGYnLCAnYXBwbGljYXRpb24vcGRmJ10sXG4gICAgWydwaHAnLCAnYXBwbGljYXRpb24veC1odHRwZC1waHAnXSxcbiAgICBbJ3BwdCcsICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCddLFxuICAgIFsncHB0eCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJ10sXG4gICAgWydyYXInLCAnYXBwbGljYXRpb24vdm5kLnJhciddLFxuICAgIFsncnRmJywgJ2FwcGxpY2F0aW9uL3J0ZiddLFxuICAgIFsnc2gnLCAnYXBwbGljYXRpb24veC1zaCddLFxuICAgIFsnc3ZnJywgJ2ltYWdlL3N2Zyt4bWwnXSxcbiAgICBbJ3N3ZicsICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddLFxuICAgIFsndGFyJywgJ2FwcGxpY2F0aW9uL3gtdGFyJ10sXG4gICAgWyd0aWYnLCAnaW1hZ2UvdGlmZiddLFxuICAgIFsndGlmZicsICdpbWFnZS90aWZmJ10sXG4gICAgWyd0cycsICd2aWRlby9tcDJ0J10sXG4gICAgWyd0dGYnLCAnZm9udC90dGYnXSxcbiAgICBbJ3R4dCcsICd0ZXh0L3BsYWluJ10sXG4gICAgWyd2c2QnLCAnYXBwbGljYXRpb24vdm5kLnZpc2lvJ10sXG4gICAgWyd3YXYnLCAnYXVkaW8vd2F2J10sXG4gICAgWyd3ZWJhJywgJ2F1ZGlvL3dlYm0nXSxcbiAgICBbJ3dlYm0nLCAndmlkZW8vd2VibSddLFxuICAgIFsnd2VicCcsICdpbWFnZS93ZWJwJ10sXG4gICAgWyd3b2ZmJywgJ2ZvbnQvd29mZiddLFxuICAgIFsnd29mZjInLCAnZm9udC93b2ZmMiddLFxuICAgIFsneGh0bWwnLCAnYXBwbGljYXRpb24veGh0bWwreG1sJ10sXG4gICAgWyd4bHMnLCAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ10sXG4gICAgWyd4bHN4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0J10sXG4gICAgWyd4bWwnLCAnYXBwbGljYXRpb24veG1sJ10sXG4gICAgWyd4dWwnLCAnYXBwbGljYXRpb24vdm5kLm1vemlsbGEueHVsK3htbCddLFxuICAgIFsnemlwJywgJ2FwcGxpY2F0aW9uL3ppcCddLFxuICAgIFsnN3onLCAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJ10sXG4gICAgLy8gT3RoZXJzXG4gICAgWydta3YnLCAndmlkZW8veC1tYXRyb3NrYSddLFxuICAgIFsnbW92JywgJ3ZpZGVvL3F1aWNrdGltZSddLFxuICAgIFsnbXNnJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1vdXRsb29rJ11cbl0pO1xuZXhwb3J0IGZ1bmN0aW9uIHRvRmlsZVdpdGhQYXRoKGZpbGUsIHBhdGgpIHtcbiAgICB2YXIgZiA9IHdpdGhNaW1lVHlwZShmaWxlKTtcbiAgICBpZiAodHlwZW9mIGYucGF0aCAhPT0gJ3N0cmluZycpIHsgLy8gb24gZWxlY3Ryb24sIHBhdGggaXMgYWxyZWFkeSBzZXQgdG8gdGhlIGFic29sdXRlIHBhdGhcbiAgICAgICAgdmFyIHdlYmtpdFJlbGF0aXZlUGF0aCA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgJ3BhdGgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBwYXRoXG4gICAgICAgICAgICAgICAgLy8gSWYgPGlucHV0IHdlYmtpdGRpcmVjdG9yeT4gaXMgc2V0LFxuICAgICAgICAgICAgICAgIC8vIHRoZSBGaWxlIHdpbGwgaGF2ZSBhIHt3ZWJraXRSZWxhdGl2ZVBhdGh9IHByb3BlcnR5XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxJbnB1dEVsZW1lbnQvd2Via2l0ZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgOiB0eXBlb2Ygd2Via2l0UmVsYXRpdmVQYXRoID09PSAnc3RyaW5nJyAmJiB3ZWJraXRSZWxhdGl2ZVBhdGgubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IHdlYmtpdFJlbGF0aXZlUGF0aFxuICAgICAgICAgICAgICAgICAgICA6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZjtcbn1cbmZ1bmN0aW9uIHdpdGhNaW1lVHlwZShmaWxlKSB7XG4gICAgdmFyIG5hbWUgPSBmaWxlLm5hbWU7XG4gICAgdmFyIGhhc0V4dGVuc2lvbiA9IG5hbWUgJiYgbmFtZS5sYXN0SW5kZXhPZignLicpICE9PSAtMTtcbiAgICBpZiAoaGFzRXh0ZW5zaW9uICYmICFmaWxlLnR5cGUpIHtcbiAgICAgICAgdmFyIGV4dCA9IG5hbWUuc3BsaXQoJy4nKVxuICAgICAgICAgICAgLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciB0eXBlID0gQ09NTU9OX01JTUVfVFlQRVMuZ2V0KGV4dCk7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmlsZSwgJ3R5cGUnLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/file-selector/dist/es5/file.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/file-selector/dist/es5/index.js":
/*!******************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromEvent: () => (/* reexport safe */ _file_selector__WEBPACK_IMPORTED_MODULE_0__.fromEvent)\n/* harmony export */ });\n/* harmony import */ var _file_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-selector */ \"(ssr)/./node_modules/file-selector/dist/es5/file-selector.js\");\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpc3Rlbi1uZXh0Ly4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9lczUvaW5kZXguanM/OTVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICcuL2ZpbGUtc2VsZWN0b3InO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/file-selector/dist/es5/index.js\n");

/***/ })

};
;