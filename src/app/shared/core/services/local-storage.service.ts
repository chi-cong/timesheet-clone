import { Injectable } from '@angular/core';
import { IAuthToken } from '../models/authTokenInterface';
import { localStorageKeys } from '../models/localStorageKeys';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getLocalItem(itemKey: string): any {
    const jsonString: string | null = localStorage.getItem(itemKey);
    if (typeof jsonString === 'string') {
      return JSON.parse(jsonString);
    }
  }

  deleteLocalItem(itemKey: string) {
    localStorage.removeItem(itemKey);
  }

  setLocalItem(itemKey: string, value: any) {
    localStorage.setItem(itemKey, JSON.stringify(value));
  }

  setAuthToken(authResult: IAuthToken): void {
    if (authResult) {
      this.setLocalItem(localStorageKeys.AccessToken, authResult.accessToken);
      this.setLocalItem(
        localStorageKeys.AuthExpirationDate,
        authResult.expireInSeconds
      );
    }
  }

  getAccessToken(): string | null {
    return this.getLocalItem(localStorageKeys.AccessToken);
  }
  getAuthTokenExpireDate() {
    JSON.parse(localStorage.getItem(localStorageKeys.AuthExpirationDate)!);
  }
}
