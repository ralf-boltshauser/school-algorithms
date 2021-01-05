import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevinshtenComponent } from './levinshten.component';

describe('LevinshtenComponent', () => {
  let component: LevinshtenComponent;
  let fixture: ComponentFixture<LevinshtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevinshtenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevinshtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
