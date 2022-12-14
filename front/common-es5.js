(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/modules/errors/error-404/error-404-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/errors/error-404/error-404-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: Error404RoutingModule */

    /***/
    function srcAppModulesErrorsError404Error404RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error404RoutingModule", function () {
        return Error404RoutingModule;
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


      var _error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-404.component */
      "./src/app/modules/errors/error-404/error-404.component.ts"); // import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


      var routes = [{
        path: '',
        component: _error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"],
        data: {
          containerEnabled: true,
          toolbarShadowEnabled: true
        }
      }];

      var Error404RoutingModule = /*@__PURE__*/function () {
        var Error404RoutingModule = function Error404RoutingModule() {
          _classCallCheck(this, Error404RoutingModule);
        };

        Error404RoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: Error404RoutingModule
        });
        Error404RoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function Error404RoutingModule_Factory(t) {
            return new (t || Error404RoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return Error404RoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](Error404RoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/errors/error-404/error-404.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/errors/error-404/error-404.component.ts ***!
      \*****************************************************************/

    /*! exports provided: Error404Component */

    /***/
    function srcAppModulesErrorsError404Error404ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
        return Error404Component;
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


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var Error404Component = /*@__PURE__*/function () {
        var Error404Component = /*#__PURE__*/function () {
          function Error404Component() {
            _classCallCheck(this, Error404Component);

            this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1___default.a;
          }

          _createClass(Error404Component, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return Error404Component;
        }();

        Error404Component.??fac = function Error404Component_Factory(t) {
          return new (t || Error404Component)();
        };

        Error404Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: Error404Component,
          selectors: [["vex-error404"]],
          decls: 9,
          vars: 1,
          consts: [[1, "w-full", "p-gutter", "text-center"], ["src", "assets/img/illustrations/data_center.svg", 1, "w-full", "max-w-lg", "mx-auto", "mb-6"], [1, "display-3", "font-medium", "m-0"], [1, "headline", "m-0"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-card", "rounded-full", "overflow-hidden", "relative", "ltr:pl-5", "rtl:pr-5", "h-12", "max-w-md", "w-full", "shadow-8", "mx-auto", "mt-6"], ["fxFlex", "none", "height", "24px", "width", "24px", 1, "text-secondary", 3, "icon"], ["fxFlex", "auto", "placeholder", "Search for other pages ...", "type", "text", 1, "border-0", "h-12", "outline-none", "ltr:pl-4", "rtl:pr-4", "placeholder:text-secondary", "bg-card"]],
          template: function Error404Component_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "404");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "P\xE1gina no encontrada.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "ic-icon", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icSearch);
            }
          },
          directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]],
          styles: ["img[_ngcontent-%COMP%] {\n  -webkit-filter: hue-rotate(284deg);\n          filter: hue-rotate(284deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lcnJvcnMvZXJyb3ItNDA0L2Vycm9yLTQwNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXJyb3JzL2Vycm9yLTQwNC9lcnJvci00MDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMjg0ZGVnKTtcbn0iXX0= */"]
        });
        return Error404Component;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map