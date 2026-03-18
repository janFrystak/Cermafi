import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [UIChart],
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.css'
})
export class ChartComponent {
  @Input() type: ChartType = 'line';
  @Input() data: ChartData = { datasets: [] };
  @Input() options: ChartOptions = {};
}
