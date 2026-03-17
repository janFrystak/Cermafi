import { Component } from '@angular/core';
import { SimpleGraphComponent } from '../../graphs/simple-graph/simple-graph.component';
import { CountdownTimer } from '../../elements/countdown-timer/countdown-timer';
import { HomeDataService } from '../../../Services/home-data.service';
import { RegionDataService } from '../../../Services/region-data.service';
import { HomeResponse } from '../../../Models/stat-response.interface';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home-page',
  imports: [SimpleGraphComponent, CountdownTimer, ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit{
  stats: HomeResponse | null = null
  years : number[] = []
  constructor(
    private data: HomeDataService,
    private yearData: RegionDataService
  ){}
  ngOnInit(): void {
    this.getData()
  }
  private getData(): void{
    this.data.getHomeStats().subscribe({
        next: (data) => {
            this.stats = data;
        }
    });
    this.yearData.getData_Years().subscribe({
      next: (data) => {
        this.years = data;
      }
      }
    )
  }
  

}
