import { Component, OnInit } from '@angular/core';
import { Menu } from '@appShared/models/menu.model';

// Mocks
import { menuItems } from '@appCore/mocks/menu-items.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsMenu: Menu[] = [];

  constructor() {}

  ngOnInit() {
    this.itemsMenu = menuItems;
  }
}
