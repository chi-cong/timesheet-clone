// modules
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// models
import {
  IDropdownButton,
  IMenuItem,
} from 'src/app/core/models/standaloneCompModels/dropdownPanelInterfaces';

@Component({
  selector: 'app-dropdown-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './dropdown-panel.component.html',
  styleUrls: ['./dropdown-panel.component.scss'],
})
export class DropdownPanelComponent {
  @Input() btnContent: IDropdownButton;
  @Input() itemContentList: IMenuItem[];

  @Output() menuItemEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  menuItemOnClick(emittedData: string) {
    this.menuItemEvent.emit(emittedData);
  }
}
