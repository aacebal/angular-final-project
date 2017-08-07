import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BeerService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = environment.BASE_URL;

  constructor( private http: Http ) { }

  getBeer(name) {
    return this.http.get(`${this.BASE_URL}/api/beers/${name}`,
      { withCredentials: true }
    )
    .toPromise()
    .then(res => res.json())
  }

  getBrewery(name) {
    return this.http.get(`${this.BASE_URL}/api/breweries/${name}`,
      { withCredentials: true }
    )
    .toPromise()
    .then(res => res.json())
  }
  
  retrieveNames() {
    return this.http.get(`${this.BASE_URL}/api/getBeers`,
    { withCredentials: true }
  )
    .toPromise().
    then(res => res.json())
  }

  retrieveBreweries() {
    return this.http.get(`${this.BASE_URL}/api/getBreweries`,
    { withCredentials: true }
  )
    .toPromise().
    then(res => res.json())
  }
}
