import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRightNavBarComponent } from './header-right-nav-bar.component';

describe('HeaderRightNavBarComponent', () => {
  let component: HeaderRightNavBarComponent;
  let fixture: ComponentFixture<HeaderRightNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRightNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderRightNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
