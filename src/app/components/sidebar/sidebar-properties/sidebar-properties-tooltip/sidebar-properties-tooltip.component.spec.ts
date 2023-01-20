import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPropertiesTooltipComponent } from './sidebar-properties-tooltip.component';

describe('SidebarPropertiesTooltipComponent', () => {
  let component: SidebarPropertiesTooltipComponent;
  let fixture: ComponentFixture<SidebarPropertiesTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPropertiesTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPropertiesTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
