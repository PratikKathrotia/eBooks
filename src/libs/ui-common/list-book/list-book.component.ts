import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  @Input() book: IBook;
  favorite;

  constructor() { }

  ngOnInit() {
    this.book.description = this.book.description.slice(0, 270) + ' ...';
  }

  addFavorite() {
    this.favorite = !this.favorite;
  }
}
