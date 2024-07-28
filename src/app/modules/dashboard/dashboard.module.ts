// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSharedModule } from './dashboard-shared/dashboard-shared.module';
import { DashboardCoreModule } from './dashboard-core/dashboard-core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

// standalone components
import { OverlayComponent } from 'src/app/shared/components/overlay/overlay.component';
import { SelectBoxComponent } from 'src/app/shared/components/select-box/select-box.component';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';
import { DropdownPanelComponent } from 'src/app/shared/components/dropdown-panel/dropdown-panel.component';
import { ConfirmBtnComponent } from 'src/app/shared/components/confirm-btn/confirm-btn.component';
import { FormInputComponent } from 'src/app/shared/components/form-input/form-input.component';
import { ToggleBtnGroupComponent } from 'src/app/shared/components/toggle-btn-group/toggle-btn-group.component';
import { CheckBoxComponent } from 'src/app/shared/components/check-box/check-box.component';
import { SearchInputComponent } from 'src/app/shared/components/search-input/search-input.component';

// Components
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectViewerComponent } from './components/project-components/project-viewer/project-viewer.component';
import { ProjectManagerComponent } from './components/project-components/project-manager/project-manager.component';
import { ProjectFilterComponent } from './components/project-components/project-filter/project-filter.component';
import { NewClientFormComponent } from './components/project-components/new-client-form/new-client-form.component';
import { GeneralTabComponent } from './components/project-components/general-tab/general-tab.component';
import { TeamTabComponent } from './components/project-components/team-tab/team-tab.component';
import { TasksTabComponent } from './components/project-components/tasks-tab/tasks-tab.component';
import { CreateEditEntryComponent } from './pages/project/create-edit-entry/create-edit-entry.component';
import { ViewEntryComponent } from './pages/project/view-entry/view-entry.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProjectComponent,
    ProjectViewerComponent,
    ProjectManagerComponent,
    ProjectFilterComponent,
    NewClientFormComponent,
    GeneralTabComponent,
    TeamTabComponent,
    TasksTabComponent,
    CreateEditEntryComponent,
    ViewEntryComponent,
  ],
  imports: [
    // modules
    CommonModule,
    DashboardRoutingModule,
    DashboardSharedModule,
    OverlayComponent,
    DashboardCoreModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatStepperModule,
    MatCardModule,

    // standlone components
    ConfirmBtnComponent,
    DatePickerComponent,
    SelectBoxComponent,
    DropdownPanelComponent,
    FormInputComponent,
    ToggleBtnGroupComponent,
    CheckBoxComponent,
    SearchInputComponent,
  ],
})
export class DashboardModule {}
