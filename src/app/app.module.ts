import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { UiGlobalModule } from '@angular-eBooks/ui-global';
import { UiCommonModule } from '@angular-eBooks/ui-common';
import { UiContentModule } from '@angular-eBooks/ui-content';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiMaterialDesignModule,
    UiCommonModule,
    UiGlobalModule,
    UiContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
