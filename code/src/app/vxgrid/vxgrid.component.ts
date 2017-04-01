import { Component, Input, OnInit, ElementRef, ViewEncapsulation } from "@angular/core";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
import {
    VxGridConfig,
    VxGridConfigBase,
    VxGridComponentInterface,
    VxGridSettingsBase,
    VxGridColumnConfig,
    MultiBoxFilterItem
} from './vxgrid.config';
import { VxNumberFixedLenPipe } from './vxgrid.pipes';
import { VxGridSettingsModal } from './vxgrid.settings.modal';
import * as _ from 'underscore';
import * as $ from "jquery";
import * as m from 'mithril'

var count = 0

@Component({
    selector: 'vx-grid',
    styleUrls: ['./vx.grid.min.css'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './vxgrid.component.html',
    providers: [VxNumberFixedLenPipe, DatePipe]
})

export class VxGridComponent implements OnInit, VxGridComponentInterface {
    baseConfig: VxGridConfigBase;
    baseSettings: VxGridSettingsBase;
    baseSettingsCount: {};
    hybridContainer: JQuery;
    scrollContainer: JQuery;
    overallScrollContainer: JQuery;
    hybridScopes: any[];
    rowHeight: number = 48;
    excess: number = 3;
    lastIndexCount: number = 0;
    lastScrollTop: number = 0;
    multiBoxFilters: MultiBoxFilterItem[];
    private uid: string;

    constructor(private el: ElementRef, private datePipe: DatePipe, private modalService: NgbModal) {
        this.baseConfig = new VxGridConfigBase();
        this.uid = _.uniqueId('_vx_');
    }

    @Input() config: VxGridConfigBase;

    getHybridTableBody() {
        return this.el.nativeElement.querySelector('#' + this.baseConfig.id)
    }

    resetConfig() {
        var self = this;
        self.baseSettings = new VxGridSettingsBase();
        self.baseConfig = self.config;
        self.baseConfig.id = self.uid;
        self.excess = self.baseConfig.latchExcess || 3;
        self.baseSettingsCount = {};
        /* ENBALE ROW SELECTION */
        if (self.baseConfig.selectionEnabled == true) {
            /* ADDING CHECKBOX COLUMN DEFINITION */
            var col = _.find(self.baseConfig.headers, function (col) { return col.id.localeCompare('checkbox') == 0 });
            if (typeof col === 'undefined' || col == null || col == {}) {
                var _selColDefn = new VxGridColumnConfig({
                    id: 'checkbox', columnName: 'Row Selection', columnIsRowSelect: true, renderDefn: true, renderHeadDefn: true, ddSort: false, ddGroup: false, ddFilters: false, width: '50', locked: true, headTabIndex: -1,
                    headerDefn: '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-disabled="baseConfig.noData == true" ng-model="baseSettings.allRowSelected" ng-change="allRowSelectionChanged()" ng-disabled="baseSettings.allRowSelectionDisabled" ng-if="baseConfig.allRowsSelectionEnabled" aria-label="Select All Rows "  /></div>',
                    cellDefn: '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-model="baseSettings.rowSelected[VX_ROW_POINT]" ng-change="rowSelectionChanged(row)" ng-disabled="baseSettings.vxRowSelectionDisable[VX_ROW_POINT]" ng-attr-id="vx_row-sel_in{{::row[baseSettings.primaryId]}}" aria-labelledby="{{::baseConfig.selectRowID}} vx_row_sel_{{::row[baseSettings.primaryId]}}" /></div><span class="offscreen" style="visibility:collapse;" ng-attr-id="vx_row_sel_{{::row[baseSettings.primaryId]}}">{{::row[baseConfig.ariaPrimary]}}</span>'
                });
                self.baseConfig.headers.unshift(_selColDefn);
            }
        }
        self.multiBoxFilters = [];
        self.baseSettings.vxRowClass = self.baseConfig['initialRowClasses'] || {};
        _.each(self.baseConfig.headers, function (col) {

            col.effectiveWidth = col.width;
            col.idCollection = [];
            var _propDefnLocks = [
                { prop: 'orderLocked', defValue: false },
                { prop: 'widthLocked', defValue: false },
                { prop: 'visbilityLocked', defValue: false }
            ];
            _.each(_propDefnLocks, function (propDefn) {
                if (col[propDefn.prop] === 'undefined' || col[propDefn.prop] == null || col[propDefn.prop] == {})
                    col[propDefn.prop] = col['locked'];
                else
                    col[propDefn.prop] = col['locked'] || col[propDefn.prop];
            });

            self.baseSettings.reverseSettings[col.id] = false;
            /* SETTING DROPDOWNS LOADED TO FALSE */
            if (typeof col.dropDownEnabled !== 'undefined' && col.dropDownEnabled != null && col.dropDownEnabled == true && self.baseConfig.enableDropdownsInHeader == true) {
                self.baseSettings.dropdDownEnabled[col.id] = true;
            }
            else {
                self.baseSettings.dropdDownEnabled[col.id] = false;
            }
            self.baseSettings.dropdDownLoaded[col.id] = false;
            self.baseSettings.dropdDownOpen[col.id] = false;
            if (typeof col.renderDefn !== 'undefined' && col.renderDefn != null && col.renderDefn != {} && col.renderDefn == true) {
                col.cellDefn = col.cellDefn.replaceAll("VX_ROW_POINT", "row[baseSettings.primaryId]");
                col.cellDefn = col.cellDefn.replaceAll("VX_DATA_POINT", "row[header.id]");
                col.cellDefn = col.cellDefn.replaceAll("VX_ROW", "row");
                col.cellDefn = col.cellDefn.replaceAll("VX_CONFIG", "baseConfig")
            }
        });
        self.baseConfig.headers = self.calculateEffectiveWidths(self.baseConfig.headers);
        if (self.baseConfig.hybrid == true) {
            if (self.baseConfig.selectionEnabled && self.baseConfig.allRowsSelectionEnabled) {
                var _selectionHead = self.el.nativeElement.querySelector('#' + self.baseConfig.id + '_vxHeadSt_' + 'checkbox');

            }
        }

        self.config.loadDataRows = function () {
            self.baseConfig.data = self.config.data;
            var _tbodyElement = self.getHybridTableBody();
            /* GETTING / SETTING PRIMARY COLUMN*/
            var _primaryColDefn: VxGridColumnConfig = _.find(self.baseConfig.headers, function (col) { return col.primary == true });
            var primaryId = '_uid';
            if (typeof _primaryColDefn !== 'undefined' && _primaryColDefn != null) {
                /* PRIMARY COLUMN EXISTS */
                _.each(self.baseConfig.data, function (row, index) {
                    if (row.fillEmptyElement != true) {
                        row[_primaryColDefn.id] = row[_primaryColDefn.id].toString();
                        row[primaryId] = row[_primaryColDefn.id];
                    }
                    row['_vxCreated'] = new Date().getTime();
                });
                primaryId = _primaryColDefn.id;
            }
            else {
                /* PRIMARY COLUMN DOES NOT EXISTS */
                _.each(self.baseConfig.data, function (row, index) { row[primaryId] = index });
                _.each(self.config.data, function (row, index) { row[primaryId] = index });
            }
            self.baseSettings.primaryId = primaryId;
            if (self.baseConfig.selectionEnabled == true) {
                /* SEETING ALL ROW SELECTIONS TO FALSE */
                _.each(self.baseConfig.data, function (row, index) {
                    var rowId = row[self.baseSettings.primaryId];
                    self.baseSettings.rowSelected[rowId] = false;
                    self.baseSettings.vxRowSelectionDisable[rowId] = false;
                });
            }
            if (self.baseConfig.hybrid == true) {
                if (self.baseConfig.sortPredicateFnPresent == true && typeof self.baseConfig.sortPredicateFn !== 'undefined' && self.baseConfig.sortPredicateFn != null && self.baseConfig.sortPredicateFn != {}) {
                    self.baseConfig.vxFilteredData = _.sortBy(self.baseConfig.data, self.baseConfig.sortPredicateFn) || [];
                }
                else
                    self.baseConfig.vxFilteredData = self.baseConfig.data || [];
                self.prepHybrid();
            }
            // var _cellId = _.uniqueId('_vxCell_');
            // self.baseSettingsCount[_cellId] = 0; 
            // $(_tbodyElement).append('<tr><td (click)="hello()" id= "' + _cellId + '">{{baseConfig}}</td></tr/>');
            // var Mith1 = {
            //     view(vnode) {
            //         return m("main", [
            //             m("h1", { class: "title" }, "My first app"),
            //             // changed the next line
            //             m("button", { onclick: function () { self.baseSettingsCount[_cellId]++ } }, self.baseSettingsCount[_cellId] + " clicks"),
            //         ])
            //     }
            // } as Mithril.Component<{}>;
            // m.mount(document.getElementById(_cellId), Mith1);                        
        }
        self.config.getVxCounts = function (): any {
            return {
                'vxAllDataLength': self.getAllRowLength(),
                'vxFilteredDataLength': self.multiBoxFilters.length > 0 ? (self.baseConfig.hybrid != true ? self.baseConfig.vxFilteredData.length : self.baseConfig.data.length) : 0,
                'vxSelectedDataLength': self.baseSettings.multiSelected.length
            };
        }
        self.config.getAppliedFilters = function () {
            var res = _.map(self.multiBoxFilters, function (item) { return { 'column': item.col, 'label': item.label, 'key': item.key } });
            return res;
        }
        self.config.getFilteredDataSet = function () {
            return self.baseConfig.vxFilteredData;
        }
        self.config.getSelectedRows = function () {
            if (self.baseConfig.selectionAtMyRisk == true) {
                self.baseSettings.multiSelected = [];
                for (var id in self.baseSettings.rowSelected) {
                    if (self.baseSettings.rowSelected[id] == true && typeof id !== 'undefined' && id.toString() != 'undefined') {
                        self.baseSettings.multiSelected.push(id);
                    }
                }
            }
            return self.baseSettings.multiSelected;
        }
        self.config.selectRows = function (ids: string[]): string[] {
            return self.selectRows(ids);
        }
        self.config.deselectRows = function (ids: string[]): string[] {
            return self.deselectRows(ids);
        }
        self.config.deselectAllRows = function () {
            self.clearSelection();
        }
        self.config.sortByColumn = function (id, direction) {
            // NG2-TO-BE-IMPLEMENTED
        }
        self.config.resetColumnFilters = function (ids) {
            // NG2-TO-BE-IMPLEMENTED
        }
        self.config.removeRows = function (rowIds: string[]): void {
            if (self.baseConfig.hybrid)
                self.hybridDeleteRows(rowIds);
        }
        self.config.selectAllFiltered = function (): void {
            self.selectAllFiltered();
        }
    }

    ngOnInit() {
        this.resetConfig()
    }

    log() {
        console.log(this.baseSettingsCount);
        for (var i in this.baseSettingsCount) {
            this.baseSettingsCount[i] = 0;
        }
        m.redraw();
    }

    prepHybrid() {
        var self = this;
        self.hybridContainer = $(document.getElementById('_vxHybrid' + self.baseConfig.id));
        self.scrollContainer = $(document.getElementById('_vxScrollContainer' + self.baseConfig.id));
        self.hybridContainer.empty();
        var _height = self.scrollContainer.height();
        var _initRowCount = Math.ceil(_height / self.rowHeight) + self.excess;
        var _rows = _.first(self.baseConfig.vxFilteredData, _initRowCount);
        self.appendRows(_rows);
        self.lastIndexCount = self.lastIndexCount + _initRowCount;
        self.initCheckScrollUpDownArrow();
        self.scrollContainer.on('scroll', function () {
            self.debPep();
        });
    }

    hybridGetRowTmpl(row: any) {
        var self = this;
        var rowTmpl = '<tr id="VX_ROW_ID" class="vxBodyRow vs-repeat-repeated-element VX_ROW_CLASSES ">VX_ALL_CELLS</tr>';
        var cellHolderTmpl = '<td class="vxBodyRowCell VX_TD_CLASS" scope="VX_CELL_SCOPE">VX_CELL_CONTENT</td>';
        var emptyRowTempl = '<td colspan="VX_NON_HIDDEN_COL_LEN" style="padding-left:15px;"><span>VX_EMPTYFILL</span></td>';
        var cellTmplContent = '<span title="VX_CELL_TMPL">VX_CELL_TMPL</span>';
        var cellTmplRowSelect = '<div class="vx-row-select"><input class="vx-row-select-toggle" rowid="VX_ROW_ID" type="checkbox" VX_ROW_SEL_VAL id="vx_row-sel_in_VX_ROW_ID" aria-labelledby="vx_row_sel_VX_ROW_ID" /><span class="offscreen" style="visibility:collapse;" id="vx_row_sel_VX_ROW_ID">Select row VX_ROW_ID</span></div>';
        var allCells = '';
        var _classes = '';
        var rowId = row[self.baseSettings.primaryId];
        var _compile = false;
        if (self.baseConfig.noData != true) {
            _.each(self.baseConfig.headers, col => {
                var _cellTmpl: String = '';
                var _cellHolder = cellHolderTmpl;
                var _cellClass = '';
                if (col.hidden != true) {
                    if (col.renderHybridCellDefn != true && col.columnIsRowSelect != true && col.columnIsDate != true) {
                        var _data: string = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : '';
                        _cellTmpl = cellTmplContent;
                        _cellTmpl = _cellTmpl.replaceAll('VX_CELL_TMPL', _data) as string;
                    }
                    else if (col.renderHybridCellDefn != true && col.columnIsDate == true) {
                        var _data: string = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : null;
                        var _dtData = self.datePipe.transform(_data, col.columnDatePipe);
                        _cellTmpl = cellTmplContent;
                        _cellTmpl = _cellTmpl.replaceAll('VX_CELL_TMPL', typeof _dtData === 'undefined' || _dtData == null ? '' : _dtData);
                    }
                    else if (col.renderHybridCellDefn != true && col.columnIsRowSelect == true) {
                        var _data: string = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : null;
                        var _rowSelectData = self.baseSettings.rowSelected[rowId] || false;
                        _cellTmpl = cellTmplRowSelect;
                        _cellTmpl = _cellTmpl.replaceAll('VX_ROW_ID', rowId);
                        _cellTmpl = _cellTmpl.replace('VX_ROW_SEL_VAL', _rowSelectData == true ? 'checked' : '');
                    }
                    else if (col.renderHybridCellDefn == true) {
                        _cellTmpl = self.baseConfig.hybridCellDefn(row, col) || '';
                        _compile = _compile || col.hybridCompile;
                    }
                    if (col.scopeIsRow == true)
                        _cellHolder = _cellHolder.replace('VX_CELL_SCOPE', 'row');
                    else
                        _cellHolder = _cellHolder.replace('VX_CELL_SCOPE', '');
                    if (typeof col.columnClassFn !== 'undefined' && typeof col.columnClassFn === 'function') {
                        _cellClass = col.columnClassFn(row);
                    }
                    _cellHolder = _cellHolder.replace('VX_TD_CLASS', _cellClass);
                    _cellHolder = _cellHolder.replaceAll('VX_CELL_CONTENT', _cellTmpl as string);
                    allCells = allCells + _cellHolder;
                }
            })
        }
        else {
            var _nonHiddenColLength = self.getNonHiddenColCount();
            var searchValueString: string = 'VX_NON_HIDDEN_COL_LEN'
            emptyRowTempl = emptyRowTempl.replaceAll('VX_NON_HIDDEN_COL_LEN', _nonHiddenColLength.toString());
            emptyRowTempl = emptyRowTempl.replaceAll('VX_EMPTYFILL', self.baseConfig.emptyFill);
            allCells = emptyRowTempl;
        }
        if (typeof self.baseConfig.hybridCellDefn === 'function' && typeof self.baseConfig.rowClassFn === 'function') {
            _classes = _classes + self.baseConfig.rowClassFn(row);
        }
        _classes = _classes + ' ' + (typeof self.baseSettings.vxRowClass[rowId] !== 'undefined' ? self.baseSettings.vxRowClass[rowId] : '');
        _classes = _classes.trim();
        rowTmpl = rowTmpl.replace('VX_ROW_CLASSES', _classes);
        rowTmpl = rowTmpl.replace('VX_ROW_ID', rowId);
        rowTmpl = rowTmpl.replaceAll('VX_ALL_CELLS', allCells);
        return { 'rowTmpl': rowTmpl, 'rowId': rowId };
    }
    compileAppend(rowTmpl, _id) {
        this.hybridContainer && this.hybridContainer.append(rowTmpl);
    }
    appendRows(rows: any[]) {
        var self = this;
        _.forEach(rows, row => {
            var _result = self.hybridGetRowTmpl(row);
            self.compileAppend(_result.rowTmpl, _result.rowId);
        })
        if (self.baseConfig.selectionEnabled == true) {
            var elements = document.getElementsByClassName('vx-row-select-toggle');
            _.each(elements, function (ele) {
                var _angElement = $(ele);
                _angElement.on('click', function (e) {
                    var _rowId = $(e.target).attr('rowid');
                    if (typeof _rowId !== 'undefined') {
                        var _currentState = $(e.target).prop('checked');
                        self.baseSettings.rowSelected[_rowId] = _currentState;
                        var result = { 'key': _rowId, 'value': self.baseSettings.rowSelected[_rowId], '_pKey': _rowId };
                        if (self.baseConfig.selectionAtMyRisk == true) {
                            if (_currentState == true) {
                                var item = _.find(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(_rowId) == 0 });
                                if (typeof item === 'undefined' || item == null)
                                    self.baseSettings.multiSelected.push(_rowId);
                            }
                            else if (_currentState == false) {
                                self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(_rowId) == 0 });
                                self.baseSettings.allRowSelected = false;
                            }
                        }
                        else
                            self.rowSelectionChanged(_rowId);
                    }
                    console.log(self);
                });
            });
        }
    }
    hybridDeleteRows = function (rowIds: string[]): void {
        var self = this;
        _.each(rowIds, function (id: string) {
            var rowElement = $(document.getElementById(id));
            rowElement.remove();
            self.baseSettings.inlineEditState[id] = false;
            self.baseSettings.rowSelected[id] = false;
            self.baseSettings.saveInProgress[id] = false;
        });
        self.baseConfig.vxFilteredData = _.reject(self.config.data, function (row) { return _.contains(rowIds, row[self.baseSettings.primaryId].toString()) == true });
        self.baseConfig.data = _.reject(self.config.data, function (row) { return _.contains(rowIds, row[self.baseSettings.primaryId].toString()) == true });
        self.baseSettings.multiSelected = _.difference(self.baseSettings.multiSelected, rowIds);
    }
    rowSelectionChanged(rowId) {
        var pid = rowId;
        var self = this;
        var row = _.find(self.baseConfig.data, function (_row) { return _row[self.baseSettings.primaryId] == rowId });
        var result = { 'key': row[self.baseConfig.onSelectionReturnCol], 'value': self.baseSettings.rowSelected[pid], '_pKey': pid };
        var proceed = true;
        if (self.baseSettings.rowSelected[pid] == true && self.baseSettings.multiSelColDependent == true) {
            proceed = false;
            var colId = self.baseConfig.multiSelectionDependentCol;
            if (row[colId] == true && self.baseSettings.multiSelected.length == 0)
                proceed = true;
            else if (row[colId] == false && self.baseSettings.multiSelected.length >= 1) {
                var id = self.baseSettings.multiSelected[0];
                var dataRow = _.find(self.baseConfig.data, function (i) { return i[self.baseSettings.primaryId].localeCompare(id) == 0 });
                if (typeof dataRow !== 'undefined' && dataRow != null && dataRow != {} && dataRow[colId] == true) {
                    proceed = false;
                    self.baseSettings.rowSelected[pid] = false;
                }
                else
                    proceed = true;
            }
            else if (row[colId] == false)
                proceed = true;
            else
                self.baseSettings.rowSelected[pid] = false;
        }
        else if (self.baseSettings.rowSelected[pid] == false) {
            self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
            proceed = false;
            self.baseSettings.allRowSelected = false;
            //self.$emit('vxGridRowSelectionChange', { 'id': self.baseConfig.id, 'data': result });
        }
        if (proceed) {
            var item = _.find(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
            if (typeof item === 'undefined' || item == null)
                self.baseSettings.multiSelected.push(pid);
            //self.$emit('vxGridRowSelectionChange', { 'id': self.baseConfig.id, 'data': result });
            /* PROCESS FOR MULTI SELECT FALSE */
            if (self.baseConfig.multiSelectionEnabled == false) {
                _.each(self.baseSettings.multiSelected, function (rs) {
                    if (rs.localeCompare(pid) != 0) {
                        self.baseSettings.rowSelected[rs] = false;
                    }
                });
                self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(pid) != 0 });
            }
        }
        console.log(self);
    }
    initCheckScrollUpDownArrow(): void {
        var self = this;
        var _id = 'scroll_up_' + self.baseConfig.id;
        var _elem = document.getElementById(_id);
        if (_elem)
            _elem.style.display = "NONE";
        _id = 'scroll_down_' + self.baseConfig.id;
        _elem = document.getElementById(_id);
        if (_elem && self.baseConfig.noData == true)
            _elem.style.display = "NONE";
        else
            _elem.style.display = "BLOCK";

    }
    prepForScrollInsertion(): void {
        var self = this;
        var diff = self.hybridContainer.height() - (self.scrollContainer.height() + self.scrollContainer.scrollTop());
        if (self.scrollContainer.scrollTop() > self.lastScrollTop) {
            if (diff < 0)
                diff = 0;
            if (diff < self.rowHeight && self.lastIndexCount < self.baseConfig.vxFilteredData.length) {
                var _initRowCount = self.excess;
                var _restRows = _.rest(self.baseConfig.vxFilteredData, self.lastIndexCount);
                var _rows = _.first(_restRows, _initRowCount);
                self.lastIndexCount = self.lastIndexCount + _initRowCount;
                self.appendRows(_rows);
            }
            self.checkToScrollDownArrow();
        }
        else {
            self.checkToScrollUpArrow()
        }
        self.lastScrollTop = self.scrollContainer.scrollTop();
    }
    debPep = _.debounce(this.prepForScrollInsertion, 10);
    getNonHiddenColCount(): number {
        var result = 1;
        var self = this;
        if (typeof self.baseConfig.headers !== 'undefined' && self.baseConfig.headers.length > 0)
            result = _.filter(self.baseConfig.headers, function (header) { return header.hidden == false }).length;
        return result;
    }
    calculateEffectiveWidths(headers: VxGridColumnConfig[]): VxGridColumnConfig[] {
        var self = this;
        var totalWidth = _.reduce(headers, function (memo, col) {
            var _val = 0;
            if (col.hidden == false)
                _val = col.width;
            return memo + _val;
        }, 0);
        self.overallScrollContainer = $(self.el.nativeElement.querySelector('.vxTableScrollContainer'));
        var _containerWidth = self.overallScrollContainer.width();
        var _totatWidth = 0;
        _.each(headers, function (col) {
            if (_containerWidth > totalWidth) {
                var _adjustment = (col.width / totalWidth) * (_containerWidth - totalWidth);
                col.effectiveWidth = col.width + _adjustment;
            }
            else
                col.effectiveWidth = col.width;
            col.effectiveWidth = Math.floor(col.effectiveWidth);
            _totatWidth = _totatWidth + col.effectiveWidth;
        });
        self.baseSettings.netWidth = _totatWidth;
        return headers;
    }
    checkToScrollDownArrow(): void {
        var self = this;
        var _id = 'scroll_down_' + self.baseConfig.id;
        var scrollContainer = self.el.nativeElement.querySelector('.vxTableContainer.scrollTableContainer');
        var tableContainer = self.el.nativeElement.querySelector('.scrollTableContainer table.vxTable');
        if (document.getElementById(_id)) document.getElementById(_id).style.display = "NONE";
        if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
            if ($(tableContainer).height() > $(scrollContainer).height())
                if (document.getElementById(_id)) document.getElementById(_id).style.display = "BLOCK";
        }
    }
    checkToScrollUpArrow(): void {
        var self = this;
        var _id = 'scroll_up_' + self.baseConfig.id;
        var scrollContainer = self.el.nativeElement.querySelector('.vxTableContainer.scrollTableContainer');
        var tableContainer = self.el.nativeElement.querySelector('.scrollTableContainer table.vxTable');
        var _elem = document.getElementById(_id);
        if (_elem) _elem.style.display = "NONE";
        if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
            if ($(tableContainer).height() > $(scrollContainer).height() && $(scrollContainer).scrollTop() > 48) {
                var _elem = document.getElementById(_id);
                if (_elem)
                    _elem.style.display = "BLOCK";
            }
        }
    }
    justScrollTop(): void {
        var self = this;
        var element = self.el.nativeElement.querySelector('.vxTableContainer.scrollTableContainer');
        setTimeout(function () {
            $(element).animate({ scrollTop: 0 }, 500);
        }, 10);

    }
    justScrollDown(): void {
        var self = this;
        var element = self.el.nativeElement.querySelector('.vxTableContainer.scrollTableContainer');
        var _scrollTop = $(element).scrollTop() || 0;
        if (self.baseConfig.hybrid == false) {
            setTimeout(function () {
                $(element).animate({ scrollTop: _scrollTop + 96 }, 33);
            }, 10);
        }
        else if (self.baseConfig.hybrid == true) {
            self.prepForScrollInsertion();
            setTimeout(function () {
                $(element).animate({ scrollTop: _scrollTop + 100 }, 300);
            }, 10);
        }
    }
    clearSelection() {
        var self = this;
        if (self.baseConfig.hybrid) {
            self.deselectRows(self.baseSettings.multiSelected);
        }
        self.baseSettings.allRowSelected = false;
    }
    revealWrapToggle() {
        var self = this;
        self.baseSettings.revealWrapRowData = !self.baseSettings.revealWrapRowData;
    }
    selectRows = function (ids) {
        var _modIds = [];
        var self = this;
        _.each(ids, function (_id: string) {
            var _ostate = self.baseSettings.rowSelected[_id];
            if (typeof _ostate === 'undefined' || _ostate == null || _ostate == false) {
                self.baseSettings.rowSelected[_id] = true;
                self.baseSettings.multiSelected.push(_id);
                _modIds.push(_id);
                if (self.baseConfig.hybrid == true) {
                    var _element = document.getElementById('vx_row-sel_in_' + _id);
                    if (typeof _element !== 'undefined' && _element != null) {
                        $(_element).prop('checked', true);
                    }
                }
            }
        });
        return _modIds;
    }
    deselectRows = function (ids) {
        var _modIds = [];
        var self = this;
        _.each(ids, function (_id: string) {
            var _ostate = self.baseSettings.rowSelected[_id];
            if (typeof _ostate !== 'undefined' && _ostate == true) {
                self.baseSettings.rowSelected[_id] = false;
                self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs: string) { return rs.toString().localeCompare(_id.toString()) == 0 });
                _modIds.push(_id);
                if (self.baseConfig.hybrid == true) {
                    var _element = document.getElementById('vx_row-sel_in_' + _id);
                    if (typeof _element !== 'undefined' && _element != null) {
                        $(_element).prop('checked', false);
                    }
                }
            }
        });
        return _modIds;
    }
    clearFilters() { }
    openManageColumns() {
        var self = this;
        var modalRef = this.modalService.open(VxGridSettingsModal, { windowClass: 'vxGridManageColMod' });
        var _copyConfig:VxGridColumnConfig[] = [];
        _.each(this.baseConfig.headers, head => {
            var _copyHead:VxGridColumnConfig = Object.assign({}, head);
            _copyConfig.push(_copyHead);
        });
        modalRef.componentInstance.copyForWidthVisChange = _copyConfig;
        _.each(modalRef.componentInstance.copyForWidthVisChange, function (col: VxGridColumnConfig, i) {
            col.order = i;
            col.chars = Math.ceil((col.width - 20) / 7);
            col.selected = false;
        });
        modalRef.result.then((result) => {
            self.config.headers = result;
            self.resetConfig();
            self.config.loadDataRows();
        }, (reason) => {
        });
    }
    addNewRow() { }
    revertEdits() { }
    deleteRows() {
        var self = this;
        if (self.baseConfig.hybrid) {
            self.hybridDeleteRows(self.baseSettings.multiSelected);
        }
    }
    selectAllFiltered() {
        var self = this;
        var _rowIds: string[] = _.map(self.baseConfig.vxFilteredData, function (_row: any) { return _row[self.baseSettings.primaryId] });
        self.selectRows(_rowIds);
        self.baseSettings.allRowSelected = true;
    }
    allRowSelectionChanged() {
        var self = this;
        if (self.baseSettings.allRowSelected) {
            self.selectAllFiltered()
        }
        else {
            self.clearSelection()
        }
    }
    getAllRowLength() { }
}