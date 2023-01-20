import { Injectable } from '@angular/core';
import { SnapshotTableData } from '../SnapshotTableData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};
@Injectable({
	providedIn: 'root',
})
export class SnapshotService {
	private apiUrl = 'http://localhost:6001/SnapshotData';
	snapshotTableData: SnapshotTableData[] = [];

	constructor(private http: HttpClient) {}

	getSnapShotTableData(): Observable<SnapshotTableData[]> {
		return this.http.get<SnapshotTableData[]>(this.apiUrl);
	}
}
