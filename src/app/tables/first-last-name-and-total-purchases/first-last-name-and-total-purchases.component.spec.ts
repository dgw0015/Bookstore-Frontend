import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastNameAndTotalPurchasesComponent } from './first-last-name-and-total-purchases.component';

describe('FirstLastNameAndTotalPurchasesComponent', () => {
  let component: FirstLastNameAndTotalPurchasesComponent;
  let fixture: ComponentFixture<FirstLastNameAndTotalPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLastNameAndTotalPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLastNameAndTotalPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
