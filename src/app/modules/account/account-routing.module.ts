import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
