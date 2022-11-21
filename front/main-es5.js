(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@angular-builders/custom-webpack/node_modules/webpack/buildin/global.js":
    /*!***********************************!*\
      !*** (webpack)/buildin/global.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function node_modulesAngularBuildersCustomWebpackNode_modulesWebpackBuildinGlobalJs(module, exports) {
      var g; // This works in non-strict mode

      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      } // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}


      module.exports = g;
      /***/
    },

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
      var map = {
        "./af": "./node_modules/moment/locale/af.js",
        "./af.js": "./node_modules/moment/locale/af.js",
        "./ar": "./node_modules/moment/locale/ar.js",
        "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
        "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
        "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
        "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
        "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
        "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
        "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
        "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
        "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
        "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
        "./ar.js": "./node_modules/moment/locale/ar.js",
        "./az": "./node_modules/moment/locale/az.js",
        "./az.js": "./node_modules/moment/locale/az.js",
        "./be": "./node_modules/moment/locale/be.js",
        "./be.js": "./node_modules/moment/locale/be.js",
        "./bg": "./node_modules/moment/locale/bg.js",
        "./bg.js": "./node_modules/moment/locale/bg.js",
        "./bm": "./node_modules/moment/locale/bm.js",
        "./bm.js": "./node_modules/moment/locale/bm.js",
        "./bn": "./node_modules/moment/locale/bn.js",
        "./bn.js": "./node_modules/moment/locale/bn.js",
        "./bo": "./node_modules/moment/locale/bo.js",
        "./bo.js": "./node_modules/moment/locale/bo.js",
        "./br": "./node_modules/moment/locale/br.js",
        "./br.js": "./node_modules/moment/locale/br.js",
        "./bs": "./node_modules/moment/locale/bs.js",
        "./bs.js": "./node_modules/moment/locale/bs.js",
        "./ca": "./node_modules/moment/locale/ca.js",
        "./ca.js": "./node_modules/moment/locale/ca.js",
        "./cs": "./node_modules/moment/locale/cs.js",
        "./cs.js": "./node_modules/moment/locale/cs.js",
        "./cv": "./node_modules/moment/locale/cv.js",
        "./cv.js": "./node_modules/moment/locale/cv.js",
        "./cy": "./node_modules/moment/locale/cy.js",
        "./cy.js": "./node_modules/moment/locale/cy.js",
        "./da": "./node_modules/moment/locale/da.js",
        "./da.js": "./node_modules/moment/locale/da.js",
        "./de": "./node_modules/moment/locale/de.js",
        "./de-at": "./node_modules/moment/locale/de-at.js",
        "./de-at.js": "./node_modules/moment/locale/de-at.js",
        "./de-ch": "./node_modules/moment/locale/de-ch.js",
        "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
        "./de.js": "./node_modules/moment/locale/de.js",
        "./dv": "./node_modules/moment/locale/dv.js",
        "./dv.js": "./node_modules/moment/locale/dv.js",
        "./el": "./node_modules/moment/locale/el.js",
        "./el.js": "./node_modules/moment/locale/el.js",
        "./en-au": "./node_modules/moment/locale/en-au.js",
        "./en-au.js": "./node_modules/moment/locale/en-au.js",
        "./en-ca": "./node_modules/moment/locale/en-ca.js",
        "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
        "./en-gb": "./node_modules/moment/locale/en-gb.js",
        "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
        "./en-ie": "./node_modules/moment/locale/en-ie.js",
        "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
        "./en-il": "./node_modules/moment/locale/en-il.js",
        "./en-il.js": "./node_modules/moment/locale/en-il.js",
        "./en-in": "./node_modules/moment/locale/en-in.js",
        "./en-in.js": "./node_modules/moment/locale/en-in.js",
        "./en-nz": "./node_modules/moment/locale/en-nz.js",
        "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
        "./en-sg": "./node_modules/moment/locale/en-sg.js",
        "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
        "./eo": "./node_modules/moment/locale/eo.js",
        "./eo.js": "./node_modules/moment/locale/eo.js",
        "./es": "./node_modules/moment/locale/es.js",
        "./es-do": "./node_modules/moment/locale/es-do.js",
        "./es-do.js": "./node_modules/moment/locale/es-do.js",
        "./es-us": "./node_modules/moment/locale/es-us.js",
        "./es-us.js": "./node_modules/moment/locale/es-us.js",
        "./es.js": "./node_modules/moment/locale/es.js",
        "./et": "./node_modules/moment/locale/et.js",
        "./et.js": "./node_modules/moment/locale/et.js",
        "./eu": "./node_modules/moment/locale/eu.js",
        "./eu.js": "./node_modules/moment/locale/eu.js",
        "./fa": "./node_modules/moment/locale/fa.js",
        "./fa.js": "./node_modules/moment/locale/fa.js",
        "./fi": "./node_modules/moment/locale/fi.js",
        "./fi.js": "./node_modules/moment/locale/fi.js",
        "./fil": "./node_modules/moment/locale/fil.js",
        "./fil.js": "./node_modules/moment/locale/fil.js",
        "./fo": "./node_modules/moment/locale/fo.js",
        "./fo.js": "./node_modules/moment/locale/fo.js",
        "./fr": "./node_modules/moment/locale/fr.js",
        "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
        "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
        "./fr.js": "./node_modules/moment/locale/fr.js",
        "./fy": "./node_modules/moment/locale/fy.js",
        "./fy.js": "./node_modules/moment/locale/fy.js",
        "./ga": "./node_modules/moment/locale/ga.js",
        "./ga.js": "./node_modules/moment/locale/ga.js",
        "./gd": "./node_modules/moment/locale/gd.js",
        "./gd.js": "./node_modules/moment/locale/gd.js",
        "./gl": "./node_modules/moment/locale/gl.js",
        "./gl.js": "./node_modules/moment/locale/gl.js",
        "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
        "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
        "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
        "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
        "./gu": "./node_modules/moment/locale/gu.js",
        "./gu.js": "./node_modules/moment/locale/gu.js",
        "./he": "./node_modules/moment/locale/he.js",
        "./he.js": "./node_modules/moment/locale/he.js",
        "./hi": "./node_modules/moment/locale/hi.js",
        "./hi.js": "./node_modules/moment/locale/hi.js",
        "./hr": "./node_modules/moment/locale/hr.js",
        "./hr.js": "./node_modules/moment/locale/hr.js",
        "./hu": "./node_modules/moment/locale/hu.js",
        "./hu.js": "./node_modules/moment/locale/hu.js",
        "./hy-am": "./node_modules/moment/locale/hy-am.js",
        "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
        "./id": "./node_modules/moment/locale/id.js",
        "./id.js": "./node_modules/moment/locale/id.js",
        "./is": "./node_modules/moment/locale/is.js",
        "./is.js": "./node_modules/moment/locale/is.js",
        "./it": "./node_modules/moment/locale/it.js",
        "./it-ch": "./node_modules/moment/locale/it-ch.js",
        "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
        "./it.js": "./node_modules/moment/locale/it.js",
        "./ja": "./node_modules/moment/locale/ja.js",
        "./ja.js": "./node_modules/moment/locale/ja.js",
        "./jv": "./node_modules/moment/locale/jv.js",
        "./jv.js": "./node_modules/moment/locale/jv.js",
        "./ka": "./node_modules/moment/locale/ka.js",
        "./ka.js": "./node_modules/moment/locale/ka.js",
        "./kk": "./node_modules/moment/locale/kk.js",
        "./kk.js": "./node_modules/moment/locale/kk.js",
        "./km": "./node_modules/moment/locale/km.js",
        "./km.js": "./node_modules/moment/locale/km.js",
        "./kn": "./node_modules/moment/locale/kn.js",
        "./kn.js": "./node_modules/moment/locale/kn.js",
        "./ko": "./node_modules/moment/locale/ko.js",
        "./ko.js": "./node_modules/moment/locale/ko.js",
        "./ku": "./node_modules/moment/locale/ku.js",
        "./ku.js": "./node_modules/moment/locale/ku.js",
        "./ky": "./node_modules/moment/locale/ky.js",
        "./ky.js": "./node_modules/moment/locale/ky.js",
        "./lb": "./node_modules/moment/locale/lb.js",
        "./lb.js": "./node_modules/moment/locale/lb.js",
        "./lo": "./node_modules/moment/locale/lo.js",
        "./lo.js": "./node_modules/moment/locale/lo.js",
        "./lt": "./node_modules/moment/locale/lt.js",
        "./lt.js": "./node_modules/moment/locale/lt.js",
        "./lv": "./node_modules/moment/locale/lv.js",
        "./lv.js": "./node_modules/moment/locale/lv.js",
        "./me": "./node_modules/moment/locale/me.js",
        "./me.js": "./node_modules/moment/locale/me.js",
        "./mi": "./node_modules/moment/locale/mi.js",
        "./mi.js": "./node_modules/moment/locale/mi.js",
        "./mk": "./node_modules/moment/locale/mk.js",
        "./mk.js": "./node_modules/moment/locale/mk.js",
        "./ml": "./node_modules/moment/locale/ml.js",
        "./ml.js": "./node_modules/moment/locale/ml.js",
        "./mn": "./node_modules/moment/locale/mn.js",
        "./mn.js": "./node_modules/moment/locale/mn.js",
        "./mr": "./node_modules/moment/locale/mr.js",
        "./mr.js": "./node_modules/moment/locale/mr.js",
        "./ms": "./node_modules/moment/locale/ms.js",
        "./ms-my": "./node_modules/moment/locale/ms-my.js",
        "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
        "./ms.js": "./node_modules/moment/locale/ms.js",
        "./mt": "./node_modules/moment/locale/mt.js",
        "./mt.js": "./node_modules/moment/locale/mt.js",
        "./my": "./node_modules/moment/locale/my.js",
        "./my.js": "./node_modules/moment/locale/my.js",
        "./nb": "./node_modules/moment/locale/nb.js",
        "./nb.js": "./node_modules/moment/locale/nb.js",
        "./ne": "./node_modules/moment/locale/ne.js",
        "./ne.js": "./node_modules/moment/locale/ne.js",
        "./nl": "./node_modules/moment/locale/nl.js",
        "./nl-be": "./node_modules/moment/locale/nl-be.js",
        "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
        "./nl.js": "./node_modules/moment/locale/nl.js",
        "./nn": "./node_modules/moment/locale/nn.js",
        "./nn.js": "./node_modules/moment/locale/nn.js",
        "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
        "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
        "./pa-in": "./node_modules/moment/locale/pa-in.js",
        "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
        "./pl": "./node_modules/moment/locale/pl.js",
        "./pl.js": "./node_modules/moment/locale/pl.js",
        "./pt": "./node_modules/moment/locale/pt.js",
        "./pt-br": "./node_modules/moment/locale/pt-br.js",
        "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
        "./pt.js": "./node_modules/moment/locale/pt.js",
        "./ro": "./node_modules/moment/locale/ro.js",
        "./ro.js": "./node_modules/moment/locale/ro.js",
        "./ru": "./node_modules/moment/locale/ru.js",
        "./ru.js": "./node_modules/moment/locale/ru.js",
        "./sd": "./node_modules/moment/locale/sd.js",
        "./sd.js": "./node_modules/moment/locale/sd.js",
        "./se": "./node_modules/moment/locale/se.js",
        "./se.js": "./node_modules/moment/locale/se.js",
        "./si": "./node_modules/moment/locale/si.js",
        "./si.js": "./node_modules/moment/locale/si.js",
        "./sk": "./node_modules/moment/locale/sk.js",
        "./sk.js": "./node_modules/moment/locale/sk.js",
        "./sl": "./node_modules/moment/locale/sl.js",
        "./sl.js": "./node_modules/moment/locale/sl.js",
        "./sq": "./node_modules/moment/locale/sq.js",
        "./sq.js": "./node_modules/moment/locale/sq.js",
        "./sr": "./node_modules/moment/locale/sr.js",
        "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr.js": "./node_modules/moment/locale/sr.js",
        "./ss": "./node_modules/moment/locale/ss.js",
        "./ss.js": "./node_modules/moment/locale/ss.js",
        "./sv": "./node_modules/moment/locale/sv.js",
        "./sv.js": "./node_modules/moment/locale/sv.js",
        "./sw": "./node_modules/moment/locale/sw.js",
        "./sw.js": "./node_modules/moment/locale/sw.js",
        "./ta": "./node_modules/moment/locale/ta.js",
        "./ta.js": "./node_modules/moment/locale/ta.js",
        "./te": "./node_modules/moment/locale/te.js",
        "./te.js": "./node_modules/moment/locale/te.js",
        "./tet": "./node_modules/moment/locale/tet.js",
        "./tet.js": "./node_modules/moment/locale/tet.js",
        "./tg": "./node_modules/moment/locale/tg.js",
        "./tg.js": "./node_modules/moment/locale/tg.js",
        "./th": "./node_modules/moment/locale/th.js",
        "./th.js": "./node_modules/moment/locale/th.js",
        "./tk": "./node_modules/moment/locale/tk.js",
        "./tk.js": "./node_modules/moment/locale/tk.js",
        "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
        "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
        "./tlh": "./node_modules/moment/locale/tlh.js",
        "./tlh.js": "./node_modules/moment/locale/tlh.js",
        "./tr": "./node_modules/moment/locale/tr.js",
        "./tr.js": "./node_modules/moment/locale/tr.js",
        "./tzl": "./node_modules/moment/locale/tzl.js",
        "./tzl.js": "./node_modules/moment/locale/tzl.js",
        "./tzm": "./node_modules/moment/locale/tzm.js",
        "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm.js": "./node_modules/moment/locale/tzm.js",
        "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
        "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
        "./uk": "./node_modules/moment/locale/uk.js",
        "./uk.js": "./node_modules/moment/locale/uk.js",
        "./ur": "./node_modules/moment/locale/ur.js",
        "./ur.js": "./node_modules/moment/locale/ur.js",
        "./uz": "./node_modules/moment/locale/uz.js",
        "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
        "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
        "./uz.js": "./node_modules/moment/locale/uz.js",
        "./vi": "./node_modules/moment/locale/vi.js",
        "./vi.js": "./node_modules/moment/locale/vi.js",
        "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
        "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
        "./yo": "./node_modules/moment/locale/yo.js",
        "./yo.js": "./node_modules/moment/locale/yo.js",
        "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
        "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
        "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
        "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
        "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
        "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
        "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
        "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
      /***/
    },

    /***/
    "./src/@vex/animations/dropdown.animation.ts":
    /*!***************************************************!*\
      !*** ./src/@vex/animations/dropdown.animation.ts ***!
      \***************************************************/

    /*! exports provided: dropdownAnimation */

    /***/
    function srcVexAnimationsDropdownAnimationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dropdownAnimation", function () {
        return dropdownAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var dropdownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dropdown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.35, 0, .25, 1)'))]);
      /***/
    },

    /***/
    "./src/@vex/animations/fade-in-up.animation.ts":
    /*!*****************************************************!*\
      !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
      \*****************************************************/

    /*! exports provided: fadeInUpAnimation, fadeInUp400ms */

    /***/
    function srcVexAnimationsFadeInUpAnimationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
        return fadeInUpAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () {
        return fadeInUp400ms;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      function fadeInUpAnimation(duration) {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(20px)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(0)',
          opacity: 1
        }))])]);
      }

      var fadeInUp400ms = fadeInUpAnimation(400);
      /***/
    },

    /***/
    "./src/@vex/animations/popover.animation.ts":
    /*!**************************************************!*\
      !*** ./src/@vex/animations/popover.animation.ts ***!
      \**************************************************/

    /*! exports provided: popoverAnimation */

    /***/
    function srcVexAnimationsPopoverAnimationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "popoverAnimation", function () {
        return popoverAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var popoverAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPopover', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0.6)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }))])]);
      /***/
    },

    /***/
    "./src/@vex/animations/stagger.animation.ts":
    /*!**************************************************!*\
      !*** ./src/@vex/animations/stagger.animation.ts ***!
      \**************************************************/

    /*! exports provided: staggerAnimation, stagger5000ms, stagger80ms, stagger60ms, stagger40ms, stagger20ms */

    /***/
    function srcVexAnimationsStaggerAnimationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () {
        return staggerAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stagger5000ms", function () {
        return stagger5000ms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stagger80ms", function () {
        return stagger80ms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stagger60ms", function () {
        return stagger60ms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stagger40ms", function () {
        return stagger40ms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stagger20ms", function () {
        return stagger20ms;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      function staggerAnimation(timing) {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('stagger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [// each time the binding value changes
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), {
          optional: true
        })])]);
      }

      var stagger5000ms = staggerAnimation(5000);
      var stagger80ms = staggerAnimation(80);
      var stagger60ms = staggerAnimation(60);
      var stagger40ms = staggerAnimation(40);
      var stagger20ms = staggerAnimation(20);
      /***/
    },

    /***/
    "./src/@vex/components/config-panel/color-variables.ts":
    /*!*************************************************************!*\
      !*** ./src/@vex/components/config-panel/color-variables.ts ***!
      \*************************************************************/

    /*! exports provided: colorVariables */

    /***/
    function srcVexComponentsConfigPanelColorVariablesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colorVariables", function () {
        return colorVariables;
      });

      var colorVariables = {
        blue: {
          light: 'rgba(92, 119, 255, .1)',
          "default": 'rgb(92, 119, 255)',
          contrast: 'rgb(255, 255, 255)'
        },
        gray: {
          light: 'rgba(158, 158, 158, 0.1)',
          "default": 'rgb(158, 158, 158)',
          contrast: 'rgb(255, 255, 255)'
        },
        red: {
          light: 'rgba(244, 67, 54, 0.1)',
          "default": 'rgb(244, 67, 54)',
          contrast: 'rgb(255, 255, 255)'
        },
        orange: {
          light: 'rgba(255, 152, 0, 0.1)',
          "default": 'rgb(255, 152, 0)',
          contrast: 'rgb(0, 0, 0)'
        },
        'deep-orange': {
          light: 'rgba(255, 87, 34, 0.1)',
          "default": 'rgb(255, 87, 34)',
          contrast: 'rgb(255, 255, 255)'
        },
        amber: {
          light: 'rgba(255, 193, 7, 0.1)',
          "default": 'rgb(255, 193, 7)',
          contrast: 'rgb(0, 0, 0)'
        },
        green: {
          light: 'rgba(76, 175, 80, 0.1)',
          "default": 'rgb(76, 175, 80)',
          contrast: 'rgb(255, 255, 255)'
        },
        teal: {
          light: 'rgba(0, 150, 136, 0.1)',
          "default": 'rgb(0, 150, 136)',
          contrast: 'rgb(255, 255, 255)'
        },
        cyan: {
          light: 'rgba(0, 188, 212, 0.1)',
          "default": 'rgb(0, 188, 212)',
          contrast: 'rgb(255, 255, 255)'
        },
        purple: {
          light: 'rgba(156, 39, 176, 0.1)',
          "default": 'rgb(156, 39, 176)',
          contrast: 'rgb(255, 255, 255)'
        },
        'deep-purple': {
          light: 'rgba(103, 58, 183, 0.1)',
          "default": 'rgb(103, 58, 183)',
          contrast: 'rgb(255, 255, 255)'
        },
        pink: {
          light: 'rgba(233, 30, 99, 0.1)',
          "default": 'rgb(233, 30, 99)',
          contrast: 'rgb(255, 255, 255)'
        }
      };
      /***/
    },

    /***/
    "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ConfigPanelToggleComponent */

    /***/
    function srcVexComponentsConfigPanelConfigPanelToggleConfigPanelToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigPanelToggleComponent", function () {
        return ConfigPanelToggleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ConfigPanelToggleComponent = /*@__PURE__*/function () {
        var ConfigPanelToggleComponent = /*#__PURE__*/function () {
          function ConfigPanelToggleComponent() {
            _classCallCheck(this, ConfigPanelToggleComponent);

            this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1___default.a;
          }

          _createClass(ConfigPanelToggleComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ConfigPanelToggleComponent;
        }();

        ConfigPanelToggleComponent.ɵfac = function ConfigPanelToggleComponent_Factory(t) {
          return new (t || ConfigPanelToggleComponent)();
        };

        ConfigPanelToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ConfigPanelToggleComponent,
          selectors: [["vex-config-panel-toggle"]],
          outputs: {
            openConfig: "openConfig"
          },
          decls: 2,
          vars: 1,
          consts: [["color", "primary", "mat-fab", "", "type", "button", 1, "config-panel-toggle", 3, "click"], [3, "icIcon"]],
          template: function ConfigPanelToggleComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelToggleComponent_Template_button_click_0_listener() {
                return ctx.openConfig.emit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSettings);
            }
          },
          directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconDirective"]],
          styles: [".config-panel-toggle[_ngcontent-%COMP%] {\n  bottom: var(--padding);\n  position: fixed;\n  right: var(--padding);\n  z-index: 100;\n}\n\n  [dir=rtl] .config-panel-toggle {\n  left: var(--padding);\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC10b2dnbGUvY29uZmlnLXBhbmVsLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9jb25maWctcGFuZWwvY29uZmlnLXBhbmVsLXRvZ2dsZS9jb25maWctcGFuZWwtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbC10b2dnbGUge1xuICBib3R0b206IHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgei1pbmRleDogMTAwO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHJpZ2h0OiB1bnNldDtcbn0iXX0= */"]
        });
        return ConfigPanelToggleComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/config-panel/config-panel.component.ts":
    /*!********************************************************************!*\
      !*** ./src/@vex/components/config-panel/config-panel.component.ts ***!
      \********************************************************************/

    /*! exports provided: ConfigPanelComponent */

    /***/
    function srcVexComponentsConfigPanelConfigPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigPanelComponent", function () {
        return ConfigPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-check */
      "./node_modules/@iconify/icons-ic/twotone-check.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/style.service */
      "./src/@vex/services/style.service.ts");
      /* harmony import */


      var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../interfaces/config-name.model */
      "./src/@vex/interfaces/config-name.model.ts");
      /* harmony import */


      var _color_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./color-variables */
      "./src/@vex/components/config-panel/color-variables.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-close */
      "./node_modules/@iconify/icons-ic/twotone-close.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function ConfigPanelComponent_div_0_div_8_ic_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 18);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.icCheck);
        }
      }

      function ConfigPanelComponent_div_0_div_8_ic_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 18);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.icClose);
        }
      }

      function ConfigPanelComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_8_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var selectedStyle_r5 = ctx.ngIf;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return selectedStyle_r5 === ctx_r8.Style.dark ? ctx_r8.disableDarkMode() : ctx_r8.enableDarkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_8_ic_icon_2_Template, 1, 1, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigPanelComponent_div_0_div_8_ic_icon_3_Template, 1, 1, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DARK MODE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selectedStyle_r5 = ctx.ngIf;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedStyle_r5 === ctx_r2.Style.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedStyle_r5 !== ctx_r2.Style.dark);
        }
      }

      function ConfigPanelComponent_div_0_div_13_ic_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 18);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.icCheck);
        }
      }

      function ConfigPanelComponent_div_0_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_13_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var color_r10 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.selectColor(color_r10.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_13_ic_icon_2_Template, 1, 1, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r10.value.light)("color", color_r10.value["default"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r3.isSelectedColor(color_r10.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r10.value["default"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isSelectedColor(color_r10.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, color_r10.key));
        }
      }

      function ConfigPanelComponent_div_0_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var config_r14 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.setConfig(config_r14.id, ctx_r16.Style.light);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LIGHT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var config_r14 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.setConfig(config_r14.id, ctx_r18.Style["default"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DEFAULT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var config_r14 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.setConfig(config_r14.id, ctx_r19.Style.dark);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DARK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var config_r14 = ctx.$implicit;
          var first_r15 = ctx.first;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mt-6", !first_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", config_r14.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](config_r14.name);
        }
      }

      function ConfigPanelComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ic-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "THEME BASE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfigPanelComponent_div_0_div_8_Template, 6, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "THEME COLORS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConfigPanelComponent_div_0_div_13_Template, 6, 12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "THEME STYLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ConfigPanelComponent_div_0_div_18_Template, 12, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LAYOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ORIENTATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.layoutRTLChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "TOOLBAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "POSITION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toolbarPositionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-radio-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FOOTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.footerVisibleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Visible ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "POSITION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-radio-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.footerPositionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-radio-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-radio-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var setting_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.icSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx_r0.selectedStyle$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx_r0.colorVariables));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.configs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 12, ctx_r0.isRTL$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", setting_r1.toolbar.fixed ? "fixed" : "static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", setting_r1.footer.visible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", setting_r1.footer.fixed ? "fixed" : "static");
        }
      }

      var ConfigPanelComponent = /*@__PURE__*/function () {
        var ConfigPanelComponent = /*#__PURE__*/function () {
          function ConfigPanelComponent(configService, styleService, layoutService, document, route) {
            var _this = this;

            _classCallCheck(this, ConfigPanelComponent);

            this.configService = configService;
            this.styleService = styleService;
            this.layoutService = layoutService;
            this.document = document;
            this.route = route;
            this.configs = this.configService.configs;
            this.colorVariables = _color_variables__WEBPACK_IMPORTED_MODULE_7__["colorVariables"];
            this.config$ = this.configService.config$;
            this.activeConfig$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (config) {
              return Object.keys(_this.configService.configs).find(function (key) {
                return _this.configService.configs[key] === config;
              });
            }));
            this.isRTL$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (paramMap) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(paramMap.get('rtl'));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
            this.selectedStyle$ = this.styleService.style$;
            this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default.a;
            this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3___default.a;
            this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
            this.ConfigName = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_6__["ConfigName"];
            this.Style = _services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"];
            this.selectedColor = _color_variables__WEBPACK_IMPORTED_MODULE_7__["colorVariables"].blue;
          }

          _createClass(ConfigPanelComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "setConfig",
            value: function setConfig(layout, style) {
              this.configService.setConfig(layout);
              this.styleService.setStyle(style);
            }
          }, {
            key: "selectColor",
            value: function selectColor(color) {
              this.selectedColor = color;

              if (this.document) {
                this.document.documentElement.style.setProperty('--color-primary', color["default"].replace('rgb(', '').replace(')', ''));
                this.document.documentElement.style.setProperty('--color-primary-contrast', color.contrast.replace('rgb(', '').replace(')', ''));
              }
            }
          }, {
            key: "isSelectedColor",
            value: function isSelectedColor(color) {
              return color === this.selectedColor;
            }
          }, {
            key: "enableDarkMode",
            value: function enableDarkMode() {
              this.styleService.setStyle(_services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"].dark);
            }
          }, {
            key: "disableDarkMode",
            value: function disableDarkMode() {
              this.styleService.setStyle(_services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"]["default"]);
            }
          }, {
            key: "sidenavOpenChange",
            value: function sidenavOpenChange(change) {
              change.checked ? this.layoutService.openSidenav() : this.layoutService.closeSidenav();
            }
          }, {
            key: "layoutRTLChange",
            value: function layoutRTLChange(change) {
              change.checked ? this.layoutService.enableRTL() : this.layoutService.disableRTL();
            }
          }, {
            key: "toolbarPositionChange",
            value: function toolbarPositionChange(change) {
              this.configService.updateConfig({
                toolbar: {
                  fixed: change.value === 'fixed'
                }
              });
            }
          }, {
            key: "footerVisibleChange",
            value: function footerVisibleChange(change) {
              this.configService.updateConfig({
                footer: {
                  visible: change.checked
                }
              });
            }
          }, {
            key: "footerPositionChange",
            value: function footerPositionChange(change) {
              this.configService.updateConfig({
                footer: {
                  fixed: change.value === 'fixed'
                }
              });
            }
          }]);

          return ConfigPanelComponent;
        }();

        ConfigPanelComponent.ɵfac = function ConfigPanelComponent_Factory(t) {
          return new (t || ConfigPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_style_service__WEBPACK_IMPORTED_MODULE_5__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_11__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]));
        };

        ConfigPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ConfigPanelComponent,
          selectors: [["vex-config-panel"]],
          decls: 2,
          vars: 3,
          consts: [["class", "config-panel", 4, "ngIf"], [1, "config-panel"], [1, "headline", "mb-4"], ["inline", "true", 1, "mr-3", 3, "icon"], [1, "section"], [1, "subheading"], ["class", "rounded-full mt-2 flex items-center cursor-pointer relative bg-contrast-black text-contrast-white", "matRipple", "", 3, "click", 4, "ngIf"], ["class", "vex-color-picker rounded-full mt-2 flex items-center cursor-pointer relative", "matRipple", "", 3, "selected", "backgroundColor", "color", "click", 4, "ngFor", "ngForOf"], ["class", "rounded", 3, "mt-6", 4, "ngFor", "ngForOf"], [1, "section-content"], [3, "checked", "change"], ["fxLayout", "column", "fxLayoutGap", "12px", 3, "value", "change"], ["value", "fixed"], ["value", "static"], ["matRipple", "", 1, "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", "bg-contrast-black", "text-contrast-white", 3, "click"], [1, "m-2", "h-6", "w-6", "rounded-full"], ["size", "24px", 3, "icon", 4, "ngIf"], [1, "ml-1", "font-medium", "text-sm"], ["size", "24px", 3, "icon"], ["matRipple", "", 1, "vex-color-picker", "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", 3, "click"], [1, "rounded"], [1, "layout-image", "rounded", "overflow-hidden", "relative", "hover:bg-hover", "shadow-8"], [1, "w-full", "block", 3, "src"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "4px", 1, "layout-image-overlay"], ["fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "bg-contrast-white", "text-contrast-black", 3, "click"], ["color", "primary", "fxFlex", "none", "mat-raised-button", "", "type", "button", 3, "click"], ["fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "bg-contrast-black", "text-contrast-white", 3, "click"], [1, "text-center", "body-2", "mt-2"]],
          template: function ConfigPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfigPanelComponent_div_0_Template, 52, 14, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.config$));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutGapDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]],
          styles: [".config-panel[_ngcontent-%COMP%] {\n  padding: var(--padding-16) var(--padding);\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: var(--padding);\n}\n\n.section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  margin-bottom: var(--padding-16);\n  padding-bottom: var(--padding-16);\n}\n\n.section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.section-content[_ngcontent-%COMP%] {\n  -webkit-margin-start: var(--padding-12);\n          margin-inline-start: var(--padding-12);\n}\n\n.section-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n\n.layout[_ngcontent-%COMP%]    + .layout[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.layout-image[_ngcontent-%COMP%]:hover   .layout-image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: var(--trans-ease-out);\n  visibility: hidden;\n  width: 100%;\n}\n\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.vex-color-picker[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.vex-color-picker[_ngcontent-%COMP%]:hover, .vex-color-picker.selected[_ngcontent-%COMP%] {\n  background: currentColor !important;\n}\n\n.vex-color-picker[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .vex-color-picker[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.vex-color-picker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.color[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 50%;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  -webkit-margin-end: var(--padding-16);\n          margin-inline-end: var(--padding-16);\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n}\n\n.color.light[_ngcontent-%COMP%] {\n  background: white;\n  color: #000;\n}\n\n.color.dark[_ngcontent-%COMP%] {\n  background: #303030;\n  color: white;\n}\n\n.color.flat[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--padding-12);\n}\n\n.style-name[_ngcontent-%COMP%] {\n  font: var(--font-body-2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7VUFBQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOzs7O0VBSUUsY0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWctcGFuZWwge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTE2KSB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnNlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cblxuLnNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZWN0aW9uLWNvbnRlbnQge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLnNlY3Rpb24tY29udGVudCAuc3ViaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxheW91dCArIC5sYXlvdXQge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmxheW91dC1pbWFnZTpob3ZlciAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5sYXlvdXQtaW1hZ2UgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxheW91dC1pbWFnZSAubGF5b3V0LWltYWdlLW92ZXJsYXkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi52ZXgtY29sb3ItcGlja2VyIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4udmV4LWNvbG9yLXBpY2tlcjpob3ZlciwgLnZleC1jb2xvci1waWNrZXIuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcbn1cblxuLnZleC1jb2xvci1waWNrZXI6aG92ZXIgcCwgLnZleC1jb2xvci1waWNrZXI6aG92ZXIgZGl2LCAudmV4LWNvbG9yLXBpY2tlci5zZWxlY3RlZCBwLCAudmV4LWNvbG9yLXBpY2tlci5zZWxlY3RlZCBkaXYge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi52ZXgtY29sb3ItcGlja2VyIHAge1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG59XG5cbi5jb2xvciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAzNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmctMTYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzNnB4O1xufVxuXG4uY29sb3IubGlnaHQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb2xvci5kYXJrIHtcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29sb3IuZmxhdCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1zbGlkZS10b2dnbGUgKyBtYXQtY2hlY2tib3gsXG5tYXQtY2hlY2tib3ggKyBtYXQtc2xpZGUtdG9nZ2xlLFxubWF0LWNoZWNrYm94ICsgbWF0LWNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uc3R5bGUtbmFtZSB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0yKTtcbn0iXX0= */"]
        });
        return ConfigPanelComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/config-panel/config-panel.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/@vex/components/config-panel/config-panel.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ConfigPanelModule */

    /***/
    function srcVexComponentsConfigPanelConfigPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigPanelModule", function () {
        return ConfigPanelModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _config_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config-panel.component */
      "./src/@vex/components/config-panel/config-panel.component.ts");
      /* harmony import */


      var _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config-panel-toggle/config-panel-toggle.component */
      "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      var ConfigPanelModule = /*@__PURE__*/function () {
        var ConfigPanelModule = function ConfigPanelModule() {
          _classCallCheck(this, ConfigPanelModule);
        };

        ConfigPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ConfigPanelModule
        });
        ConfigPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ConfigPanelModule_Factory(t) {
            return new (t || ConfigPanelModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"]]]
        });
        return ConfigPanelModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigPanelModule, {
          declarations: [_config_panel_component__WEBPACK_IMPORTED_MODULE_2__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelToggleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"]],
          exports: [_config_panel_component__WEBPACK_IMPORTED_MODULE_2__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelToggleComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/navigation-item/navigation-item.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/@vex/components/navigation-item/navigation-item.component.ts ***!
      \**************************************************************************/

    /*! exports provided: NavigationItemComponent */

    /***/
    function srcVexComponentsNavigationItemNavigationItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationItemComponent", function () {
        return NavigationItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var src_app_services_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utils/user/user.service */
      "./src/app/services/utils/user/user.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var _c0 = function _c0(a0, a1) {
        return {
          "bg-primary text-primary-contrast": a0,
          "navigation-color": a1
        };
      };

      function NavigationItemComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r0.isActive$)(ctx_r0.item));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx_r0.isActive$)(ctx_r0.item), !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx_r0.isActive$)(ctx_r0.item)))("routerLink", ctx_r0.item.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, "\n");
        }
      }

      function NavigationItemComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationItemComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.item.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r1.isActive$)(ctx_r1.item));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.item.label, "\n");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "text-primary": a0
        };
      };

      function NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r9.route)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r10.isActive$)(child_r9)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", child_r9.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r9.label);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return child_r9.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", child_r9.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r9.label);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          item: a0
        };
      };

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](11);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, item_r36))("ngTemplateOutlet", _r7);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 2, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var child_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r34)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r33.isActive$)(child_r32)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r32.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r32.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var child_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, child_r32))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.isDropdown(child_r32));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r30)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r29.isActive$)(item_r28)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r28.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, item_r28))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isDropdown(item_r28));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var child_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r26)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r25.isActive$)(child_r24)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r24.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r24.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var child_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, child_r24))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isDropdown(child_r24));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r22)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r21.isActive$)(item_r20)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r20.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, item_r20))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isDropdown(item_r20));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 6, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r18)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r12.isActive$)(child_r9)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", child_r9.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r9.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r9.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template, 5, 8, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template, 4, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template, 9, 9, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var child_r9 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && !ctx_r6.isFunction(child_r9.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && ctx_r6.isFunction(child_r9.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isDropdown(child_r9));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r42.route)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r43.isActive$)(item_r42)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r42.label);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

            return item_r42.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r44.isActive$)(item_r42)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r42.label, " ");
        }
      }

      function NavigationItemComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template, 3, 7, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template, 3, 6, "div", 22);
        }

        if (rf & 2) {
          var item_r42 = ctx.item;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && !ctx_r8.isFunction(item_r42.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && ctx_r8.isFunction(item_r42.route));
        }
      }

      function NavigationItemComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_Template, 4, 3, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavigationItemComponent_ng_container_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r2.isActive$)(ctx_r2.item));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx_r2.isActive$)(ctx_r2.item), !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r2.isActive$)(ctx_r2.item)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.item.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
        }
      }

      var NavigationItemComponent = /*@__PURE__*/function () {
        var NavigationItemComponent = /*#__PURE__*/function () {
          function NavigationItemComponent(navigationService, router, userService) {
            var _this2 = this;

            _classCallCheck(this, NavigationItemComponent);

            this.navigationService = navigationService;
            this.router = router;
            this.userService = userService;
            this.isActive$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
              return function (item) {
                return _this2.hasActiveChilds(item);
              };
            }));
            this.isLink = this.navigationService.isLink;
            this.isDropdown = this.navigationService.isDropdown;
            this.isSubheading = this.navigationService.isSubheading;
            this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByRoute"];
          }

          _createClass(NavigationItemComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "hasActiveChilds",
            value: function hasActiveChilds(parent) {
              var _this3 = this;

              if (this.isLink(parent)) {
                return this.router.isActive(parent.route, true);
              }

              if (this.isDropdown(parent) || this.isSubheading(parent)) {
                return parent.children.some(function (child) {
                  if (_this3.isDropdown(child)) {
                    return _this3.hasActiveChilds(child);
                  }

                  if (_this3.isLink(child) && !_this3.isFunction(child.route)) {
                    return _this3.router.isActive(child.route, true);
                  }

                  return false;
                });
              }

              return false;
            }
          }, {
            key: "validateUserNavigation",
            value: function validateUserNavigation(item) {
              // if (item.visible === 'admin') return this.userService.isAdminUser;
              // if (item.visible === 'adminClient') return this.userService.isAdminClient;
              // if (item.visible === 'adminMibot') return this.userService.isAdminMibot;
              return false;
            }
          }, {
            key: "isFunction",
            value: function isFunction(prop) {
              console.log('adsasaddsa');
              return prop instanceof Function;
            }
          }]);

          return NavigationItemComponent;
        }();

        NavigationItemComponent.ɵfac = function NavigationItemComponent_Factory(t) {
          return new (t || NavigationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
        };

        NavigationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NavigationItemComponent,
          selectors: [["vex-navigation-item"]],
          inputs: {
            item: "item"
          },
          decls: 3,
          vars: 3,
          consts: [["class", "navigation-item", "matRipple", "", 3, "hover:bg-hover", "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-item navigation-color", "matRipple", "", 3, "hover:bg-hover", "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 1, "navigation-item", 3, "ngClass", "routerLink"], ["matRipple", "", 1, "navigation-item", "navigation-color", 3, "click"], ["matRipple", "", 1, "navigation-item", 3, "matMenuTriggerFor", "ngClass"], ["yPosition", "below"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["linkTemplate", ""], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "routerLink", "ngClass", 4, "ngIf"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "routerLink", "ngClass"], [1, "text-current", 3, "icIcon"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "click"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "matMenuTriggerFor", "ngClass"], ["level1", "matMenu"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["level2", "matMenu"], ["level3", "matMenu"], ["level4", "matMenu"], ["level5", "matMenu"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "click"]],
          template: function NavigationItemComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationItemComponent_a_0_Template, 5, 14, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationItemComponent_div_1_Template, 3, 5, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_Template, 11, 15, "ng-container", 2);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item) && (ctx.item.children == null ? null : ctx.item.children.length) > 0 || ctx.isDropdown(ctx.item));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
          styles: [".navigation-item[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  display: block;\n  -webkit-margin-end: var(--padding-8);\n          margin-inline-end: var(--padding-8);\n  transition: var(--trans-ease-out);\n}\n\n.navigation-color[_ngcontent-%COMP%] {\n  color: var(--navigation-color);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%]:hover {\n  color: rgb(var(--color-primary));\n}\n\n.navigation-menu-item[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWl0ZW0vbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy04KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1jb2xvciB7XG4gIGNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWNvbG9yKTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtOmhvdmVyIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xufSJdfQ== */"]
        });
        return NavigationItemComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/navigation-item/navigation-item.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/@vex/components/navigation-item/navigation-item.module.ts ***!
      \***********************************************************************/

    /*! exports provided: NavigationItemModule */

    /***/
    function srcVexComponentsNavigationItemNavigationItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationItemModule", function () {
        return NavigationItemModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _navigation_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navigation-item.component */
      "./src/@vex/components/navigation-item/navigation-item.component.ts");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      var NavigationItemModule = /*@__PURE__*/function () {
        var NavigationItemModule = function NavigationItemModule() {
          _classCallCheck(this, NavigationItemModule);
        };

        NavigationItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: NavigationItemModule
        });
        NavigationItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function NavigationItemModule_Factory(t) {
            return new (t || NavigationItemModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]]]
        });
        return NavigationItemModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationItemModule, {
          declarations: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__["NavigationItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
          exports: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__["NavigationItemComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover-ref.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/components/popover/popover-ref.ts ***!
      \****************************************************/

    /*! exports provided: PopoverRef */

    /***/
    function srcVexComponentsPopoverPopoverRefTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverRef", function () {
        return PopoverRef;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var PopoverRef = /*#__PURE__*/function () {
        function PopoverRef(overlay, content, data) {
          var _this4 = this;

          _classCallCheck(this, PopoverRef);

          this.overlay = overlay;
          this.content = content;
          this.data = data;
          this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.afterClosed$ = this.afterClosed.asObservable();
          overlay.backdropClick().subscribe(function () {
            _this4._close('backdropClick', null);
          });
        }

        _createClass(PopoverRef, [{
          key: "close",
          value: function close(data) {
            this._close('close', data);
          }
        }, {
          key: "_close",
          value: function _close(type, data) {
            this.overlay.dispose();
            this.afterClosed.next({
              type: type,
              data: data
            });
            this.afterClosed.complete();
          }
        }]);

        return PopoverRef;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover.component.ts":
    /*!**********************************************************!*\
      !*** ./src/@vex/components/popover/popover.component.ts ***!
      \**********************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function srcVexComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../animations/popover.animation */
      "./src/@vex/animations/popover.animation.ts");
      /* harmony import */


      var _popover_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover-ref */
      "./src/@vex/components/popover/popover-ref.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function PopoverComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function PopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PopoverComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
        }
      }

      function PopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PopoverComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r2.content);
        }
      }

      var PopoverComponent = /*@__PURE__*/function () {
        var PopoverComponent = /*#__PURE__*/function () {
          function PopoverComponent(popoverRef) {
            _classCallCheck(this, PopoverComponent);

            this.popoverRef = popoverRef;
            this.renderMethod = 'component';
          }

          _createClass(PopoverComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.content = this.popoverRef.content;

              if (typeof this.content === 'string') {
                this.renderMethod = 'text';
              }

              if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
                this.renderMethod = 'template';
                this.context = {
                  close: this.popoverRef.close.bind(this.popoverRef)
                };
              }
            }
          }]);

          return PopoverComponent;
        }();

        PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
          return new (t || PopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_popover_ref__WEBPACK_IMPORTED_MODULE_2__["PopoverRef"]));
        };

        PopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PopoverComponent,
          selectors: [["ng-component"]],
          decls: 5,
          vars: 5,
          consts: [[1, "popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]],
          template: function PopoverComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverComponent_div_2_Template, 1, 1, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transformPopover", undefined);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.renderMethod);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "template");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "component");
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgComponentOutlet"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"],
          data: {
            animation: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_1__["popoverAnimation"]]
          }
        });
        return PopoverComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover.module.ts":
    /*!*******************************************************!*\
      !*** ./src/@vex/components/popover/popover.module.ts ***!
      \*******************************************************/

    /*! exports provided: PopoverModule */

    /***/
    function srcVexComponentsPopoverPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverModule", function () {
        return PopoverModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover.component */
      "./src/@vex/components/popover/popover.component.ts");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

      var PopoverModule = /*@__PURE__*/function () {
        var PopoverModule = function PopoverModule() {
          _classCallCheck(this, PopoverModule);
        };

        PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PopoverModule
        });
        PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PopoverModule_Factory(t) {
            return new (t || PopoverModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]]]
        });
        return PopoverModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, {
          declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover.service.ts":
    /*!********************************************************!*\
      !*** ./src/@vex/components/popover/popover.service.ts ***!
      \********************************************************/

    /*! exports provided: PopoverService */

    /***/
    function srcVexComponentsPopoverPopoverServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverService", function () {
        return PopoverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
      /* harmony import */


      var _popover_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popover-ref */
      "./src/@vex/components/popover/popover-ref.ts");
      /* harmony import */


      var _popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./popover.component */
      "./src/@vex/components/popover/popover.component.ts");

      var PopoverService = /*@__PURE__*/function () {
        var PopoverService = /*#__PURE__*/function () {
          function PopoverService(overlay, injector) {
            _classCallCheck(this, PopoverService);

            this.overlay = overlay;
            this.injector = injector;
          }

          _createClass(PopoverService, [{
            key: "open",
            value: function open(_ref) {
              var origin = _ref.origin,
                  content = _ref.content,
                  data = _ref.data,
                  width = _ref.width,
                  height = _ref.height,
                  position = _ref.position,
                  offsetX = _ref.offsetX,
                  offsetY = _ref.offsetY;
              var overlayRef = this.overlay.create(this.getOverlayConfig({
                origin: origin,
                width: width,
                height: height,
                position: position,
                offsetX: offsetX,
                offsetY: offsetY
              }));
              var popoverRef = new _popover_ref__WEBPACK_IMPORTED_MODULE_3__["PopoverRef"](overlayRef, content, data);
              var injector = this.createInjector(popoverRef, this.injector);
              overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], null, injector));
              return popoverRef;
            }
          }, {
            key: "createInjector",
            value: function createInjector(popoverRef, injector) {
              var tokens = new WeakMap([[_popover_ref__WEBPACK_IMPORTED_MODULE_3__["PopoverRef"], popoverRef]]);
              return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalInjector"](injector, tokens);
            }
          }, {
            key: "getOverlayConfig",
            value: function getOverlayConfig(_ref2) {
              var origin = _ref2.origin,
                  width = _ref2.width,
                  height = _ref2.height,
                  position = _ref2.position,
                  offsetX = _ref2.offsetX,
                  offsetY = _ref2.offsetY;
              return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
                hasBackdrop: true,
                width: width,
                height: height,
                backdropClass: 'popover-backdrop',
                positionStrategy: this.getOverlayPosition({
                  origin: origin,
                  position: position,
                  offsetX: offsetX,
                  offsetY: offsetY
                }),
                scrollStrategy: this.overlay.scrollStrategies.reposition()
              });
            }
          }, {
            key: "getOverlayPosition",
            value: function getOverlayPosition(_ref3) {
              var origin = _ref3.origin,
                  position = _ref3.position,
                  offsetX = _ref3.offsetX,
                  offsetY = _ref3.offsetY;
              var positionStrategy = this.overlay.position().flexibleConnectedTo(origin).withPositions(position || this.getPositions()).withFlexibleDimensions(true).withDefaultOffsetY(offsetY || 0).withDefaultOffsetX(offsetX || 0).withTransformOriginOn('.popover').withPush(true);
              return positionStrategy;
            }
          }, {
            key: "getPositions",
            value: function getPositions() {
              return [{
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
              }, {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top'
              }];
            }
          }]);

          return PopoverService;
        }();

        PopoverService.ɵfac = function PopoverService_Factory(t) {
          return new (t || PopoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
        };

        PopoverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: PopoverService,
          factory: PopoverService.ɵfac,
          providedIn: 'root'
        });
        return PopoverService;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/progress-bar/progress-bar.component.ts":
    /*!********************************************************************!*\
      !*** ./src/@vex/components/progress-bar/progress-bar.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProgressBarComponent */

    /***/
    function srcVexComponentsProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
        return ProgressBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ProgressBarComponent = /*@__PURE__*/function () {
        var ProgressBarComponent = /*#__PURE__*/function () {
          function ProgressBarComponent(loader) {
            _classCallCheck(this, ProgressBarComponent);

            this.loader = loader;
          }

          _createClass(ProgressBarComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ProgressBarComponent;
        }();

        ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
          return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__["LoadingBarService"]));
        };

        ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProgressBarComponent,
          selectors: [["vex-progress-bar"]],
          decls: 3,
          vars: 7,
          consts: [["mode", "determinate", 1, "progress-bar", 3, "value"]],
          template: function ProgressBarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-progress-bar", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.loader.useRef("router").value$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.loader.useRef("router").value$));
            }
          },
          directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
          styles: [".progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n}\n\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4ucHJvZ3Jlc3MtYmFyLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"]
        });
        return ProgressBarComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/progress-bar/progress-bar.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/@vex/components/progress-bar/progress-bar.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProgressBarModule */

    /***/
    function srcVexComponentsProgressBarProgressBarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
        return ProgressBarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./progress-bar.component */
      "./src/@vex/components/progress-bar/progress-bar.component.ts");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
      /* harmony import */


      var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-loading-bar/router */
      "./node_modules/@ngx-loading-bar/router/__ivy_ngcc__/fesm2015/ngx-loading-bar-router.js");

      var ProgressBarModule = /*@__PURE__*/function () {
        var ProgressBarModule = function ProgressBarModule() {
          _classCallCheck(this, ProgressBarModule);
        };

        ProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ProgressBarModule
        });
        ProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ProgressBarModule_Factory(t) {
            return new (t || ProgressBarModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"]]]
        });
        return ProgressBarModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressBarModule, {
          declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"]],
          exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/scrollbar/scrollbar.component.ts":
    /*!**************************************************************!*\
      !*** ./src/@vex/components/scrollbar/scrollbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: ScrollbarComponent */

    /***/
    function srcVexComponentsScrollbarScrollbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollbarComponent", function () {
        return ScrollbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var simplebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! simplebar */
      "./node_modules/simplebar/dist/simplebar.esm.js");

      var _c0 = ["*"];

      var ScrollbarComponent = /*@__PURE__*/function () {
        var ScrollbarComponent = /*#__PURE__*/function () {
          function ScrollbarComponent(_element, zone) {
            _classCallCheck(this, ScrollbarComponent);

            this._element = _element;
            this.zone = zone;
          }

          _createClass(ScrollbarComponent, [{
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              var _this5 = this;

              this.zone.runOutsideAngular(function () {
                _this5.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_1__["default"](_this5._element.nativeElement, _this5.options);
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              /**
               * Exists, but not typed in the type definition
               * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
               */
              if (this.scrollbarRef && this.scrollbarRef.unMount) {
                this.scrollbarRef.unMount();
              }
            }
          }]);

          return ScrollbarComponent;
        }();

        ScrollbarComponent.ɵfac = function ScrollbarComponent_Factory(t) {
          return new (t || ScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        };

        ScrollbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ScrollbarComponent,
          selectors: [["vex-scrollbar"]],
          hostAttrs: [1, "vex-scrollbar"],
          inputs: {
            options: "options"
          },
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function ScrollbarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
          },
          styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMDtcbn0iXX0= */"]
        });
        return ScrollbarComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/scrollbar/scrollbar.module.ts":
    /*!***********************************************************!*\
      !*** ./src/@vex/components/scrollbar/scrollbar.module.ts ***!
      \***********************************************************/

    /*! exports provided: ScrollbarModule */

    /***/
    function srcVexComponentsScrollbarScrollbarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollbarModule", function () {
        return ScrollbarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _scrollbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scrollbar.component */
      "./src/@vex/components/scrollbar/scrollbar.component.ts");

      var ScrollbarModule = /*@__PURE__*/function () {
        var ScrollbarModule = function ScrollbarModule() {
          _classCallCheck(this, ScrollbarModule);
        };

        ScrollbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ScrollbarModule
        });
        ScrollbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ScrollbarModule_Factory(t) {
            return new (t || ScrollbarModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return ScrollbarModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollbarModule, {
          declarations: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollbarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/search/search.component.ts":
    /*!********************************************************!*\
      !*** ./src/@vex/components/search/search.component.ts ***!
      \********************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function srcVexComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-close */
      "./node_modules/@iconify/icons-ic/twotone-close.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-take-until-destroy */
      "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/search.service */
      "./src/@vex/services/search.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["searchInput"];

      function SearchComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SearchComponent = /*@__PURE__*/function () {
        var SearchComponent = /*#__PURE__*/function () {
          function SearchComponent(layoutService, searchService) {
            _classCallCheck(this, SearchComponent);

            this.layoutService = layoutService;
            this.searchService = searchService;
            this.show$ = this.layoutService.searchOpen$;
            this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
            this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1___default.a;
          }

          _createClass(SearchComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this6 = this;

              this.searchService.isOpenSubject.next(true);
              this.searchCtrl.valueChanges.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function (value) {
                return _this6.searchService.valueChangesSubject.next(value);
              });
              this.show$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (show) {
                return show;
              }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function () {
                return _this6.input.nativeElement.focus();
              });
            }
          }, {
            key: "close",
            value: function close() {
              this.layoutService.closeSearch();
              this.searchCtrl.setValue(undefined);
              this.searchService.isOpenSubject.next(false);
            }
          }, {
            key: "search",
            value: function search() {
              this.searchService.submitSubject.next(this.searchCtrl.value);
              this.close();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.layoutService.closeSearch();
              this.searchCtrl.setValue(undefined);
              this.searchService.isOpenSubject.next(false);
            }
          }]);

          return SearchComponent;
        }();

        SearchComponent.ɵfac = function SearchComponent_Factory(t) {
          return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]));
        };

        SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SearchComponent,
          selectors: [["vex-search"]],
          viewQuery: function SearchComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
            }
          },
          decls: 10,
          vars: 9,
          consts: [[1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], [3, "icIcon"], ["placeholder", "Search...", 1, "search-input", 3, "formControl", "keyup.enter"], ["searchInput", ""], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]],
          template: function SearchComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() {
                return ctx.close();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() {
                return ctx.close();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() {
                return ctx.search();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hit enter to search");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx.show$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icClose);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchCtrl);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.show$));
            }
          },
          directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
          styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  border-top-width: 0;\n  font-weight: 700;\n  background-color: transparent;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  font-size: 1rem;\n  text-align: right;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--text-hint);\n  font-weight: 700;\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFDRjs7QUFFQTtFQUNFLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogNTB2aDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4uc2VhcmNoLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBmb250LXNpemU6IDd2dztcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWhpbnQge1xuICB3aWR0aDogNzUlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2VhcmNoLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogNTB2aDtcbn0iXX0= */"]
        });
        return SearchComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/search/search.module.ts":
    /*!*****************************************************!*\
      !*** ./src/@vex/components/search/search.module.ts ***!
      \*****************************************************/

    /*! exports provided: SearchModule */

    /***/
    function srcVexComponentsSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
        return SearchModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search.component */
      "./src/@vex/components/search/search.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var SearchModule = /*@__PURE__*/function () {
        var SearchModule = function SearchModule() {
          _classCallCheck(this, SearchModule);
        };

        SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SearchModule
        });
        SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SearchModule_Factory(t) {
            return new (t || SearchModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
        });
        return SearchModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, {
          declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          exports: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/sidebar/sidebar.component.ts":
    /*!**********************************************************!*\
      !*** ./src/@vex/components/sidebar/sidebar.component.ts ***!
      \**********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcVexComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["*"];

      var SidebarComponent = /*@__PURE__*/function () {
        var SidebarComponent = /*#__PURE__*/function () {
          function SidebarComponent(document) {
            _classCallCheck(this, SidebarComponent);

            this.document = document;
            this.position = 'left';
          }

          _createClass(SidebarComponent, [{
            key: "enableScrollblock",
            value: function enableScrollblock() {
              if (!this.document.body.classList.contains('vex-scrollblock')) {
                this.document.body.classList.add('vex-scrollblock');
              }
            }
          }, {
            key: "disableScrollblock",
            value: function disableScrollblock() {
              if (this.document.body.classList.contains('vex-scrollblock')) {
                this.document.body.classList.remove('vex-scrollblock');
              }
            }
          }, {
            key: "open",
            value: function open() {
              this.opened = true;
            }
          }, {
            key: "close",
            value: function close() {
              this.opened = false;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }, {
            key: "opened",
            get: function get() {
              return this._opened;
            },
            set: function set(opened) {
              this._opened = opened;
              opened ? this.enableScrollblock() : this.disableScrollblock();
            }
          }, {
            key: "positionLeft",
            get: function get() {
              return this.position === 'left';
            }
          }, {
            key: "positionRight",
            get: function get() {
              return this.position === 'right';
            }
          }]);

          return SidebarComponent;
        }();

        SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
          return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };

        SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SidebarComponent,
          selectors: [["vex-sidebar"]],
          hostAttrs: [1, "vex-sidebar"],
          inputs: {
            position: "position",
            invisibleBackdrop: "invisibleBackdrop",
            opened: "opened"
          },
          ngContentSelectors: _c0,
          decls: 3,
          vars: 10,
          consts: [[1, "backdrop", 3, "click"], [1, "sidebar"]],
          template: function SidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_0_listener() {
                return ctx.close();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", ctx.invisibleBackdrop)("visible", ctx.opened);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("position-left", ctx.positionLeft)("position-right", ctx.positionRight);
            }
          },
          styles: [".sidebar[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  bottom: 0;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: var(--trans-ease-in-duration);\n  transition-property: transform, visibility;\n  transition-timing-function: var(--trans-ease-in-timing-function);\n  visibility: hidden;\n  width: var(--sidenav-width);\n  z-index: 1000;\n}\n\n@media (min-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.sidebar.position-left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(-100%);\n}\n\n.sidebar.position-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n\n.backdrop.visible[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n\n.backdrop.invisible[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUYiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogODB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi1kdXJhdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuc2lkZWJhciB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4uc2lkZWJhci5wb3NpdGlvbi1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLnNpZGViYXIucG9zaXRpb24tcmlnaHQge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2lkZWJhci5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB2aXNpYmlsaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogODAwICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZHJvcC52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3AuaW52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */"]
        });
        return SidebarComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/sidebar/sidebar.module.ts":
    /*!*******************************************************!*\
      !*** ./src/@vex/components/sidebar/sidebar.module.ts ***!
      \*******************************************************/

    /*! exports provided: SidebarModule */

    /***/
    function srcVexComponentsSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar.component */
      "./src/@vex/components/sidebar/sidebar.component.ts");

      var SidebarModule = /*@__PURE__*/function () {
        var SidebarModule = function SidebarModule() {
          _classCallCheck(this, SidebarModule);
        };

        SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SidebarModule
        });
        SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SidebarModule_Factory(t) {
            return new (t || SidebarModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return SidebarModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarModule, {
          declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/directives/container/container.directive.ts":
    /*!**************************************************************!*\
      !*** ./src/@vex/directives/container/container.directive.ts ***!
      \**************************************************************/

    /*! exports provided: ContainerDirective */

    /***/
    function srcVexDirectivesContainerContainerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerDirective", function () {
        return ContainerDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-take-until-destroy */
      "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");

      var ContainerDirective = /*@__PURE__*/function () {
        var ContainerDirective = /*#__PURE__*/function () {
          function ContainerDirective(configService, cd) {
            var _this7 = this;

            _classCallCheck(this, ContainerDirective);

            this.configService = configService;
            this.cd = cd;
            this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (config) {
              return config.boxed;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function (boxed) {
              _this7.enabled = boxed;

              _this7.cd.markForCheck();
            });
          }

          _createClass(ContainerDirective, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }]);

          return ContainerDirective;
        }();

        ContainerDirective.ɵfac = function ContainerDirective_Factory(t) {
          return new (t || ContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
        };

        ContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: ContainerDirective,
          selectors: [["", "vexContainer", ""]],
          hostVars: 2,
          hostBindings: function ContainerDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("container", ctx.enabled);
            }
          }
        });
        return ContainerDirective;
      }();
      /***/

    },

    /***/
    "./src/@vex/directives/container/container.module.ts":
    /*!***********************************************************!*\
      !*** ./src/@vex/directives/container/container.module.ts ***!
      \***********************************************************/

    /*! exports provided: ContainerModule */

    /***/
    function srcVexDirectivesContainerContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerModule", function () {
        return ContainerModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./container.directive */
      "./src/@vex/directives/container/container.directive.ts");

      var ContainerModule = /*@__PURE__*/function () {
        var ContainerModule = function ContainerModule() {
          _classCallCheck(this, ContainerModule);
        };

        ContainerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ContainerModule
        });
        ContainerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ContainerModule_Factory(t) {
            return new (t || ContainerModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return ContainerModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContainerModule, {
          declarations: [_container_directive__WEBPACK_IMPORTED_MODULE_2__["ContainerDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_container_directive__WEBPACK_IMPORTED_MODULE_2__["ContainerDirective"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/interfaces/config-name.model.ts":
    /*!**************************************************!*\
      !*** ./src/@vex/interfaces/config-name.model.ts ***!
      \**************************************************/

    /*! exports provided: ConfigName */

    /***/
    function srcVexInterfacesConfigNameModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigName", function () {
        return ConfigName;
      });

      var ConfigName = /*@__PURE__*/function (ConfigName) {
        ConfigName["apollo"] = "vex-layout-apollo";
        ConfigName["zeus"] = "vex-layout-zeus";
        ConfigName["hermes"] = "vex-layout-hermes";
        ConfigName["poseidon"] = "vex-layout-poseidon";
        ConfigName["ares"] = "vex-layout-ares";
        ConfigName["ikaros"] = "vex-layout-ikaros";
        return ConfigName;
      }({});
      /***/

    },

    /***/
    "./src/@vex/layout/footer/footer.component.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/layout/footer/footer.component.ts ***!
      \****************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcVexLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-shopping-basket */
      "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1__);

      var FooterComponent = /*@__PURE__*/function () {
        var FooterComponent = /*#__PURE__*/function () {
          function FooterComponent() {
            _classCallCheck(this, FooterComponent);

            this.icShoppingBasket = _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1___default.a;
          }

          _createClass(FooterComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }]);

          return FooterComponent;
        }();

        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)();
        };

        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: FooterComponent,
          selectors: [["vex-footer"]],
          inputs: {
            customTemplate: "customTemplate"
          },
          decls: 1,
          vars: 0,
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
            }
          },
          styles: ["[_nghost-%COMP%] {\n  bottom: 0;\n  display: block;\n  width: 100%;\n  z-index: var(--footer-z-index);\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--footer-background);\n  color: var(--footer-color);\n  height: var(--footer-height);\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  position: relative;\n  z-index: var(--footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59Il19 */"]
        });
        return FooterComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/footer/footer.module.ts":
    /*!*************************************************!*\
      !*** ./src/@vex/layout/footer/footer.module.ts ***!
      \*************************************************/

    /*! exports provided: FooterModule */

    /***/
    function srcVexLayoutFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component */
      "./src/@vex/layout/footer/footer.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");

      var FooterModule = /*@__PURE__*/function () {
        var FooterModule = function FooterModule() {
          _classCallCheck(this, FooterModule);
        };

        FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: FooterModule
        });
        FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function FooterModule_Factory(t) {
            return new (t || FooterModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__["ContainerModule"]]]
        });
        return FooterModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, {
          declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__["ContainerModule"]],
          exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/layout.component.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/layout/layout.component.ts ***!
      \*********************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function srcVexLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-take-until-destroy */
      "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils/check-router-childs-data */
      "./src/@vex/utils/check-router-childs-data.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components/progress-bar/progress-bar.component */
      "./src/@vex/components/progress-bar/progress-bar.component.ts");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../components/search/search.component */
      "./src/@vex/components/search/search.component.ts");

      var _c0 = ["quickpanel"];
      var _c1 = ["sidenav"];

      function LayoutComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function LayoutComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function LayoutComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function LayoutComponent_ng_container_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var LayoutComponent = /*@__PURE__*/function () {
        var LayoutComponent = /*#__PURE__*/function () {
          function LayoutComponent(cd, breakpointObserver, layoutService, configService, router, document) {
            var _this8 = this;

            _classCallCheck(this, LayoutComponent);

            this.cd = cd;
            this.breakpointObserver = breakpointObserver;
            this.layoutService = layoutService;
            this.configService = configService;
            this.router = router;
            this.document = document;
            this.isLayoutVertical$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
              return config.layout === 'vertical';
            }));
            this.isBoxed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
              return config.boxed;
            }));
            this.isToolbarFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
              return config.toolbar.fixed;
            }));
            this.isFooterFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
              return config.footer.fixed;
            }));
            this.isFooterVisible$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
              return config.footer.visible;
            }));
            this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
            this.isDesktop$ = this.layoutService.isDesktop$;
            this.scrollDisabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_5__["checkRouterChildsData"])(_this8.router.routerState.root.snapshot, function (data) {
                return data.scrollDisabled;
              });
            }));
            this.containerEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_5__["checkRouterChildsData"])(_this8.router.routerState.root.snapshot, function (data) {
                return data.containerEnabled;
              });
            }));
            this.searchOpen$ = this.layoutService.searchOpen$;
          }

          _createClass(LayoutComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this9 = this;

              /**
               * Expand Sidenav when we switch from mobile to desktop view
               */
              this.isDesktop$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (matches) {
                return !matches;
              }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe(function () {
                return _this9.layoutService.expandSidenav();
              });
              /**
               * Open/Close Quickpanel through LayoutService
               */

              this.layoutService.quickpanelOpen$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe(function (open) {
                return open ? _this9.quickpanel.open() : _this9.quickpanel.close();
              });
              /**
               * Open/Close Sidenav through LayoutService
               */

              this.layoutService.sidenavOpen$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe(function (open) {
                return open ? _this9.sidenav.open() : _this9.sidenav.close();
              });
              /**
               * Mobile only:
               * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
               */

              this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
                return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.isDesktop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    event = _ref5[0],
                    matches = _ref5[1];

                return !matches;
              }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe(function () {
                return _this9.sidenav.close();
              });
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              var _this10 = this;

              /**
               * Enable Scrolling to specific parts of the page using the Router
               */
              this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) {
                return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["Scroll"];
              }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe(function (e) {
                if (e.position) {
                  // backward navigation
                  _this10.sidenavContainer.scrollable.scrollTo({
                    start: e.position[0],
                    top: e.position[1]
                  });
                } else if (e.anchor) {
                  // anchor navigation
                  var scroll = function scroll(anchor) {
                    return _this10.sidenavContainer.scrollable.scrollTo({
                      behavior: 'smooth',
                      top: anchor.offsetTop,
                      left: anchor.offsetLeft
                    });
                  };

                  var anchorElem = _this10.document.getElementById(e.anchor);

                  if (anchorElem) {
                    scroll(anchorElem);
                  } else {
                    setTimeout(function () {
                      anchorElem = _this10.document.getElementById(e.anchor);
                      scroll(anchorElem);
                    }, 100);
                  }
                } else {
                  // forward navigation
                  _this10.sidenavContainer.scrollable.scrollTo({
                    top: 0,
                    start: 0
                  });
                }
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }]);

          return LayoutComponent;
        }();

        LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
          return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]));
        };

        LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LayoutComponent,
          selectors: [["vex-layout"]],
          viewQuery: function LayoutComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.quickpanel = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
            }
          },
          inputs: {
            sidenavRef: "sidenavRef",
            toolbarRef: "toolbarRef",
            footerRef: "footerRef",
            quickpanelRef: "quickpanelRef"
          },
          decls: 34,
          vars: 69,
          consts: [[1, "page-container"], [1, "sidenav-container"], [1, "sidenav", 3, "disableClose", "fixedInViewport", "mode", "opened"], ["sidenav", ""], [4, "ngTemplateOutlet"], ["mode", "over", "position", "end", 1, "quickpanel", 3, "fixedInViewport"], ["quickpanel", ""], [1, "sidenav-content"], [1, "content"]],
          template: function LayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "vex-progress-bar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "vex-search");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-container", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav", 2, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LayoutComponent_ng_container_24_Template, 1, 0, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-sidenav", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LayoutComponent_ng_container_28_Template, 1, 0, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-sidenav-content", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LayoutComponent_ng_container_30_Template, 1, 0, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "main", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LayoutComponent_ng_container_33_Template, 1, 0, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("boxed", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 31, ctx.isBoxed$))("horizontal-layout", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 33, ctx.isLayoutVertical$))("is-mobile", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 35, ctx.isDesktop$))("vertical-layout", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 37, ctx.isLayoutVertical$))("has-fixed-footer", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 41, ctx.isFooterFixed$) && ctx.isFooterVisible$))("has-footer", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 43, ctx.isFooterVisible$))("scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 45, ctx.scrollDisabled$))("toolbar-fixed", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 47, ctx.isToolbarFixed$))("sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 49, ctx.sidenavCollapsed$))("content-container", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 51, ctx.containerEnabled$))("with-search", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 53, ctx.searchOpen$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableClose", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 55, ctx.isDesktop$))("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 57, ctx.isDesktop$))("mode", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 59, ctx.isDesktop$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 61, ctx.isLayoutVertical$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 63, ctx.isDesktop$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 65, ctx.isLayoutVertical$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.sidenavRef);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 67, ctx.isDesktop$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.quickpanelRef);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.toolbarRef);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerRef);
            }
          },
          directives: [_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__["ProgressBarComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
          styles: [".page-container[_ngcontent-%COMP%] {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background: var(--sidenav-background);\n}\n\n.sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  position: relative;\n  width: 100%;\n}\n\n.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.scroll-disabled[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  min-height: unset;\n  overflow: hidden;\n}\n\n.scroll-disabled.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scroll-disabled.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n  min-height: unset;\n}\n\n.is-mobile[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: 100%;\n}\n\n.is-mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: var(--toolbar-height);\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.sidenav-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.with-search[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n}\n\n.with-search[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);\n  transform-origin: 50vw 50vh;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n  border-radius: 0.25rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  overflow: visible;\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: var(--toolbar-width);\n  z-index: 50;\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: calc(var(--toolbar-height) + var(--navigation-height));\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]     .vex-footer {\n  box-shadow: var(--footer-elevation);\n  position: fixed;\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n}\n\n.has-fixed-footer.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0dBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxRUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRGQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSwrRUFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxRUFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWJhY2tncm91bmQpO1xufVxuXG4uc2lkZW5hdiA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzLWZvb3RlciAuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn1cblxuLnNjcm9sbC1kaXNhYmxlZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtZGlzYWJsZWQgLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWRpc2FibGVkLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQsIC5zY3JvbGwtZGlzYWJsZWQuaGFzLWZvb3RlciAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbn1cblxuLmlzLW1vYmlsZSA6Om5nLWRlZXAgLnZleC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlzLW1vYmlsZSAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1iYXNlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ud2l0aC1zZWFyY2gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi53aXRoLXNlYXJjaCAuc2lkZW5hdi1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDUwdmgsIDApIHJvdGF0ZTNkKDEsIDAsIDAsIDMwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTB2dyA1MHZoO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnRvb2xiYXItZml4ZWQgOjpuZy1kZWVwIC52ZXgtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IHZhcigtLXRvb2xiYXItd2lkdGgpO1xuICB6LWluZGV4OiA1MDtcbn1cblxuLnRvb2xiYXItZml4ZWQgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXRvb2xiYXItaGVpZ2h0KSArIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XG59XG5cbi5oYXMtZml4ZWQtZm9vdGVyIDo6bmctZGVlcCAudmV4LWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IHZhcigtLWZvb3Rlci1lbGV2YXRpb24pO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5oYXMtZml4ZWQtZm9vdGVyIC5jb250ZW50IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIuc2Nyb2xsLWRpc2FibGVkIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xufSJdfQ== */"]
        });
        return LayoutComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/layout.module.ts":
    /*!******************************************!*\
      !*** ./src/@vex/layout/layout.module.ts ***!
      \******************************************/

    /*! exports provided: LayoutModule */

    /***/
    function srcVexLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout.component */
      "./src/@vex/layout/layout.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/progress-bar/progress-bar.module */
      "./src/@vex/components/progress-bar/progress-bar.module.ts");
      /* harmony import */


      var _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/search/search.module */
      "./src/@vex/components/search/search.module.ts");

      var LayoutModule = /*@__PURE__*/function () {
        var LayoutModule = function LayoutModule() {
          _classCallCheck(this, LayoutModule);
        };

        LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LayoutModule
        });
        LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LayoutModule_Factory(t) {
            return new (t || LayoutModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"]]]
        });
        return LayoutModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
          declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"]],
          exports: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/navigation/navigation.component.ts":
    /*!************************************************************!*\
      !*** ./src/@vex/layout/navigation/navigation.component.ts ***!
      \************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcVexLayoutNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.component */
      "./src/@vex/components/navigation-item/navigation-item.component.ts");

      function NavigationComponent_vex_navigation_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-navigation-item", 2);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
        }
      }

      var NavigationComponent = /*@__PURE__*/function () {
        var NavigationComponent = /*#__PURE__*/function () {
          function NavigationComponent(navigationService) {
            _classCallCheck(this, NavigationComponent);

            this.navigationService = navigationService;
            this.items = this.navigationService.items;
          }

          _createClass(NavigationComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NavigationComponent;
        }();

        NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
          return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
        };

        NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NavigationComponent,
          selectors: [["vex-navigation"]],
          decls: 2,
          vars: 1,
          consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "navigation"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
          template: function NavigationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
            }
          },
          directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_5__["NavigationItemComponent"]],
          styles: ["[_nghost-%COMP%] {\n  background: var(--navigation-background);\n  display: block;\n  height: var(--navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: var(--navigation-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXZpZ2F0aW9uLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpO1xufSJdfQ== */"]
        });
        return NavigationComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/navigation/navigation.module.ts":
    /*!*********************************************************!*\
      !*** ./src/@vex/layout/navigation/navigation.module.ts ***!
      \*********************************************************/

    /*! exports provided: NavigationModule */

    /***/
    function srcVexLayoutNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
        return NavigationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navigation.component */
      "./src/@vex/layout/navigation/navigation.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.module */
      "./src/@vex/components/navigation-item/navigation-item.module.ts");
      /* harmony import */


      var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");

      var NavigationModule = /*@__PURE__*/function () {
        var NavigationModule = function NavigationModule() {
          _classCallCheck(this, NavigationModule);
        };

        NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: NavigationModule
        });
        NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function NavigationModule_Factory(t) {
            return new (t || NavigationModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_9__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]]]
        });
        return NavigationModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, {
          declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_9__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]],
          exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/quickpanel/quickpanel.component.ts":
    /*!************************************************************!*\
      !*** ./src/@vex/layout/quickpanel/quickpanel.component.ts ***!
      \************************************************************/

    /*! exports provided: QuickpanelComponent */

    /***/
    function srcVexLayoutQuickpanelQuickpanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickpanelComponent", function () {
        return QuickpanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

      var _c0 = function _c0() {
        return [];
      };

      var QuickpanelComponent = /*@__PURE__*/function () {
        var QuickpanelComponent = /*#__PURE__*/function () {
          function QuickpanelComponent() {
            _classCallCheck(this, QuickpanelComponent);

            this.date = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().toFormat('DD');
            this.dayName = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().toFormat('EEEE');
          }

          _createClass(QuickpanelComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return QuickpanelComponent;
        }();

        QuickpanelComponent.ɵfac = function QuickpanelComponent_Factory(t) {
          return new (t || QuickpanelComponent)();
        };

        QuickpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: QuickpanelComponent,
          selectors: [["vex-quickpanel"]],
          decls: 67,
          vars: 16,
          consts: [[1, "body-2", "p-6", "bg-primary", "text-primary-contrast"], [1, "display-1"], ["matSubheader", ""], ["mat-list-item", "", 3, "routerLink"], ["matLine", ""], ["matRipple", "", 1, "list-item"], [1, "progress-bar"], ["color", "primary", "mode", "determinate", "value", "71"], ["color", "accent", "mode", "determinate", "value", "34"], ["color", "warn", "mode", "determinate", "value", "54"]],
          template: function QuickpanelComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TODAY");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UPCOMING EVENTS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Business Meeting");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In 16 Minutes, Meeting Room");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ask for Vacation");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "12:00 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dinner with Sophie");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "18:30 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Deadline for Project X");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "21:00 PM");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TODO-LIST");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Invite Jack to play golf");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Added: 6 hours ago");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Get to know Angular more");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Added: 2 days ago");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Configure that new router");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Added: 5 days ago");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-divider");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SERVER STATISTICS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "CPU Load (71% / 100%)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-progress-bar", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "RAM Usage (6,175 MB / 16,384 MB)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-progress-bar", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CPU Temp (43\xB0 / 80\xB0)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "mat-progress-bar", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dayName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
            }
          },
          directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]],
          styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\nh3[_ngcontent-%COMP%] {\n  padding: 16px 16px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font: var(--font-subheading-2);\n  justify-content: center;\n  min-height: 72px;\n  padding: 0 var(--padding-16);\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.list-item[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9xdWlja3BhbmVsL3F1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwdnc7XG59XG5cbmgzIHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQ6IHZhcigtLWZvbnQtc3ViaGVhZGluZy0yKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcycHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy0xNik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */"]
        });
        return QuickpanelComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/quickpanel/quickpanel.module.ts":
    /*!*********************************************************!*\
      !*** ./src/@vex/layout/quickpanel/quickpanel.module.ts ***!
      \*********************************************************/

    /*! exports provided: QuickpanelModule */

    /***/
    function srcVexLayoutQuickpanelQuickpanelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickpanelModule", function () {
        return QuickpanelModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _quickpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quickpanel.component */
      "./src/@vex/layout/quickpanel/quickpanel.component.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      var QuickpanelModule = /*@__PURE__*/function () {
        var QuickpanelModule = function QuickpanelModule() {
          _classCallCheck(this, QuickpanelModule);
        };

        QuickpanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: QuickpanelModule
        });
        QuickpanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function QuickpanelModule_Factory(t) {
            return new (t || QuickpanelModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]]]
        });
        return QuickpanelModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuickpanelModule, {
          declarations: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_2__["QuickpanelComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]],
          exports: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_2__["QuickpanelComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts":
    /*!************************************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts ***!
      \************************************************************************/

    /*! exports provided: SidenavItemComponent */

    /***/
    function srcVexLayoutSidenavSidenavItemSidenavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavItemComponent", function () {
        return SidenavItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../animations/dropdown.animation */
      "./src/@vex/animations/dropdown.animation.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-take-until-destroy */
      "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-keyboard-arrow-right */
      "./node_modules/@iconify/icons-ic/twotone-keyboard-arrow-right.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

      function SidenavItemComponent_a_0_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 7);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r4.item.icon);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function SidenavItemComponent_a_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r5.item.badge.bgClass, ctx_r5.item.badge.textClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.item.badge.value);
        }
      }

      var _c1 = function _c1() {
        return {
          exact: false
        };
      };

      function SidenavItemComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavItemComponent_a_0_mat_icon_1_Template, 1, 1, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavItemComponent_a_0_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.openLink(ctx_r6.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavItemComponent_a_0_span_4_Template, 2, 5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fragment", ctx_r0.item.fragment)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("routerLink", ctx_r0.item.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
        }
      }

      function SidenavItemComponent_div_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 7);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r8.item.icon);
        }
      }

      function SidenavItemComponent_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r9.item.badge.bgClass, ctx_r9.item.badge.textClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.item.badge.value);
        }
      }

      function SidenavItemComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.item.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavItemComponent_div_1_mat_icon_1_Template, 1, 1, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.openLink(ctx_r12.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavItemComponent_div_1_span_4_Template, 2, 5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.level === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("HOLA ", ctx_r1.item.label, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
        }
      }

      function SidenavItemComponent_ng_container_2_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 7);
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r13.item.icon);
        }
      }

      function SidenavItemComponent_ng_container_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r14.item.badge.bgClass, ctx_r14.item.badge.textClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.item.badge.value);
        }
      }

      function SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-sidenav-item", 15);
        }

        if (rf & 2) {
          var subItem_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", subItem_r16)("level", ctx_r15.level + 1);
        }
      }

      function SidenavItemComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.toggleOpen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_mat_icon_2_Template, 1, 1, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavItemComponent_ng_container_2_span_5_Template, 2, 5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template, 1, 2, "vex-sidenav-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.isOpen || ctx_r2.isActive)("open", ctx_r2.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.level === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.item.label, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item.badge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r2.icKeyboardArrowRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@dropdown", ctx_r2.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
        }
      }

      function SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-sidenav-item", 15);
        }

        if (rf & 2) {
          var subItem_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", subItem_r20)("level", 0);
        }
      }

      function SidenavItemComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template, 1, 2, "vex-sidenav-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.item.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.item.children);
        }
      }

      var SidenavItemComponent = /*@__PURE__*/function () {
        var SidenavItemComponent = /*#__PURE__*/function () {
          function SidenavItemComponent(router, cd, navigationService) {
            _classCallCheck(this, SidenavItemComponent);

            this.router = router;
            this.cd = cd;
            this.navigationService = navigationService;
            this.icKeyboardArrowRight = _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_5___default.a;
            this.isLink = this.navigationService.isLink;
            this.isDropdown = this.navigationService.isDropdown;
            this.isSubheading = this.navigationService.isSubheading;
          }

          _createClass(SidenavItemComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this11 = this;

              this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
                return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
                return _this11.isDropdown(_this11.item);
              }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function () {
                _this11.onRouteChange();
              });
              this.navigationService.openChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
                return _this11.isDropdown(_this11.item);
              }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (item) {
                return _this11.onOpenChange(item);
              });
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
                this.onRouteChange();
              }
            }
          }, {
            key: "toggleOpen",
            value: function toggleOpen() {
              this.isOpen = !this.isOpen;
              this.navigationService.triggerOpenChange(this.item);
              this.cd.markForCheck();
            }
          }, {
            key: "onOpenChange",
            value: function onOpenChange(item) {
              if (this.isChildrenOf(this.item, item)) {
                return;
              }

              if (this.hasActiveChilds(this.item)) {
                return;
              }

              if (this.item !== item) {
                this.isOpen = false;
                this.cd.markForCheck();
              }
            }
          }, {
            key: "onRouteChange",
            value: function onRouteChange() {
              if (this.hasActiveChilds(this.item)) {
                this.isActive = true;
                this.isOpen = true;
                this.navigationService.triggerOpenChange(this.item);
                this.cd.markForCheck();
              } else {
                this.isActive = false;
                this.isOpen = false;
                this.navigationService.triggerOpenChange(this.item);
                this.cd.markForCheck();
              }
            }
          }, {
            key: "isChildrenOf",
            value: function isChildrenOf(parent, item) {
              var _this12 = this;

              if (parent.children.indexOf(item) !== -1) {
                return true;
              }

              return parent.children.filter(function (child) {
                return _this12.isDropdown(child);
              }).some(function (child) {
                return _this12.isChildrenOf(child, item);
              });
            }
          }, {
            key: "openLink",
            value: function openLink(item) {
              /*if (item.route === 'mibotair') {
                window.open(
                  environment.mibotairUrl +
                    'v/w.php?t=' +
                    sessionStorage.getItem('workspace_token')
                );
              }*/
            }
          }, {
            key: "hasActiveChilds",
            value: function hasActiveChilds(parent) {
              var _this13 = this;

              return parent.children.some(function (child) {
                if (_this13.isDropdown(child)) {
                  return _this13.hasActiveChilds(child);
                }

                if (_this13.isLink(child) && !_this13.isFunction(child.route)) {
                  return _this13.router.isActive(child.route, false);
                }
              });
            }
          }, {
            key: "isFunction",
            value: function isFunction(prop) {
              return prop instanceof Function;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }, {
            key: "levelClass",
            get: function get() {
              return "item-level-".concat(this.level);
            }
          }]);

          return SidenavItemComponent;
        }();

        SidenavItemComponent.ɵfac = function SidenavItemComponent_Factory(t) {
          return new (t || SidenavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]));
        };

        SidenavItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SidenavItemComponent,
          selectors: [["vex-sidenav-item"]],
          hostVars: 2,
          hostBindings: function SidenavItemComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.levelClass);
            }
          },
          inputs: {
            item: "item",
            level: "level"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 4,
          vars: 4,
          consts: [["class", "item", "fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 3, "fragment", "routerLinkActiveOptions", "routerLink", 4, "ngIf"], ["class", "item", "fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 3, "click", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 1, "item", 3, "fragment", "routerLinkActiveOptions", "routerLink"], ["class", "item-icon", "fxFlex", "none", 3, "icIcon", 4, "ngIf"], ["fxFlex", "auto", 1, "item-label", 3, "click"], ["class", "item-badge", "fxFlex", "none", 3, "ngClass", 4, "ngIf"], ["fxFlex", "none", 1, "item-icon", 3, "icIcon"], ["fxFlex", "none", 1, "item-badge", 3, "ngClass"], ["fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 1, "item", 3, "click"], ["fxLayout", "row", "matRipple", "", 1, "item", 3, "click"], ["fxFlex", "auto", 1, "item-label"], ["fxFlex", "none", 1, "item-dropdown-icon", 3, "icIcon"], [1, "item-dropdown"], [3, "item", "level", 4, "ngFor", "ngForOf"], [3, "item", "level"], [1, "subheading"]],
          template: function SidenavItemComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidenavItemComponent_a_0_Template, 5, 7, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavItemComponent_div_1_Template, 5, 3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_Template, 9, 10, "ng-container", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDropdown(ctx.item));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], SidenavItemComponent],
          styles: [".item[_ngcontent-%COMP%] {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n  padding: var(--padding-8) var(--sidenav-item-padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  border-left: var(--sidenav-item-border);\n}\n\n.item[_ngcontent-%COMP%]:hover, .item.active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-background-active);\n  border-left-color: var(--sidenav-item-border-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-icon[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-label[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-dropdown-icon[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n\n.item.open[_ngcontent-%COMP%]   .item-dropdown-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.item-level-1[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n}\n\n.item-level-1[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-2[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n}\n\n.item-level-2[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-3[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n}\n\n.item-level-3[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-4[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n}\n\n.item-level-4[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-5[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n}\n\n.item-level-5[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-6[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n}\n\n.item-level-6[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-icon[_ngcontent-%COMP%], .item-label[_ngcontent-%COMP%], .item-dropdown-icon[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.item-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color);\n  font-size: var(--sidenav-item-icon-size);\n  height: var(--sidenav-item-icon-size);\n  -webkit-margin-end: var(--sidenav-item-icon-gap);\n          margin-inline-end: var(--sidenav-item-icon-gap);\n  width: var(--sidenav-item-icon-size);\n}\n\n.item-label[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item-badge[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  padding: 0 7px;\n  text-align: center;\n}\n\n.item-dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  transform: rotate(0deg) !important;\n  width: 18px;\n}\n\n.item-dropdown[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  font: var(--font-caption);\n  margin-top: var(--padding);\n  padding: var(--padding-12) var(--padding);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYtaXRlbS9zaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpREFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdEQUFBO1VBQUEsK0NBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtVQUFBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtVQUFBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9sYXlvdXQvc2lkZW5hdi9zaWRlbmF2LWl0ZW0vc2lkZW5hdi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItbGVmdDogdmFyKC0tc2lkZW5hdi1pdGVtLWJvcmRlcik7XG59XG5cbi5pdGVtOmhvdmVyLCAuaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tYmFja2dyb3VuZC1hY3RpdmUpO1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWJvcmRlci1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1sYWJlbCwgLml0ZW0uYWN0aXZlIC5pdGVtLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1kcm9wZG93bi1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0tZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbn1cblxuLml0ZW0ub3BlbiAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAwKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogMSkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDIpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAzKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogNCkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDUpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5pdGVtLWljb24sIC5pdGVtLWxhYmVsLCAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi5pdGVtLWxhYmVsIHtcbiAgZmxleDogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pdGVtLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLml0ZW0tZHJvcGRvd24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZyk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"],
          data: {
            animation: [_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_1__["dropdownAnimation"]]
          },
          changeDetection: 0
        });
        return SidenavItemComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SidenavItemModule */

    /***/
    function srcVexLayoutSidenavSidenavItemSidenavItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavItemModule", function () {
        return SidenavItemModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidenav-item.component */
      "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

      var SidenavItemModule = /*@__PURE__*/function () {
        var SidenavItemModule = function SidenavItemModule() {
          _classCallCheck(this, SidenavItemModule);
        };

        SidenavItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SidenavItemModule
        });
        SidenavItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SidenavItemModule_Factory(t) {
            return new (t || SidenavItemModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]]]
        });
        return SidenavItemModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavItemModule, {
          declarations: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__["SidenavItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
          exports: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__["SidenavItemComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav.component.ts":
    /*!******************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav.component.ts ***!
      \******************************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function srcVexLayoutSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-layers */
      "./node_modules/@iconify/icons-ic/twotone-layers.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-radio-button-checked */
      "./node_modules/@iconify/icons-ic/twotone-radio-button-checked.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-radio-button-unchecked */
      "./node_modules/@iconify/icons-ic/twotone-radio-button-unchecked.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _app_services_utils_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../app/services/utils/user/user.service */
      "./src/app/services/utils/user/user.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/scrollbar/scrollbar.component */
      "./src/@vex/components/scrollbar/scrollbar.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./sidenav-item/sidenav-item.component */
      "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts");

      function SidenavComponent_button_8_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 9);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r3.icRadioButtonChecked);
        }
      }

      function SidenavComponent_button_8_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 9);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r4.icRadioButtonUnchecked);
        }
      }

      function SidenavComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.toggleCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_button_8_mat_icon_1_Template, 1, 1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_button_8_mat_icon_2_Template, 1, 1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
        }
      }

      function SidenavComponent_div_11_vex_sidenav_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-sidenav-item", 12);
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r8)("level", 0);
        }
      }

      function SidenavComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_11_vex_sidenav_item_1_Template, 1, 2, "vex-sidenav-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items)("ngForTrackBy", ctx_r1.trackByRoute);
        }
      }

      function SidenavComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SidenavComponent = /*@__PURE__*/function () {
        var SidenavComponent = /*#__PURE__*/function () {
          function SidenavComponent(navigationService, layoutService, configService, usersService) {
            _classCallCheck(this, SidenavComponent);

            this.navigationService = navigationService;
            this.layoutService = layoutService;
            this.configService = configService;
            this.usersService = usersService;
            this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
            this.title$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
              return config.sidenav.title;
            }));
            this.imageUrl$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
              return config.sidenav.imageUrl;
            }));
            this.showCollapsePin$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
              return config.sidenav.showCollapsePin;
            }));
            this.icLayers = _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2___default.a;
            this.items = [];
            this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_1__["trackByRoute"];
            this.icRadioButtonChecked = _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_3___default.a;
            this.icRadioButtonUnchecked = _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_4___default.a;
            this.inLoad = false;
            this.servicesAvaiable = [];
          }

          _createClass(SidenavComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.items = [{
                icon: _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_3___default.a,
                label: 'Products',
                route: '/system/products',
                type: 'link'
              }, {
                icon: _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_3___default.a,
                label: 'Orders',
                route: '/system/orders',
                type: 'link'
              }];
            }
          }, {
            key: "onMouseEnter",
            value: function onMouseEnter() {
              this.layoutService.collapseOpenSidenav();
            }
          }, {
            key: "onMouseLeave",
            value: function onMouseLeave() {
              this.layoutService.collapseCloseSidenav();
            }
          }, {
            key: "toggleCollapse",
            value: function toggleCollapse() {
              this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
            }
          }, {
            key: "menuAvaiable",
            value: function menuAvaiable(code) {
              return true;
            }
          }]);

          return SidenavComponent;
        }();

        SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
          return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_utils_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]));
        };

        SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SidenavComponent,
          selectors: [["vex-sidenav"]],
          inputs: {
            collapsed: "collapsed"
          },
          decls: 13,
          vars: 17,
          consts: [[1, "sidenav", "flex", "flex-col", 3, "mouseenter", "mouseleave"], [1, "sidenav-toolbar", "flex-none", "flex", "items-center"], [1, "w-6", "select-none", "flex-none", 3, "src"], [1, "title", "ltr:pl-4", "rtl:pr-4", "select-none", "flex-auto"], ["class", "w-8 h-8 -mr-2 leading-none flex-none hidden lg:block", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "flex-auto"], ["class", "sidenav-items", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "w-8", "h-8", "-mr-2", "leading-none", "flex-none", "hidden", "lg:block", 3, "click"], ["size", "14px", 3, "icIcon", 4, "ngIf"], ["size", "14px", 3, "icIcon"], [1, "sidenav-items"], [3, "item", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "item", "level"], [1, "p-2"]],
          template: function SidenavComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_div_mouseenter_0_listener() {
                return ctx.onMouseEnter();
              })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() {
                return ctx.onMouseLeave();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidenavComponent_button_8_Template, 3, 2, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "vex-scrollbar", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidenavComponent_div_11_Template, 2, 2, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidenavComponent_div_12_Template, 3, 0, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", ctx.collapsed)("open", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 9, ctx.collapsed && ctx.collapsedOpen$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, ctx.title$), " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 15, ctx.showCollapsePin$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length === 0);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_11__["ScrollbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_15__["SidenavItemComponent"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
          styles: [".sidenav[_ngcontent-%COMP%] {\n  color: var(--sidenav-color);\n  height: 100%;\n  transition: var(--trans-ease-out);\n  width: var(--sidenav-width);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidenav-collapsed-width);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .sidenav-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-padding-start: var(--sidenav-item-padding);\n          padding-inline-start: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-icon {\n  -webkit-margin-end: var(--sidenav-item-padding);\n          margin-inline-end: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .subheading, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-badge, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-label {\n  opacity: 0;\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]     .subheading, .sidenav.collapsed[_ngcontent-%COMP%]     .item-badge, .sidenav.collapsed[_ngcontent-%COMP%]     .item-label {\n  transition: all 200ms var(--trans-ease-out-timing-function);\n}\n\n.sidenav.collapsed.open[_ngcontent-%COMP%] {\n  width: var(--sidenav-width);\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--toolbar-height);\n  padding: 0 var(--padding);\n  white-space: nowrap;\n  width: 100%;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  transition: padding var(--trans-ease-out-duration) var(--trans-ease-out-timing-function), opacity var(--trans-ease-out-duration) var(--trans-ease-out-timing-function);\n}\n\n.sidenav-items[_ngcontent-%COMP%] {\n  padding-top: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtEQUFBO1VBQUEsaURBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO1VBQUEsOENBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNLQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWNvbG9yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkIHtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgLnNpZGVuYXYtdG9vbGJhciAudGl0bGUge1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLml0ZW0taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZyk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuc3ViaGVhZGluZywgLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5pdGVtLWJhZGdlLCAuc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLml0ZW0tbGFiZWwge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItdmVydGljYWwge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkIDo6bmctZGVlcCAuc3ViaGVhZGluZywgLnNpZGVuYXYuY29sbGFwc2VkIDo6bmctZGVlcCAuaXRlbS1iYWRnZSwgLnNpZGVuYXYuY29sbGFwc2VkIDo6bmctZGVlcCAuaXRlbS1sYWJlbCB7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQub3BlbiB7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcbn1cblxuLnNpZGVuYXYtdG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZyk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIC50aXRsZSB7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiksIG9wYWNpdHkgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG5cbi5zaWRlbmF2LWl0ZW1zIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmcpO1xufSJdfQ== */"]
        });
        return SidenavComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav.module.ts":
    /*!***************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav.module.ts ***!
      \***************************************************/

    /*! exports provided: SidenavModule */

    /***/
    function srcVexLayoutSidenavSidenavModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavModule", function () {
        return SidenavModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidenav.component */
      "./src/@vex/layout/sidenav/sidenav.component.ts");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidenav-item/sidenav-item.module */
      "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts");
      /* harmony import */


      var _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/scrollbar/scrollbar.module */
      "./src/@vex/components/scrollbar/scrollbar.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

      var SidenavModule = /*@__PURE__*/function () {
        var SidenavModule = function SidenavModule() {
          _classCallCheck(this, SidenavModule);
        };

        SidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SidenavModule
        });
        SidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SidenavModule_Factory(t) {
            return new (t || SidenavModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_4__["SidenavItemModule"], _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]]]
        });
        return SidenavModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavModule, {
          declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_4__["SidenavItemModule"], _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]],
          exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: ToolbarNotificationsDropdownComponent */

    /***/
    function srcVexLayoutToolbarToolbarNotificationsToolbarNotificationsDropdownToolbarNotificationsDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsDropdownComponent", function () {
        return ToolbarNotificationsDropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-chevron-right */
      "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-notifications-off */
      "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-clear-all */
      "./node_modules/@iconify/icons-ic/twotone-clear-all.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-shopping-basket */
      "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-account-circle */
      "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-insert-chart */
      "./node_modules/@iconify/icons-ic/twotone-insert-chart.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-check-circle */
      "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-description */
      "./node_modules/@iconify/icons-ic/twotone-description.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-feedback */
      "./node_modules/@iconify/icons-ic/twotone-feedback.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-verified-user */
      "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-file-copy */
      "./node_modules/@iconify/icons-ic/twotone-file-copy.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../../pipes/relative-date-time/relative-date-time.pipe */
      "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");

      var _c0 = function _c0() {
        return [];
      };

      function ToolbarNotificationsDropdownComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ic-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "relativeDateTime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("read", notification_r2.read);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", notification_r2.icon)("ngClass", notification_r2.colorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r2.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, notification_r2.datetime));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r0.icChevronRight);
        }
      }

      var ToolbarNotificationsDropdownComponent = /*@__PURE__*/function () {
        var ToolbarNotificationsDropdownComponent = /*#__PURE__*/function () {
          function ToolbarNotificationsDropdownComponent() {
            _classCallCheck(this, ToolbarNotificationsDropdownComponent);

            this.notifications = [{
              id: '1',
              label: 'New Order Received',
              icon: _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7___default.a,
              colorClass: 'text-primary',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 1
              })
            }, {
              id: '2',
              label: 'New customer has registered',
              icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8___default.a,
              colorClass: 'text-orange',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 2
              })
            }, {
              id: '3',
              label: 'Campaign statistics are available',
              icon: _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9___default.a,
              colorClass: 'text-purple',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 5
              })
            }, {
              id: '4',
              label: 'Project has been approved',
              icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10___default.a,
              colorClass: 'text-green',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 9
              })
            }, {
              id: '5',
              label: 'Client reports are available',
              icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11___default.a,
              colorClass: 'text-primary',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 30
              })
            }, {
              id: '6',
              label: 'New review received',
              icon: _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12___default.a,
              colorClass: 'text-orange',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 40
              }),
              read: true
            }, {
              id: '7',
              label: '22 verified registrations',
              icon: _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13___default.a,
              colorClass: 'text-green',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 60
              })
            }, {
              id: '8',
              label: 'New files available',
              icon: _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14___default.a,
              colorClass: 'text-amber',
              datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
                hour: 90
              })
            }];
            this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default.a;
            this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4___default.a;
            this.icClearAll = _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6___default.a;
            this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5___default.a;
            this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackById"];
          }

          _createClass(ToolbarNotificationsDropdownComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ToolbarNotificationsDropdownComponent;
        }();

        ToolbarNotificationsDropdownComponent.ɵfac = function ToolbarNotificationsDropdownComponent_Factory(t) {
          return new (t || ToolbarNotificationsDropdownComponent)();
        };

        ToolbarNotificationsDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ToolbarNotificationsDropdownComponent,
          selectors: [["vex-toolbar-notifications-dropdown"]],
          decls: 24,
          vars: 7,
          consts: [[1, "dropdown"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-header"], [1, "dropdown-heading"], [1, "dropdown-subheading"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "notifications-header-icon", 3, "icIcon"], [1, "dropdown-content"], ["class", "notification", "fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 3, "read", "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "dropdown-footer"], ["color", "primary", "mat-button", "", "type", "button"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], [3, "icIcon"], ["fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 1, "notification", 3, "routerLink"], ["fxFlex", "none", "size", "24px", 1, "notification-icon", 3, "icon", "ngClass"], ["fxFlex", "auto"], [1, "notification-label"], [1, "notification-description"], ["fxFlex", "none", 1, "notification-chevron", 3, "icIcon"]],
          template: function ToolbarNotificationsDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Notifications");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarNotificationsDropdownComponent_a_10_Template, 9, 11, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MARK ALL AS READ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 10, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mark all as read");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-icon", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Disable Notifications");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You have ", ctx.notifications.length, " new notifications.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSettings);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackById);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icClearAll);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icNotificationsOff);
            }
          },
          directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["DefaultClassDirective"]],
          pipes: [_pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_24__["RelativeDateTimePipe"]],
          styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  box-shadow: var(--elevation-z6);\n  color: rgb(var(--color-primary-contrast));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 291px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding);\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  -webkit-margin-end: var(--padding);\n          margin-inline-end: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7VUFBQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo2KTtcbiAgY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KSk7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAyOTFweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuLm5vdGlmaWNhdGlvbi5yZWFkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iXX0= */"]
        });
        return ToolbarNotificationsDropdownComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ToolbarNotificationsComponent */

    /***/
    function srcVexLayoutToolbarToolbarNotificationsToolbarNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsComponent", function () {
        return ToolbarNotificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-notifications-active */
      "./node_modules/@iconify/icons-ic/twotone-notifications-active.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../components/popover/popover.service */
      "./src/@vex/components/popover/popover.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var _c0 = ["originRef"];

      var ToolbarNotificationsComponent = /*@__PURE__*/function () {
        var ToolbarNotificationsComponent = /*#__PURE__*/function () {
          function ToolbarNotificationsComponent(popover, cd) {
            _classCallCheck(this, ToolbarNotificationsComponent);

            this.popover = popover;
            this.cd = cd;
            this.icNotificationsActive = _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2___default.a;
          }

          _createClass(ToolbarNotificationsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "showPopover",
            value: function showPopover() {
              var _this14 = this;

              this.dropdownOpen = true;
              this.cd.markForCheck();
              var popoverRef = this.popover.open({
                content: _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarNotificationsDropdownComponent"],
                origin: this.originRef,
                offsetY: 12,
                position: [{
                  originX: 'center',
                  originY: 'top',
                  overlayX: 'center',
                  overlayY: 'bottom'
                }, {
                  originX: 'end',
                  originY: 'bottom',
                  overlayX: 'end',
                  overlayY: 'top'
                }]
              });
              popoverRef.afterClosed$.subscribe(function () {
                _this14.dropdownOpen = false;

                _this14.cd.markForCheck();
              });
            }
          }]);

          return ToolbarNotificationsComponent;
        }();

        ToolbarNotificationsComponent.ɵfac = function ToolbarNotificationsComponent_Factory(t) {
          return new (t || ToolbarNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__["PopoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
        };

        ToolbarNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ToolbarNotificationsComponent,
          selectors: [["vex-toolbar-notifications"]],
          viewQuery: function ToolbarNotificationsComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originRef = _t.first);
            }
          },
          decls: 3,
          vars: 3,
          consts: [["mat-icon-button", "", "type", "button", 1, "button", 3, "click"], ["originRef", ""], [3, "icIcon"]],
          template: function ToolbarNotificationsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarNotificationsComponent_Template_button_click_0_listener() {
                return ctx.showPopover();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.dropdownOpen);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icNotificationsActive);
            }
          },
          directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconDirective"]],
          styles: [".button.active[_ngcontent-%COMP%] {\n  background: var(--background-hover);\n}\n\n.button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--toolbar-icon-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9sYXlvdXQvdG9vbGJhci90b29sYmFyLW5vdGlmaWNhdGlvbnMvdG9vbGJhci1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmJ1dHRvbiAubWF0LWljb24ge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWNvbG9yKTtcbn0iXX0= */"],
          changeDetection: 0
        });
        return ToolbarNotificationsComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: ToolbarNotificationsModule */

    /***/
    function srcVexLayoutToolbarToolbarNotificationsToolbarNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsModule", function () {
        return ToolbarNotificationsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar-notifications.component */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/popover/popover.module */
      "./src/@vex/components/popover/popover.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipes/relative-date-time/relative-date-time.module */
      "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ToolbarNotificationsModule = /*@__PURE__*/function () {
        var ToolbarNotificationsModule = function ToolbarNotificationsModule() {
          _classCallCheck(this, ToolbarNotificationsModule);
        };

        ToolbarNotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ToolbarNotificationsModule
        });
        ToolbarNotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ToolbarNotificationsModule_Factory(t) {
            return new (t || ToolbarNotificationsModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"]]]
        });
        return ToolbarNotificationsModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarNotificationsModule, {
          declarations: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarNotificationsComponent"], _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarNotificationsDropdownComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"]],
          exports: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarNotificationsComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ToolbarSearchComponent */

    /***/
    function srcVexLayoutToolbarToolbarSearchToolbarSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarSearchComponent", function () {
        return ToolbarSearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-search */
      "./node_modules/@iconify/icons-ic/twotone-search.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

      var _c0 = ["input"];

      var ToolbarSearchComponent = /*@__PURE__*/function () {
        var ToolbarSearchComponent = /*#__PURE__*/function () {
          function ToolbarSearchComponent(cd) {
            _classCallCheck(this, ToolbarSearchComponent);

            this.cd = cd;
            this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1___default.a;
          }

          _createClass(ToolbarSearchComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "open",
            value: function open() {
              var _this15 = this;

              this.isOpen = true;
              this.cd.markForCheck();
              setTimeout(function () {
                _this15.input.nativeElement.focus();
              }, 100);
            }
          }, {
            key: "close",
            value: function close() {
              this.isOpen = false;
              this.cd.markForCheck();
            }
          }]);

          return ToolbarSearchComponent;
        }();

        ToolbarSearchComponent.ɵfac = function ToolbarSearchComponent_Factory(t) {
          return new (t || ToolbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
        };

        ToolbarSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ToolbarSearchComponent,
          selectors: [["vex-toolbar-search"]],
          viewQuery: function ToolbarSearchComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
            }
          },
          decls: 8,
          vars: 3,
          consts: [["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-icon-button", "", 3, "click"], [3, "icIcon"], ["appearance", "outline", "fxFlex", "auto", 1, "search"], ["matInput", "", 3, "blur"], ["input", ""]],
          template: function ToolbarSearchComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarSearchComponent_Template_button_click_1_listener() {
                return ctx.open();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search\u2026");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ToolbarSearchComponent_Template_input_blur_6_listener() {
                return ctx.close();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSearch);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("search-open", ctx.isOpen);
            }
          },
          directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"]],
          styles: [".mat-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  opacity: 0;\n  overflow: hidden;\n  transition: var(--trans-ease-in-out);\n  visibility: hidden;\n  width: 0;\n}\n\n.search.search-open[_ngcontent-%COMP%] {\n  margin-left: var(--padding-8);\n  margin-right: var(--padding-8);\n  opacity: 1;\n  visibility: visible;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb24ge1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tb3V0KTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMDtcbn1cblxuLnNlYXJjaC5zZWFyY2gtb3BlbiB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHdpZHRoOiAyNTBweDtcbn0iXX0= */"],
          changeDetection: 0
        });
        return ToolbarSearchComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ToolbarSearchModule */

    /***/
    function srcVexLayoutToolbarToolbarSearchToolbarSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarSearchModule", function () {
        return ToolbarSearchModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar-search.component */
      "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ToolbarSearchModule = /*@__PURE__*/function () {
        var ToolbarSearchModule = function ToolbarSearchModule() {
          _classCallCheck(this, ToolbarSearchModule);
        };

        ToolbarSearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ToolbarSearchModule
        });
        ToolbarSearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ToolbarSearchModule_Factory(t) {
            return new (t || ToolbarSearchModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]]]
        });
        return ToolbarSearchModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarSearchModule, {
          declarations: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarSearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
          exports: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarSearchComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ToolbarUserDropdownComponent */

    /***/
    function srcVexLayoutToolbarToolbarUserToolbarUserDropdownToolbarUserDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarUserDropdownComponent", function () {
        return ToolbarUserDropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-person */
      "./node_modules/@iconify/icons-ic/twotone-person.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-account-circle */
      "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-check-circle */
      "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-access-time */
      "./node_modules/@iconify/icons-ic/twotone-access-time.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-do-not-disturb */
      "./node_modules/@iconify/icons-ic/twotone-do-not-disturb.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-offline-bolt */
      "./node_modules/@iconify/icons-ic/twotone-offline-bolt.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-chevron-right */
      "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-arrow-drop-down */
      "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-business */
      "./node_modules/@iconify/icons-ic/twotone-business.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-verified-user */
      "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-lock */
      "./node_modules/@iconify/icons-ic/twotone-lock.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-notifications-off */
      "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../components/popover/popover-ref */
      "./src/@vex/components/popover/popover-ref.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js"); // import icMoveToInbox from "@iconify/icons-ic/twotone-move-to-inbox";
      // import icListAlt from "@iconify/icons-ic/twotone-list-alt";
      // import icTableChart from "@iconify/icons-ic/twotone-table-chart";


      function ToolbarUserDropdownComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r4.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", item_r4.icon)("ngClass", item_r4.colorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r0.icChevronRight);
        }
      }

      function ToolbarUserDropdownComponent_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var status_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.setStatus(status_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ic-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", status_r5.icon)("ngClass", status_r5.colorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r5.label);
        }
      }

      var ToolbarUserDropdownComponent = /*@__PURE__*/function () {
        var ToolbarUserDropdownComponent = /*#__PURE__*/function () {
          function ToolbarUserDropdownComponent(cd, popoverRef) {
            _classCallCheck(this, ToolbarUserDropdownComponent);

            this.cd = cd;
            this.popoverRef = popoverRef;
            this.items = [{
              id: '1',
              icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4___default.a,
              label: 'Wharehouse',
              description: 'Go To Select Wharehouse',
              colorClass: 'text-teal',
              route: '/selector_cliente'
            }];
            this.statuses = [{
              id: 'online',
              label: 'Online',
              icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5___default.a,
              colorClass: 'text-green'
            }, {
              id: 'away',
              label: 'Away',
              icon: _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6___default.a,
              colorClass: 'text-orange'
            }, {
              id: 'dnd',
              label: 'Do not disturb',
              icon: _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7___default.a,
              colorClass: 'text-red'
            }, {
              id: 'offline',
              label: 'Offline',
              icon: _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8___default.a,
              colorClass: 'text-gray'
            }];
            this.activeStatus = this.statuses[0];
            this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_1__["trackById"];
            this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default.a;
            this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default.a;
            this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9___default.a;
            this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10___default.a;
            this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11___default.a;
            this.icVerifiedUser = _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12___default.a;
            this.icLock = _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13___default.a;
            this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14___default.a;
          }

          _createClass(ToolbarUserDropdownComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              //console.log('voy a mostra user:');
              this.getUsuario();
            }
          }, {
            key: "changeProfile",
            value: function changeProfile() {// this.abrilModalUser(null, LS.ACCION_EDITAR);
            }
          }, {
            key: "changePassword",
            value: function changePassword() {// this.abrilModalUser(null, LS.ACCION_EDITAR_PASSWORD);
            }
          }, {
            key: "mostrarPerfil",
            value: function mostrarPerfil() {// this.abrilModalUser(null, 'Consultar');
            } // Se abre el modal de usuario

          }, {
            key: "abrilModalUser",
            value: function abrilModalUser(data, accion) {// this.dialog
              // .open(UserModalComponent, {
              //     data: { data, accion }
              // })
              // .afterClosed()
              // .subscribe((data) => {
              // });
            }
          }, {
            key: "getUsuario",
            value: function getUsuario() {
              this.user = {
                displayName: '',
                email: ''
              };
              var chequeo = setInterval(function () {}, 500); //console.log('getUsuario toolbar-user:');
              //console.log(this.user);
              // this.user = new User(this.authService.getUserData());
            }
          }, {
            key: "setStatus",
            value: function setStatus(status) {
              this.activeStatus = status;
              this.cd.markForCheck();
            }
          }, {
            key: "close",
            value: function close() {
              // cerrar session
              this.popoverRef.close();
            }
          }]);

          return ToolbarUserDropdownComponent;
        }();

        ToolbarUserDropdownComponent.ɵfac = function ToolbarUserDropdownComponent_Factory(t) {
          return new (t || ToolbarUserDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_15__["PopoverRef"]));
        };

        ToolbarUserDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ToolbarUserDropdownComponent,
          selectors: [["vex-toolbar-user-dropdown"]],
          decls: 25,
          vars: 8,
          consts: [[1, "dropdown"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-header"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "dropdown-heading-icon"], [3, "icIcon"], [1, "dropdown-heading"], [1, "dropdown-content"], ["class", "notification", "fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-footer"], ["color", "primary", "mat-button", "", 3, "click"], ["xPosition", "before", "yPosition", "below"], ["statusMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["settingsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 1, "notification", 3, "routerLink"], ["fxFlex", "none", 1, "notification-icon", 3, "icIcon", "ngClass"], ["fxFlex", "auto"], [1, "notification-label"], [1, "notification-description"], ["fxFlex", "none", 1, "notification-chevron", 3, "icIcon"], ["inline", "true", "size", "24px", 3, "icon", "ngClass"]],
          template: function ToolbarUserDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarUserDropdownComponent_a_8_Template, 8, 6, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_Template_a_click_10_listener() {
                return ctx.close();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SALIR");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", 10, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ToolbarUserDropdownComponent_button_14_Template, 4, 3, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", 10, 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_Template_button_click_17_listener() {
                return ctx.changeProfile();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Change profile");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_Template_button_click_21_listener() {
                return ctx.changePassword();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-icon", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Change Password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icPerson);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.displayName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icVerifiedUser);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icLock);
            }
          },
          directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatAnchor"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["DefaultClassDirective"]],
          styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  padding-left: 0.75rem;\n  box-shadow: var(--elevation-z6);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999999px;\n  margin-right: var(--padding-12);\n  padding: var(--padding-8);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding-12);\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%] {\n  padding-left: var(--padding-12);\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:not(.dropdown-footer-select-caret) {\n  margin-right: var(--padding-8);\n  vertical-align: -7px !important;\n}\n\n.dropdown-footer-select-caret[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  vertical-align: -4px !important;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  margin-right: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItdXNlci90b29sYmFyLXVzZXItZHJvcGRvd24vdG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci11c2VyL3Rvb2xiYXItdXNlci1kcm9wZG93bi90b29sYmFyLXVzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnktY29udHJhc3QpKTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16Nik7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nLWljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5OXB4O1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctMTIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpO1xufVxuXG4uZHJvcGRvd24taGVhZGluZy1pY29uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QgLm1hdC1pY29uOm5vdCguZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCkge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHZlcnRpY2FsLWFsaWduOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0LWNhcmV0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogLTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIgLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xufVxuXG4ubm90aWZpY2F0aW9uLnJlYWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iXX0= */"],
          changeDetection: 0
        });
        return ToolbarUserDropdownComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts":
    /*!************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts ***!
      \************************************************************************/

    /*! exports provided: ToolbarUserComponent */

    /***/
    function srcVexLayoutToolbarToolbarUserToolbarUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarUserComponent", function () {
        return ToolbarUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-person */
      "./node_modules/@iconify/icons-ic/twotone-person.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../components/popover/popover.service */
      "./src/@vex/components/popover/popover.service.ts");
      /* harmony import */


      var src_app_services_wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/wharehouse/wharehouse.service */
      "./src/app/services/wharehouse/wharehouse.service.ts");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js"); // import { User } from 'src/app/clases/user';


      var ToolbarUserComponent = /*@__PURE__*/function () {
        var ToolbarUserComponent = /*#__PURE__*/function () {
          function ToolbarUserComponent(popover, cd, whareHouseService) {
            _classCallCheck(this, ToolbarUserComponent);

            this.popover = popover;
            this.cd = cd;
            this.whareHouseService = whareHouseService;
            this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default.a;
          }

          _createClass(ToolbarUserComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this16 = this;

              this.whareHouseService.selectedWharehouse$.subscribe(function (response) {
                console.log(response);
                _this16.user = {
                  displayName: 'User',
                  email: response.name
                };
              });
            }
          }, {
            key: "showPopover",
            value: function showPopover(originRef) {
              var _this17 = this;

              this.dropdownOpen = true;
              this.cd.markForCheck();
              var popoverRef = this.popover.open({
                content: _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarUserDropdownComponent"],
                origin: originRef,
                offsetY: 12,
                position: [{
                  originX: 'center',
                  originY: 'top',
                  overlayX: 'center',
                  overlayY: 'bottom'
                }, {
                  originX: 'end',
                  originY: 'bottom',
                  overlayX: 'end',
                  overlayY: 'top'
                }]
              });
              popoverRef.afterClosed$.subscribe(function () {
                _this17.dropdownOpen = false;

                _this17.cd.markForCheck();
              });
            }
          }]);

          return ToolbarUserComponent;
        }();

        ToolbarUserComponent.ɵfac = function ToolbarUserComponent_Factory(t) {
          return new (t || ToolbarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__["PopoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_4__["WhareService"]));
        };

        ToolbarUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ToolbarUserComponent,
          selectors: [["vex-toolbar-user"]],
          decls: 6,
          vars: 4,
          consts: [["matRipple", "", 1, "flex", "items-center", "rounded", "cursor-pointer", "relative", "trans-ease-out", "select-none", "py-1", "pr-1", "pl-3", "hover:bg-hover", 3, "click"], ["originRef", ""], ["fxHide.xs", "", 1, "body-1", "font-medium", "leading-snug", "ltr:mr-3", "rtl:ml-3"], [1, "rounded-full", "h-9", "w-9", "flex", "items-center", "justify-center", "text-primary", "bg-primary-light"], [3, "icIcon"]],
          template: function ToolbarUserComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserComponent_Template_div_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

                var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

                return ctx.showPopover(_r0);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-hover", ctx.dropdownOpen);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.user == null ? null : ctx.user.displayName) + " (" + (ctx.user == null ? null : ctx.user.email) + ")", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icPerson);
            }
          },
          directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconDirective"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return ToolbarUserComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ToolbarUserModule */

    /***/
    function srcVexLayoutToolbarToolbarUserToolbarUserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarUserModule", function () {
        return ToolbarUserModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar-user.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts");
      /* harmony import */


      var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipes/relative-date-time/relative-date-time.module */
      "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js"); // import { UserModalModule } from 'src/app/pages/sistema/user/user-modal/user-modal.module';


      var ToolbarUserModule = /*@__PURE__*/function () {
        var ToolbarUserModule = function ToolbarUserModule() {
          _classCallCheck(this, ToolbarUserModule);
        };

        ToolbarUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ToolbarUserModule
        });
        ToolbarUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ToolbarUserModule_Factory(t) {
            return new (t || ToolbarUserModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], // UserModalModule,
          _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"]]]
        });
        return ToolbarUserModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarUserModule, {
          declarations: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarUserComponent"], _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserDropdownComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], // UserModalModule,
          _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"]],
          exports: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarUserComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar.component.ts":
    /*!******************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar.component.ts ***!
      \******************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function srcVexLayoutToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-bookmarks */
      "./node_modules/@iconify/icons-ic/twotone-bookmarks.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-emojione/flag-for-flag-united-states */
      "./node_modules/@iconify/icons-emojione/flag-for-flag-united-states.js");
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_spain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-emojione/flag-for-flag-spain */
      "./node_modules/@iconify/icons-emojione/flag-for-flag-spain.js");
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_spain__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_emojione_flag_for_flag_spain__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-menu */
      "./node_modules/@iconify/icons-ic/twotone-menu.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-person-add */
      "./node_modules/@iconify/icons-ic/twotone-person-add.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-assignment-turned-in */
      "./node_modules/@iconify/icons-ic/twotone-assignment-turned-in.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-ballot */
      "./node_modules/@iconify/icons-ic/twotone-ballot.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-description */
      "./node_modules/@iconify/icons-ic/twotone-description.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-assignment */
      "./node_modules/@iconify/icons-ic/twotone-assignment.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-receipt */
      "./node_modules/@iconify/icons-ic/twotone-receipt.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-done-all */
      "./node_modules/@iconify/icons-ic/twotone-done-all.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-arrow-drop-down */
      "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-search */
      "./node_modules/@iconify/icons-ic/twotone-search.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../components/popover/popover.service */
      "./src/@vex/components/popover/popover.service.ts");
      /* harmony import */


      var src_app_services_utils_user_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/services/utils/user/user.service */
      "./src/app/services/utils/user/user.service.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./toolbar-user/toolbar-user.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.component */
      "./src/@vex/components/navigation-item/navigation-item.component.ts");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../navigation/navigation.component */
      "./src/@vex/layout/navigation/navigation.component.ts");

      var _c0 = function _c0() {
        return ["/"];
      };

      function ToolbarComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Wharehouse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx_r0.mobileQuery);
        }
      }

      function ToolbarComponent_div_5_vex_navigation_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-navigation-item", 14);
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
        }
      }

      function ToolbarComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarComponent_div_5_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx_r1.mobileQuery);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.navigationItems);
        }
      }

      function ToolbarComponent_vex_navigation_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-navigation", 15);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx_r2.mobileQuery);
        }
      }

      var ToolbarComponent = /*@__PURE__*/function () {
        var ToolbarComponent = /*#__PURE__*/function () {
          function ToolbarComponent(layoutService, configService, navigationService, popoverService, userService) {
            _classCallCheck(this, ToolbarComponent);

            this.layoutService = layoutService;
            this.configService = configService;
            this.navigationService = navigationService;
            this.popoverService = popoverService;
            this.userService = userService;
            this.navigationItems = this.navigationService.items;
            this.isHorizontalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
              return config.layout === 'horizontal';
            }));
            this.isVerticalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
              return config.layout === 'vertical';
            }));
            this.isNavbarInToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
              return config.navbar.position === 'in-toolbar';
            }));
            this.isNavbarBelowToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
              return config.navbar.position === 'below-toolbar';
            }));
            this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default.a;
            this.icBookmarks = _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1___default.a;
            this.emojioneUS = _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2___default.a;
            this.emojioneES = _iconify_icons_emojione_flag_for_flag_spain__WEBPACK_IMPORTED_MODULE_3___default.a;
            this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4___default.a;
            this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6___default.a;
            this.icAssignmentTurnedIn = _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7___default.a;
            this.icBallot = _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8___default.a;
            this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9___default.a;
            this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10___default.a;
            this.icReceipt = _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11___default.a;
            this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default.a;
            this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default.a;
          }

          _createClass(ToolbarComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this18 = this;

              this.projectChangeSubscription = this.navigationService.changeProject$.subscribe(function (projectEvent) {
                _this18.project = {
                  name: 'Cargando...'
                };
                console.log({
                  project: projectEvent
                });
                setTimeout(function () {
                  _this18.client = JSON.parse(sessionStorage.getItem('user_client'));
                  _this18.project = projectEvent;
                }, 1000);
              });
            }
          }, {
            key: "openQuickpanel",
            value: function openQuickpanel() {
              this.layoutService.openQuickpanel();
            }
          }, {
            key: "openSidenav",
            value: function openSidenav() {
              this.layoutService.openSidenav();
            }
          }, {
            key: "openSearch",
            value: function openSearch() {
              this.layoutService.openSearch();
            }
          }]);

          return ToolbarComponent;
        }();

        ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
          return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_15__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_17__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_18__["PopoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_user_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"]));
        };

        ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ToolbarComponent,
          selectors: [["vex-toolbar"]],
          hostVars: 2,
          hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shadow-b", ctx.hasShadow);
            }
          },
          inputs: {
            mobileQuery: "mobileQuery",
            hasShadow: "hasShadow"
          },
          decls: 15,
          vars: 15,
          consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "toolbar", "w-full", "px-gutter"], ["mat-icon-button", "", "type", "button", 3, "fxHide", "click"], [3, "icIcon"], ["class", "ltr:mr-4 rtl:ml-4 block", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "routerLink", 4, "ngIf"], ["class", "px-gutter", "fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "fxHide", 4, "ngIf"], ["fxFlex", ""], [1, "-mx-1", "flex", "items-center"], [1, "px-1"], [3, "fxHide", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "ltr:mr-4", "rtl:ml-4", "block", 3, "routerLink"], ["src", "assets/img/logo.svg", 1, "w-8", "select-none"], [1, "title", "ltr:pl-4", "rtl:pr-4", "m-0", "select-none", 3, "fxHide"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "px-gutter", 3, "fxHide"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], [3, "fxHide"]],
          template: function ToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_1_listener() {
                return ctx.openSidenav();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_a_3_Template, 4, 3, "a", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarComponent_div_5_Template, 2, 2, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "vex-toolbar-user");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToolbarComponent_vex_navigation_12_Template, 1, 1, "vex-navigation", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", !ctx.mobileQuery);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMenu);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.isVerticalLayout$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.isVerticalLayout$) && ctx.isNavbarInToolbar$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, ctx.isVerticalLayout$) && ctx.isNavbarBelowToolbar$));
            }
          },
          directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__["ContainerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_25__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_27__["ToolbarUserComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_29__["NavigationItemComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__["NavigationComponent"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__["AsyncPipe"]],
          styles: ["[_nghost-%COMP%] {\n  background: var(--toolbar-background);\n  box-sizing: border-box;\n  color: var(--toolbar-color);\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--toolbar-z-index);\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: var(--toolbar-height);\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: var(--toolbar-icon-color);\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--toolbar-color);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS10b29sYmFyLXotaW5kZXgpO1xufVxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xufVxuXG4ubWF0LWljb24ge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWNvbG9yKTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
        });
        return ToolbarComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar.module.ts":
    /*!***************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar.module.ts ***!
      \***************************************************/

    /*! exports provided: ToolbarModule */

    /***/
    function srcVexLayoutToolbarToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
        return ToolbarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar.component */
      "./src/@vex/layout/toolbar/toolbar.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./toolbar-notifications/toolbar-notifications.module */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts");
      /* harmony import */


      var _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./toolbar-user/toolbar-user.module */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts");
      /* harmony import */


      var _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./toolbar-search/toolbar-search.module */
      "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../navigation/navigation.module */
      "./src/@vex/layout/navigation/navigation.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.module */
      "./src/@vex/components/navigation-item/navigation-item.module.ts");
      /* harmony import */


      var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");

      var ToolbarModule = /*@__PURE__*/function () {
        var ToolbarModule = function ToolbarModule() {
          _classCallCheck(this, ToolbarModule);
        };

        ToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ToolbarModule
        });
        ToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ToolbarModule_Factory(t) {
            return new (t || ToolbarModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_8__["ToolbarNotificationsModule"], _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_9__["ToolbarUserModule"], _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarSearchModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_14__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__["ContainerModule"]]]
        });
        return ToolbarModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarModule, {
          declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_8__["ToolbarNotificationsModule"], _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_9__["ToolbarUserModule"], _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarSearchModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_14__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__["ContainerModule"]],
          exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts":
    /*!************************************************************************!*\
      !*** ./src/@vex/pipes/relative-date-time/relative-date-time.module.ts ***!
      \************************************************************************/

    /*! exports provided: RelativeDateTimeModule */

    /***/
    function srcVexPipesRelativeDateTimeRelativeDateTimeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelativeDateTimeModule", function () {
        return RelativeDateTimeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relative-date-time.pipe */
      "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");

      var RelativeDateTimeModule = /*@__PURE__*/function () {
        var RelativeDateTimeModule = function RelativeDateTimeModule() {
          _classCallCheck(this, RelativeDateTimeModule);
        };

        RelativeDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: RelativeDateTimeModule
        });
        RelativeDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function RelativeDateTimeModule_Factory(t) {
            return new (t || RelativeDateTimeModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return RelativeDateTimeModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelativeDateTimeModule, {
          declarations: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTimePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTimePipe"]]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts":
    /*!**********************************************************************!*\
      !*** ./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts ***!
      \**********************************************************************/

    /*! exports provided: RelativeDateTimePipe */

    /***/
    function srcVexPipesRelativeDateTimeRelativeDateTimePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelativeDateTimePipe", function () {
        return RelativeDateTimePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);

      var RelativeDateTimePipe = /*@__PURE__*/function () {
        var RelativeDateTimePipe = /*#__PURE__*/function () {
          function RelativeDateTimePipe() {
            _classCallCheck(this, RelativeDateTimePipe);
          }

          _createClass(RelativeDateTimePipe, [{
            key: "transform",
            value: function transform(value) {
              if (!value) {
                return;
              }

              if (!(value instanceof luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"])) {
                value = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromISO(value);
              }

              return value.toRelative();
            }
          }]);

          return RelativeDateTimePipe;
        }();

        RelativeDateTimePipe.ɵfac = function RelativeDateTimePipe_Factory(t) {
          return new (t || RelativeDateTimePipe)();
        };

        RelativeDateTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
          name: "relativeDateTime",
          type: RelativeDateTimePipe,
          pure: true
        });
        return RelativeDateTimePipe;
      }();
      /***/

    },

    /***/
    "./src/@vex/services/config.service.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/services/config.service.ts ***!
      \*********************************************/

    /*! exports provided: ConfigService */

    /***/
    function srcVexServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/merge-deep */
      "./src/@vex/utils/merge-deep.ts");
      /* harmony import */


      var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./configs */
      "./src/@vex/services/configs.ts");
      /* harmony import */


      var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../interfaces/config-name.model */
      "./src/@vex/interfaces/config-name.model.ts");
      /* harmony import */


      var _layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout.service */
      "./src/@vex/services/layout.service.ts");

      var ConfigService = /*@__PURE__*/function () {
        var ConfigService = /*#__PURE__*/function () {
          function ConfigService(document, layoutService) {
            var _this19 = this;

            _classCallCheck(this, ConfigService);

            this.document = document;
            this.layoutService = layoutService;
            this.defaultConfig = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_5__["ConfigName"].apollo;
            this.configs = _configs__WEBPACK_IMPORTED_MODULE_4__["configs"];
            this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.configs.find(function (c) {
              return c.id === _this19.defaultConfig;
            }));
            this.config$ = this._configSubject.asObservable();
            this.config$.subscribe(function (config) {
              return _this19._updateConfig(config);
            });
          }

          _createClass(ConfigService, [{
            key: "setConfig",
            value: function setConfig(config) {
              var settings = this.configs.find(function (c) {
                return c.id === config;
              });

              if (settings) {
                this._configSubject.next(settings);
              }
            }
          }, {
            key: "updateConfig",
            value: function updateConfig(config) {
              this._configSubject.next(Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_3__["mergeDeep"])(Object.assign({}, this._configSubject.getValue()), config));
            }
          }, {
            key: "_updateConfig",
            value: function _updateConfig(config) {
              var body = this.document.body;
              this.configs.forEach(function (c) {
                if (body.classList.contains(c.id)) {
                  body.classList.remove(c.id);
                }
              });
              body.classList.add(config.id);
              config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav(); // Workaround so charts and other externals know they have to resize on Layout switch

              if (window) {
                window.dispatchEvent(new Event('resize'));
                setTimeout(function () {
                  window.dispatchEvent(new Event('resize'));
                }, 200);
              }
            }
          }]);

          return ConfigService;
        }();

        ConfigService.ɵfac = function ConfigService_Factory(t) {
          return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]));
        };

        ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ConfigService,
          factory: ConfigService.ɵfac,
          providedIn: 'root'
        });
        return ConfigService;
      }();
      /***/

    },

    /***/
    "./src/@vex/services/configs.ts":
    /*!**************************************!*\
      !*** ./src/@vex/services/configs.ts ***!
      \**************************************/

    /*! exports provided: configs */

    /***/
    function srcVexServicesConfigsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configs", function () {
        return configs;
      });
      /* harmony import */


      var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/merge-deep */
      "./src/@vex/utils/merge-deep.ts");
      /* harmony import */


      var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../interfaces/config-name.model */
      "./src/@vex/interfaces/config-name.model.ts");

      var defaultConfig = {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].apollo,
        name: 'Apollo',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
        layout: 'horizontal',
        boxed: false,
        sidenav: {
          title: 'Wharehouse',
          imageUrl: 'assets/img/logo.svg',
          showCollapsePin: true,
          state: 'expanded'
        },
        toolbar: {
          fixed: true
        },
        navbar: {
          position: 'below-toolbar'
        },
        footer: {
          visible: true,
          fixed: true
        }
      };
      var configs = [defaultConfig, Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].hermes,
        name: 'Hermes',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
          fixed: false
        },
        footer: {
          fixed: false
        }
      }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].ares,
        name: 'Ares',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
        toolbar: {
          fixed: false
        },
        navbar: {
          position: 'in-toolbar'
        },
        footer: {
          fixed: false
        }
      }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].zeus,
        name: 'Zeus',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
        sidenav: {
          state: 'collapsed'
        }
      }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].ikaros,
        name: 'Ikaros',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
          fixed: false
        },
        navbar: {
          position: 'in-toolbar'
        },
        footer: {
          fixed: false
        }
      })];
      /***/
    },

    /***/
    "./src/@vex/services/layout.service.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/services/layout.service.ts ***!
      \*********************************************/

    /*! exports provided: LayoutService */

    /***/
    function srcVexServicesLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
        return LayoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");

      var LayoutService = /*@__PURE__*/function () {
        var LayoutService = /*#__PURE__*/function () {
          function LayoutService(router, breakpointObserver) {
            var _this20 = this;

            _classCallCheck(this, LayoutService);

            this.router = router;
            this.breakpointObserver = breakpointObserver;
            this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
            this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
            this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
            this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
            this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
            this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.searchOpen$ = this._searchOpen.asObservable();
            this.isDesktop$ = this.breakpointObserver.observe("(min-width: 1280px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
              return state.matches;
            }));
            this.ltLg$ = this.breakpointObserver.observe("(max-width: 1279px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
              return state.matches;
            }));
            this.gtMd$ = this.breakpointObserver.observe("(min-width: 960px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
              return state.matches;
            }));
            this.ltMd$ = this.breakpointObserver.observe("(max-width: 959px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
              return state.matches;
            }));
            this.gtSm$ = this.breakpointObserver.observe("(min-width: 600px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
              return state.matches;
            }));
            this.isMobile$ = this.breakpointObserver.observe("(max-width: 599px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
              return state.matches;
            }));

            this.isLtLg = function () {
              return _this20.breakpointObserver.isMatched("(max-width: 1279px)");
            };

            this.isMobile = function () {
              return _this20.breakpointObserver.isMatched("(max-width: 599px)");
            };
          }

          _createClass(LayoutService, [{
            key: "openQuickpanel",
            value: function openQuickpanel() {
              this._quickpanelOpenSubject.next(true);
            }
          }, {
            key: "closeQuickpanel",
            value: function closeQuickpanel() {
              this._quickpanelOpenSubject.next(false);
            }
          }, {
            key: "openSidenav",
            value: function openSidenav() {
              this._sidenavOpenSubject.next(true);
            }
          }, {
            key: "closeSidenav",
            value: function closeSidenav() {
              this._sidenavOpenSubject.next(false);
            }
          }, {
            key: "collapseSidenav",
            value: function collapseSidenav() {
              this._sidenavCollapsedSubject.next(true);
            }
          }, {
            key: "expandSidenav",
            value: function expandSidenav() {
              this._sidenavCollapsedSubject.next(false);
            }
          }, {
            key: "collapseOpenSidenav",
            value: function collapseOpenSidenav() {
              this._sidenavCollapsedOpenSubject.next(true);
            }
          }, {
            key: "collapseCloseSidenav",
            value: function collapseCloseSidenav() {
              this._sidenavCollapsedOpenSubject.next(false);
            }
          }, {
            key: "openConfigpanel",
            value: function openConfigpanel() {
              this._configpanelOpenSubject.next(true);
            }
          }, {
            key: "closeConfigpanel",
            value: function closeConfigpanel() {
              this._configpanelOpenSubject.next(false);
            }
          }, {
            key: "openSearch",
            value: function openSearch() {
              this._searchOpen.next(true);
            }
          }, {
            key: "closeSearch",
            value: function closeSearch() {
              this._searchOpen.next(false);
            }
          }, {
            key: "enableRTL",
            value: function enableRTL() {
              this.router.navigate([], {
                queryParams: {
                  rtl: "true"
                }
              });
            }
          }, {
            key: "disableRTL",
            value: function disableRTL() {
              this.router.navigate([], {
                queryParams: {
                  rtl: "false"
                }
              });
            }
          }]);

          return LayoutService;
        }();

        LayoutService.ɵfac = function LayoutService_Factory(t) {
          return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]));
        };

        LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: LayoutService,
          factory: LayoutService.ɵfac,
          providedIn: "root"
        });
        return LayoutService;
      }();
      /***/

    },

    /***/
    "./src/@vex/services/navigation.service.ts":
    /*!*************************************************!*\
      !*** ./src/@vex/services/navigation.service.ts ***!
      \*************************************************/

    /*! exports provided: NavigationService */

    /***/
    function srcVexServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var NavigationService = /*@__PURE__*/function () {
        var NavigationService = /*#__PURE__*/function () {
          function NavigationService() {
            _classCallCheck(this, NavigationService);

            this.items = [];
            this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.openChange$ = this._openChangeSubject.asObservable();
            this._changeProject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.changeProject$ = this._changeProject.asObservable();
          }

          _createClass(NavigationService, [{
            key: "triggerOpenChange",
            value: function triggerOpenChange(item) {
              this._openChangeSubject.next(item);
            }
          }, {
            key: "triggerChangeProject",
            value: function triggerChangeProject(eventData) {
              this._changeProject.next(eventData);
            }
          }, {
            key: "isLink",
            value: function isLink(item) {
              return item.type === 'link';
            }
          }, {
            key: "isDropdown",
            value: function isDropdown(item) {
              return item.type === 'dropdown';
            }
          }, {
            key: "isSubheading",
            value: function isSubheading(item) {
              return item.type === 'subheading';
            }
          }]);

          return NavigationService;
        }();

        NavigationService.ɵfac = function NavigationService_Factory(t) {
          return new (t || NavigationService)();
        };

        NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: NavigationService,
          factory: NavigationService.ɵfac,
          providedIn: 'root'
        });
        return NavigationService;
      }();
      /***/

    },

    /***/
    "./src/@vex/services/search.service.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/services/search.service.ts ***!
      \*********************************************/

    /*! exports provided: SearchService */

    /***/
    function srcVexServicesSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchService", function () {
        return SearchService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var SearchService = /*@__PURE__*/function () {
        var SearchService = function SearchService() {
          _classCallCheck(this, SearchService);

          this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
          this.valueChanges$ = this.valueChangesSubject.asObservable();
          this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.submit$ = this.submitSubject.asObservable();
          this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.isOpen$ = this.isOpenSubject.asObservable();
        };

        SearchService.ɵfac = function SearchService_Factory(t) {
          return new (t || SearchService)();
        };

        SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: SearchService,
          factory: SearchService.ɵfac,
          providedIn: 'root'
        });
        return SearchService;
      }();
      /***/

    },

    /***/
    "./src/@vex/services/splash-screen.service.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/services/splash-screen.service.ts ***!
      \****************************************************/

    /*! exports provided: SplashScreenService */

    /***/
    function srcVexServicesSplashScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenService", function () {
        return SplashScreenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var SplashScreenService = /*@__PURE__*/function () {
        var SplashScreenService = /*#__PURE__*/function () {
          function SplashScreenService(router, document, animationBuilder) {
            var _this21 = this;

            _classCallCheck(this, SplashScreenService);

            this.router = router;
            this.document = document;
            this.animationBuilder = animationBuilder;
            this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen');

            if (this.splashScreenElem) {
              this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
                return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
                return _this21.hide();
              });
            }
          }

          _createClass(SplashScreenService, [{
            key: "hide",
            value: function hide() {
              var _this22 = this;

              var player = this.animationBuilder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                opacity: 1
              }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                opacity: 0
              }))]).create(this.splashScreenElem);
              player.onDone(function () {
                return _this22.splashScreenElem.remove();
              });
              player.play();
            }
          }]);

          return SplashScreenService;
        }();

        SplashScreenService.ɵfac = function SplashScreenService_Factory(t) {
          return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]));
        };

        SplashScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: SplashScreenService,
          factory: SplashScreenService.ɵfac,
          providedIn: 'root'
        });
        return SplashScreenService;
      }();
      /***/

    },

    /***/
    "./src/@vex/services/style.service.ts":
    /*!********************************************!*\
      !*** ./src/@vex/services/style.service.ts ***!
      \********************************************/

    /*! exports provided: Style, StyleService */

    /***/
    function srcVexServicesStyleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Style", function () {
        return Style;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleService", function () {
        return StyleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-take-until-destroy */
      "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");

      var Style = /*@__PURE__*/function (Style) {
        Style["light"] = "vex-style-light";
        Style["default"] = "vex-style-default";
        Style["dark"] = "vex-style-dark";
        return Style;
      }({});

      var StyleService = /*@__PURE__*/function () {
        var StyleService = /*#__PURE__*/function () {
          function StyleService(document) {
            var _this23 = this;

            _classCallCheck(this, StyleService);

            this.document = document;
            this.defaultStyle = Style["default"];
            this._styleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.defaultStyle);
            this.style$ = this._styleSubject.asObservable();
            this.style$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (style) {
              return _this23._updateStyle(style);
            });
          }

          _createClass(StyleService, [{
            key: "setStyle",
            value: function setStyle(style) {
              this._styleSubject.next(style);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }, {
            key: "_updateStyle",
            value: function _updateStyle(style) {
              var body = this.document.body;
              Object.values(Style).filter(function (s) {
                return s !== style;
              }).forEach(function (value) {
                if (body.classList.contains(value)) {
                  body.classList.remove(value);
                }
              });
              body.classList.add(style);
            }
          }]);

          return StyleService;
        }();

        StyleService.ɵfac = function StyleService_Factory(t) {
          return new (t || StyleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };

        StyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: StyleService,
          factory: StyleService.ɵfac,
          providedIn: 'root'
        });
        return StyleService;
      }();
      /***/

    },

    /***/
    "./src/@vex/utils/check-router-childs-data.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/utils/check-router-childs-data.ts ***!
      \****************************************************/

    /*! exports provided: checkRouterChildsData, getAllParams */

    /***/
    function srcVexUtilsCheckRouterChildsDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkRouterChildsData", function () {
        return checkRouterChildsData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllParams", function () {
        return getAllParams;
      });

      function checkRouterChildsData(route, compareWith) {
        if (compareWith(route.data)) {
          return true;
        }

        if (!route.firstChild) {
          return false;
        }

        return checkRouterChildsData(route.firstChild, compareWith);
      }
      /**
       * Used to get params from children in their parent
       */


      function getAllParams(route) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

        if (route.params) {
          for (var _i2 = 0, _Object$keys = Object.keys(route.params); _i2 < _Object$keys.length; _i2++) {
            var key = _Object$keys[_i2];
            result.set(key, route.params[key]);
          }
        }

        if (!route.firstChild) {
          return result;
        }

        return getAllParams(route.firstChild, result);
      }
      /***/

    },

    /***/
    "./src/@vex/utils/merge-deep.ts":
    /*!**************************************!*\
      !*** ./src/@vex/utils/merge-deep.ts ***!
      \**************************************/

    /*! exports provided: mergeDeep */

    /***/
    function srcVexUtilsMergeDeepTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeDeep", function () {
        return mergeDeep;
      });
      /**
       * Performs a deep merge of `source` into `target`.
       * Mutates `target` only but not its objects and arrays.
       *
       * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
       */


      function mergeDeep(target, source) {
        var isObject = function isObject(obj) {
          return obj && typeof obj === 'object';
        };

        if (!isObject(target) || !isObject(source)) {
          return source;
        }

        Object.keys(source).forEach(function (key) {
          var targetValue = target[key];
          var sourceValue = source[key];

          if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
          } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
          } else {
            target[key] = sourceValue;
          }
        });
        return target;
      }
      /***/

    },

    /***/
    "./src/@vex/utils/track-by.ts":
    /*!************************************!*\
      !*** ./src/@vex/utils/track-by.ts ***!
      \************************************/

    /*! exports provided: trackByRoute, trackById, trackByKey, trackByValue, trackByLabel */

    /***/
    function srcVexUtilsTrackByTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByRoute", function () {
        return trackByRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackById", function () {
        return trackById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByKey", function () {
        return trackByKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByValue", function () {
        return trackByValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByLabel", function () {
        return trackByLabel;
      });

      function trackByRoute(index, item) {
        return item.route;
      }

      function trackById(index, item) {
        return item.id;
      }

      function trackByKey(index, item) {
        return item.key;
      }

      function trackByValue(index, value) {
        return value;
      }

      function trackByLabel(index, value) {
        return value.label;
      }
      /***/

    },

    /***/
    "./src/@vex/vex.module.ts":
    /*!********************************!*\
      !*** ./src/@vex/vex.module.ts ***!
      \********************************/

    /*! exports provided: VexModule */

    /***/
    function srcVexVexModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VexModule", function () {
        return VexModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/layout.module */
      "./src/@vex/layout/layout.module.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

      var VexModule = /*@__PURE__*/function () {
        var VexModule = function VexModule() {
          _classCallCheck(this, VexModule);
        };

        VexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: VexModule
        });
        VexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function VexModule_Factory(t) {
            return new (t || VexModule)();
          },
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'fill'
            }
          }],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]
        });
        return VexModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VexModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]],
          exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_guards_access_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/guards/access.guard */
      "./src/app/services/guards/access.guard.ts");
      /* harmony import */


      var _modules_custom_layout_custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/custom-layout/custom-layout/custom-layout.component */
      "./src/app/modules/custom-layout/custom-layout/custom-layout.component.ts");

      var routes = [{
        path: '',
        component: _modules_custom_layout_custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_3__["CustomLayoutComponent"],
        canActivate: [_services_guards_access_guard__WEBPACK_IMPORTED_MODULE_2__["AccessGuard"]],
        runGuardsAndResolvers: 'always',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-dashboard-dashboard-module */
            "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! ./pages/dashboard/dashboard.module */
            "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'system',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-voicebot-voicebot-module */
            "pages-voicebot-voicebot-module").then(__webpack_require__.bind(null,
            /*! ./pages/voicebot/voicebot.module */
            "./src/app/pages/voicebot/voicebot.module.ts")).then(function (m) {
              return m.AdminModule;
            });
          }
        }, {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("default~order-list-list-order-module~pages-client-selector-client-selector-module~pages-login-login-~2286d86e"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'logout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-logout-logout-module */
          "pages-logout-logout-module").then(__webpack_require__.bind(null,
          /*! ./pages/logout/logout.module */
          "./src/app/pages/logout/logout.module.ts")).then(function (m) {
            return m.LogoutModule;
          });
        }
      }, {
        path: 'selector_cliente',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-client-selector-client-selector-module */
          [__webpack_require__.e("default~order-list-list-order-module~pages-client-selector-client-selector-module~pages-login-login-~2286d86e"), __webpack_require__.e("pages-client-selector-client-selector-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/client-selector/client-selector.module */
          "./src/app/pages/client-selector/client-selector.module.ts")).then(function (m) {
            return m.ClientSelectorModule;
          });
        }
      }, {
        path: '404',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-errors-error-404-error-404-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modules-errors-error-404-error-404-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/errors/error-404/error-404.module */
          "./src/app/modules/errors/error-404/error-404.module.ts")).then(function (m) {
            return m.Error404Module;
          });
        }
      }, {
        path: '500',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-errors-error-500-error-500-module */
          "modules-errors-error-500-error-500-module").then(__webpack_require__.bind(null,
          /*! ./modules/errors/error-500/error-500.module */
          "./src/app/modules/errors/error-500/error-500.module.ts")).then(function (m) {
            return m.Error500Module;
          });
        }
      }];

      var AppRoutingModule = /*@__PURE__*/function () {
        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'corrected',
            anchorScrolling: 'enabled'
          })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AppRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _vex_services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@vex/services/style.service */
      "./src/@vex/services/style.service.ts");
      /* harmony import */


      var _vex_interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../@vex/interfaces/config-name.model */
      "./src/@vex/interfaces/config-name.model.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../@vex/animations/fade-in-up.animation */
      "./src/@vex/animations/fade-in-up.animation.ts");
      /* harmony import */


      var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../@vex/services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../@vex/services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_utils_util_util_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/utils/util/util.service */
      "./src/app/services/utils/util/util.service.ts");
      /* harmony import */


      var _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../@vex/services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../@vex/services/splash-screen.service */
      "./src/@vex/services/splash-screen.service.ts");
      /* harmony import */


      var _components_utils_floating_floating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/utils/floating/floating.component */
      "./src/app/components/utils/floating/floating.component.ts");

      function AppComponent_div_0_floating_base_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "floating-base", 2);
        }

        if (rf & 2) {
          var f_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined)("data", f_r1);
        }
      }

      function AppComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_floating_base_1_Template, 1, 2, "floating-base", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r1.active);
        }
      }

      var AppComponent = /*@__PURE__*/function () {
        var AppComponent = /*#__PURE__*/function () {
          function AppComponent(configService, styleService, renderer, platform, document, localeId, layoutService, route, utilService, navigationService, iterableDiffers, splashScreenService // private basehttpService: BasehttpService
          ) {
            var _this24 = this;

            _classCallCheck(this, AppComponent);

            this.configService = configService;
            this.styleService = styleService;
            this.renderer = renderer;
            this.platform = platform;
            this.document = document;
            this.localeId = localeId;
            this.layoutService = layoutService;
            this.route = route;
            this.utilService = utilService;
            this.navigationService = navigationService;
            this.iterableDiffers = iterableDiffers;
            this.splashScreenService = splashScreenService;
            this.title = 'Wharehouse';
            this.Style = _vex_services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"];
            this.floatData = [];
            luxon__WEBPACK_IMPORTED_MODULE_1__["Settings"].defaultLocale = this.localeId;

            if (this.platform.BLINK) {
              this.renderer.addClass(this.document.body, 'is-blink');
            }

            this.styleService.setStyle(_vex_services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"]["default"]);
            this.configService.setConfig(_vex_interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_6__["ConfigName"].apollo);
            /**
             * Customize the template to your needs with the ConfigService
             * Example:
             *  this.configService.updateConfig({
             *    sidenav: {
             *      title: 'Custom App',
             *      imageUrl: '//placehold.it/100x100',
             *      showCollapsePin: false
             *    },
             *    showConfigButton: false,
             *    footer: {
             *      visible: false
             *    }
             *  });
             */

            /**
             * Config Related Subscriptions
             * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
             * Example: example.com/?layout=apollo&style=default
             */

            this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (queryParamMap) {
              return queryParamMap.has('rtl') && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(queryParamMap.get('rtl'));
            })).subscribe(function (isRtl) {
              _this24.document.body.dir = isRtl ? 'rtl' : 'ltr';

              _this24.configService.updateConfig({
                rtl: isRtl
              });
            });
            this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (queryParamMap) {
              return queryParamMap.has('layout');
            })).subscribe(function (queryParamMap) {
              return _this24.configService.setConfig(queryParamMap.get('layout'));
            });
            this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (queryParamMap) {
              return queryParamMap.has('style');
            })).subscribe(function (queryParamMap) {
              return _this24.styleService.setStyle(queryParamMap.get('style'));
            });

            if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
              if (window) {
                window.console.log = window.console.warn = window.console.info = function () {// Don't log anything.
                };
              }
            }
          }

          _createClass(AppComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this25 = this;

              this.utilService.event_floating_new$.subscribe(function (data) {
                console.log('TOTAL INSERT', _this25.floatData.length, _this25.floatData.length >= 1 ? 135 : 0);
                var add = _this25.floatData.length >= 1 ? 135 : 0;
                var floatDataTemp = {
                  active: data.active ? data.active : false,
                  loading: data.loading ? data.loading : false,
                  msg: data.msg ? data.msg : '',
                  title: data.title ? data.title : '',
                  id: data.id ? data.id : '',
                  bottom: 20 + add,
                  error: data.error ? data.error : false
                };

                _this25.floatData.push(floatDataTemp); // console.log(this.floatData);

              });
              this.utilService.event_floating_edit$.subscribe(function (data) {
                var indexFound = _this25.floatData.findIndex(function (fd) {
                  return fd.id === data.id;
                });

                if (indexFound >= 0) {
                  Object.keys(data).forEach(function (k) {
                    _this25.floatData[indexFound][k] = data[k];
                  });
                } //console.log('UPDATE', this.floatData[indexFound]);

              });
              this.utilService.event_floating_close$.subscribe(function (id) {
                var indexFound = _this25.floatData.findIndex(function (fd) {
                  return fd.id === id;
                });

                console.log('FOUND', indexFound, id, _this25.floatData);

                if (indexFound >= 0) {
                  _this25.floatData[indexFound].active = false;

                  _this25.floatData.splice(indexFound, 1);

                  _this25.recalculatingFloating();
                } // console.log('CLOSE', this.floatData[indexFound]);

              });
            }
          }, {
            key: "recalculatingFloating",
            value: function recalculatingFloating() {
              var _this26 = this;

              this.floatData.forEach(function (fd, index) {
                var add = index > 0 ? 135 * (index + 1) : 0;
                _this26.floatData[index].bottom = 20 + add;
              });
            }
          }]);

          return AppComponent;
        }();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_style_service__WEBPACK_IMPORTED_MODULE_5__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_11__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils_util_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_15__["SplashScreenService"]));
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["vex-root"]],
          decls: 2,
          vars: 1,
          consts: [[4, "ngFor", "ngForOf"], [3, "data", 4, "ngIf"], [3, "data"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.floatData);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_utils_floating_floating_component__WEBPACK_IMPORTED_MODULE_16__["FloatingComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"],
          data: {
            animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_8__["fadeInUp400ms"]]
          }
        });
        return AppComponent;
      }();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@vex/vex.module */
      "./src/@vex/vex.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _modules_custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/custom-layout/custom-layout.module */
      "./src/app/modules/custom-layout/custom-layout.module.ts");
      /* harmony import */


      var _components_utils_floating_floating_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/utils/floating/floating.module */
      "./src/app/components/utils/floating/floating.module.ts");

      var AppModule = /*@__PURE__*/function () {
        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], // Vex
          _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__["VexModule"], _modules_custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_9__["CustomLayoutModule"], _components_utils_floating_floating_module__WEBPACK_IMPORTED_MODULE_10__["FloatingModule"]]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], // Vex
          _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__["VexModule"], _modules_custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_9__["CustomLayoutModule"], _components_utils_floating_floating_module__WEBPACK_IMPORTED_MODULE_10__["FloatingModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/utils/floating/floating.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/utils/floating/floating.component.ts ***!
      \*****************************************************************/

    /*! exports provided: FloatingComponent */

    /***/
    function srcAppComponentsUtilsFloatingFloatingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloatingComponent", function () {
        return FloatingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../@vex/animations/fade-in-up.animation */
      "./src/@vex/animations/fade-in-up.animation.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../@vex/animations/stagger.animation */
      "./src/@vex/animations/stagger.animation.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-send */
      "./node_modules/@iconify/icons-ic/twotone-send.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/baseline-list-alt */
      "./node_modules/@iconify/icons-ic/baseline-list-alt.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_round_font_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/round-font-download */
      "./node_modules/@iconify/icons-ic/round-font-download.js");
      /* harmony import */


      var _iconify_icons_ic_round_font_download__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_round_font_download__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_baseline_looks_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/baseline-looks-one */
      "./node_modules/@iconify/icons-ic/baseline-looks-one.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_looks_one__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_looks_one__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

      function FloatingComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          bottom: a0
        };
      };

      var FloatingComponent = /*@__PURE__*/function () {
        var FloatingComponent = /*#__PURE__*/function () {
          function FloatingComponent(iterableDiffers) {
            _classCallCheck(this, FloatingComponent);

            this.iterableDiffers = iterableDiffers;
            this.headersAvaiable = [];
            this.data = {
              active: false,
              loading: false,
              msg: '',
              title: '',
              id: '',
              bottom: 50,
              error: false
            };
            this.icSend = _iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_4___default.a;
            this.icByAlpha = _iconify_icons_ic_round_font_download__WEBPACK_IMPORTED_MODULE_6___default.a;
            this.icNumericDownAlt = _iconify_icons_ic_baseline_looks_one__WEBPACK_IMPORTED_MODULE_7___default.a;
            this.icList = _iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_5___default.a;
          }

          _createClass(FloatingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              console.log(this.data);
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              console.log(this.data);
            }
          }]);

          return FloatingComponent;
        }();

        FloatingComponent.ɵfac = function FloatingComponent_Factory(t) {
          return new (t || FloatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]));
        };

        FloatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: FloatingComponent,
          selectors: [["floating-base"]],
          inputs: {
            data: "data"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'standard'
            }
          }])],
          decls: 6,
          vars: 6,
          consts: [[1, "card", "sm:mt-2", "p-4", 2, "position", "fixed", "right", "20px", "margin", "5px", "width", "auto", "z-index", "9999", "background", "white", "max-width", "8000px", "border", "2px solid #2ad1a5", "box-shadow", "0px 0px 2px 1px #ffffff", "text-align", "center", 3, "ngStyle"], ["class", "w-full", 4, "ngIf"], [1, "font-bold", "uppercase"], [1, "text-lg"], [1, "w-full"], ["mode", "indeterminate", 1, "my-4"]],
          template: function FloatingComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FloatingComponent_div_1_Template, 2, 0, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.data.bottom + "px"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.loading);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.msg, " ");
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"]],
          styles: [".floating-card[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  margin: 5px;\n  width: auto;\n  z-index: 9999;\n  background: white;\n  max-width: 800px;\n  border: 2px solid #2ad1a5;\n  box-shadow: 0px 0px 2px 1px #ffffff;\n  text-align: center;\n}\n\n.border-error[_ngcontent-%COMP%] {\n  border: 2px solid #d12a2a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9mbG9hdGluZy9mbG9hdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXRpbHMvZmxvYXRpbmcvZmxvYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRpbmctY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyYWQxYTU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3JkZXItZXJyb3Ige1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDEyYTJhICFpbXBvcnRhbnQ7XG59Il19 */"],
          data: {
            animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInUp400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger40ms"]]
          }
        });
        return FloatingComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/utils/floating/floating.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/utils/floating/floating.module.ts ***!
      \**************************************************************/

    /*! exports provided: FloatingModule */

    /***/
    function srcAppComponentsUtilsFloatingFloatingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloatingModule", function () {
        return FloatingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../@vex/directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
      /* harmony import */


      var _vex_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../@vex/components/progress-bar/progress-bar.module */
      "./src/@vex/components/progress-bar/progress-bar.module.ts");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _floating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./floating.component */
      "./src/app/components/utils/floating/floating.component.ts");

      var FloatingModule = /*@__PURE__*/function () {
        var FloatingModule = function FloatingModule() {
          _classCallCheck(this, FloatingModule);
        };

        FloatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: FloatingModule
        });
        FloatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function FloatingModule_Factory(t) {
            return new (t || FloatingModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _vex_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_11__["ProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"]]]
        });
        return FloatingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FloatingModule, {
          declarations: [_floating_component__WEBPACK_IMPORTED_MODULE_15__["FloatingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _vex_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_11__["ProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"]],
          exports: [_floating_component__WEBPACK_IMPORTED_MODULE_15__["FloatingComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/interfaces/static-data/LS.ts":
    /*!**********************************************!*\
      !*** ./src/app/interfaces/static-data/LS.ts ***!
      \**********************************************/

    /*! exports provided: LS */

    /***/
    function srcAppInterfacesStaticDataLSTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LS", function () {
        return LS;
      });

      var LS = /*@__PURE__*/function () {
        var LS = function LS() {
          _classCallCheck(this, LS);
        }; // TAGS


        LS.TAG_AVISO = 'Aviso';
        LS.TAG_EXITO = 'Éxito';
        LS.TAG_ERROR = 'Error';
        LS.TAG_CONVERSACIONES = 'Conversaciones';
        LS.TAG_FORMULARIOS = 'Formularios';
        LS.TAG_MENSAJE_ENVIADO = 'Mensaje enviado';
        LS.TAG_MENSAJE_NO_ENVIADO = 'Mensaje no enviado';
        LS.TAG_CORREO_ENVIADO = "Correo enviado";
        LS.TAG_PASSWORD_CAMBIADO = "Contraseña cambiada"; // ACCIONES

        LS.ACCION_NUEVO = 'Nuevo';
        LS.ACCION_EDITAR = 'Editar';
        LS.ACCION_EDITAR_PASSWORD = 'Editar password';
        LS.ACCION_ELIMINAR = 'Eliminar';
        LS.ACCION_CONSULTAR = 'Consultar';
        LS.ACCION_UPLOAD = 'Upload';
        LS.ACCION_LISTAR = 'Listar';
        LS.ACCION_VER = 'Ver';
        LS.ACCION_DUPLICAR = 'Duplicar';
        LS.ACCION_TEST = 'Test'; // Informacion

        LS.SELECT_CHATBOT = null;
        LS.CHATBOT_ID_FIRST = null; // URI

        LS.URI_AVATAR = 'https://ui-avatars.com/api/?';
        LS.URI_AUDIO_MESSAGE = 'assets/audio/new-ticket.mp3';
        LS.URI_IMG_CHATBOT_BUILDING_REPORT = 'assets/img/chatbot/building-reports.svg';
        LS.URI_IMG_BI = 'assets/img/chatbot/bi.png';
        LS.URI_IMG_IDEA = 'assets/img/illustrations/idea.svg';
        LS.URI_IMG_PAGE_CONSTRUCTION = 'assets/img/illustrations/under_constructions_2.svg';
        LS.URI_IMG_ESTRATEGIA_REQUEST_CUSTOM = 'assets/img/estrategia/request_custom_estrategia.svg'; //--EMAIL

        LS.URI_IMG_REQUEST_REPORT_EMAIL = 'assets/img/mail/undraw_envelope.svg';
        LS.URI_IMG_LOGO_TWILIO = 'assets/img/mail/logo_twilio.svg'; //--SMS

        LS.URI_IMG_IPHONE_TEMPLATE = 'assets/img/sms/iphone-template.png'; //--VOICEBOT

        LS.URI_IMG_REQUEST_NEW_VOICEBOT = 'assets/img/voicebot/new-voicebot.svg'; // WINDOW

        LS.WINDOW_INNER_WIDTH = 576;
        return LS;
      }();
      /***/

    },

    /***/
    "./src/app/modules/custom-layout/custom-layout.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modules/custom-layout/custom-layout.module.ts ***!
      \***************************************************************/

    /*! exports provided: CustomLayoutModule */

    /***/
    function srcAppModulesCustomLayoutCustomLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomLayoutModule", function () {
        return CustomLayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@vex/layout/layout.module */
      "./src/@vex/layout/layout.module.ts");
      /* harmony import */


      var _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./custom-layout/custom-layout.component */
      "./src/app/modules/custom-layout/custom-layout/custom-layout.component.ts");
      /* harmony import */


      var _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@vex/layout/sidenav/sidenav.module */
      "./src/@vex/layout/sidenav/sidenav.module.ts");
      /* harmony import */


      var _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@vex/layout/toolbar/toolbar.module */
      "./src/@vex/layout/toolbar/toolbar.module.ts");
      /* harmony import */


      var _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../@vex/layout/footer/footer.module */
      "./src/@vex/layout/footer/footer.module.ts");
      /* harmony import */


      var _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../@vex/components/config-panel/config-panel.module */
      "./src/@vex/components/config-panel/config-panel.module.ts");
      /* harmony import */


      var _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../@vex/components/sidebar/sidebar.module */
      "./src/@vex/components/sidebar/sidebar.module.ts");
      /* harmony import */


      var _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../@vex/layout/quickpanel/quickpanel.module */
      "./src/@vex/layout/quickpanel/quickpanel.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var src_vex_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/@vex/layout/navigation/navigation.module */
      "./src/@vex/layout/navigation/navigation.module.ts");

      var CustomLayoutModule = /*@__PURE__*/function () {
        var CustomLayoutModule = function CustomLayoutModule() {
          _classCallCheck(this, CustomLayoutModule);
        };

        CustomLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CustomLayoutModule
        });
        CustomLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CustomLayoutModule_Factory(t) {
            return new (t || CustomLayoutModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"], _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_4__["SidenavModule"], _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"], _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_7__["ConfigPanelModule"], _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"], _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_9__["QuickpanelModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], src_vex_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_13__["NavigationModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"]]]
        });
        return CustomLayoutModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomLayoutModule, {
          declarations: [_custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_3__["CustomLayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"], _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_4__["SidenavModule"], _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"], _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_7__["ConfigPanelModule"], _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"], _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_9__["QuickpanelModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], src_vex_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_13__["NavigationModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/custom-layout/custom-layout/custom-layout.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/custom-layout/custom-layout/custom-layout.component.ts ***!
      \********************************************************************************/

    /*! exports provided: CustomLayoutComponent */

    /***/
    function srcAppModulesCustomLayoutCustomLayoutCustomLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomLayoutComponent", function () {
        return CustomLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../@vex/utils/check-router-childs-data */
      "./src/@vex/utils/check-router-childs-data.ts");
      /* harmony import */


      var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-take-until-destroy */
      "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-menu */
      "./node_modules/@iconify/icons-ic/twotone-menu.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../@vex/services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../@vex/services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/@vex/services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../@vex/layout/layout.component */
      "./src/@vex/layout/layout.component.ts");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../@vex/components/sidebar/sidebar.component */
      "./src/@vex/components/sidebar/sidebar.component.ts");
      /* harmony import */


      var _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../@vex/components/config-panel/config-panel.component */
      "./src/@vex/components/config-panel/config-panel.component.ts");
      /* harmony import */


      var _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../@vex/layout/sidenav/sidenav.component */
      "./src/@vex/layout/sidenav/sidenav.component.ts");
      /* harmony import */


      var _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../@vex/layout/toolbar/toolbar.component */
      "./src/@vex/layout/toolbar/toolbar.component.ts");
      /* harmony import */


      var _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../@vex/layout/footer/footer.component */
      "./src/@vex/layout/footer/footer.component.ts");
      /* harmony import */


      var _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../@vex/layout/quickpanel/quickpanel.component */
      "./src/@vex/layout/quickpanel/quickpanel.component.ts");
      /* harmony import */


      var _vex_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../@vex/layout/navigation/navigation.component */
      "./src/@vex/layout/navigation/navigation.component.ts");

      var _c0 = ["configpanel"];

      function CustomLayoutComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-sidenav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.sidenavCollapsed$));
        }
      }

      function CustomLayoutComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-toolbar", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasShadow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r3.toolbarShadowEnabled$))("mobileQuery", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r3.isDesktop$));
        }
      }

      function CustomLayoutComponent_ng_template_4_vex_footer_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-footer", 13);
        }
      }

      function CustomLayoutComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_4_vex_footer_0_Template, 1, 0, "vex-footer", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r5.isFooterVisible$));
        }
      }

      function CustomLayoutComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-quickpanel");
        }
      }

      function CustomLayoutComponent_vex_navigation_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-navigation", 14);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx_r8.mobileQuery);
        }
      }

      var CustomLayoutComponent = /*@__PURE__*/function () {
        var CustomLayoutComponent = /*#__PURE__*/function () {
          // usuario: User = new User();
          function CustomLayoutComponent(layoutService, configService, breakpointObserver, router, navigationService // private userService: UserService,
          ) {
            var _this27 = this;

            _classCallCheck(this, CustomLayoutComponent);

            this.layoutService = layoutService;
            this.configService = configService;
            this.breakpointObserver = breakpointObserver;
            this.router = router;
            this.navigationService = navigationService;
            this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
            this.isFooterVisible$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (config) {
              return config.footer.visible;
            }));
            this.isDesktop$ = this.layoutService.isDesktop$;
            this.isVerticalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (config) {
              return config.layout === 'vertical';
            }));
            this.isNavbarBelowToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (config) {
              return config.navbar.position === 'below-toolbar';
            }));
            this.mobileQuery = false;
            this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_5___default.a;
            this.toolbarShadowEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
              return Object(_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_3__["checkRouterChildsData"])(_this27.router.routerState.root.snapshot, function (data) {
                return data.toolbarShadowEnabled;
              });
            }));
          }

          _createClass(CustomLayoutComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this28 = this;

              this.layoutService.configpanelOpen$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (open) {
                return open ? _this28.configpanel.open() : _this28.configpanel.close();
              }); // this.mostrarUsuario(this.authService.getUserData().uid);

              this.mostrarMenus(2);
            }
          }, {
            key: "mostrarMenus",
            value: function mostrarMenus(id_role) {}
          }, {
            key: "openSidenav",
            value: function openSidenav() {
              this.layoutService.openSidenav();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }]);

          return CustomLayoutComponent;
        }();

        CustomLayoutComponent.ɵfac = function CustomLayoutComponent_Factory(t) {
          return new (t || CustomLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]));
        };

        CustomLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CustomLayoutComponent,
          selectors: [["app-custom-layout"]],
          viewQuery: function CustomLayoutComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.configpanel = _t.first);
            }
          },
          decls: 17,
          vars: 12,
          consts: [["sidenavRef", ""], ["toolbarRef", ""], ["footerRef", ""], ["quickpanelRef", ""], [3, "footerRef", "quickpanelRef", "sidenavRef", "toolbarRef"], ["type", "button", "mat-fab", "", "color", "primary", 1, "config-panel-toggle", 3, "fxHide", "click"], [3, "icIcon"], [3, "fxHide", 4, "ngIf"], ["position", "right", 3, "invisibleBackdrop"], ["configpanel", ""], [3, "collapsed"], [1, "vex-toolbar", 3, "hasShadow", "mobileQuery"], ["class", "vex-footer", 4, "ngIf"], [1, "vex-footer"], [3, "fxHide"]],
          template: function CustomLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomLayoutComponent_ng_template_2_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomLayoutComponent_ng_template_4_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomLayoutComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "vex-layout", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomLayoutComponent_Template_button_click_9_listener() {
                return ctx.openSidenav();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomLayoutComponent_vex_navigation_11_Template, 1, 1, "vex-navigation", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "vex-sidebar", 8, 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "vex-config-panel");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerRef", _r4)("quickpanelRef", _r6)("sidenavRef", _r0)("toolbarRef", _r2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", !ctx.mobileQuery);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMenu);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx.isVerticalLayout$) && ctx.isNavbarBelowToolbar$));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invisibleBackdrop", true);
            }
          },
          directives: [_vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"], _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_16__["ConfigPanelComponent"], _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"], _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_20__["QuickpanelComponent"], _vex_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_21__["NavigationComponent"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3VzdG9tLWxheW91dC9jdXN0b20tbGF5b3V0L2N1c3RvbS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
        });
        return CustomLayoutComponent;
      }();
      /***/

    },

    /***/
    "./src/app/services/guards/access.guard.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/guards/access.guard.ts ***!
      \*************************************************/

    /*! exports provided: AccessGuard */

    /***/
    function srcAppServicesGuardsAccessGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessGuard", function () {
        return AccessGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../wharehouse/wharehouse.service */
      "./src/app/services/wharehouse/wharehouse.service.ts");

      var AccessGuard = /*@__PURE__*/function () {
        var AccessGuard = /*#__PURE__*/function () {
          function AccessGuard(router, whareHouseService) {
            _classCallCheck(this, AccessGuard);

            this.router = router;
            this.whareHouseService = whareHouseService;
          }

          _createClass(AccessGuard, [{
            key: "canActivate",
            value: function canActivate(next, state) {
              var selectedWharehouse = this.whareHouseService.selectedWharehouse$.getValue();

              if (selectedWharehouse === null) {
                this.router.navigate(['/selector_cliente']);
              } else {
                return true;
              }
            }
          }]);

          return AccessGuard;
        }();

        AccessGuard.ɵfac = function AccessGuard_Factory(t) {
          return new (t || AccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_2__["WhareService"]));
        };

        AccessGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AccessGuard,
          factory: AccessGuard.ɵfac,
          providedIn: 'root'
        });
        return AccessGuard;
      }();
      /***/

    },

    /***/
    "./src/app/services/utils/basehttp/basehttp.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/services/utils/basehttp/basehttp.service.ts ***!
      \*************************************************************/

    /*! exports provided: BasehttpService */

    /***/
    function srcAppServicesUtilsBasehttpBasehttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasehttpService", function () {
        return BasehttpService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var BasehttpService = /*@__PURE__*/function () {
        var BasehttpService = /*#__PURE__*/function () {
          function BasehttpService(httpClient) {
            _classCallCheck(this, BasehttpService);

            this.httpClient = httpClient;
            this.headers_default = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('mibot-request', '1');
          }

          _createClass(BasehttpService, [{
            key: "get",
            value: function get(url) {
              var _this29 = this;

              return new Promise(function (resolve, reject) {
                _this29.httpClient.get(url, {
                  headers: _this29.headers_default
                }).subscribe(function (result) {
                  if (result.data) {
                    //console.log('bien');
                    resolve(result);
                  }
                }, function (error) {
                  //console.log('mal 2');
                  // console.error('error:');
                  // console.error(err);
                  //if (err.error) err.message = `${err.error}`;
                  //console.log('mal 3');
                  reject(error);
                });
              });
              /* return this.httpClient.get(url).toPromise()
              .then(resp => resp)
              .catch(err => err);*/
            }
          }, {
            key: "post",
            value: function post(url, objeto) {
              var _this30 = this;

              return new Promise(function (resolve, reject) {
                _this30.httpClient.post(url, objeto, {
                  headers: _this30.headers_default
                }).subscribe(function (result) {
                  resolve(result);
                }, function (error) {
                  reject(error);
                });
              });
              /*return this.httpClient.post(objeto).toPromise()
              .then(resp => resp)
              .catch(err => err);*/
            }
          }, {
            key: "put",
            value: function put(url, objeto) {
              var _this31 = this;

              return new Promise(function (resolve, reject) {
                _this31.httpClient.put(url, objeto, {
                  headers: _this31.headers_default
                }).subscribe(function (result) {
                  resolve(result);
                }, function (error) {
                  reject(error);
                });
              });
              /*return this.httpClient.post(objeto).toPromise()
              .then(resp => resp)
              .catch(err => err);*/
            }
          }, {
            key: "postFormData",
            value: function postFormData(url, objeto) {
              var _this32 = this;

              var headers_default = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'multipart/form-data; boundary=X-INSOMNIA-BOUNDARY').set('Access-Control-Allow-Origin', '*').set('mibot-request', 'multi-part');
              return new Promise(function (resolve, reject) {
                _this32.httpClient.post(url, objeto, {
                  headers: headers_default
                }).subscribe(function (result) {
                  resolve(result);
                }, function (error) {
                  reject(error);
                });
              });
              /*return this.httpClient.post(objeto).toPromise()
              .then(resp => resp)
              .catch(err => err);*/
            }
          }, {
            key: "update",
            value: function update(url, objeto) {
              var _this33 = this;

              return new Promise(function (resolve, reject) {
                _this33.httpClient.put(url, objeto, {
                  headers: _this33.headers_default
                }).subscribe(function (result) {
                  resolve(result);
                }, function (error) {
                  reject(error);
                });
              });
              /*return this.httpClient.put(objeto).toPromise()
              .then(resp => resp)
              .catch(err => err);*/
            }
          }, {
            key: "delete",
            value: function _delete(url, objeto) {
              var _this34 = this;

              return new Promise(function (resolve, reject) {
                _this34.httpClient["delete"](url, {
                  headers: _this34.headers_default
                }).subscribe(function (result) {
                  resolve(result);
                }, function (error) {
                  reject(error);
                });
              });
              /* return this.httpClient.delete(url).toPromise()
              .then(resp => resp)
              .catch(err => err);*/
            }
          }, {
            key: "post_custom",
            value: function post_custom(url, objeto) {
              var _this35 = this;

              return new Promise(function (resolve, reject) {
                _this35.httpClient.post(url, objeto).subscribe(function (result) {
                  resolve(result);
                }, function (error) {
                  reject(error);
                });
              });
            }
          }, {
            key: "get_custom",
            value: function get_custom(url) {
              var _this36 = this;

              return new Promise(function (resolve, reject) {
                _this36.httpClient.get(url).subscribe(function (result) {
                  resolve(result);
                }, function (error) {
                  reject(error);
                });
              });
            }
          }, {
            key: "get_observable",
            value: function get_observable(url) {
              return this.httpClient.get(url, {
                headers: this.headers_default
              });
            }
          }]);

          return BasehttpService;
        }();

        BasehttpService.ɵfac = function BasehttpService_Factory(t) {
          return new (t || BasehttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
        };

        BasehttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: BasehttpService,
          factory: BasehttpService.ɵfac,
          providedIn: 'root'
        });
        return BasehttpService;
      }();
      /***/

    },

    /***/
    "./src/app/services/utils/user/user.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/utils/user/user.service.ts ***!
      \*****************************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppServicesUtilsUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _basehttp_basehttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../basehttp/basehttp.service */
      "./src/app/services/utils/basehttp/basehttp.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var UserService = /*@__PURE__*/function () {
        var UserService = function UserService(baseHttp, router, titleService) {
          _classCallCheck(this, UserService);

          this.baseHttp = baseHttp;
          this.router = router;
          this.titleService = titleService;
        };

        UserService.ɵfac = function UserService_Factory(t) {
          return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_basehttp_basehttp_service__WEBPACK_IMPORTED_MODULE_1__["BasehttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
        };

        UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: UserService,
          factory: UserService.ɵfac,
          providedIn: 'root'
        });
        return UserService;
      }();
      /***/

    },

    /***/
    "./src/app/services/utils/util/util.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/utils/util/util.service.ts ***!
      \*****************************************************/

    /*! exports provided: UtilService */

    /***/
    function srcAppServicesUtilsUtilUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment-timezone */
      "./node_modules/moment-timezone/index.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/interfaces/static-data/LS */
      "./src/app/interfaces/static-data/LS.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var UtilService = /*@__PURE__*/function () {
        var UtilService = /*#__PURE__*/function () {
          function UtilService(_snackBar, router) {
            _classCallCheck(this, UtilService);

            this._snackBar = _snackBar;
            this.router = router;
            this.horizontalPosition = 'right';
            this.verticalPosition = 'top';
            this.CODE_TOKEN_NOT_FOUND = 403;
            this.CODE_TOKEN_INVALID = 401;
            this.CODE_TOKEN_EXPIRED = 403;
            this._eventFloatingNew = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.event_floating_new$ = this._eventFloatingNew.asObservable();
            this._eventFloatingEdit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.event_floating_edit$ = this._eventFloatingEdit.asObservable();
            this._eventFloatingClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.event_floating_close$ = this._eventFloatingClose.asObservable();
            moment_timezone__WEBPACK_IMPORTED_MODULE_1__["locale"]('es');
            console.log(moment_timezone__WEBPACK_IMPORTED_MODULE_1__["tz"].guess());
            moment_timezone__WEBPACK_IMPORTED_MODULE_1__().tz(moment_timezone__WEBPACK_IMPORTED_MODULE_1__["tz"].guess());
          } // momment


          _createClass(UtilService, [{
            key: "obtenerFechaActualYTiempo",
            value: function obtenerFechaActualYTiempo() {
              // DE LA PC DE USUARIO
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__().tz('America/Lima').format('YYYY-MM-DD H:MM:SS'); // return moment().format('YYYY-MM-DD H:MM:SS');
            }
          }, {
            key: "obtenerFechaFile",
            value: function obtenerFechaFile() {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__().tz('America/Lima').format('YYYY-MM-DD');
            } //Hora

          }, {
            key: "getTime",
            value: function getTime(timeChat) {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__(timeChat).format('h:mm:ss a');
            }
          }, {
            key: "formatDate",
            value: function formatDate(date) {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__(date, 'YYYY-MM-DDTHH:mm:ss.000000Z').format('DD-MM-YYYY HH:mm:ss');
            } //Fecha - Hora

          }, {
            key: "getFullTime",
            value: function getFullTime(timeChat) {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__(timeChat).format('DD-MM-YYYY h:mm:ss a');
            } //Fecha

          }, {
            key: "getDate",
            value: function getDate(timeChat) {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__(timeChat).format('DD-MM-YYYY');
            }
          }, {
            key: "getDateFormat",
            value: function getDateFormat(timeChat, format) {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__(timeChat).format(format);
            }
            /**
             * Recibe un string fecha en un formato dado y retorna un Date
             * @param fecha : string {1999-11-11}
             * @param formato : string {DD/MM/AAAA}
             * Buscar más ejemplos en: https://momentjs.com/docs/
             */

          }, {
            key: "fomatearFechaString",
            value: function fomatearFechaString(fecha, formato) {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__(fecha, formato).toDate();
            }
          }, {
            key: "formatearDateToStringYYYYMMDD",
            value: function formatearDateToStringYYYYMMDD(fecha) {
              return fecha ? fecha.toISOString().slice(0, 10) : null;
            }
          }, {
            key: "timesChat",
            value: function timesChat(timeChat) {
              return moment_timezone__WEBPACK_IMPORTED_MODULE_1__(timeChat).fromNow();
            }
          }, {
            key: "checkInRange",
            value: function checkInRange(start, end, now) {
              var dateStart = this.fomatearFechaString(start, 'YYYY-MM-DD');
              var dateEnd = this.fomatearFechaString(end, 'YYYY-MM-DD');
              var dateNow = this.fomatearFechaString(now, 'YYYY-MM-DD');

              if (dateNow >= dateStart && dateNow <= dateEnd) {
                return true;
              }

              return false;
            } // errores

          }, {
            key: "handleError",
            value: function handleError(error, contexto) {
              var _this37 = this;

              var _a, _b, _c;

              console.log(error);
              console.log(error.error.errors);
              contexto.cargando && (contexto.cargando = false); // chatbot, mail

              console.log(error.error.hasOwnProperty('errors'));

              if (error.error.hasOwnProperty('errors')) {
                if (error.error.errors[0].code == 'auth/id-token-expired') {
                  localStorage.removeItem('user');
                  sessionStorage.removeItem('workspace_token');
                  this.router.navigate(['/login']);
                } else if (error.error.errors[0].code == 'auth/module-unauthorized' && error.status == '423') {
                  this.openSnackBar('Lo sentimos, no tiene acceso a este modulo', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO); // this.router.navigate(['/']);

                  return;
                }

                console.log(this.router.url);

                if (this.router.url != '/' && this.router.url != '') {
                  this.router.navigate(['/']);
                  return;
                } else {
                  console.log(error.error.errors);
                  (_a = error.error) === null || _a === void 0 ? void 0 : _a.errors.forEach(function (error) {
                    console.log(error.msg);

                    _this37.openMessage(error.msg, 'Error', 'Error');
                  });
                }
              } // console.log(error.error.errors[0].code )


              if (!(error === null || error === void 0 ? void 0 : error.error.hasOwnProperty('data'))) {
                if ((error === null || error === void 0 ? void 0 : error.message) == 'Http failure response') {
                  console.log(error.message);
                  this.openSnackBar(error === null || error === void 0 ? void 0 : error.message, src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_ERROR);
                }

                return;
              } //


              if (((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.data) === null) {
                this.showErrorHttp(error);
              }

              if ((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.data.hasOwnProperty('errors')) {
                var error_msj = '';
                var retardo = 0; // ver si el code del token se ha vencido

                if (error.error.data.errors[0].code != 'auth/id-token-expired') {
                  error.error.data.errors.forEach(function (e, index) {
                    error_msj = "".concat(e.param, ": ").concat(e.msg, " ");
                    setTimeout(function () {
                      _this37.openSnackBar(error_msj, src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_ERROR);
                    }, index * retardo);
                    retardo = 6000;
                  });
                } else {
                  localStorage.removeItem('user');
                  sessionStorage.removeItem('workspace_token');
                  this.router.navigate(['/login']);
                }
              } else {
                switch (error.status) {
                  case 400:
                    // error bd interno de mibot
                    this.openSnackBar(error.message, src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO); // this.erroresMibot(error.data.errors);

                    break;

                  case 401:
                  case 403:
                    this.openSnackBar('No autorizado', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                    this.router.navigate(['login']);

                  case 423:
                    this.openSnackBar('Lo sentimos, no tiene acceso a este modulo', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                    break;

                  case 404:
                    this.openSnackBar('Error interno, vuelva a intentarlo', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO); //this.router.navigate(['404']);

                    break;

                  case 500:
                    this.openSnackBar('Error interno, vuelva a intentarlo', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                    break;

                  case 0:
                    this.openSnackBar('No hay conexión con el servidor', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                    break;

                  default:
                    this.openSnackBar(error.message, src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_ERROR);
                    break;
                }
              }
            }
          }, {
            key: "showErrorHttp",
            value: function showErrorHttp(error) {
              switch (error.status) {
                case 400:
                  // error bd interno de mibot
                  this.openSnackBar(error.message, src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO); // this.erroresMibot(error.data.errors);

                  break;

                case 401:
                case 403:
                  this.openSnackBar('No autorizado', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                  this.router.navigate(['login']); // this.authService.LogOut();

                  break;

                case 423:
                  this.openSnackBar('Lo sentimos, no tiene acceso a este modulo', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                  break;

                case 404:
                  this.openSnackBar('Error interno, vuelva a intentarlo', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO); //this.router.navigate(['404']);

                  break;

                case 500:
                  this.openSnackBar('Error interno, vuelva a intentarlo', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                  break;

                case 0:
                  this.openSnackBar('No hay conexión con el servidor', src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_AVISO);
                  break;

                default:
                  this.openSnackBar(error.message, src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].TAG_ERROR);
                  break;
              }
            }
          }, {
            key: "openMessage",
            value: function openMessage(message, action, panelClass) {
              this.openSnackBar(message, action, panelClass);
            }
          }, {
            key: "openSnackBar",
            value: function openSnackBar(message, action, panelClass) {
              this._snackBar.open(message, action, {
                duration: 6000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                panelClass: panelClass
              });
            }
          }, {
            key: "playAudioChat",
            value: function playAudioChat() {
              var audio = new Audio(src_app_interfaces_static_data_LS__WEBPACK_IMPORTED_MODULE_2__["LS"].URI_AUDIO_MESSAGE);
              audio.play();
            }
          }, {
            key: "getSessionUidClient",
            value: function getSessionUidClient() {
              return JSON.parse(sessionStorage.getItem('mibot_session')).client_uid;
            }
          }, {
            key: "getSessionUidProyect",
            value: function getSessionUidProyect() {
              return JSON.parse(sessionStorage.getItem('mibot_session')).project_uid;
            }
          }, {
            key: "uuidv4",
            value: function uuidv4() {
              return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
              });
            }
          }, {
            key: "ValidateEmail",
            value: function ValidateEmail(mail) {
              if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
                return true;
              }

              this.openMessage('Favor verfique el formato del email', 'Error');
              return false;
            }
          }, {
            key: "codeStatusLogout",
            value: function codeStatusLogout(code) {
              return code === this.CODE_TOKEN_NOT_FOUND || code === this.CODE_TOKEN_INVALID || code === this.CODE_TOKEN_EXPIRED;
            }
          }, {
            key: "megaToByte",
            value: function megaToByte(mg) {
              return 1048576 * mg;
            }
          }, {
            key: "newFloating",
            value: function newFloating(data) {
              this._eventFloatingNew.next(data);
            }
          }, {
            key: "editFloating",
            value: function editFloating(data) {
              this._eventFloatingEdit.next(data);
            }
          }, {
            key: "closeFloating",
            value: function closeFloating(data) {
              this._eventFloatingClose.next(data);
            }
          }, {
            key: "getProyectSession",
            value: function getProyectSession() {
              var mibotSession = JSON.parse(sessionStorage.getItem('mibot_session'));
              var userClient = JSON.parse(sessionStorage.getItem('user_client'));
              var proyect = userClient.billing_accounts[0].projects.find(function (p) {
                return p.uid === mibotSession.project_uid;
              });
              return proyect;
            }
          }, {
            key: "isAdminUser",
            get: function get() {
              var user = JSON.parse(sessionStorage.getItem('user'));
              if (user.user.rol === 'admin') return true;
              return false;
            }
          }]);

          return UtilService;
        }();

        UtilService.ɵfac = function UtilService_Factory(t) {
          return new (t || UtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
        };

        UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: UtilService,
          factory: UtilService.ɵfac,
          providedIn: 'root'
        });
        return UtilService;
      }();
      /***/

    },

    /***/
    "./src/app/services/wharehouse/wharehouse.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/services/wharehouse/wharehouse.service.ts ***!
      \***********************************************************/

    /*! exports provided: WhareService */

    /***/
    function srcAppServicesWharehouseWharehouseServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhareService", function () {
        return WhareService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var WhareService = /*@__PURE__*/function () {
        var WhareService = /*#__PURE__*/function () {
          function WhareService(httpClient) {
            _classCallCheck(this, WhareService);

            this.httpClient = httpClient;
            this.http = 'http://127.0.0.1:8000/api';
            this.selectedWharehouse$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
            this.selectedWharehouse$.pipe;
          }

          _createClass(WhareService, [{
            key: "getWharehouse",
            value: function getWharehouse() {
              var httpUrl = "".concat(this.http, "/warehouse");
              return this.httpClient.get(httpUrl);
            }
          }, {
            key: "createWharehouse",
            value: function createWharehouse(name, address) {
              var httpUrl = "".concat(this.http, "/warehouse/");
              return this.httpClient.post(httpUrl, {
                name: name,
                address: address
              });
            }
          }, {
            key: "selectWhareHouse",
            value: function selectWhareHouse(warehouse) {
              console.log({
                warehouse: warehouse
              });
              this.selectedWharehouse$.next(warehouse);
            }
          }]);

          return WhareService;
        }();

        WhareService.ɵfac = function WhareService_Factory(t) {
          return new (t || WhareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        };

        WhareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: WhareService,
          factory: WhareService.ɵfac,
          providedIn: 'root'
        });
        return WhareService;
      }();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"); // import { environment } from './environments/environment';
      // if (environment.production) {
      //   enableProdMode();
      // }


      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\edgar\Documents\mibot\skelton\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map