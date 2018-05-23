import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';
import { retry } from 'rxjs-compat/operator/retry';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  Subscription: Subscription;
  constructor() {
    // los Observables emiten 3 callbacks
    // 1 La respuesta con el contenido
    // 2 El error en caso de existir
    // 3 Si el proceso finalizó
    this.Subscription = this.regresaObservable()
      .retry(2) // al fallar lo intenta dos veces
      .subscribe(
        contenido => console.log(contenido), // Primer Callback || next(contador)
        error => console.error('Error en el Obs', error), // Segundo Callback || error si existe
        () => console.log('El observador terminó') // Tercer Callback  || complete() no admite parámetros
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(obsever => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador
        };
        obsever.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   obsever.complete();
        // }

        // if (contador === 2) {
        //   obsever.error('Auxilio!!!');
        // }
      }, 500);
    })
      .retry(2)
      .map((resp: any) => resp.valor)
      .filter((valor, index) => {
        if (valor % 2 === 1) {
          // impar
          return true;
        } else {
          //par
          return false;
        }
      });
  }
}
