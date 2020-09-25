import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './navs/sidebar/sidebar.component';
import { NavbarComponent } from './navs/navbar/navbar.component';
import { AddComponent } from './birthdays/add/add.component';
import { ViewComponent } from './birthdays/view/view.component';
import { ViewbymonthComponent } from './birthdays/view/viewbymonth/viewbymonth.component';
import { TodaybirthdaysComponent } from './birthdays/view/todaybirthdays/todaybirthdays.component';
import { EditComponent } from './birthdays/edit/edit.component';
import { DeleteComponent } from './birthdays/delete/delete.component';
import { OptionsComponent } from './birthdays/view/options/options.component';
import { ViewbynameComponent } from './birthdays/view/viewbyname/viewbyname.component';
import { ViewbyrelationComponent } from './birthdays/view/viewbyrelation/viewbyrelation.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    AddComponent,
    ViewComponent,
    ViewbymonthComponent,
    TodaybirthdaysComponent,
    EditComponent,
    DeleteComponent,
    OptionsComponent,
    ViewbynameComponent,
    ViewbyrelationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule,
ReactiveFormsModule,
AngularFireAuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule,
AngularFireFunctionsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
