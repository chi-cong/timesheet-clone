/* side navbar services */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidenavService {
  toggleNavState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  open() {
    this.toggleNavState.next(true);
  }
  close() {
    this.toggleNavState.next(false);
  }
}
