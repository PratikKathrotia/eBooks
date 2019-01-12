import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  loggedIn;

  constructor() { }

  ngOnInit() {
    this.loggedIn = true;
  }

}
