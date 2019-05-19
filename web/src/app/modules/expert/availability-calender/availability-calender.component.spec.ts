import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityCalenderComponent } from './availability-calender.component';

describe('AvailabilityCalenderComponent', () => {
  let component: AvailabilityCalenderComponent;
  let fixture: ComponentFixture<AvailabilityCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
