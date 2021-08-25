import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthmaticOperationsVectorsComponent } from './arthmatic-operations-vectors.component';

describe('ArthmaticOperationsVectorsComponent', () => {
  let component: ArthmaticOperationsVectorsComponent;
  let fixture: ComponentFixture<ArthmaticOperationsVectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthmaticOperationsVectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthmaticOperationsVectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
