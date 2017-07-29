import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {RatingModule} from "ng2-rating";

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';
import { BeerService } from './services/beer.service';
import { MapService } from './services/map.service';
import { FriendsService } from './services/friends.service';
import { EventService } from './services/event.service';
import { ProfileService } from './services/profile.service';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { FriendsComponent } from './friends/friends.component';
import { BrewerySearchComponent } from './brewery-search/brewery-search.component';
import { SearchPipe } from './pipe/search.pipe';
import { AgmCoreModule } from '@agm/core';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    BeerSearchComponent,
    UserComponent,
    EventsComponent,
    FriendsComponent,
    BrewerySearchComponent,
    SearchPipe,
    ProfileComponent,
  ],
  imports: [
    RatingModule,
    AngularMultiSelectModule,
    GooglePlaceModule,
    BrowserModule,
    FormsModule,
    Ng2AutoCompleteModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGtzlMxFx05BzfUtpk1GBz3DmwDtWPLl0',
      libraries: ["places"]
    })
  ],
  providers: [SessionService, UserService, BeerService, MapService, FriendsService, EventService, ProfileService,
  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
