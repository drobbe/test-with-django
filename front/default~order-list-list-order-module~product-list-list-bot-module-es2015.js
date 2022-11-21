(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~order-list-list-order-module~product-list-list-bot-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
  \******************************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, _CoalescedStyleScheduler, _Schedule, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function() { return CdkNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function() { return NoDataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CoalescedStyleScheduler", function() { return _CoalescedStyleScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Schedule", function() { return _Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function CdkTextColumn_th_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
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
        const data_r2 = ctx.$implicit;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
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
    return class extends base {
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */
            this._hasStickyChanged = false;
        }
        /** Whether sticky positioning should be applied. */
        get sticky() { return this._sticky; }
        set sticky(v) {
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /** Whether the sticky value has changed since this was last called. */
        hasStickyChanged() {
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
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
const CDK_TABLE = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */
const TEXT_COLUMN_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');
let CdkCellDef = /*@__PURE__*/ (() => {
    class CdkCellDef {
        constructor(/** @docs-private */ template) {
            this.template = template;
        }
    }
    CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
    return CdkCellDef;
})();
let CdkHeaderCellDef = /*@__PURE__*/ (() => {
    class CdkHeaderCellDef {
        constructor(/** @docs-private */ template) {
            this.template = template;
        }
    }
    CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkHeaderCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
    return CdkHeaderCellDef;
})();
let CdkFooterCellDef = /*@__PURE__*/ (() => {
    class CdkFooterCellDef {
        constructor(/** @docs-private */ template) {
            this.template = template;
        }
    }
    CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkFooterCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
    return CdkFooterCellDef;
})();
// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
class CdkColumnDefBase {
}
const _CdkColumnDefBase = /*@__PURE__*/ mixinHasStickyInput(CdkColumnDefBase);
let CdkColumnDef = /*@__PURE__*/ (() => {
    class CdkColumnDef extends _CdkColumnDefBase {
        constructor(_table) {
            super();
            this._table = _table;
            this._stickyEnd = false;
        }
        /** Unique name for this column. */
        get name() {
            return this._name;
        }
        set name(name) {
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
        get stickyEnd() {
            return this._stickyEnd;
        }
        set stickyEnd(v) {
            const prevValue = this._stickyEnd;
            this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
        }
        /**
         * Overridable method that sets the css classes that will be added to every cell in this
         * column.
         * In the future, columnCssClassName will change from type string[] to string and this
         * will set a single string value.
         * @docs-private
         */
        _updateColumnCssClassName() {
            this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
        }
    }
    CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkColumnDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
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
        }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkColumnDef;
})();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
class BaseCdkCell {
    constructor(columnDef, elementRef) {
        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        const classList = elementRef.nativeElement.classList;
        for (const className of columnDef._columnCssClassName) {
            classList.add(className);
        }
    }
}
let CdkHeaderCell = /*@__PURE__*/ (() => {
    class CdkHeaderCell extends BaseCdkCell {
        constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
        }
    }
    CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    CdkHeaderCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkHeaderCell;
})();
let CdkFooterCell = /*@__PURE__*/ (() => {
    class CdkFooterCell extends BaseCdkCell {
        constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
        }
    }
    CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    CdkFooterCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkFooterCell;
})();
let CdkCell = /*@__PURE__*/ (() => {
    class CdkCell extends BaseCdkCell {
        constructor(columnDef, elementRef) {
            super(columnDef, elementRef);
        }
    }
    CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    CdkCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkCell;
})();
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
class _Schedule {
    constructor() {
        this.tasks = [];
        this.endTasks = [];
    }
}
let _CoalescedStyleScheduler = /*@__PURE__*/ (() => {
    class _CoalescedStyleScheduler {
        constructor(_ngZone) {
            this._ngZone = _ngZone;
            this._currentSchedule = null;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /**
         * Schedules the specified task to run at the end of the current VM turn.
         */
        schedule(task) {
            this._createScheduleIfNeeded();
            this._currentSchedule.tasks.push(task);
        }
        /**
         * Schedules the specified task to run after other scheduled tasks at the end of the current
         * VM turn.
         */
        scheduleEnd(task) {
            this._createScheduleIfNeeded();
            this._currentSchedule.endTasks.push(task);
        }
        /** Prevent any further tasks from running. */
        ngOnDestroy() {
            this._destroyed.next();
            this._destroyed.complete();
        }
        _createScheduleIfNeeded() {
            if (this._currentSchedule) {
                return;
            }
            this._currentSchedule = new _Schedule();
            this._getScheduleObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(() => {
                while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
                    const schedule = this._currentSchedule;
                    // Capture new tasks scheduled by the current set of tasks.
                    this._currentSchedule = new _Schedule();
                    for (const task of schedule.tasks) {
                        task();
                    }
                    for (const task of schedule.endTasks) {
                        task();
                    }
                }
                this._currentSchedule = null;
            });
        }
        _getScheduleObservable() {
            // Use onStable when in the context of an ongoing change detection cycle so that we
            // do not accidentally trigger additional cycles.
            return this._ngZone.isStable ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(Promise.resolve(undefined)) :
                this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1));
        }
    }
    _CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) { return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
    _CoalescedStyleScheduler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: _CoalescedStyleScheduler, factory: _CoalescedStyleScheduler.ɵfac });
    return _CoalescedStyleScheduler;
})();
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
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
let BaseRowDef = /*@__PURE__*/ (() => {
    class BaseRowDef {
        constructor(
        /** @docs-private */ template, _differs) {
            this.template = template;
            this._differs = _differs;
        }
        ngOnChanges(changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
                const columns = (changes['columns'] && changes['columns'].currentValue) || [];
                this._columnsDiffer = this._differs.find(columns).create();
                this._columnsDiffer.diff(columns);
            }
        }
        /**
         * Returns the difference between the current columns and the columns from the last diff, or null
         * if there is no difference.
         */
        getColumnsDiff() {
            return this._columnsDiffer.diff(this.columns);
        }
        /** Gets this row def's relevant cell template from the provided column def. */
        extractCellTemplate(column) {
            if (this instanceof CdkHeaderRowDef) {
                return column.headerCell.template;
            }
            if (this instanceof CdkFooterRowDef) {
                return column.footerCell.template;
            }
            else {
                return column.cell.template;
            }
        }
    }
    BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
    BaseRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseRowDef, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
    return BaseRowDef;
})();
// Boilerplate for applying mixins to CdkHeaderRowDef.
/** @docs-private */
class CdkHeaderRowDefBase extends BaseRowDef {
}
const _CdkHeaderRowDefBase = /*@__PURE__*/ mixinHasStickyInput(CdkHeaderRowDefBase);
let CdkHeaderRowDef = /*@__PURE__*/ (() => {
    class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
        constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
        }
        // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.
        ngOnChanges(changes) {
            super.ngOnChanges(changes);
        }
    }
    CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkHeaderRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
    return CdkHeaderRowDef;
})();
// Boilerplate for applying mixins to CdkFooterRowDef.
/** @docs-private */
class CdkFooterRowDefBase extends BaseRowDef {
}
const _CdkFooterRowDefBase = /*@__PURE__*/ mixinHasStickyInput(CdkFooterRowDefBase);
let CdkFooterRowDef = /*@__PURE__*/ (() => {
    class CdkFooterRowDef extends _CdkFooterRowDefBase {
        constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
        }
        // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.
        ngOnChanges(changes) {
            super.ngOnChanges(changes);
        }
    }
    CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkFooterRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
    return CdkFooterRowDef;
})();
let CdkRowDef = /*@__PURE__*/ (() => {
    class CdkRowDef extends BaseRowDef {
        // TODO(andrewseguin): Add an input for providing a switch function to determine
        //   if this template should be used.
        constructor(template, _differs, _table) {
            super(template, _differs);
            this._table = _table;
        }
    }
    CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
    CdkRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
    return CdkRowDef;
})();
let CdkCellOutlet = /*@__PURE__*/ (() => {
    class CdkCellOutlet {
        constructor(_viewContainer) {
            this._viewContainer = _viewContainer;
            CdkCellOutlet.mostRecentCellOutlet = this;
        }
        ngOnDestroy() {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (CdkCellOutlet.mostRecentCellOutlet === this) {
                CdkCellOutlet.mostRecentCellOutlet = null;
            }
        }
    }
    CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
    CdkCellOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    CdkCellOutlet.mostRecentCellOutlet = null;
    return CdkCellOutlet;
})();
let CdkHeaderRow = /*@__PURE__*/ (() => {
    class CdkHeaderRow {
    }
    CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
    CdkHeaderRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [CdkCellOutlet], encapsulation: 2 });
    return CdkHeaderRow;
})();
let CdkFooterRow = /*@__PURE__*/ (() => {
    class CdkFooterRow {
    }
    CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
    CdkFooterRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [CdkCellOutlet], encapsulation: 2 });
    return CdkFooterRow;
})();
let CdkRow = /*@__PURE__*/ (() => {
    class CdkRow {
    }
    CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
    CdkRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [CdkCellOutlet], encapsulation: 2 });
    return CdkRow;
})();
let CdkNoDataRow = /*@__PURE__*/ (() => {
    class CdkNoDataRow {
        constructor(templateRef) {
            this.templateRef = templateRef;
        }
    }
    CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) { return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
    CdkNoDataRow.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkNoDataRow, selectors: [["ng-template", "cdkNoDataRow", ""]] });
    return CdkNoDataRow;
})();
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
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */
class StickyStyler {
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
    constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true) {
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
    clearStickyPositioning(rows, stickyDirections) {
        const elementsToClear = [];
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            elementsToClear.push(row);
            for (let i = 0; i < row.children.length; i++) {
                elementsToClear.push(row.children[i]);
            }
        }
        // Coalesce with sticky row/column updates (and potentially other changes like column resize).
        this._coalescedStyleScheduler.schedule(() => {
            for (const element of elementsToClear) {
                this._removeStickyStyle(element, stickyDirections);
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
    updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
        if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) ||
            stickyEndStates.some(state => state))) {
            return;
        }
        const firstRow = rows[0];
        const numCells = firstRow.children.length;
        const cellWidths = this._getCellWidths(firstRow);
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        // Coalesce with sticky row updates (and potentially other changes like column resize).
        this._coalescedStyleScheduler.schedule(() => {
            const isRtl = this.direction === 'rtl';
            const start = isRtl ? 'right' : 'left';
            const end = isRtl ? 'left' : 'right';
            for (const row of rows) {
                for (let i = 0; i < numCells; i++) {
                    const cell = row.children[i];
                    if (stickyStartStates[i]) {
                        this._addStickyStyle(cell, start, startPositions[i]);
                    }
                    if (stickyEndStates[i]) {
                        this._addStickyStyle(cell, end, endPositions[i]);
                    }
                }
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
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
        // sticky states need to be reversed as well.
        const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
        const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
        // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
        const stickyHeights = [];
        const elementsToStick = [];
        for (let rowIndex = 0, stickyHeight = 0; rowIndex < rows.length; rowIndex++) {
            stickyHeights[rowIndex] = stickyHeight;
            if (!states[rowIndex]) {
                continue;
            }
            const row = rows[rowIndex];
            elementsToStick[rowIndex] = this._isNativeHtmlTable ?
                Array.from(row.children) : [row];
            if (rowIndex !== rows.length - 1) {
                stickyHeight += row.getBoundingClientRect().height;
            }
        }
        // Coalesce with other sticky row updates (top/bottom), sticky columns updates
        // (and potentially other changes like column resize).
        this._coalescedStyleScheduler.schedule(() => {
            for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                if (!states[rowIndex]) {
                    continue;
                }
                const height = stickyHeights[rowIndex];
                for (const element of elementsToStick[rowIndex]) {
                    this._addStickyStyle(element, position, height);
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
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        const tfoot = tableElement.querySelector('tfoot');
        // Coalesce with other sticky updates (and potentially other changes like column resize).
        this._coalescedStyleScheduler.schedule(() => {
            if (stickyStates.some(state => !state)) {
                this._removeStickyStyle(tfoot, ['bottom']);
            }
            else {
                this._addStickyStyle(tfoot, 'bottom', 0);
            }
        });
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
        }
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        // Short-circuit checking element.style[dir] for stickyDirections as they
        // were already removed above.
        const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
        if (hasDirection) {
            element.style.zIndex = this._getCalculatedZIndex(element);
        }
        else {
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
    _addStickyStyle(element, dir, dirValue) {
        element.classList.add(this._stickCellCss);
        element.style[dir] = `${dirValue}px`;
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
    _getCalculatedZIndex(element) {
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of STICKY_DIRECTIONS) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /** Gets the widths for each cell in the provided row. */
    _getCellWidths(row) {
        const cellWidths = [];
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            let cell = firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
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
    _getStickyEndColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
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
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}
let DataRowOutlet = /*@__PURE__*/ (() => {
    class DataRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    DataRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
    return DataRowOutlet;
})();
let HeaderRowOutlet = /*@__PURE__*/ (() => {
    class HeaderRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    HeaderRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
    return HeaderRowOutlet;
})();
let FooterRowOutlet = /*@__PURE__*/ (() => {
    class FooterRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    FooterRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
    return FooterRowOutlet;
})();
let NoDataRowOutlet = /*@__PURE__*/ (() => {
    class NoDataRowOutlet {
        constructor(viewContainer, elementRef) {
            this.viewContainer = viewContainer;
            this.elementRef = elementRef;
        }
    }
    NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) { return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
    NoDataRowOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NoDataRowOutlet, selectors: [["", "noDataRowOutlet", ""]] });
    return NoDataRowOutlet;
})();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"] {
}
let CdkTable = /*@__PURE__*/ (() => {
    class CdkTable {
        constructor(_differs, _changeDetectorRef, _coalescedStyleScheduler, _elementRef, role, _dir, _document, _platform) {
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
            this._multiTemplateDataRows = false;
            // TODO(andrewseguin): Remove max value as the end index
            //   and instead calculate the view on init and scroll.
            /**
             * Stream containing the latest information on what rows are being displayed on screen.
             * Can be used by the data source to as a heuristic of what data should be provided.
             *
             * @docs-private
             */
            this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
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
        get trackBy() {
            return this._trackByFn;
        }
        set trackBy(fn) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' && console &&
                console.warn) {
                console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
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
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(dataSource) {
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
        get multiTemplateDataRows() {
            return this._multiTemplateDataRows;
        }
        set multiTemplateDataRows(v) {
            this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.
            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
                this._forceRenderDataRows();
                this.updateStickyColumnStyles();
            }
        }
        ngOnInit() {
            this._setupStickyStyler();
            if (this._isNativeHtmlTable) {
                this._applyNativeTableSections();
            }
            // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.
            this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
                return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
            });
        }
        ngAfterContentChecked() {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();
            this._cacheColumnDefs();
            // Make sure that the user has at least added header, footer, or data row def.
            if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
                throw getTableMissingRowDefsError();
            }
            // Render updates if the list of columns have been changed for the header, row, or footer defs.
            const columnsChanged = this._renderUpdatedColumns();
            const stickyColumnStyleUpdateNeeded = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
            // If the header row definition has been changed, trigger a render to the header row.
            if (this._headerRowDefChanged) {
                this._forceRenderHeaderRows();
                this._headerRowDefChanged = false;
            }
            // If the footer row definition has been changed, trigger a render to the footer row.
            if (this._footerRowDefChanged) {
                this._forceRenderFooterRows();
                this._footerRowDefChanged = false;
            }
            // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.
            if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
                this._observeRenderChanges();
            }
            else if (stickyColumnStyleUpdateNeeded) {
                // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
                // called when it row data arrives. Otherwise, we need to call it proactively.
                this.updateStickyColumnStyles();
            }
            this._checkStickyStates();
        }
        ngOnDestroy() {
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
        renderRows() {
            this._renderRows = this._getAllRenderRows();
            const changes = this._dataDiffer.diff(this._renderRows);
            if (!changes) {
                this._updateNoDataRow();
                return;
            }
            const viewContainer = this._rowOutlet.viewContainer;
            changes.forEachOperation((record, prevIndex, currentIndex) => {
                if (record.previousIndex == null) {
                    this._insertRow(record.item, currentIndex);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(prevIndex);
                }
                else {
                    const view = viewContainer.get(prevIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
            // Update the meta context of a row's context data (index, count, first, last, ...)
            this._updateRowIndexContext();
            // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.
            changes.forEachIdentityChange((record) => {
                const rowView = viewContainer.get(record.currentIndex);
                rowView.context.$implicit = record.item.data;
            });
            this._updateNoDataRow();
            this.updateStickyColumnStyles();
        }
        /** Adds a column definition that was not included as part of the content children. */
        addColumnDef(columnDef) {
            this._customColumnDefs.add(columnDef);
        }
        /** Removes a column definition that was not included as part of the content children. */
        removeColumnDef(columnDef) {
            this._customColumnDefs.delete(columnDef);
        }
        /** Adds a row definition that was not included as part of the content children. */
        addRowDef(rowDef) {
            this._customRowDefs.add(rowDef);
        }
        /** Removes a row definition that was not included as part of the content children. */
        removeRowDef(rowDef) {
            this._customRowDefs.delete(rowDef);
        }
        /** Adds a header row definition that was not included as part of the content children. */
        addHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);
            this._headerRowDefChanged = true;
        }
        /** Removes a header row definition that was not included as part of the content children. */
        removeHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.delete(headerRowDef);
            this._headerRowDefChanged = true;
        }
        /** Adds a footer row definition that was not included as part of the content children. */
        addFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);
            this._footerRowDefChanged = true;
        }
        /** Removes a footer row definition that was not included as part of the content children. */
        removeFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.delete(footerRowDef);
            this._footerRowDefChanged = true;
        }
        /**
         * Updates the header sticky styles. First resets all applied styles with respect to the cells
         * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
         * automatically called when the header row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         */
        updateStickyHeaderRowStyles() {
            const headerRows = this._getRenderedRows(this._headerRowOutlet);
            const tableElement = this._elementRef.nativeElement;
            // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            const thead = tableElement.querySelector('thead');
            if (thead) {
                thead.style.display = headerRows.length ? '' : 'none';
            }
            const stickyStates = this._headerRowDefs.map(def => def.sticky);
            this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
            this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
            // Reset the dirty state of the sticky input change since it has been used.
            this._headerRowDefs.forEach(def => def.resetStickyChanged());
        }
        /**
         * Updates the footer sticky styles. First resets all applied styles with respect to the cells
         * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
         * automatically called when the footer row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         */
        updateStickyFooterRowStyles() {
            const footerRows = this._getRenderedRows(this._footerRowOutlet);
            const tableElement = this._elementRef.nativeElement;
            // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.
            const tfoot = tableElement.querySelector('tfoot');
            if (tfoot) {
                tfoot.style.display = footerRows.length ? '' : 'none';
            }
            const stickyStates = this._footerRowDefs.map(def => def.sticky);
            this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
            this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
            this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
            // Reset the dirty state of the sticky input change since it has been used.
            this._footerRowDefs.forEach(def => def.resetStickyChanged());
        }
        /**
         * Updates the column sticky styles. First resets all applied styles with respect to the cells
         * sticking to the left and right. Then sticky styles are added for the left and right according
         * to the column definitions for each cell in each row. This is automatically called when
         * the data source provides a new set of data or when a column definition changes its sticky
         * input. May be called manually for cases where the cell content changes outside of these events.
         */
        updateStickyColumnStyles() {
            const headerRows = this._getRenderedRows(this._headerRowOutlet);
            const dataRows = this._getRenderedRows(this._rowOutlet);
            const footerRows = this._getRenderedRows(this._footerRowOutlet);
            // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)
            this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
            // Update the sticky styles for each header row depending on the def's sticky state
            headerRows.forEach((headerRow, i) => {
                this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
            });
            // Update the sticky styles for each data row depending on its def's sticky state
            this._rowDefs.forEach(rowDef => {
                // Collect all the rows rendered with this row definition.
                const rows = [];
                for (let i = 0; i < dataRows.length; i++) {
                    if (this._renderRows[i].rowDef === rowDef) {
                        rows.push(dataRows[i]);
                    }
                }
                this._addStickyColumnStyles(rows, rowDef);
            });
            // Update the sticky styles for each footer row depending on the def's sticky state
            footerRows.forEach((footerRow, i) => {
                this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
            });
            // Reset the dirty state of the sticky input change since it has been used.
            Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
        }
        /**
         * Get the list of RenderRow objects to render according to the current list of data and defined
         * row definitions. If the previous list already contained a particular pair, it should be reused
         * so that the differ equates their references.
         */
        _getAllRenderRows() {
            const renderRows = [];
            // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.
            const prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map();
            // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
            for (let i = 0; i < this._data.length; i++) {
                let data = this._data[i];
                const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
                if (!this._cachedRenderRowsMap.has(data)) {
                    this._cachedRenderRowsMap.set(data, new WeakMap());
                }
                for (let j = 0; j < renderRowsForData.length; j++) {
                    let renderRow = renderRowsForData[j];
                    const cache = this._cachedRenderRowsMap.get(renderRow.data);
                    if (cache.has(renderRow.rowDef)) {
                        cache.get(renderRow.rowDef).push(renderRow);
                    }
                    else {
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
        _getRenderRowsForData(data, dataIndex, cache) {
            const rowDefs = this._getRowDefs(data, dataIndex);
            return rowDefs.map(rowDef => {
                const cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
                if (cachedRenderRows.length) {
                    const dataRow = cachedRenderRows.shift();
                    dataRow.dataIndex = dataIndex;
                    return dataRow;
                }
                else {
                    return { data, rowDef, dataIndex };
                }
            });
        }
        /** Update the map containing the content's column definitions. */
        _cacheColumnDefs() {
            this._columnDefsByName.clear();
            const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
            columnDefs.forEach(columnDef => {
                if (this._columnDefsByName.has(columnDef.name)) {
                    throw getTableDuplicateColumnNameError(columnDef.name);
                }
                this._columnDefsByName.set(columnDef.name, columnDef);
            });
        }
        /** Update the list of all available row definitions that can be used. */
        _cacheRowDefs() {
            this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
            this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
            this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
            // After all row definitions are determined, find the row definition to be considered default.
            const defaultRowDefs = this._rowDefs.filter(def => !def.when);
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
        _renderUpdatedColumns() {
            const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
            // Force re-render data rows if the list of column definitions have changed.
            const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
            if (dataColumnsChanged) {
                this._forceRenderDataRows();
            }
            // Force re-render header/footer rows if the list of column definitions have changed.
            const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
            if (headerColumnsChanged) {
                this._forceRenderHeaderRows();
            }
            const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
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
        _switchDataSource(dataSource) {
            this._data = [];
            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                this.dataSource.disconnect(this);
            }
            // Stop listening for data from the previous data source.
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
        _observeRenderChanges() {
            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
                return;
            }
            let dataStream;
            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
                dataStream = this.dataSource.connect(this);
            }
            else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
                dataStream = this.dataSource;
            }
            else if (Array.isArray(this.dataSource)) {
                dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
            }
            if (dataStream === undefined) {
                throw getTableUnknownDataSourceError();
            }
            this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(data => {
                this._data = data || [];
                this.renderRows();
            });
        }
        /**
         * Clears any existing content in the header row outlet and creates a new embedded view
         * in the outlet using the header row definition.
         */
        _forceRenderHeaderRows() {
            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
                this._headerRowOutlet.viewContainer.clear();
            }
            this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
            this.updateStickyHeaderRowStyles();
        }
        /**
         * Clears any existing content in the footer row outlet and creates a new embedded view
         * in the outlet using the footer row definition.
         */
        _forceRenderFooterRows() {
            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
                this._footerRowOutlet.viewContainer.clear();
            }
            this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
            this.updateStickyFooterRowStyles();
        }
        /** Adds the sticky column styles for the rows according to the columns' stick states. */
        _addStickyColumnStyles(rows, rowDef) {
            const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
                const columnDef = this._columnDefsByName.get(columnName);
                if (!columnDef) {
                    throw getTableUnknownColumnError(columnName);
                }
                return columnDef;
            });
            const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
            const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
            this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
        }
        /** Gets the list of rows that have been rendered in the row outlet. */
        _getRenderedRows(rowOutlet) {
            const renderedRows = [];
            for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
                const viewRef = rowOutlet.viewContainer.get(i);
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
        _getRowDefs(data, dataIndex) {
            if (this._rowDefs.length == 1) {
                return [this._rowDefs[0]];
            }
            let rowDefs = [];
            if (this.multiTemplateDataRows) {
                rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
            }
            else {
                let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
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
        _insertRow(renderRow, renderIndex) {
            const rowDef = renderRow.rowDef;
            const context = { $implicit: renderRow.data };
            this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
        }
        /**
         * Creates a new row template in the outlet and fills it with the set of cell templates.
         * Optionally takes a context to provide to the row and cells, as well as an optional index
         * of where to place the new row template in the outlet.
         */
        _renderRow(outlet, rowDef, index, context = {}) {
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
            for (let cellTemplate of this._getCellTemplates(rowDef)) {
                if (CdkCellOutlet.mostRecentCellOutlet) {
                    CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                }
            }
            this._changeDetectorRef.markForCheck();
        }
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         */
        _updateRowIndexContext() {
            const viewContainer = this._rowOutlet.viewContainer;
            for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                const viewRef = viewContainer.get(renderIndex);
                const context = viewRef.context;
                context.count = count;
                context.first = renderIndex === 0;
                context.last = renderIndex === count - 1;
                context.even = renderIndex % 2 === 0;
                context.odd = !context.even;
                if (this.multiTemplateDataRows) {
                    context.dataIndex = this._renderRows[renderIndex].dataIndex;
                    context.renderIndex = renderIndex;
                }
                else {
                    context.index = this._renderRows[renderIndex].dataIndex;
                }
            }
        }
        /** Gets the column definitions for the provided row def. */
        _getCellTemplates(rowDef) {
            if (!rowDef || !rowDef.columns) {
                return [];
            }
            return Array.from(rowDef.columns, columnId => {
                const column = this._columnDefsByName.get(columnId);
                if (!column) {
                    throw getTableUnknownColumnError(columnId);
                }
                return rowDef.extractCellTemplate(column);
            });
        }
        /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
        _applyNativeTableSections() {
            const documentFragment = this._document.createDocumentFragment();
            const sections = [
                { tag: 'thead', outlets: [this._headerRowOutlet] },
                { tag: 'tbody', outlets: [this._rowOutlet, this._noDataRowOutlet] },
                { tag: 'tfoot', outlets: [this._footerRowOutlet] },
            ];
            for (const section of sections) {
                const element = this._document.createElement(section.tag);
                element.setAttribute('role', 'rowgroup');
                for (const outlet of section.outlets) {
                    element.appendChild(outlet.elementRef.nativeElement);
                }
                documentFragment.appendChild(element);
            }
            // Use a DocumentFragment so we don't hit the DOM on each iteration.
            this._elementRef.nativeElement.appendChild(documentFragment);
        }
        /**
         * Forces a re-render of the data rows. Should be called in cases where there has been an input
         * change that affects the evaluation of which rows should be rendered, e.g. toggling
         * `multiTemplateDataRows` or adding/removing row definitions.
         */
        _forceRenderDataRows() {
            this._dataDiffer.diff([]);
            this._rowOutlet.viewContainer.clear();
            this.renderRows();
        }
        /**
         * Checks if there has been a change in sticky states since last check and applies the correct
         * sticky styles. Since checking resets the "dirty" state, this should only be performed once
         * during a change detection and after the inputs are settled (after content check).
         */
        _checkStickyStates() {
            const stickyCheckReducer = (acc, d) => {
                return acc || d.hasStickyChanged();
            };
            // Note that the check needs to occur for every definition since it notifies the definition
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
        _setupStickyStyler() {
            const direction = this._dir ? this._dir.value : 'ltr';
            this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement);
            (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
                .subscribe(value => {
                this._stickyStyler.direction = value;
                this.updateStickyColumnStyles();
            });
        }
        /** Filters definitions that belong to this table from a QueryList. */
        _getOwnDefs(items) {
            return items.filter(item => !item._table || item._table === this);
        }
        /** Creates or removes the no data row, depending on whether any data is being shown. */
        _updateNoDataRow() {
            if (this._noDataRow) {
                const shouldShow = this._rowOutlet.viewContainer.length === 0;
                if (shouldShow !== this._isShowingNoDataRow) {
                    const container = this._noDataRowOutlet.viewContainer;
                    shouldShow ? container.createEmbeddedView(this._noDataRow.templateRef) : container.clear();
                    this._isShowingNoDataRow = shouldShow;
                }
            }
        }
    }
    CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_CoalescedStyleScheduler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); };
    CdkTable.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
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
        }, viewQuery: function CdkTable_Query(rf, ctx) {
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
        }, hostAttrs: [1, "cdk-table"], inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, exportAs: ["cdkTable"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
                { provide: CDK_TABLE, useExisting: CdkTable },
                _CoalescedStyleScheduler,
            ])], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
            }
        }, directives: [HeaderRowOutlet,
            DataRowOutlet,
            NoDataRowOutlet,
            FooterRowOutlet], encapsulation: 2 });
    return CdkTable;
})();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}
let CdkTextColumn = /*@__PURE__*/ (() => {
    class CdkTextColumn {
        constructor(_table, _options) {
            this._table = _table;
            this._options = _options;
            /** Alignment of the cell values. */
            this.justify = 'start';
            this._options = _options || {};
        }
        /** Column name that should be used to reference this column. */
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
            // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.
            this._syncColumnDefName();
        }
        ngOnInit() {
            this._syncColumnDefName();
            if (this.headerText === undefined) {
                this.headerText = this._createDefaultHeaderText();
            }
            if (!this.dataAccessor) {
                this.dataAccessor =
                    this._options.defaultDataAccessor || ((data, name) => data[name]);
            }
            if (this._table) {
                // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
                // since the columnDef will not pick up its content by the time the table finishes checking
                // its content and initializing the rows.
                this.columnDef.cell = this.cell;
                this.columnDef.headerCell = this.headerCell;
                this._table.addColumnDef(this.columnDef);
            }
            else {
                throw getTableTextColumnMissingParentTableError();
            }
        }
        ngOnDestroy() {
            if (this._table) {
                this._table.removeColumnDef(this.columnDef);
            }
        }
        /**
         * Creates a default header text. Use the options' header text transformation function if one
         * has been provided. Otherwise simply capitalize the column name.
         */
        _createDefaultHeaderText() {
            const name = this.name;
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
                throw getTableTextColumnMissingNameError();
            }
            if (this._options && this._options.defaultHeaderTextTransform) {
                return this._options.defaultHeaderTextTransform(name);
            }
            return name[0].toUpperCase() + name.slice(1);
        }
        /** Synchronizes the column definition name with the text column name. */
        _syncColumnDefName() {
            if (this.columnDef) {
                this.columnDef.name = this.name;
            }
        }
    }
    CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8)); };
    CdkTextColumn.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) {
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
        }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
            }
        }, directives: [CdkColumnDef,
            CdkHeaderCellDef,
            CdkCellDef,
            CdkHeaderCell,
            CdkCell], encapsulation: 2 });
    return CdkTextColumn;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
    CdkNoDataRow,
    NoDataRowOutlet,
];
let CdkTableModule = /*@__PURE__*/ (() => {
    class CdkTableModule {
    }
    CdkTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTableModule });
    CdkTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); } });
    return CdkTableModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, { declarations: [CdkTable,
            CdkRowDef,
            CdkCellDef,
            CdkCellOutlet,
            CdkHeaderCellDef,
            CdkFooterCellDef,
            CdkColumnDef,
            CdkCell,
            CdkRow,
            CdkHeaderCell,
            CdkFooterCell,
            CdkHeaderRow,
            CdkHeaderRowDef,
            CdkFooterRow,
            CdkFooterRowDef,
            DataRowOutlet,
            HeaderRowOutlet,
            FooterRowOutlet,
            CdkTextColumn,
            CdkNoDataRow,
            NoDataRowOutlet], exports: [CdkTable,
            CdkRowDef,
            CdkCellDef,
            CdkCellOutlet,
            CdkHeaderCellDef,
            CdkFooterCellDef,
            CdkColumnDef,
            CdkCell,
            CdkRow,
            CdkHeaderCell,
            CdkFooterCell,
            CdkHeaderRow,
            CdkHeaderRowDef,
            CdkFooterRow,
            CdkFooterRowDef,
            DataRowOutlet,
            HeaderRowOutlet,
            FooterRowOutlet,
            CdkTextColumn,
            CdkNoDataRow,
            NoDataRowOutlet] });
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






