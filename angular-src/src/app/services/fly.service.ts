import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlyService {
  private _url: string = "assets/flydata.json"
  constructor(private _http: Http) { }
  getFlies() {
    return this._http.get(this._url)
      .map((response:Response) => response.json()); 
  }
}