import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISelectItem } from 'src/app/core/models/standaloneCompModels/selectItemIterface';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() userType: string;
  @Input() userLvl: string | number;
  @Input() prefixIcon: string;
  @Input() email: string;
  @Input() positions: ISelectItem[] = [];

  @Output() btnEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  iconClick() {
    this.btnEvent.emit(this.id);
  }

  itemClick() {
    this.itemEvent.emit(this.id);
  }
}
