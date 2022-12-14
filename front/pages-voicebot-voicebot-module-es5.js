(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-voicebot-voicebot-module"], {
    /***/
    "./src/app/pages/voicebot/voicebot-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/voicebot/voicebot-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: VoicebotRoutingModule */

    /***/
    function srcAppPagesVoicebotVoicebotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoicebotRoutingModule", function () {
        return VoicebotRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'products',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | product-list-list-bot-module */
          [__webpack_require__.e("default~order-list-list-order-module~pages-client-selector-client-selector-module~pages-login-login-~2286d86e"), __webpack_require__.e("default~order-form-form-order-module~order-list-list-order-module~product-form-form-bot-module~produ~9a0c1e14"), __webpack_require__.e("default~order-list-list-order-module~product-list-list-bot-module"), __webpack_require__.e("product-list-list-bot-module")]).then(__webpack_require__.bind(null,
          /*! ./product/list/list-bot.module */
          "./src/app/pages/voicebot/product/list/list-bot.module.ts")).then(function (m) {
            return m.ListProductModule;
          });
        }
      }, {
        path: 'product/new',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | product-form-form-bot-module */
          [__webpack_require__.e("default~order-form-form-order-module~order-list-list-order-module~product-form-form-bot-module~produ~9a0c1e14"), __webpack_require__.e("default~order-form-form-order-module~product-form-form-bot-module"), __webpack_require__.e("product-form-form-bot-module")]).then(__webpack_require__.bind(null,
          /*! ./product/form/form-bot.module */
          "./src/app/pages/voicebot/product/form/form-bot.module.ts")).then(function (m) {
            return m.FormProductModule;
          });
        }
      }, {
        path: 'product/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | product-form-form-bot-module */
          [__webpack_require__.e("default~order-form-form-order-module~order-list-list-order-module~product-form-form-bot-module~produ~9a0c1e14"), __webpack_require__.e("default~order-form-form-order-module~product-form-form-bot-module"), __webpack_require__.e("product-form-form-bot-module")]).then(__webpack_require__.bind(null,
          /*! ./product/form/form-bot.module */
          "./src/app/pages/voicebot/product/form/form-bot.module.ts")).then(function (m) {
            return m.FormProductModule;
          });
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | order-list-list-order-module */
          [__webpack_require__.e("default~order-list-list-order-module~pages-client-selector-client-selector-module~pages-login-login-~2286d86e"), __webpack_require__.e("default~order-form-form-order-module~order-list-list-order-module~product-form-form-bot-module~produ~9a0c1e14"), __webpack_require__.e("default~order-list-list-order-module~product-list-list-bot-module"), __webpack_require__.e("order-list-list-order-module")]).then(__webpack_require__.bind(null,
          /*! ./order/list/list-order.module */
          "./src/app/pages/voicebot/order/list/list-order.module.ts")).then(function (m) {
            return m.ListProductModule;
          });
        }
      }, {
        path: 'order/new',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | order-form-form-order-module */
          [__webpack_require__.e("default~order-form-form-order-module~order-list-list-order-module~product-form-form-bot-module~produ~9a0c1e14"), __webpack_require__.e("default~order-form-form-order-module~product-form-form-bot-module"), __webpack_require__.e("order-form-form-order-module")]).then(__webpack_require__.bind(null,
          /*! ./order/form/form-order.module */
          "./src/app/pages/voicebot/order/form/form-order.module.ts")).then(function (m) {
            return m.FormOrderModule;
          });
        }
      }, {
        path: '404',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-errors-error-404-error-404-routing-module */
          "common").then(__webpack_require__.bind(null,
          /*! ../../modules/errors/error-404/error-404-routing.module */
          "./src/app/modules/errors/error-404/error-404-routing.module.ts")).then(function (m) {
            return m.Error404RoutingModule;
          });
        }
      }, {
        path: '**',
        redirectTo: '/bots'
      }];

      var VoicebotRoutingModule = /*@__PURE__*/function () {
        var VoicebotRoutingModule = function VoicebotRoutingModule() {
          _classCallCheck(this, VoicebotRoutingModule);
        };

        VoicebotRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: VoicebotRoutingModule
        });
        VoicebotRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function VoicebotRoutingModule_Factory(t) {
            return new (t || VoicebotRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return VoicebotRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](VoicebotRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/voicebot/voicebot.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/voicebot/voicebot.module.ts ***!
      \***************************************************/

    /*! exports provided: AdminModule */

    /***/
    function srcAppPagesVoicebotVoicebotModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
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


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _voicebot_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./voicebot-routing.module */
      "./src/app/pages/voicebot/voicebot-routing.module.ts");

      var AdminModule = /*@__PURE__*/function () {
        var AdminModule = function AdminModule() {
          _classCallCheck(this, AdminModule);
        };

        AdminModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: AdminModule
        });
        AdminModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function AdminModule_Factory(t) {
            return new (t || AdminModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _voicebot_routing_module__WEBPACK_IMPORTED_MODULE_4__["VoicebotRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
        });
        return AdminModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AdminModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _voicebot_routing_module__WEBPACK_IMPORTED_MODULE_4__["VoicebotRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-voicebot-voicebot-module-es5.js.map