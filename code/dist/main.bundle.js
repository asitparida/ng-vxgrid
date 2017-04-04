webpackJsonp([0,4],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(353);
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(753)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var vxgrid_config_1 = __webpack_require__(406);
var _ = __webpack_require__(271);
var HomeComponent = (function () {
    function HomeComponent() {
        this.gridConfig = new vxgrid_config_1.VxGridConfigBase();
    }
    HomeComponent.prototype.loadRows = function () {
        var Range = 100;
        var _samples = [];
        var original = {
            customer: "Alpine Ski House A Alpine Ski House AAlpine Ski House A",
            engagement: "NB-FY15-XYZ-Coho-1745 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174",
            assignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "SEP 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-1",
            errors: {},
            link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: 'true',
            userAlias: ""
        };
        _.each(_.range(Range), function (i) {
            var rec = _.clone(original);
            rec.locked = _.sample([true, false]).toString() + '_' + i;
            rec.laborId = 'XXX-XXXX-XXXX' + '_' + i;
            rec.engagement = _.sample(['Fist Up Consultants', 'Coco Cola', 'Pepsi', 'NS78-RTY-5676677-67', 'NS78-RTY-5676677-67-Co-Co-fifgytf', 'Pepsi46456', 'NhffugycfftyfyS78-RTY-5676677-67', 'NS78-RTY-5676bghcvfgcfdtfcfr677-67-Co-Co-fifgytf']),
                rec.userAlias = _.sample(['asparida', 'prasadne', 'ruprawat', 'asparida1', 'prasadne1', 'ruprawat1', 'asparida2', 'prasadne2', 'ruprawat2', 'asparida3', 'prasadne3', 'ruprawat3']);
            _samples.push(rec);
        });
        this.gridConfig.data = _samples;
        console.log(this.gridConfig.data);
        console.log(this.gridConfig);
        this.gridConfig.loadDataRows();
    };
    HomeComponent.prototype.log = function () {
        // console.log(this.gridConfig.getVxCounts());
        // console.log(this.gridConfig.getAppliedFilters());
        // console.log(this.gridConfig.getFilteredDataSet());
        // console.log(this.gridConfig.getSelectedRows());
        this.gridConfig.deselectRows(this.gridConfig.getSelectedRows());
        this.gridConfig.selectRows(['1']);
        //this.gridConfig.deselectAllRows();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.gridConfig.data = [];
        this.gridConfig.hybrid = true;
        this.gridConfig.sortPredicateFnPresent = false;
        this.gridConfig.latchExcess = 5;
        this.gridConfig.selectionEnabled = true;
        this.gridConfig.selectionAtMyRisk = true;
        this.gridConfig.multiSelectionEnabled = true;
        this.gridConfig.preserveSelectionOnFilters = true;
        this.gridConfig.allRowsSelectionEnabled = true;
        this.gridConfig.enableDropdownsInHeader = true;
        this.gridConfig.showGridOptions = true;
        this.gridConfig.showGridStats = true;
        this.gridConfig.pagination = true;
        this.gridConfig.pageLength = 20;
        this.gridConfig.hybridCellDefn = function (row, col) {
            var tmpl = '<span>VX_DATA_POINT</span>';
            if (col.id == 'category')
                tmpl = tmpl.replace('VX_DATA_POINT', row[col.id].name || '');
            if (col.id == 'link') {
                tmpl = '<a href="http://google.com">VX_DATA_POINT</span>';
                tmpl = tmpl.replace('VX_DATA_POINT', row[col.id] || '');
                tmpl = tmpl.replace('VX_ROW_ID', row['laborId'] || '');
            }
            return tmpl;
        };
        this.gridConfig.headers = [
            new vxgrid_config_1.VxGridColumnConfig({ id: 'locked', columnName: 'Locked', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", colClass: 'dtPickerClass' }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'dt', columnIsDate: true, columnDatePipe: 'dd-MMM-yyyy', columnName: 'Date', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'link', columnName: 'Link', renderDefn: false, width: '150', headerDefn: '<span>Link</span>', hidden: false, cellDefn: '<a style="padding-left:10px;" ng-href="{{VX_DATA_POINT}}" >{{VX_DATA_POINT}}</a>', inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" ng-class=\'{ "invalidField" : VX_INVALID_ROW && VX_INVALID_FIELD_ROW  }\' ng-change="VX_CONFIG.validateLinkField(VX_ROW_POINT, VX_DATA_POINT)" />', inlineEditValidation: true, renderHybridCellDefn: true }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'customer', columnName: 'Customer', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, inlineEditOnColumnEnabled: true, hidden: false, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'engagement', columnName: 'Engagement', renderDefn: false, ddSort: true, ddGroup: true, ddFilters: true, ddFiltersWithSearch: true, dropDownEnabled: true, hidden: false, locked: false, inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'assignment', columnName: 'Assignment', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, hidden: false }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'category', columnName: 'Category', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, ddFiltersWithSearch: true, dropDownEnabled: true, filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span>{{VX_DATA_POINT.name}}</span>", cellDefn: '<span>{{VX_DATA_POINT.name}}</span>', editDefn: '<select class="selectStyleSampleA" ng-options="item.name for item in row.categories" ng-disabled="vxColSettings.inlineEditState[VX_ROW_POINT] == true" ng-model="row[\'category\']"></select>', inlineEditOnColumnEnabled: true, renderHybridCellDefn: true, hybridCompile: true, getFilterAriaLabel: function (filter) { return filter.name; } }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'userAlias', columnName: 'User', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, hidden: false, cellDefn: '<select class="selectStyleSampleA" ng-model="row.userAlias" ng-options="user for user in row.users" ng-disabled="vxColSettings.inlineEditState[VX_ROW_POINT] == true"><option value="">Select an option </option> </select>', customSortEnabled: true }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'labor', columnName: 'Labor', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false, headTabIndex: -1 }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'timezone', columnName: 'Timezone', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'status', columnName: 'Status', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false }),
            new vxgrid_config_1.VxGridColumnConfig({ id: 'laborId', columnName: 'Labor ID', renderDefn: false, ddSort: true, dropDownEnabled: false, ddGroup: false, ddFilters: true, ddFiltersWithSearch: true, hidden: false, widthLocked: true, orderLocked: false, visbilityLocked: true })
        ];
    };
    HomeComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(754)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/home/home.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// export module string {
