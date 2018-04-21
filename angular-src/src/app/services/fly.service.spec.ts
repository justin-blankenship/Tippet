import { TestBed, inject } from '@angular/core/testing';

import { FlyService } from './fly.service';

describe('FlyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlyService]
    });
  });

  it('should be created', inject([FlyService], (service: FlyService) => {
    expect(service).toBeTruthy();
  }));
});
