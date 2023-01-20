import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSnapshotReviewComponent } from './portfolio-snapshot-review.component';

describe('PortfolioSnapshotReviewComponent', () => {
  let component: PortfolioSnapshotReviewComponent;
  let fixture: ComponentFixture<PortfolioSnapshotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSnapshotReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSnapshotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
