import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesByOrderAmountComponent } from './names-by-order-amount.component';

describe('NamesByOrderAmountComponent', () => {
  let component: NamesByOrderAmountComponent;
  let fixture: ComponentFixture<NamesByOrderAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesByOrderAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesByOrderAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
