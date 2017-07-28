import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { BeerService } from '../services/beer.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { FriendsService } from '../services/friends.service';
import { EventService } from '../services/event.service';
import { User } from '../models/user.model';
import { Beer } from '../models/beer.model';
import { Event } from '../models/event.model';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from '@angular/forms';
import { HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


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
  invitesOpen: boolean = false;
  private newEvent: Event;
  private userNames: Object[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  private events;
  ownedBeers: Object[] = [];
  organizedEvents: Event[] = [];
  invitedEvents: Event[] = [];

  constructor(private eventService: EventService, private BeerService: BeerService, private friendsService: FriendsService, private session: SessionService, private userService: UserService, private router: Router) {
  this.subscription = this.session.getUser().subscribe(user => { this.user = user }); }


  ngOnInit() {
    this.session.isLoggedIn()
      .then((userInfo) => {
        this.user = userInfo
        this.isLoggedIn = true;
        this.eventService.retrieveOrganizedEvents(this.user.events.organized)
          .then((eventsInfo) => {
            this.organizedEvents = eventsInfo;
            console.log(this.organizedEvents);
          })
        this.eventService.retrieveInvitedEvents(this.user.events.invited)
          .then((eventsInfo) => {
            this.invitedEvents = eventsInfo;
          })
        this.user.friends.forEach((oneFriend) => {
          this.userNames.push({ id: oneFriend.username, itemName: oneFriend.fullName});
        });
        this.user.beers.ownList.forEach((oneBeer) => {
          this.ownedBeers.push({ id: oneBeer.id, itemName: oneBeer.name})
        })
      })
      .catch((err) => {
        this.router.navigate(['/']);
      })
      this.dropdownSettings = {
        singleSelection: false,
        text:"Click to Add",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes:"myclass custom-class"
      };
  }

  eventWindow(){
    this.createEventWindow = !this.createEventWindow;
  }

  openInvites(){
    this.invitesOpen = !this.invitesOpen;
  }

  getAddress(place:Object) {
    console.log("Address", place);
 }

  onSubmit(event) {
    console.log(event);
    this.eventService.createEvent(event)
      .then((userInfo) => {
        this.user = userInfo;
        this.events = this.user.events;
      });
      this.eventService.retrieveOrganizedEvents(this.user.events.organized)
        .then((eventsInfo) => {
          this.organizedEvents = eventsInfo;
          console.log(this.organizedEvents);
        });
      this.eventService.retrieveInvitedEvents(this.user.events.invited)
        .then((eventsInfo) => {
          this.invitedEvents = eventsInfo;
        });
      this.eventWindow()
    }

  deleteEvent(event) {
    console.log(event);
    this.eventService.deleteEvent(event)
      .then((userInfo) => {
        this.user = userInfo;
      });
      this.eventService.retrieveOrganizedEvents(this.user.events.organized)
        .then((eventsInfo) => {
          this.organizedEvents = eventsInfo;
          console.log(this.organizedEvents);
        });
      this.eventService.retrieveInvitedEvents(this.user.events.invited)
        .then((eventsInfo) => {
          this.invitedEvents = eventsInfo;
        });
  }

}
