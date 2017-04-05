import { BrowserModule } from '@angular/platform-browser';
import { 
    NgModule, 
    ComponentFactoryResolver, 
    OpaqueToken, 
    Injectable, 
    Inject 
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { VxGridModule } from "./vxgrid/vxgrid.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        VxGridModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ROUTING,
        NgbModule.forRoot()
    ],
    providers: [],
    entryComponents:[AppComponent]
})
export class AppModule {
    constructor(private resolver: ComponentFactoryResolver) {        
    }
    getWindowRef():Window{
        return window;
    }
    ngDoBootstrap(moduleRef:any) {   
        var self = this;            
        for(let _selector of self.getWindowRef()['selectors'])
        {
            let factory = this.resolver.resolveComponentFactory(AppComponent);
            factory.selector = _selector;
            moduleRef.bootstrap(factory);
        }        
    }
}
