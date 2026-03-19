import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdminModel } from '../Models/object-models.interface';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private base = environment.db_url;
  private opts = { withCredentials: true };

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(`${this.base}/admin/accounts`, this.opts);
  }

  createAccount(username: string, password: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(`${this.base}/admin/account`, { username, password }, this.opts);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.base}/admin/account/${id}`, this.opts);
  }

  changePassword(id: number, password: string): Observable<any> {
    return this.http.patch(`${this.base}/admin/account/${id}/password`, { password }, this.opts);
  }
}