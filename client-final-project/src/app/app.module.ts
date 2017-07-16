import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';
import { BeerService } from './services/beer.service';

import { AppComponent } from './app.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    BeerSearchComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, UserService, BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
