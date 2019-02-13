import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SidebarRailService,
  SidebarItem
} from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedItem = 'item1';
  isRailShowing: boolean;
  sidebarItems: SidebarItem[];

  constructor(
    private sidebarService: SidebarRailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isRailShowing = true;
    this.sidebarService.getSiderailStatus(false);
    this.sidebarItems = [
      {
        name: 'home',
        id: 'item1',
        icon: 'home',
        tooltip: 'Home',
        routeUrl: '/global/home',
        showRail: false
      },
      {
        name: 'categories',
        id: 'item2',
        icon: 'book',
        tooltip: 'Categories',
        showRail: true,
        railItemList: []
      },
      {
        name: 'bookmarks',
        id: 'item3',
        icon: 'bookmarks',
        tooltip: 'Bookmarks',
        routeUrl: '/global/favorites',
        showRail: false
      },
      {
        name: 'popular',
        id: 'item5',
        icon: 'import_contacts',
        tooltip: 'Popular',
        routeUrl: '/global/popular',
        showRail: false
      },
      {
        name: 'settings',
        id: 'item4',
        icon: 'settings',
        tooltip: 'Settings',
        routeUrl: '/global/settings',
        showRail: false
      },
    ];
  }

  isSelected(item: SidebarItem) {
    return this.selectedItem === item.id;
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
