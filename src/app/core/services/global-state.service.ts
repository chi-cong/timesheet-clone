import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  // showing/hiding error modal observer
  showingErrModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  showingErrModalObserver: Observable<boolean> =
    this.showingErrModal.asObservable();

  // showing/hiding overlay observer
  showingOverlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  showingOverlayObserver: Observable<boolean> =
    this.showingOverlay.asObservable();

  // current srceenWidth
  screenWidth: BehaviorSubject<number> = new BehaviorSubject<number>(
    window.innerWidth
  );
  screenWidthObserver: Observable<number> = this.screenWidth.asObservable();

  constructor(private localStorageService: LocalStorageService) {}

  // show-hide error modal
  toggleErrModal(isShowed: boolean): void {
    this.showingErrModal.next(isShowed);
  }

  // show-hide overlay
  toggleOverlay(isShowed: boolean): void {
    this.showingOverlay.next(isShowed);
  }

  // update current screen width size
  updateScreenSize(size: number) {
    this.screenWidth.next(size);
  }

  // check if the authentication token existed and didnt expire yet
  checkAuthenticationState(): boolean {
    const token: string | null | undefined =
      this.localStorageService.getAccessToken();
    let expirationDate: number | null = null;
    if (token) {
      expirationDate = this.localStorageService.getAuthTokenExpireDate()!;
    }
    if (
      token === null ||
      token === undefined ||
      (expirationDate !== null && expirationDate - Date.now() <= 0)
    ) {
      return false;
    }
    return true;
  }
}
