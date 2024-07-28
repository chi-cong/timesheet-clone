import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../models/logginInterface';
import { environment } from 'src/environments/environment';
import { AuthTokenApi } from '../models/authTokenApiEnum';
import { GlobalStateService } from 'src/app/core/services/global-state.service';
import { IAuthResp } from '../models/authRespInterface';

@Injectable()
export class AuthService {
  // http option
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private globalStateService: GlobalStateService
  ) {}

  requestLogin(formData: LoginForm): Observable<IAuthResp | undefined> {
    const apiUrl: string = environment.apiPrefix + AuthTokenApi.Authenticate;
    return this.http
      .post<IAuthResp>(apiUrl, formData, this.httpOptions)
      .pipe(catchError(this.handleError<IAuthResp>()));
  }

  private handleError<T extends IAuthResp | undefined>(result?: T) {
    return (): Observable<IAuthResp | undefined> => {
      this.globalStateService.toggleErrModal(true);
      return of(result as T);
    };
  }
}
