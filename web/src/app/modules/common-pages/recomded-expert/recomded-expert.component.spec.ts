import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomdedExpertComponent } from './recomded-expert.component';

describe('RecomdedExpertComponent', () => {
  let component: RecomdedExpertComponent;
  let fixture: ComponentFixture<RecomdedExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomdedExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomdedExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
