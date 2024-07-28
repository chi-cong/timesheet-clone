import { Component, Input } from '@angular/core';
import { GlobalStateService } from 'src/app/core/services/global-state.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent {
  @Input() errTitle: string;
  @Input() errContent: string;

  showingModalStatus: boolean;

  constructor(private globalStateService: GlobalStateService) {}

  closeModal() {
    this.globalStateService.toggleErrModal(false);
  }
}
