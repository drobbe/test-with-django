(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~order-list-list-order-module~product-list-list-bot-module"], {
    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
      \******************************************************************/

    /*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, _CoalescedStyleScheduler, _Schedule, mixinHasStickyInput */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () {
        return BaseCdkCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () {
        return BaseRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () {
        return CDK_ROW_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function () {
        return CDK_TABLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () {
        return CDK_TABLE_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCell", function () {
        return CdkCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () {
        return CdkCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () {
        return CdkCellOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () {
        return CdkColumnDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () {
        return CdkFooterCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () {
        return CdkFooterCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () {
        return CdkFooterRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () {
        return CdkFooterRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () {
        return CdkHeaderCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () {
        return CdkHeaderCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () {
        return CdkHeaderRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () {
        return CdkHeaderRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function () {
        return CdkNoDataRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkRow", function () {
        return CdkRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () {
        return CdkRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTable", function () {
        return CdkTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () {
        return CdkTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () {
        return CdkTextColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () {
        return DataRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () {
        return FooterRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () {
        return HeaderRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function () {
        return NoDataRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () {
        return STICKY_DIRECTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StickyStyler", function () {
        return StickyStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () {
        return TEXT_COLUMN_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_CoalescedStyleScheduler", function () {
        return _CoalescedStyleScheduler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_Schedule", function () {
        return _Schedule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () {
        return mixinHasStickyInput;
      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataSource", function () {
        return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"];
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function CdkTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function CdkTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to provide a directive with a function that checks if the sticky input has been
       * changed since the last time the function was called. Essentially adds a dirty-check to the
       * sticky value.
       * @docs-private
       */


      function mixinHasStickyInput(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super = _createSuper(_class);

          function _class() {
            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            _this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */

            _this._hasStickyChanged = false;
            return _this;
          }
          /** Whether sticky positioning should be applied. */


          _createClass(_class, [{
            key: "hasStickyChanged",

            /** Whether the sticky value has changed since this was last called. */
            value: function hasStickyChanged() {
              var hasStickyChanged = this._hasStickyChanged;
              this._hasStickyChanged = false;
              return hasStickyChanged;
            }
            /** Resets the dirty check for cases where the sticky state has been used without checking. */

          }, {
            key: "resetStickyChanged",
            value: function resetStickyChanged() {
              this._hasStickyChanged = false;
            }
          }, {
            key: "sticky",
            get: function get() {
              return this._sticky;
            },
            set: function set(v) {
              var prevValue = this._sticky;
              this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
              this._hasStickyChanged = prevValue !== this._sticky;
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a table to some of the sub-components without causing a circular dependency.
       * @docs-private
       */


      var CDK_TABLE = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
      /** Injection token that can be used to specify the text column options. */

      var TEXT_COLUMN_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');

      var CdkCellDef = /*@__PURE__*/function () {
        var CdkCellDef = function CdkCellDef(
        /** @docs-private */
        template) {
          _classCallCheck(this, CdkCellDef);

          this.template = template;
        };

        CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
          return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
        };

        CdkCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkCellDef,
          selectors: [["", "cdkCellDef", ""]]
        });
        return CdkCellDef;
      }();

      var CdkHeaderCellDef = /*@__PURE__*/function () {
        var CdkHeaderCellDef = function CdkHeaderCellDef(
        /** @docs-private */
        template) {
          _classCallCheck(this, CdkHeaderCellDef);

          this.template = template;
        };

        CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
          return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
        };

        CdkHeaderCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkHeaderCellDef,
          selectors: [["", "cdkHeaderCellDef", ""]]
        });
        return CdkHeaderCellDef;
      }();

      var CdkFooterCellDef = /*@__PURE__*/function () {
        var CdkFooterCellDef = function CdkFooterCellDef(
        /** @docs-private */
        template) {
          _classCallCheck(this, CdkFooterCellDef);

          this.template = template;
        };

        CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
          return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
        };

        CdkFooterCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkFooterCellDef,
          selectors: [["", "cdkFooterCellDef", ""]]
        });
        return CdkFooterCellDef;
      }(); // Boilerplate for applying mixins to CdkColumnDef.

      /** @docs-private */


      var CdkColumnDefBase = function CdkColumnDefBase() {
        _classCallCheck(this, CdkColumnDefBase);
      };

      var _CdkColumnDefBase = /*@__PURE__*/mixinHasStickyInput(CdkColumnDefBase);

      var CdkColumnDef = /*@__PURE__*/function () {
        var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
          _inherits(CdkColumnDef, _CdkColumnDefBase2);

          var _super2 = _createSuper(CdkColumnDef);

          function CdkColumnDef(_table) {
            var _this2;

            _classCallCheck(this, CdkColumnDef);

            _this2 = _super2.call(this);
            _this2._table = _table;
            _this2._stickyEnd = false;
            return _this2;
          }
          /** Unique name for this column. */


          _createClass(CdkColumnDef, [{
            key: "_updateColumnCssClassName",

            /**
             * Overridable method that sets the css classes that will be added to every cell in this
             * column.
             * In the future, columnCssClassName will change from type string[] to string and this
             * will set a single string value.
             * @docs-private
             */
            value: function _updateColumnCssClassName() {
              this._columnCssClassName = ["cdk-column-".concat(this.cssClassFriendlyName)];
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            },
            set: function set(name) {
              // If the directive is set without a name (updated programatically), then this setter will
              // trigger with an empty string and should not overwrite the programatically set value.
              if (name) {
                this._name = name;
                this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');

                this._updateColumnCssClassName();
              }
            }
            /**
             * Whether this column should be sticky positioned on the end of the row. Should make sure
             * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
             * has been changed.
             */

          }, {
            key: "stickyEnd",
            get: function get() {
              return this._stickyEnd;
            },
            set: function set(v) {
              var prevValue = this._stickyEnd;
              this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
              this._hasStickyChanged = prevValue !== this._stickyEnd;
            }
          }]);

          return CdkColumnDef;
        }(_CdkColumnDefBase);

        CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
          return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
        };

        CdkColumnDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkColumnDef,
          selectors: [["", "cdkColumnDef", ""]],
          contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
            }
          },
          inputs: {
            sticky: "sticky",
            name: ["cdkColumnDef", "name"],
            stickyEnd: "stickyEnd"
          },
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
            useExisting: CdkColumnDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
        });
        return CdkColumnDef;
      }();
      /** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


      var BaseCdkCell = function BaseCdkCell(columnDef, elementRef) {
        _classCallCheck(this, BaseCdkCell);

        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        var classList = elementRef.nativeElement.classList;

        var _iterator = _createForOfIteratorHelper(columnDef._columnCssClassName),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var className = _step.value;
            classList.add(className);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };

      var CdkHeaderCell = /*@__PURE__*/function () {
        var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
          _inherits(CdkHeaderCell, _BaseCdkCell);

          var _super3 = _createSuper(CdkHeaderCell);

          function CdkHeaderCell(columnDef, elementRef) {
            _classCallCheck(this, CdkHeaderCell);

            return _super3.call(this, columnDef, elementRef);
          }

          return CdkHeaderCell;
        }(BaseCdkCell);

        CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
          return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        CdkHeaderCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkHeaderCell,
          selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
          hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
        });
        return CdkHeaderCell;
      }();

      var CdkFooterCell = /*@__PURE__*/function () {
        var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
          _inherits(CdkFooterCell, _BaseCdkCell2);

          var _super4 = _createSuper(CdkFooterCell);

          function CdkFooterCell(columnDef, elementRef) {
            _classCallCheck(this, CdkFooterCell);

            return _super4.call(this, columnDef, elementRef);
          }

          return CdkFooterCell;
        }(BaseCdkCell);

        CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
          return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        CdkFooterCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkFooterCell,
          selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
          hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
        });
        return CdkFooterCell;
      }();

      var CdkCell = /*@__PURE__*/function () {
        var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
          _inherits(CdkCell, _BaseCdkCell3);

          var _super5 = _createSuper(CdkCell);

          function CdkCell(columnDef, elementRef) {
            _classCallCheck(this, CdkCell);

            return _super5.call(this, columnDef, elementRef);
          }

          return CdkCell;
        }(BaseCdkCell);

        CdkCell.ɵfac = function CdkCell_Factory(t) {
          return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        CdkCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkCell,
          selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
          hostAttrs: ["role", "gridcell", 1, "cdk-cell"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
        });
        return CdkCell;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @docs-private
       */


      var _Schedule = function _Schedule() {
        _classCallCheck(this, _Schedule);

        this.tasks = [];
        this.endTasks = [];
      };

      var _CoalescedStyleScheduler = /*@__PURE__*/function () {
        var _CoalescedStyleScheduler = /*#__PURE__*/function () {
          function _CoalescedStyleScheduler(_ngZone) {
            _classCallCheck(this, _CoalescedStyleScheduler);

            this._ngZone = _ngZone;
            this._currentSchedule = null;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          }
          /**
           * Schedules the specified task to run at the end of the current VM turn.
           */


          _createClass(_CoalescedStyleScheduler, [{
            key: "schedule",
            value: function schedule(task) {
              this._createScheduleIfNeeded();

              this._currentSchedule.tasks.push(task);
            }
            /**
             * Schedules the specified task to run after other scheduled tasks at the end of the current
             * VM turn.
             */

          }, {
            key: "scheduleEnd",
            value: function scheduleEnd(task) {
              this._createScheduleIfNeeded();

              this._currentSchedule.endTasks.push(task);
            }
            /** Prevent any further tasks from running. */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._destroyed.next();

              this._destroyed.complete();
            }
          }, {
            key: "_createScheduleIfNeeded",
            value: function _createScheduleIfNeeded() {
              var _this3 = this;

              if (this._currentSchedule) {
                return;
              }

              this._currentSchedule = new _Schedule();

              this._getScheduleObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                while (_this3._currentSchedule.tasks.length || _this3._currentSchedule.endTasks.length) {
                  var schedule = _this3._currentSchedule; // Capture new tasks scheduled by the current set of tasks.

                  _this3._currentSchedule = new _Schedule();

                  var _iterator2 = _createForOfIteratorHelper(schedule.tasks),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var task = _step2.value;
                      task();
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  var _iterator3 = _createForOfIteratorHelper(schedule.endTasks),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var _task = _step3.value;

                      _task();
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }

                _this3._currentSchedule = null;
              });
            }
          }, {
            key: "_getScheduleObservable",
            value: function _getScheduleObservable() {
              // Use onStable when in the context of an ongoing change detection cycle so that we
              // do not accidentally trigger additional cycles.
              return this._ngZone.isStable ? Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(Promise.resolve(undefined)) : this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1));
            }
          }]);

          return _CoalescedStyleScheduler;
        }();

        _CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
          return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
        };

        _CoalescedStyleScheduler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
          token: _CoalescedStyleScheduler,
          factory: _CoalescedStyleScheduler.ɵfac
        });
        return _CoalescedStyleScheduler;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The row template that can be used by the mat-table. Should not be used outside of the
       * material library.
       */


      var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";

      var BaseRowDef = /*@__PURE__*/function () {
        var BaseRowDef = /*#__PURE__*/function () {
          function BaseRowDef(
          /** @docs-private */
          template, _differs) {
            _classCallCheck(this, BaseRowDef);

            this.template = template;
            this._differs = _differs;
          }

          _createClass(BaseRowDef, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              // Create a new columns differ if one does not yet exist. Initialize it based on initial value
              // of the columns property or an empty array if none is provided.
              if (!this._columnsDiffer) {
                var columns = changes['columns'] && changes['columns'].currentValue || [];
                this._columnsDiffer = this._differs.find(columns).create();

                this._columnsDiffer.diff(columns);
              }
            }
            /**
             * Returns the difference between the current columns and the columns from the last diff, or null
             * if there is no difference.
             */

          }, {
            key: "getColumnsDiff",
            value: function getColumnsDiff() {
              return this._columnsDiffer.diff(this.columns);
            }
            /** Gets this row def's relevant cell template from the provided column def. */

          }, {
            key: "extractCellTemplate",
            value: function extractCellTemplate(column) {
              if (this instanceof CdkHeaderRowDef) {
                return column.headerCell.template;
              }

              if (this instanceof CdkFooterRowDef) {
                return column.footerCell.template;
              } else {
                return column.cell.template;
              }
            }
          }]);

          return BaseRowDef;
        }();

        BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
          return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]));
        };

        BaseRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: BaseRowDef,
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
        });
        return BaseRowDef;
      }(); // Boilerplate for applying mixins to CdkHeaderRowDef.

      /** @docs-private */


      var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
        _inherits(CdkHeaderRowDefBase, _BaseRowDef);

        var _super6 = _createSuper(CdkHeaderRowDefBase);

        function CdkHeaderRowDefBase() {
          _classCallCheck(this, CdkHeaderRowDefBase);

          return _super6.apply(this, arguments);
        }

        return CdkHeaderRowDefBase;
      }(BaseRowDef);

      var _CdkHeaderRowDefBase = /*@__PURE__*/mixinHasStickyInput(CdkHeaderRowDefBase);

      var CdkHeaderRowDef = /*@__PURE__*/function () {
        var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
          _inherits(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

          var _super7 = _createSuper(CdkHeaderRowDef);

          function CdkHeaderRowDef(template, _differs, _table) {
            var _this4;

            _classCallCheck(this, CdkHeaderRowDef);

            _this4 = _super7.call(this, template, _differs);
            _this4._table = _table;
            return _this4;
          } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
          // Explicitly define it so that the method is called as part of the Angular lifecycle.


          _createClass(CdkHeaderRowDef, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              _get(_getPrototypeOf(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
            }
          }]);

          return CdkHeaderRowDef;
        }(_CdkHeaderRowDefBase);

        CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
          return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
        };

        CdkHeaderRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkHeaderRowDef,
          selectors: [["", "cdkHeaderRowDef", ""]],
          inputs: {
            columns: ["cdkHeaderRowDef", "columns"],
            sticky: ["cdkHeaderRowDefSticky", "sticky"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
        });
        return CdkHeaderRowDef;
      }(); // Boilerplate for applying mixins to CdkFooterRowDef.

      /** @docs-private */


      var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
        _inherits(CdkFooterRowDefBase, _BaseRowDef2);

        var _super8 = _createSuper(CdkFooterRowDefBase);

        function CdkFooterRowDefBase() {
          _classCallCheck(this, CdkFooterRowDefBase);

          return _super8.apply(this, arguments);
        }

        return CdkFooterRowDefBase;
      }(BaseRowDef);

      var _CdkFooterRowDefBase = /*@__PURE__*/mixinHasStickyInput(CdkFooterRowDefBase);

      var CdkFooterRowDef = /*@__PURE__*/function () {
        var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
          _inherits(CdkFooterRowDef, _CdkFooterRowDefBase2);

          var _super9 = _createSuper(CdkFooterRowDef);

          function CdkFooterRowDef(template, _differs, _table) {
            var _this5;

            _classCallCheck(this, CdkFooterRowDef);

            _this5 = _super9.call(this, template, _differs);
            _this5._table = _table;
            return _this5;
          } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
          // Explicitly define it so that the method is called as part of the Angular lifecycle.


          _createClass(CdkFooterRowDef, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              _get(_getPrototypeOf(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
            }
          }]);

          return CdkFooterRowDef;
        }(_CdkFooterRowDefBase);

        CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
          return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
        };

        CdkFooterRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkFooterRowDef,
          selectors: [["", "cdkFooterRowDef", ""]],
          inputs: {
            columns: ["cdkFooterRowDef", "columns"],
            sticky: ["cdkFooterRowDefSticky", "sticky"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
        });
        return CdkFooterRowDef;
      }();

      var CdkRowDef = /*@__PURE__*/function () {
        var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
          _inherits(CdkRowDef, _BaseRowDef3);

          var _super10 = _createSuper(CdkRowDef);

          // TODO(andrewseguin): Add an input for providing a switch function to determine
          //   if this template should be used.
          function CdkRowDef(template, _differs, _table) {
            var _this6;

            _classCallCheck(this, CdkRowDef);

            _this6 = _super10.call(this, template, _differs);
            _this6._table = _table;
            return _this6;
          }

          return CdkRowDef;
        }(BaseRowDef);

        CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
          return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
        };

        CdkRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkRowDef,
          selectors: [["", "cdkRowDef", ""]],
          inputs: {
            columns: ["cdkRowDefColumns", "columns"],
            when: ["cdkRowDefWhen", "when"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
        });
        return CdkRowDef;
      }();

      var CdkCellOutlet = /*@__PURE__*/function () {
        var CdkCellOutlet = /*#__PURE__*/function () {
          function CdkCellOutlet(_viewContainer) {
            _classCallCheck(this, CdkCellOutlet);

            this._viewContainer = _viewContainer;
            CdkCellOutlet.mostRecentCellOutlet = this;
          }

          _createClass(CdkCellOutlet, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              // If this was the last outlet being rendered in the view, remove the reference
              // from the static property after it has been destroyed to avoid leaking memory.
              if (CdkCellOutlet.mostRecentCellOutlet === this) {
                CdkCellOutlet.mostRecentCellOutlet = null;
              }
            }
          }]);

          return CdkCellOutlet;
        }();

        CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
          return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]));
        };

        CdkCellOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkCellOutlet,
          selectors: [["", "cdkCellOutlet", ""]]
        });
        /**
         * Static property containing the latest constructed instance of this class.
         * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
         * createEmbeddedView. After one of these components are created, this property will provide
         * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
         * construct the cells with the provided context.
         */

        CdkCellOutlet.mostRecentCellOutlet = null;
        return CdkCellOutlet;
      }();

      var CdkHeaderRow = /*@__PURE__*/function () {
        var CdkHeaderRow = function CdkHeaderRow() {
          _classCallCheck(this, CdkHeaderRow);
        };

        CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
          return new (t || CdkHeaderRow)();
        };

        CdkHeaderRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: CdkHeaderRow,
          selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
          hostAttrs: ["role", "row", 1, "cdk-header-row"],
          decls: 1,
          vars: 0,
          consts: [["cdkCellOutlet", ""]],
          template: function CdkHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
          },
          directives: [CdkCellOutlet],
          encapsulation: 2
        });
        return CdkHeaderRow;
      }();

      var CdkFooterRow = /*@__PURE__*/function () {
        var CdkFooterRow = function CdkFooterRow() {
          _classCallCheck(this, CdkFooterRow);
        };

        CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
          return new (t || CdkFooterRow)();
        };

        CdkFooterRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: CdkFooterRow,
          selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
          hostAttrs: ["role", "row", 1, "cdk-footer-row"],
          decls: 1,
          vars: 0,
          consts: [["cdkCellOutlet", ""]],
          template: function CdkFooterRow_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
          },
          directives: [CdkCellOutlet],
          encapsulation: 2
        });
        return CdkFooterRow;
      }();

      var CdkRow = /*@__PURE__*/function () {
        var CdkRow = function CdkRow() {
          _classCallCheck(this, CdkRow);
        };

        CdkRow.ɵfac = function CdkRow_Factory(t) {
          return new (t || CdkRow)();
        };

        CdkRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: CdkRow,
          selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
          hostAttrs: ["role", "row", 1, "cdk-row"],
          decls: 1,
          vars: 0,
          consts: [["cdkCellOutlet", ""]],
          template: function CdkRow_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
          },
          directives: [CdkCellOutlet],
          encapsulation: 2
        });
        return CdkRow;
      }();

      var CdkNoDataRow = /*@__PURE__*/function () {
        var CdkNoDataRow = function CdkNoDataRow(templateRef) {
          _classCallCheck(this, CdkNoDataRow);

          this.templateRef = templateRef;
        };

        CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
          return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
        };

        CdkNoDataRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: CdkNoDataRow,
          selectors: [["ng-template", "cdkNoDataRow", ""]]
        });
        return CdkNoDataRow;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * List of all possible directions that can be used for sticky positioning.
       * @docs-private
       */


      var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
      /**
       * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
       * @docs-private
       */

      var StickyStyler = /*#__PURE__*/function () {
        /**
         * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
         *     that uses the native `<table>` element.
         * @param _stickCellCss The CSS class that will be applied to every row/cell that has
         *     sticky positioning applied.
         * @param direction The directionality context of the table (ltr/rtl); affects column positioning
         *     by reversing left/right positions.
         * @param _isBrowser Whether the table is currently being rendered on the server or the client.
         * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
         *     using inline styles. If false, it is assumed that position: sticky is included in
         *     the component stylesheet for _stickCellCss.
         */
        function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler) {
          var _isBrowser = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

          var _needsPositionStickyOnElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

          _classCallCheck(this, StickyStyler);

          this._isNativeHtmlTable = _isNativeHtmlTable;
          this._stickCellCss = _stickCellCss;
          this.direction = direction;
          this._coalescedStyleScheduler = _coalescedStyleScheduler;
          this._isBrowser = _isBrowser;
          this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
        }
        /**
         * Clears the sticky positioning styles from the row and its cells by resetting the `position`
         * style, setting the zIndex to 0, and unsetting each provided sticky direction.
         * @param rows The list of rows that should be cleared from sticking in the provided directions
         * @param stickyDirections The directions that should no longer be set as sticky on the rows.
         */


        _createClass(StickyStyler, [{
          key: "clearStickyPositioning",
          value: function clearStickyPositioning(rows, stickyDirections) {
            var _this7 = this;

            var elementsToClear = [];

            var _iterator4 = _createForOfIteratorHelper(rows),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var row = _step4.value;

                // If the row isn't an element (e.g. if it's an `ng-container`),
                // it won't have inline styles or `children` so we skip it.
                if (row.nodeType !== row.ELEMENT_NODE) {
                  continue;
                }

                elementsToClear.push(row);

                for (var i = 0; i < row.children.length; i++) {
                  elementsToClear.push(row.children[i]);
                }
              } // Coalesce with sticky row/column updates (and potentially other changes like column resize).

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this._coalescedStyleScheduler.schedule(function () {
              var _iterator5 = _createForOfIteratorHelper(elementsToClear),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var element = _step5.value;

                  _this7._removeStickyStyle(element, stickyDirections);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            });
          }
          /**
           * Applies sticky left and right positions to the cells of each row according to the sticky
           * states of the rendered column definitions.
           * @param rows The rows that should have its set of cells stuck according to the sticky states.
           * @param stickyStartStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the start of the row.
           * @param stickyEndStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the end of the row.
           */

        }, {
          key: "updateStickyColumns",
          value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
            var _this8 = this;

            if (!rows.length || !this._isBrowser || !(stickyStartStates.some(function (state) {
              return state;
            }) || stickyEndStates.some(function (state) {
              return state;
            }))) {
              return;
            }

            var firstRow = rows[0];
            var numCells = firstRow.children.length;

            var cellWidths = this._getCellWidths(firstRow);

            var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

            var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates); // Coalesce with sticky row updates (and potentially other changes like column resize).


            this._coalescedStyleScheduler.schedule(function () {
              var isRtl = _this8.direction === 'rtl';
              var start = isRtl ? 'right' : 'left';
              var end = isRtl ? 'left' : 'right';

              var _iterator6 = _createForOfIteratorHelper(rows),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var row = _step6.value;

                  for (var i = 0; i < numCells; i++) {
                    var cell = row.children[i];

                    if (stickyStartStates[i]) {
                      _this8._addStickyStyle(cell, start, startPositions[i]);
                    }

                    if (stickyEndStates[i]) {
                      _this8._addStickyStyle(cell, end, endPositions[i]);
                    }
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            });
          }
          /**
           * Applies sticky positioning to the row's cells if using the native table layout, and to the
           * row itself otherwise.
           * @param rowsToStick The list of rows that should be stuck according to their corresponding
           *     sticky state and to the provided top or bottom position.
           * @param stickyStates A list of boolean states where each state represents whether the row
           *     should be stuck in the particular top or bottom position.
           * @param position The position direction in which the row should be stuck if that row should be
           *     sticky.
           *
           */

        }, {
          key: "stickRows",
          value: function stickRows(rowsToStick, stickyStates, position) {
            var _this9 = this;

            // Since we can't measure the rows on the server, we can't stick the rows properly.
            if (!this._isBrowser) {
              return;
            } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
            // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
            // sticky states need to be reversed as well.


            var rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
            var states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates; // Measure row heights all at once before adding sticky styles to reduce layout thrashing.

            var stickyHeights = [];
            var elementsToStick = [];

            for (var rowIndex = 0, stickyHeight = 0; rowIndex < rows.length; rowIndex++) {
              stickyHeights[rowIndex] = stickyHeight;

              if (!states[rowIndex]) {
                continue;
              }

              var row = rows[rowIndex];
              elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];

              if (rowIndex !== rows.length - 1) {
                stickyHeight += row.getBoundingClientRect().height;
              }
            } // Coalesce with other sticky row updates (top/bottom), sticky columns updates
            // (and potentially other changes like column resize).


            this._coalescedStyleScheduler.schedule(function () {
              for (var _rowIndex = 0; _rowIndex < rows.length; _rowIndex++) {
                if (!states[_rowIndex]) {
                  continue;
                }

                var height = stickyHeights[_rowIndex];

                var _iterator7 = _createForOfIteratorHelper(elementsToStick[_rowIndex]),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var element = _step7.value;

                    _this9._addStickyStyle(element, position, height);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
            });
          }
          /**
           * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
           * footer rows is to apply sticky styling to the tfoot container. This should only be done if
           * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
           * the tfoot element.
           */

        }, {
          key: "updateStickyFooterContainer",
          value: function updateStickyFooterContainer(tableElement, stickyStates) {
            var _this10 = this;

            if (!this._isNativeHtmlTable) {
              return;
            }

            var tfoot = tableElement.querySelector('tfoot'); // Coalesce with other sticky updates (and potentially other changes like column resize).

            this._coalescedStyleScheduler.schedule(function () {
              if (stickyStates.some(function (state) {
                return !state;
              })) {
                _this10._removeStickyStyle(tfoot, ['bottom']);
              } else {
                _this10._addStickyStyle(tfoot, 'bottom', 0);
              }
            });
          }
          /**
           * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
           * the zIndex, removing each of the provided sticky directions, and removing the
           * sticky position if there are no more directions.
           */

        }, {
          key: "_removeStickyStyle",
          value: function _removeStickyStyle(element, stickyDirections) {
            var _iterator8 = _createForOfIteratorHelper(stickyDirections),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var dir = _step8.value;
                element.style[dir] = '';
              } // If the element no longer has any more sticky directions, remove sticky positioning and
              // the sticky CSS class.
              // Short-circuit checking element.style[dir] for stickyDirections as they
              // were already removed above.

            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            var hasDirection = STICKY_DIRECTIONS.some(function (dir) {
              return stickyDirections.indexOf(dir) === -1 && element.style[dir];
            });

            if (hasDirection) {
              element.style.zIndex = this._getCalculatedZIndex(element);
            } else {
              // When not hasDirection, _getCalculatedZIndex will always return ''.
              element.style.zIndex = '';

              if (this._needsPositionStickyOnElement) {
                element.style.position = '';
              }

              element.classList.remove(this._stickCellCss);
            }
          }
          /**
           * Adds the sticky styling to the element by adding the sticky style class, changing position
           * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
           * direction and value.
           */

        }, {
          key: "_addStickyStyle",
          value: function _addStickyStyle(element, dir, dirValue) {
            element.classList.add(this._stickCellCss);
            element.style[dir] = "".concat(dirValue, "px");
            element.style.zIndex = this._getCalculatedZIndex(element);

            if (this._needsPositionStickyOnElement) {
              element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
            }
          }
          /**
           * Calculate what the z-index should be for the element, depending on what directions (top,
           * bottom, left, right) have been set. It should be true that elements with a top direction
           * should have the highest index since these are elements like a table header. If any of those
           * elements are also sticky in another direction, then they should appear above other elements
           * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
           * (e.g. footer rows) should then be next in the ordering such that they are below the header
           * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
           * should minimally increment so that they are above non-sticky elements but below top and bottom
           * elements.
           */

        }, {
          key: "_getCalculatedZIndex",
          value: function _getCalculatedZIndex(element) {
            var zIndexIncrements = {
              top: 100,
              bottom: 10,
              left: 1,
              right: 1
            };
            var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

            var _iterator9 = _createForOfIteratorHelper(STICKY_DIRECTIONS),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var dir = _step9.value;

                if (element.style[dir]) {
                  zIndex += zIndexIncrements[dir];
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return zIndex ? "".concat(zIndex) : '';
          }
          /** Gets the widths for each cell in the provided row. */

        }, {
          key: "_getCellWidths",
          value: function _getCellWidths(row) {
            var cellWidths = [];
            var firstRowCells = row.children;

            for (var i = 0; i < firstRowCells.length; i++) {
              var cell = firstRowCells[i];
              cellWidths.push(cell.getBoundingClientRect().width);
            }

            return cellWidths;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyStartColumnPositions",
          value: function _getStickyStartColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = 0; i < widths.length; i++) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyEndColumnPositions",
          value: function _getStickyEndColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = widths.length; i > 0; i--) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
        }]);

        return StickyStyler;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to find an unexisting column.
       * @param id Id whose lookup failed.
       * @docs-private
       */


      function getTableUnknownColumnError(id) {
        return Error("Could not find column with id \"".concat(id, "\"."));
      }
      /**
       * Returns an error to be thrown when two column definitions have the same name.
       * @docs-private
       */


      function getTableDuplicateColumnNameError(name) {
        return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
      }
      /**
       * Returns an error to be thrown when there are multiple rows that are missing a when function.
       * @docs-private
       */


      function getTableMultipleDefaultRowDefsError() {
        return Error("There can only be one default row without a when predicate function.");
      }
      /**
       * Returns an error to be thrown when there are no matching row defs for a particular set of data.
       * @docs-private
       */


      function getTableMissingMatchingRowDefError(data) {
        return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
      }
      /**
       * Returns an error to be thrown when there is no row definitions present in the content.
       * @docs-private
       */


      function getTableMissingRowDefsError() {
        return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
      }
      /**
       * Returns an error to be thrown when the data source does not match the compatible types.
       * @docs-private
       */


      function getTableUnknownDataSourceError() {
        return Error("Provided data source did not match an array, Observable, or DataSource");
      }
      /**
       * Returns an error to be thrown when the text column cannot find a parent table to inject.
       * @docs-private
       */


      function getTableTextColumnMissingParentTableError() {
        return Error("Text column could not find a parent table for registration.");
      }
      /**
       * Returns an error to be thrown when a table text column doesn't have a name.
       * @docs-private
       */


      function getTableTextColumnMissingNameError() {
        return Error("Table text column must have a name.");
      }

      var DataRowOutlet = /*@__PURE__*/function () {
        var DataRowOutlet = function DataRowOutlet(viewContainer, elementRef) {
          _classCallCheck(this, DataRowOutlet);

          this.viewContainer = viewContainer;
          this.elementRef = elementRef;
        };

        DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
          return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        DataRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: DataRowOutlet,
          selectors: [["", "rowOutlet", ""]]
        });
        return DataRowOutlet;
      }();

      var HeaderRowOutlet = /*@__PURE__*/function () {
        var HeaderRowOutlet = function HeaderRowOutlet(viewContainer, elementRef) {
          _classCallCheck(this, HeaderRowOutlet);

          this.viewContainer = viewContainer;
          this.elementRef = elementRef;
        };

        HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
          return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        HeaderRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: HeaderRowOutlet,
          selectors: [["", "headerRowOutlet", ""]]
        });
        return HeaderRowOutlet;
      }();

      var FooterRowOutlet = /*@__PURE__*/function () {
        var FooterRowOutlet = function FooterRowOutlet(viewContainer, elementRef) {
          _classCallCheck(this, FooterRowOutlet);

          this.viewContainer = viewContainer;
          this.elementRef = elementRef;
        };

        FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
          return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        FooterRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: FooterRowOutlet,
          selectors: [["", "footerRowOutlet", ""]]
        });
        return FooterRowOutlet;
      }();

      var NoDataRowOutlet = /*@__PURE__*/function () {
        var NoDataRowOutlet = function NoDataRowOutlet(viewContainer, elementRef) {
          _classCallCheck(this, NoDataRowOutlet);

          this.viewContainer = viewContainer;
          this.elementRef = elementRef;
        };

        NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
          return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        NoDataRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
          type: NoDataRowOutlet,
          selectors: [["", "noDataRowOutlet", ""]]
        });
        return NoDataRowOutlet;
      }();
      /**
       * The table template that can be used by the mat-table. Should not be used outside of the
       * material library.
       * @docs-private
       */


      var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
      // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
      "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
      /**
       * Class used to conveniently type the embedded view ref for rows with a context.
       * @docs-private
       */

      var RowViewRef = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(RowViewRef, _angular_core__WEBPAC);

        var _super11 = _createSuper(RowViewRef);

        function RowViewRef() {
          _classCallCheck(this, RowViewRef);

          return _super11.apply(this, arguments);
        }

        return RowViewRef;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"]);

      var CdkTable = /*@__PURE__*/function () {
        var CdkTable = /*#__PURE__*/function () {
          function CdkTable(_differs, _changeDetectorRef, _coalescedStyleScheduler, _elementRef, role, _dir, _document, _platform) {
            _classCallCheck(this, CdkTable);

            this._differs = _differs;
            this._changeDetectorRef = _changeDetectorRef;
            this._coalescedStyleScheduler = _coalescedStyleScheduler;
            this._elementRef = _elementRef;
            this._dir = _dir;
            this._platform = _platform;
            /** Subject that emits when the component has been destroyed. */

            this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            /**
             * Map of all the user's defined columns (header, data, and footer cell template) identified by
             * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
             * any custom column definitions added to `_customColumnDefs`.
             */

            this._columnDefsByName = new Map();
            /**
             * Column definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * column definitions as *its* content child.
             */

            this._customColumnDefs = new Set();
            /**
             * Data row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in data rows as *its* content child.
             */

            this._customRowDefs = new Set();
            /**
             * Header row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has
             * built-in header rows as *its* content child.
             */

            this._customHeaderRowDefs = new Set();
            /**
             * Footer row definitions that were defined outside of the direct content children of the table.
             * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
             * built-in footer row as *its* content child.
             */

            this._customFooterRowDefs = new Set();
            /**
             * Whether the header row definition has been changed. Triggers an update to the header row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */

            this._headerRowDefChanged = true;
            /**
             * Whether the footer row definition has been changed. Triggers an update to the footer row after
             * content is checked. Initialized as true so that the table renders the initial set of rows.
             */

            this._footerRowDefChanged = true;
            /**
             * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
             * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
             * the cached `RenderRow` objects when possible, the row identity is preserved when the data
             * and row template matches, which allows the `IterableDiffer` to check rows by reference
             * and understand which rows are added/moved/removed.
             *
             * Implemented as a map of maps where the first key is the `data: T` object and the second is the
             * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
             * contains an array of created pairs. The array is necessary to handle cases where the data
             * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
             * stored.
             */

            this._cachedRenderRowsMap = new Map();
            /**
             * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
             * table subclasses.
             */

            this.stickyCssClass = 'cdk-table-sticky';
            /**
             * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
             * the position is set in a selector associated with the value of stickyCssClass. May be
             * overridden by table subclasses
             */

            this.needsPositionStickyOnElement = true;
            /** Whether the no data row is currently showing anything. */

            this._isShowingNoDataRow = false;
            this._multiTemplateDataRows = false; // TODO(andrewseguin): Remove max value as the end index
            //   and instead calculate the view on init and scroll.

            /**
             * Stream containing the latest information on what rows are being displayed on screen.
             * Can be used by the data source to as a heuristic of what data should be provided.
             *
             * @docs-private
             */

            this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
              start: 0,
              end: Number.MAX_VALUE
            });

            if (!role) {
              this._elementRef.nativeElement.setAttribute('role', 'grid');
            }

            this._document = _document;
            this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
          }
          /**
           * Tracking function that will be used to check the differences in data changes. Used similarly
           * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
           * relative to the function to know if a row should be added/removed/moved.
           * Accepts a function that takes two parameters, `index` and `item`.
           */


          _createClass(CdkTable, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this11 = this;

              this._setupStickyStyler();

              if (this._isNativeHtmlTable) {
                this._applyNativeTableSections();
              } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
              // the user has provided a custom trackBy, return the result of that function as evaluated
              // with the values of the `RenderRow`'s data and index.


              this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
                return _this11.trackBy ? _this11.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
              });
            }
          }, {
            key: "ngAfterContentChecked",
            value: function ngAfterContentChecked() {
              // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
              this._cacheRowDefs();

              this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


              if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
                throw getTableMissingRowDefsError();
              } // Render updates if the list of columns have been changed for the header, row, or footer defs.


              var columnsChanged = this._renderUpdatedColumns();

              var stickyColumnStyleUpdateNeeded = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged; // If the header row definition has been changed, trigger a render to the header row.

              if (this._headerRowDefChanged) {
                this._forceRenderHeaderRows();

                this._headerRowDefChanged = false;
              } // If the footer row definition has been changed, trigger a render to the footer row.


              if (this._footerRowDefChanged) {
                this._forceRenderFooterRows();

                this._footerRowDefChanged = false;
              } // If there is a data source and row definitions, connect to the data source unless a
              // connection has already been made.


              if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
                this._observeRenderChanges();
              } else if (stickyColumnStyleUpdateNeeded) {
                // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
                // called when it row data arrives. Otherwise, we need to call it proactively.
                this.updateStickyColumnStyles();
              }

              this._checkStickyStates();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._rowOutlet.viewContainer.clear();

              this._noDataRowOutlet.viewContainer.clear();

              this._headerRowOutlet.viewContainer.clear();

              this._footerRowOutlet.viewContainer.clear();

              this._cachedRenderRowsMap.clear();

              this._onDestroy.next();

              this._onDestroy.complete();

              if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                this.dataSource.disconnect(this);
              }
            }
            /**
             * Renders rows based on the table's latest set of data, which was either provided directly as an
             * input or retrieved through an Observable stream (directly or from a DataSource).
             * Checks for differences in the data since the last diff to perform only the necessary
             * changes (add/remove/move rows).
             *
             * If the table's data source is a DataSource or Observable, this will be invoked automatically
             * each time the provided Observable stream emits a new data array. Otherwise if your data is
             * an array, this function will need to be called to render any changes.
             */

          }, {
            key: "renderRows",
            value: function renderRows() {
              var _this12 = this;

              this._renderRows = this._getAllRenderRows();

              var changes = this._dataDiffer.diff(this._renderRows);

              if (!changes) {
                this._updateNoDataRow();

                return;
              }

              var viewContainer = this._rowOutlet.viewContainer;
              changes.forEachOperation(function (record, prevIndex, currentIndex) {
                if (record.previousIndex == null) {
                  _this12._insertRow(record.item, currentIndex);
                } else if (currentIndex == null) {
                  viewContainer.remove(prevIndex);
                } else {
                  var view = viewContainer.get(prevIndex);
                  viewContainer.move(view, currentIndex);
                }
              }); // Update the meta context of a row's context data (index, count, first, last, ...)

              this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
              // e.g. if trackBy matched data on some property but the actual data reference changed.


              changes.forEachIdentityChange(function (record) {
                var rowView = viewContainer.get(record.currentIndex);
                rowView.context.$implicit = record.item.data;
              });

              this._updateNoDataRow();

              this.updateStickyColumnStyles();
            }
            /** Adds a column definition that was not included as part of the content children. */

          }, {
            key: "addColumnDef",
            value: function addColumnDef(columnDef) {
              this._customColumnDefs.add(columnDef);
            }
            /** Removes a column definition that was not included as part of the content children. */

          }, {
            key: "removeColumnDef",
            value: function removeColumnDef(columnDef) {
              this._customColumnDefs["delete"](columnDef);
            }
            /** Adds a row definition that was not included as part of the content children. */

          }, {
            key: "addRowDef",
            value: function addRowDef(rowDef) {
              this._customRowDefs.add(rowDef);
            }
            /** Removes a row definition that was not included as part of the content children. */

          }, {
            key: "removeRowDef",
            value: function removeRowDef(rowDef) {
              this._customRowDefs["delete"](rowDef);
            }
            /** Adds a header row definition that was not included as part of the content children. */

          }, {
            key: "addHeaderRowDef",
            value: function addHeaderRowDef(headerRowDef) {
              this._customHeaderRowDefs.add(headerRowDef);

              this._headerRowDefChanged = true;
            }
            /** Removes a header row definition that was not included as part of the content children. */

          }, {
            key: "removeHeaderRowDef",
            value: function removeHeaderRowDef(headerRowDef) {
              this._customHeaderRowDefs["delete"](headerRowDef);

              this._headerRowDefChanged = true;
            }
            /** Adds a footer row definition that was not included as part of the content children. */

          }, {
            key: "addFooterRowDef",
            value: function addFooterRowDef(footerRowDef) {
              this._customFooterRowDefs.add(footerRowDef);

              this._footerRowDefChanged = true;
            }
            /** Removes a footer row definition that was not included as part of the content children. */

          }, {
            key: "removeFooterRowDef",
            value: function removeFooterRowDef(footerRowDef) {
              this._customFooterRowDefs["delete"](footerRowDef);

              this._footerRowDefChanged = true;
            }
            /**
             * Updates the header sticky styles. First resets all applied styles with respect to the cells
             * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
             * automatically called when the header row changes its displayed set of columns, or if its
             * sticky input changes. May be called manually for cases where the cell content changes outside
             * of these events.
             */

          }, {
            key: "updateStickyHeaderRowStyles",
            value: function updateStickyHeaderRowStyles() {
              var headerRows = this._getRenderedRows(this._headerRowOutlet);

              var tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
              // overzealous a11y checkers that fail because the `rowgroup` element does not contain
              // required child `row`.

              var thead = tableElement.querySelector('thead');

              if (thead) {
                thead.style.display = headerRows.length ? '' : 'none';
              }

              var stickyStates = this._headerRowDefs.map(function (def) {
                return def.sticky;
              });

              this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

              this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


              this._headerRowDefs.forEach(function (def) {
                return def.resetStickyChanged();
              });
            }
            /**
             * Updates the footer sticky styles. First resets all applied styles with respect to the cells
             * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
             * automatically called when the footer row changes its displayed set of columns, or if its
             * sticky input changes. May be called manually for cases where the cell content changes outside
             * of these events.
             */

          }, {
            key: "updateStickyFooterRowStyles",
            value: function updateStickyFooterRowStyles() {
              var footerRows = this._getRenderedRows(this._footerRowOutlet);

              var tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
              // overzealous a11y checkers that fail because the `rowgroup` element does not contain
              // required child `row`.

              var tfoot = tableElement.querySelector('tfoot');

              if (tfoot) {
                tfoot.style.display = footerRows.length ? '' : 'none';
              }

              var stickyStates = this._footerRowDefs.map(function (def) {
                return def.sticky;
              });

              this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

              this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

              this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


              this._footerRowDefs.forEach(function (def) {
                return def.resetStickyChanged();
              });
            }
            /**
             * Updates the column sticky styles. First resets all applied styles with respect to the cells
             * sticking to the left and right. Then sticky styles are added for the left and right according
             * to the column definitions for each cell in each row. This is automatically called when
             * the data source provides a new set of data or when a column definition changes its sticky
             * input. May be called manually for cases where the cell content changes outside of these events.
             */

          }, {
            key: "updateStickyColumnStyles",
            value: function updateStickyColumnStyles() {
              var _this13 = this;

              var headerRows = this._getRenderedRows(this._headerRowOutlet);

              var dataRows = this._getRenderedRows(this._rowOutlet);

              var footerRows = this._getRenderedRows(this._footerRowOutlet); // Clear the left and right positioning from all columns in the table across all rows since
              // sticky columns span across all table sections (header, data, footer)


              this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']); // Update the sticky styles for each header row depending on the def's sticky state


              headerRows.forEach(function (headerRow, i) {
                _this13._addStickyColumnStyles([headerRow], _this13._headerRowDefs[i]);
              }); // Update the sticky styles for each data row depending on its def's sticky state

              this._rowDefs.forEach(function (rowDef) {
                // Collect all the rows rendered with this row definition.
                var rows = [];

                for (var i = 0; i < dataRows.length; i++) {
                  if (_this13._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                  }
                }

                _this13._addStickyColumnStyles(rows, rowDef);
              }); // Update the sticky styles for each footer row depending on the def's sticky state


              footerRows.forEach(function (footerRow, i) {
                _this13._addStickyColumnStyles([footerRow], _this13._footerRowDefs[i]);
              }); // Reset the dirty state of the sticky input change since it has been used.

              Array.from(this._columnDefsByName.values()).forEach(function (def) {
                return def.resetStickyChanged();
              });
            }
            /**
             * Get the list of RenderRow objects to render according to the current list of data and defined
             * row definitions. If the previous list already contained a particular pair, it should be reused
             * so that the differ equates their references.
             */

          }, {
            key: "_getAllRenderRows",
            value: function _getAllRenderRows() {
              var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
              // new cache while unused ones can be picked up by garbage collection.

              var prevCachedRenderRows = this._cachedRenderRowsMap;
              this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
              // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

              for (var i = 0; i < this._data.length; i++) {
                var data = this._data[i];

                var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

                if (!this._cachedRenderRowsMap.has(data)) {
                  this._cachedRenderRowsMap.set(data, new WeakMap());
                }

                for (var j = 0; j < renderRowsForData.length; j++) {
                  var renderRow = renderRowsForData[j];

                  var cache = this._cachedRenderRowsMap.get(renderRow.data);

                  if (cache.has(renderRow.rowDef)) {
                    cache.get(renderRow.rowDef).push(renderRow);
                  } else {
                    cache.set(renderRow.rowDef, [renderRow]);
                  }

                  renderRows.push(renderRow);
                }
              }

              return renderRows;
            }
            /**
             * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
             * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
             * `(T, CdkRowDef)` pair.
             */

          }, {
            key: "_getRenderRowsForData",
            value: function _getRenderRowsForData(data, dataIndex, cache) {
              var rowDefs = this._getRowDefs(data, dataIndex);

              return rowDefs.map(function (rowDef) {
                var cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

                if (cachedRenderRows.length) {
                  var dataRow = cachedRenderRows.shift();
                  dataRow.dataIndex = dataIndex;
                  return dataRow;
                } else {
                  return {
                    data: data,
                    rowDef: rowDef,
                    dataIndex: dataIndex
                  };
                }
              });
            }
            /** Update the map containing the content's column definitions. */

          }, {
            key: "_cacheColumnDefs",
            value: function _cacheColumnDefs() {
              var _this14 = this;

              this._columnDefsByName.clear();

              var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
              columnDefs.forEach(function (columnDef) {
                if (_this14._columnDefsByName.has(columnDef.name)) {
                  throw getTableDuplicateColumnNameError(columnDef.name);
                }

                _this14._columnDefsByName.set(columnDef.name, columnDef);
              });
            }
            /** Update the list of all available row definitions that can be used. */

          }, {
            key: "_cacheRowDefs",
            value: function _cacheRowDefs() {
              this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
              this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
              this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

              var defaultRowDefs = this._rowDefs.filter(function (def) {
                return !def.when;
              });

              if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
                throw getTableMultipleDefaultRowDefsError();
              }

              this._defaultRowDef = defaultRowDefs[0];
            }
            /**
             * Check if the header, data, or footer rows have changed what columns they want to display or
             * whether the sticky states have changed for the header or footer. If there is a diff, then
             * re-render that section.
             */

          }, {
            key: "_renderUpdatedColumns",
            value: function _renderUpdatedColumns() {
              var columnsDiffReducer = function columnsDiffReducer(acc, def) {
                return acc || !!def.getColumnsDiff();
              }; // Force re-render data rows if the list of column definitions have changed.


              var dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);

              if (dataColumnsChanged) {
                this._forceRenderDataRows();
              } // Force re-render header/footer rows if the list of column definitions have changed.


              var headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);

              if (headerColumnsChanged) {
                this._forceRenderHeaderRows();
              }

              var footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);

              if (footerColumnsChanged) {
                this._forceRenderFooterRows();
              }

              return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
            }
            /**
             * Switch to the provided data source by resetting the data and unsubscribing from the current
             * render change subscription if one exists. If the data source is null, interpret this by
             * clearing the row outlet. Otherwise start listening for new data.
             */

          }, {
            key: "_switchDataSource",
            value: function _switchDataSource(dataSource) {
              this._data = [];

              if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                this.dataSource.disconnect(this);
              } // Stop listening for data from the previous data source.


              if (this._renderChangeSubscription) {
                this._renderChangeSubscription.unsubscribe();

                this._renderChangeSubscription = null;
              }

              if (!dataSource) {
                if (this._dataDiffer) {
                  this._dataDiffer.diff([]);
                }

                this._rowOutlet.viewContainer.clear();
              }

              this._dataSource = dataSource;
            }
            /** Set up a subscription for the data provided by the data source. */

          }, {
            key: "_observeRenderChanges",
            value: function _observeRenderChanges() {
              var _this15 = this;

              // If no data source has been set, there is nothing to observe for changes.
              if (!this.dataSource) {
                return;
              }

              var dataStream;

              if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                dataStream = this.dataSource.connect(this);
              } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
                dataStream = this.dataSource;
              } else if (Array.isArray(this.dataSource)) {
                dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
              }

              if (dataStream === undefined) {
                throw getTableUnknownDataSourceError();
              }

              this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(function (data) {
                _this15._data = data || [];

                _this15.renderRows();
              });
            }
            /**
             * Clears any existing content in the header row outlet and creates a new embedded view
             * in the outlet using the header row definition.
             */

          }, {
            key: "_forceRenderHeaderRows",
            value: function _forceRenderHeaderRows() {
              var _this16 = this;

              // Clear the header row outlet if any content exists.
              if (this._headerRowOutlet.viewContainer.length > 0) {
                this._headerRowOutlet.viewContainer.clear();
              }

              this._headerRowDefs.forEach(function (def, i) {
                return _this16._renderRow(_this16._headerRowOutlet, def, i);
              });

              this.updateStickyHeaderRowStyles();
            }
            /**
             * Clears any existing content in the footer row outlet and creates a new embedded view
             * in the outlet using the footer row definition.
             */

          }, {
            key: "_forceRenderFooterRows",
            value: function _forceRenderFooterRows() {
              var _this17 = this;

              // Clear the footer row outlet if any content exists.
              if (this._footerRowOutlet.viewContainer.length > 0) {
                this._footerRowOutlet.viewContainer.clear();
              }

              this._footerRowDefs.forEach(function (def, i) {
                return _this17._renderRow(_this17._footerRowOutlet, def, i);
              });

              this.updateStickyFooterRowStyles();
            }
            /** Adds the sticky column styles for the rows according to the columns' stick states. */

          }, {
            key: "_addStickyColumnStyles",
            value: function _addStickyColumnStyles(rows, rowDef) {
              var _this18 = this;

              var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
                var columnDef = _this18._columnDefsByName.get(columnName);

                if (!columnDef) {
                  throw getTableUnknownColumnError(columnName);
                }

                return columnDef;
              });
              var stickyStartStates = columnDefs.map(function (columnDef) {
                return columnDef.sticky;
              });
              var stickyEndStates = columnDefs.map(function (columnDef) {
                return columnDef.stickyEnd;
              });

              this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
            }
            /** Gets the list of rows that have been rendered in the row outlet. */

          }, {
            key: "_getRenderedRows",
            value: function _getRenderedRows(rowOutlet) {
              var renderedRows = [];

              for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
                var viewRef = rowOutlet.viewContainer.get(i);
                renderedRows.push(viewRef.rootNodes[0]);
              }

              return renderedRows;
            }
            /**
             * Get the matching row definitions that should be used for this row data. If there is only
             * one row definition, it is returned. Otherwise, find the row definitions that has a when
             * predicate that returns true with the data. If none return true, return the default row
             * definition.
             */

          }, {
            key: "_getRowDefs",
            value: function _getRowDefs(data, dataIndex) {
              if (this._rowDefs.length == 1) {
                return [this._rowDefs[0]];
              }

              var rowDefs = [];

              if (this.multiTemplateDataRows) {
                rowDefs = this._rowDefs.filter(function (def) {
                  return !def.when || def.when(dataIndex, data);
                });
              } else {
                var rowDef = this._rowDefs.find(function (def) {
                  return def.when && def.when(dataIndex, data);
                }) || this._defaultRowDef;

                if (rowDef) {
                  rowDefs.push(rowDef);
                }
              }

              if (!rowDefs.length) {
                throw getTableMissingMatchingRowDefError(data);
              }

              return rowDefs;
            }
            /**
             * Create the embedded view for the data row template and place it in the correct index location
             * within the data row view container.
             */

          }, {
            key: "_insertRow",
            value: function _insertRow(renderRow, renderIndex) {
              var rowDef = renderRow.rowDef;
              var context = {
                $implicit: renderRow.data
              };

              this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
            }
            /**
             * Creates a new row template in the outlet and fills it with the set of cell templates.
             * Optionally takes a context to provide to the row and cells, as well as an optional index
             * of where to place the new row template in the outlet.
             */

          }, {
            key: "_renderRow",
            value: function _renderRow(outlet, rowDef, index) {
              var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
              // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
              outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

              var _iterator10 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var cellTemplate = _step10.value;

                  if (CdkCellOutlet.mostRecentCellOutlet) {
                    CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              this._changeDetectorRef.markForCheck();
            }
            /**
             * Updates the index-related context for each row to reflect any changes in the index of the rows,
             * e.g. first/last/even/odd.
             */

          }, {
            key: "_updateRowIndexContext",
            value: function _updateRowIndexContext() {
              var viewContainer = this._rowOutlet.viewContainer;

              for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                var viewRef = viewContainer.get(renderIndex);
                var context = viewRef.context;
                context.count = count;
                context.first = renderIndex === 0;
                context.last = renderIndex === count - 1;
                context.even = renderIndex % 2 === 0;
                context.odd = !context.even;

                if (this.multiTemplateDataRows) {
                  context.dataIndex = this._renderRows[renderIndex].dataIndex;
                  context.renderIndex = renderIndex;
                } else {
                  context.index = this._renderRows[renderIndex].dataIndex;
                }
              }
            }
            /** Gets the column definitions for the provided row def. */

          }, {
            key: "_getCellTemplates",
            value: function _getCellTemplates(rowDef) {
              var _this19 = this;

              if (!rowDef || !rowDef.columns) {
                return [];
              }

              return Array.from(rowDef.columns, function (columnId) {
                var column = _this19._columnDefsByName.get(columnId);

                if (!column) {
                  throw getTableUnknownColumnError(columnId);
                }

                return rowDef.extractCellTemplate(column);
              });
            }
            /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */

          }, {
            key: "_applyNativeTableSections",
            value: function _applyNativeTableSections() {
              var documentFragment = this._document.createDocumentFragment();

              var sections = [{
                tag: 'thead',
                outlets: [this._headerRowOutlet]
              }, {
                tag: 'tbody',
                outlets: [this._rowOutlet, this._noDataRowOutlet]
              }, {
                tag: 'tfoot',
                outlets: [this._footerRowOutlet]
              }];

              for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
                var section = _sections[_i2];

                var element = this._document.createElement(section.tag);

                element.setAttribute('role', 'rowgroup');

                var _iterator11 = _createForOfIteratorHelper(section.outlets),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var outlet = _step11.value;
                    element.appendChild(outlet.elementRef.nativeElement);
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }

                documentFragment.appendChild(element);
              } // Use a DocumentFragment so we don't hit the DOM on each iteration.


              this._elementRef.nativeElement.appendChild(documentFragment);
            }
            /**
             * Forces a re-render of the data rows. Should be called in cases where there has been an input
             * change that affects the evaluation of which rows should be rendered, e.g. toggling
             * `multiTemplateDataRows` or adding/removing row definitions.
             */

          }, {
            key: "_forceRenderDataRows",
            value: function _forceRenderDataRows() {
              this._dataDiffer.diff([]);

              this._rowOutlet.viewContainer.clear();

              this.renderRows();
            }
            /**
             * Checks if there has been a change in sticky states since last check and applies the correct
             * sticky styles. Since checking resets the "dirty" state, this should only be performed once
             * during a change detection and after the inputs are settled (after content check).
             */

          }, {
            key: "_checkStickyStates",
            value: function _checkStickyStates() {
              var stickyCheckReducer = function stickyCheckReducer(acc, d) {
                return acc || d.hasStickyChanged();
              }; // Note that the check needs to occur for every definition since it notifies the definition
              // that it can reset its dirty state. Using another operator like `some` may short-circuit
              // remaining definitions and leave them in an unchecked state.


              if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
                this.updateStickyHeaderRowStyles();
              }

              if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
                this.updateStickyFooterRowStyles();
              }

              if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
                this.updateStickyColumnStyles();
              }
            }
            /**
             * Creates the sticky styler that will be used for sticky rows and columns. Listens
             * for directionality changes and provides the latest direction to the styler. Re-applies column
             * stickiness when directionality changes.
             */

          }, {
            key: "_setupStickyStyler",
            value: function _setupStickyStyler() {
              var _this20 = this;

              var direction = this._dir ? this._dir.value : 'ltr';
              this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement);
              (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(function (value) {
                _this20._stickyStyler.direction = value;

                _this20.updateStickyColumnStyles();
              });
            }
            /** Filters definitions that belong to this table from a QueryList. */

          }, {
            key: "_getOwnDefs",
            value: function _getOwnDefs(items) {
              var _this21 = this;

              return items.filter(function (item) {
                return !item._table || item._table === _this21;
              });
            }
            /** Creates or removes the no data row, depending on whether any data is being shown. */

          }, {
            key: "_updateNoDataRow",
            value: function _updateNoDataRow() {
              if (this._noDataRow) {
                var shouldShow = this._rowOutlet.viewContainer.length === 0;

                if (shouldShow !== this._isShowingNoDataRow) {
                  var container = this._noDataRowOutlet.viewContainer;
                  shouldShow ? container.createEmbeddedView(this._noDataRow.templateRef) : container.clear();
                  this._isShowingNoDataRow = shouldShow;
                }
              }
            }
          }, {
            key: "trackBy",
            get: function get() {
              return this._trackByFn;
            },
            set: function set(fn) {
              if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' && console && console.warn) {
                console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
              }

              this._trackByFn = fn;
            }
            /**
             * The table's source of data, which can be provided in three ways (in order of complexity):
             *   - Simple data array (each object represents one table row)
             *   - Stream that emits a data array each time the array changes
             *   - `DataSource` object that implements the connect/disconnect interface.
             *
             * If a data array is provided, the table must be notified when the array's objects are
             * added, removed, or moved. This can be done by calling the `renderRows()` function which will
             * render the diff since the last table render. If the data array reference is changed, the table
             * will automatically trigger an update to the rows.
             *
             * When providing an Observable stream, the table will trigger an update automatically when the
             * stream emits a new array of data.
             *
             * Finally, when providing a `DataSource` object, the table will use the Observable stream
             * provided by the connect function and trigger updates when that stream emits new data array
             * values. During the table's ngOnDestroy or when the data source is removed from the table, the
             * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
             * subscriptions registered during the connect process).
             */

          }, {
            key: "dataSource",
            get: function get() {
              return this._dataSource;
            },
            set: function set(dataSource) {
              if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
              }
            }
            /**
             * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
             * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
             * dataobject will render the first row that evaluates its when predicate to true, in the order
             * defined in the table, or otherwise the default row which does not have a when predicate.
             */

          }, {
            key: "multiTemplateDataRows",
            get: function get() {
              return this._multiTemplateDataRows;
            },
            set: function set(v) {
              this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
              // this setter will be invoked before the row outlet has been defined hence the null check.

              if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
                this._forceRenderDataRows();

                this.updateStickyColumnStyles();
              }
            }
          }]);

          return CdkTable;
        }();

        CdkTable.ɵfac = function CdkTable_Factory(t) {
          return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_CoalescedStyleScheduler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
        };

        CdkTable.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: CdkTable,
          selectors: [["cdk-table"], ["table", "cdk-table", ""]],
          contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
            }
          },
          viewQuery: function CdkTable_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NoDataRowOutlet, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
            }
          },
          hostAttrs: [1, "cdk-table"],
          inputs: {
            trackBy: "trackBy",
            dataSource: "dataSource",
            multiTemplateDataRows: "multiTemplateDataRows"
          },
          exportAs: ["cdkTable"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
            provide: CDK_TABLE,
            useExisting: CdkTable
          }, _CoalescedStyleScheduler])],
          ngContentSelectors: _c1,
          decls: 6,
          vars: 0,
          consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
          template: function CdkTable_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
            }
          },
          directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
          encapsulation: 2
        });
        return CdkTable;
      }();
      /** Utility function that gets a merged list of the entries in an array and values of a Set. */


      function mergeArrayAndSet(array, set) {
        return array.concat(Array.from(set));
      }

      var CdkTextColumn = /*@__PURE__*/function () {
        var CdkTextColumn = /*#__PURE__*/function () {
          function CdkTextColumn(_table, _options) {
            _classCallCheck(this, CdkTextColumn);

            this._table = _table;
            this._options = _options;
            /** Alignment of the cell values. */

            this.justify = 'start';
            this._options = _options || {};
          }
          /** Column name that should be used to reference this column. */


          _createClass(CdkTextColumn, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this._syncColumnDefName();

              if (this.headerText === undefined) {
                this.headerText = this._createDefaultHeaderText();
              }

              if (!this.dataAccessor) {
                this.dataAccessor = this._options.defaultDataAccessor || function (data, name) {
                  return data[name];
                };
              }

              if (this._table) {
                // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
                // since the columnDef will not pick up its content by the time the table finishes checking
                // its content and initializing the rows.
                this.columnDef.cell = this.cell;
                this.columnDef.headerCell = this.headerCell;

                this._table.addColumnDef(this.columnDef);
              } else {
                throw getTableTextColumnMissingParentTableError();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this._table) {
                this._table.removeColumnDef(this.columnDef);
              }
            }
            /**
             * Creates a default header text. Use the options' header text transformation function if one
             * has been provided. Otherwise simply capitalize the column name.
             */

          }, {
            key: "_createDefaultHeaderText",
            value: function _createDefaultHeaderText() {
              var name = this.name;

              if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
                throw getTableTextColumnMissingNameError();
              }

              if (this._options && this._options.defaultHeaderTextTransform) {
                return this._options.defaultHeaderTextTransform(name);
              }

              return name[0].toUpperCase() + name.slice(1);
            }
            /** Synchronizes the column definition name with the text column name. */

          }, {
            key: "_syncColumnDefName",
            value: function _syncColumnDefName() {
              if (this.columnDef) {
                this.columnDef.name = this.name;
              }
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            },
            set: function set(name) {
              this._name = name; // With Ivy, inputs can be initialized before static query results are
              // available. In that case, we defer the synchronization until "ngOnInit" fires.

              this._syncColumnDefName();
            }
          }]);

          return CdkTextColumn;
        }();

        CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
          return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
        };

        CdkTextColumn.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: CdkTextColumn,
          selectors: [["cdk-text-column"]],
          viewQuery: function CdkTextColumn_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
            }
          },
          inputs: {
            justify: "justify",
            name: "name",
            headerText: "headerText",
            dataAccessor: "dataAccessor"
          },
          decls: 3,
          vars: 0,
          consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
          template: function CdkTextColumn_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
            }
          },
          directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell],
          encapsulation: 2
        });
        return CdkTextColumn;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet];

      var CdkTableModule = /*@__PURE__*/function () {
        var CdkTableModule = function CdkTableModule() {
          _classCallCheck(this, CdkTableModule);
        };

        CdkTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: CdkTableModule
        });
        CdkTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function CdkTableModule_Factory(t) {
            return new (t || CdkTableModule)();
          }
        });
        return CdkTableModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, {
          declarations: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet],
          exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
      \***************************************************************************/

    /*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015PaginatorJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function () {
        return MAT_PAGINATOR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
        return MAT_PAGINATOR_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
        return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
        return MatPaginator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
        return MatPaginatorIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
        return MatPaginatorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
        return PageEvent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
       * include it in a custom provider
       */


      function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pageSizeOption_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pageSizeOption_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
        }
      }

      function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7._changePageSize($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
        }
      }

      function MatPaginator_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.pageSize);
        }
      }

      function MatPaginator_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 5, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
        }
      }

      function MatPaginator_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.firstPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
        }
      }

      function MatPaginator_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.lastPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
        }
      }

      var MatPaginatorIntl = /*@__PURE__*/function () {
        var MatPaginatorIntl = function MatPaginatorIntl() {
          _classCallCheck(this, MatPaginatorIntl);

          /**
           * Stream to emit from when labels are changed. Use this to notify components when the labels have
           * changed after initialization.
           */
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** A label for the page size selector. */

          this.itemsPerPageLabel = 'Items per page:';
          /** A label for the button that increments the current page. */

          this.nextPageLabel = 'Next page';
          /** A label for the button that decrements the current page. */

          this.previousPageLabel = 'Previous page';
          /** A label for the button that moves to the first page. */

          this.firstPageLabel = 'First page';
          /** A label for the button that moves to the last page. */

          this.lastPageLabel = 'Last page';
          /** A label for the range of items within the current page and the length of the whole list. */

          this.getRangeLabel = function (page, pageSize, length) {
            if (length == 0 || pageSize == 0) {
              return "0 of ".concat(length);
            }

            length = Math.max(length, 0);
            var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
          };
        };

        MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
          return new (t || MatPaginatorIntl)();
        };

        MatPaginatorIntl.ɵprov = /*@__PURE__*/Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
          factory: function MatPaginatorIntl_Factory() {
            return new MatPaginatorIntl();
          },
          token: MatPaginatorIntl,
          providedIn: "root"
        });
        return MatPaginatorIntl;
      }();
      /** @docs-private */


      function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatPaginatorIntl();
      }
      /** @docs-private */


      var MAT_PAGINATOR_INTL_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: MatPaginatorIntl,
        deps: [[/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatPaginatorIntl]],
        useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The default page size if there is no page size and there are no provided page size options. */

      var DEFAULT_PAGE_SIZE = 50;
      /**
       * Change event object that is emitted when the user selects a
       * different page size or navigates to another page.
       */

      var PageEvent = function PageEvent() {
        _classCallCheck(this, PageEvent);
      };
      /** Injection token that can be used to provide the default options for the paginator module. */


      var MAT_PAGINATOR_DEFAULT_OPTIONS = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatPaginator.

      /** @docs-private */

      var MatPaginatorBase = function MatPaginatorBase() {
        _classCallCheck(this, MatPaginatorBase);
      };

      var _MatPaginatorBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])( /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinInitialized"])(MatPaginatorBase));

      var MatPaginator = /*@__PURE__*/function () {
        var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
          _inherits(MatPaginator, _MatPaginatorBase2);

          var _super12 = _createSuper(MatPaginator);

          function MatPaginator(_intl, _changeDetectorRef, defaults) {
            var _this22;

            _classCallCheck(this, MatPaginator);

            _this22 = _super12.call(this);
            _this22._intl = _intl;
            _this22._changeDetectorRef = _changeDetectorRef;
            _this22._pageIndex = 0;
            _this22._length = 0;
            _this22._pageSizeOptions = [];
            _this22._hidePageSize = false;
            _this22._showFirstLastButtons = false;
            /** Event emitted when the paginator changes the page size or page index. */

            _this22.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            _this22._intlChanges = _intl.changes.subscribe(function () {
              return _this22._changeDetectorRef.markForCheck();
            });

            if (defaults) {
              var pageSize = defaults.pageSize,
                  pageSizeOptions = defaults.pageSizeOptions,
                  hidePageSize = defaults.hidePageSize,
                  showFirstLastButtons = defaults.showFirstLastButtons;

              if (pageSize != null) {
                _this22._pageSize = pageSize;
              }

              if (pageSizeOptions != null) {
                _this22._pageSizeOptions = pageSizeOptions;
              }

              if (hidePageSize != null) {
                _this22._hidePageSize = hidePageSize;
              }

              if (showFirstLastButtons != null) {
                _this22._showFirstLastButtons = showFirstLastButtons;
              }
            }

            return _this22;
          }
          /** The zero-based page index of the displayed list of items. Defaulted to 0. */


          _createClass(MatPaginator, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this._initialized = true;

              this._updateDisplayedPageSizeOptions();

              this._markInitialized();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._intlChanges.unsubscribe();
            }
            /** Advances to the next page if it exists. */

          }, {
            key: "nextPage",
            value: function nextPage() {
              if (!this.hasNextPage()) {
                return;
              }

              var previousPageIndex = this.pageIndex;
              this.pageIndex++;

              this._emitPageEvent(previousPageIndex);
            }
            /** Move back to the previous page if it exists. */

          }, {
            key: "previousPage",
            value: function previousPage() {
              if (!this.hasPreviousPage()) {
                return;
              }

              var previousPageIndex = this.pageIndex;
              this.pageIndex--;

              this._emitPageEvent(previousPageIndex);
            }
            /** Move to the first page if not already there. */

          }, {
            key: "firstPage",
            value: function firstPage() {
              // hasPreviousPage being false implies at the start
              if (!this.hasPreviousPage()) {
                return;
              }

              var previousPageIndex = this.pageIndex;
              this.pageIndex = 0;

              this._emitPageEvent(previousPageIndex);
            }
            /** Move to the last page if not already there. */

          }, {
            key: "lastPage",
            value: function lastPage() {
              // hasNextPage being false implies at the end
              if (!this.hasNextPage()) {
                return;
              }

              var previousPageIndex = this.pageIndex;
              this.pageIndex = this.getNumberOfPages() - 1;

              this._emitPageEvent(previousPageIndex);
            }
            /** Whether there is a previous page. */

          }, {
            key: "hasPreviousPage",
            value: function hasPreviousPage() {
              return this.pageIndex >= 1 && this.pageSize != 0;
            }
            /** Whether there is a next page. */

          }, {
            key: "hasNextPage",
            value: function hasNextPage() {
              var maxPageIndex = this.getNumberOfPages() - 1;
              return this.pageIndex < maxPageIndex && this.pageSize != 0;
            }
            /** Calculate the number of pages */

          }, {
            key: "getNumberOfPages",
            value: function getNumberOfPages() {
              if (!this.pageSize) {
                return 0;
              }

              return Math.ceil(this.length / this.pageSize);
            }
            /**
             * Changes the page size so that the first item displayed on the page will still be
             * displayed using the new page size.
             *
             * For example, if the page size is 10 and on the second page (items indexed 10-19) then
             * switching so that the page size is 5 will set the third page as the current page so
             * that the 10th item will still be displayed.
             */

          }, {
            key: "_changePageSize",
            value: function _changePageSize(pageSize) {
              // Current page needs to be updated to reflect the new page size. Navigate to the page
              // containing the previous page's first item.
              var startIndex = this.pageIndex * this.pageSize;
              var previousPageIndex = this.pageIndex;
              this.pageIndex = Math.floor(startIndex / pageSize) || 0;
              this.pageSize = pageSize;

              this._emitPageEvent(previousPageIndex);
            }
            /** Checks whether the buttons for going forwards should be disabled. */

          }, {
            key: "_nextButtonsDisabled",
            value: function _nextButtonsDisabled() {
              return this.disabled || !this.hasNextPage();
            }
            /** Checks whether the buttons for going backwards should be disabled. */

          }, {
            key: "_previousButtonsDisabled",
            value: function _previousButtonsDisabled() {
              return this.disabled || !this.hasPreviousPage();
            }
            /**
             * Updates the list of page size options to display to the user. Includes making sure that
             * the page size is an option and that the list is sorted.
             */

          }, {
            key: "_updateDisplayedPageSizeOptions",
            value: function _updateDisplayedPageSizeOptions() {
              if (!this._initialized) {
                return;
              } // If no page size is provided, use the first page size option or the default page size.


              if (!this.pageSize) {
                this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
              }

              this._displayedPageSizeOptions = this.pageSizeOptions.slice();

              if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
                this._displayedPageSizeOptions.push(this.pageSize);
              } // Sort the numbers using a number-specific sort function.


              this._displayedPageSizeOptions.sort(function (a, b) {
                return a - b;
              });

              this._changeDetectorRef.markForCheck();
            }
            /** Emits an event notifying that a change of the paginator's properties has been triggered. */

          }, {
            key: "_emitPageEvent",
            value: function _emitPageEvent(previousPageIndex) {
              this.page.emit({
                previousPageIndex: previousPageIndex,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                length: this.length
              });
            }
          }, {
            key: "pageIndex",
            get: function get() {
              return this._pageIndex;
            },
            set: function set(value) {
              this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

              this._changeDetectorRef.markForCheck();
            }
            /** The length of the total number of items that are being paginated. Defaulted to 0. */

          }, {
            key: "length",
            get: function get() {
              return this._length;
            },
            set: function set(value) {
              this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

              this._changeDetectorRef.markForCheck();
            }
            /** Number of items to display on a page. By default set to 50. */

          }, {
            key: "pageSize",
            get: function get() {
              return this._pageSize;
            },
            set: function set(value) {
              this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

              this._updateDisplayedPageSizeOptions();
            }
            /** The set of provided page size options to display to the user. */

          }, {
            key: "pageSizeOptions",
            get: function get() {
              return this._pageSizeOptions;
            },
            set: function set(value) {
              this._pageSizeOptions = (value || []).map(function (p) {
                return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(p);
              });

              this._updateDisplayedPageSizeOptions();
            }
            /** Whether to hide the page size selection UI from the user. */

          }, {
            key: "hidePageSize",
            get: function get() {
              return this._hidePageSize;
            },
            set: function set(value) {
              this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
            /** Whether to show the first/last buttons UI to the user. */

          }, {
            key: "showFirstLastButtons",
            get: function get() {
              return this._showFirstLastButtons;
            },
            set: function set(value) {
              this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return MatPaginator;
        }(_MatPaginatorBase);

        MatPaginator.ɵfac = function MatPaginator_Factory(t) {
          return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
        };

        MatPaginator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MatPaginator,
          selectors: [["mat-paginator"]],
          hostAttrs: [1, "mat-paginator"],
          inputs: {
            disabled: "disabled",
            pageIndex: "pageIndex",
            length: "length",
            pageSize: "pageSize",
            pageSizeOptions: "pageSizeOptions",
            hidePageSize: "hidePageSize",
            showFirstLastButtons: "showFirstLastButtons",
            color: "color"
          },
          outputs: {
            page: "page"
          },
          exportAs: ["matPaginator"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
          decls: 14,
          vars: 14,
          consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
          template: function MatPaginator_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
                return ctx.previousPage();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
                return ctx.nextPage();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
          styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
          encapsulation: 2,
          changeDetection: 0
        });
        return MatPaginator;
      }();

      var MatPaginatorModule = /*@__PURE__*/function () {
        var MatPaginatorModule = function MatPaginatorModule() {
          _classCallCheck(this, MatPaginatorModule);
        };

        MatPaginatorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: MatPaginatorModule
        });
        MatPaginatorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function MatPaginatorModule_Factory(t) {
            return new (t || MatPaginatorModule)();
          },
          providers: [MAT_PAGINATOR_INTL_PROVIDER],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]]]
        });
        return MatPaginatorModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
          declarations: function declarations() {
            return [MatPaginator];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]];
          },
          exports: function exports() {
            return [MatPaginator];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SortJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSort", function () {
        return MatSort;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
        return MatSortHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
        return MatSortHeaderIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
        return MatSortModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
        return matSortAnimations;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var _c0 = ["mat-sort-header", ""];

      function MatSortHeader_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._disableViewStateAnimation = true;
          })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3._disableViewStateAnimation = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
        }
      }

      var _c1 = ["*"];

      function getSortDuplicateSortableIdError(id) {
        return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
      }
      /** @docs-private */


      function getSortHeaderNotContainedWithinSortError() {
        return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
      }
      /** @docs-private */


      function getSortHeaderMissingIdError() {
        return Error("MatSortHeader must be provided with a unique id.");
      }
      /** @docs-private */


      function getSortInvalidDirectionError(direction) {
        return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatSort.

      /** @docs-private */


      var MatSortBase = function MatSortBase() {
        _classCallCheck(this, MatSortBase);
      };

      var _MatSortMixinBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])( /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));

      var MatSort = /*@__PURE__*/function () {
        var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
          _inherits(MatSort, _MatSortMixinBase2);

          var _super13 = _createSuper(MatSort);

          function MatSort() {
            var _this23;

            _classCallCheck(this, MatSort);

            _this23 = _super13.apply(this, arguments);
            /** Collection of all registered sortables that this directive manages. */

            _this23.sortables = new Map();
            /** Used to notify any child components listening to state changes. */

            _this23._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            /**
             * The direction to set when an MatSortable is initially sorted.
             * May be overriden by the MatSortable's sort start.
             */

            _this23.start = 'asc';
            _this23._direction = '';
            /** Event emitted when the user changes either the active sort or sort direction. */

            _this23.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            return _this23;
          }
          /** The sort direction of the currently active MatSortable. */


          _createClass(MatSort, [{
            key: "register",

            /**
             * Register function to be used by the contained MatSortables. Adds the MatSortable to the
             * collection of MatSortables.
             */
            value: function register(sortable) {
              if (!sortable.id) {
                throw getSortHeaderMissingIdError();
              }

              if (this.sortables.has(sortable.id)) {
                throw getSortDuplicateSortableIdError(sortable.id);
              }

              this.sortables.set(sortable.id, sortable);
            }
            /**
             * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
             * collection of contained MatSortables.
             */

          }, {
            key: "deregister",
            value: function deregister(sortable) {
              this.sortables["delete"](sortable.id);
            }
            /** Sets the active sort id and determines the new sort direction. */

          }, {
            key: "sort",
            value: function sort(sortable) {
              if (this.active != sortable.id) {
                this.active = sortable.id;
                this.direction = sortable.start ? sortable.start : this.start;
              } else {
                this.direction = this.getNextSortDirection(sortable);
              }

              this.sortChange.emit({
                active: this.active,
                direction: this.direction
              });
            }
            /** Returns the next sort direction of the active sortable, checking for potential overrides. */

          }, {
            key: "getNextSortDirection",
            value: function getNextSortDirection(sortable) {
              if (!sortable) {
                return '';
              } // Get the sort direction cycle with the potential sortable overrides.


              var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
              var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

              var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

              if (nextDirectionIndex >= sortDirectionCycle.length) {
                nextDirectionIndex = 0;
              }

              return sortDirectionCycle[nextDirectionIndex];
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this._markInitialized();
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges() {
              this._stateChanges.next();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._stateChanges.complete();
            }
          }, {
            key: "direction",
            get: function get() {
              return this._direction;
            },
            set: function set(direction) {
              if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
                throw getSortInvalidDirectionError(direction);
              }

              this._direction = direction;
            }
            /**
             * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
             * May be overriden by the MatSortable's disable clear input.
             */

          }, {
            key: "disableClear",
            get: function get() {
              return this._disableClear;
            },
            set: function set(v) {
              this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            }
          }]);

          return MatSort;
        }(_MatSortMixinBase);

        MatSort.ɵfac = function MatSort_Factory(t) {
          return ɵMatSort_BaseFactory(t || MatSort);
        };

        MatSort.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatSort,
          selectors: [["", "matSort", ""]],
          hostAttrs: [1, "mat-sort"],
          inputs: {
            disabled: ["matSortDisabled", "disabled"],
            start: ["matSortStart", "start"],
            direction: ["matSortDirection", "direction"],
            disableClear: ["matSortDisableClear", "disableClear"],
            active: ["matSortActive", "active"]
          },
          outputs: {
            sortChange: "matSortChange"
          },
          exportAs: ["matSort"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
        });
        return MatSort;
      }();

      var ɵMatSort_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSort);
      /** Returns the sort direction cycle to use given the provided parameters of order and clear. */


      function getSortDirectionCycle(start, disableClear) {
        var sortOrder = ['asc', 'desc'];

        if (start == 'desc') {
          sortOrder.reverse();
        }

        if (!disableClear) {
          sortOrder.push('');
        }

        return sortOrder;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
      /**
       * Animations used by MatSort.
       * @docs-private
       */

      var matSortAnimations = {
        /** Animation that moves the sort indicator. */
        indicator: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('indicator', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0px)'
        })), // 10px is the height of the sort indicator, minus the width of the pointers

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(10px)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
        leftPointer: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('leftPointer', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(-45deg)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(45deg)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
        rightPointer: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rightPointer', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(45deg)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(-45deg)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that controls the arrow opacity. */
        arrowOpacity: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowOpacity', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-active, asc-to-active, active', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: .54
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        })), // Transition between all states except for immediate transitions

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms')), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation for the translation of the arrow as a whole. States are separated into two
         * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
         * peek, and active. The other states define a specific animation (source-to-destination)
         * and are determined as a function of their prev user-perceived state and what the next state
         * should be.
         */
        arrowPosition: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowPosition', [// Hidden Above => Hint Center

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => desc-to-hint, * => desc-to-active', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        }), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Below

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-desc, * => active-to-desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        }), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        })]))), // Hidden Below => Hint Center

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc-to-hint, * => asc-to-active', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        }), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Above

        /*@__PURE__*/
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-asc, * => active-to-asc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        }), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        })]))), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        })), /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-asc, active-to-asc, asc', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        }))]),

        /** Necessary trigger that calls animate on children animations. */
        allowChildren: /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('allowChildren', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [/*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('@*', /*@__PURE__*/Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animateChild"])(), {
          optional: true
        })])])
      };

      var MatSortHeaderIntl = /*@__PURE__*/function () {
        var MatSortHeaderIntl = function MatSortHeaderIntl() {
          _classCallCheck(this, MatSortHeaderIntl);

          /**
           * Stream that emits whenever the labels here are changed. Use this to notify
           * components if the labels have changed after initialization.
           */
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * ARIA label for the sorting button.
           * @deprecated Not used anymore. To be removed.
           * @breaking-change 8.0.0
           */

          this.sortButtonLabel = function (id) {
            return "Change sorting for ".concat(id);
          };
        };

        MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
          return new (t || MatSortHeaderIntl)();
        };

        MatSortHeaderIntl.ɵprov = /*@__PURE__*/Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
          factory: function MatSortHeaderIntl_Factory() {
            return new MatSortHeaderIntl();
          },
          token: MatSortHeaderIntl,
          providedIn: "root"
        });
        return MatSortHeaderIntl;
      }();
      /** @docs-private */


      function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatSortHeaderIntl();
      }
      /** @docs-private */


      var MAT_SORT_HEADER_INTL_PROVIDER = {
        // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
        provide: MatSortHeaderIntl,
        deps: [[/*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
        useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to the sort header.

      /** @docs-private */

      var MatSortHeaderBase = function MatSortHeaderBase() {
        _classCallCheck(this, MatSortHeaderBase);
      };

      var _MatSortHeaderMixinBase = /*@__PURE__*/Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);

      var MatSortHeader = /*@__PURE__*/function () {
        var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
          _inherits(MatSortHeader, _MatSortHeaderMixinBa);

          var _super14 = _createSuper(MatSortHeader);

          function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef) {
            var _this24;

            _classCallCheck(this, MatSortHeader);

            // Note that we use a string token for the `_columnDef`, because the value is provided both by
            // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
            // and we want to avoid having the sort header depending on the CDK table because
            // of this single reference.
            _this24 = _super14.call(this);
            _this24._intl = _intl;
            _this24._sort = _sort;
            _this24._columnDef = _columnDef;
            _this24._focusMonitor = _focusMonitor;
            _this24._elementRef = _elementRef;
            /**
             * Flag set to true when the indicator should be displayed while the sort is not active. Used to
             * provide an affordance that the header is sortable by showing on focus and hover.
             */

            _this24._showIndicatorHint = false;
            /** The direction the arrow should be facing according to the current state. */

            _this24._arrowDirection = '';
            /**
             * Whether the view state animation should show the transition between the `from` and `to` states.
             */

            _this24._disableViewStateAnimation = false;
            /** Sets the position of the arrow that displays when sorted. */

            _this24.arrowPosition = 'after';

            if (!_sort) {
              throw getSortHeaderNotContainedWithinSortError();
            }

            _this24._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(function () {
              if (_this24._isSorted()) {
                _this24._updateArrowDirection();
              } // If this header was recently active and now no longer sorted, animate away the arrow.


              if (!_this24._isSorted() && _this24._viewState && _this24._viewState.toState === 'active') {
                _this24._disableViewStateAnimation = false;

                _this24._setAnimationTransitionState({
                  fromState: 'active',
                  toState: _this24._arrowDirection
                });
              }

              changeDetectorRef.markForCheck();
            });
            return _this24;
          }
          /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


          _createClass(MatSortHeader, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              if (!this.id && this._columnDef) {
                this.id = this._columnDef.name;
              } // Initialize the direction of the arrow and set the view state to be immediately that state.


              this._updateArrowDirection();

              this._setAnimationTransitionState({
                toState: this._isSorted() ? 'active' : this._arrowDirection
              });

              this._sort.register(this);
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              var _this25 = this;

              // We use the focus monitor because we also want to style
              // things differently based on the focus origin.
              this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
                return _this25._setIndicatorHintVisible(!!origin);
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);

              this._sort.deregister(this);

              this._rerenderSubscription.unsubscribe();
            }
            /**
             * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
             * user showing what the active sort will become. If set to false, the arrow will fade away.
             */

          }, {
            key: "_setIndicatorHintVisible",
            value: function _setIndicatorHintVisible(visible) {
              // No-op if the sort header is disabled - should not make the hint visible.
              if (this._isDisabled() && visible) {
                return;
              }

              this._showIndicatorHint = visible;

              if (!this._isSorted()) {
                this._updateArrowDirection();

                if (this._showIndicatorHint) {
                  this._setAnimationTransitionState({
                    fromState: this._arrowDirection,
                    toState: 'hint'
                  });
                } else {
                  this._setAnimationTransitionState({
                    fromState: 'hint',
                    toState: this._arrowDirection
                  });
                }
              }
            }
            /**
             * Sets the animation transition view state for the arrow's position and opacity. If the
             * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
             * no animation appears.
             */

          }, {
            key: "_setAnimationTransitionState",
            value: function _setAnimationTransitionState(viewState) {
              this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
              // remove the fromState so that it jumps right to the toState.

              if (this._disableViewStateAnimation) {
                this._viewState = {
                  toState: viewState.toState
                };
              }
            }
            /** Triggers the sort on this sort header and removes the indicator hint. */

          }, {
            key: "_toggleOnInteraction",
            value: function _toggleOnInteraction() {
              this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


              if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
                this._disableViewStateAnimation = true;
              } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
              // the direction it is facing.


              var viewState = this._isSorted() ? {
                fromState: this._arrowDirection,
                toState: 'active'
              } : {
                fromState: 'active',
                toState: this._arrowDirection
              };

              this._setAnimationTransitionState(viewState);

              this._showIndicatorHint = false;
            }
          }, {
            key: "_handleClick",
            value: function _handleClick() {
              if (!this._isDisabled()) {
                this._toggleOnInteraction();
              }
            }
          }, {
            key: "_handleKeydown",
            value: function _handleKeydown(event) {
              if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
                event.preventDefault();

                this._toggleOnInteraction();
              }
            }
            /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */

          }, {
            key: "_isSorted",
            value: function _isSorted() {
              return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
            }
            /** Returns the animation state for the arrow direction (indicator and pointers). */

          }, {
            key: "_getArrowDirectionState",
            value: function _getArrowDirectionState() {
              return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
            }
            /** Returns the arrow position state (opacity, translation). */

          }, {
            key: "_getArrowViewState",
            value: function _getArrowViewState() {
              var fromState = this._viewState.fromState;
              return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
            }
            /**
             * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
             * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
             * active sorted direction. The reason this is updated through a function is because the direction
             * should only be changed at specific times - when deactivated but the hint is displayed and when
             * the sort is active and the direction changes. Otherwise the arrow's direction should linger
             * in cases such as the sort becoming deactivated but we want to animate the arrow away while
             * preserving its direction, even though the next sort direction is actually different and should
             * only be changed once the arrow displays again (hint or activation).
             */

          }, {
            key: "_updateArrowDirection",
            value: function _updateArrowDirection() {
              this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
            }
          }, {
            key: "_isDisabled",
            value: function _isDisabled() {
              return this._sort.disabled || this.disabled;
            }
            /**
             * Gets the aria-sort attribute that should be applied to this sort header. If this header
             * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
             * says that the aria-sort property should only be present on one header at a time, so removing
             * ensures this is true.
             */

          }, {
            key: "_getAriaSortAttribute",
            value: function _getAriaSortAttribute() {
              if (!this._isSorted()) {
                return 'none';
              }

              return this._sort.direction == 'asc' ? 'ascending' : 'descending';
            }
            /** Whether the arrow inside the sort header should be rendered. */

          }, {
            key: "_renderArrow",
            value: function _renderArrow() {
              return !this._isDisabled() || this._isSorted();
            }
          }, {
            key: "disableClear",
            get: function get() {
              return this._disableClear;
            },
            set: function set(v) {
              this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            }
          }]);

          return MatSortHeader;
        }(_MatSortHeaderMixinBase);

        MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
          return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
        };

        MatSortHeader.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatSortHeader,
          selectors: [["", "mat-sort-header", ""]],
          hostAttrs: [1, "mat-sort-header"],
          hostVars: 3,
          hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
                return ctx._handleClick();
              })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
                return ctx._handleKeydown($event);
              })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
                return ctx._setIndicatorHintVisible(true);
              })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
                return ctx._setIndicatorHintVisible(false);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
            }
          },
          inputs: {
            disabled: "disabled",
            arrowPosition: "arrowPosition",
            disableClear: "disableClear",
            id: ["mat-sort-header", "id"],
            start: "start"
          },
          exportAs: ["matSortHeader"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
          attrs: _c0,
          ngContentSelectors: _c1,
          decls: 4,
          vars: 6,
          consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
          template: function MatSortHeader_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
          styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
          encapsulation: 2,
          data: {
            animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
          },
          changeDetection: 0
        });
        return MatSortHeader;
      }();

      var MatSortModule = /*@__PURE__*/function () {
        var MatSortModule = function MatSortModule() {
          _classCallCheck(this, MatSortModule);
        };

        MatSortModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: MatSortModule
        });
        MatSortModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function MatSortModule_Factory(t) {
            return new (t || MatSortModule)();
          },
          providers: [MAT_SORT_HEADER_INTL_PROVIDER],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]]]
        });
        return MatSortModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSortModule, {
          declarations: function declarations() {
            return [MatSort, MatSortHeader];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]];
          },
          exports: function exports() {
            return [MatSort, MatSortHeader];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
      \***********************************************************************/

    /*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCell", function () {
        return MatCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCellDef", function () {
        return MatCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () {
        return MatColumnDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () {
        return MatFooterCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () {
        return MatFooterCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () {
        return MatFooterRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () {
        return MatFooterRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () {
        return MatHeaderCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () {
        return MatHeaderCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () {
        return MatHeaderRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () {
        return MatHeaderRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function () {
        return MatNoDataRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRow", function () {
        return MatRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRowDef", function () {
        return MatRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTable", function () {
        return MatTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () {
        return MatTableDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTableModule", function () {
        return MatTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () {
        return MatTextColumn;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/table */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Wrapper for the CdkTable with Material design styles.
       */


      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function MatTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function MatTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }

      var MatTable = /*@__PURE__*/function () {
        var MatTable = /*#__PURE__*/function (_angular_cdk_table__W) {
          _inherits(MatTable, _angular_cdk_table__W);

          var _super15 = _createSuper(MatTable);

          function MatTable() {
            var _this26;

            _classCallCheck(this, MatTable);

            _this26 = _super15.apply(this, arguments);
            /** Overrides the sticky CSS class set by the `CdkTable`. */

            _this26.stickyCssClass = 'mat-table-sticky';
            /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */

            _this26.needsPositionStickyOnElement = false;
            return _this26;
          }

          return MatTable;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"]);

        MatTable.ɵfac = function MatTable_Factory(t) {
          return ɵMatTable_BaseFactory(t || MatTable);
        };

        MatTable.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatTable,
          selectors: [["mat-table"], ["table", "mat-table", ""]],
          hostAttrs: [1, "mat-table"],
          exportAs: ["matTable"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
            useExisting: MatTable
          }, {
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
            useExisting: MatTable
          }, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c1,
          decls: 6,
          vars: 0,
          consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
          template: function MatTable_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
            }
          },
          directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]],
          styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky;position:sticky}\n"],
          encapsulation: 2
        });
        return MatTable;
      }();

      var ɵMatTable_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);

      var MatCellDef = /*@__PURE__*/function () {
        var MatCellDef = /*#__PURE__*/function (_angular_cdk_table__W2) {
          _inherits(MatCellDef, _angular_cdk_table__W2);

          var _super16 = _createSuper(MatCellDef);

          function MatCellDef() {
            _classCallCheck(this, MatCellDef);

            return _super16.apply(this, arguments);
          }

          return MatCellDef;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"]);

        MatCellDef.ɵfac = function MatCellDef_Factory(t) {
          return ɵMatCellDef_BaseFactory(t || MatCellDef);
        };

        MatCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatCellDef,
          selectors: [["", "matCellDef", ""]],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
            useExisting: MatCellDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatCellDef;
      }();

      var ɵMatCellDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);

      var MatHeaderCellDef = /*@__PURE__*/function () {
        var MatHeaderCellDef = /*#__PURE__*/function (_angular_cdk_table__W3) {
          _inherits(MatHeaderCellDef, _angular_cdk_table__W3);

          var _super17 = _createSuper(MatHeaderCellDef);

          function MatHeaderCellDef() {
            _classCallCheck(this, MatHeaderCellDef);

            return _super17.apply(this, arguments);
          }

          return MatHeaderCellDef;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"]);

        MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) {
          return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef);
        };

        MatHeaderCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatHeaderCellDef,
          selectors: [["", "matHeaderCellDef", ""]],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
            useExisting: MatHeaderCellDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatHeaderCellDef;
      }();

      var ɵMatHeaderCellDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);

      var MatFooterCellDef = /*@__PURE__*/function () {
        var MatFooterCellDef = /*#__PURE__*/function (_angular_cdk_table__W4) {
          _inherits(MatFooterCellDef, _angular_cdk_table__W4);

          var _super18 = _createSuper(MatFooterCellDef);

          function MatFooterCellDef() {
            _classCallCheck(this, MatFooterCellDef);

            return _super18.apply(this, arguments);
          }

          return MatFooterCellDef;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"]);

        MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) {
          return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef);
        };

        MatFooterCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatFooterCellDef,
          selectors: [["", "matFooterCellDef", ""]],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
            useExisting: MatFooterCellDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatFooterCellDef;
      }();

      var ɵMatFooterCellDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);

      var MatColumnDef = /*@__PURE__*/function () {
        var MatColumnDef = /*#__PURE__*/function (_angular_cdk_table__W5) {
          _inherits(MatColumnDef, _angular_cdk_table__W5);

          var _super19 = _createSuper(MatColumnDef);

          function MatColumnDef() {
            _classCallCheck(this, MatColumnDef);

            return _super19.apply(this, arguments);
          }

          _createClass(MatColumnDef, [{
            key: "_updateColumnCssClassName",

            /**
             * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
             * In the future, this will only add "mat-column-" and columnCssClassName
             * will change from type string[] to string.
             * @docs-private
             */
            value: function _updateColumnCssClassName() {
              _get(_getPrototypeOf(MatColumnDef.prototype), "_updateColumnCssClassName", this).call(this);

              this._columnCssClassName.push("mat-column-".concat(this.cssClassFriendlyName));
            }
          }]);

          return MatColumnDef;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]);

        MatColumnDef.ɵfac = function MatColumnDef_Factory(t) {
          return ɵMatColumnDef_BaseFactory(t || MatColumnDef);
        };

        MatColumnDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatColumnDef,
          selectors: [["", "matColumnDef", ""]],
          inputs: {
            sticky: "sticky",
            name: ["matColumnDef", "name"]
          },
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
            useExisting: MatColumnDef
          }, {
            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
            useExisting: MatColumnDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatColumnDef;
      }();

      var ɵMatColumnDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);

      var MatHeaderCell = /*@__PURE__*/function () {
        var MatHeaderCell = /*#__PURE__*/function (_angular_cdk_table__W6) {
          _inherits(MatHeaderCell, _angular_cdk_table__W6);

          var _super20 = _createSuper(MatHeaderCell);

          function MatHeaderCell() {
            _classCallCheck(this, MatHeaderCell);

            return _super20.apply(this, arguments);
          }

          return MatHeaderCell;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"]);

        MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) {
          return ɵMatHeaderCell_BaseFactory(t || MatHeaderCell);
        };

        MatHeaderCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatHeaderCell,
          selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
          hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatHeaderCell;
      }();

      var ɵMatHeaderCell_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell);

      var MatFooterCell = /*@__PURE__*/function () {
        var MatFooterCell = /*#__PURE__*/function (_angular_cdk_table__W7) {
          _inherits(MatFooterCell, _angular_cdk_table__W7);

          var _super21 = _createSuper(MatFooterCell);

          function MatFooterCell() {
            _classCallCheck(this, MatFooterCell);

            return _super21.apply(this, arguments);
          }

          return MatFooterCell;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"]);

        MatFooterCell.ɵfac = function MatFooterCell_Factory(t) {
          return ɵMatFooterCell_BaseFactory(t || MatFooterCell);
        };

        MatFooterCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatFooterCell,
          selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
          hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatFooterCell;
      }();

      var ɵMatFooterCell_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell);

      var MatCell = /*@__PURE__*/function () {
        var MatCell = /*#__PURE__*/function (_angular_cdk_table__W8) {
          _inherits(MatCell, _angular_cdk_table__W8);

          var _super22 = _createSuper(MatCell);

          function MatCell() {
            _classCallCheck(this, MatCell);

            return _super22.apply(this, arguments);
          }

          return MatCell;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"]);

        MatCell.ɵfac = function MatCell_Factory(t) {
          return ɵMatCell_BaseFactory(t || MatCell);
        };

        MatCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatCell,
          selectors: [["mat-cell"], ["td", "mat-cell", ""]],
          hostAttrs: ["role", "gridcell", 1, "mat-cell"],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatCell;
      }();

      var ɵMatCell_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell);

      var MatHeaderRowDef = /*@__PURE__*/function () {
        var MatHeaderRowDef = /*#__PURE__*/function (_angular_cdk_table__W9) {
          _inherits(MatHeaderRowDef, _angular_cdk_table__W9);

          var _super23 = _createSuper(MatHeaderRowDef);

          function MatHeaderRowDef() {
            _classCallCheck(this, MatHeaderRowDef);

            return _super23.apply(this, arguments);
          }

          return MatHeaderRowDef;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"]);

        MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) {
          return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef);
        };

        MatHeaderRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatHeaderRowDef,
          selectors: [["", "matHeaderRowDef", ""]],
          inputs: {
            columns: ["matHeaderRowDef", "columns"],
            sticky: ["matHeaderRowDefSticky", "sticky"]
          },
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
            useExisting: MatHeaderRowDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatHeaderRowDef;
      }();

      var ɵMatHeaderRowDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);

      var MatFooterRowDef = /*@__PURE__*/function () {
        var MatFooterRowDef = /*#__PURE__*/function (_angular_cdk_table__W10) {
          _inherits(MatFooterRowDef, _angular_cdk_table__W10);

          var _super24 = _createSuper(MatFooterRowDef);

          function MatFooterRowDef() {
            _classCallCheck(this, MatFooterRowDef);

            return _super24.apply(this, arguments);
          }

          return MatFooterRowDef;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"]);

        MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) {
          return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef);
        };

        MatFooterRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatFooterRowDef,
          selectors: [["", "matFooterRowDef", ""]],
          inputs: {
            columns: ["matFooterRowDef", "columns"],
            sticky: ["matFooterRowDefSticky", "sticky"]
          },
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
            useExisting: MatFooterRowDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatFooterRowDef;
      }();

      var ɵMatFooterRowDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);

      var MatRowDef = /*@__PURE__*/function () {
        var MatRowDef = /*#__PURE__*/function (_angular_cdk_table__W11) {
          _inherits(MatRowDef, _angular_cdk_table__W11);

          var _super25 = _createSuper(MatRowDef);

          function MatRowDef() {
            _classCallCheck(this, MatRowDef);

            return _super25.apply(this, arguments);
          }

          return MatRowDef;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"]);

        MatRowDef.ɵfac = function MatRowDef_Factory(t) {
          return ɵMatRowDef_BaseFactory(t || MatRowDef);
        };

        MatRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatRowDef,
          selectors: [["", "matRowDef", ""]],
          inputs: {
            columns: ["matRowDefColumns", "columns"],
            when: ["matRowDefWhen", "when"]
          },
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
            useExisting: MatRowDef
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatRowDef;
      }();

      var ɵMatRowDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);

      var MatHeaderRow = /*@__PURE__*/function () {
        var MatHeaderRow = /*#__PURE__*/function (_angular_cdk_table__W12) {
          _inherits(MatHeaderRow, _angular_cdk_table__W12);

          var _super26 = _createSuper(MatHeaderRow);

          function MatHeaderRow() {
            _classCallCheck(this, MatHeaderRow);

            return _super26.apply(this, arguments);
          }

          return MatHeaderRow;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"]);

        MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) {
          return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow);
        };

        MatHeaderRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatHeaderRow,
          selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
          hostAttrs: ["role", "row", 1, "mat-header-row"],
          exportAs: ["matHeaderRow"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
            useExisting: MatHeaderRow
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
          decls: 1,
          vars: 0,
          consts: [["cdkCellOutlet", ""]],
          template: function MatHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
          },
          directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
          encapsulation: 2
        });
        return MatHeaderRow;
      }();

      var ɵMatHeaderRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);

      var MatFooterRow = /*@__PURE__*/function () {
        var MatFooterRow = /*#__PURE__*/function (_angular_cdk_table__W13) {
          _inherits(MatFooterRow, _angular_cdk_table__W13);

          var _super27 = _createSuper(MatFooterRow);

          function MatFooterRow() {
            _classCallCheck(this, MatFooterRow);

            return _super27.apply(this, arguments);
          }

          return MatFooterRow;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"]);

        MatFooterRow.ɵfac = function MatFooterRow_Factory(t) {
          return ɵMatFooterRow_BaseFactory(t || MatFooterRow);
        };

        MatFooterRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatFooterRow,
          selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
          hostAttrs: ["role", "row", 1, "mat-footer-row"],
          exportAs: ["matFooterRow"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
            useExisting: MatFooterRow
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
          decls: 1,
          vars: 0,
          consts: [["cdkCellOutlet", ""]],
          template: function MatFooterRow_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
          },
          directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
          encapsulation: 2
        });
        return MatFooterRow;
      }();

      var ɵMatFooterRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);

      var MatRow = /*@__PURE__*/function () {
        var MatRow = /*#__PURE__*/function (_angular_cdk_table__W14) {
          _inherits(MatRow, _angular_cdk_table__W14);

          var _super28 = _createSuper(MatRow);

          function MatRow() {
            _classCallCheck(this, MatRow);

            return _super28.apply(this, arguments);
          }

          return MatRow;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]);

        MatRow.ɵfac = function MatRow_Factory(t) {
          return ɵMatRow_BaseFactory(t || MatRow);
        };

        MatRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatRow,
          selectors: [["mat-row"], ["tr", "mat-row", ""]],
          hostAttrs: ["role", "row", 1, "mat-row"],
          exportAs: ["matRow"],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
            useExisting: MatRow
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
          decls: 1,
          vars: 0,
          consts: [["cdkCellOutlet", ""]],
          template: function MatRow_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
          },
          directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
          encapsulation: 2
        });
        return MatRow;
      }();

      var ɵMatRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);

      var MatNoDataRow = /*@__PURE__*/function () {
        var MatNoDataRow = /*#__PURE__*/function (_angular_cdk_table__W15) {
          _inherits(MatNoDataRow, _angular_cdk_table__W15);

          var _super29 = _createSuper(MatNoDataRow);

          function MatNoDataRow() {
            _classCallCheck(this, MatNoDataRow);

            return _super29.apply(this, arguments);
          }

          return MatNoDataRow;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"]);

        MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) {
          return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow);
        };

        MatNoDataRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: MatNoDataRow,
          selectors: [["ng-template", "matNoDataRow", ""]],
          features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"],
            useExisting: MatNoDataRow
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
        });
        return MatNoDataRow;
      }();

      var ɵMatNoDataRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);

      var MatTextColumn = /*@__PURE__*/function () {
        var MatTextColumn = /*#__PURE__*/function (_angular_cdk_table__W16) {
          _inherits(MatTextColumn, _angular_cdk_table__W16);

          var _super30 = _createSuper(MatTextColumn);

          function MatTextColumn() {
            _classCallCheck(this, MatTextColumn);

            return _super30.apply(this, arguments);
          }

          return MatTextColumn;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"]);

        MatTextColumn.ɵfac = function MatTextColumn_Factory(t) {
          return ɵMatTextColumn_BaseFactory(t || MatTextColumn);
        };

        MatTextColumn.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MatTextColumn,
          selectors: [["mat-text-column"]],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
          decls: 3,
          vars: 0,
          consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
          template: function MatTextColumn_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            }
          },
          directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell],
          encapsulation: 2
        });
        return MatTextColumn;
      }();

      var ɵMatTextColumn_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [// Table
      MatTable, // Template defs
      MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
      MatHeaderCell, MatCell, MatFooterCell, // Row directives
      MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];

      var MatTableModule = /*@__PURE__*/function () {
        var MatTableModule = function MatTableModule() {
          _classCallCheck(this, MatTableModule);
        };

        MatTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: MatTableModule
        });
        MatTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function MatTableModule_Factory(t) {
            return new (t || MatTableModule)();
          },
          imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
        });
        return MatTableModule;
      }();
      /*@__PURE__*/


      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, {
          declarations: function declarations() {
            return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
          },
          imports: function imports() {
            return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
       * flaky browser support and the value not being defined in Closure's typings.
       */


      var MAX_SAFE_INTEGER = 9007199254740991;
      /**
       * Data source that accepts a client-side data array and includes native support of filtering,
       * sorting (using MatSort), and pagination (using MatPaginator).
       *
       * Allows for sort customization by overriding sortingDataAccessor, which defines how data
       * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
       * which defines how row data is converted to a string for filter matching.
       *
       * **Note:** This class is meant to be a simple data source to help you get started. As such
       * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
       * interactions. If your app needs to support more advanced use cases, consider implementing your
       * own `DataSource`.
       */

      var MatTableDataSource = /*#__PURE__*/function (_angular_cdk_table__W17) {
        _inherits(MatTableDataSource, _angular_cdk_table__W17);

        var _super31 = _createSuper(MatTableDataSource);

        function MatTableDataSource() {
          var _this27;

          var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, MatTableDataSource);

          _this27 = _super31.call(this);
          /** Stream emitting render data to the table (depends on ordered data changes). */

          _this27._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          /** Stream that emits when a new filter string is set on the data source. */

          _this27._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          /** Used to react to internal changes of the paginator that are made by the data source itself. */

          _this27._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Subscription to the changes that should trigger an update to the table's rendered rows, such
           * as filtering, sorting, pagination, or base data changes.
           */

          _this27._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Data accessor function that is used for accessing data properties for sorting through
           * the default sortData function.
           * This default function assumes that the sort header IDs (which defaults to the column name)
           * matches the data's properties (e.g. column Xyz represents data['Xyz']).
           * May be set to a custom function for different behavior.
           * @param data Data object that is being accessed.
           * @param sortHeaderId The name of the column that represents the data.
           */

          _this27.sortingDataAccessor = function (data, sortHeaderId) {
            var value = data[sortHeaderId];

            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["_isNumberValue"])(value)) {
              var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
              // leave them as strings. For more info: https://goo.gl/y5vbSg

              return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }

            return value;
          };
          /**
           * Gets a sorted copy of the data array based on the state of the MatSort. Called
           * after changes are made to the filtered data or when sort changes are emitted from MatSort.
           * By default, the function retrieves the active sort and its direction and compares data
           * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
           * of data ordering.
           * @param data The array of data that should be sorted.
           * @param sort The connected MatSort that holds the current sort state.
           */


          _this27.sortData = function (data, sort) {
            var active = sort.active;
            var direction = sort.direction;

            if (!active || direction == '') {
              return data;
            }

            return data.sort(function (a, b) {
              var valueA = _this27.sortingDataAccessor(a, active);

              var valueB = _this27.sortingDataAccessor(b, active); // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
              // one value exists while the other doesn't. In this case, existing value should come last.
              // This avoids inconsistent results when comparing values to undefined/null.
              // If neither value exists, return 0 (equal).


              var comparatorResult = 0;

              if (valueA != null && valueB != null) {
                // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                if (valueA > valueB) {
                  comparatorResult = 1;
                } else if (valueA < valueB) {
                  comparatorResult = -1;
                }
              } else if (valueA != null) {
                comparatorResult = 1;
              } else if (valueB != null) {
                comparatorResult = -1;
              }

              return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
          };
          /**
           * Checks if a data object matches the data source's filter string. By default, each data object
           * is converted to a string of its properties and returns true if the filter has
           * at least one occurrence in that string. By default, the filter string has its whitespace
           * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
           * filter matching.
           * @param data Data object used to check against the filter.
           * @param filter Filter string that has been set on the data source.
           * @returns Whether the filter matches against the data
           */


          _this27.filterPredicate = function (data, filter) {
            // Transform the data into a lowercase string of all property values.
            var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
              // Use an obscure Unicode character to delimit the words in the concatenated string.
              // This avoids matches where the values of two columns combined will match the user's query
              // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
              // that has a very low chance of being typed in by somebody in a text field. This one in
              // particular is "White up-pointing triangle with dot" from
              // https://en.wikipedia.org/wiki/List_of_Unicode_characters
              return currentTerm + data[key] + '◬';
            }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

            var transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
          };

          _this27._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](initialData);

          _this27._updateChangeSubscription();

          return _this27;
        }
        /** Array of data that should be rendered by the table, where each object represents one row. */


        _createClass(MatTableDataSource, [{
          key: "_updateChangeSubscription",

          /**
           * Subscribe to changes that should trigger an update to the table's rendered rows. When the
           * changes occur, process the current state of the filter, sort, and pagination along with
           * the provided base data and send it to the table for rendering.
           */
          value: function _updateChangeSubscription() {
            var _this28 = this;

            // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
            // The events should emit whenever the component emits a change or initializes, or if no
            // component is provided, a stream with just a null event should be provided.
            // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
            // pipeline can progress to the next step. Note that the value from these streams are not used,
            // they purely act as a signal to progress in the pipeline.
            var sortChange = this._sort ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            var pageChange = this._paginator ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

            var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  data = _ref2[0];

              return _this28._filterData(data);
            })); // Watch for filtered data or sort changes to provide an ordered set of data.

            var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 1),
                  data = _ref4[0];

              return _this28._orderData(data);
            })); // Watch for ordered data or page changes to provide a paged set of data.

            var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([orderedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 1),
                  data = _ref6[0];

              return _this28._pageData(data);
            })); // Watched for paged data changes and send the result to the table to render.

            this._renderChangesSubscription.unsubscribe();

            this._renderChangesSubscription = paginatedData.subscribe(function (data) {
              return _this28._renderData.next(data);
            });
          }
          /**
           * Returns a filtered data array where each filter object contains the filter string within
           * the result of the filterTermAccessor function. If no filter is set, returns the data array
           * as provided.
           */

        }, {
          key: "_filterData",
          value: function _filterData(data) {
            var _this29 = this;

            // If there is a filter string, filter out data that does not contain it.
            // Each data object is converted to a string using the function defined by filterTermAccessor.
            // May be overridden for customization.
            this.filteredData = !this.filter ? data : data.filter(function (obj) {
              return _this29.filterPredicate(obj, _this29.filter);
            });

            if (this.paginator) {
              this._updatePaginator(this.filteredData.length);
            }

            return this.filteredData;
          }
          /**
           * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
           * data array as provided. Uses the default data accessor for data lookup, unless a
           * sortDataAccessor function is defined.
           */

        }, {
          key: "_orderData",
          value: function _orderData(data) {
            // If there is no active sort or direction, return the data without trying to sort.
            if (!this.sort) {
              return data;
            }

            return this.sortData(data.slice(), this.sort);
          }
          /**
           * Returns a paged slice of the provided data array according to the provided MatPaginator's page
           * index and length. If there is no paginator provided, returns the data array as provided.
           */

        }, {
          key: "_pageData",
          value: function _pageData(data) {
            if (!this.paginator) {
              return data;
            }

            var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(startIndex, startIndex + this.paginator.pageSize);
          }
          /**
           * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
           * index does not exceed the paginator's last page. Values are changed in a resolved promise to
           * guard against making property changes within a round of change detection.
           */

        }, {
          key: "_updatePaginator",
          value: function _updatePaginator(filteredDataLength) {
            var _this30 = this;

            Promise.resolve().then(function () {
              var paginator = _this30.paginator;

              if (!paginator) {
                return;
              }

              paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

              if (paginator.pageIndex > 0) {
                var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

                if (newPageIndex !== paginator.pageIndex) {
                  paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                  // we need our own stream so we know to should re-render the data.

                  _this30._internalPageChanges.next();
                }
              }
            });
          }
          /**
           * Used by the MatTable. Called when it connects to the data source.
           * @docs-private
           */

        }, {
          key: "connect",
          value: function connect() {
            return this._renderData;
          }
          /**
           * Used by the MatTable. Called when it is destroyed. No-op.
           * @docs-private
           */

        }, {
          key: "disconnect",
          value: function disconnect() {}
        }, {
          key: "data",
          get: function get() {
            return this._data.value;
          },
          set: function set(data) {
            this._data.next(data);
          }
          /**
           * Filter term that should be used to filter out objects from the data array. To override how
           * data objects match to this filter string, provide a custom function for filterPredicate.
           */

        }, {
          key: "filter",
          get: function get() {
            return this._filter.value;
          },
          set: function set(filter) {
            this._filter.next(filter);
          }
          /**
           * Instance of the MatSort directive used by the table to control its sorting. Sort changes
           * emitted by the MatSort will trigger an update to the table's rendered data.
           */

        }, {
          key: "sort",
          get: function get() {
            return this._sort;
          },
          set: function set(sort) {
            this._sort = sort;

            this._updateChangeSubscription();
          }
          /**
           * Instance of the MatPaginator component used by the table to control what page of the data is
           * displayed. Page changes emitted by the MatPaginator will trigger an update to the
           * table's rendered data.
           *
           * Note that the data source uses the paginator's properties to calculate which page of data
           * should be displayed. If the paginator receives its properties as template inputs,
           * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
           * initialized before assigning it to this data source.
           */

        }, {
          key: "paginator",
          get: function get() {
            return this._paginator;
          },
          set: function set(paginator) {
            this._paginator = paginator;

            this._updateChangeSubscription();
          }
        }]);

        return MatTableDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "./node_modules/@iconify/icons-ic/baseline-plus.js":
    /*!*********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/baseline-plus.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcBaselinePlusJs(module, exports) {
      var data = {
        "body": "<path d=\"M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/baseline-refresh.js":
    /*!************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/baseline-refresh.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcBaselineRefreshJs(module, exports) {
      var data = {
        "body": "<path d=\"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-add.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-add.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneAddJs(module, exports) {
      var data = {
        "body": "<path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-delete.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-delete.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneDeleteJs(module, exports) {
      var data = {
        "body": "<path opacity=\".3\" d=\"M8 9h8v10H8z\" fill=\"currentColor\"/><path d=\"M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-edit.js":
    /*!********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-edit.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneEditJs(module, exports) {
      var data = {
        "body": "<path opacity=\".3\" d=\"M5 18.08V19h.92l9.06-9.06l-.92-.92z\" fill=\"currentColor\"/><path d=\"M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-filter-list.js":
    /*!***************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-filter-list.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneFilterListJs(module, exports) {
      var data = {
        "body": "<path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-headset.js":
    /*!***********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-headset.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneHeadsetJs(module, exports) {
      var data = {
        "body": "<path opacity=\".3\" d=\"M17 18h1c.55 0 1-.45 1-1v-3h-2v4zM5 17c0 .55.45 1 1 1h1v-4H5v3z\" fill=\"currentColor\"/><path d=\"M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 3c0 .55-.45 1-1 1h-1v-4h2v3z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-more-horiz.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneMoreHorizJs(module, exports) {
      var data = {
        "body": "<path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-sync.js":
    /*!********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-sync.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneSyncJs(module, exports) {
      var data = {
        "body": "<path d=\"M12.01 4V1l-4 4l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20.01 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.25 7.74A7.93 7.93 0 0 0 4.01 12c0 4.42 3.58 8 8 8v3l4-4l-4-4v3z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js ***!
      \******************************************************************************************/

    /*! exports provided: UntilDestroy, untilDestroyed */

    /***/
    function node_modulesNgneatUntilDestroy__ivy_ngcc__Fesm2015NgneatUntilDestroyJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UntilDestroy", function () {
        return UntilDestroy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "untilDestroyed", function () {
        return untilDestroyed;
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

      var NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵNG_PIPE_DEF"];

      function isPipe(target) {
        return !!target[NG_PIPE_DEF];
      }

      function isFunction(target) {
        return typeof target === 'function';
      }
      /**
       * Applied to instances and stores `Subject` instance when
       * no custom destroy method is provided.
       */


      var DESTROY = Symbol('__destroy');
      /**
       * Applied to definitions and informs that class is decorated
       */

      var DECORATOR_APPLIED = Symbol('__decoratorApplied');
      /**
       * If we use the `untilDestroyed` operator multiple times inside the single
       * instance providing different `destroyMethodName`, then all streams will
       * subscribe to the single subject. If any method is invoked, the subject will
       * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
       * thus we store subjects under different symbols.
       */

      function getSymbol(destroyMethodName) {
        if (typeof destroyMethodName === 'string') {
          return Symbol("__destroy__".concat(destroyMethodName));
        } else {
          return DESTROY;
        }
      }

      function markAsDecorated(type) {
        // Store this property on the prototype if it's an injectable class, component or directive.
        // We will be able to handle class extension this way.
        type.prototype[DECORATOR_APPLIED] = true;
      }

      function ensureClassIsDecorated(instance) {
        if (missingDecorator(instance.constructor)) {
          throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
        }
      }

      function createSubjectOnTheInstance(instance, symbol) {
        if (!instance[symbol]) {
          instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
      }

      function completeSubjectOnTheInstance(instance, symbol) {
        if (instance[symbol]) {
          instance[symbol].next();
          instance[symbol].complete(); // We also have to re-assign this property thus in the future
          // we will be able to create new subject on the same instance.

          instance[symbol] = null;
        }
      }

      function missingDecorator(type) {
        return !(DECORATOR_APPLIED in type.prototype);
      }

      function unsubscribe(property) {
        property && isFunction(property.unsubscribe) && property.unsubscribe();
      }

      function unsubscribeIfPropertyIsArrayLike(property) {
        Array.isArray(property) && property.forEach(unsubscribe);
      }

      function decorateNgOnDestroy(ngOnDestroy, options) {
        return function () {
          var _a; // Invoke the original `ngOnDestroy` if it exists


          ngOnDestroy && ngOnDestroy.call(this); // It's important to use `this` instead of caching instance
          // that may lead to memory leaks

          completeSubjectOnTheInstance(this, getSymbol()); // Check if subscriptions are pushed to some array

          if (options.arrayName) {
            return unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
          } // Loop through the properties and find subscriptions


          if (options.checkProperties) {
            for (var property in this) {
              if ((_a = options.blackList) === null || _a === void 0 ? void 0 : _a.includes(property)) {
                continue;
              }

              unsubscribe(this[property]);
            }
          }
        };
      }

      function decorateProviderDirectiveOrComponent(type, options) {
        type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
      }

      function decoratePipe(type, options) {
        var def = type.ɵpipe;
        def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
      }

      function UntilDestroy() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (type) {
          if (isPipe(type)) {
            decoratePipe(type, options);
          } else {
            decorateProviderDirectiveOrComponent(type, options);
          }

          markAsDecorated(type);
        };
      }

      function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
        var originalDestroy = instance[destroyMethodName];

        if (isFunction(originalDestroy) === false) {
          throw new Error("".concat(instance.constructor.name, " is using untilDestroyed but doesn't implement ").concat(destroyMethodName));
        }

        createSubjectOnTheInstance(instance, symbol);

        instance[destroyMethodName] = function () {
          isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
          completeSubjectOnTheInstance(this, symbol); // We have to re-assign this property back to the original value.
          // If the `untilDestroyed` operator is called for the same instance
          // multiple times, then we will be able to get the original
          // method again and not the patched one.

          instance[destroyMethodName] = originalDestroy;
        };
      }

      function untilDestroyed(instance, destroyMethodName) {
        return function (source) {
          var symbol = getSymbol(destroyMethodName); // If `destroyMethodName` is passed then the developer applies
          // this operator to something non-related to Angular DI system

          if (typeof destroyMethodName === 'string') {
            overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
          } else {
            ensureClassIsDecorated(instance);
            createSubjectOnTheInstance(instance, symbol);
          }

          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(instance[symbol]));
        };
      }
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "./src/@vex/components/page-layout/page-layout-content.directive.ts":
    /*!**************************************************************************!*\
      !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
      \**************************************************************************/

    /*! exports provided: PageLayoutContentDirective */

    /***/
    function srcVexComponentsPageLayoutPageLayoutContentDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function () {
        return PageLayoutContentDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PageLayoutContentDirective = /*@__PURE__*/function () {
        var PageLayoutContentDirective = function PageLayoutContentDirective() {
          _classCallCheck(this, PageLayoutContentDirective);
        };

        PageLayoutContentDirective.ɵfac = function PageLayoutContentDirective_Factory(t) {
          return new (t || PageLayoutContentDirective)();
        };

        PageLayoutContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: PageLayoutContentDirective,
          selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]],
          hostAttrs: [1, "vex-page-layout-content"]
        });
        return PageLayoutContentDirective;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/page-layout/page-layout-header.directive.ts":
    /*!*************************************************************************!*\
      !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
      \*************************************************************************/

    /*! exports provided: PageLayoutHeaderDirective */

    /***/
    function srcVexComponentsPageLayoutPageLayoutHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function () {
        return PageLayoutHeaderDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PageLayoutHeaderDirective = /*@__PURE__*/function () {
        var PageLayoutHeaderDirective = function PageLayoutHeaderDirective() {
          _classCallCheck(this, PageLayoutHeaderDirective);
        };

        PageLayoutHeaderDirective.ɵfac = function PageLayoutHeaderDirective_Factory(t) {
          return new (t || PageLayoutHeaderDirective)();
        };

        PageLayoutHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: PageLayoutHeaderDirective,
          selectors: [["", "vexPageLayoutHeader", ""], ["vex-page-layout-header"]],
          hostAttrs: [1, "vex-page-layout-header"]
        });
        return PageLayoutHeaderDirective;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/page-layout/page-layout.component.ts":
    /*!******************************************************************!*\
      !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
      \******************************************************************/

    /*! exports provided: PageLayoutComponent */

    /***/
    function srcVexComponentsPageLayoutPageLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function () {
        return PageLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _c0 = ["*"];

      var PageLayoutComponent = /*@__PURE__*/function () {
        var PageLayoutComponent = /*#__PURE__*/function () {
          function PageLayoutComponent() {
            _classCallCheck(this, PageLayoutComponent);

            this.mode = 'simple';
          }

          _createClass(PageLayoutComponent, [{
            key: "isCard",
            get: function get() {
              return this.mode === 'card';
            }
          }, {
            key: "isSimple",
            get: function get() {
              return this.mode === 'simple';
            }
          }]);

          return PageLayoutComponent;
        }();

        PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) {
          return new (t || PageLayoutComponent)();
        };

        PageLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PageLayoutComponent,
          selectors: [["vex-page-layout"]],
          hostAttrs: [1, "vex-page-layout"],
          hostVars: 4,
          hostBindings: function PageLayoutComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vex-page-layout-card", ctx.isCard)("vex-page-layout-simple", ctx.isSimple);
            }
          },
          inputs: {
            mode: "mode"
          },
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function PageLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
          },
          styles: [".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7RUFDQSxpREFBQTtBQUNGOztBQUVBOztFQUVFLHlDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrRkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LXNpbXBsZSAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtaGVhZGVyLWhlaWdodCkgLSB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYjpob3ZlciB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn0iXX0= */"],
          encapsulation: 2
        });
        return PageLayoutComponent;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/page-layout/page-layout.module.ts":
    /*!***************************************************************!*\
      !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
      \***************************************************************/

    /*! exports provided: PageLayoutModule */

    /***/
    function srcVexComponentsPageLayoutPageLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function () {
        return PageLayoutModule;
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


      var _page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-layout.component */
      "./src/@vex/components/page-layout/page-layout.component.ts");
      /* harmony import */


      var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./page-layout-header.directive */
      "./src/@vex/components/page-layout/page-layout-header.directive.ts");
      /* harmony import */


      var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page-layout-content.directive */
      "./src/@vex/components/page-layout/page-layout-content.directive.ts");

      var PageLayoutModule = /*@__PURE__*/function () {
        var PageLayoutModule = function PageLayoutModule() {
          _classCallCheck(this, PageLayoutModule);
        };

        PageLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PageLayoutModule
        });
        PageLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PageLayoutModule_Factory(t) {
            return new (t || PageLayoutModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return PageLayoutModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutModule, {
          declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~order-list-list-order-module~product-list-list-bot-module-es5.js.map