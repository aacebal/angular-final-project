import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
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
    .then(
      (user) => this.successCb(user)
    );

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
    .then(
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

addBeer(id) {

}

}
