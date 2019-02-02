import { Component, OnInit, Input } from '@angular/core';
import { IBook, UtilService } from '@angular-eBooks/sys-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-grid-book',
  templateUrl: './grid-book.component.html',
  styleUrls: ['./grid-book.component.scss']
})
export class GridBookComponent implements OnInit {
  @Input() book: IBook;
  favorite: boolean;

  constructor(
    private utilService: UtilService,
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
      this.favorite ? `${this.book.title} added to favorites.` :
          `${this.book.title} removed from favorites`
    );
  }

}
