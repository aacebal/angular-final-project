import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { User } from "../models/user.model"


@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

  loginReady: boolean = false;
  lower: boolean = false;

  user: User;
  formInfo = {
    name: '',
    lastName: '',
    username: '',
    password: ''
  };
  error: string;

  errorMessage: string;

constructor(private session: SessionService, private userService: UserService, private router: Router) {
}

ngOnInit() { }

login() {
  this.session.login(this.formInfo)
    .then((userFromApi) => {
      this.router.navigate(['/search']);
      this.session.loggedIn(userFromApi);
    })
    .catch((errResponse) => {
        const apiInfo = errResponse.json();
        this.errorMessage = apiInfo.message;
    });
}

signup() {
  this.session.signup(this.formInfo)
    .then((userFromApi) => {
      this.router.navigate(['/search']);
      this.session.loggedIn(userFromApi);
    })
}

switchLoginReady() {
  this.loginReady = !this.loginReady;
  }


}
