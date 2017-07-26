import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { FriendsService } from '../services/friends.service';
import { User } from '../models/user.model';
import { Notification } from '../models/notification.model';
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
  private user: User;
  private userNames: Object[] = [];
  private notifications: Notification[];
  foundUser: User;
  subscription: Subscription;
  isLoggedIn: boolean = false;

  constructor(private BeerService: BeerService, private friendsService: FriendsService, private session: SessionService, private userService: UserService, private router: Router) {
  this.subscription = this.session.getUser().subscribe(user => { this.user = user }); }

  ngOnInit() {
    this.friendsService.getAllUsers()
      .then((users) => {
        this.allUsers = users;
        this.allUsers.forEach((oneUser) => {
          this.userNames.push({ value: oneUser.username, id: oneUser.name + " " + oneUser.lastName});
        });
      });
      this.session.isLoggedIn()
        .then((userInfo) => {
          this.user = userInfo
          this.isLoggedIn = true;
          this.notifications = this.user.notifications;
        })
        .catch((err) => {
          this.router.navigate(['/']);
        })
    }

    onSubmit(myForm) {
      this.friendsService.findUser(myForm.name)
        .then((user) => {
          this.foundUser = user;
        })
    }

    addFriend(foundUser) {
      this.friendsService.addFriend(foundUser)
        .then((updatedUser) => {
          this.user = updatedUser;
          this.session.sendUser(this.user);
          this.notifications = this.user.notifications;
        })
    }

    acceptFriend(notification) {
      this.friendsService.acceptFriend(notification)
        .then((updatedUser) => {
          this.user = updatedUser;
          this.session.sendUser(this.user);
          this.notifications = this.user.notifications;
        });
    }

}
