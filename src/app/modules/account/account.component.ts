import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/core/services/global-state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  showingErrModal: boolean;
  isAuthenticated: boolean = false;

  constructor(
    private globalStateService: GlobalStateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscribeShowingModalStatus();
    this.subscribeAuthStatus();
    this.navigateToDashboard();
  }

  subscribeShowingModalStatus() {
    this.globalStateService.showingErrModal.subscribe((status) => {
      this.showingErrModal = status;
    });
  }

  navigateToDashboard() {
    if (this.isAuthenticated) {
      this.router.navigate(['./dashboard']);
    } else {
      this.router.navigate(['./login'], { relativeTo: this.activatedRoute });
    }
  }

  subscribeAuthStatus() {
    this.isAuthenticated = this.globalStateService.checkAuthenticationState();
  }
}
