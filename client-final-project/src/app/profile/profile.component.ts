import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SessionService } from '../services/session.service';
import { ProfileService } from '../services/profile.service';
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
  private profile;
  private error: string;
  subscription: Subscription;
  contactId: string;

  constructor(private profileService: ProfileService, private session: SessionService,
    private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.profileService.getProfile(params.id)
        .then((profileInfo) => {
          this.profile = profileInfo;
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
