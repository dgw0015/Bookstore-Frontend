import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndTotalQuantityComponent } from './title-and-total-quantity.component';

describe('TitleAndTotalQuantityComponent', () => {
  let component: TitleAndTotalQuantityComponent;
  let fixture: ComponentFixture<TitleAndTotalQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAndTotalQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAndTotalQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
