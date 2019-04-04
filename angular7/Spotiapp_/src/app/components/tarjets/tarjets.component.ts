import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjets',
  templateUrl: './tarjets.component.html',
  styleUrls: ['./tarjets.component.css']
})
export class TarjetsComponent {

  @Input() items: any[];

  constructor(private route: Router) { }

   showArtist(item: any) {
     this.route.navigate(['/artist', item.type+'s', item.id]);
  }

  getArtist(parameter) {
      this.route.navigate(['/artist', 'artists',parameter]);
  }
}
