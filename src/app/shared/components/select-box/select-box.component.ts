import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

// models
import { ISelectItem } from 'src/app/core/models/standaloneCompModels/selectItemIterface';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit, OnChanges {
  @Input() appearance: MatFormFieldAppearance;
  @Input() itemList: ISelectItem[] = [{ value: 0, viewValue: '' }];
  @Input() fg: FormGroup = new FormGroup({
    select: new FormControl(),
  });
  @Input() controlName: string;
  @Input() label: string;

  @Output() emitValue: EventEmitter<string | number> = new EventEmitter<
    string | number
  >();

  selectedValue: string | number;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.itemList[0]) {
      this.selectedValue = this.itemList[0].value;
    }
  }

  // compare options value to set default value
  // this function's required by angular material select (compareWith)
  compareItems(i1: any, i2: any) {
    return true;
  }

  // trigger event when select value change
  onChange(event: any): void {
    this.emitValue.emit(this.selectedValue);
  }
}
