import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionTwoPlanesComponent } from './intersection-two-planes.component';

describe('IntersectionTwoPlanesComponent', () => {
  let component: IntersectionTwoPlanesComponent;
  let fixture: ComponentFixture<IntersectionTwoPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersectionTwoPlanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectionTwoPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
