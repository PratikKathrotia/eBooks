import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'eb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ]
})
export class HomeComponent implements OnInit {
  booksForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.booksForm = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(''),
      rating: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
      publication: new FormControl(''),
      category: new FormControl(''),
      imageUrl: new FormControl(''),
      pages: new FormControl(''),
      reviews: new FormGroup({
        personName: new FormControl(''),
        personRating: new FormControl(''),
        reviewDescription: new FormControl('')
      })
    });
  }

  onSubmit() {
    console.log(this.booksForm.value);
  }

}
