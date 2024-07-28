/*** login by account form ***/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginFormStateService } from '../../account-core/services/login-form-state.service';
import { AuthService } from '../../account-core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { GlobalStateService } from 'src/app/core/services/global-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  // form group
  fg: FormGroup = this.fb.group({
    userNameOrEmailAddress: [
      '',
      [Validators.required, Validators.maxLength(256)],
    ],
    password: ['', [Validators.required, Validators.maxLength(32)]],
    rememberClient: false,
  });

  // check if form is valid or invalid
  validationState: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginFormStateService: LoginFormStateService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private globalStateService: GlobalStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeValidationStatus();
  }

  submit(event: any): void {
    event.preventDefault();
    this.authService.requestLogin(this.fg.value).subscribe((resp) => {
      if (resp?.result !== undefined) {
        this.localStorageService.setAuthToken(resp.result);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  updateValidationStatus(): void {
    this.loginFormStateService.modifyValidationState(this.fg.status);
  }

  subscribeValidationStatus(): void {
    this.loginFormStateService.validationStateObserver.subscribe(
      (newState) => (this.validationState = newState)
    );
  }
}
