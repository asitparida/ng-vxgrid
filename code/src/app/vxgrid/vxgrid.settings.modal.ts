import { Component, Input } from '@angular/core';
import * as _ from 'underscore';
import * as $ from "jquery";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VxGridColumnConfig } from './vxgrid.config';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './vxgrid.settings.modal.html',
})
export class VxGridSettingsModal {
    @Input() copyForWidthVisChange: VxGridColumnConfig[];
    headerSelected: VxGridColumnConfig = null;
    headerSelectedForVisChange: VxGridColumnConfig = null;

    constructor(public activeModal: NgbActiveModal) { }

    makeVisible(head) {
        var self = this;
        var header = _.find(self.copyForWidthVisChange, function (i) { return i.id.localeCompare(head.id) == 0 });
        if (typeof header !== 'undefined' && header != null && header != {} && header.visbilityLocked == false)
            header.hidden = false;
    }
    makeHidden(head) {
        var self = this;
        var header = _.find(self.copyForWidthVisChange, function (i) { return i.id.localeCompare(head.id) == 0 });
        if (typeof header !== 'undefined' && header != null && header != {} && header.visbilityLocked == false)
            header.hidden = true;
    }
    widthChanged(header) {
        header.width = Math.ceil(header.chars * 7) + 20;
    }
    swapAbove(header) {
        var self = this;
        if (header.locked == false) {
            var swapFrom = header.order;
            var swapTo = header.order;
            var stableSwap = true;
            do {
                swapTo = swapTo - 1;
                stableSwap = true;
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                if (typeof headerSwappable === 'undefined' || headerSwappable == null || headerSwappable == {})
                    stableSwap = false;
            } while (!stableSwap && swapTo >= 0);
            if (stableSwap && swapTo >= 0) {
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                if (typeof headerSwappable !== 'undefined' && headerSwappable != null && headerSwappable != {}) {
                    headerSwappable.order = swapFrom;
                    header.order = swapTo;
                }
            }
            self.copyForWidthVisChange = _.sortBy(self.copyForWidthVisChange, 'order');
        }
    }
    swapBelow(header) {
        var self = this;
        if (header.locked == false) {
            var swapFrom = header.order;
            var swapTo = header.order;
            var stableSwap = true;
            do {
                swapTo = swapTo + 1;
                stableSwap = true;
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                if (typeof headerSwappable === 'undefined' || headerSwappable == null || headerSwappable == {})
                    stableSwap = false;
            } while (!stableSwap && swapTo <= self.copyForWidthVisChange.length - 1);
            if (stableSwap && swapTo <= self.copyForWidthVisChange.length - 1) {
                var headerSwappable = _.find(self.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                if (typeof headerSwappable !== 'undefined' && headerSwappable != null && headerSwappable != {}) {
                    headerSwappable.order = swapFrom;
                    header.order = swapTo;
                }
            }
            self.copyForWidthVisChange = _.sortBy(self.copyForWidthVisChange, 'order');
        }
    }
    cancelChangeInConfig() {
        this.activeModal.dismiss();
    }
    saveChangeInConfig() {
        var self = this;
        var newConfig = [];
        newConfig = _.sortBy(self.copyForWidthVisChange, function (col) {
            var column = _.find(self.copyForWidthVisChange, function (item) { return item.id.localeCompare(col.id) == 0 });
            if (typeof column !== 'undefined' && column != null && column != {})
                return column.order
            else
                return 1;
        });
        this.activeModal.close(newConfig);
    }
    selectHeader = function (header) {
        var self = this;
        if (header.locked == true)
            return;
        header.selected = !header.selected;
        _.each(self.copyForWidthVisChange, function (col:VxGridColumnConfig) {
            if (col.id.localeCompare(header.id) != 0)
                col.selected = false;
        });
        if (header.selected == true) {
            self.headerSelected = header;
        }
        else {
            self.headerSelected = null;
        }
    }
    upDownKeyPressHandler = function (e) {
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
    }
    upDownMovement = function (e) {
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
    }
}