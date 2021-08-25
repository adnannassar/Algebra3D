import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelPlaneComponent } from './parallel-plane.component';

describe('ParallelPlaneComponent', () => {
  let component: ParallelPlaneComponent;
  let fixture: ComponentFixture<ParallelPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelPlaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
