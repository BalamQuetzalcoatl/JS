import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domsecurity'
})
export class DomsecurityPipe implements PipeTransform {

  constructor(private domsanitizer: DomSanitizer){}

  transform(value: string, url: string, args?: any): any {
    return this.domsanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
