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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin/scripts/index.js":
/*!********************************!*\
  !*** ./admin/scripts/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./admin/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.js */ \"./admin/scripts/options.js\");\n\r\n\r\n\r\njQuery(document).ready(($) => {\r\n\tObject(_options_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($);\r\n\t// Uploading files\r\n\tvar file_frame;\r\n\tvar wp_media_post_id = wp.media.model.settings.post.id; // Store the old id\r\n\t// var set_to_post_id = < ? php echo $my_saved_attachment_post_id; ? > ; // Set this\r\n\tjQuery('#upload_image_button').on('click', function (event) {\r\n\t\tevent.preventDefault();\r\n\t\t// If the media frame already exists, reopen it.\r\n\t\tif (file_frame) {\r\n\t\t\t// Set the post ID to what we want\r\n\t\t\t// file_frame.uploader.uploader.param('post_id', set_to_post_id);\r\n\t\t\t// Open frame\r\n\t\t\tfile_frame.open();\r\n\t\t\treturn;\r\n\t\t} else {\r\n\t\t\t// Set the wp.media post id so the uploader grabs the ID we want when initialised\r\n\t\t\t// wp.media.model.settings.post.id = set_to_post_id;\r\n\t\t}\r\n\t\t// Create the media frame.\r\n\t\tfile_frame = wp.media.frames.file_frame = wp.media({\r\n\t\t\ttitle: 'Select a image to upload',\r\n\t\t\tbutton: {\r\n\t\t\t\ttext: 'Use this image',\r\n\t\t\t},\r\n\t\t\tmultiple: false // Set to true to allow multiple files to be selected\r\n\t\t});\r\n\t\t// When an image is selected, run a callback.\r\n\t\tfile_frame.on('select', (args) => {\r\n\t\t\t// console.log(file_frame.state())\r\n\t\t\t// We set multiple to false so only get one image from the uploader\r\n\t\t\tconst attachment = file_frame.state().get('selection').first().toJSON();\r\n\t\t\t// Do something with attachment.id and/or attachment.url here\r\n\t\t\t$('#image-preview').attr('src', attachment.url).css('width', 'auto');\r\n\t\t\t$('#image_attachment_id').val(attachment.id);\r\n\t\t\t// Restore the main post ID\r\n\t\t\t// console.log()\r\n\t\t\twp.media.model.settings.post.id = wp_media_post_id;\r\n\t\t});\r\n\t\t// Finally, open the modal\r\n\t\tfile_frame.open();\r\n\t});\r\n\t// Restore the main ID when the add media button is pressed\r\n\tjQuery('a.add_media').on('click', function () {\r\n\t\twp.media.model.settings.post.id = wp_media_post_id;\r\n\t});\r\n});\n\n//# sourceURL=webpack:///./admin/scripts/index.js?");

/***/ }),

/***/ "./admin/scripts/options.js":
/*!**********************************!*\
  !*** ./admin/scripts/options.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\r\n\tconst newCat = $('#new-category');\r\n\r\n\tfunction addCategory(category) {\r\n\t\tconst element = `\r\n\t\t\t<div class=\"cat\">\r\n\t\t\t\t<div class=\"handle\"><span class=\"dashicons dashicons-sort\"></span></span></div>\r\n\t\t\t\t<input type=\"text\" name=\"category[]\" id=\"category-${category}\" value=\"${category}\"> \r\n\t\t\t\t<button class=\"remove\"  type=\"button\"><span class=\"dashicons dashicons-trash\"></span></button>\r\n\t\t\t</div>`;\r\n\t\t$('.pms-categories').append(element);\r\n\t}\t\r\n\t\r\n\t\r\n\tnewCat.on('blur keydown', e => {\r\n\t\tconst {value} = e.target;\r\n\t\tconsole.log(value, value.length)\r\n\t\tif ((!e.which || e.which == 13) && value && value.length > 0) {\r\n\t\t\te.preventDefault()\r\n\t\t\taddCategory(value);\r\n\t\t\te.target.value = '';\r\n\t\t}\t\t\r\n\t});\r\n\r\n\t$('.pms-categories').sortable({\r\n\t\thandle: \".handle\"\r\n\t})\r\n\r\n\t$('.pms-categories').on('click', ' .remove', function() {\r\n\t\t$(this).parent().remove();\r\n\t})\r\n});\n\n//# sourceURL=webpack:///./admin/scripts/options.js?");

/***/ }),

/***/ "./admin/styles/index.scss":
/*!*********************************!*\
  !*** ./admin/styles/index.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./admin/styles/index.scss?");

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./admin/scripts/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./admin/scripts/index.js */\"./admin/scripts/index.js\");\n\n\n//# sourceURL=webpack:///multi_./admin/scripts/index.js?");

/***/ })

/******/ });