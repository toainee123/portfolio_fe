import { TestBed } from '@angular/core/testing';

import { ServiceInfo } from './service-info';

describe('ServiceInfo', () => {
  let service: ServiceInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
