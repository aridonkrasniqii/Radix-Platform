import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SideBarProperties } from 'src/app/SideBarProperties';

@Component({
	selector: 'app-sidebar-properties',
	templateUrl: './sidebar-properties.component.html',
	styleUrls: ['./sidebar-properties.component.css'],
})
export class SidebarPropertiesComponent {
	sideBarProperties: SideBarProperties[] = [];

	constructor(private sideBarService: SidebarService) {}
	ngOnInit() {
		this.sideBarService
			.getSideBarProperties()
			.subscribe(
				(properties: SideBarProperties[]) =>
					(this.sideBarProperties = properties as SideBarProperties[])
			);
		// console.log(this.sideBarProperties); // if you print it here the array will be empty
	}
	// TODO:
	// define a action event whenever you click a button to show its department
	// An Output event emitter in the sidebar-item then implement the emitter here
}
