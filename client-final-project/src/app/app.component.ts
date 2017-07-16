import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isLoggedIn: boolean = false

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.session.loggedIn$.subscribe((userFromApi) => {
      this.isLoggedIn = true;
    })

    this.session.isLoggedIn()
      .then((userInfo) => {
        this.router.navigate(['/search']);
        this.isLoggedIn = true;
      })
      .catch((err) => {
        this.router.navigate(['/']);
      })

  }

  logout() {
    this.session.logout()
      .then(() => {
        this.router.navigate(['/']);
        this.isLoggedIn = false;
      })
      .catch(() => {});
  }

  handleLogin(userFromApi) {
    this.isLoggedIn = true;
  }
  
}
