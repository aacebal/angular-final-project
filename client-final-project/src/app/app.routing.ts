import { Routes } from '@angular/router';

import { SignupLoginComponent } from './signup-login/signup-login.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    { path: '', component: SignupLoginComponent },
    { path: 'search', component: BeerSearchComponent },
    { path: 'profile/:id', component: ProfileComponent},
    { path: '**', redirectTo: '' }
];
