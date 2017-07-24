import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FriendsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http) { }

  getAllUsers() {
    return this.http.get(`${this.BASE_URL}/api/allUsers`,
    { withCredentials : true }
  )
    .toPromise()
    .then(res => res.json())
  }

}
