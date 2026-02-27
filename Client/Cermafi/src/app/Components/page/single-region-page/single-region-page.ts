import { Component, OnInit } from '@angular/core';
import { RegionDataService } from '../../../Services/region-data.service';
import { ActivatedRoute } from '@angular/router';
import { RegionResponse } from '../../../Models/region-response.interface';
import { DecimalPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { TableModule} from 'primeng/table';
import { YearDropdownComponent } from '../../elements/dropdown/dropdown.component';


@Component({  
  selector: 'app-single-region-page',
  imports: [ScrollerModule, CardModule, NgFor, NgIf, DecimalPipe, Tag, YearDropdownComponent, TableModule],
  templateUrl: './single-region-page.html',
  styleUrl: './single-region-page.css',
})
export class SingleRegionPage implements OnInit {
  regionId: number | null = null;
  regionData: RegionResponse | null = null;
  year: number | null = null

  constructor (
    private route: ActivatedRoute,
    private dataService: RegionDataService,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.regionId = Number(params.get('id'));
      this.year = Number(params.get('year'));
      this.fetchData();
    });
  }

  fetchData(): void {
    if (!this.regionId) return;

    const request = this.year
      ? this.dataService.getData_RegionYearSummary(this.regionId, this.year)
      : this.dataService.getData_RegionSummary(this.regionId);

    request.subscribe({
      next: (data) => {
        this.regionData = data;
        console.log('Data loaded:', this.regionData);
      },
      error: (err) => console.error('Error fetching region data:', err)
    });
  }
}
  


