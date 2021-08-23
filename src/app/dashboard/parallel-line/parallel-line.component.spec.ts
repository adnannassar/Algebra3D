import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelLineComponent } from './parallel-line.component';

describe('ParallelLineComponent', () => {
  let component: ParallelLineComponent;
  let fixture: ComponentFixture<ParallelLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
