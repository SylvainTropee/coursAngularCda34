import { TestBed } from '@angular/core/testing';

import { Mod7service } from './mod7service';

describe('Mod7service', () => {
  let service: Mod7service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod7service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
