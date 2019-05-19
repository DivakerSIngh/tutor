import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerLayoutComponent } from './learner-layout.component';

describe('LearnerLayoutComponent', () => {
  let component: LearnerLayoutComponent;
  let fixture: ComponentFixture<LearnerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
