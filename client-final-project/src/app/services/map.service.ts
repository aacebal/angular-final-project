import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class MapService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = environment.BASE_URL;

  constructor(private http: Http) { }

  getBreweryLocation(breweryName) {
    return this.http.get(`${this.BASE_URL}/api/brewery-location/${breweryName}`,
    {withCredentials: true}
  )
      .toPromise()
      .then(res => res.json())
  }

}
