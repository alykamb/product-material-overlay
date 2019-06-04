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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./admin/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.js */ \"./admin/scripts/options.js\");\n\n\njQuery(document).ready(function ($) {\n  Object(_options_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($); // Uploading files\n\n  var file_frame;\n  var wp_media_post_id = wp.media.model.settings.post.id; // Store the old id\n  // var set_to_post_id = < ? php echo $my_saved_attachment_post_id; ? > ; // Set this\n\n  jQuery('#upload_image_button').on('click', function (event) {\n    event.preventDefault(); // If the media frame already exists, reopen it.\n\n    if (file_frame) {\n      // Set the post ID to what we want\n      // file_frame.uploader.uploader.param('post_id', set_to_post_id);\n      // Open frame\n      file_frame.open();\n      return;\n    } else {} // Set the wp.media post id so the uploader grabs the ID we want when initialised\n    // wp.media.model.settings.post.id = set_to_post_id;\n    // Create the media frame.\n\n\n    file_frame = wp.media.frames.file_frame = wp.media({\n      title: 'Select a image to upload',\n      button: {\n        text: 'Use this image'\n      },\n      multiple: false // Set to true to allow multiple files to be selected\n\n    }); // When an image is selected, run a callback.\n\n    file_frame.on('select', function (args) {\n      // console.log(file_frame.state())\n      // We set multiple to false so only get one image from the uploader\n      var attachment = file_frame.state().get('selection').first().toJSON(); // Do something with attachment.id and/or attachment.url here\n\n      $('#image-preview').attr('src', attachment.url).css('width', 'auto');\n      $('#image_attachment_id').val(attachment.id); // Restore the main post ID\n      // console.log()\n\n      wp.media.model.settings.post.id = wp_media_post_id;\n    }); // Finally, open the modal\n\n    file_frame.open();\n  }); // Restore the main ID when the add media button is pressed\n\n  jQuery('a.add_media').on('click', function () {\n    wp.media.model.settings.post.id = wp_media_post_id;\n  });\n});\n\n//# sourceURL=webpack:///./admin/scripts/index.js?");

/***/ }),

/***/ "./admin/scripts/options.js":
/*!**********************************!*\
  !*** ./admin/scripts/options.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\n  if ($('.pms-options-form').length) {\n    var newCat = $('#new-category');\n\n    var addCategory = function addCategory(category) {\n      var element = \"\\n\\t\\t\\t<div class=\\\"cat\\\">\\n\\t\\t\\t<div class=\\\"handle\\\"><span class=\\\"dashicons dashicons-sort\\\"></span></div>\\n\\t\\t\\t<input type=\\\"text\\\" name=\\\"category[]\\\" id=\\\"category-\".concat(category, \"\\\" value=\\\"\").concat(category, \"\\\"> \\n\\t\\t\\t<button class=\\\"remove\\\"  type=\\\"button\\\"><span class=\\\"dashicons dashicons-trash\\\"></span></button>\\n\\t\\t\\t</div>\");\n      $('.pms-categories').append(element);\n    };\n\n    newCat.on('blur keydown', function (e) {\n      var value = e.target.value;\n      console.log(value, value.length);\n\n      if ((!e.which || e.which == 13) && value && value.length > 0) {\n        e.preventDefault();\n        addCategory(value);\n        e.target.value = '';\n      }\n    });\n    $('.pms-categories').sortable({\n      handle: \".handle\"\n    });\n    $('.pms-categories').on('click', ' .remove', function () {\n      $(this).parent().remove();\n    });\n  }\n});\n\n//# sourceURL=webpack:///./admin/scripts/options.js?");

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