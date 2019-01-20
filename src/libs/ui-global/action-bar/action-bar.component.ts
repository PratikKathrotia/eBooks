import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eb-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  itemsInTheCart: number;

  constructor() { }

  ngOnInit() {
    this.itemsInTheCart = 2;
  }

}
