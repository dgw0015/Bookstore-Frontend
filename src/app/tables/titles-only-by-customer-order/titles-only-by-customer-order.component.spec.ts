import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesOnlyByCustomerOrderComponent } from './titles-only-by-customer-order.component';

describe('TitlesOnlyByCustomerOrderComponent', () => {
  let component: TitlesOnlyByCustomerOrderComponent;
  let fixture: ComponentFixture<TitlesOnlyByCustomerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlesOnlyByCustomerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesOnlyByCustomerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
