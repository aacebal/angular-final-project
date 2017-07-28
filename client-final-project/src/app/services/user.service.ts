import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.model'
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = environment.BASE_URL;

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

  deleteBeer(beer, list) {
    return this.http.post(`${this.BASE_URL}/api/delete/${list}/`, beer,
    { withCredentials: true})
      .toPromise()
      .then(res => res.json());
  }

  historyBeer(beer, list) {
    return this.http.post(`${this.BASE_URL}/api/history/${list}`, beer,
    {withCredentials: true})
    .toPromise()
    .then(res => res.json());
  }

  ownBeer(beer, list) {
    return this.http.post(`${this.BASE_URL}/api/own/${list}`, beer,
    {withCredentials: true})
    .toPromise()
    .then(res => res.json());
  }

}
