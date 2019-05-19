import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerProfileLeftbarComponent } from './learner-profile-leftbar.component';

describe('LearnerProfileLeftbarComponent', () => {
  let component: LearnerProfileLeftbarComponent;
  let fixture: ComponentFixture<LearnerProfileLeftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerProfileLeftbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerProfileLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
