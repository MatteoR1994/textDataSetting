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

  it('#set text should initialize text property', () => {
    service.text = 'pluto';
    expect(service.text).toBe('pluto');
  });

  it('#set color should initialize color property', () => {
    service.color = 'green';
    expect(service.color).toBe('green');
  });

});


