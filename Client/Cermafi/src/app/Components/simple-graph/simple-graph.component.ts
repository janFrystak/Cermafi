import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
import { CommonModule } from '@angular/common';
import { ChartDataService } from '../../Services/chart-data.service';
import { forkJoin } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-simple-graph',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './simple-graph.component.html',
  styleUrls: ['./simple-graph.component.css']
})

export class SimpleGraphComponent implements OnInit{

  public chartData: ChartData<"line"> = {
    datasets: []
  }

  public chartOptions: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    },
    plugins: {
      legend: {display: true, position: "top"}
    }
  };

  

  constructor(private dataService: ChartDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.dataService.getChartData_YearsRange("2020", "2025", '1').subscribe({
      next: (res)=>{
  
      this.chartData = {
        labels: res.labels,
        datasets: [
          {
            label: 'Počet uchazečů',
            data: res.values,
            borderColor: 'rgba(54,162,235,1)',
            backgroundColor: 'rgba(54,162,235,0.2)',
            fill: true, 
            tension: 0.3
          }
        ]
      };
    },
    error: (err) => console.error("Chyba při načtení dat grafu: ", err)
    });
  }
}
