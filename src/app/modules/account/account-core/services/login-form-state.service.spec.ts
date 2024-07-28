import { TestBed } from '@angular/core/testing';

import { LoginFormStateService } from './login-form-state.service';

describe('LoginFormStateService', () => {
  let service: LoginFormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormStateService],
    });
    service = TestBed.inject(LoginFormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
