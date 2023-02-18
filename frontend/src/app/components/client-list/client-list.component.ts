import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../../models/client.model'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

http = inject(HttpClient);

clients: Client[] = []

ngOnInit(){
  this.http.get<Client[]>('/clients/list')
  .subscribe((data) =>{
    console.log(data);
    this.clients = data
  })
}
  
}
