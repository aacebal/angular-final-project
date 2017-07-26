import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

import { Notification } from '../models/notification.model';

@Injectable()
export class FriendsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http ) { }

  getAllUsers() {
    return this.http.get(`${this.BASE_URL}/api/all-users`,
    { withCredentials : true }
  )
    .toPromise()
    .then(res => res.json())
  }

  findUser(username) {
    return this.http.get(`${this.BASE_URL}/api/find-user/${username}`,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

  addFriend(foundUser) {
    return this.http.post(`${this.BASE_URL}/api/add-friend`, foundUser,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

  acceptFriend(notification) {
    return this.http.post(`${this.BASE_URL}/api/accept-friend`, notification,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

  decline(notification) {
    return this.http.post(`${this.BASE_URL}/api/decline-friend`, notification,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

}
