import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariabiliComponent } from './variabili.component';

describe('VariabiliComponent', () => {
  let component: VariabiliComponent;
  let fixture: ComponentFixture<VariabiliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariabiliComponent]
    });
    fixture = TestBed.createComponent(VariabiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
