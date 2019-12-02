import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNameOnlyComponent } from './subject-name-only.component';

describe('SubjectNameOnlyComponent', () => {
  let component: SubjectNameOnlyComponent;
  let fixture: ComponentFixture<SubjectNameOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectNameOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNameOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
