import { Injectable } from '@angular/core';
import { SnapshotTableData } from '../SnapshotTableData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PropertiesToReview } from '../PropertiesToReview';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};
@Injectable({
	providedIn: 'root',
})
export class SnapshotService {
	private apiUrlSD = 'http://localhost:6001/SnapshotData';
	private apiUrlPTR = 'http://localhost:6001/PropertiesToReview';
	snapshotTableData: SnapshotTableData[] = [];

	constructor(private http: HttpClient) {}

	getSnapShotTableData(): Observable<SnapshotTableData[]> {
		return this.http.get<SnapshotTableData[]>(this.apiUrlSD);
	}

	getPropertiesToReview(): Observable<PropertiesToReview[]> {
		return this.http.get<PropertiesToReview[]>(this.apiUrlPTR);
	}
}
