import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfissionComponent } from './form-profission.component';

describe('FormProfissionComponent', () => {
  let component: FormProfissionComponent;
  let fixture: ComponentFixture<FormProfissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProfissionComponent]
    });
    fixture = TestBed.createComponent(FormProfissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
