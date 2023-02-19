import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../../models/client.model'
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

http = inject(HttpClient);

clients: any

constructor(private clientsService: ClientsService) { }




ngOnInit(){
  console.log('asd')
  this.clientsService.getClients().subscribe(data => {
    this.clients = data.data;
    console.log(this.clients);
  });
}
  
}
