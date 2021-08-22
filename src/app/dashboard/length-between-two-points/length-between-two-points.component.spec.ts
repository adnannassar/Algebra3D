import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthBetweenTwoPointsComponent } from './length-between-two-points.component';

describe('LengthBetweenTwoPointsComponent', () => {
  let component: LengthBetweenTwoPointsComponent;
  let fixture: ComponentFixture<LengthBetweenTwoPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthBetweenTwoPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthBetweenTwoPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
