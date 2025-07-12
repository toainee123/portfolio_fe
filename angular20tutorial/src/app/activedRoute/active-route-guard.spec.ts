import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activeRouteGuard } from './active-route-guard';

describe('activeRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activeRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
