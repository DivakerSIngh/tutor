import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerPasswordComponent } from './learner-password.component';

describe('LearnerPasswordComponent', () => {
  let component: LearnerPasswordComponent;
  let fixture: ComponentFixture<LearnerPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
