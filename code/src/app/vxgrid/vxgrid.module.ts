import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http';
import { VxGridComponent } from './vxgrid.component'
import { FormsModule } from '@angular/forms';
import { VxNumberFixedLenPipe } from './vxgrid.pipes';
import { VxGridSettingsModal } from './vxgrid.settings.modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        VxGridComponent,
        VxNumberFixedLenPipe,
        VxGridSettingsModal
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        NgbModule
    ],
    exports: [
        VxGridComponent,
        VxNumberFixedLenPipe
    ],
    entryComponents:[
        VxGridSettingsModal
    ]
})
export class VxGridModule { }
