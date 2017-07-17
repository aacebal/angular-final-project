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

  isLoggedIn: boolean;
  private beer;
  private image;
  private user: User;
  private error: string;

constructor(private BeerService: BeerService, private session: SessionService, private userService: UserService, private router: Router) {
}

ngOnInit() {
  this.session.isLoggedIn()
    .then((userInfo) => {
      this.user = userInfo
      this.isLoggedIn = true;
    })
    .catch((err) => {
      this.router.navigate(['/']);
    })
}

onSubmit(myForm) {
  this.BeerService.getBeer(myForm.name)
    .subscribe((beer) => {
      this.beer = beer;
      this.image = beer.data[0].labels;
      console.log(beer);
    })
}

addBeer(id) {
  this.userService.addBeer(id)
    .then(res => res.json())

}

}
