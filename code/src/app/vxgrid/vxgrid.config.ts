// export module string {
//     export function replaceAll(find, replaceWith): string {
//         var regex = new RegExp(find, 'g');
//         return this.replace(regex, replaceWith);
//     }
// }

declare global {
    interface String {
        replaceAll(find: string, replaceWith: string): string;
    }
}

String.prototype.replaceAll = function (find: string, replaceWith: string) {
    var regex = new RegExp(find, 'g');
    return this.replace(regex, replaceWith);
}

export class MultiBoxFilterItem {
    key: string;
    label: string;
    name: string;
    col: string;
    type: string;
    disabled: boolean = false
    action: string;
    filterDefn: string;
    filterDefnAvailable: boolean = false;
}

export class VxGridColumnConfig {
    id: string = '';
    renderDefn?: boolean = false;
    orderLocked?: boolean = false;
    widthLocked?: boolean = false;
    visbilityLocked?: boolean = false;
    renderHeadDefn?: boolean = false;
    ddSort?: boolean = false;
    ddGroup?: boolean = false;
    ddFilters?: boolean = false;
    ddFiltersWithSearch?: boolean = false;
    dropDownEnabled?: boolean = false;
    hidden?: boolean = false;
    xsHidden?: boolean = false;
    locked?: boolean = false;
    primary?: boolean = false;
    width?: number = 200;
    effectiveWidth?: number = 200;
    idCollection?: string[] = [];
    headerDefn?: string = '';
    cellDefn?: string = '';
    filterCellDefn?: string = '';
    inlineEditOnColumnEnabled?: boolean = false;
    inlineEditValidation?: boolean = false;
    editDefn?: string = '';
    editDefnTemplate?: string = '';
    headTabIndex?: number = 0;
    columnIsRowSelect?: boolean = false;
    columnIsDate?: boolean = false;
    columnDatePipe?: string = 'dd/MM/yyyy';
    renderHybridCellDefn?: boolean = false;
    hybridCompile?: boolean = false;
    filterLimit?: number = 10;
    scopeIsRow?: boolean = false;
    columnClassFn: (any) => string;
    order: number = 0;
    chars: number = 0;
    selected:  boolean = false;
    customSortEnabled: boolean = false;
    constructor(args) {
        for (let i in args) {
            this[i] = args[i];
        }
    }
    customSortFn (a, b) : number{ return 0};
    openChangeHeader(state:boolean){}
}

export class VxGridConfig {
    data: any[];
    vxFilteredData: any[] = [];
    headers: VxGridColumnConfig[];
    enableDropdownsInHeader: boolean = false;
    selectionEnabled: boolean = false;
    selectionAtMyRisk: boolean = false;
    preserveSelectionOnFilters: boolean = false;
    multiSelectionEnabled: boolean = false;
    showGridStats: boolean = false;
    showGridOptions: boolean = false;
    selectAllOnRenderAll: boolean = false;
    virtualization: boolean = false;
    pagination: boolean = false;
    inlineAddRowEnabled: boolean = false;
    inlineEditSyncEnabled: boolean = false;
    inlineDeletingEnabled: boolean = false;
    inlineDeleteOverrideEnabled: boolean = false;
    inlineSaveOverrideEnabled: boolean = false;
    allRowsInDefaultEdit: boolean = false;
    jsonEditorEnabled: boolean = false;
    allRowsSelectionEnabled: boolean = false;
    reverseSortDirection: boolean = false;
    xsTemplate: boolean = false;
    bindOnce: boolean = false;
    hybrid: boolean = false;
    sortPredicateFnPresent: boolean = false;
    multiSelectionDependentCol: string = '';
    pageLength: number = 20;
    latchExcess: number = 20;
    xsRowTitleTemplate: string = '<div class="xsRowTemplate">{{row[vxColSettings.primaryId]}}</div>';
    sortPredicate: string = '';
    ariaPrimary: string = '';
    onSelectionReturnCol: string = '';
    emptyFill: string = '<span>No records to display ...</span>';
    caption: string = 'sample vx grid table caption';
    loaderGifSrc: string = '/src/loaderWhite36.GIF';
    sortPredicateFn(a, b) : number{ return 0};
    hybridCellDefn: (any, VxGridColumnConfig) => string;
    rowClassFn: (any) => string;
}

export interface VxGridConfigCallbacks {
    loadDataRows?(): void;
    getVxCounts?(): { vxAllDataLength: number, vxFilteredDataLength: number, vxSelectedDataLength: number };
    getAppliedFilters(): { column: string, label: string, key: string }[];
    getFilteredDataSet(): any[];
    getSelectedRows() : string[];
    selectRows(ids:any[]) : void;
    deselectRows(ids:any[]) : void;
    sortByColumn(ids:any, direction: boolean): void;
    resetColumnFilters(ids:any[]) :void;
    removeRows(rowIds: any[]) : void;
    deselectAllRows() : void;
    selectAllFiltered() : void;
}

export class VxGridConfigBase extends VxGridConfig implements VxGridConfigCallbacks {
    id: string;
    noData: boolean = false;
    loadDataRows() { }
    getVxCounts() { return { vxAllDataLength: 0, vxFilteredDataLength: 0, vxSelectedDataLength: 0 } }
    getAppliedFilters() { return [] }
    getFilteredDataSet() { return [] }
    getSelectedRows(){ return []}
    selectRows(ids:any[]){}
    deselectRows(ids:any[]){}
    sortByColumn(ids:any, direction: boolean): void {} // NG2-TO-BE-IMPLEMENTED
    resetColumnFilters(ids:any[]) :void {} // NG2-TO-BE-IMPLEMENTED
    removeRows(rowIds: any[]) : void {}
    deselectAllRows() : void {};
    selectAllFiltered() : void {}
}

