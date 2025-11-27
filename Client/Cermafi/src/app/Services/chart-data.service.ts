import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChartDataService {
  private baseUrl = 'https://localhost:8080/api/uchazec-single'

  constructor(private http:HttpClient) { }

  getChartData(param: string): Observable<any> {
    const httpParams = new HttpParams().set('param', param);
    return this.http.get(this.baseUrl, {params: httpParams})
  }
}
