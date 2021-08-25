import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthOfVectorComponent } from './length-of-vector.component';

describe('LengthOfVectorComponent', () => {
  let component: LengthOfVectorComponent;
  let fixture: ComponentFixture<LengthOfVectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthOfVectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthOfVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
