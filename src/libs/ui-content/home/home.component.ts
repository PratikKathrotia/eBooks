import { Component, OnInit } from '@angular/core';
import { BookService, IBook } from '@angular-eBooks/sys-utils';
import { UtilService } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ BookService ]
})
export class HomeComponent implements OnInit {
  allBooks: IBook[];
  book: IBook;

  constructor(
    private bookService: BookService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getBooks().subscribe(books => {
      this.allBooks = books;
      this.book = this.allBooks[0];
      this.utilService.sendLoadingIndicator(false);
    });
  }

}
