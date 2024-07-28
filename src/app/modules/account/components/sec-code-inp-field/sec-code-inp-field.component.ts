import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-code-inp-field',
  templateUrl: './sec-code-inp-field.component.html',
  styleUrls: ['./sec-code-inp-field.component.scss'],
})
export class SecCodeInpFieldComponent {
  hideText: boolean = true;

  constructor() {}

  onClick() {
    this.hideText = !this.hideText;
  }
}
