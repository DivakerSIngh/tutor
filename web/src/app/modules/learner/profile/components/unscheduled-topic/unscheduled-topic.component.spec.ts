import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduledTopicComponent } from './unscheduled-topic.component';

describe('UnscheduledTopicComponent', () => {
  let component: UnscheduledTopicComponent;
  let fixture: ComponentFixture<UnscheduledTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnscheduledTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscheduledTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
