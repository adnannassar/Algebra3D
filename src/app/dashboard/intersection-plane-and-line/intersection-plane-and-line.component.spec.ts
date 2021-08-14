import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionPlaneAndLineComponent } from './intersection-plane-and-line.component';

describe('IntersectionPlaneAndLineComponent', () => {
  let component: IntersectionPlaneAndLineComponent;
  let fixture: ComponentFixture<IntersectionPlaneAndLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersectionPlaneAndLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectionPlaneAndLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
