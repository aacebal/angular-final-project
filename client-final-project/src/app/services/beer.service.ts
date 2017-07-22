import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BeerService {

  BASE_URL: string = 'http://localhost:3000';

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


}
