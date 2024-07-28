import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCodeInpFieldComponent } from './sec-code-inp-field.component';

describe('SecCodeInpFieldComponent', () => {
  let component: SecCodeInpFieldComponent;
  let fixture: ComponentFixture<SecCodeInpFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecCodeInpFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecCodeInpFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
