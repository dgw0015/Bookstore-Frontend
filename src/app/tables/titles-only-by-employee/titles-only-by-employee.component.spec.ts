import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesOnlyByEmployeeComponent } from './titles-only-by-employee.component';

describe('TitlesOnlyByEmployeeComponent', () => {
  let component: TitlesOnlyByEmployeeComponent;
  let fixture: ComponentFixture<TitlesOnlyByEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlesOnlyByEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesOnlyByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
