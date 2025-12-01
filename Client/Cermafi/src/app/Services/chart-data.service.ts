import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChartDataService {
  // server runs on http in development; keep scheme consistent with server
  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getChartData_Id(id: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec-single/${encodeURIComponent(id)}`
    return this.http.get(myUrl)
  }
  getChartData_YearRound(year: string, round: string): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec/${encodeURIComponent(year)}/${encodeURIComponent(round)}`
    return this.http.get(myUrl)
  }

  getChartData_YearsRange(start: string, end: string, round: string = '1'): Observable<any> {
    const myUrl = `${this.baseUrl}/uchazec/years?start=${encodeURIComponent(String(start))}&end=${encodeURIComponent(String(end))}&round=${encodeURIComponent(String(round))}`
    return this.http.get(myUrl)
  }
}


