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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.social = [{
  url: "//www.facebook.com/daisho.komiyama",
  fileName: "icon-fb.svg",
  name: "facebook"
}, {
  url: "//www.linkedin.com/in/daisho-komiyama-6766657a?trk=nav_responsive_tab_profile_pic",
  fileName: "icon-linkedin.svg",
  name: "linkedin"
}, {
  url: "//github.com/kdaisho",
  fileName: "github.svg",
  name: "github"
}];
exports.navItems = [{
  url: "https://github.com/kdaisho/Blog/wiki",
  fileName: "icon-blog-opt.svg",
  target: "_blank",
  name: "BLOG"
}, {
  url: "#about",
  fileName: "icon-about-opt.svg",
  className: "link",
  name: "ABOUT"
}, {
  url: "#work",
  fileName: "icon-work-opt.svg",
  className: "link",
  name: "PROJECTS"
}, {
  url: "#contact",
  fileName: "icon-contact-opt.svg",
  className: "link",
  name: "CONTACT"
}];
exports.cards = [{
  institution: "treehouse",
  period: "2015 - 2017",
  url: "treehouse",
  title: "Web Development",
  location: "Online",
  description: "PHP, JavaScript, Angular.js, CSS3 animations, CSS3 flexbox; etc."
}, {
  institution: "herzing",
  period: "2013 - 2014",
  url: "herzing-college",
  title: "Graphic Design for Websites",
  location: "Montreal",
  description: "Photoshop, Illustrator, HTML5, CSS3, JavaScript, Responsive layout; etc."
}, {
  institution: "sdf",
  period: "Apr - Oct 2008",
  url: "sdf",
  title: "Advance Officer's Course",
  location: "Shizuoka, Japan",
  description: "Army doctrine / tactics; offensive, defensive and maneuver companies / battalions; etc."
}, {
  institution: "hokkai",
  period: "1996 - 2000",
  url: "hokkai",
  title: "Bachelor of Laws",
  location: "Sapporo, Japan",
  description: "Legal method and procedures, Criminal law, Administrative law, Law of property; etc."
}];
exports.skills = [{
  url: "js",
  alt: "JavaScript",
  skill: "js",
  eh: "eh",
  okay: "okay",
  good: "good",
  ninja: "ninja"
}, {
  url: "html5",
  alt: "HTML",
  skill: "htm"
}, {
  url: "css3",
  alt: "CSS",
  skill: "css"
}, {
  url: "php",
  alt: "PHP",
  skill: "php"
}, {
  url: "angular",
  alt: "Angular",
  skill: "angular"
}, {
  url: "ps",
  alt: "Photoshop",
  skill: " ps"
}, {
  url: "git",
  alt: "Git",
  skill: "git"
}, {
  url: "nginx",
  alt: "Nginx",
  skill: "nginx"
}];
exports.works = [{
  url: "work-sound-kit.jpg",
  alt: "Japan Sound Kit",
  title: "Drum Kit",
  desc: "Japan Sound Kit",
  pos: 12
}, {
  url: "work-flappy-box.jpg",
  alt: "Flappy Box",
  title: "Simple Game",
  desc: "Popular Game Clone using Phaser",
  pos: 11
}, {
  url: "work-infographic-suicide.jpg",
  alt: "Infographic",
  title: "Infographic",
  desc: "Suicide in Japan",
  pos: 10
}, {
  url: "work-stashash.jpg",
  alt: "StasHash",
  title: "StasHash",
  desc: "Private Hash Generator",
  pos: 9
}, {
  url: "work-pipe-game.jpg",
  alt: "Pipe game",
  title: "Pipe Game",
  desc: "Super Casual Game",
  pos: 8
}, {
  url: "work-canvas-game-phaser.jpg",
  alt: "Breakout Game with Phaser2",
  title: "Canvas Game",
  desc: "Breakout with Phaser",
  pos: 7
}, {
  url: "work-canvas-game.jpg",
  alt: "Breakout Game",
  title: "Canvas Game",
  desc: "Breakout",
  pos: 6
}, {
  url: "work-mybrailler.gif",
  alt: "My Brailler",
  title: "Application",
  desc: "Electronic Brailler",
  pos: 5
}, {
  url: "work-email-builder.gif",
  alt: "Email Builder",
  title: "Application",
  desc: "Email Builder",
  pos: 4
}, {
  url: "work-french-formatter.gif",
  alt: "French formatter",
  title: "Helper Tool",
  desc: "Non-Braking Injector",
  pos: 3
}, {
  url: "work-quebec3.gif",
  alt: "Quebec3",
  title: "CMS",
  desc: "Blogging Platform",
  pos: 2
}, {
  url: "work-countdown.gif",
  alt: "Countdown timer",
  title: "Micro Widget",
  desc: "Countdown Timer",
  pos: 1
}, {
  url: "work-navy-css-grid.jpg",
  alt: "Navy CSS Grid",
  title: "CSS Grid",
  desc: "Navy Vessels",
  pos: 0
}];
exports.bigsrc = [{
  url: "pan-navy-css-grid.jpg",
  id: 0,
  title: "Royal Canadian Navy Vessels",
  desc: "Navy vessels catalog using CSS&nbsp;grid",
  link: "//daishodesign.com/sites/navy/"
}, {
  url: "pan-countdown.gif",
  id: 1,
  title: "Countdown Timer",
  desc: "Micro widget with JavaScript",
  link: "//github.com/kdaisho/Countdown"
}, {
  url: "pan-quebec3.jpg",
  id: 2,
  title: "Quebec3",
  desc: "CMS with Laravel",
  link: "https://quebec3.com"
}, {
  url: "pan-french-formatter.gif",
  id: 3,
  title: "French Formatter",
  desc: "Non-braking space injector tool with JavaScript",
  link: "//daishodesign.com/sites/formatter/"
}, {
  url: "pan-email-builder.jpg",
  id: 4,
  title: "Email Builder3",
  desc: "Email building tool with Angular4",
  link: ""
}, {
  url: "pan-mybrailler.gif",
  id: 5,
  title: "My Brailler",
  desc: "Braille typewriting practice site with Angular4",
  link: "//mybrailler.com"
}, {
  url: "pan-canvas-game.jpg",
  id: 6,
  title: "HTML Canvas Game",
  desc: "HTML Canvas Game with Pure JavaScript",
  link: "//daishodesign.com/sites/breakout/"
}, {
  url: "pan-canvas-game-phaser.jpg",
  id: 7,
  title: "HTML Canvas Game",
  desc: "HTML Canvas Game with Phaser2",
  link: "//daishodesign.com/sites/breakout-phaser/"
}, {
  url: "pan-pipe-game.jpg",
  id: 8,
  title: "Super Casual Game",
  desc: "'Building game within 2 hours' project"
}, {
  url: "pan-stashash.jpg",
  id: 9,
  title: "StasHash",
  desc: "Private Hash Generator",
  link: "//daishodesign.com/sites/stashash/#/list"
}, {
  url: "pan-infographic-suicide.jpg",
  id: 10,
  title: "CSS Grid Infographic",
  desc: "Infographic using CSS Grid",
  link: "//daishodesign.com/sites/infographic"
}, {
  url: "pan-flappy-box.jpg",
  id: 11,
  title: "Flappy Box",
  desc: "Flappy Bird clone using Phaser",
  link: "//daishodesign.com/sites/flappy-box"
}, {
  url: "pan-sound-kit.jpg",
  id: 12,
  title: "Japan Sound Kit",
  desc: "Drun kit with Japan sound using native JS",
  link: "//daishodesign.com/sites/sound-kit"
}];

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./public/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init */ "./public/js/modules/init.js");
/* harmony import */ var _modules_resizeLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/resizeLogo */ "./public/js/modules/resizeLogo.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navigation */ "./public/js/modules/navigation.js");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carousel */ "./public/js/modules/carousel.js");
/* harmony import */ var _modules_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/progressbar */ "./public/js/modules/progressbar.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/contact */ "./public/js/modules/contact.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_7__);








