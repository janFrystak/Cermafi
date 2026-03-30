import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, shareReplay, tap } from 'rxjs';
import { RegionResponse } from '../Models/stat-response.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionDataService {
  private baseUrl = environment.back_url
  private years? :Observable<number[]>
  constructor(private http:HttpClient) {}

  getData_RegionSummary(id: number): Observable<RegionResponse>{
    const myUrl = `${this.baseUrl}/region/summary/${(id)}`
    return this.http.get<RegionResponse>(myUrl)

  }
  getData_Years(): Observable<number[]> {
    if (!this.years) {
      return this.http.get<number[]>(`${this.baseUrl}/uchazec/available-years`).pipe(
        shareReplay(1)
      );
    }
    return this.years;
  }

  getData_RegionYearSummary(id: number, year: number): Observable<RegionResponse>{
    const myUrl = `${this.baseUrl}/region/summary/${id}/${year}`
    return this.http.get<RegionResponse>(myUrl)
  }
}
