import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { SessionService } from '../session.service';
import { UserService } from '../user.service';
import { User } from '../models/user.model'
import { Router } from "@angular/router";
import { HostBinding } from '@angular/core';


@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css'],
  providers: [BeerService]
})
export class BeerSearchComponent implements OnInit {

  private beer;
  private image;
  private user: User;
  private error: string;

constructor(private BeerService: BeerService, private session: SessionService, private userService: UserService, private router: Router) {
}

ngOnInit() {
  this.session.isLoggedIn()
    .subscribe(
      (user) => this.successCb(user)
    );

    this.userService.userInfoSubject.subscribe(
      userInfo => {
        this.user = userInfo;
        console.log("USER IN BEER SEARCH COMPONENT" + this.user.name);
      });
    }

onSubmit(myForm) {
  this.BeerService.getBeer(myForm.name)
    .subscribe((beer) => {
      this.beer = beer;
      this.image = beer.data[0].labels;
      console.log(beer);
    })
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
}

addBeer(id) {
  this.userService.addBeer(id)
    .subscribe()
}


}
