import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { ChartResponse } from '../Models/chart-response.interface';

@Injectable({providedIn: 'root'})


export class ChartDataService {
  // server runs on http in development; keep scheme consistent with server
  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) {}

  getChartData_Id(id: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec-single/${encodeURIComponent(id)}`
    return this.http.get(myUrl)
  }
  getChartData_YearRound(year: string, round: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec/${encodeURIComponent(year)}/${encodeURIComponent(round)}`
    return this.http.get(myUrl)
  }

  getChartData_RegionId(id: number): Observable<any>{
    const myUrl = `${this.baseUrl}/region/${encodeURIComponent(id)}}`
    return this.http.get(myUrl).pipe(tap(data=> console.log("Service data: ", data)))
  }

  getChartData_YearsRange(start: string, end: string, round: string = '1'): Observable<ChartResponse> {
    const params = new HttpParams()
      .set("start", start)
      .set("end", end)
      .set("round", round)

    return this.http.get<ChartResponse>(`${this.baseUrl}/uchazec/years`, { params })
  }
}


