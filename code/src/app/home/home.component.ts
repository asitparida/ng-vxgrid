import { Component } from "@angular/core";
import { VxGridConfigBase, VxGridColumnConfig } from '../vxgrid/vxgrid.config';
import * as _ from 'underscore'
import * as $ from "jquery";

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent {
    gridConfig: VxGridConfigBase;
    constructor() {
        this.gridConfig = new VxGridConfigBase();
    }
    loadRows() {
        var Range: number = 100;
        var _samples:any[] = [];
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
            rec.locked = (_.sample([true, false]) as boolean).toString() + '_' + i;
            rec.laborId = 'XXX-XXXX-XXXX' + '_' + i;
            rec.engagement = _.sample(['Fist Up Consultants', 'Coco Cola', 'Pepsi', 'NS78-RTY-5676677-67', 'NS78-RTY-5676677-67-Co-Co-fifgytf', 'Pepsi46456', 'NhffugycfftyfyS78-RTY-5676677-67', 'NS78-RTY-5676bghcvfgcfdtfcfr677-67-Co-Co-fifgytf']) as string,
                rec.userAlias = _.sample(['asparida', 'prasadne', 'ruprawat', 'asparida1', 'prasadne1', 'ruprawat1', 'asparida2', 'prasadne2', 'ruprawat2', 'asparida3', 'prasadne3', 'ruprawat3']) as string;
            _samples.push(rec);
        });
        this.gridConfig.data = _samples;
        console.log(this.gridConfig.data);
        console.log(this.gridConfig);
        this.gridConfig.loadDataRows();
    }
    log(){
        // console.log(this.gridConfig.getVxCounts());
        // console.log(this.gridConfig.getAppliedFilters());
        // console.log(this.gridConfig.getFilteredDataSet());
        // console.log(this.gridConfig.getSelectedRows());
        this.gridConfig.deselectRows(this.gridConfig.getSelectedRows());
        this.gridConfig.selectRows(['1']);
        //this.gridConfig.deselectAllRows();
    }
    ngOnInit() {
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
        }
        this.gridConfig.headers = [
            new VxGridColumnConfig({ id: 'locked', columnName: 'Locked', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", colClass: 'dtPickerClass' }),
            new VxGridColumnConfig({ id: 'dt', columnIsDate: true, columnDatePipe: 'dd-MMM-yyyy', columnName: 'Date', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' }),
            new VxGridColumnConfig({ id: 'link', columnName: 'Link', renderDefn: false, width: '150', headerDefn: '<span>Link</span>', hidden: false, cellDefn: '<a style="padding-left:10px;" ng-href="{{VX_DATA_POINT}}" >{{VX_DATA_POINT}}</a>', inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" ng-class=\'{ "invalidField" : VX_INVALID_ROW && VX_INVALID_FIELD_ROW  }\' ng-change="VX_CONFIG.validateLinkField(VX_ROW_POINT, VX_DATA_POINT)" />', inlineEditValidation: true, renderHybridCellDefn: true }),
            new VxGridColumnConfig({ id: 'customer', columnName: 'Customer', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, inlineEditOnColumnEnabled: true, hidden: false, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' }),
            new VxGridColumnConfig({ id: 'engagement', columnName: 'Engagement', renderDefn: false, ddSort: true, ddGroup: true, ddFilters: true, ddFiltersWithSearch: true, dropDownEnabled: true, hidden: false, locked: false, inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' }),
            new VxGridColumnConfig({ id: 'assignment', columnName: 'Assignment', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, hidden: false }),
            new VxGridColumnConfig({ id: 'category', columnName: 'Category', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, ddFiltersWithSearch: true, dropDownEnabled: true, filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span>{{VX_DATA_POINT.name}}</span>", cellDefn: '<span>{{VX_DATA_POINT.name}}</span>', editDefn: '<select class="selectStyleSampleA" ng-options="item.name for item in row.categories" ng-disabled="vxColSettings.inlineEditState[VX_ROW_POINT] == true" ng-model="row[\'category\']"></select>', inlineEditOnColumnEnabled: true, renderHybridCellDefn: true, hybridCompile: true, getFilterAriaLabel: function (filter:any) { return filter.name; } }),
            new VxGridColumnConfig({ id: 'userAlias', columnName: 'User', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, hidden: false, cellDefn: '<select class="selectStyleSampleA" ng-model="row.userAlias" ng-options="user for user in row.users" ng-disabled="vxColSettings.inlineEditState[VX_ROW_POINT] == true"><option value="">Select an option </option> </select>', customSortEnabled: true }),
            new VxGridColumnConfig({ id: 'labor', columnName: 'Labor', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false, headTabIndex: -1 }),
            new VxGridColumnConfig({ id: 'timezone', columnName: 'Timezone', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false }),
            new VxGridColumnConfig({ id: 'status', columnName: 'Status', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false }),
            new VxGridColumnConfig({ id: 'laborId', columnName: 'Labor ID', renderDefn: false, ddSort: true, dropDownEnabled: false, ddGroup: false, ddFilters: true, ddFiltersWithSearch: true, hidden: false, widthLocked: true, orderLocked: false, visbilityLocked: true })
        ]
    }
}