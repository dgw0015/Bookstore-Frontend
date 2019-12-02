import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastNameAndTotalOrdersComponent } from './first-last-name-and-total-orders.component';

describe('FirstLastNameAndTotalOrdersComponent', () => {
  let component: FirstLastNameAndTotalOrdersComponent;
  let fixture: ComponentFixture<FirstLastNameAndTotalOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLastNameAndTotalOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLastNameAndTotalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
