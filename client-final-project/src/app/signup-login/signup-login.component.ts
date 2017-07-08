import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

  user: any;
  formInfo = {
    name: '',
    lastName: '',
    username: '',
    password: ''
  };
  error: string;

constructor(private session: SessionService) { }

ngOnInit() {
  this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );
}

login() {
  this.session.login(this.formInfo)
    .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err)
    );
}

signup() {
  this.session.signup(this.formInfo)
    .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err)
    );
}

logout() {
  this.session.logout()
    .subscribe(
      () => this.successCb(null),
      (err) => this.errorCb(err)
    );
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
