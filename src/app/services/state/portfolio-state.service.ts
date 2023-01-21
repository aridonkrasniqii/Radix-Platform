import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class PortfolioStateService {
	public portfolioSubject = new Subject<string>();
	constructor() {}

	sendPropertyToReview(index: any) {
		this.portfolioSubject.next(String(index - 1));
	}
}
