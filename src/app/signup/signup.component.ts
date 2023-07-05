import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormsModule,FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm :any ;

  constructor(private formbuilder:FormBuilder ,private https:HttpClient ,private router:Router){}



  ngOnInit():void {
    this.signupForm=this.formbuilder.group({
      name:[''],
      email:[''],
       password:[''],
    })
  }

  signup() {
    this.https.post("http://localhost:3000/signinusers", this.signupForm.value).subscribe(
      resp => {
        alert("successful");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      err => {
        alert("something is wrong");
        this.signupForm.reset();
      }
    );
  }
  

 
  }


