import { FieldDetail, FieldTrendPoint, FieldSchool, FieldRegion } from '../../../Models/stat-response.interface';
import { FieldDataService } from '../../../Services/field-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skeleton } from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartComponent } from '../../elements/charts/chart-component/chart-component.component';

@Component({
  selector: 'app-single-fiel-page',
  imports: [Skeleton, FormsModule, ChartComponent],
  templateUrl: './single-field-page.page.html',
  styleUrl: './single-field-page.page.css'
})
export class SingleFieldPage implements OnInit {
  fieldData: FieldDetail | null = null;
  filteredSchools: FieldSchool[] = [];
  availableKraje: string[] = [];
  selectedKraj: string = '';
  schoolsLoading = false;

  currentPage = 1;
  totalPages = 1;
  readonly PAGE_SIZE = 20;

  trendChartData: ChartData<'line'> = { datasets: [] };
  trendChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: { legend: { display: true, position: 'top' } },
    scales: { y: { beginAtZero: false } }
  };

  priorityChartData: ChartData<'doughnut'> = { datasets: [] };
  priorityChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    plugins: { legend: { display: true, position: 'bottom' } }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fieldService: FieldDataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    forkJoin({
      meta:          this.fieldService.getData_FieldMeta(id),
      trend:         this.fieldService.getData_FieldTrend(id),
      prioritySplit: this.fieldService.getData_FieldPrioritySplit(id),
      byRegion:      this.fieldService.getData_FieldByRegion(id),
    }).subscribe({
      next: (data) => {
        this.fieldData = { ...data.meta, ...data, schools: [] };
        this.availableKraje = data.byRegion.map((r: FieldRegion) => r.name).sort();
        this.totalPages = Math.ceil(data.meta.schoolCount / this.PAGE_SIZE);

        this.trendChartData = {
          labels: data.trend.map((t: FieldTrendPoint) => String(t.year)),
          datasets: [
            {
              label: 'Kolo 1',
              data: data.trend.map((t: FieldTrendPoint) => t.round1),
              borderColor: 'rgb(237, 152, 95)',
              backgroundColor: 'rgba(250, 216, 183, 0.35)',
              fill: true, tension: 0.3,
              pointRadius: 3, pointHoverRadius: 5, borderWidth: 3
            },
            {
              label: 'Kolo 2',
              data: data.trend.map((t: FieldTrendPoint) => t.round2),
              borderColor: 'rgb(0, 31, 61)',
              backgroundColor: 'rgba(230, 230, 230, 0.35)',
              fill: true, tension: 0.9,
              pointRadius: 2, pointHoverRadius: 4, borderWidth: 2
            }
          ]
        };

        const ps = data.prioritySplit;
        this.priorityChartData = {
          labels: ['1. priorita', '2. priorita', '3. priorita'],
          datasets: [{
            data: [ps.p1, ps.p2, ps.p3],
            backgroundColor: ['#2563EB', '#0D9488', '#7C3AED'],
            borderWidth: 0
          }]
        };

        this.loadSchools();
      },
      error: (err) => console.error(err)
    });
  }

  loadSchools(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || this.schoolsLoading) return;

    this.schoolsLoading = true;
    const offset = (this.currentPage - 1) * this.PAGE_SIZE;

    this.fieldService.getData_FieldSchools(id, this.PAGE_SIZE, offset, this.selectedKraj || undefined).subscribe({
      next: (schools) => {
        this.filteredSchools = schools;
        this.schoolsLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.schoolsLoading = false;
      }
    });
  }

  filterSchools(): void {
    this.currentPage = 1;
    this.totalPages = Math.ceil((this.fieldData?.schoolCount ?? 0) / this.PAGE_SIZE);
    this.loadSchools();
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadSchools();
  }

  goToSchool(id: number): void {
    this.router.navigate(['/skola']);
  }

  scrollToSchools(): void {
    document.getElementById('school-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  regionPct(count: number, regions: FieldRegion[] | undefined): number {
    if (!regions || regions.length === 0) return 0;
    const max = Math.max(...regions.map(r => r.count));
    return Math.round((count / max) * 100);
  }
}