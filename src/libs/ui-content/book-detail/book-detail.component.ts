import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eb-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  favorite;

  constructor() { }

  ngOnInit() {
    this.favorite = true;
  }

  addFavorite() {
    this.favorite = !this.favorite;
  }

}
