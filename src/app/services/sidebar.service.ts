import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { SideBarProperties } from '../SideBarProperties';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};
@Injectable({
	providedIn: 'root',
})
export class SidebarService {
	private apiUrl = 'http://localhost:6001/SideBarProperties';
	constructor(private http: HttpClient) {}

	getSideBarProperties(): Observable<SideBarProperties[]> {
		return this.http.get<SideBarProperties[]>(this.apiUrl);
	}
}
