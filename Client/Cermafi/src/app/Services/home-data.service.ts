import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, shareReplay } from 'rxjs';
import { ChartResponse } from '../Models/chart-response.interface';
import { HomeResponse } from '../Models/stat-response.interface';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})


export class HomeDataService {
  
  private baseUrl = environment.db_url
   private years? :Observable<number[]>

  constructor(private http:HttpClient) {}

  getChartData_Id(id: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec-single/${encodeURIComponent(id)}`
    return this.http.get(myUrl)
  }
  getChartData_Year_Round(year: string, round: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec/${encodeURIComponent(year)}/${encodeURIComponent(round)}`
    return this.http.get(myUrl)
  }

  getChartData_YearsRange(start: string, end: string): Observable<ChartResponse> {
    const params = new HttpParams()
      .set("start", start)
      .set("end", end)
    return this.http.get<ChartResponse>(`${this.baseUrl}/uchazec/years`, { params })
  }

  getHomeStats(): Observable<HomeResponse>{
    return this.http.get<HomeResponse>(`${this.baseUrl}/stats/summary`)
  }

  getData_Years(): Observable<number[]>{
      if (!this.years){
         return this.http.get<number[]>(`${this.baseUrl}/years`).pipe(
          shareReplay(1)
         )
      }
      return this.years 
  }
  
}


