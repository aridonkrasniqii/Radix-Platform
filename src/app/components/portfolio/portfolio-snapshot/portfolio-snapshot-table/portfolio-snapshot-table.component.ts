import { Component } from '@angular/core';
import { SnapshotService } from 'src/app/services/snapshot.service';
import { SnapshotTableData } from 'src/app/SnapshotTableData';
import { PortfolioStateService } from 'src/app/services/state/portfolio-state.service';
@Component({
	selector: 'app-portfolio-snapshot-table',
	templateUrl: './portfolio-snapshot-table.component.html',
	styleUrls: ['./portfolio-snapshot-table.component.css'],
})
export class PortfolioSnapshotTableComponent {
	tableData: SnapshotTableData[] = [];
	constructor(
		private snapshotService: SnapshotService,
		private stateService: PortfolioStateService
	) {}

	ngOnInit() {
		this.getTableData();
	}

	onClick(data: any) {
		this.stateService.sendPropertyToReview(data.id);
	}

	getTableData() {
		this.snapshotService
			.getSnapShotTableData()
			.subscribe((tableData: SnapshotTableData[]) => {
				this.tableData = tableData as SnapshotTableData[];
			});
	}
}
