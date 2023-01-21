import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SideBarProperties } from 'src/app/SideBarProperties';
import { ToolTipProperties } from 'src/app/ToolTipProperties';

@Component({
	selector: 'app-sidebar-properties',
	templateUrl: './sidebar-properties.component.html',
	styleUrls: ['./sidebar-properties.component.css'],
})
export class SidebarPropertiesComponent {
	hidden = true;
	sideBarProperties: SideBarProperties[] = [];
	toolTipProperties: ToolTipProperties[] = [];
	shownToolTip: ToolTipProperties[] = [];
	toolTipIndex = 0;
	constructor(
		private sideBarService: SidebarService,
		private toolTipService: SidebarService
	) {}
	ngOnInit() {
		this.sideBarService
			.getSideBarProperties()
			.subscribe(
				(properties: SideBarProperties[]) =>
					(this.sideBarProperties = properties as SideBarProperties[])
			);
		this.toolTipService
			.getToolTipProperties()
			.subscribe((properties: ToolTipProperties[]) => {
				this.toolTipProperties = properties as ToolTipProperties[];
			});
	}

	onRegionClick(property: any) {}

	showToolTip(property: any) {
		this.shownToolTip = [this.toolTipProperties[property.id - 1]];
		this.hidden = false;
	}

	hideToolTip(property: any) {
		this.hidden = true;
	}
}
