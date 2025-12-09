import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod4demo1 } from './mod4demo1';

describe('Mod4demo1', () => {
  let component: Mod4demo1;
  let fixture: ComponentFixture<Mod4demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod4demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod4demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
