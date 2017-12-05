import{User} from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  user = new User();
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
    console.log(this.user);
  }
}
