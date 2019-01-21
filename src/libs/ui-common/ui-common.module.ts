import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { GridBookComponent } from './grid-book/grid-book.component';
import { ListBookComponent } from './list-book/list-book.component';

@NgModule({
  declarations: [
    LoadingIndicatorComponent,
    GridBookComponent,
    ListBookComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule
  ],
  exports: [
    StarRatingComponent,
    LoadingIndicatorComponent,
    GridBookComponent,
    ListBookComponent
  ]
})
export class UiCommonModule { }
