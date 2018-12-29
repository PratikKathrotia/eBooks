import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SiderailComponent } from './siderail/siderail.component';
import { HeaderComponent } from './header/header.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
    SiderailComponent,
    HeaderComponent,
    ActionBarComponent
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
    SiderailComponent,
    HeaderComponent,
    ActionBarComponent
  ]
})
export class UiGlobalModule { }
