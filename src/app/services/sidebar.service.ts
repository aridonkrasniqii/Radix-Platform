import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { SideBarProperties } from '../SideBarProperties';
import { ToolTipProperties } from '../ToolTipProperties';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};
@Injectable({
	providedIn: 'root',
})
export class SidebarService {
	private apiUrlSB = 'http://localhost:6001/SideBarProperties';
	private apiUrlTT = 'http://localhost:6001/ToolTipProperties';
	constructor(private http: HttpClient) {}

	getSideBarProperties(): Observable<SideBarProperties[]> {
		return this.http.get<SideBarProperties[]>(this.apiUrlSB);
	}

	getToolTipProperties(): Observable<ToolTipProperties[]> {
		return this.http.get<ToolTipProperties[]>(this.apiUrlTT);
	}
}
