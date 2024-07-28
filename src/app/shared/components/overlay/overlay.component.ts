import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalStateService } from 'src/app/core/services/global-state.service';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  isShowed: boolean;
  @Output() groundClickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit(): void {
    this.subscribeShowingState();
  }

  onClick() {
    this.groundClickEvent.emit();
  }

  subscribeShowingState() {
    this.globalStateService.showingOverlayObserver.subscribe((isShowed) => {
      this.isShowed = isShowed;
    });
  }
}
