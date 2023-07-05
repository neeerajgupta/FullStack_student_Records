import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { ParkingComponent } from './parking/parking.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
 {path:"", redirectTo:"signin",pathMatch:"full"},
 {path:"signin",component:SigninComponent},
 {path:"signup",component:SignupComponent},


 
 {path:"dashbord",component:DashbordComponent},


  {path:"register",component:RegistrationComponent},
  {path:"search",component:SearchDeleteComponent},
  {path:"parking",component:ParkingComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
