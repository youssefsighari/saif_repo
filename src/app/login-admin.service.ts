import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {
  private baseURL = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  loginAdmin(admin: Admin):Observable<object>{
    let u=this.baseURL+'login'
    return this.httpClient.post(`${u}`,admin);
  }
}