//     export function replaceAll(find, replaceWith): string {
//         var regex = new RegExp(find, 'g');
//         return this.replace(regex, replaceWith);
//     }
// }

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
String.prototype.replaceAll = function (find, replaceWith) {
    var regex = new RegExp(find, 'g');
    return this.replace(regex, replaceWith);
};
var MultiBoxFilterItem = (function () {
    function MultiBoxFilterItem() {
        this.disabled = false;
        this.filterDefnAvailable = false;
    }
    return MultiBoxFilterItem;
}());
exports.MultiBoxFilterItem = MultiBoxFilterItem;
var VxGridColumnConfig = (function () {
    function VxGridColumnConfig(args) {
        this.id = '';
        this.renderDefn = false;
        this.orderLocked = false;
        this.widthLocked = false;
        this.visbilityLocked = false;
        this.renderHeadDefn = false;
        this.ddSort = false;
        this.ddGroup = false;
        this.ddFilters = false;
        this.ddFiltersWithSearch = false;
        this.dropDownEnabled = false;
        this.hidden = false;
        this.xsHidden = false;
        this.locked = false;
        this.primary = false;
        this.width = 200;
        this.effectiveWidth = 200;
        this.idCollection = [];
        this.headerDefn = '';
        this.cellDefn = '';
        this.filterCellDefn = '';
        this.inlineEditOnColumnEnabled = false;
        this.inlineEditValidation = false;
        this.editDefn = '';
        this.editDefnTemplate = '';
        this.headTabIndex = 0;
        this.columnIsRowSelect = false;
        this.columnIsDate = false;
        this.columnDatePipe = 'dd/MM/yyyy';
        this.renderHybridCellDefn = false;
        this.hybridCompile = false;
        this.filterLimit = 10;
        this.scopeIsRow = false;
        this.order = 0;
        this.chars = 0;
        this.selected = false;
        this.customSortEnabled = false;
        for (var i in args) {
            this[i] = args[i];
        }
    }
    VxGridColumnConfig.prototype.customSortFn = function (a, b) { return 0; };
    ;
    VxGridColumnConfig.prototype.openChangeHeader = function (state) { };
    return VxGridColumnConfig;
}());
exports.VxGridColumnConfig = VxGridColumnConfig;
var VxGridConfig = (function () {
    function VxGridConfig() {
        this.vxFilteredData = [];
        this.enableDropdownsInHeader = false;
        this.selectionEnabled = false;
        this.selectionAtMyRisk = false;
        this.preserveSelectionOnFilters = false;
        this.multiSelectionEnabled = false;
        this.showGridStats = false;
        this.showGridOptions = false;
        this.selectAllOnRenderAll = false;
        this.virtualization = false;
        this.pagination = false;
        this.inlineAddRowEnabled = false;
        this.inlineEditSyncEnabled = false;
        this.inlineDeletingEnabled = false;
        this.inlineDeleteOverrideEnabled = false;
        this.inlineSaveOverrideEnabled = false;
        this.allRowsInDefaultEdit = false;
        this.jsonEditorEnabled = false;
        this.allRowsSelectionEnabled = false;
        this.reverseSortDirection = false;
        this.xsTemplate = false;
        this.bindOnce = false;
        this.hybrid = false;
        this.sortPredicateFnPresent = false;
        this.multiSelectionDependentCol = '';
        this.pageLength = 20;
        this.latchExcess = 3;
        this.xsRowTitleTemplate = '<div class="xsRowTemplate">{{row[vxColSettings.primaryId]}}</div>';
        this.sortPredicate = '';
        this.ariaPrimary = '';
        this.onSelectionReturnCol = '';
        this.emptyFill = '<span>No records to display ...</span>';
        this.caption = 'sample vx grid table caption';
        this.loaderGifSrc = '/src/loaderWhite36.GIF';
    }
    VxGridConfig.prototype.sortPredicateFn = function (a, b) { return 0; };
    ;
    return VxGridConfig;
}());
exports.VxGridConfig = VxGridConfig;
var VxGridConfigBase = (function (_super) {
    __extends(VxGridConfigBase, _super);
    function VxGridConfigBase() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        _super.call(this);
        this.noData = false;
        var self = this;
        if (args.length > 0) {
            var _arg = args[0];
            for (var i in _arg) {
                self[i] = _arg[i];
            }
        }
    }
    VxGridConfigBase.prototype.loadDataRows = function () { };
    VxGridConfigBase.prototype.getVxCounts = function () { return { vxAllDataLength: 0, vxFilteredDataLength: 0, vxSelectedDataLength: 0 }; };
    VxGridConfigBase.prototype.getAppliedFilters = function () { return []; };
    VxGridConfigBase.prototype.getFilteredDataSet = function () { return []; };
    VxGridConfigBase.prototype.getSelectedRows = function () { return []; };
    VxGridConfigBase.prototype.selectRows = function (ids) { };
    VxGridConfigBase.prototype.deselectRows = function (ids) { };
    VxGridConfigBase.prototype.sortByColumn = function (ids, direction) { }; // NG2-TO-BE-IMPLEMENTED
    VxGridConfigBase.prototype.resetColumnFilters = function (ids) { }; // NG2-TO-BE-IMPLEMENTED
    VxGridConfigBase.prototype.removeRows = function (rowIds) { };
    VxGridConfigBase.prototype.deselectAllRows = function () { };
    ;
    VxGridConfigBase.prototype.selectAllFiltered = function () { };
    return VxGridConfigBase;
}(VxGridConfig));
exports.VxGridConfigBase = VxGridConfigBase;
var VxGridSettingsBase = (function () {
    function VxGridSettingsBase() {
        this['primaryId'] = null; // COLUMN ID FOR COLUMN DESIGNATED AS PRIMARY 
        this['dropdDownEnabled'] = {}; // STORES WHETHER THE DROPDOWN, TO ACCESS COLUMN OPERATIONS, IS ENABLED/DISABLED FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
        this['dropdDownLoaded'] = {}; // STORES WHETHER THE DROPDOWN, TO ACCESS COLUMN OPERATIONS, IS LOADED OR NOT FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
        this['dropdDownOpen'] = {}; // STORES WHETHER THE DPOPDOWN, TO ACCESS COLUMN OPERATIONS, IS OPENED OR CLOSED FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
        this['dropDownSort'] = {}; // STORES WHETHER THE SORT OPERATION IS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP
        this['dropDownFilters'] = {}; // STORES WHETHER THE FILTER OPERATION IS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP 
        this['dropDownGroup'] = {}; // STORES WHETHER THE GROUPING OPERATIONIS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP
        this['colFiltersStatus'] = {}; //
        this['colFilterPairs'] = {}; // STORES THE FILTER INFORMATION APPLICABLE FOR A SPECIFIC COLUMN
        this['colFiltersActivated'] = {}; // STORES INFORMATION IN WHICH FILTERS ARE APPLIED ACROSS COLUMNS
        this['lastProcessedForFilters'] = {}; //
        this['multiSelected'] = []; // STORES THE REFERENCES FOR ALL ROWS WHICH HAVE BEEN CURRENLT SELECTED
        this['multiSelColDependent'] = false; //
        this['reverseSettings'] = {}; // STORES THE SORT DIRECTIONS CURRENTLY APPLIED FOR COLUMNS WITH BOOLEAN MAPS FOR ASCENDING AND DESCENDING
        this['groupPredicate'] = {}; //
        this['groupByColActivated'] = {}; //
        this['rowSelected'] = {}; // STORES THE INDIVIDUAL ROW SELECTION STATES
        this['vxRowClass'] = {}; // STORES THE CLASSES TO BE APPLIED FOR ROWS 
        this['vxRowSelectionDisable'] = {}; // STORES THE STATES DESIGNATING IF A INDIVIDUAL ROW SELECTION CAN BE TOGGLED OR NOT
        this['revealWrapRowData'] = false; // STORES WHETHER TO ENABLE WRAPPING FOR ROW CELLS
        this['selectAllEnabled'] = true; // 
        this['menu'] = false; //
        this['xsViewEnabled'] = false; // STORES WHETHER THE XS VIEW IS ENABLED OR NOT
        this['xsRowTitleTemplateAvailable'] = false; // STORES WHETHER THE ROW TITLE TEMPLATE IS AVAILABLE FOR XS VIEW
        this['xsSearch'] = ''; // STORES THE CURRENTLY TOKE AGAINST WHICH WE ARE SERACHING ACCROSS THE GRID IN XS VIEW
        this['searchToken'] = ''; // STORES THE CURRENTLY TOKE AGAINST WHICH WE ARE SERACHING ACCROSS THE GRID
        this['inlineEditState'] = {}; // STORES CURRENT ROW EDIT STATE
        this['colWithInlineEdits'] = [];
        this['groupKeys'] = {};
        this['allRowSelected'] = false; // STORES THE STATE FOR ALL ROW SELECTIONS COMPOSED TO ONE PLACE
        this['allRowSelectionDisabled'] = false; // STORES WHETHER TO ALLOW OR INHIBIT ALL ROW SELECTIONS
        this['filterSearchToken'] = {}; //
        this['enteredSearchToken'] = {}; //
        this['saveInProgress'] = {}; // STORES WHETHER A CREATE/EDIT/DELETE OPERATION IS IN PROGRESS
        this['netWidth'] = 0;
        this['activePage'] = 0;
        this['vxPageStartPosition'] = 0;
        this['pages'] = [];
        this['vxPageEnabled'] = false;
    }
    return VxGridSettingsBase;
}());
exports.VxGridSettingsBase = VxGridSettingsBase;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.config.js.map

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var VxNumberFixedLenPipe = (function () {
    function VxNumberFixedLenPipe() {
    }
    VxNumberFixedLenPipe.prototype.transform = function (n, len) {
        var num = parseInt(n, 10);
        if (isNaN(num) || isNaN(len)) {
            return '00';
        }
        var _output = '' + num;
        while (_output.length < len) {
            _output = '0' + num;
        }
        return _output;
    };
    VxNumberFixedLenPipe = __decorate([
        core_1.Pipe({ name: 'vxNumberFixedLen' }), 
        __metadata('design:paramtypes', [])
    ], VxNumberFixedLenPipe);
    return VxNumberFixedLenPipe;
}());
exports.VxNumberFixedLenPipe = VxNumberFixedLenPipe;
var VxFilterArrayWithToken = (function () {
    function VxFilterArrayWithToken() {
    }
    VxFilterArrayWithToken.prototype.transform = function (items, token) {
        if (typeof items === 'undefined')
            return [];
        else {
            var _result = items.filter(function (item) { return item.label.indexOf(token) !== -1 || item.name.indexOf(token) !== -1; });
            return _result;
        }
    };
    VxFilterArrayWithToken = __decorate([
        core_1.Pipe({ name: 'vxFilterArrayWithToken' }), 
        __metadata('design:paramtypes', [])
    ], VxFilterArrayWithToken);
    return VxFilterArrayWithToken;
}());
exports.VxFilterArrayWithToken = VxFilterArrayWithToken;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.pipes.js.map

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var _ = __webpack_require__(271);
var $ = __webpack_require__(446);
var ng_bootstrap_1 = __webpack_require__(157);
var VxGridSettingsModal = (function () {
    function VxGridSettingsModal(activeModal) {
        this.activeModal = activeModal;
        this.headerSelected = null;
        this.headerSelectedForVisChange = null;
        this.selectHeader = function (header) {
            var self = this;
            if (header.locked == true)
                return;
            header.selected = !header.selected;
            _.each(self.copyForWidthVisChange, function (col) {
                if (col.id.localeCompare(header.id) != 0)
                    col.selected = false;
            });
            if (header.selected == true) {
                self.headerSelected = header;
            }
            else {
                self.headerSelected = null;
            }
        };
        this.upDownKeyPressHandler = function (e) {
            var self = this;
            var _prevent = false;
            if (e.keyCode == 38 || e.keyCode == 40) {
                //UP ARROW PRESS
                _prevent = self.upDownMovement(e);
            }
            if (_prevent) {
                e.stopPropagation();
                e.preventDefault();
            }
        };
        this.upDownMovement = function (e) {
            var self = this;
            var _movement = false;
            if (e.keyCode == 38) {
                //UP ARROW PRESS
                var _ele = $(e.target).prev();
                if (_ele.length > 0 && $(_ele[0]).attr('tabindex') != '-1') {
                    $(_ele)[0].focus();
                }
                _movement = true;
            }
            else if (e.keyCode == 40) {
                //UP ARROW PRESS
                var _ele = $(e.target).next();
                if (_ele.length > 0 && $(_ele[0]).attr('tabindex') != '-1') {
                    $(_ele)[0].focus();
                }
                _movement = true;
            }
            return _movement;
        };
    }
    VxGridSettingsModal.prototype.makeVisible = function (head) {
        var self = this;
        var header = _.find(self.copyForWidthVisChange, function (i) { return i.id.localeCompare(head.id) == 0; });
        if (typeof header !== 'undefined' && header != null && header != {} && header.visbilityLocked == false)
            header.hidden = false;
    };
    VxGridSettingsModal.prototype.makeHidden = function (head) {
        var self = this;
        var header = _.find(self.copyForWidthVisChange, function (i) { return i.id.localeCompare(head.id) == 0; });
        if (typeof header !== 'undefined' && header != null && header != {} && header.visbilityLocked == false)
            header.hidden = true;
    };
    VxGridSettingsModal.prototype.widthChanged = function (header) {
        header.width = Math.ceil(header.chars * 7) + 20;
    };
    VxGridSettingsModal.prototype.swapAbove = function (header) {
        var self = this;
        if (header.locked == false) {
            var swapFrom = header.order;
            var swapTo = header.order;
            var stableSwap = true;
            do {
                swapTo = swapTo - 1;
                stableSwap = true;
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false; });
                if (typeof headerSwappable === 'undefined' || headerSwappable == null || headerSwappable == {})
                    stableSwap = false;
            } while (!stableSwap && swapTo >= 0);
            if (stableSwap && swapTo >= 0) {
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false; });
                if (typeof headerSwappable !== 'undefined' && headerSwappable != null && headerSwappable != {}) {
                    headerSwappable.order = swapFrom;
                    header.order = swapTo;
                }
            }
            self.copyForWidthVisChange = _.sortBy(self.copyForWidthVisChange, 'order');
        }
    };
    VxGridSettingsModal.prototype.swapBelow = function (header) {
        var self = this;
        if (header.locked == false) {
            var swapFrom = header.order;
            var swapTo = header.order;
            var stableSwap = true;
            do {
                swapTo = swapTo + 1;
                stableSwap = true;
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false; });
                if (typeof headerSwappable === 'undefined' || headerSwappable == null || headerSwappable == {})
                    stableSwap = false;
            } while (!stableSwap && swapTo <= self.copyForWidthVisChange.length - 1);
            if (stableSwap && swapTo <= self.copyForWidthVisChange.length - 1) {
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false; });
                if (typeof headerSwappable !== 'undefined' && headerSwappable != null && headerSwappable != {}) {
                    headerSwappable.order = swapFrom;
                    header.order = swapTo;
                }
            }
            self.copyForWidthVisChange = _.sortBy(self.copyForWidthVisChange, 'order');
        }
    };
    VxGridSettingsModal.prototype.cancelChangeInConfig = function () {
        this.activeModal.dismiss();
    };
    VxGridSettingsModal.prototype.saveChangeInConfig = function () {
        var self = this;
        var newConfig = [];
        newConfig = _.sortBy(self.copyForWidthVisChange, function (col) {
            var column = _.find(self.copyForWidthVisChange, function (item) { return item.id.localeCompare(col.id) == 0; });
            if (typeof column !== 'undefined' && column != null && column != {})
                return column.order;
            else
                return 1;
        });
        this.activeModal.close(newConfig);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], VxGridSettingsModal.prototype, "copyForWidthVisChange", void 0);
    VxGridSettingsModal = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            template: __webpack_require__(756),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ng_bootstrap_1.NgbActiveModal !== 'undefined' && ng_bootstrap_1.NgbActiveModal) === 'function' && _a) || Object])
    ], VxGridSettingsModal);
    return VxGridSettingsModal;
    var _a;
}());
exports.VxGridSettingsModal = VxGridSettingsModal;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.settings.modal.js.map

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 463;


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(593);
var platform_browser_dynamic_1 = __webpack_require__(554);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(592);
var _1 = __webpack_require__(589);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(_1.AppModule);
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/main.js.map

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var platform_browser_1 = __webpack_require__(154);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(41);
var http_1 = __webpack_require__(335);
var app_component_1 = __webpack_require__(404);
var app_routing_1 = __webpack_require__(588);
var home_component_1 = __webpack_require__(405);
var vxgrid_module_1 = __webpack_require__(591);
var ng_bootstrap_1 = __webpack_require__(157);
exports.APP_CONFIG = new core_1.OpaqueToken('app.config');
var AppModule = (function () {
    function AppModule(resolver, bootStrapConfig) {
        this.resolver = resolver;
        this.bootStrapConfig = bootStrapConfig;
    }
    AppModule.prototype.ngDoBootstrap = function (moduleRef) {
        for (var _i = 0, _a = this.bootStrapConfig; _i < _a.length; _i++) {
            var _selector = _a[_i];
            var factory = this.resolver.resolveComponentFactory(app_component_1.AppComponent);
            factory.selector = _selector;
            moduleRef.bootstrap(factory);
        }
    };
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                vxgrid_module_1.VxGridModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.ROUTING,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            providers: [
                { provide: exports.APP_CONFIG, useValue: window['selectors'] }
            ],
            entryComponents: [app_component_1.AppComponent]
        }),
        __param(1, core_1.Inject(exports.APP_CONFIG)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ComponentFactoryResolver !== 'undefined' && core_1.ComponentFactoryResolver) === 'function' && _a) || Object, Object])
    ], AppModule);
    return AppModule;
    var _a;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/app.module.js.map

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(353);
var home_component_1 = __webpack_require__(405);
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/app.routing.js.map

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(404));
__export(__webpack_require__(587));
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/index.js.map

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(157);
var common_1 = __webpack_require__(18);
var vxgrid_config_1 = __webpack_require__(406);
var vxgrid_pipes_1 = __webpack_require__(407);
var vxgrid_settings_modal_1 = __webpack_require__(408);
var _ = __webpack_require__(271);
var $ = __webpack_require__(446);
var m = __webpack_require__(746);
var Locator = (function () {
    function Locator(elementRef) {
        this.elementRef = elementRef;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Locator.prototype, "gridId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Locator.prototype, "headerId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Locator.prototype, "dropdownRef", void 0);
    Locator = __decorate([
        core_1.Directive({
            selector: '[locator]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], Locator);
    return Locator;
    var _a;
}());
exports.Locator = Locator;
var VxGridComponent = (function () {
    function VxGridComponent(el, datePipe, modalService) {
        this.el = el;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.rowHeight = 48;
        this.excess = 3;
        this.lastIndexCount = 0;
        this.lastScroll = 0;
        this.lastScrollTop = 0;
        this.lastScrollDown = false;
        this.hybridDeleteRows = function (rowIds) {
            var self = this;
            _.each(rowIds, function (id) {
                var rowElement = $(document.getElementById(id));
                rowElement.remove();
                self.baseSettings.inlineEditState[id] = false;
                self.baseSettings.rowSelected[id] = false;
                self.baseSettings.saveInProgress[id] = false;
            });
            self.baseConfig.vxFilteredData = _.reject(self.config.data, function (row) { return _.contains(rowIds, row[self.baseSettings.primaryId].toString()) == true; });
            self.baseConfig.data = _.reject(self.config.data, function (row) { return _.contains(rowIds, row[self.baseSettings.primaryId].toString()) == true; });
            self.baseSettings.multiSelected = _.difference(self.baseSettings.multiSelected, rowIds);
        };
        this.debPep = _.debounce(this.prepForScrollInsertion, 10);
        this.selectRows = function (ids) {
            var _modIds = [];
            var self = this;
            _.each(ids, function (_id) {
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
        };
        this.deselectRows = function (ids) {
            var _modIds = [];
            var self = this;
            _.each(ids, function (_id) {
                var _ostate = self.baseSettings.rowSelected[_id];
                if (typeof _ostate !== 'undefined' && _ostate == true) {
                    self.baseSettings.rowSelected[_id] = false;
                    self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs) { return rs.toString().localeCompare(_id.toString()) == 0; });
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
        };
        this.uid = _.uniqueId('_vx_');
    }
    VxGridComponent.prototype.getHybridTableBody = function () {
        return this.el.nativeElement.querySelector('#' + this.baseConfig.id);
    };
    VxGridComponent.prototype.resetConfig = function () {
        var self = this;
        self.baseConfig = new vxgrid_config_1.VxGridConfigBase(self.config);
        self.baseSettings = new vxgrid_config_1.VxGridSettingsBase();
        self.baseConfig.id = self.uid;
        self.excess = self.baseConfig.latchExcess || 3;
        self.baseSettingsCount = {};
        /* ENBALE ROW SELECTION */
        if (self.baseConfig.selectionEnabled == true) {
            /* ADDING CHECKBOX COLUMN DEFINITION */
            var col = _.find(self.baseConfig.headers, function (col) { return col.id.localeCompare('checkbox') == 0; });
            if (typeof col === 'undefined' || col == null || col == {}) {
                var _selColDefn = new vxgrid_config_1.VxGridColumnConfig({
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
                col.cellDefn = col.cellDefn.replaceAll("VX_DATA_POINT", "row[head.id]");
                col.cellDefn = col.cellDefn.replaceAll("VX_ROW", "row");
                col.cellDefn = col.cellDefn.replaceAll("VX_CONFIG", "baseConfig");
            }
        });
        self.baseConfig.headers = self.calculateEffectiveWidths(self.baseConfig.headers);
        if (self.baseConfig.hybrid == true) {
            if (self.baseConfig.selectionEnabled && self.baseConfig.allRowsSelectionEnabled) {
                var _selectionHead = self.el.nativeElement.querySelector('#' + self.baseConfig.id + '_vxHeadSt_' + 'checkbox');
            }
        }
        _.each(self.baseConfig.headers, function (head) {
            head.openChangeHeader = function (data) {
                if (data == true && self.baseSettings.dropdDownEnabled[head.id] == true) {
                    self.baseSettings.dropdDownLoaded[head.id] = false;
                    self.baseSettings.dropdDownOpen[head.id] = !self.baseSettings.dropdDownOpen[head.id];
                    /* CHECK IF INTERSECTED FILTERS NEED TO BE SET TRUE */
                    var _intersect = _.filter(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(head.id) != 0; });
                    var processForIntersectedFilters = _intersect.length > 0;
                    /* CHECK IF FILTERS LIST HAS BEEN POPULATED FOR COLUMN */
                    var filterListForColAvailable = false;
                    if (typeof self.baseSettings.colFilterPairs[head.id] !== 'undefined' && self.baseSettings.colFilterPairs[head.id] != null && self.baseSettings.colFilterPairs[head.id] != {} && self.baseSettings.colFilterPairs[head.id].length > 0) {
                        filterListForColAvailable = true;
                    }
                    /* RESET DISABLED PROPS FOR PREVIOUSLY INTERSECTED DATA SET*/
                    if (processForIntersectedFilters == false && filterListForColAvailable == true) {
                        self.baseSettings.dropdDownLoaded[head.id] = true;
                        _.each(self.baseSettings.colFilterPairs[head.id], function (pair) { pair.disabled = false; });
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
                                    var _pairs = [];
                                    var uniqed = _.uniq(_.map(self.baseConfig.data, function (item) {
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
                                    }), function (item) { return item.value; });
                                    uniqed = _.reject(uniqed, function (item) { return typeof item.value === 'undefined' || item.value == {}; });
                                    _.each(uniqed.sort(), function (item, iterator) {
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
                                    });
                                    self.baseSettings.filterSearchToken[head.id] = '';
                                    self.baseSettings.colFiltersActivated[head.id] = false;
                                }
                                else {
                                    var _mapped = _.map(self.baseConfig.vxFilteredData, function (item) {
                                        if (Object.prototype.toString.call(item[head.id]) === '[object Date]')
                                            return item[head.id].getTime();
                                        else if (Object.prototype.toString.call(item[head.id]) === '[object Boolean]')
                                            return item[head.id].toString();
                                        else
                                            return item[head.id];
                                    });
                                    var uniqed1 = _.uniq(_mapped);
                                    _.each(self.baseSettings.colFilterPairs[head.id], function (pair) {
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
                                        _.each(self.baseSettings.colFilterPairs[head.id], function (pair) {
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
            };
        });
        self.buildOrAttachFnsToConfig();
    };
    VxGridComponent.prototype.buildOrAttachFnsToConfig = function () {
        var self = this;
        self.config.loadDataRows = function () {
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
            var _primaryColDefn = _.find(self.baseConfig.headers, function (col) { return col.primary == true; });
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
                _.each(self.baseConfig.data, function (row, index) { row[primaryId] = index; });
                _.each(self.config.data, function (row, index) { row[primaryId] = index; });
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
        };
        self.config.getVxCounts = function () {
            return {
                'vxAllDataLength': self.getAllRowLength(),
                'vxFilteredDataLength': self.multiBoxFilters.length > 0 ? (self.baseConfig.hybrid != true ? self.baseConfig.vxFilteredData.length : self.baseConfig.data.length) : 0,
                'vxSelectedDataLength': self.baseSettings.multiSelected.length
            };
        };
        self.config.getAppliedFilters = function () {
            var res = _.map(self.multiBoxFilters, function (item) { return { 'column': item.col, 'label': item.label, 'key': item.key }; });
            return res;
        };
        self.config.getFilteredDataSet = function () {
            return self.baseConfig.vxFilteredData;
        };
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
        };
        self.config.selectRows = function (ids) {
            return self.selectRows(ids);
        };
        self.config.deselectRows = function (ids) {
            return self.deselectRows(ids);
        };
        self.config.deselectAllRows = function () {
            self.clearSelection();
        };
        self.config.sortByColumn = function (id, direction) {
            // NG2-TO-BE-IMPLEMENTED
        };
        self.config.resetColumnFilters = function (ids) {
            // NG2-TO-BE-IMPLEMENTED
        };
        self.config.removeRows = function (rowIds) {
            if (self.baseConfig.hybrid)
                self.hybridDeleteRows(rowIds);
        };
        self.config.selectAllFiltered = function () {
            self.selectAllFiltered();
        };
    };
    VxGridComponent.prototype.ngOnInit = function () {
        this.resetConfig();
    };
    VxGridComponent.prototype.ngAfterViewInit = function () {
        this.config.loadDataRows();
    };
    VxGridComponent.prototype.activatePage = function (page) {
        var self = this;
        var _oldPage = self.baseSettings.activePage;
        self.baseSettings.activePage = page;
        self.baseSettings.vxPageStartPosition = (page > 0 ? page * self.baseConfig.pageLength : 0);
        self.baseSettings.allRowSelected = false;
        if (_oldPage != self.baseSettings.activePage && self.baseConfig.hybrid) {
            self.resetHybridGrid();
        }
    };
    VxGridComponent.prototype.log = function () {
        for (var i in this.baseSettingsCount) {
            this.baseSettingsCount[i] = 0;
        }
        m.redraw();
    };
    VxGridComponent.prototype.sortClick = function (header) {
        var self = this;
        var _colDefn = _.find(self.baseConfig.headers, function (col) { return col.id.localeCompare(header.id) == 0; });
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
    };
    VxGridComponent.prototype.filterClick = function (header, filter) {
        var self = this;
        if (self.baseConfig.preserveSelectionOnFilters == false)
            self.clearSelection();
        var filterValue = self.baseSettings.colFiltersStatus[filter.key];
        if (filterValue == false) {
            self.multiBoxFilters = _.reject(self.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0; });
            var colFilterActivatedAlready = _.find(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(filter.col) == 0; });
            if (typeof colFilterActivatedAlready === 'undefined' || colFilterActivatedAlready == null || colFilterActivatedAlready == {})
                self.baseSettings.colFiltersActivated[header.id] = false;
        }
        else {
            var filterExists = _.find(self.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0; });
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
    };
    VxGridComponent.prototype.filterClearClick = function (header) {
        var self = this;
        if (self.baseSettings.colFiltersActivated[header.id] == true) {
            self.clearSelection();
            var colFilterActivatedAlready = _.filter(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0; });
            if (colFilterActivatedAlready.length > 0) {
                _.each(colFilterActivatedAlready, function (mbFilter) {
                    self.baseSettings.colFiltersStatus[mbFilter.key] = false;
                });
            }
            self.multiBoxFilters = _.reject(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0; });
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
    };
    VxGridComponent.prototype.filterAssignVar = function ($event, header) {
        var self = this;
        $event.preventDefault();
        $event.stopPropagation();
        var _input = $(document.getElementById(header.id + '_searchfilters_' + self.baseConfig.id));
        if (typeof _input !== 'undefined' && _input.length > 0) {
            self.baseSettings.filterSearchToken[header.id] = _input[0]['value'];
        }
    };
    VxGridComponent.prototype.preventCollapse = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return false;
    };
    VxGridComponent.prototype.getKeyedUnique = function (item, id, phrase) {
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
    };
    VxGridComponent.prototype.vxMultiBoxFilter = function (items, criteria) {
        if (typeof criteria !== 'undefined' && criteria != null && criteria.length > 0) {
            var filtered = items;
            var copyOfItems = items;
            var filterGroups = _.groupBy(criteria, 'col');
            for (var columnFound in filterGroups) {
                var matches = filterGroups[columnFound];
                var unionedMatches = [];
                _.each(matches, function (match) {
                    unionedMatches = _.union(unionedMatches, _.filter(copyOfItems, function (item) {
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
    };
    VxGridComponent.prototype.resetHybridGrid = function () {
        var self = this;
        self.lastIndexCount = 0;
        self.lastScrollDown = false;
        self.lastScrollTop = 0;
        self.prepHybrid();
    };
    VxGridComponent.prototype.prepHybrid = function () {
        var self = this;
        self.hybridContainer = $(document.getElementById('_vxHybrid' + self.baseConfig.id));
        self.scrollContainer = $(document.getElementById('_vxScrollContainer' + self.baseConfig.id));
        self.hybridContainer.empty();
        var _height = self.scrollContainer.height();
        var _initRowCount = Math.ceil(_height / self.rowHeight) + self.excess;
        var _rows = [];
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
    };
    VxGridComponent.prototype.hybridGetRowTmpl = function (row) {
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
            _.each(self.baseConfig.headers, function (col) {
                var _cellTmpl = '';
                var _cellHolder = cellHolderTmpl;
                var _cellClass = '';
                if (col.hidden != true) {
                    if (col.renderHybridCellDefn != true && col.columnIsRowSelect != true && col.columnIsDate != true) {
                        var _data = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : '';
                        _cellTmpl = cellTmplContent;
                        _cellTmpl = _cellTmpl.replaceAll('VX_CELL_TMPL', _data);
                    }
                    else if (col.renderHybridCellDefn != true && col.columnIsDate == true) {
                        var _data = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : null;
                        var _dtData = self.datePipe.transform(_data, col.columnDatePipe);
                        _cellTmpl = cellTmplContent;
                        _cellTmpl = _cellTmpl.replaceAll('VX_CELL_TMPL', typeof _dtData === 'undefined' || _dtData == null ? '' : _dtData);
                    }
                    else if (col.renderHybridCellDefn != true && col.columnIsRowSelect == true) {
                        var _data = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : null;
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
                    _cellHolder = _cellHolder.replaceAll('VX_CELL_CONTENT', _cellTmpl);
                    allCells = allCells + _cellHolder;
                }
            });
        }
        else {
            var _nonHiddenColLength = self.getNonHiddenColCount();
            var searchValueString = 'VX_NON_HIDDEN_COL_LEN';
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
    };
    VxGridComponent.prototype.compileAppend = function (rowTmpl, _id) {
        this.hybridContainer && this.hybridContainer.append(rowTmpl);
    };
    VxGridComponent.prototype.appendRows = function (rows) {
        var self = this;
        _.forEach(rows, function (row) {
            var _result = self.hybridGetRowTmpl(row);
            self.compileAppend(_result.rowTmpl, _result.rowId);
        });
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
                                var item = _.find(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(_rowId) == 0; });
                                if (typeof item === 'undefined' || item == null)
                                    self.baseSettings.multiSelected.push(_rowId);
                            }
                            else if (_currentState == false) {
                                self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(_rowId) == 0; });
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
    };
    VxGridComponent.prototype.rowSelectionChanged = function (rowId) {
        var pid = rowId;
        var self = this;
        var row = _.find(self.baseConfig.data, function (_row) { return _row[self.baseSettings.primaryId] == rowId; });
        var result = { 'key': row[self.baseConfig.onSelectionReturnCol], 'value': self.baseSettings.rowSelected[pid], '_pKey': pid };
        var proceed = true;
        if (self.baseSettings.rowSelected[pid] == true && self.baseSettings.multiSelColDependent == true) {
            proceed = false;
            var colId = self.baseConfig.multiSelectionDependentCol;
            if (row[colId] == true && self.baseSettings.multiSelected.length == 0)
                proceed = true;
            else if (row[colId] == false && self.baseSettings.multiSelected.length >= 1) {
                var id = self.baseSettings.multiSelected[0];
                var dataRow = _.find(self.baseConfig.data, function (i) { return i[self.baseSettings.primaryId].localeCompare(id) == 0; });
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
            self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0; });
            proceed = false;
            self.baseSettings.allRowSelected = false;
        }
        if (proceed) {
            var item = _.find(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0; });
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
                self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (rs) { return rs.localeCompare(pid) != 0; });
            }
        }
    };
    VxGridComponent.prototype.initCheckScrollUpDownArrow = function () {
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
    };
    VxGridComponent.prototype.prepForScrollInsertion = function () {
        var self = this;
        var diff = self.hybridContainer.height() - (self.scrollContainer.height() + self.scrollContainer.scrollTop());
        if (self.scrollContainer.scrollTop() > self.lastScrollTop) {
            if (diff < 0)
                diff = 0;
            if (diff < self.rowHeight && self.lastIndexCount < self.baseConfig.vxFilteredData.length
                && (self.baseConfig.pagination == true && self.lastIndexCount < self.baseConfig.pageLength)) {
                var _initRowCount = self.excess;
                var _restRows = [];
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
            }
            self.checkToScrollDownArrow();
        }
        else {
            self.checkToScrollUpArrow();
        }
        self.lastScrollTop = self.scrollContainer.scrollTop();
    };
    VxGridComponent.prototype.getNonHiddenColCount = function () {
        var result = 1;
        var self = this;
        if (typeof self.baseConfig.headers !== 'undefined' && self.baseConfig.headers.length > 0)
            result = _.filter(self.baseConfig.headers, function (header) { return header.hidden == false; }).length;
        return result;
    };
    VxGridComponent.prototype.calculateEffectiveWidths = function (headers) {
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
    };
    VxGridComponent.prototype.checkToScrollDownArrow = function () {
        var self = this;
        var _id = 'scroll_down_' + self.baseConfig.id;
        var scrollContainer = self.el.nativeElement.querySelector('.vxTableContainer.scrollTableContainer');
        var tableContainer = self.el.nativeElement.querySelector('.scrollTableContainer table.vxTable');
        if (document.getElementById(_id))
            document.getElementById(_id).style.display = "NONE";
        if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
            if ($(tableContainer).height() > $(scrollContainer).height())
                if (document.getElementById(_id))
                    document.getElementById(_id).style.display = "BLOCK";
        }
    };
    VxGridComponent.prototype.checkToScrollUpArrow = function () {
        var self = this;
        var _id = 'scroll_up_' + self.baseConfig.id;
        var scrollContainer = self.el.nativeElement.querySelector('.vxTableContainer.scrollTableContainer');
        var tableContainer = self.el.nativeElement.querySelector('.scrollTableContainer table.vxTable');
        var _elem = document.getElementById(_id);
        if (_elem)
            _elem.style.display = "NONE";
        if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
            if ($(tableContainer).height() > $(scrollContainer).height() && $(scrollContainer).scrollTop() > 48) {
                var _elem = document.getElementById(_id);
                if (_elem)
                    _elem.style.display = "BLOCK";
            }
        }
    };
    VxGridComponent.prototype.justScrollTop = function () {
        var self = this;
        var element = self.el.nativeElement.querySelector('.vxTableContainer.scrollTableContainer');
        setTimeout(function () {
            $(element).animate({ scrollTop: 0 }, 500);
        }, 10);
    };
    VxGridComponent.prototype.justScrollDown = function () {
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
    };
    VxGridComponent.prototype.clearSelection = function () {
        var self = this;
        if (self.baseConfig.hybrid) {
            self.deselectRows(self.baseSettings.multiSelected);
        }
        self.baseSettings.allRowSelected = false;
    };
    VxGridComponent.prototype.revealWrapToggle = function () {
        var self = this;
        self.baseSettings.revealWrapRowData = !self.baseSettings.revealWrapRowData;
    };
    VxGridComponent.prototype.clearFilters = function () { };
    VxGridComponent.prototype.openManageColumns = function () {
        var self = this;
        var modalRef = this.modalService.open(vxgrid_settings_modal_1.VxGridSettingsModal, { windowClass: 'vxGridManageColMod' });
        var _copyConfig = [];
        _.each(this.baseConfig.headers, function (head) {
            var _copyHead = Object.assign({}, head);
            _copyConfig.push(_copyHead);
        });
        modalRef.componentInstance.copyForWidthVisChange = _copyConfig;
        _.each(modalRef.componentInstance.copyForWidthVisChange, function (col, i) {
            col.order = i;
            col.chars = Math.ceil((col.width - 20) / 7);
            col.selected = false;
        });
        modalRef.result.then(function (result) {
            self.config.headers = result;
            self.resetConfig();
            self.config.loadDataRows();
        }, function (reason) {
        });
    };
    VxGridComponent.prototype.addNewRow = function () { };
    VxGridComponent.prototype.revertEdits = function () { };
    VxGridComponent.prototype.deleteRows = function () {
        var self = this;
        if (self.baseConfig.hybrid) {
            self.hybridDeleteRows(self.baseSettings.multiSelected);
        }
    };
    VxGridComponent.prototype.selectAllFiltered = function () {
        var self = this;
        var _rowIds = _.map(self.baseConfig.vxFilteredData, function (_row) { return _row[self.baseSettings.primaryId]; });
        self.selectRows(_rowIds);
        self.baseSettings.allRowSelected = true;
    };
    VxGridComponent.prototype.allRowSelectionChanged = function () {
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
                    _.each(self.baseSettings.groupKeys[header.id], function (key) {
                        self.baseSettings.groupPredicate[key] = true;
                    });
                }
            });
            self.baseSettings.multiSelected = _.reject(self.baseSettings.multiSelected, function (ml) { return typeof ml === 'undefined' || ml == null || ml == {}; });
        }
        else if (toggleTo == false) {
            /* RESET GROUPS SELECTION */
            self.clearSelection();
        }
    };
    VxGridComponent.prototype.getAllRowLength = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof vxgrid_config_1.VxGridConfigBase !== 'undefined' && vxgrid_config_1.VxGridConfigBase) === 'function' && _a) || Object)
    ], VxGridComponent.prototype, "config", void 0);
    VxGridComponent = __decorate([
        core_1.Component({
            selector: 'vx-grid',
            styles: [__webpack_require__(745)],
            encapsulation: core_1.ViewEncapsulation.None,
            template: __webpack_require__(755),
            providers: [vxgrid_pipes_1.VxNumberFixedLenPipe, common_1.DatePipe]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof common_1.DatePipe !== 'undefined' && common_1.DatePipe) === 'function' && _c) || Object, (typeof (_d = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _d) || Object])
    ], VxGridComponent);
    return VxGridComponent;
    var _a, _b, _c, _d;
}());
exports.VxGridComponent = VxGridComponent;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(18);
var http_1 = __webpack_require__(335);
var vxgrid_component_1 = __webpack_require__(590);
var forms_1 = __webpack_require__(41);
var vxgrid_pipes_1 = __webpack_require__(407);
var vxgrid_settings_modal_1 = __webpack_require__(408);
var ng_bootstrap_1 = __webpack_require__(157);
var VxGridModule = (function () {
    function VxGridModule() {
    }
    VxGridModule = __decorate([
        core_1.NgModule({
            declarations: [
                vxgrid_component_1.VxGridComponent,
                vxgrid_pipes_1.VxNumberFixedLenPipe,
                vxgrid_pipes_1.VxFilterArrayWithToken,
                vxgrid_settings_modal_1.VxGridSettingsModal,
                vxgrid_component_1.Locator
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule
            ],
            exports: [
                vxgrid_component_1.VxGridComponent,
                vxgrid_pipes_1.VxNumberFixedLenPipe,
                vxgrid_pipes_1.VxFilterArrayWithToken
            ],
            entryComponents: [
                vxgrid_settings_modal_1.VxGridSettingsModal
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VxGridModule);
    return VxGridModule;
}());
exports.VxGridModule = VxGridModule;
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/environments/environment.js.map

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(607);
__webpack_require__(600);
__webpack_require__(596);
__webpack_require__(602);
__webpack_require__(601);
__webpack_require__(599);
__webpack_require__(598);
__webpack_require__(606);
__webpack_require__(595);
__webpack_require__(594);
__webpack_require__(604);
__webpack_require__(597);
__webpack_require__(605);
__webpack_require__(603);
__webpack_require__(608);
__webpack_require__(776);
//# sourceMappingURL=/Users/asparida/codes/ng-vxgrid/code/src/src/src/polyfills.js.map

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(259)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n.vx-grid-related .vx-scroller, .vx-grid-related .vxTableScrollContainer {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.vxGridManageColMod .modal-dialog {\n    height: 90vh;\n    width: 90%;\n    max-width: 90%;\n    margin: 5vh auto;\n    border-radius: 0;\n}\n\n    .vxGridManageColMod .modal-dialog .modal-content {\n        height: 100%;\n        width: 100%;\n        border-radius: 0;\n        padding: 0 15px 15px;\n    }\n\n    .vxGridManageColMod .modal-dialog ngbd-modal-content {\n        height: 100%;\n        width: 100%;\n    }\n\n        .vxGridManageColMod .modal-dialog .modal-content .modal-body {\n            height: 100%;\n            width: 100%;\n            border-radius: 0;\n            padding: 0;\n        }\n\n.vx-grid-related .row {\n    height: auto;\n}\n\n.vx-grid-related .vx-scroller {\n    height: calc(100% - 60px);\n    padding: 0;\n}\n\n.vx-grid-related .vxTableScrollContainer {\n    height: calc(100% - 15px);\n    overflow-y: hidden;\n    padding: 0;\n    border: 1px solid #A0A0A0;\n}\n\n    .vx-grid-related .vxTableScrollContainer.attrPaneOpen {\n        height: calc(100% - 60px);\n    }\n\n        .vx-grid-related .vxTableScrollContainer.attrPaneOpen.pageEnabled {\n            height: calc(100% - 98px);\n        }\n\n    .vx-grid-related .vxTableScrollContainer.pageEnabled:not(.attrPaneOpen) {\n        height: calc(100% - 48px);\n    }\n\n.vx-grid-related .offscreen {\n    position: absolute;\n    clip: rect(1px 1px 1px 1px);\n    clip: rect(1px,1px,1px,1px);\n    padding: 0;\n    border: 0;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n}\n\n.vx-grid-related .vxTableContainer:not(.scrollDupHeader) {\n    padding: 0;\n    margin: 3px 0 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: calc(100% - 48px);\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border-top: none;\n    border-left: 1px dotted #909090;\n    border-right: 1px dotted #909090;\n    border-bottom: 1px dotted #909090;\n}\n\n.vx-grid-related .vxTable .vxBody:not(.revealWrap) .vxBodyRow td, .vx-grid-related .vxTable .vxHead .vxHeadRow th {\n    padding: 0 15px;\n    height: 48px;\n    white-space: nowrap;\n    -ms-text-overflow: ellipsis;\n    text-overflow: ellipsis;\n}\n\n.vx-grid-related .icon-container.scrollAction {\n    position: absolute;\n    bottom: 25px;\n    right: 15px;\n    opacity: .25;\n    filter: alpha(opacity=25);\n    border-radius: 50%;\n}\n\n    .vx-grid-related .icon-container.scrollAction.up {\n        right: 68px;\n    }\n\n    .vx-grid-related .icon-container.scrollAction.down {\n        -webkit-transform: rotate(180deg);\n        transform: rotate(180deg);\n    }\n\n    .vx-grid-related .icon-container.scrollAction.pageEnabled {\n        bottom: 73px;\n    }\n\n    .vx-grid-related .icon-container.scrollAction:active, .vx-grid-related .icon-container.scrollAction:focus, .vx-grid-related .icon-container.scrollAction:hover {\n        position: absolute;\n        bottom: 25px;\n        opacity: 1;\n        filter: alpha(opacity=100);\n        z-index: 9999;\n        background: #006ebd !important;\n        color: #fff;\n        outline: #fff dotted 1px;\n    }\n\n        .vx-grid-related .icon-container.scrollAction:active .icon.icon-up, .vx-grid-related .icon-container.scrollAction:focus .icon.icon-up, .vx-grid-related .icon-container.scrollAction:hover .icon.icon-up {\n            background-position-y: -342px;\n            background-position-x: -28px;\n        }\n\n    .vx-grid-related .icon-container.scrollAction.pageEnabled:active, .vx-grid-related .icon-container.scrollAction.pageEnabled:focus, .vx-grid-related .icon-container.scrollAction.pageEnabled:hover {\n        bottom: 73px;\n    }\n\n.vx-grid-related .vxTable {\n    table-layout: fixed;\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\n    width: 100%;\n}\n\n.vx-grid-related .icon-container.active {\n    background: #006ebd;\n    color: #fff;\n}\n\n.vx-grid-related .icon-container.disabled {\n    color: #000;\n    background: #D0D0D0;\n    border-color: #000;\n    opacity: .25;\n    filter: alpha(opacity=25);\n    cursor: none;\n}\n\n.vx-grid-related .icon-container:not(.active):active, .vx-grid-related .icon-container:not(.active):focus, .vx-grid-related .icon-container:not(.active):hover, .vx-grid-related .icon-container:not(.disabled):active, .vx-grid-related .icon-container:not(.disabled):focus, .vx-grid-related .icon-container:not(.disabled):hover {\n    background: rgba(0,0,0,.1);\n}\n\n.vx-grid-related .vxTable .vxHead .vxHeadRow th {\n    -ms-word-break: break-all;\n    word-break: break-all;\n}\n\n.vx-grid-related .vxTable .vxBody:not(.revealWrap) .vxBodyRow td {\n    overflow: hidden;\n    -ms-word-break: break-all;\n    word-break: break-all;\n    text-align: left;\n    border: 1px solid #E0E0E0;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow td .vx-edit-input {\n    height: 40px;\n    width: calc(100% - 10px);\n    margin-left: 5px;\n    padding: 0 4px;\n    border-radius: 0;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow td .vx-edit-textarea {\n    height: 100%;\n    width: calc(100% - 10px);\n    margin-left: 5px;\n    padding: 0 4px;\n    border-radius: 0;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow td.vxBodyRowCell.renderedDefn {\n    padding: 0;\n}\n\n.vx-grid-related .vxTable .vxBody.revealWrap .vxBodyRow td {\n    padding: 0 10px;\n    height: 48px;\n    overflow: hidden;\n    -ms-word-break: break-all;\n    word-break: break-all;\n    text-align: left;\n}\n\n.vx-grid-related .vxTable .vxHead tr th:nth-child(2n+1) {\n    background-color: #363636;\n}\n\n.vx-grid-related .vxTable .vxHead tr th:nth-child(2n) {\n    background-color: #565656;\n}\n\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container {\n    width: calc(100% - 150px);\n    border-left: none;\n    border-right: none;\n    border-top: none;\n    border-bottom: 1px solid RGBA(255,255,255,.75);\n    margin-left: 15px;\n}\n\n.vx-grid-related .vxTableOperations .search-container input.search {\n    height: 42px;\n    line-height: 42px;\n    min-width: 200px;\n    border: 1px solid #A0A0A0;\n    width: 100%;\n}\n\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container .searchSymb {\n    width: 40px;\n    height: 40px;\n    display: inline-block;\n    float: left;\n}\n\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search, .vx-grid-related .vxTableOperations .search-container input.search {\n    vertical-align: middle;\n    opacity: .75;\n    filter: alpha(opacity=75);\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\n    font-weight: 100;\n    font-size: medium;\n    background: 0 0;\n    padding: 0 10px;\n    margin: 0;\n    position: relative;\n    border-radius: 0;\n}\n\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search {\n    height: 40px;\n    color: #FFF;\n    border: none;\n    width: calc(100% - 44px);\n    box-shadow: none;\n}\n\n    .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search:-moz-placeholder, .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search:-ms-input-placeholder, .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search::-moz-placeholder, .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search::-webkit-input-placeholder {\n        color: #fff;\n        opacity: .75;\n        filter: alpha(opacity=75);\n    }\n\n.vx-grid-related .vxTableOperations .search-container input.search:-moz-placeholder, .vx-grid-related .vxTableOperations .search-container input.search:-ms-input-placeholder, .vx-grid-related .vxTableOperations .search-container input.search::-moz-placeholder, .vx-grid-related .vxTableOperations .search-container input.search::-webkit-input-placeholder {\n    opacity: .75;\n    filter: alpha(opacity=75);\n}\n\n.vx-grid-related .vxTableContainer {\n    -webkit-transition: height .3s ease-in-out 0s;\n    transition: height .3s ease-in-out 0s;\n}\n\n    .vx-grid-related .vxTableContainer.scrollTableContainer {\n        width: auto;\n    }\n\n        .vx-grid-related .vxTableContainer.scrollTableContainer table thead th {\n            height: 0 !important;\n        }\n\n        .vx-grid-related .vxTableContainer.scrollTableContainer.scrollDupHeaderAdded .vxTable .vxHead tr th:nth-child(2n+1) span.noDdTitle {\n            color: #363636;\n        }\n\n        .vx-grid-related .vxTableContainer.scrollTableContainer.scrollDupHeaderAdded .vxTable .vxHead tr th:nth-child(2n) span.noDdTitle {\n            color: #565656;\n        }\n\n    .vx-grid-related .vxTableContainer.scrollDupHeader {\n        z-index: 999;\n        margin-top: 0;\n        -webkit-transition: top .3s ease-in-out 0s;\n        transition: top .3s ease-in-out 0s;\n        padding: 0;\n    }\n\n        .vx-grid-related .vxTableContainer.scrollDupHeader .vxTableHolder {\n            -webkit-transition: left .3s ease-out 0s;\n            transition: left .3s ease-out 0s;\n        }\n\n    .vx-grid-related .vxTableContainer.settingsMenuOpen {\n        overflow: hidden;\n    }\n\n.vx-grid-related .vxTableOperations {\n    margin: 5px 0;\n    height: 40px;\n    padding: 0;\n    width:calc(100% - 350px);\n}\n\n.vx-grid-related .icon-container {\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    color: #006ebd;\n    border: 1px solid #006ebd;\n    border-radius: 0;\n    cursor: pointer;\n    margin-left: 15px;\n    overflow: hidden;\n}\n\n    .vx-grid-related .icon-container.vx-row-edit {\n        line-height: 48px;\n        height: 48px;\n        margin: 0;\n        width: 100%;\n        text-align: center;\n        border: none;\n    }\n\n        .vx-grid-related .icon-container.vx-row-edit[vxdisabled=true] {\n            opacity: .5;\n            cursor: not-allowed;\n        }\n\n        .vx-grid-related .icon-container.vx-row-edit .icon {\n            width: 24px;\n            height: 26px;\n            top: 7px;\n            left: 3px;\n        }\n\n    .vx-grid-related .icon-container i.icon {\n        font-family: inherit;\n        font-size: large;\n        font-style: normal;\n    }\n\n.vx-grid-related .icon {\n    background-image: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAQBCAMAAABGy8c1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAjVBMVEUAAAAAc8YAc8YAc8YAc8YAc8YAc8YAc8YAc8YAc8YAc8YAc8YAc8YAc8b///////////////////8Ac8b///////////////////////////////////+7AAC7AAC7AAC7AAC7AAC7AAC7AAC7AAC7AAC7AAC7AAC7AAC7AAC7AAAAc8b///+7AAAAAACdp1aoAAAAK3RSTlMAEVW7qiJ37pnMRDPdiBGIInfuZjPM3Wa7VaqZRBF3qsyI7pkzu2bdRCJVxBa5/wAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAABBiSURBVHja7Z2Jdto6EIa9gBewIRBIIZSEhCRtr+z3f707kjettrHU2/Rm/uPTFGN/SLI2yzNjz9PJ9z1LBSEhs7kVIiJxMiOxDSQiKeRkQWY2CJLQvzMyuUwgFQmDJJMZLCMU4sehVVlQSEoCKwSFkMgS4aeIQIRLxLKplNMRtLWzhFggaE8BubFCeFlK0xLZIJYkh3yQyS21Ko4oT+0QUByEZLNoaYHwUsvzUSjUJ5D1xHIOsxeS5jaYKIb5GGDi6V0K9O/LepCYCpnH7TgTxROzMyNNKmDcyqcxsrBFpGk6CeHT345IRoc9f+IclzEopJroTmJEJKz+0JKdlpd2GhL5dARNbBAsW+mU+xcBsZw0CejmU2GehyS2QqRsCLfJCK1h09r+55hbOkAE9ggvjK0Rfl2pbaanfnVDbTXDhc5rYYuATpTMktgKARCYoYYT74i5MrFeMkGhUH+jfKbh41ZMegRhqiZxc3OHtiqY1uzD3Ub8Ms/zuGHA6qlxRrher7cNY1Ns18KXMN/Imsnkfcgmulrt9sVDzfC+HYr9jkPEcRR0E9IoNky1d9vt5li0P7/ZbnccYulxjGqHFrHzOEa1o1JKz+AZANHNCvf0DJ4BkH1domxs8QN+7hNpptrrgl6K1fGO27epidoV2zBWdm0PmuMO2+on7zXfRcrAtym+aY7bsMTpF7B9ZW38sdDV0FXx6Bkn1cru/V57HN3tGybV8px/VZy0x50geb7hZidXGGvtcWvGsE+Hi/Jwcl309eN+ZP34xuqHi3patxdR5vYiJ66+WqnS0nvaraC23ardRV//YdpB+zE+I339GJ8RgQn9aXhfT9sH+tPDt+oSr6T+lBYsdOxpktPVj7jvTp927PvT+rQv5H6d5WBGb+VgNdXr1+YRzi/2jxv916MGO4+Nd6OOQ6FQKBTKmcauxyhD1DyL69lU0swR7+NMXf28e9jWs6lTM0f8tn24Y//JYZStUgHjbZWSlGjnQUU1Y6H3dVVK9s2dmYt0uCgPFAqFQqE+qYJ8Pqdb4NENnmXDprtLPq7v7uh29Oi28TawNXfJOQkCuuU+3VK6iJPqlmbWxfFIt/WKbnu6iLNvlmbmge/Tbe7RbeEtYNM9Wbo7rlZ0u/Po9t37DtvRaxny4SaGvKtl5KqFpykv8i4+L9bp+Cx5gfohf2eqH/Kutn5oJlD6ZRB1AtUugyh5CWBWGKorQkpejjArPOzUvNC6TrI80axMCXmhdb14WJ+alSku4VDXq6fbS80CIJcXqOubYr+iq10HOS8+ieun2+pqJp+XVbFliGY1M0oXHAMsrSM9Y7P/zjGK4rTpGMIFoc9Q6MR73m8mzZ6i0In3XZUXPh1eAGKPptUy5dPhHUHwcVUvQwqMOjkahMiok6OuZPYidDlqEZCOBd0ij26JEQHp+E63jUe3k5AKuS80pULuC4WM+OKWmzKyEre1sSxAY62tdiOPQ6FQqL9A8HA/H2PoBA/316bnNs3w6AtSjmuHx5WgmjELKCMggnyV8XikjGMhaMUzFqkgz8T4vhck5mVAbV50qof6QdVD/acWLcEx9qq0BPWPtHX1Q3ucpn5wDDZj4OpHHHhRomGwGQNXP7ZHb3OqGWFOGfO80bL1wxMZhzVl3K0b7WCaWy2CauoHde5RIJr6saG7KohcAsxIOlEh8pNOmClDKetNB5ahD3U9GWzLu8MK6vrJ0JZHGzg3tge6+qFj6OpH2+aylJapH7RaeNp2+7CnZbo6tvreMeT6Ud1rqwy5flT32u7S4aD/GGf2pakfKBQKxcnB87lgpGP3UV0qQwYyPj+jG+8DMH7lPskndgLjV+5Ta2itkWz3adLKSTo+TZkiAxn/IQPtUFCov0vW9t5+xOzOoyEX4tWG2Z1v7tSv7mOShTnYrw+4Mn/bFg+HNdivb5WFE3hSWvVfEJyqb6UMnpRW/dfxIK/g3HOe2UmPy/23+jEn1Un0QvHjjCtN5sKvL4vtA1eajwX/SCsSOuKlMb7VRuiId8xXpFGaCYdqHD0q7R+Ej7WjR5UVIj5lzQ2ZgXU64fOay4zsy5MbxhjZl4d/rCw7y+RkYWA8SgxuUVdaPzLG+5J8eYSH0OJ1McfqEq/LSvCoER9dJ8Yh90446yQOuRFXwaOeyr7hKvhGruwJmVXXE4I69DWYU/FYXc/VqVCWPMESFiIQ5LOYJEkfBCxhD7CA+7gtTuq66RJOJ5WXdi9kB6eDDkfOFpbHBIsmflnvSvnu+H1V5+xkPioZGR4CIX8Eko1ieKeHccehUCgU6r+XPxt5//FoXDSAQDPpGMhqz83cFcRsDAQQjwZIE2hrCAIIarCpg9QRcwYhDOFpIW3QnQFIjdBBuLg9vZAWoUKE0D89EA4hQ6ToQUaIgBAhSgAiA0RC8BBNDCMtREF0EG0YJA1Eg2ghoTYMUkTke5BDobMo2LBbtKX+3loJvrnTGyVs0OwShUKhUJ9a/si9+qkg2xtp/RmWyvL0RuvPsGPL09qgNJqdSpQafqfmeC1XA+l2uYqXsxxGKBDxo3CWESGdJSeLO68HIZynFk97Zi+CO1N3mepzBxDtudorXZ09iKjP1iOqaEbDiCqa0dbkhLOMx8VN3m0Lsx/PMhvnx7N7wAklCoVCoYblIASzr/gE+MmtWIWxyG4OaC8zcp2P1U2MOcQhTO0YEY2HaMXwZywAog0jiKvHgxaMpDEEmcxYwFpwfepUxoJ0Vgt/Mh1OysNzcl2c1A/PRT31nLQXz0W79Zz0H1P6MRf9KQqFQqG0ur1LVnrxKWNUtrBnyOEsJ42VEA97bsuohntLBg3T3VkZTB73E+rtbsnwgqwxgLOYf9CZ1MKSwV7euPjj6XBQHvbXxUH9cFBPHbQXF+3WQf/hoB/TYe0RKBQK9QfkhyPtHA+/2c6RjLRzLMx2jrMxxpLMVPLRaOcI/qaj7BzB39Ro50h9VsfYOVKfVZOdI/N7HWHnyPxeDXaOle/ssJ1j5Turt3Os/W8H7Rxr/1utnWPjwztk59j48OrsHFs/4AE7x9YPuIV0RoqdL7FqosgbKXa+xJvai6wzUuT8kTXvB++MFDl/ZMVE8bP4RSMDGX8DA/33USjUV5YSznI4mKMi2cl1rNNrz0mTEOJpExH8iZMR3akWiOZkK0R1uiWCPVa3RXheRkY6Mv/WdDgoDwfXxUH9cFBPHbQXB+3WRf/hoh9DoVAoW42MMXU+nw3fjHy38dPzpSzLy/OT+tXIdyy/vML515crcF5fxK9Gvuv57VK+f1T5OH+8l5c3HhHH/Lu87w0eG2+vrx/cx4/X1zcOIcVD0nuOvL2WzzKzhaTxTBpQtO/gvrw+l1cJcmmKE15KLo9K92rMrJfyw7tKkI+yLlgWC0mGqKGqXt/hHxny/sr+1O9GlyDKu9GfSlaeEuSjZPVkVv+iCFHe0f5c/aIEOVfF3MaXEiFy2PJLU3wihO3m3lkvQKR31p+7MwXItTyL8bZ4SC4zXjwd5KViCD/OJcqUDgHC0iFmvIMYy0OEVLvFIF0NRL0u5VkDqa9LXT8kiKl+SJC6fnhSpK8KYqinMqSup6y9yBBDe5EhbXvx5Bc1QQwvfbt9kyDPbbtVu4sZ0fcfEuS5FDoh635M6E+9cf2pJ/enHtevx+P69VelX6eyH1+YrMc5FAr1dbUcaSTQpxEhiBCCkJshgU6jgma1MsbnD8czXKTjdxUqIhChlYt+HYVCof6Y/HDsG5rNiJTYPoVCBCIMiJl2angDIxz3+qjfng4X5YEQhIyE2PfrKBQKZSkXTqKj3pMO6nkEk5Nx9lbny9X4XZaOM9p6KUsThLoVj4L8uFxNkIi6N4+AnMuLZ4DU6x/DkCdg6CHtEsoQBBD0umgg3CpMP6RGSJAFfdF8g4BXtPd60rUIHjKvJoctgpAs1yN+voAaxPlyuTT/9yGK0tyfRy0iMqTh13tJ1SLK8sdLkyJhOSrK7/UE7/xaXn+dfz21iCe+wguQUQUBH17EZ9McJApJHN6PgSitroGAHWuaxsYr20Ge3svXdyklIYMkLJ6Bb351WwO5lj8u8CBYqGMJAQi8bS2snmWHxPQ6u3cGuZblT8jNlbOkYPUyIn5EFtVD9ntiKJJrCRDvrXyvHoi/l794BJQJM9hgkMCQGVovn8rzU/mzelL/0RoOtK0joqVBIYF+jlhV7Sdm9cEg/zSZ6RpY9fY5gOjLo20dT7Q0KOSf2mZCtKOlv7/Qd6pdA3tjJhsAqcsj54/3Q5IlSTaAoP+nv/+z6VRTsfTomwpTXWG88JXh/F7+uF5/mPtlfYO5iHYFT9BqLyZDgdFCSwEUCuVMnAlemk5kJInuv4o46z7B0O8WXa+6/96WDhd56U2HXV5gQIJ7liTtRD/BWDWeDHaf9GYh5VYs6Sdfsvv0YDyCW5brpRP9BEMVx0j9RqmOAbaj9F7hUnain8617WjN6DLXx7icG100jHHpuHSZUxkD5dGbjpHXpbc8xqrvutT6f9R1d3kZ2Y+5yIuLfgyFQqF+nzC+lIDA+FIiAuNLsb8YXwoZyPhTDIwvhUJ9UTlo+5+lH0MGMj4vw8Uc18Vc28Wc38W9h5N7ICf3Yk7uCZ3cmzq5R3Zyr+5kzcDJ2oWTNRQUCvUVFYR0eIjCmxw9ePlRRuLYBzPBmGTRNFvYnMwW8xgeVMbzxYzkkxgBNRyDcYGOVIuRsxAlL2yshLgstEgmvPzFzwPfS7tQP7PU84P8Nk5EhxXO9o1midzoL5HNFlEVFaaO7QKfFrObonay4mQEeOFS+56h2wo2jCvzOz/NoiDK6pFuHt/iN9+8oWiW0bP9bMbvHCufGfb5dSmyKwt7br2+1CzPrwsgoIz8VlMUB+lwUR4urouL+uGinjppLy7aLeNY9h9twVr2Yy76Uxf9uudgfEGhUF9QQa7qxl4k0LpF3wbJSRTBmkOniO64rU/NSSAujAV0BzI+B8PvNJUhVbAJjLlU0+cTGMq+P8aIuIxMZaRii53GSNtIWxYMbxF0pTOVUb1MdBojorcNlgx6pxFAeaSkKo+IdWW3zg0TTX968/wysu7YUSjUlxYbr+0QlW90bBNHJCAh89GeTTu9nnTk9A+pfUduROSWkX+owMM0TgWR292suHe010Vze6fujOEHc49uCwsGvS6VSw4ykIGMIYaLNsdpCsOLHTDCOOGnpimZMEDMxaBstz2u6IqE1yQCCoX6gspNko5bm9QT91yaXq4Kk1bACLVhJUOFcTjqdABGHYpFVqSEVTm1Zn28NsWJ/tFBIk1kFh2kRuggkTa4iwppESokMsQPkiEcQoZExhBEIkRAiJCoJz4VD5EQPCTqDXHVQRREB4kGQm01EA2igQwhGogW4bE1NnkqotMeauaq2HvI+GoM6L5GMaD7MjKq4A7DDCo9o1pEHZ5Xblhvvhk8DoVCfQW1M6/p95R1JzrPaUDJ2b0FI4pJGtL34KVTlmH9KlBobV0UxVPWcqWApfN0AgQYwoRseZMtXcOQYg3mty9eUAZbv21zM+Ed3M0aMLfjZoYG+ikY/tSVek4RmVbh+WRktxk56hDpRONAAfE5XoGAiP8bgnPFm67lZMS/OVdLBBGhFDAAAAAASUVORK5CYII=);\n    background-size: 48px;\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    top: 11px;\n    left: 9px;\n    background-repeat: no-repeat;\n}\n\n    .vx-grid-related .icon.icon-down.white, .vx-grid-related .icon.icon-up.white {\n        height: 24px;\n        top: 1px;\n        background-position-x: -28px;\n        width: 24px;\n        position: relative;\n    }\n\n    .vx-grid-related .icon.icon-refresh {\n        background-position-y: -57px;\n    }\n\n    .vx-grid-related .icon.icon-revert {\n        background-position-y: -715px;\n    }\n\n    .vx-grid-related .icon.icon-clearselection {\n        background-position-y: -114px;\n    }\n\n    .vx-grid-related .icon.icon-openwith {\n        background-position-y: -143px;\n    }\n\n    .vx-grid-related .icon.icon-more {\n        background-position-y: -85px;\n    }\n\n    .vx-grid-related .icon.icon-close {\n        background-position-y: -372px;\n    }\n\n    .vx-grid-related .icon.icon-repair {\n        background-position-y: -28px;\n    }\n\n    .vx-grid-related .icon.icon-edit {\n        background-position-y: 0;\n    }\n\n    .vx-grid-related .icon.icon-up {\n        background-position-y: -342px;\n    }\n\n        .vx-grid-related .icon.icon-up.white {\n            left: -4px;\n        }\n\n    .vx-grid-related .icon.icon-down {\n        background-position-y: -572px;\n    }\n\n        .vx-grid-related .icon.icon-down.white {\n            left: -5px;\n        }\n\n    .vx-grid-related .icon.icon-right {\n        background-position-y: -434px;\n    }\n\n    .vx-grid-related .icon.icon-left {\n        background-position-y: -463px;\n    }\n\n    .vx-grid-related .icon.icon-unpin {\n        background-position-y: -486px;\n    }\n\n        .vx-grid-related .icon.icon-unpin.red {\n            background-position-x: -28px;\n            height: 30px;\n        }\n\n    .vx-grid-related .icon.icon-ScrollChevronUpLegacy {\n        background-position-y: -231px;\n    }\n\n        .vx-grid-related .icon.icon-ScrollChevronUpLegacy.white {\n            background-position-x: -28px;\n            width: 24px;\n            height: 24px;\n            position: relative;\n            top: 8px;\n            left: -5px;\n        }\n\n    .vx-grid-related .icon.icon-ScrollChevronDownLegacy {\n        background-position-y: -257px;\n    }\n\n        .vx-grid-related .icon.icon-ScrollChevronDownLegacy.white {\n            background-position-x: -28px;\n            width: 24px;\n            height: 24px;\n            position: relative;\n            top: 8px;\n            left: -5px;\n        }\n\n    .vx-grid-related .icon.icon-filter {\n        background-position-y: -684px;\n    }\n\n        .vx-grid-related .icon.icon-filter.white {\n            background-position-x: -28px;\n            width: 24px;\n            height: 24px;\n            position: relative;\n            top: 4px;\n            left: -4px;\n        }\n\n    .vx-grid-related .icon.icon-blockedLegacy.red, .vx-grid-related .icon.icon-trim.red {\n        background-position-x: -28px;\n        height: 30px;\n    }\n\n    .vx-grid-related .icon.icon-trash {\n        background-position-y: -658px;\n    }\n\n    .vx-grid-related .icon.icon-search {\n        background-position-y: -200px;\n    }\n\n    .vx-grid-related .icon.icon-trim {\n        background-position-y: -513px;\n    }\n\n    .vx-grid-related .icon.icon-blockedLegacy {\n        background-position-y: -400px;\n    }\n\n    .vx-grid-related .icon.icon-previous {\n        background-position-y: -289px;\n    }\n\n    .vx-grid-related .icon.icon-next {\n        background-position-y: -318px;\n    }\n\n    .vx-grid-related .icon.icon-save {\n        background-position-y: -627px;\n    }\n\n    .vx-grid-related .icon.icon-add {\n        background-position-y: -173px;\n    }\n\n.vx-grid-related .vxTable .vxBody .vx-row-select {\n    text-align: center;\n}\n\n    .vx-grid-related .vxTable .vxBody .vx-row-select input[type=checkbox] {\n        cursor: pointer;\n        outline-color: transparent;\n        outline-offset: 5px;\n        outline-style: dotted;\n        outline-width: thin;\n    }\n\n        .vx-grid-related .vxTable .vxBody .vx-row-select input[type=checkbox]:active, .vx-grid-related .vxTable .vxBody .vx-row-select input[type=checkbox]:focus {\n            outline-color: #000;\n            outline-offset: 5px;\n            outline-style: dotted;\n            outline-width: thin;\n        }\n\n.vx-grid-related .vxTable .vxHead .vx-row-select {\n    text-align: center;\n}\n\n    .vx-grid-related .vxTable .vxHead .vx-row-select input[type=checkbox] {\n        cursor: pointer;\n        outline-color: transparent;\n        outline-offset: 5px;\n        outline-style: dotted;\n        outline-width: thin;\n    }\n\n        .vx-grid-related .vxTable .vxHead .vx-row-select input[type=checkbox]:active, .vx-grid-related .vxTable .vxHead .vx-row-select input[type=checkbox]:focus {\n            outline-color: #fff;\n            outline-offset: 5px;\n            outline-style: dotted;\n            outline-width: thin;\n        }\n\n.vx-grid-related .vxTable .vxHead .vxHeadRow th.ddEnabled {\n    padding: 0;\n}\n\n.vx-grid-related .vxTable .vxHead th {\n    font-size: medium;\n    font-family: inherit;\n    font-weight: 400;\n    text-transform: capitalize;\n    color: #fff;\n}\n\n.vx-grid-related .vxTable .vxBody tr.vxBodyRow.vs-repeat-repeated-element:last-of-type {\n    margin-bottom: 15px;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow.vs-repeat-repeated-element {\n    top: 0 !important;\n    position: relative !important;\n    height: 48px;\n    max-height: 48px;\n    overflow: hidden;\n}\n\n    .vx-grid-related .vxTable .vxBody .vxBodyRow.vs-repeat-repeated-element td {\n        height: 48px;\n        overflow: hidden;\n        border: 1px solid #E0E0E0;\n    }\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow.inProgress {\n    pointer-events: none;\n    opacity: .65;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow.vxRowSelected .vxBodyRowCell {\n    background: #f0f7fc;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.rowSelectionCell {\n    border-left: 5px solid #fff;\n    text-align: center;\n    padding: 0;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow.vxRowSelected .vxBodyRowCell.rowSelectionCell {\n    border-left: 5px solid #006ebd;\n}\n\n.vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.groupCell {\n    background: #f0f0f0;\n    border-top: 3px solid #909090;\n}\n\n    .vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.groupCell .first {\n        font-size: small;\n        text-transform: uppercase;\n    }\n\n    .vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.groupCell .colname {\n        font-weight: 600;\n        margin-left: 15px;\n    }\n\n.vx-grid-related .vxTable .vxHead th .dropdown {\n    line-height: 48px;\n}\n\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu {\n        position: absolute;\n        border-radius: 0;\n        background-color: #23527c;\n        padding: 0;\n        margin: -1px 0 0;\n        max-height: 50vh;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        min-width: 300px;\n        width: 100%;\n    }\n\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle {\n        background: 0 0;\n        color: #fff;\n        border: none;\n        width: 100%;\n        text-align: left;\n        margin: 0;\n        padding: 0 15px;\n        line-height: 48px;\n        height: 48px;\n        box-shadow: none;\n        border-radius: 0;\n        font-family: inherit;\n        font-weight: 300;\n        font-size: 16px;\n        text-shadow: none;\n        vertical-align: top;\n    }\n\n        .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle:active, .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle:focus {\n            outline-color: #fff;\n            outline-style: dotted;\n            outline-offset: -5px;\n            outline-width: thin;\n        }\n\n        .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle[disabled] {\n            opacity: 1;\n            cursor: default;\n        }\n\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.loader {\n        padding: 15px;\n        width: 100%;\n    }\n\n        .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.loader img.dropDownLoader {\n            display: block;\n            margin: 0 auto;\n            width: 30px;\n            height: 30px;\n        }\n\n    .vx-grid-related .vxTable .vxHead th .dropdown.open .dropdown-toggle {\n        background: #23527c;\n    }\n\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle span.ddCaret {\n        width: 10px;\n        display: inline-block;\n    }\n\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle.loading span.ddCaret {\n        display: none;\n    }\n\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle span.colTitle {\n        font-family: inherit;\n        font-weight: 400;\n        display: inline-block;\n        max-width: calc(100% - 25px);\n        margin-right: 10px;\n        vertical-align: top;\n        -ms-text-overflow: ellipsis;\n        text-overflow: ellipsis;\n        overflow-x: hidden;\n    }\n\n.vx-grid-related .vxTable .vxHead th:last-child .dropdown ul.dropdown-menu {\n    right: -1px;\n    left: auto;\n}\n\n.vx-grid-related .vxTable .vxHead th span.noDdTitle {\n    font-family: inherit;\n    font-weight: 400;\n    width: 100%;\n    vertical-align: top;\n    -ms-text-overflow: ellipsis;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    display: block;\n    padding-left: 15px;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li {\n    padding: 14px 15px;\n    text-align: left;\n    margin: 0;\n    line-height: normal;\n    font-family: inherit;\n    font-weight: 400;\n    font-size: 16px;\n    width: 100%;\n    white-space: normal;\n    -ms-word-break: break-all;\n    word-break: break-all;\n    color:#fff;\n}\n\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter input[type=checkbox] {\n    margin-right: 15px;\n    vertical-align: top;\n    outline-color: #fff;\n}\n\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter label {\n    font-family: inherit;\n    font-weight: 400;\n    font-size: medium;\n    width: calc(100% - 40px);\n    -ms-word-break: break-all;\n    word-break: break-all;\n    margin-bottom: 0;\n    text-transform: none;\n}\n\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search] {\n    line-height: 36px;\n    height: 36px;\n    padding: 0 10px;\n    font-style: italic;\n    font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;\n    width: calc(100% - 38px);\n    color: rgba(255,255,255,.8);\n    background: 0 0;\n    border: 1px solid rgba(255,255,255,.6);\n    will-change: auto;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n}\n\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:active, .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:focus {\n        font-style: normal;\n        color: #fff;\n    }\n\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]::-webkit-input-placeholder {\n        color: rgba(255,255,255,.8);\n    }\n\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]::-moz-placeholder {\n        color: rgba(255,255,255,.8);\n    }\n\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:-ms-input-placeholder {\n        color: rgba(255,255,255,.8);\n    }\n\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:-moz-placeholder {\n        color: rgba(255,255,255,.8);\n    }\n\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search .icon-container.filter-activator {\n    width: 36px;\n    height: 36px;\n    line-height: 36px;\n    display: inline-block;\n    margin: 0;\n    color: #fff;\n    border: 1px solid rgba(255,255,255,.6);\n    float: right;\n}\n\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filterClear.disabled {\n    opacity: .6;\n    filter: alpha(opacity=60);\n    cursor: none;\n    pointer-events: none;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filter-toggle, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter, .vx-grid-related .vxTableSettings.columns .colItem:not(.locked) {\n    cursor: pointer;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li:hover {\n    background: #000;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li a {\n    color: #fff;\n    padding: 0;\n}\n\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li a:focus, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li a:hover {\n        background: 0 0;\n    }\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter .sortIndicator {\n    float: right;\n    font-size: small;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filterCheckBox, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filterClear .indicator, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.hider .hideIndicator {\n    float: left;\n    position: relative;\n    margin-right: 15px;\n    top: -2px;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting .sortIndicator {\n    display: inline-block;\n    color: #fff;\n}\n\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting .sortIndicator.desc {\n        -webkit-transform: rotate(180deg);\n        transform: rotate(180deg);\n    }\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.grouper .groupIndicator, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.grouper.grouped .group, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.grouper:not(.grouped) .ungroup, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting.asc .sortIndicator.desc, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting:not(.asc) .sortIndicator.asc {\n    display: none;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filterCheckBox.indicator {\n    color: transparent;\n    border: 1px solid #fff;\n    padding: 0;\n    font-size: small;\n}\n\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filterCheckBox.indicator.checked {\n        color: #fff;\n    }\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter span.filterItemTitle {\n    margin: 0 10px 0 0;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filterClear.disabled a {\n    color: #909090;\n}\n\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.hider .hideIndicator .strikethrough:after {\n    content: \"\\2571\";\n    display: block;\n    color: #fff;\n    font-weight: 800;\n    font-size: 18px;\n    left: 4px;\n    top: -1px;\n    position: absolute;\n}\n\n.vx-grid-related .vxTableSettings {\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    opacity: 1;\n    filter: alpha(opacity=100);\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\n}\n\n    .vx-grid-related .vxTableSettings .vxSettingsHead {\n        height: 60px;\n        width: 100%;\n        font-family: inherit;\n        border-bottom: 1px dotted #A0A0A0;\n    }\n\n    .vx-grid-related .vxTableSettings .vxSettingsFooter {\n        height: 78px;\n        width: 100%;\n        font-family: inherit;\n        border-top: 1px dotted #A0A0A0;\n    }\n\n    .vx-grid-related .vxTableSettings .vxSettingsBody {\n        height: calc(100% - 125px);\n        padding: 0 0 15px;\n        width: 100%;\n        font-family: inherit;\n        overflow-x: auto;\n    }\n\n    .vx-grid-related .vxTableSettings .columns p.help, .vx-grid-related .vxTableSettings .columns p.helpText, .vx-grid-related .vxTableSettings p.title {\n        font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\n        font-weight: 400;\n    }\n\n    .vx-grid-related .vxTableSettings .vxSettingsBody .vxSettingsBodyContainer {\n        /*min-width: 1000px;*/\n    }\n\n    .vx-grid-related .vxTableSettings .orderChanger {\n        height: 100%;\n    }\n\n    .vx-grid-related .vxTableSettings .columns {\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        height: calc(100% - 15px);\n    }\n\n        .vx-grid-related .vxTableSettings .columns p.help {\n            color: #0073c6;\n            font-size: large;\n        }\n\n        .vx-grid-related .vxTableSettings .columns p.helpText {\n            color: #303030;\n            font-size: small;\n        }\n\n    .vx-grid-related .vxTableSettings .orderChanger .columns {\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        height: calc(100% - 15px);\n    }\n\n    .vx-grid-related .vxTableSettings .columns .colItem:active, .vx-grid-related .vxTableSettings .columns .colItem:focus {\n        outline: #303030 dotted 1px;\n        outline-offset: -5px;\n    }\n\n    .vx-grid-related .vxTableSettings .columns .colItem.selected:active, .vx-grid-related .vxTableSettings .columns .colItem.selected:focus {\n        outline: #fff dotted 1px;\n        outline-offset: -5px;\n    }\n\n    .vx-grid-related .vxTableSettings .visChangers .visChangersContainer {\n        margin: 15px 0 0;\n        padding: calc(.5 * (90vh - 300px)) 0;\n    }\n\n.vx-grid-related .visChangers .visChangersContainer .visChangersItem .icon-container {\n    display: block;\n    margin: 0 auto 15px;\n}\n\n.vx-grid-related .vxTableSettings button.vsTableButton {\n    padding: 10px 15px;\n    text-align: center;\n    min-width: 100px;\n    font-family: inherit;\n    font-size: medium;\n    background: 0 0;\n    border: 2px solid #006ebd;\n    border-radius: 0;\n    color: #006ebd;\n    cursor: pointer;\n    margin: 15px 15px 0 0;\n}\n\n    .vx-grid-related .vxTableSettings button.vsTableButton.active {\n        background: #006ebd;\n        color: #fff;\n    }\n\n    .vx-grid-related .vxTableSettings button.vsTableButton.diasbled, .vx-grid-related .vxTableSettings button.vsTableButton[diasbled] {\n        color: #000;\n        border: 2px solid #000;\n        opacity: .5;\n        filter: alpha(opacity=50);\n        cursor: none;\n    }\n\n.vx-grid-related .vxTableSettings p.title {\n    color: #006ebd;\n    width: calc(100% - 52px);\n    display: inline-block;\n    line-height: 60px;\n    font-size: large;\n    margin: 0;\n    padding: 0;\n}\n\n.vx-grid-related .vxSettingsBody .columns .colItem input.inputStyle.colInput, .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem p.colName {\n    font-size: medium;\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\n    font-weight: 400;\n}\n\n.vx-grid-related .vxTableSettings .vxSettingsHead .icon-container {\n    display: inline-block;\n    border: none;\n    margin-left: 0;\n}\n\n.vx-grid-related .vxSettingsBody .columns {\n    margin-top: 15px;\n    padding: 15px;\n    border: 1px dotted #A0A0A0;\n}\n\n    .vx-grid-related .vxSettingsBody .columns .colItem {\n        padding: 6px 0 4px;\n        background: 0 0;\n        border-bottom: 1px dotted #D0D0D0;\n        border-left: 3px solid #fff;\n    }\n\n        .vx-grid-related .vxSettingsBody .columns .colItem.locked {\n            background-color: #f8f1f1;\n            border-left: 3px solid #f8f1f1;\n        }\n\n        .vx-grid-related .vxSettingsBody .columns .colItem.selected {\n            background-color: #006ebd;\n            border-left: 3px solid #006ebd;\n        }\n\n            .vx-grid-related .vxSettingsBody .columns .colItem.selected p.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem.selected p.colLabel .icon, .vx-grid-related .vxSettingsBody .columns .colItem.selected p.colName {\n                color: #fff;\n            }\n\n        .vx-grid-related .vxSettingsBody .columns .colItem p.colName {\n            color: #303030;\n            margin: 0;\n            line-height: 40px;\n            -ms-word-break: break-all;\n            word-break: break-all;\n        }\n\n        .vx-grid-related .vxSettingsBody .columns .colItem input.inputStyle.colInput {\n            border: 1px solid #A0A0A0;\n            border-radius: 0;\n            display: inline-block;\n            width: 75px;\n            text-align: center;\n            margin: 0 0 0 5px;\n            height: 40px;\n        }\n\n            .vx-grid-related .vxSettingsBody .columns .colItem input.inputStyle.colInput[disabled] {\n                background: 0 0;\n            }\n\n        .vx-grid-related .vxSettingsBody .columns .colItem.selected input.inputStyle.colInput {\n            background: 0 0;\n            border-color: #fff;\n            color: #fff;\n        }\n\n        .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel {\n            color: #303030;\n            line-height: 40px;\n            display: inline-block;\n            margin: 0;\n        }\n\n            .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel.xl, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel.xl {\n                font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\n                font-size: large;\n                font-weight: 400;\n                color: #303030;\n                line-height: 40px;\n                display: inline-block;\n                margin: 0;\n            }\n\n            .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel .icon, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel .icon {\n                color: #b00;\n            }\n\n        .vx-grid-related .vxSettingsBody .columns .colItem input.colCheckbox {\n            position: relative;\n            top: 2px;\n            margin-left: 5px;\n        }\n\n.vx-grid-related .vxSettingsBody .orderMovers {\n    width: 150px;\n    display: block;\n    margin: 0 auto;\n}\n\n    .vx-grid-related .vxSettingsBody .orderMovers .icon-container {\n        display: inline-block;\n        margin-left: 15px;\n        border-color: #303030;\n        color: #303030;\n        width: 40px;\n        line-height: 40px;\n        margin-top: 15px;\n    }\n\n        .vx-grid-related .vxSettingsBody .orderMovers .icon-container.disabled {\n            color: #909090;\n            background: #f0f0f0;\n            border-color: #A0A0A0;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            cursor: none;\n        }\n\n.vx-grid-related .vxTablePagination .icon-container.dirNumContainer, .vx-grid-related .vxTablePagination .icon-container.pageNumContainer {\n    border: none;\n    vertical-align: bottom;\n}\n\n.vx-grid-related .vxTableSettings .vxSettingsFooter .infoBtns {\n    display: inline-block;\n    padding: 10px 15px;\n    font-family: inherit;\n    font-size: medium;\n    position: relative;\n    top: 10px;\n    color: #303030;\n}\n\n    .vx-grid-related .vxTableSettings .vxSettingsFooter .infoBtns .icon {\n        font-size: medium;\n        color: #b00;\n        top: 0;\n        left: 0;\n        height: 24px;\n        width: 24px;\n    }\n\n    .vx-grid-related .vxTableSettings .vxSettingsFooter .infoBtns .infoLabel {\n        font-family: inherit;\n        font-size: medium;\n        margin-left: 5px;\n        margin-right: 20px;\n        color: #303030;\n        vertical-align: top;\n    }\n\n.vx-grid-related .vsTableStats p.statTitle, .vx-grid-related .vsTableStats p.statValue, .vx-grid-related .vxTablePagination .icon-container.pageNumContainer i.icon {\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\n    font-weight: 400;\n}\n\n.vx-grid-related .vsTableStats {\n    padding: 0;\n    max-width: 350px;\n}\n\n    .vx-grid-related .vsTableStats p {\n        display: inline;\n        margin: 0;\n    }\n\n        .vx-grid-related .vsTableStats p.statTitle {\n            color: #303030;\n            font-size: medium;\n            text-transform: uppercase;\n            line-height: 40px;\n            margin: 6px 5px 4px;\n        }\n\n        .vx-grid-related .vsTableStats p.statValue {\n            color: #0073c6;\n            font-size: medium;\n            text-transform: uppercase;\n            line-height: 40px;\n            margin: 6px 15px 4px 0;\n        }\n\n            .vx-grid-related .vsTableStats p.statTitle.disabled, .vx-grid-related .vsTableStats p.statValue.disabled {\n                opacity: .25;\n                filter: alpha(opacity=25);\n                color: #000;\n            }\n\n.vx-grid-related .vxTablePagination {\n    height: 48px;\n    white-space: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n    .vx-grid-related .vxTablePagination .icon-container {\n        display: inline-block;\n        margin-right: 2px;\n        margin-left: 0;\n        padding: 0;\n        height: 30px;\n        width: 30px;\n        margin-top: 6px;\n    }\n\n        .vx-grid-related .vxTablePagination .icon-container.dirNumContainer .icon {\n            width: 22px;\n            height: 22px;\n            top: 8px;\n            left: 1px;\n        }\n\n        .vx-grid-related .vxTablePagination .icon-container.pageNumContainer i.icon {\n            font-size: small;\n            vertical-align: bottom;\n            background: 0 0;\n            top: 0;\n            left: 0;\n            width: 30px;\n            height: 30px;\n            line-height: 30px;\n        }\n\n        .vx-grid-related .vxTablePagination .icon-container.pageNumContainer.active {\n            background: #0073c6;\n            color: #fff;\n        }\n\n.vxH100 {\n    height: 100%;\n    overflow-x: hidden;\n}\n\n.vx-grid-inner {\n    width: 100%;\n    position: relative;\n}\n\n.marg0 {\n    margin: 0 !important;\n}\n\n.pad0 {\n    padding: 0 !important;\n}\n\n.padA0L10 {\n    padding: 0 0 0 10px !important;\n}\n\n.padA0L5 {\n    padding: 0 0 0 5px !important;\n}\n\n.padA0LR5 {\n    padding: 0 5px !important;\n}\n\n.padA0L10R0 {\n    padding: 0 0 0 10px !important;\n}\n\nimg.vxGridAttendReqd {\n    width: 18px;\n    display: block;\n    margin: 0 auto;\n}\n\n.vx-grid-related .pull-left{\n    float: left !important;\n}\n\n.vx-grid-related .pull-right{\n    float: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n    <div class=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n    <button class=\"btn btn-primary\" (click)=\"loadRows()\">LoadRows</button>\n    <button class=\"btn btn-primary\" (click)=\"log()\">Log</button>\n    <div style=\"display: block; width:100vw; height: 94vh; margin: 0 auto; overflow:hidden; padding: 0 15px;\">\n        <vx-grid [(config)]=\"gridConfig\"></vx-grid>\n    </div>\n</div>"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div class=\"vxH100 vx-grid-inner vx-grid-related \">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"col vsTableStats pull-left zeroPaddingLeft\" *ngIf=\"baseConfig.showGridStats\">\n                <p class=\"statTitle\">All</p>\n                <p class=\"statValue\">{{baseConfig.vxFilteredData.length | vxNumberFixedLen:2}}</p>\n                <p class=\"statTitle\" [class.disabled]=\"multiBoxFilters.length == 0\">Filtered</p>\n                <p class=\"statValue\" [class.disabled]=\"multiBoxFilters.length == 0\">\n                    <span *ngIf=\"multiBoxFilters.length > 0\">\n                                <span>{{baseConfig.vxFilteredData.length | vxNumberFixedLen:2}}</span>\n                    </span>\n                    <span *ngIf=\"multiBoxFilters.length == 0\">00</span>\n                </p>\n                <p class=\"statTitle\" [class.disabled]=\"baseSettings.multiSelected.length == 0\">Selected</p>\n                <p class=\"statValue\" [class.disabled]=\"baseSettings.multiSelected.length == 0\">{{baseSettings.multiSelected.length | vxNumberFixedLen:2}}</p>\n            </div>\n            <div class=\"col vxTableOperations pull-right zeroPaddingRight\" *ngIf=\"baseConfig.showGridOptions\">\n                <div class=\"search-container pull-left input-group\" *ngIf=\"false\">\n                    <input class=\"search form-control\" type=\"search\" [disabled]=\"baseConfig.vxFilteredData.length == 0 || true\" [(ngModel)]=\"baseSettings.searchToken\"\n                        placeholder=\"Search\" (keyup)=\"keyUpSearch($event)\" aria-label=\"search table\" />\n                </div>\n                <div class=\"icon-container pull-left\" role=\"button\" tabindex=\"0\" *ngIf=\"baseConfig.inlineEditingEnabled == true && baseConfig.inlineAddRowEnabled == true && false\"\n                    (click)=\"addNewRow()\" aria-label=\"add new row\">\n                    <i class=\"icon icon-add\"></i>\n                </div>\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"editInProgressCount() == 0 ? -1 : 0\" *ngIf=\"baseConfig.inlineEditingEnabled == true && editInProgressCount() > 0 && false\"\n                    [class.disabled]=\"editInProgressCount() == 0\" (click)=\"revertEdits()\" aria-label=\"revert edits\">\n                    <i class=\"icon icon-revert\"></i>\n                </div>\n                <div class=\"icon-container pull-left\" role=\"button\" tabindex=\"0\" *ngIf=\"baseSettings.multiSelected.length > 0\" (click)=\"deleteRows()\"\n                    aria-label=\"delete rows\">\n                    <i class=\"icon icon-trash\"></i>\n                </div>\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"baseSettings.selectAllEnabled == false && baseConfig.multiSelectionEnabled == true ? -1 : 0\"\n                    [class.disabled]=\"(baseSettings.selectAllEnabled == false && baseConfig.multiSelectionEnabled == true) || baseConfig.vxFilteredData.length == 0\"\n                    (click)=\"selectAllFiltered()\" aria-label=\"select all filtered rows\">\n                    <i class=\"icon icon-openwith\"></i>\n                </div>\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"baseSettings.multiSelected.length == 0 ? -1 : 0\" [class.disabled]=\"baseSettings.multiSelected.length == 0\"\n                    (click)=\"clearSelection()\" aria-label=\"clear any row selections\">\n                    <i class=\"icon icon-clearselection\"></i>\n                </div>\n                <div class=\"icon-container pull-left\" [class.active]=\"baseSettings.revealWrapRowData\" (click)=\"revealWrapToggle()\" [class.disabled]=\"baseConfig.vxFilteredData.length == 0\"\n                    aria-label=\"toggle row content reveal\">\n                    <i class=\"icon icon-more\"></i>\n                </div>\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"multiBoxFilters.length == 0 ? -1 : 0\" [class.disabled]=\"multiBoxFilters.length == 0\"\n                    (click)=\"clearFilters()\" aria-label=\"clear any filters applied\">\n                    <i class=\"icon icon-refresh\"></i>\n                </div>\n                <div class=\"icon-container pull-left\" [class.active]=\"baseSettings.menu\" (click)=\"openManageColumns()\" aria-label=\"open manage columns modal\">\n                    <i class=\"icon icon-repair\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 vxTableScrollContainer\" [attr.id]=\"'_vxOverallScroll' + baseConfig.id\" [class.attrPaneOpen]=\"baseConfig.showGridStats || baseConfig.showGridOptions\"\n        [class.pageEnabled]=\"baseSettings.vxPageEnabled\">\n        <div class=\"col-12 vxTableContainer ms-datatable ang-dt zeroPadding scrollDupHeader scrollDupHeaderAdded\" [style.minWidth]=\"baseSettings.netWidth + 'px'\">\n            <div class='row marg0' tabindex=\"0\">\n                <div class=\"col-12 vxTableHolder pad0\">\n                    <table class=\"vxTable\" role=\"presentation\">\n                        <thead class=\"vxHead\">\n                            <tr class=\"vxHeadRow\">\n                                <ng-container *ngFor=\"let head of baseConfig.headers\">\n                                    <th class=\"vxHeadRowCell\" tabindex=\"-1\" [style.width]=\"head.width + 'px'\" *ngIf=\"head.hidden == false\" [attr.title]=\"head.columnName\"\n                                        [class.ddEnabled]=\"baseSettings.dropdDownEnabled[head.id] == true\" [attr.id]=\"baseConfig.id + '_vxHeadSt_' + head.id\">\n                                        <div *ngIf=\"head.renderHeadDefn == true && head.id == 'checkbox' && baseConfig.allRowsSelectionEnabled\">\n                                            <div class=\"vx-row-select\">\n                                                <input class=\"vx-row-select-toggle\" type=\"checkbox\" [disabled]=\"baseConfig.noData == true && baseConfig.allRowSelectionDisabled == true\"\n                                                    [(ngModel)]=\"baseSettings.allRowSelected\" (change)=\"allRowSelectionChanged()\"\n                                                    aria-label=\"Select All Rows \" />\n                                            </div>\n                                        </div>\n                                        <span *ngIf=\"head.renderHeadDefn != true && baseSettings.dropdDownEnabled[head.id] == false\" class=\"colTitle\">{{head.columnName}}</span>\n                                        <div ngbDropdown *ngIf=\"head.renderHeadDefn != true && baseSettings.dropdDownEnabled[head.id] == true\" class=\"dropdown\" (openChange)=\"head.openChangeHeader($event)\">\n                                            <button class=\"btn btn-outline-primary\" [attr.id]=\"baseConfig.id + '_ddMenu_' + head.id\" [attr.tabindex]=\"baseConfig.noData == false ? head.headTabIndex : -1\"\n                                                [disabled]=\"baseConfig.data.length == 0\" ngbDropdownToggle>\n                                                <span class=\"colTitle\">{{head.columnName}}</span>\n                                            </button>\n                                            <ul class=\"dropdown-menu\" [attr.ariaLabelledby]=\"baseConfig.id + '_ddMenu_' + head.id\">\n                                                <li class=\"dropdown-item\" tabindex=\"-1\" class=\"loader\" *ngIf=\"baseSettings.dropdDownLoaded[head.id] == false\">\n                                                    <img class=\"dropDownLoader\" [src]=\"baseConfig.loaderGifSrc\" alt=\"dropdown addition in progress\" />\n                                                </li>\n                                                <li class=\"dropdown-item\" tabindex=\"0\" class=\"sorter\" *ngIf=\"baseSettings.dropdDownLoaded[head.id] == true && baseSettings.dropDownSort[head.id] == true\"\n                                                    (click)=\"sortClick(head)\" [attr.id]=\"baseConfig.id + '_' + head.id + '_sort'\">\n                                                    <span class=\"sortIndicator\" [hidden]=\"!(baseSettings.reverse == false && baseSettings.predicate == head.id)\"><i class=\"icon icon-up white\"></i></span>\n                                                    <span class=\"sortIndicator\" [hidden]=\"!(baseConfig.reverseSortDirection == true && baseConfig.sortPredicate == head.id)\"><i class=\"icon icon-down white\"></i></span>Sort\n                                                    <span class=\"offscreen\"> Press Enter or spacebar to sort on {{head.columnName}} column</span>\n                                                </li>\n                                                <li class=\"filterClear dropdown-item\" *ngIf=\"baseSettings.dropdDownLoaded[head.id] == true && baseSettings.dropDownFilters[head.id] == true && baseSettings.colFilterPairs[head.id].length > 0\"\n                                                    [class.disabled]=\"baseSettings.colFiltersActivated[head.id] == false && baseSettings.filterSearchToken[head.id] == ''\"\n                                                    (click)=\"filterClearClick(head)\" [attr.id]=\"baseConfig.id + '_' + head.id + '_clearfilters'\"\n                                                    [attr.ariaHidden]=\"(baseSettings.colFiltersActivated[head.id] == false && baseSettings.filterSearchToken[head.id] == '') ? true : false\">\n                                                    <span class=\"indicator\"><i class=\"icon icon-filter white\"></i></span>\n                                                    <span class=\"offscreen\">press enter or spacebar to</span> Clear All Filters\n                                                    <span class=\"offscreen\"> on {{head.columnName}} column</span>\n                                                </li>\n                                                <li class=\"filter-search dropdown-item\" *ngIf=\"baseSettings.dropdDownLoaded[head.id] == true && baseSettings.dropDownFilters[head.id] == true && head.ddFiltersWithSearch == true\">\n                                                    <input class=\"search-input\" tabindex=\"0\" type=\"search\" placeholder=\"Search In Filters\" [attr.ariaLabel]=\"'search for filters in column' + head.columnName\"\n                                                        (click)=\"preventCollapse($event)\" [attr.id]=\"head.id + '_searchfilters_' + baseConfig.id\"\n                                                    />\n                                                    <div class=\"icon-container filter-activator\" (click)=\"filterAssignVar($event, head)\" [attr.id]=\"head.id + '_invokesearchfilters_' + baseConfig.id\"\n                                                        [attr.ariaLabel]=\"'invoke column filter action for column ' + head.columnName\">\n                                                        <i class=\"icon icon-search\"></i>\n                                                    </div>\n                                                </li>\n                                                <ng-container *ngFor=\"let filter of (baseSettings.colFilterPairs[head.id] | vxFilterArrayWithToken: baseSettings.filterSearchToken[head.id])\">\n                                                    <li class=\"filter dropdown-item\" *ngIf=\"baseSettings.dropdDownLoaded[head.id] == true && baseSettings.dropDownFilters[head.id] == true\">\n                                                        <input class=\"filter-toggle\" tabindex=\"0\" type=\"checkbox\" [(ngModel)]=\"baseSettings.colFiltersStatus[filter.key]\" (change)=\"filterClick(head, filter)\"\n                                                            [attr.id]=\"baseConfig.id + '_' + head.id + '_filter_' + index\" />\n                                                        <label class=\"filterItemTitle\" [attr.for]=\"baseConfig.id + '_' + head.id + '_filter_' + index\"><span><span class=\"offscreen\">{{head.columnName}} filter </span>                                                            {{filter.name}}</span>\n                                                            </label>\n                                                    </li>\n                                                </ng-container>\n                                            </ul>\n                                        </div>\n                                    </th>\n                                </ng-container>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 vxTableContainer ms-datatable ang-dt zeroPadding scrollTableContainer\" [style.minWidth]=\"baseSettings.netWidth + 'px'\"\n            [attr.id]=\"'_vxScrollContainer' + baseConfig.id\" style=\"margin-top: 0;\">\n            <div class='row marg0'>\n                <div class=\"col-12 vxTableHolder pad0\">\n                    <table class=\"vxTable\">\n                        <caption class=\"offscreen\"></caption>\n                        <thead class=\"vxHead\">\n                            <tr class=\"vxHeadRow\">\n                                <ng-container *ngFor=\"let head of baseConfig.headers\">\n                                    <th class=\"vxHeadRowCell\" tabindex=\"-1\" [style.width]=\"head.width + 'px'\" *ngIf=\"head.hidden == false\">\n                                        <span class=\"offscreen\">{{head.columnName}}</span>\n                                    </th>\n                                </ng-container>\n                            </tr>\n                        </thead>\n                        <tbody class=\"vxBody\" [class.revealWrap]=\"baseSettings.revealWrapRowData\" [attr.id]=\"'_vxHybrid' + baseConfig.id\"></tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-12 vxTablePagination pad0\" *ngIf=\"baseSettings.vxPageEnabled\">\n        <div class=\"icon-container dirNumContainer\" (click)=\"baseSettings.activePage != 0 && activatePage(baseSettings.activePage - 1)\" [class.disabled]=\"baseSettings.activePage == 0\">\n            <i class=\"icon icon-previous\" aria-hidden=\"true\"></i><span class=\"offscreen\">Previous Page</span>\n        </div>\n        <div class=\"icon-container dirNumContainer\" (click)=\"(baseSettings.activePage != baseSettings.pages.length - 1) && activatePage(baseSettings.activePage + 1)\" [class.disabled]=\"baseSettings.activePage == baseSettings.pages.length - 1\">\n            <i class=\"icon icon-next\" aria-hidden=\"true\"></i><span class=\"offscreen\">Next Page</span>\n        </div>\n        <div class=\"icon-container pageNumContainer\" *ngFor=\"let pageNum of baseSettings.pages\" (click)=\"activatePage(pageNum)\" [class.active]=\"pageNum == baseSettings.activePage\">\n            <span class=\"offscreen\">Page </span><i class=\"icon\">{{pageNum + 1}}</i>\n        </div>\n    </div>\n    <div class=\"icon-container scrollAction up\" role=\"button\" tabindex=\"0\" (click)=\"justScrollTop()\" [class.pageEnabled]=\"baseSettings.vxPageEnabled\"\n        aria-label=\"Scroll Up\" [attr.id]=\"'scroll_up_' + baseConfig.id\" style=\"display:none;\">\n        <i class=\"icon icon-up\"></i>\n    </div>\n    <div class=\"icon-container scrollAction down\" role=\"button\" tabindex=\"0\" (click)=\"justScrollDown()\" [class.pageEnabled]=\"baseSettings.vxPageEnabled\"\n        aria-label=\"Scroll Down\" [attr.id]=\"'scroll_down_' + baseConfig.id\" style=\"display:none;\">\n        <i class=\"icon icon-up down\"></i>\n    </div>\n</div>"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body vx-grid-related \">\n    <div class=\"vxTableSettings\">\n        <div class=\"vxSettingsHead\">\n            <p role=\"heading\" aria-level=\"1\" class=\"title\">Manage Columns</p>\n            <div class=\"icon-container\" role=\"button\" tabindex=\"0\" (click)=\"cancelChangeInConfig()\" aria-label=\"Cancel Changes in Config\">\n                <i class=\"icon icon-close\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n        <div class=\"vxSettingsBody\">\n            <div class=\"col-12 zeroPadding vxH100 vxSettingsBodyContainer\">\n                <div class=\"row align-items-start\">\n                    <div class=\"col-3 vxH100 visHideRows\">\n                        <div class=\"row vxH100\">\n                            <div class=\"col-12 columns\">\n                                <p role=\"heading\" aria-level=\"2\" class=\"help\">Available Columns</p>\n                                <p class=\"helpText\">To Select a column to change column Visbility, use the up and down arrows</p>\n                                <ng-container *ngFor=\"let header of copyForWidthVisChange\">\n                                    <div class=\"col-12 colItem\" [attr.tabindex]=\"header.locked == false ? 0 : -1\" [class.locked]=\"header.locked\" [class.selected]=\"header.id == headerSelected?.id\"\n                                        (click)=\"selectHeader(header)\" *ngIf=\"header.hidden == true\" (keydown)=\"upDownKeyPressHandler($event)\">\n                                        <div class=\"row align-items-start\">\n                                            <div class=\"col-2 col-sm-2 col-md-1\">\n                                                <p class=\"colLabel xl\" *ngIf=\"header.visbilityLocked == true\">\n                                                    <i class=\"icon icon-blockedLegacy\" tooltip=\"Visbility Locked\"></i></p>\n                                            </div>\n                                            <p class=\"col-10 col-sm-10 col-md-10 colName\">{{header.columnName}}</p>\n                                            <span class=\"offscreen\" *ngIf=\"header.locked\"> Column locked for all chnages </span>\n                                            <span class=\"offscreen\" *ngIf=\"header.visbilityLocked == true\"> Column Visbility locked for changes </span>\n                                            <div class=\"clearfix\"></div>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-1 vxH100 visChangers\">\n                        <div class=\"col-12 visChangersContainer\">\n                            <div class=\"col-12 visChangersItem zeroPadding\">\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == false ? -1 : 0\"\n                                    [class.disabled]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == false\"\n                                    (click)=\"makeVisible(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Make Column' +  headerSelected?.columnName + 'Visible'\">\n                                    <i class=\"icon icon-right\"></i>\n                                </div>\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == true ? -1 : 0\"\n                                    [class.disableld]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == true\"\n                                    (click)=\"makeHidden(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Make Column' +  headerSelected?.columnName +  'Hidden'\">\n                                    <i class=\"icon icon-left\"></i>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-7 vxH100\">\n                        <div class=\"row orderChanger\">\n                            <div class=\"col-12 columns\">\n                                <p role=\"heading\" aria-level=\"2\" class=\"help\">Selected Columns</p>\n                                <p class=\"helpText\">To Select a column to change column order, use the up and down arrows</p>\n                                <ng-container *ngFor=\"let header of copyForWidthVisChange\">\n                                    <div class=\"col-12 colItem\" [class.locked]=\"header.locked\" [class.selected]=\"header.id == headerSelected?.id\" \n                                    *ngIf=\"header.hidden == false\">\n                                        <div class=\"row align-items-start\" style=\"padding: 0 15px;\">\n                                            <div class=\"col-12 col-sm-6 col-md-6 padA0L10R0\" [attr.tabindex]=\"header.locked == true || (header.locked == false && header.visbilityLocked == true && header.orderLocked == true) ? -1 : 0\"\n                                                (click)=\"selectHeader(header)\" (keydown)=\"upDownKeyPressHandler($event)\">\n                                                <div class=\"row align-items-start\">\n                                                    <div class=\"col-12 col-sm-6 col-md-6 padA0L10R0\">\n                                                        <div class=\"row align-items-start\" style=\"padding: 0 15px;\">\n                                                            <div class=\"col-4 pad0\">\n                                                                <p class=\"colLabel xl\" *ngIf=\"header.visbilityLocked == true\" aria-hidden=\"true\">\n                                                                    <span class=\"icon icon-blockedLegacy red\" tooltip=\"Visbility Locked\" aria-hidden=\"true\"></span>\n                                                                </p>\n                                                            </div>\n                                                            <div class=\"col-4 pad0\">\n                                                                <p class=\"colLabel xl\" *ngIf=\"header.orderLocked == true\" aria-hidden=\"true\">\n                                                                    <span class=\"icon icon-unpin red\" tooltip=\"Order Locked\"></span>\n                                                                </p>\n                                                            </div>\n                                                            <div class=\"col-4 pad0\">\n                                                                <p class=\"colLabel xl\" *ngIf=\"header.widthLocked == true\" aria-hidden=\"true\">\n                                                                    <span class=\"icon icon-trim red\" tooltip=\"Width Locked\"></span>\n                                                                </p>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\"col-12 col-sm-12 col-md-6 colName\">{{header.columnName}}</p>\n                                                    <span *ngIf=\"!(header.locked == true || (header.locked == false && header.visbilityLocked == true && header.orderLocked == true))\">\n                                                <span class=\"offscreen\" *ngIf=\"header.id == headerSelected?.id\"> column selected to unselect press spacebar or enter</span>\n                                                    <span class=\"offscreen\" *ngIf=\"header.id != headerSelected?.id\"> column press spacebar or enter to select column for changing visibility or order</span>\n                                                    </span>\n                                                    <span class=\"offscreen\" [hidden]=\"!header.locked\"> Column locked for all changes</span>\n                                                    <span class=\"offscreen\" *ngIf=\"header.visbilityLocked == true\"> Column visibility locked for changes</span>\n                                                    <span class=\"offscreen\" *ngIf=\"header.orderLocked == true\"> Column Order locked for changes</span>\n                                                    <span class=\"offscreen\" *ngIf=\"header.widthLocked == true\"> Column Width locked for changes</span>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-12 col-sm-6 col-md-6\">\n                                                <label class=\"colLabel\" [attr.for]=\"'_mc_' + header.id\">Width <span class=\"offscreen\"> for column {{header.columnName}} in approximate characters </span> <span aria-hidden=\"true\"> (in approx. char)</span></label>\n                                                <input class=\"inputStyle colInput\" [(ngModel)]=\"header.chars\" [disabled]=\"header.widthLocked\" (change)=\"widthChanged(header)\"\n                                                    [attr.id]=\"'_mc_' + header.id\" />\n                                            </div>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                </ng-container>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-1 vxH100 visChangers\">\n                        <div class=\"col-12 visChangersContainer\">\n                            <div class=\"col-12 visChangersItem zeroPadding\">\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null ? -1 : 0\"\n                                    [class.disabled]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null\"\n                                    (click)=\"swapAbove(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Move Column' + headerSelected?.columnName + 'Up'\">\n                                    <i class=\"icon icon-up\"></i>\n                                </div>\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null ? -1 : 0\"\n                                    [class.disabled]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null\"\n                                    (click)=\"swapBelow(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Move Column' + headerSelected?.columnName + 'Down'\">\n                                    <i class=\"icon icon-down\"></i>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"vxSettingsFooter\">\n            <button class=\"btn btn-primary vsTableButton active\" (click)=\"saveChangeInConfig()\">Save</button>\n            <button class=\"btn btn-primary vsTableButton\" (click)=\"cancelChangeInConfig()\">Cancel</button>\n            <div class=\"infoBtns\" aria-hidden=\"true\">\n                <span class=\"icon icon-blockedLegacy\"></span>\n                <span class=\"infoLabel\">Visbility Locked,</span>\n                <span class=\"icon icon-unpin\"></span>\n                <span class=\"infoLabel\">Order Locked,</span>\n                <span class=\"icon icon-trim\"></span>\n                <span class=\"infoLabel\">Width Locked</span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(464);


/***/ })

},[777]);
//# sourceMappingURL=main.bundle.js.map