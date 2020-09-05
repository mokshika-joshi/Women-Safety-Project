import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapingTricksComponent } from './escaping-tricks.component';

describe('EscapingTricksComponent', () => {
  let component: EscapingTricksComponent;
  let fixture: ComponentFixture<EscapingTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscapingTricksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapingTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
