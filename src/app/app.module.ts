import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }   from './app.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { UserService } from '../services/user.service';
import { ModalComponent } from './modal/modal.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const myRoutes: Routes = [
  {
    path: '/users',
    pathMatch: 'full',
    component: UsersComponent
  },
  {
    path: '/',
    redirectTo: '/users'
  }
];

@NgModule(
  {
    declarations: [
      AppComponent,
        MenuComponent,
        UsersComponent,
        UserComponent,
        ModalComponent,
        UserDetailComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [
      UserService
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule {

}
