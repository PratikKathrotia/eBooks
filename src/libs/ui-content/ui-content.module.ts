import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { UiCommonModule } from '../ui-common/ui-common.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { PopularBooksComponent } from './popular-books/popular-books.component';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookDetailComponent,
    CustomerReviewsComponent
    PopularBooksComponent,
    FavoriteBooksComponent,
    SettingsComponent
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
