import { Component, OnInit } from '@angular/core';
import { ParkingComponent } from '../parking/parking.component';
import { SearchDeleteComponent } from '../search-delete/search-delete.component';
import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  comp:any;
 constructor(private rough:Router){}
  
  logoutbtn(){
    this.rough.navigate(['signin'])

  }

  PArking(comp:any){
    if(comp==="parking"){
      this.comp=ParkingComponent;
    }

  }
  serarchdelete(comp:any){
    if(comp==="serach"){
      this.comp=SearchDeleteComponent;
    }

  }

  register(comp:any){
    if(comp==="register"){
      this.comp=RegistrationComponent;
    }

  }


}
