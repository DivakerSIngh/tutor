import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerTopicTabsComponent } from './learner-topic-tabs.component';

describe('LearnerTopicTabsComponent', () => {
  let component: LearnerTopicTabsComponent;
  let fixture: ComponentFixture<LearnerTopicTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerTopicTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerTopicTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
