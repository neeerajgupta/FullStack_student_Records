import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormsModule,FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

public loginForm!:FormGroup;

  constructor( private formbuilder:FormBuilder,private https:HttpClient,private router:Router){}


  ngOnInit(): void {
   this.loginForm=this.formbuilder.group({
    email:[''],
    password:['']

   })
  }

  logindata(){
    this.https.get<any>("http://localhost:3000/signinusers").subscribe
    (res=>{
      const user=res.find((a:any) => {
        return a.email===this.loginForm.value.email &&a.password===this.loginForm.value.password
      })
      if(user){
        alert("login succssfully!!");
        this.loginForm.reset();
        this.router.navigate(['dashbord']);
      }
      else{
        alert("User Not Found!!")
      }
      },err=>{
        alert("somthhings went wrongs!!")

    })

  }

}
