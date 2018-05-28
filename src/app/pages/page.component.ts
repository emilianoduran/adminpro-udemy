import { Component, OnInit } from '@angular/core';
declare function init_plugins_theme();
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: []
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Esta función Inicializa los plugins del tema se coloca en este componente porque
    // Es el que agrupa todas las páginas
    init_plugins_theme();
  }
}
