import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent {
  @Input() controlName: string = 'checkBox';
  @Input() fg: FormGroup = new FormGroup({
    checkBox: new FormControl(),
  });
  @Input() label: string = '';

  constructor() {}
}
