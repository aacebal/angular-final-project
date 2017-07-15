import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model'
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;
  private error: string;

  constructor(private session: SessionService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );

    this.userService.userInfoSubject.subscribe(
      userInfo => {
        this.user = userInfo;
        console.log("USER IN USER COMPONENT" + this.user.name);
      });
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }
}
