import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { BookComponent } from './book/book.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    BookComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule
  ],
  exports: [
    BookComponent,
    LoadingIndicatorComponent
  ]
})
export class UiCommonModule { }
