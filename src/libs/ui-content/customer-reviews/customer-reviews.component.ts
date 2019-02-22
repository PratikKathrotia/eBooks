import { Component, OnInit } from '@angular/core';
import { BookService } from '../../sys-utils/services/book.service';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'eb-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit {

  constructor(private bookService: BookService,
              private bookDetailComponent: BookDetailComponent) { }
  reviews;
  first_Five_Reviews = [];
  arrLength;
  ngOnInit() {
    this.reviews = this.bookDetailComponent.GetCustomerReview();
    if (this.reviews.length <= 5) {
      this.arrLength = this.reviews.length;
    } else {
      this.arrLength = 5;
    }
    for (let i = 0; i < this.arrLength; i++) {
      this.first_Five_Reviews.push(this.reviews[i]);
    }
  }
}
