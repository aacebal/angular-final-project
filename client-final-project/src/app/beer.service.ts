import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {

  BASE_URL: string = 'http://api.brewerydb.com/v2/beers';

  constructor( private http: Http ) { }

  getBeer(name) {
    return this.http.get(`${this.BASE_URL}/?name=${name}&key=31d91559b00b468e17fd134af7f3097a`)
      .map((res) => res.json());
  }

}
