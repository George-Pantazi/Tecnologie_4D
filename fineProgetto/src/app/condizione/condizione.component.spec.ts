import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondizioneComponent } from './condizione.component';

describe('CondizioneComponent', () => {
  let component: CondizioneComponent;
  let fixture: ComponentFixture<CondizioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondizioneComponent]
    });
    fixture = TestBed.createComponent(CondizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
