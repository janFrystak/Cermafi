import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-region-map',
  imports: [TooltipModule],
  templateUrl: './region-map.svg',
  styleUrl: './region-map.css',
})
export class RegionMap {
  constructor(private router: Router) {}

  selectRegion(code: number) {
    /* console.log('Vybrán kraj:', code); */
    this.router.navigate(['/region', code]);
  }
}
