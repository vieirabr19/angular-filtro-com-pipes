import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRadioButtonComponent } from './comp-radio-button.component';

describe('CompRadioButtonComponent', () => {
  let component: CompRadioButtonComponent;
  let fixture: ComponentFixture<CompRadioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompRadioButtonComponent]
    });
    fixture = TestBed.createComponent(CompRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
