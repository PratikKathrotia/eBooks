import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService, IBook, UtilService } from '@angular-eBooks/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'eb-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  subject: Subject<any>;
  favorite: boolean;
  book: IBook | any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getIndividualBook(
      this.activatedRoute.snapshot.params['id']
    ).pipe(takeUntil(this.subject)).subscribe(comingBook => {
      this.book = comingBook.data();
      this.utilService.sendLoadingIndicator(false);
    });
    this.favorite = true;
  }

  addFavorite() {
    this.favorite = !this.favorite;
  }

}
