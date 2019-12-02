import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesOnlyUnitsComponent } from './titles-only-units.component';

describe('TitlesOnlyUnitsComponent', () => {
  let component: TitlesOnlyUnitsComponent;
  let fixture: ComponentFixture<TitlesOnlyUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlesOnlyUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesOnlyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
