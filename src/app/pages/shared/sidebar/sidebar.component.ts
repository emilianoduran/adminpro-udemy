import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}
=======
  constructor(public _sidebar: SidebarService) {}
>>>>>>> c1c531e7e616d49e9aea6ede06340c004c7cc1cc

  ngOnInit() {}
}
