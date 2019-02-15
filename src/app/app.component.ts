import {Component} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fecha = new Date();
  mostrarTodas = true;
  ordenarPrioridad = false;
  model = {
    user: 'Daw\'s todo list',
    items: [
      {action: 'Buy milk', done: false, prioridad: 3},
      {action: 'Buy cookies', done: false, prioridad: 5},
      {action: 'Call Jessica', done: false, prioridad: 3},
      {action: 'Call Amanda', done: false, prioridad: 1},
    ]
  };

  constructor(private todoService: TodoService) {
    // this.model.items = todoService.getItems();
    // this.ordenaTareas();
  }

  TnIncompletas() {
    let count = 0;
    if (this.model.items) {
      this.model.items.forEach((item, index) => !item.done ? count++ : true);
    }

    return count;
  }

  addItem(item: string) {
    if (item.length > 0) {
      this.model.items.push({action: item, done: false, prioridad: 0});
    }
    // this.ordenaTareas();
  }

  findTarea(elemento) {
    return elemento.action === this; // this = action
  }

  nuevaPrioridad($event: any, action) {
    // console.log('Elemento: ' + indice + ' Prioridad: ' + $event);

    const nindice = this.model.items.findIndex(this.findTarea, action);


    this.model.items[nindice].prioridad = $event;
  }

  // ordenaTareas() {
  //   this.model.items.sort((a: any, b: any) => {
  //     if (a.action.toLowerCase() < b.action.toLowerCase()) {
  //       return -1;
  //     } else if (a.action.toLowerCase() > b.action.toLowerCase()) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }

  delete(index: any) {
    this.model.items.splice(index, 1);
  }
}
