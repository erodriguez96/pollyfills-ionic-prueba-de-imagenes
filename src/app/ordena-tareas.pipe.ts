import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ordenaTareas'
})
export class OrdenaTareasPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const alphabeticOrder = args;

    if (!value || value.length < 2) { return value; }

    if (alphabeticOrder) {

      value.sort((a: any, b: any) => {
        if (a.action.toLowerCase() < b.action.toLowerCase()) {
          return -1;
        } else if (a.action.toLowerCase() > b.action.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      });

    } else {

      value.sort((a: any, b: any) => {
        if (a.prioridad > b.prioridad) {
          return -1;
        } else if (a.prioridad < b.prioridad) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return value;
  }

}
