import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EventService {

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http ) { }

  createEvent(event) {
    return this.http.post(`${this.BASE_URL}/api/create-event`, event,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json());
  }

  retrieveOrganizedEvents(events) {
    return this.http.post(`${this.BASE_URL}/api/get-organized-events`, events,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json())
  }

  retrieveInvitedEvents(events) {
    return this.http.post(`${this.BASE_URL}/api/get-invited-events`, events,
    { withCredentials: true }
  )
    .toPromise()
    .then(res => res.json())
  }

}
