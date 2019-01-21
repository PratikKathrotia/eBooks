import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { GridBookComponent } from './grid-book/grid-book.component';
import { ListBookComponent } from './list-book/list-book.component';

@NgModule({
  declarations: [
    LoadingIndicatorComponent,
    GridBookComponent,
    ListBookComponent
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule
  ],
  exports: [
    LoadingIndicatorComponent,
    GridBookComponent,
    ListBookComponent
  ]
})
export class UiCommonModule { }
