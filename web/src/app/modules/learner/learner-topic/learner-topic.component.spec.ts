import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerTopicComponent } from './learner-topic.component';

describe('LearnerTopicComponent', () => {
  let component: LearnerTopicComponent;
  let fixture: ComponentFixture<LearnerTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
