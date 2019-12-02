import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndPriceComponent } from './title-and-price.component';

describe('TitleAndPriceComponent', () => {
  let component: TitleAndPriceComponent;
  let fixture: ComponentFixture<TitleAndPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAndPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
