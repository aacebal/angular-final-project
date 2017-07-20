import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { User } from '../models/user.model'


@Injectable()
export class SessionService {

  private loggedInSource = new Subject<User>();

  loggedIn$ = this.loggedInSource.asObservable();

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getUser(): Observable<any> {
        return this.loggedInSource.asObservable();
    }

  sendUser(user: User) {
      this.loggedInSource.next(user);
  }

  loggedIn (userInfo) {
    this.loggedInSource.next(userInfo);
  }


  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/api/loggedin`,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

  signup(user) {
    return this.http.post(`${this.BASE_URL}/api/signup`, user,
    { withCredentials: true }
  )
      .toPromise()
      .then(res => res.json());
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/api/login`, user,
    { withCredentials: true}
  )
    .toPromise()
    .then(res => res.json())
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/api/logout`, {},
    { withCredentials: true}
  )
    .toPromise()
    .then(res => res.json())
  }


}
