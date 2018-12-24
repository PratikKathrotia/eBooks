import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'eb-siderail',
  templateUrl: './siderail.component.html',
  styleUrls: ['./siderail.component.scss']
})
export class SiderailComponent implements OnInit, OnDestroy {
  siderailItems = [
    {title: 'Lots of Other'},
    {title: 'other things'},
    {title: 'things can'},
    {title: 'can go here'},
    {title: 'here lots of'},
    {title: 'Lots of other'},
    {title: 'other things'},
    {title: 'things can go'},
    {title: 'can go here'},
    {title: 'here here'}
  ];
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

}
