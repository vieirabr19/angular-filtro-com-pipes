import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFormNgFormComponent } from './comp-form-ng-form.component';

describe('CompFormNgFormComponent', () => {
  let component: CompFormNgFormComponent;
  let fixture: ComponentFixture<CompFormNgFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompFormNgFormComponent]
    });
    fixture = TestBed.createComponent(CompFormNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
