import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChartDataService {
  private baseUrl = 'https://localhost:8080'

  constructor(private http:HttpClient) { }

  getChartData_Id(param: string): Observable<any> {
    const myUrl = this.baseUrl + "uchatec-single/"
    const httpParams = new HttpParams().set('param', param);
    return this.http.get(myUrl, {params: httpParams})
  }
  getChartData_YearRound(param: string): Observable<any> {
    const myUrl = this.baseUrl + "uchatec/:id/:year/:kolo"
    const httpParams = new HttpParams().set('param', param);
    return this.http.get(myUrl, {params: httpParams})
  }
}


