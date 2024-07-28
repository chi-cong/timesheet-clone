import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavigationItemComponent } from './navbar-navigation-item.component';

describe('NavbarNavigationItemComponent', () => {
  let component: NavbarNavigationItemComponent;
  let fixture: ComponentFixture<NavbarNavigationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarNavigationItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
