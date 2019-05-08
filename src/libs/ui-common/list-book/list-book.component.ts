import { Component, OnInit, Input } from '@angular/core';
import { IBook, UtilService } from '@angular-eBooks/sys-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  @Input() book: IBook;
  favorite: Boolean;

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit() {
    this.favorite = false;
    this.book.description = this.book.description.slice(0, 270) + ' ...';
  }

  addFavorite() {
    if (localStorage.getItem('current_user')) {
      this.favorite = !this.favorite;
      this.utilService.showSnackBar(
      this.favorite ? `${this.book.title} added to your favorites.` :
      `${this.book.title} removed from your favorites`
    );
  } else {
    alert(`Please Sign In or Sign Up to add this book into your favorite list.
    Thank you!`);
}
  }

  handleSelectBook() {
    this.router.navigate(['global/book', this.book.id]);
  }
}
