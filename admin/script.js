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

/***/ "./admin/scripts/gallery/baseImage.js":
/*!********************************************!*\
  !*** ./admin/scripts/gallery/baseImage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./admin/scripts/gallery/helpers.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($, modal) {\n  $('.choose-base-image').on('click',\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(e) {\n      var id, image;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              id = $('#base-image').val();\n              _context.next = 4;\n              return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getImageFromMedia\"])(id);\n\n            case 4:\n              image = _context.sent;\n              // console.log()\n              $('.overlay-gallery .base .image img').attr('src', image.url);\n              $('#base-image').val(image.id);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n});\n\n//# sourceURL=webpack:///./admin/scripts/gallery/baseImage.js?");

/***/ }),

/***/ "./admin/scripts/gallery/categories.js":
/*!*********************************************!*\
  !*** ./admin/scripts/gallery/categories.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\n  var newCat = $('#new-category');\n\n  var addCategory = function addCategory(category) {\n    var element = \"\\n\\t\\t\\t<div class=\\\"cat toggled-container cat-\".concat(category, \"\\\">\\n\\t\\t\\t\\t<div class=\\\"topbar\\\">\\n\\t\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"categories[]\\\" value=\\\"\").concat(category, \"\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"handle\\\"><span class=\\\"dashicons dashicons-sort\\\"></div>\\n\\t\\t\\t\\t\\t<p class=\\\"label\\\"><b>\").concat(category, \"</b></p>\\t\\t\\n\\t\\t\\t\\t\\t<div class=\\\"remove-wrapper\\\">\\n\\t\\t\\t\\t\\t\\t<button class=\\\"remove\\\"  type=\\\"button\\\"><span class=\\\"dashicons dashicons-trash\\\"></span></button>\\n\\t\\t\\t\\t\\t</div>\\t\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\\"content\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"images\\\">\\n\\t\\t\\t\\t\\t\\t<p><i>Nenhuma imagem cadastrada</i></p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<button class=\\\"button add-image\\\" data-cat=\\\"\").concat(category, \"\\\">Adicionar Imagem</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\");\n    $('.overlay-gallery .categories').append(element);\n  };\n\n  newCat.on('blur keydown', function (e) {\n    var value = e.target.value;\n    console.log(value, value.length);\n\n    if ((!e.which || e.which == 13) && value && value.length > 0) {\n      e.preventDefault();\n      addCategory(value);\n      e.target.value = '';\n    }\n  });\n  $('.categories').sortable({\n    handle: \".handle\"\n  });\n  $('.categories').on('click', '.remove', function () {\n    $(this).parents('.cat').remove();\n  });\n});\n\n//# sourceURL=webpack:///./admin/scripts/gallery/categories.js?");

/***/ }),

/***/ "./admin/scripts/gallery/gallery.js":
/*!******************************************!*\
  !*** ./admin/scripts/gallery/gallery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./admin/scripts/gallery/helpers.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\n  var newGalleryImage = function newGalleryImage(image) {\n    var img = $(\"\\n\\t\\t\\t<div class=\\\"image\\\">\\n\\t\\t\\t\\t<img src=\\\"\".concat(image.url, \"\\\" alt=\\\"\\\">\\n\\t\\t\\t\\t<button class=\\\"gallery-item-remove\\\">\\n\\t\\t\\t\\t\\t<span class=\\\"dashicons dashicons-trash\\\"></span>\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"gallery-src[]\\\" value=\\\"\").concat(image.url, \"\\\">\\n\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"gallery-id[]\\\" value=\\\"\").concat(image.id, \"\\\">\\n\\t\\t\\t</div>\\n\\t\\t\"));\n    $('.gallery-images').append(img);\n  }; // console.log('here');\n\n\n  $('.add-gallery-images').on('click',\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(e) {\n      var images;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              e.stopPropagation();\n              _context.next = 4;\n              return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getImageFromMedia\"])(null, true);\n\n            case 4:\n              images = _context.sent;\n              images.forEach(function (image) {\n                return newGalleryImage(image);\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  $('.gallery').on('click', '.image .gallery-item-remove', function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    $(this).parent().remove();\n  });\n});\n\n//# sourceURL=webpack:///./admin/scripts/gallery/gallery.js?");

/***/ }),

/***/ "./admin/scripts/gallery/helpers.js":
/*!******************************************!*\
  !*** ./admin/scripts/gallery/helpers.js ***!
  \******************************************/
