import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-menu',
    templateUrl: '../menu/menu.component.html',
    styleUrls: ['../menu/menu.component.css']
  }
)
export class MenuComponent {
  menuItems = [
    'Users',
    'Control Panel',
    'Options'
  ];
}
