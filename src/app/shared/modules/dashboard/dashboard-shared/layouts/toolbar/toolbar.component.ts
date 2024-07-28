import { Component, OnInit } from '@angular/core';
import { IconNames } from '../../../dashboard-core/models/iconNameEnum';
import { SidenavService } from '../../../dashboard-core/services/sidenav.service';
import { GlobalStateService } from 'src/app/core/services/global-state.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  menuBtn: string = IconNames.Menu;

  constructor(
    private sidenavService: SidenavService,
    private globalStateService: GlobalStateService
  ) {}

  ngOnInit(): void {
    this.subscribeSideNavState();
  }

  // toggle navbar button on small screen
  menuBtnClick() {
    if (this.sidenavService.toggleNavState.value) {
      this.sidenavService.close();
      this.globalStateService.toggleOverlay(false);
    } else {
      this.sidenavService.open();
      this.globalStateService.toggleOverlay(true);
    }
  }

  subscribeSideNavState() {
    this.sidenavService.toggleNavState.subscribe((state) => {
      if (state) {
        this.menuBtn = IconNames.ArrowBack;
      } else {
        this.menuBtn = IconNames.Menu;
      }
    });
  }
}
