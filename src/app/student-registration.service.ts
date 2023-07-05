import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService  {

  constructor(private http:HttpClient) { }

public doregistrarion(student: any){
 
 return this.http.post("http://localhost:8080/api/student",student,{responseType:'text'as 'json'})

}
public allstudent(){
  return this.http.get("http://localhost:8080/api/allstudent");
}

public getbyname(name:string){
  return this.http.get("http://localhost:8080/api/student/"+name);
}

public Deletebyrollno(rollno: any){
  return this.http.delete("http://localhost:8080/api/student/"+rollno );
}



  
}
