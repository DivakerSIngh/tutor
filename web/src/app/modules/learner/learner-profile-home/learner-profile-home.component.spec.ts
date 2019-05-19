import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerProfileHomeComponent } from './learner-profile-home.component';

describe('LearnerProfileHomeComponent', () => {
  let component: LearnerProfileHomeComponent;
  let fixture: ComponentFixture<LearnerProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerProfileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
