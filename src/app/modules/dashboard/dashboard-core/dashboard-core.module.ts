import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStateService } from './services/dashboard-state.service';
import { SidenavService } from './services/sidenav.service';
import { DashboardService } from './services/dashboard.service';
import { ProjectService } from './services/project-services/project.service';
import { ProjectStateService } from './services/project-services/project-state.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from 'src/app/core/interceptors/header.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    DashboardStateService,
    SidenavService,
    DashboardService,
    ProjectService,
    ProjectStateService,
  ],
})
export class DashboardCoreModule {}