/*! exports provided: getImageFromMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImageFromMedia\", function() { return getImageFromMedia; });\nvar getImageFromMedia = function getImageFromMedia(id) {\n  var multiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return new Promise(function (resolve, reject) {\n    var file_frame = wp.media.frames.file_frame = wp.media({\n      title: 'Selecione uma imagem',\n      library: {\n        type: 'image' // limits the frame to show only images\n\n      },\n      multiple: multiple // Set to true to allow multiple files to be selected\n\n    });\n\n    if (id) {\n      wp.media.model.settings.post.id = id;\n    }\n\n    file_frame.open();\n    file_frame.on('cancel', function () {\n      return reject();\n    });\n    file_frame.on('select', function () {\n      if (multiple) {\n        return resolve(file_frame.state().get('selection').toJSON());\n      }\n\n      return resolve(file_frame.state().get('selection').first().toJSON());\n    });\n  });\n};\n\n//# sourceURL=webpack:///./admin/scripts/gallery/helpers.js?");

/***/ }),

/***/ "./admin/scripts/gallery/index.js":
/*!****************************************!*\
  !*** ./admin/scripts/gallery/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal */ \"./admin/scripts/modal.js\");\n/* harmony import */ var _baseImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseImage */ \"./admin/scripts/gallery/baseImage.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ \"./admin/scripts/gallery/categories.js\");\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery */ \"./admin/scripts/gallery/gallery.js\");\n/* harmony import */ var _overlayImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlayImages */ \"./admin/scripts/gallery/overlayImages.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\n  if ($('#pms_gallery').length) {\n    Object(_categories__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($);\n    Object(_gallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($); // ---------------- OVERLAY IMAGES ---------------- //\n\n    Object(_overlayImages__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($, window[_modal__WEBPACK_IMPORTED_MODULE_0__[\"modal\"]]); // ---------------- BASE IMAGE ---------------- //\n\n    Object(_baseImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($, window[_modal__WEBPACK_IMPORTED_MODULE_0__[\"modal\"]]);\n  }\n});\n\n//# sourceURL=webpack:///./admin/scripts/gallery/index.js?");

/***/ }),

