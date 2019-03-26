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
  showViewMore: boolean = true;
  ngOnInit() {
    this.reviews = this.bookDetailComponent.GetCustomerReview();
    if (this.reviews.length <= 10) {
      this.arrLength = this.reviews.length;
      this.showViewMore = !this.showViewMore;
    } else {
      this.arrLength = 10;
    }
    for (let i = 0; i < this.arrLength; i++) {
      this.first_Five_Reviews.push(this.reviews[i]);
    }
  }

  viewMoreReviews() {
    this.arrLength = this.arrLength + 10;
    for (let i = this.first_Five_Reviews.length; i < this.arrLength; i++) {
      if (this.reviews[i]) {
        this.first_Five_Reviews.push(this.reviews[i]);
      } else {
        this.showViewMore = !this.showViewMore;
        return;
      }
    }
  }
}
