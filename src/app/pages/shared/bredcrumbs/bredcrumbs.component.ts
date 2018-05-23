import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
// Seo
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-bredcrumbs',
  templateUrl: './bredcrumbs.component.html',
  styles: []
})
export class BredcrumbsComponent implements OnInit {
  public pageActive: string;
  constructor(private router: Router, public title: Title, public meta: Meta) {
    this.getDataRoute().subscribe(data => {
      console.log(data.titulo);

      this.pageActive = data.titulo;
      this.title.setTitle(this.pageActive);

      const metaTagDescription: MetaDefinition = {
        name: 'description',
        content: 'Administrador para sitio web'
      };
      const metaTagKeywords: MetaDefinition = {
        name: 'keywords',
        content: 'Administrador,sitio,web,fotografa '
      };

      this.meta.addTags([metaTagDescription, metaTagKeywords]);
    });
  }

  ngOnInit() {}

  /**
   * getDataRoute Determina qué ruta
   */
  public getDataRoute() {
    return this.router.events
      .filter(evento => evento instanceof ActivationEnd)
      .filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
      .map((evento: ActivationEnd) => evento.snapshot.data);
  }
}
