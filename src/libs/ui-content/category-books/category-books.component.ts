import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService, IBook } from '@angular-eBooks/sys-utils';
import { UtilService } from '@angular-eBooks/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'eb-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.scss'],
  providers: [ BookService ]
})
export class CategoryBooksComponent implements OnInit, OnDestroy {
  allBooks: IBook[];
  subject: Subject<any>;
  list_View: boolean;

  constructor(
    private bookService: BookService,
    private utilService: UtilService,
    private activatedRoute: ActivatedRoute
  ) {
      this.utilService.toggleViewIndicator.subscribe(bool => this.list_View = bool);
  }

  ngOnInit() {

    this.subject = new Subject<any>();
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getBooks().pipe(takeUntil(this.subject))
    .subscribe(books => {
      this.allBooks = books.filter(book => {
        return book.category.toLowerCase() === this.activatedRoute.snapshot.params['name'];
      });
      console.log(this.allBooks);
      this.utilService.sendLoadingIndicator(false);
    });
  }

  ngOnDestroy() {
    this.subject.next();
    this.subject.complete();
  }

}
