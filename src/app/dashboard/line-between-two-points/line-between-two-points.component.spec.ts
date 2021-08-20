import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBetweenTwoPointsComponent } from './line-between-two-points.component';

describe('LineBetweenTwoPointsComponent', () => {
  let component: LineBetweenTwoPointsComponent;
  let fixture: ComponentFixture<LineBetweenTwoPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineBetweenTwoPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBetweenTwoPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
