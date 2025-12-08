import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2demo1 } from './mod2demo1';

describe('Mod2demo1', () => {
  let component: Mod2demo1;
  let fixture: ComponentFixture<Mod2demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod2demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod2demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
