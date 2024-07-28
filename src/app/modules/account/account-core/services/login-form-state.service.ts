import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ValidationStates } from '../../../../core/models/validationStateEnum';

@Injectable()
export class LoginFormStateService {
  private validationState: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  validationStateObserver: Observable<boolean> =
    this.validationState.asObservable();

  constructor() {}

  modifyValidationState(status: string) {
    if (status !== ValidationStates.Invalidation) {
      this.validationState.next(false);
    } else {
      this.validationState.next(true);
    }
  }
}
