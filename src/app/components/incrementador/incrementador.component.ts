import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  // El decorador imput sirve para definir que los datos vienen de otro componente. En este caso del progress.componentts.
  // tslint:disable-next-line:no-input-rename
  @Input() leyenda: string = 'leyenda'; // puedo renombrar las propiedades pasando por parámetro el nombre del atributo pero evitar
  @Input() progreso = 50;
  // Se inicializa la propiedad del tipo EventEmitter<number> con el decorador @output
  // se crea una instancia de EvetEmitter= new EventEmitter() y se utiliza en el método cambia valor
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

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
    // CambioValor es una instancia del método EventEmitter()
    // Se llama al metodo emit(parámetro:el valor que debe enviar al componente padre.)
    this.cambioValor.emit(this.progreso);
    // la función focus me permite establecer el foco en el elemento txtProgress del @viewChild
    this.txtProgress.nativeElement.focus();
  }

  /**
   * onChangesValue || Esta función puede llamarse de cualquier manera
   */
  public onChangesValue(valor: number) {
    console.log(this.txtProgress);
    if (valor >= 100) {
      this.progreso = 100;
    } else if (valor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }
}
