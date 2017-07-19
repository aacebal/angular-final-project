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

  addBeer(id) {
    return this.http.post(`${this.BASE_URL}/api/addBeer/`, id,
    {withCredentials: true}
  )
      .toPromise()
      .then(res => res.json());
  }

  addBeerWishList(id) {
    return this.http.post(`${this.BASE_URL}/addBeerWishList`, id)
      .toPromise()
      .then(res => res.json());
  }

  addBeerHistory(id) {
    return this.http.post(`${this.BASE_URL}/addBeerHistory`, id)
      .toPromise()
      .then(res => res.json());
  }

}
