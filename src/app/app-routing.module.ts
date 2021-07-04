import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewbynameComponent } from './birthdays/view/viewbyname/viewbyname.component';
import { HomeComponent} from './home/home.component';
import { ProfileComponent} from './user/profile/profile.component';
import { AddComponent } from './birthdays/add/add.component';
import {ViewComponent } from './birthdays/view/view.component';
import {ViewbymonthComponent } from './birthdays/view/viewbymonth/viewbymonth.component';
import {EditComponent } from './birthdays/edit/edit.component';
import { LoginComponent} from './user/login/login.component';
import {TodaybirthdaysComponent } from './birthdays/view/todaybirthdays/todaybirthdays.component';
import {ViewbyrelationComponent } from './birthdays/view/viewbyrelation/viewbyrelation.component';


const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path : 'home', component: HomeComponent},
{path : 'login', component: LoginComponent},
{path : 'profile', component: ProfileComponent},
{path : 'viewbirthdays', component: ViewComponent},
{path : 'viewbirthdays/:id', component: EditComponent},
{path : 'viewbymonth',component: ViewbymonthComponent },
{path : 'viewbyname',component: ViewbynameComponent },
{path : 'viewbyrelation',component: ViewbyrelationComponent },
{path : 'todaybirthdays',component: TodaybirthdaysComponent },
{path : 'addbirthday', component: AddComponent},
{path : 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
