import { Routes } from '@angular/router';

import { SignupLoginComponent } from './signup-login/signup-login.component';


export const routes: Routes = [
    { path: '', component: SignupLoginComponent },
    { path: '**', redirectTo: '' }
];
