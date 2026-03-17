import { Component, OnInit } from '@angular/core';
import { RegionDataService } from '../../../Services/region-data.service';
import { ActivatedRoute } from '@angular/router';
import { RegionResponse} from '../../../Models/stat-response.interface';
import { DecimalPipe, JsonPipe} from '@angular/common';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { TableModule} from 'primeng/table';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { Skeleton } from 'primeng/skeleton';



@Component({  
  selector: 'app-single-region-page',
  imports: [ScrollerModule, CardModule,DecimalPipe, Tag, DropdownComponent, TableModule, Skeleton],
  templateUrl: './single-region-page.html',
  styleUrl: './single-region-page.css',
})
export class SingleRegionPage implements OnInit {
  dataLoading = true;
  regionId: number | null = null;
  regionData: RegionResponse | null = null;
  year: number | null = null
  avYears: number[] | null = null

  constructor (
    private route: ActivatedRoute,
    private dataService: RegionDataService,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.regionId = Number(params.get('id'));
      this.year = Number(params.get('year'));
      this.fetchData();
      this.fetchYears();
      
      
      
    });
  }
  fetchYears(): void {
    const request = this.dataService.getData_Years()
    request.subscribe({
      next: (data) => {
        this.avYears = data;
        console.log("years loaded: ", data)
      },
      error: (err) => console.error('Error fetching available years: ', err)
    })
  }

  fetchData(): void {
    if (!this.regionId) return;

    const request = this.year
    ? this.dataService.getData_RegionYearSummary(this.regionId, this.year) //essensialy just a if else
    : this.dataService.getData_RegionSummary(this.regionId);

    request.subscribe({
      next: (data) => {
        this.regionData = data;
        console.log('Data loaded:', this.regionData);
        this.dataLoading = false
      },
      error: (err) => console.error('Error fetching region data:', err)
    });
    
  }
}
  


