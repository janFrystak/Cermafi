import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
  permissionLevel:number = 0

  constructor(private http: HttpClient) {
    this.checkAuth().subscribe()
    
}

  isLoggedIn():boolean {
    return this.loggedIn.getValue()
  }
  login(credentials: any) {
    return this.http.post<any>('http://localhost:8080/admin/login', credentials, {
      withCredentials: true
    }).pipe(
      tap(res => {
        if (res.success) this.loggedIn.next(true);
      })
    );
  }

  logout() {
  return this.http.post('http://localhost:8080/admin/logout', {}, {
    withCredentials: true
  }).pipe(
    tap(() => {
      this.loggedIn.next(false);
    }));
  }

  checkAuth() {
    return this.http.get<any>('http://localhost:8080/admin/me', {
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