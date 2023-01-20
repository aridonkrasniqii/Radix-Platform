import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SideBarProperties } from 'src/app/SideBarProperties';

@Component({
	selector: 'app-sidebar-properties-item',
	templateUrl: './sidebar-properties-item.component.html',
	styleUrls: ['./sidebar-properties-item.component.css'],
})
export class SidebarPropertiesItemComponent {
	@Input() property: SideBarProperties;
	@Output() onRegClick: EventEmitter<SideBarProperties> =
		new EventEmitter<SideBarProperties>();

	onClick(property: any) {
		this.onRegClick.emit(property);
	}
}
