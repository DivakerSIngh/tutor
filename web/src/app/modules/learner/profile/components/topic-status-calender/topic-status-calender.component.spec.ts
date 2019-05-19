import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicStatusCalenderComponent } from './topic-status-calender.component';

describe('TopicStatusCalenderComponent', () => {
  let component: TopicStatusCalenderComponent;
  let fixture: ComponentFixture<TopicStatusCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicStatusCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicStatusCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
