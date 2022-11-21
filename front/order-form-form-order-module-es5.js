(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-form-form-order-module"], {
    /***/
    "./src/app/pages/voicebot/order/form/form-order-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/voicebot/order/form/form-order-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: FormOrderRoutingModule */

    /***/
    function srcAppPagesVoicebotOrderFormFormOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormOrderRoutingModule", function () {
        return FormOrderRoutingModule;
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


      var _form_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-order.component */
      "./src/app/pages/voicebot/order/form/form-order.component.ts");

      var routes = [{
        path: '',
        component: _form_order_component__WEBPACK_IMPORTED_MODULE_2__["FormOrderComponent"]
      }];

      var FormOrderRoutingModule = /*@__PURE__*/function () {
        var FormOrderRoutingModule = function FormOrderRoutingModule() {
          _classCallCheck(this, FormOrderRoutingModule);
        };

        FormOrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: FormOrderRoutingModule
        });
        FormOrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function FormOrderRoutingModule_Factory(t) {
            return new (t || FormOrderRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return FormOrderRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormOrderRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/voicebot/order/form/form-order.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/voicebot/order/form/form-order.component.ts ***!
      \*******************************************************************/

    /*! exports provided: FormOrderComponent */

    /***/
    function srcAppPagesVoicebotOrderFormFormOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormOrderComponent", function () {
        return FormOrderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-up.animation */
      "./src/@vex/animations/fade-in-up.animation.ts");
      /* harmony import */


      var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../@vex/animations/stagger.animation */
      "./src/@vex/animations/stagger.animation.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-more-vert */
      "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_fa_solid_plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-fa-solid/plus */
      "./node_modules/@iconify/icons-fa-solid/plus.js");
      /* harmony import */


      var _iconify_icons_fa_solid_plus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_plus__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_fa_solid_minus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-fa-solid/minus */
      "./node_modules/@iconify/icons-fa-solid/minus.js");
      /* harmony import */


      var _iconify_icons_fa_solid_minus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_minus__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/baseline-list-alt */
      "./node_modules/@iconify/icons-ic/baseline-list-alt.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/baseline-file-upload */
      "./node_modules/@iconify/icons-ic/baseline-file-upload.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_file_upload__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _services_voicebot_bot_bot_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../services/voicebot/bot/bot.service */
      "./src/app/services/voicebot/bot/bot.service.ts");
      /* harmony import */


      var _services_utils_util_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../services/utils/util/util.service */
      "./src/app/services/utils/util/util.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/wharehouse/wharehouse.service */
      "./src/app/services/wharehouse/wharehouse.service.ts");
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
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


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function FormOrderComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pct_r2 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pct_r2);
        }
      }

      function FormOrderComponent_div_9_div_16_div_1_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r8.name, " ");
        }
      }

      function FormOrderComponent_div_9_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FormOrderComponent_div_9_div_16_div_1_Template_mat_select_selectionChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var i_r6 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r9.selectProduct($event, i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormOrderComponent_div_9_div_16_div_1_mat_option_6_Template, 2, 2, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormOrderComponent_div_9_div_16_div_1_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var i_r6 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r11.deleteField(i_r6, "coordinates");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r4.icMinus);
        }
      }

      function FormOrderComponent_div_9_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormOrderComponent_div_9_div_16_div_1_Template, 13, 3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.gerArrayForms("coordinates").controls);
        }
      }

      function FormOrderComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormOrderComponent_div_9_Template_form_submit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.submitHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormOrderComponent_div_9_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.addField("coordinates");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormOrderComponent_div_9_div_16_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r1.icPlus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.gerArrayForms("coordinates").length >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.btnSubmit, " ");
        }
      }

      var FormOrderComponent = /*@__PURE__*/function () {
        var FormOrderComponent = /*#__PURE__*/function () {
          function FormOrderComponent(formBuilder, productService, util, route, router, whareHouse, botService) {
            var _this = this;

            _classCallCheck(this, FormOrderComponent);

            this.formBuilder = formBuilder;
            this.productService = productService;
            this.util = util;
            this.route = route;
            this.router = router;
            this.whareHouse = whareHouse;
            this.botService = botService;
            this.submitted = false;
            this.isNew = true;
            this.visible = false; //-------------------

            this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_3___default.a;
            this.icPlus = _iconify_icons_fa_solid_plus__WEBPACK_IMPORTED_MODULE_4___default.a;
            this.icMinus = _iconify_icons_fa_solid_minus__WEBPACK_IMPORTED_MODULE_5___default.a;
            this.icList = _iconify_icons_ic_baseline_list_alt__WEBPACK_IMPORTED_MODULE_6___default.a;
            this.icReupload = _iconify_icons_ic_baseline_file_upload__WEBPACK_IMPORTED_MODULE_8___default.a;
            this.products = [];
            this.loading = false;
            this.publicUrl = '';
            this.btnSubmit = 'Add';
            var idWhareHouse = this.whareHouse.selectedWharehouse$.getValue();
            this.botService.listProductsByWhareHouse(idWhareHouse.id).subscribe(function (response) {
              _this.products = response;
            });

            if (this.route.snapshot.paramMap.get('id') !== null) {
              this.id = this.route.snapshot.paramMap.get('id');
              this.breadcrumbs = [{
                url: '/voicebot/bots',
                text: 'Products'
              }, {
                url: '/voicebot/bot/' + this.id,
                text: 'Edit Product'
              }];
            } else {
              this.breadcrumbs = [{
                url: '/voicebot/bots',
                text: 'Products'
              }, {
                url: '/voicebot/bots/',
                text: 'Add product'
              }];
            }

            var clase = this;

            if (this.id !== undefined) {
              var product = this.router.getCurrentNavigation().extras.state;
              this.btnSubmit = 'Modify';
              this.isNew = false;
              clase.util.openMessage('Bot Cargado!', 'Completado', 'Primary');
              this.breadcrumbs[1].text = product.name;
              clase.formGroup = this.formBuilder.group({
                name: [product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                coordinates: this.formBuilder.array([])
              });
            } else {
              this.formGroup = this.formBuilder.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                coordinates: this.formBuilder.array([])
              });
            }
          }

          _createClass(FormOrderComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "newExtraCoordinate",
            value: function newExtraCoordinate() {
              return this.formBuilder.group({
                product: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1)]]
              });
            }
          }, {
            key: "addField",
            value: function addField(groupControl) {
              var newExtraField;
              var control = this.formGroup.controls[groupControl];
              newExtraField = this.newExtraCoordinate();
              control.push(newExtraField);
            }
          }, {
            key: "deleteField",
            value: function deleteField(i, groupControl) {
              this.gerArrayForms(groupControl).removeAt(i);
            }
          }, {
            key: "gerArrayForms",
            value: function gerArrayForms(control) {
              return this.formGroup.get(control);
            }
          }, {
            key: "redirectListBots",
            value: function redirectListBots() {
              var url = "/voicebot/bots/";
              this.router.navigate([url]);
            }
          }, {
            key: "submitHandler",
            value: function submitHandler() {
              this.submitted = true;
              var clase = this;
              this.form = this.formGroup.value;
              this.form.detail = this.formGroup.controls.coordinates.value;
              this.form.number = this.create_UUID();
              this.form.wharehouse = this.whareHouse.selectedWharehouse$.getValue().id;

              if (!this.formGroup.invalid) {
                if (this.isNew === true) {
                  this.productService.addOrder(this.form).subscribe(function (response) {
                    clase.util.openMessage('ADDED!', 'Complete', 'Primary');
                    clase.redirectListBots();
                    clase.loading = false;
                  });
                } else {}
              } else {
                clase.util.openMessage('Please Validate the information', 'Error');
              }
            }
          }, {
            key: "selectProduct",
            value: function selectProduct($event, index) {
              var maxAmount = this.products.find(function (p) {
                return p.id === $event.value;
              }).amount;
              var control = this.formGroup.controls['coordinates'];
              control.controls[index].get('amount').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(maxAmount)]);
            }
          }, {
            key: "create_UUID",
            value: function create_UUID() {
              var dt = new Date().getTime();
              var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
              });
              return uuid;
            }
          }, {
            key: "f",
            get: function get() {
              return this.formGroup.controls;
            }
          }]);

          return FormOrderComponent;
        }();

        FormOrderComponent.ɵfac = function FormOrderComponent_Factory(t) {
          return new (t || FormOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_voicebot_bot_bot_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils_util_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_12__["WhareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_voicebot_bot_bot_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]));
        };

        FormOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: FormOrderComponent,
          selectors: [["vex-form-bot"]],
          decls: 10,
          vars: 7,
          consts: [["current", "Voicebots"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-button", "", "type", "button", 1, "ml-2", 3, "click"], [3, "icIcon"], [4, "ngIf"], ["vexContainer", "", 1, "p-gutter"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px"], ["class", "card", "fxFlex", "auto", 4, "ngIf"], ["mode", "buffer", "color", "primary", 3, "value"], ["fxFlex", "auto", 1, "card"], [3, "formGroup", "submit"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "px-6", "py-4", "border-t"], [1, "title", "m-0"], ["fxLayout", "column", 1, "px-6", "pt-4"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "16px", "fxLayoutGap.lt-sm", "0"], ["fxFlex", "auto"], ["matInput", "", "formControlName", "name"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "px-6", "pt-4", "border-t"], ["fxFlex", "auto", 1, "title", "m-0"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2", "hover:bg-hover", 3, "click"], ["width", "16px", "height", "16px", 3, "icIcon"], ["formArrayName", "coordinates", 4, "ngIf"], ["fxLayout", "column", 1, "px-6", "py-4"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px"], ["color", "primary", "mat-raised-button", "", "type", "submit"], ["formArrayName", "coordinates"], ["class", "px-6 py-1", "fxLayout", "column", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "px-6", "py-1", 3, "formGroupName"], ["matSelect", "", "formControlName", "product", "name", "product", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "amount", "type", "number"], ["color", "accent", "mat-icon-button", "", "type", "button", 1, "ml-2", "hover:bg-hover", 3, "click"], [3, "value"]],
          template: function FormOrderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "vex-breadcrumbs", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormOrderComponent_Template_button_click_2_listener() {
                return ctx.redirectListBots();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " See everything ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormOrderComponent_div_5_Template, 2, 1, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormOrderComponent_div_9_Template, 21, 5, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", ctx.breadcrumbs);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.percentage));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup !== undefined);
            }
          },
          directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_20__["ContainerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZvaWNlYm90L29yZGVyL2Zvcm0vZm9ybS1vcmRlci5jb21wb25lbnQuc2NzcyJ9 */"],
          data: {
            animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInUp400ms"]]
          }
        });
        return FormOrderComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/voicebot/order/form/form-order.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/voicebot/order/form/form-order.module.ts ***!
      \****************************************************************/

    /*! exports provided: FormOrderModule */

    /***/
    function srcAppPagesVoicebotOrderFormFormOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormOrderModule", function () {
        return FormOrderModule;
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


      var _form_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-order.component */
      "./src/app/pages/voicebot/order/form/form-order.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");
      /* harmony import */


      var _form_order_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./form-order-routing.module */
      "./src/app/pages/voicebot/order/form/form-order-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

      var FormOrderModule = /*@__PURE__*/function () {
        var FormOrderModule = function FormOrderModule() {
          _classCallCheck(this, FormOrderModule);
        };

        FormOrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: FormOrderModule
        });
        FormOrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function FormOrderModule_Factory(t) {
            return new (t || FormOrderModule)();
          },
          imports: [[_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _form_order_routing_module__WEBPACK_IMPORTED_MODULE_16__["FormOrderRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__["ContainerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"]]]
        });
        return FormOrderModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormOrderModule, {
          declarations: [_form_order_component__WEBPACK_IMPORTED_MODULE_2__["FormOrderComponent"]],
          imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _form_order_routing_module__WEBPACK_IMPORTED_MODULE_16__["FormOrderRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__["ContainerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=order-form-form-order-module-es5.js.map