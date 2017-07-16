import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.model'

@Injectable()
export class UserService {

  public loggedInSource = new Subject<User>();

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  sendUserInfo(userInfo) {
    this.loggedInSource.next(userInfo);
  }

  addBeer(id) {
    return this.http.post(`${this.BASE_URL}/addBeer`, id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addBeerWishList(id) {
    return this.http.post(`${this.BASE_URL}/addBeerWishList`, id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addBeerHistory(id) {
    return this.http.post(`${this.BASE_URL}/addBeerHistory`, id)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
