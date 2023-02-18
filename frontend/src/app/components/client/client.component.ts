import { Component, Input } from '@angular/core';
import {Client} from './../../models/client.model'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

 
  @Input() client: Client ={
    id: 0,
    email: '',
    name: '',
    phone: ''
  }
}
