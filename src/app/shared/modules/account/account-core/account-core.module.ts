import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LoginFormStateService } from './services/login-form-state.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, LoginFormStateService],
})
export class AccountCoreModule {}
