import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input("userSelected")
  userSelected: User;

  @Output("onUserUpdate")
  evUserUpdate = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  public updateUser(userToUpdate: User): void {
    console.log("[UserDetailComponent] - updateUser - START - userToUpdate=", userToUpdate);

    this.evUserUpdate.emit(userToUpdate);

    console.log("[UserDetailComponent] - updateUser - END");
  }

}
