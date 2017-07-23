import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { MapService } from '../services/map.service';
import { User } from '../models/user.model';
import { Router } from "@angular/router";
import { HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
  styleUrls: ['./brewery-search.component.css']
})
export class BrewerySearchComponent implements OnInit {

  isLoggedIn: boolean;
  private beer;
  private image;
  private brewery;
  private breweries;
  private data;
  private user: User;
  private error: string;
  subscription: Subscription;

  constructor(private mapService: MapService, private BeerService: BeerService, private session: SessionService, private userService: UserService, private router: Router) {
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

    this.BeerService.retrieveBreweries()
      .then((allTheBreweries) => {
        this.breweries = allTheBreweries;
      })
  }

  onSubmit(myForm) {
    this.brewery = "";
    this.BeerService.getBrewery(myForm.name)
      .then((brewery) => {
        this.brewery = JSON.parse(brewery);
        this.data = this.brewery.data;
        this.image = this.brewery.data[0].images;
      })
  }

}
