import { TestBed, inject } from '@angular/core/testing';

import { CivService } from './civ.service';

describe('CivService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CivService]
    });
  });

  it('should be created', inject([CivService], (service: CivService) => {
    expect(service).toBeTruthy();
  }));
});