/***/ "./admin/scripts/gallery/overlayImages.js":
/*!************************************************!*\
  !*** ./admin/scripts/gallery/overlayImages.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./admin/scripts/gallery/helpers.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($, modal) {\n  var showImagesModal = function showImagesModal(onSave) {\n    var images = {};\n    var modalContent = $(\"\\n\\t\\t\\t\\t<div class=\\\"pms-content-wrapper\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"topbar\\\">\\n\\t\\t\\t\\t\\t\\t<h3>Selecione as imagens:</h3>\\n\\t\\t\\t\\t\\t\\t<p><small>Thumbnail \\xE9 a imagem pequena com o material. A imagem grande que sobrep\\xF5e a base na galeria \\xE9 o bot\\xE3o \\\"Escolher Imagem\\\"</small></p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\\"images-wrapper\\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\\"thumbnail\\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\\"\\\" alt=\\\"\\\">\\n\\t\\t\\t\\t\\t\\t\\t<button class=\\\"button add-thumbnail\\\">Escolher Thumbnail</button>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"image\\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\\"\\\" alt=\\\"\\\">\\n\\t\\t\\t\\t\\t\\t\\t<button class=\\\"button add-image\\\">Escolher Imagem</button>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\\"options\\\">\\n\\t\\t\\t\\t\\t\\t<button class=\\\"button cancel\\\">Cancelar</button>\\n\\t\\t\\t\\t\\t\\t<button class=\\\"button accept\\\">Salvar</button>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\");\n    modalContent.find('button').on('click', function (e) {\n      return e.preventDefault();\n    });\n    modalContent.find('.add-image').on('click',\n    /*#__PURE__*/\n    _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var attachment;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getImageFromMedia\"])();\n\n            case 2:\n              attachment = _context.sent;\n              images.name = attachment.title;\n              modalContent.find('.image img').attr('src', attachment.url);\n              images.image = attachment;\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n    modalContent.find('.add-thumbnail').on('click',\n    /*#__PURE__*/\n    _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2() {\n      var attachment;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getImageFromMedia\"])();\n\n            case 2:\n              attachment = _context2.sent;\n              modalContent.find('.thumbnail img').attr('src', attachment.url);\n              images.thumbnail = attachment;\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    })));\n    modalContent.find('.accept').on('click', function () {\n      return onSave(images);\n    });\n    modalContent.find('.cancel').on('click', function () {\n      modal.closeModal();\n    });\n    return modalContent;\n  };\n\n  var addImage = function addImage(cat, images) {\n    var img = $(\"\\n\\t\\t\\t<div class=\\\"image\\\">\\n\\t\\t\\t\\t<div class=\\\"title\\\">\\n\\t\\t\\t\\t\\t<span><b>\".concat(images.name, \"</b></span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\\"thumbnail-wrapper\\\">\\n\\t\\t\\t\\t\\t<img src=\\\"\").concat(images.thumbnail.url, \"\\\" alt=\\\"\\\">\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\\"image-wrapper\\\">\\n\\t\\t\\t\\t\\t<img src=\\\"\").concat(images.image.url, \"\\\" alt=\\\"\\\">\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"images-name[]\\\" value=\\\"\").concat(images.name, \"\\\">\\n\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"images-src[]\\\" value=\\\"\").concat(images.image.url, \"\\\">\\n\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"images-category[]\\\" value=\\\"\").concat(cat, \"\\\">\\n\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"images-thumbnail[]\\\" value=\\\"\").concat(images.thumbnail.url, \"\\\">\\t\\t\\t\\t\\n\\t\\t\\t\\t<button class=\\\"remove-item\\\">\\n\\t\\t\\t\\t\\t<span class=\\\"dashicons dashicons-trash\\\"></span>\\n\\t\\t\\t\\t</button>\\t\\t\\t\\n\\t\\t\\t</div>\\n\\t\\t\"));\n    $(\".cat-\".concat(cat, \" .content .images > p\")).remove();\n    $(\".cat-\".concat(cat, \" .content .images\")).append(img);\n  };\n\n  $('.categories').on('click', '.images .remove-item', function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    $(this).parent().remove();\n  });\n  $('.categories').on('click', '.add-image', function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var cat = $(this).data('cat');\n    modal.openModal(showImagesModal(function (images) {\n      modal.closeModal();\n      addImage(cat, images);\n    }));\n  });\n});\n\n//# sourceURL=webpack:///./admin/scripts/gallery/overlayImages.js?");

/***/ }),

/***/ "./admin/scripts/index.js":
/*!********************************!*\
  !*** ./admin/scripts/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./admin/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"./admin/scripts/options.js\");\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ \"./admin/scripts/gallery/index.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./admin/scripts/modal.js\");\n\n\n\n\njQuery(document).ready(function ($) {\n  var Modal = Object(_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($);\n  window[_modal__WEBPACK_IMPORTED_MODULE_3__[\"modal\"]] = new Modal();\n  Object(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($);\n  Object(_options__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($);\n});\n\n//# sourceURL=webpack:///./admin/scripts/index.js?");

/***/ }),

/***/ "./admin/scripts/modal.js":
/*!********************************!*\
  !*** ./admin/scripts/modal.js ***!
  \********************************/
/*! exports provided: modal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal\", function() { return modal; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar modal = Symbol();\n/* harmony default export */ __webpack_exports__[\"default\"] = (function ($) {\n  return (\n    /*#__PURE__*/\n    function () {\n      function Modal() {\n        var _this = this;\n\n        _classCallCheck(this, Modal);\n\n        this.modal = $(\"\\n\\t\\t\\t\\t<div class=\\\"pms-modal hidden\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"overlay\\\">\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\\"content\\\">\\n\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\");\n        $(this.modal.children()[0]).on('click', function () {\n          return _this.closeModal();\n        });\n        $('body').append(this.modal);\n      }\n\n      _createClass(Modal, [{\n        key: \"openModal\",\n        value: function openModal(content) {\n          console.log(this.modal.children());\n\n          if (content) {\n            $(this.modal.children()[1]).html(content);\n          }\n\n          this.modal.removeClass('hidden');\n          $('body').addClass('modal-open');\n        }\n      }, {\n        key: \"closeModal\",\n        value: function closeModal() {\n          this.modal.addClass('hidden');\n          $('body').removeClass('modal-open');\n        }\n      }]);\n\n      return Modal;\n    }()\n  );\n});\n\n//# sourceURL=webpack:///./admin/scripts/modal.js?");

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