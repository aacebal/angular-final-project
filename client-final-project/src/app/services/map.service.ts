import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MapService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getBreweryLocation(breweryName) {
    return this.http.get(`${this.BASE_URL}/api/brewery-location/${breweryName}`,
    {withCredentials: true}
  )
      .toPromise()
      .then(res => res.json())
  }

}