/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
  \***************************************************************************/
/*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function() { return MAT_PAGINATOR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return MAT_PAGINATOR_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return MatPaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return MatPaginatorIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return MatPaginatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return PageEvent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");








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
        const pageSizeOption_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pageSizeOption_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
    }
}
function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7._changePageSize($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
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
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
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
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.firstPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
    }
}
function MatPaginator_button_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.lastPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
    }
}
let MatPaginatorIntl = /*@__PURE__*/ (() => {
    class MatPaginatorIntl {
        constructor() {
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
            this.getRangeLabel = (page, pageSize, length) => {
                if (length == 0 || pageSize == 0) {
                    return `0 of ${length}`;
                }
                length = Math.max(length, 0);
                const startIndex = page * pageSize;
                // If the start index exceeds the list length, do not try and fix the end index to the end.
                const endIndex = startIndex < length ?
                    Math.min(startIndex + pageSize, length) :
                    startIndex + pageSize;
                return `${startIndex + 1} – ${endIndex} of ${length}`;
            };
        }
    }
    MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) { return new (t || MatPaginatorIntl)(); };
    MatPaginatorIntl.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MatPaginatorIntl_Factory() { return new MatPaginatorIntl(); }, token: MatPaginatorIntl, providedIn: "root" });
    return MatPaginatorIntl;
})();
/** @docs-private */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */
const MAT_PAGINATOR_INTL_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatPaginatorIntl,
    deps: [[/*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatPaginatorIntl]],
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
const DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
class PageEvent {
}
/** Injection token that can be used to provide the default options for the paginator module. */
const MAT_PAGINATOR_DEFAULT_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS');
// Boilerplate for applying mixins to MatPaginator.
/** @docs-private */
class MatPaginatorBase {
}
const _MatPaginatorBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(/*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinInitialized"])(MatPaginatorBase));
let MatPaginator = /*@__PURE__*/ (() => {
    class MatPaginator extends _MatPaginatorBase {
        constructor(_intl, _changeDetectorRef, defaults) {
            super();
            this._intl = _intl;
            this._changeDetectorRef = _changeDetectorRef;
            this._pageIndex = 0;
            this._length = 0;
            this._pageSizeOptions = [];
            this._hidePageSize = false;
            this._showFirstLastButtons = false;
            /** Event emitted when the paginator changes the page size or page index. */
            this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
            if (defaults) {
                const { pageSize, pageSizeOptions, hidePageSize, showFirstLastButtons } = defaults;
                if (pageSize != null) {
                    this._pageSize = pageSize;
                }
                if (pageSizeOptions != null) {
                    this._pageSizeOptions = pageSizeOptions;
                }
                if (hidePageSize != null) {
                    this._hidePageSize = hidePageSize;
                }
                if (showFirstLastButtons != null) {
                    this._showFirstLastButtons = showFirstLastButtons;
                }
            }
        }
        /** The zero-based page index of the displayed list of items. Defaulted to 0. */
        get pageIndex() { return this._pageIndex; }
        set pageIndex(value) {
            this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);
            this._changeDetectorRef.markForCheck();
        }
        /** The length of the total number of items that are being paginated. Defaulted to 0. */
        get length() { return this._length; }
        set length(value) {
            this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);
            this._changeDetectorRef.markForCheck();
        }
        /** Number of items to display on a page. By default set to 50. */
        get pageSize() { return this._pageSize; }
        set pageSize(value) {
            this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);
            this._updateDisplayedPageSizeOptions();
        }
        /** The set of provided page size options to display to the user. */
        get pageSizeOptions() { return this._pageSizeOptions; }
        set pageSizeOptions(value) {
            this._pageSizeOptions = (value || []).map(p => Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(p));
            this._updateDisplayedPageSizeOptions();
        }
        /** Whether to hide the page size selection UI from the user. */
        get hidePageSize() { return this._hidePageSize; }
        set hidePageSize(value) {
            this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** Whether to show the first/last buttons UI to the user. */
        get showFirstLastButtons() { return this._showFirstLastButtons; }
        set showFirstLastButtons(value) {
            this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        ngOnInit() {
            this._initialized = true;
            this._updateDisplayedPageSizeOptions();
            this._markInitialized();
        }
        ngOnDestroy() {
            this._intlChanges.unsubscribe();
        }
        /** Advances to the next page if it exists. */
        nextPage() {
            if (!this.hasNextPage()) {
                return;
            }
            const previousPageIndex = this.pageIndex;
            this.pageIndex++;
            this._emitPageEvent(previousPageIndex);
        }
        /** Move back to the previous page if it exists. */
        previousPage() {
            if (!this.hasPreviousPage()) {
                return;
            }
            const previousPageIndex = this.pageIndex;
            this.pageIndex--;
            this._emitPageEvent(previousPageIndex);
        }
        /** Move to the first page if not already there. */
        firstPage() {
            // hasPreviousPage being false implies at the start
            if (!this.hasPreviousPage()) {
                return;
            }
            const previousPageIndex = this.pageIndex;
            this.pageIndex = 0;
            this._emitPageEvent(previousPageIndex);
        }
        /** Move to the last page if not already there. */
        lastPage() {
            // hasNextPage being false implies at the end
            if (!this.hasNextPage()) {
                return;
            }
            const previousPageIndex = this.pageIndex;
            this.pageIndex = this.getNumberOfPages() - 1;
            this._emitPageEvent(previousPageIndex);
        }
        /** Whether there is a previous page. */
        hasPreviousPage() {
            return this.pageIndex >= 1 && this.pageSize != 0;
        }
        /** Whether there is a next page. */
        hasNextPage() {
            const maxPageIndex = this.getNumberOfPages() - 1;
            return this.pageIndex < maxPageIndex && this.pageSize != 0;
        }
        /** Calculate the number of pages */
        getNumberOfPages() {
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
        _changePageSize(pageSize) {
            // Current page needs to be updated to reflect the new page size. Navigate to the page
            // containing the previous page's first item.
            const startIndex = this.pageIndex * this.pageSize;
            const previousPageIndex = this.pageIndex;
            this.pageIndex = Math.floor(startIndex / pageSize) || 0;
            this.pageSize = pageSize;
            this._emitPageEvent(previousPageIndex);
        }
        /** Checks whether the buttons for going forwards should be disabled. */
        _nextButtonsDisabled() {
            return this.disabled || !this.hasNextPage();
        }
        /** Checks whether the buttons for going backwards should be disabled. */
        _previousButtonsDisabled() {
            return this.disabled || !this.hasPreviousPage();
        }
        /**
         * Updates the list of page size options to display to the user. Includes making sure that
         * the page size is an option and that the list is sorted.
         */
        _updateDisplayedPageSizeOptions() {
            if (!this._initialized) {
                return;
            }
            // If no page size is provided, use the first page size option or the default page size.
            if (!this.pageSize) {
                this._pageSize = this.pageSizeOptions.length != 0 ?
                    this.pageSizeOptions[0] :
                    DEFAULT_PAGE_SIZE;
            }
            this._displayedPageSizeOptions = this.pageSizeOptions.slice();
            if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
                this._displayedPageSizeOptions.push(this.pageSize);
            }
            // Sort the numbers using a number-specific sort function.
            this._displayedPageSizeOptions.sort((a, b) => a - b);
            this._changeDetectorRef.markForCheck();
        }
        /** Emits an event notifying that a change of the paginator's properties has been triggered. */
        _emitPageEvent(previousPageIndex) {
            this.page.emit({
                previousPageIndex,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                length: this.length
            });
        }
    }
    MatPaginator.ɵfac = function MatPaginator_Factory(t) { return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8)); };
    MatPaginator.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatPaginator, selectors: [["mat-paginator"]], hostAttrs: [1, "mat-paginator"], inputs: { disabled: "disabled", pageIndex: "pageIndex", length: "length", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", hidePageSize: "hidePageSize", showFirstLastButtons: "showFirstLastButtons", color: "color" }, outputs: { page: "page" }, exportAs: ["matPaginator"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 14, consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]], template: function MatPaginator_Template(rf, ctx) {
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
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() { return ctx.previousPage(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() { return ctx.nextPage(); });
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
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"], encapsulation: 2, changeDetection: 0 });
    return MatPaginator;
})();
let MatPaginatorModule = /*@__PURE__*/ (() => {
    class MatPaginatorModule {
    }
    MatPaginatorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatPaginatorModule });
    MatPaginatorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatPaginatorModule_Factory(t) { return new (t || MatPaginatorModule)(); }, providers: [MAT_PAGINATOR_INTL_PROVIDER], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            ]] });
    return MatPaginatorModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatPaginatorModule, { declarations: function () { return [MatPaginator]; }, imports: function () {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]];
        }, exports: function () { return [MatPaginator]; } });
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






