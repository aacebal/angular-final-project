import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';
import { BeerService } from './services/beer.service';
import { MapService } from './services/map.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './app.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { UserComponent } from './user/user.component';
import { AllBeersComponent } from './all-beers/all-beers.component';
import { EventsComponent } from './events/events.component';
import { FriendsComponent } from './friends/friends.component';
import { BrewerySearchComponent } from './brewery-search/brewery-search.component';
import { SearchPipe } from './pipe/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    BeerSearchComponent,
    UserComponent,
    AllBeersComponent,
    EventsComponent,
    FriendsComponent,
    BrewerySearchComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2AutoCompleteModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, UserService, BeerService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
