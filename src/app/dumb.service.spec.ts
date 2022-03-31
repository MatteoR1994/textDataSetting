import { TestBed } from '@angular/core/testing';

import { DumbService } from './dumb.service';

describe('DumbService', () => {
  let service: DumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
