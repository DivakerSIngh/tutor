import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTopicComponent } from './past-topic.component';

describe('PastTopicComponent', () => {
  let component: PastTopicComponent;
  let fixture: ComponentFixture<PastTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
