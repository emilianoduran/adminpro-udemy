import { Component, OnInit } from '@angular/core';
// import { $ } from 'protractor';

// tslint:disable-next-line:no-unused-expression

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = true;
  constructor() {}

  ngOnInit() {}

  /**
   * recuperaPass
   */
  public recuperaPass() {
    // $('#loginform').slideUp();
    // $('#recoverform').fadeIn();
  }
  /**
   * crearCuenta
   */
  public crearCuenta() {
    this.usuario = false;
  }
}
