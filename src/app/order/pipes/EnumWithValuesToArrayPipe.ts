import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumWithValuesToArray' })
export class EnumWithValuesToArrayPipe implements PipeTransform {
  transform(value): Object {
    return Object.keys(value).map(o => { return { index: o, name: value[o] }; });
  }
}
