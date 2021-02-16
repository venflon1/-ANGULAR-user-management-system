import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input("userSelected")
  userSelected: User;

  @Output("onCloseModal")
  evCloseModal = new EventEmitter();

  constructor(private userService: UserService){
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  public doCloseModal(): void {
    console.log("[ModalComponent] - closeModal - START ");

    this.evCloseModal.emit();

    console.log("[ModalComponent] - closeModal - END ");
  }

  public userDetailUpdate(user: User): void {
    console.log("[ModalComponent] - userDetailUpdate - START - suer=", user);

    if(user.id == null) {
      user.id = this.userService.getUsers().length + 1;
      this.userService.saveNewUser(user);
    } else {
      this.userService.updateUser(user);
    }
    this.doCloseModal();

    console.log("[ModalComponent] - userDetailUpdate - END ");
  }


}
