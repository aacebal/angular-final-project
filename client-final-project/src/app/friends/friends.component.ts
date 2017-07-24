import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { FriendsService } from '../services/friends.service';
import { User } from '../models/user.model'
import { Router } from "@angular/router";
import { HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  private allUsers;
  private userNames: Object[] = [];

  constructor(private BeerService: BeerService, private friendsService: FriendsService, private session: SessionService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.friendsService.getAllUsers()
      .then((users) => {
        this.allUsers = users;
        this.allUsers.forEach((oneUser) => {
          this.userNames.push({ value: oneUser.username, id: oneUser.name + " " + oneUser.lastName});
        })
        console.log(this.userNames);
        })
  }

}
