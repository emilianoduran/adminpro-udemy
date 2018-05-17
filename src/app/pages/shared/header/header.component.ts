import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  /**
   * logOut
   */
  public logOut() {
    this.router.navigate(['login']);
  }
}
