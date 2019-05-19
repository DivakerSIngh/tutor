import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertViewHeaderComponent } from './expert-view-header.component';

describe('ExpertViewHeaderComponent', () => {
  let component: ExpertViewHeaderComponent;
  let fixture: ComponentFixture<ExpertViewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertViewHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
