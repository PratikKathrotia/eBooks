import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { GlobalModule } from '@angular-eBooks/ui-global';
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
    MaterialDesignModule,
    GlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
