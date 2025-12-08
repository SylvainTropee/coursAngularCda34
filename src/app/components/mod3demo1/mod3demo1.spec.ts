import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3demo1 } from './mod3demo1';

describe('Mod3demo1', () => {
  let component: Mod3demo1;
  let fixture: ComponentFixture<Mod3demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod3demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod3demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
