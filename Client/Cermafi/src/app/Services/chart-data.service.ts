import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChartDataService {
  private baseUrl = 'https://localhost:8080'

  constructor(private http:HttpClient) { }

  getChartData_Id(id: string): Observable<any> {
    const myUrl = this.baseUrl + "/uchazec-single/:id"
    const httpParams = new HttpParams().set('id', id);
    return this.http.get(myUrl, {params: httpParams})
  }
  getChartData_YearRound(year: string, round: string): Observable<any> {
    const myUrl = this.baseUrl + "/uchazec/:year/:kolo"
    const httpParams = new HttpParams()
      .set('year', year)
      .set('round', round)
    return this.http.get(myUrl, {params: httpParams})
  }
}


