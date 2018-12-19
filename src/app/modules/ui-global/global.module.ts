import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SiderailComponent } from './siderail/siderail.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
    SiderailComponent
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
    SiderailComponent
  ]
})
export class UiGlobalModule { }
