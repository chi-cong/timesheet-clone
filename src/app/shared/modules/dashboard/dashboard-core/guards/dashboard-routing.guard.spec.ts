import { TestBed } from '@angular/core/testing';

import { DashboardRoutingGuard } from './dashboard-routing.guard';

describe('DashboardRoutingGuard', () => {
  let guard: DashboardRoutingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboardRoutingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
