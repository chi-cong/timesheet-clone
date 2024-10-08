import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss'],
})
export class NavFooterComponent {
  // app version
  @Input() version: string;

  constructor() {}
}
