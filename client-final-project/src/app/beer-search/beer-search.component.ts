import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model'
import { Router } from "@angular/router";
import { HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css'],
  providers: [BeerService]
})
export class BeerSearchComponent implements OnInit {

  isLoggedIn: boolean;
  public beer;
  public beers;
  private image;
  private style;
  private abv;
  private brewery;
  private data;
  private description;
  private user: User;
  private error: string;
  subscription: Subscription;
  name: any;
  private newUser;


constructor(private BeerService: BeerService, private session: SessionService, private userService: UserService, private router: Router, private route: ActivatedRoute) {
this.subscription = this.session.getUser().subscribe(user => { this.user = user; }); }

ngOnInit() {
  this.session.isLoggedIn()
    .then((userInfo) => {
      this.user = userInfo
      this.isLoggedIn = true;
    })
    .catch((err) => {
      this.router.navigate(['/']);
    })

    this.BeerService.retrieveNames()
      .then((allTheBeers) => {
        this.beers = allTheBeers
      })
}

logout() {
  this.session.logout()
    .then(() => {
      this.router.navigate(['/']);
      this.isLoggedIn = false;
    })
    .catch(() => {});
}

onSubmit(myForm) {
  this.beer = "";
  this.BeerService.getBeer(myForm.name)
    .then((beer) => {
      this.beer = JSON.parse(beer);
      this.data = this.beer.data;
      this.description = this.beer.data[0].style.description;
      this.image = this.beer.data[0].labels;
      this.brewery = this.beer.data[0].breweries[0].name;
      this.abv = this.beer.data[0].abv;
      this.style = this.beer.data[0].style.shortName;
    })
}

addBeer(beer, list) {
  this.userService.addBeer(beer, list)
    .then((updatedUser) => {
      this.user = updatedUser;
      this.session.sendUser(this.user);
    })
}

}
