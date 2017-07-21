import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model'
import { Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isLoggedIn: boolean = false;
  private user: User;
  private error: string;
  subscription: Subscription;

  constructor(private session: SessionService, private userService: UserService, private router: Router) {
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

   }

   deleteBeer(id, list) {
     this.userService.deleteBeer(id, list)
      .then((updatedUser) => {
        this.user = updatedUser;
        this.session.sendUser(this.user);
      })

   }

}
