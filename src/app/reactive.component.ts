import {Component, OnInit, OnDestroy} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import {hasI18nAttrs} from '@angular/compiler/src/render3/view/i18n/util';
import {detectChangesInRootView} from '@angular/core/src/render3/instructions';
import {container} from '@angular/core/src/render3';

declare var $: any; // para que sepa que ese dolar es de jquery

@Component({
  selector: 'app-reactive',
  template: `
    <input type="text" class="form-control" id="search" placeholder="search...">
    <div class="images-grid">
      <div class="row">
        <div id="images">
          
        </div>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class ReactiveComponent implements OnInit, OnDestroy {
  private flickrApi = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  private su = new Subscription();

  constructor() {
  }

  ngOnInit(): void {
    const keyups = fromEvent($('#search'), 'keyup').pipe(
      map((e: any) => e.target.value),
      filter(text => text.length > 3),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        const promise = $.getJSON(this.flickrApi, {
          tags: searchTerm,
          tagmode: 'all',
          format: 'json'
        });
        const observable = fromPromise(promise);
        return observable;
      })
    );

    this.su = keyups.subscribe(
      // (data) => console.log(data),
      (data) => {
        //limpiar el div porque si no se amontonan las imagenes amijo. (https://api.jquery.com/empty/)
        $('#images').empty();
        //iterar a traves de lo que nos devuelva flickr
        // @ts-ignore
        $.each(data.items, function (i, item) {
          // $('<div>').attr('class', 'img-container').appendTo('#images');
          $('<img>')
            .attr('src', item.media.m)
            .attr('class', 'col-sm-3')
            .click(function(i){
              //console.log(i);
              $(i.target).remove();
            })
            .css({
              //'width':'50%',
              'height':'200px',
              'margin':'10px'
            })
            .appendTo('#images');
        });
      },
      (error) => console.log(error),
      () => console.log('completed!!!')
    );


  }

  ngOnDestroy(): void {
    this.su.unsubscribe();
  }

}
