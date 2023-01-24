import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SideBarProperties } from 'src/app/SideBarProperties';

@Component({
	selector: 'app-sidebar-properties-item',
	templateUrl: './sidebar-properties-item.component.html',
	styleUrls: ['./sidebar-properties-item.component.css'],
})
export class SidebarPropertiesItemComponent {
	toggle = false;
	@Input() property: SideBarProperties;
	@Output() onRegClick: EventEmitter<SideBarProperties> =
		new EventEmitter<SideBarProperties>();
	@Output() onHoverProperty: EventEmitter<SideBarProperties> =
		new EventEmitter<SideBarProperties>();
	@Output() onLeaveProperty: EventEmitter<SideBarProperties> =
		new EventEmitter<SideBarProperties>();

	onClick(property: any) {
		this.toggle = !this.toggle;
		this.onRegClick.emit(property);
	}
	onHover(property: any) {
		this.onHoverProperty.emit(property);
	}

	onLeave(property: any) {
		this.onLeaveProperty.emit(property);
	}
}
