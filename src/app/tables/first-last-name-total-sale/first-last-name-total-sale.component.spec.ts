import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastNameTotalSaleComponent } from './first-last-name-total-sale.component';

describe('FirstLastNameTotalSaleComponent', () => {
  let component: FirstLastNameTotalSaleComponent;
  let fixture: ComponentFixture<FirstLastNameTotalSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLastNameTotalSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLastNameTotalSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
