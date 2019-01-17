import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { UiCommonModule } from '../ui-common/ui-common.module';

import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    UiMaterialDesignModule,
    UiCommonModule
  ]
})
export class UiContentModule { }
