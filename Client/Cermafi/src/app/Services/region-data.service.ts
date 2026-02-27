import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { RegionResponse } from '../Models/region-response.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionDataService {
  private baseUrl = environment.db_url
  constructor(private http:HttpClient) {}

  getData_RegionSummary(id: number): Observable<RegionResponse>{
    const myUrl = `${this.baseUrl}/region/summary/${(id)}`
    return this.http.get<RegionResponse>(myUrl)

  }
  getData_Years(): Observable<Number[]>{
    return this.http.get<Number[]>(`${this.baseUrl}/years/`)
  }
  getData_RegionYearSummary(id: number, year: number): Observable<RegionResponse>{
    const myUrl = `${this.baseUrl}/region/summary/${id}/${year}`
    return this.http.get<RegionResponse>(myUrl)
  }
}
