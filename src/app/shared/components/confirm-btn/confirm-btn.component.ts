import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-confirm-btn',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './confirm-btn.component.html',
  styleUrls: ['./confirm-btn.component.scss'],
})
export class ConfirmBtnComponent {
  @Input() disabilityStatus: boolean = false;
  @Input() content: string = '';
  @Input() color: string = 'accent';
  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  onClick() {
    this.clickEvent.emit();
  }
}
