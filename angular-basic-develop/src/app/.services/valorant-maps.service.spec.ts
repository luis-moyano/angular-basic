import { TestBed } from '@angular/core/testing';

import { ValorantMapsService } from './valorant-maps.service';

describe('ValorantMapsService', () => {
  let service: ValorantMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
