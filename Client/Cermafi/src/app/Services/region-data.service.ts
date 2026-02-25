import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { RegionResponse } from '../Models/region-response.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionDataService {
  private baseUrl = 'http://localhost:8080'
  private availableYears:number[] = [2025, 2024]
  constructor(private http:HttpClient) {}

  getData_RegionSummary(id: number): Observable<RegionResponse>{
    const myUrl = `${this.baseUrl}/region/summary/${(id)}`
    return this.http.get<RegionResponse>(myUrl)

  }

  getData_RegionYearSummary(id: number, year: number): Observable<RegionResponse>{
    const myUrl = `${this.baseUrl}/region/summary/${id}/${year}`
    return this.http.get<RegionResponse>(myUrl)
  }
}
