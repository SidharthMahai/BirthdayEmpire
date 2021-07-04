import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




import {AuthService} from './user/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Birthday Empire';

user: any;


constructor(private as: AuthService)
{
}


ngOnInit()
{
this.as.getUserState().subscribe( user => {
this.user=user;
})
}



logout()
{
this.as.logout();
}

}
