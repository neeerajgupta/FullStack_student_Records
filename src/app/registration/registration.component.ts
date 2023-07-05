import { Component, OnInit } from '@angular/core';

import { StudentRegistrationService } from '../student-registration.service';
import { Student } from '../Student';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  student:Student=new Student("","",0,0," ");
  message:any
  constructor(private service:StudentRegistrationService,private formbuilder:FormBuilder){
  
  }
  ngOnInit() {
    // throw new Error('Method not implemented.');
  }

  public registerNow(){
    let resp=this.service.doregistrarion(this.student);
   resp.subscribe((data)=>this.message=data);
   
  }

}
