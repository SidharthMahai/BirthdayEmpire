import { NotfoundComponent } from './birthdays/notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './birthdays/add/add.component';
import { ViewComponent } from './birthdays/view/view.component';
import { ViewbymonthComponent } from './birthdays/view/viewbymonth/viewbymonth.component';
import { TodaybirthdaysComponent } from './birthdays/view/todaybirthdays/todaybirthdays.component';
import { EditComponent } from './birthdays/edit/edit.component';
import { DeleteComponent } from './birthdays/delete/delete.component';
import { OptionsComponent } from './birthdays/view/options/options.component';
import { ViewbynameComponent } from './birthdays/view/viewbyname/viewbyname.component';
import { ViewbyrelationComponent } from './birthdays/view/viewbyrelation/viewbyrelation.component';
import { AboutComponent } from './about/about.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR} from '@angular/fire/auth';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {environment} from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
    },
    {
    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    defaultCountry: 'IN'
    },
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};





@NgModule({
  declarations: [		
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    AddComponent,
    ViewComponent,
    ViewbymonthComponent,
    TodaybirthdaysComponent,
    EditComponent,
    DeleteComponent,
    OptionsComponent,
    ViewbynameComponent,
    ViewbyrelationComponent,
      AboutComponent,
      LoaderComponent,
      NotfoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule,
ReactiveFormsModule,
NgbModule,
HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
