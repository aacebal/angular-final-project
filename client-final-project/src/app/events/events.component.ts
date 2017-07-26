import { Component, OnInit } from '@angular/core';
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { FriendsService } from '../services/friends.service';
import { EventService } from '../services/event.service';
import { User } from '../models/user.model';
import { Beer } from '../models/beer.model';
import { Event } from '../models/event.model';
import { Router } from "@angular/router";
import { HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  subscription: Subscription;
  isLoggedIn: boolean = false;
  private user: User;
  private beersForEvent;
  createEventWindow: boolean = false;
  private newEvent: Event;
  private userNames: Object[] = [];

  constructor(private eventService: EventService, private BeerService: BeerService, private friendsService: FriendsService, private session: SessionService, private userService: UserService, private router: Router) {
  this.subscription = this.session.getUser().subscribe(user => { this.user = user }); }

  ngOnInit() {
    this.session.isLoggedIn()
      .then((userInfo) => {
        this.user = userInfo
        this.isLoggedIn = true;
        this.user.friends.forEach((oneFriend) => {
          this.userNames.push({ value: oneFriend.username, id: oneFriend.fullName});
        });
      })
      .catch((err) => {
        this.router.navigate(['/']);
      })
  }

  eventWindow(){
    this.createEventWindow = !this.createEventWindow;
  }

  getAddress(place:Object) {
    console.log("Address", place);
 }

  onSubmit(myForm) {
    console.log(myForm);
  }

}
