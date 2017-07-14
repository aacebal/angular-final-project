import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from './models/user.model'

@Injectable()
export class UserService {

  public userInfoSubject = new Subject<User>();

  constructor() { }

  sendUserInfo(userInfo) {
    this.userInfoSubject.next(userInfo);
  }

}
