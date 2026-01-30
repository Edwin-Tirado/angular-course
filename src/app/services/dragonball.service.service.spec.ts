import { TestBed } from '@angular/core/testing';

import { DragonballServiceService } from './dragonball.service.service';

describe('DragonballServiceService', () => {
  let service: DragonballServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonballServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
