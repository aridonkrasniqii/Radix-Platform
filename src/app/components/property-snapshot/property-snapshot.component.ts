import { Component, OnInit } from '@angular/core';
import { SideBarProperties } from 'src/app/SideBarProperties';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Observable, first } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-property-snapshot',
	templateUrl: './property-snapshot.component.html',
	styleUrls: ['./property-snapshot.component.css'],
})
export class PropertySnapshotComponent implements OnInit {
	imageUrl = '../../assets/images/property-images/property';
	property: SideBarProperties;
	urlParameters$: Observable<string | null>;
	propertyId = 0;

	constructor(private service: SidebarService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.getUrlPropertyId();
		this.getId();
		this.getProperties();
	}

	getProperties() {
		this.service
			.getSideBarProperties()
			.subscribe((property: SideBarProperties[]) => {
				this.property = property[this.propertyId] as SideBarProperties;
			});
	}
	getUrlPropertyId() {
		this.urlParameters$ = this.route.paramMap.pipe(
			map((params: ParamMap) => params.get('id'))
		);
	}

	getId() {
		this.urlParameters$.subscribe(parameter => {
			this.propertyId = Number(parameter) - 1;
		});
	}
}
