import { Component } from '@angular/core';
import { CreateRepairService } from 'src/app/newRepair.service';
import { PhoneService } from 'src/app/phones.service';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-new-repair',
  templateUrl: './new-repair.component.html',
  styleUrls: ['./new-repair.component.css']
})
export class NewRepairComponent {

  clients: any
  phones: any

  //create repair structure.
  amount: string = '';
  observation: string = '';
  phoneId: string = '';


  //id of the selected client
  selectedClientId: string = '';

//alerts to notificate
  alert: string = ''
  errorAlert: string = '';


  constructor(
    private clientsService:ClientsService,
    private phonesService: PhoneService,
    private createRepairService: CreateRepairService
    ) {}



    loadPhonesByClient(){
      console.log(this.selectedClientId);
      this.phonesService.getPhones(this.selectedClientId).subscribe(data => {
        this.phones = data.data;
        console.log(this.phones);
      });
    }

    submitForm(){
      this.createRepairService.createRepair(this.amount, this.observation, this.phoneId)
      .subscribe(
        response =>{
          if(response.status=200){
            this.errorAlert = ''
            this.alert= 'La reparación  fue registrada correctamente'
          }
        },
        error => {    
          console.log(error);
          this.alert = ''
          this.errorAlert = error.error.error || 'La reparación no se pudo registrar correctamente.';
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
      }
      );
    }

}
