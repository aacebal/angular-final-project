import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from "@angular/router";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  @Output() userUpdated = new EventEmitter();

  loginReady: boolean = false;

  user: any;
  formInfo = {
    name: '',
    lastName: '',
    username: '',
    password: ''
  };
  error: string;

constructor(private session: SessionService, private router: Router) {
  this.userUpdated.emit(this.user);
}

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
  console.log(this.formInfo);
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
  this.router.navigate(['']);
}

errorCb(err) {
  this.error = err;
  this.user = null;
}

successCb(user) {
  this.user = user;
  this.error = null;
  this.router.navigate(['search']);
}

switchLoginReady() {
  this.loginReady = !this.loginReady;
}

}
