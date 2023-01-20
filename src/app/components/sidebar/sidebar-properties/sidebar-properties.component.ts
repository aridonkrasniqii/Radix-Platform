import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SideBarProperties } from 'src/app/SideBarProperties';
import { SidebarPropertiesItemComponent } from './sidebar-properties-item/sidebar-properties-item.component';

@Component({
	selector: 'app-sidebar-properties',
	templateUrl: './sidebar-properties.component.html',
	styleUrls: ['./sidebar-properties.component.css'],
})
export class SidebarPropertiesComponent {
	sideBarProperties: SideBarProperties[] = [];
	toggle = false;
	constructor(private sideBarService: SidebarService) {}
	ngOnInit() {
		this.sideBarService
			.getSideBarProperties()
			.subscribe(
				(properties: SideBarProperties[]) =>
					(this.sideBarProperties = properties as SideBarProperties[])
			);
	}

	onRegionClick(property: any) {
		console.log(property);
	}
}
