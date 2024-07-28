import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBtnGroupComponent } from './toggle-btn-group.component';

describe('ToggleBtnGroupComponent', () => {
  let component: ToggleBtnGroupComponent;
  let fixture: ComponentFixture<ToggleBtnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToggleBtnGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleBtnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
