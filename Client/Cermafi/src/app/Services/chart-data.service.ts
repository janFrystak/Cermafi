import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { ChartResponse } from '../Models/chart-response.interface';
import { RegionRespone } from '../Models/region-response.interface';

@Injectable({providedIn: 'root'})


export class ChartDataService {
  // server runs on http in development; keep scheme consistent with server
  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) {}

  getChartData_Id(id: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec-single/${encodeURIComponent(id)}`
    return this.http.get(myUrl)
  }
  getChartData_Year_Round(year: string, round: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec/${encodeURIComponent(year)}/${encodeURIComponent(round)}`
    return this.http.get(myUrl)
  }

  getData_RegionId(id: number): Observable<RegionRespone>{
    const myUrl = `${this.baseUrl}/region/${encodeURIComponent(id)}}`
    return this.http.get<RegionRespone>(myUrl)
  }

  getChartData_YearsRange(start: string, end: string): Observable<ChartResponse> {
    const params = new HttpParams()
      .set("start", start)
      .set("end", end)
      

    return this.http.get<ChartResponse>(`${this.baseUrl}/uchazec/years`, { params })
  }
  
}


