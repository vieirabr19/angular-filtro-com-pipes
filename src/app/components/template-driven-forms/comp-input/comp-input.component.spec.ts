import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInputComponent } from './comp-input.component';

describe('CompInputComponent', () => {
  let component: CompInputComponent;
  let fixture: ComponentFixture<CompInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompInputComponent]
    });
    fixture = TestBed.createComponent(CompInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
