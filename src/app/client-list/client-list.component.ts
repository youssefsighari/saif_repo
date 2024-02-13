import { Component, OnInit } from '@angular/core';
import { Client } from '../client'
import { ClientService } from '../client.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients:  Client[] = [];
   
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
   this.getClients();
 }

private getClients(){
  this.clientService.getClientList().subscribe(data=>{
    this.clients = data;
  }),
  (error: HttpErrorResponse) => {
    alert (error.message);
  }

};


}
