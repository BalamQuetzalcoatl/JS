import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages'
})
export class NoimagesPipe implements PipeTransform {

  transform(images: any[]): string {
    return (images) ? images[0].url : 'assets/img/no_aviable_images.png';
  }

}
