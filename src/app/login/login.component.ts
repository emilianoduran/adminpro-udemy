import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;
// tslint:disable-next-line:no-unused-expression

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = true;
  constructor(public rute: Router) {}

  ngOnInit() {}

  /**
   * recuperaPass
   */
  public recuperaPass() {
    $('#loginform').slideUp();
    $('#recoverform').fadeIn();
  }
  /**
   * crearCuenta
   */
  public crearCuenta() {
    this.usuario = false;
  }

  cancelarRegenerar() {
    $('#loginform').slideDown();
    $('#recoverform').fadeOut();
  }

  /**
   * ingresar
   */
  public ingresar() {
    this.rute.navigate(['/dashboard']);
    console.log('ingresando');
  }
}
