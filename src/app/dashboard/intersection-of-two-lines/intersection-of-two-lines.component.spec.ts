import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionOfTwoLinesComponent } from './intersection-of-two-lines.component';

describe('IntersectionOfTwoLinesComponent', () => {
  let component: IntersectionOfTwoLinesComponent;
  let fixture: ComponentFixture<IntersectionOfTwoLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersectionOfTwoLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectionOfTwoLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
