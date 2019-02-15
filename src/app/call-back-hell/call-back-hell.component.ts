import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-call-back-hell',
  template: `
    <input
      type="text"
      class="form-control"
      (keyup)="tecla($event)"
      placeholder="search...">
  `,
  styleUrls: ['./call-back-hell.component.scss']
})
export class CallBackHellComponent implements OnInit {

  private text = '';
  t: any;
  private flickrApi = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';


  constructor() {
  }

  ngOnInit() {
  }

  debounce() {
    if (this.t) { window.clearTimeout(this.t); }
    this.t = window.setTimeout(() => { this.liveSearch(); } , 1000);
  }

  tecla(e: any) {
    this.text = e.target.value;
    if (this.text.length < 4) { return; }
    this.debounce();
  }

  private liveSearch() {
    console.log('texto: ', this.text);
    $.getJSON(this.flickrApi, {
      tags: this.text,
      tagmode: 'all',
      format: 'json'
    }, this.respuesta);
  }

  private respuesta(datos) {
    console.log(datos);
  }
}
