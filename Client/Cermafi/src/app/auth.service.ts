import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuth().subscribe()
    this.http.get<any>('http://localhost:8080/api/me', { withCredentials: true }).pipe(
      tap(res => this.loggedIn.next(true)),
      catchError(() => {
        this.loggedIn.next(false);
        return of(null);
      })
    ).subscribe();
}

  login(credentials: any) {
    return this.http.post<any>('http://localhost:8080/login', credentials, {
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
    return this.http.get<any>('http://localhost:8080/api/me', {
      withCredentials: true
    }).pipe(
      tap(() => this.loggedIn.next(true)),
      catchError(() => {
        this.loggedIn.next(false);
        return of(null);
      })
    );
  }

  
}