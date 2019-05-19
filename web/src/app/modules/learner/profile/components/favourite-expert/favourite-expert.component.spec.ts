import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteExpertComponent } from './favourite-expert.component';

describe('FavouriteExpertComponent', () => {
  let component: FavouriteExpertComponent;
  let fixture: ComponentFixture<FavouriteExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
