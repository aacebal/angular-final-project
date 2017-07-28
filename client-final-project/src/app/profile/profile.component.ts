import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SessionService } from '../services/session.service';
import { ProfileService } from '../services/profile.service';
import { EventService } from '../services/event.service';
import { User } from '../models/user.model'
import { Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoggedIn: boolean = false;
  private user: User;
  public profile;
  private error: string;
  subscription: Subscription;
  contactId: string;
  organizedEvents: Event[] = [];
  invitedEvents: Event[] = [];


  constructor(private profileService: ProfileService, private session: SessionService, private eventService: EventService,
    private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.profileService.getProfile(params.id)
        .then((profileInfo) => {
          this.profile = profileInfo;
          this.eventService.retrieveOrganizedEvents(this.profile.events.organized)
            .then((eventsInfo) => {
              this.organizedEvents = eventsInfo;
            })
          this.eventService.retrieveInvitedEvents(this.profile.events.invited)
            .then((eventsInfo) => {
              this.invitedEvents = eventsInfo;
            })
        })
    });

    this.session.isLoggedIn()
      .then((userInfo) => {
        this.user = userInfo;
        this.isLoggedIn = true;
      })
      .catch((err) => {
        this.router.navigate(['/']);
      })

  }

}
