import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FieldModel } from '../Models/object-models.interface';
import { FieldDetail } from '../Models/stat-response.interface';
import { FieldTrendPoint} from '../Models/stat-response.interface';
import { FieldPrioritySplit } from '../Models/stat-response.interface';
import { FieldRegion } from '../Models/stat-response.interface';
import { FieldSchool } from '../Models/stat-response.interface';


@Injectable({
  providedIn: 'root'
})
export class FieldDataService {
  private baseUrl = environment.back_url
  

  constructor(
    private http:HttpClient) {}

  getData_Fields(): Observable<FieldModel[]>{
    return this.http.get<FieldModel[]>(`${this.baseUrl}/field/all`)
  }

  getData_FieldMeta(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/field/detail/${id}/meta`);
  }

  getData_FieldTrend(id: string): Observable<FieldTrendPoint[]> {
    return this.http.get<FieldTrendPoint[]>(`${this.baseUrl}/field/detail/${id}/trend`);
  }

  getData_FieldPrioritySplit(id: string): Observable<FieldPrioritySplit> {
    return this.http.get<FieldPrioritySplit>(`${this.baseUrl}/field/detail/${id}/priority-split`);
  }

  getData_FieldByRegion(id: string): Observable<FieldRegion[]> {
    return this.http.get<FieldRegion[]>(`${this.baseUrl}/field/detail/${id}/by-region`);
  }

  getData_FieldSchools(id: string, limit:number = 20, offset:number = 0, kraj?:string): Observable<FieldSchool[]> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);

    const p = kraj ? params.set('kraj', kraj) : params;
    return this.http.get<FieldSchool[]>(`${this.baseUrl}/field/detail/${id}/schools`, { params: p });
};
  
  
}


