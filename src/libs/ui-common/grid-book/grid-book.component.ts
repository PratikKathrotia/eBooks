import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-grid-book',
  templateUrl: './grid-book.component.html',
  styleUrls: ['./grid-book.component.scss']
})
export class GridBookComponent implements OnInit {
  @Input() book: IBook;
  favorite: boolean;

  constructor() { }

  ngOnInit() {
    this.favorite = false;
  }

  handleFavoriteClick() {
    this.favorite = !this.favorite;
  }

  haide() {
    console.log(this.book);
  }

}
