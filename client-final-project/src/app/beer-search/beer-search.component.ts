import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css'],
  providers: [BeerService]
})
export class BeerSearchComponent implements OnInit {
  beer;

  constructor( private BeerService: BeerService) { }

  ngOnInit() {
  }

  onSubmit(myForm) {
    this.BeerService.getBeer(myForm.name)
      .subscribe((beer) => {
        this.beer = beer;
      })
  }

}
