import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() signUpVal = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openSignUp() {
    this.signUpVal.emit(true);
  }

}
