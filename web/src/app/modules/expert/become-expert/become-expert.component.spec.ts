import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeExpertComponent } from './become-expert.component';

describe('BecomeExpertComponent', () => {
  let component: BecomeExpertComponent;
  let fixture: ComponentFixture<BecomeExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
