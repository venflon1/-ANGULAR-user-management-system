import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';

@Component(
  {
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  }
)
export class UsersComponent implements OnInit {

  usersData: Array<User> = [];

  @Output("onUpdateUser")
  eventUserUpdate = new EventEmitter();

  constructor(private userService: UserService){
    console.log("[UsersComponent] - constructor - START");
    console.log("userService=", userService);
    console.log("[UsersComponent] - constructor - END");
  }

  public ngOnInit(): void {
    console.log("[UsersComponent] - ngOnInit - START");
    this.usersData = this.userService.getUsers();
    console.log("[UsersComponent] - ngOnInit - END");
  }

 public onUpdateUser(idUserToUpdate: number): void {
    console.log("[UsersComponent] - updateUser - START - idUserToUpdate=", idUserToUpdate);

    const userToUpdateArray = this.usersData.filter( user => user.id === idUserToUpdate);
    const userToUpdate = userToUpdateArray.length > 0? {...userToUpdateArray[0]}: new User();
    this.eventUserUpdate.emit(userToUpdate);

    console.log("[UsersComponent] - updateUser - END");
  }

  public deleteUser(idUserToDel: number): void {
    console.log("[UsersComponent] - deleteUser - START - idUserToDel=", idUserToDel);

    if(idUserToDel != null){
      this.userService.deleteUser(idUserToDel);
    }

    // refersh data
    this.usersData = this.userService.getUsers();

    console.debug('[UsersComponent] - this.usersData=', this.usersData);
    console.log("[UsersComponent] - deleteUser - END");
  }

}
