import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from './models/user.model'

@Injectable()
export class UserService {

  public userInfo = new Subject<User>();

  constructor() { }

  serUserInfo(userInfo) {
    this.userInfo.next(userInfo);
  }

}


// import { Injectable } from ‘@angular/core’;
// import { Subject    } from ‘rxjs/Subject’;
//
// import { User       } from ‘../model/user-model’;
//
// @Injectable()
// export class LoggedInService {
//
//  /*
//     A Subject is both an Observable (so we can subscribe() to it) and an
//     Observer (so we can call next() on it to emit a new value).
//     We exploit this feature. A Subject allows values to be multicast to many Observers.
//     We don’t exploit this feature (we only have one Observer).
//   */
//   public userInfoSubject = new Subject<User>();
//
//  constructor() { }
//
//  sendUserInfo(userInfo) {
//     this.userInfoSubject.next(userInfo);
//   }
// }
