import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private baseURL = "http://localhost:8080/";
  constructor(private httpClient: HttpClient) { }

  getClientList(): Observable<Client[]>{
    let u=this.baseURL+'api/v1/getAll'
    
    return this.httpClient.get<Client[]>(`${u}`);
  }
  
  createClient(client: Client): Observable<object>{
    let u=this.baseURL+'api/v1/getAll'

     return this.httpClient.post(`${u}`,client);

  }

  getClientById(id: number): Observable<Client>{
    let u=this.baseURL+'api/v1/client'
    
    return this.httpClient.get<Client>(`${u}/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Object>{
    let u=this.baseURL+'api/v1/client'
    return this.httpClient.put(`${u}/${id}`, client);
  }

  deleteClient(id: number): Observable<Object>{
    let u=this.baseURL+'api/v1/client'
    return this.httpClient.delete(`${u}/${id}`);
  }


}