document.addEventListener("DOMContentLoaded", function () {
  Object(_modules_init__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_resizeLogo__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_navigation__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_carousel__WEBPACK_IMPORTED_MODULE_4__["default"])(_data__WEBPACK_IMPORTED_MODULE_7___default.a);
  Object(_modules_progressbar__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_contact__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./public/js/modules/carousel.js":
/*!***************************************!*\
  !*** ./public/js/modules/carousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var carousel = function carousel(data) {
  var thumbsParent = document.getElementById("wrap-thumbs");
  var galHolder = document.getElementById("gal_holder");
  var imgHolder = document.getElementById("img_holder");
  var descHolder = document.getElementById("desc_holder");
  var modalBg = document.getElementById("modal_bg");
  var closeBtn = document.getElementById("close_btn");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var bigsrc = data.bigsrc;

  var displaySlide = function displaySlide(event) {
    if (event.target !== event.currentTarget) {
      var pos = event.target.getAttribute("data-pos");
      injectElement(pos);
      galHolder.className = "is-active";
      modalBg.className = "is-active";
    }

    event.stopPropagation();
  };

  var injectElement = function injectElement(pos) {
    imgHolder.innerHTML = "<img id=\"data_img\" src=\"images/".concat(bigsrc[pos].url, "\" data-id=\"").concat(bigsrc[pos].id, "\">");
    descHolder.innerHTML = "<h4>".concat(bigsrc[pos].title, "</h4><p>").concat(bigsrc[pos].desc, "</p>");

    if (pos !== 4 && pos !== 8) {
      var anchor = document.createElement("a");
      anchor.href = bigsrc[pos].link;
      anchor.setAttribute("target", "_blank");
      anchor.innerHTML = "Visit website";
      descHolder.appendChild(anchor);
    }
  };

  var clickAction = function clickAction(fn) {
    return function () {
      var pos = document.getElementById("data_img").getAttribute("data-id");
      fn(pos);
    };
  };

  var forwards = function forwards(pos) {
    if (parseInt(pos) === 0) {
      pos = bigsrc.length - 1;
    } else {
      pos--;
    }

    injectElement(pos);
  };

  var backwards = function backwards(pos) {
    if (parseInt(pos) === bigsrc.length - 1) {
      pos = 0;
    } else {
      pos++;
    }

    injectElement(pos);
  };

  var closeCarousel = function closeCarousel() {
    var arr = [modalBg, closeBtn];

    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i].addEventListener("click", function () {
        galHolder.className = "";
        modalBg.className = "";
      }, false);
    }
  };

  thumbsParent.addEventListener("click", displaySlide, false);
  next.addEventListener("click", clickAction(forwards), false);
  prev.addEventListener("click", clickAction(backwards), false);
  closeCarousel();
};

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./public/js/modules/contact.js":
/*!**************************************!*\
  !*** ./public/js/modules/contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var contact = function contact() {
  var modalTrigger = document.getElementById("modal_trigger");
  var modalClose = document.getElementById("modal_close");
  var overlay = document.getElementById("modal-overlay");
  modalTrigger.addEventListener("click", function () {
    overlay.classList.add("modal-on");
    console.log("lanch");
  }, false);
  modalClose.addEventListener("click", function () {
    overlay.classList.remove("modal-on");
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (contact);

/***/ }),

/***/ "./public/js/modules/init.js":
/*!***********************************!*\
  !*** ./public/js/modules/init.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  document.documentElement.className += !("ontouchstart" in document.documentElement) ? "no-touch" : "";
};

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./public/js/modules/navigation.js":
/*!*****************************************!*\
  !*** ./public/js/modules/navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var navigation = function navigation() {
  var links = [].slice.call(document.getElementsByClassName("link"));
  var destLinks = [].slice.call(document.getElementsByClassName("dest-link"));

  var clickListener = function clickListener(link, i) {
    link.addEventListener("click", function () {
      return destLinks[i].scrollIntoView({
        behavior: "smooth"
      });
    }, false);
  };

  for (var i = 0, len = links.length; i < len; i++) {
    clickListener(links[i], i);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./public/js/modules/progressbar.js":
/*!******************************************!*\
  !*** ./public/js/modules/progressbar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var progressBar = function progressBar() {
  var target = document.getElementById("wrap_skill");

  var addClassName = function addClassName() {
    if (target.getBoundingClientRect().top + 100 <= window.innerHeight) {
      target.classList.add("grow-bar");
      document.removeEventListener("scroll", addClassName);
    }
  };

  document.addEventListener("scroll", addClassName, {
    passive: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (progressBar);

/***/ }),

