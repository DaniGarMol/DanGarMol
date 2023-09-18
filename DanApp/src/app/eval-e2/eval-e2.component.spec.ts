import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalE2Component } from './eval-e2.component';

describe('EvalE2Component', () => {
  let component: EvalE2Component;
  let fixture: ComponentFixture<EvalE2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvalE2Component]
    });
    fixture = TestBed.createComponent(EvalE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
