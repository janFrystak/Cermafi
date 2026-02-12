import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../../Services/chart-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-region-page',
  imports: [],
  templateUrl: './single-region-page.html',
  styleUrl: './single-region-page.css',
})
export class SingleRegionPage implements OnInit {
  regionId: string | null = null;

  constructor (
    private route: ActivatedRoute,
    private dataService: ChartDataService
  ){}

  ngOnInit(): void {
    this.regionId = this.route.snapshot.paramMap.get('id');

    if(this.regionId){
      
    }
  }

}
