// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';

// standalone components
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';
import { DropdownPanelComponent } from 'src/app/shared/components/dropdown-panel/dropdown-panel.component';
import { SelectBoxComponent } from 'src/app/shared/components/select-box/select-box.component';
import { ChipComponent } from 'src/app/shared/components/chip/chip.component';

// pipes
import { ProjectTypePipe } from './pipes/project-type.pipe';

// components
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { NavbarNavigationItemComponent } from './navbar-navigation-item/navbar-navigation-item.component';
import { NavHeaderComponent } from './layouts/sidenav/nav-header/nav-header.component';
import { NavBodyComponent } from './layouts/sidenav/nav-body/nav-body.component';
import { NavFooterComponent } from './layouts/sidenav/nav-footer/nav-footer.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ClientProjectComponent } from './project-shared/client-project/client-project.component';
import { MemberCardComponent } from './project-shared/member-card/member-card.component';
import { UserTypePipe } from './pipes/user-type.pipe';
import { UserLevelPipe } from './pipes/user-level.pipe';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    NavbarNavigationItemComponent,
    NavHeaderComponent,
    NavBodyComponent,
    NavFooterComponent,
    PageTitleComponent,
    ClientProjectComponent,
    ProjectTypePipe,
    MemberCardComponent,
    UserTypePipe,
    UserLevelPipe,
  ],
  imports: [
    // modules
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatChipsModule,

    // standalone components
    DatePickerComponent,
    DropdownPanelComponent,
    SelectBoxComponent,
    ChipComponent,
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    PageTitleComponent,
    ClientProjectComponent,
    ProjectTypePipe,
    MemberCardComponent,
    UserTypePipe,
  ],
})
export class DashboardSharedModule {}
