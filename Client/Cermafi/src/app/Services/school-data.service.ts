import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SchoolModel } from '../Models/object-models.interface';

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {

  private baseUrl = environment.back_url
  constructor(private http:HttpClient) {}

  getData_Fields(): Observable<SchoolModel[]> {
    return this.http.get<SchoolModel[]>(`${this.baseUrl}/school/all`);
  }

}
