import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPropertiesComponent } from './sidebar-properties.component';

describe('SidebarPropertiesComponent', () => {
  let component: SidebarPropertiesComponent;
  let fixture: ComponentFixture<SidebarPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
