import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string, args?: any): String {
    return value.replace(/(\d{3})(\d{4})(\d{5})/, '($1) $2-$3');
  }

}
