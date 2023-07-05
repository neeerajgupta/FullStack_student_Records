import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingservicesService {

  constructor(private http:HttpClient) { }

  public doregistrarion(student: any){
 
    return this.http.post("http://localhost:8080/api/onev",student,{responseType:'text'as 'json'})
   
   }
   public allparking(){
     return this.http.get("http://localhost:8080/api/all");
   }

   public getbyname(name :any){
    
    return this.http.get("http://localhost:8080/api/one/"+name );
  }

  public Deletebyid(id :any){
    
    return this.http.delete("http://localhost:8080/api/oned/"+id );
  }

  // public UpdateByid(id :any){
    
  //   return this.http.put("http://localhost:8080/api/oneu/"+id );
  // }
}
