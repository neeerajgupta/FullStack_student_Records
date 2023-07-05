import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { StudentRegistrationService } from './student-registration.service';
import{ HttpClientModule }from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { ParkingComponent } from './parking/parking.component';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchDeleteComponent,
    ParkingComponent,
    SignupComponent,
    SigninComponent,
    DashbordComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatListModule,
    MatSelectModule,
    NgbModule,
    ReactiveFormsModule






  ],
  providers: [StudentRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