export class VxGridSettingsBase {
    'primaryId': string = null; // COLUMN ID FOR COLUMN DESIGNATED AS PRIMARY 
    'dropdDownEnabled': Object = {}; // STORES WHETHER THE DROPDOWN, TO ACCESS COLUMN OPERATIONS, IS ENABLED/DISABLED FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
    'dropdDownLoaded': Object = {}; // STORES WHETHER THE DROPDOWN, TO ACCESS COLUMN OPERATIONS, IS LOADED OR NOT FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
    'dropdDownOpen': Object = {}; // STORES WHETHER THE DPOPDOWN, TO ACCESS COLUMN OPERATIONS, IS OPENED OR CLOSED FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
    'dropDownSort': Object = {}; // STORES WHETHER THE SORT OPERATION IS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP
    'dropDownFilters': Object = {}; // STORES WHETHER THE FILTER OPERATION IS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP 
    'dropDownGroup': Object = {}; // STORES WHETHER THE GROUPING OPERATIONIS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP
    'colFiltersStatus': Object = {}; //
    'colFilterPairs': Object = {}; // STORES THE FILTER INFORMATION APPLICABLE FOR A SPECIFIC COLUMN
    'colFiltersActivated': Object = {}; // STORES INFORMATION IN WHICH FILTERS ARE APPLIED ACROSS COLUMNS
    'lastProcessedForFilters': Object = {}; //
    'multiSelected': string[] = []; // STORES THE REFERENCES FOR ALL ROWS WHICH HAVE BEEN CURRENLT SELECTED
    'multiSelColDependent': boolean = false; //
    'reverseSettings': Object = {}; // STORES THE SORT DIRECTIONS CURRENTLY APPLIED FOR COLUMNS WITH BOOLEAN MAPS FOR ASCENDING AND DESCENDING
    'groupPredicate': Object = {}; //
    'groupByColActivated': Object = {}; //
    'rowSelected': Object = {}; // STORES THE INDIVIDUAL ROW SELECTION STATES
    'vxRowClass': Object = {}; // STORES THE CLASSES TO BE APPLIED FOR ROWS 
    'vxRowSelectionDisable': Object = {}; // STORES THE STATES DESIGNATING IF A INDIVIDUAL ROW SELECTION CAN BE TOGGLED OR NOT
    'revealWrapRowData': boolean = false; // STORES WHETHER TO ENABLE WRAPPING FOR ROW CELLS
    'selectAllEnabled': boolean = true; // 
    'menu': boolean = false; //
    'xsViewEnabled': boolean = false; // STORES WHETHER THE XS VIEW IS ENABLED OR NOT
    'xsRowTitleTemplateAvailable': boolean = false; // STORES WHETHER THE ROW TITLE TEMPLATE IS AVAILABLE FOR XS VIEW
    'xsSearch': string = ''; // STORES THE CURRENTLY TOKE AGAINST WHICH WE ARE SERACHING ACCROSS THE GRID IN XS VIEW
    'searchToken': string = ''; // STORES THE CURRENTLY TOKE AGAINST WHICH WE ARE SERACHING ACCROSS THE GRID
    'inlineEditState': Object = {}; // STORES CURRENT ROW EDIT STATE
    'colWithInlineEdits': string[] = [];
    'groupKeys': Object = {};
    'allRowSelected':boolean = false; // STORES THE STATE FOR ALL ROW SELECTIONS COMPOSED TO ONE PLACE
    'allRowSelectionDisabled': boolean = false; // STORES WHETHER TO ALLOW OR INHIBIT ALL ROW SELECTIONS
    'filterSearchToken': Object = {}; //
    'enteredSearchToken': Object = {}; //
    'saveInProgress': Object = {}; // STORES WHETHER A CREATE/EDIT/DELETE OPERATION IS IN PROGRESS
    'netWidth': number = 0;
}

export interface VxGridComponentInterface {
    baseConfig: VxGridConfigBase;
    baseSettings: VxGridSettingsBase;
    baseSettingsCount: {};
    hybridContainer: JQuery;
    scrollContainer: JQuery;
    overallScrollContainer: JQuery;
    hybridScopes: any[];
    rowHeight: number;
    excess: number;
    lastIndexCount: number;
    lastScrollTop: number;
    multiBoxFilters: MultiBoxFilterItem[];
    config: VxGridConfigBase;
    getHybridTableBody(): Element;
    resetConfig(): void;
    prepHybrid(): void;
    hybridGetRowTmpl(row: any): { rowTmpl: string, rowId: string };
    compileAppend(rowTmpl: string, _id: any): void;
    appendRows(_rows: any[]): void;
    rowSelectionChanged(rowId): void;
    initCheckScrollUpDownArrow(): void;
    prepForScrollInsertion(): void;
    debPep();
    getNonHiddenColCount(): number;
    calculateEffectiveWidths(headers: VxGridColumnConfig[]): VxGridColumnConfig[];
    checkToScrollDownArrow(): void;
    checkToScrollUpArrow(): void;
    justScrollTop(): void;
    justScrollDown(): void;
    addNewRow(): void
    revertEdits(): void
    deleteRows(): void
    selectAllFiltered(): void
    clearSelection(): void
    revealWrapToggle(): void
    clearFilters(): void
    openManageColumns(content:any): void
}