import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndQuantityComponent } from './title-and-quantity.component';

describe('TitleAndQuantityComponent', () => {
  let component: TitleAndQuantityComponent;
  let fixture: ComponentFixture<TitleAndQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAndQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAndQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
