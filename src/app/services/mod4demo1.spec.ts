import { TestBed } from '@angular/core/testing';

import { Mod4demo1Service } from './mod4demo1Service';

describe('Mod4demo1', () => {
  let service: Mod4demo1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod4demo1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
