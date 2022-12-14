(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-logout-logout-module"], {
    /***/
    "./src/app/pages/logout/logout-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/logout/logout-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: LogoutRoutingModule */

    /***/
    function srcAppPagesLogoutLogoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutRoutingModule", function () {
        return LogoutRoutingModule;
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


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logout/logout.component */
      "./src/app/pages/logout/logout/logout.component.ts");

      var routes = [{
        path: '',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"]
      }];

      var LogoutRoutingModule = /*@__PURE__*/function () {
        var LogoutRoutingModule = function LogoutRoutingModule() {
          _classCallCheck(this, LogoutRoutingModule);
        };

        LogoutRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: LogoutRoutingModule
        });
        LogoutRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function LogoutRoutingModule_Factory(t) {
            return new (t || LogoutRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return LogoutRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LogoutRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/logout/logout.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/logout/logout.module.ts ***!
      \***********************************************/

    /*! exports provided: LogoutModule */

    /***/
    function srcAppPagesLogoutLogoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutModule", function () {
        return LogoutModule;
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


      var _logout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logout-routing.module */
      "./src/app/pages/logout/logout-routing.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logout/logout.component */
      "./src/app/pages/logout/logout/logout.component.ts");

      var LogoutModule = /*@__PURE__*/function () {
        var LogoutModule = function LogoutModule() {
          _classCallCheck(this, LogoutModule);
        };

        LogoutModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: LogoutModule
        });
        LogoutModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function LogoutModule_Factory(t) {
            return new (t || LogoutModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogoutRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"]]]
        });
        return LogoutModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LogoutModule, {
          declarations: [_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogoutRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/logout/logout/logout.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/logout/logout/logout.component.ts ***!
      \*********************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function srcAppPagesLogoutLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

      var LogoutComponent = /*@__PURE__*/function () {
        var LogoutComponent = /*#__PURE__*/function () {
          function LogoutComponent() {
            _classCallCheck(this, LogoutComponent);
          }

          _createClass(LogoutComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {// this.authService.LogOut();
            }
          }]);

          return LogoutComponent;
        }();

        LogoutComponent.??fac = function LogoutComponent_Factory(t) {
          return new (t || LogoutComponent)();
        };

        LogoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: LogoutComponent,
          selectors: [["app-logout"]],
          decls: 10,
          vars: 1,
          consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-full", "h-full", "bg-pattern"], [1, "card", "overflow-hidden", "w-full", "max-w-xs"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "p-6", "pb-0"], [1, "fill-current", "text-center"], ["src", "assets/img/logo.svg", 1, "w-16"], [1, "text-center", "mt-4"], [1, "title", "m-0"], [1, "body-2", "text-secondary", "m-0"]],
          template: function LogoutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Wharehouse");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Cerrando Sesi\xF3n de Usuario");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);
            }
          },
          directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ291dC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"],
          data: {
            animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInUp400ms"]]
          },
          changeDetection: 0
        });
        return LogoutComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-logout-logout-module-es5.js.map