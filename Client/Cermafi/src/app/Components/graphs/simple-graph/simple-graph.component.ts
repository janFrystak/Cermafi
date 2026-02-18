import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { ChartDataService } from '../../../Services/chart-data.service';
import { UIChart } from "primeng/chart" 

@Component({
  standalone: true,
  selector: 'app-simple-graph',
  imports: [CommonModule, UIChart],
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
    this.dataService
    .getChartData_YearsRange("2020", "2025")
    .subscribe({
      next: (res)=>{
  
      this.chartData = {
        labels: res.labels,
        datasets: [
          {
            label: 'Počet uchazečů (Kolo 2)',
            data: res.value_round2,
            borderColor: 'rgb(0, 31, 61)',
            backgroundColor: 'rgb(230, 230, 230)',
            fill: true,
            tension: 0.3
          },
          {
            label: 'Počet uchazečů (Kolo 1)',
            data: res.value_round1,
            borderColor: 'rgb(237, 152, 95)',
            backgroundColor: 'rgb(250, 216, 183)',
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
