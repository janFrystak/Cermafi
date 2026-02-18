import { Component, input } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
  selector: 'app-region-info-table',
  imports: [ScrollerModule],
  templateUrl: './region-info-table.component.html',
  styleUrl: './region-info-table.component.css'
})
export class RegionInfoTableComponent {
   id = input<Number>();
   
}
