import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3demo2 } from './mod3demo2';

describe('Mod3demo2', () => {
  let component: Mod3demo2;
  let fixture: ComponentFixture<Mod3demo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod3demo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod3demo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
