import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod7 } from './mod7';

describe('Mod7', () => {
  let component: Mod7;
  let fixture: ComponentFixture<Mod7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
