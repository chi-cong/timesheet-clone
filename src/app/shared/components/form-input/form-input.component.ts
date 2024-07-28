import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldAppearance } from '@angular/material/form-field';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() appearance: MatFormFieldAppearance = 'standard';
  @Input() placeholder: string = '';
  @Input() iconName: string = '';
  @Input() inputType: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() controlName: string = 'text';
  @Input() fg: FormGroup = new FormGroup({
    text: new FormControl(),
  });
  @Input() isTextArea: boolean = false;

  @Output() validationTracker = new EventEmitter<string>();

  constructor() {}

  // trigger when input value's changed
  onInput() {
    this.validationTracker.emit();
  }
}
