import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSnapshotTableComponent } from './portfolio-snapshot-table.component';

describe('PortfolioSnapshotTableComponent', () => {
  let component: PortfolioSnapshotTableComponent;
  let fixture: ComponentFixture<PortfolioSnapshotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSnapshotTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSnapshotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
