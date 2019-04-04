import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltart]'
})
export class ResaltartDirective {

  constructor(private el: ElementRef) {
    console.log('directive');
   }

   @Input('appResaltart') nuevoColor: string;

   @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor);
   }

   @HostListener('mouseleave') mousedeja() {
    this.el.nativeElement.style.backgroundColor = null;
   }

   private resaltar(color: string){
    this.el.nativeElement.style.backgroundColor = color;
   }
}
