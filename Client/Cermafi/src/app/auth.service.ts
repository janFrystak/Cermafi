import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
  permissionLevel:number = 0
  baseUrl = environment.db_url

  constructor(private http: HttpClient) {
    this.checkAuth().subscribe()
    
}

  isLoggedIn():boolean {
    return this.loggedIn.getValue()
  }
  login(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/admin/login`, credentials, {
      withCredentials: true
    }).pipe(
      tap(res => {
        if (res.success) this.loggedIn.next(true);
      })
    );
  }

  logout() {
  return this.http.post(`${this.baseUrl}/admin/logout`, {}, {
    withCredentials: true
  }).pipe(
    tap(() => {
      this.loggedIn.next(false);
    }));
  }

  checkAuth() {
    return this.http.get<any>(`${this.baseUrl}/admin/me`, {
      withCredentials: true
    }).pipe(
      tap((res) => {
        this.loggedIn.next(true),
        this.permissionLevel = res.permissionLevel;
      }),
        
      catchError(() => {
        this.loggedIn.next(false);
        return of(null);
      })
    );
  }

  isRoot() :boolean{
    return this.permissionLevel == 0
  }

  
}