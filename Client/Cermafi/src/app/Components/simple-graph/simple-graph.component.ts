import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts'
import { ChartDataService } from '../../Services/chart-data.service';

@Component({
  selector: 'app-simple-graph',
  imports: [BaseChartDirective],
  templateUrl: './simple-graph.component.html',
  styleUrl: './simple-graph.component.css'
})

export class SimpleGraphComponent implements OnInit{
  chartData: ChartData<'line'> = { labels: [], datasets: []};
  
  constructor(private dataService: ChartDataService) {}

 

  
  ngOnInit(): void {
    this.dataService.getChartData('5').subscribe((data: any) => {
      this.chartData = {
        labels: data.labels,
        datasets: [
          { label: 'Year', data: data.values}
        ]
      }
    })
  }
}
