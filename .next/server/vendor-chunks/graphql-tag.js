"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/graphql-tag";
exports.ids = ["vendor-chunks/graphql-tag"];
exports.modules = {

/***/ "(ssr)/./node_modules/graphql-tag/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   disableExperimentalFragmentVariables: () => (/* binding */ disableExperimentalFragmentVariables),\n/* harmony export */   disableFragmentWarnings: () => (/* binding */ disableFragmentWarnings),\n/* harmony export */   enableExperimentalFragmentVariables: () => (/* binding */ enableExperimentalFragmentVariables),\n/* harmony export */   gql: () => (/* binding */ gql),\n/* harmony export */   resetCaches: () => (/* binding */ resetCaches)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ \"(ssr)/./node_modules/graphql/language/parser.mjs\");\n\n\nvar docCache = new Map();\nvar fragmentSourceMap = new Map();\nvar printFragmentWarnings = true;\nvar experimentalFragmentVariables = false;\nfunction normalize(string) {\n    return string.replace(/[\\s,]+/g, ' ').trim();\n}\nfunction cacheKeyFromLoc(loc) {\n    return normalize(loc.source.body.substring(loc.start, loc.end));\n}\nfunction processFragments(ast) {\n    var seenKeys = new Set();\n    var definitions = [];\n    ast.definitions.forEach(function (fragmentDefinition) {\n        if (fragmentDefinition.kind === 'FragmentDefinition') {\n            var fragmentName = fragmentDefinition.name.value;\n            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);\n            var sourceKeySet = fragmentSourceMap.get(fragmentName);\n            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {\n                if (printFragmentWarnings) {\n                    console.warn(\"Warning: fragment with name \" + fragmentName + \" already exists.\\n\"\n                        + \"graphql-tag enforces all fragment names across your application to be unique; read more about\\n\"\n                        + \"this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names\");\n                }\n            }\n            else if (!sourceKeySet) {\n                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);\n            }\n            sourceKeySet.add(sourceKey);\n            if (!seenKeys.has(sourceKey)) {\n                seenKeys.add(sourceKey);\n                definitions.push(fragmentDefinition);\n            }\n        }\n        else {\n            definitions.push(fragmentDefinition);\n        }\n    });\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, ast), { definitions: definitions });\n}\nfunction stripLoc(doc) {\n    var workSet = new Set(doc.definitions);\n    workSet.forEach(function (node) {\n        if (node.loc)\n            delete node.loc;\n        Object.keys(node).forEach(function (key) {\n            var value = node[key];\n            if (value && typeof value === 'object') {\n                workSet.add(value);\n            }\n        });\n    });\n    var loc = doc.loc;\n    if (loc) {\n        delete loc.startToken;\n        delete loc.endToken;\n    }\n    return doc;\n}\nfunction parseDocument(source) {\n    var cacheKey = normalize(source);\n    if (!docCache.has(cacheKey)) {\n        var parsed = (0,graphql__WEBPACK_IMPORTED_MODULE_1__.parse)(source, {\n            experimentalFragmentVariables: experimentalFragmentVariables,\n            allowLegacyFragmentVariables: experimentalFragmentVariables\n        });\n        if (!parsed || parsed.kind !== 'Document') {\n            throw new Error('Not a valid GraphQL document.');\n        }\n        docCache.set(cacheKey, stripLoc(processFragments(parsed)));\n    }\n    return docCache.get(cacheKey);\n}\nfunction gql(literals) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    if (typeof literals === 'string') {\n        literals = [literals];\n    }\n    var result = literals[0];\n    args.forEach(function (arg, i) {\n        if (arg && arg.kind === 'Document') {\n            result += arg.loc.source.body;\n        }\n        else {\n            result += arg;\n        }\n        result += literals[i + 1];\n    });\n    return parseDocument(result);\n}\nfunction resetCaches() {\n    docCache.clear();\n    fragmentSourceMap.clear();\n}\nfunction disableFragmentWarnings() {\n    printFragmentWarnings = false;\n}\nfunction enableExperimentalFragmentVariables() {\n    experimentalFragmentVariables = true;\n}\nfunction disableExperimentalFragmentVariables() {\n    experimentalFragmentVariables = false;\n}\nvar extras = {\n    gql: gql,\n    resetCaches: resetCaches,\n    disableFragmentWarnings: disableFragmentWarnings,\n    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,\n    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables\n};\n(function (gql_1) {\n    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;\n})(gql || (gql = {}));\ngql[\"default\"] = gql;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gql);\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Q7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLCtDQUFRLENBQUMsK0NBQVEsR0FBRyxVQUFVLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBSztBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtCQUFrQjtBQUNuQjtBQUNBLGlFQUFlLEdBQUcsRUFBQztBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJudHViZS0xLjAvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbGliL2luZGV4LmpzPzQyOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnZ3JhcGhxbCc7XG52YXIgZG9jQ2FjaGUgPSBuZXcgTWFwKCk7XG52YXIgZnJhZ21lbnRTb3VyY2VNYXAgPSBuZXcgTWFwKCk7XG52YXIgcHJpbnRGcmFnbWVudFdhcm5pbmdzID0gdHJ1ZTtcbnZhciBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGZhbHNlO1xuZnVuY3Rpb24gbm9ybWFsaXplKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xccyxdKy9nLCAnICcpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIGNhY2hlS2V5RnJvbUxvYyhsb2MpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKGxvYy5zb3VyY2UuYm9keS5zdWJzdHJpbmcobG9jLnN0YXJ0LCBsb2MuZW5kKSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzRnJhZ21lbnRzKGFzdCkge1xuICAgIHZhciBzZWVuS2V5cyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgZGVmaW5pdGlvbnMgPSBbXTtcbiAgICBhc3QuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZnJhZ21lbnREZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChmcmFnbWVudERlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudE5hbWUgPSBmcmFnbWVudERlZmluaXRpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBzb3VyY2VLZXkgPSBjYWNoZUtleUZyb21Mb2MoZnJhZ21lbnREZWZpbml0aW9uLmxvYyk7XG4gICAgICAgICAgICB2YXIgc291cmNlS2V5U2V0ID0gZnJhZ21lbnRTb3VyY2VNYXAuZ2V0KGZyYWdtZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoc291cmNlS2V5U2V0ICYmICFzb3VyY2VLZXlTZXQuaGFzKHNvdXJjZUtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJpbnRGcmFnbWVudFdhcm5pbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IGZyYWdtZW50IHdpdGggbmFtZSBcIiArIGZyYWdtZW50TmFtZSArIFwiIGFscmVhZHkgZXhpc3RzLlxcblwiXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiZ3JhcGhxbC10YWcgZW5mb3JjZXMgYWxsIGZyYWdtZW50IG5hbWVzIGFjcm9zcyB5b3VyIGFwcGxpY2F0aW9uIHRvIGJlIHVuaXF1ZTsgcmVhZCBtb3JlIGFib3V0XFxuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgXCJ0aGlzIGluIHRoZSBkb2NzOiBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL2NvcmUvZnJhZ21lbnRzLmh0bWwjdW5pcXVlLW5hbWVzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFzb3VyY2VLZXlTZXQpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNvdXJjZU1hcC5zZXQoZnJhZ21lbnROYW1lLCBzb3VyY2VLZXlTZXQgPSBuZXcgU2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvdXJjZUtleVNldC5hZGQoc291cmNlS2V5KTtcbiAgICAgICAgICAgIGlmICghc2VlbktleXMuaGFzKHNvdXJjZUtleSkpIHtcbiAgICAgICAgICAgICAgICBzZWVuS2V5cy5hZGQoc291cmNlS2V5KTtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGZyYWdtZW50RGVmaW5pdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGZyYWdtZW50RGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGFzdCksIHsgZGVmaW5pdGlvbnM6IGRlZmluaXRpb25zIH0pO1xufVxuZnVuY3Rpb24gc3RyaXBMb2MoZG9jKSB7XG4gICAgdmFyIHdvcmtTZXQgPSBuZXcgU2V0KGRvYy5kZWZpbml0aW9ucyk7XG4gICAgd29ya1NldC5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmxvYylcbiAgICAgICAgICAgIGRlbGV0ZSBub2RlLmxvYztcbiAgICAgICAgT2JqZWN0LmtleXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBub2RlW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHdvcmtTZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGxvYyA9IGRvYy5sb2M7XG4gICAgaWYgKGxvYykge1xuICAgICAgICBkZWxldGUgbG9jLnN0YXJ0VG9rZW47XG4gICAgICAgIGRlbGV0ZSBsb2MuZW5kVG9rZW47XG4gICAgfVxuICAgIHJldHVybiBkb2M7XG59XG5mdW5jdGlvbiBwYXJzZURvY3VtZW50KHNvdXJjZSkge1xuICAgIHZhciBjYWNoZUtleSA9IG5vcm1hbGl6ZShzb3VyY2UpO1xuICAgIGlmICghZG9jQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgICB2YXIgcGFyc2VkID0gcGFyc2Uoc291cmNlLCB7XG4gICAgICAgICAgICBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlczogZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMsXG4gICAgICAgICAgICBhbGxvd0xlZ2FjeUZyYWdtZW50VmFyaWFibGVzOiBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlc1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFwYXJzZWQgfHwgcGFyc2VkLmtpbmQgIT09ICdEb2N1bWVudCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgR3JhcGhRTCBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICBkb2NDYWNoZS5zZXQoY2FjaGVLZXksIHN0cmlwTG9jKHByb2Nlc3NGcmFnbWVudHMocGFyc2VkKSkpO1xuICAgIH1cbiAgICByZXR1cm4gZG9jQ2FjaGUuZ2V0KGNhY2hlS2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBncWwobGl0ZXJhbHMpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGl0ZXJhbHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxpdGVyYWxzID0gW2xpdGVyYWxzXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGxpdGVyYWxzWzBdO1xuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnLCBpKSB7XG4gICAgICAgIGlmIChhcmcgJiYgYXJnLmtpbmQgPT09ICdEb2N1bWVudCcpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBhcmcubG9jLnNvdXJjZS5ib2R5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGFyZztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gbGl0ZXJhbHNbaSArIDFdO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZURvY3VtZW50KHJlc3VsdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDYWNoZXMoKSB7XG4gICAgZG9jQ2FjaGUuY2xlYXIoKTtcbiAgICBmcmFnbWVudFNvdXJjZU1hcC5jbGVhcigpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVGcmFnbWVudFdhcm5pbmdzKCkge1xuICAgIHByaW50RnJhZ21lbnRXYXJuaW5ncyA9IGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzKCkge1xuICAgIGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMoKSB7XG4gICAgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBmYWxzZTtcbn1cbnZhciBleHRyYXMgPSB7XG4gICAgZ3FsOiBncWwsXG4gICAgcmVzZXRDYWNoZXM6IHJlc2V0Q2FjaGVzLFxuICAgIGRpc2FibGVGcmFnbWVudFdhcm5pbmdzOiBkaXNhYmxlRnJhZ21lbnRXYXJuaW5ncyxcbiAgICBlbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlczogZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMsXG4gICAgZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzOiBkaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXNcbn07XG4oZnVuY3Rpb24gKGdxbF8xKSB7XG4gICAgZ3FsXzEuZ3FsID0gZXh0cmFzLmdxbCwgZ3FsXzEucmVzZXRDYWNoZXMgPSBleHRyYXMucmVzZXRDYWNoZXMsIGdxbF8xLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzID0gZXh0cmFzLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzLCBncWxfMS5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGV4dHJhcy5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcywgZ3FsXzEuZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZXh0cmFzLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbn0pKGdxbCB8fCAoZ3FsID0ge30pKTtcbmdxbFtcImRlZmF1bHRcIl0gPSBncWw7XG5leHBvcnQgZGVmYXVsdCBncWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphql-tag/lib/index.js\n");

/***/ })

};
;