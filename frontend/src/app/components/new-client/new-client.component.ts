import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateClientService } from 'src/app/newClient.service';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {

  alert: string = '';
  errorAlert: string = '';

  email: string = '';
  name: string = '';
  phone: string = '';

  constructor(private createClientService:CreateClientService, private router:Router ) {}


  submitForm(){
    console.log('email: '+this.email);
    console.log('name: '+this.name);
    console.log('phone: '+this.phone);
    
    this.createClientService.createClient(this.email, this.name, this.phone)
    .subscribe(
      response =>{
        if(response.status=200){
          this.errorAlert = ''
          this.alert= 'El cliente fue creado correctamente'
        }
      },
      error => {    
        console.log(error.error.error);
        this.alert = ''
        this.errorAlert = error.error.error || 'Error al crear cliente.';
      }
    );
  }
  ngOnInit(){
    // this.clientsService.getClients().subscribe(data => {
    //   this.clients = data.data;
    //   console.log(this.clients);
    // },
    // error=>{
    //   console.log(error);
    //   this.router.navigate(['/login']);
    // }
    // );
  }

}
