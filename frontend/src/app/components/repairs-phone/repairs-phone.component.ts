import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { RepairsPhoneService } from 'src/app/repairs-phone.service';


@Component({
  selector: 'app-repairs-phone',
  templateUrl: './repairs-phone.component.html',
  styleUrls: ['./repairs-phone.component.css']
})
export class RepairsPhoneComponent {

constructor(private route:ActivatedRoute, private repairsPhone:RepairsPhoneService) { }

http = inject(HttpClient);

repairs:any

id:string = '';
owner: string = ''

ngOnInit(){

  this.id = this.route.snapshot.paramMap.get('id') || '0';
  this.repairsPhone.getRepairs(this.id).subscribe(data => {
    this.repairs = data.data;
    
    this.owner = data.data[0].model + " " + data.data[0].name
  });
}

}