/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
  \**********************************************************************/
/*! exports provided: MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function() { return MAT_SORT_HEADER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSort", function() { return MatSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function() { return MatSortHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function() { return MatSortHeaderIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return MatSortModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function() { return matSortAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */



const _c0 = ["mat-sort-header", ""];
function MatSortHeader_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._disableViewStateAnimation = true; })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3._disableViewStateAnimation = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
    }
}
const _c1 = ["*"];
function getSortDuplicateSortableIdError(id) {
    return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */
function getSortHeaderNotContainedWithinSortError() {
    return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */
function getSortHeaderMissingIdError() {
    return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */
function getSortInvalidDirectionError(direction) {
    return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
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
class MatSortBase {
}
const _MatSortMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(/*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
let MatSort = /*@__PURE__*/ (() => {
    class MatSort extends _MatSortMixinBase {
        constructor() {
            super(...arguments);
            /** Collection of all registered sortables that this directive manages. */
            this.sortables = new Map();
            /** Used to notify any child components listening to state changes. */
            this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            /**
             * The direction to set when an MatSortable is initially sorted.
             * May be overriden by the MatSortable's sort start.
             */
            this.start = 'asc';
            this._direction = '';
            /** Event emitted when the user changes either the active sort or sort direction. */
            this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** The sort direction of the currently active MatSortable. */
        get direction() { return this._direction; }
        set direction(direction) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
                throw getSortInvalidDirectionError(direction);
            }
            this._direction = direction;
        }
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         */
        get disableClear() { return this._disableClear; }
        set disableClear(v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); }
        /**
         * Register function to be used by the contained MatSortables. Adds the MatSortable to the
         * collection of MatSortables.
         */
        register(sortable) {
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
        deregister(sortable) {
            this.sortables.delete(sortable.id);
        }
        /** Sets the active sort id and determines the new sort direction. */
        sort(sortable) {
            if (this.active != sortable.id) {
                this.active = sortable.id;
                this.direction = sortable.start ? sortable.start : this.start;
            }
            else {
                this.direction = this.getNextSortDirection(sortable);
            }
            this.sortChange.emit({ active: this.active, direction: this.direction });
        }
        /** Returns the next sort direction of the active sortable, checking for potential overrides. */
        getNextSortDirection(sortable) {
            if (!sortable) {
                return '';
            }
            // Get the sort direction cycle with the potential sortable overrides.
            const disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
            let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
            // Get and return the next direction in the cycle
            let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
            if (nextDirectionIndex >= sortDirectionCycle.length) {
                nextDirectionIndex = 0;
            }
            return sortDirectionCycle[nextDirectionIndex];
        }
        ngOnInit() {
            this._markInitialized();
        }
        ngOnChanges() {
            this._stateChanges.next();
        }
        ngOnDestroy() {
            this._stateChanges.complete();
        }
    }
    MatSort.ɵfac = function MatSort_Factory(t) { return ɵMatSort_BaseFactory(t || MatSort); };
    MatSort.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatSort, selectors: [["", "matSort", ""]], hostAttrs: [1, "mat-sort"], inputs: { disabled: ["matSortDisabled", "disabled"], start: ["matSortStart", "start"], direction: ["matSortDirection", "direction"], disableClear: ["matSortDisableClear", "disableClear"], active: ["matSortActive", "active"] }, outputs: { sortChange: "matSortChange" }, exportAs: ["matSort"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
    return MatSort;
})();
const ɵMatSort_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSort);
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start, disableClear) {
    let sortOrder = ['asc', 'desc'];
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
const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' +
    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */
const matSortAnimations = {
    /** Animation that moves the sort indicator. */
    indicator: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('indicator', [
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0px)' })),
        // 10px is the height of the sort indicator, minus the width of the pointers
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(10px)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
    leftPointer: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('leftPointer', [
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(-45deg)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(45deg)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
    rightPointer: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rightPointer', [
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(45deg)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(-45deg)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that controls the arrow opacity. */
    arrowOpacity: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowOpacity', [
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-active, asc-to-active, active', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: .54 })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 })),
        // Transition between all states except for immediate transitions
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms')),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION)),
    ]),
    /**
     * Animation for the translation of the arrow as a whole. States are separated into two
     * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
     * peek, and active. The other states define a specific animation (source-to-destination)
     * and are determined as a function of their prev user-perceived state and what the next state
     * should be.
     */
    arrowPosition: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowPosition', [
        // Hidden Above => Hint Center
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => desc-to-hint, * => desc-to-active', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-25%)' }),
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Below
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-desc, * => active-to-desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' }),
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(25%)' })
        ]))),
        // Hidden Below => Hint Center
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc-to-hint, * => asc-to-active', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(25%)' }),
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Above
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-asc, * => active-to-asc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' }),
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-25%)' })
        ]))),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-25%)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-asc, active-to-asc, asc', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(25%)' })),
    ]),
    /** Necessary trigger that calls animate on children animations. */
    allowChildren: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('allowChildren', [
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [
            /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('@*', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animateChild"])(), { optional: true })
        ])
    ]),
};
let MatSortHeaderIntl = /*@__PURE__*/ (() => {
    class MatSortHeaderIntl {
        constructor() {
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
            this.sortButtonLabel = (id) => {
                return `Change sorting for ${id}`;
            };
        }
    }
    MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) { return new (t || MatSortHeaderIntl)(); };
    MatSortHeaderIntl.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
    return MatSortHeaderIntl;
})();
/** @docs-private */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */
const MAT_SORT_HEADER_INTL_PROVIDER = {
    // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[/*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
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
class MatSortHeaderBase {
}
const _MatSortHeaderMixinBase = /*@__PURE__*/ Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
let MatSortHeader = /*@__PURE__*/ (() => {
    class MatSortHeader extends _MatSortHeaderMixinBase {
        constructor(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef) {
            // Note that we use a string token for the `_columnDef`, because the value is provided both by
            // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
            // and we want to avoid having the sort header depending on the CDK table because
            // of this single reference.
            super();
            this._intl = _intl;
            this._sort = _sort;
            this._columnDef = _columnDef;
            this._focusMonitor = _focusMonitor;
            this._elementRef = _elementRef;
            /**
             * Flag set to true when the indicator should be displayed while the sort is not active. Used to
             * provide an affordance that the header is sortable by showing on focus and hover.
             */
            this._showIndicatorHint = false;
            /** The direction the arrow should be facing according to the current state. */
            this._arrowDirection = '';
            /**
             * Whether the view state animation should show the transition between the `from` and `to` states.
             */
            this._disableViewStateAnimation = false;
            /** Sets the position of the arrow that displays when sorted. */
            this.arrowPosition = 'after';
            if (!_sort) {
                throw getSortHeaderNotContainedWithinSortError();
            }
            this._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes)
                .subscribe(() => {
                if (this._isSorted()) {
                    this._updateArrowDirection();
                }
                // If this header was recently active and now no longer sorted, animate away the arrow.
                if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
                    this._disableViewStateAnimation = false;
                    this._setAnimationTransitionState({ fromState: 'active', toState: this._arrowDirection });
                }
                changeDetectorRef.markForCheck();
            });
        }
        /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
        get disableClear() { return this._disableClear; }
        set disableClear(v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); }
        ngOnInit() {
            if (!this.id && this._columnDef) {
                this.id = this._columnDef.name;
            }
            // Initialize the direction of the arrow and set the view state to be immediately that state.
            this._updateArrowDirection();
            this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
            this._sort.register(this);
        }
        ngAfterViewInit() {
            // We use the focus monitor because we also want to style
            // things differently based on the focus origin.
            this._focusMonitor.monitor(this._elementRef, true)
                .subscribe(origin => this._setIndicatorHintVisible(!!origin));
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
            this._sort.deregister(this);
            this._rerenderSubscription.unsubscribe();
        }
        /**
         * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
         * user showing what the active sort will become. If set to false, the arrow will fade away.
         */
        _setIndicatorHintVisible(visible) {
            // No-op if the sort header is disabled - should not make the hint visible.
            if (this._isDisabled() && visible) {
                return;
            }
            this._showIndicatorHint = visible;
            if (!this._isSorted()) {
                this._updateArrowDirection();
                if (this._showIndicatorHint) {
                    this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
                }
                else {
                    this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
                }
            }
        }
        /**
         * Sets the animation transition view state for the arrow's position and opacity. If the
         * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
         * no animation appears.
         */
        _setAnimationTransitionState(viewState) {
            this._viewState = viewState;
            // If the animation for arrow position state (opacity/translation) should be disabled,
            // remove the fromState so that it jumps right to the toState.
            if (this._disableViewStateAnimation) {
                this._viewState = { toState: viewState.toState };
            }
        }
        /** Triggers the sort on this sort header and removes the indicator hint. */
        _toggleOnInteraction() {
            this._sort.sort(this);
            // Do not show the animation if the header was already shown in the right position.
            if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
                this._disableViewStateAnimation = true;
            }
            // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
            // the direction it is facing.
            const viewState = this._isSorted() ?
                { fromState: this._arrowDirection, toState: 'active' } :
                { fromState: 'active', toState: this._arrowDirection };
            this._setAnimationTransitionState(viewState);
            this._showIndicatorHint = false;
        }
        _handleClick() {
            if (!this._isDisabled()) {
                this._toggleOnInteraction();
            }
        }
        _handleKeydown(event) {
            if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
                event.preventDefault();
                this._toggleOnInteraction();
            }
        }
        /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
        _isSorted() {
            return this._sort.active == this.id &&
                (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /** Returns the animation state for the arrow direction (indicator and pointers). */
        _getArrowDirectionState() {
            return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
        }
        /** Returns the arrow position state (opacity, translation). */
        _getArrowViewState() {
            const fromState = this._viewState.fromState;
            return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
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
        _updateArrowDirection() {
            this._arrowDirection = this._isSorted() ?
                this._sort.direction :
                (this.start || this._sort.start);
        }
        _isDisabled() {
            return this._sort.disabled || this.disabled;
        }
        /**
         * Gets the aria-sort attribute that should be applied to this sort header. If this header
         * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
         * says that the aria-sort property should only be present on one header at a time, so removing
         * ensures this is true.
         */
        _getAriaSortAttribute() {
            if (!this._isSorted()) {
                return 'none';
            }
            return this._sort.direction == 'asc' ? 'ascending' : 'descending';
        }
        /** Whether the arrow inside the sort header should be rendered. */
        _renderArrow() {
            return !this._isDisabled() || this._isSorted();
        }
    }
    MatSortHeader.ɵfac = function MatSortHeader_Factory(t) { return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    MatSortHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatSortHeader, selectors: [["", "mat-sort-header", ""]], hostAttrs: [1, "mat-sort-header"], hostVars: 3, hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() { return ctx._handleClick(); })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() { return ctx._setIndicatorHintVisible(true); })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() { return ctx._setIndicatorHintVisible(false); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
            }
        }, inputs: { disabled: "disabled", arrowPosition: "arrowPosition", disableClear: "disableClear", id: ["mat-sort-header", "id"], start: "start" }, exportAs: ["matSortHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 6, consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]], template: function MatSortHeader_Template(rf, ctx) {
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
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"], encapsulation: 2, data: { animation: [
                matSortAnimations.indicator,
                matSortAnimations.leftPointer,
                matSortAnimations.rightPointer,
                matSortAnimations.arrowOpacity,
                matSortAnimations.arrowPosition,
                matSortAnimations.allowChildren,
            ] }, changeDetection: 0 });
    return MatSortHeader;
})();
let MatSortModule = /*@__PURE__*/ (() => {
    class MatSortModule {
    }
    MatSortModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatSortModule });
    MatSortModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatSortModule_Factory(t) { return new (t || MatSortModule)(); }, providers: [MAT_SORT_HEADER_INTL_PROVIDER], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]]] });
    return MatSortModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSortModule, { declarations: function () {
            return [MatSort,
                MatSortHeader];
        }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]]; }, exports: function () {
            return [MatSort,
                MatSortHeader];
        } });
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






