import { Component, OnInit } from '@angular/core';
import { BookService, IBook } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ BookService ]
})
export class HomeComponent implements OnInit {
  allBooks: IBook[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    // this.bookService.getBooks().subscribe(books => {
    //   this.allBooks = books;
    // });
  }

}
