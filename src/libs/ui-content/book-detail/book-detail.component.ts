import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService, IBook } from '@angular-eBooks/sys-utils';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'eb-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  favorite;
  book;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.book = this.bookService.getIndividualBook(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.book);
    this.favorite = true;
  }

  addFavorite() {
    this.favorite = !this.favorite;
  }

}
