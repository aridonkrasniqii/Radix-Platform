import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSnapshotComponent } from './portfolio-snapshot.component';

describe('PortfolioSnapshotComponent', () => {
  let component: PortfolioSnapshotComponent;
  let fixture: ComponentFixture<PortfolioSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSnapshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
