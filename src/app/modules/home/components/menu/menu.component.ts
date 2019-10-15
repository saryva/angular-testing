import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '@appShared/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() items: Menu[] = [];

  constructor() { }

  ngOnInit() {
  }
}
