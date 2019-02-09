import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { UiCommonModule } from '../ui-common/ui-common.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookDetailComponent,
    CustomerReviewsComponent
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule,
    UiCommonModule,
    ReactiveFormsModule,
    UiMaterialDesignModule
  ]
})
export class UiContentModule { }