/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
  \***********************************************************************/
/*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function() { return MatNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return MatTextColumn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






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


const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function MatTextColumn_th_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
        const data_r2 = ctx.$implicit;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
    }
}
let MatTable = /*@__PURE__*/ (() => {
    class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
        constructor() {
            super(...arguments);
            /** Overrides the sticky CSS class set by the `CdkTable`. */
            this.stickyCssClass = 'mat-table-sticky';
            /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
            this.needsPositionStickyOnElement = false;
        }
    }
    MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
    MatTable.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], exportAs: ["matTable"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"],
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky;position:sticky}\n"], encapsulation: 2 });
    return MatTable;
})();
const ɵMatTable_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
let MatCellDef = /*@__PURE__*/ (() => {
    class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
    }
    MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
    MatCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatCellDef;
})();
const ɵMatCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
let MatHeaderCellDef = /*@__PURE__*/ (() => {
    class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
    }
    MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
    MatHeaderCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatHeaderCellDef;
})();
const ɵMatHeaderCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
let MatFooterCellDef = /*@__PURE__*/ (() => {
    class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"] {
    }
    MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
    MatFooterCellDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatFooterCellDef;
})();
const ɵMatFooterCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
let MatColumnDef = /*@__PURE__*/ (() => {
    class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
        /**
         * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
         * In the future, this will only add "mat-column-" and columnCssClassName
         * will change from type string[] to string.
         * @docs-private
         */
        _updateColumnCssClassName() {
            super._updateColumnCssClassName();
            this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
        }
    }
    MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
    MatColumnDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
                { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatColumnDef;
})();
const ɵMatColumnDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
let MatHeaderCell = /*@__PURE__*/ (() => {
    class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"] {
    }
    MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return ɵMatHeaderCell_BaseFactory(t || MatHeaderCell); };
    MatHeaderCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatHeaderCell;
})();
const ɵMatHeaderCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell);
let MatFooterCell = /*@__PURE__*/ (() => {
    class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"] {
    }
    MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return ɵMatFooterCell_BaseFactory(t || MatFooterCell); };
    MatFooterCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatFooterCell;
})();
const ɵMatFooterCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell);
let MatCell = /*@__PURE__*/ (() => {
    class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"] {
    }
    MatCell.ɵfac = function MatCell_Factory(t) { return ɵMatCell_BaseFactory(t || MatCell); };
    MatCell.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatCell;
})();
const ɵMatCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell);
let MatHeaderRowDef = /*@__PURE__*/ (() => {
    class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
    }
    MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
    MatHeaderRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatHeaderRowDef;
})();
const ɵMatHeaderRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
let MatFooterRowDef = /*@__PURE__*/ (() => {
    class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"] {
    }
    MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
    MatFooterRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatFooterRowDef;
})();
const ɵMatFooterRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
let MatRowDef = /*@__PURE__*/ (() => {
    class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
    }
    MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
    MatRowDef.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatRowDef;
})();
const ɵMatRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
let MatHeaderRow = /*@__PURE__*/ (() => {
    class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
    }
    MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
    MatHeaderRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
    return MatHeaderRow;
})();
const ɵMatHeaderRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
let MatFooterRow = /*@__PURE__*/ (() => {
    class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"] {
    }
    MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
    MatFooterRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
    return MatFooterRow;
})();
const ɵMatFooterRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
let MatRow = /*@__PURE__*/ (() => {
    class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
    }
    MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
    MatRow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
            }
        }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
    return MatRow;
})();
const ɵMatRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
let MatNoDataRow = /*@__PURE__*/ (() => {
    class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"] {
    }
    MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) { return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow); };
    MatNoDataRow.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatNoDataRow, selectors: [["ng-template", "matNoDataRow", ""]], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return MatNoDataRow;
})();
const ɵMatNoDataRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);
let MatTextColumn = /*@__PURE__*/ (() => {
    class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"] {
    }
    MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
    MatTextColumn.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            }
        }, directives: [MatColumnDef,
            MatHeaderCellDef,
            MatCellDef,
            MatHeaderCell,
            MatCell], encapsulation: 2 });
    return MatTextColumn;
})();
const ɵMatTextColumn_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn,
];
let MatTableModule = /*@__PURE__*/ (() => {
    class MatTableModule {
    }
    MatTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTableModule });
    MatTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            ],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
    return MatTableModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, { declarations: function () {
            return [MatTable,
                MatHeaderCellDef,
                MatHeaderRowDef,
                MatColumnDef,
                MatCellDef,
                MatRowDef,
                MatFooterCellDef,
                MatFooterRowDef,
                MatHeaderCell,
                MatCell,
                MatFooterCell,
                MatHeaderRow,
                MatRow,
                MatFooterRow,
                MatNoDataRow,
                MatTextColumn];
        }, imports: function () {
            return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }, exports: function () {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                MatTable,
                MatHeaderCellDef,
                MatHeaderRowDef,
                MatColumnDef,
                MatCellDef,
                MatRowDef,
                MatFooterCellDef,
                MatFooterRowDef,
                MatHeaderCell,
                MatCell,
                MatFooterCell,
                MatHeaderRow,
                MatRow,
                MatFooterRow,
                MatNoDataRow,
                MatTextColumn];
        } });
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
const MAX_SAFE_INTEGER = 9007199254740991;
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
class MatTableDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(initialData = []) {
        super();
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /** Stream that emits when a new filter string is set on the data source. */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        /** Used to react to internal changes of the paginator that are made by the data source itself. */
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = (data, sortHeaderId) => {
            const value = data[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["_isNumberValue"])(value)) {
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
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
        this.sortData = (data, sort) => {
            const active = sort.active;
            const direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort((a, b) => {
                let valueA = this.sortingDataAccessor(a, active);
                let valueB = this.sortingDataAccessor(b, active);
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
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
        this.filterPredicate = (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            const dataStr = Object.keys(data).reduce((currentTerm, key) => {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + data[key] + '◬';
            }, '').toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        };
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /** Array of data that should be rendered by the table, where each object represents one row. */
    get data() { return this._data.value; }
    set data(data) { this._data.next(data); }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */
    get filter() { return this._filter.value; }
    set filter(filter) { this._filter.next(filter); }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */
    get sort() { return this._sort; }
    set sort(sort) {
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
    get paginator() { return this._paginator; }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        const sortChange = this._sort ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        const pageChange = this._paginator ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([dataStream, this._filter])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([data]) => this._filterData(data)));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        const orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([filteredData, sortChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([data]) => this._orderData(data)));
        // Watch for ordered data or page changes to provide a paged set of data.
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([orderedData, pageChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([data]) => this._pageData(data)));
        // Watched for paged data changes and send the result to the table to render.
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData =
            !this.filter ? data : data.filter(obj => this.filterPredicate(obj, this.filter));
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
    _orderData(data) {
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
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then(() => {
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    connect() { return this._renderData; }
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * @docs-private
     */
    disconnect() { }
}
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






/***/ }),

/***/ "./node_modules/@iconify/icons-ic/baseline-plus.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/baseline-plus.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/baseline-refresh.js":
/*!************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/baseline-refresh.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-add.js":
/*!*******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-add.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-delete.js":
/*!**********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-delete.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M8 9h8v10H8z\" fill=\"currentColor\"/><path d=\"M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-edit.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-edit.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M5 18.08V19h.92l9.06-9.06l-.92-.92z\" fill=\"currentColor\"/><path d=\"M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-filter-list.js":
/*!***************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-filter-list.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-headset.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-headset.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M17 18h1c.55 0 1-.45 1-1v-3h-2v4zM5 17c0 .55.45 1 1 1h1v-4H5v3z\" fill=\"currentColor\"/><path d=\"M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 3c0 .55-.45 1-1 1h-1v-4h2v3z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-more-horiz.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-sync.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-sync.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12.01 4V1l-4 4l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20.01 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.25 7.74A7.93 7.93 0 0 0 4.01 12c0 4.42 3.58 8 8 8v3l4-4l-4-4v3z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js ***!
  \******************************************************************************************/
/*! exports provided: UntilDestroy, untilDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UntilDestroy", function() { return UntilDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return untilDestroyed; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



const NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵNG_PIPE_DEF"];
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
const DESTROY = Symbol('__destroy');
/**
 * Applied to definitions and informs that class is decorated
 */
const DECORATOR_APPLIED = Symbol('__decoratorApplied');
/**
 * If we use the `untilDestroyed` operator multiple times inside the single
 * instance providing different `destroyMethodName`, then all streams will
 * subscribe to the single subject. If any method is invoked, the subject will
 * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
 * thus we store subjects under different symbols.
 */
function getSymbol(destroyMethodName) {
    if (typeof destroyMethodName === 'string') {
        return Symbol(`__destroy__${destroyMethodName}`);
    }
    else {
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
        throw new Error('untilDestroyed operator cannot be used inside directives or ' +
            'components or providers that are not decorated with UntilDestroy decorator');
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
        instance[symbol].complete();
        // We also have to re-assign this property thus in the future
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
        var _a;
        // Invoke the original `ngOnDestroy` if it exists
        ngOnDestroy && ngOnDestroy.call(this);
        // It's important to use `this` instead of caching instance
        // that may lead to memory leaks
        completeSubjectOnTheInstance(this, getSymbol());
        // Check if subscriptions are pushed to some array
        if (options.arrayName) {
            return unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
        }
        // Loop through the properties and find subscriptions
        if (options.checkProperties) {
            for (const property in this) {
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
    const def = type.ɵpipe;
    def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
}
function UntilDestroy(options = {}) {
    return (type) => {
        if (isPipe(type)) {
            decoratePipe(type, options);
        }
        else {
            decorateProviderDirectiveOrComponent(type, options);
        }
        markAsDecorated(type);
    };
}
function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
    const originalDestroy = instance[destroyMethodName];
    if (isFunction(originalDestroy) === false) {
        throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
    }
    createSubjectOnTheInstance(instance, symbol);
    instance[destroyMethodName] = function () {
        isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
        completeSubjectOnTheInstance(this, symbol);
        // We have to re-assign this property back to the original value.
        // If the `untilDestroyed` operator is called for the same instance
        // multiple times, then we will be able to get the original
        // method again and not the patched one.
        instance[destroyMethodName] = originalDestroy;
    };
}
function untilDestroyed(instance, destroyMethodName) {
    return (source) => {
        const symbol = getSymbol(destroyMethodName);
        // If `destroyMethodName` is passed then the developer applies
        // this operator to something non-related to Angular DI system
        if (typeof destroyMethodName === 'string') {
            overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
        }
        else {
            ensureClassIsDecorated(instance);
            createSubjectOnTheInstance(instance, symbol);
        }
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(instance[symbol]));
    };
}
/**
 * Generated bundle index. Do not edit.
 */






/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout-content.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
  \**************************************************************************/
/*! exports provided: PageLayoutContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function() { return PageLayoutContentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PageLayoutContentDirective = /*@__PURE__*/ (() => {
    class PageLayoutContentDirective {
        constructor() { }
    }
    PageLayoutContentDirective.ɵfac = function PageLayoutContentDirective_Factory(t) { return new (t || PageLayoutContentDirective)(); };
    PageLayoutContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutContentDirective, selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]], hostAttrs: [1, "vex-page-layout-content"] });
    return PageLayoutContentDirective;
})();



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout-header.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
  \*************************************************************************/
/*! exports provided: PageLayoutHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function() { return PageLayoutHeaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PageLayoutHeaderDirective = /*@__PURE__*/ (() => {
    class PageLayoutHeaderDirective {
        constructor() { }
    }
    PageLayoutHeaderDirective.ɵfac = function PageLayoutHeaderDirective_Factory(t) { return new (t || PageLayoutHeaderDirective)(); };
    PageLayoutHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutHeaderDirective, selectors: [["", "vexPageLayoutHeader", ""], ["vex-page-layout-header"]], hostAttrs: [1, "vex-page-layout-header"] });
    return PageLayoutHeaderDirective;
})();



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
let PageLayoutComponent = /*@__PURE__*/ (() => {
    class PageLayoutComponent {
        constructor() {
            this.mode = 'simple';
        }
        get isCard() {
            return this.mode === 'card';
        }
        get isSimple() {
            return this.mode === 'simple';
        }
    }
    PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) { return new (t || PageLayoutComponent)(); };
    PageLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLayoutComponent, selectors: [["vex-page-layout"]], hostAttrs: [1, "vex-page-layout"], hostVars: 4, hostBindings: function PageLayoutComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vex-page-layout-card", ctx.isCard)("vex-page-layout-simple", ctx.isSimple);
            }
        }, inputs: { mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PageLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
        }, styles: [".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7RUFDQSxpREFBQTtBQUNGOztBQUVBOztFQUVFLHlDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrRkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LXNpbXBsZSAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtaGVhZGVyLWhlaWdodCkgLSB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYjpob3ZlciB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn0iXX0= */"], encapsulation: 2 });
    return PageLayoutComponent;
})();



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.module.ts":
/*!***************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: PageLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function() { return PageLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout.component */ "./src/@vex/components/page-layout/page-layout.component.ts");
/* harmony import */ var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-header.directive */ "./src/@vex/components/page-layout/page-layout-header.directive.ts");
/* harmony import */ var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout-content.directive */ "./src/@vex/components/page-layout/page-layout-content.directive.ts");






let PageLayoutModule = /*@__PURE__*/ (() => {
    class PageLayoutModule {
    }
    PageLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutModule });
    PageLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageLayoutModule_Factory(t) { return new (t || PageLayoutModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return PageLayoutModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutModule, { declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]] }); })();



/***/ })

}]);
//# sourceMappingURL=default~order-list-list-order-module~product-list-list-bot-module-es2015.js.map