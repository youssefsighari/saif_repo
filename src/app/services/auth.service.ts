
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8089'; // Replace with your actual API URL
  currentUser: any; // Variable to store user data
  isAuthenticated = false; // Variable to track authentication state

  constructor(private http: HttpClient) {
    this.currentUser=localStorage.getItem('currentUser');
    console.log(this.currentUser);
    

   }
  saveEmployee(employeeData: any): Observable<any> {
    
    return this.http.post<any>(`${this.apiUrl}/api/v1/save`, employeeData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} - ${error.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v1/login`, credentials).pipe(
      tap(response => {
        console.log(response);
        
        if (response && response.status == true) {          
          this.currentUser = response.employee;
          console.log(this.currentUser);
          localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
          this.isAuthenticated = true;
          console.log('Login successful');
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        throw error; 
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    this.isAuthenticated = false;
    localStorage.removeItem('currentUser');
    console.log('Logged out');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getUserData(): any {
    return this.currentUser;
  }
}