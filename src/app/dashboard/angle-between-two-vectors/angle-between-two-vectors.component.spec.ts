import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleBetweenTwoVectorsComponent } from './angle-between-two-vectors.component';

describe('AngleBetweenTwoVectorsComponent', () => {
  let component: AngleBetweenTwoVectorsComponent;
  let fixture: ComponentFixture<AngleBetweenTwoVectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngleBetweenTwoVectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleBetweenTwoVectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
