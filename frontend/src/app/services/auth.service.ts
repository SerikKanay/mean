import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://mean-fgaz.onrender.com';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(baseUrl + '/user/register', { username, email, password }, httpOptions);
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(baseUrl + '/user/login', { email, password }, httpOptions);
  }

  public saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.setItem('token', JSON.stringify(token));
    }
  }

  public getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  // public saveUser(user: any): void {
  //   if (typeof window !== 'undefined') {
  //     localStorage.removeItem('users');
  //     localStorage.setItem('users', JSON.stringify(user));
  //   }
  // }

  // public getUser(): any {
  //   if (typeof window !== 'undefined') {
  //     const user = localStorage.getItem('users');
  //     return user ? JSON.parse(user) : {};
  //   }
  //   return {};
  // }
}
