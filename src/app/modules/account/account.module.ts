// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountSharedModule } from './account-shared/account-shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AccountCoreModule } from './account-core/account-core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AccountComponent } from './account.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { SecCodeInpFieldComponent } from './components/sec-code-inp-field/sec-code-inp-field.component';

// standalone components
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';
import { CheckBoxComponent } from 'src/app/shared/components/check-box/check-box.component';
import { FormInputComponent } from 'src/app/shared/components/form-input/form-input.component';
import { ConfirmBtnComponent } from 'src/app/shared/components/confirm-btn/confirm-btn.component';

//services
import { LoginFormStateService } from './account-core/services/login-form-state.service';
import { AuthService } from './account-core/services/auth.service';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    LoginFormComponent,
    GoogleLoginComponent,
    SecCodeInpFieldComponent,
  ],
  imports: [
    // modules
    CommonModule,
    ReactiveFormsModule,
    AccountSharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AccountCoreModule,
    AccountRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    // standalone components
    ErrorModalComponent,
    CheckBoxComponent,
    FormInputComponent,
    ConfirmBtnComponent,
  ],
  providers: [LoginFormStateService, AuthService],
  exports: [AccountComponent, LoginComponent],
})
export class AccountModule {}
