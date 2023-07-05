import { Component, OnInit } from '@angular/core';
import { Parking } from '../Parking';
import { ParkingservicesService } from '../services/parkingservices.service';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  parking: Parking = new Parking("", "", "", "", "", "");
  message: any
  parkings: any
  p: any

  constructor(private service: ParkingservicesService) { }


  ngOnInit(): void {

  }
  allrec() {
    let resp = this.service.allparking();
    return resp.subscribe((data) => this.parkings = data);
  }


  public registerNow() {

    let resp = this.service.doregistrarion(this.parking);

    resp.subscribe((data) => this.message = data);

  }






  //parking markout 



  markOut(name: any) {
    alert("hello parking");
    let resp = this.service.allparking();
    return resp.subscribe((data) => this.parkings = data);

  }


  //Delete

  delete(id: number) {
    
      let resp = this.service.Deletebyid(id);
      return resp.subscribe((data) => this.parkings = data);
    
   

  }

  //update

  // update(id: number) {
  //   alert("you want update parking");
  //   let resp = this.service.UpdateByid(id);
  //   return resp.subscribe((data) => this.parkings = data);

  // }



  //search by name
  name:any;
  searchclick(){
    let resp = this.service.getbyname(this.name);
    return resp.subscribe((data) => this.parkings = data);

  }


}

