import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eb-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() customer_Review: boolean;
  @Input() rating: number;
  star_empty_icon = 'star_border';
  star_half_icon = 'star_half';
  star_filled_icon = 'star';
  halfStar = false;
  totalStar: number;
  intRatingNum: number;
  floatRatingNum: number;
  remainingArrValue: number;
  arrFilledStar = [];
  emptyStarArr = [];

  constructor() { }

  ngOnInit() {
    this.totalStar = 5;
    this.intRatingNum = Math.floor(this.rating);
    this.floatRatingNum = parseFloat((this.rating - this.intRatingNum).toFixed(1));
    this.remainingArrValue = this.totalStar - this.intRatingNum;
    if (0.3 <= this.floatRatingNum && this.floatRatingNum <= 0.7) {
      for (let i = 0; i < this.intRatingNum; i++) {
        this.arrFilledStar.push(i + 1);
      }
      this.halfStar = true;
      for (let i = 0; i < this.remainingArrValue - 1; i++) {
        this.emptyStarArr.push(i + 1);
      }
    } else if (0.7 < this.floatRatingNum) {
      for (let i = 0; i < this.intRatingNum + 1; i++) {
        this.arrFilledStar.push(i + 1);
      }
      for (let i = 0; i < this.remainingArrValue - 1; i++) {
        this.emptyStarArr.push(i + 1);
      }
    } else {
      for (let i = 0; i < this.intRatingNum; i++) {
        this.arrFilledStar.push(i + 1);
      }
      for (let i = 0; i < this.remainingArrValue; i++) {
        this.emptyStarArr.push(i + 1);
      }
    }
  }

}
