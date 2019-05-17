import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertFilterComponent } from './expert-filter.component';

describe('ExpertFilterComponent', () => {
  let component: ExpertFilterComponent;
  let fixture: ComponentFixture<ExpertFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
