import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSnapshotResearchComponent } from './portfolio-snapshot-research.component';

describe('PortfolioSnapshotResearchComponent', () => {
  let component: PortfolioSnapshotResearchComponent;
  let fixture: ComponentFixture<PortfolioSnapshotResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSnapshotResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSnapshotResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
