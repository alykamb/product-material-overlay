/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/scripts/index.js":
/*!*********************************!*\
  !*** ./client/scripts/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./client/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\njQuery(document).ready(function ($) {\n  var materials = {};\n\n  if ($('#pms-material-selection').length) {\n    var setMaterial = function setMaterial(cat, src, name) {\n      if ($('#pms-image').length) {\n        materials[cat] = name;\n        $(\".image-\".concat(cat)).attr('src', src);\n      }\n    };\n\n    var setUrl = function setUrl() {\n      var query = '';\n      Object.keys(materials).forEach(function (k, i) {\n        if (i == 0) {\n          query += '?';\n        } else {\n          query += '&';\n        }\n\n        query += \"\".concat(k, \"=\").concat(materials[k]);\n      }); // $('.thumbnail.selected').each((i, el) => {\n      // \tconst cat = $(el).data('cat');\n      // \tconst name = $(el).data('name');\n      // \tif (i == 0) {\n      // \t\tquery += '?';\n      // \t} else {\n      // \t\tquery += '&';\n      // \t}\n      // \tquery += `${cat}=${name}`;\n      // });\n\n      var src = window.location.origin + window.location.pathname;\n      history.replaceState(null, document.title, src + query);\n    };\n\n    $('.thumbnails').on('click', '.thumbnail:not(.selected)', function () {\n      var $this = $(this);\n      $this.parents('.thumbnails').find('.thumbnail').removeClass('selected');\n      $this.addClass('selected');\n\n      if ($this.hasClass('none')) {\n        setMaterial($this.data('cat'), '', '');\n      } else {\n        setMaterial($this.data('cat'), $this.data('src'), $this.data('name'));\n      }\n\n      setUrl();\n    });\n    $('.gallery-thumb').on('click', function () {\n      var $this = $(this);\n      $this.siblings().removeClass('selected');\n      $this.addClass('selected');\n\n      if ($this.data('base')) {\n        $('.gallery-image-wrapper').removeClass('active');\n      } else {\n        $('.gallery-image-wrapper').addClass('active');\n        $('.gallery-image-wrapper .gallery-image').attr('src', $this.children().attr('src'));\n      }\n    });\n\n    if (!window.location.search) {\n      setUrl();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./client/scripts/index.js?");

/***/ }),

/***/ "./client/styles/index.scss":
/*!**********************************!*\
  !*** ./client/styles/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./client/styles/index.scss?");

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./client/scripts/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./client/scripts/index.js */\"./client/scripts/index.js\");\n\n\n//# sourceURL=webpack:///multi_./client/scripts/index.js?");

/***/ })

/******/ });