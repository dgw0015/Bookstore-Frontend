import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOnlyBySupplierComponent } from './title-only-by-supplier.component';

describe('TitleOnlyBySupplierComponent', () => {
  let component: TitleOnlyBySupplierComponent;
  let fixture: ComponentFixture<TitleOnlyBySupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleOnlyBySupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleOnlyBySupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
