import { Component, Input } from '@angular/core';
import { ToolTipProperties } from 'src/app/ToolTipProperties';

@Component({
	selector: 'app-sidebar-properties-tooltip',
	templateUrl: './sidebar-properties-tooltip.component.html',
	styleUrls: ['./sidebar-properties-tooltip.component.css'],
})
export class SidebarPropertiesTooltipComponent {
	@Input() tooltip: ToolTipProperties;
}
