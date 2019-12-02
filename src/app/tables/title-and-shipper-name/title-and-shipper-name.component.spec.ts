import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndShipperNameComponent } from './title-and-shipper-name.component';

describe('TitleAndShipperNameComponent', () => {
  let component: TitleAndShipperNameComponent;
  let fixture: ComponentFixture<TitleAndShipperNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAndShipperNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAndShipperNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
