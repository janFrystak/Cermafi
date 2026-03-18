import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { HomeDataService } from '../../../../Services/home-data.service';
import { UIChart } from "primeng/chart" 
import { RegionDataService } from '../../../../Services/region-data.service';

@Component({
  standalone: true,
  selector: 'app-home-graph',
  imports: [CommonModule, UIChart],
  templateUrl: './home-graph.component.html',
  styleUrls: ['./home-graph.component.css']
})

export class HomeGraphComponent implements OnInit{
  avYears: number[] | null = null
  chartData: ChartData<"line"> = {
    datasets: []
  }
  chartOptions: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        min: 100000,
      }
    },
    plugins: {
      legend: {display: true, position: "top"}
    }
  };
  
  constructor(
    private dataService: HomeDataService,
    private yearService: RegionDataService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  

  private loadData(): void {
    this.yearService.getData_Years().subscribe({
      next: (years) => {
        this.avYears = years
        const firstYear = years[0]
        const lastYear = years[years.length - 1]

        this.dataService.getChartData_YearsRange(String(firstYear), String(lastYear)).subscribe({
          next: (res)=>{
            
            const dataMinRound1 = Math.min(...res.value_round1);
            const dataMinRound2 = Math.min(...res.value_round2);

            this.chartOptions = {
              ...this.chartOptions,
              scales: {
                y: {
                  type: 'linear',
                  position: 'left',
                  beginAtZero: false,
                  title: { display: true, text: 'Kolo 1' },
                  min: Math.floor(dataMinRound1 * 0.95) 
                },
                y2: {
                  type: 'linear',
                  position: 'right',
                  beginAtZero: false,
                  grid: { drawOnChartArea: false },
                  title: { display: true, text: 'Kolo 2' },
                 
                  min: Math.floor(dataMinRound2 * 0.80) 
                }
              }
            }

            this.chartData = {
              
              labels: res.labels,
              datasets: [
                {
                  label: 'Počet uchazečů (Kolo 2)',
                  data: res.value_round2,
                  borderColor: 'rgb(0, 31, 61)',
                  backgroundColor: 'rgb(230, 230, 230, 0.35)',
                  fill: true,
                  tension: 0.9,
                  yAxisID: 'y2',
                  pointRadius: 2, 
                  pointHoverRadius: 4,
                  borderWidth: 2
                },
                {
                  label: 'Počet uchazečů (Kolo 1)',
                  data: res.value_round1,
                  borderColor: 'rgb(237, 152, 95)',
                  backgroundColor: 'rgb(250, 216, 183, 0.35)',
                  fill: true, 
                  tension: 0.3,
                  yAxisID: 'y',
                  pointRadius: 3, 
                  pointHoverRadius: 5,
                  borderWidth: 3
                }
                
              ]
            };
        },
        error: (err) => console.error("Chyba při načtení dat grafu: ", err)
        });
      }

    })
    
    
  }
}
