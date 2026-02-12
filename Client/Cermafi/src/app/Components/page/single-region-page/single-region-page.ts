import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../../Services/chart-data.service';
import { ActivatedRoute } from '@angular/router';
import { RegionRespone } from '../../../Models/region-response';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-single-region-page',
  imports: [NgIf, JsonPipe],
  templateUrl: './single-region-page.html',
  styleUrl: './single-region-page.css',
})
export class SingleRegionPage implements OnInit {
  regionId: number | null = null;
  regionData?: RegionRespone

  constructor (
    private route: ActivatedRoute,
    private dataService: ChartDataService,
    
  ){}

  ngOnInit(): void {
    this.getData();
    }
  getData():void{
    this.regionId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.regionId){

      this.dataService.getChartData_RegionId(this.regionId).subscribe({
        next: (res) => {
          this.regionData = res;

        }, 
        error: (err) => {
          console.error('Chyba při komunikaci s API:', err);
        }
      });
  }

  }
  

}
