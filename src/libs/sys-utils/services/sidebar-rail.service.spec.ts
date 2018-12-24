import { TestBed } from '@angular/core/testing';

import { SidebarRailService } from './sidebar-rail.service';

describe('SidebarRailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarRailService = TestBed.get(SidebarRailService);
    expect(service).toBeTruthy();
  });
});
