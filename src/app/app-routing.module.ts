import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent} from './user/register/register.component';
import { HomeComponent} from './home/home.component';
import { ProfileComponent} from './user/profile/profile.component';

import { LoginComponent} from './user/login/login.component';
const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path : 'register', component: RegisterComponent},
{path : 'home', component: HomeComponent},
{path : 'login', component: LoginComponent},
{path : 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }