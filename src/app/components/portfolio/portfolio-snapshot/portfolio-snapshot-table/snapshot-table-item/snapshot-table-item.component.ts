import { Component, Input } from '@angular/core';
import { SnapshotTableData } from 'src/app/SnapshotTableData';

@Component({
	selector: '[app-snapshot-table-item]',
	templateUrl: './snapshot-table-item.component.html',
	styleUrls: ['./snapshot-table-item.component.css'],
})
export class SnapshotTableItemComponent {
	@Input() data: SnapshotTableData;
}
