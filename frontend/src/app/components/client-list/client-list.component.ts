import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../../models/client.model'
import { ClientsService } from 'src/app/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

http = inject(HttpClient);

clients: any

constructor(private router:Router, private clientsService: ClientsService) { }


ngOnInit(){
  this.clientsService.getClients().subscribe(data => {
    this.clients = data.data;
    console.log(this.clients);
  },
  error=>{
    console.log(error);
    this.router.navigate(['/login']);
  }
  );



}
  
}
