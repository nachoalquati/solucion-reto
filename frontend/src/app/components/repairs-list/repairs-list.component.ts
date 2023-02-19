import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { repariListService } from 'src/app/repair-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.css']
})
export class RepairsListComponent {

  constructor(private route:ActivatedRoute, private repairsList:repariListService, private router:Router) { }
  http = inject(HttpClient);

  repairs:any

  ngOnInit(){
    this.repairsList.getRepairs().subscribe(data => {
      this.repairs = data.data;
      console.log(this.repairs);
    },
    error=>{
      console.log(error);
      this.router.navigate(['/login']);
    }
    );

}
}
