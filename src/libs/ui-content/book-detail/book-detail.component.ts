import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService, IBook, UtilService } from '@angular-eBooks/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'eb-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  subject: Subject<any> = new Subject<any>();
  favorite: boolean;
  book: IBook | any;
  more_Review: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private utilService: UtilService
  ) {
    this.utilService.toggleCustomerReview.pipe(
      takeUntil(this.subject)
    ).subscribe(bool => this.more_Review = bool);
  }

  ngOnInit() {
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getIndividualBook(
      this.activatedRoute.snapshot.params['id']
    ).pipe(takeUntil(this.subject)).subscribe(comingBook => {
      this.book = comingBook.data();
      this.utilService.sendLoadingIndicator(false);
    });
    this.favorite = true;
  }

  ngOnDestroy() {
    this.utilService.showCustomerReview(false);
    this.subject.next();
    this.subject.complete();
  }

  GetCustomerReview() {
    return this.book.reviews;
  }
  addFavorite() {
    this.favorite = !this.favorite;
  }

}
