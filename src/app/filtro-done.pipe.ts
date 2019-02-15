import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDone',
  pure: false
})
export class FiltroDonePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const done = args;
    if (!done) { return value; }
    if (!value) { return null; }
    const filtro = value.filter(item => item.done === !done);

    return filtro;
  }

}
