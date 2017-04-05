import {
    Component,
    Input,
    OnInit,
    AfterViewInit,
    ElementRef,
    ViewEncapsulation,
    Directive,
    ViewChildren,
    QueryList
} from "@angular/core";
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

@Directive({
    selector: '[locator]'
})
export class Locator {
    @Input() gridId: string;
    @Input() headerId: string;
    @Input() dropdownRef: any;
    constructor(public elementRef: ElementRef) {
    }
}

@Component({
    selector: 'vx-grid',
    styleUrls: ['./vx.grid.min.css'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './vxgrid.component.html',
    providers: [VxNumberFixedLenPipe, DatePipe]
})

export class VxGridComponent implements OnInit, AfterViewInit, VxGridComponentInterface {
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
    lastScroll: number = 0;
    lastScrollTop: number = 0;
    lastScrollDown: boolean = false;
    multiBoxFilters: MultiBoxFilterItem[];
    private uid: string;

    constructor(private el: ElementRef, private datePipe: DatePipe, private modalService: NgbModal) {
        this.uid = _.uniqueId('_vx_');
    }

    @Input() config: VxGridConfigBase;

    getHybridTableBody():HTMLElement {
        return this.el.nativeElement.querySelector('#' + this.baseConfig.id)
    }

    resetConfig():void {
        var self = this;
        self.baseConfig = new VxGridConfigBase(self.config);
        self.baseSettings = new VxGridSettingsBase();
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
        _.each(self.baseConfig.headers, function (col:VxGridColumnConfig) {

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
                col.cellDefn = col.cellDefn.replaceAll("VX_DATA_POINT", "row[head.id]");
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
        _.each(self.baseConfig.headers, function (head:VxGridColumnConfig) {
            head.openChangeHeader = function (data:boolean) {
                if (data == true && self.baseSettings.dropdDownEnabled[head.id] == true) {
                    self.baseSettings.dropdDownLoaded[head.id] = false;
                    self.baseSettings.dropdDownOpen[head.id] = !self.baseSettings.dropdDownOpen[head.id];
                    /* CHECK IF INTERSECTED FILTERS NEED TO BE SET TRUE */
                    var _intersect = _.filter(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(head.id) != 0 });
                    var processForIntersectedFilters = _intersect.length > 0;
                    /* CHECK IF FILTERS LIST HAS BEEN POPULATED FOR COLUMN */
                    var filterListForColAvailable = false;
                    if (typeof self.baseSettings.colFilterPairs[head.id] !== 'undefined' && self.baseSettings.colFilterPairs[head.id] != null && self.baseSettings.colFilterPairs[head.id] != {} && self.baseSettings.colFilterPairs[head.id].length > 0) {
                        filterListForColAvailable = true;
                    }
                    /* RESET DISABLED PROPS FOR PREVIOUSLY INTERSECTED DATA SET*/
                    if (processForIntersectedFilters == false && filterListForColAvailable == true) {
                        self.baseSettings.dropdDownLoaded[head.id] = true;
                        _.each(self.baseSettings.colFilterPairs[head.id], function (pair: MultiBoxFilterItem) { pair.disabled = false; });
                    }
                    else {
                        setTimeout(function () {
                            head.idCollection = [];
                            /* SORT OPERATION */
                            if (head.ddSort == true) {
                                self.baseSettings.dropDownSort[head.id] = true;
                                head.idCollection.push(self.baseConfig.id + '_' + head.id + '_sort');
                            }
                            /* GROUP OPERATION */ /* UNSUPPORTED IN HYBRID MODE */
                            if (head.ddGroup == true && self.baseConfig.hybrid != true) {
                                self.baseSettings.dropDownGroup[head.id] = true;
                                head.idCollection.push(self.baseConfig.id + '_' + head.id + '_group');
                                head.idCollection.push(self.baseConfig.id + '_' + head.id + '_ungroup');
                            }
                            /* FILTER OPERATION */
                            if (head.ddFilters == true) {
                                head.idCollection.push(self.baseConfig.id + '_' + head.id + '_clearfilters');
                                head.idCollection.push(head.id + '_searchfilters_' + self.baseConfig.id);
                                head.idCollection.push(head.id + '_invokesearchfilters_' + self.baseConfig.id);
                                /*  POPULATE LIST OF FILTERS*/
                                if (filterListForColAvailable == false) {
                                    self.baseSettings.dropDownFilters[head.id] = true;
                                    self.baseSettings.colFilterPairs[head.id] = [];
                                    var _pairs:any[] = [];
                                    var uniqed = _.uniq(_.map(self.baseConfig.data, function (item:any) {
                                        var ret = { 'value': item[head.id], 'type': '' };
                                        if (typeof ret.value !== 'undefined' && ret.value != null && ret.value != {} && typeof ret.value != 'object' && typeof ret.value != 'number' && typeof ret.value != 'boolean') {
                                            ret.value = ret.value.trim();
                                        }
                                        else if (typeof ret.value == 'boolean') {
                                            ret.value = ret.value.toString().trim();
                                        }
                                        else if (Object.prototype.toString.call(ret.value) === '[object Date]') {
                                            ret.value = ret.value.getTime();
                                            ret.type = 'date';
                                        }
                                        return ret;
                                    }), function (item:any) { return item.value });
                                    uniqed = _.reject(uniqed, function (item) { return typeof item.value === 'undefined' || item.value == {} });
                                    _.each(uniqed.sort(), function (item:any, iterator:number) {
                                        var retKey = self.getKeyedUnique(item, head.id, 'col');
                                        var key = retKey.key;
                                        var type = retKey.type;
                                        var name = (item.value === '' || item.value === ' ' ? '< blank >' : item.value);
                                        name = item.value == null ? ' < null >' : name;
                                        var pair = { 'key': key, 'label': item.value, 'name': name, 'col': head.id, 'type': type, disabled: false, action: 'filter', filterDefn: '', filterDefnAvailable: false };
                                        if (typeof head.filterCellDefn !== 'undefined' && head.filterCellDefn != null && head.filterCellDefn != {} && head.filterCellDefn != '') {
                                            pair.filterDefn = head.filterCellDefn.replaceAll("VX_DATA_POINT", "filter.name");
                                            pair.filterDefnAvailable = true;
                                        }
                                        else {
                                            pair.filterDefnAvailable = false;
                                        }
                                        _pairs.push(pair);
                                        head.idCollection.push(self.baseConfig.id + '_' + head.id + '_filter_' + iterator);
                                        self.baseSettings.colFiltersStatus[key] = false;
                                    });
                                    _pairs = _.sortBy(_pairs, 'label');
                                    _.each(_pairs, function (_pair) {
                                        self.baseSettings.colFilterPairs[head.id].push(_pair);
                                    })
                                    self.baseSettings.filterSearchToken[head.id] = '';
                                    self.baseSettings.colFiltersActivated[head.id] = false;
                                }
                                else {
                                    var _mapped: any[] = _.map(self.baseConfig.vxFilteredData, function (item: any) {
                                        if (Object.prototype.toString.call(item[head.id]) === '[object Date]')
                                            return item[head.id].getTime();
                                        else if (Object.prototype.toString.call(item[head.id]) === '[object Boolean]')
                                            return item[head.id].toString();
                                        else
                                            return item[head.id];
                                    });
                                    var uniqed1 = _.uniq(_mapped);
                                    _.each(self.baseSettings.colFilterPairs[head.id], function (pair: any) {
                                        if (_.contains(uniqed1, pair.label) != true)
                                            pair.disabled = true;
                                        else
                                            pair.disabled = false;
                                    });
                                }
                                /* SET NON INTERSECTED FILTERS TO DISABLE TRUE*/
                                if (processForIntersectedFilters == true) {
                                    /* GET INTERSECTED DATA SET BY LOOPING THROUGH MATCHES - baseConfig.vxFilteredData */
                                    var lastCol = _.last(self.multiBoxFilters);
                                    var uniqed2 = _.uniq(_.map(self.baseConfig.vxFilteredData, function (item) {
                                        if (Object.prototype.toString.call(item[head.id]) === '[object Date]')
                                            return item[head.id].getTime();
                                        else if (Object.prototype.toString.call(item[head.id]) === '[object Boolean]')
                                            return item[head.id].toString();
                                        else
                                            return item[head.id];
                                    }));
                                    if (lastCol.col.localeCompare(head.id) != 0) {
                                        _.each(self.baseSettings.colFilterPairs[head.id], function (pair: any) {
                                            if (_.contains(uniqed2, pair.label) != true)
                                                pair.disabled = true;
                                            else
                                                pair.disabled = false;
                                        });
                                    }
                                }
                            }
                            self.baseSettings.dropdDownLoaded[head.id] = true;
                        }, 500);
                    }
                }
            }
        })
        self.buildOrAttachFnsToConfig();
    }

    buildOrAttachFnsToConfig():void {
        var self = this;
        self.config.loadDataRows = function () : void {
            self.baseConfig.noData = false;
            self.baseConfig.data = [];
            self.baseConfig.data = self.config.data;
            //noData
            if (typeof self.config.data !== 'undefined' && self.config.data.length == 0) {
                self.baseConfig.data = [{ 'fillEmptyElement': true }];
                self.baseConfig.noData = true;
                if (self.config.hybrid == true && typeof self.baseConfig !== 'undefined')
                    $(document.getElementById('_vxHybrid' + self.baseConfig.id)).empty();
            }
            if (typeof self.config.data !== 'undefined' && self.config.data.length > 0) {
                if (self.baseConfig.pagination == true) {
                    self.baseSettings.pages = _.range(Math.ceil(self.config.data.length / self.baseConfig.pageLength));
                    self.baseSettings.vxPageEnabled = self.baseSettings.pages.length > 1;
                    self.baseSettings.activePage = 0;
                    self.baseSettings.vxPageStartPosition = 0;
                }
            }
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
                _.each(self.baseConfig.data, function (row:any, index:number) {
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
                self.resetHybridGrid();
            }
            //console.log(self);
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
    ngAfterViewInit() {
        this.config.loadDataRows();
    }

    activatePage(page:number) {
        var self = this;
        var _oldPage = self.baseSettings.activePage;
        self.baseSettings.activePage = page;
        self.baseSettings.vxPageStartPosition = (page > 0 ? page * self.baseConfig.pageLength : 0);
        self.baseSettings.allRowSelected = false;
        if (_oldPage != self.baseSettings.activePage && self.baseConfig.hybrid) {
            self.resetHybridGrid();
        }
    }

    log() {
        for (var i in this.baseSettingsCount) {
            this.baseSettingsCount[i] = 0;
        }
        m.redraw();
    }

    sortClick(header:VxGridColumnConfig) {
        var self = this;
        var _colDefn = _.find(self.baseConfig.headers, function (col:VxGridColumnConfig) { return col.id.localeCompare(header.id) == 0 });
        if (typeof _colDefn !== 'undefined' && _colDefn != null) {
            if (_colDefn.ddSort) {
                if (self.baseConfig.sortPredicate.localeCompare(_colDefn.id) != 0) {
                    self.baseConfig.sortPredicate = _colDefn.id;
                    if (_colDefn.customSortEnabled) {
                        self.baseConfig.sortPredicateFn = _colDefn.customSortFn;
                    }
                }
                self.baseSettings.reverseSettings[_colDefn.id] = !self.baseSettings.reverseSettings[_colDefn.id];
                self.baseConfig.reverseSortDirection = self.baseSettings.reverseSettings[_colDefn.id];
                /// <summary>HYBRID MODE SUPPORT</summary>
                if (self.baseConfig.hybrid == true) {
                    //self.config.sortPredicateFn = self.baseConfig.sortPredicateFn;
                    if (_colDefn.customSortEnabled == false)
                        self.baseConfig.vxFilteredData = _.sortBy(self.baseConfig.data, _colDefn.id);
                    else
                        self.baseConfig.vxFilteredData = _.sortBy(self.baseConfig.data, self.baseConfig.sortPredicateFn);
                    if (self.baseConfig.reverseSortDirection == true)
                        self.baseConfig.vxFilteredData.reverse();
                    self.resetHybridGrid();
                }
            }
        }
    }

    filterClick(header:VxGridColumnConfig, filter:any) {
        var self = this;
        if (self.baseConfig.preserveSelectionOnFilters == false)
            self.clearSelection();
        var filterValue = self.baseSettings.colFiltersStatus[filter.key];
        if (filterValue == false) {
            self.multiBoxFilters = _.reject(self.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0 });
            var colFilterActivatedAlready = _.find(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(filter.col) == 0 });
            if (typeof colFilterActivatedAlready === 'undefined' || colFilterActivatedAlready == null || colFilterActivatedAlready == {})
                self.baseSettings.colFiltersActivated[header.id] = false;
        }
        else {
            var filterExists = _.find(self.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0 });
            if (typeof filterExists === 'undefined' || filterExists == null || filterExists == {}) {
                self.multiBoxFilters.push(filter);
            }
            self.baseSettings.colFiltersActivated[header.id] = true;
        }
        /// <summary>HYBRID MODE SUPPORT</summary>
        if (self.baseConfig.hybrid == true) {
            self.baseConfig.vxFilteredData = self.vxMultiBoxFilter(self.baseConfig.data, self.multiBoxFilters);
            self.resetHybridGrid();
        }
    }

    filterClearClick(header:VxGridColumnConfig) {
        var self = this;
        if (self.baseSettings.colFiltersActivated[header.id] == true) {
            self.clearSelection();
            var colFilterActivatedAlready = _.filter(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0 });
            if (colFilterActivatedAlready.length > 0) {
                _.each(colFilterActivatedAlready, function (mbFilter) {
                    self.baseSettings.colFiltersStatus[mbFilter.key] = false;
                });
            }
            self.multiBoxFilters = _.reject(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0 });
            self.baseSettings.colFiltersActivated[header.id] = false;
            self.baseSettings.filterSearchToken[header.id] = '';
        }
        // if (self.baseSettings.filterSearchToken[header.id] != '') {
        //     self.baseSettings.filterSearchToken[header.id] = '';
        //     var _input = angular.element(document.getElementById(header.id + '_searchfilters_' + self.baseConfig.id));
        //     if (typeof _input !== 'undefined' && _input.length > 0)
        //         _input[0].value = '';
        // }
        /// <summary>HYBRID MODE SUPPORT</summary>
        if (self.baseConfig.hybrid == true) {
            self.baseConfig.vxFilteredData = self.vxMultiBoxFilter(self.baseConfig.data, self.multiBoxFilters);
            self.resetHybridGrid();
        }
    }

    filterAssignVar($event:Event, header:VxGridColumnConfig) {
        var self = this;
        $event.preventDefault();
        $event.stopPropagation();
        var _input: JQuery = $(document.getElementById(header.id + '_searchfilters_' + self.baseConfig.id));
        if (typeof _input !== 'undefined' && _input.length > 0) {
            self.baseSettings.filterSearchToken[header.id] = _input[0]['value'];
        }
    }

    preventCollapse($event:Event) {
        $event.preventDefault();
        $event.stopPropagation();
        return false;
    }

    getKeyedUnique(item:any, id:string, phrase:string) {
        var key = phrase + '_' + id + '_key_';
        var type = 'string';
        if (item.value == null) {
            key = key + 'null';
        }
        else {
            if (item.value == null)
                key = key + 'null';
            else if (typeof item.value != 'object') {
                key = key + item.value.toString().replace(/\s+/g, '_');
                type = item.type;
            }
            else {
                key = key + JSON.stringify(item.value).replace(/\s+/g, '_');
                type = 'object';
            }
        }
        return { 'key': key, 'type': type };
    }

    vxMultiBoxFilter(items:any[], criteria:any) {
        if (typeof criteria !== 'undefined' && criteria != null && criteria.length > 0) {
            var filtered = items;
            var copyOfItems = items;
            var filterGroups = _.groupBy(criteria, 'col');
            for (var columnFound in filterGroups) {
                var matches = filterGroups[columnFound];
                var unionedMatches:any[] = [];
                _.each(matches, function (match: any) {
                    unionedMatches = _.union(unionedMatches, _.filter(copyOfItems, function (item: any) {
                        if (typeof match.label !== 'undefined' && match.label != null && match.label != {} && typeof item[match.col] !== 'undefined' && item[match.col] != null && item[match.col] != {}) {
                            if (match.type == 'date') {
                                return typeof item[match.col] !== 'undefined' && item[match.col] != {} && item[match.col] != null && item[match.col] != '' ? item[match.col].getTime() == match.label : false;
                            }
                            if (match.type == 'object')
                                return JSON.stringify(item[match.col]).localeCompare(JSON.stringify(match.label)) == 0;
                            else
                                return item[match.col].toString().trim().localeCompare(match.label) == 0;
                        }
                        else
                            return item[match.col] == match.label;
                    }));
                });
                filtered = _.intersection(filtered, unionedMatches);
            }
            return filtered;
        }
        else
            return items;
    }

    resetHybridGrid() {
        var self = this;
        self.lastIndexCount = 0;
        self.lastScrollDown = false;
        self.lastScrollTop = 0;
        self.prepHybrid();
    }

    prepHybrid() {
        var self = this;
        self.hybridContainer = $(document.getElementById('_vxHybrid' + self.baseConfig.id));
        self.scrollContainer = $(document.getElementById('_vxScrollContainer' + self.baseConfig.id));
        self.hybridContainer.empty();
        var _height = self.scrollContainer.height();
        var _initRowCount = Math.ceil(_height / self.rowHeight) + self.excess;
        var _rows:any[] = [];
        if (self.baseConfig.pagination) {
            _initRowCount = _initRowCount > self.baseConfig.pageLength ? self.baseConfig.pageLength : _initRowCount;
            _rows = _.first(_.rest(self.baseConfig.vxFilteredData, self.baseSettings.vxPageStartPosition), _initRowCount);
        }
        else
            _rows = _.first(self.baseConfig.vxFilteredData, _initRowCount);
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
    compileAppend(rowTmpl:string, _id:string) {
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
                    //console.log(self);
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
    rowSelectionChanged(rowId:string) {
        var pid:string = rowId;
        var self = this;
        var row = _.find(self.baseConfig.data, function (_row) { return _row[self.baseSettings.primaryId] == rowId });
        var result = { 'key': row[self.baseConfig.onSelectionReturnCol], 'value': self.baseSettings.rowSelected[pid], '_pKey': pid };
        var proceed:boolean = true;
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
    }
    initCheckScrollUpDownArrow(): void {
        var self = this;
        var _id = 'scroll_up_' + self.baseConfig.id;
        var _elem = document.getElementById(_id);

        if (_elem)
            _elem.style.display = "NONE";
        _id = 'scroll_down_' + self.baseConfig.id;
        _elem = document.getElementById(_id);
        if (_elem) {
            if (self.baseConfig.noData == true)
                _elem.style.display = "NONE";
            else
                _elem.style.display = "BLOCK";
        }

    }
    prepForScrollInsertion(): void {
        var self = this;
        var diff = self.hybridContainer.height() - (self.scrollContainer.height() + self.scrollContainer.scrollTop());
        if (self.scrollContainer.scrollTop() > self.lastScrollTop) {
            if (diff < 0)
                diff = 0;
            if (diff < self.rowHeight && self.lastIndexCount < self.baseConfig.vxFilteredData.length
                && (self.baseConfig.pagination == true && self.lastIndexCount < self.baseConfig.pageLength)) {
                var _initRowCount = self.excess;
                var _restRows:any[] = [];
                if (self.baseConfig.pagination == true && self.lastIndexCount < self.baseConfig.pageLength) {
                    if (_initRowCount + self.lastIndexCount > self.baseConfig.pageLength) {
                        _initRowCount = self.baseConfig.pageLength - self.lastIndexCount;
                    }
                    _restRows = _.rest(self.baseConfig.vxFilteredData, self.baseSettings.vxPageStartPosition + self.lastIndexCount);
                }
                else if (!self.baseConfig.pagination)
                    _restRows = _.rest(self.baseConfig.vxFilteredData, self.lastIndexCount);
                var _rows = _.first(_restRows, _initRowCount);
                self.lastIndexCount = self.lastIndexCount + _initRowCount;
                self.appendRows(_rows);
                //self.scrollContainer.scrollTo(0, self.scrollContainer.scrollTop() - 48);
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
    selectRows = function (ids:string[]) {
        var _modIds:string[] = [];
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
    deselectRows = function (ids:any[]) {
        var _modIds:string[] = [];
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
        var _copyConfig: VxGridColumnConfig[] = [];
        _.each(this.baseConfig.headers, head => {
            var _copyHead: VxGridColumnConfig = Object.assign({}, head);
            _copyConfig.push(_copyHead);
        });
        modalRef.componentInstance.copyForWidthVisChange = _copyConfig;
        _.each(modalRef.componentInstance.copyForWidthVisChange, function (col: VxGridColumnConfig, i:number) {
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
        // if (self.baseSettings.allRowSelected) {
        //     self.selectAllFiltered()
        // }
        // else {
        //     self.clearSelection()
        // }
        var toggleTo = self.baseSettings.allRowSelected;
        if (toggleTo == true) {
            _.each(self.baseConfig.vxFilteredData, function (row, iter) {
                var _proceed = true;
                if (self.baseConfig.pagination == true && self.baseConfig.virtualization == false) {
                    if (!(iter >= self.baseSettings.vxPageStartPosition && iter < self.baseSettings.vxPageStartPosition + self.baseConfig.pageLength)) {
                        _proceed = false;
                    }
                }
                if (row.fillEmptyElement != true && _proceed) {
                    var pid = row[self.baseSettings.primaryId];
                    if (self.baseSettings.rowSelected[pid] == false && toggleTo == true) {
                        self.baseSettings.rowSelected[pid] = true;
                        self.baseSettings.multiSelected.push(pid);
                        if (self.baseConfig.hybrid == true) {
                            var _element = $(document.getElementById('vx_row-sel_in_' + pid));
                            if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                                $(_element).prop('checked', true);
                            }
                        }
                    }
                }
            });
            _.each(self.baseConfig.headers, function (header) {
                if (self.baseSettings.dropDownGroup[header.id] == true && self.baseSettings.groupByColActivated[header.id] == true) {
                    _.each(self.baseSettings.groupKeys[header.id], function (key:string) {
                        self.baseSettings.groupPredicate[key] = true;
                    });
                }
            });
            self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (ml) { return typeof ml === 'undefined' || ml == null || ml == {} })
            // self.$emit('vxGridRowAllSelectionChange', { 'id': self.baseConfig.id, 'data': { 'toggledTo': toggleTo, 'array': self.baseSettings.multiSelected } });
        }
        else if (toggleTo == false) {
            /* RESET GROUPS SELECTION */
            self.clearSelection();
            // self.$emit('vxGridRowAllSelectionChange', { 'id': self.baseConfig.id, 'data': { 'toggledTo': toggleTo, 'array': self.baseSettings.multiSelected } });
        }
    }
    getAllRowLength() { }
}