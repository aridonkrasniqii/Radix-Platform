import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotTableItemComponent } from './snapshot-table-item.component';

describe('SnapshotTableItemComponent', () => {
  let component: SnapshotTableItemComponent;
  let fixture: ComponentFixture<SnapshotTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshotTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapshotTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
