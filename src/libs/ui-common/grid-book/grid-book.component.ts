import { Component, OnInit, Input } from '@angular/core';
import { IBook, UtilService } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-grid-book',
  templateUrl: './grid-book.component.html',
  styleUrls: ['./grid-book.component.scss']
})
export class GridBookComponent implements OnInit {
  @Input() book: IBook;
  favorite: boolean;

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.favorite = false;
  }

  handleFavoriteClick() {
    this.favorite = !this.favorite;
    this.utilService.showSnackBar(
      this.favorite ? `${this.book.title} added to your favorites.` :
          `${this.book.title} removed from your favorites`
    );
  }

}
