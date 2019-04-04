import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, activated: boolean = true, args?: any): any {
    if (activated) {
        let text: string = "";
        for(let i = 0; i<= value.length; i++){
          text += "*";
        }
        return text;
    } else {
      return value;
    }
  }

}
