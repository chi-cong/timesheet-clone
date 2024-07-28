import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ISelectItem } from 'src/app/core/models/standaloneCompModels/selectItemIterface';

@Component({
  selector: 'app-toggle-btn-group',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, ReactiveFormsModule],
  templateUrl: './toggle-btn-group.component.html',
  styleUrls: ['./toggle-btn-group.component.scss'],
})
export class ToggleBtnGroupComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() btnList: ISelectItem[];
  @Input() controlName: string;
  @Input() isMultiple: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {}
}
