import { Component } from '@angular/core';
import { RegionMap } from '../../elements/region-map/region-map';
import { Divider } from 'primeng/divider';

import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-region-page',
  imports: [RegionMap, Divider, PanelModule],
  templateUrl: './region-page.html',
  styleUrl: './region-page.css',
})
export class RegionPage {

}
