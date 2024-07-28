import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormFieldModule,
  MatFormFieldAppearance,
} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() appearance: MatFormFieldAppearance = 'standard';
  @Input() label: string;
  @Input() fg: FormGroup;
  @Input() controlName: string;

  constructor() {}

  addDateEvent(type: string, event: any) {}
}
