import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOnlyComponent } from './title-only.component';

describe('TitleOnlyComponent', () => {
  let component: TitleOnlyComponent;
  let fixture: ComponentFixture<TitleOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
