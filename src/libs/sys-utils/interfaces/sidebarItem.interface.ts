import { SideRailItem } from './sideRailItem.interface';

export interface SidebarItem {
  name: string;
  id: string;
  routeUrl?: string;
  icon: string;
  tooltip: string;
  showRail: boolean;
  railItemList?: SideRailItem[];
}
