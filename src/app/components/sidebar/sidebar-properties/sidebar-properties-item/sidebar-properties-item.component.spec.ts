import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPropertiesItemComponent } from './sidebar-properties-item.component';

describe('SidebarPropertiesItemComponent', () => {
  let component: SidebarPropertiesItemComponent;
  let fixture: ComponentFixture<SidebarPropertiesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPropertiesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPropertiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
