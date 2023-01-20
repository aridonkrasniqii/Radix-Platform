import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliSnapshotDetailsComponent } from './portfoli-snapshot-details.component';

describe('PortfoliSnapshotDetailsComponent', () => {
  let component: PortfoliSnapshotDetailsComponent;
  let fixture: ComponentFixture<PortfoliSnapshotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliSnapshotDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliSnapshotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
