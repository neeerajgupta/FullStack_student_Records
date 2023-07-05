import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  students: any;
  name:any;
  p:number=1;
 


  constructor(private service: StudentRegistrationService) {}

  onClick(rollno: Number) {

    let resp = this.service.Deletebyrollno(rollno);
    return resp.subscribe((data) => this.students = data);
  }

  searchclick() {

    let resp = this.service.getbyname(this.name);
    return resp.subscribe((data) => this.students = data);
  }
  ngOnInit() {
    let resp = this.service.allstudent();
    return resp.subscribe((data) => this.students = data);
  }

}





