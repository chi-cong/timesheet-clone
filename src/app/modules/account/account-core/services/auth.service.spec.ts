import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginForm } from '../models/logginInterface';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the response', () => {
    let result;
    const testedForm: LoginForm = {
      userNameOrEmailAddress: 'admin',
      password: '123qwe',
      rememberClient: true,
    };
    service.requestLogin(testedForm).subscribe((resp) => {
      result = resp;
    });
    expect(result).toBeTruthy();
  });

  it('should response null if infomations are wrong', () => {
    let result;
    const testedForm: LoginForm = {
      userNameOrEmailAddress: 'wefq',
      password: 'wqre',
      rememberClient: true,
    };
    service.requestLogin(testedForm).subscribe((resp) => {
      result = resp;
    });
    expect(result).toBeFalsy();
  });
});
