import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.model'

@Injectable()
export class ProfileService {

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http ) { }

  getProfile(id) {
    return this.http.get(`${this.BASE_URL}/api/profile/${id}`,
    { withCredentials: true })
      .toPromise()
      .then(res => res.json());
  }
}
