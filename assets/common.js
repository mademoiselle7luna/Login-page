/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mobile-nav.js":
/*!******************************!*\
  !*** ./src/js/mobile-nav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Navigation = /*#__PURE__*/_createClass(function Navigation() {
  var _this = this;

  _classCallCheck(this, Navigation);

  _defineProperty(this, "toggleMenu", function () {
    if ('none' === _this.navContainer.css('display')) {
      _this.navContainer.css('display', 'flex');

      setTimeout(function () {
        _this.toggleMenuCommon();
      }, 100);
    } else {
      _this.toggleMenuCommon();

      setTimeout(function () {
        _this.navContainer.css('display', 'none');
      }, 500);
    }
  });

  _defineProperty(this, "toggleMenuCommon", function () {
    _this.navContainer.toggleClass('nav--active');

    _this.body.toggleClass('overflow-hidden');

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav__button').toggleClass('nav__button--active');
  });

  this.body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  this.navContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navContainer');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navOpenMenu').on('click', this.toggleMenu);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navCloseMenu').on('click', this.toggleMenu);
});

new Navigation();

/***/ }),

/***/ "./src/js/pagination-infinite-scroll.js":
/*!**********************************************!*\
  !*** ./src/js/pagination-infinite-scroll.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var paginationInfiniteScroll = /*#__PURE__*/_createClass(function paginationInfiniteScroll() {
  var _this = this;

  _classCallCheck(this, paginationInfiniteScroll);

  _defineProperty(this, "checkScrollPosition", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() > _this.loadMoreDOM.offset().top - 800) {
      if (!_this.isLoading && parseInt(websiteData.max_page) > parseInt(websiteData.currentPage)) {
        _this.isLoading = true;

        _this.loadMore();
      }
    }
  });

  _defineProperty(this, "checkStatus", function () {
    if (parseInt(websiteData.max_page) === parseInt(websiteData.currentPage)) {
      _this.loadMoreDOM.remove();
    }

    _this.isLoading = false;
  });

  _defineProperty(this, "loadMore", function () {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: websiteData.ajaxUrl,
      method: 'GET',
      accepts: {
        'Content-Type': 'application/json'
      },
      data: {
        action: 'load_more_posts',
        nonce: websiteData.nonce,
        currentPage: websiteData.currentPage,
        queryVars: websiteData.queryVars
      },
      success: function success(res) {
        if (res.success) {
          _this.loadMoreDOM.before(res.data);

          websiteData.currentPage = parseInt(websiteData.currentPage) + 1;
        }
      },
      complete: _this.checkStatus
    });
  });

  this.isLoading = false;
  this.loadMoreDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loadMorePostsTrigger');
  this.checkStatus();

  if (0 < this.loadMoreDOM.length) {
    // event triggered when user is close to the pagination section
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(this.checkScrollPosition);
  }
});

new paginationInfiniteScroll();

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _js_mobile_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobile-nav */ "./src/js/mobile-nav.js");
/* harmony import */ var _js_pagination_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pagination-infinite-scroll */ "./src/js/pagination-infinite-scroll.js");
// import styles
 // import JS files



document.addEventListener('DOMContentLoaded', function () {
  window.onload = function () {
    window.requestAnimationFrame(function () {
      document.querySelector('body').style.opacity = '1';
    });
  };
});
})();

/******/ })()
;
//# sourceMappingURL=common.js.map