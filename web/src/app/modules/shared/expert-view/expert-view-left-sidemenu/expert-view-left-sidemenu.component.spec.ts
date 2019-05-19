import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertViewLeftSidemenuComponent } from './expert-view-left-sidemenu.component';

describe('ExpertViewLeftSidemenuComponent', () => {
  let component: ExpertViewLeftSidemenuComponent;
  let fixture: ComponentFixture<ExpertViewLeftSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertViewLeftSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertViewLeftSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
