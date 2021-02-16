import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../model/User';

@Component(
  {
    selector: 'tr[app-user]',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  }
)
export class UserComponent implements OnInit {

  @Input("userData")
  user: User;

  @Output("onDeleteUser")
  eventUserDelete = new EventEmitter();

  @Output("onSelectUser")
  eventUserSelect = new EventEmitter();

  constructor() {
    console.log("[UserComponent] - constrctor - START");
    console.log("[UserComponent] - constrctor - END");

  }

  public ngOnInit(): void {
    console.log("[UserComponent] - ngOnInit - START");
    console.log("[UserComponent] - ngOnInit - END");
  }

  public onDeleteUser(idUserToDel: number): void {
    console.log("[UserComponent] - onDeleteUser - START - idUserToDel=", idUserToDel);

    this.eventUserDelete.emit(this.user.id)

    console.log("[UserComponent] - onDeleteUser - END");
  }

  public onSelectUser(idUserToUpdate: number): void {
    console.log("[UserComponent] - onUpdateUser - START - idUserToUpdate=", idUserToUpdate);

    this.eventUserSelect.emit(this.user.id);

    console.log("[UserComponent] - onUpdateUser - END");
  }

}
