import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SidebarRailService,
  SidebarItem,
  UtilService
} from '@angular-eBooks/sys-utils';
import { Subject } from 'rxjs';

@Component({
  selector: 'eb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [ UtilService ]
})
export class SidebarComponent implements OnInit {
  selectedItem = 'item1';
  isRailShowing: boolean;
  sidebarItems: SidebarItem[];
  subject: Subject<any>;

  constructor(
    private utilService: UtilService,
    private sidebarService: SidebarRailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isRailShowing = true;
    this.sidebarService.getSiderailStatus(false);
    this.subject = new Subject<any>();
    this.configureItems();
  }

  isSelected(item: SidebarItem) {
    return this.selectedItem === item.id;
  }

  configureItems() {
    this.sidebarItems = [
      {
        'name': 'home',
        'id': 'item1',
        'icon': 'home',
        'tooltip': 'Home',
        'routeUrl': '/global/home',
        'showRail': false
      },
      {
        'name': 'categories',
        'id': 'item2',
        'icon': 'book',
        'tooltip': 'Categories',
        'showRail': true,
        'railItemList': []
      },
      {
        'name': 'bookmarks',
        'id': 'item3',
        'icon': 'favorite',
        'tooltip': 'Favorites',
        'routeUrl': '/global/favorites',
        'showRail': false
      },
      {
        'name': 'popular',
        'id': 'item5',
        'icon': 'grade',
        'tooltip': 'Popular',
        'routeUrl': '/global/popular',
        'showRail': false
      },
      {
        'name': 'settings',
        'id': 'item4',
        'icon': 'settings',
        'tooltip': 'Settings',
        'routeUrl': '/global/settings',
        'showRail': false
      }
    ];
  }

  handleSidebarItemClick(item: SidebarItem) {
    if (this.selectedItem === item.id) {
      if (item.showRail) {
        this.sidebarService.getSiderailStatus(!this.isRailShowing);
        this.isRailShowing = !this.isRailShowing;
      }
    } else {
      this.selectedItem = item.id;
      this.sidebarService.getSiderailStatus(item.showRail);
      this.isRailShowing = item.showRail;
    }

    if (item.routeUrl) {
      this.router.navigate([item.routeUrl]);
    }
  }

}
