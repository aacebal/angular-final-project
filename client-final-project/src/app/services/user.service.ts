import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.model'

@Injectable()
export class UserService {

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  addBeer(beer, list) {
    return this.http.post(`${this.BASE_URL}/api/addBeer/${list}`, beer,
    { withCredentials: true })
      .toPromise()
      .then(res => res.json());
  }

  deleteBeer(id, list) {
    return this.http.post(`${this.BASE_URL}/api/delete/${list}/`, id,
    { withCredentials: true})
      .toPromise()
      .then(res => res.json());
  }

  historyBeer(id, list) {
    return this.http.post(`${this.BASE_URL}/api/history/${list}`, id,
    {withCredentials: true})
    .toPromise()
    .then(res => res.json());
  }

}
