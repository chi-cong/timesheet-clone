import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { AppComponent } from './app.component';
import { AccountComponent } from './modules/account/account.component';
import { NotFoundPageComponent } from './modules/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
