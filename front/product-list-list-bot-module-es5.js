(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-list-list-bot-module"], {
    /***/
    "./src/app/pages/voicebot/product/list/list-bot-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/voicebot/product/list/list-bot-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ListBotRoutingModule */

    /***/
    function srcAppPagesVoicebotProductListListBotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListBotRoutingModule", function () {
        return ListBotRoutingModule;
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


      var _list_bot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-bot.component */
      "./src/app/pages/voicebot/product/list/list-bot.component.ts");

      var routes = [{
        path: '',
        component: _list_bot_component__WEBPACK_IMPORTED_MODULE_2__["ListBotComponent"],
        data: {
          toolbarShadowEnabled: true
        }
      }];

      var ListBotRoutingModule = /*@__PURE__*/function () {
        var ListBotRoutingModule = function ListBotRoutingModule() {
          _classCallCheck(this, ListBotRoutingModule);
        };

        ListBotRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ListBotRoutingModule
        });
        ListBotRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ListBotRoutingModule_Factory(t) {
            return new (t || ListBotRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return ListBotRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListBotRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/voicebot/product/list/list-bot.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/voicebot/product/list/list-bot.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ListBotComponent */

    /***/
    function srcAppPagesVoicebotProductListListBotComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListBotComponent", function () {
        return ListBotComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-edit */
      "./node_modules/@iconify/icons-ic/twotone-edit.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-delete */
      "./node_modules/@iconify/icons-ic/twotone-delete.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-search */
      "./node_modules/@iconify/icons-ic/twotone-search.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-add */
      "./node_modules/@iconify/icons-ic/twotone-add.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-filter-list */
      "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-more-horiz */
      "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../@vex/animations/fade-in-up.animation */
      "./src/@vex/animations/fade-in-up.animation.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../@vex/animations/stagger.animation */
      "./src/@vex/animations/stagger.animation.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_plus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @iconify/icons-ic/baseline-plus */
      "./node_modules/@iconify/icons-ic/baseline-plus.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_plus__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_plus__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var _iconify_icons_ic_baseline_refresh__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @iconify/icons-ic/baseline-refresh */
      "./node_modules/@iconify/icons-ic/baseline-refresh.js");
      /* harmony import */


      var _iconify_icons_ic_baseline_refresh__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_refresh__WEBPACK_IMPORTED_MODULE_19__);
      /* harmony import */


      var _iconify_icons_ic_twotone_headset__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-headset */
      "./node_modules/@iconify/icons-ic/twotone-headset.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_headset__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_headset__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var _iconify_icons_ic_twotone_sync__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-sync */
      "./node_modules/@iconify/icons-ic/twotone-sync.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_sync__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_sync__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var src_app_services_voicebot_bot_bot_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/services/voicebot/bot/bot.service */
      "./src/app/services/voicebot/bot/bot.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/services/wharehouse/wharehouse.service */
      "./src/app/services/wharehouse/wharehouse.service.ts");
      /* harmony import */


      var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.component */
      "./src/@vex/components/page-layout/page-layout.component.ts");
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

      var _c0 = ["categoryPaginator"];

      function ListBotComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListBotComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.getData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r0.icRefresh);
        }
      }

      function ListBotComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r1.icLoad);
        }
      }

      function ListBotComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListBotComponent_th_22_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return $event ? ctx_r15.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
        }
      }

      function ListBotComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListBotComponent_td_23_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var row_r17 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return $event ? ctx_r18.selection.toggle(row_r17) : null;
          })("click", function ListBotComponent_td_23_Template_mat_checkbox_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r17 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r17));
        }
      }

      function ListBotComponent_ng_container_24_ng_container_1_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", column_r21.label, " ");
        }
      }

      function ListBotComponent_ng_container_24_ng_container_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          var column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", column_r21.cssClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r27[column_r21.property], " ");
        }
      }

      function ListBotComponent_ng_container_24_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListBotComponent_ng_container_24_ng_container_1_th_1_Template, 2, 1, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListBotComponent_ng_container_24_ng_container_1_td_2_Template, 2, 2, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", column_r21.property);
        }
      }

      function ListBotComponent_ng_container_24_ng_container_2_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", column_r21.label, " ");
        }
      }

      function ListBotComponent_ng_container_24_ng_container_2_td_2_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var telefonia_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", telefonia_r35.name, " ");
        }
      }

      function ListBotComponent_ng_container_24_ng_container_2_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListBotComponent_ng_container_24_ng_container_2_td_2_p_1_Template, 2, 1, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          var column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", column_r21.cssClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r33.Telefonias);
        }
      }

      function ListBotComponent_ng_container_24_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListBotComponent_ng_container_24_ng_container_2_th_1_Template, 2, 1, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListBotComponent_ng_container_24_ng_container_2_td_2_Template, 2, 2, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", column_r21.property);
        }
      }

      function ListBotComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListBotComponent_ng_container_24_ng_container_1_Template, 3, 1, "ng-container", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListBotComponent_ng_container_24_ng_container_2_Template, 3, 1, "ng-container", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r21.type === "text" && column_r21.property !== "Telefonias");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r21.type === "text" && column_r21.property === "Telefonias");
        }
      }

      function ListBotComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 46);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          Campaign: a0
        };
      };

      function ListBotComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListBotComponent_td_27_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r38 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, row_r38))("matMenuTriggerFor", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r6.icMoreHoriz);
        }
      }

      function ListBotComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 49);
        }
      }

      function ListBotComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 50);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);
        }
      }

      function ListBotComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListBotComponent_ng_template_33_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var Campaign_r42 = ctx.Campaign;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r43.editBot(Campaign_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Edit 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r10.icEdit);
        }
      }

      function ListBotComponent_button_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListBotComponent_button_36_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var column_r45 = ctx.$implicit;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r46.toggleColumnVisibility(column_r45, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListBotComponent_button_36_Template_mat_checkbox_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            return $event.stopPropagation();
          })("ngModelChange", function ListBotComponent_button_36_Template_mat_checkbox_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var column_r45 = ctx.$implicit;
            return column_r45.visible = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", column_r45.visible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", column_r45.label, " ");
        }
      }

      var _c2 = function _c2() {
        return ["Products"];
      };

      var ListBotComponent = /*@__PURE__*/function () {
        var ListBotComponent = /*#__PURE__*/function () {
          function ListBotComponent(botService, router, whareHouseService) {
            _classCallCheck(this, ListBotComponent);

            this.botService = botService;
            this.router = router;
            this.whareHouseService = whareHouseService;
            this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('fullwidth');
            this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
            this.data$ = this.subject$.asObservable();
            this.loading = true;
            this.loadingTabla = true;
            this.columns = [{
              label: 'Name',
              property: 'name',
              type: 'text',
              visible: true,
              cssClasses: ['font-bold', 'text-secondary']
            }, {
              label: 'Amount',
              property: 'amount',
              type: 'text',
              visible: true,
              cssClasses: ['font-medium', 'text-secondary']
            }, {
              label: 'Actions',
              property: 'actions',
              type: 'button',
              visible: true
            }];
            this.pageSize = 10;
            this.pageSizeOptions = [10, 15, 20, 25];
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](true, []);
            this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();
            this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_10___default.a; //Iconos

            this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_6___default.a;
            this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default.a;
            this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7___default.a;
            this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default.a;
            this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default.a;
            this.icHeadset = _iconify_icons_ic_twotone_headset__WEBPACK_IMPORTED_MODULE_20___default.a;
            this.icLoad = _iconify_icons_ic_twotone_sync__WEBPACK_IMPORTED_MODULE_21___default.a;
            this.icPlus = _iconify_icons_ic_baseline_plus__WEBPACK_IMPORTED_MODULE_18___default.a;
            this.icRefresh = _iconify_icons_ic_baseline_refresh__WEBPACK_IMPORTED_MODULE_19___default.a;
          }

          _createClass(ListBotComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
              this.getData();
            }
          }, {
            key: "getData",
            value: function getData() {
              var _this = this;

              var clase = this;
              this.Campaigns = [];
              this.loading = true;
              var idWhareHouse = this.whareHouseService.selectedWharehouse$.getValue();
              this.botService.listProductsByWhareHouse(idWhareHouse.id).subscribe(function (response) {
                clase.dataSource.data = response;
                _this.loading = false;
                clase.loadingTabla = false;

                _this.searchCtrl.valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__["untilDestroyed"])(_this)).subscribe(function (value) {
                  return _this.onFilterChange(value);
                });
              });
            }
          }, {
            key: "refreshDatabutton",
            value: function refreshDatabutton() {//TIENR QUE Refrescar
              //alert('Refrescar');
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
          }, {
            key: "removeItemFromDatasoucre",
            value: function removeItemFromDatasoucre(dataSource, index) {
              var paginator = dataSource.paginatitor;
              dataSource.data.splice(index, 1);
              dataSource.paginator = paginator;
            }
          }, {
            key: "onFilterChange",
            value: function onFilterChange(value) {
              if (!this.dataSource) {
                return;
              }

              value = value.trim();
              value = value.toLowerCase();
              this.dataSource.filter = value;
            }
          }, {
            key: "toggleColumnVisibility",
            value: function toggleColumnVisibility(column, event) {
              event.stopPropagation();
              event.stopImmediatePropagation();
              column.visible = !column.visible;
            }
            /** Whether the number of selected elements matches the total number of rows. */

          }, {
            key: "isAllSelected",
            value: function isAllSelected() {
              var numSelected = this.selection.selected.length;
              var numRows = this.dataSource.data.length;
              return numSelected === numRows;
            }
            /** Selects all rows if they are not all selected; otherwise clear selection. */

          }, {
            key: "masterToggle",
            value: function masterToggle() {
              var _this2 = this;

              this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
                return _this2.selection.select(row);
              });
            }
          }, {
            key: "trackByProperty",
            value: function trackByProperty(index, column) {
              return column.property;
            }
          }, {
            key: "goToNew",
            value: function goToNew() {
              var url = "/system/product/new";
              this.router.navigate([url]);
            }
          }, {
            key: "editBot",
            value: function editBot(product) {
              var url = "/system/product/".concat(product.id);
              this.router.navigate([url], {
                state: product
              });
            }
          }, {
            key: "visibleColumns",
            get: function get() {
              return this.columns.filter(function (column) {
                return column.visible;
              }).map(function (column) {
                return column.property;
              });
            }
          }]);

          return ListBotComponent;
        }();

        ListBotComponent.ɵfac = function ListBotComponent_Factory(t) {
          return new (t || ListBotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_voicebot_bot_bot_service__WEBPACK_IMPORTED_MODULE_22__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_wharehouse_wharehouse_service__WEBPACK_IMPORTED_MODULE_24__["WhareService"]));
        };

        ListBotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: ListBotComponent,
          selectors: [["list-bot-table"]],
          viewQuery: function ListBotComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.categoryPaginator = _t.first);
            }
          },
          inputs: {
            columns: "columns"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'standard'
            }
          }])],
          decls: 37,
          vars: 20,
          consts: [["current", "Products List"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-button", "", "type", "button", 1, "ml-2", 3, "click"], [3, "icIcon"], [1, "p-gutter"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0"], ["fxFlex", "400px", "fxFlex.lt-md", "auto", "fxHide.xs", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-card", "rounded-full", "border", "px-4"], ["size", "20px", 3, "icIcon"], ["placeholder", "Buscar...", "type", "Buscar", 1, "px-4", "py-3", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], ["fxFlex", ""], ["fxFlex", "none", "fxHide.gt-xs", "", "mat-icon-button", "", "type", "button", 1, "ml-4"], ["fxFlex", "none", "mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", 3, "matMenuTriggerFor"], ["class", "ml-4", "color", "primary", "fxFlex", "none", "mat-mini-fab", "", "matTooltip", "Refresh", "type", "button", 3, "click", 4, "ngIf"], ["class", "ml-4", "color", "primary", "fxFlex", "none", "mat-mini-fab", "", "matTooltip", "Cargando..", "disabled", "true;", "type", "button", 4, "ngIf"], ["label", "Table"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "actions"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover trans-ease-out cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], ["columnFilterMenu", "matMenu"], ["class", "checkbox-item mat-menu-item", 3, "click", 4, "ngFor", "ngForOf"], ["color", "primary", "fxFlex", "none", "mat-mini-fab", "", "matTooltip", "Refresh", "type", "button", 1, "ml-4", 3, "click"], ["color", "primary", "fxFlex", "none", "mat-mini-fab", "", "matTooltip", "Cargando..", "disabled", "true;", "type", "button", 1, "ml-4"], [1, "animate-spin", 3, "icIcon"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["class", "smallText", 4, "ngFor", "ngForOf"], [1, "smallText"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "trans-ease-out", "cursor-pointer"], ["mat-menu-item", "", 3, "click"], [1, "checkbox-item", "mat-menu-item", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"]],
          template: function ListBotComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "vex-page-layout");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "vex-breadcrumbs", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListBotComponent_Template_button_click_3_listener() {
                return ctx.goToNew();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Add Product ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ic-icon", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-icon", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListBotComponent_button_16_Template, 2, 1, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListBotComponent_button_17_Template, 2, 1, "button", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-tab-group");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-tab", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "table", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListBotComponent_th_22_Template, 2, 2, "th", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ListBotComponent_td_23_Template, 2, 1, "td", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ListBotComponent_ng_container_24_Template, 3, 2, "ng-container", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ListBotComponent_th_26_Template, 1, 0, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListBotComponent_td_27_Template, 3, 5, "td", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ListBotComponent_tr_28_Template, 1, 0, "tr", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListBotComponent_tr_29_Template, 1, 1, "tr", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-paginator", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-menu", 26, 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ListBotComponent_ng_template_33_Template, 4, 1, "ng-template", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-menu", 26, 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListBotComponent_button_36_Template, 3, 2, "button", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icPlus);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icSearch);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchCtrl);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icSearch);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icFilterList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingTabla === false);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingTabla === true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columns);
            }
          },
          directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_25__["PageLayoutComponent"], _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_26__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_27__["BreadcrumbsComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_31__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__["DefaultShowHideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_35__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTab"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_35__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_35__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__["DefaultClassDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"]],
          styles: ["mat-progress-bar[_ngcontent-%COMP%] {\n  min-width: 20vw !important;\n  margin-top: 3px !important;\n}\n\n.text-tertiary[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: var(--text-secondary);\n}\n\n.smallText[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: var(--text-secondary);\n  font-size: 10px;\n  text-transform: lowercase;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  max-width: 300px !important;\n}\n\n  .mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: rgba(var(--color-accent), 0.4) !important;\n}\n\n  .mat-progress-bar-background {\n  fill: rgba(var(--color-primary), 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdm9pY2Vib3QvcHJvZHVjdC9saXN0L2xpc3QtYm90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdm9pY2Vib3QvcHJvZHVjdC9saXN0L2xpc3QtYm90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXByb2dyZXNzLWJhciB7XG4gIG1pbi13aWR0aDogMjB2dyAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtdGVydGlhcnkge1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc21hbGxUZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiByZ2JhKHZhcigtLWNvbG9yLWFjY2VudCksIDAuNCkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiByZ2JhKHZhcigtLWNvbG9yLXByaW1hcnkpLCAwLjQpO1xufSJdfQ== */"],
          data: {
            animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_13__["fadeInUp400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_15__["stagger40ms"]]
          }
        });
        ListBotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__["UntilDestroy"])()], ListBotComponent);
        return ListBotComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/voicebot/product/list/list-bot.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/voicebot/product/list/list-bot.module.ts ***!
      \****************************************************************/

    /*! exports provided: ListProductModule */

    /***/
    function srcAppPagesVoicebotProductListListBotModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListProductModule", function () {
        return ListProductModule;
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


      var _list_bot_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-bot-routing.module */
      "./src/app/pages/voicebot/product/list/list-bot-routing.module.ts");
      /* harmony import */


      var _list_bot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-bot.component */
      "./src/app/pages/voicebot/product/list/list-bot.component.ts");
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@vex/components/page-layout/page-layout.module */
      "./src/@vex/components/page-layout/page-layout.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../../@vex/directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _vex_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../../@vex/components/progress-bar/progress-bar.module */
      "./src/@vex/components/progress-bar/progress-bar.module.ts");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/@vex/components/secondary-toolbar/secondary-toolbar.module */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");

      var ListProductModule = /*@__PURE__*/function () {
        var ListProductModule = function ListProductModule() {
          _classCallCheck(this, ListProductModule);
        };

        ListProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ListProductModule
        });
        ListProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ListProductModule_Factory(t) {
            return new (t || ListProductModule)();
          },
          imports: [[_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _vex_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_bot_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListBotRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_21__["SecondaryToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"]]]
        });
        return ListProductModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListProductModule, {
          declarations: [_list_bot_component__WEBPACK_IMPORTED_MODULE_3__["ListBotComponent"]],
          imports: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _vex_components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_19__["ProgressBarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_bot_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListBotRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], src_vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_21__["SecondaryToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=product-list-list-bot-module-es5.js.map