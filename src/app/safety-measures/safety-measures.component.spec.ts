import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyMeasuresComponent } from './safety-measures.component';

describe('SafetyMeasuresComponent', () => {
  let component: SafetyMeasuresComponent;
  let fixture: ComponentFixture<SafetyMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyMeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
