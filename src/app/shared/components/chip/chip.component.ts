import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() content: string | number = '';
  @Input() avatarPath: string = '';
  @Input() color: string = '';

  constructor() {}

  ngOnInit(): void {}
}
