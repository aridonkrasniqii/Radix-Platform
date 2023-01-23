import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySnapshotComponent } from './property-snapshot.component';

describe('PropertySnapshotComponent', () => {
  let component: PropertySnapshotComponent;
  let fixture: ComponentFixture<PropertySnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySnapshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
