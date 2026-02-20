import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../../Services/chart-data.service';
import { ActivatedRoute } from '@angular/router';
import { RegionResponse } from '../../../Models/region-response.interface';
import { JsonPipe, NgIf } from '@angular/common';
import { ScrollerModule } from 'primeng/scroller';


@Component({
  selector: 'app-single-region-page',
  imports: [ScrollerModule],
  templateUrl: './single-region-page.html',
  styleUrl: './single-region-page.css',
})
export class SingleRegionPage implements OnInit {
  regionId: number | null = null;
  regionData: RegionResponse | null  = null;

  constructor (
    private route: ActivatedRoute,
    private dataService: ChartDataService,
    
  ){}

  ngOnInit(): void {
    this.loadData();
    }
  loadData():void{
    this.regionId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.regionId){
      this.dataService
      .getData_RegionId(this.regionId)
      .subscribe({
        next: (res) => {
         /*  this.regionData.stats = {
            totalApps: res.totalApplications,
            schoolCount: res.schoolCount,
            successRate: res.scoreAverage, 
            popFields: res.popularFields,
          }; */
      }});
    };
  }

  }
  


