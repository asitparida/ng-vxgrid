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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/app.component.js.map

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
        this.gridConfig.loadDataRows();
    };
    HomeComponent.prototype.log = function () {
        console.log(this.gridConfig.getVxCounts());
        console.log(this.gridConfig.getAppliedFilters());
        console.log(this.gridConfig.getFilteredDataSet());
        console.log(this.gridConfig.getSelectedRows());
        this.gridConfig.deselectRows(this.gridConfig.getSelectedRows());
        this.gridConfig.selectRows(['1']);
        //this.gridConfig.deselectAllRows();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.gridConfig.data = [];
        this.gridConfig.hybrid = true;
        this.gridConfig.sortPredicateFnPresent = false;
        this.gridConfig.latchExcess = 10;
        this.gridConfig.selectionEnabled = true;
        this.gridConfig.selectionAtMyRisk = true;
        this.gridConfig.multiSelectionEnabled = true;
        this.gridConfig.preserveSelectionOnFilters = true;
        this.gridConfig.allRowsSelectionEnabled = true;
        this.gridConfig.enableDropdownsInHeader = true;
        this.gridConfig.showGridOptions = true;
        this.gridConfig.showGridStats = true;
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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/home/home.component.js.map

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
        for (var i in args) {
            this[i] = args[i];
        }
    }
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
        this.latchExcess = 20;
        this.xsRowTitleTemplate = '<div class="xsRowTemplate">{{row[vxColSettings.primaryId]}}</div>';
        this.sortPredicate = '';
        this.ariaPrimary = '';
        this.onSelectionReturnCol = '';
        this.emptyFill = '<span>No records to display ...</span>';
        this.caption = 'sample vx grid table caption';
        this.loaderGifSrc = '/resource/loaderWhite36.GIF';
    }
    VxGridConfig.prototype.sortPredicateFn = function () { };
    ;
    return VxGridConfig;
}());
exports.VxGridConfig = VxGridConfig;
var VxGridConfigBase = (function (_super) {
    __extends(VxGridConfigBase, _super);
    function VxGridConfigBase() {
        _super.apply(this, arguments);
        this.noData = false;
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
    }
    return VxGridSettingsBase;
}());
exports.VxGridSettingsBase = VxGridSettingsBase;
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.config.js.map

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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.pipes.js.map

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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.settings.modal.js.map

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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/main.js.map

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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/app.module.js.map

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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/app.routing.js.map

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(404));
__export(__webpack_require__(587));
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/index.js.map

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
var count = 0;
var VxGridComponent = (function () {
    function VxGridComponent(el, datePipe, modalService) {
        this.el = el;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.rowHeight = 48;
        this.excess = 3;
        this.lastIndexCount = 0;
        this.lastScrollTop = 0;
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
        this.baseConfig = new vxgrid_config_1.VxGridConfigBase();
        this.uid = _.uniqueId('_vx_');
    }
    VxGridComponent.prototype.getHybridTableBody = function () {
        return this.el.nativeElement.querySelector('#' + this.baseConfig.id);
    };
    VxGridComponent.prototype.resetConfig = function () {
        var self = this;
        self.baseSettings = new vxgrid_config_1.VxGridSettingsBase();
        self.baseConfig = self.config;
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
                col.cellDefn = col.cellDefn.replaceAll("VX_DATA_POINT", "row[header.id]");
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
        self.config.loadDataRows = function () {
            self.baseConfig.data = self.config.data;
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
    VxGridComponent.prototype.log = function () {
        console.log(this.baseSettingsCount);
        for (var i in this.baseSettingsCount) {
            this.baseSettingsCount[i] = 0;
        }
        m.redraw();
    };
    VxGridComponent.prototype.prepHybrid = function () {
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
                    console.log(self);
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
        console.log(self);
    };
    VxGridComponent.prototype.initCheckScrollUpDownArrow = function () {
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
    };
    VxGridComponent.prototype.prepForScrollInsertion = function () {
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
        if (self.baseSettings.allRowSelected) {
            self.selectAllFiltered();
        }
        else {
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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.component.js.map

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
                vxgrid_settings_modal_1.VxGridSettingsModal
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule
            ],
            exports: [
                vxgrid_component_1.VxGridComponent,
                vxgrid_pipes_1.VxNumberFixedLenPipe
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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/app/vxgrid/vxgrid.module.js.map

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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/environments/environment.js.map

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
//# sourceMappingURL=C:/Users/paridaa/Documents/GitHub/ng-vxgrid/code/src/src/src/polyfills.js.map

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(259)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\n\r\n.vx-grid-related .vx-scroller, .vx-grid-related .vxTableScrollContainer {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n.vxGridManageColMod .modal-dialog {\r\n    height: 90vh;\r\n    width: 90%;\r\n    max-width: 90%;\r\n    margin: 5vh auto;\r\n    border-radius: 0;\r\n}\r\n\r\n    .vxGridManageColMod .modal-dialog .modal-content {\r\n        height: 100%;\r\n        width: 100%;\r\n        border-radius: 0;\r\n        padding: 0 15px 15px;\r\n    }\r\n\r\n    .vxGridManageColMod .modal-dialog ngbd-modal-content {\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n        .vxGridManageColMod .modal-dialog .modal-content .modal-body {\r\n            height: 100%;\r\n            width: 100%;\r\n            border-radius: 0;\r\n            padding: 0;\r\n        }\r\n\r\n.vx-grid-related .row {\r\n    height: auto;\r\n}\r\n\r\n.vx-grid-related .vx-scroller {\r\n    height: calc(100% - 60px);\r\n    padding: 0;\r\n}\r\n\r\n.vx-grid-related .vxTableScrollContainer {\r\n    height: calc(100% - 15px);\r\n    overflow-y: hidden;\r\n    padding: 0;\r\n    border: 1px solid #A0A0A0;\r\n}\r\n\r\n    .vx-grid-related .vxTableScrollContainer.attrPaneOpen {\r\n        height: calc(100% - 60px);\r\n    }\r\n\r\n        .vx-grid-related .vxTableScrollContainer.attrPaneOpen.pageEnabled {\r\n            height: calc(100% - 98px);\r\n        }\r\n\r\n    .vx-grid-related .vxTableScrollContainer.pageEnabled:not(.attrPaneOpen) {\r\n        height: calc(100% - 48px);\r\n    }\r\n\r\n.vx-grid-related .offscreen {\r\n    position: absolute;\r\n    clip: rect(1px 1px 1px 1px);\r\n    clip: rect(1px,1px,1px,1px);\r\n    padding: 0;\r\n    border: 0;\r\n    height: 1px;\r\n    width: 1px;\r\n    overflow: hidden;\r\n}\r\n\r\n.vx-grid-related .vxTableContainer:not(.scrollDupHeader) {\r\n    padding: 0;\r\n    margin: 3px 0 0;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    height: calc(100% - 48px);\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    border-top: none;\r\n    border-left: 1px dotted #909090;\r\n    border-right: 1px dotted #909090;\r\n    border-bottom: 1px dotted #909090;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody:not(.revealWrap) .vxBodyRow td, .vx-grid-related .vxTable .vxHead .vxHeadRow th {\r\n    padding: 0 10px;\r\n    height: 48px;\r\n    white-space: nowrap;\r\n    -ms-text-overflow: ellipsis;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.vx-grid-related .icon-container.scrollAction {\r\n    position: absolute;\r\n    bottom: 25px;\r\n    right: 15px;\r\n    opacity: .25;\r\n    filter: alpha(opacity=25);\r\n    border-radius: 50%;\r\n}\r\n\r\n    .vx-grid-related .icon-container.scrollAction.up {\r\n        right: 68px;\r\n    }\r\n\r\n    .vx-grid-related .icon-container.scrollAction.down {\r\n        -webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n    }\r\n\r\n    .vx-grid-related .icon-container.scrollAction.pageEnabled {\r\n        bottom: 73px;\r\n    }\r\n\r\n    .vx-grid-related .icon-container.scrollAction:active, .vx-grid-related .icon-container.scrollAction:focus, .vx-grid-related .icon-container.scrollAction:hover {\r\n        position: absolute;\r\n        bottom: 25px;\r\n        opacity: 1;\r\n        filter: alpha(opacity=100);\r\n        z-index: 9999;\r\n        background: #006ebd !important;\r\n        color: #fff;\r\n        outline: #fff dotted 1px;\r\n    }\r\n\r\n        .vx-grid-related .icon-container.scrollAction:active .icon.icon-up, .vx-grid-related .icon-container.scrollAction:focus .icon.icon-up, .vx-grid-related .icon-container.scrollAction:hover .icon.icon-up {\r\n            background-position-y: -342px;\r\n            background-position-x: -28px;\r\n        }\r\n\r\n    .vx-grid-related .icon-container.scrollAction.pageEnabled:active, .vx-grid-related .icon-container.scrollAction.pageEnabled:focus, .vx-grid-related .icon-container.scrollAction.pageEnabled:hover {\r\n        bottom: 73px;\r\n    }\r\n\r\n.vx-grid-related .vxTable {\r\n    table-layout: fixed;\r\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\r\n    width: 100%;\r\n}\r\n\r\n.vx-grid-related .icon-container.active {\r\n    background: #006ebd;\r\n    color: #fff;\r\n}\r\n\r\n.vx-grid-related .icon-container.disabled {\r\n    color: #000;\r\n    background: #D0D0D0;\r\n    border-color: #000;\r\n    opacity: .25;\r\n    filter: alpha(opacity=25);\r\n    cursor: none;\r\n}\r\n\r\n.vx-grid-related .icon-container:not(.active):active, .vx-grid-related .icon-container:not(.active):focus, .vx-grid-related .icon-container:not(.active):hover, .vx-grid-related .icon-container:not(.disabled):active, .vx-grid-related .icon-container:not(.disabled):focus, .vx-grid-related .icon-container:not(.disabled):hover {\r\n    background: rgba(0,0,0,.1);\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead .vxHeadRow th {\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody:not(.revealWrap) .vxBodyRow td {\r\n    overflow: hidden;\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n    text-align: left;\r\n    border: 1px solid #E0E0E0;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow td .vx-edit-input {\r\n    height: 40px;\r\n    width: calc(100% - 10px);\r\n    margin-left: 5px;\r\n    padding: 0 4px;\r\n    border-radius: 0;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow td .vx-edit-textarea {\r\n    height: 100%;\r\n    width: calc(100% - 10px);\r\n    margin-left: 5px;\r\n    padding: 0 4px;\r\n    border-radius: 0;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow td.vxBodyRowCell.renderedDefn {\r\n    padding: 0;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody.revealWrap .vxBodyRow td {\r\n    padding: 0 10px;\r\n    height: 48px;\r\n    overflow: hidden;\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n    text-align: left;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead tr th:nth-child(2n+1) {\r\n    background-color: #363636;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead tr th:nth-child(2n) {\r\n    background-color: #565656;\r\n}\r\n\r\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container {\r\n    width: calc(100% - 150px);\r\n    border-left: none;\r\n    border-right: none;\r\n    border-top: none;\r\n    border-bottom: 1px solid RGBA(255,255,255,.75);\r\n    margin-left: 15px;\r\n}\r\n\r\n.vx-grid-related .vxTableOperations .search-container input.search {\r\n    height: 42px;\r\n    line-height: 42px;\r\n    min-width: 200px;\r\n    border: 1px solid #A0A0A0;\r\n    width: 100%;\r\n}\r\n\r\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container .searchSymb {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search, .vx-grid-related .vxTableOperations .search-container input.search {\r\n    vertical-align: middle;\r\n    opacity: .75;\r\n    filter: alpha(opacity=75);\r\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\r\n    font-weight: 100;\r\n    font-size: medium;\r\n    background: 0 0;\r\n    padding: 0 10px;\r\n    margin: 0;\r\n    position: relative;\r\n    border-radius: 0;\r\n}\r\n\r\n.vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search {\r\n    height: 40px;\r\n    color: #FFF;\r\n    border: none;\r\n    width: calc(100% - 44px);\r\n    box-shadow: none;\r\n}\r\n\r\n    .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search:-moz-placeholder, .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search:-ms-input-placeholder, .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search::-moz-placeholder, .vx-grid-related .vxTableContainer .vxHeadRowCell .search-container input.search::-webkit-input-placeholder {\r\n        color: #fff;\r\n        opacity: .75;\r\n        filter: alpha(opacity=75);\r\n    }\r\n\r\n.vx-grid-related .vxTableOperations .search-container input.search:-moz-placeholder, .vx-grid-related .vxTableOperations .search-container input.search:-ms-input-placeholder, .vx-grid-related .vxTableOperations .search-container input.search::-moz-placeholder, .vx-grid-related .vxTableOperations .search-container input.search::-webkit-input-placeholder {\r\n    opacity: .75;\r\n    filter: alpha(opacity=75);\r\n}\r\n\r\n.vx-grid-related .vxTableContainer {\r\n    -webkit-transition: height .3s ease-in-out 0s;\r\n    transition: height .3s ease-in-out 0s;\r\n}\r\n\r\n    .vx-grid-related .vxTableContainer.scrollTableContainer {\r\n        width: auto;\r\n    }\r\n\r\n        .vx-grid-related .vxTableContainer.scrollTableContainer table thead th {\r\n            height: 0 !important;\r\n        }\r\n\r\n        .vx-grid-related .vxTableContainer.scrollTableContainer.scrollDupHeaderAdded .vxTable .vxHead tr th:nth-child(2n+1) span.noDdTitle {\r\n            color: #363636;\r\n        }\r\n\r\n        .vx-grid-related .vxTableContainer.scrollTableContainer.scrollDupHeaderAdded .vxTable .vxHead tr th:nth-child(2n) span.noDdTitle {\r\n            color: #565656;\r\n        }\r\n\r\n    .vx-grid-related .vxTableContainer.scrollDupHeader {\r\n        z-index: 999;\r\n        margin-top: 0;\r\n        -webkit-transition: top .3s ease-in-out 0s;\r\n        transition: top .3s ease-in-out 0s;\r\n        padding: 0;\r\n    }\r\n\r\n        .vx-grid-related .vxTableContainer.scrollDupHeader .vxTableHolder {\r\n            -webkit-transition: left .3s ease-out 0s;\r\n            transition: left .3s ease-out 0s;\r\n        }\r\n\r\n    .vx-grid-related .vxTableContainer.settingsMenuOpen {\r\n        overflow: hidden;\r\n    }\r\n\r\n.vx-grid-related .vxTableOperations {\r\n    margin: 5px 0;\r\n    height: 40px;\r\n    padding: 0;\r\n    width:calc(100% - 350px);\r\n}\r\n\r\n.vx-grid-related .icon-container {\r\n    width: 40px;\r\n    height: 40px;\r\n    text-align: center;\r\n    color: #006ebd;\r\n    border: 1px solid #006ebd;\r\n    border-radius: 0;\r\n    cursor: pointer;\r\n    margin-left: 15px;\r\n    overflow: hidden;\r\n}\r\n\r\n    .vx-grid-related .icon-container.vx-row-edit {\r\n        line-height: 48px;\r\n        height: 48px;\r\n        margin: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n        border: none;\r\n    }\r\n\r\n        .vx-grid-related .icon-container.vx-row-edit[vxdisabled=true] {\r\n            opacity: .5;\r\n            cursor: not-allowed;\r\n        }\r\n\r\n        .vx-grid-related .icon-container.vx-row-edit .icon {\r\n            width: 24px;\r\n            height: 26px;\r\n            top: 7px;\r\n            left: 3px;\r\n        }\r\n\r\n    .vx-grid-related .icon-container i.icon {\r\n        font-family: inherit;\r\n        font-size: large;\r\n        font-style: normal;\r\n    }\r\n\r\n.vx-grid-related .icon {\r\n    background-image: url(data:img/png;base64,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);\r\n    background-size: 48px;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    top: 11px;\r\n    left: 9px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n    .vx-grid-related .icon.icon-down.white, .vx-grid-related .icon.icon-up.white {\r\n        height: 24px;\r\n        top: 1px;\r\n        background-position-x: -28px;\r\n        width: 24px;\r\n        position: relative;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-refresh {\r\n        background-position-y: -57px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-revert {\r\n        background-position-y: -715px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-clearselection {\r\n        background-position-y: -114px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-openwith {\r\n        background-position-y: -143px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-more {\r\n        background-position-y: -85px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-close {\r\n        background-position-y: -372px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-repair {\r\n        background-position-y: -28px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-edit {\r\n        background-position-y: 0;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-up {\r\n        background-position-y: -342px;\r\n    }\r\n\r\n        .vx-grid-related .icon.icon-up.white {\r\n            left: -4px;\r\n        }\r\n\r\n    .vx-grid-related .icon.icon-down {\r\n        background-position-y: -572px;\r\n    }\r\n\r\n        .vx-grid-related .icon.icon-down.white {\r\n            left: -5px;\r\n        }\r\n\r\n    .vx-grid-related .icon.icon-right {\r\n        background-position-y: -434px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-left {\r\n        background-position-y: -463px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-unpin {\r\n        background-position-y: -486px;\r\n    }\r\n\r\n        .vx-grid-related .icon.icon-unpin.red {\r\n            background-position-x: -28px;\r\n            height: 30px;\r\n        }\r\n\r\n    .vx-grid-related .icon.icon-ScrollChevronUpLegacy {\r\n        background-position-y: -231px;\r\n    }\r\n\r\n        .vx-grid-related .icon.icon-ScrollChevronUpLegacy.white {\r\n            background-position-x: -28px;\r\n            width: 24px;\r\n            height: 24px;\r\n            position: relative;\r\n            top: 8px;\r\n            left: -5px;\r\n        }\r\n\r\n    .vx-grid-related .icon.icon-ScrollChevronDownLegacy {\r\n        background-position-y: -257px;\r\n    }\r\n\r\n        .vx-grid-related .icon.icon-ScrollChevronDownLegacy.white {\r\n            background-position-x: -28px;\r\n            width: 24px;\r\n            height: 24px;\r\n            position: relative;\r\n            top: 8px;\r\n            left: -5px;\r\n        }\r\n\r\n    .vx-grid-related .icon.icon-filter {\r\n        background-position-y: -684px;\r\n    }\r\n\r\n        .vx-grid-related .icon.icon-filter.white {\r\n            background-position-x: -28px;\r\n            width: 24px;\r\n            height: 24px;\r\n            position: relative;\r\n            top: 4px;\r\n            left: -4px;\r\n        }\r\n\r\n    .vx-grid-related .icon.icon-blockedLegacy.red, .vx-grid-related .icon.icon-trim.red {\r\n        background-position-x: -28px;\r\n        height: 30px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-trash {\r\n        background-position-y: -658px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-search {\r\n        background-position-y: -200px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-trim {\r\n        background-position-y: -513px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-blockedLegacy {\r\n        background-position-y: -400px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-previous {\r\n        background-position-y: -289px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-next {\r\n        background-position-y: -318px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-save {\r\n        background-position-y: -627px;\r\n    }\r\n\r\n    .vx-grid-related .icon.icon-add {\r\n        background-position-y: -173px;\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxBody .vx-row-select {\r\n    text-align: center;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxBody .vx-row-select input[type=checkbox] {\r\n        cursor: pointer;\r\n        outline-color: transparent;\r\n        outline-offset: 5px;\r\n        outline-style: dotted;\r\n        outline-width: thin;\r\n    }\r\n\r\n        .vx-grid-related .vxTable .vxBody .vx-row-select input[type=checkbox]:active, .vx-grid-related .vxTable .vxBody .vx-row-select input[type=checkbox]:focus {\r\n            outline-color: #000;\r\n            outline-offset: 5px;\r\n            outline-style: dotted;\r\n            outline-width: thin;\r\n        }\r\n\r\n.vx-grid-related .vxTable .vxHead .vx-row-select {\r\n    text-align: center;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxHead .vx-row-select input[type=checkbox] {\r\n        cursor: pointer;\r\n        outline-color: transparent;\r\n        outline-offset: 5px;\r\n        outline-style: dotted;\r\n        outline-width: thin;\r\n    }\r\n\r\n        .vx-grid-related .vxTable .vxHead .vx-row-select input[type=checkbox]:active, .vx-grid-related .vxTable .vxHead .vx-row-select input[type=checkbox]:focus {\r\n            outline-color: #fff;\r\n            outline-offset: 5px;\r\n            outline-style: dotted;\r\n            outline-width: thin;\r\n        }\r\n\r\n.vx-grid-related .vxTable .vxHead .vxHeadRow th.ddEnabled {\r\n    padding: 0;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th {\r\n    font-size: medium;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    color: #fff;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody tr.vxBodyRow.vs-repeat-repeated-element:last-of-type {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow.vs-repeat-repeated-element {\r\n    top: 0 !important;\r\n    position: relative !important;\r\n    height: 48px;\r\n    max-height: 48px;\r\n    overflow: hidden;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxBody .vxBodyRow.vs-repeat-repeated-element td {\r\n        height: 48px;\r\n        overflow: hidden;\r\n        border: 1px solid #E0E0E0;\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow.inProgress {\r\n    pointer-events: none;\r\n    opacity: .65;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow.vxRowSelected .vxBodyRowCell {\r\n    background: #f0f7fc;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.rowSelectionCell {\r\n    border-left: 5px solid #fff;\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow.vxRowSelected .vxBodyRowCell.rowSelectionCell {\r\n    border-left: 5px solid #006ebd;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.groupCell {\r\n    background: #f0f0f0;\r\n    border-top: 3px solid #909090;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.groupCell .first {\r\n        font-size: small;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxBody .vxBodyRow .vxBodyRowCell.groupCell .colname {\r\n        font-weight: 600;\r\n        margin-left: 15px;\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown {\r\n    line-height: 48px;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu {\r\n        position: absolute;\r\n        border-radius: 0;\r\n        background-color: #23527c;\r\n        padding: 0;\r\n        margin: -1px 0 0;\r\n        max-height: 50vh;\r\n        overflow-y: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n        -ms-overflow-style: -ms-autohiding-scrollbar;\r\n        min-width: 300px;\r\n        width: 100%;\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle {\r\n        background: 0 0;\r\n        color: #fff;\r\n        border: none;\r\n        width: 100%;\r\n        text-align: left;\r\n        margin: 0;\r\n        padding: 0 15px;\r\n        line-height: 48px;\r\n        height: 48px;\r\n        box-shadow: none;\r\n        border-radius: 0;\r\n        font-family: inherit;\r\n        font-weight: 300;\r\n        font-size: 16px;\r\n        text-shadow: none;\r\n        vertical-align: top;\r\n    }\r\n\r\n        .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle:active, .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle:focus {\r\n            outline-color: #fff;\r\n            outline-style: dotted;\r\n            outline-offset: -5px;\r\n            outline-width: thin;\r\n        }\r\n\r\n        .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle[disabled] {\r\n            opacity: 1;\r\n            cursor: default;\r\n        }\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.loader {\r\n        padding: 15px;\r\n        width: 100%;\r\n    }\r\n\r\n        .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.loader img.dropDownLoader {\r\n            display: block;\r\n            margin: 0 auto;\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown.open .dropdown-toggle {\r\n        background: #23527c;\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle span.ddCaret {\r\n        width: 10px;\r\n        display: inline-block;\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle.loading span.ddCaret {\r\n        display: none;\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown .dropdown-toggle span.colTitle {\r\n        font-family: inherit;\r\n        font-weight: 400;\r\n        display: inline-block;\r\n        max-width: calc(100% - 25px);\r\n        margin-right: 10px;\r\n        vertical-align: top;\r\n        -ms-text-overflow: ellipsis;\r\n        text-overflow: ellipsis;\r\n        overflow-x: hidden;\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxHead th:last-child .dropdown ul.dropdown-menu {\r\n    right: -1px;\r\n    left: auto;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th span.noDdTitle {\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    width: 100%;\r\n    vertical-align: top;\r\n    -ms-text-overflow: ellipsis;\r\n    text-overflow: ellipsis;\r\n    overflow-x: hidden;\r\n    display: block;\r\n    padding-left: 15px;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li {\r\n    padding: 14px 15px;\r\n    text-align: left;\r\n    margin: 0;\r\n    line-height: normal;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    width: 100%;\r\n    white-space: normal;\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter input[type=checkbox] {\r\n    margin-right: 15px;\r\n    vertical-align: top;\r\n    outline-color: #fff;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter label {\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: medium;\r\n    width: calc(100% - 30px);\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n    margin-bottom: 0;\r\n    text-transform: none;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search] {\r\n    line-height: 36px;\r\n    height: 36px;\r\n    padding: 0 10px;\r\n    font-style: italic;\r\n    font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;\r\n    width: calc(100% - 38px);\r\n    color: rgba(255,255,255,.8);\r\n    background: 0 0;\r\n    border: 1px solid rgba(255,255,255,.6);\r\n    will-change: auto;\r\n    -webkit-transform: translateZ(0);\r\n            transform: translateZ(0);\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:active, .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:focus {\r\n        font-style: normal;\r\n        color: #fff;\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]::-webkit-input-placeholder {\r\n        color: rgba(255,255,255,.8);\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]::-moz-placeholder {\r\n        color: rgba(255,255,255,.8);\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:-ms-input-placeholder {\r\n        color: rgba(255,255,255,.8);\r\n    }\r\n\r\n    .vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search input[type=search]:-moz-placeholder {\r\n        color: rgba(255,255,255,.8);\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filter-search .icon-container.filter-activator {\r\n    width: 36px;\r\n    height: 36px;\r\n    line-height: 36px;\r\n    display: inline-block;\r\n    margin: 0;\r\n    color: #fff;\r\n    border: 1px solid rgba(255,255,255,.6);\r\n    float: right;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead ul.dropdown-menu li.filterClear.disabled {\r\n    opacity: .6;\r\n    filter: alpha(opacity=60);\r\n    cursor: none;\r\n    pointer-events: none;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filter-toggle, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter, .vx-grid-related .vxTableSettings.columns .colItem:not(.locked) {\r\n    cursor: pointer;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li:hover {\r\n    background: #000;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li a {\r\n    color: #fff;\r\n    padding: 0;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li a:focus, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li a:hover {\r\n        background: 0 0;\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter .sortIndicator {\r\n    float: right;\r\n    font-size: small;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filterCheckBox, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filterClear .indicator, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.hider .hideIndicator {\r\n    float: left;\r\n    position: relative;\r\n    margin-right: 15px;\r\n    top: -2px;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting .sortIndicator {\r\n    display: inline-block;\r\n    color: #fff;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting .sortIndicator.desc {\r\n        -webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.grouper .groupIndicator, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.grouper.grouped .group, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.grouper:not(.grouped) .ungroup, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting.asc .sortIndicator.desc, .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.sorter.sorting:not(.asc) .sortIndicator.asc {\r\n    display: none;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filterCheckBox.indicator {\r\n    color: transparent;\r\n    border: 1px solid #fff;\r\n    padding: 0;\r\n    font-size: small;\r\n}\r\n\r\n    .vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter .filterCheckBox.indicator.checked {\r\n        color: #fff;\r\n    }\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filter span.filterItemTitle {\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.filterClear.disabled a {\r\n    color: #909090;\r\n}\r\n\r\n.vx-grid-related .vxTable .vxHead th .dropdown ul.dropdown-menu li.hider .hideIndicator .strikethrough:after {\r\n    content: \"\\2571\";\r\n    display: block;\r\n    color: #fff;\r\n    font-weight: 800;\r\n    font-size: 18px;\r\n    left: 4px;\r\n    top: -1px;\r\n    position: absolute;\r\n}\r\n\r\n.vx-grid-related .vxTableSettings {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #fff;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\r\n}\r\n\r\n    .vx-grid-related .vxTableSettings .vxSettingsHead {\r\n        height: 60px;\r\n        width: 100%;\r\n        font-family: inherit;\r\n        border-bottom: 1px dotted #A0A0A0;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .vxSettingsFooter {\r\n        height: 78px;\r\n        width: 100%;\r\n        font-family: inherit;\r\n        border-top: 1px dotted #A0A0A0;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .vxSettingsBody {\r\n        height: calc(100% - 125px);\r\n        padding: 0 0 15px;\r\n        width: 100%;\r\n        font-family: inherit;\r\n        overflow-x: auto;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .columns p.help, .vx-grid-related .vxTableSettings .columns p.helpText, .vx-grid-related .vxTableSettings p.title {\r\n        font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\r\n        font-weight: 400;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .vxSettingsBody .vxSettingsBodyContainer {\r\n        /*min-width: 1000px;*/\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .orderChanger {\r\n        height: 100%;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .columns {\r\n        overflow: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n        -ms-overflow-style: -ms-autohiding-scrollbar;\r\n        height: calc(100% - 15px);\r\n    }\r\n\r\n        .vx-grid-related .vxTableSettings .columns p.help {\r\n            color: #0073c6;\r\n            font-size: large;\r\n        }\r\n\r\n        .vx-grid-related .vxTableSettings .columns p.helpText {\r\n            color: #303030;\r\n            font-size: small;\r\n        }\r\n\r\n    .vx-grid-related .vxTableSettings .orderChanger .columns {\r\n        overflow: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n        -ms-overflow-style: -ms-autohiding-scrollbar;\r\n        height: calc(100% - 15px);\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .columns .colItem:active, .vx-grid-related .vxTableSettings .columns .colItem:focus {\r\n        outline: #303030 dotted 1px;\r\n        outline-offset: -5px;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .columns .colItem.selected:active, .vx-grid-related .vxTableSettings .columns .colItem.selected:focus {\r\n        outline: #fff dotted 1px;\r\n        outline-offset: -5px;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .visChangers .visChangersContainer {\r\n        margin: 15px 0 0;\r\n        padding: calc(.5 * (90vh - 300px)) 0;\r\n    }\r\n\r\n.vx-grid-related .visChangers .visChangersContainer .visChangersItem .icon-container {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\n\r\n.vx-grid-related .vxTableSettings button.vsTableButton {\r\n    padding: 10px 15px;\r\n    text-align: center;\r\n    min-width: 100px;\r\n    font-family: inherit;\r\n    font-size: medium;\r\n    background: 0 0;\r\n    border: 2px solid #006ebd;\r\n    border-radius: 0;\r\n    color: #006ebd;\r\n    cursor: pointer;\r\n    margin: 15px 15px 0 0;\r\n}\r\n\r\n    .vx-grid-related .vxTableSettings button.vsTableButton.active {\r\n        background: #006ebd;\r\n        color: #fff;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings button.vsTableButton.diasbled, .vx-grid-related .vxTableSettings button.vsTableButton[diasbled] {\r\n        color: #000;\r\n        border: 2px solid #000;\r\n        opacity: .5;\r\n        filter: alpha(opacity=50);\r\n        cursor: none;\r\n    }\r\n\r\n.vx-grid-related .vxTableSettings p.title {\r\n    color: #006ebd;\r\n    width: calc(100% - 52px);\r\n    display: inline-block;\r\n    line-height: 60px;\r\n    font-size: large;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.vx-grid-related .vxSettingsBody .columns .colItem input.inputStyle.colInput, .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem p.colName {\r\n    font-size: medium;\r\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\r\n    font-weight: 400;\r\n}\r\n\r\n.vx-grid-related .vxTableSettings .vxSettingsHead .icon-container {\r\n    display: inline-block;\r\n    border: none;\r\n    margin-left: 0;\r\n}\r\n\r\n.vx-grid-related .vxSettingsBody .columns {\r\n    margin-top: 15px;\r\n    padding: 15px;\r\n    border: 1px dotted #A0A0A0;\r\n}\r\n\r\n    .vx-grid-related .vxSettingsBody .columns .colItem {\r\n        padding: 6px 0 4px;\r\n        background: 0 0;\r\n        border-bottom: 1px dotted #D0D0D0;\r\n        border-left: 3px solid #fff;\r\n    }\r\n\r\n        .vx-grid-related .vxSettingsBody .columns .colItem.locked {\r\n            background-color: #f8f1f1;\r\n            border-left: 3px solid #f8f1f1;\r\n        }\r\n\r\n        .vx-grid-related .vxSettingsBody .columns .colItem.selected {\r\n            background-color: #006ebd;\r\n            border-left: 3px solid #006ebd;\r\n        }\r\n\r\n            .vx-grid-related .vxSettingsBody .columns .colItem.selected p.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem.selected p.colLabel .icon, .vx-grid-related .vxSettingsBody .columns .colItem.selected p.colName {\r\n                color: #fff;\r\n            }\r\n\r\n        .vx-grid-related .vxSettingsBody .columns .colItem p.colName {\r\n            color: #303030;\r\n            margin: 0;\r\n            line-height: 40px;\r\n            -ms-word-break: break-all;\r\n            word-break: break-all;\r\n        }\r\n\r\n        .vx-grid-related .vxSettingsBody .columns .colItem input.inputStyle.colInput {\r\n            border: 1px solid #A0A0A0;\r\n            border-radius: 0;\r\n            display: inline-block;\r\n            width: 75px;\r\n            text-align: center;\r\n            margin: 0 0 0 5px;\r\n            height: 40px;\r\n        }\r\n\r\n            .vx-grid-related .vxSettingsBody .columns .colItem input.inputStyle.colInput[disabled] {\r\n                background: 0 0;\r\n            }\r\n\r\n        .vx-grid-related .vxSettingsBody .columns .colItem.selected input.inputStyle.colInput {\r\n            background: 0 0;\r\n            border-color: #fff;\r\n            color: #fff;\r\n        }\r\n\r\n        .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel {\r\n            color: #303030;\r\n            line-height: 40px;\r\n            display: inline-block;\r\n            margin: 0;\r\n        }\r\n\r\n            .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel.xl, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel.xl {\r\n                font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\r\n                font-size: large;\r\n                font-weight: 400;\r\n                color: #303030;\r\n                line-height: 40px;\r\n                display: inline-block;\r\n                margin: 0;\r\n            }\r\n\r\n            .vx-grid-related .vxSettingsBody .columns .colItem label.colLabel .icon, .vx-grid-related .vxSettingsBody .columns .colItem p.colLabel .icon {\r\n                color: #b00;\r\n            }\r\n\r\n        .vx-grid-related .vxSettingsBody .columns .colItem input.colCheckbox {\r\n            position: relative;\r\n            top: 2px;\r\n            margin-left: 5px;\r\n        }\r\n\r\n.vx-grid-related .vxSettingsBody .orderMovers {\r\n    width: 150px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n    .vx-grid-related .vxSettingsBody .orderMovers .icon-container {\r\n        display: inline-block;\r\n        margin-left: 15px;\r\n        border-color: #303030;\r\n        color: #303030;\r\n        width: 40px;\r\n        line-height: 40px;\r\n        margin-top: 15px;\r\n    }\r\n\r\n        .vx-grid-related .vxSettingsBody .orderMovers .icon-container.disabled {\r\n            color: #909090;\r\n            background: #f0f0f0;\r\n            border-color: #A0A0A0;\r\n            opacity: 1;\r\n            filter: alpha(opacity=100);\r\n            cursor: none;\r\n        }\r\n\r\n.vx-grid-related .vxTablePagination .icon-container.dirNumContainer, .vx-grid-related .vxTablePagination .icon-container.pageNumContainer {\r\n    border: none;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.vx-grid-related .vxTableSettings .vxSettingsFooter .infoBtns {\r\n    display: inline-block;\r\n    padding: 10px 15px;\r\n    font-family: inherit;\r\n    font-size: medium;\r\n    position: relative;\r\n    top: 10px;\r\n    color: #303030;\r\n}\r\n\r\n    .vx-grid-related .vxTableSettings .vxSettingsFooter .infoBtns .icon {\r\n        font-size: medium;\r\n        color: #b00;\r\n        top: 0;\r\n        left: 0;\r\n        height: 24px;\r\n        width: 24px;\r\n    }\r\n\r\n    .vx-grid-related .vxTableSettings .vxSettingsFooter .infoBtns .infoLabel {\r\n        font-family: inherit;\r\n        font-size: medium;\r\n        margin-left: 5px;\r\n        margin-right: 20px;\r\n        color: #303030;\r\n        vertical-align: top;\r\n    }\r\n\r\n.vx-grid-related .vsTableStats p.statTitle, .vx-grid-related .vsTableStats p.statValue, .vx-grid-related .vxTablePagination .icon-container.pageNumContainer i.icon {\r\n    font-family: 'Segoe UI',Arial,Cambria,Cochin,Georgia,Times,Times New Roman,serif;\r\n    font-weight: 400;\r\n}\r\n\r\n.vx-grid-related .vsTableStats {\r\n    padding: 0;\r\n    max-width: 350px;\r\n}\r\n\r\n    .vx-grid-related .vsTableStats p {\r\n        display: inline;\r\n        margin: 0;\r\n    }\r\n\r\n        .vx-grid-related .vsTableStats p.statTitle {\r\n            color: #303030;\r\n            font-size: medium;\r\n            text-transform: uppercase;\r\n            line-height: 40px;\r\n            margin: 6px 5px 4px;\r\n        }\r\n\r\n        .vx-grid-related .vsTableStats p.statValue {\r\n            color: #0073c6;\r\n            font-size: medium;\r\n            text-transform: uppercase;\r\n            line-height: 40px;\r\n            margin: 6px 15px 4px 0;\r\n        }\r\n\r\n            .vx-grid-related .vsTableStats p.statTitle.disabled, .vx-grid-related .vsTableStats p.statValue.disabled {\r\n                opacity: .25;\r\n                filter: alpha(opacity=25);\r\n                color: #000;\r\n            }\r\n\r\n.vx-grid-related .vxTablePagination {\r\n    height: 48px;\r\n    white-space: nowrap;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n    .vx-grid-related .vxTablePagination .icon-container {\r\n        display: inline-block;\r\n        margin-right: 2px;\r\n        margin-left: 0;\r\n        padding: 0;\r\n        height: 30px;\r\n        width: 30px;\r\n        margin-top: 6px;\r\n    }\r\n\r\n        .vx-grid-related .vxTablePagination .icon-container.dirNumContainer .icon {\r\n            width: 22px;\r\n            height: 22px;\r\n            top: 8px;\r\n            left: 1px;\r\n        }\r\n\r\n        .vx-grid-related .vxTablePagination .icon-container.pageNumContainer i.icon {\r\n            font-size: small;\r\n            vertical-align: bottom;\r\n            background: 0 0;\r\n            top: 0;\r\n            left: 0;\r\n            width: 30px;\r\n            height: 30px;\r\n            line-height: 30px;\r\n        }\r\n\r\n        .vx-grid-related .vxTablePagination .icon-container.pageNumContainer.active {\r\n            background: #0073c6;\r\n            color: #fff;\r\n        }\r\n\r\n.vxH100 {\r\n    height: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.vx-grid-inner {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.marg0 {\r\n    margin: 0 !important;\r\n}\r\n\r\n.pad0 {\r\n    padding: 0 !important;\r\n}\r\n\r\n.padA0L10 {\r\n    padding: 0 0 0 10px !important;\r\n}\r\n\r\n.padA0L5 {\r\n    padding: 0 0 0 5px !important;\r\n}\r\n\r\n.padA0LR5 {\r\n    padding: 0 5px !important;\r\n}\r\n\r\n.padA0L10R0 {\r\n    padding: 0 0 0 10px !important;\r\n}\r\n\r\nimg.vxGridAttendReqd {\r\n    width: 18px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.vx-grid-related .pull-left{\r\n    float: left !important;\r\n}\r\n\r\n.vx-grid-related .pull-right{\r\n    float: right !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\r\n    <div class=\"content-area\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n    <button class=\"btn btn-primary\" (click)=\"loadRows()\">LoadRows</button>\r\n    <button class=\"btn btn-primary\" (click)=\"log()\">Log</button>\r\n    <div style=\"display: block; width:100vw; height: 94vh; margin: 0 auto; overflow:hidden; padding: 0 15px;\">\r\n        <vx-grid [(config)]=\"gridConfig\"></vx-grid>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div class=\"vxH100 vx-grid-inner vx-grid-related \">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"col vsTableStats pull-left zeroPaddingLeft\" *ngIf=\"baseConfig.showGridStats\">\r\n                <p class=\"statTitle\">All</p>\r\n                <p class=\"statValue\">{{baseConfig.vxFilteredData.length | vxNumberFixedLen:2}}</p>\r\n                <p class=\"statTitle\" [class.disabled]=\"multiBoxFilters.length == 0\">Filtered</p>\r\n                <p class=\"statValue\" [class.disabled]=\"multiBoxFilters.length == 0\">\r\n                    <span *ngIf=\"multiBoxFilters.length > 0\">\r\n                                <span>{{baseConfig.vxFilteredData.length | vxNumberFixedLen:2}}</span>\r\n                    </span>\r\n                    <span *ngIf=\"multiBoxFilters.length == 0\">00</span>\r\n                </p>\r\n                <p class=\"statTitle\" [class.disabled]=\"baseSettings.multiSelected.length == 0\">Selected</p>\r\n                <p class=\"statValue\" [class.disabled]=\"baseSettings.multiSelected.length == 0\">{{baseSettings.multiSelected.length | vxNumberFixedLen:2}}</p>\r\n            </div>\r\n            <div class=\"col vxTableOperations pull-right zeroPaddingRight\" *ngIf=\"baseConfig.showGridOptions\">\r\n                <div class=\"search-container pull-left input-group\" *ngIf=\"false\">\r\n                    <input class=\"search form-control\" type=\"search\" [disabled]=\"baseConfig.vxFilteredData.length == 0 || true\" [(ngModel)]=\"baseSettings.searchToken\"\r\n                        placeholder=\"Search\" (keyup)=\"keyUpSearch($event)\" aria-label=\"search table\" />\r\n                </div>\r\n                <div class=\"icon-container pull-left\" role=\"button\" tabindex=\"0\" *ngIf=\"baseConfig.inlineEditingEnabled == true && baseConfig.inlineAddRowEnabled == true && false\"\r\n                    (click)=\"addNewRow()\" aria-label=\"add new row\">\r\n                    <i class=\"icon icon-add\"></i>\r\n                </div>\r\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"editInProgressCount() == 0 ? -1 : 0\" *ngIf=\"baseConfig.inlineEditingEnabled == true && editInProgressCount() > 0 && false\"\r\n                    [class.disabled]=\"editInProgressCount() == 0\" (click)=\"revertEdits()\" aria-label=\"revert edits\">\r\n                    <i class=\"icon icon-revert\"></i>\r\n                </div>\r\n                <div class=\"icon-container pull-left\" role=\"button\" tabindex=\"0\" *ngIf=\"baseSettings.multiSelected.length > 0\" (click)=\"deleteRows()\"\r\n                    aria-label=\"delete rows\">\r\n                    <i class=\"icon icon-trash\"></i>\r\n                </div>\r\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"baseSettings.selectAllEnabled == false && baseConfig.multiSelectionEnabled == true ? -1 : 0\"\r\n                    [class.disabled]=\"(baseSettings.selectAllEnabled == false && baseConfig.multiSelectionEnabled == true) || baseConfig.vxFilteredData.length == 0\"\r\n                    (click)=\"selectAllFiltered()\" aria-label=\"select all filtered rows\">\r\n                    <i class=\"icon icon-openwith\"></i>\r\n                </div>\r\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"baseSettings.multiSelected.length == 0 ? -1 : 0\" [class.disabled]=\"baseSettings.multiSelected.length == 0\"\r\n                    (click)=\"clearSelection()\" aria-label=\"clear any row selections\">\r\n                    <i class=\"icon icon-clearselection\"></i>\r\n                </div>\r\n                <div class=\"icon-container pull-left\" [class.active]=\"baseSettings.revealWrapRowData\" (click)=\"revealWrapToggle()\" [class.disabled]=\"baseConfig.vxFilteredData.length == 0\"\r\n                    aria-label=\"toggle row content reveal\">\r\n                    <i class=\"icon icon-more\"></i>\r\n                </div>\r\n                <div class=\"icon-container pull-left\" role=\"button\" [attr.tabindex]=\"multiBoxFilters.length == 0 ? -1 : 0\" [class.disabled]=\"multiBoxFilters.length == 0\"\r\n                    (click)=\"clearFilters()\" aria-label=\"clear any filters applied\">\r\n                    <i class=\"icon icon-refresh\"></i>\r\n                </div>\r\n                <div class=\"icon-container pull-left\" [class.active]=\"baseSettings.menu\" (click)=\"openManageColumns()\" aria-label=\"open manage columns modal\">\r\n                    <i class=\"icon icon-repair\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 vxTableScrollContainer\" [attr.id]=\"'_vxOverallScroll' + baseConfig.id\" [class.attrPaneOpen]=\"baseConfig.showGridStats || baseConfig.showGridOptions\">\r\n        <div class=\"col-12 vxTableContainer ms-datatable ang-dt zeroPadding scrollDupHeader scrollDupHeaderAdded\" [style.minWidth]=\"baseSettings.netWidth + 'px'\">\r\n            <div class='row marg0' tabindex=\"0\">\r\n                <div class=\"col-12 vxTableHolder pad0\">\r\n                    <table class=\"vxTable\" role=\"presentation\">\r\n                        <thead class=\"vxHead\">\r\n                            <tr class=\"vxHeadRow\">\r\n                                <ng-container *ngFor=\"let head of baseConfig.headers\">\r\n                                    <th class=\"vxHeadRowCell\" tabindex=\"-1\" [style.width]=\"head.width + 'px'\" *ngIf=\"head.hidden == false\" [attr.id]=\"baseConfig.id + '_vxHeadSt_' + head.id\">\r\n                                        <span *ngIf=\"head.renderHeadDefn != true\">{{head.columnName}}</span>\r\n                                        <div *ngIf=\"head.renderHeadDefn == true && head.id == 'checkbox' && baseConfig.allRowsSelectionEnabled\">\r\n                                            <div class=\"vx-row-select\">\r\n                                                <input class=\"vx-row-select-toggle\" type=\"checkbox\" [disabled]=\"baseConfig.noData == true && baseConfig.allRowSelectionDisabled == true\"\r\n                                                    [(ngModel)]=\"baseSettings.allRowSelected\" (change)=\"allRowSelectionChanged()\"\r\n                                                    aria-label=\"Select All Rows \" />\r\n                                            </div>\r\n                                        </div>\r\n                                    </th>\r\n                                </ng-container>\r\n                            </tr>\r\n                        </thead>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 vxTableContainer ms-datatable ang-dt zeroPadding scrollTableContainer\" [style.minWidth]=\"baseSettings.netWidth + 'px'\"\r\n            [attr.id]=\"'_vxScrollContainer' + baseConfig.id\" style=\"margin-top: 0;\">\r\n            <div class='row marg0'>\r\n                <div class=\"col-12 vxTableHolder pad0\">\r\n                    <table class=\"vxTable\">\r\n                        <caption class=\"offscreen\"></caption>\r\n                        <thead class=\"vxHead\">\r\n                            <tr class=\"vxHeadRow\">\r\n                                <ng-container *ngFor=\"let head of baseConfig.headers\">\r\n                                    <th class=\"vxHeadRowCell\" tabindex=\"-1\" [style.width]=\"head.width + 'px'\" *ngIf=\"head.hidden == false\">\r\n                                        <span class=\"offscreen\">{{head.columnName}}</span>\r\n                                    </th>\r\n                                </ng-container>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class=\"vxBody\" [class.revealWrap]=\"baseSettings.revealWrapRowData\" [attr.id]=\"'_vxHybrid' + baseConfig.id\"></tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"icon-container scrollAction up\" role=\"button\" tabindex=\"0\" (click)=\"justScrollTop()\" [class.pageEnabled]=\"baseSettings.vxPageEnabled\"\r\n        aria-label=\"Scroll Up\" [attr.id]=\"'scroll_up_' + baseConfig.id\" style=\"display:none;\">\r\n        <i class=\"icon icon-up\"></i>\r\n    </div>\r\n    <div class=\"icon-container scrollAction down\" role=\"button\" tabindex=\"0\" (click)=\"justScrollDown()\" [class.pageEnabled]=\"baseSettings.vxPageEnabled\"\r\n        aria-label=\"Scroll Down\" [attr.id]=\"'scroll_down_' + baseConfig.id\" style=\"display:none;\">\r\n        <i class=\"icon icon-up down\"></i>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body vx-grid-related \">\r\n    <div class=\"vxTableSettings\">\r\n        <div class=\"vxSettingsHead\">\r\n            <p role=\"heading\" aria-level=\"1\" class=\"title\">Manage Columns</p>\r\n            <div class=\"icon-container\" role=\"button\" tabindex=\"0\" (click)=\"cancelChangeInConfig()\" aria-label=\"Cancel Changes in Config\">\r\n                <i class=\"icon icon-close\" aria-hidden=\"true\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"vxSettingsBody\">\r\n            <div class=\"col-12 zeroPadding vxH100 vxSettingsBodyContainer\">\r\n                <div class=\"row align-items-start\">\r\n                    <div class=\"col-3 vxH100 visHideRows\">\r\n                        <div class=\"row vxH100\">\r\n                            <div class=\"col-12 columns\">\r\n                                <p role=\"heading\" aria-level=\"2\" class=\"help\">Available Columns</p>\r\n                                <p class=\"helpText\">To Select a column to change column Visbility, use the up and down arrows</p>\r\n                                <ng-container *ngFor=\"let header of copyForWidthVisChange\">\r\n                                    <div class=\"col-12 colItem\" [attr.tabindex]=\"header.locked == false ? 0 : -1\" [class.locked]=\"header.locked\" [class.selected]=\"header.id == headerSelected?.id\"\r\n                                        (click)=\"selectHeader(header)\" *ngIf=\"header.hidden == true\" (keydown)=\"upDownKeyPressHandler($event)\">\r\n                                        <div class=\"row align-items-start\">\r\n                                            <div class=\"col-2 col-sm-2 col-md-1\">\r\n                                                <p class=\"colLabel xl\" *ngIf=\"header.visbilityLocked == true\">\r\n                                                    <i class=\"icon icon-blockedLegacy\" tooltip=\"Visbility Locked\"></i></p>\r\n                                            </div>\r\n                                            <p class=\"col-10 col-sm-10 col-md-10 colName\">{{header.columnName}}</p>\r\n                                            <span class=\"offscreen\" *ngIf=\"header.locked\"> Column locked for all chnages </span>\r\n                                            <span class=\"offscreen\" *ngIf=\"header.visbilityLocked == true\"> Column Visbility locked for changes </span>\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 vxH100 visChangers\">\r\n                        <div class=\"col-12 visChangersContainer\">\r\n                            <div class=\"col-12 visChangersItem zeroPadding\">\r\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == false ? -1 : 0\"\r\n                                    [class.disabled]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == false\"\r\n                                    (click)=\"makeVisible(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Make Column' +  headerSelected?.columnName + 'Visible'\">\r\n                                    <i class=\"icon icon-right\"></i>\r\n                                </div>\r\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == true ? -1 : 0\"\r\n                                    [class.disableld]=\"headerSelected?.visbilityLocked || headerSelected == null || headerSelected?.hidden == true\"\r\n                                    (click)=\"makeHidden(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Make Column' +  headerSelected?.columnName +  'Hidden'\">\r\n                                    <i class=\"icon icon-left\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-7 vxH100\">\r\n                        <div class=\"row orderChanger\">\r\n                            <div class=\"col-12 columns\">\r\n                                <p role=\"heading\" aria-level=\"2\" class=\"help\">Selected Columns</p>\r\n                                <p class=\"helpText\">To Select a column to change column order, use the up and down arrows</p>\r\n                                <ng-container *ngFor=\"let header of copyForWidthVisChange\">\r\n                                    <div class=\"col-12 colItem\" [class.locked]=\"header.locked\" [class.selected]=\"header.id == headerSelected?.id\" \r\n                                    *ngIf=\"header.hidden == false\">\r\n                                        <div class=\"row align-items-start\" style=\"padding: 0 15px;\">\r\n                                            <div class=\"col-12 col-sm-6 col-md-6 padA0L10R0\" [attr.tabindex]=\"header.locked == true || (header.locked == false && header.visbilityLocked == true && header.orderLocked == true) ? -1 : 0\"\r\n                                                (click)=\"selectHeader(header)\" (keydown)=\"upDownKeyPressHandler($event)\">\r\n                                                <div class=\"row align-items-start\">\r\n                                                    <div class=\"col-12 col-sm-6 col-md-6 padA0L10R0\">\r\n                                                        <div class=\"row align-items-start\" style=\"padding: 0 15px;\">\r\n                                                            <div class=\"col-4 pad0\">\r\n                                                                <p class=\"colLabel xl\" *ngIf=\"header.visbilityLocked == true\" aria-hidden=\"true\">\r\n                                                                    <span class=\"icon icon-blockedLegacy red\" tooltip=\"Visbility Locked\" aria-hidden=\"true\"></span>\r\n                                                                </p>\r\n                                                            </div>\r\n                                                            <div class=\"col-4 pad0\">\r\n                                                                <p class=\"colLabel xl\" *ngIf=\"header.orderLocked == true\" aria-hidden=\"true\">\r\n                                                                    <span class=\"icon icon-unpin red\" tooltip=\"Order Locked\"></span>\r\n                                                                </p>\r\n                                                            </div>\r\n                                                            <div class=\"col-4 pad0\">\r\n                                                                <p class=\"colLabel xl\" *ngIf=\"header.widthLocked == true\" aria-hidden=\"true\">\r\n                                                                    <span class=\"icon icon-trim red\" tooltip=\"Width Locked\"></span>\r\n                                                                </p>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <p class=\"col-12 col-sm-12 col-md-6 colName\">{{header.columnName}}</p>\r\n                                                    <span *ngIf=\"!(header.locked == true || (header.locked == false && header.visbilityLocked == true && header.orderLocked == true))\">\r\n                                                <span class=\"offscreen\" *ngIf=\"header.id == headerSelected?.id\"> column selected to unselect press spacebar or enter</span>\r\n                                                    <span class=\"offscreen\" *ngIf=\"header.id != headerSelected?.id\"> column press spacebar or enter to select column for changing visibility or order</span>\r\n                                                    </span>\r\n                                                    <span class=\"offscreen\" [hidden]=\"!header.locked\"> Column locked for all changes</span>\r\n                                                    <span class=\"offscreen\" *ngIf=\"header.visbilityLocked == true\"> Column visibility locked for changes</span>\r\n                                                    <span class=\"offscreen\" *ngIf=\"header.orderLocked == true\"> Column Order locked for changes</span>\r\n                                                    <span class=\"offscreen\" *ngIf=\"header.widthLocked == true\"> Column Width locked for changes</span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-12 col-sm-6 col-md-6\">\r\n                                                <label class=\"colLabel\" [attr.for]=\"'_mc_' + header.id\">Width <span class=\"offscreen\"> for column {{header.columnName}} in approximate characters </span> <span aria-hidden=\"true\"> (in approx. char)</span></label>\r\n                                                <input class=\"inputStyle colInput\" [(ngModel)]=\"header.chars\" [disabled]=\"header.widthLocked\" (change)=\"widthChanged(header)\"\r\n                                                    [attr.id]=\"'_mc_' + header.id\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"clearfix\"></div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 vxH100 visChangers\">\r\n                        <div class=\"col-12 visChangersContainer\">\r\n                            <div class=\"col-12 visChangersItem zeroPadding\">\r\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null ? -1 : 0\"\r\n                                    [class.disabled]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null\"\r\n                                    (click)=\"swapAbove(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Move Column' + headerSelected?.columnName + 'Up'\">\r\n                                    <i class=\"icon icon-up\"></i>\r\n                                </div>\r\n                                <div class=\"icon-container\" role=\"button\" [attr.tabindex]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null ? -1 : 0\"\r\n                                    [class.disabled]=\"headerSelected?.orderLocked || headerSelected?.hidden || headerSelected == null\"\r\n                                    (click)=\"swapBelow(headerSelected)\" (keydown)=\"upDownKeyPressHandler($event)\" [attr.ariaLabel]=\"'Move Column' + headerSelected?.columnName + 'Down'\">\r\n                                    <i class=\"icon icon-down\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"vxSettingsFooter\">\r\n            <button class=\"btn btn-primary vsTableButton active\" (click)=\"saveChangeInConfig()\">Save</button>\r\n            <button class=\"btn btn-primary vsTableButton\" (click)=\"cancelChangeInConfig()\">Cancel</button>\r\n            <div class=\"infoBtns\" aria-hidden=\"true\">\r\n                <span class=\"icon icon-blockedLegacy\"></span>\r\n                <span class=\"infoLabel\">Visbility Locked,</span>\r\n                <span class=\"icon icon-unpin\"></span>\r\n                <span class=\"infoLabel\">Order Locked,</span>\r\n                <span class=\"icon icon-trim\"></span>\r\n                <span class=\"infoLabel\">Width Locked</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(464);


/***/ })

},[777]);
//# sourceMappingURL=main.bundle.js.map