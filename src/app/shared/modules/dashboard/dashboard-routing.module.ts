import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { GeneralTabComponent } from './components/project-components/general-tab/general-tab.component';
import { TeamTabComponent } from './components/project-components/team-tab/team-tab.component';
import { TasksTabComponent } from './components/project-components/tasks-tab/tasks-tab.component';
import { NotificationTabComponent } from './components/project-components/notification-tab/notification-tab.component';
import { ViewEntryComponent } from './pages/project/view-entry/view-entry.component';
import { CreateEditEntryComponent } from './pages/project/create-edit-entry/create-edit-entry.component';

import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DashboardRoutingGuard } from './dashboard-core/guards/dashboard-routing.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [DashboardRoutingGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'home', component: HomeComponent },
      {
        path: 'project',
        component: ProjectComponent,
        canActivateChild: [DashboardRoutingGuard],
        children: [
          {
            path: 'create',
            component: CreateEditEntryComponent,
            canActivateChild: [DashboardRoutingGuard],
            children: [
              {
                path: 'general',
                component: GeneralTabComponent,
              },
              {
                path: 'team',
                component: TeamTabComponent,
              },
              {
                path: 'task',
                component: TasksTabComponent,
              },
              {
                path: 'notification',
                component: NotificationTabComponent,
              },
            ],
          },
          {
            path: 'edit',
            component: CreateEditEntryComponent,
            canActivateChild: [DashboardRoutingGuard],
            children: [
              {
                path: 'general',
                component: GeneralTabComponent,
              },
              {
                path: 'team',
                component: TeamTabComponent,
              },
              {
                path: 'task',
                component: TasksTabComponent,
              },
              {
                path: 'notification',
                component: NotificationTabComponent,
              },
            ],
          },
          {
            path: 'view',
            canActivateChild: [DashboardRoutingGuard],
            component: ViewEntryComponent,
          },
        ],
      },

      { path: '**', redirectTo: '404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
