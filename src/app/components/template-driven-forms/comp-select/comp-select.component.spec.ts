import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSelectComponent } from './comp-select.component';

describe('CompSelectComponent', () => {
  let component: CompSelectComponent;
  let fixture: ComponentFixture<CompSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSelectComponent]
    });
    fixture = TestBed.createComponent(CompSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
