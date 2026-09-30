/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/LinkedList.js"
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n\n\nclass LinkedList {\n    constructor() {\n        this.headNode = null;\n    }\n\n    append(value) {\n        const newNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n\n        if (this.headNode === null) {\n            this.headNode = newNode;\n            return;\n        }\n\n        let current = this.headNode;\n        while (current.next) {\n            current = current.next;\n        }\n        current.next = newNode;\n    }\n\n    size() {\n        let count = 0;\n        let current = this.headNode;\n        while (current) {\n            count++;\n            current = current.next;\n        }\n        return count;\n    }\n\n    head() {\n        if (this.headNode === null) {\n            return undefined;\n        }\n        return this.headNode;\n    }\n\n    tail() {\n        if (this.headNode === null) {\n            return undefined;\n        }\n        let current = this.headNode;\n        while (current.next) {\n            current = current.next;\n        }\n        return current;\n    }\n\n    at(index) {\n        if (index < 0) {\n            return undefined;\n        }\n        let current = this.headNode;\n        let count = 0;\n        while (current) {\n            if (count === index) {\n                return current;\n            }\n            current =current.next;\n            count++;\n        }\n        return undefined;\n    }\n\n    pop() {\n        if (this.headNode === null) {\n            return undefined;\n        }\n        if (this.headNode.next === null) {\n            this.headNode = null;\n            return;\n        }\n\n        const removedNode = this.headNode;\n        this.headNode = this.headNode.next;\n\n        return removedNode;\n    }\n\n    contains(value) {\n        let current = this.headNode;\n        while (current) {\n            if (current.value === value) {\n                return true;\n            }\n            current = current.next;\n        }\n        return false;\n    }\n\n    findIndex(value) {\n        let current = this.headNode;\n        let index = 0;\n        while (current) {\n            if (current.value === value) {\n                return index;\n            }\n            current = current.next;\n            index++;\n        }\n\n        return -1;\n    }\n\n    toString() {\n        if (this.headNode === null) {\n            return \"\";\n        }\n        let current = this.headNode;\n        let result = \"\";\n        while (current) {\n            result += `( ${current.value} ) -> `;\n            current = current.next;\n        }\n        result += \"null\";\n        return result;\n    }\n\n    insertAt(index, value) {\n        if (index < 0 || index > this.size()) {\n            throw new RangeError(\"index out of bounds\");\n        }\n        if (index === 0) {\n            const newNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n            newNode.next = this.headNode;\n            this.headNode = newNode;\n            return;\n        }\n        let current = this.headNode;\n        let count = 0;\n        while (current) {\n            if (count === index - 1) {\n                const newNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n                newNode.next = current.next;\n                current.next = newNode;\n                return;\n            }\n            current = current.next;\n            count++;\n        }\n    }\n\n    removeAt(index) {\n        if (index < 0 || index >= this.size()) {\n            throw new RangeError(\"index out of bounds\");\n        }\n        if (index === 0) {\n            this.headNode = this.headNode.next;\n            return;\n        }\n        let current = this.headNode;\n        let count = 0;\n        while (current) {\n            if (count === index - 1) {\n                current.next = current.next.next;\n                return;\n            }\n            current = current.next;\n            count++;\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);\n\n//# sourceURL=webpack://linked-lists/./src/LinkedList.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList.js */ \"./src/LinkedList.js\");\n\n\nconst list = new _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nlist.append(\"dog\");\nlist.append(\"cat\");\nlist.append(\"parrot\");\nlist.append(\"hamster\");\nlist.append(\"snake\");\nlist.append(\"turtle\");\n\nconsole.log(list);\nconsole.log(list.toString());\n\n//# sourceURL=webpack://linked-lists/./src/index.js?\n}");

/***/ },

/***/ "./src/node.js"
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Node {\n    constructor(value = null) {\n        this.value = value;\n        this.next = null;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);\n\n//# sourceURL=webpack://linked-lists/./src/node.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;