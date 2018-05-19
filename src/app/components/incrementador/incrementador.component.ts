import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  // El decorador imput sirve para definir que los datos vienen de otro componente. En este caso del progress.componentts.

  @Input() leyenda: string = 'leyenda'; // puedo renombrar las propiedades
  @Input() progreso = 50;

  constructor() {}

  ngOnInit() {}

  /**
   * cambiarProgreso
   */
  public cambiarProgreso(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    } else if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;
  }
}
