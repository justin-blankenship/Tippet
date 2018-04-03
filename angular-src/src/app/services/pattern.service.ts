import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PatternService {
	result: any;

	constructor(private _http: Http) { }

	getFlies() {
		return this._http.get("/flies")
			.map(result => this.result = result.json().data);
	}

}
