import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {

  BASE_URL: string = 'http://api.brewerydb.com/v2/beers';

  constructor( private http: Http ) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'application/json,X-Requested-With,content-type');
    headers.append('Access-Control-Allow-Credentials', 'true');
  }

  getBeer(name) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(`${this.BASE_URL}/?name=${name}&key=31d91559b00b468e17fd134af7f3097a`, {
      headers: headers
    })
      .map((res) => res.json());
  }

}
