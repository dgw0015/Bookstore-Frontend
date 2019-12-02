import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesWithPhoneAndTotalOrdersComponent } from './names-with-phone-and-total-orders.component';

describe('NamesWithPhoneAndTotalOrdersComponent', () => {
  let component: NamesWithPhoneAndTotalOrdersComponent;
  let fixture: ComponentFixture<NamesWithPhoneAndTotalOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesWithPhoneAndTotalOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesWithPhoneAndTotalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
