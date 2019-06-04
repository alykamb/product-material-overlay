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

/***/ "./admin/scripts/gallery.js":
/*!**********************************!*\
  !*** ./admin/scripts/gallery.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\n  if ($('#pms_gallery').length) {\n    var newCat = $('#new-category');\n\n    var addCategory = function addCategory(category) {\n      var element = \"\\n\\t\\t\\t<div class=\\\"cat toggled-container\\\">\\n\\t\\t\\t<div class=\\\"topbar\\\">\\n\\t\\t\\t<div class=\\\"handle\\\"><span class=\\\"dashicons dashicons-sort\\\"></div>\\n\\t\\t\\t<p class=\\\"label\\\">\\n\\t\\t\\t<b>\\n\\t\\t\\t\".concat(category, \"\\n\\t\\t\\t</b>\\n\\t\\t\\t</p>\\n\\t\\t\\t<div class=\\\"toggler-wrapper\\\">\\n\\t\\t\\t<input type=\\\"checkbox\\\" class=\\\"toggler\\\" name=\\\"cat\\\" checked >\\n\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\\"content\\\">\\n\\t\\t\\t<button class=\\\"button\\\" class=\\\"add-image\\\" data-cat=\\\"\").concat(category, \"\\\">Adicionar Imagem</button>\\n\\t\\t\\t</div>\\n\\t\\t\\t</div>\");\n      $('.overlay-gallery .categories').append(element);\n    };\n\n    newCat.on('blur keydown', function (e) {\n      var value = e.target.value;\n      console.log(value, value.length);\n\n      if ((!e.which || e.which == 13) && value && value.length > 0) {\n        e.preventDefault();\n        addCategory(value);\n        e.target.value = '';\n      }\n    });\n    $('.categories').sortable({\n      handle: \".handle\"\n    });\n    $('.categories').on('click', ' .remove', function () {\n      $(this).parents('.cat').remove();\n    });\n  } // \tvar file_frame;\n  // \tvar wp_media_post_id = wp.media.model.settings.post.id; // Store the old id\n  // \t// var set_to_post_id = < ? php echo $my_saved_attachment_post_id; ? > ; // Set this\n  // \t$('#upload_image_button').on('click', function (event) {\n  // \t\tevent.preventDefault();\n  // \t\t// If the media frame already exists, reopen it.\n  // \t\tif (file_frame) {\n  // \t\t\t// Set the post ID to what we want\n  // \t\t\t// file_frame.uploader.uploader.param('post_id', set_to_post_id);\n  // \t\t\t// Open frame\n  // \t\t\tfile_frame.open();\n  // \t\t\treturn;\n  // \t\t} else {\n  // \t\t\t// Set the wp.media post id so the uploader grabs the ID we want when initialised\n  // \t\t\t// wp.media.model.settings.post.id = set_to_post_id;\n  // \t\t}\n  // \t\t// Create the media frame.\n  // \t\tfile_frame = wp.media.frames.file_frame = wp.media({\n  // \t\t\ttitle: 'Select a image to upload',\n  // \t\t\tbutton: {\n  // \t\t\t\ttext: 'Use this image',\n  // \t\t\t},\n  // \t\t\tmultiple: false // Set to true to allow multiple files to be selected\n  // \t\t});\n  // \t\t// When an image is selected, run a callback.\n  // \t\tfile_frame.on('select', (args) => {\n  // \t\t\t// console.log(file_frame.state())\n  // \t\t\t// We set multiple to false so only get one image from the uploader\n  // \t\t\tconst attachment = file_frame.state().get('selection').first().toJSON();\n  // \t\t\t// Do something with attachment.id and/or attachment.url here\n  // \t\t\t$('#image-preview').attr('src', attachment.url).css('width', 'auto');\n  // \t\t\t$('#image_attachment_id').val(attachment.id);\n  // \t\t\t// Restore the main post ID\n  // \t\t\t// console.log()\n  // \t\t\twp.media.model.settings.post.id = wp_media_post_id;\n  // \t\t});\n  // \t\t// Finally, open the modal\n  // \t\tfile_frame.open();\n  // \t});\n  // \t// Restore the main ID when the add media button is pressed\n  // \t$('a.add_media').on('click', function () {\n  // \t\twp.media.model.settings.post.id = wp_media_post_id;\n  // \t});\n\n});\n\n//# sourceURL=webpack:///./admin/scripts/gallery.js?");

/***/ }),

/***/ "./admin/scripts/index.js":
/*!********************************!*\
  !*** ./admin/scripts/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./admin/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.js */ \"./admin/scripts/options.js\");\n/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.js */ \"./admin/scripts/gallery.js\");\n\n\n\njQuery(document).ready(function ($) {\n  Object(_gallery_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($);\n  Object(_options_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($); // Uploading files\n});\n\n//# sourceURL=webpack:///./admin/scripts/index.js?");

/***/ }),

/***/ "./admin/scripts/options.js":
/*!**********************************!*\
  !*** ./admin/scripts/options.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\n  if ($('.pms_options-form').length) {\n    var newCat = $('#new-category');\n\n    var addCategory = function addCategory(category) {\n      var element = \"\\n\\t\\t\\t<div class=\\\"cat\\\">\\n\\t\\t\\t<div class=\\\"handle\\\"><span class=\\\"dashicons dashicons-sort\\\"></span></div>\\n\\t\\t\\t<input type=\\\"text\\\" name=\\\"category[]\\\" id=\\\"category-\".concat(category, \"\\\" value=\\\"\").concat(category, \"\\\"> \\n\\t\\t\\t<button class=\\\"remove\\\"  type=\\\"button\\\"><span class=\\\"dashicons dashicons-trash\\\"></span></button>\\n\\t\\t\\t</div>\");\n      $('.pms_categories').append(element);\n    };\n\n    newCat.on('blur keydown', function (e) {\n      var value = e.target.value;\n      console.log(value, value.length);\n\n      if ((!e.which || e.which == 13) && value && value.length > 0) {\n        e.preventDefault();\n        addCategory(value);\n        e.target.value = '';\n      }\n    });\n    $('.pms_categories').sortable({\n      handle: \".handle\"\n    });\n    $('.pms_categories').on('click', ' .remove', function () {\n      $(this).parent().remove();\n    });\n  }\n});\n\n//# sourceURL=webpack:///./admin/scripts/options.js?");

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