/***/ "./public/js/modules/resizeLogo.js":
/*!*****************************************!*\
  !*** ./public/js/modules/resizeLogo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resizeLogo = function resizeLogo() {
  var windowSize;
  var scrollAmount;
  var siteLogo = document.getElementById("site_logo");
  var mainMenu = document.getElementById("main_menu");
  var nav = document.getElementById("nav");
  var closeNav = document.getElementById("close_nav");

  var addListenerMulti = function addListenerMulti(element, events, fn) {
    var list = events.split(" ");

    for (var i = 0, len = list.length; i < len; i++) {
      element.addEventListener(list[i], fn, false);
    }
  };

  addListenerMulti(window, "load resize scroll", function () {
    windowSize = window.innerWidth;
    scrollAmount = window.pageYOffset;

    if (siteLogo && windowSize && scrollAmount) {
      scrollAmount >= 199 || windowSize <= 767 ? siteLogo.classList.add("mini-logo") : siteLogo.classList.remove("mini-logo");
    }
  });
  mainMenu.addEventListener("click", function () {
    nav.style.right = 0;
  });
  closeNav.addEventListener("click", function () {
    nav.style.right = "-320px";
  });
};

/* harmony default export */ __webpack_exports__["default"] = (resizeLogo);

/***/ }),

/***/ "./public/sass/style.scss":
/*!********************************!*\
  !*** ./public/sass/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map