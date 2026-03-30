import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, shareReplay } from 'rxjs';
import { ChartResponse } from '../Models/stat-response.interface';
import { HomeResponse } from '../Models/stat-response.interface';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})


export class HomeDataService {
  
  private baseUrl = environment.back_url
  private years? :Observable<number[]>

  constructor(private http:HttpClient) {}


  getChartData_Year_Round(year: string, round: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec/${encodeURIComponent(year)}/${encodeURIComponent(round)}`
    return this.http.get(myUrl)
  }

  getChartData_YearsRange(start: string, end: string): Observable<ChartResponse> {
    return this.http.get<ChartResponse>(`${this.baseUrl}/uchazec/years/${start}/${end}`);
  }

  getHomeStats(): Observable<HomeResponse>{
    return this.http.get<HomeResponse>(`https://cermafi-backend-production.up.railway.app/stats/summary`)
  }

  getData_Years(): Observable<number[]> {
  if (!this.years) {
    return this.http.get<number[]>(`${this.baseUrl}/uchazec/available-years`).pipe(
      shareReplay(1)
    );
  }
  return this.years;
}
  
}


