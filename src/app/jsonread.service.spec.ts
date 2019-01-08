import { TestBed } from '@angular/core/testing';

import { JsonreadService } from './jsonread.service';

describe('JsonreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonreadService = TestBed.get(JsonreadService);
    expect(service).toBeTruthy();
  });
});
