import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  public progreso1 = 50;
  public progreso2 = 20; // Valor inicial y es lo que modifica el output
  constructor() {}

  ngOnInit() {}
}
