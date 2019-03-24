import { Component, OnInit, Input } from '@angular/core';
import { IBook, UtilService, UserService } from '@angular-eBooks/sys-utils';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-grid-book',
  templateUrl: './grid-book.component.html',
  styleUrls: ['./grid-book.component.scss']
})
export class GridBookComponent implements OnInit {
  @Input() book: IBook;
  favorite: boolean;
  showDelay = new FormControl(500);

  constructor(
    private utilService: UtilService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.favorite = false;
  }

  handleBookClick() {
    this.router.navigate(['/global/book', this.book.id]);
  }

  handleFavoriteClick() {
    this.favorite = !this.favorite;
    this.utilService.showSnackBar(
      this.favorite ? `${this.book.title} added to your favorites.` :
          `${this.book.title} removed from your favorites`
    );
  }

}
