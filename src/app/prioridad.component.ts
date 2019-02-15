import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-prioridad',
  template: `
    <div class="prioridad">
      <i class="glyphicon glyphicon-menu-left"
         [ngClass]="{resaltada: prioridad>0, fueralimites: prioridad<1}"
         (click)="voto(-1)"
      ></i>
      <span>
      {{prioridad}}
    </span>
      <i class="glyphicon glyphicon-menu-right"
         [class.resaltada]="prioridad<10"
         [class.fueralimites]="prioridad>9"
         (click)="voto(1)"
      ></i>
    </div>`,
  styles: [`
    .prioridad {
      user-select: none;
      /*width: 20px;*/
      text-align: center;
      font-size: .9em;
      line-height: .7;
    }

    .prioridad i {
      margin: 0;
      padding: 0;
    }

    /*TODO mejorar esto?*/

    .fueralimites {
      pointer-events: none;
    }

    .glyphicon-menu-up, glyphicon-menu-down {
      color: #ccc;
    }

    .glyphicon:hover {
      cursor: pointer;
    }

    .resaltada {
      font-weight: 800;
      color: red;
    }
  `]
})

export class PrioridadComponent {

  @Input() prioridad = 0;
  @Output() nuevaPrioridad = new EventEmitter();

  voto(valor) {
    this.prioridad += valor;
    this.nuevaPrioridad.emit(this.prioridad);
  }
}
