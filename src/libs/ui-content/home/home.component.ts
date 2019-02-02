import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService, IBook } from '@angular-eBooks/sys-utils';
import { UtilService } from '@angular-eBooks/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'eb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ BookService ]
})
export class HomeComponent implements OnInit, OnDestroy {
  allBooks: IBook[];
  subject: Subject<any>;
  gridView: boolean;

  constructor(
    private bookService: BookService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.gridView = true;
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getBooks().pipe(takeUntil(this.subject))
    .subscribe(books => {
      this.allBooks = books;
      this.utilService.sendLoadingIndicator(false);
    });
  }

  ngOnDestroy() {
    this.subject.next();
    this.subject.complete();
  }

}
