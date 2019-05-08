import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { TitlecasePipe } from './pipes';

@NgModule({
  declarations: [
    TitlecasePipe
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule
  ],
  exports: [
    TitlecasePipe
  ]
})
export class SysUtilsModule { }
