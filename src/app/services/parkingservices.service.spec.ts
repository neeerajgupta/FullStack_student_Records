import { TestBed } from '@angular/core/testing';

import { ParkingservicesService } from './parkingservices.service';

describe('ParkingservicesService', () => {
  let service: ParkingservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
