import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNgModelGroupComponent } from './comp-ng-model-group.component';

describe('CompNgModelGroupComponent', () => {
  let component: CompNgModelGroupComponent;
  let fixture: ComponentFixture<CompNgModelGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompNgModelGroupComponent]
    });
    fixture = TestBed.createComponent(CompNgModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
