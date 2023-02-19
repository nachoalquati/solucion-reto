import { Component, OnInit, Inject } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Router } from '@angular/router';
import { CreatePhoneService } from 'src/app/newPhone.service';

@Component({
  selector: 'app-new-phone',
  templateUrl: './new-phone.component.html',
  styleUrls: ['./new-phone.component.css']
})
export class NewPhoneComponent {

clients: any

model: string = '';
observation: string = '';
clientId: number = 0;

alert: string = '';
errorAlert: string = '';

constructor(private clientsService:ClientsService, private router:Router, private createPhoneService: CreatePhoneService ) {}

submitForm(){
  console.log('Model: '+this.model);
  console.log('Observation: '+this.observation);
  console.log('ClientId: '+this.clientId);
  
  this.createPhoneService.login(this.model, this.observation, this.clientId)
  .subscribe(
    response =>{
      if(response.status=200){
        this.errorAlert = ''
        this.alert= 'El teléfono fue creado correctamente'
      }
    },
    error => {    
      console.log(error);
      this.alert = ''
      this.errorAlert = error.error.error || 'El teléfono no se pudo registrar correctamente.';
    }
  );
}


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