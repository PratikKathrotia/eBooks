import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, FormArray } from '@angular/forms';
import { BookService, IBook, IBookReview } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ BookService ]
})
export class HomeComponent implements OnInit {
  booksForm: FormGroup;
  allBooks: IBook[];

  constructor(private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit() {
    this.booksForm = this.fb.group({
      title: [''],
      price: [''],
      rating: [''],
      author: [''],
      description: [''],
      publication: [''],
      category: [''],
      imageUrl: [''],
      pages: [''],
      reviews: this.fb.array([
        this.fb.group({
          personName: [''],
          personRating: [''],
          reviewDescription: ['']
        })
      ])
    });

    // this.bookService.getBooks().subscribe(books => {
    //   this.allBooks = books;
    // });
  }

  get reviews() {
    return this.booksForm.get('reviews') as FormArray;
  }

  addReview() {
    this.reviews.push(this.fb.group({
      personName: [''],
      personRating: [''],
      reviewDescription: ['']
    }));
  }

  onSubmit() {
    console.log(this.booksForm.value);
    // this.bookService.addBook(this.booksForm.value);
  }

}
