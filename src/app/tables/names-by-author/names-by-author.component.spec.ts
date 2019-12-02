import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesByAuthorComponent } from './names-by-author.component';

describe('NamesByAuthorComponent', () => {
  let component: NamesByAuthorComponent;
  let fixture: ComponentFixture<NamesByAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesByAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
