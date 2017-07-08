import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { SessionService } from '../session.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css'],
  providers: [BeerService]
})
export class BeerSearchComponent implements OnInit {
  beer;
  user: any;
  error: string;

constructor(private BeerService: BeerService, private session: SessionService, private router: Router) { }

ngOnInit() {
}

onSubmit(myForm) {
  this.BeerService.getBeer(myForm.name)
    .subscribe((beer) => {
      this.beer = beer;
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




}
