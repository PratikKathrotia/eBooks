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
  gridView: boolean;

  constructor(
    private bookService: BookService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.gridView = false;
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getBooks().subscribe(books => {
      this.allBooks = books;
      this.utilService.sendLoadingIndicator(false);
    });
  }

}
