import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eb-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() customer_Reviews: boolean;
  star_empty_icon = 'star_border';
  star_half_icon = 'star_half';
  star_filled_icon = 'star';
  halfStar = false;
  totalStar: number = 5;
  averageStarRating: number = 3.7;
  intRatingNum: number = Math.floor(this.averageStarRating);
  floatRatingNum: number = parseFloat((this.averageStarRating - this.intRatingNum).toFixed(1));
  remainingArrValue = this.totalStar - this.intRatingNum;
  arrFilledStar = [];
  emptyStarArr = [];

  constructor() { }

  ngOnInit() {
    if (0.3 <= this.floatRatingNum && this.floatRatingNum <= 0.7) {
      for (let i = 0; i < this.intRatingNum - 1; i++) {
        this.arrFilledStar.push(i + 1);
      }
      this.halfStar = true;
    } else {
      for (let i = 0; i < this.intRatingNum; i++) {
        this.arrFilledStar.push(i + 1);
      }
    }
    for (let i = 0; i < this.remainingArrValue; i++) {
      this.emptyStarArr.push(i + 1);
    }
  }

}
