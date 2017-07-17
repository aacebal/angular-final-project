import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http ) { }

  getBeer(name) {
    return this.http.post(`${this.BASE_URL}/api/beers`, name,
      { withCredentials: true }
    )
      .map((res) => res.json());
  }

}
