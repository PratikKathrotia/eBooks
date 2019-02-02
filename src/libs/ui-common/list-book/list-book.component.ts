import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '@angular-eBooks/sys-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  @Input() book: IBook;
  favorite: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.favorite = false;
    this.book.description = this.book.description.slice(0, 270) + ' ...';
  }

  addFavorite() {
    this.favorite = !this.favorite;
  }

  handleSelectBook() {
    this.router.navigate(['global/book', this.book.id]);
  }
}
