import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastNameAndTitleComponent } from './first-last-name-and-title.component';

describe('FirstLastNameAndTitleComponent', () => {
  let component: FirstLastNameAndTitleComponent;
  let fixture: ComponentFixture<FirstLastNameAndTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLastNameAndTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLastNameAndTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
