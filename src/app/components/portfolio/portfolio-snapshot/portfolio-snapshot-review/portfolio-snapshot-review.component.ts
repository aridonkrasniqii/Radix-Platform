import { Component } from '@angular/core';
import { PropertiesToReview } from 'src/app/PropertiesToReview';
import { SnapshotService } from 'src/app/services/snapshot.service';
import { PortfolioStateService } from 'src/app/services/state/portfolio-state.service';

@Component({
	selector: 'app-portfolio-snapshot-review',
	templateUrl: './portfolio-snapshot-review.component.html',
	styleUrls: ['./portfolio-snapshot-review.component.css'],
})
export class PortfolioSnapshotReviewComponent {
	propertyImageUrl = '../../../../assets/images/property-images/property';
	chartImageUrl = '../../../../assets/images/charts/chart';
	shown = false;
	propertiesToReview: PropertiesToReview[] = [];
	propertiesToBeShown: PropertiesToReview;
	constructor(
		private snapshotService: SnapshotService,
		private stateService: PortfolioStateService
	) {}

	ngOnInit() {
		this.snapshotService
			.getPropertiesToReview()
			.subscribe((properties: PropertiesToReview[]) => {
				this.propertiesToReview = properties as PropertiesToReview[];
				this.propertiesToBeShown = this?.propertiesToReview[0];
			});

		this.stateService.portfolioSubject.subscribe(index => {
			this.propertiesToBeShown = this.propertiesToReview[index as any];
		});

		setTimeout(() => {
			this.shown = true;
		}, 100);
	}
}
