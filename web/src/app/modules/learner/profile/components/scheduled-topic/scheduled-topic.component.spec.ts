import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTopicComponent } from './scheduled-topic.component';

describe('ScheduledTopicComponent', () => {
  let component: ScheduledTopicComponent;
  let fixture: ComponentFixture<ScheduledTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
