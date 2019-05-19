import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertNotificationComponent } from './expert-notification.component';

describe('ExpertNotificationComponent', () => {
  let component: ExpertNotificationComponent;
  let fixture: ComponentFixture<ExpertNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
