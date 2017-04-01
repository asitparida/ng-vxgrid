import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactoryResolver, OpaqueToken, Injectable, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { VxGridModule } from "./vxgrid/vxgrid.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export let APP_CONFIG = new OpaqueToken('app.config');

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
    providers: [
        { provide : APP_CONFIG, useValue: window['selectors']}
    ],
    entryComponents:[AppComponent]    
})
export class AppModule {
    constructor(private resolver: ComponentFactoryResolver, @Inject(APP_CONFIG) private bootStrapConfig : Array<any>) {        
    }
    ngDoBootstrap(moduleRef) {               
        for(let _selector of this.bootStrapConfig)
        {
            let factory = this.resolver.resolveComponentFactory(AppComponent);
            factory.selector = _selector;
            moduleRef.bootstrap(factory);
        }        
    }
}
