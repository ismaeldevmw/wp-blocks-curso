/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./register/src/edit.js":
/*!******************************!*\
  !*** ./register/src/edit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Edit = props => {
  const {
    className
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "signin__container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "sigin__titulo"
  }, "Register"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "signin__form",
    id: "signup"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "signin__name name--campo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "Name"
  }, "Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: "name",
    type: "text",
    id: "Name"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "signin__email name--campo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "email"
  }, "Email"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: "email",
    type: "email",
    id: "email"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "signin__pass name--campo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "password"
  }, "Password"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: "password",
    type: "password",
    id: "password"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "signin__submit"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "submit",
    value: "Create"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "msg"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./register/src/sytles.scss":
/*!**********************************!*\
  !*** ./register/src/sytles.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./register/src/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./register/src/edit.js");
/* harmony import */ var _sytles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sytles.scss */ "./register/src/sytles.scss");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('plz/register', {
  title: 'Register',
  category: 'widgets',
  icon: 'admin-users',
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Save frontend")
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map