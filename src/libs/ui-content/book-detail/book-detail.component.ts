import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService, IBook, UtilService, UserService } from '@angular-eBooks/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'eb-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  subject: Subject<any> = new Subject<any>();
  favorite: boolean;
  book: IBook | any;
  more_Review: boolean;
  userId = localStorage.getItem('current_User');
  user;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private utilService: UtilService,
    private userService: UserService
  ) {
    this.utilService.toggleCustomerReview.pipe(
      takeUntil(this.subject)
    ).subscribe(bool => this.more_Review = bool);
  }

  ngOnInit() {
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getIndividualBook(
      this.activatedRoute.snapshot.params['id']
    ).pipe(takeUntil(this.subject)).subscribe(comingBook => {
      this.book = comingBook.data();
      this.utilService.sendLoadingIndicator(false);
    });
    if (this.userId) {
      this.userService.getIndividualUser(this.userId).pipe(takeUntil(this.subject)).
      subscribe(comingUser => {
        this.user = comingUser.data();
        if (this.user.favorites.includes(this.activatedRoute.snapshot.params['id'])) {
            this.favorite = false;
        } else {
            this.favorite = true;
        }
      });
    }
  }

  GetCustomerReview() {
    return this.book.reviews;
  }
  addFavorite() {
    this.favorite = !this.favorite;
    this.utilService.showSnackBar(
      this.favorite ? `${this.book.title} removed from your favorites.` :
          `${this.book.title} added to your favorites`
    );
    if (!this.favorite) {
      this.user['favorites'].push(this.activatedRoute.snapshot.params['id']);
    } else {
      this.user['favorites'].pop();
    }
  }

  ngOnDestroy() {
    if (this.user) {
      this.userService.setUser(this.user);
    }
    this.utilService.showCustomerReview(false);
    this.subject.next();
    this.subject.complete();
  }
}
