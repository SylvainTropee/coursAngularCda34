import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6demo1 } from './mod6demo1';

describe('Mod6demo1', () => {
  let component: Mod6demo1;
  let fixture: ComponentFixture<Mod6demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod6demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod6demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
