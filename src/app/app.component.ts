import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/User';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }
)
export class AppComponent {

  showModal: boolean = false;

  userToUpdate: User = new User();

  public updateUser(user: User): void {
    console.log("[AppComponent] - updateUser - START - user=", user);

    this.userToUpdate = user;
    this.showModal = this.userToUpdate != null? true: false;

    console.log("[AppComponent] - updateUser - END");
  }

}
