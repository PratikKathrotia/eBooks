import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eb-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  book_Price = 22;
  book_Title = `Lincoln and Gettysburg Address`;
  book_Author = `Douglas L. Wilson`;
  book_Description = `The Gettysburg Address is a speech that U.S. President Abraham Lincoln
  delivered during the American Civil War at the dedication of the Soldiers' National Cemetery
  in Gettysburg, Pennsylvania, on the afternoon of Thursday, November 19, 1863, four
  and a half months after the Union armies defeated those of the Confederacy at the
  Battle of Gettysburg. It is one of the best-known speeches in American history.`;
  favorite;

  constructor() { }

  ngOnInit() {
    this.book_Description = this.book_Description.slice(0, 270) + ' ...';
  }

  addFavorite() {
    this.favorite = !this.favorite;
  }
}
