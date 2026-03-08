import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { FieldModel } from '../Models/object-models.interface';

@Injectable({
  providedIn: 'root'
})
export class FieldDataService {
  private baseUrl = environment.db_url
  constructor(private http:HttpClient) {}

  getData_Fields(): Observable<FieldModel[]>{
    return this.http.get<FieldModel[]>(`${this.baseUrl}/fields`)
  }
}


