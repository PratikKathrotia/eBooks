import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook, UtilService, UserService, IUser } from '@angular-eBooks/sys-utils';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'eb-grid-book',
  templateUrl: './grid-book.component.html',
  styleUrls: ['./grid-book.component.scss']
})
export class GridBookComponent implements OnInit {
  @Input() book: IBook;
  @Input() isFavorited: boolean;
  @Output() favoriteState = new EventEmitter<any>();
  showDelay = new FormControl(500);
  subject: Subject<any>;

  constructor(
    private utilService: UtilService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subject = new Subject<any>();
  }

  handleFavoriteClick() {
    this.isFavorited = !this.isFavorited;
    this.favoriteState.emit({
      bookId: this.book.id,
      flag: this.isFavorited
    });
    this.utilService.showSnackBar(
      this.isFavorited ? `${this.book.title} added to your favorites.` :
          `${this.book.title} removed from your favorites`
    );
  }

  handleBookClick() {
    this.router.navigate(['/global/book', this.book.id]);
  }

}
