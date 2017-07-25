import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

import { Notification } from '../models/notification.model';

@Injectable()
export class FriendsService {

  private notifiedSource = new Subject<Notification>();

  notified$ = this.notifiedSource.asObservable();

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http) { }

  getNotification(): Observable<any> {
    return this.notifiedSource.asObservable();
  }

  sendNotification(notification: Notification) {
    this.notifiedSource.next(notification);
  }

  notified (notification) {
    this.notifiedSource.next(notification);
  }

  getAllUsers() {
    return this.http.get(`${this.BASE_URL}/api/allUsers`,
    { withCredentials : true }
  )
    .toPromise()
    .then(res => res.json())
  }

  findUser(username) {
    return this.http.get(`${this.BASE_URL}/api/findUser/${username}`,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

  sendRequest(foundUser) {
    return this.http.post(`${this.BASE_URL}/api/sendRequest`, foundUser,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

}
