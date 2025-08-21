import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCustomValidatorComponent } from './async-custom-validator.component';

describe('AsyncCustomValidatorComponent', () => {
  let component: AsyncCustomValidatorComponent;
  let fixture: ComponentFixture<AsyncCustomValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncCustomValidatorComponent]
    });
    fixture = TestBed.createComponent(AsyncCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
