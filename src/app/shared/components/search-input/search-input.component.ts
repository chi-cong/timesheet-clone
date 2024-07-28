import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() enterEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() typeEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() label: string = '';

  inputString = '';

  constructor() {}

  onEnter() {
    this.enterEvent.emit(this.inputString);
  }

  onChange() {
    this.typeEvent.emit(this.inputString);
  }
}
