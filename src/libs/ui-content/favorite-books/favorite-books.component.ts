import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, BookService, IBook, UtilService } from '@angular-eBooks/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'eb-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.scss']
})
export class FavoriteBooksComponent implements OnInit, OnDestroy {
  subject: Subject<any>;
  allBooks: IBook[];
  userBooks: IBook[];

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.userBooks = [];
    this.subject = new Subject<any>();
    this.utilService.sendLoadingIndicator(true);
    this.bookService.getBooks().pipe(
      takeUntil(this.subject)
    ).subscribe(books => {
      this.allBooks = books as IBook[];
      this.userService.getIndividualUser(
        localStorage.getItem('current_User')
      ).pipe(takeUntil(this.subject)).subscribe(user => {
        const userBookIds: string[] = user.data()['favoriteBooks'];
        this.allBooks.forEach(book => {
          if (userBookIds.includes(book.id)) {
            this.userBooks.push(book);
          }
        });
        this.utilService.sendLoadingIndicator(false);
      });
    });
  }

  ngOnDestroy() {
    this.subject.next();
    this.subject.complete();
  }

}
