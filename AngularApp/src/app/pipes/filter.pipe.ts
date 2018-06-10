import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: string) {
    if(input) {
      input=input.toString();
      return value.filter(function(el:any){
        return el.toString().indexOf(input) > -1;
      });
    }
    return value;
  }

}
