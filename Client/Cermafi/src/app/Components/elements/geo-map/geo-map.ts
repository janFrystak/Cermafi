import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-geo-map',
  imports: [TooltipModule],
  templateUrl: '../../../../../materials/czech-republic.svg',
  styleUrl: './geo-map.css',
})
export class GeoMap {
  constructor(private router: Router) {}

  selectRegion(name: string, code: string) {
    console.log('Vybrán kraj:', name);
    
    this.router.navigate(['/regiony', code]);
  }
}
