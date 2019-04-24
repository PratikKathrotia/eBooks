import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BookService, IBook } from '@angular-eBooks/sys-utils';
import { UtilService, UserService } from '@angular-eBooks/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'eb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ BookService ]
})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() grid_View: boolean;
  allBooks: IBook[];
  subject: Subject<any>;
  list_View: boolean;
  userId = localStorage.getItem('current_User');
  user;

  constructor(
    private bookService: BookService,
    private utilService: UtilService,
    private userService: UserService
  ) {
      this.utilService.toggleViewIndicator.subscribe(bool => this.list_View = bool);
  }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getBooks().pipe(takeUntil(this.subject))
    .subscribe(books => {
      this.allBooks = books;
    });
    if (this.userId) {
      this.userService.getIndividualUser(this.userId).pipe(takeUntil(this.subject))
      .subscribe(comingUser => {
        this.user = comingUser.data();
        this.utilService.sendLoadingIndicator(false);
      });
    }
    this.utilService.sendLoadingIndicator(false);
  }

  ngOnDestroy() {
    if (this.user) {
      this.userService.setUser(this.user);
    }
    this.subject.next();
    this.subject.complete();
  }

  isFavoriteState($event) {
    if (this.user) {
      if (this.user.favorites && $event.flag) {
        this.user['favorites'].push($event.bookId);
      } else {
        this.user['favorites'].splice(this.user.favorites.indexOf($event.bookId), 1);
      }
    }
  }

  isBookFavorited(id) {
    if (this.user && this.user.hasOwnProperty('favorites') &&
      this.user.favorites) {
        return this.user['favorites'].find(x => x === id) ? true : false;
      }
  }

}
